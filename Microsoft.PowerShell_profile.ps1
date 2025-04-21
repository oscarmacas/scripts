# ESTILO PERSONALIZADO DE PROMPT
function prompt {
    $isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
    $adminIndicator = if ($isAdmin) { Write-Host -NoNewline -ForegroundColor Red "[Admin] "}

    # Display user@host and time on the first line
    Write-Host "$($env:USERNAME)@$($env:COMPUTERNAME)" -ForegroundColor Green -NoNewline
    Write-Host " [$(Get-Date -Format HH:mm:ss)]" -ForegroundColor Yellow

    # Display current path on the second line, potentially with Admin indicator
    $adminIndicator # This executes the Write-Host command if $isAdmin was true
    Write-Host "$($pwd.Path)" -ForegroundColor Cyan

    # Return the actual prompt symbol for the third line
    return "> "
}

# funcion y alias para editar los alias
function Edit-Profile { nvim $profile }
Set-Alias -Name edal -Value Edit-Profile

# funcion y alias para cargar los alias
function Load-Profile { . $profile }
Set-Alias -Name src -Value Load-Profile

# Function that runs fzf with -e flag and pipes output to clipboard
function fe { fzf -e | clip }

function oslink { curl https://gitlab.com/scripts2073949/scripts/-/raw/main/oslink }
function osinstall { curl https://gitlab.com/scripts2073949/scripts/-/raw/main/osinstall }

function udalias { irm "https://raw.githubusercontent.com/oscarmacas/scripts/main/Microsoft.PowerShell_profile.ps1">$HOME\Documents\PowerShell\Microsoft.PowerShell_profile.ps1 | iex }

# Function to send files using croc with a preset code
function enviar {
    param(
        [Parameter(ValueFromRemainingArguments=$true)]
        $files
    )
    
    croc send --code oscarm $files
}

# NAVEGACION DE DIRECTORIOS

function usr { Set-Location ~ }
function docs { Set-Location ~\Documents }
function desk { Set-Location ~\Desktop }
function dw { Set-Location ~\Downloads }
function tg { Set-Location "~\Downloads\Telegram Desktop" }
function c { Set-Location C:\ }


# PARA SALIR DE POWERSHELL
function q {
    exit
}

# VER LOS NOMBRES DE LAS REDES WIFI CON SUS CLAVES
function wfnames {
    # Get all Wi-Fi profile names
    $profileNames = (netsh wlan show profiles) | 
                    Select-String "Perfil de todos los usuarios\s+:\s+(.*)" | 
                    ForEach-Object { $_.Matches.Groups[1].Value.Trim() }
    
    # Create an array to store results
    $results = @()
    
    # Get password for each profile
    foreach ($name in $profileNames) {
        $keyContent = (netsh wlan show profile name="$name" key=clear) |
                      Select-String "Contenido de la clave\s+:\s+(.*)" | 
                      ForEach-Object { $_.Matches.Groups[1].Value.Trim() }
        
        # Create custom object with profile name and password
        $profileInfo = [PSCustomObject]@{
            ProfileName = $name
            Password = if ($keyContent) { $keyContent } else { "N/A" }
        }
        
        $results += $profileInfo
    }
    
    # Display results in a table format
    $results | Format-Table -AutoSize
}

# MOSTRAR EL HISTORIAL DE COMANDOS
function Get-FzfHistory {
    $history = Get-Content (Get-PSReadLineOption).HistorySavePath
    $uniqueHistory = $history | Where-Object { $_ -ne "" } | Select-Object -Unique
    $reversedHistory = $uniqueHistory[($uniqueHistory.Count-1)..0]
    
    $command = $reversedHistory | Out-String -Stream | 
               fzf --height 50% --layout=reverse --border
    
    if ($command) {
        # Place the command on the command line
        [Microsoft.PowerShell.PSConsoleReadLine]::AddToHistory($command)
        [Microsoft.PowerShell.PSConsoleReadLine]::Insert($command)
    }
}

# Optional: Set a shorter alias
Set-Alias -Name hh -Value Get-FzfHistory

# DESCARGAR MUSICA NUEVA
function music25 {
    param (
        [string]$OutputFolder = ".\Downloads"
    )
    
    # Create output folder if it doesn't exist
    if (-not (Test-Path -Path $OutputFolder)) {
        New-Item -ItemType Directory -Path $OutputFolder | Out-Null
    }
    
    # URLs to download
    $urls = @(
        "http://191.100.115.225:85/api/public/dl/N0SjBvCL/music/house1.mp4",
        "http://191.100.115.225:85/api/public/dl/bDtDOtvy/music/house2.mp4",
        "http://191.100.115.225:85/api/public/dl/mZi3h7JW/music/house3.mp4"
    )
    
    # Download each file
    foreach ($url in $urls) {
        try {
            $fileName = [System.IO.Path]::GetFileName($url)
            $outputPath = Join-Path -Path $OutputFolder -ChildPath $fileName
            
            Write-Host "Downloading $fileName..."
            
            # Use Invoke-WebRequest to download the file
            Invoke-WebRequest -Uri $url -OutFile $outputPath
            
            Write-Host "Successfully downloaded to $outputPath" -ForegroundColor Green
        }
        catch {
            Write-Host "Failed to download $url" -ForegroundColor Red
            Write-Host "Error: $_" -ForegroundColor Red
        }
    }
    
    Write-Host "Download process completed." -ForegroundColor Cyan
}

# USAR WORMHOLE PARA ENVIAR Y RECIBIR ARCHIVOS
function sf {
    param(
        [Parameter(ValueFromRemainingArguments=$true)]
        [string[]]$remainingArgs
    )
    
    wormhole send --code 000-os @remainingArgs
}

function rf {
    param(
        [string]$code = "000-os"  # Default code if none provided
    )
    
    # Automatically confirm 'y' and receive the file
    echo "y" | wormhole receive $code
}

function Update-Profile {
    <#
    .SYNOPSIS
        Updates the PowerShell profile from a GitHub repository and refreshes the session.
    
    .DESCRIPTION
        Downloads the latest profile script from GitHub, saves it to the default profile location,
        and refreshes the current PowerShell session to apply changes.
    #>
    
    # Download and update the profile
    try {
        $profileUrl = "https://raw.githubusercontent.com/oscarmacas/scripts/main/Microsoft.PowerShell_profile.ps1"
        $profilePath = "$HOME\Documents\PowerShell\Microsoft.PowerShell_profile.ps1"
        
        Write-Host "Downloading latest profile from GitHub..." -ForegroundColor Cyan
        Invoke-RestMethod -Uri $profileUrl -OutFile $profilePath
        
        Write-Host "Profile updated successfully. Refreshing session..." -ForegroundColor Green
        
        # Refresh the current session by dot-sourcing the new profile
        . $profilePath
    }
    catch {
        Write-Host "Error updating profile: $_" -ForegroundColor Red
    }
}

# Create an alias for convenience
Set-Alias -Name udalias -Value Update-Profile
