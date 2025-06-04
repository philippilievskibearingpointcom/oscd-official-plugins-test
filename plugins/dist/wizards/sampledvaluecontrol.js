import "@material/mwc-formfield";
import { TextField as br } from "@material/mwc-textfield";
import { List as yr } from "@material/mwc-list";
import "@material/mwc-switch";
import { Select as gr } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-button";
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
const Ft = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, kt = (t, e, i = null) => {
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
const se = `{{lit-${String(Math.random()).slice(2)}}}`, yi = `<!--${se}-->`, Mt = new RegExp(`${se}|${yi}`), Pe = "$lit$";
class gi {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const r = [], n = [], s = document.createTreeWalker(i.content, 133, null, !1);
    let a = 0, c = -1, o = 0;
    const { strings: d, values: { length: p } } = e;
    for (; o < p; ) {
      const l = s.nextNode();
      if (l === null) {
        s.currentNode = n.pop();
        continue;
      }
      if (c++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const y = l.attributes, { length: S } = y;
          let x = 0;
          for (let k = 0; k < S; k++)
            Vt(y[k].name, Pe) && x++;
          for (; x-- > 0; ) {
            const k = d[o], v = at.exec(k)[2], _ = v.toLowerCase() + Pe, w = l.getAttribute(_);
            l.removeAttribute(_);
            const D = w.split(Mt);
            this.parts.push({ type: "attribute", index: c, name: v, strings: D }), o += D.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (n.push(l), s.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const y = l.data;
        if (y.indexOf(se) >= 0) {
          const S = l.parentNode, x = y.split(Mt), k = x.length - 1;
          for (let v = 0; v < k; v++) {
            let _, w = x[v];
            if (w === "")
              _ = ue();
            else {
              const D = at.exec(w);
              D !== null && Vt(D[2], Pe) && (w = w.slice(0, D.index) + D[1] + D[2].slice(0, -Pe.length) + D[3]), _ = document.createTextNode(w);
            }
            S.insertBefore(_, l), this.parts.push({ type: "node", index: ++c });
          }
          x[k] === "" ? (S.insertBefore(ue(), l), r.push(l)) : l.data = x[k], o += k;
        }
      } else if (l.nodeType === 8)
        if (l.data === se) {
          const y = l.parentNode;
          (l.previousSibling === null || c === a) && (c++, y.insertBefore(ue(), l)), a = c, this.parts.push({ type: "node", index: c }), l.nextSibling === null ? l.data = "" : (r.push(l), c--), o++;
        } else {
          let y = -1;
          for (; (y = l.data.indexOf(se, y + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const l of r)
      l.parentNode.removeChild(l);
  }
}
const Vt = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, vi = (t) => t.index !== -1, ue = () => document.createComment(""), at = (
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
const Ct = 133;
function Si(t, e) {
  const { element: { content: i }, parts: r } = t, n = document.createTreeWalker(i, Ct, null, !1);
  let s = Ne(r), a = r[s], c = -1, o = 0;
  const d = [];
  let p = null;
  for (; n.nextNode(); ) {
    c++;
    const l = n.currentNode;
    for (l.previousSibling === p && (p = null), e.has(l) && (d.push(l), p === null && (p = l)), p !== null && o++; a !== void 0 && a.index === c; )
      a.index = p !== null ? -1 : a.index - o, s = Ne(r, s), a = r[s];
  }
  d.forEach((l) => l.parentNode.removeChild(l));
}
const vr = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, Ct, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, Ne = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const r = t[i];
    if (vi(r))
      return i;
  }
  return -1;
};
function Sr(t, e, i = null) {
  const { element: { content: r }, parts: n } = t;
  if (i == null) {
    r.appendChild(e);
    return;
  }
  const s = document.createTreeWalker(r, Ct, null, !1);
  let a = Ne(n), c = 0, o = -1;
  for (; s.nextNode(); )
    for (o++, s.currentNode === i && (c = vr(e), i.parentNode.insertBefore(e, i)); a !== -1 && n[a].index === o; ) {
      if (c > 0) {
        for (; a !== -1; )
          n[a].index += c, a = Ne(n, a);
        return;
      }
      a = Ne(n, a);
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
const xi = /* @__PURE__ */ new WeakMap(), Ke = (t) => (...e) => {
  const i = t(...e);
  return xi.set(i, !0), i;
}, Le = (t) => typeof t == "function" && xi.has(t);
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
const Y = {}, zt = {};
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
class ct {
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
    const e = Ft ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, a = 0, c, o = n.nextNode();
    for (; s < r.length; ) {
      if (c = r[s], !vi(c)) {
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
    return Ft && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const qt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), xr = ` ${se} `;
class _i {
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
      const c = at.exec(s);
      c === null ? i += s + (r ? xr : yi) : i += s.substr(0, c.index) + c[1] + c[2] + Pe + c[3] + se;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return qt !== void 0 && (i = qt.createHTML(i)), e.innerHTML = i, e;
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
const Ze = (t) => t === null || !(typeof t == "object" || typeof t == "function"), ot = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Ai {
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
      if (typeof s == "string" || !ot(s))
        return s;
    }
    let n = "";
    for (let s = 0; s < i; s++) {
      n += e[s];
      const a = r[s];
      if (a !== void 0) {
        const c = a.value;
        if (Ze(c) || !ot(c))
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
    e !== Y && (!Ze(e) || e !== this.value) && (this.value = e, Le(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Le(this.value); ) {
      const e = this.value;
      this.value = Y, e(this);
    }
    this.value !== Y && this.committer.commit();
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
    this.startNode = e.appendChild(ue()), this.endNode = e.appendChild(ue());
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
    e.__insert(this.startNode = ue()), e.__insert(this.endNode = ue());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ue()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Le(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Y, i(this);
    }
    const e = this.__pendingValue;
    e !== Y && (Ze(e) ? e !== this.value && this.__commitText(e) : e instanceof _i ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : ot(e) ? this.__commitIterable(e) : e === zt ? (this.value = zt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof ct && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new ct(i, e.processor, this.options), n = r._clone();
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
    kt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class _r {
  constructor(e, i, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Le(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Y, i(this);
    }
    if (this.__pendingValue === Y)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = Y;
  }
}
class Ar extends Ai {
  constructor(e, i, r) {
    super(e, i, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new It(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class It extends Ce {
}
let ki = !1;
(() => {
  try {
    const t = {
      get capture() {
        return ki = !0, !1;
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
    for (; Le(this.__pendingValue); ) {
      const s = this.__pendingValue;
      this.__pendingValue = Y, s(this);
    }
    if (this.__pendingValue === Y)
      return;
    const e = this.__pendingValue, i = this.value, r = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), n = e != null && (i == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Cr(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = Y;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Cr = (t) => t && (ki ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
  let e = $e.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, $e.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const r = t.strings.join(se);
  return i = e.keyString.get(r), i === void 0 && (i = new gi(t, t.getTemplateElement()), e.keyString.set(r, i)), e.stringsArray.set(t.strings, i), i;
}
const $e = /* @__PURE__ */ new Map();
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
const Ae = /* @__PURE__ */ new WeakMap(), wr = (t, e, i) => {
  let r = Ae.get(e);
  r === void 0 && (kt(e, e.firstChild), Ae.set(e, r = new Oe(Object.assign({ templateFactory: Ir }, i))), r.appendInto(e)), r.setValue(t), r.commit();
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
    return s === "." ? new Ar(e, i.slice(1), r).parts : s === "@" ? [new kr(e, i.slice(1), n.eventContext)] : s === "?" ? [new _r(e, i.slice(1), r)] : new Ai(e, i, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Oe(e);
  }
}
const Tr = new Er();
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
const u = (t, ...e) => new _i(t, e, "html", Tr);
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
const Ci = (t, e) => `${t}--${e}`;
let je = !0;
typeof window.ShadyCSS > "u" ? je = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), je = !1);
const Pr = (t) => (e) => {
  const i = Ci(e.type, t);
  let r = $e.get(i);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, $e.set(i, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const s = e.strings.join(se);
  if (n = r.keyString.get(s), n === void 0) {
    const a = e.getTemplateElement();
    je && window.ShadyCSS.prepareTemplateDom(a, t), n = new gi(e, a), r.keyString.set(s, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, Nr = ["html", "svg"], Dr = (t) => {
  Nr.forEach((e) => {
    const i = $e.get(Ci(e, t));
    i !== void 0 && i.keyString.forEach((r) => {
      const { element: { content: n } } = r, s = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((a) => {
        s.add(a);
      }), Si(r, s);
    });
  });
}, Ii = /* @__PURE__ */ new Set(), Rr = (t, e, i) => {
  Ii.add(t);
  const r = i ? i.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: s } = n;
  if (s === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, t);
    return;
  }
  const a = document.createElement("style");
  for (let d = 0; d < s; d++) {
    const p = n[d];
    p.parentNode.removeChild(p), a.textContent += p.textContent;
  }
  Dr(t);
  const c = r.content;
  i ? Sr(i, a, c.firstChild) : c.insertBefore(a, c.firstChild), window.ShadyCSS.prepareTemplateStyles(r, t);
  const o = c.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (i) {
    c.insertBefore(a, c.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(a), Si(i, d);
  }
}, Lr = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = i.scopeName, n = Ae.has(e), s = je && e.nodeType === 11 && !!e.host, a = s && !Ii.has(r), c = a ? document.createDocumentFragment() : e;
  if (wr(t, c, Object.assign({ templateFactory: Pr(r) }, i)), a) {
    const o = Ae.get(c);
    Ae.delete(c);
    const d = o.value instanceof ct ? o.value.template : void 0;
    Rr(r, c, d), kt(e, e.firstChild), e.appendChild(c), Ae.set(e, o);
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
var wi;
window.JSCompiler_renameProperty = (t, e) => t;
const dt = {
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
}, Ei = (t, e) => e !== t && (e === e || t === t), tt = {
  attribute: !0,
  type: String,
  converter: dt,
  reflect: !1,
  hasChanged: Ei
}, it = 1, Ut = 4, Bt = 8, Gt = 16, lt = "finalized";
class Ti extends HTMLElement {
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
  static createProperty(e, i = tt) {
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
    return this._classProperties && this._classProperties.get(e) || tt;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(lt) || e.finalize(), this[lt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, i, r = Ei) {
    return r(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const r = i.type, n = i.converter || dt, s = typeof n == "function" ? n : n.fromAttribute;
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
    return (n && n.toAttribute || dt.toAttribute)(e, r);
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
  _propertyToAttribute(e, i, r = tt) {
    const n = this.constructor, s = n._attributeNameForProperty(e, r);
    if (s !== void 0) {
      const a = n._propertyValueToAttribute(i, r);
      if (a === void 0)
        return;
      this._updateState = this._updateState | Bt, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & Bt)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const s = r.getPropertyOptions(n);
      this._updateState = this._updateState | Gt, this[n] = // tslint:disable-next-line:no-any
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
      r = r || s.getPropertyOptions(e), s._valueHasChanged(this[e], i, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, i), r.reflect === !0 && !(this._updateState & Gt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
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
    this._updateState = this._updateState | Ut;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Ut;
  }
  get hasUpdated() {
    return this._updateState & it;
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
    e && (this._updateState & it || (this._updateState = this._updateState | it, this.firstUpdated(i)), this.updated(i));
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
wi = lt;
Ti[wi] = !0;
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
const $r = (t, e) => (window.customElements.define(t, e), e), Or = (t, e) => {
  const { kind: i, elements: r } = e;
  return {
    kind: i,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(t, n);
    }
  };
}, ce = (t) => (e) => typeof e == "function" ? $r(t, e) : Or(t, e), Fr = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
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
}, Mr = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function h(t) {
  return (e, i) => i !== void 0 ? Mr(t, e, i) : Fr(t, e);
}
function Vr(t) {
  return h({ attribute: !1, hasChanged: void 0 });
}
const N = (t) => Vr();
function B(t, e) {
  return (i, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? wt(n, i, r) : Et(n, i);
  };
}
function Pi(t) {
  return (e, i) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? wt(r, e, i) : Et(r, e);
  };
}
const wt = (t, e, i) => {
  Object.defineProperty(e, i, t);
}, Et = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
}), zr = (t, e) => Object.assign(Object.assign({}, e), { finisher(i) {
  Object.assign(i.prototype[e.key], t);
} }), qr = (
  // tslint:disable-next-line:no-any legacy decorator
  (t, e, i) => {
    Object.assign(e[i], t);
  }
);
function Ur(t) {
  return (e, i) => i !== void 0 ? qr(t, e, i) : zr(t, e);
}
const Ht = Element.prototype, Br = Ht.msMatchesSelector || Ht.webkitMatchesSelector;
function Ni(t = "", e = !1, i = "") {
  return (r, n) => {
    const s = {
      get() {
        const a = `slot${t ? `[name=${t}]` : ":not([name])"}`, c = this.renderRoot.querySelector(a);
        let o = c && c.assignedNodes({ flatten: e });
        return o && i && (o = o.filter((d) => d.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (d.matches ? d.matches(i) : Br.call(d, i)))), o;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? wt(s, r, n) : Et(s, r);
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
const pt = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Tt = Symbol();
class Pt {
  constructor(e, i) {
    if (i !== Tt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (pt ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Di = (t) => new Pt(String(t), Tt), Gr = (t) => {
  if (t instanceof Pt)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, Ie = (t, ...e) => {
  const i = e.reduce((r, n, s) => r + Gr(n) + t[s + 1], t[0]);
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
const jt = {};
class ve extends Ti {
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
      if (i instanceof CSSStyleSheet && !pt) {
        const r = Array.prototype.slice.call(i.cssRules).reduce((n, s) => n + s.cssText, "");
        return Di(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : pt ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), i !== jt && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return jt;
  }
}
ve.finalized = !0;
ve.render = Lr;
ve.shadowRootOptions = { mode: "open" };
const Hr = 1e3 * 60, Wt = "langChanged";
function jr(t, e, i) {
  return Object.entries(ut(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ut(s))), t);
}
function Wr(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function ut(t) {
  return typeof t == "function" ? t() : t;
}
const Xr = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: Wr,
  interpolate: jr,
  translationCache: {}
});
let Kr = Xr();
function Zr(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Wt, i, e), () => window.removeEventListener(Wt, i);
}
function g(t, e, i = Kr) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? ut(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Ri(t) {
  return t instanceof Oe ? t.startNode.isConnected : t instanceof Ce ? t.committer.element.isConnected : t.element.isConnected;
}
function Jr(t) {
  for (const [e] of t)
    Ri(e) || t.delete(e);
}
function Qr(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Yr(t, e) {
  setInterval(() => Qr(() => Jr(t)), e);
}
const Li = /* @__PURE__ */ new Map();
function en() {
  Zr((t) => {
    for (const [e, i] of Li)
      Ri(e) && tn(e, i, t);
  });
}
en();
Yr(Li, Hr);
function tn(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
var mt = function(t, e) {
  return mt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, mt(t, e);
};
function rn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  mt(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var De = function() {
  return De = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, De.apply(this, arguments);
};
function m(t, e, i, r) {
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
function nn(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const sn = (t) => t.nodeType === Node.ELEMENT_NODE, $i = () => {
}, an = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", $i, an);
document.removeEventListener("x", $i);
const Oi = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, cn = (t) => {
  const e = Oi();
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
class Nt extends ve {
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
var Fi = (
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
var on = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, dn = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Xt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function ln(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + i.left, a = n + i.top, c, o;
  if (t.type === "touchstart") {
    var d = t;
    c = d.changedTouches[0].pageX - s, o = d.changedTouches[0].pageY - a;
  } else {
    var p = t;
    c = p.pageX - s, o = p.pageY - a;
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
var Kt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Zt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ze = [], pn = (
  /** @class */
  function(t) {
    rn(e, t);
    function e(i) {
      var r = t.call(this, De(De({}, e.defaultAdapter), i)) || this;
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
        return on;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return dn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Xt;
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
          for (var s = Ve(Kt), a = s.next(); !a.done; a = s.next()) {
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
          for (var s = Ve(Zt), a = s.next(); !a.done; a = s.next()) {
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
        for (var n = Ve(Kt), s = n.next(); !s.done; s = n.next()) {
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
        for (var n = Ve(Zt), s = n.next(); !s.done; s = n.next()) {
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
      var p = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var y = this.getFgTranslationCoordinates(), S = y.startPoint, x = y.endPoint;
        p = S.x + "px, " + S.y + "px", l = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(n, p), this.adapter.updateCssVariable(s, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, s;
      n ? s = ln(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      }, Xt.FG_DEACTIVATION_MS));
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
        var n = De({}, r);
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
  }(Fi)
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
class un {
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
const Jt = /* @__PURE__ */ new WeakMap(), Je = Ke((t) => (e) => {
  if (!(e instanceof Ce) || e instanceof It || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Jt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Jt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new un(r);
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
const Qt = /* @__PURE__ */ new WeakMap(), mn = Ke((t) => (e) => {
  if (!(e instanceof Ce) || e instanceof It || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Qt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Qt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in t || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in t)
    n.add(s), s.indexOf("-") === -1 ? r[s] = t[s] : r.setProperty(s, t[s]);
});
class O extends Nt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = pn;
  }
  get isActive() {
    return nn(this.parentElement || this, ":active");
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
    return u`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Je(r)}"
          style="${mn({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
m([
  B(".mdc-ripple-surface")
], O.prototype, "mdcRoot", void 0);
m([
  h({ type: Boolean })
], O.prototype, "primary", void 0);
m([
  h({ type: Boolean })
], O.prototype, "accent", void 0);
m([
  h({ type: Boolean })
], O.prototype, "unbounded", void 0);
m([
  h({ type: Boolean })
], O.prototype, "disabled", void 0);
m([
  h({ type: Boolean })
], O.prototype, "activated", void 0);
m([
  h({ type: Boolean })
], O.prototype, "selected", void 0);
m([
  h({ type: Boolean })
], O.prototype, "internalUseStateLayerCustomProperties", void 0);
m([
  N()
], O.prototype, "hovering", void 0);
m([
  N()
], O.prototype, "bgFocused", void 0);
m([
  N()
], O.prototype, "fgActivation", void 0);
m([
  N()
], O.prototype, "fgDeactivation", void 0);
m([
  N()
], O.prototype, "fgScale", void 0);
m([
  N()
], O.prototype, "fgSize", void 0);
m([
  N()
], O.prototype, "translateStart", void 0);
m([
  N()
], O.prototype, "translateEnd", void 0);
m([
  N()
], O.prototype, "leftPos", void 0);
m([
  N()
], O.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const hn = Ie`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ht = class extends O {
};
ht.styles = [hn];
ht = m([
  ce("mwc-ripple")
], ht);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const he = (t) => (
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
class Mi {
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
class M extends ve {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Mi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : u``, r = this.hasMeta ? this.renderMeta() : u``;
    return u`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? u`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? u`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return u`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Je(e)}">
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
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return u`
      <span class="mdc-deprecated-list-item__text">
        ${e}
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
m([
  B("slot")
], M.prototype, "slotElement", void 0);
m([
  Pi("mwc-ripple")
], M.prototype, "ripple", void 0);
m([
  h({ type: String })
], M.prototype, "value", void 0);
m([
  h({ type: String, reflect: !0 })
], M.prototype, "group", void 0);
m([
  h({ type: Number, reflect: !0 })
], M.prototype, "tabindex", void 0);
m([
  h({ type: Boolean, reflect: !0 }),
  he(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], M.prototype, "disabled", void 0);
m([
  h({ type: Boolean, reflect: !0 })
], M.prototype, "twoline", void 0);
m([
  h({ type: Boolean, reflect: !0 })
], M.prototype, "activated", void 0);
m([
  h({ type: String, reflect: !0 })
], M.prototype, "graphic", void 0);
m([
  h({ type: Boolean })
], M.prototype, "multipleGraphics", void 0);
m([
  h({ type: Boolean })
], M.prototype, "hasMeta", void 0);
m([
  h({ type: Boolean, reflect: !0 }),
  he(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], M.prototype, "noninteractive", void 0);
m([
  h({ type: Boolean, reflect: !0 }),
  he(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], M.prototype, "selected", void 0);
m([
  N()
], M.prototype, "shouldRenderRipple", void 0);
m([
  N()
], M.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Vi = Ie`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ft = class extends M {
};
ft.styles = [Vi];
ft = m([
  ce("mwc-list-item")
], ft);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function fn(t, e, i) {
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
    return fn(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zi extends Nt {
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
zi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const rt = /* @__PURE__ */ new WeakMap(), ne = Ke((t) => (e) => {
  const i = rt.get(e);
  if (t === void 0 && e instanceof Ce) {
    if (i !== void 0 || !rt.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  rt.set(e, t);
});
class F extends zi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Mi(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return u`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Je(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ne(this.name)}"
              aria-checked="${ne(r)}"
              aria-label="${ne(this.ariaLabel)}"
              aria-labelledby="${ne(this.ariaLabelledBy)}"
              aria-describedby="${ne(this.ariaDescribedBy)}"
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
m([
  B(".mdc-checkbox")
], F.prototype, "mdcRoot", void 0);
m([
  B("input")
], F.prototype, "formElement", void 0);
m([
  h({ type: Boolean, reflect: !0 })
], F.prototype, "checked", void 0);
m([
  h({ type: Boolean })
], F.prototype, "indeterminate", void 0);
m([
  h({ type: Boolean, reflect: !0 })
], F.prototype, "disabled", void 0);
m([
  h({ type: String, reflect: !0 })
], F.prototype, "name", void 0);
m([
  h({ type: String })
], F.prototype, "value", void 0);
m([
  Dt,
  h({ type: String, attribute: "aria-label" })
], F.prototype, "ariaLabel", void 0);
m([
  Dt,
  h({ type: String, attribute: "aria-labelledby" })
], F.prototype, "ariaLabelledBy", void 0);
m([
  Dt,
  h({ type: String, attribute: "aria-describedby" })
], F.prototype, "ariaDescribedBy", void 0);
m([
  h({ type: Boolean })
], F.prototype, "reducedTouchTarget", void 0);
m([
  N()
], F.prototype, "animationClass", void 0);
m([
  N()
], F.prototype, "shouldRenderRipple", void 0);
m([
  N()
], F.prototype, "focused", void 0);
m([
  N()
], F.prototype, "useStateLayerCustomProperties", void 0);
m([
  Pi("mwc-ripple")
], F.prototype, "ripple", void 0);
m([
  Ur({ passive: !0 })
], F.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const bn = Ie`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let bt = class extends F {
};
bt.styles = [bn];
bt = m([
  ce("mwc-checkbox")
], bt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fe extends M {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : u``, n = this.hasMeta && this.left ? this.renderMeta() : u``, s = this.renderRipple();
    return u`
      ${s}
      ${r}
      ${this.left ? "" : i}
      <span class=${Je(e)}>
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
m([
  B("slot")
], Fe.prototype, "slotElement", void 0);
m([
  B("mwc-checkbox")
], Fe.prototype, "checkboxElement", void 0);
m([
  h({ type: Boolean })
], Fe.prototype, "left", void 0);
m([
  h({ type: String, reflect: !0 })
], Fe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const yn = Ie`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ke = class extends Fe {
};
ke.styles = [Vi, yn];
ke = m([
  ce("mwc-check-list-item")
], ke);
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
var A = {
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
}, G = /* @__PURE__ */ new Set();
G.add(A.BACKSPACE);
G.add(A.ENTER);
G.add(A.SPACEBAR);
G.add(A.PAGE_UP);
G.add(A.PAGE_DOWN);
G.add(A.END);
G.add(A.HOME);
G.add(A.ARROW_LEFT);
G.add(A.ARROW_UP);
G.add(A.ARROW_RIGHT);
G.add(A.ARROW_DOWN);
G.add(A.DELETE);
G.add(A.ESCAPE);
G.add(A.TAB);
var X = {
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
}, H = /* @__PURE__ */ new Map();
H.set(X.BACKSPACE, A.BACKSPACE);
H.set(X.ENTER, A.ENTER);
H.set(X.SPACEBAR, A.SPACEBAR);
H.set(X.PAGE_UP, A.PAGE_UP);
H.set(X.PAGE_DOWN, A.PAGE_DOWN);
H.set(X.END, A.END);
H.set(X.HOME, A.HOME);
H.set(X.ARROW_LEFT, A.ARROW_LEFT);
H.set(X.ARROW_UP, A.ARROW_UP);
H.set(X.ARROW_RIGHT, A.ARROW_RIGHT);
H.set(X.ARROW_DOWN, A.ARROW_DOWN);
H.set(X.DELETE, A.DELETE);
H.set(X.ESCAPE, A.ESCAPE);
H.set(X.TAB, A.TAB);
var fe = /* @__PURE__ */ new Set();
fe.add(A.PAGE_UP);
fe.add(A.PAGE_DOWN);
fe.add(A.END);
fe.add(A.HOME);
fe.add(A.ARROW_LEFT);
fe.add(A.ARROW_UP);
fe.add(A.ARROW_RIGHT);
fe.add(A.ARROW_DOWN);
function de(t) {
  var e = t.key;
  if (G.has(e))
    return e;
  var i = H.get(t.keyCode);
  return i || A.UNKNOWN;
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
var le, re, P = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
le = {}, le["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", le["" + P.LIST_ITEM_CLASS] = "mdc-list-item", le["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", le["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", le["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", le["" + P.ROOT] = "mdc-list";
var _e = (re = {}, re["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", re["" + P.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", re["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", re["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", re["" + P.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", re["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", re["" + P.ROOT] = "mdc-deprecated-list", re), qe = {
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
    .` + _e[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _e[P.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + P.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + _e[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _e[P.LIST_ITEM_CLASS] + ` a,
    .` + _e[P.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + _e[P.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, j = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yt = (t, e) => t - e, gn = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, s = i.sort(yt), a = r.sort(yt);
  let c = 0, o = 0;
  for (; c < s.length || o < a.length; ) {
    const d = s[c], p = a[o];
    if (d === p) {
      c++, o++;
      continue;
    }
    if (d !== void 0 && (p === void 0 || d < p)) {
      n.removed.push(d), c++;
      continue;
    }
    if (p !== void 0 && (d === void 0 || p < d)) {
      n.added.push(p), o++;
      continue;
    }
  }
  return n;
}, vn = ["input", "button", "textarea", "select"];
function Re(t) {
  return t instanceof Set;
}
const nt = (t) => {
  const e = t === j.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Re(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Rt extends Fi {
  constructor(e) {
    super(Object.assign(Object.assign({}, Rt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = j.UNSET_INDEX, this.focusedItemIndex_ = j.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return qe;
  }
  static get numbers() {
    return j;
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
      if (!Re(i)) {
        const r = i === j.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Re(i))
      if (i.size) {
        const r = Array.from(i).sort(yt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = j.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(nt(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = de(e) === "ArrowLeft", s = de(e) === "ArrowUp", a = de(e) === "ArrowRight", c = de(e) === "ArrowDown", o = de(e) === "Home", d = de(e) === "End", p = de(e) === "Enter", l = de(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || d ? (e.preventDefault(), this.focusLastElement()) : (c || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let y = this.adapter.getFocusedElementIndex();
    if (y === -1 && (y = r, y < 0))
      return;
    let S;
    if (this.isVertical_ && c || !this.isVertical_ && a)
      this.preventDefaultEvent(e), S = this.focusNextElement(y);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), S = this.focusPrevElement(y);
    else if (o)
      this.preventDefaultEvent(e), S = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), S = this.focusLastElement();
    else if ((p || l) && i) {
      const x = e.target;
      if (x && x.tagName === "A" && p)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(y, !0);
    }
    this.focusedItemIndex_ = y, S !== void 0 && (this.setTabindexAtIndex_(S), this.focusedItemIndex_ = S);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== j.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    vn.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== j.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = nt(this.selectedIndex_), n = gn(r, e);
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
    this.selectedIndex_ === j.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, qe.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? qe.ARIA_CURRENT : qe.ARIA_SELECTED;
    this.selectedIndex_ !== j.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === j.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== j.UNSET_INDEX ? e = this.selectedIndex_ : Re(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === j.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(j.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const s = nt(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function Sn(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const Ue = (t) => t.hasAttribute("mwc-list-item");
function xn() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class K extends Nt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Rt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Sn(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      xn.call(this), e(i);
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
      Ue(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
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
    if (!Re(e))
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
    return u`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${ne(e)}"
          aria-label="${ne(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? u`
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
      const i = this.getIndexOfTarget(e), r = e.target, n = Ue(r);
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
      if (sn(n) && Ue(n) && (s = i.indexOf(n)), s !== -1)
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
      isFocusInsideList: () => cn(this),
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
    const e = Oi();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (Ue(r))
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
m([
  h({ type: String })
], K.prototype, "emptyMessage", void 0);
m([
  B(".mdc-deprecated-list")
], K.prototype, "mdcRoot", void 0);
m([
  Ni("", !0, "*")
], K.prototype, "assignedElements", void 0);
m([
  Ni("", !0, '[tabindex="0"]')
], K.prototype, "tabbableElements", void 0);
m([
  h({ type: Boolean }),
  he(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], K.prototype, "activatable", void 0);
m([
  h({ type: Boolean }),
  he(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], K.prototype, "multi", void 0);
m([
  h({ type: Boolean }),
  he(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], K.prototype, "wrapFocus", void 0);
m([
  h({ type: String }),
  he(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], K.prototype, "itemRoles", void 0);
m([
  h({ type: String })
], K.prototype, "innerRole", void 0);
m([
  h({ type: String })
], K.prototype, "innerAriaLabel", void 0);
m([
  h({ type: Boolean })
], K.prototype, "rootTabbable", void 0);
m([
  h({ type: Boolean, reflect: !0 }),
  he(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], K.prototype, "noninteractive", void 0);
var _n = Object.defineProperty, An = Object.getOwnPropertyDescriptor, Se = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? An(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && _n(e, i, n), n;
};
function gt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof ie ? t : gt(t.parentElement);
}
function kn(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((c) => c.innerText).join(`
`), n = t.value, s = (i + r + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((c) => new RegExp(
    `*${c}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? gt(t).classList.remove("hidden") : gt(t).classList.add("hidden");
}
let ie = class extends K {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof ke);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ke).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ke).some((t) => t.selected);
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
ie.styles = Ie`
    ${Di(yr.styles)}

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
Se([
  h({ type: String })
], ie.prototype, "searchFieldLabel", 2);
Se([
  h({ type: Boolean })
], ie.prototype, "disableCheckAll", 2);
Se([
  N()
], ie.prototype, "existCheckListItem", 1);
Se([
  N()
], ie.prototype, "isAllSelected", 1);
Se([
  N()
], ie.prototype, "isSomeSelected", 1);
Se([
  B("mwc-textfield")
], ie.prototype, "searchField", 2);
ie = Se([
  ce("filtered-list")
], ie);
var Cn = Object.defineProperty, In = Object.getOwnPropertyDescriptor, Z = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? In(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Cn(e, i, n), n;
};
let U = class extends ve {
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
Z([
  h({ type: String })
], U.prototype, "label", 2);
Z([
  h({ type: String })
], U.prototype, "helper", 2);
Z([
  h({ type: Boolean })
], U.prototype, "nullable", 2);
Z([
  h({ type: Boolean })
], U.prototype, "defaultChecked", 2);
Z([
  h({ type: String })
], U.prototype, "maybeValue", 1);
Z([
  h({ type: Boolean })
], U.prototype, "disabled", 2);
Z([
  N()
], U.prototype, "null", 1);
Z([
  N()
], U.prototype, "checked", 1);
Z([
  N()
], U.prototype, "deactivateCheckbox", 2);
Z([
  N()
], U.prototype, "formfieldLabel", 1);
Z([
  B("mwc-switch")
], U.prototype, "nullSwitch", 2);
Z([
  B("mwc-checkbox")
], U.prototype, "checkbox", 2);
U = Z([
  ce("wizard-checkbox")
], U);
var wn = Object.defineProperty, En = Object.getOwnPropertyDescriptor, xe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? En(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && wn(e, i, n), n;
};
let ae = class extends gr {
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
xe([
  h({ type: Boolean })
], ae.prototype, "nullable", 2);
xe([
  N()
], ae.prototype, "null", 1);
xe([
  h({ type: String })
], ae.prototype, "maybeValue", 1);
xe([
  h({ type: String })
], ae.prototype, "defaultValue", 2);
xe([
  h({ type: Array })
], ae.prototype, "reservedValues", 2);
xe([
  B("mwc-switch")
], ae.prototype, "nullSwitch", 2);
ae = xe([
  ce("wizard-select")
], ae);
var Tn = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, J = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Pn(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Tn(e, i, n), n;
};
let W = class extends br {
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
      (t) => u`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? g("textfield.noMultiplier") : t}</mwc-list-item
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
J([
  h({ type: Boolean })
], W.prototype, "nullable", 2);
J([
  h({ type: Array })
], W.prototype, "multipliers", 2);
J([
  h({ type: String })
], W.prototype, "multiplier", 1);
J([
  h({ type: String })
], W.prototype, "unit", 2);
J([
  N()
], W.prototype, "null", 1);
J([
  h({ type: String })
], W.prototype, "maybeValue", 1);
J([
  h({ type: String })
], W.prototype, "defaultValue", 2);
J([
  h({ type: Array })
], W.prototype, "reservedValues", 2);
J([
  B("mwc-switch")
], W.prototype, "nullSwitch", 2);
J([
  B("mwc-menu")
], W.prototype, "multiplierMenu", 2);
J([
  B("mwc-icon-button")
], W.prototype, "multiplierButton", 2);
W = J([
  ce("wizard-textfield")
], W);
function ye(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([n, s]) => s !== null).forEach(([n, s]) => r.setAttribute(n, s)), r;
}
function We(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function qi(t, e, i = 1) {
  const r = "new" + e + i;
  return t.querySelector(`:scope > ${e}[name="${r}"]`) ? qi(t, e, ++i) : r;
}
function Nn(t) {
  return typeof t == "function";
}
function te(t) {
  return t instanceof W || t instanceof ae || t instanceof U ? t.maybeValue : t.value ?? null;
}
function Ui(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Nn(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function Me(t) {
  return Ui(t, { detail: { subwizard: !0 } });
}
function q(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const L = ":not(*)";
function Dn(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Rn(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? L : `${t}[version="${i}"][revision="${r}"]`;
}
function Yt(t) {
  return E(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function ei(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (s) => V(s, i).split(",")
  );
  return z(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((s) => s.join("")).join(",");
}
function Ln(t) {
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
function $n(t, e) {
  if (e.endsWith(")")) {
    const [y, S] = q(e), [x, k, v] = S.substring(1, S.length - 1).split(" ");
    if (!x || !k) return L;
    const _ = $[t].parents.flatMap(
      (w) => V(w, y).split(",")
    );
    return z(
      _,
      [">"],
      [`${t}[iedName="None"][lnClass="${x}"][lnType="${k}"][lnInst="${v}"]`]
    ).map((w) => w.join("")).join(",");
  }
  const [i, r, n, s, a] = e.split(/[ /]/);
  if (!i || !r || !s) return L;
  const [
    c,
    o,
    d,
    p,
    l
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    [t],
    c,
    o,
    d,
    p,
    l
  ).map((y) => y.join("")).join(",");
}
function On(t) {
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
function Mn(t) {
  return `${E(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Vn(t, e) {
  const [i, r] = q(e);
  return r ? `${V(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : L;
}
function zn(t) {
  return `${E(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function qn(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : L;
}
function Un(t) {
  const e = t.textContent, [i, r, n, s, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => t.getAttribute(c));
  return `${E(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${a ?? ""}`;
}
function Bn(t, e) {
  const [i, r] = q(e), [n, s, a, c, o, d] = r.split(/[ /]/), [
    p,
    l,
    y,
    S,
    x,
    k
  ] = [
    $[t].parents.flatMap(
      (v) => V(v, i).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    p,
    [">"],
    [t],
    l,
    y,
    S,
    x,
    k
  ).map((v) => v.join("")).join(",");
}
function Gn(t) {
  const [e, i, r, n, s, a, c, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((p) => t.getAttribute(p)), d = `${e}/${i ?? ""} ${r} ${n ?? ""}.${s} ${a || ""}`;
  return `${E(t.parentElement)}>${d} (${c}${o ? " [" + o + "]" : ""})`;
}
function Hn(t, e) {
  const [i, r] = q(e), [n, s, a, c] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = o && o[1] ? o[1] : "", p = o && o[2] ? o[2] : "", l = r.match(/\(([A-Z]{2})/), y = r.match(/ \[([0-9]{1,2})\]/), S = l && l[1] ? l[1] : "", x = y && y[1] ? y[1] : "", [
    k,
    v,
    _,
    w,
    D,
    Q,
    we,
    Ye,
    et
  ] = [
    $[t].parents.flatMap(
      (Ee) => V(Ee, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${S}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return z(
    k,
    [">"],
    [t],
    v,
    _,
    w,
    D,
    Q,
    we,
    Ye,
    et
  ).map((Ee) => Ee.join("")).join(",");
}
function jn(t) {
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
    p,
    l,
    y,
    S,
    x,
    k,
    v
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
  ].map((D) => t.getAttribute(D)), _ = v ? `${l}:${v} ${y ?? ""}/${S ?? ""} ${x ?? ""} ${k ?? ""}` : "", w = `${i} ${s}/${a ?? ""} ${c} ${o ?? ""} ${d} ${p || ""}`;
  return `${e}>${_ ? _ + " " : ""}${w}${r ? `@${r}` : ""}`;
}
function Wn(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (Te) => V(Te, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Te] = r.split("["), hr = [`[intAddr="${Te}"]`];
    return z(n, [">"], [t], hr).map((fr) => fr.join("")).join(",");
  }
  let s, a, c, o, d, p, l, y, S, x, k, v, _, w;
  !r.includes(":") && !r.includes("@") ? [s, a, c, o, d, p, l] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    y,
    S,
    x,
    k,
    v,
    _,
    s,
    a,
    c,
    o,
    d,
    p,
    l
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, a, c, o, d, p, l, w] = r.split(/[ /@]/) : [
    y,
    S,
    x,
    k,
    v,
    _,
    s,
    a,
    c,
    o,
    d,
    p,
    l,
    w
  ] = r.split(/[ /:@]/);
  const [
    D,
    Q,
    we,
    Ye,
    et,
    Ee,
    ar,
    cr,
    or,
    dr,
    lr,
    pr,
    ur,
    mr
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    p ? [`[doName="${p}"]`] : [":not([doName])"],
    l ? [`[daName="${l}"]`] : [":not([daName])", '[daName=""]'],
    y ? [`[serviceType="${y}"]`] : [":not([serviceType])", '[serviceType=""]'],
    S ? [`[srcCBName="${S}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    v ? [`[srcLNClass="${v}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    _ ? [`[srcLNInst="${_}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    w ? [`[intAddr="${w}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return z(
    n,
    [">"],
    [t],
    D,
    Q,
    we,
    Ye,
    et,
    Ee,
    ar,
    cr,
    or,
    dr,
    lr,
    pr,
    ur,
    mr
  ).map((Te) => Te.join("")).join(",");
}
function Xn(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${E(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Kn(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (l) => V(l, i).split(",")
  ), [s, a, c] = r.split(" ");
  if (!a) return L;
  const [o, d, p] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${c}"]`]
  ];
  return z(
    n,
    [">"],
    [t],
    o,
    d,
    p
  ).map((l) => l.join("")).join(",");
}
function Zn(t) {
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
function Jn(t, e) {
  const [i, r] = q(e), n = $[t].parents.flatMap(
    (_) => V(_, i).split(",")
  ), [s, a, c, o, d, p] = r.split(/[ /]/), [
    l,
    y,
    S,
    x,
    k,
    v
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    n,
    [">"],
    [t],
    l,
    y,
    S,
    x,
    k,
    v
  ).map((_) => _.join("")).join(",");
}
function ti(t) {
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
  const [p, l] = [
    [`[name="${a}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return z(
    d,
    [">"],
    [t],
    p,
    l
  ).map((y) => y.join("")).join(",");
}
function Qn(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${E(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Yn(t, e) {
  const [i, r] = q(e), [n, s] = r.split(" "), a = parseFloat(s), c = $[t].parents.flatMap(
    (p) => V(p, i).split(",")
  ), [o, d] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return z(
    c,
    [">"],
    [t],
    o,
    d
  ).map((p) => p.join("")).join(",");
}
function es(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function ts(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? L : `${t}[iedName="${i}"][apName="${r}"]`;
}
function ii(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function ri(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? L : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function is(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${E(t.parentElement)}>${e}`;
}
function rs(t, e) {
  const [i, r] = q(e), [n, s] = [
    $[t].parents.flatMap(
      (a) => V(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return z(n, [">"], [t], s).map((a) => a.join("")).join(",");
}
function ns(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${E(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${E(t.parentElement)}>${i} [${r}]`;
}
function ss(t, e) {
  const [i, r] = q(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, c, o] = [
    $[t].parents.flatMap(
      (d) => V(d, i).split(",")
    ),
    [`[type="${n}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return z(
    a,
    [">"],
    [t],
    c,
    o
  ).map((d) => d.join("")).join(",");
}
function as(t) {
  return `${E(t.parentElement)}>${t.getAttribute("ord")}`;
}
function cs(t, e) {
  const [i, r] = q(e);
  return `${V("EnumType", i)}>${t}[ord="${r}"]`;
}
function os(t) {
  return `${E(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function ds(t, e) {
  const [i, r] = q(e), [n, s] = r.split("	"), [a] = [
    $[t].parents.flatMap(
      (c) => V(c, i).split(",")
    )
  ];
  return z(
    a,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [s]
  ).map((c) => c.join("")).join(",");
}
function ls() {
  return "";
}
function ps() {
  return ":root";
}
function I(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${E(t.parentElement)}>${t.getAttribute("name")}`;
}
function C(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = q(e);
  if (!n) return L;
  if (i === 0) return `${t}[name="${n}"]`;
  const s = $[t].parents;
  if (!s) return L;
  const a = s.flatMap(
    (c) => $[c].selector === $.Substation.selector ? C(c, r, i - 1).split(",") : V(c, r).split(",")
  ).filter((c) => !c.startsWith(L));
  return a.length === 0 ? L : z(a, [">"], [t], [`[name="${n}"]`]).map((c) => c.join("")).join(",");
}
function f(t) {
  return E(t.parentElement).toString();
}
function b(t, e) {
  const i = $[t].parents;
  if (!i) return L;
  const r = i.flatMap((n) => V(n, e).split(",")).filter((n) => !n.startsWith(L));
  return r.length === 0 ? L : z(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Be(t) {
  return `#${t.id}`;
}
function Ge(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : L;
}
const Bi = [
  "TransformerWinding",
  "ConductingEquipment"
], Gi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Bi
], St = ["Substation", "VoltageLevel", "Bay"], Hi = ["Process", "Line"], ji = ["EqSubFunction", "EqFunction"], us = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Gi,
  ...St,
  ...Hi,
  ...ji
], Wi = ["ConnectivityNode", ...us], ms = ["GOOSESecurity", "SMVSecurity"], hs = ["SubNetwork", ...ms, ...Wi], fs = ["BDA", "DA"], bs = ["SampledValueControl", "GSEControl"], ys = ["LogControl", "ReportControl"], gs = [...bs, ...ys], vs = ["GSE", "SMV"], Ss = [
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
  ...gs,
  ...vs,
  ...fs
], be = ["LN0", "LN"], xs = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], _s = ["Subject", "IssuerName"], As = ["MinTime", "MaxTime"], ks = ["LNodeType", "DOType", "DAType", "EnumType"], Cs = [
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
], Is = ["DynDataSet", "ConfDataSet"], ws = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Is
], Es = ["ConfLogControl", "ConfSigRef"], Ts = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Ps = ["SCL", ...hs, ...Ss, ...ks], Xi = [
  ...Ps,
  ...xs,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ..._s,
  ...As,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...be,
  ...Cs,
  "DynAssociation",
  "SettingGroups",
  ...ws,
  ...Es,
  ...Ts,
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
], Ns = new Set(Xi);
function Lt(t) {
  return Ns.has(t);
}
const Qe = ["Text", "Private"], pe = [...Qe], R = [...Qe], He = [...Qe], ni = [...R, "Val"], Ki = [...pe, "LNode"], me = [...Ki], xt = [...me], st = [
  ...me,
  "PowerTransformer",
  "GeneralEquipment"
], si = [
  ...xt,
  "Terminal"
], ai = [...R, "Address"], Zi = [...pe], ci = [...Zi, "IEDName"], oi = [
  ...R,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], di = [
  ...me,
  "GeneralEquipment",
  "Function"
], li = [...Zi, "TrgOps"], pi = [
  ...me,
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
    identity: I,
    selector: C,
    parents: ["IED"],
    children: [
      ...pe,
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
    identity: Mn,
    selector: Vn,
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
    identity: I,
    selector: C,
    parents: ["DAType"],
    children: [...ni]
  },
  BitRate: {
    identity: f,
    selector: b,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: I,
    selector: C,
    parents: ["VoltageLevel"],
    children: [
      ...st,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Zn,
    selector: Jn,
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
    identity: I,
    selector: C,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...si,
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
    identity: es,
    selector: ts,
    parents: ["SubNetwork"],
    children: [...R, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: I,
    selector: C,
    parents: ["Bay", "Line"],
    children: [...Ki]
  },
  DA: {
    identity: I,
    selector: C,
    parents: ["DOType"],
    children: [...ni]
  },
  DAI: {
    identity: ti,
    selector: vt,
    parents: ["DOI", "SDI"],
    children: [...R, "Val"]
  },
  DAType: {
    identity: Be,
    selector: Ge,
    parents: ["DataTypeTemplates"],
    children: [...He, "BDA", "ProtNs"]
  },
  DO: {
    identity: I,
    selector: C,
    parents: ["LNodeType"],
    children: [...R]
  },
  DOI: {
    identity: I,
    selector: C,
    parents: [...be],
    children: [...R, "SDI", "DAI"]
  },
  DOType: {
    identity: Be,
    selector: Ge,
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
    identity: I,
    selector: C,
    parents: [...be],
    children: [...pe, "FCDA"]
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
    identity: Be,
    selector: Ge,
    parents: ["DataTypeTemplates"],
    children: [...He, "EnumVal"]
  },
  EnumVal: {
    identity: as,
    selector: cs,
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
    children: [...pi]
  },
  EqSubFunction: {
    identity: I,
    selector: C,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...pi]
  },
  ExtRef: {
    identity: jn,
    selector: Wn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Gn,
    selector: Hn,
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
    identity: I,
    selector: C,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...me,
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
      ...Hi,
      ...ji,
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
    identity: I,
    selector: C,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ii,
    selector: ri,
    parents: ["ConnectedAP"],
    children: [...ai, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: I,
    selector: C,
    parents: ["LN0"],
    children: [...ci, "Protocol"]
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
    identity: Dn,
    selector: Rn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: I,
    selector: C,
    parents: ["SCL"],
    children: [...R, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Un,
    selector: Bn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: f,
    selector: b,
    parents: [...be],
    children: [...R, "ExtRef"]
  },
  IssuerName: {
    identity: f,
    selector: b,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: On,
    selector: Fn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: zn,
    selector: qn,
    parents: ["Server"],
    children: [...R, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Xn,
    selector: Kn,
    parents: ["AccessPoint", "LDevice"],
    children: [...oi]
  },
  LN0: {
    identity: f,
    selector: b,
    parents: ["LDevice"],
    children: [
      ...oi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Ln,
    selector: $n,
    parents: [...Wi],
    children: [...R]
  },
  LNodeType: {
    identity: Be,
    selector: Ge,
    parents: ["DataTypeTemplates"],
    children: [...He, "DO"]
  },
  Line: {
    identity: I,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...di,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: I,
    selector: C,
    parents: [...be],
    children: [...R]
  },
  LogControl: {
    identity: I,
    selector: C,
    parents: [...be],
    children: [...li]
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
    identity: Yt,
    selector: ei,
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
    identity: ns,
    selector: ss,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: is,
    selector: rs,
    parents: ["ConnectedAP"],
    children: [...R, "P"]
  },
  PowerTransformer: {
    identity: I,
    selector: C,
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
    identity: I,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...di,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: os,
    selector: ds,
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
    identity: I,
    selector: C,
    parents: [...be],
    children: [...li, "OptFields", "RptEnabled"]
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
    identity: I,
    selector: C,
    parents: ["LN0"],
    children: [...ci, "SmvOpts"]
  },
  SecPerSamples: {
    identity: f,
    selector: b,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: ls,
    selector: ps,
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
    identity: ti,
    selector: vt,
    parents: ["DOI", "SDI"],
    children: [...R, "SDI", "DAI"]
  },
  SDO: {
    identity: I,
    selector: C,
    parents: ["DOType"],
    children: [...pe]
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
    identity: ii,
    selector: ri,
    parents: ["ConnectedAP"],
    children: [...ai]
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
    identity: I,
    selector: C,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: f,
    selector: b,
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
      ...Bi
    ],
    children: [...me, "EqFunction"]
  },
  SubFunction: {
    identity: I,
    selector: C,
    parents: ["SubFunction", "Function"],
    children: [
      ...me,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: I,
    selector: C,
    parents: ["Communication"],
    children: [...pe, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: f,
    selector: b,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: I,
    selector: C,
    parents: ["SCL"],
    children: [...st, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: f,
    selector: b,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: I,
    selector: C,
    parents: ["TransformerWinding"],
    children: [...me, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Yt,
    selector: ei,
    parents: [...Gi],
    children: [...R]
  },
  Text: {
    identity: f,
    selector: b,
    parents: Xi.filter((t) => t !== "Text" && t !== "Private"),
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
    identity: I,
    selector: C,
    parents: ["PowerTransformer"],
    children: [
      ...si,
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
    identity: Qn,
    selector: Yn,
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
    identity: I,
    selector: C,
    parents: ["Substation"],
    children: [...st, "Voltage", "Bay", "Function"]
  }
};
function V(t, e) {
  return typeof e != "string" ? L : Lt(t) ? $[t].selector(t, e) : t;
}
function ge(t, e, i) {
  if (typeof i != "string" || !Lt(e)) return null;
  const r = t.querySelector($[e].selector(e, i));
  return r === null || Xe(r) ? r : Array.from(
    t.querySelectorAll($[e].selector(e, i))
  ).find(Xe) ?? null;
}
function E(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Lt(e) ? $[e].identity(t) : NaN;
}
function z(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Ji(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Ji(i, e))
      );
    default:
      return 0;
  }
}
function Xe(t) {
  return !t.closest("Private");
}
const Ds = 99;
Array(Ds).fill(1).map((t, e) => `${e + 1}`);
function Rs(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const Ls = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], $s = [
  "None",
  "Signature",
  "SignatureAndEncryption"
], ui = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*"
}, Os = {
  cbName: 32
}, T = {
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
}, Fs = {
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
}, Ms = {
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
function Qi(t) {
  return [
    u`<mwc-formfield label="${g("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    u`${Object.entries(t.attributes).map(
      ([e, i]) => u`<wizard-textfield
          label="${e}"
          ?nullable=${Ms[e]}
          .maybeValue=${i}
          pattern="${ne(Fs[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Vs(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Yi(t, e, i) {
  const r = ye(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([n, s]) => s !== null).forEach(([n, s]) => {
    const a = n, c = ye(e.ownerDocument, "P", { type: a });
    i && c.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + n
    ), c.textContent = s, r.appendChild(c);
  }), r;
}
function zs(t, e, i) {
  const r = [], n = Yi(e, t, i), s = t.querySelector("Address");
  return s !== null && !Vs(s, n) ? (r.push({
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
function qs(t) {
  return (e, i) => {
    const r = {
      actions: [],
      title: g("smv.action.addaddress", {
        identity: E(t)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked, s = {};
    s["MAC-Address"] = te(
      e.find((c) => c.label === "MAC-Address")
    ), s.APPID = te(e.find((c) => c.label === "APPID")), s["VLAN-ID"] = te(
      e.find((c) => c.label === "VLAN-ID")
    ), s["VLAN-PRIORITY"] = te(
      e.find((c) => c.label === "VLAN-PRIORITY")
    );
    const a = zs(t, s, n);
    return a.length ? (a.forEach((c) => {
      r.actions.push(c);
    }), [r]) : [];
  };
}
function Us(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (r) => r.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((r) => {
    i[r] || (i[r] = t.querySelector(`Address > P[type="${r}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: g("save"),
        icon: "edit",
        action: qs(t)
      },
      content: [...Qi({ hasInstType: e, attributes: i })]
    }
  ];
}
function _t(t) {
  return Object.entries(t).map(
    ([e, i]) => u`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${g(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Bs(t) {
  return (e) => {
    const i = {}, r = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (r.forEach((s) => {
      i[s] = te(e.find((a) => a.label === s));
    }), !r.some((s) => i[s] !== t.getAttribute(s)))
      return [];
    const n = We(t, i);
    return [{ old: { element: t }, new: { element: n } }];
  };
}
function Gs(t) {
  const [e, i, r, n, s] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((a) => t.getAttribute(a));
  return [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: g("save"),
        action: Bs(t)
      },
      content: [
        ..._t({
          refreshTime: e,
          sampleRate: i,
          dataSet: r,
          security: n,
          synchSourceId: s
        })
      ]
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
const mi = /* @__PURE__ */ new WeakMap(), hi = 2147483647, Hs = Ke((...t) => (e) => {
  let i = mi.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: hi,
    values: []
  }, mi.set(e, i));
  const r = i.values;
  let n = r.length;
  i.values = t;
  for (let s = 0; s < t.length && !(s > i.lastRenderedIndex); s++) {
    const a = t[s];
    if (Ze(a) || typeof a.then != "function") {
      e.setValue(a), i.lastRenderedIndex = s;
      break;
    }
    s < n && a === r[s] || (i.lastRenderedIndex = hi, n = 0, Promise.resolve(a).then((c) => {
      const o = i.values.indexOf(a);
      o > -1 && o < i.lastRenderedIndex && (i.lastRenderedIndex = o, e.setValue(c), e.commit());
    }));
  }
});
var js = Object.defineProperty, Ws = Object.getOwnPropertyDescriptor, oe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ws(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && js(e, i, n), n;
};
const Xs = u`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${g("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ee = class extends ve {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: u`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Ji(this.selection);
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
    return u`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => u`<mwc-list-item
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
        u`${ne(n)} ${this.renderDirectory(a, s)}`
      );
    return r.length === 0 ? u`` : u`<div class="column">${r}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), u`<div class="pane">
      ${t.map((e) => Hs(e, Xs))}
    </div>`;
  }
};
ee.styles = Ie`
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
oe([
  h({ type: Object })
], ee.prototype, "selection", 2);
oe([
  h({ type: Boolean })
], ee.prototype, "multi", 2);
oe([
  h({ type: Number })
], ee.prototype, "depth", 1);
oe([
  h({ type: Array })
], ee.prototype, "paths", 1);
oe([
  h({ type: Array })
], ee.prototype, "path", 1);
oe([
  h({ attribute: !1 })
], ee.prototype, "read", 2);
oe([
  h({ attribute: !1 })
], ee.prototype, "loaded", 2);
oe([
  B("div")
], ee.prototype, "container", 2);
ee = oe([
  ce("finder-list")
], ee);
function $t(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function Ot(t, e) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), s = ge(t, r, n);
    return s ? {
      path: i,
      header: void 0,
      entries: e(s).map(
        (a) => `${a.tagName}: ${E(a)}`
      )
    } : { path: i, header: u`<p>${g("error")}</p>`, entries: [] };
  };
}
function Ks(t) {
  return t.tagName === "SCL" ? Array.from(t.querySelectorAll("IED")).filter(Xe) : [];
}
function Zs(t) {
  return u`<finder-list
    path="${JSON.stringify(["SCL: "])}"
    .read=${Ot(t, Ks)}
    .getDisplayString=${$t}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function er(t) {
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
function Js(t) {
  return u`<finder-list
    multi
    .paths=${[["Server: " + E(t)]]}
    .read=${Ot(t.ownerDocument, er)}
    .getDisplayString=${$t}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Qs(t) {
  if (t.tagName === "Server")
    return Array.from(t.children).filter(
      (r) => r.tagName === "LDevice" && r.querySelector('LN[lnClass="TCTR"],LN[lnClass="TVTR"]')
    );
  if (t.tagName === "LDevice")
    return Array.from(t.children).filter(
      (r) => r.tagName === "LN" && (r.getAttribute("lnClass") === "TCTR" || r.getAttribute("lnClass") === "TVTR")
    );
  const e = t.tagName === "LN" || t.tagName === "LN0" ? t.getAttribute("lnType") : t.getAttribute("type"), i = t.ownerDocument.querySelector(
    `LNodeType[id="${e}"], DOType[id="${e}"], DAType[id="${e}"]`
  );
  return i ? i?.tagName === "LNodeType" ? Array.from(i.querySelectorAll("DO") ?? []).filter(
    (r) => r.ownerDocument.querySelector(
      `DOType[id="${r.getAttribute("type")}"][cdc="SAV"]`
    )
  ) : i?.tagName === "DOType" ? Array.from(i.querySelectorAll("DA") ?? []).filter(
    (r) => r.getAttribute("name") === "instMag" || r.getAttribute("name") === "q"
  ) : Array.from(
    t.ownerDocument.querySelectorAll(
      `LNodeType[id="${e}"] > DO, DOType[id="${e}"] > SDO, DOType[id="${e}"] > DA, DAType[id="${e}"] > BDA`
    )
  ) : [];
}
function fi(t) {
  return u`<finder-list
    multi
    paths=${JSON.stringify([["Server: " + E(t)]])}
    .read=${Ot(t.ownerDocument, Qs)}
    .getDisplayString=${$t}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function tr(t, e) {
  const [i, r] = e[e.length - 1].split(": "), n = ge(t.ownerDocument, i, r);
  if (!n || er(n).length > 0) return;
  const s = e.find((v) => v.startsWith("LN"));
  if (!s) return;
  const [a, c] = s.split(": "), o = ge(t.ownerDocument, a, c);
  if (!o) return;
  const d = o.closest("LDevice")?.getAttribute("inst"), p = o.getAttribute("prefix") ?? "", l = o.getAttribute("lnClass"), y = o.getAttribute("inst") && o.getAttribute("inst") !== "" ? o.getAttribute("inst") : null;
  let S = "", x = "", k = "";
  for (const v of e) {
    const [_, w] = v.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(_)) continue;
    const D = ge(t.ownerDocument, _, w);
    if (!D) return;
    const Q = D.getAttribute("name");
    _ === "DO" && (S = Q), _ === "SDO" && (S = S + "." + Q), _ === "DA" && (x = Q, k = D.getAttribute("fc") ?? ""), _ === "BDA" && (x = x + "." + Q);
  }
  if (!(!d || !l || !S || !x || !k))
    return ye(t.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: p,
      lnClass: l,
      lnInst: y,
      doName: S,
      daName: x,
      fc: k
    });
}
function Ys(t) {
  return (e, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], s = [];
    for (const a of n) {
      const c = tr(t, a);
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
function ea(t) {
  const e = t.closest("Server");
  return [
    {
      title: g("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Ys(t)
      },
      content: [e ? Js(e) : u``]
    }
  ];
}
function ta(t) {
  return (e) => {
    e.dispatchEvent(Me(() => ea(t)));
  };
}
function ia(t) {
  return (e, i) => {
    const r = e.find((d) => d.label === "name").value, n = te(e.find((d) => d.label === "desc")), s = t.getAttribute("name"), a = [];
    if (!(r === s && n === t.getAttribute("desc"))) {
      const d = We(t, { name: r, desc: n });
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
      const p = We(d, { datSet: r });
      return { old: { element: d }, new: { element: p } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((d) => ge(t, "FCDA", d.value)).filter((d) => d).map((d) => ({
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
function ra(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: g("save"),
        icon: "save",
        action: ia(t)
      },
      menuActions: [
        {
          icon: "add",
          label: g("dataset.fcda.add"),
          action: ta(t)
        }
      ],
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${g("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${g("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        u`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (r) => u`<mwc-check-list-item selected value="${E(r)}"
                >${E(r).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function ir(t) {
  return t.ownerDocument.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${t.closest("IED")?.getAttribute("name")}"][apName="${t.closest("AccessPoint")?.getAttribute("name")}"]`
  );
}
function rr(t) {
  return !!ir(t);
}
function na(t) {
  const e = t.split("-").join("");
  return ("0" + (parseInt(e, 16) + 1).toString(16).toUpperCase()).match(/.{1,2}/g).join("-");
}
function sa(t, e) {
  const i = "01-0C-CD-04-01-FF", r = "01-0C-CD-04-00-00", n = Array.from(t.querySelectorAll("Address > P")).filter((a) => a.getAttribute("type") === "MAC-Address").map((a) => a.innerHTML.trim());
  let s = r;
  for (; s !== i; ) {
    if (!n.includes(s)) return s;
    s = na(s);
  }
  return n.includes(s) ? null : s;
}
function aa(t) {
  return (parseInt(t, 16) + 1).toString(16).toUpperCase().padStart(4, "0");
}
function ca(t) {
  const e = "FFFF", i = "0001", r = Array.from(t.querySelectorAll("Address > P")).filter((s) => s.getAttribute("type") === "APPID").map((s) => s.innerHTML.trim());
  if (r.length === 0) return null;
  let n = i;
  for (; n !== e; ) {
    if (!r.includes(n)) return n;
    n = aa(n);
  }
  return r.includes(n) ? null : n;
}
function nr(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), r = t.closest("AccessPoint")?.getAttribute("name"), n = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > SMV[ldInst="${n}"][cbName="${e}"]`
  ) ?? null;
}
function oa(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = nr(t), r = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (c) => c.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: t.parentElement,
      element: t
    }
  }), e && r && n.push({
    old: {
      parent: t.parentElement,
      element: e
    }
  }), i && n.push({
    old: {
      parent: i.parentElement,
      element: i
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
function At(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${g("scl.name")}"
      required
      validationMessage="${g("textfield.required")}"
      pattern="${ui.asciName}"
      maxLength="${Os.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      pattern="${ui.normalizedString}"
      helper="${g("scl.desc")}"
    ></wizard-textfield>`,
    t.multicast === "true" ? u`` : u`<wizard-checkbox
          label="multicast"
          .maybeValue=${t.multicast}
          helper="${g("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    u`<wizard-textfield
      label="smvID"
      .maybeValue=${t.smvID}
      helper="${g("scl.id")}"
      required
      validationMessage="${g("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="smpMod"
      .maybeValue=${t.smpMod}
      nullable
      required
      helper="${g("scl.smpMod")}"
      >${Ls.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="smpRate"
      .maybeValue=${t.smpRate}
      helper="${g("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nofASDU"
      .maybeValue=${t.nofASDU}
      helper="${g("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${g("scl.securityEnable")}"
      >${$s.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function bi(t) {
  return (e, i) => {
    const r = {};
    [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ].forEach((v) => {
      if (v === "multicast" && !e.find((w) => w.label === v)) {
        r.multicast = "true";
        return;
      }
      r[v] = te(
        e.find((w) => w.label === v)
      );
    }), r.confRev = "1";
    const s = r.name + "sDataSet";
    r.datSet = s;
    const a = ye(
      t.ownerDocument,
      "SampledValueControl",
      r
    ), c = {};
    [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ].forEach((v) => {
      c[v] = te(e.find((_) => _.label === v));
    });
    const d = ye(
      t.ownerDocument,
      "SmvOpts",
      c
    );
    a.appendChild(d);
    let p = null, l = null;
    if (rr(t)) {
      const v = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, _ = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((Q) => {
        _[Q] = te(e.find((we) => we.label === Q));
      }), p = ye(t.ownerDocument, "SMV", {
        ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: r.name
      });
      const D = Yi(_, p, v);
      p.appendChild(D), l = ir(t);
    }
    const y = ye(t.ownerDocument, "DataSet", {
      name: s
    }), x = i.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const v of x) {
      const _ = tr(t, v);
      _ && y.appendChild(_);
    }
    return [p ? {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: t, element: a } },
        { new: { parent: l, element: p } },
        { new: { parent: t, element: y } }
      ]
    } : {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: t, element: a } },
        { new: { parent: t, element: y } }
      ]
    }];
  };
}
function sr(t) {
  const e = t.closest("Server"), i = qi(t, "SampledValueControl"), r = null, n = "true", s = "", a = "SmpPerPeriod", c = "80", o = "1", d = null, p = null, l = "true", y = "true", S = null, x = "true", k = !0, v = {
    "MAC-Address": sa(t.ownerDocument),
    APPID: ca(t.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return rr(t) ? [
    {
      title: g("wizard.title.add", { tagName: "SampledValueControl" }),
      content: At({
        name: i,
        desc: r,
        multicast: n,
        smvID: s,
        smpMod: a,
        smpRate: c,
        nofASDU: o,
        securityEnabled: d
      })
    },
    {
      title: g("wizard.title.add", { tagName: "SmvOpts" }),
      content: _t({
        refreshTime: p,
        sampleRate: l,
        dataSet: y,
        security: S,
        synchSourceId: x
      })
    },
    {
      title: g("wizard.title.add", { tagName: "SMV" }),
      content: [...Qi({ hasInstType: k, attributes: v })]
    },
    {
      title: g("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: g("save"),
        action: bi(t)
      },
      content: [e ? fi(e) : u``]
    }
  ] : [
    {
      title: g("wizard.title.add", { tagName: "SampledValueControl" }),
      content: At({
        name: i,
        desc: r,
        multicast: n,
        smvID: s,
        smpMod: a,
        smpRate: c,
        nofASDU: o,
        securityEnabled: d
      })
    },
    {
      title: g("wizard.title.add", { tagName: "SmvOpts" }),
      content: _t({
        refreshTime: p,
        sampleRate: l,
        dataSet: y,
        security: S,
        synchSourceId: x
      })
    },
    {
      title: g("wizard.title.add", { tagName: "SMV" }),
      content: [
        u`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${g("smv.missingaccp")}
            </h3>`
      ]
    },
    {
      title: g("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: g("save"),
        action: bi(t)
      },
      content: [e ? fi(e) : u``]
    }
  ];
}
function da(t) {
  return (e, i) => {
    const n = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (n.length === 0) return [];
    const [s, a] = n.pop().split(": ");
    if (s !== "IED") return [];
    const c = ge(t, s, a);
    if (!c) return [];
    const o = c.querySelector("LN0");
    return o ? [() => sr(o)] : [];
  };
}
function la(t) {
  return [
    {
      title: g("samvpledvaluecontrol.wizard.location"),
      primary: {
        icon: "",
        label: g("next"),
        action: da(t)
      },
      content: [Zs(t)]
    }
  ];
}
function pa(t) {
  return () => t.tagName === "IED" && t.querySelector("LN0") ? [
    () => sr(t.querySelector("LN0"))
  ] : [() => la(t.ownerDocument)];
}
function ua(t) {
  return (e) => {
    const i = oa(t);
    i && e.dispatchEvent(Rs(i)), e.dispatchEvent(Ui());
  };
}
function ma(t) {
  return (e) => {
    e.dispatchEvent(Me(() => ra(t)));
  };
}
function ha(t) {
  return (e) => {
    e.dispatchEvent(Me(() => Gs(t)));
  };
}
function fa(t) {
  return (e) => {
    e.dispatchEvent(Me(() => Us(t)));
  };
}
function ba(t) {
  return (e) => {
    const i = {}, r = [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ];
    r.forEach((a) => {
      if (a === "multicast" && !e.find((o) => o.label === a)) {
        i.multicast = "true";
        return;
      }
      i[a] = te(e.find((o) => o.label === a));
    });
    let n = null;
    if (r.some((a) => i[a] !== t.getAttribute(a))) {
      const a = We(t, i);
      n = {
        old: { element: t },
        new: { element: a }
      };
    }
    const s = [];
    return n && s.push(n), s;
  };
}
function ya(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), r = t.getAttribute("multicast"), n = t.getAttribute("smvID"), s = t.getAttribute("smpMod"), a = t.getAttribute("smpRate"), c = t.getAttribute("nofASDU"), o = t.getAttribute("securityEnabled"), d = nr(t), p = t.querySelector("SmvOpts"), l = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), y = [];
  return y.push({
    icon: "delete",
    label: g("remove"),
    action: ua(t)
  }), l && y.push({
    icon: "edit",
    label: g("scl.DataSet"),
    action: ma(l)
  }), p && y.push({
    icon: "edit",
    label: g("scl.SmvOpts"),
    action: ha(p)
  }), d && y.push({
    icon: "edit",
    label: g("scl.Communication"),
    action: fa(d)
  }), [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: g("save"),
        action: ba(t)
      },
      menuActions: y,
      content: [
        ...At({
          name: e,
          desc: i,
          multicast: r,
          smvID: n,
          smpMod: s,
          smpRate: a,
          nofASDU: c,
          securityEnabled: o
        })
      ]
    }
  ];
}
function Na(t) {
  const e = Array.from(
    t.querySelectorAll("SampledValueControl")
  ).filter(Xe), i = t.querySelector("LN0") ? {
    icon: "add",
    label: g("scl.SampledValueControl"),
    action: pa(t)
  } : void 0;
  return [
    {
      title: g("wizard.title.select", { tagName: "SampledValueControl" }),
      primary: i,
      content: [
        u`<filtered-list
          @selected=${(r) => {
          const n = r.target.selected.value, s = ge(
            t,
            "SampledValueControl",
            n
          );
          s && r.target?.dispatchEvent(
            Me(
              () => ya(s)
            )
          );
        }}
          >${e.map(
          (r) => u`<mwc-list-item twoline value="${E(r)}"
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
  sr as createSampledValueControlWizard,
  ya as editSampledValueControlWizard,
  nr as getSMV,
  oa as removeSampledValueControlAction,
  la as sampledValueControlParentSelector,
  Na as selectSampledValueControlWizard
};
