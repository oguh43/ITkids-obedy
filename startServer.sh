#!/bin/bash
if [[ $UID != 0 ]]; then
    echo "Please run this script with sudo:"
    echo "sudo $0 $*"
    exit 1
fi
declare -A passw=( ["student01"]="student.01" ["student02"]="student.02" ["student03"]="student.03" ["student04"]="student.04" ["student05"]="student.05" ["student06"]="student.06" ["student07"]="student.07" ["student08"]="student.08" ["student09"]="student.09" ["student10"]="student.10" ["student11"]="student.11" ["student12"]="student.12")
apt-get install sshpass -y
if nc -w1 -z 192.168.0.50 8000; then
  echo "Port is listening, server is up!"
  exit 0
else
  echo "Port is not listening"
  sshpass -p ${passw[$HOSTNAME]} ssh "local" "cd home/localweb && ./start.sh"
  echo "Done!"
  exit 0
fi
