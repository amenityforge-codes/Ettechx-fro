@echo off
echo ========================================
echo Image Optimizer
echo ========================================
echo.
echo Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/downloads/
    pause
    exit /b 1
)

echo.
echo Installing/Checking dependencies...
pip install Pillow --quiet

echo.
echo Starting image optimization...
echo.
python optimize_images.py

echo.
pause
