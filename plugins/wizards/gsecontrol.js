import "@material/mwc-button";
import "@material/mwc-formfield";
import { TextField as fr } from "@material/mwc-textfield";
import { List as br } from "@material/mwc-list";
import "@material/mwc-switch";
import { Select as yr } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-icon";
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
const $t = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, At = (t, e, i = null) => {
  for (; e !== i; ) {
    const r = e.nextSibling;
    t.removeChild(e), e = r;
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
const ce = `{{lit-${String(Math.random()).slice(2)}}}`, mi = `<!--${ce}-->`, Ft = new RegExp(`${ce}|${mi}`), Ne = "$lit$";
class fi {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const r = [], n = [], s = document.createTreeWalker(i.content, 133, null, !1);
    let a = 0, c = -1, o = 0;
    const { strings: d, values: { length: h } } = e;
    for (; o < h; ) {
      const l = s.nextNode();
      if (l === null) {
        s.currentNode = n.pop();
        continue;
      }
      if (c++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const y = l.attributes, { length: v } = y;
          let S = 0;
          for (let A = 0; A < v; A++)
            Ot(y[A].name, Ne) && S++;
          for (; S-- > 0; ) {
            const A = d[o], C = st.exec(A)[2], I = C.toLowerCase() + Ne, w = l.getAttribute(I);
            l.removeAttribute(I);
            const D = w.split(Ft);
            this.parts.push({ type: "attribute", index: c, name: C, strings: D }), o += D.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (n.push(l), s.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const y = l.data;
        if (y.indexOf(ce) >= 0) {
          const v = l.parentNode, S = y.split(Ft), A = S.length - 1;
          for (let C = 0; C < A; C++) {
            let I, w = S[C];
            if (w === "")
              I = me();
            else {
              const D = st.exec(w);
              D !== null && Ot(D[2], Ne) && (w = w.slice(0, D.index) + D[1] + D[2].slice(0, -Ne.length) + D[3]), I = document.createTextNode(w);
            }
            v.insertBefore(I, l), this.parts.push({ type: "node", index: ++c });
          }
          S[A] === "" ? (v.insertBefore(me(), l), r.push(l)) : l.data = S[A], o += A;
        }
      } else if (l.nodeType === 8)
        if (l.data === ce) {
          const y = l.parentNode;
          (l.previousSibling === null || c === a) && (c++, y.insertBefore(me(), l)), a = c, this.parts.push({ type: "node", index: c }), l.nextSibling === null ? l.data = "" : (r.push(l), c--), o++;
        } else {
          let y = -1;
          for (; (y = l.data.indexOf(ce, y + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const l of r)
      l.parentNode.removeChild(l);
  }
}
const Ot = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, bi = (t) => t.index !== -1, me = () => document.createComment(""), st = (
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
const It = 133;
function yi(t, e) {
  const { element: { content: i }, parts: r } = t, n = document.createTreeWalker(i, It, null, !1);
  let s = De(r), a = r[s], c = -1, o = 0;
  const d = [];
  let h = null;
  for (; n.nextNode(); ) {
    c++;
    const l = n.currentNode;
    for (l.previousSibling === h && (h = null), e.has(l) && (d.push(l), h === null && (h = l)), h !== null && o++; a !== void 0 && a.index === c; )
      a.index = h !== null ? -1 : a.index - o, s = De(r, s), a = r[s];
  }
  d.forEach((l) => l.parentNode.removeChild(l));
}
const gr = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, It, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, De = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const r = t[i];
    if (bi(r))
      return i;
  }
  return -1;
};
function vr(t, e, i = null) {
  const { element: { content: r }, parts: n } = t;
  if (i == null) {
    r.appendChild(e);
    return;
  }
  const s = document.createTreeWalker(r, It, null, !1);
  let a = De(n), c = 0, o = -1;
  for (; s.nextNode(); )
    for (o++, s.currentNode === i && (c = gr(e), i.parentNode.insertBefore(e, i)); a !== -1 && n[a].index === o; ) {
      if (c > 0) {
        for (; a !== -1; )
          n[a].index += c, a = De(n, a);
        return;
      }
      a = De(n, a);
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
const gi = /* @__PURE__ */ new WeakMap(), Xe = (t) => (...e) => {
  const i = t(...e);
  return gi.set(i, !0), i;
}, $e = (t) => typeof t == "function" && gi.has(t);
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
const ee = {}, Mt = {};
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
class at {
  constructor(e, i, r) {
    this.__parts = [], this.template = e, this.processor = i, this.options = r;
  }
  update(e) {
    let i = 0;
    for (const r of this.__parts)
      r !== void 0 && r.setValue(e[i]), i++;
    for (const r of this.__parts)
      r !== void 0 && r.commit();
  }
  _clone() {
    const e = $t ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, a = 0, c, o = n.nextNode();
    for (; s < r.length; ) {
      if (c = r[s], !bi(c)) {
        this.__parts.push(void 0), s++;
        continue;
      }
      for (; a < c.index; )
        a++, o.nodeName === "TEMPLATE" && (i.push(o), n.currentNode = o.content), (o = n.nextNode()) === null && (n.currentNode = i.pop(), o = n.nextNode());
      if (c.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(o.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(o, c.name, c.strings, this.options));
      s++;
    }
    return $t && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Vt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), Sr = ` ${ce} `;
class vi {
  constructor(e, i, r, n) {
    this.strings = e, this.values = i, this.type = r, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let i = "", r = !1;
    for (let n = 0; n < e; n++) {
      const s = this.strings[n], a = s.lastIndexOf("<!--");
      r = (a > -1 || r) && s.indexOf("-->", a + 1) === -1;
      const c = st.exec(s);
      c === null ? i += s + (r ? Sr : mi) : i += s.substr(0, c.index) + c[1] + c[2] + Ne + c[3] + ce;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return Vt !== void 0 && (i = Vt.createHTML(i)), e.innerHTML = i, e;
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
const Ke = (t) => t === null || !(typeof t == "object" || typeof t == "function"), ct = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Si {
  constructor(e, i, r) {
    this.dirty = !0, this.element = e, this.name = i, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Ce(this);
  }
  _getValue() {
    const e = this.strings, i = e.length - 1, r = this.parts;
    if (i === 1 && e[0] === "" && e[1] === "") {
      const s = r[0].value;
      if (typeof s == "symbol")
        return String(s);
      if (typeof s == "string" || !ct(s))
        return s;
    }
    let n = "";
    for (let s = 0; s < i; s++) {
      n += e[s];
      const a = r[s];
      if (a !== void 0) {
        const c = a.value;
        if (Ke(c) || !ct(c))
          n += typeof c == "string" ? c : String(c);
        else
          for (const o of c)
            n += typeof o == "string" ? o : String(o);
      }
    }
    return n += e[i], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Ce {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== ee && (!Ke(e) || e !== this.value) && (this.value = e, $e(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; $e(this.value); ) {
      const e = this.value;
      this.value = ee, e(this);
    }
    this.value !== ee && this.committer.commit();
  }
}
class Oe {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(me()), this.endNode = e.appendChild(me());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(e) {
    e.__insert(this.startNode = me()), e.__insert(this.endNode = me());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = me()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; $e(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = ee, i(this);
    }
    const e = this.__pendingValue;
    e !== ee && (Ke(e) ? e !== this.value && this.__commitText(e) : e instanceof vi ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : ct(e) ? this.__commitIterable(e) : e === Mt ? (this.value = Mt, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const i = this.startNode.nextSibling;
    e = e ?? "";
    const r = typeof e == "string" ? e : String(e);
    i === this.endNode.previousSibling && i.nodeType === 3 ? i.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
  }
  __commitTemplateResult(e) {
    const i = this.options.templateFactory(e);
    if (this.value instanceof at && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new at(i, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const s of e)
      n = i[r], n === void 0 && (n = new Oe(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(s), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    At(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class xr {
  constructor(e, i, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; $e(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = ee, i(this);
    }
    if (this.__pendingValue === ee)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = ee;
  }
}
class _r extends Si {
  constructor(e, i, r) {
    super(e, i, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new Ct(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Ct extends Ce {
}
let xi = !1;
(() => {
  try {
    const t = {
      get capture() {
        return xi = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
class kr {
  constructor(e, i, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; $e(this.__pendingValue); ) {
      const s = this.__pendingValue;
      this.__pendingValue = ee, s(this);
    }
    if (this.__pendingValue === ee)
      return;
    const e = this.__pendingValue, i = this.value, r = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), n = e != null && (i == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Ar(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = ee;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Ar = (t) => t && (xi ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
function Ir(t) {
  let e = Fe.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Fe.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const r = t.strings.join(ce);
  return i = e.keyString.get(r), i === void 0 && (i = new fi(t, t.getTemplateElement()), e.keyString.set(r, i)), e.stringsArray.set(t.strings, i), i;
}
const Fe = /* @__PURE__ */ new Map();
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
const Ae = /* @__PURE__ */ new WeakMap(), Cr = (t, e, i) => {
  let r = Ae.get(e);
  r === void 0 && (At(e, e.firstChild), Ae.set(e, r = new Oe(Object.assign({ templateFactory: Ir }, i))), r.appendInto(e)), r.setValue(t), r.commit();
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
class Er {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, i, r, n) {
    const s = i[0];
    return s === "." ? new _r(e, i.slice(1), r).parts : s === "@" ? [new kr(e, i.slice(1), n.eventContext)] : s === "?" ? [new xr(e, i.slice(1), r)] : new Si(e, i, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Oe(e);
  }
}
const wr = new Er();
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
const p = (t, ...e) => new vi(t, e, "html", wr);
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
const _i = (t, e) => `${t}--${e}`;
let je = !0;
typeof window.ShadyCSS > "u" ? je = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), je = !1);
const Tr = (t) => (e) => {
  const i = _i(e.type, t);
  let r = Fe.get(i);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Fe.set(i, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const s = e.strings.join(ce);
  if (n = r.keyString.get(s), n === void 0) {
    const a = e.getTemplateElement();
    je && window.ShadyCSS.prepareTemplateDom(a, t), n = new fi(e, a), r.keyString.set(s, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, Pr = ["html", "svg"], Nr = (t) => {
  Pr.forEach((e) => {
    const i = Fe.get(_i(e, t));
    i !== void 0 && i.keyString.forEach((r) => {
      const { element: { content: n } } = r, s = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((a) => {
        s.add(a);
      }), yi(r, s);
    });
  });
}, ki = /* @__PURE__ */ new Set(), Dr = (t, e, i) => {
  ki.add(t);
  const r = i ? i.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: s } = n;
  if (s === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, t);
    return;
  }
  const a = document.createElement("style");
  for (let d = 0; d < s; d++) {
    const h = n[d];
    h.parentNode.removeChild(h), a.textContent += h.textContent;
  }
  Nr(t);
  const c = r.content;
  i ? vr(i, a, c.firstChild) : c.insertBefore(a, c.firstChild), window.ShadyCSS.prepareTemplateStyles(r, t);
  const o = c.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (i) {
    c.insertBefore(a, c.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(a), yi(i, d);
  }
}, Rr = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = i.scopeName, n = Ae.has(e), s = je && e.nodeType === 11 && !!e.host, a = s && !ki.has(r), c = a ? document.createDocumentFragment() : e;
  if (Cr(t, c, Object.assign({ templateFactory: Tr(r) }, i)), a) {
    const o = Ae.get(c);
    Ae.delete(c);
    const d = o.value instanceof at ? o.value.template : void 0;
    Dr(r, c, d), At(e, e.firstChild), e.appendChild(c), Ae.set(e, o);
  }
  !n && s && window.ShadyCSS.styleElement(e.host);
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
var Ai;
window.JSCompiler_renameProperty = (t, e) => t;
const ot = {
  toAttribute(t, e) {
    switch (e) {
      case Boolean:
        return t ? "" : null;
      case Object:
      case Array:
        return t == null ? t : JSON.stringify(t);
    }
    return t;
  },
  fromAttribute(t, e) {
    switch (e) {
      case Boolean:
        return t !== null;
      case Number:
        return t === null ? null : Number(t);
      case Object:
      case Array:
        return JSON.parse(t);
    }
    return t;
  }
}, Ii = (t, e) => e !== t && (e === e || t === t), et = {
  attribute: !0,
  type: String,
  converter: ot,
  reflect: !1,
  hasChanged: Ii
}, tt = 1, zt = 4, Gt = 8, qt = 16, dt = "finalized";
class Ci extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this._classProperties.forEach((i, r) => {
      const n = this._attributeNameForProperty(r, i);
      n !== void 0 && (this._attributeToPropertyMap.set(n, r), e.push(n));
    }), e;
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
      const e = Object.getPrototypeOf(this)._classProperties;
      e !== void 0 && e.forEach((i, r) => this._classProperties.set(r, i));
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
  static createProperty(e, i = et) {
    if (this._ensureClassProperties(), this._classProperties.set(e, i), i.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const r = typeof e == "symbol" ? Symbol() : `__${e}`, n = this.getPropertyDescriptor(e, r, i);
    n !== void 0 && Object.defineProperty(this.prototype, e, n);
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
  static getPropertyDescriptor(e, i, r) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[i];
      },
      set(n) {
        const s = this[e];
        this[i] = n, this.requestUpdateInternal(e, s, r);
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
  static getPropertyOptions(e) {
    return this._classProperties && this._classProperties.get(e) || et;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(dt) || e.finalize(), this[dt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const i = this.properties, r = [
        ...Object.getOwnPropertyNames(i),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(i) : []
      ];
      for (const n of r)
        this.createProperty(n, i[n]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, i) {
    const r = i.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, i, r = Ii) {
    return r(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const r = i.type, n = i.converter || ot, s = typeof n == "function" ? n : n.fromAttribute;
    return s ? s(e, r) : e;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(e, i) {
    if (i.reflect === void 0)
      return;
    const r = i.type, n = i.converter;
    return (n && n.toAttribute || ot.toAttribute)(e, r);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */
  initialize() {
    this._updateState = 0, this._updatePromise = new Promise((e) => this._enableUpdatingResolver = e), this._changedProperties = /* @__PURE__ */ new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
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
    this.constructor._classProperties.forEach((e, i) => {
      if (this.hasOwnProperty(i)) {
        const r = this[i];
        delete this[i], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(i, r);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, i) => this[i] = e), this._instanceProperties = void 0;
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
  attributeChangedCallback(e, i, r) {
    i !== r && this._attributeToProperty(e, r);
  }
  _propertyToAttribute(e, i, r = et) {
    const n = this.constructor, s = n._attributeNameForProperty(e, r);
    if (s !== void 0) {
      const a = n._propertyValueToAttribute(i, r);
      if (a === void 0)
        return;
      this._updateState = this._updateState | Gt, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & Gt)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const s = r.getPropertyOptions(n);
      this._updateState = this._updateState | qt, this[n] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(i, s), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, i, r) {
    let n = !0;
    if (e !== void 0) {
      const s = this.constructor;
      r = r || s.getPropertyOptions(e), s._valueHasChanged(this[e], i, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, i), r.reflect === !0 && !(this._updateState & qt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
    }
    !this._hasRequestedUpdate && n && (this._updatePromise = this._enqueueUpdate());
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
  requestUpdate(e, i) {
    return this.requestUpdateInternal(e, i), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | zt;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & zt;
  }
  get hasUpdated() {
    return this._updateState & tt;
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
    let e = !1;
    const i = this._changedProperties;
    try {
      e = this.shouldUpdate(i), e ? this.update(i) : this._markUpdated();
    } catch (r) {
      throw e = !1, this._markUpdated(), r;
    }
    e && (this._updateState & tt || (this._updateState = this._updateState | tt, this.firstUpdated(i)), this.updated(i));
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
  shouldUpdate(e) {
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
  update(e) {
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((i, r) => this._propertyToAttribute(r, this[r], i)), this._reflectingProperties = void 0), this._markUpdated();
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
  updated(e) {
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
  firstUpdated(e) {
  }
}
Ai = dt;
Ci[Ai] = !0;
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
const Lr = (t, e) => (window.customElements.define(t, e), e), $r = (t, e) => {
  const { kind: i, elements: r } = e;
  return {
    kind: i,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(t, n);
    }
  };
}, de = (t) => (e) => typeof e == "function" ? Lr(t, e) : $r(t, e), Fr = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
  i.createProperty(e.key, t);
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
    typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
  },
  finisher(i) {
    i.createProperty(e.key, t);
  }
}, Or = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function m(t) {
  return (e, i) => i !== void 0 ? Or(t, e, i) : Fr(t, e);
}
function Mr(t) {
  return m({ attribute: !1, hasChanged: void 0 });
}
const N = (t) => Mr();
function B(t, e) {
  return (i, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Et(n, i, r) : wt(n, i);
  };
}
function Ei(t) {
  return (e, i) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? Et(r, e, i) : wt(r, e);
  };
}
const Et = (t, e, i) => {
  Object.defineProperty(e, i, t);
}, wt = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
}), Vr = (t, e) => Object.assign(Object.assign({}, e), { finisher(i) {
  Object.assign(i.prototype[e.key], t);
} }), zr = (
  // tslint:disable-next-line:no-any legacy decorator
  (t, e, i) => {
    Object.assign(e[i], t);
  }
);
function Gr(t) {
  return (e, i) => i !== void 0 ? zr(t, e, i) : Vr(t, e);
}
const Ut = Element.prototype, qr = Ut.msMatchesSelector || Ut.webkitMatchesSelector;
function wi(t = "", e = !1, i = "") {
  return (r, n) => {
    const s = {
      get() {
        const a = `slot${t ? `[name=${t}]` : ":not([name])"}`, c = this.renderRoot.querySelector(a);
        let o = c && c.assignedNodes({ flatten: e });
        return o && i && (o = o.filter((d) => d.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (d.matches ? d.matches(i) : qr.call(d, i)))), o;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? Et(s, r, n) : wt(s, r);
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
const lt = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Tt = Symbol();
class Pt {
  constructor(e, i) {
    if (i !== Tt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (lt ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Ti = (t) => new Pt(String(t), Tt), Ur = (t) => {
  if (t instanceof Pt)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, Ee = (t, ...e) => {
  const i = e.reduce((r, n, s) => r + Ur(n) + t[s + 1], t[0]);
  return new Pt(i, Tt);
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
const Bt = {};
class Se extends Ci {
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
    const e = this.getStyles();
    if (Array.isArray(e)) {
      const i = (s, a) => s.reduceRight((c, o) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(o) ? i(o, c) : (c.add(o), c)
      ), a), r = i(e, /* @__PURE__ */ new Set()), n = [];
      r.forEach((s) => n.unshift(s)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !lt) {
        const r = Array.prototype.slice.call(i.cssRules).reduce((n, s) => n + s.cssText, "");
        return Ti(r);
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
    const e = this.constructor._styles;
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : lt ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
  update(e) {
    const i = this.render();
    super.update(e), i !== Bt && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
      const n = document.createElement("style");
      n.textContent = r.cssText, this.renderRoot.appendChild(n);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return Bt;
  }
}
Se.finalized = !0;
Se.render = Rr;
Se.shadowRootOptions = { mode: "open" };
const Br = 1e3 * 60, Ht = "langChanged";
function Hr(t, e, i) {
  return Object.entries(pt(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(pt(s))), t);
}
function jr(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function pt(t) {
  return typeof t == "function" ? t() : t;
}
const Wr = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: jr,
  interpolate: Hr,
  translationCache: {}
});
let Xr = Wr();
function Kr(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Ht, i, e), () => window.removeEventListener(Ht, i);
}
function g(t, e, i = Xr) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? pt(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Pi(t) {
  return t instanceof Oe ? t.startNode.isConnected : t instanceof Ce ? t.committer.element.isConnected : t.element.isConnected;
}
function Zr(t) {
  for (const [e] of t)
    Pi(e) || t.delete(e);
}
function Jr(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Qr(t, e) {
  setInterval(() => Jr(() => Zr(t)), e);
}
const Ni = /* @__PURE__ */ new Map();
function Yr() {
  Kr((t) => {
    for (const [e, i] of Ni)
      Pi(e) && en(e, i, t);
  });
}
Yr();
Qr(Ni, Br);
function en(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
var ut = function(t, e) {
  return ut = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, ut(t, e);
};
function tn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ut(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Re = function() {
  return Re = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Re.apply(this, arguments);
};
function u(t, e, i, r) {
  var n = arguments.length, s = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, i, r);
  else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (s = (n < 3 ? a(s) : n > 3 ? a(e, i, s) : a(e, i)) || s);
  return n > 3 && s && Object.defineProperty(e, i, s), s;
}
function Ve(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, i = e && t[e], r = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
function rn(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const nn = (t) => t.nodeType === Node.ELEMENT_NODE, Di = () => {
}, sn = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Di, sn);
document.removeEventListener("x", Di);
const Ri = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, an = (t) => {
  const e = Ri();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const s = (a) => {
    n = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", s), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", s), n.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Nt extends Se {
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
var Li = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
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
var cn = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, on = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, jt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function dn(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + i.left, a = n + i.top, c, o;
  if (t.type === "touchstart") {
    var d = t;
    c = d.changedTouches[0].pageX - s, o = d.changedTouches[0].pageY - a;
  } else {
    var h = t;
    c = h.pageX - s, o = h.pageY - a;
  }
  return { x: c, y: o };
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
var Wt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Xt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ze = [], ln = (
  /** @class */
  function(t) {
    tn(e, t);
    function e(i) {
      var r = t.call(this, Re(Re({}, e.defaultAdapter), i)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(n) {
        r.activateImpl(n);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return on;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
    }), e.prototype.init = function() {
      var i = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = e.cssClasses, s = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(s), i.adapter.isUnbounded() && (i.adapter.addClass(a), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(s), i.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(i) {
      this.activateImpl(i);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var i = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        i.layoutInternal(), i.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(i) {
      var r = e.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(i) {
      var r, n;
      if (i) {
        try {
          for (var s = Ve(Wt), a = s.next(); !a.done; a = s.next()) {
            var c = a.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            a && !a.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var s = Ve(Xt), a = s.next(); !a.done; a = s.next()) {
            var c = a.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            a && !a.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = Ve(Wt), s = n.next(); !s.done; s = n.next()) {
          var a = s.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = Ve(Xt), s = n.next(); !s.done; s = n.next()) {
          var a = s.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(s) {
        s.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[s], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var s = this.previousActivationEvent, a = s && i !== void 0 && s.type !== i.type;
          if (!a) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var c = i !== void 0 && ze.length > 0 && ze.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (ze.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ze = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, c = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var y = this.getFgTranslationCoordinates(), v = y.startPoint, S = y.endPoint;
        h = v.x + "px, " + v.y + "px", l = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(s, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, s;
      n ? s = dn(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, s = {
        x: s.x - this.initialSize / 2,
        y: s.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: s, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, s = n.hasDeactivationUXRun, a = n.isActivated, c = s || !a;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, jt.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var i = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var i = this, r = this.activationState;
      if (r.isActivated) {
        var n = Re({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(n), i.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(i) {
      var r = i.wasActivatedByPointer, n = i.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var a = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var s = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && s % 2 !== 0 ? this.initialSize = s - 1 : this.initialSize = s, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, s = i.VAR_TOP, a = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
    }, e;
  }(Li)
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
class pn {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const i = (e.getAttribute("class") || "").split(/\s+/);
    for (const r of i)
      this.classes.add(r);
  }
  add(e) {
    this.classes.add(e), this.changed = !0;
  }
  remove(e) {
    this.classes.delete(e), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let e = "";
      this.classes.forEach((i) => e += i + " "), this.element.setAttribute("class", e);
    }
  }
}
const Kt = /* @__PURE__ */ new WeakMap(), Ze = Xe((t) => (e) => {
  if (!(e instanceof Ce) || e instanceof Ct || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Kt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Kt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new pn(r);
  n.forEach((a) => {
    a in t || (s.remove(a), n.delete(a));
  });
  for (const a in t) {
    const c = t[a];
    c != n.has(a) && (c ? (s.add(a), n.add(a)) : (s.remove(a), n.delete(a)));
  }
  typeof s.commit == "function" && s.commit();
});
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
const Zt = /* @__PURE__ */ new WeakMap(), un = Xe((t) => (e) => {
  if (!(e instanceof Ce) || e instanceof Ct || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Zt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Zt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in t || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in t)
    n.add(s), s.indexOf("-") === -1 ? r[s] = t[s] : r.setProperty(s, t[s]);
});
class F extends Nt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = ln;
  }
  get isActive() {
    return rn(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (e) => {
        switch (e) {
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
      removeClass: (e) => {
        switch (e) {
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
      updateCssVariable: (e, i) => {
        switch (e) {
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
  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
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
  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }
  update(e) {
    e.has("disabled") && this.disabled && this.endHover(), super.update(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), r = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
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
    return p`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ze(r)}"
          style="${un({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
u([
  B(".mdc-ripple-surface")
], F.prototype, "mdcRoot", void 0);
u([
  m({ type: Boolean })
], F.prototype, "primary", void 0);
u([
  m({ type: Boolean })
], F.prototype, "accent", void 0);
u([
  m({ type: Boolean })
], F.prototype, "unbounded", void 0);
u([
  m({ type: Boolean })
], F.prototype, "disabled", void 0);
u([
  m({ type: Boolean })
], F.prototype, "activated", void 0);
u([
  m({ type: Boolean })
], F.prototype, "selected", void 0);
u([
  m({ type: Boolean })
], F.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  N()
], F.prototype, "hovering", void 0);
u([
  N()
], F.prototype, "bgFocused", void 0);
u([
  N()
], F.prototype, "fgActivation", void 0);
u([
  N()
], F.prototype, "fgDeactivation", void 0);
u([
  N()
], F.prototype, "fgScale", void 0);
u([
  N()
], F.prototype, "fgSize", void 0);
u([
  N()
], F.prototype, "translateStart", void 0);
u([
  N()
], F.prototype, "translateEnd", void 0);
u([
  N()
], F.prototype, "leftPos", void 0);
u([
  N()
], F.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const hn = Ee`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ht = class extends F {
};
ht.styles = [hn];
ht = u([
  de("mwc-ripple")
], ht);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const be = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, s) => e.constructor._observers.set(s, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((s, a) => {
          const o = this.constructor._observers.get(a);
          o !== void 0 && o.call(this, this[a], s);
        });
      };
    }
    e.constructor._observers.set(i, t);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class $i {
  constructor(e) {
    this.startPress = (i) => {
      e().then((r) => {
        r && r.startPress(i);
      });
    }, this.endPress = () => {
      e().then((i) => {
        i && i.endPress();
      });
    }, this.startFocus = () => {
      e().then((i) => {
        i && i.startFocus();
      });
    }, this.endFocus = () => {
      e().then((i) => {
        i && i.endFocus();
      });
    }, this.startHover = () => {
      e().then((i) => {
        i && i.startHover();
      });
    }, this.endHover = () => {
      e().then((i) => {
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
class M extends Se {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new $i(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
        cb: (e) => {
          const i = e.type;
          this.onDown(i === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : p``, r = this.hasMeta ? this.renderMeta() : p``;
    return p`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? p`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? p`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return p`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ze(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return p`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return p`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return p`<slot></slot>`;
  }
  renderTwoline() {
    return p`
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
  onDown(e, i) {
    const r = () => {
      window.removeEventListener(e, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, r), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(e, i) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: e } });
    this.dispatchEvent(r);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const i of e.eventNames)
        e.target.addEventListener(i, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const i of e.eventNames)
        e.target.removeEventListener(i, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
u([
  B("slot")
], M.prototype, "slotElement", void 0);
u([
  Ei("mwc-ripple")
], M.prototype, "ripple", void 0);
u([
  m({ type: String })
], M.prototype, "value", void 0);
u([
  m({ type: String, reflect: !0 })
], M.prototype, "group", void 0);
u([
  m({ type: Number, reflect: !0 })
], M.prototype, "tabindex", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  be(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], M.prototype, "disabled", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], M.prototype, "twoline", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], M.prototype, "activated", void 0);
u([
  m({ type: String, reflect: !0 })
], M.prototype, "graphic", void 0);
u([
  m({ type: Boolean })
], M.prototype, "multipleGraphics", void 0);
u([
  m({ type: Boolean })
], M.prototype, "hasMeta", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  be(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], M.prototype, "noninteractive", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  be(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], M.prototype, "selected", void 0);
u([
  N()
], M.prototype, "shouldRenderRipple", void 0);
u([
  N()
], M.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fi = Ee`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let mt = class extends M {
};
mt.styles = [Fi];
mt = u([
  de("mwc-list-item")
], mt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function mn(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const c = `__${e}`;
    if (i = r.getPropertyDescriptor(e, c), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let s = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(c) {
      s === "" && (s = r.getPropertyOptions(e).attribute), this.hasAttribute(s) && this.removeAttribute(s), n.set.call(this, c);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function Dt(t, e, i) {
  if (e !== void 0)
    return mn(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Oi extends Nt {
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(e) {
    this.formElement && this.formElement.setAttribute("aria-label", e);
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (e) => {
      this.dispatchEvent(new Event("change", e));
    });
  }
}
Oi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const it = /* @__PURE__ */ new WeakMap(), se = Xe((t) => (e) => {
  const i = it.get(e);
  if (t === void 0 && e instanceof Ce) {
    if (i !== void 0 || !it.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  it.set(e, t);
});
class O extends Oi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new $i(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const s = this.calculateAnimationStateName(!!r, !!i, !!n), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${s}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? p`<mwc-ripple
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
    const e = this.indeterminate || this.checked, i = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": e,
      "mdc-checkbox--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      // transition animiation classes
      "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
      "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
      "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
      "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
      "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
      "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
    }, r = this.indeterminate ? "mixed" : void 0;
    return p`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ze(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${se(this.name)}"
              aria-checked="${se(r)}"
              aria-label="${se(this.ariaLabel)}"
              aria-labelledby="${se(this.ariaLabelledBy)}"
              aria-describedby="${se(this.ariaDescribedBy)}"
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
  handleRippleMouseDown(e) {
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.rippleHandlers.startPress(e);
  }
  handleRippleTouchStart(e) {
    this.rippleHandlers.startPress(e);
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
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
}
u([
  B(".mdc-checkbox")
], O.prototype, "mdcRoot", void 0);
u([
  B("input")
], O.prototype, "formElement", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], O.prototype, "checked", void 0);
u([
  m({ type: Boolean })
], O.prototype, "indeterminate", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], O.prototype, "disabled", void 0);
u([
  m({ type: String, reflect: !0 })
], O.prototype, "name", void 0);
u([
  m({ type: String })
], O.prototype, "value", void 0);
u([
  Dt,
  m({ type: String, attribute: "aria-label" })
], O.prototype, "ariaLabel", void 0);
u([
  Dt,
  m({ type: String, attribute: "aria-labelledby" })
], O.prototype, "ariaLabelledBy", void 0);
u([
  Dt,
  m({ type: String, attribute: "aria-describedby" })
], O.prototype, "ariaDescribedBy", void 0);
u([
  m({ type: Boolean })
], O.prototype, "reducedTouchTarget", void 0);
u([
  N()
], O.prototype, "animationClass", void 0);
u([
  N()
], O.prototype, "shouldRenderRipple", void 0);
u([
  N()
], O.prototype, "focused", void 0);
u([
  N()
], O.prototype, "useStateLayerCustomProperties", void 0);
u([
  Ei("mwc-ripple")
], O.prototype, "ripple", void 0);
u([
  Gr({ passive: !0 })
], O.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const fn = Ee`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let ft = class extends O {
};
ft.styles = [fn];
ft = u([
  de("mwc-checkbox")
], ft);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Me extends M {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : p``, n = this.hasMeta && this.left ? this.renderMeta() : p``, s = this.renderRipple();
    return p`
      ${s}
      ${r}
      ${this.left ? "" : i}
      <span class=${Ze(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? i : ""}
      ${n}`;
  }
  async onChange(e) {
    const i = e.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
u([
  B("slot")
], Me.prototype, "slotElement", void 0);
u([
  B("mwc-checkbox")
], Me.prototype, "checkboxElement", void 0);
u([
  m({ type: Boolean })
], Me.prototype, "left", void 0);
u([
  m({ type: String, reflect: !0 })
], Me.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const bn = Ee`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ie = class extends Me {
};
Ie.styles = [Fi, bn];
Ie = u([
  de("mwc-check-list-item")
], Ie);
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
var x = {
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
}, H = /* @__PURE__ */ new Set();
H.add(x.BACKSPACE);
H.add(x.ENTER);
H.add(x.SPACEBAR);
H.add(x.PAGE_UP);
H.add(x.PAGE_DOWN);
H.add(x.END);
H.add(x.HOME);
H.add(x.ARROW_LEFT);
H.add(x.ARROW_UP);
H.add(x.ARROW_RIGHT);
H.add(x.ARROW_DOWN);
H.add(x.DELETE);
H.add(x.ESCAPE);
H.add(x.TAB);
var K = {
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
}, j = /* @__PURE__ */ new Map();
j.set(K.BACKSPACE, x.BACKSPACE);
j.set(K.ENTER, x.ENTER);
j.set(K.SPACEBAR, x.SPACEBAR);
j.set(K.PAGE_UP, x.PAGE_UP);
j.set(K.PAGE_DOWN, x.PAGE_DOWN);
j.set(K.END, x.END);
j.set(K.HOME, x.HOME);
j.set(K.ARROW_LEFT, x.ARROW_LEFT);
j.set(K.ARROW_UP, x.ARROW_UP);
j.set(K.ARROW_RIGHT, x.ARROW_RIGHT);
j.set(K.ARROW_DOWN, x.ARROW_DOWN);
j.set(K.DELETE, x.DELETE);
j.set(K.ESCAPE, x.ESCAPE);
j.set(K.TAB, x.TAB);
var ye = /* @__PURE__ */ new Set();
ye.add(x.PAGE_UP);
ye.add(x.PAGE_DOWN);
ye.add(x.END);
ye.add(x.HOME);
ye.add(x.ARROW_LEFT);
ye.add(x.ARROW_UP);
ye.add(x.ARROW_RIGHT);
ye.add(x.ARROW_DOWN);
function pe(t) {
  var e = t.key;
  if (H.has(e))
    return e;
  var i = j.get(t.keyCode);
  return i || x.UNKNOWN;
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
var ue, ne, P = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ue = {}, ue["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ue["" + P.LIST_ITEM_CLASS] = "mdc-list-item", ue["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ue["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ue["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ue["" + P.ROOT] = "mdc-list";
var ke = (ne = {}, ne["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ne["" + P.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ne["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ne["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ne["" + P.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ne["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ne["" + P.ROOT] = "mdc-deprecated-list", ne), Ge = {
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
    .` + ke[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ke[P.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + P.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ke[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ke[P.LIST_ITEM_CLASS] + ` a,
    .` + ke[P.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ke[P.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, W = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const bt = (t, e) => t - e, yn = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, s = i.sort(bt), a = r.sort(bt);
  let c = 0, o = 0;
  for (; c < s.length || o < a.length; ) {
    const d = s[c], h = a[o];
    if (d === h) {
      c++, o++;
      continue;
    }
    if (d !== void 0 && (h === void 0 || d < h)) {
      n.removed.push(d), c++;
      continue;
    }
    if (h !== void 0 && (d === void 0 || h < d)) {
      n.added.push(h), o++;
      continue;
    }
  }
  return n;
}, gn = ["input", "button", "textarea", "select"];
function Le(t) {
  return t instanceof Set;
}
const rt = (t) => {
  const e = t === W.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Le(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Rt extends Li {
  constructor(e) {
    super(Object.assign(Object.assign({}, Rt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = W.UNSET_INDEX, this.focusedItemIndex_ = W.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ge;
  }
  static get numbers() {
    return W;
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
  setWrapFocus(e) {
    this.wrapFocus_ = e;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(e) {
    this.isMulti_ = e;
    const i = this.selectedIndex_;
    if (e) {
      if (!Le(i)) {
        const r = i === W.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Le(i))
      if (i.size) {
        const r = Array.from(i).sort(bt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = W.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(e) {
    this.isVertical_ = e;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(e) {
    this.useActivatedClass_ = e;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(e) {
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(rt(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, i, r) {
    const n = pe(e) === "ArrowLeft", s = pe(e) === "ArrowUp", a = pe(e) === "ArrowRight", c = pe(e) === "ArrowDown", o = pe(e) === "Home", d = pe(e) === "End", h = pe(e) === "Enter", l = pe(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || d ? (e.preventDefault(), this.focusLastElement()) : (c || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let y = this.adapter.getFocusedElementIndex();
    if (y === -1 && (y = r, y < 0))
      return;
    let v;
    if (this.isVertical_ && c || !this.isVertical_ && a)
      this.preventDefaultEvent(e), v = this.focusNextElement(y);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), v = this.focusPrevElement(y);
    else if (o)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), v = this.focusLastElement();
    else if ((h || l) && i) {
      const S = e.target;
      if (S && S.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(y, !0);
    }
    this.focusedItemIndex_ = y, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== W.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const i = this.adapter.getListItemCount();
    let r = e + 1;
    if (r >= i)
      if (this.wrapFocus_)
        r = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(r), r;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    let i = e - 1;
    if (i < 0)
      if (this.wrapFocus_)
        i = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(i), i;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const e = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(e), e;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(e, i) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !i);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const r = `${e.target.tagName}`.toLowerCase();
    gn.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== W.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = rt(this.selectedIndex_), n = yn(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const s of n.removed)
        i && this.adapter.setSelectedStateForElementIndex(s, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !1);
      for (const s of n.added)
        i && this.adapter.setSelectedStateForElementIndex(s, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === W.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ge.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? Ge.ARIA_CURRENT : Ge.ARIA_SELECTED;
    this.selectedIndex_ !== W.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === W.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== W.UNSET_INDEX ? e = this.selectedIndex_ : Le(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let i = !1;
        for (const r of e)
          if (i = this.isIndexInRange_(r), i)
            break;
        return i;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === W.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const i = this.adapter.getListItemCount();
    return e >= 0 && e < i;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, i, r) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(W.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const s = rt(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function vn(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const qe = (t) => t.hasAttribute("mwc-list-item");
function Sn() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Z extends Nt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Rt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = vn(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Sn.call(this), e(i);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.itemsReady, e;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var e;
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [], r = [];
    for (const a of i)
      qe(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, c) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && n.add(c);
    }), this.multi)
      this.select(n);
    else {
      const a = n.size ? n.entries().next().value[1] : -1;
      this.select(a);
    }
    const s = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(s);
  }
  get selected() {
    const e = this.index;
    if (!Le(e))
      return e === -1 ? null : this.items[e];
    const i = [];
    for (const r of e)
      i.push(this.items[r]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return p`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${se(e)}"
          aria-label="${se(i)}"
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
    var e;
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && i.length === 0 ? p`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, i);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, i);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e), r = e.target, n = qe(r);
      this.mdcFoundation.handleKeydown(e, n, i);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(e);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(e), i === -1) || this.items[i].disabled)
        return;
      const n = e.detail.selected, s = e.detail.source;
      this.mdcFoundation.handleSingleSelection(i, s === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const i = this.items, r = e.composedPath();
    for (const n of r) {
      let s = -1;
      if (nn(n) && qe(n) && (s = i.indexOf(n)), s !== -1)
        return s;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, i) => {
        if (!this.mdcRoot)
          return "";
        const n = this.items[e];
        return n ? n.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (e, i, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(i, r);
      },
      focusItemAtIndex: (e) => {
        const i = this.items[e];
        i && i.focus();
      },
      setTabIndexForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.tabindex = i);
      },
      notifyAction: (e) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: e };
        const r = new CustomEvent("action", i);
        this.dispatchEvent(r);
      },
      notifySelected: (e, i) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: e, diff: i };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => an(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.disabled = i);
      },
      getDisabledStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.selected = i);
      },
      getSelectedStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, i = !1) {
    const r = this.items[e];
    r && (r.selected = !0, r.activated = i);
  }
  deselectUi(e) {
    const i = this.items[e];
    i && (i.selected = !1, i.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, i) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, i);
  }
  onListItemConnected(e) {
    const i = e.target;
    this.layout(this.items.indexOf(i) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const i = this.items[0];
    for (const r of this.items)
      r.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Ri();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (qe(r))
        return this.items.indexOf(r);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const i of this.items)
      if (i.tabindex === 0) {
        i.tabindex = -1;
        break;
      }
    this.items[e].tabindex = 0, this.items[e].focus();
  }
  focus() {
    const e = this.mdcRoot;
    e && e.focus();
  }
  blur() {
    const e = this.mdcRoot;
    e && e.blur();
  }
}
u([
  m({ type: String })
], Z.prototype, "emptyMessage", void 0);
u([
  B(".mdc-deprecated-list")
], Z.prototype, "mdcRoot", void 0);
u([
  wi("", !0, "*")
], Z.prototype, "assignedElements", void 0);
u([
  wi("", !0, '[tabindex="0"]')
], Z.prototype, "tabbableElements", void 0);
u([
  m({ type: Boolean }),
  be(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Z.prototype, "activatable", void 0);
u([
  m({ type: Boolean }),
  be(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Z.prototype, "multi", void 0);
u([
  m({ type: Boolean }),
  be(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Z.prototype, "wrapFocus", void 0);
u([
  m({ type: String }),
  be(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Z.prototype, "itemRoles", void 0);
u([
  m({ type: String })
], Z.prototype, "innerRole", void 0);
u([
  m({ type: String })
], Z.prototype, "innerAriaLabel", void 0);
u([
  m({ type: Boolean })
], Z.prototype, "rootTabbable", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  be(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Z.prototype, "noninteractive", void 0);
var xn = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, xe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? _n(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && xn(e, i, n), n;
};
function yt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof re ? t : yt(t.parentElement);
}
function kn(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((c) => c.innerText).join(`
`), n = t.value, s = (i + r + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((c) => new RegExp(
    `*${c}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? yt(t).classList.remove("hidden") : yt(t).classList.add("hidden");
}
let re = class extends Z {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Ie);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ie).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ie).some((t) => t.selected);
  }
  onCheckAll() {
    const t = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = t);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (t) => kn(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? p`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : p``;
  }
  render() {
    return p`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? g("filter")}"
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
re.styles = Ee`
    ${Ti(br.styles)}

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
xe([
  m({ type: String })
], re.prototype, "searchFieldLabel", 2);
xe([
  m({ type: Boolean })
], re.prototype, "disableCheckAll", 2);
xe([
  N()
], re.prototype, "existCheckListItem", 1);
xe([
  N()
], re.prototype, "isAllSelected", 1);
xe([
  N()
], re.prototype, "isSomeSelected", 1);
xe([
  B("mwc-textfield")
], re.prototype, "searchField", 2);
re = xe([
  de("filtered-list")
], re);
var An = Object.defineProperty, In = Object.getOwnPropertyDescriptor, J = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? In(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && An(e, i, n), n;
};
let U = class extends Se {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.checked = t === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(t) {
    this.checkbox ? this.checkbox.checked = t : this.initChecked = t;
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
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
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
J([
  m({ type: String })
], U.prototype, "label", 2);
J([
  m({ type: String })
], U.prototype, "helper", 2);
J([
  m({ type: Boolean })
], U.prototype, "nullable", 2);
J([
  m({ type: Boolean })
], U.prototype, "defaultChecked", 2);
J([
  m({ type: String })
], U.prototype, "maybeValue", 1);
J([
  m({ type: Boolean })
], U.prototype, "disabled", 2);
J([
  N()
], U.prototype, "null", 1);
J([
  N()
], U.prototype, "checked", 1);
J([
  N()
], U.prototype, "deactivateCheckbox", 2);
J([
  N()
], U.prototype, "formfieldLabel", 1);
J([
  B("mwc-switch")
], U.prototype, "nullSwitch", 2);
J([
  B("mwc-checkbox")
], U.prototype, "checkbox", 2);
U = J([
  de("wizard-checkbox")
], U);
var Cn = Object.defineProperty, En = Object.getOwnPropertyDescriptor, _e = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? En(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Cn(e, i, n), n;
};
let oe = class extends yr {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.value = t);
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
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
_e([
  m({ type: Boolean })
], oe.prototype, "nullable", 2);
_e([
  N()
], oe.prototype, "null", 1);
_e([
  m({ type: String })
], oe.prototype, "maybeValue", 1);
_e([
  m({ type: String })
], oe.prototype, "defaultValue", 2);
_e([
  m({ type: Array })
], oe.prototype, "reservedValues", 2);
_e([
  B("mwc-switch")
], oe.prototype, "nullSwitch", 2);
oe = _e([
  de("wizard-select")
], oe);
var wn = Object.defineProperty, Tn = Object.getOwnPropertyDescriptor, Q = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Tn(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && wn(e, i, n), n;
};
let X = class extends fr {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(t) {
    const e = this.multipliers.indexOf(t);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.value = t);
  }
  selectMultiplier(t) {
    this.multiplier = this.multipliers[t.detail.index];
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(g("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? p`<div style="position:relative;">
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
      </div>` : p``;
  }
  renderMulplierList() {
    return p`${this.multipliers.map(
      (t) => p`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? g("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
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
Q([
  m({ type: Boolean })
], X.prototype, "nullable", 2);
Q([
  m({ type: Array })
], X.prototype, "multipliers", 2);
Q([
  m({ type: String })
], X.prototype, "multiplier", 1);
Q([
  m({ type: String })
], X.prototype, "unit", 2);
Q([
  N()
], X.prototype, "null", 1);
Q([
  m({ type: String })
], X.prototype, "maybeValue", 1);
Q([
  m({ type: String })
], X.prototype, "defaultValue", 2);
Q([
  m({ type: Array })
], X.prototype, "reservedValues", 2);
Q([
  B("mwc-switch")
], X.prototype, "nullSwitch", 2);
Q([
  B("mwc-menu")
], X.prototype, "multiplierMenu", 2);
Q([
  B("mwc-icon-button")
], X.prototype, "multiplierButton", 2);
X = Q([
  de("wizard-textfield")
], X);
function ae(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([n, s]) => s !== null).forEach(([n, s]) => r.setAttribute(n, s)), r;
}
function gt(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function Mi(t, e, i = 1) {
  const r = "new" + e + i;
  return t.querySelector(`:scope > ${e}[name="${r}"]`) ? Mi(t, e, ++i) : r;
}
function Pn(t) {
  return typeof t == "function";
}
function z(t) {
  return t instanceof X || t instanceof oe || t instanceof U ? t.maybeValue : t.value ?? null;
}
function Vi(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Pn(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function Je(t) {
  return Vi(t, { detail: { subwizard: !0 } });
}
function q(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const L = ":not(*)";
function Nn(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Dn(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? L : `${t}[version="${i}"][revision="${r}"]`;
}
function Jt(t) {
  return E(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Qt(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (s) => V(s, i).split(",")
  );
  return G(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((s) => s.join("")).join(",");
}
function Rn(t) {
  const [e, i, r, n, s, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((c) => t.getAttribute(c));
  return e === "None" ? `${E(t.parentElement)}>(${n} ${a} ${s})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${s ?? ""}`;
}
function Ln(t, e) {
  if (e.endsWith(")")) {
    const [y, v] = q(e), [S, A, C] = v.substring(1, v.length - 1).split(" ");
    if (!S || !A) return L;
    const I = $[t].parents.flatMap(
      (w) => V(w, y).split(",")
    );
    return G(
      I,
      [">"],
      [`${t}[iedName="None"][lnClass="${S}"][lnType="${A}"][lnInst="${C}"]`]
    ).map((w) => w.join("")).join(",");
  }
  const [i, r, n, s, a] = e.split(/[ /]/);
  if (!i || !r || !s) return L;
  const [
    c,
    o,
    d,
    h,
    l
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    [t],
    c,
    o,
    d,
    h,
    l
  ).map((y) => y.join("")).join(",");
}
function $n(t) {
  return `${E(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Fn(t, e) {
  const [i, r] = q(e), [n, s] = r.split(" ");
  return `${V(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${s}"]`;
}
function On(t) {
  return `${E(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Mn(t, e) {
  const [i, r] = q(e);
  return r ? `${V(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : L;
}
function Vn(t) {
  return `${E(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function zn(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : L;
}
function Gn(t) {
  const e = t.textContent, [i, r, n, s, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => t.getAttribute(c));
  return `${E(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${a ?? ""}`;
}
function qn(t, e) {
  const [i, r] = q(e), [n, s, a, c, o, d] = r.split(/[ /]/), [
    h,
    l,
    y,
    v,
    S,
    A
  ] = [
    $[t].parents.flatMap(
      (C) => V(C, i).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    h,
    [">"],
    [t],
    l,
    y,
    v,
    S,
    A
  ).map((C) => C.join("")).join(",");
}
function Un(t) {
  const [e, i, r, n, s, a, c, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), d = `${e}/${i ?? ""} ${r} ${n ?? ""}.${s} ${a || ""}`;
  return `${E(t.parentElement)}>${d} (${c}${o ? " [" + o + "]" : ""})`;
}
function Bn(t, e) {
  const [i, r] = q(e), [n, s, a, c] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = o && o[1] ? o[1] : "", h = o && o[2] ? o[2] : "", l = r.match(/\(([A-Z]{2})/), y = r.match(/ \[([0-9]{1,2})\]/), v = l && l[1] ? l[1] : "", S = y && y[1] ? y[1] : "", [
    A,
    C,
    I,
    w,
    D,
    Y,
    ie,
    we,
    Ye
  ] = [
    $[t].parents.flatMap(
      (Te) => V(Te, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return G(
    A,
    [">"],
    [t],
    C,
    I,
    w,
    D,
    Y,
    ie,
    we,
    Ye
  ).map((Te) => Te.join("")).join(",");
}
function Hn(t) {
  if (!t.parentElement) return NaN;
  const e = E(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    s,
    a,
    c,
    o,
    d,
    h,
    l,
    y,
    v,
    S,
    A,
    C
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
  ].map((D) => t.getAttribute(D)), I = C ? `${l}:${C} ${y ?? ""}/${v ?? ""} ${S ?? ""} ${A ?? ""}` : "", w = `${i} ${s}/${a ?? ""} ${c} ${o ?? ""} ${d} ${h || ""}`;
  return `${e}>${I ? I + " " : ""}${w}${r ? `@${r}` : ""}`;
}
function jn(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (Pe) => V(Pe, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Pe] = r.split("["), hr = [`[intAddr="${Pe}"]`];
    return G(n, [">"], [t], hr).map((mr) => mr.join("")).join(",");
  }
  let s, a, c, o, d, h, l, y, v, S, A, C, I, w;
  !r.includes(":") && !r.includes("@") ? [s, a, c, o, d, h, l] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    y,
    v,
    S,
    A,
    C,
    I,
    s,
    a,
    c,
    o,
    d,
    h,
    l
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, a, c, o, d, h, l, w] = r.split(/[ /@]/) : [
    y,
    v,
    S,
    A,
    C,
    I,
    s,
    a,
    c,
    o,
    d,
    h,
    l,
    w
  ] = r.split(/[ /:@]/);
  const [
    D,
    Y,
    ie,
    we,
    Ye,
    Te,
    sr,
    ar,
    cr,
    or,
    dr,
    lr,
    pr,
    ur
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    l ? [`[daName="${l}"]`] : [":not([daName])", '[daName=""]'],
    y ? [`[serviceType="${y}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    A ? [`[srcPrefix="${A}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    C ? [`[srcLNClass="${C}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    I ? [`[srcLNInst="${I}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    w ? [`[intAddr="${w}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return G(
    n,
    [">"],
    [t],
    D,
    Y,
    ie,
    we,
    Ye,
    Te,
    sr,
    ar,
    cr,
    or,
    dr,
    lr,
    pr,
    ur
  ).map((Pe) => Pe.join("")).join(",");
}
function Wn(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${E(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Xn(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (l) => V(l, i).split(",")
  ), [s, a, c] = r.split(" ");
  if (!a) return L;
  const [o, d, h] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${c}"]`]
  ];
  return G(
    n,
    [">"],
    [t],
    o,
    d,
    h
  ).map((l) => l.join("")).join(",");
}
function Kn(t) {
  const [e, i, r, n, s, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => t.getAttribute(c));
  return `${E(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${s} ${a}`;
}
function Zn(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (I) => V(I, i).split(",")
  ), [s, a, c, o, d, h] = r.split(/[ /]/), [
    l,
    y,
    v,
    S,
    A,
    C
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    n,
    [">"],
    [t],
    l,
    y,
    v,
    S,
    A,
    C
  ).map((I) => I.join("")).join(",");
}
function Yt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${E(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function vt(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = q(e), [s, a, c, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return L;
  if (i === 0) return `${t}[name="${a}"]`;
  const d = $[t].parents.flatMap(
    (y) => y === "SDI" ? vt(y, r, i - 1).split(",") : V(y, r).split(",")
  ).filter((y) => !y.startsWith(L));
  if (d.length === 0) return L;
  const [h, l] = [
    [`[name="${a}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return G(
    d,
    [">"],
    [t],
    h,
    l
  ).map((y) => y.join("")).join(",");
}
function Jn(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${E(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Qn(t, e) {
  const [i, r] = q(e), [n, s] = r.split(" "), a = parseFloat(s), c = $[t].parents.flatMap(
    (h) => V(h, i).split(",")
  ), [o, d] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return G(
    c,
    [">"],
    [t],
    o,
    d
  ).map((h) => h.join("")).join(",");
}
function Yn(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function es(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? L : `${t}[iedName="${i}"][apName="${r}"]`;
}
function ei(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function ti(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? L : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function ts(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${E(t.parentElement)}>${e}`;
}
function is(t, e) {
  const [i, r] = q(e), [n, s] = [
    $[t].parents.flatMap(
      (a) => V(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return G(n, [">"], [t], s).map((a) => a.join("")).join(",");
}
function rs(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${E(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${E(t.parentElement)}>${i} [${r}]`;
}
function ns(t, e) {
  const [i, r] = q(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, c, o] = [
    $[t].parents.flatMap(
      (d) => V(d, i).split(",")
    ),
    [`[type="${n}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return G(
    a,
    [">"],
    [t],
    c,
    o
  ).map((d) => d.join("")).join(",");
}
function ss(t) {
  return `${E(t.parentElement)}>${t.getAttribute("ord")}`;
}
function as(t, e) {
  const [i, r] = q(e);
  return `${V("EnumType", i)}>${t}[ord="${r}"]`;
}
function cs(t) {
  return `${E(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function os(t, e) {
  const [i, r] = q(e), [n, s] = r.split("	"), [a] = [
    $[t].parents.flatMap(
      (c) => V(c, i).split(",")
    )
  ];
  return G(
    a,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [s]
  ).map((c) => c.join("")).join(",");
}
function ds() {
  return "";
}
function ls() {
  return ":root";
}
function k(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${E(t.parentElement)}>${t.getAttribute("name")}`;
}
function _(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = q(e);
  if (!n) return L;
  if (i === 0) return `${t}[name="${n}"]`;
  const s = $[t].parents;
  if (!s) return L;
  const a = s.flatMap(
    (c) => $[c].selector === $.Substation.selector ? _(c, r, i - 1).split(",") : V(c, r).split(",")
  ).filter((c) => !c.startsWith(L));
  return a.length === 0 ? L : G(a, [">"], [t], [`[name="${n}"]`]).map((c) => c.join("")).join(",");
}
function f(t) {
  return E(t.parentElement).toString();
}
function b(t, e) {
  const i = $[t].parents;
  if (!i) return L;
  const r = i.flatMap((n) => V(n, e).split(",")).filter((n) => !n.startsWith(L));
  return r.length === 0 ? L : G(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Ue(t) {
  return `#${t.id}`;
}
function Be(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : L;
}
const zi = [
  "TransformerWinding",
  "ConductingEquipment"
], Gi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...zi
], St = ["Substation", "VoltageLevel", "Bay"], qi = ["Process", "Line"], Ui = ["EqSubFunction", "EqFunction"], ps = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Gi,
  ...St,
  ...qi,
  ...Ui
], Bi = ["ConnectivityNode", ...ps], us = ["GOOSESecurity", "SMVSecurity"], hs = ["SubNetwork", ...us, ...Bi], ms = ["BDA", "DA"], fs = ["SampledValueControl", "GSEControl"], bs = ["LogControl", "ReportControl"], ys = [...fs, ...bs], gs = ["GSE", "SMV"], vs = [
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
  ...ys,
  ...gs,
  ...ms
], ge = ["LN0", "LN"], Ss = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], xs = ["Subject", "IssuerName"], _s = ["MinTime", "MaxTime"], ks = ["LNodeType", "DOType", "DAType", "EnumType"], As = [
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
], Is = ["DynDataSet", "ConfDataSet"], Cs = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Is
], Es = ["ConfLogControl", "ConfSigRef"], ws = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Ts = ["SCL", ...hs, ...vs, ...ks], Hi = [
  ...Ts,
  ...Ss,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...xs,
  ..._s,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ge,
  ...As,
  "DynAssociation",
  "SettingGroups",
  ...Cs,
  ...Es,
  ...ws,
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
], Ps = new Set(Hi);
function Lt(t) {
  return Ps.has(t);
}
const Qe = ["Text", "Private"], he = [...Qe], R = [...Qe], He = [...Qe], ii = [...R, "Val"], ji = [...he, "LNode"], fe = [...ji], xt = [...fe], nt = [
  ...fe,
  "PowerTransformer",
  "GeneralEquipment"
], ri = [
  ...xt,
  "Terminal"
], ni = [...R, "Address"], Wi = [...he], si = [...Wi, "IEDName"], ai = [
  ...R,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], ci = [
  ...fe,
  "GeneralEquipment",
  "Function"
], oi = [...Wi, "TrgOps"], di = [
  ...fe,
  "GeneralEquipment",
  "EqSubFunction"
], $ = {
  AccessControl: {
    identity: f,
    selector: b,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: k,
    selector: _,
    parents: ["IED"],
    children: [
      ...he,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: f,
    selector: b,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: On,
    selector: Mn,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: f,
    selector: b,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: k,
    selector: _,
    parents: ["DAType"],
    children: [...ii]
  },
  BitRate: {
    identity: f,
    selector: b,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: k,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...nt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Kn,
    selector: Zn,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: f,
    selector: b,
    parents: ["SCL"],
    children: [...R, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: k,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ri,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: f,
    selector: b,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Yn,
    selector: es,
    parents: ["SubNetwork"],
    children: [...R, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: k,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...ji]
  },
  DA: {
    identity: k,
    selector: _,
    parents: ["DOType"],
    children: [...ii]
  },
  DAI: {
    identity: Yt,
    selector: vt,
    parents: ["DOI", "SDI"],
    children: [...R, "Val"]
  },
  DAType: {
    identity: Ue,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...He, "BDA", "ProtNs"]
  },
  DO: {
    identity: k,
    selector: _,
    parents: ["LNodeType"],
    children: [...R]
  },
  DOI: {
    identity: k,
    selector: _,
    parents: [...ge],
    children: [...R, "SDI", "DAI"]
  },
  DOType: {
    identity: Ue,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...He, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: k,
    selector: _,
    parents: [...ge],
    children: [...he, "FCDA"]
  },
  DataSetDirectory: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: f,
    selector: b,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ue,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...He, "EnumVal"]
  },
  EnumVal: {
    identity: ss,
    selector: as,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: k,
    selector: _,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...di]
  },
  EqSubFunction: {
    identity: k,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...di]
  },
  ExtRef: {
    identity: Hn,
    selector: jn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Un,
    selector: Bn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: k,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...fe,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: k,
    selector: _,
    parents: [
      "SubFunction",
      "Function",
      ...qi,
      ...Ui,
      ...St
    ],
    children: [...xt, "EqFunction"]
  },
  GetCBValues: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: k,
    selector: _,
    parents: ["AccessPoint"],
    children: [...he, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ei,
    selector: ti,
    parents: ["ConnectedAP"],
    children: [...ni, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: k,
    selector: _,
    parents: ["LN0"],
    children: [...si, "Protocol"]
  },
  GSESettings: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: f,
    selector: b,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: f,
    selector: b,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Nn,
    selector: Dn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: k,
    selector: _,
    parents: ["SCL"],
    children: [...R, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Gn,
    selector: qn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: f,
    selector: b,
    parents: [...ge],
    children: [...R, "ExtRef"]
  },
  IssuerName: {
    identity: f,
    selector: b,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: $n,
    selector: Fn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Vn,
    selector: zn,
    parents: ["Server"],
    children: [...R, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Wn,
    selector: Xn,
    parents: ["AccessPoint", "LDevice"],
    children: [...ai]
  },
  LN0: {
    identity: f,
    selector: b,
    parents: ["LDevice"],
    children: [
      ...ai,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Rn,
    selector: Ln,
    parents: [...Bi],
    children: [...R]
  },
  LNodeType: {
    identity: Ue,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...He, "DO"]
  },
  Line: {
    identity: k,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...ci,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: k,
    selector: _,
    parents: [...ge],
    children: [...R]
  },
  LogControl: {
    identity: k,
    selector: _,
    parents: [...ge],
    children: [...oi]
  },
  LogSettings: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: f,
    selector: b,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: f,
    selector: b,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: f,
    selector: b,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Jt,
    selector: Qt,
    parents: ["TransformerWinding"],
    children: [...R]
  },
  OptFields: {
    identity: f,
    selector: b,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: rs,
    selector: ns,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: ts,
    selector: is,
    parents: ["ConnectedAP"],
    children: [...R, "P"]
  },
  PowerTransformer: {
    identity: k,
    selector: _,
    parents: [...St],
    children: [
      ...xt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => L,
    parents: [],
    children: []
  },
  Process: {
    identity: k,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...ci,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: cs,
    selector: os,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: f,
    selector: b,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: k,
    selector: _,
    parents: [...ge],
    children: [...oi, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: f,
    selector: b,
    parents: ["ReportControl"],
    children: [...R, "ClientLN"]
  },
  SamplesPerSec: {
    identity: f,
    selector: b,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: k,
    selector: _,
    parents: ["LN0"],
    children: [...si, "SmvOpts"]
  },
  SecPerSamples: {
    identity: f,
    selector: b,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: ds,
    selector: ls,
    parents: [],
    children: [
      ...Qe,
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
    identity: Yt,
    selector: vt,
    parents: ["DOI", "SDI"],
    children: [...R, "SDI", "DAI"]
  },
  SDO: {
    identity: k,
    selector: _,
    parents: ["DOType"],
    children: [...he]
  },
  Server: {
    identity: f,
    selector: b,
    parents: ["AccessPoint"],
    children: [
      ...R,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: f,
    selector: b,
    parents: ["AccessPoint"],
    children: [...R]
  },
  Services: {
    identity: f,
    selector: b,
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
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: f,
    selector: b,
    parents: ["LN0"],
    children: [...R]
  },
  SettingGroups: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: f,
    selector: b,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: f,
    selector: b,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: ei,
    selector: ti,
    parents: ["ConnectedAP"],
    children: [...ni]
  },
  SmvOpts: {
    identity: f,
    selector: b,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: k,
    selector: _,
    parents: ["AccessPoint"],
    children: [...he, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: k,
    selector: _,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...zi
    ],
    children: [...fe, "EqFunction"]
  },
  SubFunction: {
    identity: k,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...fe,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: k,
    selector: _,
    parents: ["Communication"],
    children: [...he, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: f,
    selector: b,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: k,
    selector: _,
    parents: ["SCL"],
    children: [...nt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: k,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...fe, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Jt,
    selector: Qt,
    parents: [...Gi],
    children: [...R]
  },
  Text: {
    identity: f,
    selector: b,
    parents: Hi.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: f,
    selector: b,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: k,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...ri,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: f,
    selector: b,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Jn,
    selector: Qn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: f,
    selector: b,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: k,
    selector: _,
    parents: ["Substation"],
    children: [...nt, "Voltage", "Bay", "Function"]
  }
};
function V(t, e) {
  return typeof e != "string" ? L : Lt(t) ? $[t].selector(t, e) : t;
}
function ve(t, e, i) {
  if (typeof i != "string" || !Lt(e)) return null;
  const r = t.querySelector($[e].selector(e, i));
  return r === null || We(r) ? r : Array.from(
    t.querySelectorAll($[e].selector(e, i))
  ).find(We) ?? null;
}
function E(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Lt(e) ? $[e].identity(t) : NaN;
}
function G(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Xi(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Xi(i, e))
      );
    default:
      return 0;
  }
}
function We(t) {
  return !t.closest("Private");
}
const Ns = 99;
Array(Ns).fill(1).map((t, e) => `${e + 1}`);
function Ds(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const Rs = {
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*"
}, Ls = {
  cbName: 32
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
const li = /* @__PURE__ */ new WeakMap(), pi = 2147483647, $s = Xe((...t) => (e) => {
  let i = li.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: pi,
    values: []
  }, li.set(e, i));
  const r = i.values;
  let n = r.length;
  i.values = t;
  for (let s = 0; s < t.length && !(s > i.lastRenderedIndex); s++) {
    const a = t[s];
    if (Ke(a) || typeof a.then != "function") {
      e.setValue(a), i.lastRenderedIndex = s;
      break;
    }
    s < n && a === r[s] || (i.lastRenderedIndex = pi, n = 0, Promise.resolve(a).then((c) => {
      const o = i.values.indexOf(a);
      o > -1 && o < i.lastRenderedIndex && (i.lastRenderedIndex = o, e.setValue(c), e.commit());
    }));
  }
});
var Fs = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, le = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Os(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Fs(e, i, n), n;
};
const Ms = p`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${g("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let te = class extends Se {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: p`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Xi(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(t) {
    const e = {};
    for (const i of t) {
      let r = e;
      for (const n of i)
        Object.prototype.hasOwnProperty.call(r, n) || (r[n] = {}), r = r[n];
    }
    this.selection = e;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(t) {
    this.paths = [t];
  }
  getTitle(t) {
    return t.join("/");
  }
  getDisplayString(t, e) {
    return t;
  }
  getPaths(t) {
    let e = Object.keys(this.selection).map((r) => [r]), i = t ?? this.depth - 1;
    for (; i-- > 0; )
      e = e.flatMap((r) => {
        let n = this.selection;
        for (const a of r) n = n[a];
        const s = Object.keys(n).map((a) => r.concat(a));
        return s.length === 0 ? [r] : s;
      });
    return t === void 0 ? e : e.filter((r) => r.length > t);
  }
  multiSelect(t, e, i) {
    let r = this.selection;
    for (const n of e) r = r[n];
    r && r[i] ? delete r[i] : r[i] = {};
  }
  singleSelect(t, e, i) {
    this.path[e.length] === i ? this.path = e : this.path = e.concat(i);
  }
  async select(t, e) {
    const i = t.target.selected.value;
    this.multi ? this.multiSelect(t, e, i) : this.singleSelect(t, e, i), this.requestUpdate(), await this.updateComplete, await new Promise((r) => setTimeout(r, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(t, e) {
    return p`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => p`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(t.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(t.concat(i)))}
            >${this.getDisplayString(i, t)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(t) {
    const i = this.getPaths(t).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: s, path: a } of i)
      (n || s.length > 0) && r.push(
        p`${se(n)} ${this.renderDirectory(a, s)}`
      );
    return r.length === 0 ? p`` : p`<div class="column">${r}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), p`<div class="pane">
      ${t.map((e) => $s(e, Ms))}
    </div>`;
  }
};
te.styles = Ee`
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
le([
  m({ type: Object })
], te.prototype, "selection", 2);
le([
  m({ type: Boolean })
], te.prototype, "multi", 2);
le([
  m({ type: Number })
], te.prototype, "depth", 1);
le([
  m({ type: Array })
], te.prototype, "paths", 1);
le([
  m({ type: Array })
], te.prototype, "path", 1);
le([
  m({ attribute: !1 })
], te.prototype, "read", 2);
le([
  m({ attribute: !1 })
], te.prototype, "loaded", 2);
le([
  B("div")
], te.prototype, "container", 2);
te = le([
  de("finder-list")
], te);
function Ki(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function Zi(t, e) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), s = ve(t, r, n);
    return s ? {
      path: i,
      header: void 0,
      entries: e(s).map(
        (a) => `${a.tagName}: ${E(a)}`
      )
    } : { path: i, header: p`<p>${g("error")}</p>`, entries: [] };
  };
}
function Vs(t) {
  return t.tagName === "SCL" ? Array.from(t.querySelectorAll("IED")).filter(We) : [];
}
function zs(t) {
  return p`<finder-list
    path="${JSON.stringify(["SCL: "])}"
    .read=${Zi(t, Vs)}
    .getDisplayString=${Ki}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Ji(t) {
  if (["LDevice", "Server"].includes(t.tagName))
    return Array.from(t.children).filter(
      (i) => i.tagName === "LDevice" || i.tagName === "LN0" || i.tagName === "LN"
    );
  const e = t.tagName === "LN" || t.tagName === "LN0" ? t.getAttribute("lnType") : t.getAttribute("type");
  return Array.from(
    t.ownerDocument.querySelectorAll(
      `LNodeType[id="${e}"] > DO, DOType[id="${e}"] > SDO, DOType[id="${e}"] > DA, DAType[id="${e}"] > BDA`
    )
  );
}
function _t(t) {
  return p`<finder-list
    multi
    .paths=${[["Server: " + E(t)]]}
    .read=${Zi(t.ownerDocument, Ji)}
    .getDisplayString=${Ki}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Qi(t, e) {
  const [i, r] = e[e.length - 1].split(": "), n = ve(t.ownerDocument, i, r);
  if (!n || Ji(n).length > 0) return;
  const s = e.find((C) => C.startsWith("LN"));
  if (!s) return;
  const [a, c] = s.split(": "), o = ve(t.ownerDocument, a, c);
  if (!o) return;
  const d = o.closest("LDevice")?.getAttribute("inst"), h = o.getAttribute("prefix") ?? "", l = o.getAttribute("lnClass"), y = o.getAttribute("inst") && o.getAttribute("inst") !== "" ? o.getAttribute("inst") : null;
  let v = "", S = "", A = "";
  for (const C of e) {
    const [I, w] = C.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(I)) continue;
    const D = ve(t.ownerDocument, I, w);
    if (!D) return;
    const Y = D.getAttribute("name");
    I === "DO" && (v = Y), I === "SDO" && (v = v + "." + Y), I === "DA" && (S = Y, A = D.getAttribute("fc") ?? ""), I === "BDA" && (S = S + "." + Y);
  }
  if (!(!d || !l || !v || !S || !A))
    return ae(t.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: h,
      lnClass: l,
      lnInst: y,
      doName: v,
      daName: S,
      fc: A
    });
}
function Gs(t) {
  return (e, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], s = [];
    for (const a of n) {
      const c = Qi(t, a);
      c && s.push({
        new: {
          parent: t,
          element: c,
          reference: null
        }
      });
    }
    return s;
  };
}
function qs(t) {
  const e = t.closest("Server");
  return [
    {
      title: g("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Gs(t)
      },
      content: [e ? _t(e) : p``]
    }
  ];
}
function Us(t) {
  return (e) => {
    e.dispatchEvent(Je(() => qs(t)));
  };
}
function Bs(t) {
  return (e, i) => {
    const r = e.find((d) => d.label === "name").value, n = z(e.find((d) => d.label === "desc")), s = t.getAttribute("name"), a = [];
    if (!(r === s && n === t.getAttribute("desc"))) {
      const d = gt(t, { name: r, desc: n });
      a.push({
        old: { element: t },
        new: { element: d }
      });
    }
    const c = r !== s ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${s}], GSEControl[datSet=${s}],SampledValueControl[datSet=${s}] `
      ) ?? []
    ).map((d) => {
      const h = gt(d, { datSet: r });
      return { old: { element: d }, new: { element: h } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((d) => ve(t, "FCDA", d.value)).filter((d) => d).map((d) => ({
        old: {
          parent: t,
          element: d,
          reference: d.nextSibling
        }
      })),
      ...a,
      ...c
    ];
  };
}
function Hs(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: g("save"),
        icon: "save",
        action: Bs(t)
      },
      menuActions: [
        {
          icon: "add",
          label: g("dataset.fcda.add"),
          action: Us(t)
        }
      ],
      content: [
        p`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${g("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${g("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        p`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (r) => p`<mwc-check-list-item selected value="${E(r)}"
                >${E(r).split(">").pop()}</mwc-check-list-item
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
}, js = {
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
}, Ws = {
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
function Yi(t) {
  return [
    p`<mwc-formfield label="${g("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    p`${Object.entries(t.attributes).map(
      ([e, i]) => p`<wizard-textfield
          label="${e}"
          ?nullable=${Ws[e]}
          .maybeValue=${i}
          pattern="${se(js[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Xs(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function er(t, e, i) {
  const r = ae(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([n, s]) => s !== null).forEach(([n, s]) => {
    const a = n, c = ae(e.ownerDocument, "P", { type: a });
    i && c.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + n
    ), c.textContent = s, r.appendChild(c);
  }), r;
}
function Ks(t, e, i) {
  const r = [], n = er(e, t, i), s = t.querySelector("Address");
  return s !== null && !Xs(s, n) ? (r.push({
    old: {
      parent: t,
      element: s,
      reference: s.nextSibling
    }
  }), r.push({
    new: {
      parent: t,
      element: n,
      reference: s.nextSibling
    }
  })) : s === null && r.push({
    new: {
      parent: t,
      element: n
    }
  }), r;
}
function ui(t, e, i, r) {
  if (e === null) {
    const s = ae(r.ownerDocument, t, {
      unit: "s",
      multiplier: "m"
    });
    return s.textContent = i, {
      new: {
        parent: r,
        element: s,
        reference: r.firstElementChild
      }
    };
  }
  if (i === null)
    return {
      old: {
        parent: r,
        element: e,
        reference: e.nextSibling
      }
    };
  const n = e.cloneNode(!1);
  return n.textContent = i, {
    old: { element: e },
    new: { element: n }
  };
}
function Zs(t) {
  return (e, i) => {
    const r = {
      actions: [],
      title: g("gse.action.addaddress", {
        identity: E(t)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, s = {};
    s["MAC-Address"] = z(
      e.find((d) => d.label === "MAC-Address")
    ), s.APPID = z(e.find((d) => d.label === "APPID")), s["VLAN-ID"] = z(
      e.find((d) => d.label === "VLAN-ID")
    ), s["VLAN-PRIORITY"] = z(
      e.find((d) => d.label === "VLAN-PRIORITY")
    ), Ks(t, s, n).forEach((d) => {
      r.actions.push(d);
    });
    const c = z(e.find((d) => d.label === "MinTime")), o = z(e.find((d) => d.label === "MaxTime"));
    return c !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && r.actions.push(
      ui(
        "MinTime",
        t.querySelector("MinTime"),
        c,
        t
      )
    ), o !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && r.actions.push(
      ui(
        "MaxTime",
        t.querySelector("MaxTime"),
        o,
        t
      )
    ), [r];
  };
}
function Js(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, r = Array.from(t.querySelectorAll("Address > P")).some(
    (s) => s.getAttribute("xsi:type")
  ), n = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((s) => {
    n[s] || (n[s] = t.querySelector(`Address > P[type="${s}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: g("save"),
        icon: "save",
        action: Zs(t)
      },
      content: [
        ...Yi({ hasInstType: r, attributes: n }),
        p`<wizard-textfield
          label="MinTime"
          .maybeValue=${e}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        p`<wizard-textfield
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
const Qs = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function tr(t) {
  return t.ownerDocument.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${t.closest("IED")?.getAttribute("name")}"][apName="${t.closest("AccessPoint")?.getAttribute("name")}"]`
  );
}
function ir(t) {
  return !!tr(t);
}
function Ys(t) {
  const e = t.split("-").join("");
  return ("0" + (parseInt(e, 16) + 1).toString(16).toUpperCase()).match(/.{1,2}/g).join("-");
}
function ea(t, e) {
  const i = "01-0C-CD-01-01-FF", r = "01-0C-CD-01-00-00", n = Array.from(t.querySelectorAll("Address > P")).filter((a) => a.getAttribute("type") === "MAC-Address").map((a) => a.innerHTML.trim());
  let s = r;
  for (; s !== i; ) {
    if (!n.includes(s)) return s;
    s = Ys(s);
  }
  return n.includes(s) ? null : s;
}
function ta(t) {
  return (parseInt(t, 16) + 1).toString(16).toUpperCase().padStart(4, "0");
}
function ia(t) {
  const e = "FFFF", i = "0001", r = Array.from(t.querySelectorAll("Address > P")).filter((s) => s.getAttribute("type") === "APPID").map((s) => s.innerHTML.trim());
  if (r.length === 0) return null;
  let n = i;
  for (; n !== e; ) {
    if (!r.includes(n)) return n;
    n = ta(n);
  }
  return r.includes(n) ? null : n;
}
function rr(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), r = t.closest("AccessPoint")?.getAttribute("name"), n = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > GSE[ldInst="${n}"][cbName="${e}"]`
  );
}
function kt(t) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${g("scl.name")}"
      required
      validationMessage="${g("textfield.required")}"
      pattern="${Rs.asciName}"
      maxLength="${Ls.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${g("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${g("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => p`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${g("scl.id")}"
      required
      validationMessage="${g("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${g("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${g("scl.securityEnable")}"
      >${Qs.map(
      (e) => p`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function hi(t) {
  return (e, i) => {
    const r = [], n = {};
    [
      "name",
      "desc",
      "type",
      "appID",
      "fixedOffs",
      "securityEnabled"
    ].forEach((l) => {
      n[l] = z(e.find((y) => y.label === l));
    }), n.confRev = "1";
    const a = n.name + "sDataSet";
    n.datSet = a;
    const c = ae(
      t.ownerDocument,
      "GSEControl",
      n
    );
    if (r.push({ new: { parent: t, element: c } }), ir(t)) {
      const l = tr(t), y = ae(t.ownerDocument, "GSE", {
        ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: n.name
      });
      r.push({ new: { parent: l, element: y } });
      const v = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, S = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((ie) => {
        S[ie] = z(e.find((we) => we.label === ie));
      });
      const C = er(S, y, v);
      r.push({ new: { parent: y, element: C } });
      const I = z(e.find((ie) => ie.label === "MinTime")), w = ae(t.ownerDocument, "MinTime", {
        unit: "s",
        multiplier: "m"
      });
      w.textContent = I, r.push({ new: { parent: y, element: w } });
      const D = z(e.find((ie) => ie.label === "MaxTime")), Y = ae(t.ownerDocument, "MaxTime", {
        unit: "s",
        multiplier: "m"
      });
      Y.textContent = D, r.push({ new: { parent: y, element: Y } });
    }
    const o = ae(t.ownerDocument, "DataSet", {
      name: a
    });
    r.push({ new: { parent: t, element: o } });
    const h = i.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const l of h) {
      const y = Qi(t, l);
      y && r.push({ new: { parent: o, element: y } });
    }
    return [
      {
        title: g("editing.created", { name: "GSEControl" }),
        actions: r
      }
    ];
  };
}
function nr(t) {
  const e = t.closest("Server"), i = Mi(t, "GSEControl"), r = null, n = "GOOSE", s = "", a = null, c = null, o = !0, d = {
    "MAC-Address": ea(t.ownerDocument),
    APPID: ia(t.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return ir(t) ? [
    {
      title: g("wizard.title.add", { tagName: "GSEControl" }),
      content: kt({
        name: i,
        desc: r,
        type: n,
        appID: s,
        fixedOffs: a,
        securityEnabled: c
      })
    },
    {
      title: g("wizard.title.add", { tagName: "GSE" }),
      content: [
        ...Yi({ hasInstType: o, attributes: d }),
        p`<wizard-textfield
              label="MinTime"
              .maybeValue=${"10"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`,
        p`<wizard-textfield
              label="MaxTime"
              .maybeValue=${"1000"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`
      ]
    },
    {
      title: g("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: g("save"),
        action: hi(t)
      },
      content: [e ? _t(e) : p``]
    }
  ] : [
    {
      title: g("wizard.title.add", { tagName: "GSEControl" }),
      content: kt({
        name: i,
        desc: r,
        type: n,
        appID: s,
        fixedOffs: a,
        securityEnabled: c
      })
    },
    {
      title: g("wizard.title.add", { tagName: "GSE" }),
      content: [
        p`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${g("gse.missingaccp")}
            </h3>`
      ]
    },
    {
      title: g("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: g("save"),
        action: hi(t)
      },
      content: [e ? _t(e) : p``]
    }
  ];
}
function ra(t) {
  return (e, i) => {
    const n = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (n.length === 0) return [];
    const [s, a] = n.pop().split(": ");
    if (s !== "IED") return [];
    const c = ve(t, s, a);
    if (!c) return [];
    const o = c.querySelector("LN0");
    return o ? [() => nr(o)] : [];
  };
}
function na(t) {
  return [
    {
      title: g("gsecontrol.wizard.location"),
      primary: {
        icon: "",
        label: g("next"),
        action: ra(t)
      },
      content: [zs(t)]
    }
  ];
}
function sa(t) {
  return () => t.tagName === "IED" && t.querySelector("LN0") ? [() => nr(t.querySelector("LN0"))] : [() => na(t.ownerDocument)];
}
function aa(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = rr(t), r = Array.from(
    t.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (c) => c.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && r && n.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), i && n.push({
    old: {
      parent: i.parentElement,
      element: i,
      reference: i.nextSibling
    }
  });
  const s = t.getAttribute("name"), a = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: g("controlblock.action.remove", {
      type: t.tagName,
      name: s,
      iedName: a
    }),
    actions: n
  };
}
function ca(t) {
  return (e) => {
    const i = aa(t);
    i && e.dispatchEvent(Ds(i)), e.dispatchEvent(Vi());
  };
}
function oa(t) {
  return (e) => {
    e.dispatchEvent(Je(() => Hs(t)));
  };
}
function da(t) {
  return (e) => {
    e.dispatchEvent(Je(() => Js(t)));
  };
}
function la(t) {
  return (e) => {
    const i = e.find((d) => d.label === "name").value, r = z(e.find((d) => d.label === "desc")), n = z(e.find((d) => d.label === "type")), s = z(e.find((d) => d.label === "appID")), a = z(e.find((d) => d.label === "fixedOffs")), c = z(
      e.find((d) => d.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && r === t.getAttribute("desc") && n === t.getAttribute("type") && s === t.getAttribute("appID") && a === t.getAttribute("fixedOffs") && c === t.getAttribute("securityEnabled"))
      return [];
    const o = gt(t, {
      name: i,
      desc: r,
      type: n,
      appID: s,
      fixedOffs: a,
      securityEnabled: c
    });
    return [{ old: { element: t }, new: { element: o } }];
  };
}
function pa(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), r = t.getAttribute("type"), n = t.getAttribute("appID"), s = t.getAttribute("fixedOffs"), a = t.getAttribute("securityEnabled"), c = rr(t), o = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), d = [];
  return d.push({
    icon: "delete",
    label: g("remove"),
    action: ca(t)
  }), o && d.push({
    icon: "edit",
    label: g("scl.DataSet"),
    action: oa(o)
  }), c && d.push({
    icon: "edit",
    label: g("scl.Communication"),
    action: da(c)
  }), [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: g("save"),
        action: la(t)
      },
      menuActions: d,
      content: [
        ...kt({
          name: e,
          desc: i,
          type: r,
          appID: n,
          fixedOffs: s,
          securityEnabled: a
        })
      ]
    }
  ];
}
function Ia(t) {
  const e = Array.from(t.querySelectorAll("GSEControl")).filter(
    We
  ), i = t.querySelector("LN0") ? {
    icon: "add",
    label: g("GOOSE"),
    action: sa(t)
  } : void 0;
  return [
    {
      title: g("wizard.title.select", { tagName: "GSEcontrol" }),
      primary: i,
      content: [
        p`<filtered-list
          @selected=${(r) => {
          const n = r.target.selected.value, s = ve(t, "GSEControl", n);
          s && r.target.dispatchEvent(
            Je(() => pa(s))
          );
        }}
          >${e.map(
          (r) => p`<mwc-list-item twoline value="${E(r)}"
                ><span>${r.getAttribute("name")}</span
                ><span slot="secondary"
                  >${E(r)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
export {
  kt as contentGseControlWizard,
  nr as createGseControlWizard,
  pa as editGseControlWizard,
  rr as getGSE,
  na as gseControlParentSelector,
  ca as removeGseControl,
  aa as removeGseControlAction,
  Ia as selectGseControlWizard,
  la as updateGseControlAction
};
