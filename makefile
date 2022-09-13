dkc := "docker-compose.yml"

up:
	docker-compose -f ${dkc} build --quiet
	docker-compose -f ${dkc} up --quiet

network:
	docker network create munchkin

clean:
	docker-compose -f ${dkc} kill
	docker-compose -f ${dkc} stop
	docker-compose -f ${dkc} down --rmi local --volumes
	docker-compose -f ${dkc} rm -f
	@echo "Containers Docker foram parados e deletados."

migrate:
	@echo "Rodando migracoes..."
	docker cp ./src/db/ddl.sql db:/
	docker cp ./src/db/dml.sql db:/
	docker cp ./src/db/triggersSP.sql db:/
	docker exec db  psql -U postgres postgres -f ddl.sql -o n.out -q teste
	docker exec db  psql -U postgres postgres -f dml.sql -o n.out -q teste
	@echo "Rodando Triggers e Stored Procedures..."
	docker exec db  psql -U postgres postgres -f triggersSP.sql -o n.out -q teste
	@echo "Execute o comando make start, para começar a gameplay!"

start:
	docker exec -it app deno run --allow-net --allow-env src/game/main.ts
