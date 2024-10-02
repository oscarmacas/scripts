#Requires AutoHotkey v2.0
#HotIf WinActive("ahk_class MozillaWindowClass")
Down::
{
	Sleep(250)
	Send("{Down}")
	Sleep(350)
	Send("{Up}")
	Sleep(350)
	Send("^b")
	Sleep(350)
}
Enter::
{
	Send("{Enter}")
	Sleep(950)
	Send("{Escape}")
	Sleep(350)
	Send("{Right 2}")
	Sleep(150)
}
#HotIf
