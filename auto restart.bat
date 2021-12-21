@echo off
:startover
echo (%time%) App started.
call "C:\Users\Petr\Desktop\Discord bot\start.bat"
echo (%time%) WARNING: App closed or crashed, restarting.
goto startover