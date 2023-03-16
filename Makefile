BUILD_TAG = ""
ifdef tag
	# Build the tag
	BUILD_TAG=":$(tag)"
endif

help:
	@echo "Bounce FE"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build:  ## Build local Docker image
	@docker build . -t bounce-fe$(BUILD_TAG)

.PHONY: local-run
local-run:  ## Run local Docker image
	@docker run -p 3000:3000 -v $(shell pwd)/src:/app/src --rm --name bounce-fe bounce-fe$(BUILD_TAG) "start"

.PHONY: test
test:  ## Run tests
	@docker run -v $(shell pwd)/src:/app/src --rm --name bounce-fe bounce-fe$(BUILD_TAG) "test"

.PHONY: lint
lint:   ## Apply linter
	@docker run -v $(shell pwd)/src:/app/src --rm --name bounce-fe bounce-fe$(BUILD_TAG) "lint"

.PHONY: lint-fix
lint-fix:   ## Apply linter
	@docker run -v $(shell pwd)/src:/app/src --rm --name bounce-fe bounce-fe$(BUILD_TAG) "lint:fix"

.PHONY: clean
clean:  ## Clean all the environment
	@docker rm -f 'bounce-fe'
	@docker rmi $$(docker images 'bounce-fe' -a -q)

# Default command to help
.DEFAULT_GOAL := help
