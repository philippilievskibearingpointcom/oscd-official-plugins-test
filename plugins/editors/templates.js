import "@material/mwc-fab";
import "@material/mwc-icon-button";
import { List as kn } from "@material/mwc-list";
import "@material/mwc-formfield";
import { TextField as _n } from "@material/mwc-textfield";
import { Select as En } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
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
const qt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, It = (i, e, t = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    i.removeChild(e), e = n;
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
const oe = `{{lit-${String(Math.random()).slice(2)}}}`, Ai = `<!--${oe}-->`, Gt = new RegExp(`${oe}|${Ai}`), Le = "$lit$";
class wi {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const n = [], r = [], a = document.createTreeWalker(t.content, 133, null, !1);
    let s = 0, o = -1, c = 0;
    const { strings: l, values: { length: d } } = e;
    for (; c < d; ) {
      const m = a.nextNode();
      if (m === null) {
        a.currentNode = r.pop();
        continue;
      }
      if (o++, m.nodeType === 1) {
        if (m.hasAttributes()) {
          const h = m.attributes, { length: A } = h;
          let S = 0;
          for (let k = 0; k < A; k++)
            Ut(h[k].name, Le) && S++;
          for (; S-- > 0; ) {
            const k = l[c], E = dt.exec(k)[2], x = E.toLowerCase() + Le, w = m.getAttribute(x);
            m.removeAttribute(x);
            const q = w.split(Gt);
            this.parts.push({ type: "attribute", index: o, name: E, strings: q }), c += q.length - 1;
          }
        }
        m.tagName === "TEMPLATE" && (r.push(m), a.currentNode = m.content);
      } else if (m.nodeType === 3) {
        const h = m.data;
        if (h.indexOf(oe) >= 0) {
          const A = m.parentNode, S = h.split(Gt), k = S.length - 1;
          for (let E = 0; E < k; E++) {
            let x, w = S[E];
            if (w === "")
              x = he();
            else {
              const q = dt.exec(w);
              q !== null && Ut(q[2], Le) && (w = w.slice(0, q.index) + q[1] + q[2].slice(0, -Le.length) + q[3]), x = document.createTextNode(w);
            }
            A.insertBefore(x, m), this.parts.push({ type: "node", index: ++o });
          }
          S[k] === "" ? (A.insertBefore(he(), m), n.push(m)) : m.data = S[k], c += k;
        }
      } else if (m.nodeType === 8)
        if (m.data === oe) {
          const h = m.parentNode;
          (m.previousSibling === null || o === s) && (o++, h.insertBefore(he(), m)), s = o, this.parts.push({ type: "node", index: o }), m.nextSibling === null ? m.data = "" : (n.push(m), o--), c++;
        } else {
          let h = -1;
          for (; (h = m.data.indexOf(oe, h + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const m of n)
      m.parentNode.removeChild(m);
  }
}
const Ut = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, ki = (i) => i.index !== -1, he = () => document.createComment(""), dt = (
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
const Dt = 133;
function _i(i, e) {
  const { element: { content: t }, parts: n } = i, r = document.createTreeWalker(t, Dt, null, !1);
  let a = $e(n), s = n[a], o = -1, c = 0;
  const l = [];
  let d = null;
  for (; r.nextNode(); ) {
    o++;
    const m = r.currentNode;
    for (m.previousSibling === d && (d = null), e.has(m) && (l.push(m), d === null && (d = m)), d !== null && c++; s !== void 0 && s.index === o; )
      s.index = d !== null ? -1 : s.index - c, a = $e(n, a), s = n[a];
  }
  l.forEach((m) => m.parentNode.removeChild(m));
}
const Cn = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, Dt, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, $e = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const n = i[t];
    if (ki(n))
      return t;
  }
  return -1;
};
function In(i, e, t = null) {
  const { element: { content: n }, parts: r } = i;
  if (t == null) {
    n.appendChild(e);
    return;
  }
  const a = document.createTreeWalker(n, Dt, null, !1);
  let s = $e(r), o = 0, c = -1;
  for (; a.nextNode(); )
    for (c++, a.currentNode === t && (o = Cn(e), t.parentNode.insertBefore(e, t)); s !== -1 && r[s].index === c; ) {
      if (o > 0) {
        for (; s !== -1; )
          r[s].index += o, s = $e(r, s);
        return;
      }
      s = $e(r, s);
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
const Ei = /* @__PURE__ */ new WeakMap(), Tt = (i) => (...e) => {
  const t = i(...e);
  return Ei.set(t, !0), t;
}, Pe = (i) => typeof i == "function" && Ei.has(i);
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
const te = {}, jt = {};
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
class pt {
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
    const e = qt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let a = 0, s = 0, o, c = r.nextNode();
    for (; a < n.length; ) {
      if (o = n[a], !ki(o)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; s < o.index; )
        s++, c.nodeName === "TEMPLATE" && (t.push(c), r.currentNode = c.content), (c = r.nextNode()) === null && (r.currentNode = t.pop(), c = r.nextNode());
      if (o.type === "node") {
        const l = this.processor.handleTextExpression(this.options);
        l.insertAfterNode(c.previousSibling), this.__parts.push(l);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, o.name, o.strings, this.options));
      a++;
    }
    return qt && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Wt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), Dn = ` ${oe} `;
class Ci {
  constructor(e, t, n, r) {
    this.strings = e, this.values = t, this.type = n, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", n = !1;
    for (let r = 0; r < e; r++) {
      const a = this.strings[r], s = a.lastIndexOf("<!--");
      n = (s > -1 || n) && a.indexOf("-->", s + 1) === -1;
      const o = dt.exec(a);
      o === null ? t += a + (n ? Dn : Ai) : t += a.substr(0, o.index) + o[1] + o[2] + Le + o[3] + oe;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Wt !== void 0 && (t = Wt.createHTML(t)), e.innerHTML = t, e;
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
const Nt = (i) => i === null || !(typeof i == "object" || typeof i == "function"), ut = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class Ii {
  constructor(e, t, n) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new De(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, n = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const a = n[0].value;
      if (typeof a == "symbol")
        return String(a);
      if (typeof a == "string" || !ut(a))
        return a;
    }
    let r = "";
    for (let a = 0; a < t; a++) {
      r += e[a];
      const s = n[a];
      if (s !== void 0) {
        const o = s.value;
        if (Nt(o) || !ut(o))
          r += typeof o == "string" ? o : String(o);
        else
          for (const c of o)
            r += typeof c == "string" ? c : String(c);
      }
    }
    return r += e[t], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class De {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== te && (!Nt(e) || e !== this.value) && (this.value = e, Pe(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Pe(this.value); ) {
      const e = this.value;
      this.value = te, e(this);
    }
    this.value !== te && this.committer.commit();
  }
}
class Fe {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(he()), this.endNode = e.appendChild(he());
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
    e.__insert(this.startNode = he()), e.__insert(this.endNode = he());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = he()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Pe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = te, t(this);
    }
    const e = this.__pendingValue;
    e !== te && (Nt(e) ? e !== this.value && this.__commitText(e) : e instanceof Ci ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : ut(e) ? this.__commitIterable(e) : e === jt ? (this.value = jt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof pt && this.value.template === t)
      this.value.update(e.values);
    else {
      const n = new pt(t, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let n = 0, r;
    for (const a of e)
      r = t[n], r === void 0 && (r = new Fe(this.options), t.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(t[n - 1])), r.setValue(a), r.commit(), n++;
    n < t.length && (t.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    It(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Tn {
  constructor(e, t, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Pe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = te, t(this);
    }
    if (this.__pendingValue === te)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = te;
  }
}
class Nn extends Ii {
  constructor(e, t, n) {
    super(e, t, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new Lt(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Lt extends De {
}
let Di = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Di = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class Ln {
  constructor(e, t, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Pe(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = te, a(this);
    }
    if (this.__pendingValue === te)
      return;
    const e = this.__pendingValue, t = this.value, n = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), r = e != null && (t == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = $n(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = te;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const $n = (i) => i && (Di ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
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
function zn(i) {
  let e = Oe.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Oe.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const n = i.strings.join(oe);
  return t = e.keyString.get(n), t === void 0 && (t = new wi(i, i.getTemplateElement()), e.keyString.set(n, t)), e.stringsArray.set(i.strings, t), t;
}
const Oe = /* @__PURE__ */ new Map();
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
const Ce = /* @__PURE__ */ new WeakMap(), Ti = (i, e, t) => {
  let n = Ce.get(e);
  n === void 0 && (It(e, e.firstChild), Ce.set(e, n = new Fe(Object.assign({ templateFactory: zn }, t))), n.appendInto(e)), n.setValue(i), n.commit();
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
class Rn {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, n, r) {
    const a = t[0];
    return a === "." ? new Nn(e, t.slice(1), n).parts : a === "@" ? [new Ln(e, t.slice(1), r.eventContext)] : a === "?" ? [new Tn(e, t.slice(1), n)] : new Ii(e, t, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Fe(e);
  }
}
const Pn = new Rn();
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
const p = (i, ...e) => new Ci(i, e, "html", Pn);
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
const Ni = (i, e) => `${i}--${e}`;
let Xe = !0;
typeof window.ShadyCSS > "u" ? Xe = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Xe = !1);
const On = (i) => (e) => {
  const t = Ni(e.type, i);
  let n = Oe.get(t);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Oe.set(t, n));
  let r = n.stringsArray.get(e.strings);
  if (r !== void 0)
    return r;
  const a = e.strings.join(oe);
  if (r = n.keyString.get(a), r === void 0) {
    const s = e.getTemplateElement();
    Xe && window.ShadyCSS.prepareTemplateDom(s, i), r = new wi(e, s), n.keyString.set(a, r);
  }
  return n.stringsArray.set(e.strings, r), r;
}, Vn = ["html", "svg"], Fn = (i) => {
  Vn.forEach((e) => {
    const t = Oe.get(Ni(e, i));
    t !== void 0 && t.keyString.forEach((n) => {
      const { element: { content: r } } = n, a = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((s) => {
        a.add(s);
      }), _i(n, a);
    });
  });
}, Li = /* @__PURE__ */ new Set(), Mn = (i, e, t) => {
  Li.add(i);
  const n = t ? t.element : document.createElement("template"), r = e.querySelectorAll("style"), { length: a } = r;
  if (a === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, i);
    return;
  }
  const s = document.createElement("style");
  for (let l = 0; l < a; l++) {
    const d = r[l];
    d.parentNode.removeChild(d), s.textContent += d.textContent;
  }
  Fn(i);
  const o = n.content;
  t ? In(t, s, o.firstChild) : o.insertBefore(s, o.firstChild), window.ShadyCSS.prepareTemplateStyles(n, i);
  const c = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (t) {
    o.insertBefore(s, o.firstChild);
    const l = /* @__PURE__ */ new Set();
    l.add(s), _i(t, l);
  }
}, Hn = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = t.scopeName, r = Ce.has(e), a = Xe && e.nodeType === 11 && !!e.host, s = a && !Li.has(n), o = s ? document.createDocumentFragment() : e;
  if (Ti(i, o, Object.assign({ templateFactory: On(n) }, t)), s) {
    const c = Ce.get(o);
    Ce.delete(o);
    const l = c.value instanceof pt ? c.value.template : void 0;
    Mn(n, o, l), It(e, e.firstChild), e.appendChild(o), Ce.set(e, c);
  }
  !r && a && window.ShadyCSS.styleElement(e.host);
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
var $i;
window.JSCompiler_renameProperty = (i, e) => i;
const mt = {
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
}, zi = (i, e) => e !== i && (e === e || i === i), at = {
  attribute: !0,
  type: String,
  converter: mt,
  reflect: !1,
  hasChanged: zi
}, st = 1, Kt = 4, Xt = 8, Zt = 16, ht = "finalized";
class Ri extends HTMLElement {
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
      const r = this._attributeNameForProperty(n, t);
      r !== void 0 && (this._attributeToPropertyMap.set(r, n), e.push(r));
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
  static createProperty(e, t = at) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const n = typeof e == "symbol" ? Symbol() : `__${e}`, r = this.getPropertyDescriptor(e, n, t);
    r !== void 0 && Object.defineProperty(this.prototype, e, r);
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
      set(r) {
        const a = this[e];
        this[t] = r, this.requestUpdateInternal(e, a, n);
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
    return this._classProperties && this._classProperties.get(e) || at;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(ht) || e.finalize(), this[ht] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, n = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const r of n)
        this.createProperty(r, t[r]);
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
  static _valueHasChanged(e, t, n = zi) {
    return n(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const n = t.type, r = t.converter || mt, a = typeof r == "function" ? r : r.fromAttribute;
    return a ? a(e, n) : e;
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
    const n = t.type, r = t.converter;
    return (r && r.toAttribute || mt.toAttribute)(e, n);
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
  _propertyToAttribute(e, t, n = at) {
    const r = this.constructor, a = r._attributeNameForProperty(e, n);
    if (a !== void 0) {
      const s = r._propertyValueToAttribute(t, n);
      if (s === void 0)
        return;
      this._updateState = this._updateState | Xt, s == null ? this.removeAttribute(a) : this.setAttribute(a, s), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & Xt)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(e);
    if (r !== void 0) {
      const a = n.getPropertyOptions(r);
      this._updateState = this._updateState | Zt, this[r] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(t, a), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, n) {
    let r = !0;
    if (e !== void 0) {
      const a = this.constructor;
      n = n || a.getPropertyOptions(e), a._valueHasChanged(this[e], t, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), n.reflect === !0 && !(this._updateState & Zt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : r = !1;
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
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | Kt;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Kt;
  }
  get hasUpdated() {
    return this._updateState & st;
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
    e && (this._updateState & st || (this._updateState = this._updateState | st, this.firstUpdated(t)), this.updated(t));
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
$i = ht;
Ri[$i] = !0;
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
const Bn = (i, e) => (window.customElements.define(i, e), e), qn = (i, e) => {
  const { kind: t, elements: n } = e;
  return {
    kind: t,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(i, r);
    }
  };
}, be = (i) => (e) => typeof e == "function" ? Bn(i, e) : qn(i, e), Gn = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, Un = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function v(i) {
  return (e, t) => t !== void 0 ? Un(i, e, t) : Gn(i, e);
}
function jn(i) {
  return v({ attribute: !1, hasChanged: void 0 });
}
const N = (i) => jn();
function Z(i, e) {
  return (t, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? $t(r, t, n) : zt(r, t);
  };
}
function Pi(i) {
  return (e, t) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? $t(n, e, t) : zt(n, e);
  };
}
const $t = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, zt = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), Wn = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), Kn = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function Xn(i) {
  return (e, t) => t !== void 0 ? Kn(i, e, t) : Wn(i, e);
}
const Qt = Element.prototype, Zn = Qt.msMatchesSelector || Qt.webkitMatchesSelector;
function Oi(i = "", e = !1, t = "") {
  return (n, r) => {
    const a = {
      get() {
        const s = `slot${i ? `[name=${i}]` : ":not([name])"}`, o = this.renderRoot.querySelector(s);
        let c = o && o.assignedNodes({ flatten: e });
        return c && t && (c = c.filter((l) => l.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (l.matches ? l.matches(t) : Zn.call(l, t)))), c;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? $t(a, n, r) : zt(a, n);
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
const ft = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Rt = Symbol();
class Pt {
  constructor(e, t) {
    if (t !== Rt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (ft ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Vi = (i) => new Pt(String(i), Rt), Qn = (i) => {
  if (i instanceof Pt)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, xe = (i, ...e) => {
  const t = e.reduce((n, r, a) => n + Qn(r) + i[a + 1], i[0]);
  return new Pt(t, Rt);
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
const Jt = {};
class Ae extends Ri {
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
      const t = (a, s) => a.reduceRight((o, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? t(c, o) : (o.add(c), o)
      ), s), n = t(e, /* @__PURE__ */ new Set()), r = [];
      n.forEach((a) => r.unshift(a)), this._styles = r;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !ft) {
        const n = Array.prototype.slice.call(t.cssRules).reduce((r, a) => r + a.cssText, "");
        return Vi(n);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : ft ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== Jt && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
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
    return Jt;
  }
}
Ae.finalized = !0;
Ae.render = Hn;
Ae.shadowRootOptions = { mode: "open" };
const Jn = 1e3 * 60, bt = "langChanged";
function Yn(i, e, t) {
  return Object.entries(gt(e || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(gt(a))), i);
}
function er(i, e) {
  const t = i.split(".");
  let n = e.strings;
  for (; n != null && t.length > 0; )
    n = n[t.shift()];
  return n != null ? n.toString() : null;
}
function gt(i) {
  return typeof i == "function" ? i() : i;
}
const tr = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: er,
  interpolate: Yn,
  translationCache: {}
});
let Ve = tr();
function ir(i) {
  return Ve = Object.assign(Object.assign({}, Ve), i);
}
function nr(i) {
  window.dispatchEvent(new CustomEvent(bt, { detail: i }));
}
function rr(i, e, t = Ve) {
  nr({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function ar(i, e) {
  const t = (n) => i(n.detail);
  return window.addEventListener(bt, t, e), () => window.removeEventListener(bt, t);
}
async function sr(i, e = Ve) {
  const t = await e.loader(i, e);
  e.translationCache = {}, rr(i, t, e);
}
function u(i, e, t = Ve) {
  let n = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? gt(e) : null, e != null ? t.interpolate(n, e, t) : n;
}
function Fi(i) {
  return i instanceof Fe ? i.startNode.isConnected : i instanceof De ? i.committer.element.isConnected : i.element.isConnected;
}
function or(i) {
  for (const [e] of i)
    Fi(e) || i.delete(e);
}
function cr(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function lr(i, e) {
  setInterval(() => cr(() => or(i)), e);
}
const Mi = /* @__PURE__ */ new Map();
function dr() {
  ar((i) => {
    for (const [e, t] of Mi)
      Fi(e) && pr(e, t, i);
  });
}
dr();
lr(Mi, Jn);
function pr(i, e, t) {
  const n = e(t);
  i.value !== n && (i.setValue(n), i.commit());
}
var yt = function(i, e) {
  return yt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }, yt(i, e);
};
function ur(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  yt(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ze = function() {
  return ze = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ze.apply(this, arguments);
};
function b(i, e, t, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(i, e, t, n);
  else for (var o = i.length - 1; o >= 0; o--) (s = i[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, t, a) : s(e, t)) || a);
  return r > 3 && a && Object.defineProperty(e, t, a), a;
}
function He(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], n = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && n >= i.length && (i = void 0), { value: i && i[n++], done: !i };
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
function mr(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const hr = (i) => i.nodeType === Node.ELEMENT_NODE, Hi = () => {
}, fr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Hi, fr);
document.removeEventListener("x", Hi);
const Bi = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, br = (i) => {
  const e = Bi();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (s) => {
    r = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), t.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ot extends Ae {
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
var qi = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(i, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.init = function() {
    }, i.prototype.destroy = function() {
    }, i;
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
var gr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, yr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Yt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function vr(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + t.left, s = r + t.top, o, c;
  if (i.type === "touchstart") {
    var l = i;
    o = l.changedTouches[0].pageX - a, c = l.changedTouches[0].pageY - s;
  } else {
    var d = i;
    o = d.pageX - a, c = d.pageY - s;
  }
  return { x: o, y: c };
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
var ei = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ti = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Be = [], Sr = (
  /** @class */
  function(i) {
    ur(e, i);
    function e(t) {
      var n = i.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Yt;
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
      var t = this, n = this.supportsPressRipple();
      if (this.registerRootHandlers(n), n) {
        var r = e.cssClasses, a = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var n = e.cssClasses, r = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(a), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var n = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(t) {
      var n, r;
      if (t) {
        try {
          for (var a = He(ei), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (c) {
          n = { error: c };
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
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var n, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = He(ti), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, n;
      try {
        for (var r = He(ei), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = He(ti), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, n = e.strings, r = Object.keys(n);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(n[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, s = a && t !== void 0 && a.type !== t.type;
          if (!s) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var o = t !== void 0 && Be.length > 0 && Be.some(function(c) {
              return n.adapter.containsEventTarget(c);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Be.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Be = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(t), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, s = e.cssClasses, o = s.FG_DEACTIVATION, c = s.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", m = "";
      if (!this.adapter.isUnbounded()) {
        var h = this.getFgTranslationCoordinates(), A = h.startPoint, S = h.endPoint;
        d = A.x + "px, " + A.y + "px", m = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(r, d), this.adapter.updateCssVariable(a, m), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, l);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, n = t.activationEvent, r = t.wasActivatedByPointer, a;
      r ? a = vr(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, s = r.isActivated, o = a || !s;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(n);
      }, Yt.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, n = this.activationState;
      if (n.isActivated) {
        var r = ze({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var n = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (n || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame.height, this.frame.width), r = function() {
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, n = t.VAR_FG_SIZE, r = t.VAR_LEFT, a = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(qi)
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
class xr {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const n of t)
      this.classes.add(n);
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
      this.classes.forEach((t) => e += t + " "), this.element.setAttribute("class", e);
    }
  }
}
const ii = /* @__PURE__ */ new WeakMap(), Ze = Tt((i) => (e) => {
  if (!(e instanceof De) || e instanceof Lt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: n } = t;
  let r = ii.get(e);
  r === void 0 && (n.setAttribute("class", t.strings.join(" ")), ii.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new xr(n);
  r.forEach((s) => {
    s in i || (a.remove(s), r.delete(s));
  });
  for (const s in i) {
    const o = i[s];
    o != r.has(s) && (o ? (a.add(s), r.add(s)) : (a.remove(s), r.delete(s)));
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
const ni = /* @__PURE__ */ new WeakMap(), Ar = Tt((i) => (e) => {
  if (!(e instanceof De) || e instanceof Lt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: n } = t.element;
  let r = ni.get(e);
  r === void 0 && (n.cssText = t.strings.join(" "), ni.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in i || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in i)
    r.add(a), a.indexOf("-") === -1 ? n[a] = i[a] : n.setProperty(a, i[a]);
});
class R extends Ot {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Sr;
  }
  get isActive() {
    return mr(this.parentElement || this, ":active");
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
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
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
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), n = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": t,
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ze(n)}"
          style="${Ar({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
b([
  Z(".mdc-ripple-surface")
], R.prototype, "mdcRoot", void 0);
b([
  v({ type: Boolean })
], R.prototype, "primary", void 0);
b([
  v({ type: Boolean })
], R.prototype, "accent", void 0);
b([
  v({ type: Boolean })
], R.prototype, "unbounded", void 0);
b([
  v({ type: Boolean })
], R.prototype, "disabled", void 0);
b([
  v({ type: Boolean })
], R.prototype, "activated", void 0);
b([
  v({ type: Boolean })
], R.prototype, "selected", void 0);
b([
  v({ type: Boolean })
], R.prototype, "internalUseStateLayerCustomProperties", void 0);
b([
  N()
], R.prototype, "hovering", void 0);
b([
  N()
], R.prototype, "bgFocused", void 0);
b([
  N()
], R.prototype, "fgActivation", void 0);
b([
  N()
], R.prototype, "fgDeactivation", void 0);
b([
  N()
], R.prototype, "fgScale", void 0);
b([
  N()
], R.prototype, "fgSize", void 0);
b([
  N()
], R.prototype, "translateStart", void 0);
b([
  N()
], R.prototype, "translateEnd", void 0);
b([
  N()
], R.prototype, "leftPos", void 0);
b([
  N()
], R.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wr = xe`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let vt = class extends R {
};
vt.styles = [wr];
vt = b([
  be("mwc-ripple")
], vt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ge = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const n = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, a) => e.constructor._observers.set(a, r)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const n = e.updated;
      e.updated = function(r) {
        n.call(this, r), r.forEach((a, s) => {
          const c = this.constructor._observers.get(s);
          c !== void 0 && c.call(this, this[s], a);
        });
      };
    }
    e.constructor._observers.set(t, i);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Gi {
  constructor(e) {
    this.startPress = (t) => {
      e().then((n) => {
        n && n.startPress(t);
      });
    }, this.endPress = () => {
      e().then((t) => {
        t && t.endPress();
      });
    }, this.startFocus = () => {
      e().then((t) => {
        t && t.startFocus();
      });
    }, this.endFocus = () => {
      e().then((t) => {
        t && t.endFocus();
      });
    }, this.startHover = () => {
      e().then((t) => {
        t && t.startHover();
      });
    }, this.endHover = () => {
      e().then((t) => {
        t && t.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class F extends Ae {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Gi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
          const t = e.type;
          this.onDown(t === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : p``, n = this.hasMeta ? this.renderMeta() : p``;
    return p`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${n}`;
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
  onDown(e, t) {
    const n = () => {
      window.removeEventListener(e, n), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, n), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const n = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(n);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.addEventListener(t, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.removeEventListener(t, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
b([
  Z("slot")
], F.prototype, "slotElement", void 0);
b([
  Pi("mwc-ripple")
], F.prototype, "ripple", void 0);
b([
  v({ type: String })
], F.prototype, "value", void 0);
b([
  v({ type: String, reflect: !0 })
], F.prototype, "group", void 0);
b([
  v({ type: Number, reflect: !0 })
], F.prototype, "tabindex", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  ge(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], F.prototype, "disabled", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], F.prototype, "twoline", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], F.prototype, "activated", void 0);
b([
  v({ type: String, reflect: !0 })
], F.prototype, "graphic", void 0);
b([
  v({ type: Boolean })
], F.prototype, "multipleGraphics", void 0);
b([
  v({ type: Boolean })
], F.prototype, "hasMeta", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  ge(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], F.prototype, "noninteractive", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  ge(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], F.prototype, "selected", void 0);
b([
  N()
], F.prototype, "shouldRenderRipple", void 0);
b([
  N()
], F.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ui = xe`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let St = class extends F {
};
St.styles = [Ui];
St = b([
  be("mwc-list-item")
], St);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function kr(i, e, t) {
  const n = i.constructor;
  if (!t) {
    const o = `__${e}`;
    if (t = n.getPropertyDescriptor(e, o), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = t;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      a === "" && (a = n.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, o);
    }
  };
  return r.get && (s.get = function() {
    return r.get.call(this);
  }), s;
}
function Vt(i, e, t) {
  if (e !== void 0)
    return kr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ji extends Ot {
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
ji.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const ot = /* @__PURE__ */ new WeakMap(), Se = Tt((i) => (e) => {
  const t = ot.get(e);
  if (i === void 0 && e instanceof De) {
    if (t !== void 0 || !ot.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else i !== t && e.setValue(i);
  ot.set(e, i);
});
class O extends ji {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Gi(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), n = e.get("checked"), r = e.get("disabled");
    if (t !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!t, !!r), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, n) {
    return n ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
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
    const e = this.indeterminate || this.checked, t = {
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
    }, n = this.indeterminate ? "mixed" : void 0;
    return p`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ze(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Se(this.name)}"
              aria-checked="${Se(n)}"
              aria-label="${Se(this.ariaLabel)}"
              aria-labelledby="${Se(this.ariaLabelledBy)}"
              aria-describedby="${Se(this.ariaDescribedBy)}"
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
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
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
b([
  Z(".mdc-checkbox")
], O.prototype, "mdcRoot", void 0);
b([
  Z("input")
], O.prototype, "formElement", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], O.prototype, "checked", void 0);
b([
  v({ type: Boolean })
], O.prototype, "indeterminate", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], O.prototype, "disabled", void 0);
b([
  v({ type: String, reflect: !0 })
], O.prototype, "name", void 0);
b([
  v({ type: String })
], O.prototype, "value", void 0);
b([
  Vt,
  v({ type: String, attribute: "aria-label" })
], O.prototype, "ariaLabel", void 0);
b([
  Vt,
  v({ type: String, attribute: "aria-labelledby" })
], O.prototype, "ariaLabelledBy", void 0);
b([
  Vt,
  v({ type: String, attribute: "aria-describedby" })
], O.prototype, "ariaDescribedBy", void 0);
b([
  v({ type: Boolean })
], O.prototype, "reducedTouchTarget", void 0);
b([
  N()
], O.prototype, "animationClass", void 0);
b([
  N()
], O.prototype, "shouldRenderRipple", void 0);
b([
  N()
], O.prototype, "focused", void 0);
b([
  N()
], O.prototype, "useStateLayerCustomProperties", void 0);
b([
  Pi("mwc-ripple")
], O.prototype, "ripple", void 0);
b([
  Xn({ passive: !0 })
], O.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _r = xe`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let xt = class extends O {
};
xt.styles = [_r];
xt = b([
  be("mwc-checkbox")
], xt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Me extends F {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : p``, r = this.hasMeta && this.left ? this.renderMeta() : p``, a = this.renderRipple();
    return p`
      ${a}
      ${n}
      ${this.left ? "" : t}
      <span class=${Ze(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ""}
      ${r}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
b([
  Z("slot")
], Me.prototype, "slotElement", void 0);
b([
  Z("mwc-checkbox")
], Me.prototype, "checkboxElement", void 0);
b([
  v({ type: Boolean })
], Me.prototype, "left", void 0);
b([
  v({ type: String, reflect: !0 })
], Me.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Er = xe`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ie = class extends Me {
};
Ie.styles = [Ui, Er];
Ie = b([
  be("mwc-check-list-item")
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
var _ = {
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
}, U = /* @__PURE__ */ new Set();
U.add(_.BACKSPACE);
U.add(_.ENTER);
U.add(_.SPACEBAR);
U.add(_.PAGE_UP);
U.add(_.PAGE_DOWN);
U.add(_.END);
U.add(_.HOME);
U.add(_.ARROW_LEFT);
U.add(_.ARROW_UP);
U.add(_.ARROW_RIGHT);
U.add(_.ARROW_DOWN);
U.add(_.DELETE);
U.add(_.ESCAPE);
U.add(_.TAB);
var Q = {
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
j.set(Q.BACKSPACE, _.BACKSPACE);
j.set(Q.ENTER, _.ENTER);
j.set(Q.SPACEBAR, _.SPACEBAR);
j.set(Q.PAGE_UP, _.PAGE_UP);
j.set(Q.PAGE_DOWN, _.PAGE_DOWN);
j.set(Q.END, _.END);
j.set(Q.HOME, _.HOME);
j.set(Q.ARROW_LEFT, _.ARROW_LEFT);
j.set(Q.ARROW_UP, _.ARROW_UP);
j.set(Q.ARROW_RIGHT, _.ARROW_RIGHT);
j.set(Q.ARROW_DOWN, _.ARROW_DOWN);
j.set(Q.DELETE, _.DELETE);
j.set(Q.ESCAPE, _.ESCAPE);
j.set(Q.TAB, _.TAB);
var ye = /* @__PURE__ */ new Set();
ye.add(_.PAGE_UP);
ye.add(_.PAGE_DOWN);
ye.add(_.END);
ye.add(_.HOME);
ye.add(_.ARROW_LEFT);
ye.add(_.ARROW_UP);
ye.add(_.ARROW_RIGHT);
ye.add(_.ARROW_DOWN);
function pe(i) {
  var e = i.key;
  if (U.has(e))
    return e;
  var t = j.get(i.keyCode);
  return t || _.UNKNOWN;
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
var ue, se, T = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ue = {}, ue["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ue["" + T.LIST_ITEM_CLASS] = "mdc-list-item", ue["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ue["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ue["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ue["" + T.ROOT] = "mdc-list";
var Ee = (se = {}, se["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", se["" + T.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", se["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", se["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", se["" + T.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", se["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", se["" + T.ROOT] = "mdc-deprecated-list", se), qe = {
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
    .` + T.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` a,
    .` + Ee[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + T.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` a,
    .` + T.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` a,
    .` + Ee[T.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
const At = (i, e) => i - e, Cr = (i, e) => {
  const t = Array.from(i), n = Array.from(e), r = { added: [], removed: [] }, a = t.sort(At), s = n.sort(At);
  let o = 0, c = 0;
  for (; o < a.length || c < s.length; ) {
    const l = a[o], d = s[c];
    if (l === d) {
      o++, c++;
      continue;
    }
    if (l !== void 0 && (d === void 0 || l < d)) {
      r.removed.push(l), o++;
      continue;
    }
    if (d !== void 0 && (l === void 0 || d < l)) {
      r.added.push(d), c++;
      continue;
    }
  }
  return r;
}, Ir = ["input", "button", "textarea", "select"];
function Re(i) {
  return i instanceof Set;
}
const ct = (i) => {
  const e = i === W.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return Re(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Ft extends qi {
  constructor(e) {
    super(Object.assign(Object.assign({}, Ft.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = W.UNSET_INDEX, this.focusedItemIndex_ = W.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return qe;
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
    const t = this.selectedIndex_;
    if (e) {
      if (!Re(t)) {
        const n = t === W.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Re(t))
      if (t.size) {
        const n = Array.from(t).sort(At);
        this.selectedIndex_ = n[0];
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(ct(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, t, n) {
    const r = pe(e) === "ArrowLeft", a = pe(e) === "ArrowUp", s = pe(e) === "ArrowRight", o = pe(e) === "ArrowDown", c = pe(e) === "Home", l = pe(e) === "End", d = pe(e) === "Enter", m = pe(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || l ? (e.preventDefault(), this.focusLastElement()) : (o || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let h = this.adapter.getFocusedElementIndex();
    if (h === -1 && (h = n, h < 0))
      return;
    let A;
    if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(e), A = this.focusNextElement(h);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), A = this.focusPrevElement(h);
    else if (c)
      this.preventDefaultEvent(e), A = this.focusFirstElement();
    else if (l)
      this.preventDefaultEvent(e), A = this.focusLastElement();
    else if ((d || m) && t) {
      const S = e.target;
      if (S && S.tagName === "A" && d)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(h, !0);
    }
    this.focusedItemIndex_ = h, A !== void 0 && (this.setTabindexAtIndex_(A), this.focusedItemIndex_ = A);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, n) {
    e !== W.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let n = e + 1;
    if (n >= t)
      if (this.wrapFocus_)
        n = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(n), n;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    let t = e - 1;
    if (t < 0)
      if (this.wrapFocus_)
        t = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(t), t;
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
  setEnabled(e, t) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !t);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const n = `${e.target.tagName}`.toLowerCase();
    Ir.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== W.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const n = ct(this.selectedIndex_), r = Cr(n, e);
    if (!(!r.removed.length && !r.added.length)) {
      for (const a of r.removed)
        t && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of r.added)
        t && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === W.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, qe.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, n = t ? qe.ARIA_CURRENT : qe.ARIA_SELECTED;
    this.selectedIndex_ !== W.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === W.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== W.UNSET_INDEX ? e = this.selectedIndex_ : Re(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const n of e)
          if (t = this.isIndexInRange_(n), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === W.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, t, n) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let r = e;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, t) : t || n ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(W.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, n = !0) {
    let r = !1;
    t === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = t;
    const a = ct(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function Dr(i, e = 50) {
  let t;
  return function(n = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(n);
    }, e);
  };
}
const Ge = (i) => i.hasAttribute("mwc-list-item");
function Tr() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class J extends Ot {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Ft, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Dr(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      Tr.call(this), e(t);
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], n = [];
    for (const s of t)
      Ge(s) && (n.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
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
    const e = this.index;
    if (!Re(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const n of e)
      t.push(this.items[n]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, n = this.rootTabbable ? "0" : "-1";
    return p`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${Se(e)}"
          aria-label="${Se(t)}"
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && t.length === 0 ? p`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, t);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, t);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e), n = e.target, r = Ge(n);
      this.mdcFoundation.handleKeydown(e, r, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const r = e.detail.selected, a = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, a === "interaction", r), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, n = e.composedPath();
    for (const r of n) {
      let a = -1;
      if (hr(r) && Ge(r) && (a = t.indexOf(r)), a !== -1)
        return a;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, t) => {
        if (!this.mdcRoot)
          return "";
        const r = this.items[e];
        return r ? r.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, n) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[e];
        r && r.setAttribute(t, n);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const n = new CustomEvent("action", t);
        this.dispatchEvent(n);
      },
      notifySelected: (e, t) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: e, diff: t };
        const r = new CustomEvent("selected", n);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => br(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const n = this.items[e];
    n && (n.selected = !0, n.activated = t);
  }
  deselectUi(e) {
    const t = this.items[e];
    t && (t.selected = !1, t.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, t) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
  }
  onListItemConnected(e) {
    const t = e.target;
    this.layout(this.items.indexOf(t) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const t = this.items[0];
    for (const n of this.items)
      n.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Bi();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const n = e[t];
      if (Ge(n))
        return this.items.indexOf(n);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const t of this.items)
      if (t.tabindex === 0) {
        t.tabindex = -1;
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
b([
  v({ type: String })
], J.prototype, "emptyMessage", void 0);
b([
  Z(".mdc-deprecated-list")
], J.prototype, "mdcRoot", void 0);
b([
  Oi("", !0, "*")
], J.prototype, "assignedElements", void 0);
b([
  Oi("", !0, '[tabindex="0"]')
], J.prototype, "tabbableElements", void 0);
b([
  v({ type: Boolean }),
  ge(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], J.prototype, "activatable", void 0);
b([
  v({ type: Boolean }),
  ge(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], J.prototype, "multi", void 0);
b([
  v({ type: Boolean }),
  ge(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], J.prototype, "wrapFocus", void 0);
b([
  v({ type: String }),
  ge(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], J.prototype, "itemRoles", void 0);
b([
  v({ type: String })
], J.prototype, "innerRole", void 0);
b([
  v({ type: String })
], J.prototype, "innerAriaLabel", void 0);
b([
  v({ type: Boolean })
], J.prototype, "rootTabbable", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  ge(function(i) {
    var e, t;
    if (i) {
      const n = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], J.prototype, "noninteractive", void 0);
var Nr = Object.defineProperty, Lr = Object.getOwnPropertyDescriptor, we = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Lr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (r = (n ? s(e, t, r) : s(r)) || r);
  return n && r && Nr(e, t, r), r;
};
function wt(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof re ? i : wt(i.parentElement);
}
function $r(i, e) {
  const t = i.innerText + `
`, n = Array.from(i.children).map((o) => o.innerText).join(`
`), r = i.value, a = (t + n + r).toUpperCase(), s = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? wt(i).classList.remove("hidden") : wt(i).classList.add("hidden");
}
let re = class extends J {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof Ie);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof Ie).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof Ie).some((i) => i.selected);
  }
  onCheckAll() {
    const i = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = i);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (i) => $r(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
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
        <abbr title="${this.searchFieldLabel ?? u("filter")}"
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
re.styles = xe`
    ${Vi(kn.styles)}

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
we([
  v({ type: String })
], re.prototype, "searchFieldLabel", 2);
we([
  v({ type: Boolean })
], re.prototype, "disableCheckAll", 2);
we([
  N()
], re.prototype, "existCheckListItem", 1);
we([
  N()
], re.prototype, "isAllSelected", 1);
we([
  N()
], re.prototype, "isSomeSelected", 1);
we([
  Z("mwc-textfield")
], re.prototype, "searchField", 2);
re = we([
  be("filtered-list")
], re);
function K(i, e, t) {
  const n = i.createElementNS(i.documentElement.namespaceURI, e);
  return Object.entries(t).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function le(i, e) {
  const t = i.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? t.removeAttribute(n) : t.setAttribute(n, r);
  }), t;
}
function zr(i, e) {
  return i ? Array.from(i.children).filter(
    (t) => t.tagName === e
  ) : [];
}
var Rr = Object.defineProperty, Pr = Object.getOwnPropertyDescriptor, ee = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Pr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (r = (n ? s(e, t, r) : s(r)) || r);
  return n && r && Rr(e, t, r), r;
};
let X = class extends _n {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(i) {
    const e = this.multipliers.indexOf(i);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
  }
  selectMultiplier(i) {
    this.multiplier = this.multipliers[i.detail.index];
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(u("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (i) => p`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? u("textfield.noMultiplier") : i}</mwc-list-item
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
ee([
  v({ type: Boolean })
], X.prototype, "nullable", 2);
ee([
  v({ type: Array })
], X.prototype, "multipliers", 2);
ee([
  v({ type: String })
], X.prototype, "multiplier", 1);
ee([
  v({ type: String })
], X.prototype, "unit", 2);
ee([
  N()
], X.prototype, "null", 1);
ee([
  v({ type: String })
], X.prototype, "maybeValue", 1);
ee([
  v({ type: String })
], X.prototype, "defaultValue", 2);
ee([
  v({ type: Array })
], X.prototype, "reservedValues", 2);
ee([
  Z("mwc-switch")
], X.prototype, "nullSwitch", 2);
ee([
  Z("mwc-menu")
], X.prototype, "multiplierMenu", 2);
ee([
  Z("mwc-icon-button")
], X.prototype, "multiplierButton", 2);
X = ee([
  be("wizard-textfield")
], X);
var Or = Object.defineProperty, Vr = Object.getOwnPropertyDescriptor, ke = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Vr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (r = (n ? s(e, t, r) : s(r)) || r);
  return n && r && Or(e, t, r), r;
};
let ce = class extends En {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
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
ke([
  v({ type: Boolean })
], ce.prototype, "nullable", 2);
ke([
  N()
], ce.prototype, "null", 1);
ke([
  v({ type: String })
], ce.prototype, "maybeValue", 1);
ke([
  v({ type: String })
], ce.prototype, "defaultValue", 2);
ke([
  v({ type: Array })
], ce.prototype, "reservedValues", 2);
ke([
  Z("mwc-switch")
], ce.prototype, "nullSwitch", 2);
ce = ke([
  be("wizard-select")
], ce);
var Fr = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, Y = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Mr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (r = (n ? s(e, t, r) : s(r)) || r);
  return n && r && Fr(e, t, r), r;
};
let G = class extends Ae {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.checked = i === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(i) {
    this.checkbox ? this.checkbox.checked = i : this.initChecked = i;
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
Y([
  v({ type: String })
], G.prototype, "label", 2);
Y([
  v({ type: String })
], G.prototype, "helper", 2);
Y([
  v({ type: Boolean })
], G.prototype, "nullable", 2);
Y([
  v({ type: Boolean })
], G.prototype, "defaultChecked", 2);
Y([
  v({ type: String })
], G.prototype, "maybeValue", 1);
Y([
  v({ type: Boolean })
], G.prototype, "disabled", 2);
Y([
  N()
], G.prototype, "null", 1);
Y([
  N()
], G.prototype, "checked", 1);
Y([
  N()
], G.prototype, "deactivateCheckbox", 2);
Y([
  N()
], G.prototype, "formfieldLabel", 1);
Y([
  Z("mwc-switch")
], G.prototype, "nullSwitch", 2);
Y([
  Z("mwc-checkbox")
], G.prototype, "checkbox", 2);
G = Y([
  be("wizard-checkbox")
], G);
function Hr(i) {
  return typeof i == "function";
}
function f(i) {
  return i instanceof X || i instanceof ce || i instanceof G ? i.maybeValue : i.value ?? null;
}
function V(i, e) {
  if (!i)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = Hr(i) ? i : () => i;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
function de(i) {
  return V(i, { detail: { subwizard: !0 } });
}
function B(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const $ = ":not(*)";
function Br(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function qr(i, e) {
  const [t, n] = e.split("	");
  return !t || !n ? $ : `${i}[version="${t}"][revision="${n}"]`;
}
function ri(i) {
  return D(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function ai(i, e) {
  const [t, n] = B(e), r = z[i].parents.flatMap(
    (a) => M(a, t).split(",")
  );
  return H(
    r,
    [">"],
    [`${i}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function Gr(i) {
  const [e, t, n, r, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => i.getAttribute(o));
  return e === "None" ? `${D(i.parentElement)}>(${r} ${s} ${a})` : `${e} ${t || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function Ur(i, e) {
  if (e.endsWith(")")) {
    const [h, A] = B(e), [S, k, E] = A.substring(1, A.length - 1).split(" ");
    if (!S || !k) return $;
    const x = z[i].parents.flatMap(
      (w) => M(w, h).split(",")
    );
    return H(
      x,
      [">"],
      [`${i}[iedName="None"][lnClass="${S}"][lnType="${k}"][lnInst="${E}"]`]
    ).map((w) => w.join("")).join(",");
  }
  const [t, n, r, a, s] = e.split(/[ /]/);
  if (!t || !n || !a) return $;
  const [
    o,
    c,
    l,
    d,
    m
  ] = [
    [`[iedName="${t}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return H(
    [i],
    o,
    c,
    l,
    d,
    m
  ).map((h) => h.join("")).join(",");
}
function jr(i) {
  return `${D(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function Wr(i, e) {
  const [t, n] = B(e), [r, a] = n.split(" ");
  return `${M(
    "IED",
    t
  )}>${i}[iedName="${r}"][apName="${a}"]`;
}
function Kr(i) {
  return `${D(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function Xr(i, e) {
  const [t, n] = B(e);
  return n ? `${M(
    "Server",
    t
  )}>${i}[associationID="${n}"]` : $;
}
function Zr(i) {
  return `${D(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function Qr(i, e) {
  const [t, n] = e.split(">>");
  return n ? `IED[name="${t}"] ${i}[inst="${n}"]` : $;
}
function Jr(i) {
  const e = i.textContent, [t, n, r, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => i.getAttribute(o));
  return `${D(i.parentElement)}>${e} ${t || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function Yr(i, e) {
  const [t, n] = B(e), [r, a, s, o, c, l] = n.split(/[ /]/), [
    d,
    m,
    h,
    A,
    S,
    k
  ] = [
    z[i].parents.flatMap(
      (E) => M(E, t).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return H(
    d,
    [">"],
    [i],
    m,
    h,
    A,
    S,
    k
  ).map((E) => E.join("")).join(",");
}
function ea(i) {
  const [e, t, n, r, a, s, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((d) => i.getAttribute(d)), l = `${e}/${t ?? ""} ${n} ${r ?? ""}.${a} ${s || ""}`;
  return `${D(i.parentElement)}>${l} (${o}${c ? " [" + c + "]" : ""})`;
}
function ta(i, e) {
  const [t, n] = B(e), [r, a, s, o] = n.split(/[ /.]/), c = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), l = c && c[1] ? c[1] : "", d = c && c[2] ? c[2] : "", m = n.match(/\(([A-Z]{2})/), h = n.match(/ \[([0-9]{1,2})\]/), A = m && m[1] ? m[1] : "", S = h && h[1] ? h[1] : "", [
    k,
    E,
    x,
    w,
    q,
    tt,
    it,
    nt,
    rt
  ] = [
    z[i].parents.flatMap(
      (Te) => M(Te, t).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${l}"]`],
    d ? [`[daName="${d}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${A}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return H(
    k,
    [">"],
    [i],
    E,
    x,
    w,
    q,
    tt,
    it,
    nt,
    rt
  ).map((Te) => Te.join("")).join(",");
}
function ia(i) {
  if (!i.parentElement) return NaN;
  const e = D(i.parentElement), t = i.getAttribute("iedName"), n = i.getAttribute("intAddr"), r = Array.from(
    i.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(i);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    s,
    o,
    c,
    l,
    d,
    m,
    h,
    A,
    S,
    k,
    E
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
  ].map((q) => i.getAttribute(q)), x = E ? `${m}:${E} ${h ?? ""}/${A ?? ""} ${S ?? ""} ${k ?? ""}` : "", w = `${t} ${a}/${s ?? ""} ${o} ${c ?? ""} ${l} ${d || ""}`;
  return `${e}>${x ? x + " " : ""}${w}${n ? `@${n}` : ""}`;
}
function na(i, e) {
  const [t, n] = B(e), r = z[i].parents.flatMap(
    (Ne) => M(Ne, t).split(",")
  );
  if (n.endsWith("]")) {
    const [Ne] = n.split("["), An = [`[intAddr="${Ne}"]`];
    return H(r, [">"], [i], An).map((wn) => wn.join("")).join(",");
  }
  let a, s, o, c, l, d, m, h, A, S, k, E, x, w;
  !n.includes(":") && !n.includes("@") ? [a, s, o, c, l, d, m] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    h,
    A,
    S,
    k,
    E,
    x,
    a,
    s,
    o,
    c,
    l,
    d,
    m
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, s, o, c, l, d, m, w] = n.split(/[ /@]/) : [
    h,
    A,
    S,
    k,
    E,
    x,
    a,
    s,
    o,
    c,
    l,
    d,
    m,
    w
  ] = n.split(/[ /:@]/);
  const [
    q,
    tt,
    it,
    nt,
    rt,
    Te,
    hn,
    fn,
    bn,
    gn,
    yn,
    vn,
    Sn,
    xn
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    d ? [`[doName="${d}"]`] : [":not([doName])"],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    h ? [`[serviceType="${h}"]`] : [":not([serviceType])", '[serviceType=""]'],
    A ? [`[srcCBName="${A}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    E ? [`[srcLNClass="${E}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    x ? [`[srcLNInst="${x}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    w ? [`[intAddr="${w}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return H(
    r,
    [">"],
    [i],
    q,
    tt,
    it,
    nt,
    rt,
    Te,
    hn,
    fn,
    bn,
    gn,
    yn,
    vn,
    Sn,
    xn
  ).map((Ne) => Ne.join("")).join(",");
}
function ra(i) {
  const [e, t, n] = ["prefix", "lnClass", "inst"].map(
    (r) => i.getAttribute(r)
  );
  return `${D(i.parentElement)}>${e ?? ""} ${t} ${n}`;
}
function aa(i, e) {
  const [t, n] = B(e), r = z[i].parents.flatMap(
    (m) => M(m, t).split(",")
  ), [a, s, o] = n.split(" ");
  if (!s) return $;
  const [c, l, d] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${o}"]`]
  ];
  return H(
    r,
    [">"],
    [i],
    c,
    l,
    d
  ).map((m) => m.join("")).join(",");
}
function sa(i) {
  const [e, t, n, r, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => i.getAttribute(o));
  return `${D(i.parentElement)}>${t} ${e || ""} ${n}/${r ?? ""} ${a} ${s}`;
}
function oa(i, e) {
  const [t, n] = B(e), r = z[i].parents.flatMap(
    (x) => M(x, t).split(",")
  ), [a, s, o, c, l, d] = n.split(/[ /]/), [
    m,
    h,
    A,
    S,
    k,
    E
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return H(
    r,
    [">"],
    [i],
    m,
    h,
    A,
    S,
    k,
    E
  ).map((x) => x.join("")).join(",");
}
function si(i) {
  const [e, t] = ["name", "ix"].map((n) => i.getAttribute(n));
  return `${D(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function kt(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [n, r] = B(e), [a, s, o, c] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return $;
  if (t === 0) return `${i}[name="${s}"]`;
  const l = z[i].parents.flatMap(
    (h) => h === "SDI" ? kt(h, n, t - 1).split(",") : M(h, n).split(",")
  ).filter((h) => !h.startsWith($));
  if (l.length === 0) return $;
  const [d, m] = [
    [`[name="${s}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return H(
    l,
    [">"],
    [i],
    d,
    m
  ).map((h) => h.join("")).join(",");
}
function ca(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(i));
  return `${D(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function la(i, e) {
  const [t, n] = B(e), [r, a] = n.split(" "), s = parseFloat(a), o = z[i].parents.flatMap(
    (d) => M(d, t).split(",")
  ), [c, l] = [
    r ? [`[sGroup="${r}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return H(
    o,
    [">"],
    [i],
    c,
    l
  ).map((d) => d.join("")).join(",");
}
function da(i) {
  const [e, t] = ["iedName", "apName"].map(
    (n) => i.getAttribute(n)
  );
  return `${e} ${t}`;
}
function pa(i, e) {
  const [t, n] = e.split(" ");
  return !t || !n ? $ : `${i}[iedName="${t}"][apName="${n}"]`;
}
function oi(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (n) => i.getAttribute(n)
  );
  return `${e} ${t}`;
}
function ci(i, e) {
  const [t, n] = e.split(" ");
  return !t || !n ? $ : `${i}[ldInst="${t}"][cbName="${n}"]`;
}
function ua(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${D(i.parentElement)}>${e}`;
}
function ma(i, e) {
  const [t, n] = B(e), [r, a] = [
    z[i].parents.flatMap(
      (s) => M(s, t).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return H(r, [">"], [i], a).map((s) => s.join("")).join(",");
}
function ha(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${D(i.parentElement)}>${t}`;
  const n = Array.from(i.parentElement.children).filter((r) => r.getAttribute("type") === t).findIndex((r) => r.isSameNode(i));
  return `${D(i.parentElement)}>${t} [${n}]`;
}
function fa(i, e) {
  const [t, n] = B(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [s, o, c] = [
    z[i].parents.flatMap(
      (l) => M(l, t).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return H(
    s,
    [">"],
    [i],
    o,
    c
  ).map((l) => l.join("")).join(",");
}
function ba(i) {
  return `${D(i.parentElement)}>${i.getAttribute("ord")}`;
}
function ga(i, e) {
  const [t, n] = B(e);
  return `${M("EnumType", t)}>${i}[ord="${n}"]`;
}
function ya(i) {
  return `${D(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function va(i, e) {
  const [t, n] = B(e), [r, a] = n.split("	"), [s] = [
    z[i].parents.flatMap(
      (o) => M(o, t).split(",")
    )
  ];
  return H(
    s,
    [">"],
    [i],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((o) => o.join("")).join(",");
}
function Sa() {
  return "";
}
function xa() {
  return ":root";
}
function I(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${D(i.parentElement)}>${i.getAttribute("name")}`;
}
function C(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [n, r] = B(e);
  if (!r) return $;
  if (t === 0) return `${i}[name="${r}"]`;
  const a = z[i].parents;
  if (!a) return $;
  const s = a.flatMap(
    (o) => z[o].selector === z.Substation.selector ? C(o, n, t - 1).split(",") : M(o, n).split(",")
  ).filter((o) => !o.startsWith($));
  return s.length === 0 ? $ : H(s, [">"], [i], [`[name="${r}"]`]).map((o) => o.join("")).join(",");
}
function g(i) {
  return D(i.parentElement).toString();
}
function y(i, e) {
  const t = z[i].parents;
  if (!t) return $;
  const n = t.flatMap((r) => M(r, e).split(",")).filter((r) => !r.startsWith($));
  return n.length === 0 ? $ : H(n, [">"], [i]).map((r) => r.join("")).join(",");
}
function Ue(i) {
  return `#${i.id}`;
}
function je(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : $;
}
const Wi = [
  "TransformerWinding",
  "ConductingEquipment"
], Ki = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Wi
], _t = ["Substation", "VoltageLevel", "Bay"], Xi = ["Process", "Line"], Zi = ["EqSubFunction", "EqFunction"], Aa = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ki,
  ..._t,
  ...Xi,
  ...Zi
], Qi = ["ConnectivityNode", ...Aa], wa = ["GOOSESecurity", "SMVSecurity"], ka = ["SubNetwork", ...wa, ...Qi], _a = ["BDA", "DA"], Ea = ["SampledValueControl", "GSEControl"], Ca = ["LogControl", "ReportControl"], Ia = [...Ea, ...Ca], Da = ["GSE", "SMV"], Ta = [
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
  ...Ia,
  ...Da,
  ..._a
], ve = ["LN0", "LN"], Na = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], La = ["Subject", "IssuerName"], $a = ["MinTime", "MaxTime"], za = ["LNodeType", "DOType", "DAType", "EnumType"], Ra = [
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
], Pa = ["DynDataSet", "ConfDataSet"], Oa = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Pa
], Va = ["ConfLogControl", "ConfSigRef"], Fa = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Ma = ["SCL", ...ka, ...Ta, ...za], Ji = [
  ...Ma,
  ...Na,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...La,
  ...$a,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ve,
  ...Ra,
  "DynAssociation",
  "SettingGroups",
  ...Oa,
  ...Va,
  ...Fa,
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
], Ha = new Set(Ji);
function Mt(i) {
  return Ha.has(i);
}
const Qe = ["Text", "Private"], me = [...Qe], L = [...Qe], We = [...Qe], li = [...L, "Val"], Yi = [...me, "LNode"], fe = [...Yi], Et = [...fe], lt = [
  ...fe,
  "PowerTransformer",
  "GeneralEquipment"
], di = [
  ...Et,
  "Terminal"
], pi = [...L, "Address"], en = [...me], ui = [...en, "IEDName"], mi = [
  ...L,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], hi = [
  ...fe,
  "GeneralEquipment",
  "Function"
], fi = [...en, "TrgOps"], bi = [
  ...fe,
  "GeneralEquipment",
  "EqSubFunction"
], z = {
  AccessControl: {
    identity: g,
    selector: y,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: I,
    selector: C,
    parents: ["IED"],
    children: [
      ...me,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: g,
    selector: y,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Kr,
    selector: Xr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: g,
    selector: y,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: I,
    selector: C,
    parents: ["DAType"],
    children: [...li]
  },
  BitRate: {
    identity: g,
    selector: y,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: I,
    selector: C,
    parents: ["VoltageLevel"],
    children: [
      ...lt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: sa,
    selector: oa,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: g,
    selector: y,
    parents: ["SCL"],
    children: [...L, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: I,
    selector: C,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...di,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: g,
    selector: y,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: da,
    selector: pa,
    parents: ["SubNetwork"],
    children: [...L, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: I,
    selector: C,
    parents: ["Bay", "Line"],
    children: [...Yi]
  },
  DA: {
    identity: I,
    selector: C,
    parents: ["DOType"],
    children: [...li]
  },
  DAI: {
    identity: si,
    selector: kt,
    parents: ["DOI", "SDI"],
    children: [...L, "Val"]
  },
  DAType: {
    identity: Ue,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "BDA", "ProtNs"]
  },
  DO: {
    identity: I,
    selector: C,
    parents: ["LNodeType"],
    children: [...L]
  },
  DOI: {
    identity: I,
    selector: C,
    parents: [...ve],
    children: [...L, "SDI", "DAI"]
  },
  DOType: {
    identity: Ue,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: I,
    selector: C,
    parents: [...ve],
    children: [...me, "FCDA"]
  },
  DataSetDirectory: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: g,
    selector: y,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ue,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "EnumVal"]
  },
  EnumVal: {
    identity: ba,
    selector: ga,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: I,
    selector: C,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...bi]
  },
  EqSubFunction: {
    identity: I,
    selector: C,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...bi]
  },
  ExtRef: {
    identity: ia,
    selector: na,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: ea,
    selector: ta,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: I,
    selector: C,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...fe,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: I,
    selector: C,
    parents: [
      "SubFunction",
      "Function",
      ...Xi,
      ...Zi,
      ..._t
    ],
    children: [...Et, "EqFunction"]
  },
  GetCBValues: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: I,
    selector: C,
    parents: ["AccessPoint"],
    children: [...me, "Subject", "IssuerName"]
  },
  GSE: {
    identity: oi,
    selector: ci,
    parents: ["ConnectedAP"],
    children: [...pi, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: I,
    selector: C,
    parents: ["LN0"],
    children: [...ui, "Protocol"]
  },
  GSESettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: g,
    selector: y,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: g,
    selector: y,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Br,
    selector: qr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: I,
    selector: C,
    parents: ["SCL"],
    children: [...L, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Jr,
    selector: Yr,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: g,
    selector: y,
    parents: [...ve],
    children: [...L, "ExtRef"]
  },
  IssuerName: {
    identity: g,
    selector: y,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: jr,
    selector: Wr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Zr,
    selector: Qr,
    parents: ["Server"],
    children: [...L, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: ra,
    selector: aa,
    parents: ["AccessPoint", "LDevice"],
    children: [...mi]
  },
  LN0: {
    identity: g,
    selector: y,
    parents: ["LDevice"],
    children: [
      ...mi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Gr,
    selector: Ur,
    parents: [...Qi],
    children: [...L]
  },
  LNodeType: {
    identity: Ue,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "DO"]
  },
  Line: {
    identity: I,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...hi,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: I,
    selector: C,
    parents: [...ve],
    children: [...L]
  },
  LogControl: {
    identity: I,
    selector: C,
    parents: [...ve],
    children: [...fi]
  },
  LogSettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: g,
    selector: y,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: g,
    selector: y,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: g,
    selector: y,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: ri,
    selector: ai,
    parents: ["TransformerWinding"],
    children: [...L]
  },
  OptFields: {
    identity: g,
    selector: y,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ha,
    selector: fa,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: ua,
    selector: ma,
    parents: ["ConnectedAP"],
    children: [...L, "P"]
  },
  PowerTransformer: {
    identity: I,
    selector: C,
    parents: [..._t],
    children: [
      ...Et,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => $,
    parents: [],
    children: []
  },
  Process: {
    identity: I,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...hi,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: ya,
    selector: va,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: g,
    selector: y,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: I,
    selector: C,
    parents: [...ve],
    children: [...fi, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: g,
    selector: y,
    parents: ["ReportControl"],
    children: [...L, "ClientLN"]
  },
  SamplesPerSec: {
    identity: g,
    selector: y,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: I,
    selector: C,
    parents: ["LN0"],
    children: [...ui, "SmvOpts"]
  },
  SecPerSamples: {
    identity: g,
    selector: y,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Sa,
    selector: xa,
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
    identity: si,
    selector: kt,
    parents: ["DOI", "SDI"],
    children: [...L, "SDI", "DAI"]
  },
  SDO: {
    identity: I,
    selector: C,
    parents: ["DOType"],
    children: [...me]
  },
  Server: {
    identity: g,
    selector: y,
    parents: ["AccessPoint"],
    children: [
      ...L,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: g,
    selector: y,
    parents: ["AccessPoint"],
    children: [...L]
  },
  Services: {
    identity: g,
    selector: y,
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
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: g,
    selector: y,
    parents: ["LN0"],
    children: [...L]
  },
  SettingGroups: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: g,
    selector: y,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: g,
    selector: y,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: oi,
    selector: ci,
    parents: ["ConnectedAP"],
    children: [...pi]
  },
  SmvOpts: {
    identity: g,
    selector: y,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: I,
    selector: C,
    parents: ["AccessPoint"],
    children: [...me, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: I,
    selector: C,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Wi
    ],
    children: [...fe, "EqFunction"]
  },
  SubFunction: {
    identity: I,
    selector: C,
    parents: ["SubFunction", "Function"],
    children: [
      ...fe,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: I,
    selector: C,
    parents: ["Communication"],
    children: [...me, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: g,
    selector: y,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: I,
    selector: C,
    parents: ["SCL"],
    children: [...lt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: I,
    selector: C,
    parents: ["TransformerWinding"],
    children: [...fe, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: ri,
    selector: ai,
    parents: [...Ki],
    children: [...L]
  },
  Text: {
    identity: g,
    selector: y,
    parents: Ji.filter((i) => i !== "Text" && i !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: g,
    selector: y,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: I,
    selector: C,
    parents: ["PowerTransformer"],
    children: [
      ...di,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: g,
    selector: y,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: ca,
    selector: la,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: g,
    selector: y,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: I,
    selector: C,
    parents: ["Substation"],
    children: [...lt, "Voltage", "Bay", "Function"]
  }
};
function M(i, e) {
  return typeof e != "string" ? $ : Mt(i) ? z[i].selector(i, e) : i;
}
function ne(i, e, t) {
  if (typeof t != "string" || !Mt(e)) return null;
  const n = i.querySelector(z[e].selector(e, t));
  return n === null || ae(n) ? n : Array.from(
    i.querySelectorAll(z[e].selector(e, t))
  ).find(ae) ?? null;
}
function D(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return Mt(e) ? z[e].identity(i) : NaN;
}
const Ba = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", qa = Ba + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", Ga = "(" + qa + ")+", P = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: Ga,
  alphanumericFirstUpperCase: "[A-Z][0-9,A-Z,a-z]*",
  lnClass: "(LLN0)|[A-Z]{4,4}"
};
function H(...i) {
  return i.reduce(
    (e, t) => e.flatMap((n) => t.map((r) => [n, r].flat())),
    [[]]
  );
}
function ae(i) {
  return !i.closest("Private");
}
const Ua = 99;
Array(Ua).fill(1).map((i, e) => `${e + 1}`);
function _e(i, e = "user", t) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { action: i, initiator: e, ...t?.detail }
  });
}
const Je = "LNodeType, DOType, DAType, EnumType";
function ja(i, e) {
  return !i.some(
    (t) => t.new.parent === e.new.parent && t.new.element.getAttribute("id") === e.new.element.getAttribute("id")
  );
}
function Ht(i) {
  const e = [];
  for (const t of i)
    ja(e, t) && e.push(t);
  return e;
}
function Ye(i, e) {
  const t = i.closest("DataTypeTemplates"), n = Array.from(e.querySelectorAll(Je)).filter(ae).map((o) => o.getAttribute("id")), r = new Set(
    Array.from(i.children).map((o) => o.getAttribute("type")).filter((o) => o !== null).filter((o) => !n.includes(o))
  ), a = [];
  r.forEach((o) => {
    const c = t.querySelector(
      `LNodeType[id="${o}"],DOType[id="${o}"],DAType[id="${o}"],EnumType[id="${o}"]`
    );
    c !== null && ae(c) && a.push(c);
  });
  const s = [];
  return a.flatMap((o) => Ye(o, e)).forEach((o) => s.push(o)), a.forEach((o) => {
    s.push({
      new: {
        parent: e,
        element: o.cloneNode(!0)
      }
    });
  }), s;
}
const Wa = xe`
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
`;
function tn(i) {
  return (e) => {
    e.dispatchEvent(
      _e({ old: { parent: i.parentElement, element: i } })
    ), e.dispatchEvent(V());
  };
}
function Bt(i) {
  const e = Math.max(
    ...Array.from(i.children).map(
      (t) => parseInt(t.getAttribute("ord") ?? "-2", 10)
    )
  );
  return isFinite(e) ? (e + 1).toString(10) : "0";
}
function Ka(i) {
  return (e) => {
    const t = f(e.find((o) => o.label === "value")), n = f(e.find((o) => o.label === "desc")), r = f(e.find((o) => o.label === "ord")) || Bt(i), a = K(i.ownerDocument, "EnumVal", {
      ord: r,
      desc: n
    });
    return a.textContent = t, [{
      new: {
        parent: i,
        element: a
      }
    }];
  };
}
function Xa(i) {
  return (e) => {
    const t = f(e.find((s) => s.label === "value")) ?? "", n = f(e.find((s) => s.label === "desc")), r = f(e.find((s) => s.label === "ord")) || i.getAttribute("ord") || Bt(i.parentElement);
    if (t === i.textContent && n === i.getAttribute("desc") && r === i.getAttribute("ord"))
      return [];
    const a = le(i, { desc: n, ord: r });
    return a.textContent = t, [{ old: { element: i }, new: { element: a } }];
  };
}
function nn(i) {
  const e = i.doc ? i.doc : i.parent.ownerDocument, t = ne(
    e,
    "EnumVal",
    i.identity ?? NaN
  ), [n, r, a, s, o, c] = t ? [
    u("enum-val.wizard.title.edit"),
    Xa(t),
    t.getAttribute("ord"),
    t.getAttribute("desc"),
    t.textContent,
    [
      {
        icon: "delete",
        label: u("remove"),
        action: tn(t)
      }
    ]
  ] : [
    u("enum-val.wizard.title.add"),
    Ka(i.parent),
    Bt(i.parent),
    null,
    // desc is uncommon on EnumVal
    "",
    void 0
  ];
  return [
    {
      title: n,
      element: t ?? void 0,
      primary: {
        icon: "",
        label: "Save",
        action: r
      },
      menuActions: c,
      content: [
        p`<wizard-textfield
          label="ord"
          helper="${u("scl.ord")}"
          .maybeValue=${a}
          required
          type="number"
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="value"
          helper="${u("scl.value")}"
          .maybeValue=${o}
          pattern="${P.normalizedString}"
          dialogInitialFocus
        ></wizard-textfield>`,
        p`<wizard-textfield
          id="evDesc"
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${s}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function Za(i, e) {
  return (t) => {
    const n = f(t.find((c) => c.label === "id"));
    if (!n) return [];
    const r = f(t.find((c) => c.label === "desc")), a = t.find((c) => c.label === "values"), s = a.selected ? e.querySelector(`EnumType[id="${a.selected.value}"]`).cloneNode(!0) : K(i.ownerDocument, "EnumType", {});
    return s.setAttribute("id", n), r && s.setAttribute("desc", r), [{
      new: {
        parent: i,
        element: s
      }
    }];
  };
}
function Qa(i, e) {
  return [
    {
      title: u("enum.wizard.title.add"),
      primary: {
        icon: "add",
        label: u("add"),
        action: Za(i, e)
      },
      content: [
        p`<mwc-select
          style="--mdc-menu-max-height: 196px;"
          outlined
          icon="playlist_add_check"
          label="values"
          helper="Default enumerations"
        >
          ${Array.from(e.querySelectorAll("EnumType")).map(
          (t) => p`<mwc-list-item
                graphic="icon"
                hasMeta
                value="${t.getAttribute("id") ?? ""}"
                ><span>${t.getAttribute("id")}</span>
                <span slot="meta">${t.querySelectorAll("EnumVal").length}</span>
              </mwc-list-item>`
        )}
        </mwc-select>`,
        p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="127"
          minlength="1"
          pattern="${P.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function Ja(i) {
  return (e) => {
    e.dispatchEvent(de(() => nn({ parent: i })));
  };
}
function Ya(i) {
  return (e) => {
    const t = f(e.find((o) => o.label === "id")), n = f(e.find((o) => o.label === "desc"));
    if (t === i.getAttribute("id") && n === i.getAttribute("desc"))
      return [];
    const r = le(i, { id: t, desc: n }), a = [];
    a.push({ old: { element: i }, new: { element: r } });
    const s = i.getAttribute("id");
    return Array.from(
      i.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", t), a.push({ old: { element: o }, new: { element: c } });
    }), [{ title: u("enum.action.edit", { oldId: s, newId: t }), actions: a }];
  };
}
function gi(i, e) {
  const t = ne(e, "EnumType", i);
  if (t)
    return [
      {
        title: u("enum.wizard.title.edit"),
        element: t,
        primary: {
          icon: "",
          label: u("save"),
          action: Ya(t)
        },
        menuActions: [
          {
            label: u("remove"),
            icon: "delete",
            action: tn(t)
          },
          {
            label: u("scl.EnumVal"),
            icon: "playlist_add",
            action: Ja(t)
          }
        ],
        content: [
          p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${t.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${P.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${t.getAttribute("desc")}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`,
          p`<mwc-list
          style="margin-top: 0px;"
          @selected=${(n) => {
            const r = nn({
              identity: n.target.selected.value,
              doc: e
            });
            r && n.target.dispatchEvent(de(r));
          }}
          >${Array.from(t.querySelectorAll("EnumVal")).map(
            (n) => p`<mwc-list-item
                graphic="icon"
                hasMeta
                tabindex="0"
                value="${D(n)}"
              >
                <span>${n.textContent ?? ""}</span>
                <span slot="graphic"
                  >${n.getAttribute("ord") ?? "-1"}</span
                >
              </mwc-list-item>`
          )}</mwc-list
        > `
        ]
      }
    ];
}
const es = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", ts = es + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", is = "(" + ts + ")+", ie = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: is,
  tRestrName1stL: "[a-z][0-9A-Za-z]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)",
  cdc: "(SPS)|(DPS)|(INS)|(ENS)|(ACT)|(ACD)|(SEC)|(BCR)|(HST)|(VSS)|(MV)|(CMV)|(SAV)|(WYE)|(DEL)|(SEQ)|(HMV)|(HWYE)|(HDEL)|(SPC)|(DPC)|(INC)|(ENC)|(BSC)|(ISC)|(APC)|(BAC)|(SPG)|(ING)|(ENG)|(ORG)|(TSG)|(CUG)|(VSG)|(ASG)|(CURVE)|(CSG)|(DPL)|(LPL)|(CSD)|(CST)|(BTS)|(UTS)|(LTS)|(GTS)|(MTS)|(NTS)|(STS)|(CTS)|(OTS)|(VSD)"
}, ns = {
  abstracDaName: 60
}, rs = [
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
], as = [
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
], ss = ["Spec", "Conf", "RO", "Set"];
function os(i, e, t) {
  if (!i.target || !i.target.parentElement) return;
  const n = i.target.selected?.value;
  if (i.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    e.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (o) => p`<mwc-list-item
        value="${o.textContent?.trim() ?? ""}"
        ?selected=${o.textContent?.trim() === t}
        >${o.textContent?.trim()}</mwc-list-item
      >`
  ), s = i.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Ti(p`${a}`, s), s.requestUpdate();
}
function cs(i, e, t) {
  const n = i.target.selected.value, r = i.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((c) => {
    const l = c;
    l.disabled = !c.classList.contains(n), l.noninteractive = !c.classList.contains(n), l.style.display = c.classList.contains(n) ? "" : "none", l.disabled || a.push(l);
  }), t && e === n ? r.value = t : r.value = a.length ? a[0].value : "";
  const s = i.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? s.style.display = "" : s.style.display = "none";
  const o = i.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? o.style.display = "none" : o.style.display = "", s.requestUpdate(), o.requestUpdate(), r.requestUpdate();
}
function et(i, e, t, n, r, a, s, o, c, l) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${i}
      helper="${u("scl.name")}"
      required
      pattern="${ie.abstractDataAttributeName}"
      maxLength="${ns.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    p`<wizard-textfield
      label="desc"
      helper="${u("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${ie.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${t}
      helper="${u("scl.bType")}"
      required
      @selected=${(d) => cs(d, t, r)}
      >${as.map(
      (d) => p`<mwc-list-item value="${d}"
            >${d}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    p`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${u("scl.type")}"
      fixedMenuPosition
      @selected=${(d) => os(d, l, c)}
      >${n.map(
      (d) => p`<mwc-list-item
            class="${d.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${d.id}
            >${d.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${u("scl.sAddr")}"
      nullable
      pattern="${ie.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="valKind"
      .maybeValue=${s}
      helper="${u("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${ss.map(
      (d) => p`<mwc-list-item value="${d}"
            >${d}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    p`<wizard-checkbox
      label="valImport"
      .maybeValue=${o}
      helper="${u("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    p`<wizard-select
      label="Val"
      .maybeValue=${c}
      helper="${u("scl.Val")}"
      nullable
      >${Array.from(
      l.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (d) => p`<mwc-list-item value="${d.textContent?.trim() ?? ""}"
            >${d.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="Val"
      .maybeValue=${c}
      helper="${u("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function rn(i, e, t) {
  if (i === null) {
    const r = K(t.ownerDocument, "Val", {});
    return r.textContent = e, {
      new: {
        parent: t,
        element: r,
        reference: t.firstElementChild
      }
    };
  }
  if (e === null)
    return {
      old: {
        parent: t,
        element: i,
        reference: i.nextSibling
      }
    };
  const n = i.cloneNode(!1);
  return n.textContent = e, {
    old: { element: i },
    new: { element: n }
  };
}
function ls(i) {
  return (e) => {
    e.dispatchEvent(
      _e({ old: { parent: i.parentElement, element: i } })
    ), e.dispatchEvent(V());
  };
}
function ds(i) {
  return (e) => {
    const t = f(e.find((S) => S.label === "name")), n = f(e.find((S) => S.label === "desc")), r = f(e.find((S) => S.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((S) => S.label === "type")) : null, s = f(e.find((S) => S.label === "sAddr")), o = f(e.find((S) => S.label === "valKind")), c = f(e.find((S) => S.label === "valImport")), l = e.find(
      (S) => S.label === "Val" && S.style.display !== "none"
    ), d = l ? f(l) : null;
    let m, h;
    if (t === i.getAttribute("name") && n === i.getAttribute("desc") && r === i.getAttribute("bType") && a === i.getAttribute("type") && s === i.getAttribute("sAddr") && o === i.getAttribute("valKind") && c === i.getAttribute("valImprot"))
      m = null;
    else {
      const S = le(i, {
        name: t,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c
      });
      m = { old: { element: i }, new: { element: S } };
    }
    d === (i.querySelector("Val")?.textContent?.trim() ?? null) ? h = null : h = rn(
      i.querySelector("Val"),
      d,
      m?.new.element ?? i
    );
    const A = [];
    return m && A.push(m), h && A.push(h), A;
  };
}
function ps(i) {
  const e = i.ownerDocument, t = i.getAttribute("type"), n = i.getAttribute("name"), r = i.getAttribute("desc"), a = i.getAttribute("bType") ?? "", s = i.getAttribute("sAddr"), o = i.querySelector("Val")?.innerHTML.trim() ?? null, c = i.getAttribute("valKind"), l = i.getAttribute("valImport"), d = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ae).filter((h) => h.getAttribute("id")), m = i.closest("DataTypeTemplates");
  return [
    {
      title: u("bda.wizard.title.edit"),
      element: i,
      primary: {
        icon: "",
        label: u("save"),
        action: ds(i)
      },
      menuActions: [
        {
          icon: "delete",
          label: u("remove"),
          action: ls(i)
        }
      ],
      content: [
        ...et(
          n,
          r,
          a,
          d,
          t,
          s,
          c,
          l,
          o,
          m
        )
      ]
    }
  ];
}
function us(i) {
  return (e) => {
    const t = f(e.find((h) => h.label === "name")), n = f(e.find((h) => h.label === "desc")), r = f(e.find((h) => h.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((h) => h.label === "type")) : null, s = f(e.find((h) => h.label === "sAddr")), o = f(e.find((h) => h.label === "valKind")) !== "" ? f(e.find((h) => h.label === "valKind")) : null, c = f(e.find((h) => h.label === "valImport")) !== "" ? f(e.find((h) => h.label === "valImport")) : null, l = e.find(
      (h) => h.label === "Val" && h.style.display !== "none"
    ), d = l ? f(l) : null, m = K(i.ownerDocument, "BDA", {
      name: t,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c
    });
    if (d !== null) {
      const h = K(i.ownerDocument, "Val", {});
      h.textContent = d, m.appendChild(h);
    }
    return [
      {
        new: {
          parent: i,
          element: m
        }
      }
    ];
  };
}
function ms(i) {
  const e = i.ownerDocument, t = "", n = null, r = "", a = null, s = null, o = null, c = null, l = null, d = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ae).filter((h) => h.getAttribute("id")), m = i.closest("DataTypeTemplates");
  return [
    {
      title: u("bda.wizard.title.edit"),
      primary: {
        icon: "",
        label: u("save"),
        action: us(i)
      },
      content: [
        ...et(
          t,
          n,
          r,
          d,
          a,
          s,
          c,
          l,
          o,
          m
        )
      ]
    }
  ];
}
function hs(i) {
  return (e) => {
    e.dispatchEvent(
      _e({ old: { parent: i.parentElement, element: i } })
    ), e.dispatchEvent(V());
  };
}
function fs(i) {
  return (e) => {
    e.dispatchEvent(de(() => ms(i)));
  };
}
function bs(i) {
  return (e) => {
    const t = f(e.find((o) => o.label === "id")), n = f(e.find((o) => o.label === "desc"));
    if (t === i.getAttribute("id") && n === i.getAttribute("desc"))
      return [];
    const r = le(i, { id: t, desc: n }), a = [];
    a.push({ old: { element: i }, new: { element: r } });
    const s = i.getAttribute("id");
    return Array.from(
      i.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", t), a.push({ old: { element: o }, new: { element: c } });
    }), [
      { title: u("datype.action.edit", { oldId: s, newId: t }), actions: a }
    ];
  };
}
function yi(i, e) {
  const t = ne(e, "DAType", i);
  if (!t) return;
  const n = t.getAttribute("id"), r = t.getAttribute("desc");
  return [
    {
      title: u("datype.wizard.title.edit"),
      element: t ?? void 0,
      primary: {
        icon: "",
        label: u("save"),
        action: bs(t)
      },
      menuActions: [
        {
          label: u("remove"),
          icon: "delete",
          action: hs(t)
        },
        {
          label: u("scl.DA"),
          icon: "playlist_add",
          action: fs(t)
        }
      ],
      content: [
        p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${n}
          required
          maxlength="127"
          minlength="1"
          pattern="${P.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${r}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`,
        p`<mwc-list
          style="margin-top: 0px;"
          @selected=${(a) => {
          const s = a.target.selected.value, o = ne(e, "BDA", s);
          o && a.target.dispatchEvent(de(ps(o)));
        }}
        >
          ${Array.from(t.querySelectorAll("BDA")).map(
          (a) => p`<mwc-list-item twoline tabindex="0" value="${D(a)}"
                ><span>${a.getAttribute("name")}</span
                ><span slot="secondary"
                  >${a.getAttribute("bType") === "Enum" || a.getAttribute("bType") === "Struct" ? "#" + a.getAttribute("type") : a.getAttribute("bType")}</span
                ></mwc-list-item
              >`
        )}
        </mwc-list> `
      ]
    }
  ];
}
function gs(i, e) {
  return (t) => {
    const n = f(t.find((d) => d.label === "id"));
    if (!n) return [];
    if (Array.from(
      e.querySelectorAll(Je)
    ).some((d) => d.getAttribute("id") === n)) return [];
    const a = f(t.find((d) => d.label === "desc")), s = t.find((d) => d.label === "values"), o = s.selected ? e.querySelector(`DAType[id="${s.selected.value}"]`) : null, c = s.selected ? o.cloneNode(!0) : K(i.ownerDocument, "DAType", {});
    c.setAttribute("id", n), a && c.setAttribute("desc", a);
    const l = [];
    return o && Ye(o, i).forEach(
      (d) => l.push(d)
    ), l.push({
      new: {
        parent: i,
        element: c
      }
    }), Ht(l);
  };
}
function ys(i, e) {
  return [
    {
      title: u("datype.wizard.title.add"),
      primary: {
        icon: "add",
        label: u("add"),
        action: gs(i, e)
      },
      content: [
        p`<mwc-select
          fixedMenuPosition
          outlined
          icon="playlist_add_check"
          label="values"
          helper="Default enumerations"
        >
          ${Array.from(e.querySelectorAll("DAType")).map(
          (t) => p`<mwc-list-item
                graphic="icon"
                hasMeta
                value="${t.getAttribute("id") ?? ""}"
                ><span
                  >${t.getAttribute("id")?.replace("OpenSCD_", "")}</span
                >
                <span slot="meta"
                  >${t.querySelectorAll("BDA").length}</span
                >
              </mwc-list-item>`
        )}
        </mwc-select>`,
        p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="255"
          minlength="1"
          pattern="${P.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function vs(i) {
  return (e) => {
    e.dispatchEvent(
      _e({ old: { parent: i.parentElement, element: i } })
    ), e.dispatchEvent(V());
  };
}
function an(i, e, t, n) {
  return [
    p`<wizard-select
      label="fc"
      .maybeValue=${i}
      helper="${u("scl.fc")}"
      required
      fixedMenuPosition
      >${rs.map(
      (r) => p`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-checkbox
      label="dchg"
      .maybeValue=${e}
      helper="${u("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    p`<wizard-checkbox
      label="qchg"
      .maybeValue=${t}
      helper="${u("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    p`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${u("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Ss(i) {
  return (e) => {
    const t = f(e.find((w) => w.label === "name")), n = f(e.find((w) => w.label === "desc")), r = f(e.find((w) => w.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((w) => w.label === "type")) : null, s = f(e.find((w) => w.label === "sAddr")), o = f(e.find((w) => w.label === "valKind")), c = f(e.find((w) => w.label === "valImport")), l = e.find(
      (w) => w.label === "Val" && w.style.display !== "none"
    ), d = l ? f(l) : null, m = f(e.find((w) => w.label === "fc")) ?? "", h = f(e.find((w) => w.label === "dchg")), A = f(e.find((w) => w.label === "qchg")), S = f(e.find((w) => w.label === "dupd"));
    let k, E;
    if (t === i.getAttribute("name") && n === i.getAttribute("desc") && r === i.getAttribute("bType") && a === i.getAttribute("type") && s === i.getAttribute("sAddr") && o === i.getAttribute("valKind") && c === i.getAttribute("valImprot") && m === i.getAttribute("fc") && h === i.getAttribute("dchg") && A === i.getAttribute("qchg") && S === i.getAttribute("dupd"))
      k = null;
    else {
      const w = le(i, {
        name: t,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c,
        fc: m,
        dchg: h,
        qchg: A,
        dupd: S
      });
      k = { old: { element: i }, new: { element: w } };
    }
    d === (i.querySelector("Val")?.textContent?.trim() ?? null) ? E = null : E = rn(
      i.querySelector("Val"),
      d,
      k?.new.element ?? i
    );
    const x = [];
    return k && x.push(k), E && x.push(E), x;
  };
}
function xs(i) {
  const e = i.ownerDocument, t = i.getAttribute("name"), n = i.getAttribute("desc"), r = i.getAttribute("bType") ?? "", a = i.getAttribute("type"), s = i.getAttribute("sAddr"), o = i.querySelector("Val")?.innerHTML.trim() ?? null, c = i.getAttribute("valKind"), l = i.getAttribute("valImport"), d = i.getAttribute("fc") ?? "", m = i.getAttribute("dchg"), h = i.getAttribute("qchg"), A = i.getAttribute("dupd"), S = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ae).filter((E) => E.getAttribute("id")), k = i.closest("DataTypeTemplates");
  return [
    {
      title: u("da.wizard.title.edit"),
      element: i ?? void 0,
      primary: {
        icon: "",
        label: u("save"),
        action: Ss(i)
      },
      menuActions: [
        {
          icon: "delete",
          label: u("remove"),
          action: vs(i)
        }
      ],
      content: [
        ...et(
          t,
          n,
          r,
          S,
          a,
          s,
          c,
          l,
          o,
          k
        ),
        ...an(d, m, h, A)
      ]
    }
  ];
}
function As(i) {
  return (e) => {
    const t = f(e.find((x) => x.label === "name")), n = f(e.find((x) => x.label === "desc")), r = f(e.find((x) => x.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((x) => x.label === "type")) : null, s = f(e.find((x) => x.label === "sAddr")), o = f(e.find((x) => x.label === "valKind")), c = f(e.find((x) => x.label === "valImport")), l = e.find(
      (x) => x.label === "Val" && x.style.display !== "none"
    ), d = l ? f(l) : null, m = f(e.find((x) => x.label === "fc")) ?? "", h = f(e.find((x) => x.label === "dchg")), A = f(e.find((x) => x.label === "qchg")), S = f(e.find((x) => x.label === "dupd")), k = [], E = K(i.ownerDocument, "DA", {
      name: t,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c,
      fc: m,
      dchg: h,
      qchg: A,
      dupd: S
    });
    if (d !== null) {
      const x = K(i.ownerDocument, "Val", {});
      x.textContent = d, E.appendChild(x);
    }
    return k.push({
      new: {
        parent: i,
        element: E
      }
    }), k;
  };
}
function ws(i) {
  const e = i.ownerDocument, t = "", n = null, r = "", a = null, s = null, o = null, c = null, l = null, d = "", m = null, h = null, A = null, S = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ae).filter((E) => E.getAttribute("id")), k = i.closest("DataTypeTemplates");
  return [
    {
      title: u("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: u("save"),
        action: As(i)
      },
      content: [
        ...et(
          t,
          n,
          r,
          S,
          a,
          s,
          c,
          l,
          o,
          k
        ),
        ...an(d, m, h, A)
      ]
    }
  ];
}
function sn(i) {
  return (e) => {
    e.dispatchEvent(
      _e({ old: { parent: i.parentElement, element: i } })
    ), e.dispatchEvent(V());
  };
}
function ks(i) {
  return (e) => {
    const t = f(e.find((o) => o.label === "name")), n = f(e.find((o) => o.label === "desc")), r = f(e.find((o) => o.label === "type")), a = [];
    if (t === i.getAttribute("name") && n === i.getAttribute("desc") && r === i.getAttribute("type"))
      return [];
    const s = le(i, { name: t, desc: n, type: r });
    return a.push({ old: { element: i }, new: { element: s } }), a;
  };
}
function _s(i) {
  return (e) => {
    const t = f(e.find((o) => o.label === "name")), n = f(e.find((o) => o.label === "desc")), r = f(e.find((o) => o.label === "type")), a = [], s = K(i.ownerDocument, "SDO", {
      name: t,
      desc: n,
      type: r
    });
    return a.push({
      new: {
        parent: i,
        element: s
      }
    }), a;
  };
}
function on(i) {
  const e = i.doc ? i.doc : i.parent.ownerDocument, t = ne(e, "SDO", i.identity ?? NaN), [n, r, a, s, o, c] = t ? [
    u("sdo.wizard.title.edit"),
    ks(t),
    t.getAttribute("type"),
    [{ icon: "delete", label: u("remove"), action: sn(t) }],
    t.getAttribute("name"),
    t.getAttribute("desc")
  ] : [
    u("sdo.wizard.title.add"),
    _s(i.parent),
    null,
    void 0,
    "",
    null
  ], l = Array.from(e.querySelectorAll("DOType")).filter(ae).filter((d) => d.getAttribute("id"));
  return [
    {
      title: n,
      element: t ?? void 0,
      primary: { icon: "", label: u("save"), action: r },
      menuActions: s,
      content: [
        p`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${u("scl.name")}"
          required
          pattern="${ie.tRestrName1stL}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${ie.normalizedString}"
        ></wizard-textfield>`,
        p`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${u("scl.type")}"
          >${l.map(
          (d) => p`<mwc-list-item
                value=${d.id}
                ?selected=${d.id === a}
                >${d.id}</mwc-list-item
              >`
        )}</mwc-select
        >`
      ]
    }
  ];
}
function Es(i, e) {
  return (t) => {
    const n = f(t.find((m) => m.label === "id"));
    if (!n) return [];
    if (Array.from(
      e.querySelectorAll(Je)
    ).some((m) => m.getAttribute("id") === n)) return [];
    const a = f(t.find((m) => m.label === "desc")), s = f(t.find((m) => m.label === "cdc")), o = t.find((m) => m.label === "values"), c = o.selected ? e.querySelector(`DOType[id="${o.selected.value}"]`) : null, l = o.selected ? c.cloneNode(!0) : K(i.ownerDocument, "DOType", {});
    l.setAttribute("id", n), l.setAttribute("cdc", s), a && l.setAttribute("desc", a);
    const d = [];
    return c && Ye(c, i).forEach(
      (m) => d.push(m)
    ), d.push({
      new: {
        parent: i,
        element: l
      }
    }), Ht(d);
  };
}
function Cs(i, e) {
  const t = i.target.parentElement.querySelector(
    'wizard-textfield[label="cdc"]'
  ), n = i.target.value, r = e.querySelector(`DOType[id="${n}"]`)?.getAttribute("cdc") ?? null;
  r && (t.value = r), t.disabled = !0;
}
function Is(i, e) {
  return [
    {
      title: u("dotype.wizard.title.add"),
      primary: {
        icon: "add",
        label: u("add"),
        action: Es(i, e)
      },
      content: [
        p`<mwc-select
          fixedMenuPosition
          outlined
          icon="playlist_add_check"
          label="values"
          helper="${u("dotype.wizard.enums")}"
          @selected=${(t) => Cs(t, e)}
        >
          ${Array.from(e.querySelectorAll("DOType")).map(
          (t) => p`<mwc-list-item
                graphic="icon"
                hasMeta
                value="${t.getAttribute("id") ?? ""}"
                ><span
                  >${t.getAttribute("id")?.replace("OpenSCD_", "")}</span
                >
                <span slot="meta"
                  >${t.querySelectorAll("SDO,DA").length}</span
                >
              </mwc-list-item>`
        )}
        </mwc-select>`,
        p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="127"
          minlength="1"
          pattern="${ie.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${ie.normalizedString}"
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="cdc"
          helper="${u("scl.CDC")}"
          required
          pattern="${ie.cdc}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function Ds(i) {
  return (e) => {
    e.dispatchEvent(de(() => on({ parent: i })));
  };
}
function Ts(i) {
  return (e) => {
    e.dispatchEvent(de(() => ws(i)));
  };
}
function Ns(i) {
  return (e) => {
    const t = f(e.find((c) => c.label === "id")), n = f(e.find((c) => c.label === "desc")), r = f(e.find((c) => c.label === "CDC"));
    if (t === i.getAttribute("id") && n === i.getAttribute("desc") && r == i.getAttribute("cdc"))
      return [];
    const a = le(i, { id: t, desc: n, cdc: r }), s = [];
    s.push({ old: { element: i }, new: { element: a } });
    const o = i.getAttribute("id");
    return Array.from(
      i.ownerDocument.querySelectorAll(
        `LNodeType > DO[type="${o}"], DOType > SDO[type="${o}"]`
      )
    ).forEach((c) => {
      const l = c.cloneNode(!1);
      l.setAttribute("type", t), s.push({ old: { element: c }, new: { element: l } });
    }), [
      { title: u("dotype.action.edit", { oldId: o, newId: t }), actions: s }
    ];
  };
}
function vi(i, e) {
  const t = ne(e, "DOType", i);
  if (t)
    return [
      {
        title: u("dotype.wizard.title.edit"),
        element: t,
        primary: {
          icon: "",
          label: u("save"),
          action: Ns(t)
        },
        menuActions: [
          {
            label: u("remove"),
            icon: "delete",
            action: sn(t)
          },
          {
            label: u("scl.DO"),
            icon: "playlist_add",
            action: Ds(t)
          },
          {
            label: u("scl.DA"),
            icon: "playlist_add",
            action: Ts(t)
          }
        ],
        content: [
          p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${t.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${ie.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${t.getAttribute("desc")}
          nullable
          pattern="${ie.normalizedString}"
        ></wizard-textfield>`,
          p`<wizard-textfield
          label="CDC"
          helper="${u("scl.CDC")}"
          .maybeValue=${t.getAttribute("cdc")}
          pattern="${ie.normalizedString}"
        ></wizard-textfield>`,
          p`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = n.target.selected, a = n.target.selected.value, s = ne(e, "DA", a), o = r.classList.contains("DA") ? s ? xs(s) : void 0 : on({
              identity: r.value,
              doc: e
            });
            o && n.target.dispatchEvent(de(o));
          }}
          >
            ${Array.from(t.querySelectorAll("SDO, DA")).map(
            (n) => p`<mwc-list-item
                  twoline
                  tabindex="0"
                  class="${n.tagName === "DA" ? "DA" : "SDO"}"
                  value="${D(n)}"
                  ><span>${n.getAttribute("name")}</span
                  ><span slot="secondary"
                    >${n.tagName === "SDO" || n.getAttribute("bType") === "Enum" || n.getAttribute("bType") === "Struct" ? "#" + n.getAttribute("type") : n.getAttribute("bType")}</span
                  ></mwc-list-item
                >`
          )}
          </mwc-list>
        `
        ]
      }
    ];
}
function cn(i) {
  return (e) => {
    e.dispatchEvent(
      _e({ old: { parent: i.parentElement, element: i } })
    ), e.dispatchEvent(V());
  };
}
function Ls(i) {
  return (e) => {
    e.dispatchEvent(de(() => ln({ parent: i })));
  };
}
function $s(i) {
  return (e) => {
    const t = f(e.find((c) => c.label === "name")), n = f(e.find((c) => c.label === "desc")), r = f(e.find((c) => c.label === "type")), a = f(
      e.find((c) => c.label === "accessControl")
    ), s = f(e.find((c) => c.label === "transient")) !== "" ? f(e.find((c) => c.label === "transient")) : null;
    if (t === i.getAttribute("name") && n === i.getAttribute("desc") && r === i.getAttribute("type") && a === i.getAttribute("accessControl") && s === i.getAttribute("transient"))
      return [];
    const o = le(i, {
      name: t,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return [{ old: { element: i }, new: { element: o } }];
  };
}
function zs(i) {
  return (e) => {
    const t = f(e.find((l) => l.label === "name")), n = f(e.find((l) => l.label === "desc")), r = f(e.find((l) => l.label === "type")), a = f(
      e.find((l) => l.label === "accessControl")
    ), s = f(e.find((l) => l.label === "transient")) !== "" ? f(e.find((l) => l.label === "transient")) : null, o = [], c = K(i.ownerDocument, "DO", {
      name: t,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return o.push({
      new: {
        parent: i,
        element: c
      }
    }), o;
  };
}
function ln(i) {
  const e = i.doc ? i.doc : i.parent.ownerDocument, t = ne(e, "DO", i.identity ?? NaN), [
    n,
    r,
    a,
    s,
    o,
    c,
    l,
    d
  ] = t ? [
    u("do.wizard.title.edit"),
    $s(t),
    t.getAttribute("type"),
    [
      {
        icon: "delete",
        label: u("remove"),
        action: cn(t)
      }
    ],
    t.getAttribute("name"),
    t.getAttribute("desc"),
    t.getAttribute("accessControl"),
    t.getAttribute("transient")
  ] : [
    u("do.wizard.title.add"),
    zs(i.parent),
    null,
    void 0,
    "",
    null,
    null,
    null
  ], m = Array.from(e.querySelectorAll("DOType")).filter(ae).filter((h) => h.getAttribute("id"));
  return [
    {
      title: n,
      element: t ?? void 0,
      primary: { icon: "", label: u("save"), action: r },
      menuActions: s,
      content: [
        p`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${u("scl.name")}"
          required
          pattern="${P.alphanumericFirstUpperCase}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`,
        p`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${u("scl.type")}"
          >${m.map(
          (h) => p`<mwc-list-item
                value=${h.id}
                ?selected=${h.id === a}
                >${h.id}</mwc-list-item
              >`
        )}</mwc-select
        >`,
        p`<wizard-textfield
          label="accessControl"
          helper="${u("scl.accessControl")}"
          .maybeValue=${l}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`,
        p`<wizard-checkbox
          label="transient"
          .maybeValue="${d}"
          helper="${u("scl.transient")}"
          nullable
        ></wizard-checkbox>`
      ]
    }
  ];
}
function dn(i, e, t) {
  if (e === "") return [];
  const n = !t || i.querySelector(
    `LNClass[name="${e}"], AbstractLNClass[name="${e}"]`
  ) ? i : t, r = Array.from(
    i.querySelectorAll(
      `LNClass[name="${e}"], AbstractLNClass[name="${e}"]`
    )
  ), a = Array.from(
    t?.querySelectorAll(
      `LNClass[name="${e}"], AbstractLNClass[name="${e}"]`
    ) ?? []
  );
  return dn(
    i,
    n.querySelector(`LNClass[name="${e}"], AbstractLNClass[name="${e}"]`)?.getAttribute("base") ?? "",
    t
  ).concat(r, a);
}
function Ct(i, e, t) {
  return dn(i, e, t).flatMap(
    (r) => Array.from(r.querySelectorAll("DataObject"))
  );
}
function Rs(i, e) {
  return (t, n) => {
    const r = Array.from(
      n.shadowRoot.querySelectorAll("wizard-select")
    ).filter((s) => s.maybeValue), a = [];
    return r.forEach((s) => {
      const o = K(i.ownerDocument, "DO", {
        name: s.label,
        type: s.value
      });
      a.push({
        new: {
          parent: e,
          element: o
        }
      });
    }), a.push({
      new: {
        parent: i,
        element: e
      }
    }), a;
  };
}
function Ps(i) {
  return (e, t) => {
    const n = e.getAttribute("id") ?? "", r = t.getAttribute("id") ?? "", a = n.includes(i), s = r.includes(i);
    return !a && s ? 1 : a && !s ? -1 : n.localeCompare(r);
  };
}
function Os(i, e, t) {
  return [
    {
      title: u("lnodetype.wizard.title.select"),
      primary: {
        label: u("save"),
        icon: "",
        action: Rs(i, e)
      },
      content: t.map((n) => {
        const r = n.getAttribute("presCond"), a = n.getAttribute("name") ?? "", s = Array.from(
          i.closest("DataTypeTemplates").querySelectorAll(`DOType[cdc="${n.getAttribute("type")}"]`)
        ).sort(Ps(a));
        return p`<wizard-select
          fixedMenuPosition
          naturalMenuWidth
          label="${a}"
          ?required=${r === "M"}
          ?nullable=${r !== "M"}
          .maybeValue=${null}
          >${s.map(
          (o) => p`<mwc-list-item value="${o.getAttribute("id")}"
                >${o.getAttribute("id")}</mwc-list-item
              >`
        )}</wizard-select
        >`;
      })
    }
  ];
}
function Vs(i, e, t) {
  const n = [];
  return Ye(t, i).forEach(
    (r) => n.push(r)
  ), n.push({
    new: {
      parent: i,
      element: e
    }
  }), Ht(n);
}
function Fs(i, e, t, n) {
  return (r, a) => {
    const s = f(r.find((A) => A.label === "id"));
    if (!s) return [];
    if (Array.from(
      e.querySelectorAll(Je)
    ).some((A) => A.getAttribute("id") === s)) return [];
    const c = f(r.find((A) => A.label === "desc")), l = r.find((A) => A.label === "lnClass")?.selected?.value, d = l ? ne(e, "LNodeType", l) : null, m = d ? d.cloneNode(!0) : K(i.ownerDocument, "LNodeType", {
      lnClass: l ?? ""
    });
    if (m.setAttribute("id", s), c && m.setAttribute("desc", c), d)
      return Vs(i, m, d);
    const h = Ct(t, l, n);
    return a.dispatchEvent(
      V(Os(i, m, h))
    ), a.dispatchEvent(V()), [];
  };
}
function Ms(i, e) {
  const t = i.target.selected?.value, n = t ? ne(e, "LNodeType", t) : null, r = i.target?.closest("mwc-dialog")?.querySelector('mwc-button[slot="primaryAction"]') ?? null;
  n ? (r?.setAttribute("label", u("save")), r?.setAttribute("icon", "save")) : (r?.setAttribute("label", u("next") + "..."), r?.setAttribute("icon", ""));
}
function Hs(i, e, t, n) {
  return [
    {
      title: u("lnodetype.wizard.title.add"),
      primary: {
        icon: "",
        label: u("next") + "...",
        action: Fs(i, e, t, n)
      },
      content: [
        p`<mwc-select
          id="lnclassnamelist"
          fixedMenuPosition
          outlined
          icon="playlist_add_check"
          label="lnClass"
          helper="Default logical nodes"
          required
          dialogInitialFocus
          @selected=${(r) => Ms(r, e)}
        >
          <mwc-list-item noninteractive
            >Pre-defined lnClasses from templates</mwc-list-item
          >
          <li divider role="separator"></li>
          ${Array.from(e.querySelectorAll("LNodeType")).map(
          (r) => {
            const a = r.getAttribute("lnClass") ?? "", s = r.getAttribute("desc") ?? "";
            return p`<mwc-list-item
                twoline
                style="min-width:200px"
                graphic="icon"
                hasMeta
                value="${D(r)}"
                ><span>${a}</span>
                <span slot="secondary">${s}</span>
                <span slot="meta"
                  >${zr(r, "DO").length}</span
                >
              </mwc-list-item>`;
          }
        )}
          <mwc-list-item noninteractive
            >Empty lnClasses from IEC 61850-7-4</mwc-list-item
          >
          <li divider role="separator"></li>
          ${Array.from(t.querySelectorAll("LNClasses > LNClass")).map(
          (r) => {
            const a = r.getAttribute("name") ?? "";
            return p`<mwc-list-item
                style="min-width:200px"
                graphic="icon"
                hasMeta
                value="${a}"
                ><span>${a}</span>
                <span slot="meta"
                  >${Ct(t, a, n).length}</span
                >
              </mwc-list-item>`;
          }
        )}
          <mwc-list-item noninteractive
            >Empty lnClasses from IEC 61850-7-420</mwc-list-item
          >
          <li divider role="separator"></li>
          ${Array.from(n.querySelectorAll("LNClasses > LNClass")).map(
          (r) => {
            const a = r.getAttribute("name") ?? "";
            return p`<mwc-list-item
                style="min-width:200px"
                graphic="icon"
                hasMeta
                value="${a}"
                ><span>${a}</span>
                <span slot="meta"
                  >${Ct(t, a, n).length}</span
                >
              </mwc-list-item>`;
          }
        )}
        </mwc-select>`,
        p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="127"
          minlength="1"
          pattern="${P.nmToken}"
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function Bs(i) {
  return (e) => {
    const t = f(e.find((c) => c.label === "id")), n = f(e.find((c) => c.label === "desc")), r = f(e.find((c) => c.label === "lnClass"));
    if (t === i.getAttribute("id") && n === i.getAttribute("desc") && r == i.getAttribute("lnClass"))
      return [];
    const a = le(i, { id: t, desc: n, lnClass: r }), s = [];
    s.push({ old: { element: i }, new: { element: a } });
    const o = i.getAttribute("id");
    return Array.from(
      i.ownerDocument.querySelectorAll(
        `LN0[lnType="${o}"], LN[lnType="${o}"]`
      )
    ).forEach((c) => {
      const l = c.cloneNode(!1);
      l.setAttribute("lnType", t), s.push({ old: { element: c }, new: { element: l } });
    }), [
      { title: u("lnodetype.action.edit", { oldId: o, newId: t }), actions: s }
    ];
  };
}
function Si(i, e) {
  const t = ne(e, "LNodeType", i);
  if (t)
    return [
      {
        title: u("lnodetype.wizard.title.edit"),
        element: t,
        primary: {
          icon: "",
          label: u("save"),
          action: Bs(t)
        },
        menuActions: [
          {
            label: u("remove"),
            icon: "delete",
            action: cn(t)
          },
          {
            label: u("scl.DO"),
            icon: "playlist_add",
            action: Ls(t)
          }
        ],
        content: [
          p`<wizard-textfield
          label="id"
          helper="${u("scl.id")}"
          .maybeValue=${t.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${P.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          p`<wizard-textfield
          label="desc"
          helper="${u("scl.desc")}"
          .maybeValue=${t.getAttribute("desc")}
          nullable
          pattern="${P.normalizedString}"
        ></wizard-textfield>`,
          p`<wizard-textfield
          label="lnClass"
          helper="${u("scl.lnClass")}"
          .maybeValue=${t.getAttribute("lnClass")}
          required
          pattern="${P.lnClass}"
        ></wizard-textfield>`,
          p`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = ln({
              identity: n.target.selected.value,
              doc: e
            });
            r && n.target.dispatchEvent(de(r));
          }}
          >
            ${Array.from(t.querySelectorAll("DO")).map(
            (n) => p`<mwc-list-item
                  twoline
                  tabindex="0"
                  value="${D(n)}"
                  ><span>${n.getAttribute("name")}</span
                  ><span slot="secondary"
                    >${"#" + n.getAttribute("type")}</span
                  ></mwc-list-item
                >`
          )}
          </mwc-list>
        `
        ]
      }
    ];
}
const qs = {
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
}, Gs = {
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
}, xi = { en: Gs, de: qs };
async function Us(i) {
  return Object.keys(xi).includes(i) ? xi[i] : {};
}
ir({ loader: Us, empty: (i) => i });
const pn = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", pn);
sr(pn);
var js = Object.defineProperty, un = (i, e, t, n) => {
  for (var r = void 0, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (r = s(e, t, r) || r);
  return r && js(e, t, r), r;
};
const Ke = fetch("public/xml/templates.scd").then((i) => i.text()).then((i) => new DOMParser().parseFromString(i, "application/xml")), Ws = fetch("public/xml/IEC_61850-7-4_2007B3.nsd").then((i) => i.text()).then((i) => new DOMParser().parseFromString(i, "application/xml")), Ks = fetch("public/xml/IEC_61850-7-420_2019A4.nsd").then((i) => i.text()).then((i) => new DOMParser().parseFromString(i, "application/xml"));
class mn extends Ae {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  async openCreateLNodeTypeWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        Hs(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Ke,
          await Ws,
          await Ks
        )
      )
    );
  }
  openLNodeTypeWizard(e) {
    Si(e, this.doc) && this.dispatchEvent(
      V(() => Si(e, this.doc))
    );
  }
  async openCreateDOTypeWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        Is(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Ke
        )
      )
    );
  }
  openDOTypeWizard(e) {
    vi(e, this.doc) && this.dispatchEvent(
      V(() => vi(e, this.doc))
    );
  }
  openDATypeWizard(e) {
    yi(e, this.doc) && this.dispatchEvent(
      V(() => yi(e, this.doc))
    );
  }
  async openCreateDATypeWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        ys(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Ke
        )
      )
    );
  }
  openEnumTypeWizard(e) {
    gi(e, this.doc) && this.dispatchEvent(
      V(() => gi(e, this.doc))
    );
  }
  async openCreateEnumWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        Qa(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Ke
        )
      )
    );
  }
  createDataTypeTemplates() {
    this.doc.querySelector(":root > DataTypeTemplates") || this.dispatchEvent(
      _e({
        new: {
          parent: this.doc.documentElement,
          element: K(this.doc, "DataTypeTemplates", {})
        }
      })
    );
  }
  render() {
    return this.doc?.querySelector(":root > DataTypeTemplates") ? p`
      <div id="containerTemplates">
        <section tabindex="0">
          <h1>
            ${u("scl.LNodeType")}
            <nav>
              <abbr title="${u("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateLNodeTypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="lnodetypelist"
            @action=${(e) => this.openLNodeTypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(
        ":root > DataTypeTemplates > LNodeType"
      ) ?? []
    ).map(
      (e) => p`<mwc-list-item
              twoline
              value="${D(e)}"
              tabindex="0"
              hasMeta
              ><span>${e.getAttribute("id")}</span
              ><span slot="secondary">${e.getAttribute(
        "lnClass"
      )}</span></span><span slot="meta"
                >${e.querySelectorAll("DO").length}</span
              ></mwc-list-item
            >`
    )}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${u("scl.DOType")}
            <nav>
              <abbr title="${u("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateDOTypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="dotypelist"
            @action=${(e) => this.openDOTypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(":root > DataTypeTemplates > DOType") ?? []
    ).map(
      (e) => p`<mwc-list-item
                  twoline
                  value="${D(e)}"
                  tabindex="0"
                  hasMeta
                  ><span>${e.getAttribute("id")}</span
                  ><span slot="secondary">${e.getAttribute(
        "cdc"
      )}</span></span><span slot="meta"
                    >${e.querySelectorAll("SDO, DA").length}</span
                  ></mwc-list-item
                >`
    )}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${u("scl.DAType")}
            <nav>
              <abbr title="${u("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateDATypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="datypelist"
            @action=${(e) => this.openDATypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(":root > DataTypeTemplates > DAType") ?? []
    ).map(
      (e) => p`<mwc-list-item
                  value="${D(e)}"
                  tabindex="0"
                  hasMeta
                  ><span>${e.getAttribute("id")}</span
                  ><span slot="meta"
                    >${e.querySelectorAll("BDA").length}</span
                  ></mwc-list-item
                >`
    )}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${u("scl.EnumType")}
            <nav>
              <abbr title="${u("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateEnumWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="enumtypelist"
            @action=${(e) => this.openEnumTypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(
        ":root > DataTypeTemplates > EnumType"
      ) ?? []
    ).map(
      (e) => p`<mwc-list-item
                  value="${D(e)}"
                  tabindex="0"
                  hasMeta
                  ><span>${e.getAttribute("id")}</span
                  ><span slot="meta"
                    >${e.querySelectorAll("EnumVal").length}</span
                  ></mwc-list-item
                >`
    )}
          </filtered-list>
        </section>
      </div>
    ` : p`<h1>
        <span style="color: var(--base1)">${u("templates.missing")}</span>
        <mwc-fab
          extended
          icon="add"
          label="${u("templates.add")}"
          @click=${() => this.createDataTypeTemplates()}
        ></mwc-fab>
      </h1>`;
  }
  static {
    this.styles = xe`
    ${Wa}

    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    :host {
      width: 100vw;
    }

    #containerTemplates {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #containerTemplates {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
  }
}
un([
  v({ attribute: !1 })
], mn.prototype, "doc");
un([
  v({ type: Number })
], mn.prototype, "editCount");
export {
  mn as default
};
