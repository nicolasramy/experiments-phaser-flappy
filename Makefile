SHELL = /bin/bash

# show this help
help:
	@awk '/^#/{c=substr($$0,3);next}c&&/^[[:alpha:]][[:alnum:]_-]+:/{print substr($$1,1,index($$1,":")),c}1{c=0}' $(MAKEFILE_LIST) | column -s: -t

# prepare the application to be run for the first time
install: images

install: clean
	docker-compose build --force-rm --pull

uninstall: clean
	docker system prune --volumes --force
	git remote prune origin

# start the application
up:
	docker-compose up

# stop and remove artifacts of the application
down:
	docker-compose down --remove-orphans

# create docker images
images:
	docker-compose build --force-rm --pull

# open a bash CLI in the application container
bash:
	docker-compose run --rm app bash

# restart the application
restart:
	docker-compose restart app

dist: cleandist
	# Build Application
	docker-compose run --rm app bash -c "tsc --project tsconfig.json --outDir public"
	#cp app/node_modules/phaser/dist/phaser.min.js app/public/phaser.js

cleandist:
	# Remove artifacts
	find app/public -name *.js -exec rm -f {} \;

clean: cleandist
	# Remove node_modules
	sudo rm -rf app/node_modules
