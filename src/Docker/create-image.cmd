docker build --no-cache -f SQL\Dockerfile.PostgreSql -t diagrammy/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t diagrammy/app ../..
