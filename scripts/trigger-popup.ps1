param(
    [string]$messageTitle="Hey U!",
    [string]$messageBody="I think you are tired right now. go and get some coffee"
)

@()

Add-Type -AssemblyName PresentationCore,PresentationFramework
$ButtonType = [System.Windows.MessageBoxButton]::YesNo
$MessageboxTitle = $messageTitle
$Messageboxbody = $messageBody
$MessageIcon = [System.Windows.MessageBoxImage]::Warning
[System.Windows.MessageBox]::Show($Messageboxbody,$MessageboxTitle,$ButtonType,$messageicon)