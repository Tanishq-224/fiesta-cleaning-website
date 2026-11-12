# Run in PowerShell:  .\scripts\deploy-surge.ps1
$ErrorActionPreference = "Stop"
$Client = Join-Path $PSScriptRoot ".." "client" | Resolve-Path

Set-Location $Client

Write-Host "`n--- Surge login check ---"
$who = npx surge@0.24.6 whoami 2>&1 | Out-String
if ($who -match "Not Authenticated") {
  Write-Host "Not logged in. Starting surge login (email + password)..." -ForegroundColor Yellow
  npx surge@0.24.6 login
  $who = npx surge@0.24.6 whoami 2>&1 | Out-String
}
Write-Host $who

if ($who -match "Not Authenticated") {
  Write-Host "Login failed or incomplete. Run: npx surge@0.24.6 login" -ForegroundColor Red
  exit 1
}

Write-Host "`n--- Build static site ---"
npm run build
if (-not (Test-Path ".\out\index.html")) {
  Write-Host "Build failed: out\index.html missing" -ForegroundColor Red
  exit 1
}

Write-Host "`n--- Deploy (press ENTER when domain is shown) ---"
npx surge@0.24.6 ./out

Write-Host "`nDone. Open the URL shown above (or CNAME in public/CNAME)." -ForegroundColor Green
