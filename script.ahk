#Requires AutoHotkey v2.0

SetNumLockState("AlwaysOn") ; mantiene siempre activo el panel lateral de numeros

toggle := true

!z::
{
    SendInput("9999999999{Tab}mumusoecuador@hotmail.com")
}

!1::SendInput("@gmail.com")
!2::SendInput("@hotmail.com")
!3::SendInput("@outlook.com")
!4::SendInput("@live.com")
!5::SendInput("@universidad")
!6::SendInput("@universidad")

!9::
{
    RunWait("C:\script\dwscript.bat")
}

; F2: Abrir la Calculadora
F2::
{
    Run "calc.exe"
}

; F3: Abrir la Consola (Command Prompt)
F3::
{
    Run "cmd.exe"
}

; F4: Abrir la Consola como Administrador
F4::
{
    Run "*RunAs cmd.exe"
}

F5:: {
    ProcessName := "Palemoon.exe"
    Path := A_AppData "\Palemoon\Palemoon\Palemoon-Portable.exe"

    if WinExist("ahk_exe " ProcessName) {
        WinActivate
    } else {
        Run(Path)
    }
}

^NumpadDiv::
{
    Send("\")
}

+Esc::
{
    Run("https://docs.google.com/forms/d/e/1FAIpQLScuMG9j6T8nfDB_VruQ7-NNdyLJrAPKTCtgkf8lpli8Lh4gEw/viewform?usp=sf_link")
}

:*:nn:: ; inserta la fecha en el formato "01_01_2024"
{
    fecha_hora := FormatTime(A_Now, "dd_MM_yyyy")
    Send(fecha_hora)
}

^|:: ; Ctrl + |
{
    Run("C:\script\open_drawer.exe")
}

!t:: ; Press Ctrl + Space to toggle always on top
{
    win := WinGetTitle("A") ; Get active window
    if (WinGetExStyle(win) & 0x8) ; Check if always on top is enabled
        WinSetAlwaysOnTop(0, win) ; Disable always on top
    else
        WinSetAlwaysOnTop(1, win) ; Enable always on top
}
