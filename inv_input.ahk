#Requires AutoHotkey v2.0
#HotIf WinActive("ahk_class XLMAIN")
Down::
{
	Send("{Down}")
	Sleep(250)
	Send("{Up}")
	Sleep(250)
	Send("^f")
	Sleep(250)
	Send("{Backspace}")
	Sleep(200)
}

Enter::
{
	Send("{Enter}")
	Sleep(200)
	Send("{Escape}")
	Sleep(250)
	Send("{Right 2}")
	Sleep(250)
}

#HotIf
