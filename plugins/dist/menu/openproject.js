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
const D = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, q = (n, e, t = null) => {
  for (; e !== t; ) {
    const s = e.nextSibling;
    n.removeChild(e), e = s;
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
const _ = `{{lit-${String(Math.random()).slice(2)}}}`, Z = `<!--${_}-->`, z = new RegExp(`${_}|${Z}`), x = "$lit$";
class ee {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const s = [], i = [], r = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0, o = -1, c = 0;
    const { strings: d, values: { length: h } } = e;
    for (; c < h; ) {
      const l = r.nextNode();
      if (l === null) {
        r.currentNode = i.pop();
        continue;
      }
      if (o++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const p = l.attributes, { length: N } = p;
          let g = 0;
          for (let f = 0; f < N; f++)
            W(p[f].name, x) && g++;
          for (; g-- > 0; ) {
            const f = d[c], w = V.exec(f)[2], b = w.toLowerCase() + x, S = l.getAttribute(b);
            l.removeAttribute(b);
            const m = S.split(z);
            this.parts.push({ type: "attribute", index: o, name: w, strings: m }), c += m.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (i.push(l), r.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const p = l.data;
        if (p.indexOf(_) >= 0) {
          const N = l.parentNode, g = p.split(z), f = g.length - 1;
          for (let w = 0; w < f; w++) {
            let b, S = g[w];
            if (S === "")
              b = y();
            else {
              const m = V.exec(S);
              m !== null && W(m[2], x) && (S = S.slice(0, m.index) + m[1] + m[2].slice(0, -x.length) + m[3]), b = document.createTextNode(S);
            }
            N.insertBefore(b, l), this.parts.push({ type: "node", index: ++o });
          }
          g[f] === "" ? (N.insertBefore(y(), l), s.push(l)) : l.data = g[f], c += f;
        }
      } else if (l.nodeType === 8)
        if (l.data === _) {
          const p = l.parentNode;
          (l.previousSibling === null || o === a) && (o++, p.insertBefore(y(), l)), a = o, this.parts.push({ type: "node", index: o }), l.nextSibling === null ? l.data = "" : (s.push(l), o--), c++;
        } else {
          let p = -1;
          for (; (p = l.data.indexOf(_, p + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const l of s)
      l.parentNode.removeChild(l);
  }
}
const W = (n, e) => {
  const t = n.length - e.length;
  return t >= 0 && n.slice(t) === e;
}, te = (n) => n.index !== -1, y = () => document.createComment(""), V = (
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
const j = 133;
function se(n, e) {
  const { element: { content: t }, parts: s } = n, i = document.createTreeWalker(t, j, null, !1);
  let r = v(s), a = s[r], o = -1, c = 0;
  const d = [];
  let h = null;
  for (; i.nextNode(); ) {
    o++;
    const l = i.currentNode;
    for (l.previousSibling === h && (h = null), e.has(l) && (d.push(l), h === null && (h = l)), h !== null && c++; a !== void 0 && a.index === o; )
      a.index = h !== null ? -1 : a.index - c, r = v(s, r), a = s[r];
  }
  d.forEach((l) => l.parentNode.removeChild(l));
}
const ue = (n) => {
  let e = n.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(n, j, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, v = (n, e = -1) => {
  for (let t = e + 1; t < n.length; t++) {
    const s = n[t];
    if (te(s))
      return t;
  }
  return -1;
};
function pe(n, e, t = null) {
  const { element: { content: s }, parts: i } = n;
  if (t == null) {
    s.appendChild(e);
    return;
  }
  const r = document.createTreeWalker(s, j, null, !1);
  let a = v(i), o = 0, c = -1;
  for (; r.nextNode(); )
    for (c++, r.currentNode === t && (o = ue(e), t.parentNode.insertBefore(e, t)); a !== -1 && i[a].index === c; ) {
      if (o > 0) {
        for (; a !== -1; )
          i[a].index += o, a = v(i, a);
        return;
      }
      a = v(i, a);
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
const fe = /* @__PURE__ */ new WeakMap(), T = (n) => typeof n == "function" && fe.has(n);
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
const u = {}, J = {};
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
class O {
  constructor(e, t, s) {
    this.__parts = [], this.template = e, this.processor = t, this.options = s;
  }
  update(e) {
    let t = 0;
    for (const s of this.__parts)
      s !== void 0 && s.setValue(e[t]), t++;
    for (const s of this.__parts)
      s !== void 0 && s.commit();
  }
  _clone() {
    const e = D ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], s = this.template.parts, i = document.createTreeWalker(e, 133, null, !1);
    let r = 0, a = 0, o, c = i.nextNode();
    for (; r < s.length; ) {
      if (o = s[r], !te(o)) {
        this.__parts.push(void 0), r++;
        continue;
      }
      for (; a < o.index; )
        a++, c.nodeName === "TEMPLATE" && (t.push(c), i.currentNode = c.content), (c = i.nextNode()) === null && (i.currentNode = t.pop(), c = i.nextNode());
      if (o.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(c.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, o.name, o.strings, this.options));
      r++;
    }
    return D && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const K = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (n) => n }), me = ` ${_} `;
class ne {
  constructor(e, t, s, i) {
    this.strings = e, this.values = t, this.type = s, this.processor = i;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", s = !1;
    for (let i = 0; i < e; i++) {
      const r = this.strings[i], a = r.lastIndexOf("<!--");
      s = (a > -1 || s) && r.indexOf("-->", a + 1) === -1;
      const o = V.exec(r);
      o === null ? t += r + (s ? me : Z) : t += r.substr(0, o.index) + o[1] + o[2] + x + o[3] + _;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return K !== void 0 && (t = K.createHTML(t)), e.innerHTML = t, e;
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
const $ = (n) => n === null || !(typeof n == "object" || typeof n == "function"), I = (n) => Array.isArray(n) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(n && n[Symbol.iterator]);
class ie {
  constructor(e, t, s) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = s, this.parts = [];
    for (let i = 0; i < s.length - 1; i++)
      this.parts[i] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new re(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, s = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const r = s[0].value;
      if (typeof r == "symbol")
        return String(r);
      if (typeof r == "string" || !I(r))
        return r;
    }
    let i = "";
    for (let r = 0; r < t; r++) {
      i += e[r];
      const a = s[r];
      if (a !== void 0) {
        const o = a.value;
        if ($(o) || !I(o))
          i += typeof o == "string" ? o : String(o);
        else
          for (const c of o)
            i += typeof c == "string" ? c : String(c);
      }
    }
    return i += e[t], i;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class re {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== u && (!$(e) || e !== this.value) && (this.value = e, T(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; T(this.value); ) {
      const e = this.value;
      this.value = u, e(this);
    }
    this.value !== u && this.committer.commit();
  }
}
class A {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(y()), this.endNode = e.appendChild(y());
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
    e.__insert(this.startNode = y()), e.__insert(this.endNode = y());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = y()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; T(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = u, t(this);
    }
    const e = this.__pendingValue;
    e !== u && ($(e) ? e !== this.value && this.__commitText(e) : e instanceof ne ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : I(e) ? this.__commitIterable(e) : e === J ? (this.value = J, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const t = this.startNode.nextSibling;
    e = e ?? "";
    const s = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = s : this.__commitNode(document.createTextNode(s)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof O && this.value.template === t)
      this.value.update(e.values);
    else {
      const s = new O(t, e.processor, this.options), i = s._clone();
      s.update(e.values), this.__commitNode(i), this.value = s;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let s = 0, i;
    for (const r of e)
      i = t[s], i === void 0 && (i = new A(this.options), t.push(i), s === 0 ? i.appendIntoPart(this) : i.insertAfterPart(t[s - 1])), i.setValue(r), i.commit(), s++;
    s < t.length && (t.length = s, this.clear(i && i.endNode));
  }
  clear(e = this.startNode) {
    q(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class _e {
  constructor(e, t, s) {
    if (this.value = void 0, this.__pendingValue = void 0, s.length !== 2 || s[0] !== "" || s[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = s;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; T(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = u, t(this);
    }
    if (this.__pendingValue === u)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = u;
  }
}
class ye extends ie {
  constructor(e, t, s) {
    super(e, t, s), this.single = s.length === 2 && s[0] === "" && s[1] === "";
  }
  _createPart() {
    return new ge(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class ge extends re {
}
let oe = !1;
(() => {
  try {
    const n = {
      get capture() {
        return oe = !0, !1;
      }
    };
    window.addEventListener("test", n, n), window.removeEventListener("test", n, n);
  } catch {
  }
})();
class Se {
  constructor(e, t, s) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = s, this.__boundHandleEvent = (i) => this.handleEvent(i);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; T(this.__pendingValue); ) {
      const r = this.__pendingValue;
      this.__pendingValue = u, r(this);
    }
    if (this.__pendingValue === u)
      return;
    const e = this.__pendingValue, t = this.value, s = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), i = e != null && (t == null || s);
    s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), i && (this.__options = we(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = u;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const we = (n) => n && (oe ? { capture: n.capture, passive: n.passive, once: n.once } : n.capture);
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
function be(n) {
  let e = C.get(n.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, C.set(n.type, e));
  let t = e.stringsArray.get(n.strings);
  if (t !== void 0)
    return t;
  const s = n.strings.join(_);
  return t = e.keyString.get(s), t === void 0 && (t = new ee(n, n.getTemplateElement()), e.keyString.set(s, t)), e.stringsArray.set(n.strings, t), t;
}
const C = /* @__PURE__ */ new Map();
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
const P = /* @__PURE__ */ new WeakMap(), Pe = (n, e, t) => {
  let s = P.get(e);
  s === void 0 && (q(e, e.firstChild), P.set(e, s = new A(Object.assign({ templateFactory: be }, t))), s.appendInto(e)), s.setValue(n), s.commit();
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
class xe {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, s, i) {
    const r = t[0];
    return r === "." ? new ye(e, t.slice(1), s).parts : r === "@" ? [new Se(e, t.slice(1), i.eventContext)] : r === "?" ? [new _e(e, t.slice(1), s)] : new ie(e, t, s).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new A(e);
  }
}
const ve = new xe();
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
const Te = (n, ...e) => new ne(n, e, "html", ve);
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
const ae = (n, e) => `${n}--${e}`;
let E = !0;
typeof window.ShadyCSS > "u" ? E = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), E = !1);
const Ce = (n) => (e) => {
  const t = ae(e.type, n);
  let s = C.get(t);
  s === void 0 && (s = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, C.set(t, s));
  let i = s.stringsArray.get(e.strings);
  if (i !== void 0)
    return i;
  const r = e.strings.join(_);
  if (i = s.keyString.get(r), i === void 0) {
    const a = e.getTemplateElement();
    E && window.ShadyCSS.prepareTemplateDom(a, n), i = new ee(e, a), s.keyString.set(r, i);
  }
  return s.stringsArray.set(e.strings, i), i;
}, Ne = ["html", "svg"], Ee = (n) => {
  Ne.forEach((e) => {
    const t = C.get(ae(e, n));
    t !== void 0 && t.keyString.forEach((s) => {
      const { element: { content: i } } = s, r = /* @__PURE__ */ new Set();
      Array.from(i.querySelectorAll("style")).forEach((a) => {
        r.add(a);
      }), se(s, r);
    });
  });
}, le = /* @__PURE__ */ new Set(), Ae = (n, e, t) => {
  le.add(n);
  const s = t ? t.element : document.createElement("template"), i = e.querySelectorAll("style"), { length: r } = i;
  if (r === 0) {
    window.ShadyCSS.prepareTemplateStyles(s, n);
    return;
  }
  const a = document.createElement("style");
  for (let d = 0; d < r; d++) {
    const h = i[d];
    h.parentNode.removeChild(h), a.textContent += h.textContent;
  }
  Ee(n);
  const o = s.content;
  t ? pe(t, a, o.firstChild) : o.insertBefore(a, o.firstChild), window.ShadyCSS.prepareTemplateStyles(s, n);
  const c = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (t) {
    o.insertBefore(a, o.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(a), se(t, d);
  }
}, ke = (n, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const s = t.scopeName, i = P.has(e), r = E && e.nodeType === 11 && !!e.host, a = r && !le.has(s), o = a ? document.createDocumentFragment() : e;
  if (Pe(n, o, Object.assign({ templateFactory: Ce(s) }, t)), a) {
    const c = P.get(o);
    P.delete(o);
    const d = c.value instanceof O ? c.value.template : void 0;
    Ae(s, o, d), q(e, e.firstChild), e.appendChild(o), P.set(e, c);
  }
  !i && r && window.ShadyCSS.styleElement(e.host);
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
var ce;
window.JSCompiler_renameProperty = (n, e) => n;
const M = {
  toAttribute(n, e) {
    switch (e) {
      case Boolean:
        return n ? "" : null;
      case Object:
      case Array:
        return n == null ? n : JSON.stringify(n);
    }
    return n;
  },
  fromAttribute(n, e) {
    switch (e) {
      case Boolean:
        return n !== null;
      case Number:
        return n === null ? null : Number(n);
      case Object:
      case Array:
        return JSON.parse(n);
    }
    return n;
  }
}, de = (n, e) => e !== n && (e === e || n === n), R = {
  attribute: !0,
  type: String,
  converter: M,
  reflect: !1,
  hasChanged: de
}, U = 1, Q = 4, G = 8, Y = 16, F = "finalized";
class he extends HTMLElement {
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
    return this._classProperties.forEach((t, s) => {
      const i = this._attributeNameForProperty(s, t);
      i !== void 0 && (this._attributeToPropertyMap.set(i, s), e.push(i));
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
      e !== void 0 && e.forEach((t, s) => this._classProperties.set(s, t));
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
  static createProperty(e, t = R) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const s = typeof e == "symbol" ? Symbol() : `__${e}`, i = this.getPropertyDescriptor(e, s, t);
    i !== void 0 && Object.defineProperty(this.prototype, e, i);
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
  static getPropertyDescriptor(e, t, s) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(i) {
        const r = this[e];
        this[t] = i, this.requestUpdateInternal(e, r, s);
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
    return this._classProperties && this._classProperties.get(e) || R;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(F) || e.finalize(), this[F] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, s = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const i of s)
        this.createProperty(i, t[i]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const s = t.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, s = de) {
    return s(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const s = t.type, i = t.converter || M, r = typeof i == "function" ? i : i.fromAttribute;
    return r ? r(e, s) : e;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(e, t) {
    if (t.reflect === void 0)
      return;
    const s = t.type, i = t.converter;
    return (i && i.toAttribute || M.toAttribute)(e, s);
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
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const s = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, s);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0;
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
  attributeChangedCallback(e, t, s) {
    t !== s && this._attributeToProperty(e, s);
  }
  _propertyToAttribute(e, t, s = R) {
    const i = this.constructor, r = i._attributeNameForProperty(e, s);
    if (r !== void 0) {
      const a = i._propertyValueToAttribute(t, s);
      if (a === void 0)
        return;
      this._updateState = this._updateState | G, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & G)
      return;
    const s = this.constructor, i = s._attributeToPropertyMap.get(e);
    if (i !== void 0) {
      const r = s.getPropertyOptions(i);
      this._updateState = this._updateState | Y, this[i] = // tslint:disable-next-line:no-any
      s._propertyValueFromAttribute(t, r), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, s) {
    let i = !0;
    if (e !== void 0) {
      const r = this.constructor;
      s = s || r.getPropertyOptions(e), r._valueHasChanged(this[e], t, s.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), s.reflect === !0 && !(this._updateState & Y) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, s))) : i = !1;
    }
    !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate());
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
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | Q;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Q;
  }
  get hasUpdated() {
    return this._updateState & U;
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
    const t = this._changedProperties;
    try {
      e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated();
    } catch (s) {
      throw e = !1, this._markUpdated(), s;
    }
    e && (this._updateState & U || (this._updateState = this._updateState | U, this.firstUpdated(t)), this.updated(t));
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, s) => this._propertyToAttribute(s, this[s], t)), this._reflectingProperties = void 0), this._markUpdated();
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
ce = F;
he[ce] = !0;
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
function Re(n, e) {
  return (t, s) => {
    const i = {
      get() {
        return this.renderRoot.querySelector(n);
      },
      enumerable: !0,
      configurable: !0
    };
    return s !== void 0 ? Ue(i, t, s) : Ve(i, t);
  };
}
const Ue = (n, e, t) => {
  Object.defineProperty(e, t, n);
}, Ve = (n, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: n
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
const L = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, B = Symbol();
class H {
  constructor(e, t) {
    if (t !== B)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (L ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Oe = (n) => new H(String(n), B), Ie = (n) => {
  if (n instanceof H)
    return n.cssText;
  if (typeof n == "number")
    return n;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${n}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, Me = (n, ...e) => {
  const t = e.reduce((s, i, r) => s + Ie(i) + n[r + 1], n[0]);
  return new H(t, B);
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
const X = {};
class k extends he {
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
      const t = (r, a) => r.reduceRight((o, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? t(c, o) : (o.add(c), o)
      ), a), s = t(e, /* @__PURE__ */ new Set()), i = [];
      s.forEach((r) => i.unshift(r)), this._styles = i;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !L) {
        const s = Array.prototype.slice.call(t.cssRules).reduce((i, r) => i + r.cssText, "");
        return Oe(s);
      }
      return t;
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : L ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    const t = this.render();
    super.update(e), t !== X && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((s) => {
      const i = document.createElement("style");
      i.textContent = s.cssText, this.renderRoot.appendChild(i);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return X;
  }
}
k.finalized = !0;
k.render = ke;
k.shadowRootOptions = { mode: "open" };
function Fe(n, e, t) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { doc: n, docName: e, ...t?.detail }
  });
}
function Le(n, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...n, ...e?.detail }
  });
}
var qe = Object.defineProperty, je = (n, e, t, s) => {
  for (var i = void 0, r = n.length - 1, a; r >= 0; r--)
    (a = n[r]) && (i = a(e, t, i) || i);
  return i && qe(e, t, i), i;
};
class $e extends k {
  async openDoc(e) {
    const t = e.target?.files?.item(0) ?? !1;
    if (!t) return;
    const s = await t.text(), i = t.name, r = new DOMParser().parseFromString(s, "application/xml");
    this.dispatchEvent(Le({ kind: "reset" })), this.dispatchEvent(Fe(r, i)), this.pluginFileUI.onchange = null, this.closeMenu();
  }
  async closeMenu() {
    this.dispatchEvent(
      new CustomEvent("close-drawer", {
        bubbles: !0,
        composed: !0
        // to traverse shadow DOM boundaries src: https://pm.dartus.fr/blog/a-complete-guide-on-shadow-dom-and-event-propagation/
      })
    );
  }
  async run() {
    this.pluginFileUI.click();
  }
  render() {
    return Te`<input @click=${(e) => e.target.value = ""} @change=${this.openDoc} id="open-plugin-input" accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd" type="file"></input>`;
  }
  static {
    this.styles = Me`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
  }
}
je([
  Re("#open-plugin-input")
], $e.prototype, "pluginFileUI");
export {
  $e as default
};
