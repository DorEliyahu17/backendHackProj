param(
    [string]$messageTitle="Hey U!",
    [string]$messageBody="I think you are tired right now. go and get some coffee",
    [string]$lock=""
)
if($lock -eq "ok"){
    $messageBody += ". Your Computer Will Lock Now"
}
@()
Add-Type -AssemblyName PresentationCore,PresentationFramework
$ButtonType = [System.Windows.MessageBoxButton]::YesNo
$MessageboxTitle = $messageTitle
$Messageboxbody = $messageBody
$MessageIcon = [System.Windows.MessageBoxImage]::Warning
if([System.Windows.MessageBox]::Show($Messageboxbody,$MessageboxTitle,$ButtonType,$messageicon) -eq "Yes"){
    .\scripts\lock-screen.ps1
}
