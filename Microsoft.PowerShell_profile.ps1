function prompt {
    $p = Split-Path -leaf -path (Get-Location)
    "$([char]27)[92mPS $p> "
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

# Function to send files using croc with a preset code
function enviar {
    param(
        [Parameter(ValueFromRemainingArguments=$true)]
        $files
    )
    
    croc send --code oscarm $files
}

function usr { Set-Location ~ }
function docs { Set-Location ~\Documents }
function desk { Set-Location ~\Desktop }
function dw { Set-Location ~\Downloads }
function tg { Set-Location "~\Downloads\Telegram Desktop" }

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
