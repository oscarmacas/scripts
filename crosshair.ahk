#Requires AutoHotkey v2.0

F3::
{
    MouseMove(0, 20, 0, "R")
}

F2::
{
    MouseMove(0, -20, 0, "R")
}

F5::
{
    Loop 31
    {
        Send "{Up}"
    }
}

F6::
{
    Loop 31
    {
        Send "{Down}"
    }
}

; Create the GUI for the cross-hair
crossHair := Gui()
crossHair.Opt("+AlwaysOnTop -Caption +ToolWindow +E0x20")
crossHair.BackColor := "123456"  ; Use a color key for transparency
WinSetTransColor("123456", crossHair)
crossHair.Show("w" A_ScreenWidth " h" A_ScreenHeight " x0 y0")

; Create the cross-hair lines (semi-transparent dark grey)
verticalLine := crossHair.Add("Text", "x0 y0 w1 h" A_ScreenHeight " +0x201000 +E0x20")
horizontalLine := crossHair.Add("Text", "x0 y0 w" A_ScreenWidth " h1 +0x201000 +E0x20")

; Set the color and transparency of the lines
SetDrawColor(verticalLine, "80404040")
SetDrawColor(horizontalLine, "80404040")

; Function to update cross-hair position
updateCrossHair() {
    MouseGetPos(&x, &y)
    verticalLine.Move(x)
    horizontalLine.Move(, y)
}

; Function to set semi-transparent color
SetDrawColor(control, color) {
    DllCall("SendMessage", "Ptr", control.Hwnd, "UInt", 0x172, "Ptr", 0, "Ptr", color)
}

; Set up a timer to update the cross-hair position
SetTimer updateCrossHair, 10

; Hotkey to exit the script
^q::ExitApp  ; Ctrl+Q to quit