#Requires AutoHotkey v2.0

Down::
{
	Send("{Down}")
	Sleep(200)
	Send("{Up}")
	Sleep(200)
	Send("^b")
	Sleep(200)
	Send("{Backspace}")
	Sleep(200)
}

Enter::
{
	Send("{Enter}")
	Sleep(200)
	Send("{Escape}")
	Sleep(200)
	Send("{Right 2}")
	Sleep(200)
}