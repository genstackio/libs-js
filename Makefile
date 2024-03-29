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

build: ## Execute the build on all the packages
	@yarn --silent lerna run build --stream

changed: ## Display all changed packages since last publish
	@yarn --silent lerna changed

clean: clean-lib clean-modules clean-coverage clean-buildinfo
clean-buildinfo: ## Remove the Typescript cache file for compilation
	@find packages/ -name tsconfig.tsbuildinfo -exec rm -rf {} +
clean-coverage: ## Remove test coverage directory
	@rm -rf coverage/
	@find packages/ -name coverage -type d -exec rm -rf {} +
clean-lib: ## Remove the Typescript generated directory containing transpiled files
	@find packages/ -name lib -type d -exec rm -rf {} +
clean-modules: ## Remove Javascript dependencies directory
	@rm -rf node_modules/
	@find packages/ -name node_modules -type d -exec rm -rf {} +

deploy: deploy-storybooks invalidate-cache
deploy-storybooks: ## Deploy the already built storybook export directory
	@yarn --silent deploy-storybooks

format:
	@yarn eslint '*/**/*.{js,ts,tsx}' --fix

generate: ## Generate and synchronize the source code using GenJS
	@yarn --silent genjs

install: install-root install-packages build
install-packages: ## Install the dependencies of all packages using Lerna
	@yarn --silent lerna bootstrap
install-root: ## Install the Javascript dependencies
	@yarn --silent install

invalidate-cache: ## Invalidate the CloudFront CDN cache
	@AWS_EC2_METADATA_DISABLED=true AWS_PROFILE=$(AWS_PROFILE) aws cloudfront create-invalidation --distribution-id $(cloudfront) --paths '/*' --no-paginate --color off --no-cli-pager --output text

migrate:
	@true

new: ## Execute the yo ./packages/generator-package 2>/dev/null script (from package.json)
	@yarn --silent yo ./packages/generator-package 2>/dev/null

package-build: ## Build
	@cd packages/$(p) && yarn --silent build
package-build-storybook: ## Build the Storybook to a deployable local directory
	@cd packages/$(p) && yarn --silent build-storybook
package-clear-test: ## Clear test cache
	@cd packages/$(p) && yarn --silent jest --clearCache
package-format:
	@yarn eslint 'packages/$(p)/**/*.{js,ts,tsx}' --quiet --fix
package-generate-svg-components: ## Generate React components from SVG files
	@cd packages/$(p) && yarn --silent generate-svg-components
package-install: ## Install the dependencies of all packages using Lerna
	@yarn --silent lerna bootstrap --scope @genstackio/$(p)
package-storybook: ## Execute the Storybook
	@cd packages/$(p) && yarn --silent story
package-test: package-build ## Execute the tests
	@cd packages/$(p) && yarn --silent test --coverage --detectOpenHandles
package-watch:
	@cd packages/$(p) && yarn watch

pdf-generator:
	@cd ./packages/pdf-generator && mkdir -p generated && ./bin/pdf-generator __fixtures__/$(c).json generated/$(t).pdf

pr:
	@hub pull-request -b $(b)

publish: ## Publish all changed packages
	@yarn --silent lerna publish

qrcode-generator:
	@cd ./packages/qrcode-generator && mkdir -p generated && ./bin/qrcode-generator __fixtures__/$(c).json > generated/$(t).svg

start-react-admin-core:
	@make package-storybook p=react-admin-core
start-react-admin-ui:
	@make package-storybook p=react-admin-ui

test: build test-only
test-local: ## Execute the tests
	@yarn --silent test --coverage --detectOpenHandles
test-only: ## Execute the tests
	@yarn --silent test --runInBand --coverage --detectOpenHandles

watch-figma-plugin-react-admin:
	@make package-watch p=figma-plugin-react-admin

.DEFAULT_GOAL := install
.PHONY: build \
		changed \
		clean clean-buildinfo clean-coverage clean-lib clean-modules \
		deploy deploy-storybooks \
		format \
		generate \
		install install-packages install-root \
		invalidate-cache \
		migrate \
		new \
		package-build package-build-storybook package-clear-test package-format package-generate-svg-components package-install package-storybook package-test package-watch \
		pdf-generator \
		pr \
		publish \
		qrcode-generator \
		start-react-admin-core start-react-admin-ui \
		test test-local test-only \
		watch-figma-plugin-react-admin