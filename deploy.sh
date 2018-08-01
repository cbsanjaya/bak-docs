#!/bin/sh
set -e

LOCALPATH='./docs/.vuepress/dist'
REMOTEPATH='/docs'

sudo apt-get install -y lftp

# deployment via ftp upload. Using FTPS for that
lftp -c "set ftp:ssl-allow no; open -u $FTP_USER,$FTP_PASSWORD $FTP_HOST$REMOTEPATH; mirror -eRv $LOCALPATH .; quit;"
