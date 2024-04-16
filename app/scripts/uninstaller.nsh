!macro customUnInstall
  MessageBox MB_YESNO "Remove all data associated with this app?" \
    /SD IDNO IDNO Skipped IDYES Accepted

  Accepted:
    RMDir /r "$APPDATA\${APP_FILENAME}"
    !ifdef APP_PRODUCT_FILENAME
      RMDir /r "$APPDATA\${APP_PRODUCT_FILENAME}"
    !endif
    Goto done
  Skipped:
    Goto done
  done:
!macroend