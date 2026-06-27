@echo off
cd /d "%~dp0"
echo ============================================
echo   WPS JSA Server Starting...
echo   Open: https://momdax.github.io/WPS-JSA-Project_VSC/preview/apiViewer.html
echo ============================================
echo.
call npm run jsa
pause
