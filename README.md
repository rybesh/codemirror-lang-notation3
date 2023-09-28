# CodeMirror Notation3 Language Support

<!-- markdownlint-disable-next-line MD013 MD033 -->
<span><a href="https://www.npmjs.com/package/codemirror-lang-notation3" title="NPM version badge"><img src="https://img.shields.io/npm/v/codemirror-lang-notation3?color=blue" alt="NPM version badge" /></a></span>

A CodeMirror extension that provides
[Notation3](https://notation3.org) syntax highlighting and language
support.

Most of the code and grammar for this extension were written by Achraf
Atauil for their
[`codemirror-lang-turtle`](https://github.com/aatauil/codemirror-lang-turtle)
extension.

## Usage

```ts
import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { notation3 } from 'codemirror-lang-notation3';

const doc = `
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix : <http://example.org/>.

{ 
  :weather a :Raining
} => {
  :weather a :Cloudy
} . 
`

new EditorView({
  state: EditorState.create({
    doc,
    extensions: [
      basicSetup,
      notation3(),
    ],
  }),
  parent: document.querySelector('#editor'),
});
```
