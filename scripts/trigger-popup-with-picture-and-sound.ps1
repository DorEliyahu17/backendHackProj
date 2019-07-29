param(
    [string]$sound="",
    [string]$text=""
)

@()
add-type -assembly presentationcore 
[void][reflection.assembly]::LoadWithPartialName("System.Windows.Forms")

$file = (get-item 'scripts/zariface.jpg')

$img = [System.Drawing.Image]::Fromfile($file);

# This tip from http://stackoverflow.com/questions/3358372/windows-forms-look-different-in-powershell-and-powershell-ise-why/3359274#3359274
[System.Windows.Forms.Application]::EnableVisualStyles();
$form = new-object Windows.Forms.Form
$form.FormBorderStyle = 'Fixed3D'
$form.Text = $text
$form.MaximizeBox = $false
$form.Width = $img.Size.Width;
$form.Height =  $img.Size.Height;
$form.StartPosition = 'CenterScreen'
$pictureBox = new-object Windows.Forms.PictureBox
$pictureBox.Width =  $img.Size.Width;
$pictureBox.Height =  $img.Size.Height;

$OKButton = New-Object System.Windows.Forms.Button
$OKButton.Size = New-Object System.Drawing.Size(75,23)
$OKButton.Top = ($form.Height-70)
$OKButton.Left = ($form.Width/2)-37
$OKButton.Text = 'OK'
$OKButton.DialogResult = [System.Windows.Forms.DialogResult]::OK
$form.AcceptButton = $OKButton
$form.Controls.Add($OKButton)

$pictureBox.Image = $img;
$form.controls.add($pictureBox)
$form.Add_Shown( { $form.Activate() 
$player = new-object system.windows.media.mediaplayer
$fullpath = Get-ChildItem -File $sound -Recurse | Select-Object FullName
write-host $fullpath
$player.open(($fullpath).FullName.ToString())
# start-sleep -m 100 # a little pause, just in case
$player.play()} )
$form.ShowDialog()




