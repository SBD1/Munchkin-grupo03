dkc := "docker-compose.yml"

up: 
	docker run --name db -e POSTGRES_PASSWORD=postgres postgres

build:
	docker network create munchkin
	docker-compose -f ${dkc} build

clean:
	docker-compose -f ${dkc} kill
	docker-compose -f ${dkc} stop
	docker-compose -f ${dkc} down --rmi local --volumes
	docker-compose -f ${dkc} rm -f
	@echo "Containers Docker foram parados e deletados."

migrate:
	docker cp ./src/db/ddl.sql db:/
	docker cp ./src/db/dml.sql db:/
	docker exec db  psql -U postgres postgres -f ddl.sql -o n.out -q teste
	docker exec db  psql -U postgres postgres -f dml.sql -o n.out -q teste

start:
	docker run -it --name munchkin -v $PWD:/app denoland/deno:1.25.2 run --allow-net /app/src/game/main.ts

