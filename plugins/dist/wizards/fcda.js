import { Select as Ki } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Zi } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import { List as Ji } from "@material/mwc-list";
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
const wt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, yt = (i, e, t = null) => {
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
const ee = `{{lit-${String(Math.random()).slice(2)}}}`, si = `<!--${ee}-->`, It = new RegExp(`${ee}|${si}`), Ce = "$lit$";
class ci {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const r = [], n = [], s = document.createTreeWalker(t.content, 133, null, !1);
    let c = 0, a = -1, o = 0;
    const { strings: d, values: { length: f } } = e;
    for (; o < f; ) {
      const p = s.nextNode();
      if (p === null) {
        s.currentNode = n.pop();
        continue;
      }
      if (a++, p.nodeType === 1) {
        if (p.hasAttributes()) {
          const y = p.attributes, { length: g } = y;
          let x = 0;
          for (let k = 0; k < g; k++)
            Tt(y[k].name, Ce) && x++;
          for (; x-- > 0; ) {
            const k = d[o], C = et.exec(k)[2], A = C.toLowerCase() + Ce, I = p.getAttribute(A);
            p.removeAttribute(A);
            const N = I.split(It);
            this.parts.push({ type: "attribute", index: a, name: C, strings: N }), o += N.length - 1;
          }
        }
        p.tagName === "TEMPLATE" && (n.push(p), s.currentNode = p.content);
      } else if (p.nodeType === 3) {
        const y = p.data;
        if (y.indexOf(ee) >= 0) {
          const g = p.parentNode, x = y.split(It), k = x.length - 1;
          for (let C = 0; C < k; C++) {
            let A, I = x[C];
            if (I === "")
              A = ae();
            else {
              const N = et.exec(I);
              N !== null && Tt(N[2], Ce) && (I = I.slice(0, N.index) + N[1] + N[2].slice(0, -Ce.length) + N[3]), A = document.createTextNode(I);
            }
            g.insertBefore(A, p), this.parts.push({ type: "node", index: ++a });
          }
          x[k] === "" ? (g.insertBefore(ae(), p), r.push(p)) : p.data = x[k], o += k;
        }
      } else if (p.nodeType === 8)
        if (p.data === ee) {
          const y = p.parentNode;
          (p.previousSibling === null || a === c) && (a++, y.insertBefore(ae(), p)), c = a, this.parts.push({ type: "node", index: a }), p.nextSibling === null ? p.data = "" : (r.push(p), a--), o++;
        } else {
          let y = -1;
          for (; (y = p.data.indexOf(ee, y + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const p of r)
      p.parentNode.removeChild(p);
  }
}
const Tt = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, ai = (i) => i.index !== -1, ae = () => document.createComment(""), et = (
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
const bt = 133;
function oi(i, e) {
  const { element: { content: t }, parts: r } = i, n = document.createTreeWalker(t, bt, null, !1);
  let s = Ee(r), c = r[s], a = -1, o = 0;
  const d = [];
  let f = null;
  for (; n.nextNode(); ) {
    a++;
    const p = n.currentNode;
    for (p.previousSibling === f && (f = null), e.has(p) && (d.push(p), f === null && (f = p)), f !== null && o++; c !== void 0 && c.index === a; )
      c.index = f !== null ? -1 : c.index - o, s = Ee(r, s), c = r[s];
  }
  d.forEach((p) => p.parentNode.removeChild(p));
}
const Qi = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, bt, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, Ee = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const r = i[t];
    if (ai(r))
      return t;
  }
  return -1;
};
function Yi(i, e, t = null) {
  const { element: { content: r }, parts: n } = i;
  if (t == null) {
    r.appendChild(e);
    return;
  }
  const s = document.createTreeWalker(r, bt, null, !1);
  let c = Ee(n), a = 0, o = -1;
  for (; s.nextNode(); )
    for (o++, s.currentNode === t && (a = Qi(e), t.parentNode.insertBefore(e, t)); c !== -1 && n[c].index === o; ) {
      if (a > 0) {
        for (; c !== -1; )
          n[c].index += a, c = Ee(n, c);
        return;
      }
      c = Ee(n, c);
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
const di = /* @__PURE__ */ new WeakMap(), ze = (i) => (...e) => {
  const t = i(...e);
  return di.set(t, !0), t;
}, Te = (i) => typeof i == "function" && di.has(i);
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
const Z = {}, Rt = {};
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
class tt {
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
    const e = wt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, c = 0, a, o = n.nextNode();
    for (; s < r.length; ) {
      if (a = r[s], !ai(a)) {
        this.__parts.push(void 0), s++;
        continue;
      }
      for (; c < a.index; )
        c++, o.nodeName === "TEMPLATE" && (t.push(o), n.currentNode = o.content), (o = n.nextNode()) === null && (n.currentNode = t.pop(), o = n.nextNode());
      if (a.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(o.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(o, a.name, a.strings, this.options));
      s++;
    }
    return wt && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Lt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), er = ` ${ee} `;
class li {
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
      const s = this.strings[n], c = s.lastIndexOf("<!--");
      r = (c > -1 || r) && s.indexOf("-->", c + 1) === -1;
      const a = et.exec(s);
      a === null ? t += s + (r ? er : si) : t += s.substr(0, a.index) + a[1] + a[2] + Ce + a[3] + ee;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Lt !== void 0 && (t = Lt.createHTML(t)), e.innerHTML = t, e;
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
const He = (i) => i === null || !(typeof i == "object" || typeof i == "function"), it = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class pi {
  constructor(e, t, r) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new _e(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, r = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const s = r[0].value;
      if (typeof s == "symbol")
        return String(s);
      if (typeof s == "string" || !it(s))
        return s;
    }
    let n = "";
    for (let s = 0; s < t; s++) {
      n += e[s];
      const c = r[s];
      if (c !== void 0) {
        const a = c.value;
        if (He(a) || !it(a))
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
class _e {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Z && (!He(e) || e !== this.value) && (this.value = e, Te(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Te(this.value); ) {
      const e = this.value;
      this.value = Z, e(this);
    }
    this.value !== Z && this.committer.commit();
  }
}
class Le {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(ae()), this.endNode = e.appendChild(ae());
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
    e.__insert(this.startNode = ae()), e.__insert(this.endNode = ae());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ae()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Te(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = Z, t(this);
    }
    const e = this.__pendingValue;
    e !== Z && (He(e) ? e !== this.value && this.__commitText(e) : e instanceof li ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : it(e) ? this.__commitIterable(e) : e === Rt ? (this.value = Rt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof tt && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new tt(t, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, n;
    for (const s of e)
      n = t[r], n === void 0 && (n = new Le(this.options), t.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(s), n.commit(), r++;
    r < t.length && (t.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    yt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class tr {
  constructor(e, t, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Te(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = Z, t(this);
    }
    if (this.__pendingValue === Z)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = Z;
  }
}
class ir extends pi {
  constructor(e, t, r) {
    super(e, t, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new gt(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class gt extends _e {
}
let ui = !1;
(() => {
  try {
    const i = {
      get capture() {
        return ui = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class rr {
  constructor(e, t, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Te(this.__pendingValue); ) {
      const s = this.__pendingValue;
      this.__pendingValue = Z, s(this);
    }
    if (this.__pendingValue === Z)
      return;
    const e = this.__pendingValue, t = this.value, r = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = nr(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = Z;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const nr = (i) => i && (ui ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
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
function sr(i) {
  let e = Re.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Re.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const r = i.strings.join(ee);
  return t = e.keyString.get(r), t === void 0 && (t = new ci(i, i.getTemplateElement()), e.keyString.set(r, t)), e.stringsArray.set(i.strings, t), t;
}
const Re = /* @__PURE__ */ new Map();
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
const ge = /* @__PURE__ */ new WeakMap(), cr = (i, e, t) => {
  let r = ge.get(e);
  r === void 0 && (yt(e, e.firstChild), ge.set(e, r = new Le(Object.assign({ templateFactory: sr }, t))), r.appendInto(e)), r.setValue(i), r.commit();
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
class ar {
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
    const s = t[0];
    return s === "." ? new ir(e, t.slice(1), r).parts : s === "@" ? [new rr(e, t.slice(1), n.eventContext)] : s === "?" ? [new tr(e, t.slice(1), r)] : new pi(e, t, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Le(e);
  }
}
const or = new ar();
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
const b = (i, ...e) => new li(i, e, "html", or);
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
const hi = (i, e) => `${i}--${e}`;
let Be = !0;
typeof window.ShadyCSS > "u" ? Be = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Be = !1);
const dr = (i) => (e) => {
  const t = hi(e.type, i);
  let r = Re.get(t);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Re.set(t, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const s = e.strings.join(ee);
  if (n = r.keyString.get(s), n === void 0) {
    const c = e.getTemplateElement();
    Be && window.ShadyCSS.prepareTemplateDom(c, i), n = new ci(e, c), r.keyString.set(s, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, lr = ["html", "svg"], pr = (i) => {
  lr.forEach((e) => {
    const t = Re.get(hi(e, i));
    t !== void 0 && t.keyString.forEach((r) => {
      const { element: { content: n } } = r, s = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((c) => {
        s.add(c);
      }), oi(r, s);
    });
  });
}, mi = /* @__PURE__ */ new Set(), ur = (i, e, t) => {
  mi.add(i);
  const r = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: s } = n;
  if (s === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, i);
    return;
  }
  const c = document.createElement("style");
  for (let d = 0; d < s; d++) {
    const f = n[d];
    f.parentNode.removeChild(f), c.textContent += f.textContent;
  }
  pr(i);
  const a = r.content;
  t ? Yi(t, c, a.firstChild) : a.insertBefore(c, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, i);
  const o = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(c, a.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(c), oi(t, d);
  }
}, hr = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = t.scopeName, n = ge.has(e), s = Be && e.nodeType === 11 && !!e.host, c = s && !mi.has(r), a = c ? document.createDocumentFragment() : e;
  if (cr(i, a, Object.assign({ templateFactory: dr(r) }, t)), c) {
    const o = ge.get(a);
    ge.delete(a);
    const d = o.value instanceof tt ? o.value.template : void 0;
    ur(r, a, d), yt(e, e.firstChild), e.appendChild(a), ge.set(e, o);
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
var fi;
window.JSCompiler_renameProperty = (i, e) => i;
const rt = {
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
}, yi = (i, e) => e !== i && (e === e || i === i), Ke = {
  attribute: !0,
  type: String,
  converter: rt,
  reflect: !1,
  hasChanged: yi
}, Ze = 1, Dt = 4, Nt = 8, Pt = 16, nt = "finalized";
class bi extends HTMLElement {
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
  static createProperty(e, t = Ke) {
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
        const s = this[e];
        this[t] = n, this.requestUpdateInternal(e, s, r);
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
    return this._classProperties && this._classProperties.get(e) || Ke;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(nt) || e.finalize(), this[nt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, t, r = yi) {
    return r(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const r = t.type, n = t.converter || rt, s = typeof n == "function" ? n : n.fromAttribute;
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
  static _propertyValueToAttribute(e, t) {
    if (t.reflect === void 0)
      return;
    const r = t.type, n = t.converter;
    return (n && n.toAttribute || rt.toAttribute)(e, r);
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
  _propertyToAttribute(e, t, r = Ke) {
    const n = this.constructor, s = n._attributeNameForProperty(e, r);
    if (s !== void 0) {
      const c = n._propertyValueToAttribute(t, r);
      if (c === void 0)
        return;
      this._updateState = this._updateState | Nt, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & Nt)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const s = r.getPropertyOptions(n);
      this._updateState = this._updateState | Pt, this[n] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(t, s), this._updateState = this._updateState & -17;
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
      const s = this.constructor;
      r = r || s.getPropertyOptions(e), s._valueHasChanged(this[e], t, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), r.reflect === !0 && !(this._updateState & Pt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
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
    this._updateState = this._updateState | Dt;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Dt;
  }
  get hasUpdated() {
    return this._updateState & Ze;
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
    e && (this._updateState & Ze || (this._updateState = this._updateState | Ze, this.firstUpdated(t)), this.updated(t));
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
fi = nt;
bi[fi] = !0;
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
const mr = (i, e) => (window.customElements.define(i, e), e), fr = (i, e) => {
  const { kind: t, elements: r } = e;
  return {
    kind: t,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(i, n);
    }
  };
}, te = (i) => (e) => typeof e == "function" ? mr(i, e) : fr(i, e), yr = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, br = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function u(i) {
  return (e, t) => t !== void 0 ? br(i, e, t) : yr(i, e);
}
function gr(i) {
  return u({ attribute: !1, hasChanged: void 0 });
}
const w = (i) => gr();
function U(i, e) {
  return (t, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? vt(n, t, r) : xt(n, t);
  };
}
function gi(i) {
  return (e, t) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? vt(r, e, t) : xt(r, e);
  };
}
const vt = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, xt = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), vr = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), xr = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function _r(i) {
  return (e, t) => t !== void 0 ? xr(i, e, t) : vr(i, e);
}
const $t = Element.prototype, Sr = $t.msMatchesSelector || $t.webkitMatchesSelector;
function vi(i = "", e = !1, t = "") {
  return (r, n) => {
    const s = {
      get() {
        const c = `slot${i ? `[name=${i}]` : ":not([name])"}`, a = this.renderRoot.querySelector(c);
        let o = a && a.assignedNodes({ flatten: e });
        return o && t && (o = o.filter((d) => d.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (d.matches ? d.matches(t) : Sr.call(d, t)))), o;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? vt(s, r, n) : xt(s, r);
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
const st = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _t = Symbol();
class St {
  constructor(e, t) {
    if (t !== _t)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (st ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const xi = (i) => new St(String(i), _t), kr = (i) => {
  if (i instanceof St)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, Se = (i, ...e) => {
  const t = e.reduce((r, n, s) => r + kr(n) + i[s + 1], i[0]);
  return new St(t, _t);
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
const Ft = {};
class me extends bi {
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
      const t = (s, c) => s.reduceRight((a, o) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(o) ? t(o, a) : (a.add(o), a)
      ), c), r = t(e, /* @__PURE__ */ new Set()), n = [];
      r.forEach((s) => n.unshift(s)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !st) {
        const r = Array.prototype.slice.call(t.cssRules).reduce((n, s) => n + s.cssText, "");
        return xi(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : st ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== Ft && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return Ft;
  }
}
me.finalized = !0;
me.render = hr;
me.shadowRootOptions = { mode: "open" };
const Ar = 1e3 * 60, Ot = "langChanged";
function Cr(i, e, t) {
  return Object.entries(ct(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ct(s))), i);
}
function Er(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function ct(i) {
  return typeof i == "function" ? i() : i;
}
const wr = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: Er,
  interpolate: Cr,
  translationCache: {}
});
let Ir = wr();
function Tr(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(Ot, t, e), () => window.removeEventListener(Ot, t);
}
function xe(i, e, t = Ir) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? ct(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function _i(i) {
  return i instanceof Le ? i.startNode.isConnected : i instanceof _e ? i.committer.element.isConnected : i.element.isConnected;
}
function Rr(i) {
  for (const [e] of i)
    _i(e) || i.delete(e);
}
function Lr(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function Dr(i, e) {
  setInterval(() => Lr(() => Rr(i)), e);
}
const Si = /* @__PURE__ */ new Map();
function Nr() {
  Tr((i) => {
    for (const [e, t] of Si)
      _i(e) && Pr(e, t, i);
  });
}
Nr();
Dr(Si, Ar);
function Pr(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
function $r(i, e, t) {
  const r = i.createElementNS(i.documentElement.namespaceURI, e);
  return Object.entries(t).filter(([n, s]) => s !== null).forEach(([n, s]) => r.setAttribute(n, s)), r;
}
var at = function(i, e) {
  return at = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, at(i, e);
};
function Fr(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  at(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var we = function() {
  return we = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, we.apply(this, arguments);
};
function l(i, e, t, r) {
  var n = arguments.length, s = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, e, t, r);
  else for (var a = i.length - 1; a >= 0; a--) (c = i[a]) && (s = (n < 3 ? c(s) : n > 3 ? c(e, t, s) : c(e, t)) || s);
  return n > 3 && s && Object.defineProperty(e, t, s), s;
}
function Ne(i) {
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
function Or(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Mr = (i) => i.nodeType === Node.ELEMENT_NODE, ki = () => {
}, Vr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", ki, Vr);
document.removeEventListener("x", ki);
const Ai = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Ur = (i) => {
  const e = Ai();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const s = (c) => {
    n = c.composedPath();
  };
  return document.body.addEventListener("check-if-focused", s), t.dispatchEvent(r), document.body.removeEventListener("check-if-focused", s), n.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class kt extends me {
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
var Ci = (
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
var Br = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, zr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Mt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Hr(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + t.left, c = n + t.top, a, o;
  if (i.type === "touchstart") {
    var d = i;
    a = d.changedTouches[0].pageX - s, o = d.changedTouches[0].pageY - c;
  } else {
    var f = i;
    a = f.pageX - s, o = f.pageY - c;
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
var Vt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ut = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Pe = [], Gr = (
  /** @class */
  function(i) {
    Fr(e, i);
    function e(t) {
      var r = i.call(this, we(we({}, e.defaultAdapter), t)) || this;
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
        return Br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Mt;
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
        var n = e.cssClasses, s = n.ROOT, c = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(s), t.adapter.isUnbounded() && (t.adapter.addClass(c), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(n), t.adapter.removeClass(s), t.removeCssVars();
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
          for (var s = Ne(Vt), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            c && !c.done && (n = s.return) && n.call(s);
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
          for (var s = Ne(Ut), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            c && !c.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var n = Ne(Vt), s = n.next(); !s.done; s = n.next()) {
          var c = s.value;
          this.adapter.deregisterInteractionHandler(c, this.activateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = Ne(Ut), s = n.next(); !s.done; s = n.next()) {
          var c = s.value;
          this.adapter.deregisterDocumentInteractionHandler(c, this.deactivateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(s) {
        s.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[s], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var s = this.previousActivationEvent, c = s && t !== void 0 && s.type !== t.type;
          if (!c) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var a = t !== void 0 && Pe.length > 0 && Pe.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Pe.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Pe = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, c = e.cssClasses, a = c.FG_DEACTIVATION, o = c.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", p = "";
      if (!this.adapter.isUnbounded()) {
        var y = this.getFgTranslationCoordinates(), g = y.startPoint, x = y.endPoint;
        f = g.x + "px, " + g.y + "px", p = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(n, f), this.adapter.updateCssVariable(s, p), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, s;
      n ? s = Hr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, s = {
        x: s.x - this.initialSize / 2,
        y: s.y - this.initialSize / 2
      };
      var c = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: s, endPoint: c };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, s = n.hasDeactivationUXRun, c = n.isActivated, a = s || !c;
      a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, Mt.FG_DEACTIVATION_MS));
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
        var n = we({}, r);
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
        var c = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return c + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var s = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && s % 2 !== 0 ? this.initialSize = s - 1 : this.initialSize = s, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, n = t.VAR_LEFT, s = t.VAR_TOP, c = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(c, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
    }, e;
  }(Ci)
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
class qr {
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
const Bt = /* @__PURE__ */ new WeakMap(), Ge = ze((i) => (e) => {
  if (!(e instanceof _e) || e instanceof gt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = Bt.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), Bt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new qr(r);
  n.forEach((c) => {
    c in i || (s.remove(c), n.delete(c));
  });
  for (const c in i) {
    const a = i[c];
    a != n.has(c) && (a ? (s.add(c), n.add(c)) : (s.remove(c), n.delete(c)));
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
const zt = /* @__PURE__ */ new WeakMap(), jr = ze((i) => (e) => {
  if (!(e instanceof _e) || e instanceof gt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = zt.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), zt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in i || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in i)
    n.add(s), s.indexOf("-") === -1 ? r[s] = i[s] : r.setProperty(s, i[s]);
});
class P extends kt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Gr;
  }
  get isActive() {
    return Or(this.parentElement || this, ":active");
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
    return b`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ge(r)}"
          style="${jr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
l([
  U(".mdc-ripple-surface")
], P.prototype, "mdcRoot", void 0);
l([
  u({ type: Boolean })
], P.prototype, "primary", void 0);
l([
  u({ type: Boolean })
], P.prototype, "accent", void 0);
l([
  u({ type: Boolean })
], P.prototype, "unbounded", void 0);
l([
  u({ type: Boolean })
], P.prototype, "disabled", void 0);
l([
  u({ type: Boolean })
], P.prototype, "activated", void 0);
l([
  u({ type: Boolean })
], P.prototype, "selected", void 0);
l([
  u({ type: Boolean })
], P.prototype, "internalUseStateLayerCustomProperties", void 0);
l([
  w()
], P.prototype, "hovering", void 0);
l([
  w()
], P.prototype, "bgFocused", void 0);
l([
  w()
], P.prototype, "fgActivation", void 0);
l([
  w()
], P.prototype, "fgDeactivation", void 0);
l([
  w()
], P.prototype, "fgScale", void 0);
l([
  w()
], P.prototype, "fgSize", void 0);
l([
  w()
], P.prototype, "translateStart", void 0);
l([
  w()
], P.prototype, "translateEnd", void 0);
l([
  w()
], P.prototype, "leftPos", void 0);
l([
  w()
], P.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Wr = Se`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ot = class extends P {
};
ot.styles = [Wr];
ot = l([
  te("mwc-ripple")
], ot);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const pe = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
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
        r.call(this, n), n.forEach((s, c) => {
          const o = this.constructor._observers.get(c);
          o !== void 0 && o.call(this, this[c], s);
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
class Ei {
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
class F extends me {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ei(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : b``, r = this.hasMeta ? this.renderMeta() : b``;
    return b`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? b`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? b`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return b`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ge(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return b`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return b`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return b`<slot></slot>`;
  }
  renderTwoline() {
    return b`
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
l([
  U("slot")
], F.prototype, "slotElement", void 0);
l([
  gi("mwc-ripple")
], F.prototype, "ripple", void 0);
l([
  u({ type: String })
], F.prototype, "value", void 0);
l([
  u({ type: String, reflect: !0 })
], F.prototype, "group", void 0);
l([
  u({ type: Number, reflect: !0 })
], F.prototype, "tabindex", void 0);
l([
  u({ type: Boolean, reflect: !0 }),
  pe(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], F.prototype, "disabled", void 0);
l([
  u({ type: Boolean, reflect: !0 })
], F.prototype, "twoline", void 0);
l([
  u({ type: Boolean, reflect: !0 })
], F.prototype, "activated", void 0);
l([
  u({ type: String, reflect: !0 })
], F.prototype, "graphic", void 0);
l([
  u({ type: Boolean })
], F.prototype, "multipleGraphics", void 0);
l([
  u({ type: Boolean })
], F.prototype, "hasMeta", void 0);
l([
  u({ type: Boolean, reflect: !0 }),
  pe(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], F.prototype, "noninteractive", void 0);
l([
  u({ type: Boolean, reflect: !0 }),
  pe(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], F.prototype, "selected", void 0);
l([
  w()
], F.prototype, "shouldRenderRipple", void 0);
l([
  w()
], F.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wi = Se`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let dt = class extends F {
};
dt.styles = [wi];
dt = l([
  te("mwc-list-item")
], dt);
var Xr = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, K = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Kr(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && Xr(e, t, n), n;
};
let j = class extends Zi {
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(xe("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? b`<div style="position:relative;">
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
      </div>` : b``;
  }
  renderMulplierList() {
    return b`${this.multipliers.map(
      (i) => b`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? xe("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? b`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : b``;
  }
  render() {
    return b`
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
K([
  u({ type: Boolean })
], j.prototype, "nullable", 2);
K([
  u({ type: Array })
], j.prototype, "multipliers", 2);
K([
  u({ type: String })
], j.prototype, "multiplier", 1);
K([
  u({ type: String })
], j.prototype, "unit", 2);
K([
  w()
], j.prototype, "null", 1);
K([
  u({ type: String })
], j.prototype, "maybeValue", 1);
K([
  u({ type: String })
], j.prototype, "defaultValue", 2);
K([
  u({ type: Array })
], j.prototype, "reservedValues", 2);
K([
  U("mwc-switch")
], j.prototype, "nullSwitch", 2);
K([
  U("mwc-menu")
], j.prototype, "multiplierMenu", 2);
K([
  U("mwc-icon-button")
], j.prototype, "multiplierButton", 2);
j = K([
  te("wizard-textfield")
], j);
var Zr = Object.defineProperty, Jr = Object.getOwnPropertyDescriptor, fe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Jr(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && Zr(e, t, n), n;
};
let le = class extends Ki {
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
    return this.nullable ? b`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : b``;
  }
  render() {
    return b`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
fe([
  u({ type: Boolean })
], le.prototype, "nullable", 2);
fe([
  w()
], le.prototype, "null", 1);
fe([
  u({ type: String })
], le.prototype, "maybeValue", 1);
fe([
  u({ type: String })
], le.prototype, "defaultValue", 2);
fe([
  u({ type: Array })
], le.prototype, "reservedValues", 2);
fe([
  U("mwc-switch")
], le.prototype, "nullSwitch", 2);
le = fe([
  te("wizard-select")
], le);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Qr(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const a = `__${e}`;
    if (t = r.getPropertyDescriptor(e, a), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let s = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const c = {
    configurable: !0,
    enumerable: !0,
    set(a) {
      s === "" && (s = r.getPropertyOptions(e).attribute), this.hasAttribute(s) && this.removeAttribute(s), n.set.call(this, a);
    }
  };
  return n.get && (c.get = function() {
    return n.get.call(this);
  }), c;
}
function At(i, e, t) {
  if (e !== void 0)
    return Qr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ii extends kt {
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
Ii.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const Je = /* @__PURE__ */ new WeakMap(), oe = ze((i) => (e) => {
  const t = Je.get(e);
  if (i === void 0 && e instanceof _e) {
    if (t !== void 0 || !Je.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  Je.set(e, i);
});
class $ extends Ii {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ei(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || r !== void 0 || n !== void 0) {
      const s = this.calculateAnimationStateName(!!r, !!t, !!n), c = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${s}-${c}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, r) {
    return r ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? b`<mwc-ripple
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
    return b`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ge(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${oe(this.name)}"
              aria-checked="${oe(r)}"
              aria-label="${oe(this.ariaLabel)}"
              aria-labelledby="${oe(this.ariaLabelledBy)}"
              aria-describedby="${oe(this.ariaDescribedBy)}"
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
l([
  U(".mdc-checkbox")
], $.prototype, "mdcRoot", void 0);
l([
  U("input")
], $.prototype, "formElement", void 0);
l([
  u({ type: Boolean, reflect: !0 })
], $.prototype, "checked", void 0);
l([
  u({ type: Boolean })
], $.prototype, "indeterminate", void 0);
l([
  u({ type: Boolean, reflect: !0 })
], $.prototype, "disabled", void 0);
l([
  u({ type: String, reflect: !0 })
], $.prototype, "name", void 0);
l([
  u({ type: String })
], $.prototype, "value", void 0);
l([
  At,
  u({ type: String, attribute: "aria-label" })
], $.prototype, "ariaLabel", void 0);
l([
  At,
  u({ type: String, attribute: "aria-labelledby" })
], $.prototype, "ariaLabelledBy", void 0);
l([
  At,
  u({ type: String, attribute: "aria-describedby" })
], $.prototype, "ariaDescribedBy", void 0);
l([
  u({ type: Boolean })
], $.prototype, "reducedTouchTarget", void 0);
l([
  w()
], $.prototype, "animationClass", void 0);
l([
  w()
], $.prototype, "shouldRenderRipple", void 0);
l([
  w()
], $.prototype, "focused", void 0);
l([
  w()
], $.prototype, "useStateLayerCustomProperties", void 0);
l([
  gi("mwc-ripple")
], $.prototype, "ripple", void 0);
l([
  _r({ passive: !0 })
], $.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Yr = Se`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let lt = class extends $ {
};
lt.styles = [Yr];
lt = l([
  te("mwc-checkbox")
], lt);
var en = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, W = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? tn(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && en(e, t, n), n;
};
let G = class extends me {
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
    return this.nullable ? b`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : b``;
  }
  render() {
    return b`
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
W([
  u({ type: String })
], G.prototype, "label", 2);
W([
  u({ type: String })
], G.prototype, "helper", 2);
W([
  u({ type: Boolean })
], G.prototype, "nullable", 2);
W([
  u({ type: Boolean })
], G.prototype, "defaultChecked", 2);
W([
  u({ type: String })
], G.prototype, "maybeValue", 1);
W([
  u({ type: Boolean })
], G.prototype, "disabled", 2);
W([
  w()
], G.prototype, "null", 1);
W([
  w()
], G.prototype, "checked", 1);
W([
  w()
], G.prototype, "deactivateCheckbox", 2);
W([
  w()
], G.prototype, "formfieldLabel", 1);
W([
  U("mwc-switch")
], G.prototype, "nullSwitch", 2);
W([
  U("mwc-checkbox")
], G.prototype, "checkbox", 2);
G = W([
  te("wizard-checkbox")
], G);
function V(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const R = ":not(*)";
function rn(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function nn(i, e) {
  const [t, r] = e.split("	");
  return !t || !r ? R : `${i}[version="${t}"][revision="${r}"]`;
}
function Ht(i) {
  return L(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function Gt(i, e) {
  const [t, r] = V(e), n = D[i].parents.flatMap(
    (s) => O(s, t).split(",")
  );
  return M(
    n,
    [">"],
    [`${i}[connectivityNode="${r}"]`]
  ).map((s) => s.join("")).join(",");
}
function sn(i) {
  const [e, t, r, n, s, c] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((a) => i.getAttribute(a));
  return e === "None" ? `${L(i.parentElement)}>(${n} ${c} ${s})` : `${e} ${t || "(Client)"}/${r ?? ""} ${n} ${s ?? ""}`;
}
function cn(i, e) {
  if (e.endsWith(")")) {
    const [y, g] = V(e), [x, k, C] = g.substring(1, g.length - 1).split(" ");
    if (!x || !k) return R;
    const A = D[i].parents.flatMap(
      (I) => O(I, y).split(",")
    );
    return M(
      A,
      [">"],
      [`${i}[iedName="None"][lnClass="${x}"][lnType="${k}"][lnInst="${C}"]`]
    ).map((I) => I.join("")).join(",");
  }
  const [t, r, n, s, c] = e.split(/[ /]/);
  if (!t || !r || !s) return R;
  const [
    a,
    o,
    d,
    f,
    p
  ] = [
    [`[iedName="${t}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    [i],
    a,
    o,
    d,
    f,
    p
  ).map((y) => y.join("")).join(",");
}
function an(i) {
  return `${L(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function on(i, e) {
  const [t, r] = V(e), [n, s] = r.split(" ");
  return `${O(
    "IED",
    t
  )}>${i}[iedName="${n}"][apName="${s}"]`;
}
function dn(i) {
  return `${L(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function ln(i, e) {
  const [t, r] = V(e);
  return r ? `${O(
    "Server",
    t
  )}>${i}[associationID="${r}"]` : R;
}
function pn(i) {
  return `${L(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function un(i, e) {
  const [t, r] = e.split(">>");
  return r ? `IED[name="${t}"] ${i}[inst="${r}"]` : R;
}
function hn(i) {
  const e = i.textContent, [t, r, n, s, c] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => i.getAttribute(a));
  return `${L(i.parentElement)}>${e} ${t || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${c ?? ""}`;
}
function mn(i, e) {
  const [t, r] = V(e), [n, s, c, a, o, d] = r.split(/[ /]/), [
    f,
    p,
    y,
    g,
    x,
    k
  ] = [
    D[i].parents.flatMap(
      (C) => O(C, t).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    f,
    [">"],
    [i],
    p,
    y,
    g,
    x,
    k
  ).map((C) => C.join("")).join(",");
}
function fn(i) {
  const [e, t, r, n, s, c, a, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((f) => i.getAttribute(f)), d = `${e}/${t ?? ""} ${r} ${n ?? ""}.${s} ${c || ""}`;
  return `${L(i.parentElement)}>${d} (${a}${o ? " [" + o + "]" : ""})`;
}
function yn(i, e) {
  const [t, r] = V(e), [n, s, c, a] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = o && o[1] ? o[1] : "", f = o && o[2] ? o[2] : "", p = r.match(/\(([A-Z]{2})/), y = r.match(/ \[([0-9]{1,2})\]/), g = p && p[1] ? p[1] : "", x = y && y[1] ? y[1] : "", [
    k,
    C,
    A,
    I,
    N,
    re,
    je,
    We,
    Xe
  ] = [
    D[i].parents.flatMap(
      (ke) => O(ke, t).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${g}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return M(
    k,
    [">"],
    [i],
    C,
    A,
    I,
    N,
    re,
    je,
    We,
    Xe
  ).map((ke) => ke.join("")).join(",");
}
function bn(i) {
  if (!i.parentElement) return NaN;
  const e = L(i.parentElement), t = i.getAttribute("iedName"), r = i.getAttribute("intAddr"), n = Array.from(
    i.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(i);
  if (r) return `${e}>${r}[${n}]`;
  const [
    s,
    c,
    a,
    o,
    d,
    f,
    p,
    y,
    g,
    x,
    k,
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
  ].map((N) => i.getAttribute(N)), A = C ? `${p}:${C} ${y ?? ""}/${g ?? ""} ${x ?? ""} ${k ?? ""}` : "", I = `${t} ${s}/${c ?? ""} ${a} ${o ?? ""} ${d} ${f || ""}`;
  return `${e}>${A ? A + " " : ""}${I}${r ? `@${r}` : ""}`;
}
function gn(i, e) {
  const [t, r] = V(e), n = D[i].parents.flatMap(
    (Ae) => O(Ae, t).split(",")
  );
  if (r.endsWith("]")) {
    const [Ae] = r.split("["), Wi = [`[intAddr="${Ae}"]`];
    return M(n, [">"], [i], Wi).map((Xi) => Xi.join("")).join(",");
  }
  let s, c, a, o, d, f, p, y, g, x, k, C, A, I;
  !r.includes(":") && !r.includes("@") ? [s, c, a, o, d, f, p] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    y,
    g,
    x,
    k,
    C,
    A,
    s,
    c,
    a,
    o,
    d,
    f,
    p
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, c, a, o, d, f, p, I] = r.split(/[ /@]/) : [
    y,
    g,
    x,
    k,
    C,
    A,
    s,
    c,
    a,
    o,
    d,
    f,
    p,
    I
  ] = r.split(/[ /:@]/);
  const [
    N,
    re,
    je,
    We,
    Xe,
    ke,
    Vi,
    Ui,
    Bi,
    zi,
    Hi,
    Gi,
    qi,
    ji
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    f ? [`[doName="${f}"]`] : [":not([doName])"],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    y ? [`[serviceType="${y}"]`] : [":not([serviceType])", '[serviceType=""]'],
    g ? [`[srcCBName="${g}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    C ? [`[srcLNClass="${C}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    I ? [`[intAddr="${I}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return M(
    n,
    [">"],
    [i],
    N,
    re,
    je,
    We,
    Xe,
    ke,
    Vi,
    Ui,
    Bi,
    zi,
    Hi,
    Gi,
    qi,
    ji
  ).map((Ae) => Ae.join("")).join(",");
}
function vn(i) {
  const [e, t, r] = ["prefix", "lnClass", "inst"].map(
    (n) => i.getAttribute(n)
  );
  return `${L(i.parentElement)}>${e ?? ""} ${t} ${r}`;
}
function xn(i, e) {
  const [t, r] = V(e), n = D[i].parents.flatMap(
    (p) => O(p, t).split(",")
  ), [s, c, a] = r.split(" ");
  if (!c) return R;
  const [o, d, f] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    [`[inst="${a}"]`]
  ];
  return M(
    n,
    [">"],
    [i],
    o,
    d,
    f
  ).map((p) => p.join("")).join(",");
}
function _n(i) {
  const [e, t, r, n, s, c] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => i.getAttribute(a));
  return `${L(i.parentElement)}>${t} ${e || ""} ${r}/${n ?? ""} ${s} ${c}`;
}
function Sn(i, e) {
  const [t, r] = V(e), n = D[i].parents.flatMap(
    (A) => O(A, t).split(",")
  ), [s, c, a, o, d, f] = r.split(/[ /]/), [
    p,
    y,
    g,
    x,
    k,
    C
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    f ? [`[lnInst="${f}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    n,
    [">"],
    [i],
    p,
    y,
    g,
    x,
    k,
    C
  ).map((A) => A.join("")).join(",");
}
function qt(i) {
  const [e, t] = ["name", "ix"].map((r) => i.getAttribute(r));
  return `${L(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function pt(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = V(e), [s, c, a, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!c) return R;
  if (t === 0) return `${i}[name="${c}"]`;
  const d = D[i].parents.flatMap(
    (y) => y === "SDI" ? pt(y, r, t - 1).split(",") : O(y, r).split(",")
  ).filter((y) => !y.startsWith(R));
  if (d.length === 0) return R;
  const [f, p] = [
    [`[name="${c}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return M(
    d,
    [">"],
    [i],
    f,
    p
  ).map((y) => y.join("")).join(",");
}
function kn(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(i));
  return `${L(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function An(i, e) {
  const [t, r] = V(e), [n, s] = r.split(" "), c = parseFloat(s), a = D[i].parents.flatMap(
    (f) => O(f, t).split(",")
  ), [o, d] = [
    n ? [`[sGroup="${n}"]`] : [""],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return M(
    a,
    [">"],
    [i],
    o,
    d
  ).map((f) => f.join("")).join(",");
}
function Cn(i) {
  const [e, t] = ["iedName", "apName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function En(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? R : `${i}[iedName="${t}"][apName="${r}"]`;
}
function jt(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function Wt(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? R : `${i}[ldInst="${t}"][cbName="${r}"]`;
}
function wn(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${L(i.parentElement)}>${e}`;
}
function In(i, e) {
  const [t, r] = V(e), [n, s] = [
    D[i].parents.flatMap(
      (c) => O(c, t).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return M(n, [">"], [i], s).map((c) => c.join("")).join(",");
}
function Tn(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${L(i.parentElement)}>${t}`;
  const r = Array.from(i.parentElement.children).filter((n) => n.getAttribute("type") === t).findIndex((n) => n.isSameNode(i));
  return `${L(i.parentElement)}>${t} [${r}]`;
}
function Rn(i, e) {
  const [t, r] = V(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [c, a, o] = [
    D[i].parents.flatMap(
      (d) => O(d, t).split(",")
    ),
    [`[type="${n}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return M(
    c,
    [">"],
    [i],
    a,
    o
  ).map((d) => d.join("")).join(",");
}
function Ln(i) {
  return `${L(i.parentElement)}>${i.getAttribute("ord")}`;
}
function Dn(i, e) {
  const [t, r] = V(e);
  return `${O("EnumType", t)}>${i}[ord="${r}"]`;
}
function Nn(i) {
  return `${L(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function Pn(i, e) {
  const [t, r] = V(e), [n, s] = r.split("	"), [c] = [
    D[i].parents.flatMap(
      (a) => O(a, t).split(",")
    )
  ];
  return M(
    c,
    [">"],
    [i],
    [`[type="${n}"]`],
    [">"],
    [s]
  ).map((a) => a.join("")).join(",");
}
function $n() {
  return "";
}
function Fn() {
  return ":root";
}
function S(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${L(i.parentElement)}>${i.getAttribute("name")}`;
}
function _(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = V(e);
  if (!n) return R;
  if (t === 0) return `${i}[name="${n}"]`;
  const s = D[i].parents;
  if (!s) return R;
  const c = s.flatMap(
    (a) => D[a].selector === D.Substation.selector ? _(a, r, t - 1).split(",") : O(a, r).split(",")
  ).filter((a) => !a.startsWith(R));
  return c.length === 0 ? R : M(c, [">"], [i], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function h(i) {
  return L(i.parentElement).toString();
}
function m(i, e) {
  const t = D[i].parents;
  if (!t) return R;
  const r = t.flatMap((n) => O(n, e).split(",")).filter((n) => !n.startsWith(R));
  return r.length === 0 ? R : M(r, [">"], [i]).map((n) => n.join("")).join(",");
}
function $e(i) {
  return `#${i.id}`;
}
function Fe(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : R;
}
const Ti = [
  "TransformerWinding",
  "ConductingEquipment"
], Ri = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Ti
], ut = ["Substation", "VoltageLevel", "Bay"], Li = ["Process", "Line"], Di = ["EqSubFunction", "EqFunction"], On = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ri,
  ...ut,
  ...Li,
  ...Di
], Ni = ["ConnectivityNode", ...On], Mn = ["GOOSESecurity", "SMVSecurity"], Vn = ["SubNetwork", ...Mn, ...Ni], Un = ["BDA", "DA"], Bn = ["SampledValueControl", "GSEControl"], zn = ["LogControl", "ReportControl"], Hn = [...Bn, ...zn], Gn = ["GSE", "SMV"], qn = [
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
  ...Hn,
  ...Gn,
  ...Un
], he = ["LN0", "LN"], jn = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Wn = ["Subject", "IssuerName"], Xn = ["MinTime", "MaxTime"], Kn = ["LNodeType", "DOType", "DAType", "EnumType"], Zn = [
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
], Jn = ["DynDataSet", "ConfDataSet"], Qn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Jn
], Yn = ["ConfLogControl", "ConfSigRef"], es = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], ts = ["SCL", ...Vn, ...qn, ...Kn], Pi = [
  ...ts,
  ...jn,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Wn,
  ...Xn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...he,
  ...Zn,
  "DynAssociation",
  "SettingGroups",
  ...Qn,
  ...Yn,
  ...es,
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
], is = new Set(Pi);
function Ct(i) {
  return is.has(i);
}
const qe = ["Text", "Private"], ce = [...qe], T = [...qe], Oe = [...qe], Xt = [...T, "Val"], $i = [...ce, "LNode"], de = [...$i], ht = [...de], Qe = [
  ...de,
  "PowerTransformer",
  "GeneralEquipment"
], Kt = [
  ...ht,
  "Terminal"
], Zt = [...T, "Address"], Fi = [...ce], Jt = [...Fi, "IEDName"], Qt = [
  ...T,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Yt = [
  ...de,
  "GeneralEquipment",
  "Function"
], ei = [...Fi, "TrgOps"], ti = [
  ...de,
  "GeneralEquipment",
  "EqSubFunction"
], D = {
  AccessControl: {
    identity: h,
    selector: m,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: S,
    selector: _,
    parents: ["IED"],
    children: [
      ...ce,
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
    identity: dn,
    selector: ln,
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
    identity: S,
    selector: _,
    parents: ["DAType"],
    children: [...Xt]
  },
  BitRate: {
    identity: h,
    selector: m,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: S,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...Qe,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: _n,
    selector: Sn,
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
    children: [...T, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: S,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Kt,
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
    identity: Cn,
    selector: En,
    parents: ["SubNetwork"],
    children: [...T, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: S,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...$i]
  },
  DA: {
    identity: S,
    selector: _,
    parents: ["DOType"],
    children: [...Xt]
  },
  DAI: {
    identity: qt,
    selector: pt,
    parents: ["DOI", "SDI"],
    children: [...T, "Val"]
  },
  DAType: {
    identity: $e,
    selector: Fe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "BDA", "ProtNs"]
  },
  DO: {
    identity: S,
    selector: _,
    parents: ["LNodeType"],
    children: [...T]
  },
  DOI: {
    identity: S,
    selector: _,
    parents: [...he],
    children: [...T, "SDI", "DAI"]
  },
  DOType: {
    identity: $e,
    selector: Fe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: S,
    selector: _,
    parents: [...he],
    children: [...ce, "FCDA"]
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
    identity: $e,
    selector: Fe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "EnumVal"]
  },
  EnumVal: {
    identity: Ln,
    selector: Dn,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: S,
    selector: _,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...ti]
  },
  EqSubFunction: {
    identity: S,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...ti]
  },
  ExtRef: {
    identity: bn,
    selector: gn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: fn,
    selector: yn,
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
    identity: S,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...de,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: S,
    selector: _,
    parents: [
      "SubFunction",
      "Function",
      ...Li,
      ...Di,
      ...ut
    ],
    children: [...ht, "EqFunction"]
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
    identity: S,
    selector: _,
    parents: ["AccessPoint"],
    children: [...ce, "Subject", "IssuerName"]
  },
  GSE: {
    identity: jt,
    selector: Wt,
    parents: ["ConnectedAP"],
    children: [...Zt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: S,
    selector: _,
    parents: ["LN0"],
    children: [...Jt, "Protocol"]
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
    identity: rn,
    selector: nn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: S,
    selector: _,
    parents: ["SCL"],
    children: [...T, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: hn,
    selector: mn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: h,
    selector: m,
    parents: [...he],
    children: [...T, "ExtRef"]
  },
  IssuerName: {
    identity: h,
    selector: m,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: an,
    selector: on,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: pn,
    selector: un,
    parents: ["Server"],
    children: [...T, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: vn,
    selector: xn,
    parents: ["AccessPoint", "LDevice"],
    children: [...Qt]
  },
  LN0: {
    identity: h,
    selector: m,
    parents: ["LDevice"],
    children: [
      ...Qt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: sn,
    selector: cn,
    parents: [...Ni],
    children: [...T]
  },
  LNodeType: {
    identity: $e,
    selector: Fe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "DO"]
  },
  Line: {
    identity: S,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Yt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: S,
    selector: _,
    parents: [...he],
    children: [...T]
  },
  LogControl: {
    identity: S,
    selector: _,
    parents: [...he],
    children: [...ei]
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
    identity: Ht,
    selector: Gt,
    parents: ["TransformerWinding"],
    children: [...T]
  },
  OptFields: {
    identity: h,
    selector: m,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Tn,
    selector: Rn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: wn,
    selector: In,
    parents: ["ConnectedAP"],
    children: [...T, "P"]
  },
  PowerTransformer: {
    identity: S,
    selector: _,
    parents: [...ut],
    children: [
      ...ht,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => R,
    parents: [],
    children: []
  },
  Process: {
    identity: S,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Yt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Nn,
    selector: Pn,
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
    identity: S,
    selector: _,
    parents: [...he],
    children: [...ei, "OptFields", "RptEnabled"]
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
    children: [...T, "ClientLN"]
  },
  SamplesPerSec: {
    identity: h,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: S,
    selector: _,
    parents: ["LN0"],
    children: [...Jt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: h,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: $n,
    selector: Fn,
    parents: [],
    children: [
      ...qe,
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
    identity: qt,
    selector: pt,
    parents: ["DOI", "SDI"],
    children: [...T, "SDI", "DAI"]
  },
  SDO: {
    identity: S,
    selector: _,
    parents: ["DOType"],
    children: [...ce]
  },
  Server: {
    identity: h,
    selector: m,
    parents: ["AccessPoint"],
    children: [
      ...T,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: h,
    selector: m,
    parents: ["AccessPoint"],
    children: [...T]
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
    children: [...T]
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
    identity: jt,
    selector: Wt,
    parents: ["ConnectedAP"],
    children: [...Zt]
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
    identity: S,
    selector: _,
    parents: ["AccessPoint"],
    children: [...ce, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: S,
    selector: _,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Ti
    ],
    children: [...de, "EqFunction"]
  },
  SubFunction: {
    identity: S,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...de,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: S,
    selector: _,
    parents: ["Communication"],
    children: [...ce, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: h,
    selector: m,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: S,
    selector: _,
    parents: ["SCL"],
    children: [...Qe, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: h,
    selector: m,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: S,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...de, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Ht,
    selector: Gt,
    parents: [...Ri],
    children: [...T]
  },
  Text: {
    identity: h,
    selector: m,
    parents: Pi.filter((i) => i !== "Text" && i !== "Private"),
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
    identity: S,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...Kt,
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
    identity: kn,
    selector: An,
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
    identity: S,
    selector: _,
    parents: ["Substation"],
    children: [...Qe, "Voltage", "Bay", "Function"]
  }
};
function O(i, e) {
  return typeof e != "string" ? R : Ct(i) ? D[i].selector(i, e) : i;
}
function Ue(i, e, t) {
  if (typeof t != "string" || !Ct(e)) return null;
  const r = i.querySelector(D[e].selector(e, t));
  return r === null || ii(r) ? r : Array.from(
    i.querySelectorAll(D[e].selector(e, t))
  ).find(ii) ?? null;
}
function L(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return Ct(e) ? D[e].identity(i) : NaN;
}
function M(...i) {
  return i.reduce(
    (e, t) => e.flatMap((r) => t.map((n) => [r, n].flat())),
    [[]]
  );
}
function Oi(i, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(i)) return 1 / 0;
  switch (i?.constructor) {
    case Object:
    case Array:
      return e.add(i), 1 + Math.max(
        -1,
        ...Object.values(i).map((t) => Oi(t, e))
      );
    default:
      return 0;
  }
}
function ii(i) {
  return !i.closest("Private");
}
const rs = 99;
Array(rs).fill(1).map((i, e) => `${e + 1}`);
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
const ri = /* @__PURE__ */ new WeakMap(), ni = 2147483647, ns = ze((...i) => (e) => {
  let t = ri.get(e);
  t === void 0 && (t = {
    lastRenderedIndex: ni,
    values: []
  }, ri.set(e, t));
  const r = t.values;
  let n = r.length;
  t.values = i;
  for (let s = 0; s < i.length && !(s > t.lastRenderedIndex); s++) {
    const c = i[s];
    if (He(c) || typeof c.then != "function") {
      e.setValue(c), t.lastRenderedIndex = s;
      break;
    }
    s < n && c === r[s] || (t.lastRenderedIndex = ni, n = 0, Promise.resolve(c).then((a) => {
      const o = t.values.indexOf(c);
      o > -1 && o < t.lastRenderedIndex && (t.lastRenderedIndex = o, e.setValue(a), e.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class De extends F {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : b``, n = this.hasMeta && this.left ? this.renderMeta() : b``, s = this.renderRipple();
    return b`
      ${s}
      ${r}
      ${this.left ? "" : t}
      <span class=${Ge(e)}>
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
l([
  U("slot")
], De.prototype, "slotElement", void 0);
l([
  U("mwc-checkbox")
], De.prototype, "checkboxElement", void 0);
l([
  u({ type: Boolean })
], De.prototype, "left", void 0);
l([
  u({ type: String, reflect: !0 })
], De.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ss = Se`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ve = class extends De {
};
ve.styles = [wi, ss];
ve = l([
  te("mwc-check-list-item")
], ve);
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
var v = {
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
}, B = /* @__PURE__ */ new Set();
B.add(v.BACKSPACE);
B.add(v.ENTER);
B.add(v.SPACEBAR);
B.add(v.PAGE_UP);
B.add(v.PAGE_DOWN);
B.add(v.END);
B.add(v.HOME);
B.add(v.ARROW_LEFT);
B.add(v.ARROW_UP);
B.add(v.ARROW_RIGHT);
B.add(v.ARROW_DOWN);
B.add(v.DELETE);
B.add(v.ESCAPE);
B.add(v.TAB);
var q = {
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
}, z = /* @__PURE__ */ new Map();
z.set(q.BACKSPACE, v.BACKSPACE);
z.set(q.ENTER, v.ENTER);
z.set(q.SPACEBAR, v.SPACEBAR);
z.set(q.PAGE_UP, v.PAGE_UP);
z.set(q.PAGE_DOWN, v.PAGE_DOWN);
z.set(q.END, v.END);
z.set(q.HOME, v.HOME);
z.set(q.ARROW_LEFT, v.ARROW_LEFT);
z.set(q.ARROW_UP, v.ARROW_UP);
z.set(q.ARROW_RIGHT, v.ARROW_RIGHT);
z.set(q.ARROW_DOWN, v.ARROW_DOWN);
z.set(q.DELETE, v.DELETE);
z.set(q.ESCAPE, v.ESCAPE);
z.set(q.TAB, v.TAB);
var ue = /* @__PURE__ */ new Set();
ue.add(v.PAGE_UP);
ue.add(v.PAGE_DOWN);
ue.add(v.END);
ue.add(v.HOME);
ue.add(v.ARROW_LEFT);
ue.add(v.ARROW_UP);
ue.add(v.ARROW_RIGHT);
ue.add(v.ARROW_DOWN);
function ne(i) {
  var e = i.key;
  if (B.has(e))
    return e;
  var t = z.get(i.keyCode);
  return t || v.UNKNOWN;
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
var se, Y, E = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
se = {}, se["" + E.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", se["" + E.LIST_ITEM_CLASS] = "mdc-list-item", se["" + E.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", se["" + E.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", se["" + E.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", se["" + E.ROOT] = "mdc-list";
var be = (Y = {}, Y["" + E.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Y["" + E.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Y["" + E.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Y["" + E.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Y["" + E.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Y["" + E.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Y["" + E.ROOT] = "mdc-deprecated-list", Y), Me = {
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
    .` + E.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + E.LIST_ITEM_CLASS + ` a,
    .` + be[E.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + be[E.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + E.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + E.LIST_ITEM_CLASS + ` a,
    .` + E.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + E.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + be[E.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + be[E.LIST_ITEM_CLASS] + ` a,
    .` + be[E.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + be[E.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, H = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const mt = (i, e) => i - e, cs = (i, e) => {
  const t = Array.from(i), r = Array.from(e), n = { added: [], removed: [] }, s = t.sort(mt), c = r.sort(mt);
  let a = 0, o = 0;
  for (; a < s.length || o < c.length; ) {
    const d = s[a], f = c[o];
    if (d === f) {
      a++, o++;
      continue;
    }
    if (d !== void 0 && (f === void 0 || d < f)) {
      n.removed.push(d), a++;
      continue;
    }
    if (f !== void 0 && (d === void 0 || f < d)) {
      n.added.push(f), o++;
      continue;
    }
  }
  return n;
}, as = ["input", "button", "textarea", "select"];
function Ie(i) {
  return i instanceof Set;
}
const Ye = (i) => {
  const e = i === H.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return Ie(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Et extends Ci {
  constructor(e) {
    super(Object.assign(Object.assign({}, Et.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = H.UNSET_INDEX, this.focusedItemIndex_ = H.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Me;
  }
  static get numbers() {
    return H;
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
      if (!Ie(t)) {
        const r = t === H.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Ie(t))
      if (t.size) {
        const r = Array.from(t).sort(mt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = H.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Ye(e)) : this.setSingleSelectionAtIndex_(e));
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
  handleKeydown(e, t, r) {
    const n = ne(e) === "ArrowLeft", s = ne(e) === "ArrowUp", c = ne(e) === "ArrowRight", a = ne(e) === "ArrowDown", o = ne(e) === "Home", d = ne(e) === "End", f = ne(e) === "Enter", p = ne(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || d ? (e.preventDefault(), this.focusLastElement()) : (a || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let y = this.adapter.getFocusedElementIndex();
    if (y === -1 && (y = r, y < 0))
      return;
    let g;
    if (this.isVertical_ && a || !this.isVertical_ && c)
      this.preventDefaultEvent(e), g = this.focusNextElement(y);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), g = this.focusPrevElement(y);
    else if (o)
      this.preventDefaultEvent(e), g = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), g = this.focusLastElement();
    else if ((f || p) && t) {
      const x = e.target;
      if (x && x.tagName === "A" && f)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(y, !0);
    }
    this.focusedItemIndex_ = y, g !== void 0 && (this.setTabindexAtIndex_(g), this.focusedItemIndex_ = g);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, r) {
    e !== H.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let r = e + 1;
    if (r >= t)
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
    const r = `${e.target.tagName}`.toLowerCase();
    as.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== H.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const r = Ye(this.selectedIndex_), n = cs(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const s of n.removed)
        t && this.adapter.setSelectedStateForElementIndex(s, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !1);
      for (const s of n.added)
        t && this.adapter.setSelectedStateForElementIndex(s, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === H.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Me.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, r = t ? Me.ARIA_CURRENT : Me.ARIA_SELECTED;
    this.selectedIndex_ !== H.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === H.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== H.UNSET_INDEX ? e = this.selectedIndex_ : Ie(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const r of e)
          if (t = this.isIndexInRange_(r), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === H.UNSET_INDEX || this.isIndexInRange_(e);
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
  setSelectedIndexOnAction_(e, t, r) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, t) : t || r ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(H.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, r = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const s = Ye(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function os(i, e = 50) {
  let t;
  return function(r = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(r);
    }, e);
  };
}
const Ve = (i) => i.hasAttribute("mwc-list-item");
function ds() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class X extends kt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Et, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = os(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      ds.call(this), e(t);
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], r = [];
    for (const c of t)
      Ve(c) && (r.push(c), c._managingList = this), c.hasAttribute("divider") && !c.hasAttribute("role") && c.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((c, a) => {
      this.itemRoles ? c.setAttribute("role", this.itemRoles) : c.removeAttribute("role"), c.selected && n.add(a);
    }), this.multi)
      this.select(n);
    else {
      const c = n.size ? n.entries().next().value[1] : -1;
      this.select(c);
    }
    const s = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(s);
  }
  get selected() {
    const e = this.index;
    if (!Ie(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const r of e)
      t.push(this.items[r]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return b`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${oe(e)}"
          aria-label="${oe(t)}"
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
    return this.emptyMessage !== void 0 && t.length === 0 ? b`
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
      const t = this.getIndexOfTarget(e), r = e.target, n = Ve(r);
      this.mdcFoundation.handleKeydown(e, n, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const n = e.detail.selected, s = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, s === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, r = e.composedPath();
    for (const n of r) {
      let s = -1;
      if (Mr(n) && Ve(n) && (s = t.indexOf(n)), s !== -1)
        return s;
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
        const n = this.items[e];
        return n ? n.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(t, r);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const r = new CustomEvent("action", t);
        this.dispatchEvent(r);
      },
      notifySelected: (e, t) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: e, diff: t };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => Ur(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const r = this.items[e];
    r && (r.selected = !0, r.activated = t);
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
    for (const r of this.items)
      r.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Ai();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t];
      if (Ve(r))
        return this.items.indexOf(r);
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
l([
  u({ type: String })
], X.prototype, "emptyMessage", void 0);
l([
  U(".mdc-deprecated-list")
], X.prototype, "mdcRoot", void 0);
l([
  vi("", !0, "*")
], X.prototype, "assignedElements", void 0);
l([
  vi("", !0, '[tabindex="0"]')
], X.prototype, "tabbableElements", void 0);
l([
  u({ type: Boolean }),
  pe(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], X.prototype, "activatable", void 0);
l([
  u({ type: Boolean }),
  pe(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], X.prototype, "multi", void 0);
l([
  u({ type: Boolean }),
  pe(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], X.prototype, "wrapFocus", void 0);
l([
  u({ type: String }),
  pe(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], X.prototype, "itemRoles", void 0);
l([
  u({ type: String })
], X.prototype, "innerRole", void 0);
l([
  u({ type: String })
], X.prototype, "innerAriaLabel", void 0);
l([
  u({ type: Boolean })
], X.prototype, "rootTabbable", void 0);
l([
  u({ type: Boolean, reflect: !0 }),
  pe(function(i) {
    var e, t;
    if (i) {
      const r = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], X.prototype, "noninteractive", void 0);
var ls = Object.defineProperty, ps = Object.getOwnPropertyDescriptor, ye = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ps(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && ls(e, t, n), n;
};
function ft(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof Q ? i : ft(i.parentElement);
}
function us(i, e) {
  const t = i.innerText + `
`, r = Array.from(i.children).map((a) => a.innerText).join(`
`), n = i.value, s = (t + r + n).toUpperCase(), c = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  c.length === 1 && c[0] === "" || c.every((a) => new RegExp(
    `*${a}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? ft(i).classList.remove("hidden") : ft(i).classList.add("hidden");
}
let Q = class extends X {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof ve);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof ve).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof ve).some((i) => i.selected);
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
      (i) => us(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? b`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : b``;
  }
  render() {
    return b`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? xe("filter")}"
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
Q.styles = Se`
    ${xi(Ji.styles)}

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
ye([
  u({ type: String })
], Q.prototype, "searchFieldLabel", 2);
ye([
  u({ type: Boolean })
], Q.prototype, "disableCheckAll", 2);
ye([
  w()
], Q.prototype, "existCheckListItem", 1);
ye([
  w()
], Q.prototype, "isAllSelected", 1);
ye([
  w()
], Q.prototype, "isSomeSelected", 1);
ye([
  U("mwc-textfield")
], Q.prototype, "searchField", 2);
Q = ye([
  te("filtered-list")
], Q);
var hs = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, ie = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ms(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && hs(e, t, n), n;
};
const fs = b`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${xe("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let J = class extends me {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (i) => ({
      path: i,
      header: b`<h2>${"/" + i.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Oi(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(i) {
    const e = {};
    for (const t of i) {
      let r = e;
      for (const n of t)
        Object.prototype.hasOwnProperty.call(r, n) || (r[n] = {}), r = r[n];
    }
    this.selection = e;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(i) {
    this.paths = [i];
  }
  getTitle(i) {
    return i.join("/");
  }
  getDisplayString(i, e) {
    return i;
  }
  getPaths(i) {
    let e = Object.keys(this.selection).map((r) => [r]), t = i ?? this.depth - 1;
    for (; t-- > 0; )
      e = e.flatMap((r) => {
        let n = this.selection;
        for (const c of r) n = n[c];
        const s = Object.keys(n).map((c) => r.concat(c));
        return s.length === 0 ? [r] : s;
      });
    return i === void 0 ? e : e.filter((r) => r.length > i);
  }
  multiSelect(i, e, t) {
    let r = this.selection;
    for (const n of e) r = r[n];
    r && r[t] ? delete r[t] : r[t] = {};
  }
  singleSelect(i, e, t) {
    this.path[e.length] === t ? this.path = e : this.path = e.concat(t);
  }
  async select(i, e) {
    const t = i.target.selected.value;
    this.multi ? this.multiSelect(i, e, t) : this.singleSelect(i, e, t), this.requestUpdate(), await this.updateComplete, await new Promise((r) => setTimeout(r, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(i, e) {
    return b`<filtered-list
      @selected=${(t) => this.select(t, i)}
      searchFieldLabel="${this.getTitle(i)}"
    >
      ${e.map(
      (t) => b`<mwc-list-item
            value="${t}"
            ?activated=${this.getPaths(i.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(i.concat(t)))}
            >${this.getDisplayString(t, i)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(i) {
    const t = this.getPaths(i).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: s, path: c } of t)
      (n || s.length > 0) && r.push(
        b`${oe(n)} ${this.renderDirectory(c, s)}`
      );
    return r.length === 0 ? b`` : b`<div class="column">${r}</div>`;
  }
  render() {
    const i = new Array(this.depth).fill(0).map((e, t) => this.renderColumn(t));
    return this.loaded = Promise.allSettled(i).then(), b`<div class="pane">
      ${i.map((e) => ns(e, fs))}
    </div>`;
  }
};
J.styles = Se`
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
ie([
  u({ type: Object })
], J.prototype, "selection", 2);
ie([
  u({ type: Boolean })
], J.prototype, "multi", 2);
ie([
  u({ type: Number })
], J.prototype, "depth", 1);
ie([
  u({ type: Array })
], J.prototype, "paths", 1);
ie([
  u({ type: Array })
], J.prototype, "path", 1);
ie([
  u({ attribute: !1 })
], J.prototype, "read", 2);
ie([
  u({ attribute: !1 })
], J.prototype, "loaded", 2);
ie([
  U("div")
], J.prototype, "container", 2);
J = ie([
  te("finder-list")
], J);
function ys(i) {
  return i.startsWith("IED:") ? i.replace(/^.*:/, "").trim() : i.startsWith("LN0:") ? "LLN0" : i.replace(/^.*>/, "").trim();
}
function bs(i, e) {
  return async (t) => {
    const [r, n] = t[t.length - 1]?.split(": ", 2), s = Ue(i, r, n);
    return s ? {
      path: t,
      header: void 0,
      entries: e(s).map(
        (c) => `${c.tagName}: ${L(c)}`
      )
    } : { path: t, header: b`<p>${xe("error")}</p>`, entries: [] };
  };
}
function Mi(i) {
  if (["LDevice", "Server"].includes(i.tagName))
    return Array.from(i.children).filter(
      (t) => t.tagName === "LDevice" || t.tagName === "LN0" || t.tagName === "LN"
    );
  const e = i.tagName === "LN" || i.tagName === "LN0" ? i.getAttribute("lnType") : i.getAttribute("type");
  return Array.from(
    i.ownerDocument.querySelectorAll(
      `LNodeType[id="${e}"] > DO, DOType[id="${e}"] > SDO, DOType[id="${e}"] > DA, DAType[id="${e}"] > BDA`
    )
  );
}
function gs(i) {
  return b`<finder-list
    multi
    .paths=${[["Server: " + L(i)]]}
    .read=${bs(i.ownerDocument, Mi)}
    .getDisplayString=${ys}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function vs(i, e) {
  const [t, r] = e[e.length - 1].split(": "), n = Ue(i.ownerDocument, t, r);
  if (!n || Mi(n).length > 0) return;
  const s = e.find((C) => C.startsWith("LN"));
  if (!s) return;
  const [c, a] = s.split(": "), o = Ue(i.ownerDocument, c, a);
  if (!o) return;
  const d = o.closest("LDevice")?.getAttribute("inst"), f = o.getAttribute("prefix") ?? "", p = o.getAttribute("lnClass"), y = o.getAttribute("inst") && o.getAttribute("inst") !== "" ? o.getAttribute("inst") : null;
  let g = "", x = "", k = "";
  for (const C of e) {
    const [A, I] = C.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(A)) continue;
    const N = Ue(i.ownerDocument, A, I);
    if (!N) return;
    const re = N.getAttribute("name");
    A === "DO" && (g = re), A === "SDO" && (g = g + "." + re), A === "DA" && (x = re, k = N.getAttribute("fc") ?? ""), A === "BDA" && (x = x + "." + re);
  }
  if (!(!d || !p || !g || !x || !k))
    return $r(i.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: f,
      lnClass: p,
      lnInst: y,
      doName: g,
      daName: x,
      fc: k
    });
}
function xs(i) {
  return (e, t) => {
    const n = t.shadowRoot.querySelector("finder-list")?.paths ?? [], s = [];
    for (const c of n) {
      const a = vs(i, c);
      a && s.push({
        new: {
          parent: i,
          element: a,
          reference: null
        }
      });
    }
    return s;
  };
}
function Ns(i) {
  const e = i.closest("Server");
  return [
    {
      title: xe("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: xs(i)
      },
      content: [e ? gs(e) : b``]
    }
  ];
}
export {
  Ns as createFCDAsWizard,
  vs as newFCDA
};
