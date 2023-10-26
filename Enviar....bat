@echo off
setlocal

rem Revisar si croc está instalado
where croc >nul 2>nul
if %errorlevel% neq 0 (
    echo Croc no está instalado en el sistema.
    pause
    exit /b
)

rem Enviar archivo usando croc
croc send --code oscarm %1

endlocal
