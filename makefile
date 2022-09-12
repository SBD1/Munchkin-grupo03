dkc := "docker-compose.yml"

up: 
	docker-compose -f ${dkc} build
	docker-compose -f ${dkc} up

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
	docker exec -it app deno run --allow-net --allow-env src/game/main.ts

