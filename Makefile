prefix ?= genstack
bucket_prefix ?= $(prefix)-libs-js
env ?= dev
AWS_PROFILE ?= $(prefix)-$(env)
bucket ?= $(env)-$(bucket_prefix)-storybook
cloudfront ?= $(AWS_CLOUDFRONT_DISTRIBUTION_ID_STORYBOOK)
b ?= master
c ?= demo
t ?= $(c)

export CI
export FORCE_COLOR

all: install

build:
	@yarn --silent lerna run build --stream

changed:
	@yarn --silent lerna changed

clean: clean-lib clean-modules clean-coverage clean-buildinfo
clean-buildinfo:
	@find packages/ -name tsconfig.tsbuildinfo -exec rm -rf {} +
clean-coverage:
	@rm -rf coverage/
	@find packages/ -name coverage -type d -exec rm -rf {} +
clean-lib:
	@find packages/ -name lib -type d -exec rm -rf {} +
clean-modules:
	@rm -rf node_modules/
	@find packages/ -name node_modules -type d -exec rm -rf {} +

deploy: deploy-storybooks invalidate-cache
deploy-storybooks:
	@yarn --silent deploy-storybooks

format:
	@yarn lint

generate:
	@yarn --silent genjs

install: install-root install-packages build
install-packages:
	@yarn --silent lerna bootstrap
install-root:
	@yarn --silent install

invalidate-cache:
	@AWS_PROFILE=$(AWS_PROFILE) aws cloudfront create-invalidation --distribution-id $(cloudfront) --paths '/*'

migrate:
	@true

new:
	@yarn --silent yo ./packages/generator-package 2>/dev/null

package-build:
	@cd packages/$(p) && yarn --silent build
package-build-storybook:
	@cd packages/$(p) && yarn --silent build-storybook
package-clear-test:
	@cd packages/$(p) && yarn --silent jest --clearCache
package-generate-svg-components:
	@cd packages/$(p) && yarn --silent generate-svg-components
package-install:
	@yarn --silent lerna bootstrap --scope @genstackio/$(p)
package-storybook:
	@cd packages/$(p) && yarn --silent story
package-test: package-build
	@cd packages/$(p) && yarn --silent test --coverage --detectOpenHandles
package-watch:
	@cd packages/$(p) && yarn watch

pdf-generator:
	@cd ./packages/pdf-generator && mkdir -p generated && ./bin/pdf-generator __fixtures__/$(c).json generated/$(t).pdf

pr:
	@hub pull-request -b $(b)

publish:
	@yarn --silent lerna publish

start-react-admin-core:
	@make package-storybook p=react-admin-core
start-react-admin-ui:
	@make package-storybook p=react-admin-ui

test: build test-only
test-local:
	@yarn --silent test --coverage --detectOpenHandles
test-only:
	@yarn --silent test --runInBand --coverage --detectOpenHandles

watch-figma-plugin-react-admin:
	@make package-watch p=figma-plugin-react-admin

.PHONY: all \
		build \
		changed \
		clean clean-buildinfo clean-coverage clean-lib clean-modules \
		deploy deploy-storybooks \
		format \
		generate \
		install install-packages install-root \
		invalidate-cache \
		migrate \
		new \
		package-build package-build-storybook package-clear-test package-generate-svg-components package-install package-storybook package-test package-watch \
		pdf-generator \
		pr \
		publish \
		start-react-admin-core start-react-admin-ui \
		test test-local test-only \
		watch-figma-plugin-react-admin