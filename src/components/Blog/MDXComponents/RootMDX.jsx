import { myH1, myH2, myH3, myH4, myH5, myH6 } from "./Heading"
import { myP } from "./Paragraph"
import { myBlockquote } from "./Blockquote"
import { myOl, myUl } from "./List"
import { myCode, myInlineCode } from "./Code"
import { myA } from "./Anchor"
import { myStrong } from "./Strong"
import { myTable, myThead, myTbody } from "./Table"
import { myImg } from "./Image"

const components = {
    h1: myH1,
    h2: myH2,
    h3: myH3,
    h4: myH4,
    h5: myH5,
    h6: myH6,
    p: myP,
    a: myA,
    blockquote: myBlockquote,
    ul: myUl,
    ol: myOl,
    pre: myCode,
    inlineCode: myInlineCode,
    strong: myStrong,
    table: myTable,
    thead: myThead,
    tbody: myTbody,
    img: myImg,
}


export { components }