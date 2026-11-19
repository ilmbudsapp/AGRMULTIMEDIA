import os

file_path = r'C:\Users\User\Desktop\SITI WEB E APLICAZZIONI\CURSOR Ai\AGRMULTIMEDIA\client\src\lib\i18n.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Keep only first 1352 lines
lines = lines[:1352]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"✓ Truncated {file_path} to 1352 lines")
