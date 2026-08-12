@echo off
title AGR Multimedia — Push to GitHub
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\push-deploy.ps1"
