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
const H = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, F = (s, e, t = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    s.removeChild(e), e = n;
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
const m = `{{lit-${String(Math.random()).slice(2)}}}`, ee = `<!--${m}-->`, D = new RegExp(`${m}|${ee}`), C = "$lit$";
class te {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const n = [], i = [], r = document.createTreeWalker(t.content, 133, null, !1);
    let o = 0, a = -1, c = 0;
    const { strings: d, values: { length: p } } = e;
    for (; c < p; ) {
      const l = r.nextNode();
      if (l === null) {
        r.currentNode = i.pop();
        continue;
      }
      if (a++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const u = l.attributes, { length: N } = u;
          let S = 0;
          for (let h = 0; h < N; h++)
            W(u[h].name, C) && S++;
          for (; S-- > 0; ) {
            const h = d[c], g = U.exec(h)[2], w = g.toLowerCase() + C, _ = l.getAttribute(w);
            l.removeAttribute(w);
            const f = _.split(D);
            this.parts.push({ type: "attribute", index: a, name: g, strings: f }), c += f.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (i.push(l), r.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const u = l.data;
        if (u.indexOf(m) >= 0) {
          const N = l.parentNode, S = u.split(D), h = S.length - 1;
          for (let g = 0; g < h; g++) {
            let w, _ = S[g];
            if (_ === "")
              w = y();
            else {
              const f = U.exec(_);
              f !== null && W(f[2], C) && (_ = _.slice(0, f.index) + f[1] + f[2].slice(0, -C.length) + f[3]), w = document.createTextNode(_);
            }
            N.insertBefore(w, l), this.parts.push({ type: "node", index: ++a });
          }
          S[h] === "" ? (N.insertBefore(y(), l), n.push(l)) : l.data = S[h], c += h;
        }
      } else if (l.nodeType === 8)
        if (l.data === m) {
          const u = l.parentNode;
          (l.previousSibling === null || a === o) && (a++, u.insertBefore(y(), l)), o = a, this.parts.push({ type: "node", index: a }), l.nextSibling === null ? l.data = "" : (n.push(l), a--), c++;
        } else {
          let u = -1;
          for (; (u = l.data.indexOf(m, u + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const l of n)
      l.parentNode.removeChild(l);
  }
}
const W = (s, e) => {
  const t = s.length - e.length;
  return t >= 0 && s.slice(t) === e;
}, ne = (s) => s.index !== -1, y = () => document.createComment(""), U = (
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
function se(s, e) {
  const { element: { content: t }, parts: n } = s, i = document.createTreeWalker(t, j, null, !1);
  let r = P(n), o = n[r], a = -1, c = 0;
  const d = [];
  let p = null;
  for (; i.nextNode(); ) {
    a++;
    const l = i.currentNode;
    for (l.previousSibling === p && (p = null), e.has(l) && (d.push(l), p === null && (p = l)), p !== null && c++; o !== void 0 && o.index === a; )
      o.index = p !== null ? -1 : o.index - c, r = P(n, r), o = n[r];
  }
  d.forEach((l) => l.parentNode.removeChild(l));
}
const he = (s) => {
  let e = s.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(s, j, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, P = (s, e = -1) => {
  for (let t = e + 1; t < s.length; t++) {
    const n = s[t];
    if (ne(n))
      return t;
  }
  return -1;
};
function fe(s, e, t = null) {
  const { element: { content: n }, parts: i } = s;
  if (t == null) {
    n.appendChild(e);
    return;
  }
  const r = document.createTreeWalker(n, j, null, !1);
  let o = P(i), a = 0, c = -1;
  for (; r.nextNode(); )
    for (c++, r.currentNode === t && (a = he(e), t.parentNode.insertBefore(e, t)); o !== -1 && i[o].index === c; ) {
      if (a > 0) {
        for (; o !== -1; )
          i[o].index += a, o = P(i, o);
        return;
      }
      o = P(i, o);
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
const me = /* @__PURE__ */ new WeakMap(), I = (s) => typeof s == "function" && me.has(s);
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
const T = {}, J = {};
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
  constructor(e, t, n) {
    this.__parts = [], this.template = e, this.processor = t, this.options = n;
  }
  update(e) {
    let t = 0;
    for (const n of this.__parts)
      n !== void 0 && n.setValue(e[t]), t++;
    for (const n of this.__parts)
      n !== void 0 && n.commit();
  }
  _clone() {
    const e = H ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], n = this.template.parts, i = document.createTreeWalker(e, 133, null, !1);
    let r = 0, o = 0, a, c = i.nextNode();
    for (; r < n.length; ) {
      if (a = n[r], !ne(a)) {
        this.__parts.push(void 0), r++;
        continue;
      }
      for (; o < a.index; )
        o++, c.nodeName === "TEMPLATE" && (t.push(c), i.currentNode = c.content), (c = i.nextNode()) === null && (i.currentNode = t.pop(), c = i.nextNode());
      if (a.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(c.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, a.name, a.strings, this.options));
      r++;
    }
    return H && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const G = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (s) => s }), ye = ` ${m} `;
class Se {
  constructor(e, t, n, i) {
    this.strings = e, this.values = t, this.type = n, this.processor = i;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", n = !1;
    for (let i = 0; i < e; i++) {
      const r = this.strings[i], o = r.lastIndexOf("<!--");
      n = (o > -1 || n) && r.indexOf("-->", o + 1) === -1;
      const a = U.exec(r);
      a === null ? t += r + (n ? ye : ee) : t += r.substr(0, a.index) + a[1] + a[2] + C + a[3] + m;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return G !== void 0 && (t = G.createHTML(t)), e.innerHTML = t, e;
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
const ie = (s) => s === null || !(typeof s == "object" || typeof s == "function"), _e = (s) => Array.isArray(s) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(s && s[Symbol.iterator]);
class ge {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== T && (!ie(e) || e !== this.value) && (this.value = e, I(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; I(this.value); ) {
      const e = this.value;
      this.value = T, e(this);
    }
    this.value !== T && this.committer.commit();
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
    for (; I(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = T, t(this);
    }
    const e = this.__pendingValue;
    e !== T && (ie(e) ? e !== this.value && this.__commitText(e) : e instanceof Se ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : _e(e) ? this.__commitIterable(e) : e === J ? (this.value = J, this.clear()) : this.__commitText(e));
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
    const n = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = n : this.__commitNode(document.createTextNode(n)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof O && this.value.template === t)
      this.value.update(e.values);
    else {
      const n = new O(t, e.processor, this.options), i = n._clone();
      n.update(e.values), this.__commitNode(i), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let n = 0, i;
    for (const r of e)
      i = t[n], i === void 0 && (i = new A(this.options), t.push(i), n === 0 ? i.appendIntoPart(this) : i.insertAfterPart(t[n - 1])), i.setValue(r), i.commit(), n++;
    n < t.length && (t.length = n, this.clear(i && i.endNode));
  }
  clear(e = this.startNode) {
    F(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let we = !1;
(() => {
  try {
    const s = {
      get capture() {
        return we = !0, !1;
      }
    };
    window.addEventListener("test", s, s), window.removeEventListener("test", s, s);
  } catch {
  }
})();
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
function be(s) {
  let e = x.get(s.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, x.set(s.type, e));
  let t = e.stringsArray.get(s.strings);
  if (t !== void 0)
    return t;
  const n = s.strings.join(m);
  return t = e.keyString.get(n), t === void 0 && (t = new te(s, s.getTemplateElement()), e.keyString.set(n, t)), e.stringsArray.set(s.strings, t), t;
}
const x = /* @__PURE__ */ new Map();
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
const b = /* @__PURE__ */ new WeakMap(), Ce = (s, e, t) => {
  let n = b.get(e);
  n === void 0 && (F(e, e.firstChild), b.set(e, n = new A(Object.assign({ templateFactory: be }, t))), n.appendInto(e)), n.setValue(s), n.commit();
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
const re = (s, e) => `${s}--${e}`;
let E = !0;
typeof window.ShadyCSS > "u" ? E = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), E = !1);
const Pe = (s) => (e) => {
  const t = re(e.type, s);
  let n = x.get(t);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, x.set(t, n));
  let i = n.stringsArray.get(e.strings);
  if (i !== void 0)
    return i;
  const r = e.strings.join(m);
  if (i = n.keyString.get(r), i === void 0) {
    const o = e.getTemplateElement();
    E && window.ShadyCSS.prepareTemplateDom(o, s), i = new te(e, o), n.keyString.set(r, i);
  }
  return n.stringsArray.set(e.strings, i), i;
}, Te = ["html", "svg"], xe = (s) => {
  Te.forEach((e) => {
    const t = x.get(re(e, s));
    t !== void 0 && t.keyString.forEach((n) => {
      const { element: { content: i } } = n, r = /* @__PURE__ */ new Set();
      Array.from(i.querySelectorAll("style")).forEach((o) => {
        r.add(o);
      }), se(n, r);
    });
  });
}, oe = /* @__PURE__ */ new Set(), Ne = (s, e, t) => {
  oe.add(s);
  const n = t ? t.element : document.createElement("template"), i = e.querySelectorAll("style"), { length: r } = i;
  if (r === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, s);
    return;
  }
  const o = document.createElement("style");
  for (let d = 0; d < r; d++) {
    const p = i[d];
    p.parentNode.removeChild(p), o.textContent += p.textContent;
  }
  xe(s);
  const a = n.content;
  t ? fe(t, o, a.firstChild) : a.insertBefore(o, a.firstChild), window.ShadyCSS.prepareTemplateStyles(n, s);
  const c = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(o, a.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(o), se(t, d);
  }
}, Ee = (s, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = t.scopeName, i = b.has(e), r = E && e.nodeType === 11 && !!e.host, o = r && !oe.has(n), a = o ? document.createDocumentFragment() : e;
  if (Ce(s, a, Object.assign({ templateFactory: Pe(n) }, t)), o) {
    const c = b.get(a);
    b.delete(a);
    const d = c.value instanceof O ? c.value.template : void 0;
    Ne(n, a, d), F(e, e.firstChild), e.appendChild(a), b.set(e, c);
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
var ae;
window.JSCompiler_renameProperty = (s, e) => s;
const L = {
  toAttribute(s, e) {
    switch (e) {
      case Boolean:
        return s ? "" : null;
      case Object:
      case Array:
        return s == null ? s : JSON.stringify(s);
    }
    return s;
  },
  fromAttribute(s, e) {
    switch (e) {
      case Boolean:
        return s !== null;
      case Number:
        return s === null ? null : Number(s);
      case Object:
      case Array:
        return JSON.parse(s);
    }
    return s;
  }
}, le = (s, e) => e !== s && (e === e || s === s), k = {
  attribute: !0,
  type: String,
  converter: L,
  reflect: !1,
  hasChanged: le
}, R = 1, K = 4, X = 8, Y = 16, M = "finalized";
class ce extends HTMLElement {
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
    return this._classProperties.forEach((t, n) => {
      const i = this._attributeNameForProperty(n, t);
      i !== void 0 && (this._attributeToPropertyMap.set(i, n), e.push(i));
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
      e !== void 0 && e.forEach((t, n) => this._classProperties.set(n, t));
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
  static createProperty(e, t = k) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const n = typeof e == "symbol" ? Symbol() : `__${e}`, i = this.getPropertyDescriptor(e, n, t);
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
  static getPropertyDescriptor(e, t, n) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(i) {
        const r = this[e];
        this[t] = i, this.requestUpdateInternal(e, r, n);
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
    return this._classProperties && this._classProperties.get(e) || k;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(M) || e.finalize(), this[M] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, n = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const i of n)
        this.createProperty(i, t[i]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, n = le) {
    return n(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const n = t.type, i = t.converter || L, r = typeof i == "function" ? i : i.fromAttribute;
    return r ? r(e, n) : e;
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
    const n = t.type, i = t.converter;
    return (i && i.toAttribute || L.toAttribute)(e, n);
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
        const n = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, n);
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
  attributeChangedCallback(e, t, n) {
    t !== n && this._attributeToProperty(e, n);
  }
  _propertyToAttribute(e, t, n = k) {
    const i = this.constructor, r = i._attributeNameForProperty(e, n);
    if (r !== void 0) {
      const o = i._propertyValueToAttribute(t, n);
      if (o === void 0)
        return;
      this._updateState = this._updateState | X, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & X)
      return;
    const n = this.constructor, i = n._attributeToPropertyMap.get(e);
    if (i !== void 0) {
      const r = n.getPropertyOptions(i);
      this._updateState = this._updateState | Y, this[i] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(t, r), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, n) {
    let i = !0;
    if (e !== void 0) {
      const r = this.constructor;
      n = n || r.getPropertyOptions(e), r._valueHasChanged(this[e], t, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), n.reflect === !0 && !(this._updateState & Y) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : i = !1;
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
    this._updateState = this._updateState | K;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & K;
  }
  get hasUpdated() {
    return this._updateState & R;
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
    } catch (n) {
      throw e = !1, this._markUpdated(), n;
    }
    e && (this._updateState & R || (this._updateState = this._updateState | R, this.firstUpdated(t)), this.updated(t));
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, n) => this._propertyToAttribute(n, this[n], t)), this._reflectingProperties = void 0), this._markUpdated();
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
ae = M;
ce[ae] = !0;
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
const Ae = (s, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
  t.createProperty(e.key, s);
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
  finisher(t) {
    t.createProperty(e.key, s);
  }
}, ve = (s, e, t) => {
  e.constructor.createProperty(t, s);
};
function $(s) {
  return (e, t) => t !== void 0 ? ve(s, e, t) : Ae(s, e);
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
const V = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, de = Symbol();
class ke {
  constructor(e, t) {
    if (t !== de)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (V ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Re = (s) => new ke(String(s), de);
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
const Q = {};
class v extends ce {
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
      const t = (r, o) => r.reduceRight((a, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? t(c, a) : (a.add(c), a)
      ), o), n = t(e, /* @__PURE__ */ new Set()), i = [];
      n.forEach((r) => i.unshift(r)), this._styles = i;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !V) {
        const n = Array.prototype.slice.call(t.cssRules).reduce((i, r) => i + r.cssText, "");
        return Re(n);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : V ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== Q && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n.cssText, this.renderRoot.appendChild(i);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return Q;
  }
}
v.finalized = !0;
v.render = Ee;
v.shadowRootOptions = { mode: "open" };
const Ue = 1e3 * 60, Z = "langChanged";
function Ie(s, e, t) {
  return Object.entries(q(e || {})).reduce((n, [i, r]) => n.replace(new RegExp(`{{[  ]*${i}[  ]*}}`, "gm"), String(q(r))), s);
}
function Oe(s, e) {
  const t = s.split(".");
  let n = e.strings;
  for (; n != null && t.length > 0; )
    n = n[t.shift()];
  return n != null ? n.toString() : null;
}
function q(s) {
  return typeof s == "function" ? s() : s;
}
const Le = () => ({
  loader: () => Promise.resolve({}),
  empty: (s) => `[${s}]`,
  lookup: Oe,
  interpolate: Ie,
  translationCache: {}
});
let Me = Le();
function Ve(s, e) {
  const t = (n) => s(n.detail);
  return window.addEventListener(Z, t, e), () => window.removeEventListener(Z, t);
}
function qe(s, e, t = Me) {
  let n = t.translationCache[s] || (t.translationCache[s] = t.lookup(s, t) || t.empty(s, t));
  return e = e != null ? q(e) : null, e != null ? t.interpolate(n, e, t) : n;
}
function pe(s) {
  return s instanceof A ? s.startNode.isConnected : s instanceof ge ? s.committer.element.isConnected : s.element.isConnected;
}
function Fe(s) {
  for (const [e] of s)
    pe(e) || s.delete(e);
}
function je(s) {
  "requestIdleCallback" in window ? window.requestIdleCallback(s) : setTimeout(s);
}
function $e(s, e) {
  setInterval(() => je(() => Fe(s)), e);
}
const ue = /* @__PURE__ */ new Map();
function ze() {
  Ve((s) => {
    for (const [e, t] of ue)
      pe(e) && Be(e, t, s);
  });
}
ze();
$e(ue, Ue);
function Be(s, e, t) {
  const n = e(t);
  s.value !== n && (s.setValue(n), s.commit());
}
function He(s, e) {
  let t = "", n = "";
  return e || (e = "	"), s.split(/>\s*</).forEach(function(i) {
    i.match(/^\/\w/) && (n = n.substring(e.length)), t += n + "<" + i + `>\r
`, i.match(/^<?\w[^>]*[^/]$/) && (n += e);
  }), t.substring(1, t.length - 3);
}
function De(s, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...s, ...e?.detail }
  });
}
var We = Object.defineProperty, z = (s, e, t, n) => {
  for (var i = void 0, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = o(e, t, i) || i);
  return i && We(e, t, i), i;
};
function Je(s, e) {
  let t;
  const n = Array.prototype.slice.call(e.attributes);
  for (; t = n.pop(); )
    s.setAttribute(t.nodeName, t.nodeValue);
}
function Ge(s, e, t) {
  const n = new Blob(
    [He(new XMLSerializer().serializeToString(s))],
    {
      type: "application/xml"
    }
  ), i = e.createElement("a");
  i.download = t, i.href = URL.createObjectURL(n), i.dataset.downloadurl = ["application/xml", i.download, i.href].join(":"), i.style.display = "none", e.body.appendChild(i), i.click(), e.body.removeChild(i), setTimeout(function() {
    URL.revokeObjectURL(i.href);
  }, 5e3);
}
class B extends v {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  /** Entry point for this plug-in */
  async run() {
    const t = document.implementation.createDocument(
      "http://www.iec.ch/61850/2003/SCL",
      "SCL",
      null
    ), n = t.createProcessingInstruction(
      "xml",
      'version="1.0" encoding="UTF-8"'
    );
    if (t.insertBefore(n, t.firstChild), Je(t.documentElement, this.doc.documentElement), this.doc.querySelector(
      ":root > Communication"
    )) {
      const r = this.doc.querySelector(":root > Header")?.cloneNode(!0), o = this.doc.querySelector(":root > Communication")?.cloneNode(!0);
      r && t.documentElement.appendChild(r), t.documentElement.appendChild(o);
      const a = this.docName.slice(0, -4);
      let c = `${this.docName}-Communication.scd`;
      a.slice(0, 1) === "." && (c = `${this.docName.slice(0, -4)}-Communication${a}`), Ge(t, document, c);
    } else
      this.dispatchEvent(
        De({
          kind: "warning",
          title: qe("exportCommunication.noCommunicationSection")
        })
      );
  }
}
z([
  $({ attribute: !1 })
], B.prototype, "doc");
z([
  $({ type: Number })
], B.prototype, "editCount");
z([
  $({ attribute: !1 })
], B.prototype, "docName");
export {
  B as default,
  Ge as saveXmlBlob
};
