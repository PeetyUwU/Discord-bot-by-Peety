@echo off
:startover
echo (%time%) App started.
node .
echo (%time%) WARNING: App closed or crashed, restarting.
goto startover