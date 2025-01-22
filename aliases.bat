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
::doskey ls=dir /B
doskey ll=dir /B /od
doskey rd=rd $* /S /Q
doskey ls=ls --color=auto -H -F

:: ALIAS
doskey alias=cmd /c where nvim $Gnul 2$Gnul $T$T (nvim C:\aliases\aliases.bat) $B$B (more C:\aliases\aliases.bat)
doskey al=bat "C:\aliases\aliases.bat"
doskey udalias=curl https://raw.githubusercontent.com/oscarmacas/scripts/main/aliases.bat$GC:\aliases\aliases.bat $T echo ========== El archivo alias ha sido actualizado. $T cmd
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
doskey oslink=curl https://gitlab.com/scripts2073949/scripts/-/raw/main/oslink 
doskey osinstall=curl https://gitlab.com/scripts2073949/scripts/-/raw/main/osinstall 
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
doskey cup=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && choco upgrade $* -y'"
doskey cupkg=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && choco upgrade croc -y && choco upgrade 7zip -y && choco upgrade aria2 -y && yt-dlp -U && winget upgrade RustDesk.RustDesk'"
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
doskey office10=aria2c --max-concurrent-downloads=16 --split=16 --max-connection-per-server=16 --min-split-size=1M --max-download-limit=0 -j 1 -i magnet:?xt=urn:btih:27113327FBC680659464B72F63A2C1C644AC8EF8^&dn=Microsoft%20OFFICE%202010%20%20Pro%20Plus%20PRECRACKED^&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337^&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce^&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce^&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce^&tr=udp%3A%2F%2Ftracker.bittor.pw%3A1337%2Fannounce^&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce^&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce^&tr=udp%3A%2F%2Fexodus.desync.com%3A6969^&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce
doskey nprint=cd "C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\" $T ren IMPRESIONES.php IMPRESIONES.php.dot
doskey yprint=cd "C:\php\web\amfphp\services\SIGNUM\IMPRESIONES\" $T ren IMPRESIONES.php.dot IMPRESIONES.php
doskey stxt=croc send --code oscarm --text $*
doskey rtxt=croc --yes oscarm
doskey conv="C:\script\todoconvert.bat"
doskey udahk=taskkill /im "autohotkey.exe" $T taskkill /im "autohotkey64.exe" $T winget upgrade autohotkey.autohotkey $T del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\script.ahk" $T curl https://raw.githubusercontent.com/oscarmacas/scripts/main/script.ahk$G"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\script.ahk" $T "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\script.ahk"
doskey udss=taskkill /im "autohotkey.exe" $T taskkill /im "autohotkey64.exe" $T del "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\script.ahk" $T curl https://raw.githubusercontent.com/oscarmacas/scripts/main/script.ahk$G"%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\script.ahk" $T "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\script.ahk"
doskey inputy=curl https://raw.githubusercontent.com/oscarmacas/scripts/main/inv_input.ahk$G"C:\script\inv_input.ahk" $T "C:\script\inv_input.ahk"
doskey inputn=taskkill /im "autohotkey.exe" $T taskkill /im "autohotkey64.exe" $T "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\script.ahk
doskey xxc=curl -L rentry.co/$*/raw $B fzf -e $B clip
doskey xtbat=mkdir "C:\script\lib\" $t cd "C:\script\lib\" $t curl https://raw.githubusercontent.com/oscarmacas/scripts/main/lib/extract_zip.bat --output extract_zip.bat $t curl https://raw.githubusercontent.com/oscarmacas/scripts/main/lib/compress_zip.bat --output compress_zip.bat
doskey whr=cd "C:\script\lib\" $t curl https://raw.githubusercontent.com/oscarmacas/scripts/main/lib/receive.bat --output receive.bat
doskey xt="C:\script\lib\extract_zip.bat" $*
doskey az="C:\script\lib\compress_zip.bat" $*
doskey udnvim=cmd /c "if not exist "%USERPROFILE%\AppData\Local\nvim" mkdir "%USERPROFILE%\AppData\Local\nvim" $t curl -o "%USERPROFILE%\AppData\Local\nvim\init.vim" https://raw.githubusercontent.com/oscarmacas/scripts/main/lib/init.vim"
doskey nv=nvim $*
doskey sf=wormhole send --code 000-os $*
doskey rf="C:\script\lib\receive.bat"
doskey lnk=cmd /c "if not exist C:\script\lib\ mkdir C:\script\lib\ $T curl -o C:\script\lib\links.zip https://raw.githubusercontent.com/oscarmacas/scripts/main/lib/links.zip $T cd C:\script\lib\ $T 7z x links.zip -olinks $T del links.zip" $T echo ======== EJECUTA EL COMANDO QUE CREA EL ACCESO DIRECTO DE run_batch.vbs ============
doskey oper=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% $T$T curl -o Opera_GX_113.0.5230.75_Setup_x64.exe -L https://get.geo.opera.com/pub/opera_gx/113.0.5230.75/win/Opera_GX_113.0.5230.75_Setup_x64.exe $T$T Opera_GX_113.0.5230.75_Setup_x64.exe --silent --install'"
doskey fnm=rg -i "$*" %AppData%\ovscript\nm
doskey gnm=cmd /c "if not exist %AppData%\ovscript\nm mkdir %AppData%\ovscript\nm $T cd %AppData%\ovscript\nm $T croc --yes oscarm"
doskey irg=powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/k cd /d %CD% && winget install BurntSushi.ripgrep.MSVC'"
doskey cod=bat C:\script\lib\codes\codes $B fzf -e
doskey codin=cmd /c "if not exist C:\script\lib\ mkdir C:\script\lib\ $T cd C:\script\lib\ $T wget -O codes.zip https://github.com/oscarmacas/files/raw/main/codes.zip $T 7z x codes.zip -ocodes -aoa"
doskey video= cd %userprofile%\Videos\youtube\video $T yt-dlp -f mp4 $* $T start .
doskey audio= cd %userprofile%\Videos\youtube\audio $T yt-dlp -f m4a $* $T start .
doskey drawst=cmd /c "if not exist C:\script\lib\ mkdir C:\script\lib\ $T curl -o C:\script\lib\abre_registradora.py https://raw.githubusercontent.com/oscarmacas/scripts/main/lib/abre_registradora.py"

:: NVIM RELATED ALIASES
doskey nvico=git clone https://github.com/oscarmacas/nvim.git %USERPROFILE%\AppData\Local\nvim
doskey udvi=git pull https://github.com/oscarmacas/nvim.git %USERPROFILE%\AppData\Local\nvim

:: INSTALAR SCRIPTS DE PYTHON
doskey pyst=git clone https://github.com/oscarmacas/python.git C:\script\python_scripts

:: suma los codigos y busca los nombres y los agrega al final
doskey sufipy=C:\script\python_scripts\sum_find_csv.py

:: unifica todos los csv en uno solo
doskey merpy=C:\script\python_scripts\merge.py

:: organiza las filas y columnas en un excel
doskey oio=C:\script\python_scripts\reorder_excel.py
