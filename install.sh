#!/bin/bash
if [[ $UID != 0 ]]; then
    echo "Please run this script with sudo:"
    echo "sudo $0 $*"
    exit 1
fi
echo "deb [arch=amd64 trusted=yes] http://192.168.0.50:8000/apt-repo stable main" | tee -a /etc/apt/sources.list
apt-get update
apt-get install itkids-obedy-updater -y
echo "Done!"
exit 1