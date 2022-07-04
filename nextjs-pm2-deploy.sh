#zero downtime deployment nextjs without vercel

echo "Deploy starting..."

git pull

yarn install || exit

BUILD_DIR=temp yarn build || exit

if [ ! -d "temp" ]; then
  echo '\033[31m temp Directory not exists!\033[0m'
  exit 1;
fi

rm -rf .next

mv temp .next

ARG1=${1:-tictactoe}

pm2 reload $ARG1 --update-env

echo "Deploy done."

#make sure `next.config.js` it set `distDir: process.env.BUILD_DIR`
