import os
import re

def remove_languages_from_i18n(file_path):
    print(f"Processing: {file_path}")
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    new_lines = []
    skip = False
    brace_count = 0
    found_translations_start = False
    
    for i, line in enumerate(lines):
        trimmed = line.strip()
        
        # Skip import for i18n-it
        if 'import' in trimmed and 'i18n-it' in trimmed:
            print(f"Skipping import at line {i + 1}")
            continue
        
        # Check if we found the translations object start
        if 'export const translations' in trimmed:
            found_translations_start = True
        
        # Detect start of sr: { or sq: {
        if found_translations_start and not skip:
            if trimmed == 'sr: {':
                print(f"Found sr: at line {i + 1}")
                skip = True
                brace_count = 1
                continue
            elif trimmed == 'sq: {':
                print(f"Found sq: at line {i + 1}")
                skip = True
                brace_count = 1
                continue
        
        # If skipping, count braces to find the end
        if skip:
            for char in line:
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
            
            # When brace_count reaches 0, we've closed the object
            if brace_count == 0:
                print(f"Closed object at line {i + 1}")
                skip = False
                # Skip the comma on the next line if it exists
                if i + 1 < len(lines) and lines[i + 1].strip() == ',':
                    lines[i + 1] = ''  # Mark for skipping
            continue
        
        # Skip it: itTranslations line
        if trimmed.startswith('it:') and 'itTranslations' in trimmed:
            print(f"Skipping it: itTranslations at line {i + 1}")
            # Also remove the comma from previous line if it's the last entry
            if new_lines and new_lines[-1].rstrip().endswith(','):
                new_lines[-1] = new_lines[-1].rstrip()[:-1] + new_lines[-1][len(new_lines[-1].rstrip()):]
            continue
        
        new_lines.append(line)
    
    new_content = '\n'.join(new_lines)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ Cleaned: {file_path}\n")

# Process both files
files = [
    r'C:\Users\User\Desktop\SITI WEB E APLICAZZIONI\CURSOR Ai\AGRMULTIMEDIA\client\src\lib\i18n.ts',
    r'C:\Users\User\Desktop\SITI WEB E APLICAZZIONI\CURSOR Ai\AGRMULTIMEDIA\agrmultimedia-standalone\src\lib\i18n.ts'
]

for file_path in files:
    remove_languages_from_i18n(file_path)

print('Done!')
