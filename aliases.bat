@echo off

:: GLOBAL ALIAS
doskey ls=dir /B
doskey alias=micro "C:\aliases\aliases.bat"
doskey fe=fzf -e $B clip
doskey dw=cd %userprofile%\Downloads
doskey wifipass=wifipassword.bat $*
doskey admin=powershell start cmd -v runAs
doskey stup=cd "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"
doskey usr=cd %userprofile%
doskey wifinames=netsh wlan show profiles
doskey apdt=cd %appdata%
doskey .=start .
doskey q=exit
doskey c=cd C:\
doskey st=speedtest
doskey sp=winget search $*
doskey al=more "C:\aliases\aliases.bat"
doskey i=micro $*
doskey edit=For /F %%n IN ('fzf') DO @(micro %%n)
doskey wf=netsh wlan show profile key=clear $*
doskey enviar=croc send --code oscarm $*
doskey recibir=croc --yes oscarm
