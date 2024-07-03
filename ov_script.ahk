    ; #	Win (Windows logo key)
    ; !	Alt
    ; ^	Ctrl
    ; +	Shift

#Requires AutoHotkey v2.0
#SingleInstance Force

; Script de AutoHotkey v2

:*:dd::
{
    fecha := FormatTime(A_Now, "dddd',' d 'de' MMMM 'de' yyyy")
    fecha := StrLower(fecha)
    Send(fecha)
}

:*:tt::
{
    fecha_hora := FormatTime(A_Now, "dd_MM_yyyy_HHmmss")
    Send(fecha_hora)
}

::lc::
{
    SendText("Buen dia`n`nPor favor su ayuda gestionando la recoleccion de la siguiente guia para el dia`n`n`n`nQuedo pendiente`nSaludos")
}

^!0:: ; AJUSTE DE ANCHO Y ALTO DE TABLA EN EXCEL
{
    ; Ajustar el alto de la tabla
    Send("^e") ; Seleccionar la tabla
    Sleep(200)
    Send("!o") ; Presionar Alt + O
    Sleep(200)
    Send("h") ; Presionar H
    Sleep(200)
    Send("f") ; Presionar F
    Sleep(200)
    Send("a") ; Presionar A
    Sleep(200)
    Send("{Enter}") ; Confirmar
    Sleep(200)

    ; Ajustar el ancho de la tabla
    Send("^e") ; Seleccionar la tabla
    Sleep(200)
    Send("!o") ; Presionar Alt + O
    Sleep(200)
    Send("h") ; Presionar H
    Sleep(200)
    Send("f") ; Presionar F
    Sleep(200)
    Send("r") ; Presionar R
    Sleep(200)
    Send("{Enter}") ; Confirmar
    Sleep(200)
}

^|:: ; reinicia pulsando control + |
{
    DllCall("PowrProf\SetSuspendState", "int", 1, "int", 1, "int", 1)
}

#Backspace:: ; elimina la linea actual pulsando windows + borrar
{
    Send("{Home}{Shift down}{End}{Shift up}{Backspace}")
}

!+.:: ; para escribir enlaces de windows facilmente
{
    SendText("\")
}

^#a:: ; ejecuta el script ahk para facilitar hacer pedidos
{
    Run "C:\script\crosshair.ahk"
}