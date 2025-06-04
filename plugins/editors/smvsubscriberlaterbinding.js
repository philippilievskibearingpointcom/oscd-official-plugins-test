import "@material/mwc-icon";
import { List as Tr } from "@material/mwc-list";
import "@material/mwc-menu";
import "@material/mwc-icon-button";
import { Select as zr } from "@material/mwc-select";
import "@material/mwc-switch";
import { TextField as Pr } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-button";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const bi = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Vr = (e, t, i = null, n = null) => {
  for (; t !== i; ) {
    const r = t.nextSibling;
    e.insertBefore(t, n), t = r;
  }
}, Qt = (e, t, i = null) => {
  for (; t !== i; ) {
    const n = t.nextSibling;
    e.removeChild(t), t = n;
  }
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ge = `{{lit-${String(Math.random()).slice(2)}}}`, Yi = `<!--${ge}-->`, gi = new RegExp(`${ge}|${Yi}`), Ze = "$lit$";
class en {
  constructor(t, i) {
    this.parts = [], this.element = i;
    const n = [], r = [], a = document.createTreeWalker(i.content, 133, null, !1);
    let s = 0, o = -1, l = 0;
    const { strings: d, values: { length: m } } = t;
    for (; l < m; ) {
      const h = a.nextNode();
      if (h === null) {
        a.currentNode = r.pop();
        continue;
      }
      if (o++, h.nodeType === 1) {
        if (h.hasAttributes()) {
          const b = h.attributes, { length: g } = b;
          let w = 0;
          for (let C = 0; C < g; C++)
            yi(b[C].name, Ze) && w++;
          for (; w-- > 0; ) {
            const C = d[l], I = Tt.exec(C)[2], x = I.toLowerCase() + Ze, V = h.getAttribute(x);
            h.removeAttribute(x);
            const F = V.split(gi);
            this.parts.push({ type: "attribute", index: o, name: I, strings: F }), l += F.length - 1;
          }
        }
        h.tagName === "TEMPLATE" && (r.push(h), a.currentNode = h.content);
      } else if (h.nodeType === 3) {
        const b = h.data;
        if (b.indexOf(ge) >= 0) {
          const g = h.parentNode, w = b.split(gi), C = w.length - 1;
          for (let I = 0; I < C; I++) {
            let x, V = w[I];
            if (V === "")
              x = ke();
            else {
              const F = Tt.exec(V);
              F !== null && yi(F[2], Ze) && (V = V.slice(0, F.index) + F[1] + F[2].slice(0, -Ze.length) + F[3]), x = document.createTextNode(V);
            }
            g.insertBefore(x, h), this.parts.push({ type: "node", index: ++o });
          }
          w[C] === "" ? (g.insertBefore(ke(), h), n.push(h)) : h.data = w[C], l += C;
        }
      } else if (h.nodeType === 8)
        if (h.data === ge) {
          const b = h.parentNode;
          (h.previousSibling === null || o === s) && (o++, b.insertBefore(ke(), h)), s = o, this.parts.push({ type: "node", index: o }), h.nextSibling === null ? h.data = "" : (n.push(h), o--), l++;
        } else {
          let b = -1;
          for (; (b = h.data.indexOf(ge, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), l++;
        }
    }
    for (const h of n)
      h.parentNode.removeChild(h);
  }
}
const yi = (e, t) => {
  const i = e.length - t.length;
  return i >= 0 && e.slice(i) === t;
}, tn = (e) => e.index !== -1, ke = () => document.createComment(""), Tt = (
  // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Jt = 133;
function nn(e, t) {
  const { element: { content: i }, parts: n } = e, r = document.createTreeWalker(i, Jt, null, !1);
  let a = Xe(n), s = n[a], o = -1, l = 0;
  const d = [];
  let m = null;
  for (; r.nextNode(); ) {
    o++;
    const h = r.currentNode;
    for (h.previousSibling === m && (m = null), t.has(h) && (d.push(h), m === null && (m = h)), m !== null && l++; s !== void 0 && s.index === o; )
      s.index = m !== null ? -1 : s.index - l, a = Xe(n, a), s = n[a];
  }
  d.forEach((h) => h.parentNode.removeChild(h));
}
const Rr = (e) => {
  let t = e.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(e, Jt, null, !1);
  for (; i.nextNode(); )
    t++;
  return t;
}, Xe = (e, t = -1) => {
  for (let i = t + 1; i < e.length; i++) {
    const n = e[i];
    if (tn(n))
      return i;
  }
  return -1;
};
function Or(e, t, i = null) {
  const { element: { content: n }, parts: r } = e;
  if (i == null) {
    n.appendChild(t);
    return;
  }
  const a = document.createTreeWalker(n, Jt, null, !1);
  let s = Xe(r), o = 0, l = -1;
  for (; a.nextNode(); )
    for (l++, a.currentNode === i && (o = Rr(t), i.parentNode.insertBefore(t, i)); s !== -1 && r[s].index === l; ) {
      if (o > 0) {
        for (; s !== -1; )
          r[s].index += o, s = Xe(r, s);
        return;
      }
      s = Xe(r, s);
    }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const rn = /* @__PURE__ */ new WeakMap(), vt = (e) => (...t) => {
  const i = e(...t);
  return rn.set(i, !0), i;
}, et = (e) => typeof e == "function" && rn.has(e);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ce = {}, De = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class zt {
  constructor(t, i, n) {
    this.__parts = [], this.template = t, this.processor = i, this.options = n;
  }
  update(t) {
    let i = 0;
    for (const n of this.__parts)
      n !== void 0 && n.setValue(t[i]), i++;
    for (const n of this.__parts)
      n !== void 0 && n.commit();
  }
  _clone() {
    const t = bi ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(t, 133, null, !1);
    let a = 0, s = 0, o, l = r.nextNode();
    for (; a < n.length; ) {
      if (o = n[a], !tn(o)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; s < o.index; )
        s++, l.nodeName === "TEMPLATE" && (i.push(l), r.currentNode = l.content), (l = r.nextNode()) === null && (r.currentNode = i.pop(), l = r.nextNode());
      if (o.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(l.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(l, o.name, o.strings, this.options));
      a++;
    }
    return bi && (document.adoptNode(t), customElements.upgrade(t)), t;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const vi = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (e) => e }), Mr = ` ${ge} `;
class Yt {
  constructor(t, i, n, r) {
    this.strings = t, this.values = i, this.type = n, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const t = this.strings.length - 1;
    let i = "", n = !1;
    for (let r = 0; r < t; r++) {
      const a = this.strings[r], s = a.lastIndexOf("<!--");
      n = (s > -1 || n) && a.indexOf("-->", s + 1) === -1;
      const o = Tt.exec(a);
      o === null ? i += a + (n ? Mr : Yi) : i += a.substr(0, o.index) + o[1] + o[2] + Ze + o[3] + ge;
    }
    return i += this.strings[t], i;
  }
  getTemplateElement() {
    const t = document.createElement("template");
    let i = this.getHTML();
    return vi !== void 0 && (i = vi.createHTML(i)), t.innerHTML = i, t;
  }
}
class Fr extends Yt {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const t = super.getTemplateElement(), i = t.content, n = i.firstChild;
    return i.removeChild(n), Vr(i, n.firstChild), t;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const St = (e) => e === null || !(typeof e == "object" || typeof e == "function"), Pt = (e) => Array.isArray(e) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(e && e[Symbol.iterator]);
class an {
  constructor(t, i, n) {
    this.dirty = !0, this.element = t, this.name = i, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new We(this);
  }
  _getValue() {
    const t = this.strings, i = t.length - 1, n = this.parts;
    if (i === 1 && t[0] === "" && t[1] === "") {
      const a = n[0].value;
      if (typeof a == "symbol")
        return String(a);
      if (typeof a == "string" || !Pt(a))
        return a;
    }
    let r = "";
    for (let a = 0; a < i; a++) {
      r += t[a];
      const s = n[a];
      if (s !== void 0) {
        const o = s.value;
        if (St(o) || !Pt(o))
          r += typeof o == "string" ? o : String(o);
        else
          for (const l of o)
            r += typeof l == "string" ? l : String(l);
      }
    }
    return r += t[i], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class We {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== ce && (!St(t) || t !== this.value) && (this.value = t, et(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; et(this.value); ) {
      const t = this.value;
      this.value = ce, t(this);
    }
    this.value !== ce && this.committer.commit();
  }
}
class at {
  constructor(t) {
    this.value = void 0, this.__pendingValue = void 0, this.options = t;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(t) {
    this.startNode = t.appendChild(ke()), this.endNode = t.appendChild(ke());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(t) {
    this.startNode = t, this.endNode = t.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(t) {
    t.__insert(this.startNode = ke()), t.__insert(this.endNode = ke());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(t) {
    t.__insert(this.startNode = ke()), this.endNode = t.endNode, t.endNode = this.startNode;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; et(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = ce, i(this);
    }
    const t = this.__pendingValue;
    t !== ce && (St(t) ? t !== this.value && this.__commitText(t) : t instanceof Yt ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Pt(t) ? this.__commitIterable(t) : t === De ? (this.value = De, this.clear()) : this.__commitText(t));
  }
  __insert(t) {
    this.endNode.parentNode.insertBefore(t, this.endNode);
  }
  __commitNode(t) {
    this.value !== t && (this.clear(), this.__insert(t), this.value = t);
  }
  __commitText(t) {
    const i = this.startNode.nextSibling;
    t = t ?? "";
    const n = typeof t == "string" ? t : String(t);
    i === this.endNode.previousSibling && i.nodeType === 3 ? i.data = n : this.__commitNode(document.createTextNode(n)), this.value = t;
  }
  __commitTemplateResult(t) {
    const i = this.options.templateFactory(t);
    if (this.value instanceof zt && this.value.template === i)
      this.value.update(t.values);
    else {
      const n = new zt(i, t.processor, this.options), r = n._clone();
      n.update(t.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(t) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const a of t)
      r = i[n], r === void 0 && (r = new at(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(a), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(t = this.startNode) {
    Qt(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
class qr {
  constructor(t, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = t, this.name = i, this.strings = n;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; et(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = ce, i(this);
    }
    if (this.__pendingValue === ce)
      return;
    const t = !!this.__pendingValue;
    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = ce;
  }
}
class Hr extends an {
  constructor(t, i, n) {
    super(t, i, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new ei(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class ei extends We {
}
let sn = !1;
(() => {
  try {
    const e = {
      get capture() {
        return sn = !0, !1;
      }
    };
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch {
  }
})();
class Br {
  constructor(t, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; et(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = ce, a(this);
    }
    if (this.__pendingValue === ce)
      return;
    const t = this.__pendingValue, i = this.value, n = t == null || i != null && (t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive), r = t != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = Gr(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = ce;
  }
  handleEvent(t) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
  }
}
const Gr = (e) => e && (sn ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function Wr(e) {
  let t = tt.get(e.type);
  t === void 0 && (t = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, tt.set(e.type, t));
  let i = t.stringsArray.get(e.strings);
  if (i !== void 0)
    return i;
  const n = e.strings.join(ge);
  return i = t.keyString.get(n), i === void 0 && (i = new en(e, e.getTemplateElement()), t.keyString.set(n, i)), t.stringsArray.set(e.strings, i), i;
}
const tt = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Be = /* @__PURE__ */ new WeakMap(), ti = (e, t, i) => {
  let n = Be.get(t);
  n === void 0 && (Qt(t, t.firstChild), Be.set(t, n = new at(Object.assign({ templateFactory: Wr }, i))), n.appendInto(t)), n.setValue(e), n.commit();
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ur {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(t, i, n, r) {
    const a = i[0];
    return a === "." ? new Hr(t, i.slice(1), n).parts : a === "@" ? [new Br(t, i.slice(1), r.eventContext)] : a === "?" ? [new qr(t, i.slice(1), n)] : new an(t, i, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(t) {
    return new at(t);
  }
}
const on = new Ur();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const u = (e, ...t) => new Yt(e, t, "html", on), z = (e, ...t) => new Fr(e, t, "svg", on);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const cn = (e, t) => `${e}--${t}`;
let gt = !0;
typeof window.ShadyCSS > "u" ? gt = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), gt = !1);
const jr = (e) => (t) => {
  const i = cn(t.type, e);
  let n = tt.get(i);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, tt.set(i, n));
  let r = n.stringsArray.get(t.strings);
  if (r !== void 0)
    return r;
  const a = t.strings.join(ge);
  if (r = n.keyString.get(a), r === void 0) {
    const s = t.getTemplateElement();
    gt && window.ShadyCSS.prepareTemplateDom(s, e), r = new en(t, s), n.keyString.set(a, r);
  }
  return n.stringsArray.set(t.strings, r), r;
}, Kr = ["html", "svg"], Zr = (e) => {
  Kr.forEach((t) => {
    const i = tt.get(cn(t, e));
    i !== void 0 && i.keyString.forEach((n) => {
      const { element: { content: r } } = n, a = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((s) => {
        a.add(s);
      }), nn(n, a);
    });
  });
}, ln = /* @__PURE__ */ new Set(), Xr = (e, t, i) => {
  ln.add(e);
  const n = i ? i.element : document.createElement("template"), r = t.querySelectorAll("style"), { length: a } = r;
  if (a === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, e);
    return;
  }
  const s = document.createElement("style");
  for (let d = 0; d < a; d++) {
    const m = r[d];
    m.parentNode.removeChild(m), s.textContent += m.textContent;
  }
  Zr(e);
  const o = n.content;
  i ? Or(i, s, o.firstChild) : o.insertBefore(s, o.firstChild), window.ShadyCSS.prepareTemplateStyles(n, e);
  const l = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && l !== null)
    t.insertBefore(l.cloneNode(!0), t.firstChild);
  else if (i) {
    o.insertBefore(s, o.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(s), nn(i, d);
  }
}, Qr = (e, t, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = i.scopeName, r = Be.has(t), a = gt && t.nodeType === 11 && !!t.host, s = a && !ln.has(n), o = s ? document.createDocumentFragment() : t;
  if (ti(e, o, Object.assign({ templateFactory: jr(n) }, i)), s) {
    const l = Be.get(o);
    Be.delete(o);
    const d = l.value instanceof zt ? l.value.template : void 0;
    Xr(n, o, d), Qt(t, t.firstChild), t.appendChild(o), Be.set(t, l);
  }
  !r && a && window.ShadyCSS.styleElement(t.host);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var dn;
window.JSCompiler_renameProperty = (e, t) => e;
const Vt = {
  toAttribute(e, t) {
    switch (t) {
      case Boolean:
        return e ? "" : null;
      case Object:
      case Array:
        return e == null ? e : JSON.stringify(e);
    }
    return e;
  },
  fromAttribute(e, t) {
    switch (t) {
      case Boolean:
        return e !== null;
      case Number:
        return e === null ? null : Number(e);
      case Object:
      case Array:
        return JSON.parse(e);
    }
    return e;
  }
}, un = (e, t) => t !== e && (t === t || e === e), Et = {
  attribute: !0,
  type: String,
  converter: Vt,
  reflect: !1,
  hasChanged: un
}, It = 1, Si = 4, Ai = 8, wi = 16, Rt = "finalized";
class pn extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this._classProperties.forEach((i, n) => {
      const r = this._attributeNameForProperty(n, i);
      r !== void 0 && (this._attributeToPropertyMap.set(r, n), t.push(r));
    }), t;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */
  /** @nocollapse */
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = /* @__PURE__ */ new Map();
      const t = Object.getPrototypeOf(this)._classProperties;
      t !== void 0 && t.forEach((i, n) => this._classProperties.set(n, i));
    }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a PropertyDeclaration for the property with the given options.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   *
   * @nocollapse
   */
  static createProperty(t, i = Et) {
    if (this._ensureClassProperties(), this._classProperties.set(t, i), i.noAccessor || this.prototype.hasOwnProperty(t))
      return;
    const n = typeof t == "symbol" ? Symbol() : `__${t}`, r = this.getPropertyDescriptor(t, n, i);
    r !== void 0 && Object.defineProperty(this.prototype, t, r);
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   *   class MyElement extends LitElement {
   *     static getPropertyDescriptor(name, key, options) {
   *       const defaultDescriptor =
   *           super.getPropertyDescriptor(name, key, options);
   *       const setter = defaultDescriptor.set;
   *       return {
   *         get: defaultDescriptor.get,
   *         set(value) {
   *           setter.call(this, value);
   *           // custom action.
   *         },
   *         configurable: true,
   *         enumerable: true
   *       }
   *     }
   *   }
   *
   * @nocollapse
   */
  static getPropertyDescriptor(t, i, n) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[i];
      },
      set(r) {
        const a = this[t];
        this[i] = r, this.requestUpdateInternal(t, a, n);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a PropertyDeclaration via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override `createProperty`.
   *
   * @nocollapse
   * @final
   */
  static getPropertyOptions(t) {
    return this._classProperties && this._classProperties.get(t) || Et;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (t.hasOwnProperty(Rt) || t.finalize(), this[Rt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const i = this.properties, n = [
        ...Object.getOwnPropertyNames(i),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(i) : []
      ];
      for (const r of n)
        this.createProperty(r, i[r]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(t, i) {
    const n = i.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(t, i, n = un) {
    return n(t, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(t, i) {
    const n = i.type, r = i.converter || Vt, a = typeof r == "function" ? r : r.fromAttribute;
    return a ? a(t, n) : t;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(t, i) {
    if (i.reflect === void 0)
      return;
    const n = i.type, r = i.converter;
    return (r && r.toAttribute || Vt.toAttribute)(t, n);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */
  initialize() {
    this._updateState = 0, this._updatePromise = new Promise((t) => this._enableUpdatingResolver = t), this._changedProperties = /* @__PURE__ */ new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((t, i) => {
      if (this.hasOwnProperty(i)) {
        const n = this[i];
        delete this[i], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(i, n);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t, i) => this[i] = t), this._instanceProperties = void 0;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    this._enableUpdatingResolver !== void 0 && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */
  disconnectedCallback() {
  }
  /**
   * Synchronizes property values when attributes change.
   */
  attributeChangedCallback(t, i, n) {
    i !== n && this._attributeToProperty(t, n);
  }
  _propertyToAttribute(t, i, n = Et) {
    const r = this.constructor, a = r._attributeNameForProperty(t, n);
    if (a !== void 0) {
      const s = r._propertyValueToAttribute(i, n);
      if (s === void 0)
        return;
      this._updateState = this._updateState | Ai, s == null ? this.removeAttribute(a) : this.setAttribute(a, s), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(t, i) {
    if (this._updateState & Ai)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(t);
    if (r !== void 0) {
      const a = n.getPropertyOptions(r);
      this._updateState = this._updateState | wi, this[r] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(i, a), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(t, i, n) {
    let r = !0;
    if (t !== void 0) {
      const a = this.constructor;
      n = n || a.getPropertyOptions(t), a._valueHasChanged(this[t], i, n.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, i), n.reflect === !0 && !(this._updateState & wi) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(t, n))) : r = !1;
    }
    !this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate());
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */
  requestUpdate(t, i) {
    return this.requestUpdateInternal(t, i), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | Si;
    try {
      await this._updatePromise;
    } catch {
    }
    const t = this.performUpdate();
    return t != null && await t, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Si;
  }
  get hasUpdated() {
    return this._updateState & It;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */
  performUpdate() {
    if (!this._hasRequestedUpdate)
      return;
    this._instanceProperties && this._applyInstanceProperties();
    let t = !1;
    const i = this._changedProperties;
    try {
      t = this.shouldUpdate(i), t ? this.update(i) : this._markUpdated();
    } catch (n) {
      throw t = !1, this._markUpdated(), n;
    }
    t && (this._updateState & It || (this._updateState = this._updateState | It, this.firstUpdated(i)), this.updated(i));
  }
  _markUpdated() {
    this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = this._updateState & -5;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `_getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super._getUpdateComplete()`, then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */
  get updateComplete() {
    return this._getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async _getUpdateComplete() {
   *       await super._getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   * @deprecated Override `getUpdateComplete()` instead for forward
   *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
   */
  _getUpdateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async getUpdateComplete() {
   *       await super.getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   */
  getUpdateComplete() {
    return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  shouldUpdate(t) {
    return !0;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  update(t) {
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((i, n) => this._propertyToAttribute(n, this[n], i)), this._reflectingProperties = void 0), this._markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  updated(t) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  firstUpdated(t) {
  }
}
dn = Rt;
pn[dn] = !0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Jr = (e, t) => (window.customElements.define(e, t), t), Yr = (e, t) => {
  const { kind: i, elements: n } = t;
  return {
    kind: i,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(e, r);
    }
  };
}, de = (e) => (t) => typeof t == "function" ? Jr(e, t) : Yr(e, t), ea = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), { finisher(i) {
  i.createProperty(t.key, e);
} }) : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  // When @babel/plugin-proposal-decorators implements initializers,
  // do this instead of the initializer below. See:
  // https://github.com/babel/babel/issues/9260 extras: [
  //   {
  //     kind: 'initializer',
  //     placement: 'own',
  //     initializer: descriptor.initializer,
  //   }
  // ],
  initializer() {
    typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
  },
  finisher(i) {
    i.createProperty(t.key, e);
  }
}, ta = (e, t, i) => {
  t.constructor.createProperty(i, e);
};
function y(e) {
  return (t, i) => i !== void 0 ? ta(e, t, i) : ea(e, t);
}
function ia(e) {
  return y({ attribute: !1, hasChanged: void 0 });
}
const L = (e) => ia();
function q(e, t) {
  return (i, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? ii(r, i, n) : ni(r, i);
  };
}
function mn(e) {
  return (t, i) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? ii(n, t, i) : ni(n, t);
  };
}
const ii = (e, t, i) => {
  Object.defineProperty(t, i, e);
}, ni = (e, t) => ({
  kind: "method",
  placement: "prototype",
  key: t.key,
  descriptor: e
}), na = (e, t) => Object.assign(Object.assign({}, t), { finisher(i) {
  Object.assign(i.prototype[t.key], e);
} }), ra = (
  // tslint:disable-next-line:no-any legacy decorator
  (e, t, i) => {
    Object.assign(t[i], e);
  }
);
function aa(e) {
  return (t, i) => i !== void 0 ? ra(e, t, i) : na(e, t);
}
const xi = Element.prototype, sa = xi.msMatchesSelector || xi.webkitMatchesSelector;
function hn(e = "", t = !1, i = "") {
  return (n, r) => {
    const a = {
      get() {
        const s = `slot${e ? `[name=${e}]` : ":not([name])"}`, o = this.renderRoot.querySelector(s);
        let l = o && o.assignedNodes({ flatten: t });
        return l && i && (l = l.filter((d) => d.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (d.matches ? d.matches(i) : sa.call(d, i)))), l;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? ii(a, n, r) : ni(a, n);
  };
}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ot = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ri = Symbol();
class ai {
  constructor(t, i) {
    if (i !== ri)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Ot ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const fn = (e) => new ai(String(e), ri), oa = (e) => {
  if (e instanceof ai)
    return e.cssText;
  if (typeof e == "number")
    return e;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, he = (e, ...t) => {
  const i = t.reduce((n, r, a) => n + oa(r) + e[a + 1], e[0]);
  return new ai(i, ri);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
const Ci = {};
class ue extends pn {
  /**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */
  static getStyles() {
    return this.styles;
  }
  /** @nocollapse */
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
      return;
    const t = this.getStyles();
    if (Array.isArray(t)) {
      const i = (a, s) => a.reduceRight((o, l) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(l) ? i(l, o) : (o.add(l), o)
      ), s), n = i(t, /* @__PURE__ */ new Set()), r = [];
      n.forEach((a) => r.unshift(a)), this._styles = r;
    } else
      this._styles = t === void 0 ? [] : [t];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !Ot) {
        const n = Array.prototype.slice.call(i.cssRules).reduce((r, a) => r + a.cssText, "");
        return fn(n);
      }
      return i;
    });
  }
  /**
   * Performs element initialization. By default this calls
   * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
   * captures any pre-set values for registered properties.
   */
  initialize() {
    super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */
  createRenderRoot() {
    return this.attachShadow(this.constructor.shadowRootOptions);
  }
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */
  adoptStyles() {
    const t = this.constructor._styles;
    t.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((i) => i.cssText), this.localName) : Ot ? this.renderRoot.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
  }
  connectedCallback() {
    super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this);
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param _changedProperties Map of changed properties with old values
   */
  update(t) {
    const i = this.render();
    super.update(t), i !== Ci && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n.cssText, this.renderRoot.appendChild(r);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return Ci;
  }
}
ue.finalized = !0;
ue.render = Qr;
ue.shadowRootOptions = { mode: "open" };
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ca {
  constructor(t) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = t;
    const i = (t.getAttribute("class") || "").split(/\s+/);
    for (const n of i)
      this.classes.add(n);
  }
  add(t) {
    this.classes.add(t), this.changed = !0;
  }
  remove(t) {
    this.classes.delete(t), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let t = "";
      this.classes.forEach((i) => t += i + " "), this.element.setAttribute("class", t);
    }
  }
}
const Ni = /* @__PURE__ */ new WeakMap(), Ve = vt((e) => (t) => {
  if (!(t instanceof We) || t instanceof ei || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: n } = i;
  let r = Ni.get(t);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Ni.set(t, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new ca(n);
  r.forEach((s) => {
    s in e || (a.remove(s), r.delete(s));
  });
  for (const s in e) {
    const o = e[s];
    o != r.has(s) && (o ? (a.add(s), r.add(s)) : (a.remove(s), r.delete(s)));
  }
  typeof a.commit == "function" && a.commit();
}), la = 1e3 * 60, Mt = "langChanged";
function da(e, t, i) {
  return Object.entries(Ft(t || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Ft(a))), e);
}
function ua(e, t) {
  const i = e.split(".");
  let n = t.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function Ft(e) {
  return typeof e == "function" ? e() : e;
}
const pa = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: ua,
  interpolate: da,
  translationCache: {}
});
let it = pa();
function ma(e) {
  return it = Object.assign(Object.assign({}, it), e);
}
function ha(e) {
  window.dispatchEvent(new CustomEvent(Mt, { detail: e }));
}
function fa(e, t, i = it) {
  ha({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function ba(e, t) {
  const i = (n) => e(n.detail);
  return window.addEventListener(Mt, i, t), () => window.removeEventListener(Mt, i);
}
async function ga(e, t = it) {
  const i = await t.loader(e, t);
  t.translationCache = {}, fa(e, i, t);
}
function c(e, t, i = it) {
  let n = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? Ft(t) : null, t != null ? i.interpolate(n, t, i) : n;
}
function bn(e) {
  return e instanceof at ? e.startNode.isConnected : e instanceof We ? e.committer.element.isConnected : e.element.isConnected;
}
function ya(e) {
  for (const [t] of e)
    bn(t) || e.delete(t);
}
function va(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Sa(e, t) {
  setInterval(() => va(() => ya(e)), t);
}
const gn = /* @__PURE__ */ new Map();
function Aa() {
  ba((e) => {
    for (const [t, i] of gn)
      bn(t) && wa(t, i, e);
  });
}
Aa();
Sa(gn, la);
function wa(e, t, i) {
  const n = t(i);
  e.value !== n && (e.setValue(n), e.commit());
}
var qt = function(e, t) {
  return qt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, qt(e, t);
};
function xa(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qt(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var Qe = function() {
  return Qe = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, Qe.apply(this, arguments);
};
function v(e, t, i, n) {
  var r = arguments.length, a = r < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, n);
  else for (var o = e.length - 1; o >= 0; o--) (s = e[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(t, i, a) : s(t, i)) || a);
  return r > 3 && a && Object.defineProperty(t, i, a), a;
}
function ct(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], n = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ca(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Na = (e) => e.nodeType === Node.ELEMENT_NODE, yn = () => {
}, Ea = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", yn, Ea);
document.removeEventListener("x", yn);
const vn = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, Ia = (e) => {
  const t = vn();
  if (!t.length)
    return !1;
  const i = t[t.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (s) => {
    r = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class si extends ue {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus(), this.mdcRoot.click();
      return;
    }
    super.click();
  }
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Sn = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.adapter = t;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
    }, e.prototype.destroy = function() {
    }, e;
  }()
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ka = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, _a = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ei = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Da(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var n = t.x, r = t.y, a = n + i.left, s = r + i.top, o, l;
  if (e.type === "touchstart") {
    var d = e;
    o = d.changedTouches[0].pageX - a, l = d.changedTouches[0].pageY - s;
  } else {
    var m = e;
    o = m.pageX - a, l = m.pageY - s;
  }
  return { x: o, y: l };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ii = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ki = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], lt = [], $a = (
  /** @class */
  function(e) {
    xa(t, e);
    function t(i) {
      var n = e.call(this, Qe(Qe({}, t.defaultAdapter), i)) || this;
      return n.activationAnimationHasEnded = !1, n.activationTimer = 0, n.fgDeactivationRemovalTimer = 0, n.fgScale = "0", n.frame = { width: 0, height: 0 }, n.initialSize = 0, n.layoutFrame = 0, n.maxRadius = 0, n.unboundedCoords = { left: 0, top: 0 }, n.activationState = n.defaultActivationState(), n.activationTimerCallback = function() {
        n.activationAnimationHasEnded = !0, n.runDeactivationUXLogicIfReady();
      }, n.activateHandler = function(r) {
        n.activateImpl(r);
      }, n.deactivateHandler = function() {
        n.deactivateImpl();
      }, n.focusHandler = function() {
        n.handleFocus();
      }, n.blurHandler = function() {
        n.handleBlur();
      }, n.resizeHandler = function() {
        n.layout();
      }, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return ka;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return _a;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Ei;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      var i = this, n = this.supportsPressRipple();
      if (this.registerRootHandlers(n), n) {
        var r = t.cssClasses, a = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(s), i.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var n = t.cssClasses, r = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(r), i.adapter.removeClass(a), i.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, t.prototype.activate = function(i) {
      this.activateImpl(i);
    }, t.prototype.deactivate = function() {
      this.deactivateImpl();
    }, t.prototype.layout = function() {
      var i = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        i.layoutInternal(), i.layoutFrame = 0;
      });
    }, t.prototype.setUnbounded = function(i) {
      var n = t.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, t.prototype.handleFocus = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.addClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.handleBlur = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.removeClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, t.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, t.prototype.registerRootHandlers = function(i) {
      var n, r;
      if (i) {
        try {
          for (var a = ct(Ii), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, t.prototype.registerDeactivationHandlers = function(i) {
      var n, r;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = ct(ki), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = ct(Ii), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var i, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = ct(ki), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var i = this, n = t.strings, r = Object.keys(n);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(n[a], null);
      });
    }, t.prototype.activateImpl = function(i) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, s = a && i !== void 0 && a.type !== i.type;
          if (!s) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var o = i !== void 0 && lt.length > 0 && lt.some(function(l) {
              return n.adapter.containsEventTarget(l);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (lt.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              lt = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, n = t.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, s = t.cssClasses, o = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, d = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), g = b.startPoint, w = b.endPoint;
        m = g.x + "px, " + g.y + "px", h = w.x + "px, " + w.y + "px";
      }
      this.adapter.updateCssVariable(r, m), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = Da(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = t.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, s = r.isActivated, o = a || !s;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, Ei.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var i = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var i = this, n = this.activationState;
      if (n.isActivated) {
        var r = Qe({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(r), i.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(i) {
      var n = i.wasActivatedByPointer, r = i.wasElementMadeActive;
      (n || r) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame.height, this.frame.width), r = function() {
        var s = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return s + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, a = i.VAR_TOP, s = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(Sn)
);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _i = /* @__PURE__ */ new WeakMap(), La = vt((e) => (t) => {
  if (!(t instanceof We) || t instanceof ei || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: n } = i.element;
  let r = _i.get(t);
  r === void 0 && (n.cssText = i.strings.join(" "), _i.set(t, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in e || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in e)
    r.add(a), a.indexOf("-") === -1 ? n[a] = e[a] : n.setProperty(a, e[a]);
});
class H extends si {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = $a;
  }
  get isActive() {
    return Ca(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (t) => {
        switch (t) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
            break;
        }
      },
      removeClass: (t) => {
        switch (t) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
            break;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      registerDocumentInteractionHandler: () => {
      },
      deregisterDocumentInteractionHandler: () => {
      },
      registerResizeHandler: () => {
      },
      deregisterResizeHandler: () => {
      },
      updateCssVariable: (t, i) => {
        switch (t) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = i;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = i;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = i;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = i;
            break;
          case "--mdc-ripple-left":
            this.leftPos = i;
            break;
          case "--mdc-ripple-top":
            this.topPos = i;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(t) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(t);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(t) {
    this.mdcFoundation ? t() : this.updateComplete.then(t);
  }
  update(t) {
    t.has("disabled") && this.disabled && this.endHover(), super.update(t);
  }
  /** @soyTemplate */
  render() {
    const t = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), n = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": t,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": i,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return u`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ve(n)}"
          style="${La({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
v([
  q(".mdc-ripple-surface")
], H.prototype, "mdcRoot", void 0);
v([
  y({ type: Boolean })
], H.prototype, "primary", void 0);
v([
  y({ type: Boolean })
], H.prototype, "accent", void 0);
v([
  y({ type: Boolean })
], H.prototype, "unbounded", void 0);
v([
  y({ type: Boolean })
], H.prototype, "disabled", void 0);
v([
  y({ type: Boolean })
], H.prototype, "activated", void 0);
v([
  y({ type: Boolean })
], H.prototype, "selected", void 0);
v([
  y({ type: Boolean })
], H.prototype, "internalUseStateLayerCustomProperties", void 0);
v([
  L()
], H.prototype, "hovering", void 0);
v([
  L()
], H.prototype, "bgFocused", void 0);
v([
  L()
], H.prototype, "fgActivation", void 0);
v([
  L()
], H.prototype, "fgDeactivation", void 0);
v([
  L()
], H.prototype, "fgScale", void 0);
v([
  L()
], H.prototype, "fgSize", void 0);
v([
  L()
], H.prototype, "translateStart", void 0);
v([
  L()
], H.prototype, "translateEnd", void 0);
v([
  L()
], H.prototype, "leftPos", void 0);
v([
  L()
], H.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ta = he`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Ht = class extends H {
};
Ht.styles = [Ta];
Ht = v([
  de("mwc-ripple")
], Ht);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $e = (e) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, i) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const n = t.constructor._observers;
        t.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, a) => t.constructor._observers.set(a, r)
        );
      }
    } else {
      t.constructor._observers = /* @__PURE__ */ new Map();
      const n = t.updated;
      t.updated = function(r) {
        n.call(this, r), r.forEach((a, s) => {
          const l = this.constructor._observers.get(s);
          l !== void 0 && l.call(this, this[s], a);
        });
      };
    }
    t.constructor._observers.set(i, e);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class An {
  constructor(t) {
    this.startPress = (i) => {
      t().then((n) => {
        n && n.startPress(i);
      });
    }, this.endPress = () => {
      t().then((i) => {
        i && i.endPress();
      });
    }, this.startFocus = () => {
      t().then((i) => {
        i && i.startFocus();
      });
    }, this.endFocus = () => {
      t().then((i) => {
        i && i.endFocus();
      });
    }, this.startHover = () => {
      t().then((i) => {
        i && i.startHover();
      });
    }, this.endHover = () => {
      t().then((i) => {
        i && i.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class U extends ue {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new An(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
      {
        target: this,
        eventNames: ["click"],
        cb: () => {
          this.onClick();
        }
      },
      {
        target: this,
        eventNames: ["mouseenter"],
        cb: this.rippleHandlers.startHover
      },
      {
        target: this,
        eventNames: ["mouseleave"],
        cb: this.rippleHandlers.endHover
      },
      {
        target: this,
        eventNames: ["focus"],
        cb: this.rippleHandlers.startFocus
      },
      {
        target: this,
        eventNames: ["blur"],
        cb: this.rippleHandlers.endFocus
      },
      {
        target: this,
        eventNames: ["mousedown", "touchstart"],
        cb: (t) => {
          const i = t.type;
          this.onDown(i === "mousedown" ? "mouseup" : "touchend", t);
        }
      }
    ];
  }
  get text() {
    const t = this.textContent;
    return t ? t.trim() : "";
  }
  render() {
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : u``, n = this.hasMeta ? this.renderMeta() : u``;
    return u`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? u`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? u`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return u`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ve(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return u`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return u`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return u`<slot></slot>`;
  }
  renderTwoline() {
    return u`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(t, i) {
    const n = () => {
      window.removeEventListener(t, n), this.rippleHandlers.endPress();
    };
    window.addEventListener(t, n), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(t, i) {
    if (this.noninteractive)
      return;
    const n = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: t } });
    this.dispatchEvent(n);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const t of this.listeners)
      for (const i of t.eventNames)
        t.target.addEventListener(i, t.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of this.listeners)
      for (const i of t.eventNames)
        t.target.removeEventListener(i, t.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const t = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(t);
  }
}
v([
  q("slot")
], U.prototype, "slotElement", void 0);
v([
  mn("mwc-ripple")
], U.prototype, "ripple", void 0);
v([
  y({ type: String })
], U.prototype, "value", void 0);
v([
  y({ type: String, reflect: !0 })
], U.prototype, "group", void 0);
v([
  y({ type: Number, reflect: !0 })
], U.prototype, "tabindex", void 0);
v([
  y({ type: Boolean, reflect: !0 }),
  $e(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], U.prototype, "disabled", void 0);
v([
  y({ type: Boolean, reflect: !0 })
], U.prototype, "twoline", void 0);
v([
  y({ type: Boolean, reflect: !0 })
], U.prototype, "activated", void 0);
v([
  y({ type: String, reflect: !0 })
], U.prototype, "graphic", void 0);
v([
  y({ type: Boolean })
], U.prototype, "multipleGraphics", void 0);
v([
  y({ type: Boolean })
], U.prototype, "hasMeta", void 0);
v([
  y({ type: Boolean, reflect: !0 }),
  $e(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], U.prototype, "noninteractive", void 0);
v([
  y({ type: Boolean, reflect: !0 }),
  $e(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], U.prototype, "selected", void 0);
v([
  L()
], U.prototype, "shouldRenderRipple", void 0);
v([
  L()
], U.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wn = he`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Bt = class extends U {
};
Bt.styles = [wn];
Bt = v([
  de("mwc-list-item")
], Bt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function za(e, t, i) {
  const n = e.constructor;
  if (!i) {
    const o = `__${t}`;
    if (i = n.getPropertyDescriptor(t, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      a === "" && (a = n.getPropertyOptions(t).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, o);
    }
  };
  return r.get && (s.get = function() {
    return r.get.call(this);
  }), s;
}
function oi(e, t, i) {
  if (t !== void 0)
    return za(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class xn extends si {
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(t) {
    this.formElement && this.formElement.setAttribute("aria-label", t);
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (t) => {
      this.dispatchEvent(new Event("change", t));
    });
  }
}
xn.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const kt = /* @__PURE__ */ new WeakMap(), be = vt((e) => (t) => {
  const i = kt.get(t);
  if (e === void 0 && t instanceof We) {
    if (i !== void 0 || !kt.has(t)) {
      const n = t.committer.name;
      t.committer.element.removeAttribute(n);
    }
  } else e !== i && t.setValue(e);
  kt.set(t, e);
});
class B extends xn {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new An(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), n = t.get("checked"), r = t.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!i, !!r), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, i, n) {
    return n ? "disabled" : i ? "indeterminate" : t ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? u`<mwc-ripple
        .disabled="${this.disabled}"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        unbounded></mwc-ripple>` : "";
  }
  /**
   * @soyTemplate
   * @soyAttributes checkboxAttributes: input
   * @soyClasses checkboxClasses: .mdc-checkbox
   */
  render() {
    const t = this.indeterminate || this.checked, i = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": t,
      "mdc-checkbox--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      // transition animiation classes
      "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
      "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
      "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
      "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
      "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
      "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
    }, n = this.indeterminate ? "mixed" : void 0;
    return u`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ve(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${be(this.name)}"
              aria-checked="${be(n)}"
              aria-label="${be(this.ariaLabel)}"
              aria-labelledby="${be(this.ariaLabelledBy)}"
              aria-describedby="${be(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? "true" : "false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleBlur() {
    this.focused = !1, this.handleRippleBlur();
  }
  handleRippleMouseDown(t) {
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.rippleHandlers.startPress(t);
  }
  handleRippleTouchStart(t) {
    this.rippleHandlers.startPress(t);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
  handleChange() {
    this.checked = this.formElement.checked, this.indeterminate = this.formElement.indeterminate;
  }
  resetAnimationClass() {
    this.animationClass = "";
  }
  get isRippleActive() {
    var t;
    return ((t = this.rippleElement) === null || t === void 0 ? void 0 : t.isActive) || !1;
  }
}
v([
  q(".mdc-checkbox")
], B.prototype, "mdcRoot", void 0);
v([
  q("input")
], B.prototype, "formElement", void 0);
v([
  y({ type: Boolean, reflect: !0 })
], B.prototype, "checked", void 0);
v([
  y({ type: Boolean })
], B.prototype, "indeterminate", void 0);
v([
  y({ type: Boolean, reflect: !0 })
], B.prototype, "disabled", void 0);
v([
  y({ type: String, reflect: !0 })
], B.prototype, "name", void 0);
v([
  y({ type: String })
], B.prototype, "value", void 0);
v([
  oi,
  y({ type: String, attribute: "aria-label" })
], B.prototype, "ariaLabel", void 0);
v([
  oi,
  y({ type: String, attribute: "aria-labelledby" })
], B.prototype, "ariaLabelledBy", void 0);
v([
  oi,
  y({ type: String, attribute: "aria-describedby" })
], B.prototype, "ariaDescribedBy", void 0);
v([
  y({ type: Boolean })
], B.prototype, "reducedTouchTarget", void 0);
v([
  L()
], B.prototype, "animationClass", void 0);
v([
  L()
], B.prototype, "shouldRenderRipple", void 0);
v([
  L()
], B.prototype, "focused", void 0);
v([
  L()
], B.prototype, "useStateLayerCustomProperties", void 0);
v([
  mn("mwc-ripple")
], B.prototype, "ripple", void 0);
v([
  aa({ passive: !0 })
], B.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Pa = he`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Gt = class extends B {
};
Gt.styles = [Pa];
Gt = v([
  de("mwc-checkbox")
], Gt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class st extends U {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : u``, r = this.hasMeta && this.left ? this.renderMeta() : u``, a = this.renderRipple();
    return u`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${Ve(t)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? i : ""}
      ${r}`;
  }
  async onChange(t) {
    const i = t.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
v([
  q("slot")
], st.prototype, "slotElement", void 0);
v([
  q("mwc-checkbox")
], st.prototype, "checkboxElement", void 0);
v([
  y({ type: Boolean })
], st.prototype, "left", void 0);
v([
  y({ type: String, reflect: !0 })
], st.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Va = he`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ge = class extends st {
};
Ge.styles = [wn, Va];
Ge = v([
  de("mwc-check-list-item")
], Ge);
function _(e, t, i) {
  const n = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function $(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function G(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
var Ra = Object.defineProperty, Oa = Object.getOwnPropertyDescriptor, oe = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Oa(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Ra(t, i, r), r;
};
let Z = class extends Pr {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(e) {
    const t = this.multipliers.indexOf(e);
    t >= 0 && (this.multiplierIndex = t), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.value = e);
  }
  selectMultiplier(e) {
    this.multiplier = this.multipliers[e.detail.index];
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.helperPersistent = !1, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.helperPersistent = !0, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated(), this.multiplierMenu && (this.multiplierMenu.anchor = this.multiplierButton ?? null);
  }
  checkValidity() {
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(c("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? u`<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => this.multiplierMenu?.show()}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${this.multiplierButton ?? null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>` : u``;
  }
  renderMulplierList() {
    return u`${this.multipliers.map(
      (e) => u`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? c("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        ${this.renderUnitSelector()}
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
oe([
  y({ type: Boolean })
], Z.prototype, "nullable", 2);
oe([
  y({ type: Array })
], Z.prototype, "multipliers", 2);
oe([
  y({ type: String })
], Z.prototype, "multiplier", 1);
oe([
  y({ type: String })
], Z.prototype, "unit", 2);
oe([
  L()
], Z.prototype, "null", 1);
oe([
  y({ type: String })
], Z.prototype, "maybeValue", 1);
oe([
  y({ type: String })
], Z.prototype, "defaultValue", 2);
oe([
  y({ type: Array })
], Z.prototype, "reservedValues", 2);
oe([
  q("mwc-switch")
], Z.prototype, "nullSwitch", 2);
oe([
  q("mwc-menu")
], Z.prototype, "multiplierMenu", 2);
oe([
  q("mwc-icon-button")
], Z.prototype, "multiplierButton", 2);
Z = oe([
  de("wizard-textfield")
], Z);
var Ma = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, Re = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Fa(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Ma(t, i, r), r;
};
let Se = class extends zr {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.value = e);
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated();
  }
  checkValidity() {
    return this.nullable && !this.nullSwitch?.checked ? !0 : super.checkValidity();
  }
  renderSwitch() {
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Re([
  y({ type: Boolean })
], Se.prototype, "nullable", 2);
Re([
  L()
], Se.prototype, "null", 1);
Re([
  y({ type: String })
], Se.prototype, "maybeValue", 1);
Re([
  y({ type: String })
], Se.prototype, "defaultValue", 2);
Re([
  y({ type: Array })
], Se.prototype, "reservedValues", 2);
Re([
  q("mwc-switch")
], Se.prototype, "nullSwitch", 2);
Se = Re([
  de("wizard-select")
], Se);
var qa = Object.defineProperty, Ha = Object.getOwnPropertyDescriptor, ae = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ha(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && qa(t, i, r), r;
};
let X = class extends ue {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.checked = e === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(e) {
    this.checkbox ? this.checkbox.checked = e : this.initChecked = e;
  }
  get formfieldLabel() {
    return this.helper ? `${this.helper} (${this.label})` : this.label;
  }
  enable() {
    this.nulled !== null && (this.checked = this.nulled, this.nulled = null, this.deactivateCheckbox = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.checked, this.checked = this.defaultChecked, this.deactivateCheckbox = !0);
  }
  firstUpdated() {
    this.requestUpdate();
  }
  renderSwitch() {
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-formfield
            label="${this.formfieldLabel}"
            style="${this.deactivateCheckbox || this.disabled ? "--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.38)" : ""}"
            ><mwc-checkbox
              ?checked=${this.initChecked}
              ?disabled=${this.deactivateCheckbox || this.disabled}
            ></mwc-checkbox
          ></mwc-formfield>
        </div>
        <div style="display: flex; align-items: center;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ae([
  y({ type: String })
], X.prototype, "label", 2);
ae([
  y({ type: String })
], X.prototype, "helper", 2);
ae([
  y({ type: Boolean })
], X.prototype, "nullable", 2);
ae([
  y({ type: Boolean })
], X.prototype, "defaultChecked", 2);
ae([
  y({ type: String })
], X.prototype, "maybeValue", 1);
ae([
  y({ type: Boolean })
], X.prototype, "disabled", 2);
ae([
  L()
], X.prototype, "null", 1);
ae([
  L()
], X.prototype, "checked", 1);
ae([
  L()
], X.prototype, "deactivateCheckbox", 2);
ae([
  L()
], X.prototype, "formfieldLabel", 1);
ae([
  q("mwc-switch")
], X.prototype, "nullSwitch", 2);
ae([
  q("mwc-checkbox")
], X.prototype, "checkbox", 2);
X = ae([
  de("wizard-checkbox")
], X);
function Ba(e) {
  return typeof e == "function";
}
function f(e) {
  return e instanceof Z || e instanceof Se || e instanceof X ? e.maybeValue : e.value ?? null;
}
function ci(e) {
  return e instanceof Z ? e.multiplier : null;
}
function pe(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = Ba(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function Oe(e) {
  return pe(e, { detail: { subwizard: !0 } });
}
function Ga(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function li(e) {
  const t = e.documentElement;
  return (t.getAttribute("version") ?? "2003") + (t.getAttribute("revision") ?? "") + (t.getAttribute("release") ?? "");
}
function Cn(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function Ee(e) {
  const t = e.getAttribute("desc");
  return t || void 0;
}
function K(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const O = ":not(*)";
function Wa(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function Ua(e, t) {
  const [i, n] = t.split("	");
  return !i || !n ? O : `${e}[version="${i}"][revision="${n}"]`;
}
function Di(e) {
  return N(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function $i(e, t) {
  const [i, n] = K(t), r = M[e].parents.flatMap(
    (a) => j(a, i).split(",")
  );
  return W(
    r,
    [">"],
    [`${e}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function ja(e) {
  const [t, i, n, r, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => e.getAttribute(o));
  return t === "None" ? `${N(e.parentElement)}>(${r} ${s} ${a})` : `${t} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function Ka(e, t) {
  if (t.endsWith(")")) {
    const [b, g] = K(t), [w, C, I] = g.substring(1, g.length - 1).split(" ");
    if (!w || !C) return O;
    const x = M[e].parents.flatMap(
      (V) => j(V, b).split(",")
    );
    return W(
      x,
      [">"],
      [`${e}[iedName="None"][lnClass="${w}"][lnType="${C}"][lnInst="${I}"]`]
    ).map((V) => V.join("")).join(",");
  }
  const [i, n, r, a, s] = t.split(/[ /]/);
  if (!i || !n || !a) return O;
  const [
    o,
    l,
    d,
    m,
    h
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return W(
    [e],
    o,
    l,
    d,
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function Za(e) {
  return `${N(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function Xa(e, t) {
  const [i, n] = K(t), [r, a] = n.split(" ");
  return `${j(
    "IED",
    i
  )}>${e}[iedName="${r}"][apName="${a}"]`;
}
function Qa(e) {
  return `${N(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Ja(e, t) {
  const [i, n] = K(t);
  return n ? `${j(
    "Server",
    i
  )}>${e}[associationID="${n}"]` : O;
}
function Ya(e) {
  return `${N(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function es(e, t) {
  const [i, n] = t.split(">>");
  return n ? `IED[name="${i}"] ${e}[inst="${n}"]` : O;
}
function ts(e) {
  const t = e.textContent, [i, n, r, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${N(e.parentElement)}>${t} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function is(e, t) {
  const [i, n] = K(t), [r, a, s, o, l, d] = n.split(/[ /]/), [
    m,
    h,
    b,
    g,
    w,
    C
  ] = [
    M[e].parents.flatMap(
      (I) => j(I, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return W(
    m,
    [">"],
    [e],
    h,
    b,
    g,
    w,
    C
  ).map((I) => I.join("")).join(",");
}
function ns(e) {
  const [t, i, n, r, a, s, o, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), d = `${t}/${i ?? ""} ${n} ${r ?? ""}.${a} ${s || ""}`;
  return `${N(e.parentElement)}>${d} (${o}${l ? " [" + l + "]" : ""})`;
}
function rs(e, t) {
  const [i, n] = K(t), [r, a, s, o] = n.split(/[ /.]/), l = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = l && l[1] ? l[1] : "", m = l && l[2] ? l[2] : "", h = n.match(/\(([A-Z]{2})/), b = n.match(/ \[([0-9]{1,2})\]/), g = h && h[1] ? h[1] : "", w = b && b[1] ? b[1] : "", [
    C,
    I,
    x,
    V,
    F,
    xe,
    xt,
    Ct,
    Nt
  ] = [
    M[e].parents.flatMap(
      (Ue) => j(Ue, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${g}"]`],
    w ? [`[ix="${w}"]`] : [":not([ix])", '[ix=""]']
  ];
  return W(
    C,
    [">"],
    [e],
    I,
    x,
    V,
    F,
    xe,
    xt,
    Ct,
    Nt
  ).map((Ue) => Ue.join("")).join(",");
}
function as(e) {
  if (!e.parentElement) return NaN;
  const t = N(e.parentElement), i = e.getAttribute("iedName"), n = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(e);
  if (n) return `${t}>${n}[${r}]`;
  const [
    a,
    s,
    o,
    l,
    d,
    m,
    h,
    b,
    g,
    w,
    C,
    I
  ] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "serviceType",
    "srcLDInst",
    "srcPrefix",
    "srcLNClass",
    "srcLNInst",
    "srcCBName"
  ].map((F) => e.getAttribute(F)), x = I ? `${h}:${I} ${b ?? ""}/${g ?? ""} ${w ?? ""} ${C ?? ""}` : "", V = `${i} ${a}/${s ?? ""} ${o} ${l ?? ""} ${d} ${m || ""}`;
  return `${t}>${x ? x + " " : ""}${V}${n ? `@${n}` : ""}`;
}
function ss(e, t) {
  const [i, n] = K(t), r = M[e].parents.flatMap(
    (je) => j(je, i).split(",")
  );
  if (n.endsWith("]")) {
    const [je] = n.split("["), $r = [`[intAddr="${je}"]`];
    return W(r, [">"], [e], $r).map((Lr) => Lr.join("")).join(",");
  }
  let a, s, o, l, d, m, h, b, g, w, C, I, x, V;
  !n.includes(":") && !n.includes("@") ? [a, s, o, l, d, m, h] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    b,
    g,
    w,
    C,
    I,
    x,
    a,
    s,
    o,
    l,
    d,
    m,
    h
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, s, o, l, d, m, h, V] = n.split(/[ /@]/) : [
    b,
    g,
    w,
    C,
    I,
    x,
    a,
    s,
    o,
    l,
    d,
    m,
    h,
    V
  ] = n.split(/[ /:@]/);
  const [
    F,
    xe,
    xt,
    Ct,
    Nt,
    Ue,
    xr,
    Cr,
    Nr,
    Er,
    Ir,
    kr,
    _r,
    Dr
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    l ? [`[lnClass="${l}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    g ? [`[srcCBName="${g}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    w ? [`[srcLDInst="${w}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    C ? [`[srcPrefix="${C}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    I ? [`[srcLNClass="${I}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    x ? [`[srcLNInst="${x}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    V ? [`[intAddr="${V}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return W(
    r,
    [">"],
    [e],
    F,
    xe,
    xt,
    Ct,
    Nt,
    Ue,
    xr,
    Cr,
    Nr,
    Er,
    Ir,
    kr,
    _r,
    Dr
  ).map((je) => je.join("")).join(",");
}
function os(e) {
  const [t, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${N(e.parentElement)}>${t ?? ""} ${i} ${n}`;
}
function cs(e, t) {
  const [i, n] = K(t), r = M[e].parents.flatMap(
    (h) => j(h, i).split(",")
  ), [a, s, o] = n.split(" ");
  if (!s) return O;
  const [l, d, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${o}"]`]
  ];
  return W(
    r,
    [">"],
    [e],
    l,
    d,
    m
  ).map((h) => h.join("")).join(",");
}
function ls(e) {
  const [t, i, n, r, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${N(e.parentElement)}>${i} ${t || ""} ${n}/${r ?? ""} ${a} ${s}`;
}
function ds(e, t) {
  const [i, n] = K(t), r = M[e].parents.flatMap(
    (x) => j(x, i).split(",")
  ), [a, s, o, l, d, m] = n.split(/[ /]/), [
    h,
    b,
    g,
    w,
    C,
    I
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return W(
    r,
    [">"],
    [e],
    h,
    b,
    g,
    w,
    C,
    I
  ).map((x) => x.join("")).join(",");
}
function Li(e) {
  const [t, i] = ["name", "ix"].map((n) => e.getAttribute(n));
  return `${N(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function Wt(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = K(t), [a, s, o, l] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return O;
  if (i === 0) return `${e}[name="${s}"]`;
  const d = M[e].parents.flatMap(
    (b) => b === "SDI" ? Wt(b, n, i - 1).split(",") : j(b, n).split(",")
  ).filter((b) => !b.startsWith(O));
  if (d.length === 0) return O;
  const [m, h] = [
    [`[name="${s}"]`],
    l ? [`[ix="${l}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return W(
    d,
    [">"],
    [e],
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function us(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((n) => n.getAttribute("sGroup") === t).findIndex((n) => n.isSameNode(e));
  return `${N(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function ps(e, t) {
  const [i, n] = K(t), [r, a] = n.split(" "), s = parseFloat(a), o = M[e].parents.flatMap(
    (m) => j(m, i).split(",")
  ), [l, d] = [
    r ? [`[sGroup="${r}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return W(
    o,
    [">"],
    [e],
    l,
    d
  ).map((m) => m.join("")).join(",");
}
function ms(e) {
  const [t, i] = ["iedName", "apName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function hs(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? O : `${e}[iedName="${i}"][apName="${n}"]`;
}
function Ti(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function zi(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? O : `${e}[ldInst="${i}"][cbName="${n}"]`;
}
function fs(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${N(e.parentElement)}>${t}`;
}
function bs(e, t) {
  const [i, n] = K(t), [r, a] = [
    M[e].parents.flatMap(
      (s) => j(s, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return W(r, [">"], [e], a).map((s) => s.join("")).join(",");
}
function gs(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${N(e.parentElement)}>${i}`;
  const n = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(e));
  return `${N(e.parentElement)}>${i} [${n}]`;
}
function ys(e, t) {
  const [i, n] = K(t), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [s, o, l] = [
    M[e].parents.flatMap(
      (d) => j(d, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return W(
    s,
    [">"],
    [e],
    o,
    l
  ).map((d) => d.join("")).join(",");
}
function vs(e) {
  return `${N(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Ss(e, t) {
  const [i, n] = K(t);
  return `${j("EnumType", i)}>${e}[ord="${n}"]`;
}
function As(e) {
  return `${N(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function ws(e, t) {
  const [i, n] = K(t), [r, a] = n.split("	"), [s] = [
    M[e].parents.flatMap(
      (o) => j(o, i).split(",")
    )
  ];
  return W(
    s,
    [">"],
    [e],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((o) => o.join("")).join(",");
}
function xs() {
  return "";
}
function Cs() {
  return ":root";
}
function D(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${N(e.parentElement)}>${e.getAttribute("name")}`;
}
function k(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = K(t);
  if (!r) return O;
  if (i === 0) return `${e}[name="${r}"]`;
  const a = M[e].parents;
  if (!a) return O;
  const s = a.flatMap(
    (o) => M[o].selector === M.Substation.selector ? k(o, n, i - 1).split(",") : j(o, n).split(",")
  ).filter((o) => !o.startsWith(O));
  return s.length === 0 ? O : W(s, [">"], [e], [`[name="${r}"]`]).map((o) => o.join("")).join(",");
}
function S(e) {
  return N(e.parentElement).toString();
}
function A(e, t) {
  const i = M[e].parents;
  if (!i) return O;
  const n = i.flatMap((r) => j(r, t).split(",")).filter((r) => !r.startsWith(O));
  return n.length === 0 ? O : W(n, [">"], [e]).map((r) => r.join("")).join(",");
}
function dt(e) {
  return `#${e.id}`;
}
function ut(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : O;
}
const Nn = [
  "TransformerWinding",
  "ConductingEquipment"
], En = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Nn
], Ut = ["Substation", "VoltageLevel", "Bay"], In = ["Process", "Line"], kn = ["EqSubFunction", "EqFunction"], Ns = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...En,
  ...Ut,
  ...In,
  ...kn
], _n = ["ConnectivityNode", ...Ns], Es = ["GOOSESecurity", "SMVSecurity"], Is = ["SubNetwork", ...Es, ..._n], ks = ["BDA", "DA"], _s = ["SampledValueControl", "GSEControl"], Ds = ["LogControl", "ReportControl"], $s = [..._s, ...Ds], Ls = ["GSE", "SMV"], Ts = [
  "ConnectedAP",
  "PhysConn",
  "SDO",
  "DO",
  "DAI",
  "SDI",
  "DOI",
  "Inputs",
  "RptEnabled",
  "Server",
  "ServerAt",
  "SettingControl",
  "Communication",
  "Log",
  "LDevice",
  "DataSet",
  "AccessPoint",
  "IED",
  "NeutralPoint",
  ...$s,
  ...Ls,
  ...ks
], Pe = ["LN0", "LN"], zs = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ps = ["Subject", "IssuerName"], Vs = ["MinTime", "MaxTime"], Rs = ["LNodeType", "DOType", "DAType", "EnumType"], Os = [
  "FileHandling",
  "TimeSyncProt",
  "CommProt",
  "SGEdit",
  "ConfSG",
  "GetDirectory",
  "GetDataObjectDefinition",
  "DataObjectDirectory",
  "GetDataSetValue",
  "SetDataSetValue",
  "DataSetDirectory",
  "ReadWrite",
  "TimerActivatedControl",
  "GetCBValues",
  "GSEDir",
  "ConfLdName"
], Ms = ["DynDataSet", "ConfDataSet"], Fs = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Ms
], qs = ["ConfLogControl", "ConfSigRef"], Hs = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Bs = ["SCL", ...Is, ...Ts, ...Rs], Dn = [
  ...Bs,
  ...zs,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ps,
  ...Vs,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Pe,
  ...Os,
  "DynAssociation",
  "SettingGroups",
  ...Fs,
  ...qs,
  ...Hs,
  "ConfLNs",
  "ClientServices",
  "SupSubscription",
  "ValueHandling",
  "RedProt",
  "McSecurity",
  "KDC",
  "Address",
  "P",
  "ProtNs",
  "EnumVal",
  "Terminal",
  "BitRate",
  "Authentication",
  "DataTypeTemplates",
  "History",
  "OptFields",
  "SmvOpts",
  "TrgOps",
  "SamplesPerSec",
  "SmpRate",
  "SecPerSamples"
], Gs = new Set(Dn);
function di(e) {
  return Gs.has(e);
}
const At = ["Text", "Private"], Ie = [...At], R = [...At], pt = [...At], Pi = [...R, "Val"], $n = [...Ie, "LNode"], _e = [...$n], jt = [..._e], _t = [
  ..._e,
  "PowerTransformer",
  "GeneralEquipment"
], Vi = [
  ...jt,
  "Terminal"
], Ri = [...R, "Address"], Ln = [...Ie], Oi = [...Ln, "IEDName"], Mi = [
  ...R,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Fi = [
  ..._e,
  "GeneralEquipment",
  "Function"
], qi = [...Ln, "TrgOps"], Hi = [
  ..._e,
  "GeneralEquipment",
  "EqSubFunction"
], M = {
  AccessControl: {
    identity: S,
    selector: A,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: D,
    selector: k,
    parents: ["IED"],
    children: [
      ...Ie,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: S,
    selector: A,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Qa,
    selector: Ja,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: S,
    selector: A,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: D,
    selector: k,
    parents: ["DAType"],
    children: [...Pi]
  },
  BitRate: {
    identity: S,
    selector: A,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: D,
    selector: k,
    parents: ["VoltageLevel"],
    children: [
      ..._t,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: ls,
    selector: ds,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: S,
    selector: A,
    parents: ["SCL"],
    children: [...R, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: D,
    selector: k,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Vi,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: S,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: ms,
    selector: hs,
    parents: ["SubNetwork"],
    children: [...R, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: D,
    selector: k,
    parents: ["Bay", "Line"],
    children: [...$n]
  },
  DA: {
    identity: D,
    selector: k,
    parents: ["DOType"],
    children: [...Pi]
  },
  DAI: {
    identity: Li,
    selector: Wt,
    parents: ["DOI", "SDI"],
    children: [...R, "Val"]
  },
  DAType: {
    identity: dt,
    selector: ut,
    parents: ["DataTypeTemplates"],
    children: [...pt, "BDA", "ProtNs"]
  },
  DO: {
    identity: D,
    selector: k,
    parents: ["LNodeType"],
    children: [...R]
  },
  DOI: {
    identity: D,
    selector: k,
    parents: [...Pe],
    children: [...R, "SDI", "DAI"]
  },
  DOType: {
    identity: dt,
    selector: ut,
    parents: ["DataTypeTemplates"],
    children: [...pt, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: D,
    selector: k,
    parents: [...Pe],
    children: [...Ie, "FCDA"]
  },
  DataSetDirectory: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: S,
    selector: A,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: dt,
    selector: ut,
    parents: ["DataTypeTemplates"],
    children: [...pt, "EnumVal"]
  },
  EnumVal: {
    identity: vs,
    selector: Ss,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: D,
    selector: k,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Hi]
  },
  EqSubFunction: {
    identity: D,
    selector: k,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Hi]
  },
  ExtRef: {
    identity: as,
    selector: ss,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: ns,
    selector: rs,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: D,
    selector: k,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ..._e,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: D,
    selector: k,
    parents: [
      "SubFunction",
      "Function",
      ...In,
      ...kn,
      ...Ut
    ],
    children: [...jt, "EqFunction"]
  },
  GetCBValues: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: D,
    selector: k,
    parents: ["AccessPoint"],
    children: [...Ie, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Ti,
    selector: zi,
    parents: ["ConnectedAP"],
    children: [...Ri, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: D,
    selector: k,
    parents: ["LN0"],
    children: [...Oi, "Protocol"]
  },
  GSESettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: S,
    selector: A,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: S,
    selector: A,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Wa,
    selector: Ua,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: D,
    selector: k,
    parents: ["SCL"],
    children: [...R, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: ts,
    selector: is,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: S,
    selector: A,
    parents: [...Pe],
    children: [...R, "ExtRef"]
  },
  IssuerName: {
    identity: S,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Za,
    selector: Xa,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Ya,
    selector: es,
    parents: ["Server"],
    children: [...R, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: os,
    selector: cs,
    parents: ["AccessPoint", "LDevice"],
    children: [...Mi]
  },
  LN0: {
    identity: S,
    selector: A,
    parents: ["LDevice"],
    children: [
      ...Mi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: ja,
    selector: Ka,
    parents: [..._n],
    children: [...R]
  },
  LNodeType: {
    identity: dt,
    selector: ut,
    parents: ["DataTypeTemplates"],
    children: [...pt, "DO"]
  },
  Line: {
    identity: D,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...Fi,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: D,
    selector: k,
    parents: [...Pe],
    children: [...R]
  },
  LogControl: {
    identity: D,
    selector: k,
    parents: [...Pe],
    children: [...qi]
  },
  LogSettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: S,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: S,
    selector: A,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: S,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Di,
    selector: $i,
    parents: ["TransformerWinding"],
    children: [...R]
  },
  OptFields: {
    identity: S,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: gs,
    selector: ys,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: fs,
    selector: bs,
    parents: ["ConnectedAP"],
    children: [...R, "P"]
  },
  PowerTransformer: {
    identity: D,
    selector: k,
    parents: [...Ut],
    children: [
      ...jt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => O,
    parents: [],
    children: []
  },
  Process: {
    identity: D,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...Fi,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: As,
    selector: ws,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: S,
    selector: A,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: D,
    selector: k,
    parents: [...Pe],
    children: [...qi, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: S,
    selector: A,
    parents: ["ReportControl"],
    children: [...R, "ClientLN"]
  },
  SamplesPerSec: {
    identity: S,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: D,
    selector: k,
    parents: ["LN0"],
    children: [...Oi, "SmvOpts"]
  },
  SecPerSamples: {
    identity: S,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: xs,
    selector: Cs,
    parents: [],
    children: [
      ...At,
      "Header",
      "Substation",
      "Communication",
      "IED",
      "DataTypeTemplates",
      "Line",
      "Process"
    ]
  },
  SDI: {
    identity: Li,
    selector: Wt,
    parents: ["DOI", "SDI"],
    children: [...R, "SDI", "DAI"]
  },
  SDO: {
    identity: D,
    selector: k,
    parents: ["DOType"],
    children: [...Ie]
  },
  Server: {
    identity: S,
    selector: A,
    parents: ["AccessPoint"],
    children: [
      ...R,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: S,
    selector: A,
    parents: ["AccessPoint"],
    children: [...R]
  },
  Services: {
    identity: S,
    selector: A,
    parents: ["IED", "AccessPoint"],
    children: [
      "DynAssociation",
      "SettingGroups",
      "GetDirectory",
      "GetDataObjectDefinition",
      "DataObjectDirectory",
      "GetDataSetValue",
      "SetDataSetValue",
      "DataSetDirectory",
      "ConfDataSet",
      "DynDataSet",
      "ReadWrite",
      "TimerActivatedControl",
      "ConfReportControl",
      "GetCBValues",
      "ConfLogControl",
      "ReportSettings",
      "LogSettings",
      "GSESettings",
      "SMVSettings",
      "GSEDir",
      "GOOSE",
      "GSSE",
      "SMVsc",
      "FileHandling",
      "ConfLNs",
      "ClientServices",
      "ConfLdName",
      "SupSubscription",
      "ConfSigRef",
      "ValueHandling",
      "RedProt",
      "TimeSyncProt",
      "CommProt"
    ]
  },
  SetDataSetValue: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: S,
    selector: A,
    parents: ["LN0"],
    children: [...R]
  },
  SettingGroups: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: S,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: S,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Ti,
    selector: zi,
    parents: ["ConnectedAP"],
    children: [...Ri]
  },
  SmvOpts: {
    identity: S,
    selector: A,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: D,
    selector: k,
    parents: ["AccessPoint"],
    children: [...Ie, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: D,
    selector: k,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Nn
    ],
    children: [..._e, "EqFunction"]
  },
  SubFunction: {
    identity: D,
    selector: k,
    parents: ["SubFunction", "Function"],
    children: [
      ..._e,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: D,
    selector: k,
    parents: ["Communication"],
    children: [...Ie, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: S,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: D,
    selector: k,
    parents: ["SCL"],
    children: [..._t, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: D,
    selector: k,
    parents: ["TransformerWinding"],
    children: [..._e, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Di,
    selector: $i,
    parents: [...En],
    children: [...R]
  },
  Text: {
    identity: S,
    selector: A,
    parents: Dn.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: S,
    selector: A,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: D,
    selector: k,
    parents: ["PowerTransformer"],
    children: [
      ...Vi,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: S,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: us,
    selector: ps,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: S,
    selector: A,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: D,
    selector: k,
    parents: ["Substation"],
    children: [..._t, "Voltage", "Bay", "Function"]
  }
};
function j(e, t) {
  return typeof t != "string" ? O : di(e) ? M[e].selector(e, t) : e;
}
function ye(e, t, i) {
  if (typeof i != "string" || !di(t)) return null;
  const n = e.querySelector(M[t].selector(t, i));
  return n === null || ie(n) ? n : Array.from(
    e.querySelectorAll(M[t].selector(t, i))
  ).find(ie) ?? null;
}
function N(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return di(t) ? M[t].identity(e) : NaN;
}
const nt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function Ws(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function W(...e) {
  return e.reduce(
    (t, i) => t.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function Tn(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => Tn(i, t))
      );
    default:
      return 0;
  }
}
function ie(e) {
  return !e.closest("Private");
}
const Us = 99, zn = Array(Us).fill(1).map((e, t) => `${t + 1}`);
function js(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const n = new Set(
        G(e, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const r = zn.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return t.get(i)();
  };
}
function Ks(e) {
  const t = new Set(e.map((i) => i.getAttribute("inst") || ""));
  return zn.find((i) => !t.has(i));
}
u`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <path
    d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const ot = {
  action: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: z`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: z`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: z`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: z`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: z`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: z`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: z`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: z`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: z`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
}, Zs = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ot.gooseIcon}</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ot.reportIcon}</svg>`;
const Xs = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ot.smvIcon}</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ot.logIcon}</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Bi = {
  dAIcon: {
    width: 26.5,
    height: 24
  },
  dOIcon: {
    width: 26.5,
    height: 24
  },
  enumIcon: {
    width: 26.5,
    height: 24
  },
  lNIcon: {
    width: 26.5,
    height: 24
  }
};
mt("dAIcon"), mt("dOIcon"), mt("enumIcon"), mt("lNIcon");
function mt(e) {
  if (e === "reset") return u``;
  const t = Bi[e]?.height ?? 24, i = Bi[e]?.width ?? 24;
  return u`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${ot[e]}
  </svg> `;
}
u`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  width="25px"
  height="25px"
  style="margin-bottom:0px;"
>
  <rect
    width="8"
    height="8"
    x="8.5"
    y="2"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="2.5"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="15"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <line
    x1="2"
    y1="12.5"
    x2="23"
    y2="12.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="12.5"
    y1="10"
    x2="12.5"
    y2="12.5"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="6.5"
    y1="12.5"
    x2="6.5"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="19"
    y1="12.5"
    x2="19"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
</svg>`;
u`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="transparent"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="currentColor"
  />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: currentColor;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M11.13,20.06L3.63,6.93c-.27-.48-.11-1.09.37-1.36h0c.48-.27,1.09-.11,1.36.37l6.64,11.61,6.64-11.61c.27-.48.88-.65,1.36-.37h0c.48.27.65.88.37,1.36l-7.5,13.13c-.38.67-1.35.67-1.74,0Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M7.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M12.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M17.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M20,4H4c-1.1,0-2,.9-2,2v4c0,1.1.9,2,2,2v-6h16v6c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2Z"
  />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M14,6h-1v-3c0-.55-.45-1-1-1s-1,.45-1,1v3h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M13.41,7l1.29-1.29c.39-.39.39-1.02,0-1.41s-1.02-.39-1.41,0l-1.29,1.29-1.29-1.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l1.29,1.29-1.29,1.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l1.29-1.29,1.29,1.29c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02,0-1.41l-1.29-1.29Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M19,12c0-3.53-2.61-6.43-6-6.92v-2.08c0-.55-.45-1-1-1s-1,.45-1,1v2.08c-3.39.49-6,3.39-6,6.92s2.61,6.43,6,6.92v2.08c0,.55.45,1,1,1s1-.45,1-1v-2.08c3.39-.49,6-3.39,6-6.92ZM7,12c0-2.42,1.72-4.44,4-4.9v9.8c-2.28-.46-4-2.48-4-4.9ZM13,16.9V7.1c2.28.46,4,2.48,4,4.9s-1.72,4.44-4,4.9Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M17,10c0-2.42-1.72-4.44-4-4.9v-2.1s0-1-1-1-1,1-1,1v2.1c-2.28.46-4,2.48-4,4.9,0,.71.15,1.39.42,2-.27.61-.42,1.29-.42,2,0,2.42,1.72,4.44,4,4.9v1.1h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1h-1v-1.1c2.28-.46,4-2.48,4-4.9,0-.71-.15-1.39-.42-2,.27-.61.42-1.29.42-2ZM12,7c1.66,0,3,1.34,3,3,0,0,0,.01,0,.02-.84-.63-1.87-1.02-3-1.02s-2.16.39-3,1.02c0,0,0-.01,0-.02,0-1.66,1.34-3,3-3ZM14.22,12c-.55.61-1.34,1-2.22,1s-1.67-.39-2.22-1c.55-.61,1.34-1,2.22-1s1.67.39,2.22,1ZM12,17c-1.66,0-3-1.34-3-3,0,0,0-.01,0-.02.84.63,1.87,1.02,3,1.02s2.16-.39,3-1.02c0,0,0,.01,0,.02,0,1.66-1.34,3-3,3Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M13,20h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M15,16h-2v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33L5.91,3.5c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59h-2c-.55,0-1,.45-1,1s.45,1,1,1h6c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M10,4h4c.55,0,1-.45,1-1s-.45-1-1-1h-4c-.55,0-1,.45-1,1s.45,1,1,1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`;
u`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M20.41,3.59c-.78-.78-2.05-.78-2.83,0-.59.59-.73,1.47-.43,2.19l-1.49,1.49c-1.02-.79-2.29-1.27-3.67-1.27-3.31,0-6,2.69-6,6,0,1.38.48,2.66,1.27,3.67l-1.49,1.49c-.73-.31-1.6-.17-2.19.43-.78.78-.78,2.05,0,2.83.78.78,2.05.78,2.83,0,.59-.59.73-1.47.43-2.19l1.49-1.49c1.02.79,2.29,1.27,3.67,1.27,3.31,0,6-2.69,6-6,0-1.38-.48-2.66-1.27-3.67l1.49-1.49c.73.31,1.6.17,2.19-.43.78-.78.78-2.05,0-2.83ZM12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"
  />
</svg>`;
u`<svg
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    stroke="currentColor"
    fill="currentColor"
    stroke-width="1"
    cx="12.5"
    cy="12.5"
    r="5"
  />
</svg>`;
u`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="10"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="15"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="20"
    x2="12.5"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
u` <svg
  xmlns="http://www.w3.org/2000/svg"
  style="width:100px;height:100px"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="#eee8d5"
    stroke="#6c71c4"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="#2aa198"
  />
</svg>`;
z`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
z`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19.3,7.94l-6-5.14c-.75-.64-1.85-.65-2.6,0l-6,5.14c-.44.38-.7.93-.7,1.52v9.54c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-9.54c0-.58-.25-1.14-.7-1.52ZM18,19H6v-9.54l6-5.14,6,5.14v9.54Z"/>
  <path class="cls-1" d="M11.57,7.74l-3,5c-.09.15-.09.35,0,.5.09.16.26.25.44.25h2v3.5c0,.22.15.42.37.48.04.01.09.02.13.02.17,0,.34-.09.43-.24l3-5c.09-.15.09-.35,0-.5-.09-.16-.26-.25-.44-.25h-2v-3.5c0-.22-.15-.42-.37-.48-.22-.06-.45.03-.56.22Z"/>
</g>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M14.39,11.93l-1.39.58v-1.84l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54l-1.39.58V3c0-.55-.45-1-1-1s-1,.45-1,1v6.33l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v1.84l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v5.5c0,.55.45,1,1,1s1-.45,1-1v-6.33l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54Z"/>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M18.71,15.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l.29.29h-5.59c0-1.1-.9-2-2-2h-2c-1.01,0-1.84.76-1.97,1.74-.61-.34-1.03-.99-1.03-1.74,0-1.1.9-2,2-2h5c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2v-.14c1.72-.45,3-2,3-3.86,0-2.21-1.79-4-4-4h-5c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5c1.1,0,2,.9,2,2,0,.75-.42,1.39-1.03,1.74-.13-.98-.96-1.74-1.97-1.74h-2c-1.1,0-2,.9-2,2h-5c-2.21,0-4,1.79-4,4,0,1.86,1.28,3.41,3,3.86v.14c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5.59l-.29.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l2-2c.39-.39.39-1.02,0-1.41l-2-2ZM8,7v-2h2v2s-2,0-2,0ZM14,11h2v2s-2,0-2,0v-2ZM8,19v-2h2v2s-2,0-2,0Z"/>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19,20h-2c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h1.89c.55,0,1-.45,1-1s-.45-1-1-1h-1.83c-2.09,0-3.95,1.53-4.15,3.61-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.23,2.39,1.64,4.39,3.98,4.39h2c.55,0,1-.45,1-1s-.45-1-1-1Z"/>
  <path class="cls-1" d="M10.98,6.39c.23-2.39-1.64-4.39-3.98-4.39h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1s.42.96.95.99c-.04,0-.08.01-.12.01h.17c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1,0,.28.11.53.29.71.17.17.4.27.65.28h0s.03.01.05.01c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h-1.89c-.55,0-1,.45-1,1s.45,1,1,1h1.83c2.09,0,3.95-1.53,4.15-3.61.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59Z"/>
  <path class="cls-1" d="M6.83,16h.17s-.03,0-.05-.01c-.04,0-.08.01-.12.01Z"/>
</g>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
function Qs(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function rt(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const Pn = {
  IED: [
    {
      attributeName: "iedName",
      filter: ze("Association")
    },
    {
      attributeName: "iedName",
      filter: ze("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: ze("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: ze("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: ze("KDC")
    },
    {
      attributeName: "iedName",
      filter: ze("LNode")
    },
    {
      attributeName: null,
      filter: Dt("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: Dt("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: Dt("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: ze("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Gi("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Gi("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function ze(e) {
  return function(i, n, r) {
    return `${e}[${n}="${r}"]`;
  };
}
function Dt(e) {
  return function() {
    return `${e}`;
  };
}
function Gi(e, t) {
  return function(n, r, a) {
    return `${e}${Object.entries(t).map(([s, o]) => {
      const l = n.closest(s);
      if (l && l.hasAttribute("name")) {
        const d = l.getAttribute("name");
        return `[${o}="${d}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function Js(e, t, i) {
  const n = e.cloneNode(!1);
  return n.setAttribute(t, i), n;
}
function Vn(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function ui(e, t, i) {
  if (t === null || t === i)
    return [];
  const n = Pn[e.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const s = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${s}`)).filter(ie).forEach((o) => {
      const l = Js(
        o,
        a.attributeName,
        i
      );
      r.push({ old: { element: o }, new: { element: l } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${s}`)).filter((o) => o.textContent === t).filter(ie).forEach((o) => {
      const l = Vn(o, i);
      r.push({ old: { element: o }, new: { element: l } });
    });
  }), e.tagName === "IED" && r.push(...Ys(e, t, i)), r;
}
function Ys(e, t, i) {
  const n = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const s = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (s.length === 0) return;
    const o = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), l = o?.getAttribute("srcLDInst") + "/" + o?.getAttribute("srcLNClass") + "." + o?.getAttribute("srcCBName");
    for (let d of s)
      if (t + l === d.textContent.trim()) {
        const m = Vn(
          d,
          i + l
        );
        n.push({
          old: { element: d },
          new: { element: m }
        });
        break;
      }
  }), n;
}
function Rn(e) {
  const t = Cn(e) ?? null;
  if (t === null)
    return [];
  const i = Pn[e.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(e, r.attributeName, t);
    r.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(ie).forEach((s) => {
      n.push({ old: { parent: s.parentElement, element: s } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((s) => s.textContent === t).filter(ie).forEach((s) => {
      s.parentElement && n.push({
        old: {
          parent: s.parentElement.parentElement,
          element: s.parentElement
        }
      });
    });
  }), n;
}
function On(e) {
  return (t) => {
    const i = f(t.find((a) => a.label === "name")), n = f(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && n === e.getAttribute("desc"))
      return [];
    const r = $(e, { name: i, desc: n });
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function eo(e, t) {
  return (i) => {
    const n = f(i.find((l) => l.label === "name")), r = e.getAttribute("name"), a = f(i.find((l) => l.label === "desc"));
    if (n === r && a === e.getAttribute("desc"))
      return [];
    const s = $(e, { name: n, desc: a }), o = {
      actions: [],
      title: c(t, { name: n })
    };
    return o.actions.push({
      old: { element: e },
      new: { element: s }
    }), o.actions.push(...ui(e, r, n)), o.actions.length ? [o] : [];
  };
}
function Mn(e, t) {
  return (i) => {
    const n = {};
    if (to(n, e, i), Object.keys(n).length == 0)
      return [];
    io(e, n);
    const r = f(i.find((s) => s.label === "name")), a = {
      actions: [],
      title: c(t, { name: r })
    };
    return a.actions.push(Qs(e, n)), a.actions.push(
      ...ui(e, e.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function to(e, t, i) {
  const n = f(i.find((a) => a.label === "name")), r = f(i.find((a) => a.label === "desc"));
  n !== t.getAttribute("name") && (e.name = n), r !== t.getAttribute("desc") && (e.desc = r);
}
function io(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    t[n.name] = n.value;
  }), t;
}
function Fn(e, t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("bay.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function no(e) {
  return (t) => {
    const i = f(t.find((s) => s.label === "name")), n = f(t.find((s) => s.label === "desc")), r = _(e.ownerDocument, "Bay", {
      name: i,
      desc: n
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function ro(e) {
  return [
    {
      title: c("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: c("add"),
        action: no(e)
      },
      content: Fn("", "")
    }
  ];
}
function ao(e) {
  return [
    {
      title: c("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: eo(
          e,
          "bay.action.updateBay"
        )
      },
      content: Fn(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const Kt = {
  // standard
  CBR: "Circuit Breaker",
  DIS: "Disconnector",
  // custom
  ERS: "Earth Switch",
  CTR: "Current Transformer",
  VTR: "Voltage Transformer",
  AXN: "Auxiliary Network",
  BAT: "Battery",
  BSH: "Bushing",
  CAP: "Capacitor Bank",
  CON: "Converter",
  EFN: "Earth Fault Neutralizer",
  FAN: "Fan",
  GIL: "Gas Insulated Line",
  GEN: "Generator",
  IFL: "Infeeding Line",
  MOT: "Motor",
  RES: "Neutral Resistor",
  REA: "Reactor",
  PSH: "Power Shunt",
  CAB: "Power Cable",
  PMP: "Pump",
  LIN: "Power Overhead Line",
  RRC: "Rotating Reactive Component",
  SCR: "Semiconductor Controlled Rectifier",
  SAR: "Surge Arrester",
  SMC: "Synchronous Machine",
  TCF: "Thyristor Controlled Frequency Converter",
  TCR: "Thyristor Controlled Reactive Component"
};
function so(e) {
  if (!e) return null;
  const [t, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), s = [`IED[name="${n}"]`, "IED"], o = ["AccessPoint > Server"], l = [
    `LDevice[inst="${r}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], d = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    W(
      s,
      [" > "],
      o,
      [" > "],
      l,
      d
    ).map((m) => m.join("")).join(",")
  );
}
function qn(e) {
  const t = e?.ownerDocument, i = e.getAttribute("lnType"), n = e.getAttribute("lnClass"), r = t.querySelector(
    `DataTypeTemplates > LNodeType[id="${i}"][lnClass="${n}"] > DO[name="SwTyp"]`
  );
  if (r) {
    const a = r.getAttribute("type");
    return t.querySelector(
      `DataTypeTemplates > DOType[id="${a}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function oo(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : qn(e);
}
function co(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function lo(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = so(t);
  let n;
  return i ? n = oo(i) : t && (n = qn(t)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function uo(e) {
  return e.getAttribute("type") === "DIS" && (co(e) || lo(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function po(e) {
  return Kt[uo(e)] ?? c("conductingequipment.unknownType");
}
function mo(e, t) {
  return e === "create" ? u`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${c("conductingequipment.wizard.typeHelper")}"
        validationMessage="${c("textfield.required")}"
      >
        ${Object.keys(Kt).map(
    (i) => u`<mwc-list-item value="${i}">${Kt[i]}</mwc-list-item>`
  )}
      </mwc-select>` : u`<mwc-select
        label="type"
        helper="${c("conductingequipment.wizard.typeHelper")}"
        validationMessage="${c("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function Hn(e, t, i, n, r) {
  return [
    mo(i, n),
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ho(e) {
  return (t) => {
    const i = f(t.find((C) => C.label === "name")), n = f(t.find((C) => C.label === "desc")), r = f(t.find((C) => C.label === "type")), a = r === "ERS" ? "DIS" : r, s = _(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: e, element: s } }];
    const o = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), l = o ? o.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, d = o ? o.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = o ? o.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = m && d && l ? l + "/" + d + "/" + m + "/grounded" : null;
    s.appendChild(
      _(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: l,
        voltageLevelName: d,
        bayName: m,
        connectivityNode: h
      })
    );
    const b = {
      new: {
        parent: e,
        element: s
      }
    };
    if (o) return [b];
    const g = _(
      e.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: h
      }
    );
    return [b, {
      new: {
        parent: e,
        element: g
      }
    }];
  };
}
function Bn(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function fo(e) {
  const t = Bn(e);
  return [
    {
      title: c("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: ho(e)
      },
      content: Hn(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function bo(e) {
  const t = Bn(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: c("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: On(e)
      },
      content: Hn(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        po(e),
        t
      )
    }
  ];
}
function go(e, t, i) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${c("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function yo(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: c("connectivitynode.wizard.title.edit"),
      element: e,
      content: go(
        e.getAttribute("name"),
        e.getAttribute("pathName"),
        t
      )
    }
  ];
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Wi = /* @__PURE__ */ new WeakMap(), Ui = 2147483647, vo = vt((...e) => (t) => {
  let i = Wi.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: Ui,
    values: []
  }, Wi.set(t, i));
  const n = i.values;
  let r = n.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const s = e[a];
    if (St(s) || typeof s.then != "function") {
      t.setValue(s), i.lastRenderedIndex = a;
      break;
    }
    a < r && s === n[a] || (i.lastRenderedIndex = Ui, r = 0, Promise.resolve(s).then((o) => {
      const l = i.values.indexOf(s);
      l > -1 && l < i.lastRenderedIndex && (i.lastRenderedIndex = l, t.setValue(o), t.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var E = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, J = /* @__PURE__ */ new Set();
J.add(E.BACKSPACE);
J.add(E.ENTER);
J.add(E.SPACEBAR);
J.add(E.PAGE_UP);
J.add(E.PAGE_DOWN);
J.add(E.END);
J.add(E.HOME);
J.add(E.ARROW_LEFT);
J.add(E.ARROW_UP);
J.add(E.ARROW_RIGHT);
J.add(E.ARROW_DOWN);
J.add(E.DELETE);
J.add(E.ESCAPE);
J.add(E.TAB);
var ne = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, Y = /* @__PURE__ */ new Map();
Y.set(ne.BACKSPACE, E.BACKSPACE);
Y.set(ne.ENTER, E.ENTER);
Y.set(ne.SPACEBAR, E.SPACEBAR);
Y.set(ne.PAGE_UP, E.PAGE_UP);
Y.set(ne.PAGE_DOWN, E.PAGE_DOWN);
Y.set(ne.END, E.END);
Y.set(ne.HOME, E.HOME);
Y.set(ne.ARROW_LEFT, E.ARROW_LEFT);
Y.set(ne.ARROW_UP, E.ARROW_UP);
Y.set(ne.ARROW_RIGHT, E.ARROW_RIGHT);
Y.set(ne.ARROW_DOWN, E.ARROW_DOWN);
Y.set(ne.DELETE, E.DELETE);
Y.set(ne.ESCAPE, E.ESCAPE);
Y.set(ne.TAB, E.TAB);
var Le = /* @__PURE__ */ new Set();
Le.add(E.PAGE_UP);
Le.add(E.PAGE_DOWN);
Le.add(E.END);
Le.add(E.HOME);
Le.add(E.ARROW_LEFT);
Le.add(E.ARROW_UP);
Le.add(E.ARROW_RIGHT);
Le.add(E.ARROW_DOWN);
function Ce(e) {
  var t = e.key;
  if (J.has(t))
    return t;
  var i = Y.get(e.keyCode);
  return i || E.UNKNOWN;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ne, fe, P = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ne = {}, Ne["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ne["" + P.LIST_ITEM_CLASS] = "mdc-list-item", Ne["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ne["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ne["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ne["" + P.ROOT] = "mdc-list";
var qe = (fe = {}, fe["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", fe["" + P.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", fe["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", fe["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", fe["" + P.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", fe["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", fe["" + P.ROOT] = "mdc-deprecated-list", fe), ht = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + qe[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + qe[P.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + P.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + qe[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + qe[P.LIST_ITEM_CLASS] + ` a,
    .` + qe[P.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + qe[P.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, te = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Zt = (e, t) => e - t, So = (e, t) => {
  const i = Array.from(e), n = Array.from(t), r = { added: [], removed: [] }, a = i.sort(Zt), s = n.sort(Zt);
  let o = 0, l = 0;
  for (; o < a.length || l < s.length; ) {
    const d = a[o], m = s[l];
    if (d === m) {
      o++, l++;
      continue;
    }
    if (d !== void 0 && (m === void 0 || d < m)) {
      r.removed.push(d), o++;
      continue;
    }
    if (m !== void 0 && (d === void 0 || m < d)) {
      r.added.push(m), l++;
      continue;
    }
  }
  return r;
}, Ao = ["input", "button", "textarea", "select"];
function Je(e) {
  return e instanceof Set;
}
const $t = (e) => {
  const t = e === te.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return Je(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class pi extends Sn {
  constructor(t) {
    super(Object.assign(Object.assign({}, pi.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = te.UNSET_INDEX, this.focusedItemIndex_ = te.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return ht;
  }
  static get numbers() {
    return te;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {
      },
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {
      },
      notifySelected: () => {
      },
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {
      },
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {
      },
      setActivatedStateForElementIndex: () => {
      },
      setTabIndexForElementIndex: () => {
      },
      setAttributeForElementIndex: () => {
      },
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(t) {
    this.wrapFocus_ = t;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(t) {
    this.isMulti_ = t;
    const i = this.selectedIndex_;
    if (t) {
      if (!Je(i)) {
        const n = i === te.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Je(i))
      if (i.size) {
        const n = Array.from(i).sort(Zt);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = te.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(t) {
    this.isVertical_ = t;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(t) {
    this.useActivatedClass_ = t;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(t) {
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_($t(t)) : this.setSingleSelectionAtIndex_(t));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(t, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(t, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(t, i, n) {
    const r = Ce(t) === "ArrowLeft", a = Ce(t) === "ArrowUp", s = Ce(t) === "ArrowRight", o = Ce(t) === "ArrowDown", l = Ce(t) === "Home", d = Ce(t) === "End", m = Ce(t) === "Enter", h = Ce(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || d ? (t.preventDefault(), this.focusLastElement()) : (o || l) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = n, b < 0))
      return;
    let g;
    if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(t), g = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(t), g = this.focusPrevElement(b);
    else if (l)
      this.preventDefaultEvent(t), g = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(t), g = this.focusLastElement();
    else if ((m || h) && i) {
      const w = t.target;
      if (w && w.tagName === "A" && m)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, g !== void 0 && (this.setTabindexAtIndex_(g), this.focusedItemIndex_ = g);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, i, n) {
    t !== te.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, n), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const i = this.adapter.getListItemCount();
    let n = t + 1;
    if (n >= i)
      if (this.wrapFocus_)
        n = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(n), n;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(t) {
    let i = t - 1;
    if (i < 0)
      if (this.wrapFocus_)
        i = this.adapter.getListItemCount() - 1;
      else
        return t;
    return this.adapter.focusItemAtIndex(i), i;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const t = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(t), t;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(t, i) {
    this.isIndexValid_(t) && this.adapter.setDisabledStateForElementIndex(t, !i);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(t) {
    const n = `${t.target.tagName}`.toLowerCase();
    Ao.indexOf(n) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== te.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const n = $t(this.selectedIndex_), r = So(n, t);
    if (!(!r.removed.length && !r.added.length)) {
      for (const a of r.removed)
        i && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of r.added)
        i && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === te.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, ht.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? ht.ARIA_CURRENT : ht.ARIA_SELECTED;
    this.selectedIndex_ !== te.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, n, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === te.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== te.UNSET_INDEX ? t = this.selectedIndex_ : Je(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let i = !1;
        for (const n of t)
          if (i = this.isIndexInRange_(n), i)
            break;
        return i;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === te.UNSET_INDEX || this.isIndexInRange_(t);
    } else
      return !1;
  }
  isIndexInRange_(t) {
    const i = this.adapter.getListItemCount();
    return t >= 0 && t < i;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(t, i, n) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let r = t;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, n, i) : i || n ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(te.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = i;
    const a = $t(this.selectedIndex_);
    r ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, n);
  }
}
function wo(e, t = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(n);
    }, t);
  };
}
const ft = (e) => e.hasAttribute("mwc-list-item");
function xo() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class re extends si {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = pi, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = wo(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      xo.call(this), t(i);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const t = await super.getUpdateComplete();
    return await this.itemsReady, t;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var t;
    const i = (t = this.assignedElements) !== null && t !== void 0 ? t : [], n = [];
    for (const s of i)
      ft(s) && (n.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, o) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && r.add(o);
    }), this.multi)
      this.select(r);
    else {
      const s = r.size ? r.entries().next().value[1] : -1;
      this.select(s);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const t = this.index;
    if (!Je(t))
      return t === -1 ? null : this.items[t];
    const i = [];
    for (const n of t)
      i.push(this.items[n]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, n = this.rootTabbable ? "0" : "-1";
    return u`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${be(t)}"
          aria-label="${be(i)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var t;
    const i = (t = this.assignedElements) !== null && t !== void 0 ? t : [];
    return this.emptyMessage !== void 0 && i.length === 0 ? u`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusIn(t, i);
    }
  }
  onFocusOut(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusOut(t, i);
    }
  }
  onKeydown(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(t), n = t.target, r = ft(n);
      this.mdcFoundation.handleKeydown(t, r, i);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(t);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(t), i === -1) || this.items[i].disabled)
        return;
      const r = t.detail.selected, a = t.detail.source;
      this.mdcFoundation.handleSingleSelection(i, a === "interaction", r), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const i = this.items, n = t.composedPath();
    for (const r of n) {
      let a = -1;
      if (Na(r) && ft(r) && (a = i.indexOf(r)), a !== -1)
        return a;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (t, i) => {
        if (!this.mdcRoot)
          return "";
        const r = this.items[t];
        return r ? r.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (t, i, n) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[t];
        r && r.setAttribute(i, n);
      },
      focusItemAtIndex: (t) => {
        const i = this.items[t];
        i && i.focus();
      },
      setTabIndexForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.tabindex = i);
      },
      notifyAction: (t) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: t };
        const n = new CustomEvent("action", i);
        this.dispatchEvent(n);
      },
      notifySelected: (t, i) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: t, diff: i };
        const r = new CustomEvent("selected", n);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => Ia(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.disabled = i);
      },
      getDisabledStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.selected = i);
      },
      getSelectedStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, i = !1) {
    const n = this.items[t];
    n && (n.selected = !0, n.activated = i);
  }
  deselectUi(t) {
    const i = this.items[t];
    i && (i.selected = !1, i.activated = !1);
  }
  select(t) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(t);
  }
  toggle(t, i) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(t, i);
  }
  onListItemConnected(t) {
    const i = t.target;
    this.layout(this.items.indexOf(i) === -1);
  }
  layout(t = !0) {
    t && this.updateItems();
    const i = this.items[0];
    for (const n of this.items)
      n.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = vn();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const n = t[i];
      if (ft(n))
        return this.items.indexOf(n);
    }
    return -1;
  }
  focusItemAtIndex(t) {
    for (const i of this.items)
      if (i.tabindex === 0) {
        i.tabindex = -1;
        break;
      }
    this.items[t].tabindex = 0, this.items[t].focus();
  }
  focus() {
    const t = this.mdcRoot;
    t && t.focus();
  }
  blur() {
    const t = this.mdcRoot;
    t && t.blur();
  }
}
v([
  y({ type: String })
], re.prototype, "emptyMessage", void 0);
v([
  q(".mdc-deprecated-list")
], re.prototype, "mdcRoot", void 0);
v([
  hn("", !0, "*")
], re.prototype, "assignedElements", void 0);
v([
  hn("", !0, '[tabindex="0"]')
], re.prototype, "tabbableElements", void 0);
v([
  y({ type: Boolean }),
  $e(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], re.prototype, "activatable", void 0);
v([
  y({ type: Boolean }),
  $e(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], re.prototype, "multi", void 0);
v([
  y({ type: Boolean }),
  $e(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], re.prototype, "wrapFocus", void 0);
v([
  y({ type: String }),
  $e(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], re.prototype, "itemRoles", void 0);
v([
  y({ type: String })
], re.prototype, "innerRole", void 0);
v([
  y({ type: String })
], re.prototype, "innerAriaLabel", void 0);
v([
  y({ type: Boolean })
], re.prototype, "rootTabbable", void 0);
v([
  y({ type: Boolean, reflect: !0 }),
  $e(function(e) {
    var t, i;
    if (e) {
      const n = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], re.prototype, "noninteractive", void 0);
var Co = Object.defineProperty, No = Object.getOwnPropertyDescriptor, Me = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? No(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Co(t, i, r), r;
};
function Xt(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof me ? e : Xt(e.parentElement);
}
function Eo(e, t) {
  const i = e.innerText + `
`, n = Array.from(e.children).map((o) => o.innerText).join(`
`), r = e.value, a = (i + n + r).toUpperCase(), s = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Xt(e).classList.remove("hidden") : Xt(e).classList.add("hidden");
}
let me = class extends re {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Ge);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Ge).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Ge).some((e) => e.selected);
  }
  onCheckAll() {
    const e = !this.isAllSelected;
    this.items.filter((t) => !t.disabled && !t.classList.contains("hidden")).forEach((t) => t.selected = e);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (e) => Eo(e, this.searchField.value)
    );
  }
  onListItemConnected(e) {
    super.onListItemConnected(e), this.requestUpdate();
  }
  update(e) {
    super.update(e), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? u`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : u``;
  }
  render() {
    return u`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? c("filter")}"
          ><mwc-textfield
            label="${this.searchFieldLabel ?? ""}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      ${super.render()}`;
  }
};
me.styles = he`
    ${fn(Tr.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
Me([
  y({ type: String })
], me.prototype, "searchFieldLabel", 2);
Me([
  y({ type: Boolean })
], me.prototype, "disableCheckAll", 2);
Me([
  L()
], me.prototype, "existCheckListItem", 1);
Me([
  L()
], me.prototype, "isAllSelected", 1);
Me([
  L()
], me.prototype, "isSomeSelected", 1);
Me([
  q("mwc-textfield")
], me.prototype, "searchField", 2);
me = Me([
  de("filtered-list")
], me);
var Io = Object.defineProperty, ko = Object.getOwnPropertyDescriptor, we = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ko(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Io(t, i, r), r;
};
const _o = u`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${c("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let le = class extends ue {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: u`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Tn(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(e) {
    const t = {};
    for (const i of e) {
      let n = t;
      for (const r of i)
        Object.prototype.hasOwnProperty.call(n, r) || (n[r] = {}), n = n[r];
    }
    this.selection = t;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(e) {
    this.paths = [e];
  }
  getTitle(e) {
    return e.join("/");
  }
  getDisplayString(e, t) {
    return e;
  }
  getPaths(e) {
    let t = Object.keys(this.selection).map((n) => [n]), i = e ?? this.depth - 1;
    for (; i-- > 0; )
      t = t.flatMap((n) => {
        let r = this.selection;
        for (const s of n) r = r[s];
        const a = Object.keys(r).map((s) => n.concat(s));
        return a.length === 0 ? [n] : a;
      });
    return e === void 0 ? t : t.filter((n) => n.length > e);
  }
  multiSelect(e, t, i) {
    let n = this.selection;
    for (const r of t) n = n[r];
    n && n[i] ? delete n[i] : n[i] = {};
  }
  singleSelect(e, t, i) {
    this.path[t.length] === i ? this.path = t : this.path = t.concat(i);
  }
  async select(e, t) {
    const i = e.target.selected.value;
    this.multi ? this.multiSelect(e, t, i) : this.singleSelect(e, t, i), this.requestUpdate(), await this.updateComplete, await new Promise((n) => setTimeout(n, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(e, t) {
    return u`<filtered-list
      @selected=${(i) => this.select(i, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (i) => u`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(e.length).map((n) => JSON.stringify(n)).includes(JSON.stringify(e.concat(i)))}
            >${this.getDisplayString(i, e)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(e) {
    const i = this.getPaths(e).map((r) => this.read(r)), n = [];
    for await (const { header: r, entries: a, path: s } of i)
      (r || a.length > 0) && n.push(
        u`${be(r)} ${this.renderDirectory(s, a)}`
      );
    return n.length === 0 ? u`` : u`<div class="column">${n}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), u`<div class="pane">
      ${e.map((t) => vo(t, _o))}
    </div>`;
  }
};
le.styles = he`
    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    h2 {
      color: var(--mdc-theme-primary);
    }

    section {
      display: flex;
      flex-direction: column;
      width: max-content;
    }

    section > mwc-list {
      margin-top: 76px;
    }

    a {
      font-weight: 600;
      font-variant: small-caps;
      text-transform: lowercase;
      text-decoration: none;
      color: var(--mdc-theme-primary);
    }

    a:link {
      color: var(--mdc-theme-error);
    }

    a:visited {
      color: var(--mdc-theme-secondary);
    }
  `;
we([
  y({ type: Object })
], le.prototype, "selection", 2);
we([
  y({ type: Boolean })
], le.prototype, "multi", 2);
we([
  y({ type: Number })
], le.prototype, "depth", 1);
we([
  y({ type: Array })
], le.prototype, "paths", 1);
we([
  y({ type: Array })
], le.prototype, "path", 1);
we([
  y({ attribute: !1 })
], le.prototype, "read", 2);
we([
  y({ attribute: !1 })
], le.prototype, "loaded", 2);
we([
  q("div")
], le.prototype, "container", 2);
le = we([
  de("finder-list")
], le);
function Do(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function $o(e, t) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = ye(e, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (s) => `${s.tagName}: ${N(s)}`
      )
    } : { path: i, header: u`<p>${c("error")}</p>`, entries: [] };
  };
}
function Gn(e) {
  if (["LDevice", "Server"].includes(e.tagName))
    return Array.from(e.children).filter(
      (i) => i.tagName === "LDevice" || i.tagName === "LN0" || i.tagName === "LN"
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type");
  return Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  );
}
function Lo(e) {
  return u`<finder-list
    multi
    .paths=${[["Server: " + N(e)]]}
    .read=${$o(e.ownerDocument, Gn)}
    .getDisplayString=${Do}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function To(e, t) {
  const [i, n] = t[t.length - 1].split(": "), r = ye(e.ownerDocument, i, n);
  if (!r || Gn(r).length > 0) return;
  const a = t.find((I) => I.startsWith("LN"));
  if (!a) return;
  const [s, o] = a.split(": "), l = ye(e.ownerDocument, s, o);
  if (!l) return;
  const d = l.closest("LDevice")?.getAttribute("inst"), m = l.getAttribute("prefix") ?? "", h = l.getAttribute("lnClass"), b = l.getAttribute("inst") && l.getAttribute("inst") !== "" ? l.getAttribute("inst") : null;
  let g = "", w = "", C = "";
  for (const I of t) {
    const [x, V] = I.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(x)) continue;
    const F = ye(e.ownerDocument, x, V);
    if (!F) return;
    const xe = F.getAttribute("name");
    x === "DO" && (g = xe), x === "SDO" && (g = g + "." + xe), x === "DA" && (w = xe, C = F.getAttribute("fc") ?? ""), x === "BDA" && (w = w + "." + xe);
  }
  if (!(!d || !h || !g || !w || !C))
    return _(e.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: m,
      lnClass: h,
      lnInst: b,
      doName: g,
      daName: w,
      fc: C
    });
}
function zo(e) {
  return (t, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const s of r) {
      const o = To(e, s);
      o && a.push({
        new: {
          parent: e,
          element: o,
          reference: null
        }
      });
    }
    return a;
  };
}
function Wn(e) {
  const t = e.closest("Server");
  return [
    {
      title: c("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: zo(e)
      },
      content: [t ? Lo(t) : u``]
    }
  ];
}
const ve = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, mi = {
  cbName: 32,
  abstracDaName: 60
};
function Lt(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Po(e) {
  return (t, i, n) => {
    const r = n.items.filter((o) => o.selected).map((o) => o.value).map((o) => ye(e.ownerDocument, "LNodeType", o)).filter((o) => o !== null), a = js(e);
    return r.map((o) => {
      const l = o.getAttribute("lnClass");
      if (!l) return null;
      const d = a(l);
      if (!d) {
        i.dispatchEvent(
          Lt({
            kind: "error",
            title: c("lnode.log.title", { lnClass: l }),
            message: c("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = G(e, "LNode").some(
        (w) => w.getAttribute("lnClass") === "LLN0"
      );
      if (l === "LLN0" && m) {
        i.dispatchEvent(
          Lt({
            kind: "error",
            title: c("lnode.log.title", { lnClass: l }),
            message: c("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const h = G(e, "LNode").some(
        (w) => w.getAttribute("lnClass") === "LPHD"
      );
      if (l === "LPHD" && h) {
        i.dispatchEvent(
          Lt({
            kind: "error",
            title: c("lnode.log.title", { lnClass: l }),
            message: c("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const b = l === "LLN0" ? "" : d, g = _(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: l,
        lnInst: b,
        lnType: o.getAttribute("id")
      });
      return { new: { parent: e, element: g } };
    }).filter((o) => o);
  };
}
function Vo(e) {
  return (t) => {
    t.dispatchEvent(pe()), t.dispatchEvent(pe(Kn(e)));
  };
}
function Un(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: c("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: c("lnode.wizard.reference"),
          action: Vo(e)
        }
      ],
      primary: {
        icon: "save",
        label: c("save"),
        action: Po(e)
      },
      content: [
        u`<filtered-list multi
          >${t.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && G(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && G(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return u`<mwc-check-list-item
              twoline
              value="${N(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? c("lnode.wizard.uniquewarning") : N(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Ro = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function jn(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Oo = "Client LN";
function ji(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => hi(t, i))[0] ?? null;
}
function hi(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function Mo(e, t) {
  const i = _(e.ownerDocument, "LNode", {
    iedName: t.closest("IED")?.getAttribute("name") ?? "",
    ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
    prefix: t.getAttribute("prefix") ?? "",
    lnClass: t.getAttribute("lnClass") ?? "",
    lnInst: t.getAttribute("inst") ?? ""
  });
  return {
    new: {
      parent: e,
      element: i
    }
  };
}
function Fo(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function qo(e, t) {
  return e.some((i) => hi(i, t));
}
function Ho(e, t) {
  return t.some((i) => hi(e, i));
}
function Bo(e) {
  return (t, i, n) => {
    const r = n.items.filter((l) => l.selected).map((l) => l.value).map((l) => {
      const d = ye(e.ownerDocument, "LN0", l);
      return d || ye(e.ownerDocument, "LN", l);
    }).filter((l) => l !== null), a = G(e, "LNode").filter(
      ie
    ), s = a.filter((l) => !qo(r, l)).map((l) => Fo(e, l)), o = r.filter((l) => !Ho(l, a)).map((l) => Mo(e, l));
    return s.concat(o);
  };
}
function Go(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function Wo(e, t) {
  if (!(e.target instanceof re)) return;
  const i = Go(e.target, "#lnList");
  if (i === null) return;
  const n = t.ownerDocument, s = e.target.selected.flatMap(
    (o) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${o.value}"] > AccessPoint > LN,:root > IED[name="${o.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${o.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((l) => !l.closest("Private"))
  ).filter((o) => o !== null).map((o) => {
    const l = Ro[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(o.getAttribute("lnClass") ?? "") ?? !1, d = ji(t.ownerDocument, o), m = d?.parentElement === t;
    return {
      selected: m,
      disabled: d !== null && !m,
      prefered: l,
      element: o
    };
  }).sort(jn).map((o) => u`<mwc-check-list-item
      ?selected=${o.selected}
      ?disabled=${o.disabled}
      value="${N(o.element)}"
      twoline
      ><span
        >${o.element.getAttribute("prefix") ?? ""}${o.element.getAttribute("lnClass")}${o.element.getAttribute(
    "inst"
  ) ?? ""}
        ${o.disabled ? u` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Ga(ji(n, o.element))}` : ""}</span
      ><span slot="secondary"
        >${o.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${o.element.closest("LDevice") ? o.element.closest("LDevice")?.getAttribute("inst") : Oo}</span
      ></mwc-check-list-item
    >`);
  ti(u`${s}`, i);
}
function Uo(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? u`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => Wo(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(jn).map(
    (i) => u`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : u`<mwc-list-item noninteractive graphic="icon">
      <span>${c("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function jo(e) {
  return (t) => {
    t.dispatchEvent(pe()), t.dispatchEvent(pe(Un(e)));
  };
}
function Kn(e) {
  return [
    {
      title: c("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: c("lnode.wizard.instance"),
          action: jo(e)
        }
      ],
      content: [Uo(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: c("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: c("save"),
        action: Bo(e)
      },
      content: [u`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Ko(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? Un(e) : Kn(e);
}
function Zo(e) {
  const t = e.iedName !== "None";
  return [
    u`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${c("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${c("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${c("scl.prefix")}"
      pattern="${ve.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${c("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${c("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function Xo(e) {
  return (t) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== e.getAttribute(a))) {
      const a = $(e, i);
      return r = {
        old: { element: e },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function Qo(e) {
  const [t, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o)), s = G(
    e.parentElement,
    "LNode"
  ).filter(
    (o) => o !== e && o.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((o) => o.getAttribute("lnInst"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: Xo(e)
      },
      content: [
        ...Zo({
          iedName: t,
          ldInst: i,
          prefix: n,
          lnClass: r,
          lnInst: a,
          reservedLnInst: s
        })
      ]
    }
  ];
}
function Jo(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Yo(e) {
  return (t) => {
    const i = f(t.find((h) => h.label === "seqNum")), n = f(t.find((h) => h.label === "timeStamp")), r = f(t.find((h) => h.label === "dataSet")), a = f(t.find((h) => h.label === "reasonCode")), s = f(t.find((h) => h.label === "dataRef")), o = f(t.find((h) => h.label === "entryID")), l = f(t.find((h) => h.label === "configRef")), d = f(t.find((h) => h.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && n === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && s === e.getAttribute("dataRef") && o === e.getAttribute("entryID") && l === e.getAttribute("configRef") && d === e.getAttribute("bufOvfl"))
      return [];
    const m = $(e, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: s,
      entryID: o,
      configRef: l,
      bufOvfl: d
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function ec(e) {
  const [
    t,
    i,
    n,
    r,
    a,
    s,
    o,
    l
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((d) => e.getAttribute(d));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Yo(e)
      },
      content: Jo({
        seqNum: t,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: s,
        configRef: o,
        bufOvfl: l
      })
    }
  ];
}
let tc = 1, Zn = 1, Xn = 1;
function ic(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      _(t.ownerDocument, "LNode", {
        iedName: i.parentElement?.parentElement?.parentElement?.parentElement?.getAttribute(
          "name"
        ) ?? null,
        ldInst: t.parentElement?.getAttribute("inst") ?? null,
        prefix: i.getAttribute("prefix"),
        lnClass: i.getAttribute("lnClass"),
        lnInst: i.getAttribute("inst")
      })
    );
  }), e;
}
function Qn(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function nc(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && Qn(e) === "CBR" ? "QA" + Zn++ : "QB" + Xn++;
}
function rc(e, t) {
  if (Array.from(
    e.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((n) => t.includes(n.innerHTML.trim())).length)
    return !0;
  const i = e.ownerDocument;
  return Array.from(
    i.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${e.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((n) => n.getAttribute("type")).flatMap(
    (n) => Array.from(
      i.querySelectorAll(
        `DOType[id="${n}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((n) => t.includes(n.innerHTML.trim())).length > 0;
}
function ac(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function sc(e, t) {
  return e.parentElement ? ac(e).filter((i) => rc(i, t)) : [];
}
function oc(e, t) {
  const i = sc(e, t);
  if (Zn = 1, Xn = 1, i.length) {
    const n = _(e.ownerDocument, "Bay", {
      name: "Q" + tc++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => ic(
      _(e.ownerDocument, "ConductingEquipment", {
        name: nc(a),
        type: Qn(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function cc(e, t) {
  return (i, n, r) => {
    const a = [], s = r.selected.map(
      (d) => d.value
    ), o = _(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), l = _(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return l.textContent = "110.00", o.appendChild(l), a.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), a.push({
      new: {
        parent: t,
        element: o
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(Ws).map((d) => oc(d, s)).forEach((d) => {
      d && a.push({ new: { parent: o, element: d } });
    }), a;
  };
}
function lc(e, t) {
  return [
    {
      title: c("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: c("guess.wizard.primary"),
        action: cc(e, t)
      },
      content: [
        u`<p>${c("guess.wizard.description")}</p>`,
        u`<mwc-list multi id="ctlModelList"
          ><mwc-check-list-item value="status-only"
            >status-only</mwc-check-list-item
          ><mwc-check-list-item value="direct-with-normal-security"
            >direct-with-normal-security</mwc-check-list-item
          ><mwc-check-list-item value="direct-with-enhanced-security"
            >direct-with-enhanced-security</mwc-check-list-item
          ><mwc-check-list-item value="sbo-with-normal-security"
            >sbo-with-normal-security</mwc-check-list-item
          ><mwc-check-list-item selected value="sbo-with-enhanced-security"
            >sbo-with-enhanced-security</mwc-check-list-item
          ></mwc-list
        >`
      ]
    }
  ];
}
const dc = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Beschreibung",
    ord: "Rang",
    value: "Wert",
    EnumVal: "Enum Wert",
    EnumType: "Enum Typ",
    DA: "Datenattribut",
    DO: "Datenobjekt",
    DAType: "Datenattribut Typ",
    DOType: "Datenobjekt Typ",
    CDC: " Datenklasse nach 7-3",
    Report: "Report",
    LN: "Logischer Knoten",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Funktionale Einschränkung",
    LNodeType: "Logischer Knoten Type",
    lnClass: "Klasse logischer Knoten",
    accessControl: "Zugriffskontrolle",
    transient: "Datenpunkt transient",
    Val: "Standardwert",
    dchg: "Detenänderung ist Auslöser",
    qchg: "Qualitätsanderung ist Auslöser",
    dupd: "Datenupdate ist Auslöser",
    period: "Periodisch übertragen",
    gi: "Manuelle Abfrage",
    fixedOffs: "Fester Offset",
    securityEnable: "Aktive Sicherungsmaßnahmen",
    DataSet: "Datensatz",
    Communication: "Kommunikation",
    TrgOps: "Triggerbedingungen",
    OptFields: "Optionale felder",
    multicast: "SMV nach IEC 61850 9-2",
    smpMod: "Abtast-Art",
    smpRate: "Abtastrate",
    nofASDU: "Abtastpunkte pro Datenpacket",
    seqNum: "Sequenznummer mitschicken",
    timeStamp: "Zeitstempel mitschicken",
    dataSet: "Datensatz-Reference mitschicken",
    reasonCode: "Was hat den Report getriggert?",
    dataRef: "Beschreibung der Datensatzes",
    entryID: "Entry ID mitschicken",
    configRef: "Konfigurations-Revision mitschicken",
    bufOvfl: "Überlauf des internen Speichers signalisieren",
    indexed: "Mehrere Instanzen möglich",
    buffered: "Gepufferter Report",
    maxReport: "Anzahl Instanzen",
    bufTime: "Min. Intervall zwischen zwei Reports",
    intgPd: "Intervall zwischen zwei periodischen Reports",
    SmvOpts: "Optionale Informationen",
    refreshTime: "Zeitstempel des Abtastwertes zu Telegram hinzufügen",
    sampleRate: "Abtastrate zu Telegram hinzufügen",
    security: "Potentiel in Zukunft für z.B. digitale Signature",
    synchSourceId: "Identität der Zeitquelle zu Telegram hinzufügen",
    SampledValueControl: "Sampled Value Kontrollblock",
    iedName: "Referenziertes IED",
    ldInst: "Referenziertes logisches Gerät",
    prefix: "Präfix des logischen Knotens",
    lnInst: "Instanz des logischen Knotens",
    virtual: "Virtuell",
    phase: "Phase"
  },
  settings: {
    title: "Einstellungen",
    language: "Sprache",
    languages: { de: "Deutsch", en: "Englisch (English)" },
    dark: "Dunkles Design",
    mode: "Profimodus",
    showieds: "Zeige IEDs im Substation-Editor",
    selectFileButton: "Datei auswählen",
    loadNsdTranslations: "NSDoc-Dateien hochladen",
    invalidFileNoIdFound: "Ungültiges NSDoc ({{ filename }}); kein 'id'-Attribut in der Datei gefunden",
    invalidNsdocVersion: "Die Version {{ id }} NSD ({{ nsdVersion }}) passt nicht zu der geladenen NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "Neues projekt",
    title: "Menü",
    viewLog: "Protokoll anzeigen",
    viewDiag: "Daignose anzeigen"
  },
  wizard: {
    title: {
      select: "{{tagName}} auswählen",
      edit: "{{tagName}} bearbeiten",
      add: "{{tagName}} hinzufügen"
    }
  },
  openSCD: {
    loading: "Lade Projekt {{ name }}",
    loaded: "{{ name }} geladen",
    readError: "{{ name }} Lesefehler",
    readAbort: "{{ name }} Leseabbruch"
  },
  zeroline: {
    iedsloading: "IEDs werden geladen...",
    showieds: "IEDs im Substation-Editor anzeigen/ausblenden",
    showfunctions: "Funktionselemente in der Ansicht filtern",
    commmap: "Kommunikationszuordnung",
    reportcontrol: "Reports anzeigen",
    gsecontrol: "GOOSEs anzeigen",
    smvcontrol: "Sampled Values anzeigen"
  },
  editing: {
    node: "Benutzerdefiniertes Objekt",
    created: "{{ name }} hinzugefügt",
    deleted: "{{ name }} entfernt",
    moved: "{{ name }} verschoben",
    updated: "{{ name }} bearbeitet",
    import: "{{name}} importiert",
    complex: "Mehrere Elemente bearbeitet",
    error: {
      create: "Konnte {{ name }} nicht hinzufügen",
      update: "Konnte {{ name }} nicht bearbeiten",
      move: "Konnte {{ name }} nicht verschieben",
      duplicate: "Konnte {{name}} nicht kopieren",
      nameClash: '{{ parent }} enthält bereits ein {{ child }} Kind namens "{{ name }}"',
      idClash: 'Das Projekt enthält bereits die ID "{{ id }}"'
    }
  },
  validator: {
    schema: {
      title: "Projekt validieren",
      valid: "{{ name }} erfolgreich validiert gegen XML-Schema",
      invalid: "{{ name }} Schema-Validierung fehlgeschlagen",
      fatal: "Fataler Validierungsfehler",
      loadError: "Konnte XML-Schema {{ name }} nicht laden"
    },
    templates: {
      title: "Templates validieren",
      mandatoryChild: "{{ tag }} {{ id }} fehlt ein obligatorisches {{ childTag }}-Kind {{ childId }}",
      missingAttribute: "Das Attribut {{attr}} ist verpflichted und fehlt in {{element}}",
      incorrectAttribute: "Das Attribut {{attr}} in Element {{element}} folgt nicht der Definition.",
      missingReference: '{{tag}} "{{name}}" hat eine ungültige Referenz - es fehlt der definierte Typ'
    }
  },
  textfield: {
    required: "Pflichtfeld",
    nonempty: "Darf nicht leer sein",
    noMultiplier: "keiner",
    unique: "Darf sich nicht wiederholen"
  },
  compare: {
    compareButton: "Starte Vergleich",
    attributes: "Attribute von {{ elementName }}",
    children: "Kindelemente von {{ elementName }}",
    filterMutables: "Projektspzifische Unterschiede ausblenden"
  },
  log: {
    name: "Protokoll",
    placeholder: "Hier werden Änderungen, Fehler und andere Meldungen angezeigt.",
    snackbar: {
      show: "Anzeigen",
      placeholder: "Keine Fehler"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Keine History",
    noEntries: "Keine Einträge in der SCL History"
  },
  diag: {
    name: "Daignoseübersicht",
    zeroissues: "Es konnten keine Fehler in dem Projekt gefunden werden.",
    placeholder: "Hier werden Validierungsfehler angezeigt.",
    missingnsd: "DataTypeTemplates können nicht validiert werden. Das Projekt muss die Version 2007B3 oder höher haben."
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor",
    menu: "Menüeintrag",
    requireDoc: "Benötigt Dokument",
    top: "oben",
    middle: "mittig",
    bottom: "unten",
    validator: "Validator",
    add: {
      heading: "Benutzerdefinierte plug-in",
      warning: `Hier können Sie benutzerdefinierte plug-ins hinzufügen.
                OpenSCD übernimmt hierfür keine Gewähr.`,
      name: "Name",
      nameHelper: "Lokaler Name der plug-in (frei wählbar)",
      src: "URL",
      srcHelper: "Die plug-in-URL des Herstellers"
    }
  },
  substation: {
    name: "Schaltanlage",
    missing: "Keine Schaltanlage",
    wizard: {
      nameHelper: "Name der Schaltanlage",
      descHelper: "Beschreibung der Schaltanlage",
      title: {
        add: "Schaltanlage hinzufügen",
        edit: "Schaltanlage bearbeiten"
      }
    },
    action: {
      addvoltagelevel: "Spannungsebene hinzufügen",
      updatesubstation: 'Schaltanlage "{{name}}" bearbeitet'
    },
    clone: {
      redirect: "LNode mitnehmen",
      cloneclose: "Einmal klonen",
      cloneproc: "Mehrfach klonen",
      newname: "Klonname"
    }
  },
  iededitor: {
    iedSelector: "IED auswählen",
    lnFilter: "Filter für logische Knoten",
    missing: "Kein IED vorhanden",
    toggleChildElements: "Kindelemente umschalten",
    settings: "Services für IED or AccessPoint",
    wizard: {
      daTitle: "DA Informationen anzeigen",
      doTitle: "DO Informationen anzeigen",
      nsdocDescription: "NSDoc Beschreibung",
      doiDescription: "Beschreibung des DOI",
      daiDescription: "Beschreibung des DAI",
      ied: "IED",
      accessPoint: "Zugangspunkt",
      lDevice: "Logisches Gerät",
      lnPrefix: "LN Präfix",
      lnDescription: "LN Beschreibung",
      lnInst: "LN Instanz",
      doName: "DO Name",
      doCdc: "DO Common Data Class",
      daName: "DA Name",
      daFc: "DA Functional Constraint",
      daBType: "DA Typ",
      daValue: "DA Wert"
    }
  },
  ied: {
    wizard: {
      nameHelper: "Name des IED",
      descHelper: "Beschreibung des IED",
      title: {
        edit: "IED bearbeiten",
        delete: "IED mit Abhängigkeiten entfernen",
        references: "Gelöschte Abhängikeiten"
      }
    },
    action: {
      updateied: 'IED "{{name}}" bearbeitet',
      deleteied: 'IED "{{name}}" entfernt'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Name des Logisches Gerät",
      noNameSupportHelper: "IED unterstützt keine funktionale Benennung",
      descHelper: "Beschreibung des Logisches Gerät",
      title: {
        edit: "Logisches Gerät bearbeiten"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "LN bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      prefixHelper: "Prefix des Logical Nodes",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "LN0 bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "`Name des Leistungstransformators",
      descHelper: "Beschreibung des Leistungstransformators",
      typeHelper: "Type des Leistungstransformators",
      title: {
        add: "Leistungstransformator hinzufügen",
        edit: "Leistungstransformator bearbeiten"
      }
    }
  },
  voltagelevel: {
    name: "Spannungsebene",
    wizard: {
      nameHelper: "Name der Spannungsebene",
      descHelper: "Beschreibung der Spannungsebene",
      nomFreqHelper: "Nennfrequenz",
      numPhaseHelper: "Phasenanzahl",
      voltageHelper: "Nennspannung",
      title: {
        add: "Spannungsebene hinzufügen",
        edit: "Spannungsebene bearbeiten"
      }
    },
    action: {
      updateVoltagelevel: 'Spannungsebene "{{name}}" bearbeitet'
    }
  },
  line: {
    name: "Linie",
    wizard: {
      nameHelper: "Liniename",
      descHelper: "Beschreibung des Linies",
      typeHelper: "Type des Linies",
      title: {
        add: "Linie hinzufügen",
        edit: "Linie bearbeiten"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Processname",
      descHelper: "Beschreibung des Processes",
      typeHelper: "Type des Processes",
      title: {
        add: "Process hinzufügen",
        edit: "Process bearbeiten"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Feld",
    wizard: {
      nameHelper: "Feldname",
      descHelper: "Beschreibung des Feldes",
      title: {
        add: "Feld hinzufügen",
        edit: "Feld bearbeiten"
      }
    },
    action: {
      updateBay: 'Feld "{{name}}" bearbeitet'
    }
  },
  conductingequipment: {
    name: "Primärelement",
    wizard: {
      nameHelper: "Name des Primärelements",
      descHelper: "Beschreibung des Primärelements",
      typeHelper: "Type des Primärelements",
      title: {
        add: "Primärelement hinzufügen",
        edit: "Primärelement bearbeiten"
      }
    },
    unknownType: "Unbekannter Typ"
  },
  connectivitynode: {
    name: "Verbindungsknoten",
    wizard: {
      nameHelper: "Verbindungsknoten Name",
      pathNameHelper: "Verbindungsknoten Beschreibung",
      title: {
        add: "Verbindungsknoten hinzufügen",
        edit: "Verbindungsknoten bearbeiten"
      }
    }
  },
  terminal: {
    name: "Anschluss",
    wizard: {
      nameHelper: "Anschluss Name",
      connectivityNodeHelper: "Anschluss Verbindungsknoten",
      cNodeNameHelper: "Anschluss Verbindungsknoten Name",
      title: {
        add: "Anschlussknoten hinzufügen",
        edit: "Anschlussknoten bearbeiten"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates fehlen",
    add: "DataTypeTemplates hinzufügen"
  },
  subscription: {
    none: "Keine Verbindung vorhanden",
    connect: "Daten-Attribut verbunden",
    disconnect: "Daten-Attribute Verbindung gelöst",
    subscriber: {
      subscribed: "Verbunden",
      notSubscribed: "Nicht Verbunden",
      availableToSubscribe: "Kann verbunden werden",
      partiallySubscribed: "Teilweise verbunden",
      noControlBlockSelected: "Keine Kontrollblock ausgewählt",
      noIedSelected: "Keine IED ausgewählt"
    },
    goose: {
      publisher: {
        title: "GOOSE-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit GOOSE Meldungen",
        publisherTitle: "GOOSE Nachricht verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "SampledValue-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit Sampled Values",
        publisherTitle: "Sampled Value  verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logische Knoten für ausgewählten Daten-Attribute",
        noSelection: "Kein Daten-Attribute ausgewählt",
        noSubscribedLNs: "Kein Verbinding zu dem ausgewählten Daten-Attribute",
        noAvailableLNs: "Keine Verbindung zu dem ausgewählten Daten-Attribute möglich"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Für Ausgewählte Daten-Attribut Verfügbare Verbindung",
        noSelection: "Kein Daten-Attribut ausgewählt",
        noSubscribedExtRefs: "Keine bestehenden Verbindungen",
        noAvailableExtRefs: "Keine verfügbaren Eingänge vorhanden"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sample Value Meldungen",
        noControlBlockFound: "Keine Sampled Values gefunden"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE-Meldungen",
        noControlBlockFound: "Keine GOOSEs gefunden"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Kindelemente umschalten",
    view: {
      valuesView: "Werte",
      networkView: "Netzwerk"
    },
    mappedCmv: 'Gemäß dem IEC 61850-80-1 Standard ist eine "{{ cdc }}" zuordnung über CMV erforderlich',
    values: {
      missing: "Kein IED mit 104 Adressen",
      removeAddresses: "Alle Adressen entfernen",
      removedAddresses: '{{ nrOfAddresses }} Addressen von DOI "{{ name }}" entfernt',
      addedAddress: '104-Addressen zu DO "{{ name }}" in LN(0) "{{ lnName }}" hinzugefügt',
      signalNames: {
        tiNumber1: "Einzelwertinformation",
        tiNumber3: "Zweipunktinformation",
        tiNumber5: "Stufenpositionsinformation",
        tiNumber7: "Bit string von 32 Bit",
        tiNumber9: "Gemessener Wert, normalisierter Wert",
        tiNumber11: "Gemessener Wert, skalierte Wert",
        tiNumber13: "Gemessener Wert, Kurz-Gleitkommazahl",
        tiNumber15: "Integrierte Summen",
        tiNumber20: "Verpackte Einzelwertinformation mit Statusänderungserkennung",
        tiNumber21: "Gemessener Wert, normalisierter Wert ohne Qualitätsbeschreibung",
        tiNumber30: "Einzelwertinformation mit Zeitstempel CP56Time2a",
        tiNumber31: "Zweipunktinformation mit Zeitstempel CP56Time2a",
        tiNumber32: "Stufenpositionsinformation mit Zeitstempel CP56Time2a",
        tiNumber33: "Bit string von 32 Bit mit Zeitstempel CP56Time2a",
        tiNumber34: "Gemessener Wert, normalisierter Wert mit Zeitstempel CP56Time2a",
        tiNumber35: "Gemessener Wert, skalierte Wert mit Zeitstempel CP56Time2a",
        tiNumber36: "Gemessener Wert, Kurz-Gleitkommazahl mit Zeitstempel CP56Time2a",
        tiNumber37: "Integrierte Summen mit Zeitstempel CP56Time2a",
        tiNumber38: "Ereignis von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber39: "Verpackte Startereignisse von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber40: "Verpackte Ausgangsschaltkreisinformationen von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber45: "Einzelbefehl",
        tiNumber46: "Doppelbefehl",
        tiNumber47: "Regelungsschritt-Befehl",
        tiNumber48: "Sollwertbefehl, normalisierter Wert",
        tiNumber49: "Sollwertbefehl, skalierte Wert",
        tiNumber50: "Sollwertbefehl, Kurz-Gleitkommazahl",
        tiNumber51: "Bit string von 32 Bit Befehl",
        tiNumber58: "Einzelbefehl mit Zeitstempel CP56Time2a",
        tiNumber59: "Doppelbefehl mit Zeitstempel CP56Time2a",
        tiNumber60: "Regelungsschritt-Befehl mit Zeitstempel CP56Time2a",
        tiNumber61: "Gemessener Wert, normalisierter Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber62: "Gemessener Wert, skalierte Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber63: "Gemessener Wert, Kurz-Gleitkommazahl Befehl mit Zeitstempel CP56Time2a",
        tiNumber64: "Bit string von 32 Bit Befehl mit Zeitstempel CP56Time2a",
        default: "Keine Beschreibung verfügbar"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "ConnectedAP bearbeiten"
          },
          redundancySwitchLabel: "Redundanz",
          redundancyGroupTitle: "Redundanzgruppen",
          noRedundancyGroupsAvailable: "Keine Redundanzgruppen verfügbar",
          addRedundancyGroup: "Redundanzruppe hinzufügen",
          stationTypeHelper: "Anlagentyp",
          ipHelper: "IP Adresse",
          ipSubnetHelper: "Subnetzmaske",
          wFactorHelper: "???",
          kFactorHelper: "???",
          timeout0Helper: "Time-out Verbindungsaufbau in Sekunden",
          timeout1Helper: "???",
          timeout2Helper: "???",
          timeout3Helper: "???"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Redundanzgruppe bearbeiten",
            add: "Redundanzgruppe hinzufügen"
          },
          redundancyGroupNumberLabel: "Redundanzgruppennummer",
          addedLRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          logicLinkGroupTitle: "???",
          noLogicLinksAvailable: "???",
          addLogicLink: "???"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "???",
            add: "???"
          },
          logicLinkNumberLabel: "???",
          addedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Information",
        addressEdit: "104-Adresse bearbeiten",
        addAddress: "104-Adresse hinzufügen"
      },
      error: {
        ioaConflict: "IOA-Konflikt innerhalb der CASDU-Nummer gefunden",
        addAddressError: 'Invalide Template Struktur, DAI kann nicht hinzugefügt werden (DO: "{{ doType }}", CDC: "{{ cdc }}", Structure: "{{ structure }}")'
      },
      casduHelper: "CASDU Wert",
      ioaHelper: "IOA Wert",
      monitorTiHelper: "TI Wert überwachen",
      monitorInverted: "???",
      monitorCheck: "???",
      controlTiHelper: "???",
      controlInverted: "???",
      controlCheck: "???",
      expectedValueHelper: "???",
      unitMultiplierHelper: "???",
      scaleMultiplierHelper: "???",
      scaleOffsetHelper: "???"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Lade IEDs aus Vorlage",
    selectIedTitle: "IEDs zum Vergleich auswählen",
    resultTitle: "Vergleiche IED mit Vorlage",
    projectIedTitle: "IEDs im Projekt",
    templateIedTitle: "IEDs aus Vorlage",
    selectIedButton: "IED auswählen",
    selectTemplateButton: "Vorlage auswählen",
    noDiff: 'Keine Unterschiede zwischen IED Projekt "{{ projectIedName }}" und IED aus Vorlage "{{ templateIedName }}" gefunden'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "EnumVal hinzufügen",
        edit: "EnumVal bearbeiten"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "EnumType hinzufügen",
        edit: "EnumType bearbeiten"
      }
    },
    action: {
      edit: 'DAType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "DAType hinzufügen",
        edit: "DAType bearbeiten"
      }
    },
    action: {
      edit: 'EnumType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "BDA hinzufügen",
        edit: "BDA bearbeiten"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Der Wert sollte vom Typ sein {{type}}",
      title: {
        create: 'DAI "{{daiName}}" hinzufügen',
        edit: 'DAI "{{daiName}}" bearbeiten'
      }
    },
    action: {
      createdai: 'DAI "{{daiName}}" hinzugefügt',
      updatedai: 'DAI "{{daiName}}" bearbeitet'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "SDO hinzufügen",
        edit: "SDO bearbeiten"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "DO hinzufügen",
        edit: "DO bearbeiten"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "DOType hinzufügen",
        edit: "DOType bearbeiten"
      },
      enums: "Standard Enumerations"
    },
    action: {
      edit: 'DOType ID "{{oldId}}" und deren DO-Referenzen geändert zu {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "LNodeType hinzufügen",
        edit: "LNodeType bearbeiten",
        select: "Data Objects auswählen"
      }
    },
    action: {
      edit: 'LNodeType ID "{{oldId}}" und deren LN-Referenzen geändert zu {{newId}} '
    },
    autoimport: "Vordefinierte OpenSCD LN Klasse verwenden",
    missinglnclass: "Vordefinierte LN Klasse fehlt"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Auswahl IEDs",
        selectLDs: "Auswahl logische Geräte",
        selectLNs: "Auswahl logische Knoten",
        selectLNodeTypes: "Auswahl logische Knoten Type"
      },
      placeholder: "Bitte laden Sie eine SCL-Datei, die IED-Elemente enthält.",
      uniquewarning: "Logische Knoten Klasse existiert bereits",
      reference: "Referenz auf bestehenden logischen Knoten erstellen",
      instance: "Referenz auf logischen Knoten Typ erstellen"
    },
    log: {
      title: "LNode vom Type {{lnClass}} kann nicht hinzugefügt werden",
      nonuniquelninst: "Keine eindeutige Instanz (lnInst)",
      uniqueln0: "Nur eine Instanz von {{lnClass}} zulässig"
    },
    tooltip: "Referenz zu logischen Knoten erstellen"
  },
  guess: {
    wizard: {
      primary: "Inhalt erraten",
      title: "Auswahl Steuerungsmodel(ctlModel)",
      description: `Schaltgeräten im Feld können oftmals bestimmten Steuerungsmodellen zugeordnet werden. 
 Damit wird die Abschätzung oftmals genauer.`
    }
  },
  merge: {
    title: "Vereinigen",
    defaultTitle: "{{ tag }} {{ source }} mit {{ sink }} vereinigen",
    log: "{{ tag }} {{ source }} mit {{ sink }} vereinigt",
    children: "Kindelemente"
  },
  import: {
    title: "IEDs importieren",
    log: {
      successful: "IED {{name}} geladen",
      parsererror: "Parser Fehler",
      loaderror: "Datei kann nicht geladen werden",
      importerror: "IED Element kann nicht importiert werden",
      missingied: "Kein IED Element in der Datei",
      nouniqueied: "IED Element {{ name }} bereits geladen"
    }
  },
  communication: {
    name: "Netzwerkkonfiguration",
    missing: "Kein Subnetzwerk"
  },
  subnetwork: {
    name: "Subnetzwerk",
    wizard: {
      nameHelper: "Name des Subnetzwerkes",
      descHelper: "Beschreibung des Subnetzwerkes",
      typeHelper: "Netzwerktyp (Bsp. 8-MMS)",
      bitrateHelper: "Übertragungsrate",
      title: {
        add: "Subnetzwerk hinzufügen",
        edit: "Subnetzwerk bearbeiten"
      }
    }
  },
  connectedap: {
    name: "Schnittstelle",
    wizard: {
      addschemainsttype: "XMLSchema-instance type hinzufügen"
    },
    action: {
      addaddress: "Adressfeld bearbeitet ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "GSE bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. GSE kann nicht hinzugefügt werden."
  },
  smv: {
    action: {
      addaddress: "SMV bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. SMV kann nicht hinzugefügt werden."
  },
  subscriber: {
    title: "Subscriber Update",
    description: "GOOSE Ziele aktualisieren: ",
    nonewitems: "keine neuen IEDName Elemente notwendig",
    message: "{{updatenumber}} IEDName Element(e) hinzugefügt"
  },
  commmap: {
    title: "Kommunikationszuordnung",
    connectCB: "{{cbType}} verbinden",
    connectToIED: "Verbinden mit {{iedName}}",
    sourceIED: "Quellgerät",
    sinkIED: "Zielgerät"
  },
  updatesubstation: {
    title: "Schaltanlage aktualisieren"
  },
  code: {
    log: "Element im XML Editor angepasst:  {{id}}"
  },
  updatedesc: {
    abb: "Signalbeschreibungen zu ABB IEDs hinzugefügt",
    sel: "Signalbeschreibungen zu SEL IEDs hinzugefügt"
  },
  sld: {
    substationSelector: "Schaltanlage auswählen",
    wizard: {
      xCoordinateHelper: "X-Koordinate im Einphasenersatzschaltbild",
      yCoordinateHelper: "Y-Koordinate im Einphasenersatzschaltbild"
    }
  },
  dataset: {
    fcda: { add: "Daten-Attribute hinzufügen" },
    fcd: { add: "Daten-Objekte hinzufügen" }
  },
  report: {
    wizard: { location: "Ablageort der Reports wählen" },
    rptID: "Report-Kontrolblock Kennung"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Nicht referenzierte Datensätze",
      deleteButton: "Ausgewählten Datensatz entfernen",
      tooltip: "DatenSätze ohne Verweis auf einen zugehörigen GOOSE-, Log-, Report- oder Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Steuerblöcke mit einem fehlenden oder ungültigen Kontrollblock",
      deleteButton: "Ausgewählte Kontrollblöcke entfernen",
      tooltip: "Steuerblöcke ohne Verweis auf ein vorhandenes Datensatz. Das ist kein Fehler und eher üblich for allem für Reports",
      addressDefinitionTooltip: "Für diesen Kontrollblock existiert eine Adressdefinition im Abschnitt Kommunikation",
      alsoRemoveFromCommunication: "Kommunikation SMV/GSE mit entfernen"
    },
    unreferencedDataTypes: {
      title: "Nicht referenzierte Datentypen",
      deleteButton: "Ausgewählte Datentypen entfernen",
      tooltip: "Datentypen, die nicht in einem logischen Knoten oder einem anderen verwendeten Datentyp referenziert werden",
      alsoRemoveSubTypes: "Entfernen Sie auch Untertypen",
      stackExceeded: "Maximale Aufrufe überschritten. Maximal zulässig sind {{maxStackDepth}}. Nicht alle überflüßigen Datentypen sind entfernt und das Project is potentiel beschädigt."
    }
  },
  controlblock: {
    action: {
      edit: '{{type}} "{{name}}" in IED {{iedName}} bearbeitet',
      add: '{{type}} "{{name}}" zu IED {{iedName}} hinzugefügt',
      remove: '{{type}} "{{name}}" and referenzierte Element von IED {{iedName}} entfernt'
    },
    hints: {
      source: "Quell-IED",
      missingServer: "Kein Server vorhanden",
      exist: "{{type}} mit dem Namen {{name}} existiert",
      noMatchingData: "Keine Datenübereinstimmung",
      valid: "Kann kopiert werden"
    },
    label: {
      copy: "Kopie in anderen IEDs ertellen"
    }
  },
  gsecontrol: {
    wizard: { location: "Ablageort der GOOSE wählen" }
  },
  samvpledvaluecontrol: {
    wizard: {
      location: "Ablageort des Select Sampled Value Control Block wählen"
    }
  },
  publisher: {
    selectbutton: "{{type}} auswählen",
    nodataset: "Kein verbundener Datensatz",
    smv: {
      commsetting: "Kommunikationsparameter (SMV)",
      noconnectedap: "Fehlende Verbindung zu einem Netzwerk",
      smvopts: "Optionale Felder"
    }
  },
  exportCommunication: {
    noCommunicationSection: "Die Communication-Sektion ist leer."
  },
  add: "Hinzufügen",
  new: "Neu",
  remove: "Entfernen",
  edit: "Bearbeiten",
  move: "Verschieben",
  create: "Erstellen",
  save: "Speichern",
  saveAs: "Speichern unter",
  open: "Öffnen",
  reset: "Zurücksetzen",
  cancel: "Abbrechen",
  close: "Schließen",
  filter: "Filter",
  filters: "Filters",
  undo: "Rückgängig",
  redo: "Wiederholen",
  duplicate: "Klonen",
  connect: "Verbinden",
  disconnect: "Trennen",
  next: "Weiter"
}, uc = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Description",
    ord: "Ordinal",
    value: "Value",
    EnumVal: "Enum Value",
    EnumType: "Enum Type",
    DA: "Data attribute",
    DO: "Data object",
    DAType: "Data Attribute Type",
    DOType: "Data Object Type",
    CDC: "Common data class",
    Report: "Report",
    LN: "Logical Node",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Function constraint",
    LNodeType: "Logical Node Type",
    lnClass: "Logical Node Class",
    accessControl: "Access control",
    transient: "Transient data",
    Val: "Default value",
    dchg: "Trigger on data change",
    qchg: "Trigger on quality change",
    dupd: "Trigger on data update",
    period: "Periodical Publishing",
    gi: "General Interrogation",
    fixedOffs: "Fixed offset",
    securityEnable: "Security enabled",
    DataSet: "Dataset",
    Communication: "Communication",
    TrgOps: "Trigger options",
    OptFields: "Optional fields",
    multicast: "SMV acc. to IEC 61850 9-2",
    smpMod: "Sample mode",
    smpRate: "Sample rate",
    nofASDU: "Samples per packet",
    seqNum: "Add Sequence Number",
    timeStamp: "Add Timestamp",
    dataSet: "Add DataSet Reference",
    reasonCode: "Add Trigger Reason",
    dataRef: "Add description of the payload",
    entryID: "Add Entry ID",
    configRef: "Add Configuration Revision",
    bufOvfl: "Add Buffered Overflow information",
    indexed: "Multiple instances possible",
    buffered: "Buffered Report",
    maxReport: "Number of Instances",
    bufTime: "Min. time between two Reports",
    intgPd: "Time between two periodic Reports",
    SmvOpts: "Optional Information",
    refreshTime: "Add timestamp to SMV packet",
    sampleRate: "Add sample rate to SMV packet",
    security: "Potential future use. e.g. digital signature",
    synchSourceId: "Add sync source id to SMV packet",
    SampledValueControl: "Sampled Value Control Block",
    iedName: "Referenced IED",
    ldInst: "Referenced Logical Device",
    prefix: "Prefix of the Logical Node",
    lnInst: "Instance of the Logical Node",
    virtual: "Virtual",
    phase: "Phase"
  },
  settings: {
    title: "Settings",
    language: "Language",
    languages: { de: "German (Deutsch)", en: "English" },
    dark: "Dark theme",
    mode: "Pro mode",
    showieds: "Show IEDs in substation editor",
    selectFileButton: "Select file",
    loadNsdTranslations: "Uploaded NSDoc files",
    invalidFileNoIdFound: "Invalid NSDoc ({{ filename }}); no 'id' attribute found in file",
    invalidNsdocVersion: "The version of {{ id }} NSD ({{ nsdVersion }}) does not correlate with the version of the corresponding NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "New project",
    title: "Menu",
    viewLog: "View log",
    viewDiag: "View diagnostics"
  },
  wizard: {
    title: {
      select: "Select {{tagName}}",
      edit: "Edit {{tagName}}",
      add: "Add {{tagName}}"
    }
  },
  openSCD: {
    loading: "Loading project {{ name }}",
    loaded: "{{ name }} loaded",
    readError: "Error reading {{ name }}",
    readAbort: "Aborted reading {{ name }}"
  },
  zeroline: {
    iedsloading: "Loading IEDs...",
    showieds: "Show/hide IEDs in substation editor",
    showfunctions: "Filter function type elements",
    commmap: "Communication mapping",
    reportcontrol: "Show all Reports",
    gsecontrol: "Show all GOOSEs",
    smvcontrol: "Show all Sampled Values"
  },
  editing: {
    node: "User defined object",
    created: "Added {{ name }}",
    deleted: "Removed {{ name }}",
    moved: "Moved {{ name }}",
    updated: "Edited {{ name }}",
    import: "Imported {{name}}",
    complex: "Multiple elements edited",
    error: {
      create: "Could not add {{ name }}",
      update: "Could not edit {{ name }}",
      move: "Could not move {{ name }}",
      duplicate: "Could not copy {{ name }}",
      nameClash: 'Parent {{ parent }} already contains a {{ child }} named "{{ name }}"',
      idClash: 'The project has already an ID "{{ id }}"'
    }
  },
  textfield: {
    required: "Required",
    nonempty: "Must not be empty",
    noMultiplier: "none",
    unique: "Must be unique"
  },
  compare: {
    compareButton: "Compare",
    attributes: "Attributes from {{ elementName }}",
    children: "Child elements from {{ elementName }}",
    filterMutables: "Filter project specific differences"
  },
  log: {
    name: "Log",
    placeholder: "Errors, warnings and other notifications will show up here.",
    snackbar: {
      show: "Show",
      placeholder: "No errors"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Edits will show up here",
    noEntries: "No SCL history entries"
  },
  diag: {
    name: "Diagnostics",
    zeroissues: "No errors found in the project",
    placeholder: "Issues found during validation will show up here",
    missingnsd: "Cannot validate DataTypeTemplates. The version of the project must be higher than or equal to 2007B3"
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor tab",
    menu: "Menu entry",
    requireDoc: "Requires loaded document",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    validator: "Validator",
    add: {
      heading: "Add custom plug-in",
      warning: `Here you may add remote plug-ins directly from a custom URL.
                You do this at your own risk.`,
      name: "Name",
      nameHelper: "Your preferred plug-in name",
      src: "URL",
      srcHelper: "The vendor supplied plug-in URL"
    }
  },
  validator: {
    schema: {
      title: "Validate project",
      valid: "{{ name }} XML schema validation successful",
      invalid: "{{ name }} XML schema validation failed",
      fatal: "Fatal validation error",
      loadError: "Could not load XML schema {{ name }}"
    },
    templates: {
      title: "Validate templates",
      mandatoryChild: "{{ tag }} {{ id }} is missing mandatory child {{ childTag }} {{ childId }}",
      missingAttribute: "The attribute {{attr}} is required but missing in {{element}}",
      incorrectAttribute: "The attribute {{attr}} is incorrect in the element {{element}}.",
      missingReference: "{{tag}}:{{name}} has a invalid reference - type attribute cannot be connected to a template"
    }
  },
  substation: {
    name: "Substation",
    missing: "No substation",
    wizard: {
      nameHelper: "Substation name",
      descHelper: "Substation description",
      title: {
        add: "Add substation",
        edit: "Edit substation"
      }
    },
    action: {
      addvoltagelevel: "Add voltage level",
      updatesubstation: 'Edited substation "{{name}}"'
    },
    clone: {
      redirect: "Redirect LNode's",
      cloneclose: "Clone once",
      cloneproc: "Clone multiple",
      newname: "Clone Name"
    }
  },
  iededitor: {
    iedSelector: "Select IED",
    lnFilter: "Logical Node Filter",
    missing: "No IED",
    toggleChildElements: "Toggle child elements",
    settings: "Show Services the IED/AccessPoint provides",
    wizard: {
      daTitle: "Show DA Info",
      doTitle: "Show DO Info",
      nsdocDescription: "NSDoc description",
      doiDescription: "Data object description",
      daiDescription: "Data attribute description",
      ied: "IED",
      accessPoint: "Access point",
      lDevice: "Logical device",
      lnPrefix: "Logical node prefix",
      lnDescription: "Logical node description",
      lnInst: "Logical node inst",
      doName: "Data object name",
      doCdc: "Data object common data class",
      daName: "Data attribute name",
      daFc: "Data attribute functional constraint",
      daBType: "Data attribute type",
      daValue: "Data attribute value"
    }
  },
  ied: {
    wizard: {
      nameHelper: "IED name",
      descHelper: "IED description",
      title: {
        edit: "Edit IED",
        delete: "Remove IED with references",
        references: "References to be removed"
      }
    },
    action: {
      updateied: 'Edited IED "{{name}}"',
      deleteied: 'Removed IED "{{name}}"'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Logical device name",
      noNameSupportHelper: "IED doesn't support Functional Naming",
      descHelper: "Logical device description",
      title: {
        edit: "Edit logical device"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "Edit LN"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      prefixHelper: "Prefix of the logical node",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "Edit LN0"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "Power transformer name",
      descHelper: "Power transformer description",
      typeHelper: "Power transformer type",
      title: {
        add: "Add power transformer",
        edit: "Edit power transformer"
      }
    }
  },
  voltagelevel: {
    name: "Voltage level",
    wizard: {
      nameHelper: "Voltage level name",
      descHelper: "Voltage level description",
      nomFreqHelper: "Nominal frequency",
      numPhaseHelper: "Number of phases",
      voltageHelper: "Nominal voltage",
      title: {
        add: "Add voltage level",
        edit: "Edit voltage level"
      }
    },
    action: {
      updateVoltagelevel: 'Edited voltagelevel "{{name}}"'
    }
  },
  line: {
    name: "Line",
    wizard: {
      nameHelper: "Line name",
      descHelper: "Line description",
      typeHelper: "Line type",
      title: {
        add: "Add line",
        edit: "Edit line"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Process name",
      descHelper: "Process description",
      typeHelper: "Process type",
      title: {
        add: "Add Process",
        edit: "Edit Process"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Bay",
    wizard: {
      nameHelper: "Bay name",
      descHelper: "Bay description",
      title: {
        add: "Add bay",
        edit: "Edit bay"
      }
    },
    action: {
      updateBay: 'Edited bay "{{name}}"'
    }
  },
  conductingequipment: {
    name: "Conducting Equipment",
    wizard: {
      nameHelper: "Conducting equipment name",
      descHelper: "Conducting equipment description",
      typeHelper: "Conducting equipment type",
      title: {
        add: "Add conducting equipment",
        edit: "Edit conducting equipment"
      }
    },
    unknownType: "Unknown type"
  },
  connectivitynode: {
    name: "Connectivity Node",
    wizard: {
      nameHelper: "Connectivity node name",
      pathNameHelper: "Connectivity node pathname",
      title: {
        add: "Add Connectivity node",
        edit: "Edit Connectivity node"
      }
    }
  },
  terminal: {
    name: "Terminal",
    wizard: {
      nameHelper: "Terminal name",
      connectivityNodeHelper: "Terminal connectivity node",
      cNodeNameHelper: "Terminal connectivity node name",
      title: {
        add: "Add Terminal",
        edit: "Edit Terminal"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates missing",
    add: "Add DataTypeTemplates"
  },
  subscription: {
    none: "None",
    connect: "Connect data attribute",
    disconnect: "Disconnect data attribute",
    subscriber: {
      subscribed: "Subscribed",
      notSubscribed: "Not Subscribed",
      availableToSubscribe: "Available to subscribe",
      partiallySubscribed: "Partially subscribed",
      noControlBlockSelected: "No control block selected",
      noIedSelected: "No IED selected"
    },
    goose: {
      publisher: {
        title: "GOOSE Publishers",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "GOOSE Subscribers",
        publisherTitle: "GOOSE Messages subscribed to {{selected}}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "Sampled Value Messages",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Sampled Value Subscribers",
        publisherTitle: "Sampled Value Messages subscribed to {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logical nodes available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedLNs: "No subscribed logical nodes",
        noAvailableLNs: "No available logical nodes to subscribe"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Inputs available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedExtRefs: "No subscribed inputs",
        noAvailableExtRefs: "No available inputs to subscribe"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sampled Value Messages",
        noControlBlockFound: "No Sampled Value Messages found"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE Messages",
        noControlBlockFound: "No GOOSE Messages found"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Toggle child elements",
    view: {
      valuesView: "Values",
      networkView: "Network"
    },
    mappedCmv: 'According to the IEC 61850-80-1 standard, "{{ cdc }}" mapping is required via CMV',
    values: {
      missing: "No IED with 104 Addresses",
      removeAddresses: "Remove all Addresses",
      removedAddresses: 'Removed Addresses from DOI "{{ name }}" ({{ nrOfAddresses }})',
      addedAddress: 'Added 104 Address(es) to DO "{{ name }}" on LN(0) "{{ lnName }}"',
      signalNames: {
        tiNumber1: "Single-point information",
        tiNumber3: "Double-point information",
        tiNumber5: "Step position information",
        tiNumber7: "Bit string of 32 bit",
        tiNumber9: "Measured value, normalized value",
        tiNumber11: "Measured value, scaled value",
        tiNumber13: "Measured value, short floating point number",
        tiNumber15: "Integrated totals",
        tiNumber20: "Packed single point information with status change detection",
        tiNumber21: "Measured value, normalized value without quality descriptor",
        tiNumber30: "Single-point information with time tag CP56Time2a",
        tiNumber31: "Double-point information with time tag CP56Time2a",
        tiNumber32: "Step position information with time tag CP56Time2a",
        tiNumber33: "Bit string of 32 bit with time tag CP56Time2a",
        tiNumber34: "Measured value, normalized value with time tag CP56Time2a",
        tiNumber35: "Measured value, scaled value with time tag CP56Time2a",
        tiNumber36: "Measured value, short floating point number with time tag CP56Time2a",
        tiNumber37: "Integrated totals with time tag CP56Time2a",
        tiNumber38: "Event of protection equipment with time tag CP56Time2a",
        tiNumber39: "Packed start events of protection equipment with time tag CP56Time2a",
        tiNumber40: "Packed output circuit information of protection equipment with time tag CP56Time2a",
        tiNumber45: "Single command",
        tiNumber46: "Double command",
        tiNumber47: "Regulating step command",
        tiNumber48: "Set-point Command, normalized value",
        tiNumber49: "Set-point Command, scaled value",
        tiNumber50: "Set-point Command, short floating point number",
        tiNumber51: "Bit string 32 bit command",
        tiNumber58: "Single command with time tag CP56Time2a",
        tiNumber59: "Double command with time tag CP56Time2a",
        tiNumber60: "Regulating step command with time tag CP56Time2a",
        tiNumber61: "Measured value, normalized value command with time tag CP56Time2a",
        tiNumber62: "Measured value, scaled value command with time tag CP56Time2a",
        tiNumber63: "Measured value, short floating point number command with time tag CP56Time2a",
        tiNumber64: "Bit string of 32 bit command with time tag CP56Time2a",
        default: "No description available"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "Edit ConnectedAP"
          },
          redundancySwitchLabel: "Redundancy",
          redundancyGroupTitle: "Redundancy Groups",
          noRedundancyGroupsAvailable: "No redundancy groups available",
          addRedundancyGroup: "Redundancy Group",
          stationTypeHelper: "Type of station",
          ipHelper: "IP address of the logical link",
          ipSubnetHelper: "Subnetwork mask of the IP address of the logical link",
          wFactorHelper: "W factor of the logical link",
          kFactorHelper: "K factor of the logical link",
          timeout0Helper: "Time-out in seconds of connection establishment",
          timeout1Helper: "Time-out in seconds of sent or test APDUs",
          timeout2Helper: "Time-out in seconds for acknowledges in case of no data messages",
          timeout3Helper: "Time-out in seconds for sending test frames in case of a long idle state"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Edit Redundancy Group",
            add: "Add Redundancy Group"
          },
          redundancyGroupNumberLabel: "Redundancy Group number",
          addedLRedundancyGroup: 'Added Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedRedundancyGroup: 'Edited Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedRedundancyGroup: 'Removed Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          logicLinkGroupTitle: "Logic Links",
          noLogicLinksAvailable: "No Logic Links available",
          addLogicLink: "Logic Link"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "Edit Logic Link",
            add: "Add Logic Link"
          },
          logicLinkNumberLabel: "Logic Link number",
          addedLogicLink: 'Added Logic Link group to SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedLogicLink: 'Edited Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedLogicLink: 'Removed Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Info",
        addressEdit: "Edit 104 Address",
        addAddress: "Add 104 Address"
      },
      error: {
        ioaConflict: "IOA conflict found within CASDU number",
        addAddressError: 'Invalid Template Structure, unable to create DAI Element. (DO: "{{ doType }}", CDC: "{{ cdc }}", DAI: "{{ structure }}")'
      },
      casduHelper: "CASDU Value",
      ioaHelper: "IOA Value",
      monitorTiHelper: "Monitor TI Value",
      monitorInverted: "Created Inverted Addresses (Monitor)",
      monitorCheck: "Create Check Addresses (Monitor)",
      controlTiHelper: "Control TI Value",
      controlInverted: "Created Inverted Addresses (Control)",
      controlCheck: "Create Check Addresses (Control)",
      expectedValueHelper: "Expected Value",
      unitMultiplierHelper: "Unit Multiplier",
      scaleMultiplierHelper: "Scale Multiplier",
      scaleOffsetHelper: "Scale Offset"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Select template project to Compare IED with",
    selectIedTitle: "Select IED for comparison",
    resultTitle: "Compared IED with IED from template project",
    projectIedTitle: "IEDs in project",
    templateIedTitle: "IEDs in template project",
    selectIedButton: "Select IED",
    selectTemplateButton: "Select template project",
    noDiff: 'No differences between the project IED "{{ projectIedName }}" and template IED "{{ templateIedName }}"'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "Add EnumVal",
        edit: "Edit EnumVal"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "Add EnumType",
        edit: "Edit EnumType"
      }
    },
    action: {
      edit: 'Change EnumType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "Add DAType",
        edit: "Edit DAType"
      }
    },
    action: {
      edit: 'Change DAType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "Add BDA",
        edit: "Edit BDA"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Value should be of type {{type}}",
      title: {
        create: 'Create DAI "{{daiName}}"',
        edit: 'Edit DAI "{{daiName}}"'
      }
    },
    action: {
      createdai: 'Created DAI "{{daiName}}"',
      updatedai: 'Edited DAI "{{daiName}}"'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "Add SDO",
        edit: "Edit SDO"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "Add DO",
        edit: "Edit DO"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "Add DOType",
        edit: "Edit DOType"
      },
      enums: "Default enumerations"
    },
    action: {
      edit: 'Change DOType ID "{{oldId}}" and its DO references to {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "Add LNodeType",
        edit: "Edit LNodeType",
        select: "Select Data Objects"
      }
    },
    action: {
      edit: 'Change LNodeType ID "{{oldId}}" and its LN references to {{newId}} '
    },
    autoimport: "Use LN class from OpenSCD template",
    missinglnclass: "Missing pre-defined LN class"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Select IEDs",
        selectLDs: "Select logical devices",
        selectLNs: "Select logical nodes",
        selectLNodeTypes: "Select logical node types"
      },
      placeholder: "Please load an SCL file that contains IED elements.",
      uniquewarning: "Logical node class already exists",
      reference: "Add reference to existing logical node",
      instance: "Add reference to logical node type"
    },
    log: {
      title: "Cannot add LNode of class {{lnClass}}",
      nonuniquelninst: "Cannot find unique lnInst",
      uniqueln0: "Only one instance of {{lnClass}} allowed"
    },
    tooltip: "Create logical nodes reference"
  },
  guess: {
    wizard: {
      primary: "Guess content",
      title: "Select control model (ctlModel)",
      description: `IEDs often contain more controllable logical nodes than switchgear in the field. 
 You can select the control model(s) used specific for switchgear.`
    }
  },
  merge: {
    title: "Merge",
    defaultTitle: "Merge {{ source }} into {{ sink }} ({{ tag }})",
    log: "Merged {{ tag }} {{ source }} into {{ sink }}",
    children: "Child elements"
  },
  import: {
    title: "Import IEDs",
    log: {
      successful: "IED {{ name }} loaded",
      parsererror: "Parser error",
      loaderror: "Could not load file",
      importerror: "Could not import IED",
      missingied: "No IED element in the file",
      nouniqueied: "IED element {{ name }} already in the file"
    }
  },
  communication: {
    name: "Network Configuration",
    missing: "No subnetwork"
  },
  subnetwork: {
    name: "Subnetwork",
    wizard: {
      nameHelper: "Subnetwork name",
      descHelper: "Subnetwork description",
      typeHelper: "Network type (e.g. 8-MMS)",
      bitrateHelper: "Bit rate",
      title: {
        add: "Add subnetwork",
        edit: "Edit subnetwork"
      }
    }
  },
  connectedap: {
    name: "Connected access point",
    wizard: {
      addschemainsttype: "Add XMLSchema-instance type"
    },
    action: {
      addaddress: "Edit Address ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "Edit GSE ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. GSE cannot be created."
  },
  smv: {
    action: {
      addaddress: "Edit SMV ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. SMV cannot be created."
  },
  subscriber: {
    title: "Subscriber update",
    description: "Subscriber update: ",
    nonewitems: "no new IEDName elements to add",
    message: "{{updatenumber}} IEDName elements added to the project"
  },
  commmap: {
    title: "Communication mapping",
    connectCB: "Connect {{cbType}}",
    connectToIED: "Connect to {{iedName}}",
    sourceIED: "Source IED",
    sinkIED: "Sink IED"
  },
  updatesubstation: {
    title: "Update substation"
  },
  code: {
    log: "Changed element in XML editor: {{id}}"
  },
  updatedesc: {
    abb: "Added signal descriptions to ABB IEDs",
    sel: "Added signal descriptions to SEL IEDs"
  },
  sld: {
    substationSelector: "Select a substation",
    wizard: {
      xCoordinateHelper: "X-Coordinate for Single Line Diagram",
      yCoordinateHelper: "Y-Coordinate for Single Line Diagram"
    }
  },
  dataset: {
    fcda: { add: "Add Data Attributes" },
    fcd: { add: "Add Data Objects" }
  },
  report: {
    wizard: { location: "Select Report Control Location" },
    rptID: "Report control block identifier"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Unreferenced Datasets",
      deleteButton: "Remove Selected Datasets",
      tooltip: "Datasets without a reference to an associated GOOSE, Log, Report or Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Control Blocks with a Missing or Invalid Dataset",
      deleteButton: "Remove Selected Control Blocks",
      tooltip: "Control Blocks without a reference to an existing DataSet. Note that this is normal in an ICD file or for an MMS ReportControl with a dynamically allocated DataSet",
      addressDefinitionTooltip: "An address definition exists for this control block in the Communication section",
      alsoRemoveFromCommunication: "Also remove SMV/GSE Address"
    },
    unreferencedDataTypes: {
      title: "Unreferenced Data Types",
      deleteButton: "Remove Selected Data Types",
      tooltip: "Data Types which are not referenced in a Logical Node or other used Data Type",
      alsoRemoveSubTypes: "Also remove subtypes",
      stackExceeded: "Max Stack Length Exceeded. Maximum allowed is {{maxStackDepth}}. Datatype cleaning incomplete and file damage may have occurred."
    }
  },
  controlblock: {
    action: {
      edit: 'Edited {{type}} "{{name}}" in IED {{iedName}}',
      add: 'Added {{type}} "{{name}}" to IED {{iedName}}',
      remove: 'Removed {{type}} "{{name}}" and its referenced elements from IED {{iedName}}'
    },
    hints: {
      source: "Source IED",
      missingServer: "Not A Server",
      exist: "{{type}} with name {{name}} already exist",
      noMatchingData: "No matching data",
      valid: "Can be copied"
    },
    label: { copy: "Copy to other IEDs" }
  },
  gsecontrol: {
    wizard: { location: "Select GOOSE Control Block Location" }
  },
  samvpledvaluecontrol: {
    wizard: { location: "Select Sampled Value Control Block Location" }
  },
  publisher: {
    selectbutton: "Select other {{type}}",
    nodataset: "No DataSet referenced",
    smv: {
      commsetting: "Communication Settings (SMV)",
      noconnectedap: "No connection to SubNetwork",
      smvopts: "Optional Fields"
    }
  },
  exportCommunication: {
    noCommunicationSection: "No export as Communication section empty"
  },
  add: "Add",
  new: "New",
  remove: "Remove",
  edit: "Edit",
  move: "Move",
  create: "Create",
  save: "Save",
  saveAs: "Save as",
  open: "Open",
  reset: "Reset",
  cancel: "Cancel",
  close: "Close",
  filter: "Filter",
  filters: "Filters",
  undo: "Undo",
  redo: "Redo",
  duplicate: "Clone",
  connect: "Connect",
  disconnect: "Disconnect",
  next: "Next"
}, Ki = { en: uc, de: dc };
async function pc(e) {
  return Object.keys(Ki).includes(e) ? Ki[e] : {};
}
ma({ loader: pc, empty: (e) => e });
const Jn = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Jn);
ga(Jn);
function Yn(e, t, i) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("substation.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? u`<mwc-formfield label="${c("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : u``
  ];
}
function mc(e) {
  return (t, i) => {
    const n = f(t.find((o) => o.label === "name")), r = f(t.find((o) => o.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const s = _(e.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => lc(e.ownerDocument, s)] : [{ new: { parent: e, element: s } }];
  };
}
function hc(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: c("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: mc(e)
      },
      content: Yn("", "", t)
    }
  ];
}
function fc(e) {
  return [
    {
      title: c("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Mn(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: Yn(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function bc(e, t, i, n) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("terminal.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${c("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${c("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function gc(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: c("terminal.wizard.title.edit"),
      element: e,
      content: bc(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const bt = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function er(e, t, i, n, r, a) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${c("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${nt.unsigned}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${c("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${c("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${c("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${nt.decimal}"
    ></wizard-textfield>`
  ];
}
function yc(e) {
  return (t) => {
    const i = f(t.find((d) => d.label === "name")), n = f(t.find((d) => d.label === "desc")), r = f(t.find((d) => d.label === "nomFreq")), a = f(t.find((d) => d.label === "numPhases")), s = f(t.find((d) => d.label === "Voltage")), o = ci(t.find((d) => d.label === "Voltage")), l = _(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (s !== null) {
      const d = _(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: o
      });
      d.textContent = s, l.appendChild(d);
    }
    return [
      {
        new: {
          parent: e,
          element: l
        }
      }
    ];
  };
}
function vc(e) {
  return [
    {
      title: c("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: yc(e)
      },
      content: er(
        "",
        "",
        bt.nomFreq,
        bt.numPhases,
        bt.Voltage,
        bt.multiplier
      )
    }
  ];
}
function Sc(e, t, i, n) {
  if (e === null) {
    const a = _(n.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: i
    });
    return a.textContent = t, {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: n,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = $(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function Ac(e) {
  return (t) => {
    const i = t.find((h) => h.label === "name").value, n = f(t.find((h) => h.label === "desc")), r = f(t.find((h) => h.label === "nomFreq")), a = f(t.find((h) => h.label === "numPhases")), s = f(t.find((h) => h.label === "Voltage")), o = ci(t.find((h) => h.label === "Voltage"));
    let l, d;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      l = null;
    else {
      const h = $(e, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      l = { old: { element: e }, new: { element: h } };
    }
    s === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && o === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? d = null : d = Sc(
      e.querySelector("VoltageLevel > Voltage"),
      s,
      o,
      l?.new.element ?? e
    );
    const m = {
      actions: [],
      title: c("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return l && m.actions.push(l), d && m.actions.push(d), m.actions.push(
      ...ui(e, e.getAttribute("name"), i)
    ), m.actions.length ? [m] : [];
  };
}
function wc(e) {
  return [
    {
      title: c("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Ac(e)
      },
      content: er(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases"),
        e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null,
        e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null
      )
    }
  ];
}
const tr = "PTR";
function xc(e) {
  return (t) => {
    const i = f(t.find((s) => s.label === "name")), n = f(t.find((s) => s.label === "desc")), r = _(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: tr
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function ir(e, t, i, n) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${c("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function nr(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function Cc(e) {
  const t = nr(e);
  return [
    {
      title: c("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: c("add"),
        action: xc(e)
      },
      content: ir(
        "",
        null,
        tr,
        t
      )
    }
  ];
}
function Nc(e) {
  const t = nr(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: c("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: On(e)
      },
      content: ir(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function Ec(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${c("subnetwork.wizard.typeHelper")}"
      pattern="${nt.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${c("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${nt.decimal}"
    ></wizard-textfield>`
  ];
}
function Ic(e, t, i, n) {
  if (e === null) {
    const a = _(n.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return i && a.setAttribute("multiplier", i), t && (a.textContent = t), {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: n,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = $(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function kc(e) {
  return (t) => {
    const i = t.find((m) => m.label === "name").value, n = f(t.find((m) => m.label === "desc")), r = f(t.find((m) => m.label === "type")), a = f(t.find((m) => m.label === "BitRate")), s = ci(t.find((m) => m.label === "BitRate"));
    let o, l;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type"))
      o = null;
    else {
      const m = $(e, { name: i, desc: n, type: r });
      o = { old: { element: e }, new: { element: m } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && s === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? l = null : l = Ic(
      e.querySelector("SubNetwork > BitRate"),
      a,
      s,
      o?.new.element ?? e
    );
    const d = [];
    return o && d.push(o), l && d.push(l), d;
  };
}
function _c(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: kc(e)
      },
      content: Ec({ name: t, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const Dc = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function $c(e) {
  return Dc.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const Lc = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Tc(e) {
  return Lc.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function zc(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const n of e) {
    const r = n.old.element, a = n.old.parent, s = N(a);
    i[s] || (i[s] = a.cloneNode(!0));
    const o = i[s].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${$c(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${Tc(r)}`
    );
    o && i[s].removeChild(o);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, s = ye(a, "Inputs", n);
      s && s.parentElement && t.push({
        old: { parent: s.parentElement, element: s }
      });
    }
  }), t;
}
const Pc = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Vc(e, t, i, n, r, a, s, o, l) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("ied.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${l}
      pattern="${Pc}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ied.wizard.descHelper")}"
      pattern="${ve.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="manufacturer"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="engRight"
      .maybeValue=${s || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="owner"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Rc(e) {
  return [
    u` <section>
      <h1>${c("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return u` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${N(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Oc(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function Mc(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(ie).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function Fc(e) {
  return (t, i) => {
    i.dispatchEvent(pe());
    const n = Rn(e), r = n.filter(
      (l) => l.old.element.tagName === "ExtRef"
    ), a = zc(r), s = e.getAttribute("name") ?? "Unknown", o = {
      actions: [],
      title: c("ied.action.deleteied", { name: s })
    };
    return o.actions.push({
      old: { parent: e.parentElement, element: e }
    }), o.actions.push(...n), o.actions.push(...a), [o];
  };
}
function qc(e) {
  const t = Rn(e);
  return t.length > 0 ? [
    {
      title: c("ied.wizard.title.delete"),
      content: Rc(t),
      primary: {
        icon: "delete",
        label: c("remove"),
        action: Fc(e)
      }
    }
  ] : null;
}
function Hc(e) {
  function t(i) {
    return (n) => {
      const r = qc(i);
      r && n.dispatchEvent(Oe(() => r)), n.dispatchEvent(
        rt({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(pe());
    };
  }
  return [
    {
      title: c("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: c("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: c("save"),
        action: Mn(
          e,
          "ied.action.updateied"
        )
      },
      content: Vc(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        Oc(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        Mc(e)
      )
    }
  ];
}
const Bc = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Gc(e, t, i, n) {
  return [
    t ? u`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${c("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : u`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${c("ldevice.wizard.nameHelper")}"
          validationMessage="${c("textfield.required")}"
          dialogInitialFocus
          pattern="${Bc}"
        ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${c("ldevice.wizard.descHelper")}"
      pattern="${ve.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Wc(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function Uc(e) {
  return (t) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function jc(e) {
  return [
    {
      title: c("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Uc(e)
      },
      content: Gc(
        e.getAttribute("ldName"),
        !Wc(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Kc(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Zc(e) {
  return (t) => {
    const i = f(t.find((d) => d.label === "dchg")), n = f(t.find((d) => d.label === "qchg")), r = f(t.find((d) => d.label === "dupd")), a = f(t.find((d) => d.label === "period")), s = f(t.find((d) => d.label === "gi"));
    if (i === e.getAttribute("dchg") && n === e.getAttribute("qchg") && r === e.getAttribute("dupd") && a === e.getAttribute("period") && s === e.getAttribute("gi"))
      return [];
    const o = $(e, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: s
    });
    return [{ old: { element: e }, new: { element: o } }];
  };
}
function Xc(e) {
  const [t, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Zc(e)
      },
      content: Kc({ dchg: t, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
const Qc = [
  "ST",
  "MX",
  "SP",
  "SV",
  "CF",
  "DC",
  "SG",
  "SE",
  "SR",
  "OR",
  "BL",
  "EX",
  "CO"
], Jc = [
  "BOOLEAN",
  "INT8",
  "INT16",
  "INT24",
  "INT32",
  "INT64",
  "INT128",
  "INT8U",
  "INT16U",
  "INT24U",
  "INT32U",
  "FLOAT32",
  "FLOAT64",
  "Enum",
  "Dbpos",
  "Tcmd",
  "Quality",
  "Timestamp",
  "VisString32",
  "VisString64",
  "VisString65",
  "VisString129",
  "VisString255",
  "Octet64",
  "Unicode255",
  "Struct",
  "EntryTime",
  "Check",
  "ObjRef",
  "Currency",
  "PhyComAddr",
  "TrgOps",
  "OptFlds",
  "SvOptFlds",
  "LogOptFlds",
  "EntryID",
  "Octet6",
  "Octet16"
], Yc = ["Spec", "Conf", "RO", "Set"], el = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], rr = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function tl(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const n = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (o) => u`<mwc-list-item
        value="${o.textContent?.trim() ?? ""}"
        ?selected=${o.textContent?.trim() === i}
        >${o.textContent?.trim()}</mwc-list-item
      >`
  ), s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  ti(u`${a}`, s), s.requestUpdate();
}
function il(e, t, i) {
  const n = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((l) => {
    const d = l;
    d.disabled = !l.classList.contains(n), d.noninteractive = !l.classList.contains(n), d.style.display = l.classList.contains(n) ? "" : "none", d.disabled || a.push(d);
  }), r.value = a.length ? a[0].value : "";
  const s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? s.style.display = "" : s.style.display = "none";
  const o = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? o.style.display = "none" : o.style.display = "", s.requestUpdate(), o.requestUpdate(), r.requestUpdate();
}
function nl(e, t, i, n, r, a, s, o, l, d) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("scl.name")}"
      required
      pattern="${ve.abstractDataAttributeName}"
      maxLength="${mi.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    u`<wizard-textfield
      label="desc"
      helper="${c("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${ve.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${c("scl.bType")}"
      required
      @selected=${(m) => il(m)}
      >${Jc.map(
      (m) => u`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${c("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => tl(m, d, l)}
      >${n.map(
      (m) => u`<mwc-list-item
            class="${m.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${m.id}
            >${m.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${c("scl.sAddr")}"
      nullable
      pattern="${ve.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="valKind"
      .maybeValue=${s}
      helper="${c("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Yc.map(
      (m) => u`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="valImport"
      .maybeValue=${o}
      helper="${c("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    u`<wizard-select
      label="Val"
      .maybeValue=${l}
      helper="${c("scl.Val")}"
      nullable
      >${Array.from(
      d.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (m) => u`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="Val"
      .maybeValue=${l}
      helper="${c("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function rl(e, t, i, n) {
  return [
    u`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${c("scl.fc")}"
      required
      fixedMenuPosition
      >${Qc.map(
      (r) => u`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${c("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${c("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${c("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function al(e) {
  return (t) => {
    const i = f(t.find((x) => x.label === "name")), n = f(t.find((x) => x.label === "desc")), r = f(t.find((x) => x.label === "bType")), a = r === "Enum" || r === "Struct" ? f(t.find((x) => x.label === "type")) : null, s = f(t.find((x) => x.label === "sAddr")), o = f(t.find((x) => x.label === "valKind")), l = f(t.find((x) => x.label === "valImport")), d = t.find(
      (x) => x.label === "Val" && x.style.display !== "none"
    ), m = d ? f(d) : null, h = f(t.find((x) => x.label === "fc")) ?? "", b = f(t.find((x) => x.label === "dchg")), g = f(t.find((x) => x.label === "qchg")), w = f(t.find((x) => x.label === "dupd")), C = [], I = _(e.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: l,
      fc: h,
      dchg: b,
      qchg: g,
      dupd: w
    });
    if (m !== null) {
      const x = _(e.ownerDocument, "Val", {});
      x.textContent = m, I.appendChild(x);
    }
    return C.push({
      new: {
        parent: e,
        element: I
      }
    }), C;
  };
}
function sl(e) {
  const t = e.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, l = null, d = null, m = "", h = null, b = null, g = null, w = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ie).filter((I) => I.getAttribute("id")), C = e.closest("DataTypeTemplates");
  return [
    {
      title: c("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: c("save"),
        action: al(e)
      },
      content: [
        ...nl(
          i,
          n,
          r,
          w,
          a,
          s,
          l,
          d,
          o,
          C
        ),
        ...rl(m, h, b, g)
      ]
    }
  ];
}
const ee = (e, t) => e === null ? "" : t;
function ar() {
  return {
    BOOLEAN: e(),
    Enum: t(),
    FLOAT32: i("FLOAT32", -4294967296, 2 ** 32 - 1),
    FLOAT64: i("FLOAT64", -18446744073709552e3, 2 ** 64 - 1),
    INT8: n("INT8", -256, 2 ** 8 - 1),
    INT16: n("INT16", -65536, 2 ** 16 - 1),
    INT24: n("INT24", -16777216, 2 ** 24 - 1),
    INT32: n("INT32", -4294967296, 2 ** 32 - 1),
    INT64: n("INT64", -18446744073709552e3, 2 ** 64 - 1),
    INT128: n("INT128", -3402823669209385e23, 2 ** 128 - 1),
    INT8U: n("INT8U", 0, 2 ** 8 - 1),
    INT16U: n("INT16U", 0, 2 ** 16 - 1),
    INT24U: n("INT24U", 0, 2 ** 24 - 1),
    INT32U: n("INT32U", 0, 2 ** 32 - 1),
    Timestamp: r(),
    VisString32: a("VisString32", 32),
    VisString64: a("VisString64", 64),
    VisString65: a("VisString65", 65),
    VisString129: a("VisString129", 129),
    VisString255: a("VisString255", 255),
    ObjRef: a("VisString129", 129),
    Currency: a("Currency", 3),
    Octet64: a("Octet64", 64 * 2),
    Octet6: a("Octet6", 6 * 2),
    Octet16: a("Octet16", 16 * 2)
  };
  function e() {
    return {
      render: (l, d, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => u`<wizard-select
            id="Val${ee(h, `${b + 1}`)}"
            label="Val${ee(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${s(d)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (l, d) => f(
        l.find((m) => m.id === `Val${d || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (l, d, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => u`<wizard-select
            id="Val${ee(h, `${b + 1}`)}"
            label="Val${ee(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${s(d)}
            fixedMenuPosition
          >
            ${o(l).map((g) => u`<mwc-list-item value="${g}"
                >${g}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (l, d) => f(
        l.find((m) => m.id === `Val${d || ""}`)
      )
    };
  }
  function i(l, d, m) {
    return {
      render: (h, b, g = null) => (g ? [...Array(g)] : [g]).map((w, C) => u`<wizard-textfield
            id="Val${ee(w, `${C + 1}`)}"
            label="Val${ee(w, ` for sGroup ${C + 1}`)}"
            .maybeValue=${s(b)}
            helper="${c("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${d}
            max=${m}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (h, b) => f(
        h.find((g) => g.id === `Val${b || ""}`)
      )
    };
  }
  function n(l, d, m) {
    return {
      render: (h, b, g = null) => (g ? [...Array(g)] : [g]).map((w, C) => u`<wizard-textfield
            id="Val${ee(w, `${C + 1}`)}"
            label="Val${ee(w, ` for sGroup ${C + 1}`)}"
            .maybeValue=${s(b)}
            helper="${c("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${d}
            max=${m}
          >
          </wizard-textfield>`),
      value: (h, b) => f(
        h.find((g) => g.id === `Val${b || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (l, d, m = null) => {
        const h = s(d);
        return (m ? [...Array(m)] : [m]).reduce(
          (b, g, w) => b.concat([
            u`<wizard-textfield
                id="ValDate${ee(g, `${w + 1}`)}"
                label="Val (Date)${ee(g, ` for sGroup ${w + 1}`)}"
                .maybeValue=${ol(h)}
                type="date"
              >
              </wizard-textfield>`,
            u`<wizard-textfield
                id="ValTime${ee(g, `${w + 1}`)}"
                label="Val (Time)${ee(g, ` for sGroup ${w + 1}`)}"
                .maybeValue=${cl(h)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (l, d) => {
        const m = [`ValDate${d || ""}`, `ValTime${d || ""}`].map(
          (g) => f(l.find((w) => w.id === g))
        ), h = m[0] ? m[0] : "0000-00-00", b = m[1] ? m[1] : "00:00:00";
        return h + "T" + b + ".000";
      }
    };
  }
  function a(l, d) {
    return {
      render: (m, h, b = null) => (b ? [...Array(b)] : [b]).map((g, w) => u`<wizard-textfield
            id="Val${ee(g, ` ${w + 1}`)}"
            label="Val${ee(g, ` for sGroup ${w + 1}`)}"
            .maybeValue=${s(h)}
            helper="${c("dai.wizard.valueHelper", { type: l })}"
            maxLength=${d}
            type="text"
          >
          </wizard-textfield>`),
      value: (m, h) => f(
        m.find((b) => b.id === `Val${h || ""}`)
      )
    };
  }
  function s(l) {
    return (l?.querySelector("Val") ? l?.querySelector("Val") : l)?.textContent?.trim() ?? "";
  }
  function o(l) {
    const d = l.getAttribute("type"), m = [];
    return Array.from(
      l.ownerDocument.querySelectorAll(
        `EnumType[id="${d}"] > EnumVal`
      )
    ).filter(
      (h) => h.textContent && h.textContent !== ""
    ).sort(
      (h, b) => parseInt(h.getAttribute("ord") ?? "0") - parseInt(b.getAttribute("ord") ?? "0")
    ).forEach((h) => {
      m.push(h.textContent ?? "");
    }), m;
  }
}
function ol(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function cl(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const Ye = "http://www.iec.ch/61850/2003/SCL";
function ll(e, t) {
  return (i) => {
    const n = e.getAttribute("bType"), r = ar()[n].value(i), a = t.parentElement?.getAttribute("name") ?? "", s = {
      actions: [],
      title: c("dai.action.updatedai", { daiName: a })
    }, o = t.cloneNode(!1);
    return o.textContent = r, s.actions.push({
      old: { element: t },
      new: { element: o }
    }), [s];
  };
}
function dl(e, t, i = null) {
  const n = e.getAttribute("bType"), r = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    u` ${ar()[n].render(
      e,
      t,
      i
    )}
    ${r ? u`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : De}`
  ];
}
function ul(e, t) {
  const i = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: c("dai.wizard.title.edit", {
        daiName: i
      }),
      element: t,
      primary: {
        icon: "edit",
        label: c("save"),
        action: ll(e, t)
      },
      content: dl(e, t)
    }
  ];
}
function pl(e) {
  return (t) => {
    t.dispatchEvent(Oe(() => Wn(e)));
  };
}
function ml(e) {
  return (t, i) => {
    const n = t.find((d) => d.label === "name").value, r = f(t.find((d) => d.label === "desc")), a = e.getAttribute("name"), s = [];
    if (!(n === a && r === e.getAttribute("desc"))) {
      const d = $(e, { name: n, desc: r });
      s.push({
        old: { element: e },
        new: { element: d }
      });
    }
    const o = n !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((d) => {
      const m = $(d, { datSet: n });
      return { old: { element: d }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((d) => ye(e, "FCDA", d.value)).filter((d) => d).map((d) => ({
        old: {
          parent: e,
          element: d,
          reference: d.nextSibling
        }
      })),
      ...s,
      ...o
    ];
  };
}
function sr(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: ml(e)
      },
      menuActions: [
        {
          icon: "add",
          label: c("dataset.fcda.add"),
          action: pl(e)
        }
      ],
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${c("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${c("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        u`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (n) => u`<mwc-check-list-item selected value="${N(n)}"
                >${N(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const T = {
  IP: "([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])",
  OSI: "[0-9A-F]+",
  OSId: "[0-9]+",
  OSIAPi: "[0-9,]+",
  MAC: "([0-9A-F]{2}-){5}[0-9A-F]{2}",
  APPID: "[0-9A-F]{4}",
  VLANp: "[0-7]",
  VLANid: "[0-9A-F]{3}",
  port: "0|([1-9][0-9]{0,3})|([1-5][0-9]{4,4})|(6[0-4][0-9]{3,3})|(65[0-4][0-9]{2,2})|(655[0-2][0-9])|(6553[0-5])",
  IPv6: "([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}",
  IPv6sub: "/[1-9]|/[1-9][0-9]|/1[0-1][0-9]|/12[0-7]"
}, hl = {
  IP: T.IP,
  "IP-SUBNET": T.IP,
  "IP-GATEWAY": T.IP,
  "OSI-TSEL": T.OSI,
  "OSI-SSEL": T.OSI,
  "OSI-PSEL": T.OSI,
  "OSI-AP-Title": T.OSIAPi,
  "OSI-AP-Invoke": T.OSId,
  "OSI-AE-Qualifier": T.OSId,
  "OSI-AE-Invoke": T.OSId,
  "MAC-Address": T.MAC,
  APPID: T.APPID,
  "VLAN-ID": T.VLANid,
  "VLAN-PRIORITY": T.VLANp,
  "OSI-NSAP": T.OSI,
  "SNTP-Port": T.port,
  "MMS-Port": T.port,
  DNSName: "[^ ]*",
  "UDP-Port": T.port,
  "TCP-Port": T.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: T.IPv6,
  "IPv6-SUBNET": T.IPv6sub,
  "IPv6-GATEWAY": T.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": T.IPv6,
  "IP-IGMPv3Sr": T.IP,
  "IP-ClassOfTraffic": T.OSI
}, fl = {
  IP: !1,
  "IP-SUBNET": !1,
  "IP-GATEWAY": !0,
  "OSI-TSEL": !0,
  "OSI-SSEL": !0,
  "OSI-PSEL": !0,
  "OSI-AP-Title": !0,
  "OSI-AP-Invoke": !0,
  "OSI-AE-Qualifier": !0,
  "OSI-AE-Invoke": !0,
  "OSI-NSAP": !0,
  "MAC-Address": !1,
  APPID: !1,
  "VLAN-ID": !0,
  "VLAN-PRIORITY": !0,
  "SNTP-Port": !0,
  "MMS-Port": !0,
  DNSName: !0,
  "UDP-Port": !0,
  "TCP-Port": !0,
  "C37-118-IP-Port": !0,
  IPv6: !0,
  "IPv6-SUBNET": !0,
  "IPv6-GATEWAY": !0,
  IPv6FlowLabel: !0,
  IPv6ClassOfTraffic: !0,
  "IPv6-IGMPv3Src": !0,
  "IP-IGMPv3Sr": !0,
  "IP-ClassOfTraffic": !0
};
function or(e) {
  return [
    u`<mwc-formfield label="${c("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    u`${Object.entries(e.attributes).map(
      ([t, i]) => u`<wizard-textfield
          label="${t}"
          ?nullable=${fl[t]}
          .maybeValue=${i}
          pattern="${be(hl[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function bl(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function gl(e, t, i) {
  const n = _(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const s = r, o = _(t.ownerDocument, "P", { type: s });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), o.textContent = a, n.appendChild(o);
  }), n;
}
function cr(e, t, i) {
  const n = [], r = gl(t, e, i), a = e.querySelector("Address");
  return a !== null && !bl(a, r) ? (n.push({
    old: {
      parent: e,
      element: a,
      reference: a.nextSibling
    }
  }), n.push({
    new: {
      parent: e,
      element: r,
      reference: a.nextSibling
    }
  })) : a === null && n.push({
    new: {
      parent: e,
      element: r
    }
  }), n;
}
function Zi(e, t, i, n) {
  if (t === null) {
    const a = _(n.ownerDocument, e, {
      unit: "s",
      multiplier: "m"
    });
    return a.textContent = i, {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (i === null)
    return {
      old: {
        parent: n,
        element: t,
        reference: t.nextSibling
      }
    };
  const r = t.cloneNode(!1);
  return r.textContent = i, {
    old: { element: t },
    new: { element: r }
  };
}
function yl(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: c("gse.action.addaddress", {
        identity: N(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = f(
      t.find((d) => d.label === "MAC-Address")
    ), a.APPID = f(t.find((d) => d.label === "APPID")), a["VLAN-ID"] = f(
      t.find((d) => d.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((d) => d.label === "VLAN-PRIORITY")
    ), cr(e, a, r).forEach((d) => {
      n.actions.push(d);
    });
    const o = f(t.find((d) => d.label === "MinTime")), l = f(t.find((d) => d.label === "MaxTime"));
    return o !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Zi(
        "MinTime",
        e.querySelector("MinTime"),
        o,
        e
      )
    ), l !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Zi(
        "MaxTime",
        e.querySelector("MaxTime"),
        l,
        e
      )
    ), [n];
  };
}
function vl(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: yl(e)
      },
      content: [
        ...or({ hasInstType: n, attributes: r }),
        u`<wizard-textfield
          label="MinTime"
          .maybeValue=${t}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        u`<wizard-textfield
          label="MaxTime"
          .maybeValue=${i}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`
      ]
    }
  ];
}
function lr(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function Sl(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      pattern="${ve.asciName}"
      maxLength="${mi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${c("scl.id")}"
      required
      validationMessage="${c("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${c("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${c("scl.securityEnable")}"
      >${rr.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Al(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = lr(e), n = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (o) => o.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && n && r.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i,
      reference: i.nextSibling
    }
  });
  const a = e.getAttribute("name"), s = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: c("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function wl(e) {
  return (t) => {
    const i = Al(e);
    i && t.dispatchEvent(rt(i)), t.dispatchEvent(pe());
  };
}
function xl(e) {
  return (t) => {
    t.dispatchEvent(Oe(() => sr(e)));
  };
}
function Cl(e) {
  return (t) => {
    t.dispatchEvent(Oe(() => vl(e)));
  };
}
function Nl(e) {
  return (t) => {
    const i = t.find((d) => d.label === "name").value, n = f(t.find((d) => d.label === "desc")), r = f(t.find((d) => d.label === "type")), a = f(t.find((d) => d.label === "appID")), s = f(t.find((d) => d.label === "fixedOffs")), o = f(
      t.find((d) => d.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type") && a === e.getAttribute("appID") && s === e.getAttribute("fixedOffs") && o === e.getAttribute("securityEnabled"))
      return [];
    const l = $(e, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: s,
      securityEnabled: o
    });
    return [{ old: { element: e }, new: { element: l } }];
  };
}
function El(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), s = e.getAttribute("securityEnabled"), o = lr(e), l = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), d = [];
  return d.push({
    icon: "delete",
    label: c("remove"),
    action: wl(e)
  }), l && d.push({
    icon: "edit",
    label: c("scl.DataSet"),
    action: xl(l)
  }), o && d.push({
    icon: "edit",
    label: c("scl.Communication"),
    action: Cl(o)
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Nl(e)
      },
      menuActions: d,
      content: [
        ...Sl({
          name: t,
          desc: i,
          type: n,
          appID: r,
          fixedOffs: a,
          securityEnabled: s
        })
      ]
    }
  ];
}
function Te(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Il(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function kl(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = G(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Il(e)
      },
      content: [
        ...Te({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function _l(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(
      e.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Dl(e) {
  const t = "", r = Array.from(e.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: _l(e)
      },
      content: [
        ...Te({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function $l(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Ll(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = G(
    e.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: $l(e)
      },
      content: [
        ...Te({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Tl(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function zl(e) {
  const t = "", r = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Tl(e)
      },
      content: [
        ...Te({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Pl(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Vl(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = G(
    e.parentElement,
    "EqFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Pl(e)
      },
      content: [
        ...Te({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Rl(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Ol(e) {
  const t = "", r = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Rl(e)
      },
      content: [
        ...Te({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ml(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Fl(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = G(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Ml(e)
      },
      content: [
        ...Te({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function ql(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Hl(e) {
  const t = "", r = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: ql(e)
      },
      content: [
        ...Te({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Bl(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: c("smv.action.addaddress", {
        identity: N(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = f(
      t.find((o) => o.label === "MAC-Address")
    ), a.APPID = f(t.find((o) => o.label === "APPID")), a["VLAN-ID"] = f(
      t.find((o) => o.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((o) => o.label === "VLAN-PRIORITY")
    );
    const s = cr(e, a, r);
    return s.length ? (s.forEach((o) => {
      n.actions.push(o);
    }), [n]) : [];
  };
}
function Gl(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = e.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "edit",
        action: Bl(e)
      },
      content: [...or({ hasInstType: t, attributes: i })]
    }
  ];
}
function Wl(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Ul(e) {
  return (t) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    }), !n.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const r = $(e, i);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function jl(e) {
  const [t, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Ul(e)
      },
      content: [
        ...Wl({
          refreshTime: t,
          sampleRate: i,
          dataSet: n,
          security: r,
          synchSourceId: a
        })
      ]
    }
  ];
}
function dr(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function Kl(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = dr(e), n = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (o) => o.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e
    }
  }), t && n && r.push({
    old: {
      parent: e.parentElement,
      element: t
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i
    }
  });
  const a = e.getAttribute("name"), s = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: c("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function Zl(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      pattern="${ve.asciName}"
      maxLength="${mi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${ve.normalizedString}"
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? u`` : u`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${c("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    u`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${c("scl.id")}"
      required
      validationMessage="${c("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${c("scl.smpMod")}"
      >${el.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${c("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${c("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${c("scl.securityEnable")}"
      >${rr.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Xl(e) {
  return (t) => {
    const i = Kl(e);
    i && t.dispatchEvent(rt(i)), t.dispatchEvent(pe());
  };
}
function Ql(e) {
  return (t) => {
    t.dispatchEvent(Oe(() => sr(e)));
  };
}
function Jl(e) {
  return (t) => {
    t.dispatchEvent(Oe(() => jl(e)));
  };
}
function Yl(e) {
  return (t) => {
    t.dispatchEvent(Oe(() => Gl(e)));
  };
}
function ed(e) {
  return (t) => {
    const i = {}, n = [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ];
    n.forEach((s) => {
      if (s === "multicast" && !t.find((l) => l.label === s)) {
        i.multicast = "true";
        return;
      }
      i[s] = f(t.find((l) => l.label === s));
    });
    let r = null;
    if (n.some((s) => i[s] !== e.getAttribute(s))) {
      const s = $(e, i);
      r = {
        old: { element: e },
        new: { element: s }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function td(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("multicast"), r = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), s = e.getAttribute("smpRate"), o = e.getAttribute("nofASDU"), l = e.getAttribute("securityEnabled"), d = dr(e), m = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: c("remove"),
    action: Xl(e)
  }), h && b.push({
    icon: "edit",
    label: c("scl.DataSet"),
    action: Ql(h)
  }), m && b.push({
    icon: "edit",
    label: c("scl.SmvOpts"),
    action: Jl(m)
  }), d && b.push({
    icon: "edit",
    label: c("scl.Communication"),
    action: Yl(d)
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: ed(e)
      },
      menuActions: b,
      content: [
        ...Zl({
          name: t,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: s,
          nofASDU: o,
          securityEnabled: l
        })
      ]
    }
  ];
}
function ur(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${c("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (t) => u`<mwc-list-item value="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      nullable
      helper="${c("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function id(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function nd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("phase"), r = e.getAttribute("virtual"), a = G(
    e.parentElement,
    "SubEquipment"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: id(e)
      },
      content: [
        ...ur({
          name: t,
          desc: i,
          phase: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function rd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function ad(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (s) => s.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: rd(e)
      },
      content: [
        ...ur({
          name: t,
          desc: null,
          phase: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function sd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = G(
    e.parentElement,
    "GeneralEquipment"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: od(e)
      },
      content: [
        ...pr({
          name: t,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function od(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function pr(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function cd(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: ld(e)
      },
      content: [
        ...pr({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function ld(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function dd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(
        t.find((s) => s.label === a)
      );
    });
    const r = _(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function ud(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: dd(e)
      },
      content: [
        ...mr({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function pd(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(
        t.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function mr(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${c("scl.type")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function md(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = G(
    e.parentElement,
    "TransformerWinding"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: pd(e)
      },
      content: [
        ...mr({
          name: t,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function hd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function fd(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function hr(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${c("scl.type")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function bd(e) {
  const t = "", n = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (s) => s.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: hd(e)
      },
      content: [
        ...hr({
          name: t,
          desc: null,
          type: n,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function gd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = G(
    e.parentElement,
    "TapChanger"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: fd(e)
      },
      content: [
        ...hr({
          name: t,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function fr(e, t, i, n, r) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("line.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${c("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${c("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${c("textfield.nonempty")}"
      pattern="${nt.unsigned}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${c("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${c("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function yd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function vd(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Sd(e) {
  return [
    {
      title: c("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: yd(e)
      },
      content: [...fr("", "", "", "", "")]
    }
  ];
}
function Ad(e) {
  return [
    {
      title: c("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: vd(e)
      },
      content: fr(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function wd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = _(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function xd(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function br(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${c("scl.type")}"
    ></wizard-textfield>`
  ];
}
function Cd(e) {
  const t = "", i = "", n = "", r = G(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: wd(e)
      },
      content: [
        ...br({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Nd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = G(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: xd(e)
      },
      content: [
        ...br({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ed(e, t, i, n, r) {
  return [
    u`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${c("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${c("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${c("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${c("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Id(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function kd(e) {
  return [
    {
      title: c("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Id(e)
      },
      content: Ed(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function _d(e, t, i, n) {
  return [
    u`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${c("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${c("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${c("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Dd(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function $d(e) {
  return [
    {
      title: c("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Dd(e)
      },
      content: _d(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function p() {
}
const Ld = {
  AccessControl: {
    edit: p,
    create: p
  },
  AccessPoint: {
    edit: p,
    create: p
  },
  Address: {
    edit: p,
    create: p
  },
  Association: {
    edit: p,
    create: p
  },
  Authentication: {
    edit: p,
    create: p
  },
  BDA: {
    edit: p,
    create: p
  },
  BitRate: {
    edit: p,
    create: p
  },
  Bay: {
    edit: ao,
    create: ro
  },
  ClientLN: {
    edit: p,
    create: p
  },
  ClientServices: {
    edit: p,
    create: p
  },
  CommProt: {
    edit: p,
    create: p
  },
  Communication: {
    edit: p,
    create: p
  },
  ConductingEquipment: {
    edit: bo,
    create: fo
  },
  ConfDataSet: {
    edit: p,
    create: p
  },
  ConfLdName: {
    edit: p,
    create: p
  },
  ConfLNs: {
    edit: p,
    create: p
  },
  ConfLogControl: {
    edit: p,
    create: p
  },
  ConfReportControl: {
    edit: p,
    create: p
  },
  ConfSG: {
    edit: p,
    create: p
  },
  ConfSigRef: {
    edit: p,
    create: p
  },
  ConnectedAP: {
    edit: p,
    create: p
  },
  ConnectivityNode: {
    edit: yo,
    create: p
  },
  DA: {
    edit: sl,
    create: p
  },
  DAI: {
    edit: ul,
    create: p
  },
  DAType: {
    edit: p,
    create: p
  },
  DO: {
    edit: p,
    create: p
  },
  DOI: {
    edit: p,
    create: p
  },
  DOType: {
    edit: p,
    create: p
  },
  DataObjectDirectory: {
    edit: p,
    create: p
  },
  DataSet: {
    edit: p,
    create: p
  },
  DataSetDirectory: {
    edit: p,
    create: p
  },
  DataTypeTemplates: {
    edit: p,
    create: p
  },
  DynAssociation: {
    edit: p,
    create: p
  },
  DynDataSet: {
    edit: p,
    create: p
  },
  EnumType: {
    edit: p,
    create: p
  },
  EnumVal: {
    edit: p,
    create: p
  },
  EqFunction: {
    edit: Vl,
    create: Ol
  },
  EqSubFunction: {
    edit: Ll,
    create: zl
  },
  ExtRef: {
    edit: p,
    create: p
  },
  FCDA: {
    edit: p,
    create: Wn
  },
  FileHandling: {
    edit: p,
    create: p
  },
  Function: {
    edit: kl,
    create: Dl
  },
  GeneralEquipment: {
    edit: sd,
    create: cd
  },
  GetCBValues: {
    edit: p,
    create: p
  },
  GetDataObjectDefinition: {
    edit: p,
    create: p
  },
  GetDataSetValue: {
    edit: p,
    create: p
  },
  GetDirectory: {
    edit: p,
    create: p
  },
  GOOSE: {
    edit: p,
    create: p
  },
  GOOSESecurity: {
    edit: p,
    create: p
  },
  GSE: {
    edit: p,
    create: p
  },
  GSEDir: {
    edit: p,
    create: p
  },
  GSEControl: {
    edit: El,
    create: p
  },
  GSESettings: {
    edit: p,
    create: p
  },
  GSSE: {
    edit: p,
    create: p
  },
  Header: {
    edit: p,
    create: p
  },
  History: {
    edit: p,
    create: p
  },
  Hitem: {
    edit: p,
    create: p
  },
  IED: {
    edit: Hc,
    create: p
  },
  IEDName: {
    edit: p,
    create: p
  },
  Inputs: {
    edit: p,
    create: p
  },
  IssuerName: {
    edit: p,
    create: p
  },
  KDC: {
    edit: p,
    create: p
  },
  LDevice: {
    edit: jc,
    create: p
  },
  LN: {
    edit: kd,
    create: p
  },
  LN0: {
    edit: $d,
    create: p
  },
  LNode: {
    edit: Qo,
    create: Ko
  },
  LNodeType: {
    edit: p,
    create: p
  },
  Line: {
    edit: Ad,
    create: Sd
  },
  Log: {
    edit: p,
    create: p
  },
  LogControl: {
    edit: p,
    create: p
  },
  LogSettings: {
    edit: p,
    create: p
  },
  MaxTime: {
    edit: p,
    create: p
  },
  McSecurity: {
    edit: p,
    create: p
  },
  MinTime: {
    edit: p,
    create: p
  },
  NeutralPoint: {
    edit: p,
    create: p
  },
  OptFields: {
    edit: ec,
    create: p
  },
  P: {
    edit: p,
    create: p
  },
  PhysConn: {
    edit: p,
    create: p
  },
  PowerTransformer: {
    edit: Nc,
    create: Cc
  },
  Private: {
    edit: p,
    create: p
  },
  Process: {
    edit: Nd,
    create: Cd
  },
  ProtNs: {
    edit: p,
    create: p
  },
  Protocol: {
    edit: p,
    create: p
  },
  ReadWrite: {
    edit: p,
    create: p
  },
  RedProt: {
    edit: p,
    create: p
  },
  ReportControl: {
    edit: p,
    create: p
  },
  ReportSettings: {
    edit: p,
    create: p
  },
  RptEnabled: {
    edit: p,
    create: p
  },
  SamplesPerSec: {
    edit: p,
    create: p
  },
  SampledValueControl: {
    edit: td,
    create: p
  },
  SecPerSamples: {
    edit: p,
    create: p
  },
  SCL: {
    edit: p,
    create: p
  },
  SDI: {
    edit: p,
    create: p
  },
  SDO: {
    edit: p,
    create: p
  },
  Server: {
    edit: p,
    create: p
  },
  ServerAt: {
    edit: p,
    create: p
  },
  Services: {
    edit: p,
    create: p
  },
  SetDataSetValue: {
    edit: p,
    create: p
  },
  SettingControl: {
    edit: p,
    create: p
  },
  SettingGroups: {
    edit: p,
    create: p
  },
  SGEdit: {
    edit: p,
    create: p
  },
  SmpRate: {
    edit: p,
    create: p
  },
  SMV: {
    edit: p,
    create: p
  },
  SmvOpts: {
    edit: p,
    create: p
  },
  SMVsc: {
    edit: p,
    create: p
  },
  SMVSecurity: {
    edit: p,
    create: p
  },
  SMVSettings: {
    edit: p,
    create: p
  },
  SubEquipment: {
    edit: nd,
    create: ad
  },
  SubFunction: {
    edit: Fl,
    create: Hl
  },
  SubNetwork: {
    edit: _c,
    create: p
  },
  Subject: {
    edit: p,
    create: p
  },
  Substation: {
    edit: fc,
    create: hc
  },
  SupSubscription: {
    edit: p,
    create: p
  },
  TapChanger: {
    edit: gd,
    create: bd
  },
  Terminal: {
    edit: gc,
    create: p
  },
  Text: {
    edit: p,
    create: p
  },
  TimerActivatedControl: {
    edit: p,
    create: p
  },
  TimeSyncProt: {
    edit: p,
    create: p
  },
  TransformerWinding: {
    edit: md,
    create: ud
  },
  TrgOps: {
    edit: Xc,
    create: p
  },
  Val: {
    edit: p,
    create: p
  },
  ValueHandling: {
    edit: p,
    create: p
  },
  Voltage: {
    edit: p,
    create: p
  },
  VoltageLevel: {
    edit: wc,
    create: vc
  }
};
var Td = Object.defineProperty, zd = (e, t, i, n) => {
  for (var r = void 0, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = s(t, i, r) || r);
  return r && Td(t, i, r), r;
};
function Pd(e, t, i) {
  return new CustomEvent("fcda-select", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: e, fcda: t, ...i?.detail }
  });
}
function Xi(e, t, i) {
  return new CustomEvent("subscription-changed", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: e, fcda: t, ...i?.detail }
  });
}
function Qi(e) {
  return `${e.getAttribute("doName")}${e.hasAttribute("doName") && e.hasAttribute("daName") ? "." : ""}${e.getAttribute("daName")}`;
}
function Ji(e) {
  return `${e.getAttribute("ldInst")} ${e.hasAttribute("ldInst") ? "/" : ""}${e.getAttribute("prefix") ? ` ${e.getAttribute("prefix")}` : ""} ${e.getAttribute("lnClass")} ${e.getAttribute(
    "lnInst"
  )}`;
}
function Vd(e) {
  const [t, i, n, r, a, s] = [
    "srcCBName",
    "srcLDInst",
    "srcLNClass",
    "iedName",
    "srcPrefix",
    "srcLNInst"
  ].map((o) => e.getAttribute(o));
  return !Array.from(
    e.closest("IED")?.getElementsByTagName("ExtRef") ?? []
  ).filter(ie).some(
    (o) => (o.getAttribute("srcCBName") ?? "") === (t ?? "") && (o.getAttribute("srcLDInst") ?? "") === (i ?? "") && (o.getAttribute("srcLNClass") ?? "") === (n ?? "") && (o.getAttribute("iedName") ?? "") === (r ?? "") && (o.getAttribute("srcPrefix") ?? "") === (a ?? "") && (o.getAttribute("srcLNInst") ?? "") === (s ?? "") && o !== e
  );
}
function Rd(e, t) {
  const i = e.querySelector(
    `LN[lnClass="${t}"]`
  );
  if (i === null) return !1;
  const n = t === "LGOS" ? "GoCBRef" : "SvCBRef", r = i.querySelector(`DOI[name="${n}"]>DAI[name="setSrcRef"]`)?.getAttribute("valKind"), a = i.querySelector(`DOI[name="${n}"]>DAI[name="setSrcRef"]`)?.getAttribute("valImport");
  if ((r === "RO" || r === "Conf") && a === "true")
    return !0;
  const s = i?.ownerDocument, o = i.getAttribute("lnType"), l = i.getAttribute("lnClass"), d = s.querySelector(
    `DataTypeTemplates > LNodeType[id="${o}"][lnClass="${l}"] > DO[name="${l === "LGOS" ? "GoCBRef" : "SvCBRef"}"]`
  );
  if (d) {
    const m = d.getAttribute("type"), h = s.querySelector(
      `DataTypeTemplates > DOType[id="${m}"] > DA[name="setSrcRef"]`
    );
    if (h)
      return (h.getAttribute("valKind") === "Conf" || h.getAttribute("valKind") === "RO") && h.getAttribute("valImport") === "true";
  }
  return !1;
}
function Od(e, t) {
  const i = e?.tagName === "GSEControl" ? "LGOS" : "LSVS";
  if (!e || !t || !Fd(e, t, i))
    return [];
  const n = qd(
    e,
    t,
    i
  );
  if (!n || !Rd(t, i))
    return [];
  const r = [];
  if (!n.parentElement) {
    const d = t.querySelector(
      `LN[lnClass="${i}"]`
    )?.parentElement;
    d && r.push({
      new: {
        parent: d,
        element: n,
        reference: d.querySelector(
          `LN[lnClass="${i}"]:last-child`
        )?.nextElementSibling
      }
    });
  }
  const a = i === "LGOS" ? "GoCBRef" : "SvCBRef";
  let s = n.querySelector(`DOI[name="${a}"]`);
  s || (s = t.ownerDocument.createElementNS(
    Ye,
    "DOI"
  ), s.setAttribute("name", a), r.push({
    new: {
      parent: n,
      element: s
    }
  }));
  let o = n.querySelector(
    `DOI[name="${a}"]>DAI[name="setSrcRef"]`
  );
  if (!o) {
    o = t.ownerDocument.createElementNS(
      Ye,
      "DAI"
    );
    const d = t.querySelector(
      `LN[lnClass="${i}"]>DOI[name="${a}"]>DAI[name="setSrcRef"]`
    );
    o.setAttribute("name", "setSrcRef"), d?.hasAttribute("valKind") && o.setAttribute("valKind", d.getAttribute("valKind")), d?.hasAttribute("valImport") && o.setAttribute(
      "valImport",
      d.getAttribute("valImport")
    ), r.push({
      new: {
        parent: s,
        element: o
      }
    });
  }
  let l = n.querySelector("Val");
  return l || (l = t.ownerDocument.createElementNS(
    Ye,
    "Val"
  )), l.textContent = fi(e), r.push({
    new: {
      parent: o,
      element: l
    }
  }), r;
}
function wt(e, t, i) {
  const n = t === "GSEControl" ? "LGOS" : "LSVS", r = n === "LGOS" ? "GoCBRef" : "SvCBRef", a = `LN[lnClass="${n}"]>DOI[name="${r}"]>DAI[name="setSrcRef"]>Val,LN0[lnClass="${n}"]>DOI[name="${r}"]>DAI[name="setSrcRef"]>Val`;
  return i ? e.querySelector(a) : Array.from(e.querySelectorAll(a));
}
function Md(e, t) {
  if (!e || !t) return [];
  const i = wt(
    t,
    e.tagName
  ).find((a) => a.textContent == fi(e));
  if (!i) return [];
  const n = i.closest("LN0, LN");
  return !n || !n.parentElement ? [] : n.querySelector(
    'Private[type="OpenSCD.create"]'
  ) ? [
    {
      old: {
        parent: n.parentElement,
        element: n
      }
    }
  ] : [
    {
      old: {
        parent: n,
        element: i.closest("DOI")
      }
    }
  ];
}
function Fd(e, t, i) {
  return !(li(t.ownerDocument) === "2003" || t.querySelector(`LN[lnClass="${i}"]`) === null || wt(t, e.tagName).find(
    (n) => n.textContent == fi(e)
  ) || Gd(t, e) <= Bd(t, e));
}
function qd(e, t, i) {
  let n = Array.from(
    t.querySelectorAll(`LN[lnClass="${i}"]`)
  ).find((a) => {
    const s = i === "LGOS" ? "GoCBRef" : "SvCBRef";
    return a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    ) === null || a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    )?.textContent === "";
  });
  if (!n) {
    n = t.ownerDocument.createElementNS(
      Ye,
      "LN"
    );
    const a = t.ownerDocument.createElementNS(
      Ye,
      "Private"
    );
    a.setAttribute("type", "OpenSCD.create"), n.appendChild(a), n.setAttribute("lnClass", i);
    const s = wt(
      t,
      e.tagName,
      !0
    )?.closest("LN");
    if (!s) return null;
    n.setAttribute(
      "lnType",
      s?.getAttribute("lnType") ?? ""
    );
  }
  if ((n.getAttribute("inst") ?? "") === "") {
    const a = Ks(
      Array.from(
        t.querySelectorAll(`LN[lnClass="${i}"]`)
      )
    );
    if (!a) return null;
    n.setAttribute("inst", a);
  }
  return n;
}
function Hd(e) {
  if (e === null) return null;
  const t = ["iedName", "serviceType", "srcPrefix", "srcCBName"], [i, n, r, a] = t.map(
    (g) => e.getAttribute(g) ?? ""
  ), s = n === "GOOSE" ? "LGOS" : "LSVS", o = s === "LGOS" ? 'DOI[name="GoCBRef"]' : 'DOI[name="SvCBRef"]', l = e.getAttribute("srcLDInst") ?? e.getAttribute("ldInst"), d = e.getAttribute("srcLNClass") ?? "LLN0", m = `${i}${r}${l}/${d}.${a}`, h = e.closest("IED")?.getAttribute("name"), b = Array.from(
    e.ownerDocument.querySelector(`IED[name="${h}"]`).querySelectorAll(
      `LN[lnClass="${s}"]>${o}>DAI[name="setSrcRef"]>Val`
    )
  ).find((g) => g.textContent === m);
  return b !== void 0 ? b.closest("LN") : null;
}
function Bd(e, t) {
  return wt(
    e,
    t.tagName
  ).filter((n) => n.textContent !== "").length;
}
function Gd(e, t) {
  const i = t.tagName === "GSEControl" ? "maxGo" : "maxSv", n = parseInt(
    e.querySelector("Services>SupSubscription")?.getAttribute(i) ?? "0",
    10
  );
  return isNaN(n) ? 0 : n;
}
function fi(e) {
  if (!e) return null;
  const t = e.closest("LN,LN0"), i = t?.getAttribute("prefix") ?? "", n = t?.getAttribute("lnClass"), r = t?.getAttribute("inst") ?? "", a = e.closest("LDevice")?.getAttribute("inst"), s = e.closest("IED")?.getAttribute("name"), o = e.getAttribute("name");
  return !o && !s && !a && !n ? null : `${s}${a}/${i}${n}${r}.${o}`;
}
const yt = {
  ReportControl: "Report",
  GSEControl: "GOOSE",
  SampledValueControl: "SMV"
};
function Wd(e, t, i) {
  const n = i.closest("IED")?.getAttribute("name") ?? null, [r, a, s, o, l, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((C) => i.getAttribute(C));
  if (li(i.ownerDocument) === "2003")
    return $(e, {
      iedName: n,
      serviceType: null,
      ldInst: r,
      lnClass: s,
      lnInst: o,
      prefix: a,
      doName: l,
      daName: d,
      srcLDInst: null,
      srcPrefix: null,
      srcLNClass: null,
      srcLNInst: null,
      srcCBName: null
    });
  if (!t || !yt[t.tagName])
    return $(e, {
      iedName: n,
      serviceType: "Poll",
      ldInst: r,
      lnClass: s,
      lnInst: o,
      prefix: a,
      doName: l,
      daName: d,
      srcLDInst: null,
      srcPrefix: null,
      srcLNClass: null,
      srcLNInst: null,
      srcCBName: null
    });
  const m = t.closest("LDevice")?.getAttribute("inst") ?? "", h = t.closest("LN0,LN")?.getAttribute("prefix") ?? "", b = t.closest("LN0,LN")?.getAttribute("lnClass") ?? "", g = t.closest("LN0,LN")?.getAttribute("inst"), w = t.getAttribute("name") ?? "";
  return $(e, {
    iedName: n,
    serviceType: yt[t.tagName],
    ldInst: r,
    lnClass: s,
    lnInst: o,
    prefix: a,
    doName: l,
    daName: d,
    srcLDInst: m,
    srcPrefix: h,
    srcLNClass: b,
    srcLNInst: g || null,
    srcCBName: w
  });
}
class Ud extends ue {
  constructor() {
    super(...arguments), this.subscribedElements = [], this.availableElements = [];
  }
  updated() {
    this.subscriberWrapper && this.subscriberWrapper.scrollTo(0, 0);
  }
  resetElements() {
    this.subscribedElements = [], this.availableElements = [];
  }
}
zd([
  q("div")
], Ud.prototype, "subscriberWrapper");
const gr = he`
  :host(.moving) section {
    opacity: 0.3;
  }

  section {
    background-color: var(--mdc-theme-surface);
    transition: all 200ms linear;
    outline-color: var(--mdc-theme-primary);
    outline-style: solid;
    outline-width: 0px;
    opacity: 1;
  }

  section:focus {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  section:focus-within {
    outline-width: 2px;
    transition: all 250ms linear;
  }

  h1,
  h2,
  h3 {
    color: var(--mdc-theme-on-surface);
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0px;
    line-height: 48px;
    padding-left: 0.3em;
    transition: background-color 150ms linear;
  }

  section:focus-within > h1,
  section:focus-within > h2,
  section:focus-within > h3 {
    color: var(--mdc-theme-surface);
    background-color: var(--mdc-theme-primary);
    transition: background-color 200ms linear;
  }

  h1 > nav,
  h2 > nav,
  h3 > nav,
  h1 > abbr > mwc-icon-button,
  h2 > abbr > mwc-icon-button,
  h3 > abbr > mwc-icon-button {
    float: right;
  }

  abbr[title] {
    border-bottom: none !important;
    cursor: inherit !important;
    text-decoration: none !important;
  }

  mwc-list-item[noninteractive] {
    font-weight: 500;
  }
`;
function yr(e, t, i) {
  const n = e.ownerDocument, r = n.querySelector(
    `LNodeType[id="${e.getAttribute("lnType")}"]`
  ), a = t.split(".");
  let s = r;
  for (const m of a) {
    const h = s?.querySelector(
      `DO[name="${m}"], SDO[name="${m}"]`
    );
    s = n.querySelector(`DOType[id="${h?.getAttribute("type")}"]`);
  }
  if (!s || !s.getAttribute("cdc")) return { cdc: null, bType: null };
  const o = s.getAttribute("cdc"), l = i.split(".");
  for (const m of l) {
    const h = s?.querySelector(
      `DA[name="${m}"], BDA[name="${m}"]`
    );
    s = l.indexOf(m) < l.length - 1 ? n.querySelector(`DAType[id="${h?.getAttribute("type")}"]`) : h;
  }
  return !s || !s.getAttribute("bType") ? { cdc: o, bType: null } : { bType: s.getAttribute("bType"), cdc: o };
}
function jd(e) {
  const [t, i] = ["doName", "daName"].map(
    (a) => e.getAttribute(a)
  );
  if (!t || !i) return { cdc: null, bType: null };
  const n = e.closest("IED"), r = Array.from(
    n?.querySelectorAll(
      `LDevice[inst="${e.getAttribute(
        "ldInst"
      )}"] > LN, LDevice[inst="${e.getAttribute("inst")}"] LN0`
    ) ?? []
  ).find((a) => (a.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (a.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (a.getAttribute("inst") ?? "") === (e.getAttribute("lnInst") ?? ""));
  return r ? yr(r, t, i) : { cdc: null, bType: null };
}
function Kd(e) {
  const [t, i, n] = ["pLN", "pDO", "pDA"].map(
    (a) => e.getAttribute(a)
  );
  if (!t || !i || !n) return { cdc: null, bType: null };
  const r = Array.from(
    e.closest("IED")?.querySelectorAll(`LN[lnClass="${t}"],LN0[lnClass="${t}"]`) ?? []
  );
  for (const a of r) {
    const s = yr(a, i, n);
    if (s.cdc !== null && s.bType !== null) return s;
  }
  return { cdc: null, bType: null };
}
function He(e, t, i) {
  return (e?.getAttribute(i) ?? "") === (t?.getAttribute(i) ?? "");
}
function Ke(e, t, i, n) {
  return (e?.getAttribute(t) ?? "") === (i?.getAttribute(n) ?? "");
}
function Zd(e, t, i) {
  if (li(i.ownerDocument) === "2003")
    return !0;
  const n = t?.closest("LDevice") ?? void 0, r = t?.closest("LN0") ?? void 0, a = !i.hasAttribute("srcLNClass"), o = r?.getAttribute("lnClass") === "LLN0" && a;
  return (i.getAttribute("serviceType") ?? "") === yt[e] && Ke(
    i,
    "srcLDInst",
    n,
    "inst"
  ) && Ke(
    i,
    "scrPrefix",
    r,
    "prefix"
  ) && (o || Ke(
    i,
    "srcLNClass",
    r,
    "lnClass"
  )) && Ke(i, "srcLNInst", r, "inst") && Ke(
    i,
    "srcCBName",
    t,
    "name"
  );
}
function Xd(e, t, i, n) {
  return n.getAttribute("iedName") === i?.closest("IED")?.getAttribute("name") && He(i, n, "ldInst") && He(i, n, "prefix") && He(i, n, "lnClass") && He(i, n, "lnInst") && He(i, n, "doName") && He(i, n, "daName") && Zd(e, t, n);
}
function Qd(e) {
  return e.hasAttribute("iedName") && e.hasAttribute("ldInst") && e.hasAttribute("prefix") && e.hasAttribute("lnClass") && e.hasAttribute("lnInst") && e.hasAttribute("doName") && e.hasAttribute("daName");
}
function vr(e, t, i) {
  return Array.from(e.querySelectorAll("ExtRef")).filter(
    (n) => i && n.hasAttribute("intAddr") || !i && !n.hasAttribute("intAddr")
  ).filter((n) => n.closest("IED") !== t?.closest("IED"));
}
function Sr(e, t, i, n, r) {
  return vr(
    e,
    i,
    r
  ).filter(
    (a) => Xd(t, n, i, a)
  );
}
var Jd = Object.defineProperty, Yd = Object.getOwnPropertyDescriptor, se = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Yd(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Jd(t, i, r), r;
};
let Q = class extends ue {
  constructor() {
    super(), this.editCount = -1, this.extRefCounters = /* @__PURE__ */ new Map(), this.iconControlLookup = {
      SampledValueControl: Xs,
      GSEControl: Zs
    }, this.resetSelection = this.resetSelection.bind(this), parent.addEventListener("open-doc", this.resetSelection);
    const e = this.closest(".container");
    e && (this.resetExtRefCount = this.resetExtRefCount.bind(this), e.addEventListener("subscription-changed", this.resetExtRefCount));
  }
  get hideSubscribed() {
    return localStorage.getItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideSubscribed`
    ) === "true";
  }
  set hideSubscribed(e) {
    const t = this.hideSubscribed;
    localStorage.setItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideSubscribed`,
      `${e}`
    ), this.requestUpdate("hideSubscribed", t);
  }
  get hideNotSubscribed() {
    return localStorage.getItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideNotSubscribed`
    ) === "true";
  }
  set hideNotSubscribed(e) {
    const t = this.hideNotSubscribed;
    localStorage.setItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideNotSubscribed`,
      `${e}`
    ), this.requestUpdate("hideNotSubscribed", t);
  }
  getControlElements() {
    return this.doc ? Array.from(this.doc.querySelectorAll(`LN0 > ${this.controlTag}`)) : [];
  }
  getFcdaElements(e) {
    const t = e.parentElement;
    return t ? Array.from(
      t.querySelectorAll(
        `:scope > DataSet[name=${e.getAttribute(
          "datSet"
        )}] > FCDA`
      )
    ) : [];
  }
  resetExtRefCount(e) {
    if (e.detail.control && e.detail.fcda) {
      const t = `${N(e.detail.control)} ${N(
        e.detail.fcda
      )}`;
      this.extRefCounters.delete(t);
    }
  }
  getExtRefCount(e, t) {
    const i = `${N(t)} ${N(
      e
    )}`;
    if (!this.extRefCounters.has(i)) {
      const n = Sr(
        this.doc.getRootNode(),
        this.controlTag,
        e,
        t,
        this.includeLaterBinding
      ).length;
      this.extRefCounters.set(i, n);
    }
    return this.extRefCounters.get(i);
  }
  openEditWizard(e) {
    const t = Ld[this.controlTag].edit(e);
    t && this.dispatchEvent(pe(t));
  }
  resetSelection() {
    this.selectedControlElement = void 0, this.selectedFcdaElement = void 0;
  }
  onFcdaSelect(e, t) {
    this.resetSelection(), this.selectedControlElement = e, this.selectedFcdaElement = t;
  }
  updated(e) {
    super.updated(e), (e.has("doc") || e.has("selectedControlElement") || e.has("selectedFcdaElement")) && this.dispatchEvent(
      Pd(
        this.selectedControlElement,
        this.selectedFcdaElement
      )
    ), e.has("doc") && (this.extRefCounters = /* @__PURE__ */ new Map());
  }
  renderFCDA(e, t) {
    const i = this.getExtRefCount(t, e);
    return u`<mwc-list-item
      graphic="large"
      ?hasMeta=${i !== 0}
      twoline
      class="${Ve({
      subitem: !0,
      "show-subscribed": i !== 0,
      "show-not-subscribed": i === 0
    })}"
      @click=${() => this.onFcdaSelect(e, t)}
      value="${N(e)}
             ${N(t)}"
    >
      <span>${Qi(t)}</span>
      <span slot="secondary">${Ji(t)}</span>
      <mwc-icon slot="graphic">subdirectory_arrow_right</mwc-icon>
      ${i !== 0 ? u`<span slot="meta">${i}</span>` : De}
    </mwc-list-item>`;
  }
  updateBaseFilterState() {
    this.hideSubscribed ? this.controlBlockList.classList.remove("show-subscribed") : this.controlBlockList.classList.add("show-subscribed"), this.hideNotSubscribed ? this.controlBlockList.classList.remove("show-not-subscribed") : this.controlBlockList.classList.add("show-not-subscribed");
  }
  firstUpdated() {
    this.actionsMenu.anchor = this.actionsMenuIcon, this.actionsMenu.addEventListener("closed", () => {
      this.hideSubscribed = !this.actionsMenu.index.has(0), this.hideNotSubscribed = !this.actionsMenu.index.has(1), this.updateBaseFilterState();
    }), this.updateBaseFilterState();
  }
  renderTitle() {
    const e = {
      "filter-off": this.hideSubscribed || this.hideNotSubscribed
    };
    return u`<h1>
      ${c(`subscription.${this.controlTag}.controlBlockList.title`)}
      <mwc-icon-button
        class="actions-menu-icon ${Ve(e)}"
        icon="filter_list"
        @click=${() => {
      this.actionsMenu.open ? this.actionsMenu.close() : this.actionsMenu.show();
    }}
      ></mwc-icon-button>
      <mwc-menu
        multi
        class="actions-menu"
        corner="BOTTOM_RIGHT"
        menuCorner="END"
      >
        <mwc-check-list-item
          class="filter-subscribed"
          left
          ?selected=${!this.hideSubscribed}
        >
          <span>${c("subscription.subscriber.subscribed")}</span>
        </mwc-check-list-item>
        <mwc-check-list-item
          class="filter-not-subscribed"
          left
          ?selected=${!this.hideNotSubscribed}
        >
          <span>${c("subscription.subscriber.notSubscribed")}</span>
        </mwc-check-list-item>
      </mwc-menu>
    </h1> `;
  }
  renderControls(e) {
    return u`<filtered-list class="control-block-list" activatable>
      ${e.filter((t) => this.getFcdaElements(t).length).map((t) => {
      const i = this.getFcdaElements(t), n = i.some(
        (s) => this.getExtRefCount(s, t) !== 0
      ), r = i.some(
        (s) => this.getExtRefCount(s, t) === 0
      );
      return u`
            <mwc-list-item
              noninteractive
              class="${Ve({
        control: !0,
        "show-subscribed": n,
        "show-not-subscribed": r
      })}"
              graphic="icon"
              twoline
              hasMeta
              value="${N(t)}${i.map(
        (s) => `
                        ${Qi(s)}
                        ${Ji(s)}
                        ${N(s)}`
      ).join("")}"
            >
              <mwc-icon-button
                slot="meta"
                icon="edit"
                class="interactive"
                @click=${() => this.openEditWizard(t)}
              ></mwc-icon-button>
              <span
                >${Cn(t)}
                ${Ee(t) ? u`${Ee(t)}` : De}</span
              >
              <span slot="secondary">${N(t)}</span>
              <mwc-icon slot="graphic"
                >${this.iconControlLookup[this.controlTag]}</mwc-icon
              >
            </mwc-list-item>
            <li divider role="separator"></li>
            ${i.map(
        (s) => this.renderFCDA(t, s)
      )}
          `;
    })}
    </filtered-list>`;
  }
  render() {
    const e = this.getControlElements();
    return u`<section tabindex="0">
      ${this.renderTitle()}
      ${e ? this.renderControls(e) : u`<h4>${c("subscription.subscriber.notSubscribed")}</h4> `}
    </section>`;
  }
};
Q.styles = he`
    ${gr}

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    section {
      position: relative;
    }

    .actions-menu-icon {
      float: right;
    }

    .actions-menu-icon.filter-off {
      color: var(--secondary);
      background-color: var(--mdc-theme-background);
    }

    /* Filtering rules for control blocks end up implementing logic to allow
    very fast CSS response. The following rules appear to be minimal but can be
    hard to understand intuitively for the multiple conditions. If modifying,
    it is suggested to create a truth-table to check for side-effects */

    /* remove all control blocks if no filters */
    filtered-list.control-block-list:not(.show-subscribed, .show-not-subscribed)
      mwc-list-item {
      display: none;
    }

    /* remove control blocks taking care to respect multiple conditions */
    filtered-list.control-block-list.show-not-subscribed:not(.show-subscribed)
      mwc-list-item.control.show-subscribed:not(.show-not-subscribed) {
      display: none;
    }

    filtered-list.control-block-list.show-subscribed:not(.show-not-subscribed)
      mwc-list-item.control.show-not-subscribed:not(.show-subscribed) {
      display: none;
    }

    /* remove fcdas if not part of filter */
    filtered-list.control-block-list:not(.show-not-subscribed)
      mwc-list-item.subitem.show-not-subscribed {
      display: none;
    }

    filtered-list.control-block-list:not(.show-subscribed)
      mwc-list-item.subitem.show-subscribed {
      display: none;
    }

    .interactive {
      pointer-events: all;
    }

    .subitem {
      padding-left: var(--mdc-list-side-padding, 16px);
    }
  `;
se([
  y({ attribute: !1 })
], Q.prototype, "doc", 2);
se([
  y({ type: Number })
], Q.prototype, "editCount", 2);
se([
  y()
], Q.prototype, "controlTag", 2);
se([
  y()
], Q.prototype, "includeLaterBinding", 2);
se([
  L()
], Q.prototype, "selectedControlElement", 2);
se([
  L()
], Q.prototype, "selectedFcdaElement", 2);
se([
  L()
], Q.prototype, "extRefCounters", 2);
se([
  y({
    type: Boolean,
    hasChanged() {
      return !1;
    }
  })
], Q.prototype, "hideSubscribed", 1);
se([
  y({
    type: Boolean,
    hasChanged() {
      return !1;
    }
  })
], Q.prototype, "hideNotSubscribed", 1);
se([
  q(".actions-menu")
], Q.prototype, "actionsMenu", 2);
se([
  q(".actions-menu-icon")
], Q.prototype, "actionsMenuIcon", 2);
se([
  q(".control-block-list")
], Q.prototype, "controlBlockList", 2);
Q = se([
  de("fcda-binding-list")
], Q);
var eu = Object.defineProperty, tu = Object.getOwnPropertyDescriptor, Fe = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? tu(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && eu(t, i, r), r;
};
let Ae = class extends ue {
  constructor() {
    super(), this.editCount = -1, this.serviceTypeLookup = {
      GSEControl: "GOOSE",
      SampledValueControl: "SMV"
    };
    const e = this.closest(".container");
    e && (this.onFcdaSelectEvent = this.onFcdaSelectEvent.bind(this), e.addEventListener("fcda-select", this.onFcdaSelectEvent));
  }
  async onFcdaSelectEvent(e) {
    this.currentSelectedControlElement = e.detail.control, this.currentSelectedFcdaElement = e.detail.fcda, this.currentIedElement = this.currentSelectedFcdaElement ? this.currentSelectedFcdaElement.closest("IED") ?? void 0 : void 0;
  }
  /**
   * Check data consistency of source `FCDA` and sink `ExtRef` based on
   * `ExtRef`'s `pLN`, `pDO`, `pDA` and `pServT` attributes.
   * Consistent means `CDC` and `bType` of both ExtRef and FCDA is equal.
   * In case
   *  - `pLN`, `pDO`, `pDA` or `pServT` attributes are not present, allow subscribing
   *  - no CDC or bType can be extracted, do not allow subscribing
   *
   * @param extRef - The `ExtRef` Element to check against
   */
  unsupportedExtRefElement(e) {
    if (!e.hasAttribute("pLN") || !e.hasAttribute("pDO") || !e.hasAttribute("pDA") || !e.hasAttribute("pServT"))
      return !1;
    if (!this.currentSelectedFcdaElement) return !0;
    const t = jd(this.currentSelectedFcdaElement), i = Kd(e);
    return t.cdc === null && i.cdc === null || t.bType === null && i.bType === null || yt[this.currentSelectedControlElement?.tagName ?? ""] !== e.getAttribute("pServT") ? !0 : t.cdc !== i.cdc || t.bType !== i.bType;
  }
  /**
   * Unsubscribing means removing a list of attributes from the ExtRef Element.
   *
   * @param extRefElement - The Ext Ref Element to clean from attributes.
   */
  unsubscribe(e) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return;
    const t = $(e, {
      iedName: null,
      ldInst: null,
      prefix: null,
      lnClass: null,
      lnInst: null,
      doName: null,
      daName: null,
      serviceType: null,
      srcLDInst: null,
      srcPrefix: null,
      srcLNClass: null,
      srcLNInst: null,
      srcCBName: null
    }), i = {
      old: { element: e },
      new: { element: t }
    }, n = e.closest("IED") || void 0, r = [];
    Vd(e) && r.push(
      ...Md(
        this.currentSelectedControlElement,
        n
      )
    ), this.dispatchEvent(
      rt({
        title: c("subscription.disconnect"),
        actions: [i, ...r]
      })
    ), this.dispatchEvent(
      Xi(
        this.currentSelectedControlElement,
        this.currentSelectedFcdaElement
      )
    );
  }
  /**
   * Subscribing means copying a list of attributes from the FCDA Element (and others) to the ExtRef Element.
   *
   * @param extRefElement - The Ext Ref Element to add the attributes to.
   */
  subscribe(e) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return;
    const t = {
      actions: [],
      title: c("subscription.connect")
    }, i = {
      old: { element: e },
      new: {
        element: Wd(
          e,
          this.currentSelectedControlElement,
          this.currentSelectedFcdaElement
        )
      }
    };
    t.actions.push(i);
    const n = e.closest("IED") || void 0;
    t.actions.push(
      ...Od(
        this.currentSelectedControlElement,
        n
      )
    ), this.dispatchEvent(rt(t)), this.dispatchEvent(
      Xi(
        this.currentSelectedControlElement,
        this.currentSelectedFcdaElement
      )
    );
  }
  getSubscribedExtRefElements() {
    return Sr(
      this.doc.getRootNode(),
      this.controlTag,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement,
      !0
    );
  }
  getAvailableExtRefElements() {
    return vr(
      this.doc.getRootNode(),
      this.currentSelectedFcdaElement,
      !0
    ).filter(
      (e) => !Qd(e) && (!e.hasAttribute("serviceType") || e.getAttribute("serviceType") === this.serviceTypeLookup[this.controlTag])
    );
  }
  renderTitle() {
    return u`<h1>${c("subscription.laterBinding.extRefList.title")}</h1>`;
  }
  renderExtRefElement(e) {
    const t = Hd(e);
    return u` <mwc-list-item
      graphic="large"
      ?hasMeta=${t !== null}
      twoline
      @click=${() => this.unsubscribe(e)}
      value="${N(e)}"
    >
      <span>
        ${e.getAttribute("intAddr")}
        ${Ee(e) ? u` (${Ee(e)})` : De}
      </span>
      <span slot="secondary"
        >${N(e.parentElement)}${t !== null ? ` (${N(t)})` : ""}</span
      >
      <mwc-icon slot="graphic">swap_horiz</mwc-icon>
      ${t !== null ? u`<mwc-icon title="${N(t)}" slot="meta"
            >monitor_heart</mwc-icon
          >` : De}
    </mwc-list-item>`;
  }
  renderSubscribedExtRefs() {
    const e = this.getSubscribedExtRefElements();
    return u`
      <mwc-list-item
        noninteractive
        value="${e.map(
      (t) => Ee(t) + " " + N(t)
    ).join(" ")}"
      >
        <span>${c("subscription.subscriber.subscribed")}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${e.length > 0 ? u`${e.map(
      (t) => this.renderExtRefElement(t)
    )}` : u`<mwc-list-item graphic="large" noninteractive>
            ${c("subscription.laterBinding.extRefList.noSubscribedExtRefs")}
          </mwc-list-item>`}
    `;
  }
  renderAvailableExtRefs() {
    const e = this.getAvailableExtRefElements();
    return u`
      <mwc-list-item
        noninteractive
        value="${e.map(
      (t) => Ee(t) + " " + N(t)
    ).join(" ")}"
      >
        <span> ${c("subscription.subscriber.availableToSubscribe")} </span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${e.length > 0 ? u`${e.map(
      (t) => u` <mwc-list-item
              graphic="large"
              ?disabled=${this.unsupportedExtRefElement(t)}
              twoline
              @click=${() => this.subscribe(t)}
              value="${N(t)}"
            >
              <span>
                ${t.getAttribute("intAddr")}
                ${Ee(t) ? u` (${Ee(t)})` : De}
              </span>
              <span slot="secondary"
                >${N(t.parentElement)}</span
              >
              <mwc-icon slot="graphic">arrow_back</mwc-icon>
            </mwc-list-item>`
    )}` : u`<mwc-list-item graphic="large" noninteractive>
            ${c("subscription.laterBinding.extRefList.noAvailableExtRefs")}
          </mwc-list-item>`}
    `;
  }
  render() {
    return u` <section tabindex="0">
      ${this.currentSelectedControlElement && this.currentSelectedFcdaElement ? u`
            ${this.renderTitle()}
            <filtered-list>
              ${this.renderSubscribedExtRefs()} ${this.renderAvailableExtRefs()}
            </filtered-list>
          ` : u`
            <h1>${c("subscription.laterBinding.extRefList.noSelection")}</h1>
          `}
    </section>`;
  }
};
Ae.styles = he`
    ${gr}

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }
  `;
Fe([
  y({ attribute: !1 })
], Ae.prototype, "doc", 2);
Fe([
  y({ type: Number })
], Ae.prototype, "editCount", 2);
Fe([
  y()
], Ae.prototype, "controlTag", 2);
Fe([
  L()
], Ae.prototype, "currentSelectedControlElement", 2);
Fe([
  L()
], Ae.prototype, "currentSelectedFcdaElement", 2);
Fe([
  L()
], Ae.prototype, "currentIedElement", 2);
Ae = Fe([
  de("extref-later-binding-list")
], Ae);
var iu = Object.defineProperty, Ar = (e, t, i, n) => {
  for (var r = void 0, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = s(t, i, r) || r);
  return r && iu(t, i, r), r;
};
class wr extends ue {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  render() {
    return u`<div>
      <div class="container">
        <fcda-binding-list
          class="column"
          controlTag="SampledValueControl"
          .includeLaterBinding="${!0}"
          .editCount=${this.editCount} .doc="${this.doc}"
        >
        </fcda-binding-list>
        <extref-later-binding-list
          class="column"
          controlTag="SampledValueControl"
          .editCount=${this.editCount} .doc="${this.doc}"
        >
        </extref-later-binding-list>
      </div>
    </div>`;
  }
  static {
    this.styles = he`
    :host {
      width: 100vw;
    }

    .container {
      display: flex;
      padding: 8px 6px 16px;
      height: calc(100vh - 136px);
    }

    .column {
      flex: 50%;
      margin: 0px 6px 0px;
      min-width: 300px;
      height: 100%;
      overflow-y: auto;
    }
  `;
  }
}
Ar([
  y({ attribute: !1 })
], wr.prototype, "doc");
Ar([
  y({ type: Number })
], wr.prototype, "editCount");
export {
  wr as default
};
