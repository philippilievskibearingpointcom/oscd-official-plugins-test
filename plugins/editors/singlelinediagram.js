import { Select as Vs } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Rs } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import "@material/mwc-fab";
import { List as Ms } from "@material/mwc-list";
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
const Or = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Os = (e, t, i = null, n = null) => {
  for (; t !== i; ) {
    const r = t.nextSibling;
    e.insertBefore(t, n), t = r;
  }
}, Fn = (e, t, i = null) => {
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
const Ye = `{{lit-${String(Math.random()).slice(2)}}}`, Pa = `<!--${Ye}-->`, Fr = new RegExp(`${Ye}|${Pa}`), Jt = "$lit$";
class Va {
  constructor(t, i) {
    this.parts = [], this.element = i;
    const n = [], r = [], a = document.createTreeWalker(i.content, 133, null, !1);
    let o = 0, c = -1, l = 0;
    const { strings: p, values: { length: m } } = t;
    for (; l < m; ) {
      const h = a.nextNode();
      if (h === null) {
        a.currentNode = r.pop();
        continue;
      }
      if (c++, h.nodeType === 1) {
        if (h.hasAttributes()) {
          const b = h.attributes, { length: w } = b;
          let S = 0;
          for (let E = 0; E < w; E++)
            qr(b[E].name, Jt) && S++;
          for (; S-- > 0; ) {
            const E = p[l], C = yn.exec(E)[2], x = C.toLowerCase() + Jt, z = h.getAttribute(x);
            h.removeAttribute(x);
            const L = z.split(Fr);
            this.parts.push({ type: "attribute", index: c, name: C, strings: L }), l += L.length - 1;
          }
        }
        h.tagName === "TEMPLATE" && (r.push(h), a.currentNode = h.content);
      } else if (h.nodeType === 3) {
        const b = h.data;
        if (b.indexOf(Ye) >= 0) {
          const w = h.parentNode, S = b.split(Fr), E = S.length - 1;
          for (let C = 0; C < E; C++) {
            let x, z = S[C];
            if (z === "")
              x = st();
            else {
              const L = yn.exec(z);
              L !== null && qr(L[2], Jt) && (z = z.slice(0, L.index) + L[1] + L[2].slice(0, -Jt.length) + L[3]), x = document.createTextNode(z);
            }
            w.insertBefore(x, h), this.parts.push({ type: "node", index: ++c });
          }
          S[E] === "" ? (w.insertBefore(st(), h), n.push(h)) : h.data = S[E], l += E;
        }
      } else if (h.nodeType === 8)
        if (h.data === Ye) {
          const b = h.parentNode;
          (h.previousSibling === null || c === o) && (c++, b.insertBefore(st(), h)), o = c, this.parts.push({ type: "node", index: c }), h.nextSibling === null ? h.data = "" : (n.push(h), c--), l++;
        } else {
          let b = -1;
          for (; (b = h.data.indexOf(Ye, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), l++;
        }
    }
    for (const h of n)
      h.parentNode.removeChild(h);
  }
}
const qr = (e, t) => {
  const i = e.length - t.length;
  return i >= 0 && e.slice(i) === t;
}, Ra = (e) => e.index !== -1, st = () => document.createComment(""), yn = (
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
const qn = 133;
function Ma(e, t) {
  const { element: { content: i }, parts: n } = e, r = document.createTreeWalker(i, qn, null, !1);
  let a = ti(n), o = n[a], c = -1, l = 0;
  const p = [];
  let m = null;
  for (; r.nextNode(); ) {
    c++;
    const h = r.currentNode;
    for (h.previousSibling === m && (m = null), t.has(h) && (p.push(h), m === null && (m = h)), m !== null && l++; o !== void 0 && o.index === c; )
      o.index = m !== null ? -1 : o.index - l, a = ti(n, a), o = n[a];
  }
  p.forEach((h) => h.parentNode.removeChild(h));
}
const Fs = (e) => {
  let t = e.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(e, qn, null, !1);
  for (; i.nextNode(); )
    t++;
  return t;
}, ti = (e, t = -1) => {
  for (let i = t + 1; i < e.length; i++) {
    const n = e[i];
    if (Ra(n))
      return i;
  }
  return -1;
};
function qs(e, t, i = null) {
  const { element: { content: n }, parts: r } = e;
  if (i == null) {
    n.appendChild(t);
    return;
  }
  const a = document.createTreeWalker(n, qn, null, !1);
  let o = ti(r), c = 0, l = -1;
  for (; a.nextNode(); )
    for (l++, a.currentNode === i && (c = Fs(t), i.parentNode.insertBefore(t, i)); o !== -1 && r[o].index === l; ) {
      if (c > 0) {
        for (; o !== -1; )
          r[o].index += c, o = ti(r, o);
        return;
      }
      o = ti(r, o);
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
const Oa = /* @__PURE__ */ new WeakMap(), Pi = (e) => (...t) => {
  const i = e(...t);
  return Oa.set(i, !0), i;
}, ri = (e) => typeof e == "function" && Oa.has(e);
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
const Re = {}, lt = {};
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
class vn {
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
    const t = Or ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(t, 133, null, !1);
    let a = 0, o = 0, c, l = r.nextNode();
    for (; a < n.length; ) {
      if (c = n[a], !Ra(c)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; o < c.index; )
        o++, l.nodeName === "TEMPLATE" && (i.push(l), r.currentNode = l.content), (l = r.nextNode()) === null && (r.currentNode = i.pop(), l = r.nextNode());
      if (c.type === "node") {
        const p = this.processor.handleTextExpression(this.options);
        p.insertAfterNode(l.previousSibling), this.__parts.push(p);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(l, c.name, c.strings, this.options));
      a++;
    }
    return Or && (document.adoptNode(t), customElements.upgrade(t)), t;
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
const Hr = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (e) => e }), Hs = ` ${Ye} `;
class Hn {
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
      const a = this.strings[r], o = a.lastIndexOf("<!--");
      n = (o > -1 || n) && a.indexOf("-->", o + 1) === -1;
      const c = yn.exec(a);
      c === null ? i += a + (n ? Hs : Pa) : i += a.substr(0, c.index) + c[1] + c[2] + Jt + c[3] + Ye;
    }
    return i += this.strings[t], i;
  }
  getTemplateElement() {
    const t = document.createElement("template");
    let i = this.getHTML();
    return Hr !== void 0 && (i = Hr.createHTML(i)), t.innerHTML = i, t;
  }
}
class Bs extends Hn {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const t = super.getTemplateElement(), i = t.content, n = i.firstChild;
    return i.removeChild(n), Os(i, n.firstChild), t;
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
const Vi = (e) => e === null || !(typeof e == "object" || typeof e == "function"), wn = (e) => Array.isArray(e) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(e && e[Symbol.iterator]);
class Fa {
  constructor(t, i, n) {
    this.dirty = !0, this.element = t, this.name = i, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Mt(this);
  }
  _getValue() {
    const t = this.strings, i = t.length - 1, n = this.parts;
    if (i === 1 && t[0] === "" && t[1] === "") {
      const a = n[0].value;
      if (typeof a == "symbol")
        return String(a);
      if (typeof a == "string" || !wn(a))
        return a;
    }
    let r = "";
    for (let a = 0; a < i; a++) {
      r += t[a];
      const o = n[a];
      if (o !== void 0) {
        const c = o.value;
        if (Vi(c) || !wn(c))
          r += typeof c == "string" ? c : String(c);
        else
          for (const l of c)
            r += typeof l == "string" ? l : String(l);
      }
    }
    return r += t[i], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Mt {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== Re && (!Vi(t) || t !== this.value) && (this.value = t, ri(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; ri(this.value); ) {
      const t = this.value;
      this.value = Re, t(this);
    }
    this.value !== Re && this.committer.commit();
  }
}
class li {
  constructor(t) {
    this.value = void 0, this.__pendingValue = void 0, this.options = t;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(t) {
    this.startNode = t.appendChild(st()), this.endNode = t.appendChild(st());
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
    t.__insert(this.startNode = st()), t.__insert(this.endNode = st());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(t) {
    t.__insert(this.startNode = st()), this.endNode = t.endNode, t.endNode = this.startNode;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; ri(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Re, i(this);
    }
    const t = this.__pendingValue;
    t !== Re && (Vi(t) ? t !== this.value && this.__commitText(t) : t instanceof Hn ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : wn(t) ? this.__commitIterable(t) : t === lt ? (this.value = lt, this.clear()) : this.__commitText(t));
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
    if (this.value instanceof vn && this.value.template === i)
      this.value.update(t.values);
    else {
      const n = new vn(i, t.processor, this.options), r = n._clone();
      n.update(t.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(t) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const a of t)
      r = i[n], r === void 0 && (r = new li(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(a), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(t = this.startNode) {
    Fn(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
class Gs {
  constructor(t, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = t, this.name = i, this.strings = n;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; ri(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Re, i(this);
    }
    if (this.__pendingValue === Re)
      return;
    const t = !!this.__pendingValue;
    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = Re;
  }
}
class Ws extends Fa {
  constructor(t, i, n) {
    super(t, i, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new Bn(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Bn extends Mt {
}
let qa = !1;
(() => {
  try {
    const e = {
      get capture() {
        return qa = !0, !1;
      }
    };
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch {
  }
})();
class Us {
  constructor(t, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; ri(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = Re, a(this);
    }
    if (this.__pendingValue === Re)
      return;
    const t = this.__pendingValue, i = this.value, n = t == null || i != null && (t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive), r = t != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = js(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = Re;
  }
  handleEvent(t) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
  }
}
const js = (e) => e && (qa ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
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
function Ks(e) {
  let t = ai.get(e.type);
  t === void 0 && (t = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ai.set(e.type, t));
  let i = t.stringsArray.get(e.strings);
  if (i !== void 0)
    return i;
  const n = e.strings.join(Ye);
  return i = t.keyString.get(n), i === void 0 && (i = new Va(e, e.getTemplateElement()), t.keyString.set(n, i)), t.stringsArray.set(e.strings, i), i;
}
const ai = /* @__PURE__ */ new Map();
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
const Pt = /* @__PURE__ */ new WeakMap(), Gn = (e, t, i) => {
  let n = Pt.get(t);
  n === void 0 && (Fn(t, t.firstChild), Pt.set(t, n = new li(Object.assign({ templateFactory: Ks }, i))), n.appendInto(t)), n.setValue(e), n.commit();
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
class Zs {
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
    return a === "." ? new Ws(t, i.slice(1), n).parts : a === "@" ? [new Us(t, i.slice(1), r.eventContext)] : a === "?" ? [new Gs(t, i.slice(1), n)] : new Fa(t, i, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(t) {
    return new li(t);
  }
}
const Ha = new Zs();
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
const u = (e, ...t) => new Hn(e, t, "html", Ha), V = (e, ...t) => new Bs(e, t, "svg", Ha);
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
const Ba = (e, t) => `${e}--${t}`;
let Li = !0;
typeof window.ShadyCSS > "u" ? Li = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Li = !1);
const Xs = (e) => (t) => {
  const i = Ba(t.type, e);
  let n = ai.get(i);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ai.set(i, n));
  let r = n.stringsArray.get(t.strings);
  if (r !== void 0)
    return r;
  const a = t.strings.join(Ye);
  if (r = n.keyString.get(a), r === void 0) {
    const o = t.getTemplateElement();
    Li && window.ShadyCSS.prepareTemplateDom(o, e), r = new Va(t, o), n.keyString.set(a, r);
  }
  return n.stringsArray.set(t.strings, r), r;
}, Ys = ["html", "svg"], Qs = (e) => {
  Ys.forEach((t) => {
    const i = ai.get(Ba(t, e));
    i !== void 0 && i.keyString.forEach((n) => {
      const { element: { content: r } } = n, a = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((o) => {
        a.add(o);
      }), Ma(n, a);
    });
  });
}, Ga = /* @__PURE__ */ new Set(), Js = (e, t, i) => {
  Ga.add(e);
  const n = i ? i.element : document.createElement("template"), r = t.querySelectorAll("style"), { length: a } = r;
  if (a === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, e);
    return;
  }
  const o = document.createElement("style");
  for (let p = 0; p < a; p++) {
    const m = r[p];
    m.parentNode.removeChild(m), o.textContent += m.textContent;
  }
  Qs(e);
  const c = n.content;
  i ? qs(i, o, c.firstChild) : c.insertBefore(o, c.firstChild), window.ShadyCSS.prepareTemplateStyles(n, e);
  const l = c.querySelector("style");
  if (window.ShadyCSS.nativeShadow && l !== null)
    t.insertBefore(l.cloneNode(!0), t.firstChild);
  else if (i) {
    c.insertBefore(o, c.firstChild);
    const p = /* @__PURE__ */ new Set();
    p.add(o), Ma(i, p);
  }
}, ec = (e, t, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = i.scopeName, r = Pt.has(t), a = Li && t.nodeType === 11 && !!t.host, o = a && !Ga.has(n), c = o ? document.createDocumentFragment() : t;
  if (Gn(e, c, Object.assign({ templateFactory: Xs(n) }, i)), o) {
    const l = Pt.get(c);
    Pt.delete(c);
    const p = l.value instanceof vn ? l.value.template : void 0;
    Js(n, c, p), Fn(t, t.firstChild), t.appendChild(c), Pt.set(t, l);
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
var Wa;
window.JSCompiler_renameProperty = (e, t) => e;
const xn = {
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
}, Ua = (e, t) => t !== e && (t === t || e === e), an = {
  attribute: !0,
  type: String,
  converter: xn,
  reflect: !1,
  hasChanged: Ua
}, on = 1, Br = 4, Gr = 8, Wr = 16, An = "finalized";
class ja extends HTMLElement {
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
  static createProperty(t, i = an) {
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
    return this._classProperties && this._classProperties.get(t) || an;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (t.hasOwnProperty(An) || t.finalize(), this[An] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(t, i, n = Ua) {
    return n(t, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(t, i) {
    const n = i.type, r = i.converter || xn, a = typeof r == "function" ? r : r.fromAttribute;
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
    return (r && r.toAttribute || xn.toAttribute)(t, n);
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
  _propertyToAttribute(t, i, n = an) {
    const r = this.constructor, a = r._attributeNameForProperty(t, n);
    if (a !== void 0) {
      const o = r._propertyValueToAttribute(i, n);
      if (o === void 0)
        return;
      this._updateState = this._updateState | Gr, o == null ? this.removeAttribute(a) : this.setAttribute(a, o), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(t, i) {
    if (this._updateState & Gr)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(t);
    if (r !== void 0) {
      const a = n.getPropertyOptions(r);
      this._updateState = this._updateState | Wr, this[r] = // tslint:disable-next-line:no-any
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
      n = n || a.getPropertyOptions(t), a._valueHasChanged(this[t], i, n.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, i), n.reflect === !0 && !(this._updateState & Wr) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(t, n))) : r = !1;
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
    this._updateState = this._updateState | Br;
    try {
      await this._updatePromise;
    } catch {
    }
    const t = this.performUpdate();
    return t != null && await t, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Br;
  }
  get hasUpdated() {
    return this._updateState & on;
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
    t && (this._updateState & on || (this._updateState = this._updateState | on, this.firstUpdated(i)), this.updated(i));
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
Wa = An;
ja[Wa] = !0;
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
const tc = (e, t) => (window.customElements.define(e, t), t), ic = (e, t) => {
  const { kind: i, elements: n } = t;
  return {
    kind: i,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(e, r);
    }
  };
}, ue = (e) => (t) => typeof t == "function" ? tc(e, t) : ic(e, t), nc = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), { finisher(i) {
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
}, rc = (e, t, i) => {
  t.constructor.createProperty(i, e);
};
function y(e) {
  return (t, i) => i !== void 0 ? rc(e, t, i) : nc(e, t);
}
function ac(e) {
  return y({ attribute: !1, hasChanged: void 0 });
}
const H = (e) => ac();
function X(e, t) {
  return (i, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? Wn(r, i, n) : Un(r, i);
  };
}
function Ka(e) {
  return (t, i) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? Wn(n, t, i) : Un(n, t);
  };
}
const Wn = (e, t, i) => {
  Object.defineProperty(t, i, e);
}, Un = (e, t) => ({
  kind: "method",
  placement: "prototype",
  key: t.key,
  descriptor: e
}), oc = (e, t) => Object.assign(Object.assign({}, t), { finisher(i) {
  Object.assign(i.prototype[t.key], e);
} }), sc = (
  // tslint:disable-next-line:no-any legacy decorator
  (e, t, i) => {
    Object.assign(t[i], e);
  }
);
function cc(e) {
  return (t, i) => i !== void 0 ? sc(e, t, i) : oc(e, t);
}
const Ur = Element.prototype, lc = Ur.msMatchesSelector || Ur.webkitMatchesSelector;
function Za(e = "", t = !1, i = "") {
  return (n, r) => {
    const a = {
      get() {
        const o = `slot${e ? `[name=${e}]` : ":not([name])"}`, c = this.renderRoot.querySelector(o);
        let l = c && c.assignedNodes({ flatten: t });
        return l && i && (l = l.filter((p) => p.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (p.matches ? p.matches(i) : lc.call(p, i)))), l;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Wn(a, n, r) : Un(a, n);
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
const Sn = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, jn = Symbol();
class Kn {
  constructor(t, i) {
    if (i !== jn)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Sn ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Xa = (e) => new Kn(String(e), jn), dc = (e) => {
  if (e instanceof Kn)
    return e.cssText;
  if (typeof e == "number")
    return e;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, we = (e, ...t) => {
  const i = t.reduce((n, r, a) => n + dc(r) + e[a + 1], e[0]);
  return new Kn(i, jn);
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
const jr = {};
class fe extends ja {
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
      const i = (a, o) => a.reduceRight((c, l) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(l) ? i(l, c) : (c.add(l), c)
      ), o), n = i(t, /* @__PURE__ */ new Set()), r = [];
      n.forEach((a) => r.unshift(a)), this._styles = r;
    } else
      this._styles = t === void 0 ? [] : [t];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !Sn) {
        const n = Array.prototype.slice.call(i.cssRules).reduce((r, a) => r + a.cssText, "");
        return Xa(n);
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
    t.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((i) => i.cssText), this.localName) : Sn ? this.renderRoot.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(t), i !== jr && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
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
    return jr;
  }
}
fe.finalized = !0;
fe.render = ec;
fe.shadowRootOptions = { mode: "open" };
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yt = { exports: {} }, Kr;
function pc() {
  if (Kr) return Yt.exports;
  Kr = 1, Yt.exports = e, Yt.exports.addWheelListener = e, Yt.exports.removeWheelListener = t;
  function e(i, n, r) {
    i.addEventListener("wheel", n, r);
  }
  function t(i, n, r) {
    i.removeEventListener("wheel", n, r);
  }
  return Yt.exports;
}
var Qt = { exports: {} }, sn, Zr;
function mc() {
  if (Zr) return sn;
  Zr = 1;
  var e = 4, t = 1e-3, i = 1e-7, n = 10, r = 11, a = 1 / (r - 1), o = typeof Float32Array == "function";
  function c(E, C) {
    return 1 - 3 * C + 3 * E;
  }
  function l(E, C) {
    return 3 * C - 6 * E;
  }
  function p(E) {
    return 3 * E;
  }
  function m(E, C, x) {
    return ((c(C, x) * E + l(C, x)) * E + p(C)) * E;
  }
  function h(E, C, x) {
    return 3 * c(C, x) * E * E + 2 * l(C, x) * E + p(C);
  }
  function b(E, C, x, z, L) {
    var O, ee, ke = 0;
    do
      ee = C + (x - C) / 2, O = m(ee, z, L) - E, O > 0 ? x = ee : C = ee;
    while (Math.abs(O) > i && ++ke < n);
    return ee;
  }
  function w(E, C, x, z) {
    for (var L = 0; L < e; ++L) {
      var O = h(C, x, z);
      if (O === 0)
        return C;
      var ee = m(C, x, z) - E;
      C -= ee / O;
    }
    return C;
  }
  function S(E) {
    return E;
  }
  return sn = function(C, x, z, L) {
    if (!(0 <= C && C <= 1 && 0 <= z && z <= 1))
      throw new Error("bezier x values must be in [0, 1] range");
    if (C === x && z === L)
      return S;
    for (var O = o ? new Float32Array(r) : new Array(r), ee = 0; ee < r; ++ee)
      O[ee] = m(ee * a, C, z);
    function ke(T) {
      for (var I = 0, P = 1, M = r - 1; P !== M && O[P] <= T; ++P)
        I += a;
      --P;
      var se = (T - O[P]) / (O[P + 1] - O[P]), ie = I + se * a, D = h(ie, C, z);
      return D >= t ? w(T, ie, C, z) : D === 0 ? ie : b(T, I, I + a, C, z);
    }
    return function(I) {
      return I === 0 ? 0 : I === 1 ? 1 : m(ke(I), x, L);
    };
  }, sn;
}
var Xr;
function hc() {
  if (Xr) return Qt.exports;
  Xr = 1;
  var e = mc(), t = {
    ease: e(0.25, 0.1, 0.25, 1),
    easeIn: e(0.42, 0, 1, 1),
    easeOut: e(0, 0, 0.58, 1),
    easeInOut: e(0.42, 0, 0.58, 1),
    linear: e(0, 0, 1, 1)
  };
  Qt.exports = i, Qt.exports.makeAggregateRaf = c, Qt.exports.sharedScheduler = c();
  function i(l, p, m) {
    var h = /* @__PURE__ */ Object.create(null), b = /* @__PURE__ */ Object.create(null);
    m = m || {};
    var w = typeof m.easing == "function" ? m.easing : t[m.easing];
    w || (m.easing && console.warn("Unknown easing function in amator: " + m.easing), w = t.ease);
    var S = typeof m.step == "function" ? m.step : n, E = typeof m.done == "function" ? m.done : n, C = r(m.scheduler), x = Object.keys(p);
    x.forEach(function(P) {
      h[P] = l[P], b[P] = p[P] - l[P];
    });
    var z = typeof m.duration == "number" ? m.duration : 400, L = Math.max(1, z * 0.06), O, ee = 0;
    return O = C.next(T), {
      cancel: ke
    };
    function ke() {
      C.cancel(O), O = 0;
    }
    function T() {
      var P = w(ee / L);
      ee += 1, I(P), ee <= L ? (O = C.next(T), S(l)) : (O = 0, setTimeout(function() {
        E(l);
      }, 0));
    }
    function I(P) {
      x.forEach(function(M) {
        l[M] = b[M] * P + h[M];
      });
    }
  }
  function n() {
  }
  function r(l) {
    if (!l) {
      var p = typeof window < "u" && window.requestAnimationFrame;
      return p ? a() : o();
    }
    if (typeof l.next != "function") throw new Error("Scheduler is supposed to have next(cb) function");
    if (typeof l.cancel != "function") throw new Error("Scheduler is supposed to have cancel(handle) function");
    return l;
  }
  function a() {
    return {
      next: window.requestAnimationFrame.bind(window),
      cancel: window.cancelAnimationFrame.bind(window)
    };
  }
  function o() {
    return {
      next: function(l) {
        return setTimeout(l, 1e3 / 60);
      },
      cancel: function(l) {
        return clearTimeout(l);
      }
    };
  }
  function c() {
    var l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m = 0;
    return {
      next: b,
      cancel: b,
      clearAll: h
    };
    function h() {
      l.clear(), p.clear(), cancelAnimationFrame(m), m = 0;
    }
    function b(E) {
      p.add(E), w();
    }
    function w() {
      m || (m = requestAnimationFrame(S));
    }
    function S() {
      m = 0;
      var E = p;
      p = l, l = E, l.forEach(function(C) {
        C();
      }), l.clear();
    }
  }
  return Qt.exports;
}
var cn, Yr;
function fc() {
  if (Yr) return cn;
  Yr = 1, cn = function(n) {
    t(n);
    var r = e(n);
    return n.on = r.on, n.off = r.off, n.fire = r.fire, n;
  };
  function e(i) {
    var n = /* @__PURE__ */ Object.create(null);
    return {
      on: function(r, a, o) {
        if (typeof a != "function")
          throw new Error("callback is expected to be a function");
        var c = n[r];
        return c || (c = n[r] = []), c.push({ callback: a, ctx: o }), i;
      },
      off: function(r, a) {
        var o = typeof r > "u";
        if (o)
          return n = /* @__PURE__ */ Object.create(null), i;
        if (n[r]) {
          var c = typeof a != "function";
          if (c)
            delete n[r];
          else
            for (var l = n[r], p = 0; p < l.length; ++p)
              l[p].callback === a && l.splice(p, 1);
        }
        return i;
      },
      fire: function(r) {
        var a = n[r];
        if (!a)
          return i;
        var o;
        arguments.length > 1 && (o = Array.prototype.splice.call(arguments, 1));
        for (var c = 0; c < a.length; ++c) {
          var l = a[c];
          l.callback.apply(l.ctx, o);
        }
        return i;
      }
    };
  }
  function t(i) {
    if (!i)
      throw new Error("Eventify cannot use falsy object as events subject");
    for (var n = ["on", "fire", "off"], r = 0; r < n.length; ++r)
      if (i.hasOwnProperty(n[r]))
        throw new Error("Subject cannot be eventified, since it already has property '" + n[r] + "'");
  }
  return cn;
}
var ln, Qr;
function bc() {
  if (Qr) return ln;
  Qr = 1, ln = e;
  function e(n, r, a) {
    typeof a != "object" && (a = {});
    var o = typeof a.minVelocity == "number" ? a.minVelocity : 5, c = typeof a.amplitude == "number" ? a.amplitude : 0.25, l = typeof a.cancelAnimationFrame == "function" ? a.cancelAnimationFrame : t(), p = typeof a.requestAnimationFrame == "function" ? a.requestAnimationFrame : i(), m, h, b = 342, w, S, E, C, x, z, L, O;
    return {
      start: ke,
      stop: I,
      cancel: ee
    };
    function ee() {
      l(w), l(O);
    }
    function ke() {
      m = n(), C = L = S = x = 0, h = /* @__PURE__ */ new Date(), l(w), l(O), w = p(T);
    }
    function T() {
      var M = Date.now(), se = M - h;
      h = M;
      var ie = n(), D = ie.x - m.x, it = ie.y - m.y;
      m = ie;
      var nt = 1e3 / (1 + se);
      S = 0.8 * D * nt + 0.2 * S, x = 0.8 * it * nt + 0.2 * x, w = p(T);
    }
    function I() {
      l(w), l(O);
      var M = n();
      E = M.x, z = M.y, h = Date.now(), (S < -o || S > o) && (C = c * S, E += C), (x < -o || x > o) && (L = c * x, z += L), O = p(P);
    }
    function P() {
      var M = Date.now() - h, se = !1, ie = 0, D = 0;
      C && (ie = -C * Math.exp(-M / b), ie > 0.5 || ie < -0.5 ? se = !0 : ie = C = 0), L && (D = -L * Math.exp(-M / b), D > 0.5 || D < -0.5 ? se = !0 : D = L = 0), se && (r(E + ie, z + D), O = p(P));
    }
  }
  function t() {
    return typeof cancelAnimationFrame == "function" ? cancelAnimationFrame : clearTimeout;
  }
  function i() {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame : function(n) {
      return setTimeout(n, 16);
    };
  }
  return ln;
}
var dn, Jr;
function gc() {
  if (Jr) return dn;
  Jr = 1, dn = e;
  function e(n) {
    if (n)
      return {
        capture: i,
        release: i
      };
    var r, a, o, c = !1;
    return {
      capture: l,
      release: p
    };
    function l(m) {
      c = !0, a = window.document.onselectstart, o = window.document.ondragstart, window.document.onselectstart = t, r = m, r.ondragstart = t;
    }
    function p() {
      c && (c = !1, window.document.onselectstart = a, r && (r.ondragstart = o));
    }
  }
  function t(n) {
    return n.stopPropagation(), !1;
  }
  function i() {
  }
  return dn;
}
var un, ea;
function yc() {
  if (ea) return un;
  ea = 1, un = e;
  function e() {
    this.x = 0, this.y = 0, this.scale = 1;
  }
  return un;
}
var Ai = { exports: {} }, ta;
function vc() {
  if (ta) return Ai.exports;
  ta = 1, Ai.exports = e, Ai.exports.canAttach = t;
  function e(i, n) {
    if (!t(i))
      throw new Error("svg element is required for svg.panzoom to work");
    var r = i.ownerSVGElement;
    if (!r)
      throw new Error(
        "Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element"
      );
    n.disableKeyboardInteraction || r.setAttribute("tabindex", 0);
    var a = {
      getBBox: c,
      getScreenCTM: l,
      getOwner: o,
      applyTransform: m,
      initTransform: p
    };
    return a;
    function o() {
      return r;
    }
    function c() {
      var h = i.getBBox();
      return {
        left: h.x,
        top: h.y,
        width: h.width,
        height: h.height
      };
    }
    function l() {
      var h = r.getCTM();
      return h || r.getScreenCTM();
    }
    function p(h) {
      var b = i.getCTM();
      b === null && (b = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix()), h.x = b.e, h.y = b.f, h.scale = b.a, r.removeAttributeNS(null, "viewBox");
    }
    function m(h) {
      i.setAttribute("transform", "matrix(" + h.scale + " 0 0 " + h.scale + " " + h.x + " " + h.y + ")");
    }
  }
  function t(i) {
    return i && i.ownerSVGElement && i.getCTM;
  }
  return Ai.exports;
}
var Si = { exports: {} }, ia;
function wc() {
  if (ia) return Si.exports;
  ia = 1, Si.exports = e, Si.exports.canAttach = t;
  function e(i, n) {
    var r = t(i);
    if (!r)
      throw new Error("panzoom requires DOM element to be attached to the DOM tree");
    var a = i.parentElement;
    i.scrollTop = 0, n.disableKeyboardInteraction || a.setAttribute("tabindex", 0);
    var o = {
      getBBox: l,
      getOwner: c,
      applyTransform: p
    };
    return o;
    function c() {
      return a;
    }
    function l() {
      return {
        left: 0,
        top: 0,
        width: i.clientWidth,
        height: i.clientHeight
      };
    }
    function p(m) {
      i.style.transformOrigin = "0 0 0", i.style.transform = "matrix(" + m.scale + ", 0, 0, " + m.scale + ", " + m.x + ", " + m.y + ")";
    }
  }
  function t(i) {
    return i && i.parentElement && i.style;
  }
  return Si.exports;
}
var pn, na;
function xc() {
  if (na) return pn;
  na = 1;
  var e = pc(), t = hc(), i = fc(), n = bc(), r = gc(), a = r(), o = r(!0), c = yc(), l = vc(), p = wc(), m = 1, h = 1.75, b = 300, w = 200;
  pn = S;
  function S(T, I) {
    I = I || {};
    var P = I.controller;
    if (P || (l.canAttach(T) ? P = l(T, I) : p.canAttach(T) && (P = p(T, I))), !P)
      throw new Error(
        "Cannot create panzoom for the current type of dom element"
      );
    var M = P.getOwner(), se = { x: 0, y: 0 }, ie = !1, D = new c();
    P.initTransform && P.initTransform(D);
    var it = typeof I.filterKey == "function" ? I.filterKey : x, nt = typeof I.pinchSpeed == "number" ? I.pinchSpeed : 1, Ue = I.bounds, te = typeof I.maxZoom == "number" ? I.maxZoom : Number.POSITIVE_INFINITY, ge = typeof I.minZoom == "number" ? I.minZoom : 0, Se = typeof I.boundsPadding == "number" ? I.boundsPadding : 0.05, De = typeof I.zoomDoubleClickSpeed == "number" ? I.zoomDoubleClickSpeed : h, Ui = I.beforeWheel || x, Bt = I.beforeMouseDown || x, ji = typeof I.zoomSpeed == "number" ? I.zoomSpeed : m, je = E(I.transformOrigin), Ki = I.enableTextSelection ? o : a;
    z(Ue), I.autocenter && us();
    var Gt, dr = 0, ur = 0, Wt = 0, pr = null, mr = /* @__PURE__ */ new Date(), Zi, Ut = !1, jt = !1, Te, Le, Xi, Yi, Qi, Ve;
    "smoothScroll" in I && !I.smoothScroll ? Ve = ee() : Ve = n(xs, Ns, I.smoothScroll);
    var Ji, Kt, hi, fi = !1;
    wr();
    var bi = {
      dispose: Is,
      moveBy: Dt,
      moveTo: en,
      smoothMoveTo: Cs,
      centerOn: Es,
      zoomTo: wi,
      zoomAbs: gi,
      smoothZoom: vi,
      smoothZoomAbs: zs,
      showRectangle: ds,
      pause: ss,
      resume: cs,
      isPaused: ls,
      getTransform: ps,
      getMinZoom: ms,
      setMinZoom: hs,
      getMaxZoom: fs,
      setMaxZoom: bs,
      getTransformOrigin: gs,
      setTransformOrigin: ys,
      getZoomSpeed: vs,
      setZoomSpeed: ws
    };
    i(bi);
    var hr = typeof I.initialX == "number" ? I.initialX : D.x, fr = typeof I.initialY == "number" ? I.initialY : D.y, br = typeof I.initialZoom == "number" ? I.initialZoom : D.scale;
    return (hr != D.x || fr != D.y || br != D.scale) && gi(hr, fr, br), bi;
    function ss() {
      xr(), fi = !0;
    }
    function cs() {
      fi && (wr(), fi = !1);
    }
    function ls() {
      return fi;
    }
    function ds(f) {
      var v = M.getBoundingClientRect(), A = xt(v.width, v.height), k = f.right - f.left, q = f.bottom - f.top;
      if (!Number.isFinite(k) || !Number.isFinite(q))
        throw new Error("Invalid rectangle");
      var K = A.x / k, Z = A.y / q, le = Math.min(K, Z);
      D.x = -(f.left + k / 2) * le + A.x / 2, D.y = -(f.top + q / 2) * le + A.y / 2, D.scale = le;
    }
    function xt(f, v) {
      if (P.getScreenCTM) {
        var A = P.getScreenCTM(), k = A.a, q = A.d, K = A.e, Z = A.f;
        se.x = f * k - K, se.y = v * q - Z;
      } else
        se.x = f, se.y = v;
      return se;
    }
    function us() {
      var f, v, A = 0, k = 0, q = yr();
      if (q)
        A = q.left, k = q.top, f = q.right - q.left, v = q.bottom - q.top;
      else {
        var K = M.getBoundingClientRect();
        f = K.width, v = K.height;
      }
      var Z = P.getBBox();
      if (!(Z.width === 0 || Z.height === 0)) {
        var le = v / Z.height, Lt = f / Z.width, At = Math.min(Lt, le);
        D.x = -(Z.left + Z.width / 2) * At + f / 2 + A, D.y = -(Z.top + Z.height / 2) * At + v / 2 + k, D.scale = At;
      }
    }
    function ps() {
      return D;
    }
    function ms() {
      return ge;
    }
    function hs(f) {
      ge = f;
    }
    function fs() {
      return te;
    }
    function bs(f) {
      te = f;
    }
    function gs() {
      return je;
    }
    function ys(f) {
      je = E(f);
    }
    function vs() {
      return ji;
    }
    function ws(f) {
      if (!Number.isFinite(f))
        throw new Error("Zoom speed should be a number");
      ji = f;
    }
    function xs() {
      return {
        x: D.x,
        y: D.y
      };
    }
    function en(f, v) {
      D.x = f, D.y = v, tn(), Tt("pan"), nn();
    }
    function gr(f, v) {
      en(D.x + f, D.y + v);
    }
    function tn() {
      var f = yr();
      if (f) {
        var v = !1, A = As(), k = f.left - A.right;
        return k > 0 && (D.x += k, v = !0), k = f.right - A.left, k < 0 && (D.x += k, v = !0), k = f.top - A.bottom, k > 0 && (D.y += k, v = !0), k = f.bottom - A.top, k < 0 && (D.y += k, v = !0), v;
      }
    }
    function yr() {
      if (Ue) {
        if (typeof Ue == "boolean") {
          var f = M.getBoundingClientRect(), v = f.width, A = f.height;
          return {
            left: v * Se,
            top: A * Se,
            right: v * (1 - Se),
            bottom: A * (1 - Se)
          };
        }
        return Ue;
      }
    }
    function As() {
      var f = P.getBBox(), v = Ss(f.left, f.top);
      return {
        left: v.x,
        top: v.y,
        right: f.width * D.scale + v.x,
        bottom: f.height * D.scale + v.y
      };
    }
    function Ss(f, v) {
      return {
        x: f * D.scale + D.x,
        y: v * D.scale + D.y
      };
    }
    function nn() {
      ie = !0, Gt = window.requestAnimationFrame(ks);
    }
    function vr(f, v, A) {
      if (O(f) || O(v) || O(A))
        throw new Error("zoom requires valid numbers");
      var k = D.scale * A;
      if (k < ge) {
        if (D.scale === ge) return;
        A = ge / D.scale;
      }
      if (k > te) {
        if (D.scale === te) return;
        A = te / D.scale;
      }
      var q = xt(f, v);
      if (D.x = q.x - A * (q.x - D.x), D.y = q.y - A * (q.y - D.y), Ue && Se === 1 && ge === 1)
        D.scale *= A, tn();
      else {
        var K = tn();
        K || (D.scale *= A);
      }
      Tt("zoom"), nn();
    }
    function gi(f, v, A) {
      var k = A / D.scale;
      vr(f, v, k);
    }
    function Es(f) {
      var v = f.ownerSVGElement;
      if (!v)
        throw new Error("ui element is required to be within the scene");
      var A = f.getBoundingClientRect(), k = A.left + A.width / 2, q = A.top + A.height / 2, K = v.getBoundingClientRect(), Z = K.width / 2 - k, le = K.height / 2 - q;
      Dt(Z, le, !0);
    }
    function Cs(f, v) {
      Dt(f - D.x, v - D.y, !0);
    }
    function Dt(f, v, A) {
      if (!A)
        return gr(f, v);
      Ji && Ji.cancel();
      var k = { x: 0, y: 0 }, q = { x: f, y: v }, K = 0, Z = 0;
      Ji = t(k, q, {
        step: function(le) {
          gr(le.x - K, le.y - Z), K = le.x, Z = le.y;
        }
      });
    }
    function Ns(f, v) {
      xi(), en(f, v);
    }
    function Is() {
      xr();
    }
    function wr() {
      M.addEventListener("mousedown", $r, { passive: !1 }), M.addEventListener("dblclick", kr, { passive: !1 }), M.addEventListener("touchstart", Sr, { passive: !1 }), M.addEventListener("keydown", Ar, { passive: !1 }), e.addWheelListener(M, zr, { passive: !1 }), nn();
    }
    function xr() {
      e.removeWheelListener(M, zr), M.removeEventListener("mousedown", $r), M.removeEventListener("keydown", Ar), M.removeEventListener("dblclick", kr), M.removeEventListener("touchstart", Sr), Gt && (window.cancelAnimationFrame(Gt), Gt = 0), Ve.cancel(), Tr(), Lr(), Ki.release(), rn();
    }
    function ks() {
      ie && $s();
    }
    function $s() {
      ie = !1, P.applyTransform(D), Tt("transform"), Gt = 0;
    }
    function Ar(f) {
      var v = 0, A = 0, k = 0;
      if (f.keyCode === 38 ? A = 1 : f.keyCode === 40 ? A = -1 : f.keyCode === 37 ? v = 1 : f.keyCode === 39 ? v = -1 : f.keyCode === 189 || f.keyCode === 109 ? k = 1 : (f.keyCode === 187 || f.keyCode === 107) && (k = -1), !it(f, v, A, k)) {
        if (v || A) {
          f.preventDefault(), f.stopPropagation();
          var q = M.getBoundingClientRect(), K = Math.min(q.width, q.height), Z = 0.05, le = K * Z * v, Lt = K * Z * A;
          Dt(le, Lt);
        }
        if (k) {
          var At = Pr(k * 100), K = je ? Xt() : _s();
          wi(K.x, K.y, At);
        }
      }
    }
    function _s() {
      var f = M.getBoundingClientRect();
      return {
        x: f.width / 2,
        y: f.height / 2
      };
    }
    function Sr(f) {
      if (Ds(f), Zt(), f.touches.length === 1)
        return Ls(f, f.touches[0]);
      f.touches.length === 2 && (Qi = Ir(f.touches[0], f.touches[1]), hi = !0, Er());
    }
    function Ds(f) {
      I.onTouch && !I.onTouch(f) || (f.stopPropagation(), f.preventDefault());
    }
    function Ts(f) {
      Zt(), !(I.onDoubleClick && !I.onDoubleClick(f)) && (f.preventDefault(), f.stopPropagation());
    }
    function Ls(f) {
      ur = /* @__PURE__ */ new Date();
      var v = f.touches[0], A = Ke(v);
      Zi = A;
      var k = xt(A.x, A.y);
      Te = k.x, Le = k.y, Xi = Te, Yi = Le, Ve.cancel(), Er();
    }
    function Er() {
      Ut || (Ut = !0, document.addEventListener("touchmove", Cr), document.addEventListener("touchend", yi), document.addEventListener("touchcancel", yi));
    }
    function Cr(f) {
      if (f.touches.length === 1) {
        f.stopPropagation();
        var v = f.touches[0], A = Ke(v), k = xt(A.x, A.y), q = k.x - Te, K = k.y - Le;
        q !== 0 && K !== 0 && Vr(), Te = k.x, Le = k.y, Dt(q, K);
      } else if (f.touches.length === 2) {
        hi = !0;
        var Z = f.touches[0], le = f.touches[1], Lt = Ir(Z, le), At = 1 + (Lt / Qi - 1) * nt, Rr = Ke(Z), Mr = Ke(le);
        if (Te = (Rr.x + Mr.x) / 2, Le = (Rr.y + Mr.y) / 2, je) {
          var A = Xt();
          Te = A.x, Le = A.y;
        }
        wi(Te, Le, At), Qi = Lt, f.stopPropagation(), f.preventDefault();
      }
    }
    function Zt() {
      Wt && (clearTimeout(Wt), Wt = 0);
    }
    function Nr(f) {
      if (I.onClick) {
        Zt();
        var v = Te - Xi, A = Le - Yi, k = Math.sqrt(v * v + A * A);
        k > 5 || (Wt = setTimeout(function() {
          Wt = 0, I.onClick(f);
        }, b));
      }
    }
    function yi(f) {
      if (Zt(), f.touches.length > 0) {
        var v = Ke(f.touches[0]), A = xt(v.x, v.y);
        Te = A.x, Le = A.y;
      } else {
        var k = /* @__PURE__ */ new Date();
        if (k - dr < b)
          if (je) {
            var v = Xt();
            vi(v.x, v.y, De);
          } else
            vi(Zi.x, Zi.y, De);
        else k - ur < w && Nr(f);
        dr = k, rn(), Lr();
      }
    }
    function Ir(f, v) {
      var A = f.clientX - v.clientX, k = f.clientY - v.clientY;
      return Math.sqrt(A * A + k * k);
    }
    function kr(f) {
      Ts(f);
      var v = Ke(f);
      je && (v = Xt()), vi(v.x, v.y, De);
    }
    function $r(f) {
      if (Zt(), !Bt(f)) {
        if (pr = f, mr = /* @__PURE__ */ new Date(), Ut)
          return f.stopPropagation(), !1;
        var v = f.button === 1 && window.event !== null || f.button === 0;
        if (v) {
          Ve.cancel();
          var A = Ke(f), k = xt(A.x, A.y);
          return Xi = Te = k.x, Yi = Le = k.y, document.addEventListener("mousemove", _r), document.addEventListener("mouseup", Dr), Ki.capture(f.target || f.srcElement), !1;
        }
      }
    }
    function _r(f) {
      if (!Ut) {
        Vr();
        var v = Ke(f), A = xt(v.x, v.y), k = A.x - Te, q = A.y - Le;
        Te = A.x, Le = A.y, Dt(k, q);
      }
    }
    function Dr() {
      var f = /* @__PURE__ */ new Date();
      f - mr < w && Nr(pr), Ki.release(), rn(), Tr();
    }
    function Tr() {
      document.removeEventListener("mousemove", _r), document.removeEventListener("mouseup", Dr), jt = !1;
    }
    function Lr() {
      document.removeEventListener("touchmove", Cr), document.removeEventListener("touchend", yi), document.removeEventListener("touchcancel", yi), jt = !1, hi = !1, Ut = !1;
    }
    function zr(f) {
      if (!Ui(f)) {
        Ve.cancel();
        var v = f.deltaY;
        f.deltaMode > 0 && (v *= 100);
        var A = Pr(v);
        if (A !== 1) {
          var k = je ? Xt() : Ke(f);
          wi(k.x, k.y, A), f.preventDefault();
        }
      }
    }
    function Ke(f) {
      var v, A, k = M.getBoundingClientRect();
      return v = f.clientX - k.left, A = f.clientY - k.top, { x: v, y: A };
    }
    function vi(f, v, A) {
      var k = D.scale, q = { scale: k }, K = { scale: A * k };
      Ve.cancel(), xi(), Kt = t(q, K, {
        step: function(Z) {
          gi(f, v, Z.scale);
        },
        done: Ps
      });
    }
    function zs(f, v, A) {
      var k = D.scale, q = { scale: k }, K = { scale: A };
      Ve.cancel(), xi(), Kt = t(q, K, {
        step: function(Z) {
          gi(f, v, Z.scale);
        }
      });
    }
    function Xt() {
      var f = M.getBoundingClientRect();
      return {
        x: f.width * je.x,
        y: f.height * je.y
      };
    }
    function wi(f, v, A) {
      return Ve.cancel(), xi(), vr(f, v, A);
    }
    function xi() {
      Kt && (Kt.cancel(), Kt = null);
    }
    function Pr(f) {
      var v = Math.sign(f), A = Math.min(0.25, Math.abs(ji * f / 128));
      return 1 - v * A;
    }
    function Vr() {
      jt || (Tt("panstart"), jt = !0, Ve.start());
    }
    function rn() {
      jt && (hi || Ve.stop(), Tt("panend"));
    }
    function Ps() {
      Tt("zoomend");
    }
    function Tt(f) {
      bi.fire(f, bi);
    }
  }
  function E(T) {
    if (T) {
      if (typeof T == "object")
        return (!L(T.x) || !L(T.y)) && C(T), T;
      C();
    }
  }
  function C(T) {
    throw console.error(T), new Error(
      [
        "Cannot parse transform origin.",
        "Some good examples:",
        '  "center center" can be achieved with {x: 0.5, y: 0.5}',
        '  "top center" can be achieved with {x: 0.5, y: 0}',
        '  "bottom right" can be achieved with {x: 1, y: 1}'
      ].join(`
`)
    );
  }
  function x() {
  }
  function z(T) {
    var I = typeof T;
    if (!(I === "undefined" || I === "boolean")) {
      var P = L(T.left) && L(T.top) && L(T.bottom) && L(T.right);
      if (!P)
        throw new Error(
          "Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}"
        );
    }
  }
  function L(T) {
    return Number.isFinite(T);
  }
  function O(T) {
    return Number.isNaN ? Number.isNaN(T) : T !== T;
  }
  function ee() {
    return {
      start: x,
      stop: x,
      cancel: x
    };
  }
  function ke() {
    if (typeof document > "u") return;
    var T = document.getElementsByTagName("script");
    if (!T) return;
    for (var I, P = 0; P < T.length; ++P) {
      var M = T[P];
      if (M.src && M.src.match(/\bpanzoom(\.min)?\.js/)) {
        I = M;
        break;
      }
    }
    if (!I) return;
    var se = I.getAttribute("query");
    if (!se) return;
    var ie = I.getAttribute("name") || "pz", D = Date.now();
    it();
    function it() {
      var te = document.querySelector(se);
      if (!te) {
        var ge = Date.now(), Se = ge - D;
        if (Se < 2e3) {
          setTimeout(it, 100);
          return;
        }
        console.error("Cannot find the panzoom element", ie);
        return;
      }
      var De = nt(I);
      console.log(De), window[ie] = S(te, De);
    }
    function nt(te) {
      for (var ge = te.attributes, Se = {}, De = 0; De < ge.length; ++De) {
        var Ui = ge[De], Bt = Ue(Ui);
        Bt && (Se[Bt.name] = Bt.value);
      }
      return Se;
    }
    function Ue(te) {
      if (te.name) {
        var ge = te.name[0] === "p" && te.name[1] === "z" && te.name[2] === "-";
        if (ge) {
          var Se = te.name.substr(3), De = JSON.parse(te.value);
          return { name: Se, value: De };
        }
      }
    }
  }
  return ke(), pn;
}
var Ac = xc();
const Sc = /* @__PURE__ */ uc(Ac);
function G(e, t, i) {
  const n = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function U(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function j(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
const Ec = 1e3 * 60, En = "langChanged";
function Cc(e, t, i) {
  return Object.entries(Cn(t || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Cn(a))), e);
}
function Nc(e, t) {
  const i = e.split(".");
  let n = t.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function Cn(e) {
  return typeof e == "function" ? e() : e;
}
const Ic = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: Nc,
  interpolate: Cc,
  translationCache: {}
});
let oi = Ic();
function kc(e) {
  return oi = Object.assign(Object.assign({}, oi), e);
}
function $c(e) {
  window.dispatchEvent(new CustomEvent(En, { detail: e }));
}
function _c(e, t, i = oi) {
  $c({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function Dc(e, t) {
  const i = (n) => e(n.detail);
  return window.addEventListener(En, i, t), () => window.removeEventListener(En, i);
}
async function Tc(e, t = oi) {
  const i = await t.loader(e, t);
  t.translationCache = {}, _c(e, i, t);
}
function d(e, t, i = oi) {
  let n = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? Cn(t) : null, t != null ? i.interpolate(n, t, i) : n;
}
function Ya(e) {
  return e instanceof li ? e.startNode.isConnected : e instanceof Mt ? e.committer.element.isConnected : e.element.isConnected;
}
function Lc(e) {
  for (const [t] of e)
    Ya(t) || e.delete(t);
}
function zc(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Pc(e, t) {
  setInterval(() => zc(() => Lc(e)), t);
}
const Qa = /* @__PURE__ */ new Map();
function Vc() {
  Dc((e) => {
    for (const [t, i] of Qa)
      Ya(t) && Rc(t, i, e);
  });
}
Vc();
Pc(Qa, Ec);
function Rc(e, t, i) {
  const n = t(i);
  e.value !== n && (e.setValue(n), e.commit());
}
var Nn = function(e, t) {
  return Nn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, Nn(e, t);
};
function Mc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Nn(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var ii = function() {
  return ii = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, ii.apply(this, arguments);
};
function N(e, t, i, n) {
  var r = arguments.length, a = r < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, n);
  else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
  return r > 3 && a && Object.defineProperty(t, i, a), a;
}
function Ei(e) {
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
function Oc(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Fc = (e) => e.nodeType === Node.ELEMENT_NODE, Ja = () => {
}, qc = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Ja, qc);
document.removeEventListener("x", Ja);
const eo = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, Hc = (e) => {
  const t = eo();
  if (!t.length)
    return !1;
  const i = t[t.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (o) => {
    r = o.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Zn extends fe {
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
var to = (
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
var Bc = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Gc = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ra = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Wc(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var n = t.x, r = t.y, a = n + i.left, o = r + i.top, c, l;
  if (e.type === "touchstart") {
    var p = e;
    c = p.changedTouches[0].pageX - a, l = p.changedTouches[0].pageY - o;
  } else {
    var m = e;
    c = m.pageX - a, l = m.pageY - o;
  }
  return { x: c, y: l };
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
var aa = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], oa = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ci = [], Uc = (
  /** @class */
  function(e) {
    Mc(t, e);
    function t(i) {
      var n = e.call(this, ii(ii({}, t.defaultAdapter), i)) || this;
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
        return Bc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Gc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return ra;
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
        var r = t.cssClasses, a = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(o), i.layoutInternal());
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
          for (var a = Ei(aa), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
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
          for (var a = Ei(oa), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = Ei(aa), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (c) {
        i = { error: c };
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
        for (var r = Ei(oa), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (c) {
        i = { error: c };
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
          var a = this.previousActivationEvent, o = a && i !== void 0 && a.type !== i.type;
          if (!o) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var c = i !== void 0 && Ci.length > 0 && Ci.some(function(l) {
              return n.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Ci.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ci = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, n = t.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = t.cssClasses, c = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, p = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), w = b.startPoint, S = b.endPoint;
        m = w.x + "px, " + w.y + "px", h = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(r, m), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, p);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = Wc(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = t.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, o = r.isActivated, c = a || !o;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, ra.FG_DEACTIVATION_MS));
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
        var r = ii({}, n);
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
        var o = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return o + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, a = i.VAR_TOP, o = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(to)
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
class jc {
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
const sa = /* @__PURE__ */ new WeakMap(), Ot = Pi((e) => (t) => {
  if (!(t instanceof Mt) || t instanceof Bn || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: n } = i;
  let r = sa.get(t);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), sa.set(t, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new jc(n);
  r.forEach((o) => {
    o in e || (a.remove(o), r.delete(o));
  });
  for (const o in e) {
    const c = e[o];
    c != r.has(o) && (c ? (a.add(o), r.add(o)) : (a.remove(o), r.delete(o)));
  }
  typeof a.commit == "function" && a.commit();
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
const ca = /* @__PURE__ */ new WeakMap(), Kc = Pi((e) => (t) => {
  if (!(t instanceof Mt) || t instanceof Bn || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: n } = i.element;
  let r = ca.get(t);
  r === void 0 && (n.cssText = i.strings.join(" "), ca.set(t, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in e || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in e)
    r.add(a), a.indexOf("-") === -1 ? n[a] = e[a] : n.setProperty(a, e[a]);
});
class oe extends Zn {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Uc;
  }
  get isActive() {
    return Oc(this.parentElement || this, ":active");
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ot(n)}"
          style="${Kc({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
N([
  X(".mdc-ripple-surface")
], oe.prototype, "mdcRoot", void 0);
N([
  y({ type: Boolean })
], oe.prototype, "primary", void 0);
N([
  y({ type: Boolean })
], oe.prototype, "accent", void 0);
N([
  y({ type: Boolean })
], oe.prototype, "unbounded", void 0);
N([
  y({ type: Boolean })
], oe.prototype, "disabled", void 0);
N([
  y({ type: Boolean })
], oe.prototype, "activated", void 0);
N([
  y({ type: Boolean })
], oe.prototype, "selected", void 0);
N([
  y({ type: Boolean })
], oe.prototype, "internalUseStateLayerCustomProperties", void 0);
N([
  H()
], oe.prototype, "hovering", void 0);
N([
  H()
], oe.prototype, "bgFocused", void 0);
N([
  H()
], oe.prototype, "fgActivation", void 0);
N([
  H()
], oe.prototype, "fgDeactivation", void 0);
N([
  H()
], oe.prototype, "fgScale", void 0);
N([
  H()
], oe.prototype, "fgSize", void 0);
N([
  H()
], oe.prototype, "translateStart", void 0);
N([
  H()
], oe.prototype, "translateEnd", void 0);
N([
  H()
], oe.prototype, "leftPos", void 0);
N([
  H()
], oe.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Zc = we`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let In = class extends oe {
};
In.styles = [Zc];
In = N([
  ue("mwc-ripple")
], In);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const pt = (e) => (
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
        n.call(this, r), r.forEach((a, o) => {
          const l = this.constructor._observers.get(o);
          l !== void 0 && l.call(this, this[o], a);
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
class io {
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
class pe extends fe {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new io(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ot(t)}">
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
N([
  X("slot")
], pe.prototype, "slotElement", void 0);
N([
  Ka("mwc-ripple")
], pe.prototype, "ripple", void 0);
N([
  y({ type: String })
], pe.prototype, "value", void 0);
N([
  y({ type: String, reflect: !0 })
], pe.prototype, "group", void 0);
N([
  y({ type: Number, reflect: !0 })
], pe.prototype, "tabindex", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  pt(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], pe.prototype, "disabled", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], pe.prototype, "twoline", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], pe.prototype, "activated", void 0);
N([
  y({ type: String, reflect: !0 })
], pe.prototype, "graphic", void 0);
N([
  y({ type: Boolean })
], pe.prototype, "multipleGraphics", void 0);
N([
  y({ type: Boolean })
], pe.prototype, "hasMeta", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  pt(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], pe.prototype, "noninteractive", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  pt(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], pe.prototype, "selected", void 0);
N([
  H()
], pe.prototype, "shouldRenderRipple", void 0);
N([
  H()
], pe.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const no = we`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let kn = class extends pe {
};
kn.styles = [no];
kn = N([
  ue("mwc-list-item")
], kn);
var Xc = Object.defineProperty, Yc = Object.getOwnPropertyDescriptor, Pe = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Yc(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Xc(t, i, r), r;
};
let ye = class extends Rs {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(d("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${e === null ? d("textfield.noMultiplier") : e}</mwc-list-item
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
Pe([
  y({ type: Boolean })
], ye.prototype, "nullable", 2);
Pe([
  y({ type: Array })
], ye.prototype, "multipliers", 2);
Pe([
  y({ type: String })
], ye.prototype, "multiplier", 1);
Pe([
  y({ type: String })
], ye.prototype, "unit", 2);
Pe([
  H()
], ye.prototype, "null", 1);
Pe([
  y({ type: String })
], ye.prototype, "maybeValue", 1);
Pe([
  y({ type: String })
], ye.prototype, "defaultValue", 2);
Pe([
  y({ type: Array })
], ye.prototype, "reservedValues", 2);
Pe([
  X("mwc-switch")
], ye.prototype, "nullSwitch", 2);
Pe([
  X("mwc-menu")
], ye.prototype, "multiplierMenu", 2);
Pe([
  X("mwc-icon-button")
], ye.prototype, "multiplierButton", 2);
ye = Pe([
  ue("wizard-textfield")
], ye);
var Qc = Object.defineProperty, Jc = Object.getOwnPropertyDescriptor, kt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Jc(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Qc(t, i, r), r;
};
let et = class extends Vs {
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
kt([
  y({ type: Boolean })
], et.prototype, "nullable", 2);
kt([
  H()
], et.prototype, "null", 1);
kt([
  y({ type: String })
], et.prototype, "maybeValue", 1);
kt([
  y({ type: String })
], et.prototype, "defaultValue", 2);
kt([
  y({ type: Array })
], et.prototype, "reservedValues", 2);
kt([
  X("mwc-switch")
], et.prototype, "nullSwitch", 2);
et = kt([
  ue("wizard-select")
], et);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function el(e, t, i) {
  const n = e.constructor;
  if (!i) {
    const c = `__${t}`;
    if (i = n.getPropertyDescriptor(t, c), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(c) {
      a === "" && (a = n.getPropertyOptions(t).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, c);
    }
  };
  return r.get && (o.get = function() {
    return r.get.call(this);
  }), o;
}
function Xn(e, t, i) {
  if (t !== void 0)
    return el(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ro extends Zn {
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
ro.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const mn = /* @__PURE__ */ new WeakMap(), Xe = Pi((e) => (t) => {
  const i = mn.get(t);
  if (e === void 0 && t instanceof Mt) {
    if (i !== void 0 || !mn.has(t)) {
      const n = t.committer.name;
      t.committer.element.removeAttribute(n);
    }
  } else e !== i && t.setValue(e);
  mn.set(t, e);
});
class ce extends ro {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new io(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), n = t.get("checked"), r = t.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!i, !!r), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${o}`;
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
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ot(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Xe(this.name)}"
              aria-checked="${Xe(n)}"
              aria-label="${Xe(this.ariaLabel)}"
              aria-labelledby="${Xe(this.ariaLabelledBy)}"
              aria-describedby="${Xe(this.ariaDescribedBy)}"
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
N([
  X(".mdc-checkbox")
], ce.prototype, "mdcRoot", void 0);
N([
  X("input")
], ce.prototype, "formElement", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], ce.prototype, "checked", void 0);
N([
  y({ type: Boolean })
], ce.prototype, "indeterminate", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], ce.prototype, "disabled", void 0);
N([
  y({ type: String, reflect: !0 })
], ce.prototype, "name", void 0);
N([
  y({ type: String })
], ce.prototype, "value", void 0);
N([
  Xn,
  y({ type: String, attribute: "aria-label" })
], ce.prototype, "ariaLabel", void 0);
N([
  Xn,
  y({ type: String, attribute: "aria-labelledby" })
], ce.prototype, "ariaLabelledBy", void 0);
N([
  Xn,
  y({ type: String, attribute: "aria-describedby" })
], ce.prototype, "ariaDescribedBy", void 0);
N([
  y({ type: Boolean })
], ce.prototype, "reducedTouchTarget", void 0);
N([
  H()
], ce.prototype, "animationClass", void 0);
N([
  H()
], ce.prototype, "shouldRenderRipple", void 0);
N([
  H()
], ce.prototype, "focused", void 0);
N([
  H()
], ce.prototype, "useStateLayerCustomProperties", void 0);
N([
  Ka("mwc-ripple")
], ce.prototype, "ripple", void 0);
N([
  cc({ passive: !0 })
], ce.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const tl = we`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let $n = class extends ce {
};
$n.styles = [tl];
$n = N([
  ue("mwc-checkbox")
], $n);
var il = Object.defineProperty, nl = Object.getOwnPropertyDescriptor, _e = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? nl(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && il(t, i, r), r;
};
let ve = class extends fe {
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
_e([
  y({ type: String })
], ve.prototype, "label", 2);
_e([
  y({ type: String })
], ve.prototype, "helper", 2);
_e([
  y({ type: Boolean })
], ve.prototype, "nullable", 2);
_e([
  y({ type: Boolean })
], ve.prototype, "defaultChecked", 2);
_e([
  y({ type: String })
], ve.prototype, "maybeValue", 1);
_e([
  y({ type: Boolean })
], ve.prototype, "disabled", 2);
_e([
  H()
], ve.prototype, "null", 1);
_e([
  H()
], ve.prototype, "checked", 1);
_e([
  H()
], ve.prototype, "deactivateCheckbox", 2);
_e([
  H()
], ve.prototype, "formfieldLabel", 1);
_e([
  X("mwc-switch")
], ve.prototype, "nullSwitch", 2);
_e([
  X("mwc-checkbox")
], ve.prototype, "checkbox", 2);
ve = _e([
  ue("wizard-checkbox")
], ve);
function rl(e) {
  return typeof e == "function";
}
function g(e) {
  return e instanceof ye || e instanceof et || e instanceof ve ? e.maybeValue : e.value ?? null;
}
function Yn(e) {
  return e instanceof ye ? e.multiplier : null;
}
function ae(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = rl(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function $t(e) {
  return ae(e, { detail: { subwizard: !0 } });
}
function al(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function Nt(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function _n(e) {
  const t = e.getAttribute("desc");
  return t || void 0;
}
function zi(e) {
  const t = e.getAttribute("pathName");
  return t || void 0;
}
function be(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const re = ":not(*)";
function ol(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function sl(e, t) {
  const [i, n] = t.split("	");
  return !i || !n ? re : `${e}[version="${i}"][revision="${n}"]`;
}
function la(e) {
  return R(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function da(e, t) {
  const [i, n] = be(t), r = J[e].parents.flatMap(
    (a) => me(a, i).split(",")
  );
  return de(
    r,
    [">"],
    [`${e}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function cl(e) {
  const [t, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((c) => e.getAttribute(c));
  return t === "None" ? `${R(e.parentElement)}>(${r} ${o} ${a})` : `${t} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function ll(e, t) {
  if (t.endsWith(")")) {
    const [b, w] = be(t), [S, E, C] = w.substring(1, w.length - 1).split(" ");
    if (!S || !E) return re;
    const x = J[e].parents.flatMap(
      (z) => me(z, b).split(",")
    );
    return de(
      x,
      [">"],
      [`${e}[iedName="None"][lnClass="${S}"][lnType="${E}"][lnInst="${C}"]`]
    ).map((z) => z.join("")).join(",");
  }
  const [i, n, r, a, o] = t.split(/[ /]/);
  if (!i || !n || !a) return re;
  const [
    c,
    l,
    p,
    m,
    h
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return de(
    [e],
    c,
    l,
    p,
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function dl(e) {
  return `${R(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function ul(e, t) {
  const [i, n] = be(t), [r, a] = n.split(" ");
  return `${me(
    "IED",
    i
  )}>${e}[iedName="${r}"][apName="${a}"]`;
}
function pl(e) {
  return `${R(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function ml(e, t) {
  const [i, n] = be(t);
  return n ? `${me(
    "Server",
    i
  )}>${e}[associationID="${n}"]` : re;
}
function hl(e) {
  return `${R(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function fl(e, t) {
  const [i, n] = t.split(">>");
  return n ? `IED[name="${i}"] ${e}[inst="${n}"]` : re;
}
function bl(e) {
  const t = e.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${R(e.parentElement)}>${t} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function gl(e, t) {
  const [i, n] = be(t), [r, a, o, c, l, p] = n.split(/[ /]/), [
    m,
    h,
    b,
    w,
    S,
    E
  ] = [
    J[e].parents.flatMap(
      (C) => me(C, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return de(
    m,
    [">"],
    [e],
    h,
    b,
    w,
    S,
    E
  ).map((C) => C.join("")).join(",");
}
function yl(e) {
  const [t, i, n, r, a, o, c, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), p = `${t}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${R(e.parentElement)}>${p} (${c}${l ? " [" + l + "]" : ""})`;
}
function vl(e, t) {
  const [i, n] = be(t), [r, a, o, c] = n.split(/[ /.]/), l = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), p = l && l[1] ? l[1] : "", m = l && l[2] ? l[2] : "", h = n.match(/\(([A-Z]{2})/), b = n.match(/ \[([0-9]{1,2})\]/), w = h && h[1] ? h[1] : "", S = b && b[1] ? b[1] : "", [
    E,
    C,
    x,
    z,
    L,
    O,
    ee,
    ke,
    T
  ] = [
    J[e].parents.flatMap(
      (I) => me(I, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${p}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${w}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return de(
    E,
    [">"],
    [e],
    C,
    x,
    z,
    L,
    O,
    ee,
    ke,
    T
  ).map((I) => I.join("")).join(",");
}
function wl(e) {
  if (!e.parentElement) return NaN;
  const t = R(e.parentElement), i = e.getAttribute("iedName"), n = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(e);
  if (n) return `${t}>${n}[${r}]`;
  const [
    a,
    o,
    c,
    l,
    p,
    m,
    h,
    b,
    w,
    S,
    E,
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
  ].map((L) => e.getAttribute(L)), x = C ? `${h}:${C} ${b ?? ""}/${w ?? ""} ${S ?? ""} ${E ?? ""}` : "", z = `${i} ${a}/${o ?? ""} ${c} ${l ?? ""} ${p} ${m || ""}`;
  return `${t}>${x ? x + " " : ""}${z}${n ? `@${n}` : ""}`;
}
function xl(e, t) {
  const [i, n] = be(t), r = J[e].parents.flatMap(
    (te) => me(te, i).split(",")
  );
  if (n.endsWith("]")) {
    const [te] = n.split("["), ge = [`[intAddr="${te}"]`];
    return de(r, [">"], [e], ge).map((Se) => Se.join("")).join(",");
  }
  let a, o, c, l, p, m, h, b, w, S, E, C, x, z;
  !n.includes(":") && !n.includes("@") ? [a, o, c, l, p, m, h] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    b,
    w,
    S,
    E,
    C,
    x,
    a,
    o,
    c,
    l,
    p,
    m,
    h
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, c, l, p, m, h, z] = n.split(/[ /@]/) : [
    b,
    w,
    S,
    E,
    C,
    x,
    a,
    o,
    c,
    l,
    p,
    m,
    h,
    z
  ] = n.split(/[ /:@]/);
  const [
    L,
    O,
    ee,
    ke,
    T,
    I,
    P,
    M,
    se,
    ie,
    D,
    it,
    nt,
    Ue
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    l ? [`[lnClass="${l}"]`] : [":not([lnClass])"],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    w ? [`[srcCBName="${w}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    E ? [`[srcPrefix="${E}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    C ? [`[srcLNClass="${C}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    x ? [`[srcLNInst="${x}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    z ? [`[intAddr="${z}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return de(
    r,
    [">"],
    [e],
    L,
    O,
    ee,
    ke,
    T,
    I,
    P,
    M,
    se,
    ie,
    D,
    it,
    nt,
    Ue
  ).map((te) => te.join("")).join(",");
}
function Al(e) {
  const [t, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${R(e.parentElement)}>${t ?? ""} ${i} ${n}`;
}
function Sl(e, t) {
  const [i, n] = be(t), r = J[e].parents.flatMap(
    (h) => me(h, i).split(",")
  ), [a, o, c] = n.split(" ");
  if (!o) return re;
  const [l, p, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${c}"]`]
  ];
  return de(
    r,
    [">"],
    [e],
    l,
    p,
    m
  ).map((h) => h.join("")).join(",");
}
function El(e) {
  const [t, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${R(e.parentElement)}>${i} ${t || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function Cl(e, t) {
  const [i, n] = be(t), r = J[e].parents.flatMap(
    (x) => me(x, i).split(",")
  ), [a, o, c, l, p, m] = n.split(/[ /]/), [
    h,
    b,
    w,
    S,
    E,
    C
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return de(
    r,
    [">"],
    [e],
    h,
    b,
    w,
    S,
    E,
    C
  ).map((x) => x.join("")).join(",");
}
function ua(e) {
  const [t, i] = ["name", "ix"].map((n) => e.getAttribute(n));
  return `${R(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function Dn(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = be(t), [a, o, c, l] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return re;
  if (i === 0) return `${e}[name="${o}"]`;
  const p = J[e].parents.flatMap(
    (b) => b === "SDI" ? Dn(b, n, i - 1).split(",") : me(b, n).split(",")
  ).filter((b) => !b.startsWith(re));
  if (p.length === 0) return re;
  const [m, h] = [
    [`[name="${o}"]`],
    l ? [`[ix="${l}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return de(
    p,
    [">"],
    [e],
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function Nl(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((n) => n.getAttribute("sGroup") === t).findIndex((n) => n.isSameNode(e));
  return `${R(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function Il(e, t) {
  const [i, n] = be(t), [r, a] = n.split(" "), o = parseFloat(a), c = J[e].parents.flatMap(
    (m) => me(m, i).split(",")
  ), [l, p] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return de(
    c,
    [">"],
    [e],
    l,
    p
  ).map((m) => m.join("")).join(",");
}
function kl(e) {
  const [t, i] = ["iedName", "apName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function $l(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? re : `${e}[iedName="${i}"][apName="${n}"]`;
}
function pa(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function ma(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? re : `${e}[ldInst="${i}"][cbName="${n}"]`;
}
function _l(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${R(e.parentElement)}>${t}`;
}
function Dl(e, t) {
  const [i, n] = be(t), [r, a] = [
    J[e].parents.flatMap(
      (o) => me(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return de(r, [">"], [e], a).map((o) => o.join("")).join(",");
}
function Tl(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${R(e.parentElement)}>${i}`;
  const n = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(e));
  return `${R(e.parentElement)}>${i} [${n}]`;
}
function Ll(e, t) {
  const [i, n] = be(t), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, c, l] = [
    J[e].parents.flatMap(
      (p) => me(p, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return de(
    o,
    [">"],
    [e],
    c,
    l
  ).map((p) => p.join("")).join(",");
}
function zl(e) {
  return `${R(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Pl(e, t) {
  const [i, n] = be(t);
  return `${me("EnumType", i)}>${e}[ord="${n}"]`;
}
function Vl(e) {
  return `${R(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Rl(e, t) {
  const [i, n] = be(t), [r, a] = n.split("	"), [o] = [
    J[e].parents.flatMap(
      (c) => me(c, i).split(",")
    )
  ];
  return de(
    o,
    [">"],
    [e],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((c) => c.join("")).join(",");
}
function Ml() {
  return "";
}
function Ol() {
  return ":root";
}
function W(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${R(e.parentElement)}>${e.getAttribute("name")}`;
}
function B(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = be(t);
  if (!r) return re;
  if (i === 0) return `${e}[name="${r}"]`;
  const a = J[e].parents;
  if (!a) return re;
  const o = a.flatMap(
    (c) => J[c].selector === J.Substation.selector ? B(c, n, i - 1).split(",") : me(c, n).split(",")
  ).filter((c) => !c.startsWith(re));
  return o.length === 0 ? re : de(o, [">"], [e], [`[name="${r}"]`]).map((c) => c.join("")).join(",");
}
function $(e) {
  return R(e.parentElement).toString();
}
function _(e, t) {
  const i = J[e].parents;
  if (!i) return re;
  const n = i.flatMap((r) => me(r, t).split(",")).filter((r) => !r.startsWith(re));
  return n.length === 0 ? re : de(n, [">"], [e]).map((r) => r.join("")).join(",");
}
function Ni(e) {
  return `#${e.id}`;
}
function Ii(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : re;
}
const ao = [
  "TransformerWinding",
  "ConductingEquipment"
], oo = [
  "GeneralEquipment",
  "PowerTransformer",
  ...ao
], Tn = ["Substation", "VoltageLevel", "Bay"], so = ["Process", "Line"], co = ["EqSubFunction", "EqFunction"], Fl = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...oo,
  ...Tn,
  ...so,
  ...co
], lo = ["ConnectivityNode", ...Fl], ql = ["GOOSESecurity", "SMVSecurity"], Hl = ["SubNetwork", ...ql, ...lo], Bl = ["BDA", "DA"], Gl = ["SampledValueControl", "GSEControl"], Wl = ["LogControl", "ReportControl"], Ul = [...Gl, ...Wl], jl = ["GSE", "SMV"], Kl = [
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
  ...Ul,
  ...jl,
  ...Bl
], Ct = ["LN0", "LN"], Zl = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Xl = ["Subject", "IssuerName"], Yl = ["MinTime", "MaxTime"], Ql = ["LNodeType", "DOType", "DAType", "EnumType"], Jl = [
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
], ed = ["DynDataSet", "ConfDataSet"], td = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ed
], id = ["ConfLogControl", "ConfSigRef"], nd = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], rd = ["SCL", ...Hl, ...Kl, ...Ql], uo = [
  ...rd,
  ...Zl,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Xl,
  ...Yl,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Ct,
  ...Jl,
  "DynAssociation",
  "SettingGroups",
  ...td,
  ...id,
  ...nd,
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
], ad = new Set(uo);
function Qn(e) {
  return ad.has(e);
}
const Ri = ["Text", "Private"], ot = [...Ri], ne = [...Ri], ki = [...Ri], ha = [...ne, "Val"], po = [...ot, "LNode"], ct = [...po], Ln = [...ct], hn = [
  ...ct,
  "PowerTransformer",
  "GeneralEquipment"
], fa = [
  ...Ln,
  "Terminal"
], ba = [...ne, "Address"], mo = [...ot], ga = [...mo, "IEDName"], ya = [
  ...ne,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], va = [
  ...ct,
  "GeneralEquipment",
  "Function"
], wa = [...mo, "TrgOps"], xa = [
  ...ct,
  "GeneralEquipment",
  "EqSubFunction"
], J = {
  AccessControl: {
    identity: $,
    selector: _,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: W,
    selector: B,
    parents: ["IED"],
    children: [
      ...ot,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: $,
    selector: _,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: pl,
    selector: ml,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: $,
    selector: _,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: W,
    selector: B,
    parents: ["DAType"],
    children: [...ha]
  },
  BitRate: {
    identity: $,
    selector: _,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: W,
    selector: B,
    parents: ["VoltageLevel"],
    children: [
      ...hn,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: El,
    selector: Cl,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: $,
    selector: _,
    parents: ["SCL"],
    children: [...ne, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: W,
    selector: B,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...fa,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: $,
    selector: _,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: kl,
    selector: $l,
    parents: ["SubNetwork"],
    children: [...ne, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: W,
    selector: B,
    parents: ["Bay", "Line"],
    children: [...po]
  },
  DA: {
    identity: W,
    selector: B,
    parents: ["DOType"],
    children: [...ha]
  },
  DAI: {
    identity: ua,
    selector: Dn,
    parents: ["DOI", "SDI"],
    children: [...ne, "Val"]
  },
  DAType: {
    identity: Ni,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...ki, "BDA", "ProtNs"]
  },
  DO: {
    identity: W,
    selector: B,
    parents: ["LNodeType"],
    children: [...ne]
  },
  DOI: {
    identity: W,
    selector: B,
    parents: [...Ct],
    children: [...ne, "SDI", "DAI"]
  },
  DOType: {
    identity: Ni,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...ki, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: W,
    selector: B,
    parents: [...Ct],
    children: [...ot, "FCDA"]
  },
  DataSetDirectory: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: $,
    selector: _,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ni,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...ki, "EnumVal"]
  },
  EnumVal: {
    identity: zl,
    selector: Pl,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: W,
    selector: B,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...xa]
  },
  EqSubFunction: {
    identity: W,
    selector: B,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...xa]
  },
  ExtRef: {
    identity: wl,
    selector: xl,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: yl,
    selector: vl,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: W,
    selector: B,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...ct,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: W,
    selector: B,
    parents: [
      "SubFunction",
      "Function",
      ...so,
      ...co,
      ...Tn
    ],
    children: [...Ln, "EqFunction"]
  },
  GetCBValues: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: W,
    selector: B,
    parents: ["AccessPoint"],
    children: [...ot, "Subject", "IssuerName"]
  },
  GSE: {
    identity: pa,
    selector: ma,
    parents: ["ConnectedAP"],
    children: [...ba, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: W,
    selector: B,
    parents: ["LN0"],
    children: [...ga, "Protocol"]
  },
  GSESettings: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: $,
    selector: _,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: $,
    selector: _,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: ol,
    selector: sl,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: W,
    selector: B,
    parents: ["SCL"],
    children: [...ne, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: bl,
    selector: gl,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: $,
    selector: _,
    parents: [...Ct],
    children: [...ne, "ExtRef"]
  },
  IssuerName: {
    identity: $,
    selector: _,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: dl,
    selector: ul,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: hl,
    selector: fl,
    parents: ["Server"],
    children: [...ne, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Al,
    selector: Sl,
    parents: ["AccessPoint", "LDevice"],
    children: [...ya]
  },
  LN0: {
    identity: $,
    selector: _,
    parents: ["LDevice"],
    children: [
      ...ya,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: cl,
    selector: ll,
    parents: [...lo],
    children: [...ne]
  },
  LNodeType: {
    identity: Ni,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...ki, "DO"]
  },
  Line: {
    identity: W,
    selector: B,
    parents: ["Process", "SCL"],
    children: [
      ...va,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: W,
    selector: B,
    parents: [...Ct],
    children: [...ne]
  },
  LogControl: {
    identity: W,
    selector: B,
    parents: [...Ct],
    children: [...wa]
  },
  LogSettings: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: $,
    selector: _,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: $,
    selector: _,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: $,
    selector: _,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: la,
    selector: da,
    parents: ["TransformerWinding"],
    children: [...ne]
  },
  OptFields: {
    identity: $,
    selector: _,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Tl,
    selector: Ll,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: _l,
    selector: Dl,
    parents: ["ConnectedAP"],
    children: [...ne, "P"]
  },
  PowerTransformer: {
    identity: W,
    selector: B,
    parents: [...Tn],
    children: [
      ...Ln,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => re,
    parents: [],
    children: []
  },
  Process: {
    identity: W,
    selector: B,
    parents: ["Process", "SCL"],
    children: [
      ...va,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Vl,
    selector: Rl,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: $,
    selector: _,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: W,
    selector: B,
    parents: [...Ct],
    children: [...wa, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: $,
    selector: _,
    parents: ["ReportControl"],
    children: [...ne, "ClientLN"]
  },
  SamplesPerSec: {
    identity: $,
    selector: _,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: W,
    selector: B,
    parents: ["LN0"],
    children: [...ga, "SmvOpts"]
  },
  SecPerSamples: {
    identity: $,
    selector: _,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Ml,
    selector: Ol,
    parents: [],
    children: [
      ...Ri,
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
    identity: ua,
    selector: Dn,
    parents: ["DOI", "SDI"],
    children: [...ne, "SDI", "DAI"]
  },
  SDO: {
    identity: W,
    selector: B,
    parents: ["DOType"],
    children: [...ot]
  },
  Server: {
    identity: $,
    selector: _,
    parents: ["AccessPoint"],
    children: [
      ...ne,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: $,
    selector: _,
    parents: ["AccessPoint"],
    children: [...ne]
  },
  Services: {
    identity: $,
    selector: _,
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
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: $,
    selector: _,
    parents: ["LN0"],
    children: [...ne]
  },
  SettingGroups: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: $,
    selector: _,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: $,
    selector: _,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: pa,
    selector: ma,
    parents: ["ConnectedAP"],
    children: [...ba]
  },
  SmvOpts: {
    identity: $,
    selector: _,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: W,
    selector: B,
    parents: ["AccessPoint"],
    children: [...ot, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: W,
    selector: B,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...ao
    ],
    children: [...ct, "EqFunction"]
  },
  SubFunction: {
    identity: W,
    selector: B,
    parents: ["SubFunction", "Function"],
    children: [
      ...ct,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: W,
    selector: B,
    parents: ["Communication"],
    children: [...ot, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: $,
    selector: _,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: W,
    selector: B,
    parents: ["SCL"],
    children: [...hn, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: W,
    selector: B,
    parents: ["TransformerWinding"],
    children: [...ct, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: la,
    selector: da,
    parents: [...oo],
    children: [...ne]
  },
  Text: {
    identity: $,
    selector: _,
    parents: uo.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: $,
    selector: _,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: W,
    selector: B,
    parents: ["PowerTransformer"],
    children: [
      ...fa,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: $,
    selector: _,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Nl,
    selector: Il,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: $,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: $,
    selector: _,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: W,
    selector: B,
    parents: ["Substation"],
    children: [...hn, "Voltage", "Bay", "Function"]
  }
};
function me(e, t) {
  return typeof t != "string" ? re : Qn(e) ? J[e].selector(e, t) : e;
}
function Qe(e, t, i) {
  if (typeof i != "string" || !Qn(t)) return null;
  const n = e.querySelector(J[t].selector(t, i));
  return n === null || $e(n) ? n : Array.from(
    e.querySelectorAll(J[t].selector(t, i))
  ).find($e) ?? null;
}
function R(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return Qn(t) ? J[t].identity(e) : NaN;
}
const si = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function ho(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function de(...e) {
  return e.reduce(
    (t, i) => t.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function fo(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => fo(i, t))
      );
    default:
      return 0;
  }
}
function $e(e) {
  return !e.closest("Private");
}
const od = 99, sd = Array(od).fill(1).map((e, t) => `${t + 1}`);
function bo(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const n = new Set(
        j(e, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const r = sd.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return t.get(i)();
  };
}
var cd = Object.defineProperty, ld = Object.getOwnPropertyDescriptor, Ft = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ld(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && cd(t, i, r), r;
};
function go(e, t) {
  const i = e.nodeType === Node.ELEMENT_NODE ? e.closest(t) : null;
  if (i) return i;
  const n = e.getRootNode();
  return n instanceof ShadowRoot ? go(n.host, t) : null;
}
let dt = class extends fe {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const e = go(this.parentNode, "action-pane");
    e && (this.level = e.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const e = u`<span
        ><slot name="icon"
          >${this.icon ? u`<mwc-icon>${this.icon}</mwc-icon>` : lt}</slot
        ></span
      >
      ${this.label ?? lt}
      <nav><slot name="action"></slot></nav>`, t = Math.floor(Math.max(this.level, 1)), i = typeof this.label == "string" ? this.label : "";
    switch (t) {
      case 1:
        return u`<h1 title="${i}">${e}</h1>`;
      case 2:
        return u`<h2 title="${i}">${e}</h2>`;
      case 3:
        return u`<h3 title="${i}">${e}</h3>`;
      default:
        return u`<h4 title="${i}">${e}</h4>`;
    }
  }
  render() {
    return u`<section
      class="${Ot({
      secondary: this.secondary,
      highlighted: this.highlighted,
      contrasted: this.level % 2 === 0
    })}"
    >
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`;
  }
};
dt.styles = we`
    :host {
      outline: none;
    }

    :host(:focus-within) section {
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      outline-width: 4px;
      transition: all 250ms linear;
    }

    section {
      background-color: var(--mdc-theme-surface);
      transition: all 200ms linear;
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      outline-color: var(--mdc-theme-primary);
    }

    section.secondary {
      outline-color: var(--mdc-theme-secondary);
    }

    section > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 12px 16px;
      clear: right;
    }

    .highlighted {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) .highlighted {
      outline-style: solid;
    }

    .contrasted {
      background-color: var(--mdc-theme-on-primary);
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: clip visible;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 52px;
      padding-left: 0.3em;
    }

    nav {
      float: right;
    }

    mwc-icon {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }

    ::slotted([slot='icon']) {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }
  `;
Ft([
  y({ type: String })
], dt.prototype, "label", 2);
Ft([
  y({ type: String })
], dt.prototype, "icon", 2);
Ft([
  y({ type: Boolean })
], dt.prototype, "secondary", 2);
Ft([
  y({ type: Boolean })
], dt.prototype, "highlighted", 2);
Ft([
  y({ type: Number })
], dt.prototype, "level", 2);
dt = Ft([
  ue("action-pane")
], dt);
function dd(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Oe(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const yo = {
  IED: [
    {
      attributeName: "iedName",
      filter: St("Association")
    },
    {
      attributeName: "iedName",
      filter: St("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: St("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: St("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: St("KDC")
    },
    {
      attributeName: "iedName",
      filter: St("LNode")
    },
    {
      attributeName: null,
      filter: fn("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: fn("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: fn("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: St("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Aa("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Aa("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function St(e) {
  return function(i, n, r) {
    return `${e}[${n}="${r}"]`;
  };
}
function fn(e) {
  return function() {
    return `${e}`;
  };
}
function Aa(e, t) {
  return function(n, r, a) {
    return `${e}${Object.entries(t).map(([o, c]) => {
      const l = n.closest(o);
      if (l && l.hasAttribute("name")) {
        const p = l.getAttribute("name");
        return `[${c}="${p}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function ud(e, t, i) {
  const n = e.cloneNode(!1);
  return n.setAttribute(t, i), n;
}
function vo(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function Jn(e, t, i) {
  if (t === null || t === i)
    return [];
  const n = yo[e.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const o = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter($e).forEach((c) => {
      const l = ud(
        c,
        a.attributeName,
        i
      );
      r.push({ old: { element: c }, new: { element: l } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter((c) => c.textContent === t).filter($e).forEach((c) => {
      const l = vo(c, i);
      r.push({ old: { element: c }, new: { element: l } });
    });
  }), e.tagName === "IED" && r.push(...pd(e, t, i)), r;
}
function pd(e, t, i) {
  const n = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const o = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (o.length === 0) return;
    const c = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), l = c?.getAttribute("srcLDInst") + "/" + c?.getAttribute("srcLNClass") + "." + c?.getAttribute("srcCBName");
    for (let p of o)
      if (t + l === p.textContent.trim()) {
        const m = vo(
          p,
          i + l
        );
        n.push({
          old: { element: p },
          new: { element: m }
        });
        break;
      }
  }), n;
}
function wo(e) {
  const t = Nt(e) ?? null;
  if (t === null)
    return [];
  const i = yo[e.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(e, r.attributeName, t);
    r.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter($e).forEach((o) => {
      n.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === t).filter($e).forEach((o) => {
      o.parentElement && n.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), n;
}
function xo(e) {
  return (t) => {
    const i = g(t.find((a) => a.label === "name")), n = g(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && n === e.getAttribute("desc"))
      return [];
    const r = U(e, { name: i, desc: n });
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function md(e, t) {
  return (i) => {
    const n = g(i.find((l) => l.label === "name")), r = e.getAttribute("name"), a = g(i.find((l) => l.label === "desc"));
    if (n === r && a === e.getAttribute("desc"))
      return [];
    const o = U(e, { name: n, desc: a }), c = {
      actions: [],
      title: d(t, { name: n })
    };
    return c.actions.push({
      old: { element: e },
      new: { element: o }
    }), c.actions.push(...Jn(e, r, n)), c.actions.length ? [c] : [];
  };
}
function Ao(e, t) {
  return (i) => {
    const n = {};
    if (hd(n, e, i), Object.keys(n).length == 0)
      return [];
    fd(e, n);
    const r = g(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: d(t, { name: r })
    };
    return a.actions.push(dd(e, n)), a.actions.push(
      ...Jn(e, e.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function hd(e, t, i) {
  const n = g(i.find((a) => a.label === "name")), r = g(i.find((a) => a.label === "desc"));
  n !== t.getAttribute("name") && (e.name = n), r !== t.getAttribute("desc") && (e.desc = r);
}
function fd(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    t[n.name] = n.value;
  }), t;
}
function er(e, t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("bay.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function bd(e) {
  return (t) => {
    const i = g(t.find((o) => o.label === "name")), n = g(t.find((o) => o.label === "desc")), r = G(e.ownerDocument, "Bay", {
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
function gd(e) {
  return [
    {
      title: d("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: d("add"),
        action: bd(e)
      },
      content: er("", "")
    }
  ];
}
function yd(e) {
  return [
    {
      title: d("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: md(
          e,
          "bay.action.updateBay"
        )
      },
      content: er(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const zn = {
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
function vd(e) {
  if (!e) return null;
  const [t, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), o = [`IED[name="${n}"]`, "IED"], c = ["AccessPoint > Server"], l = [
    `LDevice[inst="${r}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], p = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    de(
      o,
      [" > "],
      c,
      [" > "],
      l,
      p
    ).map((m) => m.join("")).join(",")
  );
}
function So(e) {
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
function wd(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : So(e);
}
function xd(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function Ad(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = vd(t);
  let n;
  return i ? n = wd(i) : t && (n = So(t)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function Eo(e) {
  return e.getAttribute("type") === "DIS" && (xd(e) || Ad(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function Co(e) {
  return zn[Eo(e)] ?? d("conductingequipment.unknownType");
}
function Sd(e, t) {
  return e === "create" ? u`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${d("conductingequipment.wizard.typeHelper")}"
        validationMessage="${d("textfield.required")}"
      >
        ${Object.keys(zn).map(
    (i) => u`<mwc-list-item value="${i}">${zn[i]}</mwc-list-item>`
  )}
      </mwc-select>` : u`<mwc-select
        label="type"
        helper="${d("conductingequipment.wizard.typeHelper")}"
        validationMessage="${d("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function tr(e, t, i, n, r) {
  return [
    Sd(i, n),
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function Ed(e) {
  return (t) => {
    const i = g(t.find((E) => E.label === "name")), n = g(t.find((E) => E.label === "desc")), r = g(t.find((E) => E.label === "type")), a = r === "ERS" ? "DIS" : r, o = G(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: e, element: o } }];
    const c = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), l = c ? c.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, p = c ? c.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = c ? c.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = m && p && l ? l + "/" + p + "/" + m + "/grounded" : null;
    o.appendChild(
      G(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: l,
        voltageLevelName: p,
        bayName: m,
        connectivityNode: h
      })
    );
    const b = {
      new: {
        parent: e,
        element: o
      }
    };
    if (c) return [b];
    const w = G(
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
        element: w
      }
    }];
  };
}
function ir(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter($e).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function Cd(e) {
  const t = ir(e);
  return [
    {
      title: d("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: Ed(e)
      },
      content: tr(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function Nd(e) {
  const t = ir(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: d("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: xo(e)
      },
      content: tr(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        Co(e),
        t
      )
    }
  ];
}
function Id(e, t, i) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${d("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function No(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter($e).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: d("connectivitynode.wizard.title.edit"),
      element: e,
      content: Id(
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
const Sa = /* @__PURE__ */ new WeakMap(), Ea = 2147483647, kd = Pi((...e) => (t) => {
  let i = Sa.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: Ea,
    values: []
  }, Sa.set(t, i));
  const n = i.values;
  let r = n.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const o = e[a];
    if (Vi(o) || typeof o.then != "function") {
      t.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = Ea, r = 0, Promise.resolve(o).then((c) => {
      const l = i.values.indexOf(o);
      l > -1 && l < i.lastRenderedIndex && (i.lastRenderedIndex = l, t.setValue(c), t.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class di extends pe {
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
      <span class=${Ot(t)}>
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
N([
  X("slot")
], di.prototype, "slotElement", void 0);
N([
  X("mwc-checkbox")
], di.prototype, "checkboxElement", void 0);
N([
  y({ type: Boolean })
], di.prototype, "left", void 0);
N([
  y({ type: String, reflect: !0 })
], di.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $d = we`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Vt = class extends di {
};
Vt.styles = [no, $d];
Vt = N([
  ue("mwc-check-list-item")
], Vt);
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
var F = {
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
}, xe = /* @__PURE__ */ new Set();
xe.add(F.BACKSPACE);
xe.add(F.ENTER);
xe.add(F.SPACEBAR);
xe.add(F.PAGE_UP);
xe.add(F.PAGE_DOWN);
xe.add(F.END);
xe.add(F.HOME);
xe.add(F.ARROW_LEFT);
xe.add(F.ARROW_UP);
xe.add(F.ARROW_RIGHT);
xe.add(F.ARROW_DOWN);
xe.add(F.DELETE);
xe.add(F.ESCAPE);
xe.add(F.TAB);
var Ne = {
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
}, Ae = /* @__PURE__ */ new Map();
Ae.set(Ne.BACKSPACE, F.BACKSPACE);
Ae.set(Ne.ENTER, F.ENTER);
Ae.set(Ne.SPACEBAR, F.SPACEBAR);
Ae.set(Ne.PAGE_UP, F.PAGE_UP);
Ae.set(Ne.PAGE_DOWN, F.PAGE_DOWN);
Ae.set(Ne.END, F.END);
Ae.set(Ne.HOME, F.HOME);
Ae.set(Ne.ARROW_LEFT, F.ARROW_LEFT);
Ae.set(Ne.ARROW_UP, F.ARROW_UP);
Ae.set(Ne.ARROW_RIGHT, F.ARROW_RIGHT);
Ae.set(Ne.ARROW_DOWN, F.ARROW_DOWN);
Ae.set(Ne.DELETE, F.DELETE);
Ae.set(Ne.ESCAPE, F.ESCAPE);
Ae.set(Ne.TAB, F.TAB);
var mt = /* @__PURE__ */ new Set();
mt.add(F.PAGE_UP);
mt.add(F.PAGE_DOWN);
mt.add(F.END);
mt.add(F.HOME);
mt.add(F.ARROW_LEFT);
mt.add(F.ARROW_UP);
mt.add(F.ARROW_RIGHT);
mt.add(F.ARROW_DOWN);
function rt(e) {
  var t = e.key;
  if (xe.has(t))
    return t;
  var i = Ae.get(e.keyCode);
  return i || F.UNKNOWN;
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
var at, Ze, Q = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
at = {}, at["" + Q.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", at["" + Q.LIST_ITEM_CLASS] = "mdc-list-item", at["" + Q.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", at["" + Q.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", at["" + Q.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", at["" + Q.ROOT] = "mdc-list";
var zt = (Ze = {}, Ze["" + Q.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Ze["" + Q.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Ze["" + Q.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Ze["" + Q.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Ze["" + Q.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Ze["" + Q.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Ze["" + Q.ROOT] = "mdc-deprecated-list", Ze), $i = {
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
    .` + Q.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Q.LIST_ITEM_CLASS + ` a,
    .` + zt[Q.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + zt[Q.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Q.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Q.LIST_ITEM_CLASS + ` a,
    .` + Q.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Q.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + zt[Q.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + zt[Q.LIST_ITEM_CLASS] + ` a,
    .` + zt[Q.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + zt[Q.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Ce = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Pn = (e, t) => e - t, _d = (e, t) => {
  const i = Array.from(e), n = Array.from(t), r = { added: [], removed: [] }, a = i.sort(Pn), o = n.sort(Pn);
  let c = 0, l = 0;
  for (; c < a.length || l < o.length; ) {
    const p = a[c], m = o[l];
    if (p === m) {
      c++, l++;
      continue;
    }
    if (p !== void 0 && (m === void 0 || p < m)) {
      r.removed.push(p), c++;
      continue;
    }
    if (m !== void 0 && (p === void 0 || m < p)) {
      r.added.push(m), l++;
      continue;
    }
  }
  return r;
}, Dd = ["input", "button", "textarea", "select"];
function ni(e) {
  return e instanceof Set;
}
const bn = (e) => {
  const t = e === Ce.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return ni(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class nr extends to {
  constructor(t) {
    super(Object.assign(Object.assign({}, nr.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = Ce.UNSET_INDEX, this.focusedItemIndex_ = Ce.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return $i;
  }
  static get numbers() {
    return Ce;
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
      if (!ni(i)) {
        const n = i === Ce.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (ni(i))
      if (i.size) {
        const n = Array.from(i).sort(Pn);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = Ce.UNSET_INDEX;
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
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(bn(t)) : this.setSingleSelectionAtIndex_(t));
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
    const r = rt(t) === "ArrowLeft", a = rt(t) === "ArrowUp", o = rt(t) === "ArrowRight", c = rt(t) === "ArrowDown", l = rt(t) === "Home", p = rt(t) === "End", m = rt(t) === "Enter", h = rt(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || p ? (t.preventDefault(), this.focusLastElement()) : (c || l) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = n, b < 0))
      return;
    let w;
    if (this.isVertical_ && c || !this.isVertical_ && o)
      this.preventDefaultEvent(t), w = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(t), w = this.focusPrevElement(b);
    else if (l)
      this.preventDefaultEvent(t), w = this.focusFirstElement();
    else if (p)
      this.preventDefaultEvent(t), w = this.focusLastElement();
    else if ((m || h) && i) {
      const S = t.target;
      if (S && S.tagName === "A" && m)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, w !== void 0 && (this.setTabindexAtIndex_(w), this.focusedItemIndex_ = w);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, i, n) {
    t !== Ce.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, n), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
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
    Dd.indexOf(n) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== Ce.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const n = bn(this.selectedIndex_), r = _d(n, t);
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
    this.selectedIndex_ === Ce.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, $i.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? $i.ARIA_CURRENT : $i.ARIA_SELECTED;
    this.selectedIndex_ !== Ce.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, n, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === Ce.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== Ce.UNSET_INDEX ? t = this.selectedIndex_ : ni(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
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
      return t === Ce.UNSET_INDEX || this.isIndexInRange_(t);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, n, i) : i || n ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(Ce.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = i;
    const a = bn(this.selectedIndex_);
    r ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, n);
  }
}
function Td(e, t = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(n);
    }, t);
  };
}
const _i = (e) => e.hasAttribute("mwc-list-item");
function Ld() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class Ie extends Zn {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = nr, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = Td(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Ld.call(this), t(i);
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
    for (const o of i)
      _i(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((o, c) => {
      this.itemRoles ? o.setAttribute("role", this.itemRoles) : o.removeAttribute("role"), o.selected && r.add(c);
    }), this.multi)
      this.select(r);
    else {
      const o = r.size ? r.entries().next().value[1] : -1;
      this.select(o);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const t = this.index;
    if (!ni(t))
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
          role="${Xe(t)}"
          aria-label="${Xe(i)}"
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
      const i = this.getIndexOfTarget(t), n = t.target, r = _i(n);
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
      if (Fc(r) && _i(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => Hc(this),
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
    const t = eo();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const n = t[i];
      if (_i(n))
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
N([
  y({ type: String })
], Ie.prototype, "emptyMessage", void 0);
N([
  X(".mdc-deprecated-list")
], Ie.prototype, "mdcRoot", void 0);
N([
  Za("", !0, "*")
], Ie.prototype, "assignedElements", void 0);
N([
  Za("", !0, '[tabindex="0"]')
], Ie.prototype, "tabbableElements", void 0);
N([
  y({ type: Boolean }),
  pt(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], Ie.prototype, "activatable", void 0);
N([
  y({ type: Boolean }),
  pt(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], Ie.prototype, "multi", void 0);
N([
  y({ type: Boolean }),
  pt(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], Ie.prototype, "wrapFocus", void 0);
N([
  y({ type: String }),
  pt(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], Ie.prototype, "itemRoles", void 0);
N([
  y({ type: String })
], Ie.prototype, "innerRole", void 0);
N([
  y({ type: String })
], Ie.prototype, "innerAriaLabel", void 0);
N([
  y({ type: Boolean })
], Ie.prototype, "rootTabbable", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  pt(function(e) {
    var t, i;
    if (e) {
      const n = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Ie.prototype, "noninteractive", void 0);
var zd = Object.defineProperty, Pd = Object.getOwnPropertyDescriptor, _t = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Pd(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && zd(t, i, r), r;
};
function Vn(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof Fe ? e : Vn(e.parentElement);
}
function Vd(e, t) {
  const i = e.innerText + `
`, n = Array.from(e.children).map((c) => c.innerText).join(`
`), r = e.value, a = (i + n + r).toUpperCase(), o = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((c) => new RegExp(
    `*${c}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Vn(e).classList.remove("hidden") : Vn(e).classList.add("hidden");
}
let Fe = class extends Ie {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Vt);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Vt).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Vt).some((e) => e.selected);
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
      (e) => Vd(e, this.searchField.value)
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
        <abbr title="${this.searchFieldLabel ?? d("filter")}"
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
Fe.styles = we`
    ${Xa(Ms.styles)}

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
_t([
  y({ type: String })
], Fe.prototype, "searchFieldLabel", 2);
_t([
  y({ type: Boolean })
], Fe.prototype, "disableCheckAll", 2);
_t([
  H()
], Fe.prototype, "existCheckListItem", 1);
_t([
  H()
], Fe.prototype, "isAllSelected", 1);
_t([
  H()
], Fe.prototype, "isSomeSelected", 1);
_t([
  X("mwc-textfield")
], Fe.prototype, "searchField", 2);
Fe = _t([
  ue("filtered-list")
], Fe);
var Rd = Object.defineProperty, Md = Object.getOwnPropertyDescriptor, tt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Md(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Rd(t, i, r), r;
};
const Od = u`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${d("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let Me = class extends fe {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: u`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return fo(this.selection);
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
        for (const o of n) r = r[o];
        const a = Object.keys(r).map((o) => n.concat(o));
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
    for await (const { header: r, entries: a, path: o } of i)
      (r || a.length > 0) && n.push(
        u`${Xe(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? u`` : u`<div class="column">${n}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), u`<div class="pane">
      ${e.map((t) => kd(t, Od))}
    </div>`;
  }
};
Me.styles = we`
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
tt([
  y({ type: Object })
], Me.prototype, "selection", 2);
tt([
  y({ type: Boolean })
], Me.prototype, "multi", 2);
tt([
  y({ type: Number })
], Me.prototype, "depth", 1);
tt([
  y({ type: Array })
], Me.prototype, "paths", 1);
tt([
  y({ type: Array })
], Me.prototype, "path", 1);
tt([
  y({ attribute: !1 })
], Me.prototype, "read", 2);
tt([
  y({ attribute: !1 })
], Me.prototype, "loaded", 2);
tt([
  X("div")
], Me.prototype, "container", 2);
Me = tt([
  ue("finder-list")
], Me);
function Fd(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function qd(e, t) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = Qe(e, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (o) => `${o.tagName}: ${R(o)}`
      )
    } : { path: i, header: u`<p>${d("error")}</p>`, entries: [] };
  };
}
function Io(e) {
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
function Hd(e) {
  return u`<finder-list
    multi
    .paths=${[["Server: " + R(e)]]}
    .read=${qd(e.ownerDocument, Io)}
    .getDisplayString=${Fd}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function Bd(e, t) {
  const [i, n] = t[t.length - 1].split(": "), r = Qe(e.ownerDocument, i, n);
  if (!r || Io(r).length > 0) return;
  const a = t.find((C) => C.startsWith("LN"));
  if (!a) return;
  const [o, c] = a.split(": "), l = Qe(e.ownerDocument, o, c);
  if (!l) return;
  const p = l.closest("LDevice")?.getAttribute("inst"), m = l.getAttribute("prefix") ?? "", h = l.getAttribute("lnClass"), b = l.getAttribute("inst") && l.getAttribute("inst") !== "" ? l.getAttribute("inst") : null;
  let w = "", S = "", E = "";
  for (const C of t) {
    const [x, z] = C.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(x)) continue;
    const L = Qe(e.ownerDocument, x, z);
    if (!L) return;
    const O = L.getAttribute("name");
    x === "DO" && (w = O), x === "SDO" && (w = w + "." + O), x === "DA" && (S = O, E = L.getAttribute("fc") ?? ""), x === "BDA" && (S = S + "." + O);
  }
  if (!(!p || !h || !w || !S || !E))
    return G(e.ownerDocument, "FCDA", {
      ldInst: p,
      prefix: m,
      lnClass: h,
      lnInst: b,
      doName: w,
      daName: S,
      fc: E
    });
}
function Gd(e) {
  return (t, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of r) {
      const c = Bd(e, o);
      c && a.push({
        new: {
          parent: e,
          element: c,
          reference: null
        }
      });
    }
    return a;
  };
}
function ko(e) {
  const t = e.closest("Server");
  return [
    {
      title: d("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Gd(e)
      },
      content: [t ? Hd(t) : u``]
    }
  ];
}
const Je = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, rr = {
  cbName: 32,
  abstracDaName: 60
};
function gn(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Wd(e) {
  return (t, i, n) => {
    const r = n.items.filter((c) => c.selected).map((c) => c.value).map((c) => Qe(e.ownerDocument, "LNodeType", c)).filter((c) => c !== null), a = bo(e);
    return r.map((c) => {
      const l = c.getAttribute("lnClass");
      if (!l) return null;
      const p = a(l);
      if (!p) {
        i.dispatchEvent(
          gn({
            kind: "error",
            title: d("lnode.log.title", { lnClass: l }),
            message: d("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = j(e, "LNode").some(
        (S) => S.getAttribute("lnClass") === "LLN0"
      );
      if (l === "LLN0" && m) {
        i.dispatchEvent(
          gn({
            kind: "error",
            title: d("lnode.log.title", { lnClass: l }),
            message: d("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const h = j(e, "LNode").some(
        (S) => S.getAttribute("lnClass") === "LPHD"
      );
      if (l === "LPHD" && h) {
        i.dispatchEvent(
          gn({
            kind: "error",
            title: d("lnode.log.title", { lnClass: l }),
            message: d("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const b = l === "LLN0" ? "" : p, w = G(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: l,
        lnInst: b,
        lnType: c.getAttribute("id")
      });
      return { new: { parent: e, element: w } };
    }).filter((c) => c);
  };
}
function Ud(e) {
  return (t) => {
    t.dispatchEvent(ae()), t.dispatchEvent(ae(Do(e)));
  };
}
function $o(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: d("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: d("lnode.wizard.reference"),
          action: Ud(e)
        }
      ],
      primary: {
        icon: "save",
        label: d("save"),
        action: Wd(e)
      },
      content: [
        u`<filtered-list multi
          >${t.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && j(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && j(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return u`<mwc-check-list-item
              twoline
              value="${R(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? d("lnode.wizard.uniquewarning") : R(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const jd = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function _o(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Kd = "Client LN";
function Ca(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => ar(t, i))[0] ?? null;
}
function ar(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function Zd(e, t) {
  const i = G(e.ownerDocument, "LNode", {
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
function Xd(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function Yd(e, t) {
  return e.some((i) => ar(i, t));
}
function Qd(e, t) {
  return t.some((i) => ar(e, i));
}
function Jd(e) {
  return (t, i, n) => {
    const r = n.items.filter((l) => l.selected).map((l) => l.value).map((l) => {
      const p = Qe(e.ownerDocument, "LN0", l);
      return p || Qe(e.ownerDocument, "LN", l);
    }).filter((l) => l !== null), a = j(e, "LNode").filter(
      $e
    ), o = a.filter((l) => !Yd(r, l)).map((l) => Xd(e, l)), c = r.filter((l) => !Qd(l, a)).map((l) => Zd(e, l));
    return o.concat(c);
  };
}
function eu(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function tu(e, t) {
  if (!(e.target instanceof Ie)) return;
  const i = eu(e.target, "#lnList");
  if (i === null) return;
  const n = t.ownerDocument, o = e.target.selected.flatMap(
    (c) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${c.value}"] > AccessPoint > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((l) => !l.closest("Private"))
  ).filter((c) => c !== null).map((c) => {
    const l = jd[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(c.getAttribute("lnClass") ?? "") ?? !1, p = Ca(t.ownerDocument, c), m = p?.parentElement === t;
    return {
      selected: m,
      disabled: p !== null && !m,
      prefered: l,
      element: c
    };
  }).sort(_o).map((c) => u`<mwc-check-list-item
      ?selected=${c.selected}
      ?disabled=${c.disabled}
      value="${R(c.element)}"
      twoline
      ><span
        >${c.element.getAttribute("prefix") ?? ""}${c.element.getAttribute("lnClass")}${c.element.getAttribute(
    "inst"
  ) ?? ""}
        ${c.disabled ? u` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${al(Ca(n, c.element))}` : ""}</span
      ><span slot="secondary"
        >${c.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${c.element.closest("LDevice") ? c.element.closest("LDevice")?.getAttribute("inst") : Kd}</span
      ></mwc-check-list-item
    >`);
  Gn(u`${o}`, i);
}
function iu(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? u`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => tu(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(_o).map(
    (i) => u`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : u`<mwc-list-item noninteractive graphic="icon">
      <span>${d("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function nu(e) {
  return (t) => {
    t.dispatchEvent(ae()), t.dispatchEvent(ae($o(e)));
  };
}
function Do(e) {
  return [
    {
      title: d("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: d("lnode.wizard.instance"),
          action: nu(e)
        }
      ],
      content: [iu(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: d("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: d("save"),
        action: Jd(e)
      },
      content: [u`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function ru(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? $o(e) : Do(e);
}
function au(e) {
  const t = e.iedName !== "None";
  return [
    u`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${d("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${d("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${d("scl.prefix")}"
      pattern="${Je.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${d("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${d("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function ou(e) {
  return (t) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== e.getAttribute(a))) {
      const a = U(e, i);
      return r = {
        old: { element: e },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function su(e) {
  const [t, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c)), o = j(
    e.parentElement,
    "LNode"
  ).filter(
    (c) => c !== e && c.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((c) => c.getAttribute("lnInst"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: d("save"),
        icon: "save",
        action: ou(e)
      },
      content: [
        ...au({
          iedName: t,
          ldInst: i,
          prefix: n,
          lnClass: r,
          lnInst: a,
          reservedLnInst: o
        })
      ]
    }
  ];
}
function cu(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function lu(e) {
  return (t) => {
    const i = g(t.find((h) => h.label === "seqNum")), n = g(t.find((h) => h.label === "timeStamp")), r = g(t.find((h) => h.label === "dataSet")), a = g(t.find((h) => h.label === "reasonCode")), o = g(t.find((h) => h.label === "dataRef")), c = g(t.find((h) => h.label === "entryID")), l = g(t.find((h) => h.label === "configRef")), p = g(t.find((h) => h.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && n === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && o === e.getAttribute("dataRef") && c === e.getAttribute("entryID") && l === e.getAttribute("configRef") && p === e.getAttribute("bufOvfl"))
      return [];
    const m = U(e, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: o,
      entryID: c,
      configRef: l,
      bufOvfl: p
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function du(e) {
  const [
    t,
    i,
    n,
    r,
    a,
    o,
    c,
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
  ].map((p) => e.getAttribute(p));
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: lu(e)
      },
      content: cu({
        seqNum: t,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: o,
        configRef: c,
        bufOvfl: l
      })
    }
  ];
}
let uu = 1, To = 1, Lo = 1;
function pu(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      G(t.ownerDocument, "LNode", {
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
function zo(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function mu(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && zo(e) === "CBR" ? "QA" + To++ : "QB" + Lo++;
}
function hu(e, t) {
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
function fu(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function bu(e, t) {
  return e.parentElement ? fu(e).filter((i) => hu(i, t)) : [];
}
function gu(e, t) {
  const i = bu(e, t);
  if (To = 1, Lo = 1, i.length) {
    const n = G(e.ownerDocument, "Bay", {
      name: "Q" + uu++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => pu(
      G(e.ownerDocument, "ConductingEquipment", {
        name: mu(a),
        type: zo(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function yu(e, t) {
  return (i, n, r) => {
    const a = [], o = r.selected.map(
      (p) => p.value
    ), c = G(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), l = G(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return l.textContent = "110.00", c.appendChild(l), a.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), a.push({
      new: {
        parent: t,
        element: c
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(ho).map((p) => gu(p, o)).forEach((p) => {
      p && a.push({ new: { parent: c, element: p } });
    }), a;
  };
}
function vu(e, t) {
  return [
    {
      title: d("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: d("guess.wizard.primary"),
        action: yu(e, t)
      },
      content: [
        u`<p>${d("guess.wizard.description")}</p>`,
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
const wu = {
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
}, xu = {
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
}, Na = { en: xu, de: wu };
async function Au(e) {
  return Object.keys(Na).includes(e) ? Na[e] : {};
}
kc({ loader: Au, empty: (e) => e });
const Po = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Po);
Tc(Po);
function Vo(e, t, i) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("substation.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? u`<mwc-formfield label="${d("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : u``
  ];
}
function Su(e) {
  return (t, i) => {
    const n = g(t.find((c) => c.label === "name")), r = g(t.find((c) => c.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const o = G(e.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => vu(e.ownerDocument, o)] : [{ new: { parent: e, element: o } }];
  };
}
function Eu(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: d("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: Su(e)
      },
      content: Vo("", "", t)
    }
  ];
}
function Cu(e) {
  return [
    {
      title: d("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Ao(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: Vo(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function Nu(e, t, i, n) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("terminal.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${d("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${d("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Ro(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter($e).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: d("terminal.wizard.title.edit"),
      element: e,
      content: Nu(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const Di = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Mo(e, t, i, n, r, a) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${d("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${d("textfield.nonempty")}"
      pattern="${si.unsigned}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${d("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${d("textfield.nonempty")}"
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
      helper="${d("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${d("textfield.nonempty")}"
      pattern="${si.decimal}"
    ></wizard-textfield>`
  ];
}
function Iu(e) {
  return (t) => {
    const i = g(t.find((p) => p.label === "name")), n = g(t.find((p) => p.label === "desc")), r = g(t.find((p) => p.label === "nomFreq")), a = g(t.find((p) => p.label === "numPhases")), o = g(t.find((p) => p.label === "Voltage")), c = Yn(t.find((p) => p.label === "Voltage")), l = G(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (o !== null) {
      const p = G(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: c
      });
      p.textContent = o, l.appendChild(p);
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
function ku(e) {
  return [
    {
      title: d("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: Iu(e)
      },
      content: Mo(
        "",
        "",
        Di.nomFreq,
        Di.numPhases,
        Di.Voltage,
        Di.multiplier
      )
    }
  ];
}
function $u(e, t, i, n) {
  if (e === null) {
    const a = G(n.ownerDocument, "Voltage", {
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
  const r = U(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function _u(e) {
  return (t) => {
    const i = t.find((h) => h.label === "name").value, n = g(t.find((h) => h.label === "desc")), r = g(t.find((h) => h.label === "nomFreq")), a = g(t.find((h) => h.label === "numPhases")), o = g(t.find((h) => h.label === "Voltage")), c = Yn(t.find((h) => h.label === "Voltage"));
    let l, p;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      l = null;
    else {
      const h = U(e, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      l = { old: { element: e }, new: { element: h } };
    }
    o === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && c === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? p = null : p = $u(
      e.querySelector("VoltageLevel > Voltage"),
      o,
      c,
      l?.new.element ?? e
    );
    const m = {
      actions: [],
      title: d("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return l && m.actions.push(l), p && m.actions.push(p), m.actions.push(
      ...Jn(e, e.getAttribute("name"), i)
    ), m.actions.length ? [m] : [];
  };
}
function Du(e) {
  return [
    {
      title: d("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: _u(e)
      },
      content: Mo(
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
const Oo = "PTR";
function Tu(e) {
  return (t) => {
    const i = g(t.find((o) => o.label === "name")), n = g(t.find((o) => o.label === "desc")), r = G(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: Oo
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function or(e, t, i, n) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${d("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function sr(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter($e).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function Lu(e) {
  const t = sr(e);
  return [
    {
      title: d("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: d("add"),
        action: Tu(e)
      },
      content: or(
        "",
        null,
        Oo,
        t
      )
    }
  ];
}
function zu(e) {
  const t = sr(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: d("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: xo(e)
      },
      content: or(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function Pu(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${d("subnetwork.wizard.typeHelper")}"
      pattern="${si.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${d("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${d("textfield.nonempty")}"
      pattern="${si.decimal}"
    ></wizard-textfield>`
  ];
}
function Vu(e, t, i, n) {
  if (e === null) {
    const a = G(n.ownerDocument, "BitRate", {
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
  const r = U(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function Ru(e) {
  return (t) => {
    const i = t.find((m) => m.label === "name").value, n = g(t.find((m) => m.label === "desc")), r = g(t.find((m) => m.label === "type")), a = g(t.find((m) => m.label === "BitRate")), o = Yn(t.find((m) => m.label === "BitRate"));
    let c, l;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type"))
      c = null;
    else {
      const m = U(e, { name: i, desc: n, type: r });
      c = { old: { element: e }, new: { element: m } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? l = null : l = Vu(
      e.querySelector("SubNetwork > BitRate"),
      a,
      o,
      c?.new.element ?? e
    );
    const p = [];
    return c && p.push(c), l && p.push(l), p;
  };
}
function Mu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: Ru(e)
      },
      content: Pu({ name: t, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const Ou = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Fu(e) {
  return Ou.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const qu = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Hu(e) {
  return qu.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function Bu(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const n of e) {
    const r = n.old.element, a = n.old.parent, o = R(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const c = i[o].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${Fu(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${Hu(r)}`
    );
    c && i[o].removeChild(c);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, o = Qe(a, "Inputs", n);
      o && o.parentElement && t.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), t;
}
const Gu = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Wu(e, t, i, n, r, a, o, c, l) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("ied.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${l}
      pattern="${Gu}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("ied.wizard.descHelper")}"
      pattern="${Je.normalizedString}"
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
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="owner"
      .maybeValue=${c || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Uu(e) {
  return [
    u` <section>
      <h1>${d("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return u` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${R(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function ju(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function Ku(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter($e).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function Zu(e) {
  return (t, i) => {
    i.dispatchEvent(ae());
    const n = wo(e), r = n.filter(
      (l) => l.old.element.tagName === "ExtRef"
    ), a = Bu(r), o = e.getAttribute("name") ?? "Unknown", c = {
      actions: [],
      title: d("ied.action.deleteied", { name: o })
    };
    return c.actions.push({
      old: { parent: e.parentElement, element: e }
    }), c.actions.push(...n), c.actions.push(...a), [c];
  };
}
function Xu(e) {
  const t = wo(e);
  return t.length > 0 ? [
    {
      title: d("ied.wizard.title.delete"),
      content: Uu(t),
      primary: {
        icon: "delete",
        label: d("remove"),
        action: Zu(e)
      }
    }
  ] : null;
}
function Yu(e) {
  function t(i) {
    return (n) => {
      const r = Xu(i);
      r && n.dispatchEvent($t(() => r)), n.dispatchEvent(
        Oe({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(ae());
    };
  }
  return [
    {
      title: d("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: d("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: d("save"),
        action: Ao(
          e,
          "ied.action.updateied"
        )
      },
      content: Wu(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        ju(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        Ku(e)
      )
    }
  ];
}
const Qu = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Ju(e, t, i, n) {
  return [
    t ? u`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${d("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : u`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${d("ldevice.wizard.nameHelper")}"
          validationMessage="${d("textfield.required")}"
          dialogInitialFocus
          pattern="${Qu}"
        ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${d("ldevice.wizard.descHelper")}"
      pattern="${Je.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function ep(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function tp(e) {
  return (t) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
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
function ip(e) {
  return [
    {
      title: d("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: tp(e)
      },
      content: Ju(
        e.getAttribute("ldName"),
        !ep(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function np(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function rp(e) {
  return (t) => {
    const i = g(t.find((p) => p.label === "dchg")), n = g(t.find((p) => p.label === "qchg")), r = g(t.find((p) => p.label === "dupd")), a = g(t.find((p) => p.label === "period")), o = g(t.find((p) => p.label === "gi"));
    if (i === e.getAttribute("dchg") && n === e.getAttribute("qchg") && r === e.getAttribute("dupd") && a === e.getAttribute("period") && o === e.getAttribute("gi"))
      return [];
    const c = U(e, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: o
    });
    return [{ old: { element: e }, new: { element: c } }];
  };
}
function ap(e) {
  const [t, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: rp(e)
      },
      content: np({ dchg: t, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
const op = [
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
], sp = [
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
], cp = ["Spec", "Conf", "RO", "Set"], lp = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], Fo = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function dp(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const n = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (c) => u`<mwc-list-item
        value="${c.textContent?.trim() ?? ""}"
        ?selected=${c.textContent?.trim() === i}
        >${c.textContent?.trim()}</mwc-list-item
      >`
  ), o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Gn(u`${a}`, o), o.requestUpdate();
}
function up(e, t, i) {
  const n = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((l) => {
    const p = l;
    p.disabled = !l.classList.contains(n), p.noninteractive = !l.classList.contains(n), p.style.display = l.classList.contains(n) ? "" : "none", p.disabled || a.push(p);
  }), r.value = a.length ? a[0].value : "";
  const o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? o.style.display = "" : o.style.display = "none";
  const c = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? c.style.display = "none" : c.style.display = "", o.requestUpdate(), c.requestUpdate(), r.requestUpdate();
}
function pp(e, t, i, n, r, a, o, c, l, p) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("scl.name")}"
      required
      pattern="${Je.abstractDataAttributeName}"
      maxLength="${rr.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    u`<wizard-textfield
      label="desc"
      helper="${d("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${Je.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${d("scl.bType")}"
      required
      @selected=${(m) => up(m)}
      >${sp.map(
      (m) => u`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${d("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => dp(m, p, l)}
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
      helper="${d("scl.sAddr")}"
      nullable
      pattern="${Je.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${d("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${cp.map(
      (m) => u`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="valImport"
      .maybeValue=${c}
      helper="${d("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    u`<wizard-select
      label="Val"
      .maybeValue=${l}
      helper="${d("scl.Val")}"
      nullable
      >${Array.from(
      p.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (m) => u`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="Val"
      .maybeValue=${l}
      helper="${d("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function mp(e, t, i, n) {
  return [
    u`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${d("scl.fc")}"
      required
      fixedMenuPosition
      >${op.map(
      (r) => u`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${d("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${d("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${d("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function hp(e) {
  return (t) => {
    const i = g(t.find((x) => x.label === "name")), n = g(t.find((x) => x.label === "desc")), r = g(t.find((x) => x.label === "bType")), a = r === "Enum" || r === "Struct" ? g(t.find((x) => x.label === "type")) : null, o = g(t.find((x) => x.label === "sAddr")), c = g(t.find((x) => x.label === "valKind")), l = g(t.find((x) => x.label === "valImport")), p = t.find(
      (x) => x.label === "Val" && x.style.display !== "none"
    ), m = p ? g(p) : null, h = g(t.find((x) => x.label === "fc")) ?? "", b = g(t.find((x) => x.label === "dchg")), w = g(t.find((x) => x.label === "qchg")), S = g(t.find((x) => x.label === "dupd")), E = [], C = G(e.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: o,
      valKind: c,
      valImport: l,
      fc: h,
      dchg: b,
      qchg: w,
      dupd: S
    });
    if (m !== null) {
      const x = G(e.ownerDocument, "Val", {});
      x.textContent = m, C.appendChild(x);
    }
    return E.push({
      new: {
        parent: e,
        element: C
      }
    }), E;
  };
}
function fp(e) {
  const t = e.ownerDocument, i = "", n = null, r = "", a = null, o = null, c = null, l = null, p = null, m = "", h = null, b = null, w = null, S = Array.from(t.querySelectorAll("DAType, EnumType")).filter($e).filter((C) => C.getAttribute("id")), E = e.closest("DataTypeTemplates");
  return [
    {
      title: d("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: d("save"),
        action: hp(e)
      },
      content: [
        ...pp(
          i,
          n,
          r,
          S,
          a,
          o,
          l,
          p,
          c,
          E
        ),
        ...mp(m, h, b, w)
      ]
    }
  ];
}
const Ee = (e, t) => e === null ? "" : t;
function qo() {
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
      render: (l, p, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => u`<wizard-select
            id="Val${Ee(h, `${b + 1}`)}"
            label="Val${Ee(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${o(p)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (l, p) => g(
        l.find((m) => m.id === `Val${p || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (l, p, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => u`<wizard-select
            id="Val${Ee(h, `${b + 1}`)}"
            label="Val${Ee(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${o(p)}
            fixedMenuPosition
          >
            ${c(l).map((w) => u`<mwc-list-item value="${w}"
                >${w}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (l, p) => g(
        l.find((m) => m.id === `Val${p || ""}`)
      )
    };
  }
  function i(l, p, m) {
    return {
      render: (h, b, w = null) => (w ? [...Array(w)] : [w]).map((S, E) => u`<wizard-textfield
            id="Val${Ee(S, `${E + 1}`)}"
            label="Val${Ee(S, ` for sGroup ${E + 1}`)}"
            .maybeValue=${o(b)}
            helper="${d("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${p}
            max=${m}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (h, b) => g(
        h.find((w) => w.id === `Val${b || ""}`)
      )
    };
  }
  function n(l, p, m) {
    return {
      render: (h, b, w = null) => (w ? [...Array(w)] : [w]).map((S, E) => u`<wizard-textfield
            id="Val${Ee(S, `${E + 1}`)}"
            label="Val${Ee(S, ` for sGroup ${E + 1}`)}"
            .maybeValue=${o(b)}
            helper="${d("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${p}
            max=${m}
          >
          </wizard-textfield>`),
      value: (h, b) => g(
        h.find((w) => w.id === `Val${b || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (l, p, m = null) => {
        const h = o(p);
        return (m ? [...Array(m)] : [m]).reduce(
          (b, w, S) => b.concat([
            u`<wizard-textfield
                id="ValDate${Ee(w, `${S + 1}`)}"
                label="Val (Date)${Ee(w, ` for sGroup ${S + 1}`)}"
                .maybeValue=${bp(h)}
                type="date"
              >
              </wizard-textfield>`,
            u`<wizard-textfield
                id="ValTime${Ee(w, `${S + 1}`)}"
                label="Val (Time)${Ee(w, ` for sGroup ${S + 1}`)}"
                .maybeValue=${gp(h)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (l, p) => {
        const m = [`ValDate${p || ""}`, `ValTime${p || ""}`].map(
          (w) => g(l.find((S) => S.id === w))
        ), h = m[0] ? m[0] : "0000-00-00", b = m[1] ? m[1] : "00:00:00";
        return h + "T" + b + ".000";
      }
    };
  }
  function a(l, p) {
    return {
      render: (m, h, b = null) => (b ? [...Array(b)] : [b]).map((w, S) => u`<wizard-textfield
            id="Val${Ee(w, ` ${S + 1}`)}"
            label="Val${Ee(w, ` for sGroup ${S + 1}`)}"
            .maybeValue=${o(h)}
            helper="${d("dai.wizard.valueHelper", { type: l })}"
            maxLength=${p}
            type="text"
          >
          </wizard-textfield>`),
      value: (m, h) => g(
        m.find((b) => b.id === `Val${h || ""}`)
      )
    };
  }
  function o(l) {
    return (l?.querySelector("Val") ? l?.querySelector("Val") : l)?.textContent?.trim() ?? "";
  }
  function c(l) {
    const p = l.getAttribute("type"), m = [];
    return Array.from(
      l.ownerDocument.querySelectorAll(
        `EnumType[id="${p}"] > EnumVal`
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
function bp(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function gp(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const yp = "http://www.iec.ch/61850/2003/SCL";
function Et(e) {
  return e.namespaceURI === yp;
}
function vp(e, t) {
  return (i) => {
    const n = e.getAttribute("bType"), r = qo()[n].value(i), a = t.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: d("dai.action.updatedai", { daiName: a })
    }, c = t.cloneNode(!1);
    return c.textContent = r, o.actions.push({
      old: { element: t },
      new: { element: c }
    }), [o];
  };
}
function wp(e, t, i = null) {
  const n = e.getAttribute("bType"), r = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    u` ${qo()[n].render(
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
        </wizard-textfield>` : lt}`
  ];
}
function xp(e, t) {
  const i = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: d("dai.wizard.title.edit", {
        daiName: i
      }),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: vp(e, t)
      },
      content: wp(e, t)
    }
  ];
}
function Ap(e) {
  return (t) => {
    t.dispatchEvent($t(() => ko(e)));
  };
}
function Sp(e) {
  return (t, i) => {
    const n = t.find((p) => p.label === "name").value, r = g(t.find((p) => p.label === "desc")), a = e.getAttribute("name"), o = [];
    if (!(n === a && r === e.getAttribute("desc"))) {
      const p = U(e, { name: n, desc: r });
      o.push({
        old: { element: e },
        new: { element: p }
      });
    }
    const c = n !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((p) => {
      const m = U(p, { datSet: n });
      return { old: { element: p }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((p) => Qe(e, "FCDA", p.value)).filter((p) => p).map((p) => ({
        old: {
          parent: e,
          element: p,
          reference: p.nextSibling
        }
      })),
      ...o,
      ...c
    ];
  };
}
function Ho(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: d("save"),
        icon: "save",
        action: Sp(e)
      },
      menuActions: [
        {
          icon: "add",
          label: d("dataset.fcda.add"),
          action: Ap(e)
        }
      ],
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${d("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${d("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        u`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (n) => u`<mwc-check-list-item selected value="${R(n)}"
                >${R(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const Y = {
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
}, Ep = {
  IP: Y.IP,
  "IP-SUBNET": Y.IP,
  "IP-GATEWAY": Y.IP,
  "OSI-TSEL": Y.OSI,
  "OSI-SSEL": Y.OSI,
  "OSI-PSEL": Y.OSI,
  "OSI-AP-Title": Y.OSIAPi,
  "OSI-AP-Invoke": Y.OSId,
  "OSI-AE-Qualifier": Y.OSId,
  "OSI-AE-Invoke": Y.OSId,
  "MAC-Address": Y.MAC,
  APPID: Y.APPID,
  "VLAN-ID": Y.VLANid,
  "VLAN-PRIORITY": Y.VLANp,
  "OSI-NSAP": Y.OSI,
  "SNTP-Port": Y.port,
  "MMS-Port": Y.port,
  DNSName: "[^ ]*",
  "UDP-Port": Y.port,
  "TCP-Port": Y.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: Y.IPv6,
  "IPv6-SUBNET": Y.IPv6sub,
  "IPv6-GATEWAY": Y.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": Y.IPv6,
  "IP-IGMPv3Sr": Y.IP,
  "IP-ClassOfTraffic": Y.OSI
}, Cp = {
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
function Bo(e) {
  return [
    u`<mwc-formfield label="${d("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    u`${Object.entries(e.attributes).map(
      ([t, i]) => u`<wizard-textfield
          label="${t}"
          ?nullable=${Cp[t]}
          .maybeValue=${i}
          pattern="${Xe(Ep[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Np(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Ip(e, t, i) {
  const n = G(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const o = r, c = G(t.ownerDocument, "P", { type: o });
    i && c.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), c.textContent = a, n.appendChild(c);
  }), n;
}
function Go(e, t, i) {
  const n = [], r = Ip(t, e, i), a = e.querySelector("Address");
  return a !== null && !Np(a, r) ? (n.push({
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
function Ia(e, t, i, n) {
  if (t === null) {
    const a = G(n.ownerDocument, e, {
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
function kp(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: d("gse.action.addaddress", {
        identity: R(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = g(
      t.find((p) => p.label === "MAC-Address")
    ), a.APPID = g(t.find((p) => p.label === "APPID")), a["VLAN-ID"] = g(
      t.find((p) => p.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = g(
      t.find((p) => p.label === "VLAN-PRIORITY")
    ), Go(e, a, r).forEach((p) => {
      n.actions.push(p);
    });
    const c = g(t.find((p) => p.label === "MinTime")), l = g(t.find((p) => p.label === "MaxTime"));
    return c !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Ia(
        "MinTime",
        e.querySelector("MinTime"),
        c,
        e
      )
    ), l !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Ia(
        "MaxTime",
        e.querySelector("MaxTime"),
        l,
        e
      )
    ), [n];
  };
}
function $p(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: d("save"),
        icon: "save",
        action: kp(e)
      },
      content: [
        ...Bo({ hasInstType: n, attributes: r }),
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
function Wo(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function _p(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${Je.asciName}"
      maxLength="${rr.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${d("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${d("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${Fo.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Dp(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Wo(e), n = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (c) => c.getAttribute("datSet") === t?.getAttribute("name")
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
  const a = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function Tp(e) {
  return (t) => {
    const i = Dp(e);
    i && t.dispatchEvent(Oe(i)), t.dispatchEvent(ae());
  };
}
function Lp(e) {
  return (t) => {
    t.dispatchEvent($t(() => Ho(e)));
  };
}
function zp(e) {
  return (t) => {
    t.dispatchEvent($t(() => $p(e)));
  };
}
function Pp(e) {
  return (t) => {
    const i = t.find((p) => p.label === "name").value, n = g(t.find((p) => p.label === "desc")), r = g(t.find((p) => p.label === "type")), a = g(t.find((p) => p.label === "appID")), o = g(t.find((p) => p.label === "fixedOffs")), c = g(
      t.find((p) => p.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type") && a === e.getAttribute("appID") && o === e.getAttribute("fixedOffs") && c === e.getAttribute("securityEnabled"))
      return [];
    const l = U(e, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: o,
      securityEnabled: c
    });
    return [{ old: { element: e }, new: { element: l } }];
  };
}
function Vp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), o = e.getAttribute("securityEnabled"), c = Wo(e), l = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), p = [];
  return p.push({
    icon: "delete",
    label: d("remove"),
    action: Tp(e)
  }), l && p.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: Lp(l)
  }), c && p.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: zp(c)
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: Pp(e)
      },
      menuActions: p,
      content: [
        ..._p({
          name: t,
          desc: i,
          type: n,
          appID: r,
          fixedOffs: a,
          securityEnabled: o
        })
      ]
    }
  ];
}
function ht(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${d("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Rp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
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
function Mp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = j(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Rp(e)
      },
      content: [
        ...ht({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Op(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(
      e.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Fp(e) {
  const t = "", r = Array.from(e.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Op(e)
      },
      content: [
        ...ht({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function qp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
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
function Hp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = j(
    e.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: qp(e)
      },
      content: [
        ...ht({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Bp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Gp(e) {
  const t = "", r = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Bp(e)
      },
      content: [
        ...ht({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Wp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
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
function Up(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = j(
    e.parentElement,
    "EqFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: Wp(e)
      },
      content: [
        ...ht({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function jp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Kp(e) {
  const t = "", r = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: jp(e)
      },
      content: [
        ...ht({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Zp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
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
function Xp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = j(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Zp(e)
      },
      content: [
        ...ht({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Yp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Qp(e) {
  const t = "", r = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Yp(e)
      },
      content: [
        ...ht({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Jp(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: d("smv.action.addaddress", {
        identity: R(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = g(
      t.find((c) => c.label === "MAC-Address")
    ), a.APPID = g(t.find((c) => c.label === "APPID")), a["VLAN-ID"] = g(
      t.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = g(
      t.find((c) => c.label === "VLAN-PRIORITY")
    );
    const o = Go(e, a, r);
    return o.length ? (o.forEach((c) => {
      n.actions.push(c);
    }), [n]) : [];
  };
}
function em(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = e.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: d("save"),
        icon: "edit",
        action: Jp(e)
      },
      content: [...Bo({ hasInstType: t, attributes: i })]
    }
  ];
}
function tm(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function im(e) {
  return (t) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    }), !n.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const r = U(e, i);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function nm(e) {
  const [t, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: im(e)
      },
      content: [
        ...tm({
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
function Uo(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function rm(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Uo(e), n = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (c) => c.getAttribute("datSet") === t?.getAttribute("name")
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
  const a = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function am(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${Je.asciName}"
      maxLength="${rr.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${Je.normalizedString}"
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? u`` : u`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${d("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    u`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${d("scl.smpMod")}"
      >${lp.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${d("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${d("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${Fo.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function om(e) {
  return (t) => {
    const i = rm(e);
    i && t.dispatchEvent(Oe(i)), t.dispatchEvent(ae());
  };
}
function sm(e) {
  return (t) => {
    t.dispatchEvent($t(() => Ho(e)));
  };
}
function cm(e) {
  return (t) => {
    t.dispatchEvent($t(() => nm(e)));
  };
}
function lm(e) {
  return (t) => {
    t.dispatchEvent($t(() => em(e)));
  };
}
function dm(e) {
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
    n.forEach((o) => {
      if (o === "multicast" && !t.find((l) => l.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = g(t.find((l) => l.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== e.getAttribute(o))) {
      const o = U(e, i);
      r = {
        old: { element: e },
        new: { element: o }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function um(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("multicast"), r = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), o = e.getAttribute("smpRate"), c = e.getAttribute("nofASDU"), l = e.getAttribute("securityEnabled"), p = Uo(e), m = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: d("remove"),
    action: om(e)
  }), h && b.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: sm(h)
  }), m && b.push({
    icon: "edit",
    label: d("scl.SmvOpts"),
    action: cm(m)
  }), p && b.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: lm(p)
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: dm(e)
      },
      menuActions: b,
      content: [
        ...am({
          name: t,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: o,
          nofASDU: c,
          securityEnabled: l
        })
      ]
    }
  ];
}
function jo(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${d("scl.phase")}"
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
      helper="${d("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function pm(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
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
function mm(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("phase"), r = e.getAttribute("virtual"), a = j(
    e.parentElement,
    "SubEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: pm(e)
      },
      content: [
        ...jo({
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
function hm(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function fm(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: hm(e)
      },
      content: [
        ...jo({
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
function bm(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = j(
    e.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: gm(e)
      },
      content: [
        ...Ko({
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
function gm(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
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
function Ko(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${d("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ym(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: vm(e)
      },
      content: [
        ...Ko({
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
function vm(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function wm(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = g(
        t.find((o) => o.label === a)
      );
    });
    const r = G(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function xm(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: wm(e)
      },
      content: [
        ...Zo({
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
function Am(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(
        t.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
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
function Zo(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${d("scl.type")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Sm(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = j(
    e.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Am(e)
      },
      content: [
        ...Zo({
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
function Em(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Cm(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
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
function Xo(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${d("scl.type")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Nm(e) {
  const t = "", n = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Em(e)
      },
      content: [
        ...Xo({
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
function Im(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = j(
    e.parentElement,
    "TapChanger"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Cm(e)
      },
      content: [
        ...Xo({
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
function Yo(e, t, i, n, r) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("line.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${d("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${d("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${d("textfield.nonempty")}"
      pattern="${si.unsigned}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${d("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${d("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function km(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function $m(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
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
function _m(e) {
  return [
    {
      title: d("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: km(e)
      },
      content: [...Yo("", "", "", "", "")]
    }
  ];
}
function Dm(e) {
  return [
    {
      title: d("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: $m(e)
      },
      content: Yo(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function Tm(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = G(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function Lm(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
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
function Qo(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${d("scl.type")}"
    ></wizard-textfield>`
  ];
}
function zm(e) {
  const t = "", i = "", n = "", r = j(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Tm(e)
      },
      content: [
        ...Qo({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Pm(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = j(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Lm(e)
      },
      content: [
        ...Qo({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Vm(e, t, i, n, r) {
  return [
    u`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${d("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${d("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${d("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${d("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Rm(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
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
function Mm(e) {
  return [
    {
      title: d("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Rm(e)
      },
      content: Vm(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Om(e, t, i, n) {
  return [
    u`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${d("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${d("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${d("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${d("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Fm(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
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
function qm(e) {
  return [
    {
      title: d("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Fm(e)
      },
      content: Om(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function s() {
}
const he = {
  AccessControl: {
    edit: s,
    create: s
  },
  AccessPoint: {
    edit: s,
    create: s
  },
  Address: {
    edit: s,
    create: s
  },
  Association: {
    edit: s,
    create: s
  },
  Authentication: {
    edit: s,
    create: s
  },
  BDA: {
    edit: s,
    create: s
  },
  BitRate: {
    edit: s,
    create: s
  },
  Bay: {
    edit: yd,
    create: gd
  },
  ClientLN: {
    edit: s,
    create: s
  },
  ClientServices: {
    edit: s,
    create: s
  },
  CommProt: {
    edit: s,
    create: s
  },
  Communication: {
    edit: s,
    create: s
  },
  ConductingEquipment: {
    edit: Nd,
    create: Cd
  },
  ConfDataSet: {
    edit: s,
    create: s
  },
  ConfLdName: {
    edit: s,
    create: s
  },
  ConfLNs: {
    edit: s,
    create: s
  },
  ConfLogControl: {
    edit: s,
    create: s
  },
  ConfReportControl: {
    edit: s,
    create: s
  },
  ConfSG: {
    edit: s,
    create: s
  },
  ConfSigRef: {
    edit: s,
    create: s
  },
  ConnectedAP: {
    edit: s,
    create: s
  },
  ConnectivityNode: {
    edit: No,
    create: s
  },
  DA: {
    edit: fp,
    create: s
  },
  DAI: {
    edit: xp,
    create: s
  },
  DAType: {
    edit: s,
    create: s
  },
  DO: {
    edit: s,
    create: s
  },
  DOI: {
    edit: s,
    create: s
  },
  DOType: {
    edit: s,
    create: s
  },
  DataObjectDirectory: {
    edit: s,
    create: s
  },
  DataSet: {
    edit: s,
    create: s
  },
  DataSetDirectory: {
    edit: s,
    create: s
  },
  DataTypeTemplates: {
    edit: s,
    create: s
  },
  DynAssociation: {
    edit: s,
    create: s
  },
  DynDataSet: {
    edit: s,
    create: s
  },
  EnumType: {
    edit: s,
    create: s
  },
  EnumVal: {
    edit: s,
    create: s
  },
  EqFunction: {
    edit: Up,
    create: Kp
  },
  EqSubFunction: {
    edit: Hp,
    create: Gp
  },
  ExtRef: {
    edit: s,
    create: s
  },
  FCDA: {
    edit: s,
    create: ko
  },
  FileHandling: {
    edit: s,
    create: s
  },
  Function: {
    edit: Mp,
    create: Fp
  },
  GeneralEquipment: {
    edit: bm,
    create: ym
  },
  GetCBValues: {
    edit: s,
    create: s
  },
  GetDataObjectDefinition: {
    edit: s,
    create: s
  },
  GetDataSetValue: {
    edit: s,
    create: s
  },
  GetDirectory: {
    edit: s,
    create: s
  },
  GOOSE: {
    edit: s,
    create: s
  },
  GOOSESecurity: {
    edit: s,
    create: s
  },
  GSE: {
    edit: s,
    create: s
  },
  GSEDir: {
    edit: s,
    create: s
  },
  GSEControl: {
    edit: Vp,
    create: s
  },
  GSESettings: {
    edit: s,
    create: s
  },
  GSSE: {
    edit: s,
    create: s
  },
  Header: {
    edit: s,
    create: s
  },
  History: {
    edit: s,
    create: s
  },
  Hitem: {
    edit: s,
    create: s
  },
  IED: {
    edit: Yu,
    create: s
  },
  IEDName: {
    edit: s,
    create: s
  },
  Inputs: {
    edit: s,
    create: s
  },
  IssuerName: {
    edit: s,
    create: s
  },
  KDC: {
    edit: s,
    create: s
  },
  LDevice: {
    edit: ip,
    create: s
  },
  LN: {
    edit: Mm,
    create: s
  },
  LN0: {
    edit: qm,
    create: s
  },
  LNode: {
    edit: su,
    create: ru
  },
  LNodeType: {
    edit: s,
    create: s
  },
  Line: {
    edit: Dm,
    create: _m
  },
  Log: {
    edit: s,
    create: s
  },
  LogControl: {
    edit: s,
    create: s
  },
  LogSettings: {
    edit: s,
    create: s
  },
  MaxTime: {
    edit: s,
    create: s
  },
  McSecurity: {
    edit: s,
    create: s
  },
  MinTime: {
    edit: s,
    create: s
  },
  NeutralPoint: {
    edit: s,
    create: s
  },
  OptFields: {
    edit: du,
    create: s
  },
  P: {
    edit: s,
    create: s
  },
  PhysConn: {
    edit: s,
    create: s
  },
  PowerTransformer: {
    edit: zu,
    create: Lu
  },
  Private: {
    edit: s,
    create: s
  },
  Process: {
    edit: Pm,
    create: zm
  },
  ProtNs: {
    edit: s,
    create: s
  },
  Protocol: {
    edit: s,
    create: s
  },
  ReadWrite: {
    edit: s,
    create: s
  },
  RedProt: {
    edit: s,
    create: s
  },
  ReportControl: {
    edit: s,
    create: s
  },
  ReportSettings: {
    edit: s,
    create: s
  },
  RptEnabled: {
    edit: s,
    create: s
  },
  SamplesPerSec: {
    edit: s,
    create: s
  },
  SampledValueControl: {
    edit: um,
    create: s
  },
  SecPerSamples: {
    edit: s,
    create: s
  },
  SCL: {
    edit: s,
    create: s
  },
  SDI: {
    edit: s,
    create: s
  },
  SDO: {
    edit: s,
    create: s
  },
  Server: {
    edit: s,
    create: s
  },
  ServerAt: {
    edit: s,
    create: s
  },
  Services: {
    edit: s,
    create: s
  },
  SetDataSetValue: {
    edit: s,
    create: s
  },
  SettingControl: {
    edit: s,
    create: s
  },
  SettingGroups: {
    edit: s,
    create: s
  },
  SGEdit: {
    edit: s,
    create: s
  },
  SmpRate: {
    edit: s,
    create: s
  },
  SMV: {
    edit: s,
    create: s
  },
  SmvOpts: {
    edit: s,
    create: s
  },
  SMVsc: {
    edit: s,
    create: s
  },
  SMVSecurity: {
    edit: s,
    create: s
  },
  SMVSettings: {
    edit: s,
    create: s
  },
  SubEquipment: {
    edit: mm,
    create: fm
  },
  SubFunction: {
    edit: Xp,
    create: Qp
  },
  SubNetwork: {
    edit: Mu,
    create: s
  },
  Subject: {
    edit: s,
    create: s
  },
  Substation: {
    edit: Cu,
    create: Eu
  },
  SupSubscription: {
    edit: s,
    create: s
  },
  TapChanger: {
    edit: Im,
    create: Nm
  },
  Terminal: {
    edit: Ro,
    create: s
  },
  Text: {
    edit: s,
    create: s
  },
  TimerActivatedControl: {
    edit: s,
    create: s
  },
  TimeSyncProt: {
    edit: s,
    create: s
  },
  TransformerWinding: {
    edit: Sm,
    create: xm
  },
  TrgOps: {
    edit: ap,
    create: s
  },
  Val: {
    edit: s,
    create: s
  },
  ValueHandling: {
    edit: s,
    create: s
  },
  Voltage: {
    edit: s,
    create: s
  },
  VoltageLevel: {
    edit: Du,
    create: ku
  }
};
var Hm = Object.defineProperty, Bm = Object.getOwnPropertyDescriptor, ft = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Bm(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Hm(t, i, r), r;
};
function Gm(e) {
  return e ? J[e.tagName].children.filter(
    (t) => he[t].create !== s
  ) : [];
}
let qe = class extends fe {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = he.EqSubFunction.edit(this.element);
    e && this.dispatchEvent(ae(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = he[e].create(this.element);
    t && this.dispatchEvent(ae(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = j(this.element, "LNode");
    return e.length ? u`<div class="container lnode">
          ${e.map(
      (t) => u`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : u``;
  }
  renderEqSubFunctions() {
    const e = j(
      this.element,
      "EqSubFunction"
    );
    return u` ${e.map(
      (t) => u`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Gm(this.element).map(
      (e) => u`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return u`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${d("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${d("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${d("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${Mi(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
qe.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
ft([
  y({ attribute: !1 })
], qe.prototype, "doc", 2);
ft([
  y({ type: Number })
], qe.prototype, "editCount", 2);
ft([
  y({ attribute: !1 })
], qe.prototype, "element", 2);
ft([
  y({ type: Boolean })
], qe.prototype, "showfunctions", 2);
ft([
  H()
], qe.prototype, "header", 1);
ft([
  X("mwc-menu")
], qe.prototype, "addMenu", 2);
ft([
  X('mwc-icon-button[icon="playlist_add"]')
], qe.prototype, "addButton", 2);
qe = ft([
  ue("eq-sub-function-editor")
], qe);
var Wm = Object.defineProperty, Um = Object.getOwnPropertyDescriptor, bt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Um(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Wm(t, i, r), r;
};
function jm(e) {
  return e ? J[e.tagName].children.filter(
    (t) => he[t].create !== s
  ) : [];
}
let He = class extends fe {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = he.EqFunction.edit(this.element);
    e && this.dispatchEvent(ae(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = he[e].create(this.element);
    t && this.dispatchEvent(ae(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = j(this.element, "LNode");
    return e.length ? u`<div class="container lnode">
          ${e.map(
      (t) => u`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : u``;
  }
  renderEqSubFunctions() {
    const e = j(
      this.element,
      "EqSubFunction"
    );
    return u` ${e.map(
      (t) => u`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return jm(this.element).map(
      (e) => u`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return u`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${d("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${d("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${d("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${Mi(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
He.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
bt([
  y({ attribute: !1 })
], He.prototype, "doc", 2);
bt([
  y({ type: Number })
], He.prototype, "editCount", 2);
bt([
  y({ attribute: !1 })
], He.prototype, "element", 2);
bt([
  y({ type: Boolean })
], He.prototype, "showfunctions", 2);
bt([
  H()
], He.prototype, "header", 1);
bt([
  X("mwc-menu")
], He.prototype, "addMenu", 2);
bt([
  X('mwc-icon-button[icon="playlist_add"]')
], He.prototype, "addButton", 2);
He = bt([
  ue("eq-function-editor")
], He);
var Km = Object.defineProperty, Zm = Object.getOwnPropertyDescriptor, qt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Zm(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Km(t, i, r), r;
};
let ut = class extends fe {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return u`<span>
      <slot name="icon"
        >${this.icon ? u`<mwc-icon>${this.icon}</mwc-icon>` : lt}</slot
      ></span
    > `;
  }
  render() {
    return u`<header>${this.label ?? lt}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? lt}</footer>`;
  }
};
ut.styles = we`
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    ::slotted([slot='icon']),
    mwc-icon {
      display: block;
      color: var(--mdc-theme-on-surface);
      transition: transform 150ms linear, box-shadow 200ms linear;
      outline-color: var(--mdc-theme-primary);
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      width: 64px;
      height: 64px;
      --mdc-icon-size: 64px;
    }

    :host([secondary]) ::slotted([slot='icon']),
    :host([secondary]) mwc-icon {
      outline-color: var(--mdc-theme-secondary);
    }

    :host([highlighted]) ::slotted([slot='icon']),
    :host([highlighted]) mwc-icon {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) ::slotted([slot='icon']),
    :host(:focus-within) mwc-icon {
      outline-style: solid;
      outline-width: 4px;
    }

    :host(:focus-within:not([hideActions])) ::slotted([slot='icon']),
    :host(:focus-within:not([hideActions])) mwc-icon {
      transform: scale(0.8);
      transition: all 250ms linear;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }

    ::slotted([slot='icon']:hover),
    mwc-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
      transition: transform 200ms linear, box-shadow 250ms linear;
    }

    ::slotted([slot='action']) {
      color: var(--mdc-theme-on-surface);
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
      position: absolute;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      margin-top: -56px;
      margin-left: 8px;
    }

    :host(:focus-within) ::slotted([slot='action']) {
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
      pointer-events: auto;
      opacity: 1;
    }

    :host(:focus-within) ::slotted([slot='action']:nth-of-type(1)) {
      transform: translate(0px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(2)) {
      transform: translate(0px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(3)) {
      transform: translate(52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(4)) {
      transform: translate(-52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(5)) {
      transform: translate(52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(6)) {
      transform: translate(-52px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(7)) {
      transform: translate(-52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(8)) {
      transform: translate(52px, 52px);
    }

    footer {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      text-align: center;
      align-self: center;
      max-width: 100%;
      direction: rtl;
    }

    header {
      color: var(--mdc-theme-on-primary);
      background-color: var(--mdc-theme-primary);
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1.2em;
      position: absolute;
      text-align: center;
      align-self: center;
      max-width: 100vw;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
    }

    :host([secondary]) header {
      background-color: var(--mdc-theme-secondary);
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within:not([hideActions])) header {
      transform: translate(0, -80px);
    }

    :host(:focus-within[hideActions]) header {
      transform: translate(0, -40px);
    }
  `;
qt([
  y({ type: String })
], ut.prototype, "label", 2);
qt([
  y({ type: String })
], ut.prototype, "icon", 2);
qt([
  y({ type: Boolean })
], ut.prototype, "secondary", 2);
qt([
  y({ type: Boolean })
], ut.prototype, "highlighted", 2);
qt([
  y({ type: Boolean })
], ut.prototype, "hideActions", 2);
ut = qt([
  ue("action-icon")
], ut);
const Jo = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Xm = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, Ym = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Qm = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H11V11H14V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Jm = V`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, eh = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, th = V`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, ih = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, nh = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, rh = V`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />
</svg>`, ah = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, oh = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, sh = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H13V17H11V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, ch = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, lh = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, dh = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
var uh = Object.defineProperty, ph = Object.getOwnPropertyDescriptor, Ht = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ph(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && uh(t, i, r), r;
};
function mh(e) {
  const t = e.getAttribute("lnClass")?.charAt(0) ?? "";
  return hh[t] ?? Jo;
}
const hh = {
  L: Jo,
  A: Xm,
  C: Ym,
  F: Qm,
  G: Jm,
  I: eh,
  K: th,
  M: ih,
  P: nh,
  Q: rh,
  R: ah,
  S: oh,
  T: sh,
  X: ch,
  Y: lh,
  Z: dh
};
let It = class extends fe {
  get header() {
    const e = this.element.getAttribute("prefix") ?? "", t = this.element.getAttribute("lnClass"), i = this.element.getAttribute("lnInst"), n = this.missingIedReference ? `${e} ${t} ${i}` : R(this.element);
    return typeof n == "string" ? n : "";
  }
  get missingIedReference() {
    return this.element.getAttribute("iedName") === "None";
  }
  get isIEDReference() {
    return this.element.getAttribute("iedName") !== "None";
  }
  cloneLNodeElement() {
    const e = this.element.getAttribute("lnClass");
    if (!e) return;
    const t = bo(this.element.parentElement)(
      e
    );
    if (!t) return;
    const i = U(this.element, { lnInst: t });
    this.dispatchEvent(
      Oe({
        new: { parent: this.element.parentElement, element: i }
      })
    );
  }
  openEditWizard() {
    const e = he.LNode.edit(this.element);
    e && this.dispatchEvent(ae(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return u`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${mh(this.element)}</mwc-icon
      ><mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab
      >${this.isIEDReference ? u`` : u`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
};
Ht([
  y({ attribute: !1 })
], It.prototype, "doc", 2);
Ht([
  y({ attribute: !1 })
], It.prototype, "element", 2);
Ht([
  H()
], It.prototype, "header", 1);
Ht([
  H()
], It.prototype, "missingIedReference", 1);
Ht([
  H()
], It.prototype, "isIEDReference", 1);
It = Ht([
  ue("l-node-editor")
], It);
const es = u`<svg
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
</svg>`, ui = {
  action: V`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: V`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: V`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: V`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: V`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: V`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: V`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: V`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: V`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: V`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: V`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: V`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ui.gooseIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ui.reportIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ui.smvIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ui.logIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const ka = {
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
Ti("dAIcon"), Ti("dOIcon"), Ti("enumIcon"), Ti("lNIcon");
function Ti(e) {
  if (e === "reset") return u``;
  const t = ka[e]?.height ?? 24, i = ka[e]?.width ?? 24;
  return u`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${ui[e]}
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
const fh = u`<svg
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
</svg>`, bh = u`<svg
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
</svg>`, gh = u`<svg
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
</svg>`, yh = u`<svg
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
</svg>`, vh = u`<svg
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
</svg>`, ts = u`<svg
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
</svg>`, wh = u`<svg
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
</svg>`, xh = u`<svg
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
V`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
V`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
var Ah = Object.defineProperty, Sh = Object.getOwnPropertyDescriptor, gt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Sh(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Ah(t, i, r), r;
};
function Eh(e) {
  return e ? J[e.tagName].children.filter(
    (t) => he[t].create !== s
  ) : [];
}
let Be = class extends fe {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return this.showfunctions ? `${e} ${t ? `—  ${t}` : ""}` : `${e}`;
  }
  openEditWizard() {
    const e = he.GeneralEquipment.edit(this.element);
    e && this.dispatchEvent(ae(e));
  }
  openCreateWizard(e) {
    const t = he[e].create(this.element);
    t && this.dispatchEvent(ae(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const e = j(this.element, "LNode");
    return e.length ? u`<div class="container lnode">
          ${e.map(
      (t) => u`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : u``;
  }
  renderEqFunctions() {
    const e = j(this.element, "EqFunction");
    return e.length ? u`${e.map(
      (t) => u` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
            ></eq-function-editor>`
    )}` : u``;
  }
  renderAddButtons() {
    return Eh(this.element).map(
      (e) => u`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return this.showfunctions ? u`<action-pane label=${this.header}>
        <abbr slot="action" title="${d("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${d("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${d("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          ></abbr
        >
        ${this.renderLNodes()} ${this.renderEqFunctions()}
      </action-pane>` : u`<action-icon label=${this.header}>
      <mwc-icon slot="icon">${ts}</mwc-icon>
      <mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab>
    </action-icon>`;
  }
};
Be.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
gt([
  y({ attribute: !1 })
], Be.prototype, "doc", 2);
gt([
  y({ type: Number })
], Be.prototype, "editCount", 2);
gt([
  y({ attribute: !1 })
], Be.prototype, "element", 2);
gt([
  y({ type: Boolean })
], Be.prototype, "showfunctions", 2);
gt([
  H()
], Be.prototype, "header", 1);
gt([
  X("mwc-menu")
], Be.prototype, "addMenu", 2);
gt([
  X('mwc-icon-button[icon="playlist_add"]')
], Be.prototype, "addButton", 2);
Be = gt([
  ue("general-equipment-editor")
], Be);
var Ch = Object.defineProperty, Nh = Object.getOwnPropertyDescriptor, yt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Nh(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Ch(t, i, r), r;
};
function Ih(e) {
  return e ? J[e.tagName].children.filter(
    (t) => he[t].create !== s
  ) : [];
}
let Ge = class extends fe {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = he.SubFunction.edit(this.element);
    e && this.dispatchEvent(ae(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = he[e].create(this.element);
    t && this.dispatchEvent(ae(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = j(this.element, "LNode");
    return e.length ? u`<div class="container lnode">
          ${e.map(
      (t) => u`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : u``;
  }
  renderSubFunctions() {
    const e = j(this.element, "SubFunction");
    return u` ${e.map(
      (t) => u`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Ih(this.element).map(
      (e) => u`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return u`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${d("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${d("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${d("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${Mi(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
Ge.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
yt([
  y({ attribute: !1 })
], Ge.prototype, "doc", 2);
yt([
  y({ type: Number })
], Ge.prototype, "editCount", 2);
yt([
  y({ attribute: !1 })
], Ge.prototype, "element", 2);
yt([
  y({ type: Boolean })
], Ge.prototype, "showfunctions", 2);
yt([
  H()
], Ge.prototype, "header", 1);
yt([
  X("mwc-menu")
], Ge.prototype, "addMenu", 2);
yt([
  X('mwc-icon-button[icon="playlist_add"]')
], Ge.prototype, "addButton", 2);
Ge = yt([
  ue("sub-function-editor")
], Ge);
var kh = Object.defineProperty, $h = Object.getOwnPropertyDescriptor, vt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? $h(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && kh(t, i, r), r;
};
function _h(e) {
  return e ? J[e.tagName].children.filter(
    (t) => he[t].create !== s
  ) : [];
}
let We = class extends fe {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = he.Function.edit(this.element);
    e && this.dispatchEvent(ae(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = he[e].create(this.element);
    t && this.dispatchEvent(ae(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = j(this.element, "LNode");
    return e.length ? u`<div class="container lnode">
          ${e.map(
      (t) => u`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : u``;
  }
  renderSubFunctions() {
    const e = j(this.element, "SubFunction");
    return u` ${e.map(
      (t) => u`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return _h(this.element).map(
      (e) => u`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return u`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${d("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${d("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${d("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${Mi(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
We.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
vt([
  y({ attribute: !1 })
], We.prototype, "doc", 2);
vt([
  y({ type: Number })
], We.prototype, "editCount", 2);
vt([
  y({ attribute: !1 })
], We.prototype, "element", 2);
vt([
  y({ type: Boolean })
], We.prototype, "showfunctions", 2);
vt([
  H()
], We.prototype, "header", 1);
vt([
  X("mwc-menu")
], We.prototype, "addMenu", 2);
vt([
  X('mwc-icon-button[icon="playlist_add"]')
], We.prototype, "addButton", 2);
We = vt([
  ue("function-editor")
], We);
function Dh(e) {
  return Th[Eo(e)] ?? ts;
}
function Mi(e, t, i) {
  const n = j(
    t,
    "GeneralEquipment"
  );
  return n.length ? u` <div
        class="${Ot({
    content: !0,
    actionicon: !i
  })}"
      >
        ${n.map(
    (r) => u`<general-equipment-editor
              .doc=${e}
              .element=${r}
              ?showfunctions=${i}
            ></general-equipment-editor>`
  )}
      </div>` : u``;
}
const Th = {
  CBR: bh,
  DIS: fh,
  CTR: gh,
  VTR: yh,
  ERS: vh
}, Lh = [
  ":root",
  "Substation",
  "VoltageLevel",
  "Bay",
  "ConductingEquipment"
];
Object.fromEntries(
  Lh.map((e, t, i) => [e, i.slice(0, t + 1).join(" > ")])
);
we`
  abbr {
    text-decoration: none;
    border-bottom: none;
  }

  .ptrContent.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .content.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  #iedcontainer {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .container.lnode {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  mwc-dialog {
    display: flex;
    flex-direction: column;
  }

  mwc-dialog > * {
    display: block;
    margin-top: 16px;
  }

  powertransformer-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  general-equipment-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  .substation-editor-icon {
    width: 24px;
    height: 24px;
  }
`;
const Rt = "http://www.iec.ch/61850/2003/SCLcoordinates", $a = 2;
function Rn(e) {
  const t = e.getAttributeNS(Rt, "x"), i = e.getAttributeNS(Rt, "y");
  return {
    x: t ? parseInt(t) * $a : 0,
    y: i ? parseInt(i) * $a : 0
  };
}
function pi(e) {
  if (!e.parentElement || e.parentElement?.tagName === "SCL")
    return Rn(e);
  const t = pi(e.parentElement), i = Rn(e);
  return {
    x: t.x + i.x,
    y: t.y + i.y
  };
}
function _a(e) {
  return e.children.length === 1 && e.children[0].tagName === "ConnectivityNode";
}
function zh(e) {
  const t = e?.closest("Substation");
  if (!t) return [];
  const i = zi(e) ?? "", [n, r, a] = i.split("/");
  return Array.from(t.getElementsByTagName("Terminal")).filter(
    (o) => o.getAttribute("connectivityNode") === i && o.getAttribute("cNodeName") === Nt(e) && (!o.hasAttribute("substationName") || o.getAttribute("substationName") === n) && (!o.hasAttribute("voltageLevelName") || o.getAttribute("voltageLevelName") === r) && (!o.hasAttribute("bayName") || o.getAttribute("bayName") === a)
  );
}
function is(e) {
  if (e.tagName != "ConnectivityNode") return { x: 0, y: 0 };
  const t = e.closest("Substation"), i = zi(e);
  let n = 0, r = 0, a = 0, o = 0;
  return Array.from(
    t.querySelectorAll("ConductingEquipment, PowerTransformer")
  ).filter(
    (c) => c.querySelector(`Terminal[connectivityNode="${i}"]`) != null
  ).forEach((c) => {
    n++;
    const { x: l, y: p } = pi(c);
    c.parentElement === e.parentElement && (r++, a += l), o += p;
  }), n === 0 ? { x: 0, y: 0 } : n === 1 ? { x: a + 1, y: o + 1 } : {
    x: Math.round(a / r),
    y: Math.round(o / n)
  };
}
function Ph(e, t, i) {
  let n = e.parentElement;
  for (; n; ) {
    if (n.contains(t))
      return n;
    n = n.parentElement;
  }
  return i;
}
function Vh(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Rh(e, t) {
  if (e.path.length === 0) return !1;
  const i = e.point.x, n = e.path[e.path.length - 1].x, r = !(i - n), a = !(e.point.x - t.point.x);
  return r !== a;
}
function Mh(e) {
  return e.filter((t, i, n) => {
    if (i === 0 || i === n.length - 1) return !0;
    const r = n[i].x - n[i - 1].x !== 0 ? "horizontal" : "vertical", a = n[i + 1].x - n[i].x !== 0 ? "horizontal" : "vertical";
    return r !== a;
  });
}
function Oh(e, t, i) {
  const n = i.dist, a = Rh(i, e) ? Math.pow(t + 1, 2) : 0;
  if (n + t + a < e.dist) {
    e.dist = n + t + a;
    const o = [...i.path];
    o.push(i.point), e.path = o;
  }
}
function Fh(e) {
  let t = Number.MAX_SAFE_INTEGER, i = null;
  for (const n of e)
    n.dist < t && (t = n.dist, i = n);
  return i;
}
function qh(e, t) {
  t.dist = 0;
  const i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  for (n.add(t); n.size != 0; ) {
    const r = Fh(n);
    n.delete(r);
    for (const a of r.adjacent) {
      const o = e.find(
        (l) => l.point.x === a.point.x && l.point.y === a.point.y
      ), c = a.edgeWeight;
      o && !i.has(o) && (Oh(o, c, r), n.add(o));
    }
    i.add(r);
  }
  return [];
}
function ns(e, t) {
  const i = e.map(
    (a) => Math.abs(t.x - a.point.x) + Math.abs(t.y - a.point.y)
  ), n = Math.min(...i), r = i.indexOf(n);
  return e[r];
}
function Hh(e, t) {
  const i = ns(e, t)?.point;
  if (!i) return;
  const n = {
    point: t,
    adjacent: [
      { point: i, edgeWeight: Vh(t, i) }
    ],
    dist: Number.MAX_SAFE_INTEGER,
    path: []
  };
  return e.push(n), n;
}
function Bh(e, t, i) {
  const n = Hh(e, t), r = ns(e, i);
  if (!n || !r) return [];
  qh(e, n);
  const a = r.path.concat(r.point);
  return Mh(a).concat([i]);
}
function Da(e, t, i) {
  return e.find((n) => n.point.x === t && n.point.y === i);
}
function Gh(e, t, i, n) {
  let r, a;
  return n === "prevX" ? (r = t.point.x - i, a = t.point.y) : n === "prevY" ? (r = t.point.x, a = t.point.y - i) : n === "nextX" ? (r = t.point.x + i, a = t.point.y) : (r = t.point.x, a = t.point.y + i), Da(e, r, a) ? {
    point: Da(e, r, a).point,
    edgeWeight: i
  } : null;
}
function Wh(e, t) {
  const i = [];
  for (let n = 0; n < e.length; n++)
    for (let r = 0; r < e[n].length; r++)
      e[n][r] === 0 && i.push({
        point: {
          x: r * t + t / 2,
          y: n * t + t / 2
        },
        adjacent: [],
        dist: Number.MAX_SAFE_INTEGER,
        path: []
      });
  for (const n of i) {
    const r = ["prevX", "prevY", "nextX", "nextY"].map((a) => Gh(i, n, t, a)).filter((a) => a);
    n.adjacent = r;
  }
  return i;
}
function Uh(e, t, i) {
  const n = e.x > t.x ? e.x : t.x, r = e.y > t.y ? e.y : t.y, a = [];
  for (let o = 0; o <= Math.ceil(r / i) + 1; o++) {
    a[o] = [];
    for (let c = 0; c <= Math.ceil(n / i) + 1; c++)
      a[o][c] = 0;
  }
  return a[Math.floor(e.y / i)][Math.floor(e.x / i)] = 1, a[Math.floor(t.y / i)][Math.floor(t.x / i)] = 1, a;
}
function jh(e, t, i) {
  const n = Math.min(
    Math.floor(e.x / i),
    Math.floor(t.x / i)
  ), r = Math.min(
    Math.floor(e.y / i),
    Math.floor(t.y / i)
  ), a = n > 1 ? n - 1 : 0, o = r > 1 ? r - 1 : 0, c = a * i, l = o * i;
  return [
    { x: e.x - c, y: e.y - l },
    { x: t.x - c, y: t.y - l }
  ];
}
function Kh(e, t, i, n, r) {
  if (t === n && i === r) return e;
  const a = t.x - n.x, o = t.y - n.y;
  return e.map((c) => ({ x: c.x + a, y: c.y + o }));
}
function Zh(e, t, i, n) {
  if (e.x === t.x && e.y === t.y) return [];
  let r = e, a = t;
  n || ([r, a] = jh(e, t, i), n = Uh(r, a, i));
  const o = Wh(n, i), c = Bh(o, r, a);
  return Kh(c, e, t, r, a);
}
const ze = 64, ci = 50, Mn = 25, Xh = 6;
function mi(e) {
  const t = pi(e);
  return {
    x: t.x * ze + (ze - ci) / 2,
    y: t.y * ze + (ze - ci) / 2
  };
}
function rs(e) {
  const t = pi(e);
  return {
    x: t.x * ze,
    y: t.y * ze
  };
}
function as(e) {
  const t = is(e);
  return {
    x: t.x * ze + (ze - Mn) / 2,
    y: t.y * ze + (ze - Mn) / 2
  };
}
function os(e, t, i, n) {
  const r = n ?? Xh;
  switch (i) {
    case "top": {
      const a = e.x, o = e.y;
      return {
        x: a + t / 2,
        y: o - r
      };
    }
    case "bottom": {
      const a = e.x, o = e.y;
      return {
        x: a + t / 2,
        y: o + (t + r)
      };
    }
    case "left": {
      const a = e.x, o = e.y;
      return {
        x: a - r,
        y: o + t / 2
      };
    }
    case "right": {
      const a = e.x, o = e.y;
      return {
        x: a + (t + r),
        y: o + t / 2
      };
    }
    default:
      return e;
  }
}
function On(e, t) {
  const i = mi(e);
  return os(
    i,
    ci,
    t
  );
}
function Yh(e, t) {
  const i = as(e);
  return os(
    i,
    Mn,
    t,
    -8.333333333333334
  );
}
function wt(e) {
  const t = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  t.setAttribute(
    "id",
    typeof R(e) == "string" ? R(e) : "unidentifiable"
  ), t.setAttribute("type", e.tagName);
  const i = _n(e);
  i && t.setAttribute("desc", i);
  const n = Rn(e);
  return t.setAttribute("sxy:x", `${n.x}`), t.setAttribute("sxy:y", `${n.y}`), t;
}
function Qh(e) {
  return wt(e);
}
function Jh(e) {
  return wt(e);
}
function ef(e) {
  return wt(e);
}
function tf(e, t, i) {
  e.querySelectorAll(`g[id="${R(t)}"]`).forEach((n) => {
    const r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    r.setAttribute("type", "BayLabel"), i && r.addEventListener("click", i), n.prepend(r);
    const a = n.getBBox(), o = Oi(
      t.getAttribute("name") || "",
      { x: a.x, y: a.y - 20 },
      "medium"
    );
    r.append(o);
    const c = o.getBBox();
    new DOMParser().parseFromString(
      es.strings[0],
      "application/xml"
    ).querySelectorAll("circle,path,line").forEach((p) => {
      p.setAttribute(
        "transform",
        `translate(${c.x + c.width + 5},${c.y}) scale(0.75)`
      ), r.append(p);
    });
  });
}
function Oi(e, t, i) {
  const n = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  return n.textContent = e, n.setAttribute(
    "style",
    `font-family: Roboto, sans-serif; font-weight: 300; font-size: ${i}`
  ), n.setAttribute("x", `${t.x}`), n.setAttribute("y", `${t.y}`), n;
}
function Ta(e, t, i) {
  const n = wt(e), r = typeof R(e) == "string" ? R(e) : "unidentifiable", a = e.closest(
    "ConductingEquipment, PowerTransformer"
  ), o = On(
    a,
    t
  ), c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  return c.setAttribute("id", `${r}`), c.setAttribute("cx", `${o.x}`), c.setAttribute("cy", `${o.y}`), c.setAttribute("r", "2"), n.appendChild(c), i && n.addEventListener("click", i), n;
}
function nf(e, t) {
  const i = wt(e);
  i.setAttribute("type", "Busbar");
  const n = rs(e), r = document.createElementNS("http://www.w3.org/2000/svg", "line");
  return r.setAttribute("name", Nt(e)), r.setAttribute("stroke-width", "4"), r.setAttribute("stroke", "currentColor"), r.setAttribute("x1", `${n.x}`), r.setAttribute("y1", `${n.y}`), r.setAttribute("x2", `${t}`), r.setAttribute("y2", `${n.y}`), i.appendChild(r), i;
}
function rf(e, t, i) {
  e.querySelectorAll(`g[id="${R(t)}"]`).forEach((n) => {
    const r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    r.setAttribute("type", "BusbarLabel"), i && r.addEventListener("click", i), n.prepend(r);
    const a = n.getBBox(), o = Oi(
      t.getAttribute("name") || "",
      { x: a.x, y: a.y - 20 },
      "medium"
    );
    r.append(o);
    const c = o.getBBox();
    new DOMParser().parseFromString(
      es.strings[0],
      "application/xml"
    ).querySelectorAll("circle,path,line").forEach((p) => {
      p.setAttribute(
        "transform",
        `translate(${c.x + c.width + 5},${c.y}) scale(0.75)`
      ), r.append(p);
    });
  });
}
function af(e, t) {
  const i = wt(e), n = mi(e);
  new DOMParser().parseFromString(
    Dh(e).strings[0],
    "application/xml"
  ).querySelectorAll("circle,path,line").forEach((o) => {
    o.setAttribute(
      "transform",
      `translate(${n.x},${n.y}) scale(${ci / 25})`
    ), i.appendChild(o);
  });
  const a = Oi(
    Nt(e),
    { x: n.x - 15, y: n.y + 30 },
    "x-small"
  );
  return i.appendChild(a), t && i.addEventListener("click", t), i;
}
function of(e, t) {
  const i = wt(e), n = mi(e);
  new DOMParser().parseFromString(
    xh.strings[0],
    "application/xml"
  ).querySelectorAll("circle,path,line").forEach((o) => {
    o.setAttribute(
      "transform",
      `translate(${n.x},${n.y}) scale(${ci / 25})`
    ), i.appendChild(o);
  });
  const a = Oi(
    Nt(e),
    { x: n.x - 15, y: n.y + 30 },
    "x-small"
  );
  return i.appendChild(a), t && i.addEventListener("click", t), i;
}
function sf(e, t) {
  const i = wt(e), n = new DOMParser().parseFromString(
    wh.strings[0],
    "application/xml"
  ), r = as(e);
  return n.querySelectorAll("circle").forEach((a) => {
    a.setAttribute(
      "transform",
      `translate(${r.x},${r.y})`
    ), i.appendChild(a);
  }), t && i.addEventListener("click", t), i;
}
function cf(e, t, i) {
  const n = Zh(
    t,
    e,
    ze
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let a = "";
  n.forEach(({ x: o, y: c }, l) => {
    l === 0 ? a = a + ` M ${o} ${c}` : a = a + ` L ${o} ${c}`;
  }), r.setAttribute("d", a), r.setAttribute("fill", "transparent"), r.setAttribute("stroke", "currentColor"), r.setAttribute("stroke-width", "1"), i.insertAdjacentElement("afterbegin", r);
}
function lf(e, t, i) {
  const n = [e].concat([t]), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let a = "";
  n.forEach(({ x: o, y: c }, l) => {
    l === 0 ? a = a + ` M ${o} ${c}` : a = a + ` L ${o} ${c}`;
  }), r.setAttribute("d", a), r.setAttribute("fill", "transparent"), r.setAttribute("stroke", "currentColor"), r.setAttribute("stroke-width", "1.5"), i.appendChild(r);
}
function df(e, t) {
  const i = pi(e), n = is(t);
  return i.y < n.y && i.x < n.x ? { startDirection: "bottom", endDirection: "left" } : i.y < n.y && i.x > n.x ? { startDirection: "bottom", endDirection: "right" } : i.y < n.y && i.x === n.x ? { startDirection: "bottom", endDirection: "top" } : i.y > n.y && i.x < n.x ? { startDirection: "top", endDirection: "left" } : i.y > n.y && i.x > n.x ? { startDirection: "top", endDirection: "right" } : i.y > n.y && i.x === n.x ? { startDirection: "top", endDirection: "bottom" } : i.y === n.y && i.x > n.x ? { startDirection: "left", endDirection: "right" } : i.y === n.y && i.x < n.x ? { startDirection: "right", endDirection: "left" } : { startDirection: "bottom", endDirection: "top" };
}
function uf(e) {
  return Math.max(
    ...Array.from(
      e.querySelectorAll("ConductingEquipment, PowerTransformer")
    ).map((t) => mi(t).x)
  ) + ze;
}
function Fi(e) {
  return e.getAttribute("name");
}
function qi(e) {
  return e.getAttribute("desc");
}
function Hi(e) {
  return e.getAttributeNS(Rt, "x");
}
function Bi(e) {
  return e.getAttributeNS(Rt, "y");
}
function La(e) {
  if (e === null)
    return e;
  let t = Number(e);
  return (isNaN(t) || t < 0) && (t = 0), t.toString();
}
function za(e, t, i) {
  i === null ? e.removeAttributeNS(Rt, t) : e.setAttributeNS(Rt, t, i);
}
function cr(e) {
  return (t) => {
    const i = g(t.find((c) => c.label === "name")), n = g(t.find((c) => c.label === "desc")), r = g(t.find((c) => c.label === "xCoordinate")), a = g(t.find((c) => c.label === "yCoordinate"));
    if (i === Fi(e) && n === qi(e) && r === Hi(e) && a === Bi(e))
      return [];
    const o = U(e, { name: i, desc: n });
    return za(o, "x", La(r)), za(o, "y", La(a)), [{ old: { element: e }, new: { element: o } }];
  };
}
function lr(e, t) {
  return [
    u`<wizard-textfield
      label="xCoordinate"
      nullable
      .maybeValue=${e}
      helper="${d("sld.wizard.xCoordinateHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="yCoordinate"
      .maybeValue=${t}
      nullable
      helper="${d("sld.wizard.yCoordinateHelper")}"
    ></wizard-textfield>`
  ];
}
function pf(e, t, i, n) {
  return er(e, t).concat(
    lr(i, n)
  );
}
function mf(e) {
  return [
    {
      title: d("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: cr(e)
      },
      content: pf(
        Fi(e),
        qi(e),
        Hi(e),
        Bi(e)
      )
    }
  ];
}
function hf(e, t, i, n, r, a, o) {
  return tr(
    e,
    t,
    r,
    a,
    o
  ).concat(lr(i, n));
}
function ff(e) {
  const t = ir(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: d("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: cr(e)
      },
      content: hf(
        Fi(e),
        qi(e),
        Hi(e),
        Bi(e),
        "edit",
        Co(e),
        t
      )
    }
  ];
}
function bf(e, t, i, n, r, a) {
  return or(e, t, i, a).concat(
    lr(n, r)
  );
}
function gf(e) {
  return [
    {
      title: d("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: cr(e)
      },
      content: bf(
        Fi(e),
        qi(e),
        e.getAttribute("type"),
        Hi(e),
        Bi(e),
        sr(e)
      )
    }
  ];
}
const yf = {
  AccessControl: {
    edit: s,
    create: s
  },
  AccessPoint: {
    edit: s,
    create: s
  },
  Address: {
    edit: s,
    create: s
  },
  Association: {
    edit: s,
    create: s
  },
  Authentication: {
    edit: s,
    create: s
  },
  BDA: {
    edit: s,
    create: s
  },
  BitRate: {
    edit: s,
    create: s
  },
  Bay: {
    edit: mf,
    create: s
  },
  ClientLN: {
    edit: s,
    create: s
  },
  ClientServices: {
    edit: s,
    create: s
  },
  CommProt: {
    edit: s,
    create: s
  },
  Communication: {
    edit: s,
    create: s
  },
  ConductingEquipment: {
    edit: ff,
    create: s
  },
  ConfDataSet: {
    edit: s,
    create: s
  },
  ConfLdName: {
    edit: s,
    create: s
  },
  ConfLNs: {
    edit: s,
    create: s
  },
  ConfLogControl: {
    edit: s,
    create: s
  },
  ConfReportControl: {
    edit: s,
    create: s
  },
  ConfSG: {
    edit: s,
    create: s
  },
  ConfSigRef: {
    edit: s,
    create: s
  },
  ConnectedAP: {
    edit: s,
    create: s
  },
  ConnectivityNode: {
    edit: No,
    create: s
  },
  DA: {
    edit: s,
    create: s
  },
  DAI: {
    edit: s,
    create: s
  },
  DAType: {
    edit: s,
    create: s
  },
  DO: {
    edit: s,
    create: s
  },
  DOI: {
    edit: s,
    create: s
  },
  DOType: {
    edit: s,
    create: s
  },
  DataObjectDirectory: {
    edit: s,
    create: s
  },
  DataSet: {
    edit: s,
    create: s
  },
  DataSetDirectory: {
    edit: s,
    create: s
  },
  DataTypeTemplates: {
    edit: s,
    create: s
  },
  DynAssociation: {
    edit: s,
    create: s
  },
  DynDataSet: {
    edit: s,
    create: s
  },
  EnumType: {
    edit: s,
    create: s
  },
  EnumVal: {
    edit: s,
    create: s
  },
  EqFunction: {
    edit: s,
    create: s
  },
  EqSubFunction: {
    edit: s,
    create: s
  },
  ExtRef: {
    edit: s,
    create: s
  },
  FCDA: {
    edit: s,
    create: s
  },
  FileHandling: {
    edit: s,
    create: s
  },
  Function: {
    edit: s,
    create: s
  },
  GeneralEquipment: {
    edit: s,
    create: s
  },
  GetCBValues: {
    edit: s,
    create: s
  },
  GetDataObjectDefinition: {
    edit: s,
    create: s
  },
  GetDataSetValue: {
    edit: s,
    create: s
  },
  GetDirectory: {
    edit: s,
    create: s
  },
  GOOSE: {
    edit: s,
    create: s
  },
  GOOSESecurity: {
    edit: s,
    create: s
  },
  GSE: {
    edit: s,
    create: s
  },
  GSEDir: {
    edit: s,
    create: s
  },
  GSEControl: {
    edit: s,
    create: s
  },
  GSESettings: {
    edit: s,
    create: s
  },
  GSSE: {
    edit: s,
    create: s
  },
  Header: {
    edit: s,
    create: s
  },
  History: {
    edit: s,
    create: s
  },
  Hitem: {
    edit: s,
    create: s
  },
  IED: {
    edit: s,
    create: s
  },
  IEDName: {
    edit: s,
    create: s
  },
  Inputs: {
    edit: s,
    create: s
  },
  IssuerName: {
    edit: s,
    create: s
  },
  KDC: {
    edit: s,
    create: s
  },
  LDevice: {
    edit: s,
    create: s
  },
  LN: {
    edit: s,
    create: s
  },
  LN0: {
    edit: s,
    create: s
  },
  LNode: {
    edit: s,
    create: s
  },
  LNodeType: {
    edit: s,
    create: s
  },
  Line: {
    edit: s,
    create: s
  },
  Log: {
    edit: s,
    create: s
  },
  LogControl: {
    edit: s,
    create: s
  },
  LogSettings: {
    edit: s,
    create: s
  },
  MaxTime: {
    edit: s,
    create: s
  },
  McSecurity: {
    edit: s,
    create: s
  },
  MinTime: {
    edit: s,
    create: s
  },
  NeutralPoint: {
    edit: s,
    create: s
  },
  OptFields: {
    edit: s,
    create: s
  },
  P: {
    edit: s,
    create: s
  },
  PhysConn: {
    edit: s,
    create: s
  },
  PowerTransformer: {
    edit: gf,
    create: s
  },
  Private: {
    edit: s,
    create: s
  },
  Process: {
    edit: s,
    create: s
  },
  ProtNs: {
    edit: s,
    create: s
  },
  Protocol: {
    edit: s,
    create: s
  },
  ReadWrite: {
    edit: s,
    create: s
  },
  RedProt: {
    edit: s,
    create: s
  },
  ReportControl: {
    edit: s,
    create: s
  },
  ReportSettings: {
    edit: s,
    create: s
  },
  RptEnabled: {
    edit: s,
    create: s
  },
  SamplesPerSec: {
    edit: s,
    create: s
  },
  SampledValueControl: {
    edit: s,
    create: s
  },
  SecPerSamples: {
    edit: s,
    create: s
  },
  SCL: {
    edit: s,
    create: s
  },
  SDI: {
    edit: s,
    create: s
  },
  SDO: {
    edit: s,
    create: s
  },
  Server: {
    edit: s,
    create: s
  },
  ServerAt: {
    edit: s,
    create: s
  },
  Services: {
    edit: s,
    create: s
  },
  SetDataSetValue: {
    edit: s,
    create: s
  },
  SettingControl: {
    edit: s,
    create: s
  },
  SettingGroups: {
    edit: s,
    create: s
  },
  SGEdit: {
    edit: s,
    create: s
  },
  SmpRate: {
    edit: s,
    create: s
  },
  SMV: {
    edit: s,
    create: s
  },
  SmvOpts: {
    edit: s,
    create: s
  },
  SMVsc: {
    edit: s,
    create: s
  },
  SMVSecurity: {
    edit: s,
    create: s
  },
  SMVSettings: {
    edit: s,
    create: s
  },
  SubEquipment: {
    edit: s,
    create: s
  },
  SubFunction: {
    edit: s,
    create: s
  },
  SubNetwork: {
    edit: s,
    create: s
  },
  Subject: {
    edit: s,
    create: s
  },
  Substation: {
    edit: s,
    create: s
  },
  SupSubscription: {
    edit: s,
    create: s
  },
  TapChanger: {
    edit: s,
    create: s
  },
  Terminal: {
    edit: Ro,
    create: s
  },
  Text: {
    edit: s,
    create: s
  },
  TimerActivatedControl: {
    edit: s,
    create: s
  },
  TimeSyncProt: {
    edit: s,
    create: s
  },
  TransformerWinding: {
    edit: s,
    create: s
  },
  TrgOps: {
    edit: s,
    create: s
  },
  Val: {
    edit: s,
    create: s
  },
  ValueHandling: {
    edit: s,
    create: s
  },
  Voltage: {
    edit: s,
    create: s
  },
  VoltageLevel: {
    edit: s,
    create: s
  }
};
var vf = Object.defineProperty, wf = Object.getOwnPropertyDescriptor, Gi = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? wf(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && vf(t, i, r), r;
};
let ei;
function xf() {
  ei = void 0;
}
addEventListener("open-doc", xf);
class Wi extends fe {
  get substations() {
    return this.doc ? Array.from(this.doc.querySelectorAll(":root > Substation")).sort(
      (t, i) => ho(t, i)
    ) : [];
  }
  set selectedSubstation(t) {
    ei = t;
  }
  get selectedSubstation() {
    if (ei === void 0) {
      const t = this.substations;
      t.length > 0 && (ei = t[0]);
    }
    return ei;
  }
  /**
   * Get all the Power Transformers from an element.
   */
  getPowerTransformers(t) {
    return Array.from(
      t.querySelectorAll("PowerTransformer")
    ).filter(Et);
  }
  /**
   * Get all the Voltage Levels from the substation.
   */
  getVoltageLevels(t) {
    return Array.from(
      t.querySelectorAll("VoltageLevel")
    ).filter(Et);
  }
  /**
   * Get all the BusBars from the voltage level.
   */
  getBusBars(t) {
    return Array.from(t.querySelectorAll("Bay")).filter(Et).filter((i) => _a(i));
  }
  /**
   * Get all the bays from the voltage level.
   */
  getBays(t) {
    return Array.from(t.querySelectorAll("Bay")).filter(Et).filter((i) => !_a(i));
  }
  /**
   * Get all the Conducting Equipment from a Bay.
   * @param bayElement - The Bay to search in.
   */
  getConductingEquipments(t) {
    return Array.from(
      t.querySelectorAll("ConductingEquipment")
    ).filter(Et);
  }
  /**
   * Get all the Connectivity Nodes from a Bay/Busbar.
   * @param bayElement - The Bay/Busbar to search in.
   */
  getConnectivityNode(t) {
    return Array.from(t.querySelectorAll("ConnectivityNode")).filter(Et).filter((i) => i.getAttribute("name") !== "grounded");
  }
  /**
   * Search for Equipment (ConductionEquipment or PowerTransformer) which has a terminal wth a connectivityNode
   * tha is the same as the passed pathName.
   * @param parentElement - The Element to search in for Equipment.
   * @param pathName      - The PathName to search for in the Terminal.
   */
  findEquipment(t, i) {
    return Array.from(
      t.querySelectorAll("ConductingEquipment, PowerTransformer")
    ).filter(Et).filter(
      (n) => n.querySelector(`Terminal[connectivityNode="${i}"]`)
    );
  }
  /**
   * Draw all equipment and connections of the selected Substation.
   */
  drawSubstation(t) {
    const i = Qh(t);
    this.svg.appendChild(i), this.drawPowerTransformers(t, i), this.drawVoltageLevels(t, i);
  }
  /**
   * Draw all available `PowerTransformer`s of passed parent element.
   * Should only be a <g> element.
   * @param parentElement - The parent element to search for PowerTransformers.
   * @param parentGroup   - The SVG Group to which to add the PowerTransformer.
   */
  drawPowerTransformers(t, i) {
    this.getPowerTransformers(t).forEach(
      (n) => this.drawPowerTransformer(i, n)
    );
  }
  /**
   * Draw an SVG from the passed PowerTransformer Element.
   * Should only be a <g> element.
   * @param parentGroup             - The SVG Group to which to add the PowerTransformer.
   * @param powerTransformerElement - The PowerTransformer to draw.
   */
  drawPowerTransformer(t, i) {
    const n = of(
      i,
      (r) => this.openEditWizard(r, i)
    );
    t.appendChild(n);
  }
  /**
   * Draw all available Voltage Levels of the passed Substation Element.
   * Should only be a <g> element.
   *  @param substationElement - The substation containing the voltage levels.
   *  @param substationGroup   - The group to which to add the SVGs.
   */
  drawVoltageLevels(t, i) {
    this.getVoltageLevels(t).forEach((n) => {
      const r = Jh(n);
      i.appendChild(r), this.drawPowerTransformers(n, r), this.drawBays(n, r), this.drawBusBars(n, r);
    }), this.getVoltageLevels(t).forEach((n) => {
      this.getBusBars(n).forEach((r) => {
        this.drawBusBarConnections(t, this.svg, r), rf(
          this.svg,
          r,
          (a) => this.openEditWizard(a, r)
        );
      }), this.getBays(n).forEach((r) => {
        this.drawBayConnections(t, this.svg, r), tf(
          this.svg,
          r,
          (a) => this.openEditWizard(a, r)
        );
      });
    });
  }
  /**
   * Draw all available Bays of the passed Voltage Level Element.
   * Should only be a <g> element.
   * @param voltageLevelElement - The Voltage Level containing the bays.
   * @param voltageLevelGroup   - The group to which to add the SVGs.
   * */
  drawBays(t, i) {
    this.getBays(t).forEach((n) => {
      const r = ef(n);
      i.appendChild(r), this.drawPowerTransformers(n, r), this.drawConductingEquipments(n, r), this.drawConnectivityNodes(n, r);
    });
  }
  /**
   * Draw all available Conducting Equipments of the passed Bay Element.
   * Should only be a <g> element.
   * @param bayElement - The Bay containing the Conducting Equipment.
   * @param bayGroup   - The group to which to add the SVGs.
   */
  drawConductingEquipments(t, i) {
    this.getConductingEquipments(t).filter(
      (n) => Array.from(
        n.querySelectorAll("Terminal")
      ).filter(
        (r) => r.getAttribute("cNodeName") !== "grounded"
      ).length !== 0
    ).forEach((n) => {
      const r = af(
        n,
        (a) => this.openEditWizard(a, n)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all available Connectivity Nodes of the passed Bay Element.
   * @param bayElement - The Bay containing the Connectivity Nodes.
   * @param bayGroup   - The group to which to add the SVGs.
   * */
  drawConnectivityNodes(t, i) {
    this.getConnectivityNode(t).filter((n) => zh(n).length > 0).forEach((n) => {
      const r = sf(
        n,
        (a) => this.openEditWizard(a, n)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all connections between the different Equipment in the Bay and the Bay has with other Equipment outside
   * the bay.
   * @param rootElement - The Element containing all the other elements to which the Bay is connected.
   * @param rootGroup   - The SVG Element that contains all groups from the elements to add path to.
   * @param bayElement  - The Bay that holds the Connectivity Node to connect with.
   */
  drawBayConnections(t, i, n) {
    this.getConnectivityNode(n).forEach((r) => {
      this.findEquipment(t, zi(r)).forEach(
        (a) => {
          const o = Ph(
            r,
            a,
            n
          ), c = df(a, r), l = On(
            a,
            c.startDirection
          ), p = Yh(
            r,
            c.endDirection
          );
          i.querySelectorAll(`g[id="${R(o)}"]`).forEach(
            (b) => cf(
              p,
              l,
              b
            )
          );
          const m = a.querySelector(
            `Terminal[connectivityNode="${r.getAttribute("pathName")}"]`
          ), h = Ta(
            m,
            c.startDirection,
            (b) => this.openEditWizard(b, m)
          );
          i.querySelectorAll(`g[id="${R(a)}"]`).forEach((b) => b.appendChild(h));
        }
      );
    });
  }
  /**
   * Draw all available Busbars of the passed Voltage Level Element.
   * @param voltageLevelElement - The Voltage Level containing the Busbars.
   * @param voltageLevelGroup   - The group to which to add the SVGs.
   */
  drawBusBars(t, i) {
    this.getBusBars(t).forEach((n) => {
      const r = nf(
        n,
        uf(t)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all the connections a Busbar has with other Equipment.
   * @param rootElement   - The Element containing all the other elements to which the Busbar is connected.
   * @param rootGroup     - The SVG Element that contains all groups from the elements to add path to.
   * @param busbarElement - The Busbar that holds the Connectivity Node to connect with.
   */
  drawBusBarConnections(t, i, n) {
    const r = zi(n.children[0]), a = rs(n);
    this.findEquipment(t, r).forEach((o) => {
      const c = o.parentElement, l = mi(o), p = a.y < l.y ? "top" : "bottom", m = On(
        o,
        p
      ), h = {
        x: m.x,
        y: a.y
      }, b = o.querySelector(
        `Terminal[connectivityNode="${r}"]`
      );
      i.querySelectorAll(`g[id="${R(c)}"]`).forEach(
        (S) => lf(
          h,
          m,
          S
        )
      );
      const w = Ta(
        b,
        p,
        (S) => this.openEditWizard(S, b)
      );
      i.querySelectorAll(`g[id="${R(o)}"]`).forEach((S) => S.appendChild(w));
    });
  }
  /**
   * Remove all the child elements (and descendants) from the SVG Element, to have a clean start.
   */
  clearSVG() {
    for (; this.svg.firstChild; )
      this.svg.removeChild(this.svg.lastChild);
  }
  /**
   * Draw all the elements of the selected Substation.
   */
  drawSVGElements() {
    this.clearSVG();
    const t = this.selectedSubstation;
    if (t) {
      this.drawSubstation(t);
      const i = this.svg.getBBox();
      this.svg.setAttribute(
        "viewBox",
        i.x - 10 + " " + (i.y - 10) + " " + (i.width + 20) + " " + (i.height + 20)
      ), this.svg.setAttribute("width", i.width + 20 + "px"), this.svg.setAttribute("height", i.height + 20 + "px"), Sc(this.panzoomContainer, {
        zoomSpeed: 0.2,
        maxZoom: 1.5,
        minZoom: 0.2,
        initialZoom: 0.5
      });
    }
  }
  /**
   * Open an Edit wizard for an element.
   * @param element - The element to show the wizard for.
   */
  openEditWizard(t, i) {
    const n = yf[i.tagName].edit(i);
    n && (this.dispatchEvent(ae(n)), t.stopPropagation());
  }
  updated(t) {
    super.updated(t), (t.has("doc") || t.has("selectedSubstation")) && this.drawSVGElements();
  }
  onSelect(t) {
    this.selectedSubstation = this.substations[t.detail.index], this.requestUpdate("selectedSubstation");
  }
  renderSubstationSelector() {
    const t = this.substations;
    if (t.length > 0) {
      if (t.length > 1)
        return u`
          <mwc-select
            id="substationSelector"
            label="${d("sld.substationSelector")}"
            @selected=${this.onSelect}
          >
            ${t.map((a) => {
          const o = Nt(a), c = _n(a);
          return u` <mwc-list-item
                value="${o}"
                ?selected=${a == this.selectedSubstation}
              >
                ${o}${c !== void 0 ? " (" + c + ")" : ""}
              </mwc-list-item>`;
        })}
          </mwc-select>
        `;
      const i = this.selectedSubstation, n = Nt(i), r = _n(i);
      return u`
        <mwc-textfield
          label="${d("substation.name")}"
          value="${n}${r !== void 0 ? " (" + r + ")" : ""}"
          id="selectedSubstation"
          readonly
          disabled
        >
        </mwc-textfield>
      `;
    }
    return u`
      <h1>
        <span id="noSubstationSelector">${d("substation.missing")}</span>
      </h1>
    `;
  }
  render() {
    return u` ${this.renderSubstationSelector()}

      <div class="sldContainer">
        <div id="panzoom">
          <svg xmlns="http://www.w3.org/2000/svg" id="svg"></svg>
        </div>
      </div>`;
  }
  static {
    this.styles = we`
    h1 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
    }

    #substationSelector,
    #selectedSubstation {
      width: 35vw;
      margin: 0.67em 0 0 0.67em;
    }

    #noSubstationSelector {
      color: var(--base1);
    }

    .sldContainer {
      overflow: hidden;
    }

    g {
      pointer-events: bounding-box;
    }

    g[type='Bay'] > g[type='BayLabel'] {
      visibility: hidden;
    }
    g[type='Bay']:hover > g[type='BayLabel'] {
      visibility: visible;
    }

    g[type='Busbar'] > g[type='BusbarLabel'] {
      visibility: hidden;
    }
    g[type='Busbar'] > g[type='BusbarLabel'] > text,
    g[type='Busbar']:hover > g[type='BusbarLabel'] {
      visibility: visible;
    }

    g[type='Bay']:hover,
    g[type='Busbar']:hover,
    g[type='ConductingEquipment']:hover,
    g[type='ConnectivityNode']:hover,
    g[type='PowerTransformer']:hover,
    g[type='Terminal']:hover {
      outline: 2px dashed var(--mdc-theme-primary);
      transition: transform 200ms linear, box-shadow 250ms linear;
    }
  `;
  }
}
Gi([
  y({ attribute: !1 })
], Wi.prototype, "doc", 2);
Gi([
  X("#panzoom")
], Wi.prototype, "panzoomContainer", 2);
Gi([
  X("#svg")
], Wi.prototype, "svg", 2);
Gi([
  H()
], Wi.prototype, "selectedSubstation", 1);
export {
  Wi as default
};
