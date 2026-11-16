export function Motif({ side }: { side: "left" | "right" }) {
  const leaves = side === "left";
  return (
    <svg className={`motif motif-${side}`} viewBox="0 0 160 460" fill="none" aria-hidden="true">
      {leaves ? (
        <>
          <path d="M78 430c8-70 6-150-8-230 18 8 48 6 78-18" stroke="currentColor" strokeWidth="1.15" />
          <path d="M70 250c-28-8-48-28-58-58 34 6 58 22 74 52" stroke="currentColor" strokeWidth="1.15" />
          <path d="M74 196c22-24 58-34 86-28-8 28-28 48-62 58" stroke="currentColor" strokeWidth="1.15" />
          <path d="M68 320c-36 2-58-16-72-42 32 14 56 24 80 28" stroke="currentColor" strokeWidth="1.15" />
          <path d="M82 148c8-36 2-78-18-112" stroke="currentColor" strokeWidth="1.15" />
        </>
      ) : (
        <>
          <path d="M48 440c6-120 2-220-10-320" stroke="currentColor" strokeWidth="1.15" />
          <path d="M78 440c10-90 28-180 22-300" stroke="currentColor" strokeWidth="1.15" />
          <path d="M108 440c2-100-8-190-28-280" stroke="currentColor" strokeWidth="1.15" />
          <path d="M64 250c-26-18-40-48-36-84" stroke="currentColor" strokeWidth="1.15" />
          <path d="M96 210c24-16 46-22 70-18" stroke="currentColor" strokeWidth="1.15" />
          <path d="M86 150c-8-28-6-58 8-92" stroke="currentColor" strokeWidth="1.15" />
        </>
      )}
    </svg>
  );
}
