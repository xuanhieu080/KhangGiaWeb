pwd
cd /home/DEV-GAK-UI/
export NODE_OPTIONS=--max-old-space-size=19192
yarn build
pwd
echo "cd /home/DEV-GAK-UI/"
pm2 reload all