npm install && npm install -g reapp
reapp build
reapp build ios
docker build -t utmana-app .
docker tag -f utmana-app tutum.co/iteamdev/utmana-app
docker push tutum.co/iteamdev/utmana-app
