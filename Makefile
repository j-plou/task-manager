build:
	@docker compose build

up:
	@docker compose up -d --build

shell:
	@docker compose run --rm app /bin/bash

logs:
	@docker compose logs -f app

down:
	@docker compose down

serve_rails:
	bin/rails server

serve_vite:
	bin/vite dev
