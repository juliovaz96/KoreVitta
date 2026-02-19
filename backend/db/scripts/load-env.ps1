param(
  [string]$EnvFilePath
)

if (-not $EnvFilePath) {
  $EnvFilePath = Join-Path $PSScriptRoot "..\.env"
}

if (-not (Test-Path $EnvFilePath)) {
  return
}

$lines = Get-Content -Path $EnvFilePath
foreach ($rawLine in $lines) {
  $line = $rawLine.Trim()

  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  if ($line.StartsWith("#")) { continue }

  $separator = $line.IndexOf("=")
  if ($separator -le 0) { continue }

  $key = $line.Substring(0, $separator).Trim()
  $value = $line.Substring($separator + 1).Trim()

  if (($value.StartsWith('"') -and $value.EndsWith('"')) -or ($value.StartsWith("'") -and $value.EndsWith("'"))) {
    $value = $value.Substring(1, $value.Length - 2)
  }

  if (-not [string]::IsNullOrWhiteSpace($key)) {
    [System.Environment]::SetEnvironmentVariable($key, $value, "Process")
  }
}
