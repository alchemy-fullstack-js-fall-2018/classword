# Document Object Model

* The DOM is an interface for programming languages to interact with
documents like HTML and XML. 

* The DOM represents documents as a tree with nodes

## Node Types

From [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents):

* Element node: An element, as it exists in the DOM.
* Root node: The top node in the tree, which in the case of HTML is always the HTML node (other markup vocabularies like SVG and custom XML will have different root elements).
* Child node: A node directly inside another node. For example, IMG is a child of SECTION in the above example.
* Descendant node: A node anywhere inside another node. For example, IMG is a child of SECTION in the above example, and it is also a descendant. IMG is not a child of BODY, as it is two levels below it in the tree, but it is a descendant of BODY.
* Parent node: A node which has another node inside it. For example, BODY is the parent node of SECTION in the above example.
Sibling nodes: Nodes that sit on the same level in the DOM tree. For example, IMG and P are siblings in the above example.
* Text node: A node containing a text string.
