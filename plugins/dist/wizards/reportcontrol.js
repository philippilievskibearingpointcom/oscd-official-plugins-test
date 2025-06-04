import "@material/mwc-button";
import "@material/mwc-formfield";
import "@material/mwc-switch";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import { TextField as pr } from "@material/mwc-textfield";
import { Select as ur } from "@material/mwc-select";
import { List as hr } from "@material/mwc-list";
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
const $t = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, kt = (t, e, i = null) => {
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
const se = `{{lit-${String(Math.random()).slice(2)}}}`, li = `<!--${se}-->`, Lt = new RegExp(`${se}|${li}`), Ne = "$lit$";
class pi {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const r = [], n = [], s = document.createTreeWalker(i.content, 133, null, !1);
    let a = 0, o = -1, c = 0;
    const { strings: d, values: { length: p } } = e;
    for (; c < p; ) {
      const l = s.nextNode();
      if (l === null) {
        s.currentNode = n.pop();
        continue;
      }
      if (o++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const h = l.attributes, { length: v } = h;
          let S = 0;
          for (let x = 0; x < v; x++)
            Pt(h[x].name, Ne) && S++;
          for (; S-- > 0; ) {
            const x = d[c], k = ot.exec(x)[2], A = k.toLowerCase() + Ne, I = l.getAttribute(A);
            l.removeAttribute(A);
            const w = I.split(Lt);
            this.parts.push({ type: "attribute", index: o, name: k, strings: w }), c += w.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (n.push(l), s.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const h = l.data;
        if (h.indexOf(se) >= 0) {
          const v = l.parentNode, S = h.split(Lt), x = S.length - 1;
          for (let k = 0; k < x; k++) {
            let A, I = S[k];
            if (I === "")
              A = ue();
            else {
              const w = ot.exec(I);
              w !== null && Pt(w[2], Ne) && (I = I.slice(0, w.index) + w[1] + w[2].slice(0, -Ne.length) + w[3]), A = document.createTextNode(I);
            }
            v.insertBefore(A, l), this.parts.push({ type: "node", index: ++o });
          }
          S[x] === "" ? (v.insertBefore(ue(), l), r.push(l)) : l.data = S[x], c += x;
        }
      } else if (l.nodeType === 8)
        if (l.data === se) {
          const h = l.parentNode;
          (l.previousSibling === null || o === a) && (o++, h.insertBefore(ue(), l)), a = o, this.parts.push({ type: "node", index: o }), l.nextSibling === null ? l.data = "" : (r.push(l), o--), c++;
        } else {
          let h = -1;
          for (; (h = l.data.indexOf(se, h + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const l of r)
      l.parentNode.removeChild(l);
  }
}
const Pt = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, ui = (t) => t.index !== -1, ue = () => document.createComment(""), ot = (
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
const At = 133;
function hi(t, e) {
  const { element: { content: i }, parts: r } = t, n = document.createTreeWalker(i, At, null, !1);
  let s = $e(r), a = r[s], o = -1, c = 0;
  const d = [];
  let p = null;
  for (; n.nextNode(); ) {
    o++;
    const l = n.currentNode;
    for (l.previousSibling === p && (p = null), e.has(l) && (d.push(l), p === null && (p = l)), p !== null && c++; a !== void 0 && a.index === o; )
      a.index = p !== null ? -1 : a.index - c, s = $e(r, s), a = r[s];
  }
  d.forEach((l) => l.parentNode.removeChild(l));
}
const mr = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, At, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, $e = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const r = t[i];
    if (ui(r))
      return i;
  }
  return -1;
};
function fr(t, e, i = null) {
  const { element: { content: r }, parts: n } = t;
  if (i == null) {
    r.appendChild(e);
    return;
  }
  const s = document.createTreeWalker(r, At, null, !1);
  let a = $e(n), o = 0, c = -1;
  for (; s.nextNode(); )
    for (c++, s.currentNode === i && (o = mr(e), i.parentNode.insertBefore(e, i)); a !== -1 && n[a].index === c; ) {
      if (o > 0) {
        for (; a !== -1; )
          n[a].index += o, a = $e(n, a);
        return;
      }
      a = $e(n, a);
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
const mi = /* @__PURE__ */ new WeakMap(), Ke = (t) => (...e) => {
  const i = t(...e);
  return mi.set(i, !0), i;
}, Fe = (t) => typeof t == "function" && mi.has(t);
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
const te = {}, Ft = {};
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
    const e = $t ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, a = 0, o, c = n.nextNode();
    for (; s < r.length; ) {
      if (o = r[s], !ui(o)) {
        this.__parts.push(void 0), s++;
        continue;
      }
      for (; a < o.index; )
        a++, c.nodeName === "TEMPLATE" && (i.push(c), n.currentNode = c.content), (c = n.nextNode()) === null && (n.currentNode = i.pop(), c = n.nextNode());
      if (o.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(c.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, o.name, o.strings, this.options));
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
const Ot = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), br = ` ${se} `;
class fi {
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
      const o = ot.exec(s);
      o === null ? i += s + (r ? br : li) : i += s.substr(0, o.index) + o[1] + o[2] + Ne + o[3] + se;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return Ot !== void 0 && (i = Ot.createHTML(i)), e.innerHTML = i, e;
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
const Ze = (t) => t === null || !(typeof t == "object" || typeof t == "function"), dt = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class bi {
  constructor(e, i, r) {
    this.dirty = !0, this.element = e, this.name = i, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Ee(this);
  }
  _getValue() {
    const e = this.strings, i = e.length - 1, r = this.parts;
    if (i === 1 && e[0] === "" && e[1] === "") {
      const s = r[0].value;
      if (typeof s == "symbol")
        return String(s);
      if (typeof s == "string" || !dt(s))
        return s;
    }
    let n = "";
    for (let s = 0; s < i; s++) {
      n += e[s];
      const a = r[s];
      if (a !== void 0) {
        const o = a.value;
        if (Ze(o) || !dt(o))
          n += typeof o == "string" ? o : String(o);
        else
          for (const c of o)
            n += typeof c == "string" ? c : String(c);
      }
    }
    return n += e[i], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Ee {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== te && (!Ze(e) || e !== this.value) && (this.value = e, Fe(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Fe(this.value); ) {
      const e = this.value;
      this.value = te, e(this);
    }
    this.value !== te && this.committer.commit();
  }
}
class Me {
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
    for (; Fe(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = te, i(this);
    }
    const e = this.__pendingValue;
    e !== te && (Ze(e) ? e !== this.value && this.__commitText(e) : e instanceof fi ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : dt(e) ? this.__commitIterable(e) : e === Ft ? (this.value = Ft, this.clear()) : this.__commitText(e));
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
      n = i[r], n === void 0 && (n = new Me(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(s), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    kt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class gr {
  constructor(e, i, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Fe(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = te, i(this);
    }
    if (this.__pendingValue === te)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = te;
  }
}
class yr extends bi {
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
class Ct extends Ee {
}
let gi = !1;
(() => {
  try {
    const t = {
      get capture() {
        return gi = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
class vr {
  constructor(e, i, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Fe(this.__pendingValue); ) {
      const s = this.__pendingValue;
      this.__pendingValue = te, s(this);
    }
    if (this.__pendingValue === te)
      return;
    const e = this.__pendingValue, i = this.value, r = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), n = e != null && (i == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Sr(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = te;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Sr = (t) => t && (gi ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
function xr(t) {
  let e = Oe.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Oe.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const r = t.strings.join(se);
  return i = e.keyString.get(r), i === void 0 && (i = new pi(t, t.getTemplateElement()), e.keyString.set(r, i)), e.stringsArray.set(t.strings, i), i;
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
const Ae = /* @__PURE__ */ new WeakMap(), _r = (t, e, i) => {
  let r = Ae.get(e);
  r === void 0 && (kt(e, e.firstChild), Ae.set(e, r = new Me(Object.assign({ templateFactory: xr }, i))), r.appendInto(e)), r.setValue(t), r.commit();
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
class kr {
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
    return s === "." ? new yr(e, i.slice(1), r).parts : s === "@" ? [new vr(e, i.slice(1), n.eventContext)] : s === "?" ? [new gr(e, i.slice(1), r)] : new bi(e, i, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Me(e);
  }
}
const Ar = new kr();
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
const m = (t, ...e) => new fi(t, e, "html", Ar);
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
const yi = (t, e) => `${t}--${e}`;
let We = !0;
typeof window.ShadyCSS > "u" ? We = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), We = !1);
const Cr = (t) => (e) => {
  const i = yi(e.type, t);
  let r = Oe.get(i);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Oe.set(i, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const s = e.strings.join(se);
  if (n = r.keyString.get(s), n === void 0) {
    const a = e.getTemplateElement();
    We && window.ShadyCSS.prepareTemplateDom(a, t), n = new pi(e, a), r.keyString.set(s, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, wr = ["html", "svg"], Er = (t) => {
  wr.forEach((e) => {
    const i = Oe.get(yi(e, t));
    i !== void 0 && i.keyString.forEach((r) => {
      const { element: { content: n } } = r, s = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((a) => {
        s.add(a);
      }), hi(r, s);
    });
  });
}, vi = /* @__PURE__ */ new Set(), Ir = (t, e, i) => {
  vi.add(t);
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
  Er(t);
  const o = r.content;
  i ? fr(i, a, o.firstChild) : o.insertBefore(a, o.firstChild), window.ShadyCSS.prepareTemplateStyles(r, t);
  const c = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (i) {
    o.insertBefore(a, o.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(a), hi(i, d);
  }
}, Rr = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = i.scopeName, n = Ae.has(e), s = We && e.nodeType === 11 && !!e.host, a = s && !vi.has(r), o = a ? document.createDocumentFragment() : e;
  if (_r(t, o, Object.assign({ templateFactory: Cr(r) }, i)), a) {
    const c = Ae.get(o);
    Ae.delete(o);
    const d = c.value instanceof ct ? c.value.template : void 0;
    Ir(r, o, d), kt(e, e.firstChild), e.appendChild(o), Ae.set(e, c);
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
var Si;
window.JSCompiler_renameProperty = (t, e) => t;
const lt = {
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
}, xi = (t, e) => e !== t && (e === e || t === t), tt = {
  attribute: !0,
  type: String,
  converter: lt,
  reflect: !1,
  hasChanged: xi
}, it = 1, Mt = 4, zt = 8, qt = 16, pt = "finalized";
class _i extends HTMLElement {
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
    if (e.hasOwnProperty(pt) || e.finalize(), this[pt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, i, r = xi) {
    return r(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const r = i.type, n = i.converter || lt, s = typeof n == "function" ? n : n.fromAttribute;
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
    return (n && n.toAttribute || lt.toAttribute)(e, r);
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
      this._updateState = this._updateState | zt, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & zt)
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
    this._updateState = this._updateState | Mt;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Mt;
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
Si = pt;
_i[Si] = !0;
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
const Tr = (t, e) => (window.customElements.define(t, e), e), Dr = (t, e) => {
  const { kind: i, elements: r } = e;
  return {
    kind: i,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(t, n);
    }
  };
}, oe = (t) => (e) => typeof e == "function" ? Tr(t, e) : Dr(t, e), Nr = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
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
}, $r = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function f(t) {
  return (e, i) => i !== void 0 ? $r(t, e, i) : Nr(t, e);
}
function Lr(t) {
  return f({ attribute: !1, hasChanged: void 0 });
}
const D = (t) => Lr();
function G(t, e) {
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
function ki(t) {
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
}), Pr = (t, e) => Object.assign(Object.assign({}, e), { finisher(i) {
  Object.assign(i.prototype[e.key], t);
} }), Fr = (
  // tslint:disable-next-line:no-any legacy decorator
  (t, e, i) => {
    Object.assign(e[i], t);
  }
);
function Or(t) {
  return (e, i) => i !== void 0 ? Fr(t, e, i) : Pr(t, e);
}
const Vt = Element.prototype, Mr = Vt.msMatchesSelector || Vt.webkitMatchesSelector;
function Ai(t = "", e = !1, i = "") {
  return (r, n) => {
    const s = {
      get() {
        const a = `slot${t ? `[name=${t}]` : ":not([name])"}`, o = this.renderRoot.querySelector(a);
        let c = o && o.assignedNodes({ flatten: e });
        return c && i && (c = c.filter((d) => d.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (d.matches ? d.matches(i) : Mr.call(d, i)))), c;
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
const ut = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, It = Symbol();
class Rt {
  constructor(e, i) {
    if (i !== It)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (ut ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Ci = (t) => new Rt(String(t), It), zr = (t) => {
  if (t instanceof Rt)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, Ie = (t, ...e) => {
  const i = e.reduce((r, n, s) => r + zr(n) + t[s + 1], t[0]);
  return new Rt(i, It);
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
const Ut = {};
class Se extends _i {
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
      const i = (s, a) => s.reduceRight((o, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? i(c, o) : (o.add(c), o)
      ), a), r = i(e, /* @__PURE__ */ new Set()), n = [];
      r.forEach((s) => n.unshift(s)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !ut) {
        const r = Array.prototype.slice.call(i.cssRules).reduce((n, s) => n + s.cssText, "");
        return Ci(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : ut ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), i !== Ut && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return Ut;
  }
}
Se.finalized = !0;
Se.render = Rr;
Se.shadowRootOptions = { mode: "open" };
const qr = 1e3 * 60, Bt = "langChanged";
function Vr(t, e, i) {
  return Object.entries(ht(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ht(s))), t);
}
function Ur(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function ht(t) {
  return typeof t == "function" ? t() : t;
}
const Br = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: Ur,
  interpolate: Vr,
  translationCache: {}
});
let Gr = Br();
function Hr(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Bt, i, e), () => window.removeEventListener(Bt, i);
}
function y(t, e, i = Gr) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? ht(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function wi(t) {
  return t instanceof Me ? t.startNode.isConnected : t instanceof Ee ? t.committer.element.isConnected : t.element.isConnected;
}
function jr(t) {
  for (const [e] of t)
    wi(e) || t.delete(e);
}
function Wr(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Xr(t, e) {
  setInterval(() => Wr(() => jr(t)), e);
}
const Ei = /* @__PURE__ */ new Map();
function Kr() {
  Hr((t) => {
    for (const [e, i] of Ei)
      wi(e) && Zr(e, i, t);
  });
}
Kr();
Xr(Ei, qr);
function Zr(t, e, i) {
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
function Jr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  mt(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Le = function() {
  return Le = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Le.apply(this, arguments);
};
function u(t, e, i, r) {
  var n = arguments.length, s = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, i, r);
  else for (var o = t.length - 1; o >= 0; o--) (a = t[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(e, i, s) : a(e, i)) || s);
  return n > 3 && s && Object.defineProperty(e, i, s), s;
}
function qe(t) {
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
function Qr(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Yr = (t) => t.nodeType === Node.ELEMENT_NODE, Ii = () => {
}, en = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Ii, en);
document.removeEventListener("x", Ii);
const Ri = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, tn = (t) => {
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
class Tt extends Se {
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
var Ti = (
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
var rn = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, nn = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Gt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function sn(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + i.left, a = n + i.top, o, c;
  if (t.type === "touchstart") {
    var d = t;
    o = d.changedTouches[0].pageX - s, c = d.changedTouches[0].pageY - a;
  } else {
    var p = t;
    o = p.pageX - s, c = p.pageY - a;
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
var Ht = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], jt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ve = [], an = (
  /** @class */
  function(t) {
    Jr(e, t);
    function e(i) {
      var r = t.call(this, Le(Le({}, e.defaultAdapter), i)) || this;
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
        return rn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return nn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gt;
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
          for (var s = qe(Ht), a = s.next(); !a.done; a = s.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (c) {
          r = { error: c };
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
          for (var s = qe(jt), a = s.next(); !a.done; a = s.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (c) {
          r = { error: c };
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
        for (var n = qe(Ht), s = n.next(); !s.done; s = n.next()) {
          var a = s.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (o) {
        i = { error: o };
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
        for (var n = qe(jt), s = n.next(); !s.done; s = n.next()) {
          var a = s.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (o) {
        i = { error: o };
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
            var o = i !== void 0 && Ve.length > 0 && Ve.some(function(c) {
              return r.adapter.containsEventTarget(c);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Ve.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ve = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, o = a.FG_DEACTIVATION, c = a.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var p = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var h = this.getFgTranslationCoordinates(), v = h.startPoint, S = h.endPoint;
        p = v.x + "px, " + v.y + "px", l = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(n, p), this.adapter.updateCssVariable(s, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, s;
      n ? s = sn(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, s = n.hasDeactivationUXRun, a = n.isActivated, o = s || !a;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, Gt.FG_DEACTIVATION_MS));
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
        var n = Le({}, r);
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
  }(Ti)
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
class on {
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
const Wt = /* @__PURE__ */ new WeakMap(), Je = Ke((t) => (e) => {
  if (!(e instanceof Ee) || e instanceof Ct || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Wt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Wt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new on(r);
  n.forEach((a) => {
    a in t || (s.remove(a), n.delete(a));
  });
  for (const a in t) {
    const o = t[a];
    o != n.has(a) && (o ? (s.add(a), n.add(a)) : (s.remove(a), n.delete(a)));
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
const Xt = /* @__PURE__ */ new WeakMap(), cn = Ke((t) => (e) => {
  if (!(e instanceof Ee) || e instanceof Ct || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Xt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Xt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in t || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in t)
    n.add(s), s.indexOf("-") === -1 ? r[s] = t[s] : r.setProperty(s, t[s]);
});
class F extends Tt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = an;
  }
  get isActive() {
    return Qr(this.parentElement || this, ":active");
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Je(r)}"
          style="${cn({
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
  G(".mdc-ripple-surface")
], F.prototype, "mdcRoot", void 0);
u([
  f({ type: Boolean })
], F.prototype, "primary", void 0);
u([
  f({ type: Boolean })
], F.prototype, "accent", void 0);
u([
  f({ type: Boolean })
], F.prototype, "unbounded", void 0);
u([
  f({ type: Boolean })
], F.prototype, "disabled", void 0);
u([
  f({ type: Boolean })
], F.prototype, "activated", void 0);
u([
  f({ type: Boolean })
], F.prototype, "selected", void 0);
u([
  f({ type: Boolean })
], F.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  D()
], F.prototype, "hovering", void 0);
u([
  D()
], F.prototype, "bgFocused", void 0);
u([
  D()
], F.prototype, "fgActivation", void 0);
u([
  D()
], F.prototype, "fgDeactivation", void 0);
u([
  D()
], F.prototype, "fgScale", void 0);
u([
  D()
], F.prototype, "fgSize", void 0);
u([
  D()
], F.prototype, "translateStart", void 0);
u([
  D()
], F.prototype, "translateEnd", void 0);
u([
  D()
], F.prototype, "leftPos", void 0);
u([
  D()
], F.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const dn = Ie`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ft = class extends F {
};
ft.styles = [dn];
ft = u([
  oe("mwc-ripple")
], ft);
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
          const c = this.constructor._observers.get(a);
          c !== void 0 && c.call(this, this[a], s);
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
class Di {
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
class q extends Se {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Di(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${Je(e)}">
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
u([
  G("slot")
], q.prototype, "slotElement", void 0);
u([
  ki("mwc-ripple")
], q.prototype, "ripple", void 0);
u([
  f({ type: String })
], q.prototype, "value", void 0);
u([
  f({ type: String, reflect: !0 })
], q.prototype, "group", void 0);
u([
  f({ type: Number, reflect: !0 })
], q.prototype, "tabindex", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  be(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], q.prototype, "disabled", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], q.prototype, "twoline", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], q.prototype, "activated", void 0);
u([
  f({ type: String, reflect: !0 })
], q.prototype, "graphic", void 0);
u([
  f({ type: Boolean })
], q.prototype, "multipleGraphics", void 0);
u([
  f({ type: Boolean })
], q.prototype, "hasMeta", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  be(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], q.prototype, "noninteractive", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  be(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], q.prototype, "selected", void 0);
u([
  D()
], q.prototype, "shouldRenderRipple", void 0);
u([
  D()
], q.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ni = Ie`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let bt = class extends q {
};
bt.styles = [Ni];
bt = u([
  oe("mwc-list-item")
], bt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ln(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const o = `__${e}`;
    if (i = r.getPropertyDescriptor(e, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let s = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      s === "" && (s = r.getPropertyOptions(e).attribute), this.hasAttribute(s) && this.removeAttribute(s), n.set.call(this, o);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function Dt(t, e, i) {
  if (e !== void 0)
    return ln(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class $i extends Tt {
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
$i.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const rt = /* @__PURE__ */ new WeakMap(), he = Ke((t) => (e) => {
  const i = rt.get(e);
  if (t === void 0 && e instanceof Ee) {
    if (i !== void 0 || !rt.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  rt.set(e, t);
});
class O extends $i {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Di(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return this.shouldRenderRipple ? m`<mwc-ripple
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
    return m`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Je(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${he(this.name)}"
              aria-checked="${he(r)}"
              aria-label="${he(this.ariaLabel)}"
              aria-labelledby="${he(this.ariaLabelledBy)}"
              aria-describedby="${he(this.ariaDescribedBy)}"
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
  G(".mdc-checkbox")
], O.prototype, "mdcRoot", void 0);
u([
  G("input")
], O.prototype, "formElement", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], O.prototype, "checked", void 0);
u([
  f({ type: Boolean })
], O.prototype, "indeterminate", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], O.prototype, "disabled", void 0);
u([
  f({ type: String, reflect: !0 })
], O.prototype, "name", void 0);
u([
  f({ type: String })
], O.prototype, "value", void 0);
u([
  Dt,
  f({ type: String, attribute: "aria-label" })
], O.prototype, "ariaLabel", void 0);
u([
  Dt,
  f({ type: String, attribute: "aria-labelledby" })
], O.prototype, "ariaLabelledBy", void 0);
u([
  Dt,
  f({ type: String, attribute: "aria-describedby" })
], O.prototype, "ariaDescribedBy", void 0);
u([
  f({ type: Boolean })
], O.prototype, "reducedTouchTarget", void 0);
u([
  D()
], O.prototype, "animationClass", void 0);
u([
  D()
], O.prototype, "shouldRenderRipple", void 0);
u([
  D()
], O.prototype, "focused", void 0);
u([
  D()
], O.prototype, "useStateLayerCustomProperties", void 0);
u([
  ki("mwc-ripple")
], O.prototype, "ripple", void 0);
u([
  Or({ passive: !0 })
], O.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const pn = Ie`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let gt = class extends O {
};
gt.styles = [pn];
gt = u([
  oe("mwc-checkbox")
], gt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ze extends q {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : m``, n = this.hasMeta && this.left ? this.renderMeta() : m``, s = this.renderRipple();
    return m`
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
u([
  G("slot")
], ze.prototype, "slotElement", void 0);
u([
  G("mwc-checkbox")
], ze.prototype, "checkboxElement", void 0);
u([
  f({ type: Boolean })
], ze.prototype, "left", void 0);
u([
  f({ type: String, reflect: !0 })
], ze.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const un = Ie`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ce = class extends ze {
};
Ce.styles = [Ni, un];
Ce = u([
  oe("mwc-check-list-item")
], Ce);
var hn = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, Q = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? mn(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && hn(e, i, n), n;
};
let B = class extends Se {
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
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
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
Q([
  f({ type: String })
], B.prototype, "label", 2);
Q([
  f({ type: String })
], B.prototype, "helper", 2);
Q([
  f({ type: Boolean })
], B.prototype, "nullable", 2);
Q([
  f({ type: Boolean })
], B.prototype, "defaultChecked", 2);
Q([
  f({ type: String })
], B.prototype, "maybeValue", 1);
Q([
  f({ type: Boolean })
], B.prototype, "disabled", 2);
Q([
  D()
], B.prototype, "null", 1);
Q([
  D()
], B.prototype, "checked", 1);
Q([
  D()
], B.prototype, "deactivateCheckbox", 2);
Q([
  D()
], B.prototype, "formfieldLabel", 1);
Q([
  G("mwc-switch")
], B.prototype, "nullSwitch", 2);
Q([
  G("mwc-checkbox")
], B.prototype, "checkbox", 2);
B = Q([
  oe("wizard-checkbox")
], B);
var fn = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, ee = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? bn(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && fn(e, i, n), n;
};
let K = class extends pr {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(y("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${t === null ? y("textfield.noMultiplier") : t}</mwc-list-item
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
ee([
  f({ type: Boolean })
], K.prototype, "nullable", 2);
ee([
  f({ type: Array })
], K.prototype, "multipliers", 2);
ee([
  f({ type: String })
], K.prototype, "multiplier", 1);
ee([
  f({ type: String })
], K.prototype, "unit", 2);
ee([
  D()
], K.prototype, "null", 1);
ee([
  f({ type: String })
], K.prototype, "maybeValue", 1);
ee([
  f({ type: String })
], K.prototype, "defaultValue", 2);
ee([
  f({ type: Array })
], K.prototype, "reservedValues", 2);
ee([
  G("mwc-switch")
], K.prototype, "nullSwitch", 2);
ee([
  G("mwc-menu")
], K.prototype, "multiplierMenu", 2);
ee([
  G("mwc-icon-button")
], K.prototype, "multiplierButton", 2);
K = ee([
  oe("wizard-textfield")
], K);
var gn = Object.defineProperty, yn = Object.getOwnPropertyDescriptor, xe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? yn(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && gn(e, i, n), n;
};
let ae = class extends ur {
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
xe([
  f({ type: Boolean })
], ae.prototype, "nullable", 2);
xe([
  D()
], ae.prototype, "null", 1);
xe([
  f({ type: String })
], ae.prototype, "maybeValue", 1);
xe([
  f({ type: String })
], ae.prototype, "defaultValue", 2);
xe([
  f({ type: Array })
], ae.prototype, "reservedValues", 2);
xe([
  G("mwc-switch")
], ae.prototype, "nullSwitch", 2);
ae = xe([
  oe("wizard-select")
], ae);
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
}, H = /* @__PURE__ */ new Set();
H.add(_.BACKSPACE);
H.add(_.ENTER);
H.add(_.SPACEBAR);
H.add(_.PAGE_UP);
H.add(_.PAGE_DOWN);
H.add(_.END);
H.add(_.HOME);
H.add(_.ARROW_LEFT);
H.add(_.ARROW_UP);
H.add(_.ARROW_RIGHT);
H.add(_.ARROW_DOWN);
H.add(_.DELETE);
H.add(_.ESCAPE);
H.add(_.TAB);
var Z = {
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
j.set(Z.BACKSPACE, _.BACKSPACE);
j.set(Z.ENTER, _.ENTER);
j.set(Z.SPACEBAR, _.SPACEBAR);
j.set(Z.PAGE_UP, _.PAGE_UP);
j.set(Z.PAGE_DOWN, _.PAGE_DOWN);
j.set(Z.END, _.END);
j.set(Z.HOME, _.HOME);
j.set(Z.ARROW_LEFT, _.ARROW_LEFT);
j.set(Z.ARROW_UP, _.ARROW_UP);
j.set(Z.ARROW_RIGHT, _.ARROW_RIGHT);
j.set(Z.ARROW_DOWN, _.ARROW_DOWN);
j.set(Z.DELETE, _.DELETE);
j.set(Z.ESCAPE, _.ESCAPE);
j.set(Z.TAB, _.TAB);
var ge = /* @__PURE__ */ new Set();
ge.add(_.PAGE_UP);
ge.add(_.PAGE_DOWN);
ge.add(_.END);
ge.add(_.HOME);
ge.add(_.ARROW_LEFT);
ge.add(_.ARROW_UP);
ge.add(_.ARROW_RIGHT);
ge.add(_.ARROW_DOWN);
function de(t) {
  var e = t.key;
  if (H.has(e))
    return e;
  var i = j.get(t.keyCode);
  return i || _.UNKNOWN;
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
var le, ne, T = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
le = {}, le["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", le["" + T.LIST_ITEM_CLASS] = "mdc-list-item", le["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", le["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", le["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", le["" + T.ROOT] = "mdc-list";
var ke = (ne = {}, ne["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ne["" + T.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ne["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ne["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ne["" + T.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ne["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ne["" + T.ROOT] = "mdc-deprecated-list", ne), Ue = {
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
    .` + ke[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ke[T.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + T.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` a,
    .` + T.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ke[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ke[T.LIST_ITEM_CLASS] + ` a,
    .` + ke[T.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ke[T.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, X = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yt = (t, e) => t - e, vn = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, s = i.sort(yt), a = r.sort(yt);
  let o = 0, c = 0;
  for (; o < s.length || c < a.length; ) {
    const d = s[o], p = a[c];
    if (d === p) {
      o++, c++;
      continue;
    }
    if (d !== void 0 && (p === void 0 || d < p)) {
      n.removed.push(d), o++;
      continue;
    }
    if (p !== void 0 && (d === void 0 || p < d)) {
      n.added.push(p), c++;
      continue;
    }
  }
  return n;
}, Sn = ["input", "button", "textarea", "select"];
function Pe(t) {
  return t instanceof Set;
}
const nt = (t) => {
  const e = t === X.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Pe(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Nt extends Ti {
  constructor(e) {
    super(Object.assign(Object.assign({}, Nt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = X.UNSET_INDEX, this.focusedItemIndex_ = X.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ue;
  }
  static get numbers() {
    return X;
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
      if (!Pe(i)) {
        const r = i === X.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Pe(i))
      if (i.size) {
        const r = Array.from(i).sort(yt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = X.UNSET_INDEX;
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
    const n = de(e) === "ArrowLeft", s = de(e) === "ArrowUp", a = de(e) === "ArrowRight", o = de(e) === "ArrowDown", c = de(e) === "Home", d = de(e) === "End", p = de(e) === "Enter", l = de(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || d ? (e.preventDefault(), this.focusLastElement()) : (o || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let h = this.adapter.getFocusedElementIndex();
    if (h === -1 && (h = r, h < 0))
      return;
    let v;
    if (this.isVertical_ && o || !this.isVertical_ && a)
      this.preventDefaultEvent(e), v = this.focusNextElement(h);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), v = this.focusPrevElement(h);
    else if (c)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), v = this.focusLastElement();
    else if ((p || l) && i) {
      const S = e.target;
      if (S && S.tagName === "A" && p)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(h, !0);
    }
    this.focusedItemIndex_ = h, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== X.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    Sn.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== X.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = nt(this.selectedIndex_), n = vn(r, e);
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
    this.selectedIndex_ === X.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ue.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? Ue.ARIA_CURRENT : Ue.ARIA_SELECTED;
    this.selectedIndex_ !== X.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === X.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== X.UNSET_INDEX ? e = this.selectedIndex_ : Pe(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === X.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(X.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const s = nt(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function xn(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const Be = (t) => t.hasAttribute("mwc-list-item");
function _n() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Y extends Tt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Nt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = xn(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      _n.call(this), e(i);
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
      Be(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, o) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && n.add(o);
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
    if (!Pe(e))
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
    return m`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${he(e)}"
          aria-label="${he(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? m`
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
      const i = this.getIndexOfTarget(e), r = e.target, n = Be(r);
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
      if (Yr(n) && Be(n) && (s = i.indexOf(n)), s !== -1)
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
      isFocusInsideList: () => tn(this),
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
      if (Be(r))
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
  f({ type: String })
], Y.prototype, "emptyMessage", void 0);
u([
  G(".mdc-deprecated-list")
], Y.prototype, "mdcRoot", void 0);
u([
  Ai("", !0, "*")
], Y.prototype, "assignedElements", void 0);
u([
  Ai("", !0, '[tabindex="0"]')
], Y.prototype, "tabbableElements", void 0);
u([
  f({ type: Boolean }),
  be(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Y.prototype, "activatable", void 0);
u([
  f({ type: Boolean }),
  be(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Y.prototype, "multi", void 0);
u([
  f({ type: Boolean }),
  be(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Y.prototype, "wrapFocus", void 0);
u([
  f({ type: String }),
  be(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Y.prototype, "itemRoles", void 0);
u([
  f({ type: String })
], Y.prototype, "innerRole", void 0);
u([
  f({ type: String })
], Y.prototype, "innerAriaLabel", void 0);
u([
  f({ type: Boolean })
], Y.prototype, "rootTabbable", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  be(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Y.prototype, "noninteractive", void 0);
var kn = Object.defineProperty, An = Object.getOwnPropertyDescriptor, _e = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? An(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && kn(e, i, n), n;
};
function vt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof re ? t : vt(t.parentElement);
}
function Cn(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((o) => o.innerText).join(`
`), n = t.value, s = (i + r + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? vt(t).classList.remove("hidden") : vt(t).classList.add("hidden");
}
let re = class extends Y {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Ce);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ce).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ce).some((t) => t.selected);
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
      (t) => Cn(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? m`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : m``;
  }
  render() {
    return m`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? y("filter")}"
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
re.styles = Ie`
    ${Ci(hr.styles)}

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
_e([
  f({ type: String })
], re.prototype, "searchFieldLabel", 2);
_e([
  f({ type: Boolean })
], re.prototype, "disableCheckAll", 2);
_e([
  D()
], re.prototype, "existCheckListItem", 1);
_e([
  D()
], re.prototype, "isAllSelected", 1);
_e([
  D()
], re.prototype, "isSomeSelected", 1);
_e([
  G("mwc-textfield")
], re.prototype, "searchField", 2);
re = _e([
  oe("filtered-list")
], re);
function ve(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([n, s]) => s !== null).forEach(([n, s]) => r.setAttribute(n, s)), r;
}
function we(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function Li(t, e, i = 1) {
  const r = "new" + e + i;
  return t.querySelector(`:scope > ${e}[name="${r}"]`) ? Li(t, e, ++i) : r;
}
function wn(t) {
  return typeof t == "function";
}
function P(t) {
  return t instanceof K || t instanceof ae || t instanceof B ? t.maybeValue : t.value ?? null;
}
function Pi(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = wn(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function Re(t) {
  return Pi(t, { detail: { subwizard: !0 } });
}
function U(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const $ = ":not(*)";
function En(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function In(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? $ : `${t}[version="${i}"][revision="${r}"]`;
}
function Kt(t) {
  return R(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Zt(t, e) {
  const [i, r] = U(e), n = L[t].parents.flatMap(
    (s) => V(s, i).split(",")
  );
  return z(
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
  ].map((o) => t.getAttribute(o));
  return e === "None" ? `${R(t.parentElement)}>(${n} ${a} ${s})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${s ?? ""}`;
}
function Tn(t, e) {
  if (e.endsWith(")")) {
    const [h, v] = U(e), [S, x, k] = v.substring(1, v.length - 1).split(" ");
    if (!S || !x) return $;
    const A = L[t].parents.flatMap(
      (I) => V(I, h).split(",")
    );
    return z(
      A,
      [">"],
      [`${t}[iedName="None"][lnClass="${S}"][lnType="${x}"][lnInst="${k}"]`]
    ).map((I) => I.join("")).join(",");
  }
  const [i, r, n, s, a] = e.split(/[ /]/);
  if (!i || !r || !s) return $;
  const [
    o,
    c,
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
    o,
    c,
    d,
    p,
    l
  ).map((h) => h.join("")).join(",");
}
function Dn(t) {
  return `${R(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Nn(t, e) {
  const [i, r] = U(e), [n, s] = r.split(" ");
  return `${V(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${s}"]`;
}
function $n(t) {
  return `${R(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Ln(t, e) {
  const [i, r] = U(e);
  return r ? `${V(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : $;
}
function Pn(t) {
  return `${R(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Fn(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : $;
}
function On(t) {
  const e = t.textContent, [i, r, n, s, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${R(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${a ?? ""}`;
}
function Mn(t, e) {
  const [i, r] = U(e), [n, s, a, o, c, d] = r.split(/[ /]/), [
    p,
    l,
    h,
    v,
    S,
    x
  ] = [
    L[t].parents.flatMap(
      (k) => V(k, i).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    p,
    [">"],
    [t],
    l,
    h,
    v,
    S,
    x
  ).map((k) => k.join("")).join(",");
}
function zn(t) {
  const [e, i, r, n, s, a, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((p) => t.getAttribute(p)), d = `${e}/${i ?? ""} ${r} ${n ?? ""}.${s} ${a || ""}`;
  return `${R(t.parentElement)}>${d} (${o}${c ? " [" + c + "]" : ""})`;
}
function qn(t, e) {
  const [i, r] = U(e), [n, s, a, o] = r.split(/[ /.]/), c = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = c && c[1] ? c[1] : "", p = c && c[2] ? c[2] : "", l = r.match(/\(([A-Z]{2})/), h = r.match(/ \[([0-9]{1,2})\]/), v = l && l[1] ? l[1] : "", S = h && h[1] ? h[1] : "", [
    x,
    k,
    A,
    I,
    w,
    W,
    M,
    J,
    et
  ] = [
    L[t].parents.flatMap(
      (Te) => V(Te, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return z(
    x,
    [">"],
    [t],
    k,
    A,
    I,
    w,
    W,
    M,
    J,
    et
  ).map((Te) => Te.join("")).join(",");
}
function Vn(t) {
  if (!t.parentElement) return NaN;
  const e = R(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    s,
    a,
    o,
    c,
    d,
    p,
    l,
    h,
    v,
    S,
    x,
    k
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
  ].map((w) => t.getAttribute(w)), A = k ? `${l}:${k} ${h ?? ""}/${v ?? ""} ${S ?? ""} ${x ?? ""}` : "", I = `${i} ${s}/${a ?? ""} ${o} ${c ?? ""} ${d} ${p || ""}`;
  return `${e}>${A ? A + " " : ""}${I}${r ? `@${r}` : ""}`;
}
function Un(t, e) {
  const [i, r] = U(e), n = L[t].parents.flatMap(
    (De) => V(De, i).split(",")
  );
  if (r.endsWith("]")) {
    const [De] = r.split("["), dr = [`[intAddr="${De}"]`];
    return z(n, [">"], [t], dr).map((lr) => lr.join("")).join(",");
  }
  let s, a, o, c, d, p, l, h, v, S, x, k, A, I;
  !r.includes(":") && !r.includes("@") ? [s, a, o, c, d, p, l] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    h,
    v,
    S,
    x,
    k,
    A,
    s,
    a,
    o,
    c,
    d,
    p,
    l
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, a, o, c, d, p, l, I] = r.split(/[ /@]/) : [
    h,
    v,
    S,
    x,
    k,
    A,
    s,
    a,
    o,
    c,
    d,
    p,
    l,
    I
  ] = r.split(/[ /:@]/);
  const [
    w,
    W,
    M,
    J,
    et,
    Te,
    tr,
    ir,
    rr,
    nr,
    sr,
    ar,
    or,
    cr
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    p ? [`[doName="${p}"]`] : [":not([doName])"],
    l ? [`[daName="${l}"]`] : [":not([daName])", '[daName=""]'],
    h ? [`[serviceType="${h}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    x ? [`[srcPrefix="${x}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    k ? [`[srcLNClass="${k}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    I ? [`[intAddr="${I}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return z(
    n,
    [">"],
    [t],
    w,
    W,
    M,
    J,
    et,
    Te,
    tr,
    ir,
    rr,
    nr,
    sr,
    ar,
    or,
    cr
  ).map((De) => De.join("")).join(",");
}
function Bn(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${R(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Gn(t, e) {
  const [i, r] = U(e), n = L[t].parents.flatMap(
    (l) => V(l, i).split(",")
  ), [s, a, o] = r.split(" ");
  if (!a) return $;
  const [c, d, p] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${o}"]`]
  ];
  return z(
    n,
    [">"],
    [t],
    c,
    d,
    p
  ).map((l) => l.join("")).join(",");
}
function Hn(t) {
  const [e, i, r, n, s, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${R(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${s} ${a}`;
}
function jn(t, e) {
  const [i, r] = U(e), n = L[t].parents.flatMap(
    (A) => V(A, i).split(",")
  ), [s, a, o, c, d, p] = r.split(/[ /]/), [
    l,
    h,
    v,
    S,
    x,
    k
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    n,
    [">"],
    [t],
    l,
    h,
    v,
    S,
    x,
    k
  ).map((A) => A.join("")).join(",");
}
function Jt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${R(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function St(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = U(e), [s, a, o, c] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return $;
  if (i === 0) return `${t}[name="${a}"]`;
  const d = L[t].parents.flatMap(
    (h) => h === "SDI" ? St(h, r, i - 1).split(",") : V(h, r).split(",")
  ).filter((h) => !h.startsWith($));
  if (d.length === 0) return $;
  const [p, l] = [
    [`[name="${a}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return z(
    d,
    [">"],
    [t],
    p,
    l
  ).map((h) => h.join("")).join(",");
}
function Wn(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${R(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Xn(t, e) {
  const [i, r] = U(e), [n, s] = r.split(" "), a = parseFloat(s), o = L[t].parents.flatMap(
    (p) => V(p, i).split(",")
  ), [c, d] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return z(
    o,
    [">"],
    [t],
    c,
    d
  ).map((p) => p.join("")).join(",");
}
function Kn(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Zn(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? $ : `${t}[iedName="${i}"][apName="${r}"]`;
}
function Qt(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Yt(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? $ : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function Jn(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${R(t.parentElement)}>${e}`;
}
function Qn(t, e) {
  const [i, r] = U(e), [n, s] = [
    L[t].parents.flatMap(
      (a) => V(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return z(n, [">"], [t], s).map((a) => a.join("")).join(",");
}
function Yn(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${R(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${R(t.parentElement)}>${i} [${r}]`;
}
function es(t, e) {
  const [i, r] = U(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, o, c] = [
    L[t].parents.flatMap(
      (d) => V(d, i).split(",")
    ),
    [`[type="${n}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return z(
    a,
    [">"],
    [t],
    o,
    c
  ).map((d) => d.join("")).join(",");
}
function ts(t) {
  return `${R(t.parentElement)}>${t.getAttribute("ord")}`;
}
function is(t, e) {
  const [i, r] = U(e);
  return `${V("EnumType", i)}>${t}[ord="${r}"]`;
}
function rs(t) {
  return `${R(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function ns(t, e) {
  const [i, r] = U(e), [n, s] = r.split("	"), [a] = [
    L[t].parents.flatMap(
      (o) => V(o, i).split(",")
    )
  ];
  return z(
    a,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [s]
  ).map((o) => o.join("")).join(",");
}
function ss() {
  return "";
}
function as() {
  return ":root";
}
function E(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${R(t.parentElement)}>${t.getAttribute("name")}`;
}
function C(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = U(e);
  if (!n) return $;
  if (i === 0) return `${t}[name="${n}"]`;
  const s = L[t].parents;
  if (!s) return $;
  const a = s.flatMap(
    (o) => L[o].selector === L.Substation.selector ? C(o, r, i - 1).split(",") : V(o, r).split(",")
  ).filter((o) => !o.startsWith($));
  return a.length === 0 ? $ : z(a, [">"], [t], [`[name="${n}"]`]).map((o) => o.join("")).join(",");
}
function b(t) {
  return R(t.parentElement).toString();
}
function g(t, e) {
  const i = L[t].parents;
  if (!i) return $;
  const r = i.flatMap((n) => V(n, e).split(",")).filter((n) => !n.startsWith($));
  return r.length === 0 ? $ : z(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Ge(t) {
  return `#${t.id}`;
}
function He(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : $;
}
const Fi = [
  "TransformerWinding",
  "ConductingEquipment"
], Oi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Fi
], xt = ["Substation", "VoltageLevel", "Bay"], Mi = ["Process", "Line"], zi = ["EqSubFunction", "EqFunction"], os = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Oi,
  ...xt,
  ...Mi,
  ...zi
], qi = ["ConnectivityNode", ...os], cs = ["GOOSESecurity", "SMVSecurity"], ds = ["SubNetwork", ...cs, ...qi], ls = ["BDA", "DA"], ps = ["SampledValueControl", "GSEControl"], us = ["LogControl", "ReportControl"], hs = [...ps, ...us], ms = ["GSE", "SMV"], fs = [
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
  ...hs,
  ...ms,
  ...ls
], ye = ["LN0", "LN"], bs = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], gs = ["Subject", "IssuerName"], ys = ["MinTime", "MaxTime"], vs = ["LNodeType", "DOType", "DAType", "EnumType"], Ss = [
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
], xs = ["DynDataSet", "ConfDataSet"], _s = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...xs
], ks = ["ConfLogControl", "ConfSigRef"], As = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Cs = ["SCL", ...ds, ...fs, ...vs], Vi = [
  ...Cs,
  ...bs,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...gs,
  ...ys,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ye,
  ...Ss,
  "DynAssociation",
  "SettingGroups",
  ..._s,
  ...ks,
  ...As,
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
], ws = new Set(Vi);
function Qe(t) {
  return ws.has(t);
}
const Ye = ["Text", "Private"], pe = [...Ye], N = [...Ye], je = [...Ye], ei = [...N, "Val"], Ui = [...pe, "LNode"], me = [...Ui], _t = [...me], st = [
  ...me,
  "PowerTransformer",
  "GeneralEquipment"
], ti = [
  ..._t,
  "Terminal"
], ii = [...N, "Address"], Bi = [...pe], ri = [...Bi, "IEDName"], ni = [
  ...N,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], si = [
  ...me,
  "GeneralEquipment",
  "Function"
], ai = [...Bi, "TrgOps"], oi = [
  ...me,
  "GeneralEquipment",
  "EqSubFunction"
], L = {
  AccessControl: {
    identity: b,
    selector: g,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: E,
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
    identity: b,
    selector: g,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: $n,
    selector: Ln,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: b,
    selector: g,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: E,
    selector: C,
    parents: ["DAType"],
    children: [...ei]
  },
  BitRate: {
    identity: b,
    selector: g,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: E,
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
    identity: Hn,
    selector: jn,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: b,
    selector: g,
    parents: ["SCL"],
    children: [...N, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: E,
    selector: C,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ti,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: b,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Kn,
    selector: Zn,
    parents: ["SubNetwork"],
    children: [...N, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: E,
    selector: C,
    parents: ["Bay", "Line"],
    children: [...Ui]
  },
  DA: {
    identity: E,
    selector: C,
    parents: ["DOType"],
    children: [...ei]
  },
  DAI: {
    identity: Jt,
    selector: St,
    parents: ["DOI", "SDI"],
    children: [...N, "Val"]
  },
  DAType: {
    identity: Ge,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...je, "BDA", "ProtNs"]
  },
  DO: {
    identity: E,
    selector: C,
    parents: ["LNodeType"],
    children: [...N]
  },
  DOI: {
    identity: E,
    selector: C,
    parents: [...ye],
    children: [...N, "SDI", "DAI"]
  },
  DOType: {
    identity: Ge,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...je, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: E,
    selector: C,
    parents: [...ye],
    children: [...pe, "FCDA"]
  },
  DataSetDirectory: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: b,
    selector: g,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ge,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...je, "EnumVal"]
  },
  EnumVal: {
    identity: ts,
    selector: is,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: E,
    selector: C,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...oi]
  },
  EqSubFunction: {
    identity: E,
    selector: C,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...oi]
  },
  ExtRef: {
    identity: Vn,
    selector: Un,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: zn,
    selector: qn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: E,
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
    identity: E,
    selector: C,
    parents: [
      "SubFunction",
      "Function",
      ...Mi,
      ...zi,
      ...xt
    ],
    children: [..._t, "EqFunction"]
  },
  GetCBValues: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: E,
    selector: C,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Qt,
    selector: Yt,
    parents: ["ConnectedAP"],
    children: [...ii, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: E,
    selector: C,
    parents: ["LN0"],
    children: [...ri, "Protocol"]
  },
  GSESettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: b,
    selector: g,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: b,
    selector: g,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: En,
    selector: In,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: E,
    selector: C,
    parents: ["SCL"],
    children: [...N, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: On,
    selector: Mn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: b,
    selector: g,
    parents: [...ye],
    children: [...N, "ExtRef"]
  },
  IssuerName: {
    identity: b,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Dn,
    selector: Nn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Pn,
    selector: Fn,
    parents: ["Server"],
    children: [...N, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Bn,
    selector: Gn,
    parents: ["AccessPoint", "LDevice"],
    children: [...ni]
  },
  LN0: {
    identity: b,
    selector: g,
    parents: ["LDevice"],
    children: [
      ...ni,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Rn,
    selector: Tn,
    parents: [...qi],
    children: [...N]
  },
  LNodeType: {
    identity: Ge,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...je, "DO"]
  },
  Line: {
    identity: E,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...si,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: E,
    selector: C,
    parents: [...ye],
    children: [...N]
  },
  LogControl: {
    identity: E,
    selector: C,
    parents: [...ye],
    children: [...ai]
  },
  LogSettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: b,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: b,
    selector: g,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: b,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Kt,
    selector: Zt,
    parents: ["TransformerWinding"],
    children: [...N]
  },
  OptFields: {
    identity: b,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Yn,
    selector: es,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Jn,
    selector: Qn,
    parents: ["ConnectedAP"],
    children: [...N, "P"]
  },
  PowerTransformer: {
    identity: E,
    selector: C,
    parents: [...xt],
    children: [
      ..._t,
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
    identity: E,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...si,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: rs,
    selector: ns,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: b,
    selector: g,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: E,
    selector: C,
    parents: [...ye],
    children: [...ai, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: b,
    selector: g,
    parents: ["ReportControl"],
    children: [...N, "ClientLN"]
  },
  SamplesPerSec: {
    identity: b,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: E,
    selector: C,
    parents: ["LN0"],
    children: [...ri, "SmvOpts"]
  },
  SecPerSamples: {
    identity: b,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: ss,
    selector: as,
    parents: [],
    children: [
      ...Ye,
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
    identity: Jt,
    selector: St,
    parents: ["DOI", "SDI"],
    children: [...N, "SDI", "DAI"]
  },
  SDO: {
    identity: E,
    selector: C,
    parents: ["DOType"],
    children: [...pe]
  },
  Server: {
    identity: b,
    selector: g,
    parents: ["AccessPoint"],
    children: [
      ...N,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: b,
    selector: g,
    parents: ["AccessPoint"],
    children: [...N]
  },
  Services: {
    identity: b,
    selector: g,
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
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: b,
    selector: g,
    parents: ["LN0"],
    children: [...N]
  },
  SettingGroups: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: b,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: b,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Qt,
    selector: Yt,
    parents: ["ConnectedAP"],
    children: [...ii]
  },
  SmvOpts: {
    identity: b,
    selector: g,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: E,
    selector: C,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: E,
    selector: C,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Fi
    ],
    children: [...me, "EqFunction"]
  },
  SubFunction: {
    identity: E,
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
    identity: E,
    selector: C,
    parents: ["Communication"],
    children: [...pe, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: b,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: E,
    selector: C,
    parents: ["SCL"],
    children: [...st, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: E,
    selector: C,
    parents: ["TransformerWinding"],
    children: [...me, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Kt,
    selector: Zt,
    parents: [...Oi],
    children: [...N]
  },
  Text: {
    identity: b,
    selector: g,
    parents: Vi.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: b,
    selector: g,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: E,
    selector: C,
    parents: ["PowerTransformer"],
    children: [
      ...ti,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: b,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Wn,
    selector: Xn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: b,
    selector: g,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: E,
    selector: C,
    parents: ["Substation"],
    children: [...st, "Voltage", "Bay", "Function"]
  }
};
function Es(t, e) {
  const i = t.tagName, r = Array.from(t.children);
  if (i === "Services" || i === "SettingGroups" || !Qe(i))
    return r.find((o) => o.tagName === e) ?? null;
  const n = L[i]?.children ?? [];
  let s = n.findIndex((o) => o === e);
  if (s < 0) return null;
  let a;
  for (; s < n.length && !a; )
    a = r.find((o) => o.tagName === n[s]), s++;
  return a ?? null;
}
function V(t, e) {
  return typeof e != "string" ? $ : Qe(t) ? L[t].selector(t, e) : t;
}
function fe(t, e, i) {
  if (typeof i != "string" || !Qe(e)) return null;
  const r = t.querySelector(L[e].selector(e, i));
  return r === null || Xe(r) ? r : Array.from(
    t.querySelectorAll(L[e].selector(e, i))
  ).find(Xe) ?? null;
}
function R(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Qe(e) ? L[e].identity(t) : NaN;
}
function z(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Gi(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Gi(i, e))
      );
    default:
      return 0;
  }
}
function Xe(t) {
  return !t.closest("Private");
}
const Is = 99;
Array(Is).fill(1).map((t, e) => `${e + 1}`);
function Rs(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
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
const ci = /* @__PURE__ */ new WeakMap(), di = 2147483647, Ts = Ke((...t) => (e) => {
  let i = ci.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: di,
    values: []
  }, ci.set(e, i));
  const r = i.values;
  let n = r.length;
  i.values = t;
  for (let s = 0; s < t.length && !(s > i.lastRenderedIndex); s++) {
    const a = t[s];
    if (Ze(a) || typeof a.then != "function") {
      e.setValue(a), i.lastRenderedIndex = s;
      break;
    }
    s < n && a === r[s] || (i.lastRenderedIndex = di, n = 0, Promise.resolve(a).then((o) => {
      const c = i.values.indexOf(a);
      c > -1 && c < i.lastRenderedIndex && (i.lastRenderedIndex = c, e.setValue(o), e.commit());
    }));
  }
});
var Ds = Object.defineProperty, Ns = Object.getOwnPropertyDescriptor, ce = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ns(e, i) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Ds(e, i, n), n;
};
const $s = m`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${y("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ie = class extends Se {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: m`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Gi(this.selection);
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
    return m`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => m`<mwc-list-item
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
        m`${he(n)} ${this.renderDirectory(a, s)}`
      );
    return r.length === 0 ? m`` : m`<div class="column">${r}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), m`<div class="pane">
      ${t.map((e) => Ts(e, $s))}
    </div>`;
  }
};
ie.styles = Ie`
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
ce([
  f({ type: Object })
], ie.prototype, "selection", 2);
ce([
  f({ type: Boolean })
], ie.prototype, "multi", 2);
ce([
  f({ type: Number })
], ie.prototype, "depth", 1);
ce([
  f({ type: Array })
], ie.prototype, "paths", 1);
ce([
  f({ type: Array })
], ie.prototype, "path", 1);
ce([
  f({ attribute: !1 })
], ie.prototype, "read", 2);
ce([
  f({ attribute: !1 })
], ie.prototype, "loaded", 2);
ce([
  G("div")
], ie.prototype, "container", 2);
ie = ce([
  oe("finder-list")
], ie);
function Hi(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function ji(t, e) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), s = fe(t, r, n);
    return s ? {
      path: i,
      header: void 0,
      entries: e(s).map(
        (a) => `${a.tagName}: ${R(a)}`
      )
    } : { path: i, header: m`<p>${y("error")}</p>`, entries: [] };
  };
}
function Ls(t) {
  return t.tagName === "SCL" ? Array.from(t.querySelectorAll("IED")).filter(Xe) : [];
}
function Ps(t) {
  return m`<finder-list
    path="${JSON.stringify(["SCL: "])}"
    .read=${ji(t, Ls)}
    .getDisplayString=${Hi}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Wi(t) {
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
function Xi(t) {
  return m`<finder-list
    multi
    .paths=${[["Server: " + R(t)]]}
    .read=${ji(t.ownerDocument, Wi)}
    .getDisplayString=${Hi}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
const Fs = {
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*"
}, Os = {
  cbName: 32
};
function Ki(t, e) {
  const [i, r] = e[e.length - 1].split(": "), n = fe(t.ownerDocument, i, r);
  if (!n || Wi(n).length > 0) return;
  const s = e.find((k) => k.startsWith("LN"));
  if (!s) return;
  const [a, o] = s.split(": "), c = fe(t.ownerDocument, a, o);
  if (!c) return;
  const d = c.closest("LDevice")?.getAttribute("inst"), p = c.getAttribute("prefix") ?? "", l = c.getAttribute("lnClass"), h = c.getAttribute("inst") && c.getAttribute("inst") !== "" ? c.getAttribute("inst") : null;
  let v = "", S = "", x = "";
  for (const k of e) {
    const [A, I] = k.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(A)) continue;
    const w = fe(t.ownerDocument, A, I);
    if (!w) return;
    const W = w.getAttribute("name");
    A === "DO" && (v = W), A === "SDO" && (v = v + "." + W), A === "DA" && (S = W, x = w.getAttribute("fc") ?? ""), A === "BDA" && (S = S + "." + W);
  }
  if (!(!d || !l || !v || !S || !x))
    return ve(t.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: p,
      lnClass: l,
      lnInst: h,
      doName: v,
      daName: S,
      fc: x
    });
}
function Ms(t) {
  return (e, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], s = [];
    for (const a of n) {
      const o = Ki(t, a);
      o && s.push({
        new: {
          parent: t,
          element: o,
          reference: null
        }
      });
    }
    return s;
  };
}
function zs(t) {
  const e = t.closest("Server");
  return [
    {
      title: y("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Ms(t)
      },
      content: [e ? Xi(e) : m``]
    }
  ];
}
function qs(t) {
  return (e) => {
    e.dispatchEvent(Re(() => zs(t)));
  };
}
function Vs(t) {
  return (e, i) => {
    const r = e.find((d) => d.label === "name").value, n = P(e.find((d) => d.label === "desc")), s = t.getAttribute("name"), a = [];
    if (!(r === s && n === t.getAttribute("desc"))) {
      const d = we(t, { name: r, desc: n });
      a.push({
        old: { element: t },
        new: { element: d }
      });
    }
    const o = r !== s ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${s}], GSEControl[datSet=${s}],SampledValueControl[datSet=${s}] `
      ) ?? []
    ).map((d) => {
      const p = we(d, { datSet: r });
      return { old: { element: d }, new: { element: p } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((d) => fe(t, "FCDA", d.value)).filter((d) => d).map((d) => ({
        old: {
          parent: t,
          element: d,
          reference: d.nextSibling
        }
      })),
      ...a,
      ...o
    ];
  };
}
function Us(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: y("save"),
        icon: "save",
        action: Vs(t)
      },
      menuActions: [
        {
          icon: "add",
          label: y("dataset.fcda.add"),
          action: qs(t)
        }
      ],
      content: [
        m`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${y("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        m`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${y("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        m`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (r) => m`<mwc-check-list-item selected value="${R(r)}"
                >${R(r).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function Zi(t) {
  return Object.entries(t).map(
    ([e, i]) => m`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${y(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Bs(t) {
  return (e) => {
    const i = P(e.find((l) => l.label === "seqNum")), r = P(e.find((l) => l.label === "timeStamp")), n = P(e.find((l) => l.label === "dataSet")), s = P(e.find((l) => l.label === "reasonCode")), a = P(e.find((l) => l.label === "dataRef")), o = P(e.find((l) => l.label === "entryID")), c = P(e.find((l) => l.label === "configRef")), d = P(e.find((l) => l.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && r === t.getAttribute("timeStamp") && n === t.getAttribute("dataSet") && s === t.getAttribute("reasonCode") && a === t.getAttribute("dataRef") && o === t.getAttribute("entryID") && c === t.getAttribute("configRef") && d === t.getAttribute("bufOvfl"))
      return [];
    const p = we(t, {
      seqNum: i,
      timeStamp: r,
      dataSet: n,
      reasonCode: s,
      dataRef: a,
      entryID: o,
      configRef: c,
      bufOvfl: d
    });
    return [{ old: { element: t }, new: { element: p } }];
  };
}
function Gs(t) {
  const [
    e,
    i,
    r,
    n,
    s,
    a,
    o,
    c
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((d) => t.getAttribute(d));
  return [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: y("save"),
        action: Bs(t)
      },
      content: Zi({
        seqNum: e,
        timeStamp: i,
        dataSet: r,
        reasonCode: n,
        dataRef: s,
        entryID: a,
        configRef: o,
        bufOvfl: c
      })
    }
  ];
}
function Ji(t) {
  return Object.entries(t).map(
    ([e, i]) => m`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${y(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Hs(t) {
  return (e) => {
    const i = P(e.find((d) => d.label === "dchg")), r = P(e.find((d) => d.label === "qchg")), n = P(e.find((d) => d.label === "dupd")), s = P(e.find((d) => d.label === "period")), a = P(e.find((d) => d.label === "gi"));
    if (i === t.getAttribute("dchg") && r === t.getAttribute("qchg") && n === t.getAttribute("dupd") && s === t.getAttribute("period") && a === t.getAttribute("gi"))
      return [];
    const o = we(t, {
      dchg: i,
      qchg: r,
      dupd: n,
      period: s,
      gi: a
    });
    return [{ old: { element: t }, new: { element: o } }];
  };
}
function js(t) {
  const [e, i, r, n, s] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((a) => t.getAttribute(a));
  return [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: y("save"),
        action: Hs(t)
      },
      content: Ji({ dchg: e, qchg: i, dupd: r, period: n, gi: s })
    }
  ];
}
function at(t) {
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
function Qi(t, e) {
  const [i, r, n, s, a, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc"
  ].map((w) => t.getAttribute(w));
  if (!e.querySelector(`LDevice[inst="${i}"]`)) return !1;
  const p = r ? [`[prefix="${r}"]`] : ['[prefix=""]', ":not([prefix])"], l = s ? [`[inst="${s}"]`] : ['[inst=""]', ":not([inst])"], h = z(
    ["LN0", "LN"],
    p,
    [`[lnClass="${n}"]`],
    l
  ).map((w) => w.join("")).join(","), v = e.querySelector(h);
  if (!v) return !1;
  const S = a?.split(".");
  if (!S) return !1;
  let x = v;
  for (const w of S)
    if (x = at(x).find(
      (W) => W.getAttribute("name") === w
    ), !x) return !1;
  const k = o?.split("."), A = at(x).some(
    (w) => w.getAttribute("fc") === c
  );
  if (!k && A) return !0;
  if (!k) return !1;
  let I = "";
  for (const w of k)
    if (x = at(x).find(
      (W) => W.getAttribute("name") === w
    ), x?.getAttribute("fc") && (I = x.getAttribute("fc")), !x) return !1;
  return I === c;
}
function Yi(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${y("scl.name")}"
      required
      validationMessage="${y("textfield.required")}"
      pattern="${Fs.asciName}"
      maxLength="${Os.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${y("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="buffered"
      .maybeValue=${t.buffered}
      helper="${y("scl.buffered")}"
    ></wizard-checkbox>`,
    m`<wizard-textfield
      label="rptID"
      .maybeValue=${t.rptID}
      nullable
      required
      helper="${y("report.rptID")}"
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="indexed"
      .maybeValue=${t.indexed}
      nullable
      helper="${y("scl.indexed")}"
    ></wizard-checkbox>`,
    m`<wizard-textfield
      label="max Clients"
      .maybeValue=${t.max}
      helper="${y("scl.maxReport")}"
      nullable
      type="number"
      suffix="#"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="bufTime"
      .maybeValue=${t.bufTime}
      helper="${y("scl.bufTime")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="intgPd"
      .maybeValue=${t.intgPd}
      helper="${y("scl.intgPd")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`
  ];
}
function Ws(t) {
  return (e, i) => {
    const r = {};
    [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ].forEach((M) => {
      r[M] = P(e.find((J) => J.label === M));
    }), r.confRev = "1";
    const s = r.name + "sDataSet";
    r.datSet = s;
    const a = ve(
      t.ownerDocument,
      "ReportControl",
      r
    ), o = {};
    [
      "seqNum",
      "timeStamp",
      "dataSet",
      "reasonCode",
      "dataRef",
      "entryID",
      "configRef",
      "bufOvfl"
    ].forEach((M) => {
      o[M] = P(e.find((J) => J.label === M));
    });
    const d = ve(
      t.ownerDocument,
      "OptFields",
      o
    ), p = {};
    ["dchg", "qchg", "dupd", "period", "gi"].forEach((M) => {
      p[M] = P(e.find((J) => J.label === M));
    });
    const h = ve(t.ownerDocument, "TrgOps", p), v = P(e.find((M) => M.label === "max Clients")), S = v ? ve(t.ownerDocument, "RptEnabled", {
      max: v
    }) : null;
    a.appendChild(h), a.appendChild(d), S && a.appendChild(S);
    const x = ve(t.ownerDocument, "DataSet", {
      name: s
    }), A = i.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const M of A) {
      const J = Ki(t, M);
      J && x.appendChild(J);
    }
    const I = r.name, w = t.closest("IED").getAttribute("name");
    return [{
      title: y("controlblock.action.add", {
        type: "Report",
        name: I,
        iedName: w
      }),
      actions: [
        { new: { parent: t, element: a } },
        { new: { parent: t, element: x } }
      ]
    }];
  };
}
function er(t) {
  const e = t.closest("Server"), i = Li(t, "ReportControl");
  return [
    {
      title: y("wizard.title.add", { tagName: "ReportControl" }),
      content: Yi({
        name: i,
        desc: null,
        buffered: "true",
        rptID: null,
        indexed: "true",
        max: "5",
        bufTime: "100",
        intgPd: "1000"
      })
    },
    {
      title: y("scl.TrgOps"),
      content: Ji({ dchg: "true", qchg: "true", dupd: "true", period: "true", gi: "false" })
    },
    {
      title: y("scl.OptFields"),
      content: Zi({
        seqNum: "true",
        timeStamp: "true",
        dataSet: "true",
        reasonCode: "true",
        dataRef: "true",
        entryID: "true",
        configRef: "true",
        bufOvfl: "true"
      })
    },
    {
      title: y("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: y("save"),
        action: Ws(t)
      },
      content: [e ? Xi(e) : m``]
    }
  ];
}
function Xs(t) {
  return (e, i) => {
    const n = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (n.length === 0) return [];
    const [s, a] = n.pop().split(": ");
    if (s !== "IED") return [];
    const o = fe(t, s, a);
    if (!o) return [];
    const c = o.querySelector("LN0");
    return c ? [() => er(c)] : [];
  };
}
function Ks(t) {
  return [
    {
      title: y("report.wizard.location"),
      primary: {
        icon: "",
        label: y("next"),
        action: Xs(t)
      },
      content: [Ps(t)]
    }
  ];
}
function Zs(t) {
  return () => t.tagName === "IED" && t.querySelector("LN0") ? [() => er(t.querySelector("LN0"))] : [() => Ks(t.ownerDocument)];
}
function Js(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (a) => a.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && i && r.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  });
  const n = t.getAttribute("name"), s = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: y("controlblock.action.remove", { type: "Report", name: n, iedName: s }),
    actions: r
  };
}
function Qs(t, e, i) {
  if (t === null) {
    const n = ve(i.ownerDocument, "RptEnabled", {
      max: e
    });
    return {
      new: {
        parent: i,
        element: n,
        reference: Es(i, "RptEnabled")
      }
    };
  }
  const r = we(t, { max: e });
  return {
    old: { element: t },
    new: { element: r }
  };
}
function Ys(t) {
  return (e, i) => {
    const r = t.ownerDocument, n = i.shadowRoot?.querySelector("filtered-list")?.selected, s = [];
    return n.forEach((a) => {
      const o = fe(r, "IED", a.value);
      if (!o) return;
      const c = o.querySelector("LN0");
      if (!c) return [];
      const d = t.parentElement?.querySelector(
        `DataSet[name="${t.getAttribute("datSet")}"]`
      );
      if (d && c.querySelector(
        `DataSet[name="${d.getAttribute("name")}"]`
      ))
        return [];
      if (c.querySelector(
        `ReportControl[name="${t.getAttribute("name")}"]`
      ))
        return [];
      const p = d?.cloneNode(!0);
      if (Array.from(p.querySelectorAll("FCDA")).forEach((S) => {
        Qi(S, o) || p.removeChild(S);
      }), p.children.length === 0) return [];
      const l = t.cloneNode(!0), h = t.closest("IED")?.getAttribute("name"), v = o.getAttribute("name");
      s.push({
        title: `ReportControl copied from ${h} to ${v}`,
        actions: [
          { new: { parent: c, element: p } },
          { new: { parent: c, element: l } }
        ]
      });
    }), s;
  };
}
function ea(t, e) {
  const i = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), r = t.closest("IED")?.getAttribute("name") === e.getAttribute("name"), n = e.querySelector("AccessPoint > Server > LDevice > LN0"), s = !!n?.querySelector(
    `ReportControl[name="${t.getAttribute("name")}"]`
  ), a = !!n?.querySelector(
    `DataSet[name="${i?.getAttribute("name")}"]`
  ), o = i?.cloneNode(!0);
  Array.from(o.querySelectorAll("FCDA")).forEach((l) => {
    Qi(l, e) || o.removeChild(l);
  });
  const c = o.children.length > 0, d = e.getAttribute("name");
  let p = "";
  return r ? p = y("controlblock.hints.source") : n ? a && !r ? p = y("controlblock.hints.exist", {
    type: "RerportControl",
    name: t.getAttribute("name")
  }) : s && !r ? p = y("controlblock.hints.exist", {
    type: "DataSet",
    name: t.getAttribute("name")
  }) : c ? p = y("controlBlock.hints.valid") : p = y("controlblock.hints.noMatchingData") : p = y("controlblock.hints.missingServer"), m`<mwc-check-list-item
    twoline
    value="${R(e)}"
    ?disabled=${r || !n || s || a || !c}
    ><span>${d}</span
    ><span slot="secondary">${p}</span></mwc-check-list-item
  >`;
}
function ta(t) {
  return [
    {
      title: y("report.wizard.location"),
      primary: {
        icon: "save",
        label: y("save"),
        action: Ys(t)
      },
      content: [
        m`<filtered-list multi
          >${Array.from(t.ownerDocument.querySelectorAll("IED")).map(
          (e) => ea(t, e)
        )}</filtered-list
        >`
      ]
    }
  ];
}
function ia(t) {
  return (e) => {
    e.dispatchEvent(
      Re(() => ta(t))
    );
  };
}
function ra(t) {
  return (e) => {
    const i = Js(t);
    i && e.dispatchEvent(Rs(i)), e.dispatchEvent(Pi());
  };
}
function na(t) {
  return (e) => {
    e.dispatchEvent(Re(() => Us(t)));
  };
}
function sa(t) {
  return (e) => {
    e.dispatchEvent(Re(() => js(t)));
  };
}
function aa(t) {
  return (e) => {
    e.dispatchEvent(Re(() => Gs(t)));
  };
}
function oa(t) {
  return (e) => {
    const i = {}, r = [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ];
    r.forEach((l) => {
      i[l] = P(e.find((h) => h.label === l));
    });
    let n = null;
    if (r.some((l) => i[l] !== t.getAttribute(l))) {
      const l = we(t, i);
      n = {
        old: { element: t },
        new: { element: l }
      };
    }
    const s = P(e.find((l) => l.label === "max Clients"));
    let a = null;
    s !== (t.querySelector("RptEnabled")?.getAttribute("max") ?? null) && (a = Qs(
      t.querySelector("RptEnabled"),
      s,
      t
    ));
    const o = [];
    n && o.push(n), a && o.push(a);
    const c = i.name, d = t.closest("IED").getAttribute("name"), p = {
      title: y("controlblock.action.edit", {
        type: "Report",
        name: c,
        iedName: d
      }),
      actions: o
    };
    return o.length ? [p] : [];
  };
}
function ca(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), r = t.getAttribute("buffered"), n = t.getAttribute("rptID"), s = t.getAttribute("indexed"), a = t.querySelector("RptEnabled")?.getAttribute("max") ?? null, o = t.getAttribute("bufTime"), c = t.getAttribute("intgPd"), d = t.querySelector("TrgOps"), p = t.querySelector("OptFields"), l = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), h = [];
  return h.push({
    icon: "delete",
    label: y("remove"),
    action: ra(t)
  }), l && h.push({
    icon: "edit",
    label: y("scl.DataSet"),
    action: na(l)
  }), d && h.push({
    icon: "edit",
    label: y("scl.TrgOps"),
    action: sa(d)
  }), p && h.push({
    icon: "edit",
    label: y("scl.OptFields"),
    action: aa(p)
  }), h.push({
    icon: "copy",
    label: y("controlblock.label.copy"),
    action: ia(t)
  }), [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: y("save"),
        action: oa(t)
      },
      menuActions: h,
      content: [
        ...Yi({
          name: e,
          desc: i,
          buffered: r,
          rptID: n,
          indexed: s,
          max: a,
          bufTime: o,
          intgPd: c
        })
      ]
    }
  ];
}
function _a(t) {
  const e = Array.from(
    t.querySelectorAll("ReportControl")
  ).filter(Xe), i = t.querySelector("LN0") ? {
    icon: "add",
    label: y("Report"),
    action: Zs(t)
  } : void 0;
  return [
    {
      title: y("wizard.title.select", { tagName: "ReportControl" }),
      primary: i,
      content: [
        m`<filtered-list
          @selected=${(r) => {
          const n = r.target.selected.value, s = fe(t, "ReportControl", n);
          s && r.target?.dispatchEvent(
            Re(() => ca(s))
          );
        }}
          >${e.map(
          (r) => m`<mwc-list-item twoline value="${R(r)}"
                ><span>${r.getAttribute("name")}</span
                ><span slot="secondary"
                  >${R(r)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
export {
  er as createReportControlWizard,
  ca as editReportControlWizard,
  ra as removeReportControl,
  Js as removeReportControlAction,
  ta as reportControlCopyToIedSelector,
  Ks as reportControlParentSelector,
  _a as selectReportControlWizard
};
