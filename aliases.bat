@echo off

:: $T means &
:: $B means |
:: $G means >

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
doskey ll=dir /B /od
doskey rd=rd $* /S /Q

:: ALIAS
doskey alias=cmd /c where nvim $Gnul 2$Gnul $T$T (nvim C:\aliases\aliases.bat) $B$B (more C:\aliases\aliases.bat)
doskey al=bat "C:\aliases\aliases.bat"
doskey udalias=curl https://raw.githubusercontent.com/oscarmacas/scripts/main/aliases.bat$GC:\aliases\aliases.bat $T echo =======|| El archivo alias ha sido actualizado. ||=======  $T cmd
doskey alinfo=dir "C:\aliases\aliases.bat"

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
doskey recibir=if not exist "%userprofile%\Desktop\recibidos" md "%userprofile%\Desktop\recibidos" $T cd /d "%userprofile%\Desktop\recibidos" $T croc --yes oscarm $T if errorlevel 1 echo Croc command failed $T start .
doskey kk=taskkill /IM cmd.exe
doskey io=copy %userprofile%\Documents\inventarios\plantilla_inventarios.xlsx %userprofile%\Documents\inventarios\"inventario_$*_%date:~-10,2%_%date:~-7,2%_%date:~-4,4%.xlsx" $T %userprofile%\Documents\inventarios\"inventario_$*_%date:~-10,2%_%date:~-7,2%_%date:~-4,4%.xlsx"
doskey yd=yt-dlp -f m4a -o "%(title)s.%(ext)s" "$*"
doskey cc=7z a -tzip $1.zip $2 $3 $4 $5 $6
doskey xx=if not exist "$1" (echo File not found: $1) else if "$2"=="" (for %%I in ("$1") do 7z x "%%I" -o"%%~dpnI") else if exist "$2\" (7z x "$1" -o"$2") else (echo Invalid output directory: $2) $t cd $1 $t dir /b
doskey r=curl -L rentry.co/$*/raw $B bat -l markdown
doskey oslink=curl https://gitlab.com/macas.oscar/alias/-/raw/main/oslink
doskey osinstall=curl https://gitlab.com/macas.oscar/alias/-/raw/main/osinstall
doskey mr=curl -L rentry.co/$*/raw $B micro
doskey impresiones=cd C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\ $T$T move IMPRESIONES.php IMPRESIONES.php.back $T$T curl https://raw.githubusercontent.com/oscarmacas/files/main/IMPRESIONES.php$GC:\php\web\amfphp\services\SIGNUM\IMPRESIONES\IMPRESIONES.php
doskey ipp=curl icanhazip.com
doskey ccs=choco search $*
doskey cin=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && choco install $* -y'"
doskey win=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && winget install $*'"
doskey wws=winget search $*
doskey k=taskkill /IM WindowsTerminal.exe
doskey cup=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && choco upgrade $* -y'"
doskey cupkg=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && choco upgrade croc -y && choco upgrade 7zip -y && choco upgrade aria2 -y && yt-dlp -U && winget upgrade RustDesk.RustDesk'"
doskey ..= cd ..
doskey ...= cd ..\..
doskey 7zl=7z l $*
doskey 7za=7z a -tzip $1 $2 $3 $4 $5 $6
doskey dl=aria2c --max-concurrent-downloads=16 --split=16 --max-connection-per-server=16 --min-split-size=1M --max-download-limit=0 $*
doskey dll=aria2c --max-concurrent-downloads=16 --split=16 --max-connection-per-server=16 --min-split-size=1M --max-download-limit=0 -i $*
doskey pth=setx /M path "%path%;$*"
doskey nprint=cd "C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\" $T ren IMPRESIONES.php IMPRESIONES.php.dot
doskey yprint=cd "C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\" $T ren IMPRESIONES.php.dot IMPRESIONES.php
doskey stxt=croc send --code oscarm --text $*
doskey rtxt=croc --yes oscarm
doskey conv="C:\script\todoconvert.bat"
