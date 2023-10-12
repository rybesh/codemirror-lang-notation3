.PHONY: all pack clean

all: dist/index.js dist/index.d.ts

pack: all
	npm pack

clean:
	rm -rf src/parser.js src/parser.terms.js dist

src/parser.js: src/syntax.grammar
	npx lezer-generator $< -o src/parser

dist/index.js: build.cjs \
	tsconfig.json \
	src/index.ts \
	src/parser.js
	node $<

dist/index.d.ts: src/index.d.ts
	cp -f $< $@
