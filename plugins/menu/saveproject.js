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
const F = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, M = (i, e, t = null) => {
  for (; e !== t; ) {
    const s = e.nextSibling;
    i.removeChild(e), e = s;
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
const m = `{{lit-${String(Math.random()).slice(2)}}}`, K = `<!--${m}-->`, V = new RegExp(`${m}|${K}`), P = "$lit$";
class G {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const s = [], n = [], r = document.createTreeWalker(t.content, 133, null, !1);
    let o = 0, a = -1, l = 0;
    const { strings: c, values: { length: p } } = e;
    for (; l < p; ) {
      const d = r.nextNode();
      if (d === null) {
        r.currentNode = n.pop();
        continue;
      }
      if (a++, d.nodeType === 1) {
        if (d.hasAttributes()) {
          const h = d.attributes, { length: C } = h;
          let S = 0;
          for (let u = 0; u < C; u++)
            q(h[u].name, P) && S++;
          for (; S-- > 0; ) {
            const u = c[l], g = k.exec(u)[2], w = g.toLowerCase() + P, _ = d.getAttribute(w);
            d.removeAttribute(w);
            const f = _.split(V);
            this.parts.push({ type: "attribute", index: a, name: g, strings: f }), l += f.length - 1;
          }
        }
        d.tagName === "TEMPLATE" && (n.push(d), r.currentNode = d.content);
      } else if (d.nodeType === 3) {
        const h = d.data;
        if (h.indexOf(m) >= 0) {
          const C = d.parentNode, S = h.split(V), u = S.length - 1;
          for (let g = 0; g < u; g++) {
            let w, _ = S[g];
            if (_ === "")
              w = y();
            else {
              const f = k.exec(_);
              f !== null && q(f[2], P) && (_ = _.slice(0, f.index) + f[1] + f[2].slice(0, -P.length) + f[3]), w = document.createTextNode(_);
            }
            C.insertBefore(w, d), this.parts.push({ type: "node", index: ++a });
          }
          S[u] === "" ? (C.insertBefore(y(), d), s.push(d)) : d.data = S[u], l += u;
        }
      } else if (d.nodeType === 8)
        if (d.data === m) {
          const h = d.parentNode;
          (d.previousSibling === null || a === o) && (a++, h.insertBefore(y(), d)), o = a, this.parts.push({ type: "node", index: a }), d.nextSibling === null ? d.data = "" : (s.push(d), a--), l++;
        } else {
          let h = -1;
          for (; (h = d.data.indexOf(m, h + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), l++;
        }
    }
    for (const d of s)
      d.parentNode.removeChild(d);
  }
}
const q = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, X = (i) => i.index !== -1, y = () => document.createComment(""), k = (
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
function Y(i, e) {
  const { element: { content: t }, parts: s } = i, n = document.createTreeWalker(t, j, null, !1);
  let r = T(s), o = s[r], a = -1, l = 0;
  const c = [];
  let p = null;
  for (; n.nextNode(); ) {
    a++;
    const d = n.currentNode;
    for (d.previousSibling === p && (p = null), e.has(d) && (c.push(d), p === null && (p = d)), p !== null && l++; o !== void 0 && o.index === a; )
      o.index = p !== null ? -1 : o.index - l, r = T(s, r), o = s[r];
  }
  c.forEach((d) => d.parentNode.removeChild(d));
}
const ae = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, j, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, T = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const s = i[t];
    if (X(s))
      return t;
  }
  return -1;
};
function de(i, e, t = null) {
  const { element: { content: s }, parts: n } = i;
  if (t == null) {
    s.appendChild(e);
    return;
  }
  const r = document.createTreeWalker(s, j, null, !1);
  let o = T(n), a = 0, l = -1;
  for (; r.nextNode(); )
    for (l++, r.currentNode === t && (a = ae(e), t.parentNode.insertBefore(e, t)); o !== -1 && n[o].index === l; ) {
      if (a > 0) {
        for (; o !== -1; )
          n[o].index += a, o = T(n, o);
        return;
      }
      o = T(n, o);
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
const le = /* @__PURE__ */ new WeakMap(), ce = (i) => typeof i == "function" && le.has(i);
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
const z = {}, B = {};
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
class R {
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
    const e = F ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], s = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let r = 0, o = 0, a, l = n.nextNode();
    for (; r < s.length; ) {
      if (a = s[r], !X(a)) {
        this.__parts.push(void 0), r++;
        continue;
      }
      for (; o < a.index; )
        o++, l.nodeName === "TEMPLATE" && (t.push(l), n.currentNode = l.content), (l = n.nextNode()) === null && (n.currentNode = t.pop(), l = n.nextNode());
      if (a.type === "node") {
        const c = this.processor.handleTextExpression(this.options);
        c.insertAfterNode(l.previousSibling), this.__parts.push(c);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(l, a.name, a.strings, this.options));
      r++;
    }
    return F && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const $ = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), pe = ` ${m} `;
class he {
  constructor(e, t, s, n) {
    this.strings = e, this.values = t, this.type = s, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", s = !1;
    for (let n = 0; n < e; n++) {
      const r = this.strings[n], o = r.lastIndexOf("<!--");
      s = (o > -1 || s) && r.indexOf("-->", o + 1) === -1;
      const a = k.exec(r);
      a === null ? t += r + (s ? pe : K) : t += r.substr(0, a.index) + a[1] + a[2] + P + a[3] + m;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return $ !== void 0 && (t = $.createHTML(t)), e.innerHTML = t, e;
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
const ue = (i) => i === null || !(typeof i == "object" || typeof i == "function"), fe = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class L {
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
    for (; ce(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = z, t(this);
    }
    const e = this.__pendingValue;
    e !== z && (ue(e) ? e !== this.value && this.__commitText(e) : e instanceof he ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : fe(e) ? this.__commitIterable(e) : e === B ? (this.value = B, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof R && this.value.template === t)
      this.value.update(e.values);
    else {
      const s = new R(t, e.processor, this.options), n = s._clone();
      s.update(e.values), this.__commitNode(n), this.value = s;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let s = 0, n;
    for (const r of e)
      n = t[s], n === void 0 && (n = new L(this.options), t.push(n), s === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[s - 1])), n.setValue(r), n.commit(), s++;
    s < t.length && (t.length = s, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    M(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let me = !1;
(() => {
  try {
    const i = {
      get capture() {
        return me = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
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
function ye(i) {
  let e = x.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, x.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const s = i.strings.join(m);
  return t = e.keyString.get(s), t === void 0 && (t = new G(i, i.getTemplateElement()), e.keyString.set(s, t)), e.stringsArray.set(i.strings, t), t;
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
const b = /* @__PURE__ */ new WeakMap(), Se = (i, e, t) => {
  let s = b.get(e);
  s === void 0 && (M(e, e.firstChild), b.set(e, s = new L(Object.assign({ templateFactory: ye }, t))), s.appendInto(e)), s.setValue(i), s.commit();
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
const Q = (i, e) => `${i}--${e}`;
let N = !0;
typeof window.ShadyCSS > "u" ? N = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), N = !1);
const _e = (i) => (e) => {
  const t = Q(e.type, i);
  let s = x.get(t);
  s === void 0 && (s = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, x.set(t, s));
  let n = s.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const r = e.strings.join(m);
  if (n = s.keyString.get(r), n === void 0) {
    const o = e.getTemplateElement();
    N && window.ShadyCSS.prepareTemplateDom(o, i), n = new G(e, o), s.keyString.set(r, n);
  }
  return s.stringsArray.set(e.strings, n), n;
}, ge = ["html", "svg"], we = (i) => {
  ge.forEach((e) => {
    const t = x.get(Q(e, i));
    t !== void 0 && t.keyString.forEach((s) => {
      const { element: { content: n } } = s, r = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((o) => {
        r.add(o);
      }), Y(s, r);
    });
  });
}, Z = /* @__PURE__ */ new Set(), be = (i, e, t) => {
  Z.add(i);
  const s = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: r } = n;
  if (r === 0) {
    window.ShadyCSS.prepareTemplateStyles(s, i);
    return;
  }
  const o = document.createElement("style");
  for (let c = 0; c < r; c++) {
    const p = n[c];
    p.parentNode.removeChild(p), o.textContent += p.textContent;
  }
  we(i);
  const a = s.content;
  t ? de(t, o, a.firstChild) : a.insertBefore(o, a.firstChild), window.ShadyCSS.prepareTemplateStyles(s, i);
  const l = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && l !== null)
    e.insertBefore(l.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(o, a.firstChild);
    const c = /* @__PURE__ */ new Set();
    c.add(o), Y(t, c);
  }
}, Pe = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const s = t.scopeName, n = b.has(e), r = N && e.nodeType === 11 && !!e.host, o = r && !Z.has(s), a = o ? document.createDocumentFragment() : e;
  if (Se(i, a, Object.assign({ templateFactory: _e(s) }, t)), o) {
    const l = b.get(a);
    b.delete(a);
    const c = l.value instanceof R ? l.value.template : void 0;
    be(s, a, c), M(e, e.firstChild), e.appendChild(a), b.set(e, l);
  }
  !n && r && window.ShadyCSS.styleElement(e.host);
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
var ee;
window.JSCompiler_renameProperty = (i, e) => i;
const U = {
  toAttribute(i, e) {
    switch (e) {
      case Boolean:
        return i ? "" : null;
      case Object:
      case Array:
        return i == null ? i : JSON.stringify(i);
    }
    return i;
  },
  fromAttribute(i, e) {
    switch (e) {
      case Boolean:
        return i !== null;
      case Number:
        return i === null ? null : Number(i);
      case Object:
      case Array:
        return JSON.parse(i);
    }
    return i;
  }
}, te = (i, e) => e !== i && (e === e || i === i), E = {
  attribute: !0,
  type: String,
  converter: U,
  reflect: !1,
  hasChanged: te
}, v = 1, W = 4, H = 8, D = 16, O = "finalized";
class se extends HTMLElement {
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
      const n = this._attributeNameForProperty(s, t);
      n !== void 0 && (this._attributeToPropertyMap.set(n, s), e.push(n));
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
  static createProperty(e, t = E) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const s = typeof e == "symbol" ? Symbol() : `__${e}`, n = this.getPropertyDescriptor(e, s, t);
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
  static getPropertyDescriptor(e, t, s) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(n) {
        const r = this[e];
        this[t] = n, this.requestUpdateInternal(e, r, s);
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
    return this._classProperties && this._classProperties.get(e) || E;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(O) || e.finalize(), this[O] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, s = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const n of s)
        this.createProperty(n, t[n]);
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
  static _valueHasChanged(e, t, s = te) {
    return s(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const s = t.type, n = t.converter || U, r = typeof n == "function" ? n : n.fromAttribute;
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
    const s = t.type, n = t.converter;
    return (n && n.toAttribute || U.toAttribute)(e, s);
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
  _propertyToAttribute(e, t, s = E) {
    const n = this.constructor, r = n._attributeNameForProperty(e, s);
    if (r !== void 0) {
      const o = n._propertyValueToAttribute(t, s);
      if (o === void 0)
        return;
      this._updateState = this._updateState | H, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & H)
      return;
    const s = this.constructor, n = s._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const r = s.getPropertyOptions(n);
      this._updateState = this._updateState | D, this[n] = // tslint:disable-next-line:no-any
      s._propertyValueFromAttribute(t, r), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, s) {
    let n = !0;
    if (e !== void 0) {
      const r = this.constructor;
      s = s || r.getPropertyOptions(e), r._valueHasChanged(this[e], t, s.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), s.reflect === !0 && !(this._updateState & D) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, s))) : n = !1;
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
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | W;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & W;
  }
  get hasUpdated() {
    return this._updateState & v;
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
    e && (this._updateState & v || (this._updateState = this._updateState | v, this.firstUpdated(t)), this.updated(t));
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
ee = O;
se[ee] = !0;
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
const Te = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
  t.createProperty(e.key, i);
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
    t.createProperty(e.key, i);
  }
}, xe = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function ne(i) {
  return (e, t) => t !== void 0 ? xe(i, e, t) : Te(i, e);
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
const I = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ie = Symbol();
class Ce {
  constructor(e, t) {
    if (t !== ie)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (I ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Ne = (i) => new Ce(String(i), ie);
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
const J = {};
class A extends se {
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
      const t = (r, o) => r.reduceRight((a, l) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(l) ? t(l, a) : (a.add(l), a)
      ), o), s = t(e, /* @__PURE__ */ new Set()), n = [];
      s.forEach((r) => n.unshift(r)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !I) {
        const s = Array.prototype.slice.call(t.cssRules).reduce((n, r) => n + r.cssText, "");
        return Ne(s);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : I ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== J && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((s) => {
      const n = document.createElement("style");
      n.textContent = s.cssText, this.renderRoot.appendChild(n);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return J;
  }
}
A.finalized = !0;
A.render = Pe;
A.shadowRootOptions = { mode: "open" };
var Ae = Object.defineProperty, re = (i, e, t, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(e, t, n) || n);
  return n && Ae(e, t, n), n;
};
function Ee(i, e) {
  let t = "", s = "";
  return e || (e = "	"), i.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (s = s.substring(e.length)), t += s + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (s += e);
  }), t.substring(1, t.length - 3);
}
class oe extends A {
  async run() {
    if (this.doc) {
      let e = Ee(
        new XMLSerializer().serializeToString(this.doc)
      );
      e = e.startsWith("<?xml") ? e : `<?xml version="1.0" encoding="UTF-8"?>
` + e;
      const t = new Blob([e], {
        type: "application/xml"
      }), s = document.createElement("a");
      s.download = this.docName, s.href = URL.createObjectURL(t), s.dataset.downloadurl = ["application/xml", s.download, s.href].join(":"), s.style.display = "none", document.body.appendChild(s), s.click(), document.body.removeChild(s), setTimeout(function() {
        URL.revokeObjectURL(s.href);
      }, 5e3);
    }
  }
}
re([
  ne()
], oe.prototype, "doc");
re([
  ne()
], oe.prototype, "docName");
export {
  oe as default
};
