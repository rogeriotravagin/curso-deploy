@echo off
setlocal
set "HOOK_DIR=%~dp0"
bash "%HOOK_DIR%%~1"
