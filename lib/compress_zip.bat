@echo off
setlocal enabledelayedexpansion

:: Check if 7-Zip is installed and accessible
where 7z >nul 2>nul
if %errorlevel% neq 0 (
    echo 7-Zip no esta instalado.
    exit /b 1
)

:: Initialize variables
set "files="
set "folders="

:: Loop through all arguments
for %%i in (%*) do (
    if exist "%%~i\*" (
        set "folders=!folders! "%%~i""
    ) else (
        set "files=!files! "%%~i""
    )
)

:: Get the parent directory name
for %%I in (.) do set "parentdir=%%~nxI"

:: Prompt for zip file name
set /p "zipname=Escribe un nombre para el zip (deja vacio para nombrar '%parentdir%.zip'): "

:: If zipname is empty, use parent directory name
if "!zipname!"=="" set "zipname=%parentdir%.zip"

:: Add .zip extension if not present
if "!zipname:~-4!" neq ".zip" set "zipname=!zipname!.zip"

:: Compress files and folders
7z a "!zipname!" %files% %folders%

echo Se comprimio el archivo: !zipname!
