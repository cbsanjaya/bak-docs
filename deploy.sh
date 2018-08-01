#!/usr/bin/env bash
set -e

LOCALPATH='./.vuepress/dist'
REMOTEPATH='/docs'

lftp -f "
open ftp://$FTP_HOST
user $FTP_USER $FTP_PASSWORD
mirror --continue --reverse --delete $LOCALPATH $REMOTEPATH
bye
"
