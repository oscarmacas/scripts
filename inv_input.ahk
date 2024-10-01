#Requires AutoHotkey v2.0
#HotIf WinActive("ahk_class XLMAIN")
NumpadEnter::
{
	Send("{Down}")
	Sleep(250)
	Send("{Up}")
	Sleep(250)
	Send("^f")
	Sleep(350)
	Send("{Backspace}")
	Sleep(140)
}
#HotIf

#HotIf WinActive("ahk_class bosa_sdm_XL9")
Enter::
{
	Send("{Enter}")
	Sleep(550)
	Send("{Escape}")
	Sleep(250)
	Send("{Right 2}")
	Sleep(150)
}
#HotIf
