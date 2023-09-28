import { parser } from "./parser"
import { LRLanguage, LanguageSupport } from "@codemirror/language"
import { styleTags, tags as t } from "@lezer/highlight"

export const Notation3Language = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Comment: t.comment,
        "@prefix @base PREFIX BASE": t.keyword,
        "String!": t.string,
        Integer: t.integer,
        "Double Decimal": t.float,
        "[ ]": t.squareBracket,
        Langtag: t.annotation,
        "; . ,": t.separator,
        "BlankNode!": t.propertyName,
        "true false": t.bool,
        "VerbPath Pname_ns Pname_ln Iriref": t.namespace,
        Iri: t.url,
        "RDFLiteral/Iri! ^^": t.typeName,
      }),
    ],
  }),
})

export function notation3() {
  return new LanguageSupport(Notation3Language)
}
