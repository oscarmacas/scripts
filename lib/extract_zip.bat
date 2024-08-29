@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Por favor, especifica un archivo ZIP.
    goto :eof
)

set "zipfile=%~1"
set "dirname=%~n1"

if not exist "%zipfile%" (
    echo El archivo %zipfile% no existe.
    goto :eof
)

echo Extrayendo: %zipfile%
7z x "%zipfile%" -o"%dirname%"

if exist "%dirname%" (
    cd "%dirname%"
    echo -------------------------------
    echo Contenido de %dirname%:
    echo -------------------------------
    dir /b
    echo -------------------------------
) else (
    echo No se pudo acceder al directorio extraído.
    echo Listando el directorio actual:
    dir /b
)

endlocal
