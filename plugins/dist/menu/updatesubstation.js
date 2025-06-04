import { Select as Ii } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Di } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import "@material/mwc-list";
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
const st = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Ri = (i, e, t = null, r = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    i.insertBefore(e, r), e = n;
  }
}, Se = (i, e, t = null) => {
  for (; e !== t; ) {
    const r = e.nextSibling;
    i.removeChild(e), e = r;
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
const U = `{{lit-${String(Math.random()).slice(2)}}}`, Gt = `<!--${U}-->`, at = new RegExp(`${U}|${Gt}`), oe = "$lit$";
class Bt {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const r = [], n = [], c = document.createTreeWalker(t.content, 133, null, !1);
    let s = 0, a = -1, o = 0;
    const { strings: p, values: { length: d } } = e;
    for (; o < d; ) {
      const l = c.nextNode();
      if (l === null) {
        c.currentNode = n.pop();
        continue;
      }
      if (a++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const f = l.attributes, { length: b } = f;
          let u = 0;
          for (let g = 0; g < b; g++)
            ot(f[g].name, oe) && u++;
          for (; u-- > 0; ) {
            const g = p[o], x = Fe.exec(g)[2], S = x.toLowerCase() + oe, A = l.getAttribute(S);
            l.removeAttribute(S);
            const D = A.split(at);
            this.parts.push({ type: "attribute", index: a, name: x, strings: D }), o += D.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (n.push(l), c.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const f = l.data;
        if (f.indexOf(U) >= 0) {
          const b = l.parentNode, u = f.split(at), g = u.length - 1;
          for (let x = 0; x < g; x++) {
            let S, A = u[x];
            if (A === "")
              S = H();
            else {
              const D = Fe.exec(A);
              D !== null && ot(D[2], oe) && (A = A.slice(0, D.index) + D[1] + D[2].slice(0, -oe.length) + D[3]), S = document.createTextNode(A);
            }
            b.insertBefore(S, l), this.parts.push({ type: "node", index: ++a });
          }
          u[g] === "" ? (b.insertBefore(H(), l), r.push(l)) : l.data = u[g], o += g;
        }
      } else if (l.nodeType === 8)
        if (l.data === U) {
          const f = l.parentNode;
          (l.previousSibling === null || a === s) && (a++, f.insertBefore(H(), l)), s = a, this.parts.push({ type: "node", index: a }), l.nextSibling === null ? l.data = "" : (r.push(l), a--), o++;
        } else {
          let f = -1;
          for (; (f = l.data.indexOf(U, f + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const l of r)
      l.parentNode.removeChild(l);
  }
}
const ot = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, Ht = (i) => i.index !== -1, H = () => document.createComment(""), Fe = (
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
const Qe = 133;
function Ut(i, e) {
  const { element: { content: t }, parts: r } = i, n = document.createTreeWalker(t, Qe, null, !1);
  let c = de(r), s = r[c], a = -1, o = 0;
  const p = [];
  let d = null;
  for (; n.nextNode(); ) {
    a++;
    const l = n.currentNode;
    for (l.previousSibling === d && (d = null), e.has(l) && (p.push(l), d === null && (d = l)), d !== null && o++; s !== void 0 && s.index === a; )
      s.index = d !== null ? -1 : s.index - o, c = de(r, c), s = r[c];
  }
  p.forEach((l) => l.parentNode.removeChild(l));
}
const Li = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, Qe, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, de = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const r = i[t];
    if (Ht(r))
      return t;
  }
  return -1;
};
function Ti(i, e, t = null) {
  const { element: { content: r }, parts: n } = i;
  if (t == null) {
    r.appendChild(e);
    return;
  }
  const c = document.createTreeWalker(r, Qe, null, !1);
  let s = de(n), a = 0, o = -1;
  for (; c.nextNode(); )
    for (o++, c.currentNode === t && (a = Li(e), t.parentNode.insertBefore(e, t)); s !== -1 && n[s].index === o; ) {
      if (a > 0) {
        for (; s !== -1; )
          n[s].index += a, s = de(n, s);
        return;
      }
      s = de(n, s);
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
const jt = /* @__PURE__ */ new WeakMap(), _e = (i) => (...e) => {
  const t = i(...e);
  return jt.set(t, !0), t;
}, pe = (i) => typeof i == "function" && jt.has(i);
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
const B = {}, dt = {};
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
class Me {
  constructor(e, t, r) {
    this.__parts = [], this.template = e, this.processor = t, this.options = r;
  }
  update(e) {
    let t = 0;
    for (const r of this.__parts)
      r !== void 0 && r.setValue(e[t]), t++;
    for (const r of this.__parts)
      r !== void 0 && r.commit();
  }
  _clone() {
    const e = st ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let c = 0, s = 0, a, o = n.nextNode();
    for (; c < r.length; ) {
      if (a = r[c], !Ht(a)) {
        this.__parts.push(void 0), c++;
        continue;
      }
      for (; s < a.index; )
        s++, o.nodeName === "TEMPLATE" && (t.push(o), n.currentNode = o.content), (o = n.nextNode()) === null && (n.currentNode = t.pop(), o = n.nextNode());
      if (a.type === "node") {
        const p = this.processor.handleTextExpression(this.options);
        p.insertAfterNode(o.previousSibling), this.__parts.push(p);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(o, a.name, a.strings, this.options));
      c++;
    }
    return st && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const lt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), Fi = ` ${U} `;
class Wt {
  constructor(e, t, r, n) {
    this.strings = e, this.values = t, this.type = r, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", r = !1;
    for (let n = 0; n < e; n++) {
      const c = this.strings[n], s = c.lastIndexOf("<!--");
      r = (s > -1 || r) && c.indexOf("-->", s + 1) === -1;
      const a = Fe.exec(c);
      a === null ? t += c + (r ? Fi : Gt) : t += c.substr(0, a.index) + a[1] + a[2] + oe + a[3] + U;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return lt !== void 0 && (t = lt.createHTML(t)), e.innerHTML = t, e;
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
const Ye = (i) => i === null || !(typeof i == "object" || typeof i == "function"), Ve = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class Xt {
  constructor(e, t, r) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new ne(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, r = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const c = r[0].value;
      if (typeof c == "symbol")
        return String(c);
      if (typeof c == "string" || !Ve(c))
        return c;
    }
    let n = "";
    for (let c = 0; c < t; c++) {
      n += e[c];
      const s = r[c];
      if (s !== void 0) {
        const a = s.value;
        if (Ye(a) || !Ve(a))
          n += typeof a == "string" ? a : String(a);
        else
          for (const o of a)
            n += typeof o == "string" ? o : String(o);
      }
    }
    return n += e[t], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class ne {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== B && (!Ye(e) || e !== this.value) && (this.value = e, pe(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; pe(this.value); ) {
      const e = this.value;
      this.value = B, e(this);
    }
    this.value !== B && this.committer.commit();
  }
}
class Y {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(H()), this.endNode = e.appendChild(H());
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
    e.__insert(this.startNode = H()), e.__insert(this.endNode = H());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = H()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; pe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = B, t(this);
    }
    const e = this.__pendingValue;
    e !== B && (Ye(e) ? e !== this.value && this.__commitText(e) : e instanceof Wt ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Ve(e) ? this.__commitIterable(e) : e === dt ? (this.value = dt, this.clear()) : this.__commitText(e));
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
    const r = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof Me && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new Me(t, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, n;
    for (const c of e)
      n = t[r], n === void 0 && (n = new Y(this.options), t.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(c), n.commit(), r++;
    r < t.length && (t.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    Se(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Mi {
  constructor(e, t, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; pe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = B, t(this);
    }
    if (this.__pendingValue === B)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = B;
  }
}
class Vi extends Xt {
  constructor(e, t, r) {
    super(e, t, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new et(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class et extends ne {
}
let Kt = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Kt = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class zi {
  constructor(e, t, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; pe(this.__pendingValue); ) {
      const c = this.__pendingValue;
      this.__pendingValue = B, c(this);
    }
    if (this.__pendingValue === B)
      return;
    const e = this.__pendingValue, t = this.value, r = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Oi(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = B;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Oi = (i) => i && (Kt ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
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
function qi(i) {
  let e = ue.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ue.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const r = i.strings.join(U);
  return t = e.keyString.get(r), t === void 0 && (t = new Bt(i, i.getTemplateElement()), e.keyString.set(r, t)), e.stringsArray.set(i.strings, t), t;
}
const ue = /* @__PURE__ */ new Map();
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
const re = /* @__PURE__ */ new WeakMap(), Gi = (i, e, t) => {
  let r = re.get(e);
  r === void 0 && (Se(e, e.firstChild), re.set(e, r = new Y(Object.assign({ templateFactory: qi }, t))), r.appendInto(e)), r.setValue(i), r.commit();
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
class Bi {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, r, n) {
    const c = t[0];
    return c === "." ? new Vi(e, t.slice(1), r).parts : c === "@" ? [new zi(e, t.slice(1), n.eventContext)] : c === "?" ? [new Mi(e, t.slice(1), r)] : new Xt(e, t, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Y(e);
  }
}
const Hi = new Bi();
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
const k = (i, ...e) => new Wt(i, e, "html", Hi);
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
const Zt = (i, e) => `${i}--${e}`;
let xe = !0;
typeof window.ShadyCSS > "u" ? xe = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), xe = !1);
const Ui = (i) => (e) => {
  const t = Zt(e.type, i);
  let r = ue.get(t);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ue.set(t, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const c = e.strings.join(U);
  if (n = r.keyString.get(c), n === void 0) {
    const s = e.getTemplateElement();
    xe && window.ShadyCSS.prepareTemplateDom(s, i), n = new Bt(e, s), r.keyString.set(c, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, ji = ["html", "svg"], Wi = (i) => {
  ji.forEach((e) => {
    const t = ue.get(Zt(e, i));
    t !== void 0 && t.keyString.forEach((r) => {
      const { element: { content: n } } = r, c = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((s) => {
        c.add(s);
      }), Ut(r, c);
    });
  });
}, Jt = /* @__PURE__ */ new Set(), Xi = (i, e, t) => {
  Jt.add(i);
  const r = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: c } = n;
  if (c === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, i);
    return;
  }
  const s = document.createElement("style");
  for (let p = 0; p < c; p++) {
    const d = n[p];
    d.parentNode.removeChild(d), s.textContent += d.textContent;
  }
  Wi(i);
  const a = r.content;
  t ? Ti(t, s, a.firstChild) : a.insertBefore(s, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, i);
  const o = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(s, a.firstChild);
    const p = /* @__PURE__ */ new Set();
    p.add(s), Ut(t, p);
  }
}, Ki = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = t.scopeName, n = re.has(e), c = xe && e.nodeType === 11 && !!e.host, s = c && !Jt.has(r), a = s ? document.createDocumentFragment() : e;
  if (Gi(i, a, Object.assign({ templateFactory: Ui(r) }, t)), s) {
    const o = re.get(a);
    re.delete(a);
    const p = o.value instanceof Me ? o.value.template : void 0;
    Xi(r, a, p), Se(e, e.firstChild), e.appendChild(a), re.set(e, o);
  }
  !n && c && window.ShadyCSS.styleElement(e.host);
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
var Qt;
window.JSCompiler_renameProperty = (i, e) => i;
const ze = {
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
}, Yt = (i, e) => e !== i && (e === e || i === i), Pe = {
  attribute: !0,
  type: String,
  converter: ze,
  reflect: !1,
  hasChanged: Yt
}, Ie = 1, pt = 4, ut = 8, ht = 16, Oe = "finalized";
class ei extends HTMLElement {
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
    return this._classProperties.forEach((t, r) => {
      const n = this._attributeNameForProperty(r, t);
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
      e !== void 0 && e.forEach((t, r) => this._classProperties.set(r, t));
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
  static createProperty(e, t = Pe) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const r = typeof e == "symbol" ? Symbol() : `__${e}`, n = this.getPropertyDescriptor(e, r, t);
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
  static getPropertyDescriptor(e, t, r) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(n) {
        const c = this[e];
        this[t] = n, this.requestUpdateInternal(e, c, r);
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
    return this._classProperties && this._classProperties.get(e) || Pe;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(Oe) || e.finalize(), this[Oe] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, r = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const n of r)
        this.createProperty(n, t[n]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, r = Yt) {
    return r(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const r = t.type, n = t.converter || ze, c = typeof n == "function" ? n : n.fromAttribute;
    return c ? c(e, r) : e;
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
    const r = t.type, n = t.converter;
    return (n && n.toAttribute || ze.toAttribute)(e, r);
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
        const r = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, r);
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
  attributeChangedCallback(e, t, r) {
    t !== r && this._attributeToProperty(e, r);
  }
  _propertyToAttribute(e, t, r = Pe) {
    const n = this.constructor, c = n._attributeNameForProperty(e, r);
    if (c !== void 0) {
      const s = n._propertyValueToAttribute(t, r);
      if (s === void 0)
        return;
      this._updateState = this._updateState | ut, s == null ? this.removeAttribute(c) : this.setAttribute(c, s), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & ut)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const c = r.getPropertyOptions(n);
      this._updateState = this._updateState | ht, this[n] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(t, c), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, r) {
    let n = !0;
    if (e !== void 0) {
      const c = this.constructor;
      r = r || c.getPropertyOptions(e), c._valueHasChanged(this[e], t, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), r.reflect === !0 && !(this._updateState & ht) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
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
    this._updateState = this._updateState | pt;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & pt;
  }
  get hasUpdated() {
    return this._updateState & Ie;
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
    } catch (r) {
      throw e = !1, this._markUpdated(), r;
    }
    e && (this._updateState & Ie || (this._updateState = this._updateState | Ie, this.firstUpdated(t)), this.updated(t));
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, r) => this._propertyToAttribute(r, this[r], t)), this._reflectingProperties = void 0), this._markUpdated();
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
Qt = Oe;
ei[Qt] = !0;
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
const Zi = (i, e) => (window.customElements.define(i, e), e), Ji = (i, e) => {
  const { kind: t, elements: r } = e;
  return {
    kind: t,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(i, n);
    }
  };
}, ee = (i) => (e) => typeof e == "function" ? Zi(i, e) : Ji(i, e), Qi = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, Yi = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function v(i) {
  return (e, t) => t !== void 0 ? Yi(i, e, t) : Qi(i, e);
}
function er(i) {
  return v({ attribute: !1, hasChanged: void 0 });
}
const $ = (i) => er();
function O(i, e) {
  return (t, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? ii(n, t, r) : ri(n, t);
  };
}
function ti(i) {
  return (e, t) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? ii(r, e, t) : ri(r, e);
  };
}
const ii = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, ri = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), tr = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), ir = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function rr(i) {
  return (e, t) => t !== void 0 ? ir(i, e, t) : tr(i, e);
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
const qe = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, tt = Symbol();
class it {
  constructor(e, t) {
    if (t !== tt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (qe ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const nr = (i) => new it(String(i), tt), cr = (i) => {
  if (i instanceof it)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, he = (i, ...e) => {
  const t = e.reduce((r, n, c) => r + cr(n) + i[c + 1], i[0]);
  return new it(t, tt);
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
const mt = {};
class te extends ei {
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
      const t = (c, s) => c.reduceRight((a, o) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(o) ? t(o, a) : (a.add(o), a)
      ), s), r = t(e, /* @__PURE__ */ new Set()), n = [];
      r.forEach((c) => n.unshift(c)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !qe) {
        const r = Array.prototype.slice.call(t.cssRules).reduce((n, c) => n + c.cssText, "");
        return nr(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : qe ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== mt && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return mt;
  }
}
te.finalized = !0;
te.render = Ki;
te.shadowRootOptions = { mode: "open" };
const sr = 1e3 * 60, ft = "langChanged";
function ar(i, e, t) {
  return Object.entries(Ge(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Ge(c))), i);
}
function or(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function Ge(i) {
  return typeof i == "function" ? i() : i;
}
const dr = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: or,
  interpolate: ar,
  translationCache: {}
});
let lr = dr();
function pr(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(ft, t, e), () => window.removeEventListener(ft, t);
}
function K(i, e, t = lr) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? Ge(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function ni(i) {
  return i instanceof Y ? i.startNode.isConnected : i instanceof ne ? i.committer.element.isConnected : i.element.isConnected;
}
function ur(i) {
  for (const [e] of i)
    ni(e) || i.delete(e);
}
function hr(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function mr(i, e) {
  setInterval(() => hr(() => ur(i)), e);
}
const ci = /* @__PURE__ */ new Map();
function fr() {
  pr((i) => {
    for (const [e, t] of ci)
      ni(e) && yr(e, t, i);
  });
}
fr();
mr(ci, sr);
function yr(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
var Be = function(i, e) {
  return Be = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Be(i, e);
};
function gr(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Be(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var le = function() {
  return le = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, le.apply(this, arguments);
};
function y(i, e, t, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(i, e, t, r);
  else for (var a = i.length - 1; a >= 0; a--) (s = i[a]) && (c = (n < 3 ? s(c) : n > 3 ? s(e, t, c) : s(e, t)) || c);
  return n > 3 && c && Object.defineProperty(e, t, c), c;
}
function fe(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], r = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && r >= i.length && (i = void 0), { value: i && i[r++], done: !i };
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
function br(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const si = () => {
}, vr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", si, vr);
document.removeEventListener("x", si);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ai extends te {
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
var xr = (
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
var kr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Sr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, yt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function _r(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, c = r + t.left, s = n + t.top, a, o;
  if (i.type === "touchstart") {
    var p = i;
    a = p.changedTouches[0].pageX - c, o = p.changedTouches[0].pageY - s;
  } else {
    var d = i;
    a = d.pageX - c, o = d.pageY - s;
  }
  return { x: a, y: o };
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
var gt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], bt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ye = [], wr = (
  /** @class */
  function(i) {
    gr(e, i);
    function e(t) {
      var r = i.call(this, le(le({}, e.defaultAdapter), t)) || this;
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
        return kr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yt;
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
      var t = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = e.cssClasses, c = n.ROOT, s = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(c), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, c = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(n), t.adapter.removeClass(c), t.removeCssVars();
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
      var r = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
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
      var r, n;
      if (t) {
        try {
          for (var c = fe(gt), s = c.next(); !s.done; s = c.next()) {
            var a = s.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            s && !s.done && (n = c.return) && n.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var r, n;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var c = fe(bt), s = c.next(); !s.done; s = c.next()) {
            var a = s.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            s && !s.done && (n = c.return) && n.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var n = fe(gt), c = n.next(); !c.done; c = n.next()) {
          var s = c.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = fe(bt), c = n.next(); !c.done; c = n.next()) {
          var s = c.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(c) {
        c.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[c], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var c = this.previousActivationEvent, s = c && t !== void 0 && c.type !== t.type;
          if (!s) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var a = t !== void 0 && ye.length > 0 && ye.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ye.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ye = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, a = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, p = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), b = f.startPoint, u = f.endPoint;
        d = b.x + "px, " + b.y + "px", l = u.x + "px, " + u.y + "px";
      }
      this.adapter.updateCssVariable(n, d), this.adapter.updateCssVariable(c, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, p);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, c;
      n ? c = _r(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, c = {
        x: c.x - this.initialSize / 2,
        y: c.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: c, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, c = n.hasDeactivationUXRun, s = n.isActivated, a = c || !s;
      a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, yt.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, r = this.activationState;
      if (r.isActivated) {
        var n = le({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(n), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var r = t.wasActivatedByPointer, n = t.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var c = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && c % 2 !== 0 ? this.initialSize = c - 1 : this.initialSize = c, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, n = t.VAR_LEFT, c = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(c, this.unboundedCoords.top + "px"));
    }, e;
  }(xr)
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
class Cr {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const r of t)
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
      this.classes.forEach((t) => e += t + " "), this.element.setAttribute("class", e);
    }
  }
}
const vt = /* @__PURE__ */ new WeakMap(), we = _e((i) => (e) => {
  if (!(e instanceof ne) || e instanceof et || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = vt.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), vt.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new Cr(r);
  n.forEach((s) => {
    s in i || (c.remove(s), n.delete(s));
  });
  for (const s in i) {
    const a = i[s];
    a != n.has(s) && (a ? (c.add(s), n.add(s)) : (c.remove(s), n.delete(s)));
  }
  typeof c.commit == "function" && c.commit();
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
const xt = /* @__PURE__ */ new WeakMap(), Ar = _e((i) => (e) => {
  if (!(e instanceof ne) || e instanceof et || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = xt.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), xt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in i || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in i)
    n.add(c), c.indexOf("-") === -1 ? r[c] = i[c] : r.setProperty(c, i[c]);
});
class I extends ai {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = wr;
  }
  get isActive() {
    return br(this.parentElement || this, ":active");
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
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), r = {
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
    return k`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${we(r)}"
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
y([
  O(".mdc-ripple-surface")
], I.prototype, "mdcRoot", void 0);
y([
  v({ type: Boolean })
], I.prototype, "primary", void 0);
y([
  v({ type: Boolean })
], I.prototype, "accent", void 0);
y([
  v({ type: Boolean })
], I.prototype, "unbounded", void 0);
y([
  v({ type: Boolean })
], I.prototype, "disabled", void 0);
y([
  v({ type: Boolean })
], I.prototype, "activated", void 0);
y([
  v({ type: Boolean })
], I.prototype, "selected", void 0);
y([
  v({ type: Boolean })
], I.prototype, "internalUseStateLayerCustomProperties", void 0);
y([
  $()
], I.prototype, "hovering", void 0);
y([
  $()
], I.prototype, "bgFocused", void 0);
y([
  $()
], I.prototype, "fgActivation", void 0);
y([
  $()
], I.prototype, "fgDeactivation", void 0);
y([
  $()
], I.prototype, "fgScale", void 0);
y([
  $()
], I.prototype, "fgSize", void 0);
y([
  $()
], I.prototype, "translateStart", void 0);
y([
  $()
], I.prototype, "translateEnd", void 0);
y([
  $()
], I.prototype, "leftPos", void 0);
y([
  $()
], I.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $r = he`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let He = class extends I {
};
He.styles = [$r];
He = y([
  ee("mwc-ripple")
], He);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const rt = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, c) => e.constructor._observers.set(c, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((c, s) => {
          const o = this.constructor._observers.get(s);
          o !== void 0 && o.call(this, this[s], c);
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
class oi {
  constructor(e) {
    this.startPress = (t) => {
      e().then((r) => {
        r && r.startPress(t);
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
class T extends te {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new oi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : k``, r = this.hasMeta ? this.renderMeta() : k``;
    return k`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? k`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? k`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return k`
      <span class="mdc-deprecated-list-item__graphic material-icons ${we(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return k`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return k`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return k`<slot></slot>`;
  }
  renderTwoline() {
    return k`
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
    const r = () => {
      window.removeEventListener(e, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, r), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(r);
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
y([
  O("slot")
], T.prototype, "slotElement", void 0);
y([
  ti("mwc-ripple")
], T.prototype, "ripple", void 0);
y([
  v({ type: String })
], T.prototype, "value", void 0);
y([
  v({ type: String, reflect: !0 })
], T.prototype, "group", void 0);
y([
  v({ type: Number, reflect: !0 })
], T.prototype, "tabindex", void 0);
y([
  v({ type: Boolean, reflect: !0 }),
  rt(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], T.prototype, "disabled", void 0);
y([
  v({ type: Boolean, reflect: !0 })
], T.prototype, "twoline", void 0);
y([
  v({ type: Boolean, reflect: !0 })
], T.prototype, "activated", void 0);
y([
  v({ type: String, reflect: !0 })
], T.prototype, "graphic", void 0);
y([
  v({ type: Boolean })
], T.prototype, "multipleGraphics", void 0);
y([
  v({ type: Boolean })
], T.prototype, "hasMeta", void 0);
y([
  v({ type: Boolean, reflect: !0 }),
  rt(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], T.prototype, "noninteractive", void 0);
y([
  v({ type: Boolean, reflect: !0 }),
  rt(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], T.prototype, "selected", void 0);
y([
  $()
], T.prototype, "shouldRenderRipple", void 0);
y([
  $()
], T.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const di = he`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ue = class extends T {
};
Ue.styles = [di];
Ue = y([
  ee("mwc-list-item")
], Ue);
var Nr = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, G = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Er(e, t) : e, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && Nr(e, t, n), n;
};
let z = class extends Di {
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(K("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? k`<div style="position:relative;">
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
      </div>` : k``;
  }
  renderMulplierList() {
    return k`${this.multipliers.map(
      (i) => k`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? K("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? k`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : k``;
  }
  render() {
    return k`
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
G([
  v({ type: Boolean })
], z.prototype, "nullable", 2);
G([
  v({ type: Array })
], z.prototype, "multipliers", 2);
G([
  v({ type: String })
], z.prototype, "multiplier", 1);
G([
  v({ type: String })
], z.prototype, "unit", 2);
G([
  $()
], z.prototype, "null", 1);
G([
  v({ type: String })
], z.prototype, "maybeValue", 1);
G([
  v({ type: String })
], z.prototype, "defaultValue", 2);
G([
  v({ type: Array })
], z.prototype, "reservedValues", 2);
G([
  O("mwc-switch")
], z.prototype, "nullSwitch", 2);
G([
  O("mwc-menu")
], z.prototype, "multiplierMenu", 2);
G([
  O("mwc-icon-button")
], z.prototype, "multiplierButton", 2);
z = G([
  ee("wizard-textfield")
], z);
var Pr = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, ie = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ir(e, t) : e, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && Pr(e, t, n), n;
};
let Z = class extends Ii {
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
    return this.nullable ? k`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : k``;
  }
  render() {
    return k`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ie([
  v({ type: Boolean })
], Z.prototype, "nullable", 2);
ie([
  $()
], Z.prototype, "null", 1);
ie([
  v({ type: String })
], Z.prototype, "maybeValue", 1);
ie([
  v({ type: String })
], Z.prototype, "defaultValue", 2);
ie([
  v({ type: Array })
], Z.prototype, "reservedValues", 2);
ie([
  O("mwc-switch")
], Z.prototype, "nullSwitch", 2);
Z = ie([
  ee("wizard-select")
], Z);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Dr(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const a = `__${e}`;
    if (t = r.getPropertyDescriptor(e, a), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let c = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(a) {
      c === "" && (c = r.getPropertyOptions(e).attribute), this.hasAttribute(c) && this.removeAttribute(c), n.set.call(this, a);
    }
  };
  return n.get && (s.get = function() {
    return n.get.call(this);
  }), s;
}
function nt(i, e, t) {
  if (e !== void 0)
    return Dr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class li extends ai {
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
li.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const De = /* @__PURE__ */ new WeakMap(), ae = _e((i) => (e) => {
  const t = De.get(e);
  if (i === void 0 && e instanceof ne) {
    if (t !== void 0 || !De.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  De.set(e, i);
});
class L extends li {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new oi(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || r !== void 0 || n !== void 0) {
      const c = this.calculateAnimationStateName(!!r, !!t, !!n), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${c}-${s}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, r) {
    return r ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? k`<mwc-ripple
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
    }, r = this.indeterminate ? "mixed" : void 0;
    return k`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${we(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ae(this.name)}"
              aria-checked="${ae(r)}"
              aria-label="${ae(this.ariaLabel)}"
              aria-labelledby="${ae(this.ariaLabelledBy)}"
              aria-describedby="${ae(this.ariaDescribedBy)}"
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
y([
  O(".mdc-checkbox")
], L.prototype, "mdcRoot", void 0);
y([
  O("input")
], L.prototype, "formElement", void 0);
y([
  v({ type: Boolean, reflect: !0 })
], L.prototype, "checked", void 0);
y([
  v({ type: Boolean })
], L.prototype, "indeterminate", void 0);
y([
  v({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", void 0);
y([
  v({ type: String, reflect: !0 })
], L.prototype, "name", void 0);
y([
  v({ type: String })
], L.prototype, "value", void 0);
y([
  nt,
  v({ type: String, attribute: "aria-label" })
], L.prototype, "ariaLabel", void 0);
y([
  nt,
  v({ type: String, attribute: "aria-labelledby" })
], L.prototype, "ariaLabelledBy", void 0);
y([
  nt,
  v({ type: String, attribute: "aria-describedby" })
], L.prototype, "ariaDescribedBy", void 0);
y([
  v({ type: Boolean })
], L.prototype, "reducedTouchTarget", void 0);
y([
  $()
], L.prototype, "animationClass", void 0);
y([
  $()
], L.prototype, "shouldRenderRipple", void 0);
y([
  $()
], L.prototype, "focused", void 0);
y([
  $()
], L.prototype, "useStateLayerCustomProperties", void 0);
y([
  ti("mwc-ripple")
], L.prototype, "ripple", void 0);
y([
  rr({ passive: !0 })
], L.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Rr = he`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let je = class extends L {
};
je.styles = [Rr];
je = y([
  ee("mwc-checkbox")
], je);
var Lr = Object.defineProperty, Tr = Object.getOwnPropertyDescriptor, q = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Tr(e, t) : e, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && Lr(e, t, n), n;
};
let V = class extends te {
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
    return this.nullable ? k`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : k``;
  }
  render() {
    return k`
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
q([
  v({ type: String })
], V.prototype, "label", 2);
q([
  v({ type: String })
], V.prototype, "helper", 2);
q([
  v({ type: Boolean })
], V.prototype, "nullable", 2);
q([
  v({ type: Boolean })
], V.prototype, "defaultChecked", 2);
q([
  v({ type: String })
], V.prototype, "maybeValue", 1);
q([
  v({ type: Boolean })
], V.prototype, "disabled", 2);
q([
  $()
], V.prototype, "null", 1);
q([
  $()
], V.prototype, "checked", 1);
q([
  $()
], V.prototype, "deactivateCheckbox", 2);
q([
  $()
], V.prototype, "formfieldLabel", 1);
q([
  O("mwc-switch")
], V.prototype, "nullSwitch", 2);
q([
  O("mwc-checkbox")
], V.prototype, "checkbox", 2);
V = q([
  ee("wizard-checkbox")
], V);
function Fr(i) {
  return typeof i == "function";
}
function We(i, e) {
  if (!i)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = Fr(i) ? i : () => i;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
function M(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const E = ":not(*)";
function Mr(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function Vr(i, e) {
  const [t, r] = e.split("	");
  return !t || !r ? E : `${i}[version="${t}"][revision="${r}"]`;
}
function kt(i) {
  return C(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function St(i, e) {
  const [t, r] = M(e), n = P[i].parents.flatMap(
    (c) => F(c, t).split(",")
  );
  return R(
    n,
    [">"],
    [`${i}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function zr(i) {
  const [e, t, r, n, c, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((a) => i.getAttribute(a));
  return e === "None" ? `${C(i.parentElement)}>(${n} ${s} ${c})` : `${e} ${t || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function Or(i, e) {
  if (e.endsWith(")")) {
    const [f, b] = M(e), [u, g, x] = b.substring(1, b.length - 1).split(" ");
    if (!u || !g) return E;
    const S = P[i].parents.flatMap(
      (A) => F(A, f).split(",")
    );
    return R(
      S,
      [">"],
      [`${i}[iedName="None"][lnClass="${u}"][lnType="${g}"][lnInst="${x}"]`]
    ).map((A) => A.join("")).join(",");
  }
  const [t, r, n, c, s] = e.split(/[ /]/);
  if (!t || !r || !c) return E;
  const [
    a,
    o,
    p,
    d,
    l
  ] = [
    [`[iedName="${t}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return R(
    [i],
    a,
    o,
    p,
    d,
    l
  ).map((f) => f.join("")).join(",");
}
function qr(i) {
  return `${C(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function Gr(i, e) {
  const [t, r] = M(e), [n, c] = r.split(" ");
  return `${F(
    "IED",
    t
  )}>${i}[iedName="${n}"][apName="${c}"]`;
}
function Br(i) {
  return `${C(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function Hr(i, e) {
  const [t, r] = M(e);
  return r ? `${F(
    "Server",
    t
  )}>${i}[associationID="${r}"]` : E;
}
function Ur(i) {
  return `${C(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function jr(i, e) {
  const [t, r] = e.split(">>");
  return r ? `IED[name="${t}"] ${i}[inst="${r}"]` : E;
}
function Wr(i) {
  const e = i.textContent, [t, r, n, c, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => i.getAttribute(a));
  return `${C(i.parentElement)}>${e} ${t || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${s ?? ""}`;
}
function Xr(i, e) {
  const [t, r] = M(e), [n, c, s, a, o, p] = r.split(/[ /]/), [
    d,
    l,
    f,
    b,
    u,
    g
  ] = [
    P[i].parents.flatMap(
      (x) => F(x, t).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return R(
    d,
    [">"],
    [i],
    l,
    f,
    b,
    u,
    g
  ).map((x) => x.join("")).join(",");
}
function Kr(i) {
  const [e, t, r, n, c, s, a, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((d) => i.getAttribute(d)), p = `${e}/${t ?? ""} ${r} ${n ?? ""}.${c} ${s || ""}`;
  return `${C(i.parentElement)}>${p} (${a}${o ? " [" + o + "]" : ""})`;
}
function Zr(i, e) {
  const [t, r] = M(e), [n, c, s, a] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), p = o && o[1] ? o[1] : "", d = o && o[2] ? o[2] : "", l = r.match(/\(([A-Z]{2})/), f = r.match(/ \[([0-9]{1,2})\]/), b = l && l[1] ? l[1] : "", u = f && f[1] ? f[1] : "", [
    g,
    x,
    S,
    A,
    D,
    Ae,
    $e,
    Ne,
    Ee
  ] = [
    P[i].parents.flatMap(
      (ce) => F(ce, t).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${p}"]`],
    d ? [`[daName="${d}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${b}"]`],
    u ? [`[ix="${u}"]`] : [":not([ix])", '[ix=""]']
  ];
  return R(
    g,
    [">"],
    [i],
    x,
    S,
    A,
    D,
    Ae,
    $e,
    Ne,
    Ee
  ).map((ce) => ce.join("")).join(",");
}
function Jr(i) {
  if (!i.parentElement) return NaN;
  const e = C(i.parentElement), t = i.getAttribute("iedName"), r = i.getAttribute("intAddr"), n = Array.from(
    i.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(i);
  if (r) return `${e}>${r}[${n}]`;
  const [
    c,
    s,
    a,
    o,
    p,
    d,
    l,
    f,
    b,
    u,
    g,
    x
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
  ].map((D) => i.getAttribute(D)), S = x ? `${l}:${x} ${f ?? ""}/${b ?? ""} ${u ?? ""} ${g ?? ""}` : "", A = `${t} ${c}/${s ?? ""} ${a} ${o ?? ""} ${p} ${d || ""}`;
  return `${e}>${S ? S + " " : ""}${A}${r ? `@${r}` : ""}`;
}
function Qr(i, e) {
  const [t, r] = M(e), n = P[i].parents.flatMap(
    (se) => F(se, t).split(",")
  );
  if (r.endsWith("]")) {
    const [se] = r.split("["), Ei = [`[intAddr="${se}"]`];
    return R(n, [">"], [i], Ei).map((Pi) => Pi.join("")).join(",");
  }
  let c, s, a, o, p, d, l, f, b, u, g, x, S, A;
  !r.includes(":") && !r.includes("@") ? [c, s, a, o, p, d, l] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    f,
    b,
    u,
    g,
    x,
    S,
    c,
    s,
    a,
    o,
    p,
    d,
    l
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, s, a, o, p, d, l, A] = r.split(/[ /@]/) : [
    f,
    b,
    u,
    g,
    x,
    S,
    c,
    s,
    a,
    o,
    p,
    d,
    l,
    A
  ] = r.split(/[ /:@]/);
  const [
    D,
    Ae,
    $e,
    Ne,
    Ee,
    ce,
    ki,
    Si,
    _i,
    wi,
    Ci,
    Ai,
    $i,
    Ni
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]'],
    d ? [`[doName="${d}"]`] : [":not([doName])"],
    l ? [`[daName="${l}"]`] : [":not([daName])", '[daName=""]'],
    f ? [`[serviceType="${f}"]`] : [":not([serviceType])", '[serviceType=""]'],
    b ? [`[srcCBName="${b}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    u ? [`[srcLDInst="${u}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    g ? [`[srcPrefix="${g}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    x ? [`[srcLNClass="${x}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    S ? [`[srcLNInst="${S}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    A ? [`[intAddr="${A}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return R(
    n,
    [">"],
    [i],
    D,
    Ae,
    $e,
    Ne,
    Ee,
    ce,
    ki,
    Si,
    _i,
    wi,
    Ci,
    Ai,
    $i,
    Ni
  ).map((se) => se.join("")).join(",");
}
function Yr(i) {
  const [e, t, r] = ["prefix", "lnClass", "inst"].map(
    (n) => i.getAttribute(n)
  );
  return `${C(i.parentElement)}>${e ?? ""} ${t} ${r}`;
}
function en(i, e) {
  const [t, r] = M(e), n = P[i].parents.flatMap(
    (l) => F(l, t).split(",")
  ), [c, s, a] = r.split(" ");
  if (!s) return E;
  const [o, p, d] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${a}"]`]
  ];
  return R(
    n,
    [">"],
    [i],
    o,
    p,
    d
  ).map((l) => l.join("")).join(",");
}
function tn(i) {
  const [e, t, r, n, c, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => i.getAttribute(a));
  return `${C(i.parentElement)}>${t} ${e || ""} ${r}/${n ?? ""} ${c} ${s}`;
}
function rn(i, e) {
  const [t, r] = M(e), n = P[i].parents.flatMap(
    (S) => F(S, t).split(",")
  ), [c, s, a, o, p, d] = r.split(/[ /]/), [
    l,
    f,
    b,
    u,
    g,
    x
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return R(
    n,
    [">"],
    [i],
    l,
    f,
    b,
    u,
    g,
    x
  ).map((S) => S.join("")).join(",");
}
function _t(i) {
  const [e, t] = ["name", "ix"].map((r) => i.getAttribute(r));
  return `${C(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function Xe(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = M(e), [c, s, a, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return E;
  if (t === 0) return `${i}[name="${s}"]`;
  const p = P[i].parents.flatMap(
    (f) => f === "SDI" ? Xe(f, r, t - 1).split(",") : F(f, r).split(",")
  ).filter((f) => !f.startsWith(E));
  if (p.length === 0) return E;
  const [d, l] = [
    [`[name="${s}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return R(
    p,
    [">"],
    [i],
    d,
    l
  ).map((f) => f.join("")).join(",");
}
function nn(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(i));
  return `${C(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function cn(i, e) {
  const [t, r] = M(e), [n, c] = r.split(" "), s = parseFloat(c), a = P[i].parents.flatMap(
    (d) => F(d, t).split(",")
  ), [o, p] = [
    n ? [`[sGroup="${n}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return R(
    a,
    [">"],
    [i],
    o,
    p
  ).map((d) => d.join("")).join(",");
}
function sn(i) {
  const [e, t] = ["iedName", "apName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function an(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? E : `${i}[iedName="${t}"][apName="${r}"]`;
}
function wt(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function Ct(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? E : `${i}[ldInst="${t}"][cbName="${r}"]`;
}
function on(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${C(i.parentElement)}>${e}`;
}
function dn(i, e) {
  const [t, r] = M(e), [n, c] = [
    P[i].parents.flatMap(
      (s) => F(s, t).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return R(n, [">"], [i], c).map((s) => s.join("")).join(",");
}
function ln(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${C(i.parentElement)}>${t}`;
  const r = Array.from(i.parentElement.children).filter((n) => n.getAttribute("type") === t).findIndex((n) => n.isSameNode(i));
  return `${C(i.parentElement)}>${t} [${r}]`;
}
function pn(i, e) {
  const [t, r] = M(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [s, a, o] = [
    P[i].parents.flatMap(
      (p) => F(p, t).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return R(
    s,
    [">"],
    [i],
    a,
    o
  ).map((p) => p.join("")).join(",");
}
function un(i) {
  return `${C(i.parentElement)}>${i.getAttribute("ord")}`;
}
function hn(i, e) {
  const [t, r] = M(e);
  return `${F("EnumType", t)}>${i}[ord="${r}"]`;
}
function mn(i) {
  return `${C(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function fn(i, e) {
  const [t, r] = M(e), [n, c] = r.split("	"), [s] = [
    P[i].parents.flatMap(
      (a) => F(a, t).split(",")
    )
  ];
  return R(
    s,
    [">"],
    [i],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((a) => a.join("")).join(",");
}
function yn() {
  return "";
}
function gn() {
  return ":root";
}
function w(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${C(i.parentElement)}>${i.getAttribute("name")}`;
}
function _(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = M(e);
  if (!n) return E;
  if (t === 0) return `${i}[name="${n}"]`;
  const c = P[i].parents;
  if (!c) return E;
  const s = c.flatMap(
    (a) => P[a].selector === P.Substation.selector ? _(a, r, t - 1).split(",") : F(a, r).split(",")
  ).filter((a) => !a.startsWith(E));
  return s.length === 0 ? E : R(s, [">"], [i], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function h(i) {
  return C(i.parentElement).toString();
}
function m(i, e) {
  const t = P[i].parents;
  if (!t) return E;
  const r = t.flatMap((n) => F(n, e).split(",")).filter((n) => !n.startsWith(E));
  return r.length === 0 ? E : R(r, [">"], [i]).map((n) => n.join("")).join(",");
}
function ge(i) {
  return `#${i.id}`;
}
function be(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : E;
}
const pi = [
  "TransformerWinding",
  "ConductingEquipment"
], ui = [
  "GeneralEquipment",
  "PowerTransformer",
  ...pi
], Ke = ["Substation", "VoltageLevel", "Bay"], hi = ["Process", "Line"], mi = ["EqSubFunction", "EqFunction"], bn = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...ui,
  ...Ke,
  ...hi,
  ...mi
], fi = ["ConnectivityNode", ...bn], vn = ["GOOSESecurity", "SMVSecurity"], xn = ["SubNetwork", ...vn, ...fi], kn = ["BDA", "DA"], Sn = ["SampledValueControl", "GSEControl"], _n = ["LogControl", "ReportControl"], wn = [...Sn, ..._n], Cn = ["GSE", "SMV"], An = [
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
  ...wn,
  ...Cn,
  ...kn
], Q = ["LN0", "LN"], $n = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Nn = ["Subject", "IssuerName"], En = ["MinTime", "MaxTime"], Pn = ["LNodeType", "DOType", "DAType", "EnumType"], In = [
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
], Dn = ["DynDataSet", "ConfDataSet"], Rn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Dn
], Ln = ["ConfLogControl", "ConfSigRef"], Tn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Fn = ["SCL", ...xn, ...An, ...Pn], yi = [
  ...Fn,
  ...$n,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Nn,
  ...En,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Q,
  ...In,
  "DynAssociation",
  "SettingGroups",
  ...Rn,
  ...Ln,
  ...Tn,
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
], Mn = new Set(yi);
function ct(i) {
  return Mn.has(i);
}
const Ce = ["Text", "Private"], j = [...Ce], N = [...Ce], ve = [...Ce], At = [...N, "Val"], gi = [...j, "LNode"], X = [...gi], Ze = [...X], Re = [
  ...X,
  "PowerTransformer",
  "GeneralEquipment"
], $t = [
  ...Ze,
  "Terminal"
], Nt = [...N, "Address"], bi = [...j], Et = [...bi, "IEDName"], Pt = [
  ...N,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], It = [
  ...X,
  "GeneralEquipment",
  "Function"
], Dt = [...bi, "TrgOps"], Rt = [
  ...X,
  "GeneralEquipment",
  "EqSubFunction"
], P = {
  AccessControl: {
    identity: h,
    selector: m,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: w,
    selector: _,
    parents: ["IED"],
    children: [
      ...j,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: h,
    selector: m,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Br,
    selector: Hr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: h,
    selector: m,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: w,
    selector: _,
    parents: ["DAType"],
    children: [...At]
  },
  BitRate: {
    identity: h,
    selector: m,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: w,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...Re,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: tn,
    selector: rn,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: h,
    selector: m,
    parents: ["SCL"],
    children: [...N, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: w,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...$t,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: h,
    selector: m,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: sn,
    selector: an,
    parents: ["SubNetwork"],
    children: [...N, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: w,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...gi]
  },
  DA: {
    identity: w,
    selector: _,
    parents: ["DOType"],
    children: [...At]
  },
  DAI: {
    identity: _t,
    selector: Xe,
    parents: ["DOI", "SDI"],
    children: [...N, "Val"]
  },
  DAType: {
    identity: ge,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ve, "BDA", "ProtNs"]
  },
  DO: {
    identity: w,
    selector: _,
    parents: ["LNodeType"],
    children: [...N]
  },
  DOI: {
    identity: w,
    selector: _,
    parents: [...Q],
    children: [...N, "SDI", "DAI"]
  },
  DOType: {
    identity: ge,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ve, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: w,
    selector: _,
    parents: [...Q],
    children: [...j, "FCDA"]
  },
  DataSetDirectory: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: h,
    selector: m,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: ge,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ve, "EnumVal"]
  },
  EnumVal: {
    identity: un,
    selector: hn,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: w,
    selector: _,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Rt]
  },
  EqSubFunction: {
    identity: w,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Rt]
  },
  ExtRef: {
    identity: Jr,
    selector: Qr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Kr,
    selector: Zr,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: w,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...X,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: w,
    selector: _,
    parents: [
      "SubFunction",
      "Function",
      ...hi,
      ...mi,
      ...Ke
    ],
    children: [...Ze, "EqFunction"]
  },
  GetCBValues: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: w,
    selector: _,
    parents: ["AccessPoint"],
    children: [...j, "Subject", "IssuerName"]
  },
  GSE: {
    identity: wt,
    selector: Ct,
    parents: ["ConnectedAP"],
    children: [...Nt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: w,
    selector: _,
    parents: ["LN0"],
    children: [...Et, "Protocol"]
  },
  GSESettings: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: h,
    selector: m,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: h,
    selector: m,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Mr,
    selector: Vr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: w,
    selector: _,
    parents: ["SCL"],
    children: [...N, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Wr,
    selector: Xr,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: h,
    selector: m,
    parents: [...Q],
    children: [...N, "ExtRef"]
  },
  IssuerName: {
    identity: h,
    selector: m,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: qr,
    selector: Gr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Ur,
    selector: jr,
    parents: ["Server"],
    children: [...N, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Yr,
    selector: en,
    parents: ["AccessPoint", "LDevice"],
    children: [...Pt]
  },
  LN0: {
    identity: h,
    selector: m,
    parents: ["LDevice"],
    children: [
      ...Pt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: zr,
    selector: Or,
    parents: [...fi],
    children: [...N]
  },
  LNodeType: {
    identity: ge,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ve, "DO"]
  },
  Line: {
    identity: w,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...It,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: w,
    selector: _,
    parents: [...Q],
    children: [...N]
  },
  LogControl: {
    identity: w,
    selector: _,
    parents: [...Q],
    children: [...Dt]
  },
  LogSettings: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: h,
    selector: m,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: h,
    selector: m,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: h,
    selector: m,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: kt,
    selector: St,
    parents: ["TransformerWinding"],
    children: [...N]
  },
  OptFields: {
    identity: h,
    selector: m,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ln,
    selector: pn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: on,
    selector: dn,
    parents: ["ConnectedAP"],
    children: [...N, "P"]
  },
  PowerTransformer: {
    identity: w,
    selector: _,
    parents: [...Ke],
    children: [
      ...Ze,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => E,
    parents: [],
    children: []
  },
  Process: {
    identity: w,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...It,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: mn,
    selector: fn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: h,
    selector: m,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: w,
    selector: _,
    parents: [...Q],
    children: [...Dt, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: h,
    selector: m,
    parents: ["ReportControl"],
    children: [...N, "ClientLN"]
  },
  SamplesPerSec: {
    identity: h,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: w,
    selector: _,
    parents: ["LN0"],
    children: [...Et, "SmvOpts"]
  },
  SecPerSamples: {
    identity: h,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: yn,
    selector: gn,
    parents: [],
    children: [
      ...Ce,
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
    identity: _t,
    selector: Xe,
    parents: ["DOI", "SDI"],
    children: [...N, "SDI", "DAI"]
  },
  SDO: {
    identity: w,
    selector: _,
    parents: ["DOType"],
    children: [...j]
  },
  Server: {
    identity: h,
    selector: m,
    parents: ["AccessPoint"],
    children: [
      ...N,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: h,
    selector: m,
    parents: ["AccessPoint"],
    children: [...N]
  },
  Services: {
    identity: h,
    selector: m,
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
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: h,
    selector: m,
    parents: ["LN0"],
    children: [...N]
  },
  SettingGroups: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: h,
    selector: m,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: h,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: wt,
    selector: Ct,
    parents: ["ConnectedAP"],
    children: [...Nt]
  },
  SmvOpts: {
    identity: h,
    selector: m,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: w,
    selector: _,
    parents: ["AccessPoint"],
    children: [...j, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: w,
    selector: _,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...pi
    ],
    children: [...X, "EqFunction"]
  },
  SubFunction: {
    identity: w,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...X,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: w,
    selector: _,
    parents: ["Communication"],
    children: [...j, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: h,
    selector: m,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: w,
    selector: _,
    parents: ["SCL"],
    children: [...Re, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: w,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...X, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: kt,
    selector: St,
    parents: [...ui],
    children: [...N]
  },
  Text: {
    identity: h,
    selector: m,
    parents: yi.filter((i) => i !== "Text" && i !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: h,
    selector: m,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: w,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...$t,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: h,
    selector: m,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: nn,
    selector: cn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: h,
    selector: m,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: w,
    selector: _,
    parents: ["Substation"],
    children: [...Re, "Voltage", "Bay", "Function"]
  }
};
function F(i, e) {
  return typeof e != "string" ? E : ct(i) ? P[i].selector(i, e) : i;
}
function Lt(i, e, t) {
  if (typeof t != "string" || !ct(e)) return null;
  const r = i.querySelector(P[e].selector(e, t));
  return r === null || Tt(r) ? r : Array.from(
    i.querySelectorAll(P[e].selector(e, t))
  ).find(Tt) ?? null;
}
function C(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return ct(e) ? P[e].identity(i) : NaN;
}
function vi(i, e) {
  return i.tagName === "Private" ? vi(i.parentElement, e.parentElement) && i.isEqualNode(e) : i.tagName === e.tagName && C(i) === C(e);
}
function ke(i, e) {
  if (i.closest("Private") || e.closest("Private")) return i.isEqualNode(e);
  const t = new Set(
    i.getAttributeNames().concat(e.getAttributeNames())
  );
  for (const c of t)
    if (i.getAttribute(c) !== e.getAttribute(c)) return !1;
  if (i.childElementCount === 0)
    return e.childElementCount === 0 && i.textContent?.trim() === e.textContent?.trim();
  const r = Array.from(i.children), n = Array.from(e.children);
  for (const c of r) {
    const s = n.findIndex((a) => ke(c, a));
    if (s === -1) return !1;
    n.splice(s, 1);
  }
  for (const c of n)
    if (!r.find((s) => ke(c, s))) return !1;
  return !0;
}
function R(...i) {
  return i.reduce(
    (e, t) => e.flatMap((r) => t.map((n) => [r, n].flat())),
    [[]]
  );
}
function Tt(i) {
  return !i.closest("Private");
}
const Vn = 99;
Array(Vn).fill(1).map((i, e) => `${e + 1}`);
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
const Ft = (i, e) => {
  const t = i.startNode.parentNode, r = e === void 0 ? i.endNode : e.startNode, n = t.insertBefore(H(), r);
  t.insertBefore(H(), r);
  const c = new Y(i.options);
  return c.insertAfterNode(n), c;
}, J = (i, e) => (i.setValue(e), i.commit(), i), Le = (i, e, t) => {
  const r = i.startNode.parentNode, n = t ? t.startNode : i.endNode, c = e.endNode.nextSibling;
  c !== n && Ri(r, e.startNode, c, n);
}, Te = (i) => {
  Se(i.startNode.parentNode, i.startNode, i.endNode.nextSibling);
}, Mt = (i, e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= t; n++)
    r.set(i[n], n);
  return r;
}, Vt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Ot = _e((i, e, t) => {
  let r;
  return t === void 0 ? t = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof Y))
      throw new Error("repeat can only be used in text bindings");
    const c = Vt.get(n) || [], s = zt.get(n) || [], a = [], o = [], p = [];
    let d = 0;
    for (const S of i)
      p[d] = r ? r(S, d) : d, o[d] = t(S, d), d++;
    let l, f, b = 0, u = c.length - 1, g = 0, x = o.length - 1;
    for (; b <= u && g <= x; )
      if (c[b] === null)
        b++;
      else if (c[u] === null)
        u--;
      else if (s[b] === p[g])
        a[g] = J(c[b], o[g]), b++, g++;
      else if (s[u] === p[x])
        a[x] = J(c[u], o[x]), u--, x--;
      else if (s[b] === p[x])
        a[x] = J(c[b], o[x]), Le(n, c[b], a[x + 1]), b++, x--;
      else if (s[u] === p[g])
        a[g] = J(c[u], o[g]), Le(n, c[u], c[b]), u--, g++;
      else if (l === void 0 && (l = Mt(p, g, x), f = Mt(s, b, u)), !l.has(s[b]))
        Te(c[b]), b++;
      else if (!l.has(s[u]))
        Te(c[u]), u--;
      else {
        const S = f.get(p[g]), A = S !== void 0 ? c[S] : null;
        if (A === null) {
          const D = Ft(n, c[b]);
          J(D, o[g]), a[g] = D;
        } else
          a[g] = J(A, o[g]), Le(n, A, c[b]), c[S] = null;
        g++;
      }
    for (; g <= x; ) {
      const S = Ft(n, a[x + 1]);
      J(S, o[g]), a[g++] = S;
    }
    for (; b <= u; ) {
      const S = c[b++];
      S !== null && Te(S);
    }
    Vt.set(n, a), zt.set(n, p);
  };
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class me extends T {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : k``, n = this.hasMeta && this.left ? this.renderMeta() : k``, c = this.renderRipple();
    return k`
      ${c}
      ${r}
      ${this.left ? "" : t}
      <span class=${we(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ""}
      ${n}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
y([
  O("slot")
], me.prototype, "slotElement", void 0);
y([
  O("mwc-checkbox")
], me.prototype, "checkboxElement", void 0);
y([
  v({ type: Boolean })
], me.prototype, "left", void 0);
y([
  v({ type: String, reflect: !0 })
], me.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const zn = he`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Je = class extends me {
};
Je.styles = [di, zn];
Je = y([
  ee("mwc-check-list-item")
], Je);
function W(i) {
  const e = C(i);
  return typeof e == "string" ? e.replace(/^>/, "") : K("unidentifiable");
}
function On(i, e, t, r, n) {
  return (c, s) => {
    const a = [], o = s.shadowRoot.querySelector("mwc-list"), p = o.selected.filter((u) => u.classList.contains("attr")).map((u) => i[u.value]), d = t.cloneNode(!1), l = p.length ? d : t;
    if (p.length) {
      t.childElementCount === 0 && (d.textContent = t.textContent);
      for (const [u, g] of p)
        u === "value" ? d.textContent = g.theirs : g.theirs === null ? d.removeAttribute(u) : d.setAttribute(u, g.theirs);
      a.push({ old: { element: t }, new: { element: d } });
    }
    let f = !1;
    const b = o.selected.filter((u) => u.classList.contains("child")).map((u) => e[u.value]);
    if (b.length)
      for (const u of b)
        u.ours ? u.theirs ? (f = !0, s.dispatchEvent(
          We(
            xi(u.ours, u.theirs, {
              ...n,
              title: void 0
            })
          )
        )) : a.push({
          old: {
            parent: l,
            element: u.ours,
            reference: u.ours.nextSibling
          }
        }) : a.push({
          new: { parent: l, element: u.theirs }
        });
    return a.length === 0 && !f && s.dispatchEvent(We()), [
      {
        actions: a,
        title: K("merge.log", {
          sink: W(t),
          source: W(r),
          tag: t.tagName
        })
      }
    ];
  };
}
function xi(i, e, t) {
  const r = [], n = i.textContent ?? "", c = e.textContent ?? "";
  i.childElementCount === 0 && e.childElementCount === 0 && c !== n && r.push(["value", { ours: n, theirs: c }]);
  const s = new Set(
    e.getAttributeNames().concat(i.getAttributeNames())
  );
  for (const d of s)
    e.getAttribute(d) !== i.getAttribute(d) && r.push([
      d,
      {
        theirs: e.getAttribute(d),
        ours: i.getAttribute(d)
      }
    ]);
  const a = [], o = Array.from(i.children);
  return Array.from(e.children).forEach((d) => {
    const l = o.findIndex(
      (b) => vi(d, b)
    ), f = l > -1 ? o[l] : null;
    f && o.splice(l, 1), !(f && ke(d, f)) && (!f || !ke(d, f)) && a.push({ theirs: d, ours: f });
  }), o.forEach((d) => a.push({ theirs: null, ours: d })), [
    {
      title: t?.title ?? K("merge.defaultTitle", {
        sink: W(i),
        source: W(e),
        tag: i.tagName
      }),
      primary: {
        label: K("merge.title"),
        icon: "merge_type",
        action: On(r, a, i, e, t),
        auto: t?.auto?.(i, e) ?? !1
      },
      content: [
        k`
          <mwc-list multi>
            ${Ot(
          r,
          (d) => d,
          ([d, l], f) => k`<mwc-check-list-item
                  value=${f}
                  class="attr"
                  twoline
                  left
                  hasMeta
                  .selected=${t?.selected?.(l) ?? !1}
                  .disabled=${t?.disabled?.(l) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${l.ours ? l.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${d}</span>
                  <span slot="secondary"
                    >${l.ours ?? ""}
                    ${l.ours && l.theirs ? k`&cularr;` : " "}
                    ${l.theirs ?? ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${l.ours ? l.theirs ? "edit" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
            ${a.length ? k`<mwc-list-item noninteractive
                    >${K("merge.children")}</mwc-list-item
                  >
                  <li padded divider role="separator"></li>` : ""}
            ${Ot(
          a,
          (d) => d,
          (d, l) => k`<mwc-check-list-item
                  value=${l}
                  class="child"
                  twoline
                  left
                  hasMeta
                  .selected=${t?.selected?.(d) ?? !1}
                  .disabled=${t?.disabled?.(d) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${d.ours ? d.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${d.ours?.tagName ?? d.theirs?.tagName}</span>
                  <span slot="secondary"
                    >${d.ours ? W(d.ours) : ""}
                    ${d.ours && d.theirs && W(d.ours) + W(d.theirs) ? k`&cularr;` : " "}
                    ${d.theirs ? W(d.theirs) : ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${d.ours ? d.theirs ? "merge_type" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
          </mwc-list>
        `
      ]
    }
  ];
}
var qn = Object.defineProperty, Gn = (i, e, t, r) => {
  for (var n = void 0, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = s(e, t, n) || n);
  return n && qn(e, t, n), n;
};
function qt(i, e) {
  if (typeof e != "string") return !1;
  const [t, r, n, c, s] = e.split(/[ /]/);
  if (!t || !c) return !1;
  if (r === "(Client)") {
    const [
      f,
      b,
      u,
      g
    ] = [
      [`IED[name="${t}"]`],
      n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
      [`LN[lnClass="${c}"]`],
      s ? [`[inst="${s}"]`] : [":not([inst])", '[inst=""]']
    ];
    return i.querySelector(
      R(
        f,
        [">AccessPoint>"],
        u,
        b,
        g
      ).map((x) => x.join("")).join(",")
    ) !== null;
  }
  const [
    a,
    o,
    p,
    d,
    l
  ] = [
    [`IED[name="${t}"]`],
    [`LDevice[inst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    c === "LLN0" ? ["LN0"] : [`LN[lnClass="${c}"]`],
    s ? [`[inst="${s}"]`] : [":not([inst])", '[inst=""]']
  ];
  return i.querySelector(
    R(
      a,
      [" "],
      o,
      [">"],
      d,
      p,
      l
    ).map((f) => f.join("")).join(",")
  ) !== null;
}
function Bn(i, e, t) {
  i.dispatchEvent(
    We(
      xi(
        // FIXME: doesn't work with multiple Substations!
        e.documentElement,
        t.documentElement,
        {
          title: K("updatesubstation.title"),
          selected: (r) => r.theirs instanceof Element ? r.theirs.tagName === "LNode" ? Lt(e, "LNode", C(r.theirs)) === null && qt(t, C(r.theirs)) : r.theirs.tagName === "Substation" || !P.SCL.children.includes(r.theirs.tagName) : r.theirs !== null,
          disabled: (r) => r.theirs instanceof Element && r.theirs.tagName === "LNode" && (Lt(e, "LNode", C(r.theirs)) !== null || !qt(t, C(r.theirs))),
          auto: () => !0
        }
      )
    )
  );
}
class Hn extends te {
  async updateSubstation(e) {
    const t = e.target?.files?.item(0) ?? !1;
    if (!t)
      return;
    const r = await t.text(), n = new DOMParser().parseFromString(r, "application/xml");
    Bn(this, this.doc, n), this.pluginFileUI.onchange = null;
  }
  async run() {
    this.pluginFileUI.click();
  }
  render() {
    return k`<input @click=${(e) => e.target.value = ""}
                       @change=${this.updateSubstation}
                       id="update-substation-plugin-input" accept=".sed,.scd,.ssd,.iid,.cid" type="file"></input>`;
  }
  static {
    this.styles = he`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
  }
}
Gn([
  O("#update-substation-plugin-input")
], Hn.prototype, "pluginFileUI");
export {
  Hn as default,
  qt as isValidReference,
  Bn as mergeSubstation
};
