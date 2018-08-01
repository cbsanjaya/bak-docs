#!/usr/bin/env bash
set -e

LOCALPATH='./docs/.vuepress/dist'
REMOTEPATH='/docs'

lftp -f "
set dns:order "inet"
set ftp:ssl-allow no
open ftp://$FTP_HOST
user $FTP_USER $FTP_PASSWORD
mirror --continue --reverse --delete $LOCALPATH $REMOTEPATH
bye
"
