# Push AGRMULTIMEDIA to GitHub → triggers Vercel deploy
# Double-click or run: powershell -ExecutionPolicy Bypass -File scripts/push-deploy.ps1

$ErrorActionPreference = "Stop"
$RepoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $RepoRoot

$GitDirs = @(
    "C:\Program Files\Git\cmd",
    "C:\Program Files (x86)\Git\cmd",
    "$env:LOCALAPPDATA\Programs\Git\cmd",
    "$env:LOCALAPPDATA\cursor-agent-tools\PortableGit\cmd"
)

$GitFound = $false
foreach ($dir in $GitDirs) {
    if (Test-Path (Join-Path $dir "git.exe")) {
        $env:PATH = "$dir;" + $env:PATH
        $GitFound = $true
        Write-Host "Git: $dir\git.exe" -ForegroundColor Green
        break
    }
}

if (-not $GitFound) {
    Write-Host ""
    Write-Host "Git nije instaliran. Instaliraj Git for Windows:" -ForegroundColor Red
    Write-Host "  https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "  (default opcije, ukljuci 'Git from command line')" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Pritisni Enter za izlaz"
    exit 1
}

Write-Host ""
git --version
Write-Host ""
git status -sb
Write-Host ""

$ahead = git rev-list --count origin/main..HEAD 2>$null
if ($ahead -eq "0") {
    Write-Host "Nema novih commitova za push — GitHub je vec azuran." -ForegroundColor Cyan
    Read-Host "Pritisni Enter za izlaz"
    exit 0
}

Write-Host "Pusham $ahead commit(a) na origin/main ..." -ForegroundColor Cyan
Write-Host "(Vercel ce automatski pokrenuti build nakon pusha)" -ForegroundColor DarkGray
Write-Host ""

git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "USPJEH! Push zavrsen. Vercel build krece za 1-2 min." -ForegroundColor Green
    Write-Host "Provjeri: https://vercel.com/dashboard" -ForegroundColor DarkGray
} else {
    Write-Host ""
    Write-Host "Push nije uspio. Ako trazi login:" -ForegroundColor Red
    Write-Host "  1. Otvori https://github.com/login/device" -ForegroundColor Yellow
    Write-Host "  2. Ili koristi Personal Access Token umjesto lozinke" -ForegroundColor Yellow
    Write-Host "     GitHub -> Settings -> Developer settings -> Tokens" -ForegroundColor Yellow
}

Write-Host ""
Read-Host "Pritisni Enter za izlaz"
