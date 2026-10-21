# Registers VANTA to start silently at login (Windows). Run once in PowerShell:
#   powershell -ExecutionPolicy Bypass -File scripts\install_autostart_windows.ps1
$root = Split-Path -Parent $PSScriptRoot
$py   = (Get-Command pythonw.exe -ErrorAction SilentlyContinue).Source
if (-not $py) { $py = (Get-Command python.exe).Source }
$script = Join-Path $root "vanta_ui\server.py"
$action  = New-ScheduledTaskAction -Execute $py -Argument "`"$script`"" -WorkingDirectory $root
$trigger = New-ScheduledTaskTrigger -AtLogOn
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
            -RestartCount 5 -RestartInterval (New-TimeSpan -Minutes 1) -ExecutionTimeLimit ([TimeSpan]::Zero)
Register-ScheduledTask -TaskName "VANTA" -Action $action -Trigger $trigger -Settings $settings -Force | Out-Null
Write-Host "VANTA will now start at login. Remove with: Unregister-ScheduledTask -TaskName VANTA -Confirm:`$false"
