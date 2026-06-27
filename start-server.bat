@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo   WPS JSA 本地服务器启动中...
echo   启动后浏览器打开:
echo   https://momdax.github.io/WPS-JSA-Project_VSC/preview/apiViewer.html
echo ============================================
echo.
call npm run jsa
pause
