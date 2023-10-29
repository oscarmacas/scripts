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
doskey wf=netsh wlan show profile key=clear $* $B findstr /i /L /c:"Nombre de SSID" /c:"clave"
doskey enviar=croc send --code oscarm $*
doskey recibir=croc --yes oscarm
doskey inv=cd "%userprofile%\Documents\inventarios\"
doskey k=taskkill /IM cmd.exe
doskey io=copy %userprofile%\Documents\inventarios\plantilla_inventarios.xlsx %userprofile%\Documents\inventarios\"inventario_$*_%date:~0,2%_%date:~3,2%_%date:~6,4%.xlsx" $T %userprofile%\Documents\inventarios\"inventario_$*_%date:~0,2%_%date:~3,2%_%date:~6,4%.xlsx"
doskey yd=yt-dlp -f m4a "$*"
doskey cc=7z a -tzip $1.zip $2 $3 $4 $5 $6
doskey xx=7z x $*.zip -o$*
doskey r=curl -L rentry.co/$*/raw
doskey mr=curl -L rentry.co/$*/raw $B micro
doskey desk=cd %userprofile%\Desktop
doskey impresiones=curl https://raw.githubusercontent.com/oscarmacas/files/main/IMPRESIONES.php>C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\IMPRESIONES.php
doskey imp=cd C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\
doskey docs=cd %userprofile%\Documents
doskey img=cd %userprofile%\Pictures
doskey mus=cd %userprofile%\Music
doskey vid=cd %userprofile%\Videos
