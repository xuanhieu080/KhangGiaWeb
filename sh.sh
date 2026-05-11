pwd
cd /home/KhangGiaWeb/
export NODE_OPTIONS=--max-old-space-size=19192
yarn build
pwd
echo "cd /home/KhangGiaWeb/"
pm2 reload all