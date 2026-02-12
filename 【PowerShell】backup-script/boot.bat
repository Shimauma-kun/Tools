@echo off
rem 現在のbatファイルのパスを取得する。
set currentBatDir=%~dp0

cd %currentBatDir%
PowerShell -WindowStyle Hidden -ExecutionPolicy Default .\auto-backup.ps1