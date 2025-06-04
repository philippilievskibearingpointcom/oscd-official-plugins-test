import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Ze } from "@material/mwc-textfield";
import { Select as Ye } from "@material/mwc-select";
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
const Ee = /* @__PURE__ */ new WeakMap(), Re = (t) => (...e) => {
  const i = t(...e);
  return Ee.set(i, !0), i;
}, W = (t) => typeof t == "function" && Ee.has(t);
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
const ge = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, ce = (t, e, i = null) => {
  for (; e !== i; ) {
    const r = e.nextSibling;
    t.removeChild(e), e = r;
  }
};
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
const _ = {}, be = {};
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
const D = `{{lit-${String(Math.random()).slice(2)}}}`, Te = `<!--${D}-->`, ye = new RegExp(`${D}|${Te}`), N = "$lit$";
class Oe {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const r = [], a = [], n = document.createTreeWalker(i.content, 133, null, !1);
    let l = 0, s = -1, o = 0;
    const { strings: f, values: { length: b } } = e;
    for (; o < b; ) {
      const c = n.nextNode();
      if (c === null) {
        n.currentNode = a.pop();
        continue;
      }
      if (s++, c.nodeType === 1) {
        if (c.hasAttributes()) {
          const v = c.attributes, { length: E } = v;
          let w = 0;
          for (let k = 0; k < E; k++)
            Se(v[k].name, N) && w++;
          for (; w-- > 0; ) {
            const k = f[o], q = Y.exec(k)[2], M = q.toLowerCase() + N, R = c.getAttribute(M);
            c.removeAttribute(M);
            const A = R.split(ye);
            this.parts.push({ type: "attribute", index: s, name: q, strings: A }), o += A.length - 1;
          }
        }
        c.tagName === "TEMPLATE" && (a.push(c), n.currentNode = c.content);
      } else if (c.nodeType === 3) {
        const v = c.data;
        if (v.indexOf(D) >= 0) {
          const E = c.parentNode, w = v.split(ye), k = w.length - 1;
          for (let q = 0; q < k; q++) {
            let M, R = w[q];
            if (R === "")
              M = V();
            else {
              const A = Y.exec(R);
              A !== null && Se(A[2], N) && (R = R.slice(0, A.index) + A[1] + A[2].slice(0, -N.length) + A[3]), M = document.createTextNode(R);
            }
            E.insertBefore(M, c), this.parts.push({ type: "node", index: ++s });
          }
          w[k] === "" ? (E.insertBefore(V(), c), r.push(c)) : c.data = w[k], o += k;
        }
      } else if (c.nodeType === 8)
        if (c.data === D) {
          const v = c.parentNode;
          (c.previousSibling === null || s === l) && (s++, v.insertBefore(V(), c)), l = s, this.parts.push({ type: "node", index: s }), c.nextSibling === null ? c.data = "" : (r.push(c), s--), o++;
        } else {
          let v = -1;
          for (; (v = c.data.indexOf(D, v + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const c of r)
      c.parentNode.removeChild(c);
  }
}
const Se = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, qe = (t) => t.index !== -1, V = () => document.createComment(""), Y = (
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
class ee {
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
    const e = ge ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, a = document.createTreeWalker(e, 133, null, !1);
    let n = 0, l = 0, s, o = a.nextNode();
    for (; n < r.length; ) {
      if (s = r[n], !qe(s)) {
        this.__parts.push(void 0), n++;
        continue;
      }
      for (; l < s.index; )
        l++, o.nodeName === "TEMPLATE" && (i.push(o), a.currentNode = o.content), (o = a.nextNode()) === null && (a.currentNode = i.pop(), o = a.nextNode());
      if (s.type === "node") {
        const f = this.processor.handleTextExpression(this.options);
        f.insertAfterNode(o.previousSibling), this.__parts.push(f);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(o, s.name, s.strings, this.options));
      n++;
    }
    return ge && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const ve = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), et = ` ${D} `;
class Me {
  constructor(e, i, r, a) {
    this.strings = e, this.values = i, this.type = r, this.processor = a;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let i = "", r = !1;
    for (let a = 0; a < e; a++) {
      const n = this.strings[a], l = n.lastIndexOf("<!--");
      r = (l > -1 || r) && n.indexOf("-->", l + 1) === -1;
      const s = Y.exec(n);
      s === null ? i += n + (r ? et : Te) : i += n.substr(0, s.index) + s[1] + s[2] + N + s[3] + D;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return ve !== void 0 && (i = ve.createHTML(i)), e.innerHTML = i, e;
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
const de = (t) => t === null || !(typeof t == "object" || typeof t == "function"), te = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Ie {
  constructor(e, i, r) {
    this.dirty = !0, this.element = e, this.name = i, this.strings = r, this.parts = [];
    for (let a = 0; a < r.length - 1; a++)
      this.parts[a] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new U(this);
  }
  _getValue() {
    const e = this.strings, i = e.length - 1, r = this.parts;
    if (i === 1 && e[0] === "" && e[1] === "") {
      const n = r[0].value;
      if (typeof n == "symbol")
        return String(n);
      if (typeof n == "string" || !te(n))
        return n;
    }
    let a = "";
    for (let n = 0; n < i; n++) {
      a += e[n];
      const l = r[n];
      if (l !== void 0) {
        const s = l.value;
        if (de(s) || !te(s))
          a += typeof s == "string" ? s : String(s);
        else
          for (const o of s)
            a += typeof o == "string" ? o : String(o);
      }
    }
    return a += e[i], a;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class U {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== _ && (!de(e) || e !== this.value) && (this.value = e, W(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; W(this.value); ) {
      const e = this.value;
      this.value = _, e(this);
    }
    this.value !== _ && this.committer.commit();
  }
}
class B {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(V()), this.endNode = e.appendChild(V());
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
    e.__insert(this.startNode = V()), e.__insert(this.endNode = V());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = V()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; W(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = _, i(this);
    }
    const e = this.__pendingValue;
    e !== _ && (de(e) ? e !== this.value && this.__commitText(e) : e instanceof Me ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : te(e) ? this.__commitIterable(e) : e === be ? (this.value = be, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof ee && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new ee(i, e.processor, this.options), a = r._clone();
      r.update(e.values), this.__commitNode(a), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, a;
    for (const n of e)
      a = i[r], a === void 0 && (a = new B(this.options), i.push(a), r === 0 ? a.appendIntoPart(this) : a.insertAfterPart(i[r - 1])), a.setValue(n), a.commit(), r++;
    r < i.length && (i.length = r, this.clear(a && a.endNode));
  }
  clear(e = this.startNode) {
    ce(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class tt {
  constructor(e, i, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; W(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = _, i(this);
    }
    if (this.__pendingValue === _)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = _;
  }
}
class it extends Ie {
  constructor(e, i, r) {
    super(e, i, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new ue(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class ue extends U {
}
let Ge = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Ge = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
class rt {
  constructor(e, i, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = r, this.__boundHandleEvent = (a) => this.handleEvent(a);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; W(this.__pendingValue); ) {
      const n = this.__pendingValue;
      this.__pendingValue = _, n(this);
    }
    if (this.__pendingValue === _)
      return;
    const e = this.__pendingValue, i = this.value, r = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), a = e != null && (i == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), a && (this.__options = at(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = _;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const at = (t) => t && (Ge ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
class nt {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, i, r, a) {
    const n = i[0];
    return n === "." ? new it(e, i.slice(1), r).parts : n === "@" ? [new rt(e, i.slice(1), a.eventContext)] : n === "?" ? [new tt(e, i.slice(1), r)] : new Ie(e, i, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new B(e);
  }
}
const lt = new nt();
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
function st(t) {
  let e = H.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, H.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const r = t.strings.join(D);
  return i = e.keyString.get(r), i === void 0 && (i = new Oe(t, t.getTemplateElement()), e.keyString.set(r, i)), e.stringsArray.set(t.strings, i), i;
}
const H = /* @__PURE__ */ new Map();
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
const I = /* @__PURE__ */ new WeakMap(), ot = (t, e, i) => {
  let r = I.get(e);
  r === void 0 && (ce(e, e.firstChild), I.set(e, r = new B(Object.assign({ templateFactory: st }, i))), r.appendInto(e)), r.setValue(t), r.commit();
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
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const m = (t, ...e) => new Me(t, e, "html", lt);
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
const pe = 133;
function Ne(t, e) {
  const { element: { content: i }, parts: r } = t, a = document.createTreeWalker(i, pe, null, !1);
  let n = z(r), l = r[n], s = -1, o = 0;
  const f = [];
  let b = null;
  for (; a.nextNode(); ) {
    s++;
    const c = a.currentNode;
    for (c.previousSibling === b && (b = null), e.has(c) && (f.push(c), b === null && (b = c)), b !== null && o++; l !== void 0 && l.index === s; )
      l.index = b !== null ? -1 : l.index - o, n = z(r, n), l = r[n];
  }
  f.forEach((c) => c.parentNode.removeChild(c));
}
const ct = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, pe, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, z = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const r = t[i];
    if (qe(r))
      return i;
  }
  return -1;
};
function dt(t, e, i = null) {
  const { element: { content: r }, parts: a } = t;
  if (i == null) {
    r.appendChild(e);
    return;
  }
  const n = document.createTreeWalker(r, pe, null, !1);
  let l = z(a), s = 0, o = -1;
  for (; n.nextNode(); )
    for (o++, n.currentNode === i && (s = ct(e), i.parentNode.insertBefore(e, i)); l !== -1 && a[l].index === o; ) {
      if (s > 0) {
        for (; l !== -1; )
          a[l].index += s, l = z(a, l);
        return;
      }
      l = z(a, l);
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
const ze = (t, e) => `${t}--${e}`;
let K = !0;
typeof window.ShadyCSS > "u" ? K = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), K = !1);
const ut = (t) => (e) => {
  const i = ze(e.type, t);
  let r = H.get(i);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, H.set(i, r));
  let a = r.stringsArray.get(e.strings);
  if (a !== void 0)
    return a;
  const n = e.strings.join(D);
  if (a = r.keyString.get(n), a === void 0) {
    const l = e.getTemplateElement();
    K && window.ShadyCSS.prepareTemplateDom(l, t), a = new Oe(e, l), r.keyString.set(n, a);
  }
  return r.stringsArray.set(e.strings, a), a;
}, pt = ["html", "svg"], ht = (t) => {
  pt.forEach((e) => {
    const i = H.get(ze(e, t));
    i !== void 0 && i.keyString.forEach((r) => {
      const { element: { content: a } } = r, n = /* @__PURE__ */ new Set();
      Array.from(a.querySelectorAll("style")).forEach((l) => {
        n.add(l);
      }), Ne(r, n);
    });
  });
}, Le = /* @__PURE__ */ new Set(), mt = (t, e, i) => {
  Le.add(t);
  const r = i ? i.element : document.createElement("template"), a = e.querySelectorAll("style"), { length: n } = a;
  if (n === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, t);
    return;
  }
  const l = document.createElement("style");
  for (let f = 0; f < n; f++) {
    const b = a[f];
    b.parentNode.removeChild(b), l.textContent += b.textContent;
  }
  ht(t);
  const s = r.content;
  i ? dt(i, l, s.firstChild) : s.insertBefore(l, s.firstChild), window.ShadyCSS.prepareTemplateStyles(r, t);
  const o = s.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (i) {
    s.insertBefore(l, s.firstChild);
    const f = /* @__PURE__ */ new Set();
    f.add(l), Ne(i, f);
  }
}, ft = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = i.scopeName, a = I.has(e), n = K && e.nodeType === 11 && !!e.host, l = n && !Le.has(r), s = l ? document.createDocumentFragment() : e;
  if (ot(t, s, Object.assign({ templateFactory: ut(r) }, i)), l) {
    const o = I.get(s);
    I.delete(s);
    const f = o.value instanceof ee ? o.value.template : void 0;
    mt(r, s, f), ce(e, e.firstChild), e.appendChild(s), I.set(e, o);
  }
  !a && n && window.ShadyCSS.styleElement(e.host);
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
var We;
window.JSCompiler_renameProperty = (t, e) => t;
const ie = {
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
}, He = (t, e) => e !== t && (e === e || t === t), Q = {
  attribute: !0,
  type: String,
  converter: ie,
  reflect: !1,
  hasChanged: He
}, Z = 1, xe = 4, Ce = 8, _e = 16, re = "finalized";
class Ue extends HTMLElement {
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
      const a = this._attributeNameForProperty(r, i);
      a !== void 0 && (this._attributeToPropertyMap.set(a, r), e.push(a));
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
  static createProperty(e, i = Q) {
    if (this._ensureClassProperties(), this._classProperties.set(e, i), i.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const r = typeof e == "symbol" ? Symbol() : `__${e}`, a = this.getPropertyDescriptor(e, r, i);
    a !== void 0 && Object.defineProperty(this.prototype, e, a);
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
      set(a) {
        const n = this[e];
        this[i] = a, this.requestUpdateInternal(e, n, r);
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
    return this._classProperties && this._classProperties.get(e) || Q;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(re) || e.finalize(), this[re] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const i = this.properties, r = [
        ...Object.getOwnPropertyNames(i),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(i) : []
      ];
      for (const a of r)
        this.createProperty(a, i[a]);
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
  static _valueHasChanged(e, i, r = He) {
    return r(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const r = i.type, a = i.converter || ie, n = typeof a == "function" ? a : a.fromAttribute;
    return n ? n(e, r) : e;
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
    const r = i.type, a = i.converter;
    return (a && a.toAttribute || ie.toAttribute)(e, r);
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
  _propertyToAttribute(e, i, r = Q) {
    const a = this.constructor, n = a._attributeNameForProperty(e, r);
    if (n !== void 0) {
      const l = a._propertyValueToAttribute(i, r);
      if (l === void 0)
        return;
      this._updateState = this._updateState | Ce, l == null ? this.removeAttribute(n) : this.setAttribute(n, l), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & Ce)
      return;
    const r = this.constructor, a = r._attributeToPropertyMap.get(e);
    if (a !== void 0) {
      const n = r.getPropertyOptions(a);
      this._updateState = this._updateState | _e, this[a] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(i, n), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, i, r) {
    let a = !0;
    if (e !== void 0) {
      const n = this.constructor;
      r = r || n.getPropertyOptions(e), n._valueHasChanged(this[e], i, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, i), r.reflect === !0 && !(this._updateState & _e) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : a = !1;
    }
    !this._hasRequestedUpdate && a && (this._updatePromise = this._enqueueUpdate());
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
    this._updateState = this._updateState | xe;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & xe;
  }
  get hasUpdated() {
    return this._updateState & Z;
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
    e && (this._updateState & Z || (this._updateState = this._updateState | Z, this.firstUpdated(i)), this.updated(i));
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
We = re;
Ue[We] = !0;
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
const gt = (t, e) => (window.customElements.define(t, e), e), bt = (t, e) => {
  const { kind: i, elements: r } = e;
  return {
    kind: i,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(a) {
      window.customElements.define(t, a);
    }
  };
}, J = (t) => (e) => typeof e == "function" ? gt(t, e) : bt(t, e), yt = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
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
}, St = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function h(t) {
  return (e, i) => i !== void 0 ? St(t, e, i) : yt(t, e);
}
function vt(t) {
  return h({ attribute: !1, hasChanged: void 0 });
}
const S = (t) => vt();
function G(t, e) {
  return (i, r) => {
    const a = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Be(a, i, r) : $e(a, i);
  };
}
function xt(t) {
  return (e, i) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? Be(r, e, i) : $e(r, e);
  };
}
const Be = (t, e, i) => {
  Object.defineProperty(e, i, t);
}, $e = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
});
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
const ae = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, he = Symbol();
class me {
  constructor(e, i) {
    if (i !== he)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (ae ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Ct = (t) => new me(String(t), he), _t = (t) => {
  if (t instanceof me)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, je = (t, ...e) => {
  const i = e.reduce((r, a, n) => r + _t(a) + t[n + 1], t[0]);
  return new me(i, he);
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
const we = {};
class $ extends Ue {
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
      const i = (n, l) => n.reduceRight((s, o) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(o) ? i(o, s) : (s.add(o), s)
      ), l), r = i(e, /* @__PURE__ */ new Set()), a = [];
      r.forEach((n) => a.unshift(n)), this._styles = a;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !ae) {
        const r = Array.prototype.slice.call(i.cssRules).reduce((a, n) => a + n.cssText, "");
        return Ct(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : ae ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), i !== we && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
      const a = document.createElement("style");
      a.textContent = r.cssText, this.renderRoot.appendChild(a);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return we;
  }
}
$.finalized = !0;
$.render = ft;
$.shadowRootOptions = { mode: "open" };
const wt = 1e3 * 60, ke = "langChanged";
function kt(t, e, i) {
  return Object.entries(ne(e || {})).reduce((r, [a, n]) => r.replace(new RegExp(`{{[  ]*${a}[  ]*}}`, "gm"), String(ne(n))), t);
}
function At(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function ne(t) {
  return typeof t == "function" ? t() : t;
}
const Dt = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: At,
  interpolate: kt,
  translationCache: {}
});
let Vt = Dt();
function Pt(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(ke, i, e), () => window.removeEventListener(ke, i);
}
function P(t, e, i = Vt) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? ne(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Xe(t) {
  return t instanceof B ? t.startNode.isConnected : t instanceof U ? t.committer.element.isConnected : t.element.isConnected;
}
function Ft(t) {
  for (const [e] of t)
    Xe(e) || t.delete(e);
}
function Et(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Rt(t, e) {
  setInterval(() => Et(() => Ft(t)), e);
}
const Ke = /* @__PURE__ */ new Map();
function Tt() {
  Pt((t) => {
    for (const [e, i] of Ke)
      Xe(e) && Ot(e, i, t);
  });
}
Tt();
Rt(Ke, wt);
function Ot(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
var le = function(t, e) {
  return le = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
  }, le(t, e);
};
function qt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  le(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var L = function() {
  return L = Object.assign || function(e) {
    for (var i, r = 1, a = arguments.length; r < a; r++) {
      i = arguments[r];
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
  }, L.apply(this, arguments);
};
function d(t, e, i, r) {
  var a = arguments.length, n = a < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(t, e, i, r);
  else for (var s = t.length - 1; s >= 0; s--) (l = t[s]) && (n = (a < 3 ? l(n) : a > 3 ? l(e, i, n) : l(e, i)) || n);
  return a > 3 && n && Object.defineProperty(e, i, n), n;
}
function j(t) {
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
function Mt(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Je = () => {
}, It = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Je, It);
document.removeEventListener("x", Je);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Gt extends $ {
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
var Nt = (
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
var zt = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Lt = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ae = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Wt(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, a = e.y, n = r + i.left, l = a + i.top, s, o;
  if (t.type === "touchstart") {
    var f = t;
    s = f.changedTouches[0].pageX - n, o = f.changedTouches[0].pageY - l;
  } else {
    var b = t;
    s = b.pageX - n, o = b.pageY - l;
  }
  return { x: s, y: o };
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
var De = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ve = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], X = [], Ht = (
  /** @class */
  function(t) {
    qt(e, t);
    function e(i) {
      var r = t.call(this, L(L({}, e.defaultAdapter), i)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(a) {
        r.activateImpl(a);
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
        return zt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ae;
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
        var a = e.cssClasses, n = a.ROOT, l = a.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(n), i.adapter.isUnbounded() && (i.adapter.addClass(l), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, a = r.ROOT, n = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(a), i.adapter.removeClass(n), i.removeCssVars();
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
      var r, a;
      if (i) {
        try {
          for (var n = j(De), l = n.next(); !l.done; l = n.next()) {
            var s = l.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            l && !l.done && (a = n.return) && a.call(n);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var r, a;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var n = j(Ve), l = n.next(); !l.done; l = n.next()) {
            var s = l.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            l && !l.done && (a = n.return) && a.call(n);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var a = j(De), n = a.next(); !n.done; n = a.next()) {
          var l = n.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          n && !n.done && (r = a.return) && r.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var a = j(Ve), n = a.next(); !n.done; n = a.next()) {
          var l = n.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          n && !n.done && (r = a.return) && r.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, a = Object.keys(r);
      a.forEach(function(n) {
        n.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[n], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var a = this.activationState;
        if (!a.isActivated) {
          var n = this.previousActivationEvent, l = n && i !== void 0 && n.type !== i.type;
          if (!l) {
            a.isActivated = !0, a.isProgrammatic = i === void 0, a.activationEvent = i, a.wasActivatedByPointer = a.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var s = i !== void 0 && X.length > 0 && X.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (X.push(i.target), this.registerDeactivationHandlers(i)), a.wasElementMadeActive = this.checkElementMadeActive(i), a.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              X = [], !a.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (a.wasElementMadeActive = r.checkElementMadeActive(i), a.wasElementMadeActive && r.animateActivation()), a.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, a = r.VAR_FG_TRANSLATE_START, n = r.VAR_FG_TRANSLATE_END, l = e.cssClasses, s = l.FG_DEACTIVATION, o = l.FG_ACTIVATION, f = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var b = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), E = v.startPoint, w = v.endPoint;
        b = E.x + "px, " + E.y + "px", c = w.x + "px, " + w.y + "px";
      }
      this.adapter.updateCssVariable(a, b), this.adapter.updateCssVariable(n, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, f);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, a = i.wasActivatedByPointer, n;
      a ? n = Wt(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : n = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, n = {
        x: n.x - this.initialSize / 2,
        y: n.y - this.initialSize / 2
      };
      var l = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: n, endPoint: l };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, a = this.activationState, n = a.hasDeactivationUXRun, l = a.isActivated, s = n || !l;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, Ae.FG_DEACTIVATION_MS));
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
        var a = L({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(a);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(a), i.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(i) {
      var r = i.wasActivatedByPointer, a = i.wasElementMadeActive;
      (r || a) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), a = function() {
        var l = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : a();
      var n = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && n % 2 !== 0 ? this.initialSize = n - 1 : this.initialSize = n, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, a = i.VAR_LEFT, n = i.VAR_TOP, l = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(a, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(n, this.unboundedCoords.top + "px"));
    }, e;
  }(Nt)
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
class Ut {
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
const Pe = /* @__PURE__ */ new WeakMap(), Qe = Re((t) => (e) => {
  if (!(e instanceof U) || e instanceof ue || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let a = Pe.get(e);
  a === void 0 && (r.setAttribute("class", i.strings.join(" ")), Pe.set(e, a = /* @__PURE__ */ new Set()));
  const n = r.classList || new Ut(r);
  a.forEach((l) => {
    l in t || (n.remove(l), a.delete(l));
  });
  for (const l in t) {
    const s = t[l];
    s != a.has(l) && (s ? (n.add(l), a.add(l)) : (n.remove(l), a.delete(l)));
  }
  typeof n.commit == "function" && n.commit();
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
const Fe = /* @__PURE__ */ new WeakMap(), Bt = Re((t) => (e) => {
  if (!(e instanceof U) || e instanceof ue || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let a = Fe.get(e);
  a === void 0 && (r.cssText = i.strings.join(" "), Fe.set(e, a = /* @__PURE__ */ new Set())), a.forEach((n) => {
    n in t || (a.delete(n), n.indexOf("-") === -1 ? r[n] = null : r.removeProperty(n));
  });
  for (const n in t)
    a.add(n), n.indexOf("-") === -1 ? r[n] = t[n] : r.setProperty(n, t[n]);
});
class g extends Gt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ht;
  }
  get isActive() {
    return Mt(this.parentElement || this, ":active");
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
    return m`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Qe(r)}"
          style="${Bt({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
d([
  G(".mdc-ripple-surface")
], g.prototype, "mdcRoot", void 0);
d([
  h({ type: Boolean })
], g.prototype, "primary", void 0);
d([
  h({ type: Boolean })
], g.prototype, "accent", void 0);
d([
  h({ type: Boolean })
], g.prototype, "unbounded", void 0);
d([
  h({ type: Boolean })
], g.prototype, "disabled", void 0);
d([
  h({ type: Boolean })
], g.prototype, "activated", void 0);
d([
  h({ type: Boolean })
], g.prototype, "selected", void 0);
d([
  h({ type: Boolean })
], g.prototype, "internalUseStateLayerCustomProperties", void 0);
d([
  S()
], g.prototype, "hovering", void 0);
d([
  S()
], g.prototype, "bgFocused", void 0);
d([
  S()
], g.prototype, "fgActivation", void 0);
d([
  S()
], g.prototype, "fgDeactivation", void 0);
d([
  S()
], g.prototype, "fgScale", void 0);
d([
  S()
], g.prototype, "fgSize", void 0);
d([
  S()
], g.prototype, "translateStart", void 0);
d([
  S()
], g.prototype, "translateEnd", void 0);
d([
  S()
], g.prototype, "leftPos", void 0);
d([
  S()
], g.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $t = je`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let se = class extends g {
};
se.styles = [$t];
se = d([
  J("mwc-ripple")
], se);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const fe = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (a, n) => e.constructor._observers.set(n, a)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(a) {
        r.call(this, a), a.forEach((n, l) => {
          const o = this.constructor._observers.get(l);
          o !== void 0 && o.call(this, this[l], n);
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
class jt {
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
class y extends $ {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new jt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : m``, r = this.hasMeta ? this.renderMeta() : m``;
    return m`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? m`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? m`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return m`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Qe(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return m`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return m`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return m`<slot></slot>`;
  }
  renderTwoline() {
    return m`
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
d([
  G("slot")
], y.prototype, "slotElement", void 0);
d([
  xt("mwc-ripple")
], y.prototype, "ripple", void 0);
d([
  h({ type: String })
], y.prototype, "value", void 0);
d([
  h({ type: String, reflect: !0 })
], y.prototype, "group", void 0);
d([
  h({ type: Number, reflect: !0 })
], y.prototype, "tabindex", void 0);
d([
  h({ type: Boolean, reflect: !0 }),
  fe(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], y.prototype, "disabled", void 0);
d([
  h({ type: Boolean, reflect: !0 })
], y.prototype, "twoline", void 0);
d([
  h({ type: Boolean, reflect: !0 })
], y.prototype, "activated", void 0);
d([
  h({ type: String, reflect: !0 })
], y.prototype, "graphic", void 0);
d([
  h({ type: Boolean })
], y.prototype, "multipleGraphics", void 0);
d([
  h({ type: Boolean })
], y.prototype, "hasMeta", void 0);
d([
  h({ type: Boolean, reflect: !0 }),
  fe(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], y.prototype, "noninteractive", void 0);
d([
  h({ type: Boolean, reflect: !0 }),
  fe(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], y.prototype, "selected", void 0);
d([
  S()
], y.prototype, "shouldRenderRipple", void 0);
d([
  S()
], y.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Xt = je`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let oe = class extends y {
};
oe.styles = [Xt];
oe = d([
  J("mwc-list-item")
], oe);
var Kt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, C = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? Jt(e, i) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (a = (r ? l(e, i, a) : l(a)) || a);
  return r && a && Kt(e, i, a), a;
};
let x = class extends Ze {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(P("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? m`<div style="position:relative;">
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
      </div>` : m``;
  }
  renderMulplierList() {
    return m`${this.multipliers.map(
      (t) => m`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? P("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
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
C([
  h({ type: Boolean })
], x.prototype, "nullable", 2);
C([
  h({ type: Array })
], x.prototype, "multipliers", 2);
C([
  h({ type: String })
], x.prototype, "multiplier", 1);
C([
  h({ type: String })
], x.prototype, "unit", 2);
C([
  S()
], x.prototype, "null", 1);
C([
  h({ type: String })
], x.prototype, "maybeValue", 1);
C([
  h({ type: String })
], x.prototype, "defaultValue", 2);
C([
  h({ type: Array })
], x.prototype, "reservedValues", 2);
C([
  G("mwc-switch")
], x.prototype, "nullSwitch", 2);
C([
  G("mwc-menu")
], x.prototype, "multiplierMenu", 2);
C([
  G("mwc-icon-button")
], x.prototype, "multiplierButton", 2);
x = C([
  J("wizard-textfield")
], x);
var Qt = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, T = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? Zt(e, i) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (a = (r ? l(e, i, a) : l(a)) || a);
  return r && a && Qt(e, i, a), a;
};
let F = class extends Ye {
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
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
T([
  h({ type: Boolean })
], F.prototype, "nullable", 2);
T([
  S()
], F.prototype, "null", 1);
T([
  h({ type: String })
], F.prototype, "maybeValue", 1);
T([
  h({ type: String })
], F.prototype, "defaultValue", 2);
T([
  h({ type: Array })
], F.prototype, "reservedValues", 2);
T([
  G("mwc-switch")
], F.prototype, "nullSwitch", 2);
F = T([
  J("wizard-select")
], F);
function Yt(t) {
  const e = ei(t);
  return e ? {
    title: P("wizard.title.edit", { tagName: "Services" }),
    content: [...e],
    element: t
  } : null;
}
function ei(t) {
  const e = {
    logSettings: {
      cbName: t.querySelector("LogSettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("LogSettings")?.getAttribute("datSet") ?? null,
      logEna: t.querySelector("LogSettings")?.getAttribute("logEna") ?? null,
      intgPd: t.querySelector("LogSettings")?.getAttribute("trgOps") ?? null,
      trgOps: t.querySelector("LogSettings")?.getAttribute("intgPd") ?? null
    },
    confLogControl: {
      max: t.querySelector("ConfLogControl")?.getAttribute("max") ?? null
    },
    dataSet: {
      max: t.querySelector("ConfDataSet")?.getAttribute("max") ?? Array.from(
        t.parentElement?.querySelectorAll("DataSet") || []
      ).length.toString(),
      maxAttributes: t.querySelector("ConfDataSet")?.getAttribute("maxAttributes") ?? null,
      modify: t.querySelector("ConfDataSet")?.getAttribute("modify") ?? "true"
    },
    clientServices: {
      readLog: t.querySelector("ClientServices")?.getAttribute("readLog") ?? null
    },
    sGEdit: {
      resvTms: t.querySelector("SettingGroups > SGEdit")?.getAttribute("resvTms") || null
    },
    confSG: {
      resvTms: t.querySelector("SettingGroups > ConfSG")?.getAttribute("resvTms") || null
    }
  };
  return O(e) ? null : [
    p("Log Control Configuration"),
    ...u([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.logSettings.cbName,
        helper: "Whether log control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.logSettings.datSet,
        helper: "Whether log control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "logEna",
        maybeValue: e.logSettings.logEna,
        helper: "Whether log control blocks attribute logEna is configurable offline (Conf), online (Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: e.logSettings.trgOps,
        helper: "Whether log control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: e.logSettings.intgPd,
        helper: "Whether log control blocks integrity period is configurable offlien (Conf), online (Dyn), or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      }
    ]),
    p("Log Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "Max",
        required: !0,
        helper: "The maximum number of log control blocks instantiable by system configuration tool",
        maybeValue: e.confLogControl.max
      }
    ]),
    p("Client Capabilities"),
    ...u([
      {
        kind: "Checkbox",
        label: "read Log",
        nullable: !0,
        helper: "Whether IED supports services to handle logs as a client (see IEC 61850-7-2 for further information)",
        maybeValue: e.clientServices.readLog
      }
    ]),
    p("DataSet Configuration"),
    ...u([
      {
        kind: "TextField",
        label: "Max",
        nullable: !1,
        helper: "The maximum allow data sets in this IED",
        maybeValue: e.dataSet.max
      },
      {
        kind: "TextField",
        label: "Max attributes",
        nullable: !0,
        helper: "The maximum number of FCDA elements per DataSet",
        maybeValue: e.dataSet.maxAttributes
      },
      {
        kind: "Checkbox",
        label: "Modify",
        helper: "Whether DataSet can be modified by SCT",
        maybeValue: e.dataSet.modify
      }
    ]),
    p("Setting Group"),
    ...u([
      {
        kind: "Checkbox",
        label: "SGEdit",
        nullable: !0,
        helper: "Whether IED allows manipulating editable setting groups online",
        maybeValue: e.sGEdit.resvTms
      },
      {
        kind: "Checkbox",
        label: "ConfSG",
        nullable: !0,
        helper: "Whether IED accepts the system configuration tool to configure the number of setting groups",
        maybeValue: e.confSG.resvTms
      }
    ])
  ];
}
function ti(t) {
  const e = ii(t);
  return e ? {
    title: P("wizard.title.edit", { tagName: "Report Settings" }),
    content: [...e],
    element: t
  } : null;
}
function ii(t) {
  const e = {
    reportSettings: {
      cbName: t.querySelector("ReportSettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("ReportSettings")?.getAttribute("datSet") ?? null,
      rptID: t.querySelector("ReportSettings")?.getAttribute("rptID") ?? null,
      optFields: t.querySelector("ReportSettings")?.getAttribute("optFields") ?? null,
      bufTime: t.querySelector("ReportSettings")?.getAttribute("bufTime") ?? null,
      trgOps: t.querySelector("ReportSettings")?.getAttribute("trgOps") ?? null,
      intgPd: t.querySelector("ReportSettings")?.getAttribute("intgPd") ?? null,
      resvTms: t.querySelector("ReportSettings")?.getAttribute("resvTms") ?? null,
      owner: t.querySelector("ReportSettings")?.getAttribute("owner") ?? null
    },
    confReportControl: {
      max: t.querySelector("ConfReportControl")?.getAttribute("max") ?? null,
      bufMode: t.querySelector("ConfReportControl")?.getAttribute("bufMode") ?? null,
      maxBuf: t.querySelector("ConfReportControl")?.getAttribute("maxBuf") ?? null,
      bufConf: t.querySelector("ConfReportControl")?.getAttribute("bufConf") ?? null
    },
    clientServices: {
      maxReports: t.querySelector("ClientServices")?.getAttribute("maxReports") ?? null,
      bufReport: t.querySelector("ClientServices")?.getAttribute("bufReport") ?? null,
      unbufReport: t.querySelector("ClientServices")?.getAttribute("unbufReport") ?? null
    },
    dynDataSet: {
      max: t.querySelector("DynDataSet")?.getAttribute("max") ?? null,
      maxAttributes: t.querySelector("DynDataSet")?.getAttribute("maxAttributes") ?? null
    }
  };
  return O(e) ? null : [
    p("Control Block Configuration"),
    ...u([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.reportSettings.cbName,
        helper: "Whether report control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.reportSettings.datSet,
        helper: "Whether report control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "rptID",
        maybeValue: e.reportSettings.rptID,
        helper: "Whether report control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: e.reportSettings.optFields,
        helper: "Whether report control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufTime",
        maybeValue: e.reportSettings.bufTime,
        helper: "Whether report control blocks bufTime attribute is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: e.reportSettings.trgOps,
        helper: "Whether report control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: e.reportSettings.intgPd,
        helper: "Whether report control blocks integrity period is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "resvTms",
        helper: "Whether reserve time exists in all buffered report control blocks",
        maybeValue: e.reportSettings.resvTms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "owner",
        helper: "Whether owner attribute exists on all buffered report control blocks",
        maybeValue: e.reportSettings.owner?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Publisher Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of report control blocks instantiable by system configuration tool",
        maybeValue: e.confReportControl.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufMode",
        maybeValue: e.confReportControl.bufMode,
        helper: "Whether buffered, unbuffered or both type of report control block can be created by system configuration tool",
        values: ["unbuffered", "buffered", "both"],
        default: "both",
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxBuf",
        required: !1,
        helper: "The maximum number of BUFFERED report control blocks instantiable by system configuration tool",
        maybeValue: e.confReportControl.maxBuf?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufConf",
        helper: "Whether buffered attribute can be configured by system configuration tool",
        maybeValue: e.confReportControl.bufConf?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Client Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "maxReports",
        required: !0,
        helper: "The maximal number of report control blocks the client can work with",
        maybeValue: e.clientServices.maxReports?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufReport",
        helper: "Whether the IED can use buffered report control blocks as a client",
        maybeValue: e.clientServices.bufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "unbufReport",
        helper: "Whether the IED can use un-buffered report control blocks as a client",
        maybeValue: e.clientServices.unbufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Dynamic Reporting/DataSets"),
    ...u([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number data sets (including preconfigured once)",
        maybeValue: e.dynDataSet.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum number of data entries (FCDA) allowed within a dynamic data set",
        maybeValue: e.dynDataSet.maxAttributes?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function ri(t) {
  const e = ai(t);
  return e ? {
    title: P("wizard.title.edit", { tagName: "GSE Control" }),
    content: [...e],
    element: t
  } : null;
}
function ai(t) {
  const e = {
    gseSettings: {
      cbName: t.querySelector("GSESettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("GSESettings")?.getAttribute("datSet") ?? null,
      appID: t.querySelector("GSESettings")?.getAttribute("appID") ?? null,
      dataLabel: t.querySelector("GSESettings")?.getAttribute("dataLabel") ?? null,
      kdaParticipant: t.querySelector("GSESettings")?.getAttribute("kdaParticipant") ?? null,
      signature: t.querySelector("GSESettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: t.querySelector("GSESettings > McSecurity")?.getAttribute("encryption") ?? null
    },
    goose: {
      max: t.querySelector("GOOSE")?.getAttribute("max") ?? null,
      fixedOffs: t.querySelector("GOOSE")?.getAttribute("fixedOffs") ?? null,
      goose: t.querySelector("GOOSE")?.getAttribute("goose") ?? null,
      rGOOSE: t.querySelector("GOOSE")?.getAttribute("rGOOSE") ?? null
    },
    clientServices: {
      maxGOOSE: t.querySelector("ClientServices")?.getAttribute("maxGOOSE") ?? null,
      goose: t.querySelector("ClientServices")?.getAttribute("goose") ?? null,
      rGOOSE: t.querySelector("ClientServices")?.getAttribute("rGOOSE") ?? null,
      gsse: t.querySelector("ClientServices")?.getAttribute("gsse") ?? null
    },
    supSubscription: {
      maxGo: t.querySelector("SupSubscription")?.getAttribute("maxGo") ?? null,
      maxSv: t.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    },
    gsse: {
      max: t.querySelector("GSSE")?.getAttribute("max") ?? null
    }
  };
  return O(e) ? null : [
    p("Control Block Configuration"),
    ...u([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.gseSettings.cbName,
        helper: "Whether GSE control block (GOOSE) name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.gseSettings.datSet,
        helper: "Whether GSE control blocks (GOOSE) data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "appID",
        maybeValue: e.gseSettings.appID,
        helper: "Whether GSE control blocks (GOOSE) ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "dataLabel",
        maybeValue: e.gseSettings.dataLabel,
        helper: "Deprecated!: Whether GSSE object reference is configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        maybeValue: e.gseSettings.kdaParticipant,
        helper: "Whether key delivery assurance (KDA) is supported by the server",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: e.gseSettings.signature,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: e.gseSettings.encryption,
        nullable: !0,
        default: !1
      }
    ]),
    p("Publisher Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of configurable GOOSE control blocks. 0 means no GOOSE publishing supported",
        maybeValue: e.goose.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "fixedOffs",
        maybeValue: e.goose.fixedOffs,
        helper: "Whether encoding with fixed offsets is configurable for each GSE control block (GOOSE). See also IEC 61850-8-1",
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether GOOSE publishing is supported",
        maybeValue: e.goose.goose,
        nullable: !0,
        default: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "Whether GOOSE with network layer 3 (IP) is supported",
        maybeValue: e.goose.rGOOSE,
        nullable: !0,
        default: !1
      }
    ]),
    p("Subscription Capabilities"),
    ...u([
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether the IED supports client side GOOSE related services",
        maybeValue: e.clientServices.goose?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxGOOSE",
        required: !0,
        helper: "The maximal number of GOOSEs the client can subscribe to",
        maybeValue: e.clientServices.maxGOOSE?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "The maximal number of GOOSEs with network layer 3 the client can subscribe to",
        maybeValue: e.clientServices.rGOOSE?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "gsse",
        helper: "Whether the IED supports client side GSSE related services",
        maybeValue: e.clientServices.gsse?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Supervision Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "maxGo",
        required: !1,
        helper: "The maximum number of GOOSE supervision supported by this IED (LGOS)",
        maybeValue: e.supSubscription.maxGo?.toString() ?? null,
        nullable: !0
      }
    ]),
    p("GSSE Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of GSSE supported as publisher. 0 means IED can only subscribe on GSSE messages",
        maybeValue: e.gsse.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function ni(t) {
  const e = li(t);
  return e ? {
    title: P("wizard.title.edit", { tagName: "Networking" }),
    content: [...e],
    element: t
  } : null;
}
function li(t) {
  const e = {
    fileHandling: {
      mms: t.querySelector("FileHandling")?.getAttribute("mms") ?? null,
      ftp: t.querySelector("FileHandling")?.getAttribute("ftp") ?? null,
      ftps: t.querySelector("FileHandling")?.getAttribute("ftps") ?? null
    },
    timeSyncProt: {
      sntp: t.querySelector("TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: t.querySelector("TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: t.querySelector("TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: t.querySelector("TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_TimeSyncProt: {
      sntp: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_McSecurity: {
      signature: t.querySelector("ClientServices > McSecurity")?.getAttribute("signature") ?? null,
      encryption: t.querySelector("ClientServices > McSecurity")?.getAttribute("encryption") ?? null
    },
    redProt: {
      hsr: t.querySelector("RedProt")?.getAttribute("hsr") ?? null,
      prp: t.querySelector("RedProt")?.getAttribute("prp") ?? null,
      rstp: t.querySelector("RedProt")?.getAttribute("rstp") ?? null
    },
    commProt: {
      ipv6: t.querySelector("CommProt")?.getAttribute("ipv6") ?? null
    }
  };
  return O(e) ? null : [
    p("File Handling"),
    ...u([
      {
        kind: "Checkbox",
        label: "mms",
        helper: "Whether the IED supports file transfer as defined by the manufacturer messaging service (MMS)",
        maybeValue: e.fileHandling.mms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftp",
        helper: "Whether the IED supports file transfer service (FTP)",
        maybeValue: e.fileHandling.ftp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftps",
        helper: "Whether the IED supports encrypted file transfer service (FTPS)",
        maybeValue: e.fileHandling.ftps?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Time Server Capabilities"),
    ...u([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-server",
        maybeValue: e.timeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-server",
        maybeValue: e.timeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-server",
        maybeValue: e.timeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-server (e.g. PPS)",
        maybeValue: e.timeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Time Client Capabilities"),
    ...u([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-client",
        maybeValue: e.cs_TimeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-client",
        maybeValue: e.cs_TimeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-client",
        maybeValue: e.cs_TimeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-client (e.g. PPS)",
        maybeValue: e.cs_TimeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Multicast Security on Server"),
    ...u([
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for SMV/GOOSE on this IED/access point",
        maybeValue: e.cs_McSecurity.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for SMV/GOOSE on this IED/access point",
        maybeValue: e.cs_McSecurity.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Redundancy Protocols"),
    ...u([
      {
        kind: "Checkbox",
        label: "hsr",
        helper: "Whether the IED supports redundancy protocol HSR",
        maybeValue: e.redProt.hsr?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "prp",
        helper: "Whether the IED supports redundancy protocol PRP",
        maybeValue: e.redProt.prp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rstp",
        helper: "Whether the IED supports redundancy protocol RSTP",
        maybeValue: e.redProt.rstp?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Others"),
    ...u([
      {
        kind: "Checkbox",
        label: "ipv6",
        helper: "Whether the IED supports IP version 6",
        maybeValue: e.commProt.ipv6?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ])
  ];
}
function si(t) {
  const e = oi(t);
  return e ? {
    title: P("wizard.title.edit", { tagName: "Sampled Values" }),
    content: [...e],
    element: t
  } : null;
}
function oi(t) {
  const e = {
    controlBlockConfiguration: {
      cbName: t.querySelector("SMVSettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("SMVSettings")?.getAttribute("datSet") ?? null,
      svID: t.querySelector("SMVSettings")?.getAttribute("svID") ?? null,
      optFields: t.querySelector("SMVSettings")?.getAttribute("optFields") ?? null,
      smpRate: t.querySelector("SMVSettings")?.getAttribute("smpRate") ?? null,
      nofASDU: t.querySelector("SMVSettings")?.getAttribute("nofASDU") ?? null,
      samplesPerSec: t.querySelector("SMVSettings")?.getAttribute("samplesPerSec") ?? null,
      synchSrcId: t.querySelector("SMVSettings")?.getAttribute("synchSrcId") ?? null,
      pdcTimeStamp: t.querySelector("SMVSettings")?.getAttribute("pdcTimeStamp") ?? null,
      kdaParticipant: t.querySelector("SMVSettings")?.getAttribute("kdaParticipant") ?? null,
      signature: t.querySelector("SMVSettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: t.querySelector("SMVSettings > McSecurity")?.getAttribute("encryption") ?? null,
      smpRateVal: t.querySelector("SMVSettings>SmpRate")?.childNodes[0]?.nodeValue ?? null,
      samplesPerSecVal: t.querySelector("SMVSettings > SamplesPerSec")?.childNodes[0]?.nodeValue ?? null,
      secPerSamplesVal: t.querySelector("SMVSettings > SecPerSamples")?.childNodes[0]?.nodeValue ?? null
    },
    publisherCapabilities: {
      max: t.querySelector("SMVsc")?.getAttribute("max") ?? null,
      delivery: t.querySelector("SMVsc")?.getAttribute("delivery") ?? null,
      deliveryConf: t.querySelector("SMVsc")?.getAttribute("deliveryConf") ?? null,
      sv: t.querySelector("SMVsc")?.getAttribute("sv") ?? null,
      rSV: t.querySelector("SMVsc")?.getAttribute("rSV") ?? null
    },
    subscriptionCapabilities: {
      sv: t.querySelector("ClientServices")?.getAttribute("sv") ?? null,
      maxSMV: t.querySelector("ClientServices")?.getAttribute("maxSMV") ?? null,
      rSV: t.querySelector("ClientServices")?.getAttribute("rSV") ?? null
    },
    superVisionCapabilities: {
      maxSv: t.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    }
  };
  return O(e) ? null : [
    p("Control Block Configuration"),
    ...u([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.controlBlockConfiguration.cbName,
        helper: "Whether SMV control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.controlBlockConfiguration.datSet,
        helper: "Whether SMV control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "svID",
        maybeValue: e.controlBlockConfiguration.svID,
        helper: "Whether SMV control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: e.controlBlockConfiguration.optFields,
        helper: "Whether SMV control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "smpRate",
        maybeValue: e.controlBlockConfiguration.smpRate,
        helper: "Whether SMV control blocks attribute smpRate is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "nofASDU",
        maybeValue: e.controlBlockConfiguration.nofASDU,
        helper: "Whether SMV control blocks attribute noASDU (number of timesstapms per packet) is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "samplesPerSec",
        helper: "Whether SMV supported sample rate definition as SamplesPerSec or SecPerSamples",
        maybeValue: e.controlBlockConfiguration.samplesPerSec?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "synchSrcId",
        helper: "Whether grandmaster clock ID can be included in the SMV",
        maybeValue: e.controlBlockConfiguration.synchSrcId?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "pdcTimeStamp",
        helper: "Whether the PDC timestamp can be included into SMV",
        maybeValue: e.controlBlockConfiguration.pdcTimeStamp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        helper: "Whether server supports key delivery assurance (KDA)",
        maybeValue: e.controlBlockConfiguration.kdaParticipant?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: e.controlBlockConfiguration.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: e.controlBlockConfiguration.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "SmpRate",
        required: !0,
        helper: "Defines the implemented SmpRate in the IED",
        maybeValue: e.controlBlockConfiguration.smpRateVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SamplesPerSec",
        required: !0,
        helper: "Defines the implemented SamplesPerSec in the IED",
        maybeValue: e.controlBlockConfiguration.samplesPerSecVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SecPerSamples",
        required: !0,
        helper: "Defines the implemented SecPerSamples in the IED",
        maybeValue: e.controlBlockConfiguration.secPerSamplesVal?.toString() ?? null,
        nullable: !0
      }
    ]),
    p("Publisher Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of SMV control blocks the IED can publish",
        maybeValue: e.publisherCapabilities.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "delivery",
        maybeValue: e.publisherCapabilities.delivery,
        helper: "Whether the IED supports publishing of muslticast, unicast or both types of SMV streams",
        values: ["unicast", "multicast", "both"],
        default: "multicast",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "deliveryConf",
        helper: "Whether the system configurator is allowed to configure SMV control blocks",
        maybeValue: e.publisherCapabilities.deliveryConf?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether IED supports layer 2 sampled value streams",
        maybeValue: e.publisherCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "Whether the IED supports layer 3 sampled value streams",
        maybeValue: e.publisherCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Client Capabilities"),
    ...u([
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether the IED supports client side SMV related services",
        maybeValue: e.subscriptionCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxSMV",
        required: !1,
        helper: "The maximal number of layer 2 sampled value streams the client can subscribe to",
        maybeValue: e.subscriptionCapabilities.maxSMV?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "The maximal number of layer 3 sampled value streams the client can subscribe to",
        maybeValue: e.subscriptionCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    p("Dynamic Reporting/DataSets"),
    ...u([
      {
        kind: "TextField",
        label: "maxSv",
        required: !1,
        helper: "The maximum number of SMV supervision supported by this IED (LSVS)",
        maybeValue: e.superVisionCapabilities.maxSv?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function ci(t) {
  const e = di(t);
  return e ? {
    title: P("wizard.title.edit", { tagName: "Client Server Services" }),
    content: [...e],
    element: t
  } : null;
}
function di(t) {
  const e = {
    dynamicAssociations: {
      max: t.querySelector("DynAssociation")?.getAttribute("max") ?? null
    },
    discoverCapabilities: {
      getDirectory: t.querySelector("GetDirectory") ? "true" : null,
      getDataObjectDefinition: t.querySelector("GetDataObjectDefinition") ? "true" : null,
      dataObjectDirectory: t.querySelector("DataObjectDirectory") ? "true" : null,
      getDataSetValue: t.querySelector("GetDataSetValue") ? "true" : null,
      setDataSetValue: t.querySelector("SetDataSetValue") ? "true" : null,
      setDataSetDirectory: t.querySelector("DataSetDirectory") ? "true" : null,
      readWrite: t.querySelector("ReadWrite") ? "true" : null
    },
    functionalNaming: {
      confLdName: t.querySelector("ConfLdName") ? "true" : null,
      supportsLdName: t.querySelector("ClientServices")?.getAttribute("supportsLdName") ?? null
    },
    clientCapabilities: {
      maxAttributes: t.querySelector("ClientServices")?.getAttribute("maxAttributes") ?? null,
      timerActivatedControl: t.querySelector("TimerActivatedControl") ? "true" : null,
      getCBValues: t.querySelector("GetCBValues") ? "true" : null,
      GSEDir: t.querySelector("GSEDir") ? "true" : null
    },
    valKindManipulationConfig: {
      setToRO: t.querySelector("ValueHandling")?.getAttribute("setToRO") ?? null
    },
    signalReferenceConfig: {
      max: t.querySelector("ConfSigRef")?.getAttribute("max") ?? null
    }
  };
  return O(e) ? null : [
    p("Dynamic Associations"),
    ...u([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum number of guaranteed parallel association with the IED. If missing, no association is possible",
        maybeValue: e.dynamicAssociations.max?.toString() ?? null,
        nullable: !0
      }
    ]),
    p("Discover Capabilities"),
    ...u([
      {
        kind: "Checkbox",
        label: "GetDirectory",
        helper: "Whether IED supports GetServerDirectory, GetLogicalDeviceDirectory, GetLogicalNodeDirectory",
        maybeValue: e.discoverCapabilities.getDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataObjectDefinition",
        helper: "Whether IED supports the service GetDataDefinition",
        maybeValue: e.discoverCapabilities.getDataObjectDefinition,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "DataObjectDirectory",
        helper: "Whether IED supports the service GetDataDirectory",
        maybeValue: e.discoverCapabilities.dataObjectDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataSetValue",
        helper: "Whether IED supports the service GetDataSetValues",
        maybeValue: e.discoverCapabilities.getDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetValue",
        helper: "Whether IED supports the service SetDataSetValue",
        maybeValue: e.discoverCapabilities.setDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetDirectory",
        helper: "Whether IED supports the service SetDataSetDirectory",
        maybeValue: e.discoverCapabilities.setDataSetDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ReadWrite",
        helper: "Whether IED supports the service GetData, SetData, and the Operate services",
        maybeValue: e.discoverCapabilities.readWrite,
        nullable: !0,
        default: !1
      }
    ]),
    p("Functional Naming"),
    ...u([
      {
        kind: "Checkbox",
        label: "ConfLdName",
        helper: "Whether the IED allows defining the attribute ldName in logical devices (LDevice)",
        maybeValue: e.functionalNaming.confLdName,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "supportsLdName",
        helper: "Whether the IED understands the logical device (LDevice) name (ldName) setting as a client",
        maybeValue: e.functionalNaming.supportsLdName,
        nullable: !0,
        default: !1
      }
    ]),
    p("Client Capabilities"),
    ...u([
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum receivable data attributes (across all data sets)",
        maybeValue: e.clientCapabilities.maxAttributes?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "TimerActivatedControl",
        helper: "Whether IED supports time activated control",
        maybeValue: e.clientCapabilities.timerActivatedControl,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetCBValues",
        helper: "Whether IED can read control blocks online",
        maybeValue: e.clientCapabilities.getCBValues,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GSEDir",
        helper: "Whether IED supports GSE directory services acc. to IEC 61850-7-2",
        maybeValue: e.clientCapabilities.GSEDir,
        nullable: !0,
        default: !1
      }
    ]),
    p("ValKind Manipulation Configuration"),
    ...u([
      {
        kind: "Checkbox",
        label: "setToRO",
        helper: "Whether valKind attribute in DA/BDA element that are Set can be modified to RO (only for function constrains for CF, DC, SP)",
        maybeValue: e.valKindManipulationConfig.setToRO,
        nullable: !0,
        default: !1
      }
    ]),
    p("Signal Reference Configuration"),
    ...u([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum object references that the IED can create (instantiation only by IED Configuration Tool)",
        maybeValue: e.signalReferenceConfig.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function O(t, e = [null, void 0, ""]) {
  return (t === null ? [!1] : Object.keys(t).flatMap((i) => {
    const r = t[i];
    return typeof r == "object" ? O(r) : [e.includes(r)];
  })).includes(!0);
}
function ui(t) {
  let e = m``;
  switch (t.kind) {
    case "TextField":
    default:
      e = m`<wizard-textfield
        label=${t.label}
        .maybeValue=${t.maybeValue}
        .helper=${t.helper || ""}
        ?required=${t.required}
        .validationMessage=${t.validationMessage || ""}
        .pattern=${t.pattern || ""}
        .defaultValue=${t.default || ""}
        ?dialogInitialFocus=${t.dialogInitialFocus}
        ?nullable=${t.nullable}
        disabled
      ></wizard-textfield>`;
      break;
    case "Checkbox":
      e = m`<wizard-checkbox
        label=${t.label}
        .maybeValue=${t.maybeValue}
        .helper=${t.helper || ""}
        ?defaultValue=${t.default}
        ?dialogInitialFocus=${t.dialogInitialFocus}
        ?nullable=${t.nullable}
        disabled
      ></wizard-checkbox>`;
      break;
    case "Select":
      e = m`<wizard-select
        label=${t.label}
        .maybeValue=${t.maybeValue}
        .validationMessage=${t.valadationMessage || ""}
        .defaultValue=${t.default || ""}
        ?dialogInitialFocus=${t.dialogInitialFocus}
        ?nullable=${t.nullable}
        disabled
      >
        ${t.values.map((i) => m`<mwc-list-item .value=${i}>
            ${i}
          </mwc-list-item>`)}
      </wizard-select>`;
      break;
  }
  return e;
}
function u(t) {
  return t.map((e) => ui(e));
}
function p(t) {
  return m`<wizard-divider .header=${t}></wizard-divider>`;
}
function Si(t) {
  return [
    Yt(t),
    ti(t),
    ri(t),
    ni(t),
    si(t),
    ci(t)
  ].filter((e) => e !== null).map((e) => e);
}
export {
  p as createFormDivider,
  ui as createFormElementFromInput,
  u as createFormElementsFromInputs,
  Si as editServicesWizard,
  O as isEmptyObject
};
