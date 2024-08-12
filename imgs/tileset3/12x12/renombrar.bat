@echo off
setlocal enabledelayedexpansion

set contador=0

REM Itera sobre todos los archivos PNG en la carpeta actual
for %%F in (*.png) do (
  set nuevo_nombre=!contador!.png
  ren "%%F" "!nuevo_nombre!"
  set /a contador+=1
)


REM for %% in (*.png) do magick %f -colorspace gray -ordered-dither o8x8,2 -threshold 50%% indexed_%f