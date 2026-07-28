"""Generate loop-friendly medieval ambient WAV (stdlib only)."""
import math
import struct
import wave
from pathlib import Path

SR = 44100
DURATION = 48  # seconds — seamless-feel loop
OUT = Path(__file__).resolve().parents[1] / "assets" / "audio" / "medieval-ambient.wav"

NOTES = {
    "A3": 220.0, "C4": 261.63, "D4": 293.66, "E4": 329.63,
    "F4": 349.23, "G4": 392.0, "A4": 440.0, "C5": 523.25,
    "D5": 587.33, "E5": 659.25, "G5": 783.99, "A5": 880.0,
}

# Slow medieval A-minor melody (note, beats) — ~48s at 54 BPM
MELODY = [
    ("E5", 2), ("G5", 2), ("A5", 3), ("G5", 2), ("E5", 2),
    ("D5", 3), ("C5", 2), ("A4", 3), ("C5", 2), ("D5", 2),
    ("E5", 3), ("G5", 2), ("A5", 4), ("G5", 2), ("E5", 2),
    ("D5", 2), ("C5", 2), ("A4", 4), ("G4", 2), ("A4", 3),
    ("C5", 2), ("D5", 2), ("E5", 3), ("A5", 3), ("G5", 2),
    ("E5", 2), ("D5", 2), ("C5", 4),
]

BPM = 54
BEAT_SEC = 60.0 / BPM
PAD = [("A2", 55.0), ("E3", 82.41), ("A3", 110.0), ("C4", 130.81)]


def pluck_envelope(t, dur):
    if t < 0 or t >= dur:
        return 0.0
    atk = min(0.04, dur * 0.12)
    if t < atk:
        return t / atk
    rel = t - atk
    tail = max(dur - atk, 0.001)
    return math.exp(-3.8 * rel / tail)


def build_events():
    events = []
    t = 0.0
    for note, beats in MELODY:
        events.append((t, NOTES[note], beats * BEAT_SEC))
        t += beats * BEAT_SEC
    return events


def sample_at(t, events):
    s = 0.0

    # Warm pad
    for name, freq in PAD:
        wobble = 1.0 + 0.004 * math.sin(t * 0.31 + freq * 0.001)
        s += 0.07 * math.sin(2 * math.pi * freq * wobble * t)
        s += 0.025 * math.sin(2 * math.pi * freq * 2 * t)

    # Melody — harp-like triangle partials
    for start, freq, dur in events:
        local = t - start
        env = pluck_envelope(local, dur)
        if env <= 0:
            continue
        s += env * 0.34 * math.sin(2 * math.pi * freq * t)
        s += env * 0.12 * math.sin(2 * math.pi * freq * 2 * t)
        s += env * 0.05 * math.sin(2 * math.pi * freq * 3 * t)

    # Soft wind bed
    s += 0.018 * math.sin(t * 0.7) * math.sin(t * 37.1)

    # Occasional low pulse
    pulse = max(0.0, math.sin(2 * math.pi * t / 12.0))
    s += 0.06 * pulse * math.sin(2 * math.pi * 55 * t) * math.exp(-0.5 * (t % 12))

    return s


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    events = build_events()
    total = int(SR * DURATION)
    raw = bytearray()

    for i in range(total):
        t = i / SR
        # Loop melody in time
        loop_t = t % (events[-1][0] + events[-1][2] if events else DURATION)
        s = sample_at(loop_t, events)
        # Gentle master limiter
        s = max(-0.92, min(0.92, s * 0.88))
        val = int(s * 32767)
        raw += struct.pack("<h", val)

    with wave.open(str(OUT), "w") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SR)
        wf.writeframes(raw)

    print(f"Wrote {OUT} ({len(raw) / 1024 / 1024:.2f} MB)")


if __name__ == "__main__":
    main()
