npm run build
imageName="lmm1990/nani-doc-web"
docker build -t "$imageName:latest" .
docker push "$imageName:latest"