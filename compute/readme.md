## Execute main.R
## Extract Input data input.R

docker run
docker exec
docker cp
docker down

# 다커 이미지 빌드 하기
```
docker build -t data-t1-base .
```

# 컨테이너 RUN

# 컨테이너 EXEC

docker run -ti --rm -v "$PWD":/usr/local/src/myscripts test-r-base R CMD BATCH main.R

```
docker run -i --rm -v "$PWD":/usr/local/src/myscripts test-r-base R CMD BATCH output.R
```

Will generate output
