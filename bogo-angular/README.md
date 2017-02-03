# BOGO: Two Angular Apps in One Container Example Code

See blog for full explanation.

## Commands to Build / Run

```shell
cd side-angular
ng build --prod --bh /sideapp/
cd ../
cd main-angular
ng build --prod
cd ../
docker build -t bogo-angular-apps .
docker run --name bogo-angular -p 80:80 -e UI_REST_HOST='192.168.1.11' -e UI_REST_PORT=8080 -e DOLLAR='$' -dit bogo-angular-apps
```