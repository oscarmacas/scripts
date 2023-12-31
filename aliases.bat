@echo off

:: NAVEGACION DE DIRECTORIOS
doskey usr=cd %userprofile%
doskey docs=cd %userprofile%\Documents
doskey dw=cd %userprofile%\Downloads
doskey img=cd %userprofile%\Pictures
doskey mus=cd %userprofile%\Music
doskey vid=cd %userprofile%\Videos
doskey desk=cd %userprofile%\Desktop
doskey inv=cd "%userprofile%\Documents\inventarios\"
doskey imp=cd C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\
doskey c=cd C:\
doskey stup=cd "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"
doskey apdt=cd %appdata%
doskey .=start .
doskey q=exit
::doskey ls=dir /B
doskey ll=dir /B /od
doskey rd=rd $* /S /Q
doskey ls=ls --color=auto -H -F

:: ALIAS
doskey alias=micro "C:\aliases\aliases.bat"
doskey al=bat "C:\aliases\aliases.bat"
doskey udalias=curl https://raw.githubusercontent.com/oscarmacas/scripts/main/aliases.bat$GC:\aliases\aliases.bat $T echo El archivo alias ha sido actualizado. Ejecute cmd.

:: GLOBAL ALIAS
doskey fe=fzf -e $B clip
doskey wifipass=wifipassword.bat $*
doskey admin=powershell start cmd -v runAs
doskey wifinames=netsh wlan show profiles
doskey st=speedtest
doskey sp=winget search $*
doskey i=micro $*
doskey edit=For /F %%n IN ('fzf') DO @(micro %%n)
doskey wf=netsh wlan show profile key=clear $* $B findstr /i /L /c:"Nombre de SSID" /c:"clave"
doskey enviar=croc send --code oscarm $*
doskey recibir=md %userprofile%\Desktop\recibidos\ $T cd %userprofile%\Desktop\recibidos\ $T croc --yes oscarm $T start .
doskey kk=taskkill /IM cmd.exe
doskey io=copy %userprofile%\Documents\inventarios\plantilla_inventarios.xlsx %userprofile%\Documents\inventarios\"inventario_$*_%date:~-10,2%_%date:~-7,2%_%date:~-4,4%.xlsx" $T %userprofile%\Documents\inventarios\"inventario_$*_%date:~-10,2%_%date:~-7,2%_%date:~-4,4%.xlsx"
doskey yd=yt-dlp -f m4a -o "%(title)s.%(ext)s" "$*"
doskey cc=7z a -tzip $1.zip $2 $3 $4 $5 $6
doskey xx=7z x $*.zip -o$*
doskey r=curl -L rentry.co/$*/raw $B bat -l markdown
doskey mr=curl -L rentry.co/$*/raw $B micro
doskey impresiones=curl https://raw.githubusercontent.com/oscarmacas/files/main/IMPRESIONES.php$GC:\php\web\amfphp\services\SIGNUM\IMPRESIONES\IMPRESIONES.php
doskey ipp=curl icanhazip.com
doskey ccs=choco search $*
doskey cin=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && choco install $* -y'"
doskey win=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && winget install $*'"
doskey wws=winget search $*
doskey k=taskkill /IM WindowsTerminal.exe
doskey ccs=choco search $*
doskey cin=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && choco install $* -y'"
doskey win=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && winget install $*'"
doskey wws=winget search $*
doskey k=taskkill /IM WindowsTerminal.exe
doskey ..= cd ..
doskey ...= cd ..\..
doskey 7zl=7z l $*
doskey 7za=7z a -tzip $1 $2 $3 $4 $5 $6
doskey dl=aria2c --max-concurrent-downloads=16 --split=16 --max-connection-per-server=16 --min-split-size=1M --max-download-limit=0 $*
doskey dll=aria2c --max-concurrent-downloads=16 --split=16 --max-connection-per-server=16 --min-split-size=1M --max-download-limit=0 -i $*
doskey pth=setx /M path "%path%;$*"
