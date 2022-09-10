FROM denoland/deno:1.25.2

RUN mkdir app

WORKDIR /app

COPY . .

CMD ["run", "--allow-net", "src/game/services.ts"]