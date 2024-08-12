@echo off
setlocal enabledelayedexpansion

set "input_folder=%~dp0"
set "output_folder=%~dp0output"

if not exist "%output_folder%" (
    mkdir "%output_folder%"
)

for %%A in ("%input_folder%\*.png") do (
    set "output_file=%%~nxA"
    magick convert "%%A" -scale 500%% "%output_folder%\!output_file!"
)

echo Proceso completado.
