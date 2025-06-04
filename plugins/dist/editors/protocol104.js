import "@material/mwc-fab";
import "@material/mwc-formfield";
import "@material/mwc-icon-button";
import "@material/mwc-icon";
import { Select as zn } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as On } from "@material/mwc-textfield";
import { List as Vn } from "@material/mwc-list";
import "@material/mwc-icon-button-toggle";
import "@material/mwc-textarea";
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
const Vi = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, bi = (i, e, t = null) => {
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
const be = `{{lit-${String(Math.random()).slice(2)}}}`, Cr = `<!--${be}-->`, Mi = new RegExp(`${be}|${Cr}`), Ze = "$lit$";
class Nr {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const r = [], n = [], o = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0, s = -1, c = 0;
    const { strings: l, values: { length: h } } = e;
    for (; c < h; ) {
      const p = o.nextNode();
      if (p === null) {
        o.currentNode = n.pop();
        continue;
      }
      if (s++, p.nodeType === 1) {
        if (p.hasAttributes()) {
          const b = p.attributes, { length: g } = b;
          let w = 0;
          for (let S = 0; S < g; S++)
            Fi(b[S].name, Ze) && w++;
          for (; w-- > 0; ) {
            const S = l[c], x = Kt.exec(S)[2], C = x.toLowerCase() + Ze, T = p.getAttribute(C);
            p.removeAttribute(C);
            const F = T.split(Mi);
            this.parts.push({ type: "attribute", index: s, name: x, strings: F }), c += F.length - 1;
          }
        }
        p.tagName === "TEMPLATE" && (n.push(p), o.currentNode = p.content);
      } else if (p.nodeType === 3) {
        const b = p.data;
        if (b.indexOf(be) >= 0) {
          const g = p.parentNode, w = b.split(Mi), S = w.length - 1;
          for (let x = 0; x < S; x++) {
            let C, T = w[x];
            if (T === "")
              C = ke();
            else {
              const F = Kt.exec(T);
              F !== null && Fi(F[2], Ze) && (T = T.slice(0, F.index) + F[1] + F[2].slice(0, -Ze.length) + F[3]), C = document.createTextNode(T);
            }
            g.insertBefore(C, p), this.parts.push({ type: "node", index: ++s });
          }
          w[S] === "" ? (g.insertBefore(ke(), p), r.push(p)) : p.data = w[S], c += S;
        }
      } else if (p.nodeType === 8)
        if (p.data === be) {
          const b = p.parentNode;
          (p.previousSibling === null || s === a) && (s++, b.insertBefore(ke(), p)), a = s, this.parts.push({ type: "node", index: s }), p.nextSibling === null ? p.data = "" : (r.push(p), s--), c++;
        } else {
          let b = -1;
          for (; (b = p.data.indexOf(be, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const p of r)
      p.parentNode.removeChild(p);
  }
}
const Fi = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, Ir = (i) => i.index !== -1, ke = () => document.createComment(""), Kt = (
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
const gi = 133;
function Dr(i, e) {
  const { element: { content: t }, parts: r } = i, n = document.createTreeWalker(t, gi, null, !1);
  let o = Ye(r), a = r[o], s = -1, c = 0;
  const l = [];
  let h = null;
  for (; n.nextNode(); ) {
    s++;
    const p = n.currentNode;
    for (p.previousSibling === h && (h = null), e.has(p) && (l.push(p), h === null && (h = p)), h !== null && c++; a !== void 0 && a.index === s; )
      a.index = h !== null ? -1 : a.index - c, o = Ye(r, o), a = r[o];
  }
  l.forEach((p) => p.parentNode.removeChild(p));
}
const Mn = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, gi, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, Ye = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const r = i[t];
    if (Ir(r))
      return t;
  }
  return -1;
};
function Fn(i, e, t = null) {
  const { element: { content: r }, parts: n } = i;
  if (t == null) {
    r.appendChild(e);
    return;
  }
  const o = document.createTreeWalker(r, gi, null, !1);
  let a = Ye(n), s = 0, c = -1;
  for (; o.nextNode(); )
    for (c++, o.currentNode === t && (s = Mn(e), t.parentNode.insertBefore(e, t)); a !== -1 && n[a].index === c; ) {
      if (s > 0) {
        for (; a !== -1; )
          n[a].index += s, a = Ye(n, a);
        return;
      }
      a = Ye(n, a);
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
const Tr = /* @__PURE__ */ new WeakMap(), nt = (i) => (...e) => {
  const t = i(...e);
  return Tr.set(t, !0), t;
}, tt = (i) => typeof i == "function" && Tr.has(i);
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
const ce = {}, de = {};
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
class Xt {
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
    const e = Vi ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let o = 0, a = 0, s, c = n.nextNode();
    for (; o < r.length; ) {
      if (s = r[o], !Ir(s)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; a < s.index; )
        a++, c.nodeName === "TEMPLATE" && (t.push(c), n.currentNode = c.content), (c = n.nextNode()) === null && (n.currentNode = t.pop(), c = n.nextNode());
      if (s.type === "node") {
        const l = this.processor.handleTextExpression(this.options);
        l.insertAfterNode(c.previousSibling), this.__parts.push(l);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, s.name, s.strings, this.options));
      o++;
    }
    return Vi && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Hi = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), Hn = ` ${be} `;
class Lr {
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
      const o = this.strings[n], a = o.lastIndexOf("<!--");
      r = (a > -1 || r) && o.indexOf("-->", a + 1) === -1;
      const s = Kt.exec(o);
      s === null ? t += o + (r ? Hn : Cr) : t += o.substr(0, s.index) + s[1] + s[2] + Ze + s[3] + be;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Hi !== void 0 && (t = Hi.createHTML(t)), e.innerHTML = t, e;
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
const Nt = (i) => i === null || !(typeof i == "object" || typeof i == "function"), Zt = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class Pr {
  constructor(e, t, r) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Re(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, r = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const o = r[0].value;
      if (typeof o == "symbol")
        return String(o);
      if (typeof o == "string" || !Zt(o))
        return o;
    }
    let n = "";
    for (let o = 0; o < t; o++) {
      n += e[o];
      const a = r[o];
      if (a !== void 0) {
        const s = a.value;
        if (Nt(s) || !Zt(s))
          n += typeof s == "string" ? s : String(s);
        else
          for (const c of s)
            n += typeof c == "string" ? c : String(c);
      }
    }
    return n += e[t], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Re {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== ce && (!Nt(e) || e !== this.value) && (this.value = e, tt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; tt(this.value); ) {
      const e = this.value;
      this.value = ce, e(this);
    }
    this.value !== ce && this.committer.commit();
  }
}
class Ge {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(ke()), this.endNode = e.appendChild(ke());
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
    e.__insert(this.startNode = ke()), e.__insert(this.endNode = ke());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ke()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; tt(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = ce, t(this);
    }
    const e = this.__pendingValue;
    e !== ce && (Nt(e) ? e !== this.value && this.__commitText(e) : e instanceof Lr ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Zt(e) ? this.__commitIterable(e) : e === de ? (this.value = de, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Xt && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new Xt(t, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, n;
    for (const o of e)
      n = t[r], n === void 0 && (n = new Ge(this.options), t.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(o), n.commit(), r++;
    r < t.length && (t.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    bi(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class $r {
  constructor(e, t, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; tt(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = ce, t(this);
    }
    if (this.__pendingValue === ce)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = ce;
  }
}
class Bn extends Pr {
  constructor(e, t, r) {
    super(e, t, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
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
class It extends Re {
}
let Rr = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Rr = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class zr {
  constructor(e, t, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; tt(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = ce, o(this);
    }
    if (this.__pendingValue === ce)
      return;
    const e = this.__pendingValue, t = this.value, r = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Gn(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = ce;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Gn = (i) => i && (Rr ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
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
function qn(i) {
  let e = it.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, it.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const r = i.strings.join(be);
  return t = e.keyString.get(r), t === void 0 && (t = new Nr(i, i.getTemplateElement()), e.keyString.set(r, t)), e.stringsArray.set(i.strings, t), t;
}
const it = /* @__PURE__ */ new Map();
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
const Me = /* @__PURE__ */ new WeakMap(), Un = (i, e, t) => {
  let r = Me.get(e);
  r === void 0 && (bi(e, e.firstChild), Me.set(e, r = new Ge(Object.assign({ templateFactory: qn }, t))), r.appendInto(e)), r.setValue(i), r.commit();
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
class jn {
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
    const o = t[0];
    return o === "." ? new Bn(e, t.slice(1), r).parts : o === "@" ? [new zr(e, t.slice(1), n.eventContext)] : o === "?" ? [new $r(e, t.slice(1), r)] : new Pr(e, t, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Ge(e);
  }
}
const Wn = new jn();
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
const d = (i, ...e) => new Lr(i, e, "html", Wn);
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
const Or = (i, e) => `${i}--${e}`;
let wt = !0;
typeof window.ShadyCSS > "u" ? wt = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), wt = !1);
const Kn = (i) => (e) => {
  const t = Or(e.type, i);
  let r = it.get(t);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, it.set(t, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const o = e.strings.join(be);
  if (n = r.keyString.get(o), n === void 0) {
    const a = e.getTemplateElement();
    wt && window.ShadyCSS.prepareTemplateDom(a, i), n = new Nr(e, a), r.keyString.set(o, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, Xn = ["html", "svg"], Zn = (i) => {
  Xn.forEach((e) => {
    const t = it.get(Or(e, i));
    t !== void 0 && t.keyString.forEach((r) => {
      const { element: { content: n } } = r, o = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((a) => {
        o.add(a);
      }), Dr(r, o);
    });
  });
}, Vr = /* @__PURE__ */ new Set(), Jn = (i, e, t) => {
  Vr.add(i);
  const r = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: o } = n;
  if (o === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, i);
    return;
  }
  const a = document.createElement("style");
  for (let l = 0; l < o; l++) {
    const h = n[l];
    h.parentNode.removeChild(h), a.textContent += h.textContent;
  }
  Zn(i);
  const s = r.content;
  t ? Fn(t, a, s.firstChild) : s.insertBefore(a, s.firstChild), window.ShadyCSS.prepareTemplateStyles(r, i);
  const c = s.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (t) {
    s.insertBefore(a, s.firstChild);
    const l = /* @__PURE__ */ new Set();
    l.add(a), Dr(t, l);
  }
}, Qn = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = t.scopeName, n = Me.has(e), o = wt && e.nodeType === 11 && !!e.host, a = o && !Vr.has(r), s = a ? document.createDocumentFragment() : e;
  if (Un(i, s, Object.assign({ templateFactory: Kn(r) }, t)), a) {
    const c = Me.get(s);
    Me.delete(s);
    const l = c.value instanceof Xt ? c.value.template : void 0;
    Jn(r, s, l), bi(e, e.firstChild), e.appendChild(s), Me.set(e, c);
  }
  !n && o && window.ShadyCSS.styleElement(e.host);
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
var Mr;
window.JSCompiler_renameProperty = (i, e) => i;
const Jt = {
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
}, Fr = (i, e) => e !== i && (e === e || i === i), Ft = {
  attribute: !0,
  type: String,
  converter: Jt,
  reflect: !1,
  hasChanged: Fr
}, Ht = 1, Bi = 4, Gi = 8, qi = 16, Qt = "finalized";
class Hr extends HTMLElement {
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
  static createProperty(e, t = Ft) {
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
        const o = this[e];
        this[t] = n, this.requestUpdateInternal(e, o, r);
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
    return this._classProperties && this._classProperties.get(e) || Ft;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(Qt) || e.finalize(), this[Qt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, t, r = Fr) {
    return r(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const r = t.type, n = t.converter || Jt, o = typeof n == "function" ? n : n.fromAttribute;
    return o ? o(e, r) : e;
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
    return (n && n.toAttribute || Jt.toAttribute)(e, r);
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
  _propertyToAttribute(e, t, r = Ft) {
    const n = this.constructor, o = n._attributeNameForProperty(e, r);
    if (o !== void 0) {
      const a = n._propertyValueToAttribute(t, r);
      if (a === void 0)
        return;
      this._updateState = this._updateState | Gi, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & Gi)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const o = r.getPropertyOptions(n);
      this._updateState = this._updateState | qi, this[n] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(t, o), this._updateState = this._updateState & -17;
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
      const o = this.constructor;
      r = r || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), r.reflect === !0 && !(this._updateState & qi) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
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
    this._updateState = this._updateState | Bi;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Bi;
  }
  get hasUpdated() {
    return this._updateState & Ht;
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
    e && (this._updateState & Ht || (this._updateState = this._updateState | Ht, this.firstUpdated(t)), this.updated(t));
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
Mr = Qt;
Hr[Mr] = !0;
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
const Yn = (i, e) => (window.customElements.define(i, e), e), eo = (i, e) => {
  const { kind: t, elements: r } = e;
  return {
    kind: t,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(i, n);
    }
  };
}, O = (i) => (e) => typeof e == "function" ? Yn(i, e) : eo(i, e), to = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, io = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function m(i) {
  return (e, t) => t !== void 0 ? io(i, e, t) : to(i, e);
}
function ro(i) {
  return m({ attribute: !1, hasChanged: void 0 });
}
const N = (i) => ro();
function L(i, e) {
  return (t, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? vi(n, t, r) : Si(n, t);
  };
}
function yi(i) {
  return (e, t) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? vi(r, e, t) : Si(r, e);
  };
}
const vi = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, Si = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), no = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), oo = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function Br(i) {
  return (e, t) => t !== void 0 ? oo(i, e, t) : no(i, e);
}
const Ui = Element.prototype, ao = Ui.msMatchesSelector || Ui.webkitMatchesSelector;
function Gr(i = "", e = !1, t = "") {
  return (r, n) => {
    const o = {
      get() {
        const a = `slot${i ? `[name=${i}]` : ":not([name])"}`, s = this.renderRoot.querySelector(a);
        let c = s && s.assignedNodes({ flatten: e });
        return c && t && (c = c.filter((l) => l.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (l.matches ? l.matches(t) : ao.call(l, t)))), c;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? vi(o, r, n) : Si(o, r);
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
const Yt = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wi = Symbol();
class xi {
  constructor(e, t) {
    if (t !== wi)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Yt ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const qr = (i) => new xi(String(i), wi), so = (i) => {
  if (i instanceof xi)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, U = (i, ...e) => {
  const t = e.reduce((r, n, o) => r + so(n) + i[o + 1], i[0]);
  return new xi(t, wi);
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
const ji = {};
class ae extends Hr {
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
      const t = (o, a) => o.reduceRight((s, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? t(c, s) : (s.add(c), s)
      ), a), r = t(e, /* @__PURE__ */ new Set()), n = [];
      r.forEach((o) => n.unshift(o)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !Yt) {
        const r = Array.prototype.slice.call(t.cssRules).reduce((n, o) => n + o.cssText, "");
        return qr(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : Yt ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== ji && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return ji;
  }
}
ae.finalized = !0;
ae.render = Qn;
ae.shadowRootOptions = { mode: "open" };
const co = 1e3 * 60, ei = "langChanged";
function lo(i, e, t) {
  return Object.entries(ti(e || {})).reduce((r, [n, o]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ti(o))), i);
}
function uo(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function ti(i) {
  return typeof i == "function" ? i() : i;
}
const po = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: uo,
  interpolate: lo,
  translationCache: {}
});
let rt = po();
function mo(i) {
  return rt = Object.assign(Object.assign({}, rt), i);
}
function ho(i) {
  window.dispatchEvent(new CustomEvent(ei, { detail: i }));
}
function fo(i, e, t = rt) {
  ho({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function bo(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(ei, t, e), () => window.removeEventListener(ei, t);
}
async function go(i, e = rt) {
  const t = await e.loader(i, e);
  e.translationCache = {}, fo(i, t, e);
}
function u(i, e, t = rt) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? ti(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function Ur(i) {
  return i instanceof Ge ? i.startNode.isConnected : i instanceof Re ? i.committer.element.isConnected : i.element.isConnected;
}
function yo(i) {
  for (const [e] of i)
    Ur(e) || i.delete(e);
}
function vo(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function So(i, e) {
  setInterval(() => vo(() => yo(i)), e);
}
const jr = /* @__PURE__ */ new Map();
function wo() {
  bo((i) => {
    for (const [e, t] of jr)
      Ur(e) && xo(e, t, i);
  });
}
wo();
So(jr, co);
function xo(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
var ii = function(i, e) {
  return ii = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, ii(i, e);
};
function Wr(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ii(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Te.apply(this, arguments);
};
function f(i, e, t, r) {
  var n = arguments.length, o = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(i, e, t, r);
  else for (var s = i.length - 1; s >= 0; s--) (a = i[s]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function mt(i) {
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
function _o(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ko = (i) => i.nodeType === Node.ELEMENT_NODE;
function Ao(i) {
  return {
    addClass: (e) => {
      i.classList.add(e);
    },
    removeClass: (e) => {
      i.classList.remove(e);
    },
    hasClass: (e) => i.classList.contains(e)
  };
}
const Kr = () => {
}, Eo = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Kr, Eo);
document.removeEventListener("x", Kr);
const Xr = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Co = (i) => {
  const e = Xr();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const o = (a) => {
    n = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", o), t.dispatchEvent(r), document.body.removeEventListener("check-if-focused", o), n.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _i extends ae {
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
var ki = (
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
var No = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Io = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Wi = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Do(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, o = r + t.left, a = n + t.top, s, c;
  if (i.type === "touchstart") {
    var l = i;
    s = l.changedTouches[0].pageX - o, c = l.changedTouches[0].pageY - a;
  } else {
    var h = i;
    s = h.pageX - o, c = h.pageY - a;
  }
  return { x: s, y: c };
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
var Ki = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Xi = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ht = [], To = (
  /** @class */
  function(i) {
    Wr(e, i);
    function e(t) {
      var r = i.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
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
        return No;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Io;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Wi;
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
        var n = e.cssClasses, o = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(o), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(n), t.adapter.removeClass(o), t.removeCssVars();
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
          for (var o = mt(Ki), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (c) {
          r = { error: c };
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o);
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
          for (var o = mt(Xi), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (c) {
          r = { error: c };
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var n = mt(Ki), o = n.next(); !o.done; o = n.next()) {
          var a = o.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = mt(Xi), o = n.next(); !o.done; o = n.next()) {
          var a = o.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(o) {
        o.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[o], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var o = this.previousActivationEvent, a = o && t !== void 0 && o.type !== t.type;
          if (!a) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var s = t !== void 0 && ht.length > 0 && ht.some(function(c) {
              return r.adapter.containsEventTarget(c);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ht.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ht = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, o = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, c = a.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", p = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), g = b.startPoint, w = b.endPoint;
        h = g.x + "px, " + g.y + "px", p = w.x + "px, " + w.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(o, p), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, l);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, o;
      n ? o = Do(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, o = {
        x: o.x - this.initialSize / 2,
        y: o.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: o, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, o = n.hasDeactivationUXRun, a = n.isActivated, s = o || !a;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, Wi.FG_DEACTIVATION_MS));
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
        var n = Te({}, r);
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
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var o = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, n = t.VAR_LEFT, o = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, e;
  }(ki)
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
class Lo {
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
const Zi = /* @__PURE__ */ new WeakMap(), qe = nt((i) => (e) => {
  if (!(e instanceof Re) || e instanceof It || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = Zi.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), Zi.set(e, n = /* @__PURE__ */ new Set()));
  const o = r.classList || new Lo(r);
  n.forEach((a) => {
    a in i || (o.remove(a), n.delete(a));
  });
  for (const a in i) {
    const s = i[a];
    s != n.has(a) && (s ? (o.add(a), n.add(a)) : (o.remove(a), n.delete(a)));
  }
  typeof o.commit == "function" && o.commit();
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
const Ji = /* @__PURE__ */ new WeakMap(), Po = nt((i) => (e) => {
  if (!(e instanceof Re) || e instanceof It || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = Ji.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), Ji.set(e, n = /* @__PURE__ */ new Set())), n.forEach((o) => {
    o in i || (n.delete(o), o.indexOf("-") === -1 ? r[o] = null : r.removeProperty(o));
  });
  for (const o in i)
    n.add(o), o.indexOf("-") === -1 ? r[o] = i[o] : r.setProperty(o, i[o]);
});
class V extends _i {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = To;
  }
  get isActive() {
    return _o(this.parentElement || this, ":active");
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
    return d`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${qe(r)}"
          style="${Po({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
f([
  L(".mdc-ripple-surface")
], V.prototype, "mdcRoot", void 0);
f([
  m({ type: Boolean })
], V.prototype, "primary", void 0);
f([
  m({ type: Boolean })
], V.prototype, "accent", void 0);
f([
  m({ type: Boolean })
], V.prototype, "unbounded", void 0);
f([
  m({ type: Boolean })
], V.prototype, "disabled", void 0);
f([
  m({ type: Boolean })
], V.prototype, "activated", void 0);
f([
  m({ type: Boolean })
], V.prototype, "selected", void 0);
f([
  m({ type: Boolean })
], V.prototype, "internalUseStateLayerCustomProperties", void 0);
f([
  N()
], V.prototype, "hovering", void 0);
f([
  N()
], V.prototype, "bgFocused", void 0);
f([
  N()
], V.prototype, "fgActivation", void 0);
f([
  N()
], V.prototype, "fgDeactivation", void 0);
f([
  N()
], V.prototype, "fgScale", void 0);
f([
  N()
], V.prototype, "fgSize", void 0);
f([
  N()
], V.prototype, "translateStart", void 0);
f([
  N()
], V.prototype, "translateEnd", void 0);
f([
  N()
], V.prototype, "leftPos", void 0);
f([
  N()
], V.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $o = U`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ri = class extends V {
};
ri.styles = [$o];
ri = f([
  O("mwc-ripple")
], ri);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ro(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const s = `__${e}`;
    if (t = r.getPropertyDescriptor(e, s), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let o = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      o === "" && (o = r.getPropertyOptions(e).attribute), this.hasAttribute(o) && this.removeAttribute(o), n.set.call(this, s);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function ot(i, e, t) {
  if (e !== void 0)
    return Ro(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ai extends _i {
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
Ai.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const me = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, o) => e.constructor._observers.set(o, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((o, a) => {
          const c = this.constructor._observers.get(a);
          c !== void 0 && c.call(this, this[a], o);
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
const Qi = Symbol("selection controller");
class zo {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class Ei {
  constructor(e) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (t) => {
      this.keyDownHandler(t);
    }), e.addEventListener("mousedown", () => {
      this.mousedownHandler();
    }), e.addEventListener("mouseup", () => {
      this.mouseupHandler();
    });
  }
  /**
   * Get a controller for the given element. If no controller exists, one will
   * be created. Defaults to getting the controller scoped to the element's root
   * node shadow root unless `element.global` is true. Then, it will get a
   * `window.document`-scoped controller.
   *
   * @param element Element from which to get / create a SelectionController. If
   *     `element.global` is true, it gets a selection controller scoped to
   *     `window.document`.
   */
  static getController(e) {
    const r = !("global" in e) || "global" in e && e.global ? document : e.getRootNode();
    let n = r[Qi];
    return n === void 0 && (n = new Ei(r), r[Qi] = n), n;
  }
  keyDownHandler(e) {
    const t = e.target;
    "checked" in t && this.has(t) && (e.key == "ArrowRight" || e.key == "ArrowDown" ? this.selectNext(t) : (e.key == "ArrowLeft" || e.key == "ArrowUp") && this.selectPrevious(t));
  }
  mousedownHandler() {
    this.mouseIsDown = !0;
  }
  mouseupHandler() {
    this.mouseIsDown = !1;
  }
  /**
   * Whether or not the controller controls  the given element.
   *
   * @param element element to check
   */
  has(e) {
    return this.getSet(e.name).set.has(e);
  }
  /**
   * Selects and returns the controlled element previous to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which preceding element is fetched
   */
  selectPrevious(e) {
    const t = this.getOrdered(e), r = t.indexOf(e), n = t[r - 1] || t[t.length - 1];
    return this.select(n), n;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(e) {
    const t = this.getOrdered(e), r = t.indexOf(e), n = t[r + 1] || t[0];
    return this.select(n), n;
  }
  select(e) {
    e.click();
  }
  /**
   * Focuses the selected element in the given element's selection set. User's
   * mouse selection will override this focus.
   *
   * @param element Element from which selection set is derived and subsequently
   *     focused.
   * @deprecated update() method now handles focus management by setting
   *     appropriate tabindex to form element.
   */
  focus(e) {
    if (this.mouseIsDown)
      return;
    const t = this.getSet(e.name), r = this.focusedSet;
    this.focusedSet = t, r != t && t.selected && t.selected != e && t.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(e) {
    const t = this.getSet(e.name);
    for (const r of t.set)
      if (r.checked)
        return !0;
    return !1;
  }
  /**
   * Returns the elements in the given element's selection set in document
   * position order.
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element Element from which selection set is derived and subsequently
   *     ordered.
   */
  getOrdered(e) {
    const t = this.getSet(e.name);
    return t.ordered || (t.ordered = Array.from(t.set), t.ordered.sort((r, n) => r.compareDocumentPosition(n) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), t.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new zo()), this.sets[e];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(e) {
    const t = e.name || e.getAttribute("name") || "", r = this.getSet(t);
    r.set.add(e), r.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(e) {
    const t = this.getSet(e.name);
    t.set.delete(e), t.ordered = null, t.selected == e && (t.selected = null);
  }
  /**
   * Unselects other elements in element's set if element is checked. Noop
   * otherwise.
   *
   * @param element Element from which to calculate selection controller update.
   */
  update(e) {
    if (this.updating)
      return;
    this.updating = !0;
    const t = this.getSet(e.name);
    if (e.checked) {
      for (const r of t.set)
        r != e && (r.checked = !1);
      t.selected = e;
    }
    if (this.isAnySelected(e))
      for (const r of t.set) {
        if (r.formElementTabIndex === void 0)
          break;
        r.formElementTabIndex = r.checked ? 0 : -1;
      }
    this.updating = !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ci {
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
var Oo = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, Vo = {
  DISABLED: "mdc-radio--disabled",
  ROOT: "mdc-radio"
};
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
var Mo = (
  /** @class */
  function(i) {
    Wr(e, i);
    function e(t) {
      return i.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Oo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setDisabled = function(t) {
      var r = e.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(t), t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e;
  }(ki)
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
const Bt = /* @__PURE__ */ new WeakMap(), ie = nt((i) => (e) => {
  const t = Bt.get(e);
  if (i === void 0 && e instanceof Re) {
    if (t !== void 0 || !Bt.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  Bt.set(e, i);
});
class H extends Ai {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = Mo, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new Ci(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
      this.rippleElement = e;
    }), this.ripple));
  }
  get checked() {
    return this._checked;
  }
  /**
   * We define our own getter/setter for `checked` because we need to track
   * changes to it synchronously.
   *
   * The order in which the `checked` property is set across radio buttons
   * within the same group is very important. However, we can't rely on
   * UpdatingElement's `updated` callback to observe these changes (which is
   * also what the `@observer` decorator uses), because it batches changes to
   * all properties.
   *
   * Consider:
   *
   *   radio1.disabled = true;
   *   radio2.checked = true;
   *   radio1.checked = true;
   *
   * In this case we'd first see all changes for radio1, and then for radio2,
   * and we couldn't tell that radio1 was the most recently checked.
   */
  set checked(e) {
    var t, r;
    const n = this._checked;
    e !== n && (this._checked = e, this.formElement && (this.formElement.checked = e), (t = this._selectionController) === null || t === void 0 || t.update(this), e === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", n), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(e) {
    this.formElement.value = e;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = Ei.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Ao(this.mdcRoot)), { setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    } });
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleClick() {
    this.formElement.focus();
  }
  handleBlur() {
    this.focused = !1, this.formElement.blur(), this.rippleHandlers.endFocus();
  }
  /**
   * @soyTemplate
   * @soyAttributes radioAttributes: input
   * @soyClasses radioClasses: .mdc-radio
   */
  render() {
    const e = {
      "mdc-radio--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      "mdc-radio--disabled": this.disabled
    };
    return d`
      <div class="mdc-radio ${qe(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${ie(this.ariaLabel)}"
          aria-labelledby="${ie(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
f([
  L(".mdc-radio")
], H.prototype, "mdcRoot", void 0);
f([
  L("input")
], H.prototype, "formElement", void 0);
f([
  N()
], H.prototype, "useStateLayerCustomProperties", void 0);
f([
  m({ type: Boolean })
], H.prototype, "global", void 0);
f([
  m({ type: Boolean, reflect: !0 })
], H.prototype, "checked", null);
f([
  m({ type: Boolean }),
  me(function(i) {
    this.mdcFoundation.setDisabled(i);
  })
], H.prototype, "disabled", void 0);
f([
  m({ type: String }),
  me(function(i) {
    this._handleUpdatedValue(i);
  })
], H.prototype, "value", void 0);
f([
  m({ type: String })
], H.prototype, "name", void 0);
f([
  m({ type: Boolean })
], H.prototype, "reducedTouchTarget", void 0);
f([
  m({ type: Number })
], H.prototype, "formElementTabIndex", void 0);
f([
  N()
], H.prototype, "focused", void 0);
f([
  N()
], H.prototype, "shouldRenderRipple", void 0);
f([
  yi("mwc-ripple")
], H.prototype, "ripple", void 0);
f([
  ot,
  m({ attribute: "aria-label" })
], H.prototype, "ariaLabel", void 0);
f([
  ot,
  m({ attribute: "aria-labelledby" })
], H.prototype, "ariaLabelledBy", void 0);
f([
  Br({ passive: !0 })
], H.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fo = U`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let ni = class extends H {
};
ni.styles = [Fo];
ni = f([
  O("mwc-radio")
], ni);
var Ho = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, Ue = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Bo(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Ho(e, t, n), n;
};
let Ee = class extends ae {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return d`<span>
      <slot name="icon"
        >${this.icon ? d`<mwc-icon>${this.icon}</mwc-icon>` : de}</slot
      ></span
    > `;
  }
  render() {
    return d`<header>${this.label ?? de}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? de}</footer>`;
  }
};
Ee.styles = U`
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
Ue([
  m({ type: String })
], Ee.prototype, "label", 2);
Ue([
  m({ type: String })
], Ee.prototype, "icon", 2);
Ue([
  m({ type: Boolean })
], Ee.prototype, "secondary", 2);
Ue([
  m({ type: Boolean })
], Ee.prototype, "highlighted", 2);
Ue([
  m({ type: Boolean })
], Ee.prototype, "hideActions", 2);
Ee = Ue([
  O("action-icon")
], Ee);
function ue(i, e, t) {
  const r = i.createElementNS(i.documentElement.namespaceURI, e);
  return Object.entries(t).filter(([n, o]) => o !== null).forEach(([n, o]) => r.setAttribute(n, o)), r;
}
function Dt(i, e) {
  const t = i.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? t.removeAttribute(r) : t.setAttribute(r, n);
  }), t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class B extends ae {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ci(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : d``, r = this.hasMeta ? this.renderMeta() : d``;
    return d`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? d`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? d`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return d`
      <span class="mdc-deprecated-list-item__graphic material-icons ${qe(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return d`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return d`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return d`<slot></slot>`;
  }
  renderTwoline() {
    return d`
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
f([
  L("slot")
], B.prototype, "slotElement", void 0);
f([
  yi("mwc-ripple")
], B.prototype, "ripple", void 0);
f([
  m({ type: String })
], B.prototype, "value", void 0);
f([
  m({ type: String, reflect: !0 })
], B.prototype, "group", void 0);
f([
  m({ type: Number, reflect: !0 })
], B.prototype, "tabindex", void 0);
f([
  m({ type: Boolean, reflect: !0 }),
  me(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], B.prototype, "disabled", void 0);
f([
  m({ type: Boolean, reflect: !0 })
], B.prototype, "twoline", void 0);
f([
  m({ type: Boolean, reflect: !0 })
], B.prototype, "activated", void 0);
f([
  m({ type: String, reflect: !0 })
], B.prototype, "graphic", void 0);
f([
  m({ type: Boolean })
], B.prototype, "multipleGraphics", void 0);
f([
  m({ type: Boolean })
], B.prototype, "hasMeta", void 0);
f([
  m({ type: Boolean, reflect: !0 }),
  me(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], B.prototype, "noninteractive", void 0);
f([
  m({ type: Boolean, reflect: !0 }),
  me(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], B.prototype, "selected", void 0);
f([
  N()
], B.prototype, "shouldRenderRipple", void 0);
f([
  N()
], B.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Zr = U`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let oi = class extends B {
};
oi.styles = [Zr];
oi = f([
  O("mwc-list-item")
], oi);
var Go = Object.defineProperty, qo = Object.getOwnPropertyDescriptor, se = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? qo(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Go(e, t, n), n;
};
let W = class extends On {
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
    return this.multipliers.length && this.unit ? d`<div style="position:relative;">
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
      </div>` : d``;
  }
  renderMulplierList() {
    return d`${this.multipliers.map(
      (i) => d`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? u("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
se([
  m({ type: Boolean })
], W.prototype, "nullable", 2);
se([
  m({ type: Array })
], W.prototype, "multipliers", 2);
se([
  m({ type: String })
], W.prototype, "multiplier", 1);
se([
  m({ type: String })
], W.prototype, "unit", 2);
se([
  N()
], W.prototype, "null", 1);
se([
  m({ type: String })
], W.prototype, "maybeValue", 1);
se([
  m({ type: String })
], W.prototype, "defaultValue", 2);
se([
  m({ type: Array })
], W.prototype, "reservedValues", 2);
se([
  L("mwc-switch")
], W.prototype, "nullSwitch", 2);
se([
  L("mwc-menu")
], W.prototype, "multiplierMenu", 2);
se([
  L("mwc-icon-button")
], W.prototype, "multiplierButton", 2);
W = se([
  O("wizard-textfield")
], W);
var Uo = Object.defineProperty, jo = Object.getOwnPropertyDescriptor, ze = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? jo(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Uo(e, t, n), n;
};
let ge = class extends zn {
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ze([
  m({ type: Boolean })
], ge.prototype, "nullable", 2);
ze([
  N()
], ge.prototype, "null", 1);
ze([
  m({ type: String })
], ge.prototype, "maybeValue", 1);
ze([
  m({ type: String })
], ge.prototype, "defaultValue", 2);
ze([
  m({ type: Array })
], ge.prototype, "reservedValues", 2);
ze([
  L("mwc-switch")
], ge.prototype, "nullSwitch", 2);
ge = ze([
  O("wizard-select")
], ge);
class M extends Ai {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ci(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || r !== void 0 || n !== void 0) {
      const o = this.calculateAnimationStateName(!!r, !!t, !!n), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${o}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, r) {
    return r ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`<mwc-ripple
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
    return d`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${qe(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ie(this.name)}"
              aria-checked="${ie(r)}"
              aria-label="${ie(this.ariaLabel)}"
              aria-labelledby="${ie(this.ariaLabelledBy)}"
              aria-describedby="${ie(this.ariaDescribedBy)}"
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
f([
  L(".mdc-checkbox")
], M.prototype, "mdcRoot", void 0);
f([
  L("input")
], M.prototype, "formElement", void 0);
f([
  m({ type: Boolean, reflect: !0 })
], M.prototype, "checked", void 0);
f([
  m({ type: Boolean })
], M.prototype, "indeterminate", void 0);
f([
  m({ type: Boolean, reflect: !0 })
], M.prototype, "disabled", void 0);
f([
  m({ type: String, reflect: !0 })
], M.prototype, "name", void 0);
f([
  m({ type: String })
], M.prototype, "value", void 0);
f([
  ot,
  m({ type: String, attribute: "aria-label" })
], M.prototype, "ariaLabel", void 0);
f([
  ot,
  m({ type: String, attribute: "aria-labelledby" })
], M.prototype, "ariaLabelledBy", void 0);
f([
  ot,
  m({ type: String, attribute: "aria-describedby" })
], M.prototype, "ariaDescribedBy", void 0);
f([
  m({ type: Boolean })
], M.prototype, "reducedTouchTarget", void 0);
f([
  N()
], M.prototype, "animationClass", void 0);
f([
  N()
], M.prototype, "shouldRenderRipple", void 0);
f([
  N()
], M.prototype, "focused", void 0);
f([
  N()
], M.prototype, "useStateLayerCustomProperties", void 0);
f([
  yi("mwc-ripple")
], M.prototype, "ripple", void 0);
f([
  Br({ passive: !0 })
], M.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Wo = U`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let ai = class extends M {
};
ai.styles = [Wo];
ai = f([
  O("mwc-checkbox")
], ai);
var Ko = Object.defineProperty, Xo = Object.getOwnPropertyDescriptor, re = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Xo(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Ko(e, t, n), n;
};
let K = class extends ae {
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
re([
  m({ type: String })
], K.prototype, "label", 2);
re([
  m({ type: String })
], K.prototype, "helper", 2);
re([
  m({ type: Boolean })
], K.prototype, "nullable", 2);
re([
  m({ type: Boolean })
], K.prototype, "defaultChecked", 2);
re([
  m({ type: String })
], K.prototype, "maybeValue", 1);
re([
  m({ type: Boolean })
], K.prototype, "disabled", 2);
re([
  N()
], K.prototype, "null", 1);
re([
  N()
], K.prototype, "checked", 1);
re([
  N()
], K.prototype, "deactivateCheckbox", 2);
re([
  N()
], K.prototype, "formfieldLabel", 1);
re([
  L("mwc-switch")
], K.prototype, "nullSwitch", 2);
re([
  L("mwc-checkbox")
], K.prototype, "checkbox", 2);
K = re([
  O("wizard-checkbox")
], K);
function Zo(i) {
  return typeof i == "function";
}
function z(i) {
  return i instanceof W || i instanceof ge || i instanceof K ? i.maybeValue : i.value ?? null;
}
function Jo(i) {
  return i instanceof W ? i.multiplier : null;
}
function Q(i, e) {
  if (!i)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = Zo(i) ? i : () => i;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
function Be(i) {
  return Q(i, { detail: { subwizard: !0 } });
}
function Y(i) {
  const e = i.getAttribute("name");
  return e || void 0;
}
function Qo(i) {
  const e = i.getAttribute("desc");
  return e || void 0;
}
function Yi(i) {
  const e = i.getAttribute("inst");
  return e || void 0;
}
function j(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const $ = ":not(*)";
function Yo(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function ea(i, e) {
  const [t, r] = e.split("	");
  return !t || !r ? $ : `${i}[version="${t}"][revision="${r}"]`;
}
function er(i) {
  return I(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function tr(i, e) {
  const [t, r] = j(e), n = R[i].parents.flatMap(
    (o) => G(o, t).split(",")
  );
  return q(
    n,
    [">"],
    [`${i}[connectivityNode="${r}"]`]
  ).map((o) => o.join("")).join(",");
}
function ta(i) {
  const [e, t, r, n, o, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => i.getAttribute(s));
  return e === "None" ? `${I(i.parentElement)}>(${n} ${a} ${o})` : `${e} ${t || "(Client)"}/${r ?? ""} ${n} ${o ?? ""}`;
}
function ia(i, e) {
  if (e.endsWith(")")) {
    const [b, g] = j(e), [w, S, x] = g.substring(1, g.length - 1).split(" ");
    if (!w || !S) return $;
    const C = R[i].parents.flatMap(
      (T) => G(T, b).split(",")
    );
    return q(
      C,
      [">"],
      [`${i}[iedName="None"][lnClass="${w}"][lnType="${S}"][lnInst="${x}"]`]
    ).map((T) => T.join("")).join(",");
  }
  const [t, r, n, o, a] = e.split(/[ /]/);
  if (!t || !r || !o) return $;
  const [
    s,
    c,
    l,
    h,
    p
  ] = [
    [`[iedName="${t}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return q(
    [i],
    s,
    c,
    l,
    h,
    p
  ).map((b) => b.join("")).join(",");
}
function ra(i) {
  return `${I(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function na(i, e) {
  const [t, r] = j(e), [n, o] = r.split(" ");
  return `${G(
    "IED",
    t
  )}>${i}[iedName="${n}"][apName="${o}"]`;
}
function oa(i) {
  return `${I(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function aa(i, e) {
  const [t, r] = j(e);
  return r ? `${G(
    "Server",
    t
  )}>${i}[associationID="${r}"]` : $;
}
function sa(i) {
  return `${I(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function ca(i, e) {
  const [t, r] = e.split(">>");
  return r ? `IED[name="${t}"] ${i}[inst="${r}"]` : $;
}
function da(i) {
  const e = i.textContent, [t, r, n, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => i.getAttribute(s));
  return `${I(i.parentElement)}>${e} ${t || ""} ${r || ""}/${n ?? ""} ${o ?? ""} ${a ?? ""}`;
}
function la(i, e) {
  const [t, r] = j(e), [n, o, a, s, c, l] = r.split(/[ /]/), [
    h,
    p,
    b,
    g,
    w,
    S
  ] = [
    R[i].parents.flatMap(
      (x) => G(x, t).split(",")
    ),
    [`${n}`],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return q(
    h,
    [">"],
    [i],
    p,
    b,
    g,
    w,
    S
  ).map((x) => x.join("")).join(",");
}
function ua(i) {
  const [e, t, r, n, o, a, s, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => i.getAttribute(h)), l = `${e}/${t ?? ""} ${r} ${n ?? ""}.${o} ${a || ""}`;
  return `${I(i.parentElement)}>${l} (${s}${c ? " [" + c + "]" : ""})`;
}
function pa(i, e) {
  const [t, r] = j(e), [n, o, a, s] = r.split(/[ /.]/), c = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), l = c && c[1] ? c[1] : "", h = c && c[2] ? c[2] : "", p = r.match(/\(([A-Z]{2})/), b = r.match(/ \[([0-9]{1,2})\]/), g = p && p[1] ? p[1] : "", w = b && b[1] ? b[1] : "", [
    S,
    x,
    C,
    T,
    F,
    zt,
    Ot,
    Vt,
    Mt
  ] = [
    R[i].parents.flatMap(
      (We) => G(We, t).split(",")
    ),
    [`[ldInst="${n}"]`],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${l}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${g}"]`],
    w ? [`[ix="${w}"]`] : [":not([ix])", '[ix=""]']
  ];
  return q(
    S,
    [">"],
    [i],
    x,
    C,
    T,
    F,
    zt,
    Ot,
    Vt,
    Mt
  ).map((We) => We.join("")).join(",");
}
function ma(i) {
  if (!i.parentElement) return NaN;
  const e = I(i.parentElement), t = i.getAttribute("iedName"), r = i.getAttribute("intAddr"), n = Array.from(
    i.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(i);
  if (r) return `${e}>${r}[${n}]`;
  const [
    o,
    a,
    s,
    c,
    l,
    h,
    p,
    b,
    g,
    w,
    S,
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
  ].map((F) => i.getAttribute(F)), C = x ? `${p}:${x} ${b ?? ""}/${g ?? ""} ${w ?? ""} ${S ?? ""}` : "", T = `${t} ${o}/${a ?? ""} ${s} ${c ?? ""} ${l} ${h || ""}`;
  return `${e}>${C ? C + " " : ""}${T}${r ? `@${r}` : ""}`;
}
function ha(i, e) {
  const [t, r] = j(e), n = R[i].parents.flatMap(
    (Ke) => G(Ke, t).split(",")
  );
  if (r.endsWith("]")) {
    const [Ke] = r.split("["), $n = [`[intAddr="${Ke}"]`];
    return q(n, [">"], [i], $n).map((Rn) => Rn.join("")).join(",");
  }
  let o, a, s, c, l, h, p, b, g, w, S, x, C, T;
  !r.includes(":") && !r.includes("@") ? [o, a, s, c, l, h, p] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    b,
    g,
    w,
    S,
    x,
    C,
    o,
    a,
    s,
    c,
    l,
    h,
    p
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [o, a, s, c, l, h, p, T] = r.split(/[ /@]/) : [
    b,
    g,
    w,
    S,
    x,
    C,
    o,
    a,
    s,
    c,
    l,
    h,
    p,
    T
  ] = r.split(/[ /:@]/);
  const [
    F,
    zt,
    Ot,
    Vt,
    Mt,
    We,
    En,
    Cn,
    Nn,
    In,
    Dn,
    Tn,
    Ln,
    Pn
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    g ? [`[srcCBName="${g}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    w ? [`[srcLDInst="${w}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    S ? [`[srcPrefix="${S}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    x ? [`[srcLNClass="${x}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    C ? [`[srcLNInst="${C}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    T ? [`[intAddr="${T}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return q(
    n,
    [">"],
    [i],
    F,
    zt,
    Ot,
    Vt,
    Mt,
    We,
    En,
    Cn,
    Nn,
    In,
    Dn,
    Tn,
    Ln,
    Pn
  ).map((Ke) => Ke.join("")).join(",");
}
function fa(i) {
  const [e, t, r] = ["prefix", "lnClass", "inst"].map(
    (n) => i.getAttribute(n)
  );
  return `${I(i.parentElement)}>${e ?? ""} ${t} ${r}`;
}
function ba(i, e) {
  const [t, r] = j(e), n = R[i].parents.flatMap(
    (p) => G(p, t).split(",")
  ), [o, a, s] = r.split(" ");
  if (!a) return $;
  const [c, l, h] = [
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${s}"]`]
  ];
  return q(
    n,
    [">"],
    [i],
    c,
    l,
    h
  ).map((p) => p.join("")).join(",");
}
function ga(i) {
  const [e, t, r, n, o, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => i.getAttribute(s));
  return `${I(i.parentElement)}>${t} ${e || ""} ${r}/${n ?? ""} ${o} ${a}`;
}
function ya(i, e) {
  const [t, r] = j(e), n = R[i].parents.flatMap(
    (C) => G(C, t).split(",")
  ), [o, a, s, c, l, h] = r.split(/[ /]/), [
    p,
    b,
    g,
    w,
    S,
    x
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return q(
    n,
    [">"],
    [i],
    p,
    b,
    g,
    w,
    S,
    x
  ).map((C) => C.join("")).join(",");
}
function ir(i) {
  const [e, t] = ["name", "ix"].map((r) => i.getAttribute(r));
  return `${I(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function si(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = j(e), [o, a, s, c] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return $;
  if (t === 0) return `${i}[name="${a}"]`;
  const l = R[i].parents.flatMap(
    (b) => b === "SDI" ? si(b, r, t - 1).split(",") : G(b, r).split(",")
  ).filter((b) => !b.startsWith($));
  if (l.length === 0) return $;
  const [h, p] = [
    [`[name="${a}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return q(
    l,
    [">"],
    [i],
    h,
    p
  ).map((b) => b.join("")).join(",");
}
function va(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(i));
  return `${I(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function Sa(i, e) {
  const [t, r] = j(e), [n, o] = r.split(" "), a = parseFloat(o), s = R[i].parents.flatMap(
    (h) => G(h, t).split(",")
  ), [c, l] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return q(
    s,
    [">"],
    [i],
    c,
    l
  ).map((h) => h.join("")).join(",");
}
function wa(i) {
  const [e, t] = ["iedName", "apName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function xa(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? $ : `${i}[iedName="${t}"][apName="${r}"]`;
}
function rr(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function nr(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? $ : `${i}[ldInst="${t}"][cbName="${r}"]`;
}
function _a(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${I(i.parentElement)}>${e}`;
}
function ka(i, e) {
  const [t, r] = j(e), [n, o] = [
    R[i].parents.flatMap(
      (a) => G(a, t).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return q(n, [">"], [i], o).map((a) => a.join("")).join(",");
}
function Aa(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${I(i.parentElement)}>${t}`;
  const r = Array.from(i.parentElement.children).filter((n) => n.getAttribute("type") === t).findIndex((n) => n.isSameNode(i));
  return `${I(i.parentElement)}>${t} [${r}]`;
}
function Ea(i, e) {
  const [t, r] = j(e), [n] = r.split(" "), o = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, s, c] = [
    R[i].parents.flatMap(
      (l) => G(l, t).split(",")
    ),
    [`[type="${n}"]`],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return q(
    a,
    [">"],
    [i],
    s,
    c
  ).map((l) => l.join("")).join(",");
}
function Ca(i) {
  return `${I(i.parentElement)}>${i.getAttribute("ord")}`;
}
function Na(i, e) {
  const [t, r] = j(e);
  return `${G("EnumType", t)}>${i}[ord="${r}"]`;
}
function Ia(i) {
  return `${I(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function Da(i, e) {
  const [t, r] = j(e), [n, o] = r.split("	"), [a] = [
    R[i].parents.flatMap(
      (s) => G(s, t).split(",")
    )
  ];
  return q(
    a,
    [">"],
    [i],
    [`[type="${n}"]`],
    [">"],
    [o]
  ).map((s) => s.join("")).join(",");
}
function Ta() {
  return "";
}
function La() {
  return ":root";
}
function E(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${I(i.parentElement)}>${i.getAttribute("name")}`;
}
function A(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = j(e);
  if (!n) return $;
  if (t === 0) return `${i}[name="${n}"]`;
  const o = R[i].parents;
  if (!o) return $;
  const a = o.flatMap(
    (s) => R[s].selector === R.Substation.selector ? A(s, r, t - 1).split(",") : G(s, r).split(",")
  ).filter((s) => !s.startsWith($));
  return a.length === 0 ? $ : q(a, [">"], [i], [`[name="${n}"]`]).map((s) => s.join("")).join(",");
}
function y(i) {
  return I(i.parentElement).toString();
}
function v(i, e) {
  const t = R[i].parents;
  if (!t) return $;
  const r = t.flatMap((n) => G(n, e).split(",")).filter((n) => !n.startsWith($));
  return r.length === 0 ? $ : q(r, [">"], [i]).map((n) => n.join("")).join(",");
}
function ft(i) {
  return `#${i.id}`;
}
function bt(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : $;
}
const Jr = [
  "TransformerWinding",
  "ConductingEquipment"
], Qr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Jr
], ci = ["Substation", "VoltageLevel", "Bay"], Yr = ["Process", "Line"], en = ["EqSubFunction", "EqFunction"], Pa = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Qr,
  ...ci,
  ...Yr,
  ...en
], tn = ["ConnectivityNode", ...Pa], $a = ["GOOSESecurity", "SMVSecurity"], Ra = ["SubNetwork", ...$a, ...tn], za = ["BDA", "DA"], Oa = ["SampledValueControl", "GSEControl"], Va = ["LogControl", "ReportControl"], Ma = [...Oa, ...Va], Fa = ["GSE", "SMV"], Ha = [
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
  ...Ma,
  ...Fa,
  ...za
], De = ["LN0", "LN"], Ba = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ga = ["Subject", "IssuerName"], qa = ["MinTime", "MaxTime"], Ua = ["LNodeType", "DOType", "DAType", "EnumType"], ja = [
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
], Wa = ["DynDataSet", "ConfDataSet"], Ka = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Wa
], Xa = ["ConfLogControl", "ConfSigRef"], Za = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Ja = ["SCL", ...Ra, ...Ha, ...Ua], rn = [
  ...Ja,
  ...Ba,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ga,
  ...qa,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...De,
  ...ja,
  "DynAssociation",
  "SettingGroups",
  ...Ka,
  ...Xa,
  ...Za,
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
], Qa = new Set(rn);
function Ni(i) {
  return Qa.has(i);
}
const Tt = ["Text", "Private"], _e = [...Tt], P = [...Tt], gt = [...Tt], or = [...P, "Val"], nn = [..._e, "LNode"], Ae = [...nn], di = [...Ae], Gt = [
  ...Ae,
  "PowerTransformer",
  "GeneralEquipment"
], ar = [
  ...di,
  "Terminal"
], sr = [...P, "Address"], on = [..._e], cr = [...on, "IEDName"], dr = [
  ...P,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], lr = [
  ...Ae,
  "GeneralEquipment",
  "Function"
], ur = [...on, "TrgOps"], pr = [
  ...Ae,
  "GeneralEquipment",
  "EqSubFunction"
], R = {
  AccessControl: {
    identity: y,
    selector: v,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: E,
    selector: A,
    parents: ["IED"],
    children: [
      ..._e,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: y,
    selector: v,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: oa,
    selector: aa,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: y,
    selector: v,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: E,
    selector: A,
    parents: ["DAType"],
    children: [...or]
  },
  BitRate: {
    identity: y,
    selector: v,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: E,
    selector: A,
    parents: ["VoltageLevel"],
    children: [
      ...Gt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: ga,
    selector: ya,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: y,
    selector: v,
    parents: ["SCL"],
    children: [...P, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: E,
    selector: A,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ar,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: y,
    selector: v,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: wa,
    selector: xa,
    parents: ["SubNetwork"],
    children: [...P, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: E,
    selector: A,
    parents: ["Bay", "Line"],
    children: [...nn]
  },
  DA: {
    identity: E,
    selector: A,
    parents: ["DOType"],
    children: [...or]
  },
  DAI: {
    identity: ir,
    selector: si,
    parents: ["DOI", "SDI"],
    children: [...P, "Val"]
  },
  DAType: {
    identity: ft,
    selector: bt,
    parents: ["DataTypeTemplates"],
    children: [...gt, "BDA", "ProtNs"]
  },
  DO: {
    identity: E,
    selector: A,
    parents: ["LNodeType"],
    children: [...P]
  },
  DOI: {
    identity: E,
    selector: A,
    parents: [...De],
    children: [...P, "SDI", "DAI"]
  },
  DOType: {
    identity: ft,
    selector: bt,
    parents: ["DataTypeTemplates"],
    children: [...gt, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: E,
    selector: A,
    parents: [...De],
    children: [..._e, "FCDA"]
  },
  DataSetDirectory: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: y,
    selector: v,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: ft,
    selector: bt,
    parents: ["DataTypeTemplates"],
    children: [...gt, "EnumVal"]
  },
  EnumVal: {
    identity: Ca,
    selector: Na,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: E,
    selector: A,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...pr]
  },
  EqSubFunction: {
    identity: E,
    selector: A,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...pr]
  },
  ExtRef: {
    identity: ma,
    selector: ha,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: ua,
    selector: pa,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: E,
    selector: A,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ae,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: E,
    selector: A,
    parents: [
      "SubFunction",
      "Function",
      ...Yr,
      ...en,
      ...ci
    ],
    children: [...di, "EqFunction"]
  },
  GetCBValues: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: E,
    selector: A,
    parents: ["AccessPoint"],
    children: [..._e, "Subject", "IssuerName"]
  },
  GSE: {
    identity: rr,
    selector: nr,
    parents: ["ConnectedAP"],
    children: [...sr, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: E,
    selector: A,
    parents: ["LN0"],
    children: [...cr, "Protocol"]
  },
  GSESettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: y,
    selector: v,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: y,
    selector: v,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Yo,
    selector: ea,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: E,
    selector: A,
    parents: ["SCL"],
    children: [...P, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: da,
    selector: la,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: y,
    selector: v,
    parents: [...De],
    children: [...P, "ExtRef"]
  },
  IssuerName: {
    identity: y,
    selector: v,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: ra,
    selector: na,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: sa,
    selector: ca,
    parents: ["Server"],
    children: [...P, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: fa,
    selector: ba,
    parents: ["AccessPoint", "LDevice"],
    children: [...dr]
  },
  LN0: {
    identity: y,
    selector: v,
    parents: ["LDevice"],
    children: [
      ...dr,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: ta,
    selector: ia,
    parents: [...tn],
    children: [...P]
  },
  LNodeType: {
    identity: ft,
    selector: bt,
    parents: ["DataTypeTemplates"],
    children: [...gt, "DO"]
  },
  Line: {
    identity: E,
    selector: A,
    parents: ["Process", "SCL"],
    children: [
      ...lr,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: E,
    selector: A,
    parents: [...De],
    children: [...P]
  },
  LogControl: {
    identity: E,
    selector: A,
    parents: [...De],
    children: [...ur]
  },
  LogSettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: y,
    selector: v,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: y,
    selector: v,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: y,
    selector: v,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: er,
    selector: tr,
    parents: ["TransformerWinding"],
    children: [...P]
  },
  OptFields: {
    identity: y,
    selector: v,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Aa,
    selector: Ea,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: _a,
    selector: ka,
    parents: ["ConnectedAP"],
    children: [...P, "P"]
  },
  PowerTransformer: {
    identity: E,
    selector: A,
    parents: [...ci],
    children: [
      ...di,
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
    selector: A,
    parents: ["Process", "SCL"],
    children: [
      ...lr,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Ia,
    selector: Da,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: y,
    selector: v,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: E,
    selector: A,
    parents: [...De],
    children: [...ur, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: y,
    selector: v,
    parents: ["ReportControl"],
    children: [...P, "ClientLN"]
  },
  SamplesPerSec: {
    identity: y,
    selector: v,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: E,
    selector: A,
    parents: ["LN0"],
    children: [...cr, "SmvOpts"]
  },
  SecPerSamples: {
    identity: y,
    selector: v,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Ta,
    selector: La,
    parents: [],
    children: [
      ...Tt,
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
    identity: ir,
    selector: si,
    parents: ["DOI", "SDI"],
    children: [...P, "SDI", "DAI"]
  },
  SDO: {
    identity: E,
    selector: A,
    parents: ["DOType"],
    children: [..._e]
  },
  Server: {
    identity: y,
    selector: v,
    parents: ["AccessPoint"],
    children: [
      ...P,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: y,
    selector: v,
    parents: ["AccessPoint"],
    children: [...P]
  },
  Services: {
    identity: y,
    selector: v,
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
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: y,
    selector: v,
    parents: ["LN0"],
    children: [...P]
  },
  SettingGroups: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: y,
    selector: v,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: y,
    selector: v,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: rr,
    selector: nr,
    parents: ["ConnectedAP"],
    children: [...sr]
  },
  SmvOpts: {
    identity: y,
    selector: v,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: E,
    selector: A,
    parents: ["AccessPoint"],
    children: [..._e, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: E,
    selector: A,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Jr
    ],
    children: [...Ae, "EqFunction"]
  },
  SubFunction: {
    identity: E,
    selector: A,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ae,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: E,
    selector: A,
    parents: ["Communication"],
    children: [..._e, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: y,
    selector: v,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: E,
    selector: A,
    parents: ["SCL"],
    children: [...Gt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: E,
    selector: A,
    parents: ["TransformerWinding"],
    children: [...Ae, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: er,
    selector: tr,
    parents: [...Qr],
    children: [...P]
  },
  Text: {
    identity: y,
    selector: v,
    parents: rn.filter((i) => i !== "Text" && i !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: y,
    selector: v,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: E,
    selector: A,
    parents: ["PowerTransformer"],
    children: [
      ...ar,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: y,
    selector: v,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: va,
    selector: Sa,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: y,
    selector: v,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: E,
    selector: A,
    parents: ["Substation"],
    children: [...Gt, "Voltage", "Bay", "Function"]
  }
};
function G(i, e) {
  return typeof e != "string" ? $ : Ni(i) ? R[i].selector(i, e) : i;
}
function an(i, e, t) {
  if (typeof t != "string" || !Ni(e)) return null;
  const r = i.querySelector(R[e].selector(e, t));
  return r === null || _t(r) ? r : Array.from(
    i.querySelectorAll(R[e].selector(e, t))
  ).find(_t) ?? null;
}
function I(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return Ni(e) ? R[e].identity(i) : NaN;
}
const xt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function Le(i, e) {
  return typeof i == "string" && typeof e == "string" ? i.localeCompare(e) : typeof i == "object" && typeof e == "string" ? (i.getAttribute("name") ?? "").localeCompare(e) : typeof i == "string" && typeof e == "object" ? i.localeCompare(e.getAttribute("name")) : typeof i == "object" && typeof e == "object" ? (i.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function q(...i) {
  return i.reduce(
    (e, t) => e.flatMap((r) => t.map((n) => [r, n].flat())),
    [[]]
  );
}
function sn(i, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(i)) return 1 / 0;
  switch (i?.constructor) {
    case Object:
    case Array:
      return e.add(i), 1 + Math.max(
        -1,
        ...Object.values(i).map((t) => sn(t, e))
      );
    default:
      return 0;
  }
}
function _t(i) {
  return !i.closest("Private");
}
const Ya = 99;
Array(Ya).fill(1).map((i, e) => `${e + 1}`);
function at(i, e = "user", t) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { action: i, initiator: e, ...t?.detail }
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class st extends B {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, n = this.hasMeta && this.left ? this.renderMeta() : d``, o = this.renderRipple();
    return d`
      ${o}
      ${r}
      ${this.left ? "" : t}
      <span class=${qe(e)}>
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
f([
  L("slot")
], st.prototype, "slotElement", void 0);
f([
  L("mwc-checkbox")
], st.prototype, "checkboxElement", void 0);
f([
  m({ type: Boolean })
], st.prototype, "left", void 0);
f([
  m({ type: String, reflect: !0 })
], st.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const es = U`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let He = class extends st {
};
He.styles = [Zr, es];
He = f([
  O("mwc-check-list-item")
], He);
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
var k = {
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
}, X = /* @__PURE__ */ new Set();
X.add(k.BACKSPACE);
X.add(k.ENTER);
X.add(k.SPACEBAR);
X.add(k.PAGE_UP);
X.add(k.PAGE_DOWN);
X.add(k.END);
X.add(k.HOME);
X.add(k.ARROW_LEFT);
X.add(k.ARROW_UP);
X.add(k.ARROW_RIGHT);
X.add(k.ARROW_DOWN);
X.add(k.DELETE);
X.add(k.ESCAPE);
X.add(k.TAB);
var te = {
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
}, Z = /* @__PURE__ */ new Map();
Z.set(te.BACKSPACE, k.BACKSPACE);
Z.set(te.ENTER, k.ENTER);
Z.set(te.SPACEBAR, k.SPACEBAR);
Z.set(te.PAGE_UP, k.PAGE_UP);
Z.set(te.PAGE_DOWN, k.PAGE_DOWN);
Z.set(te.END, k.END);
Z.set(te.HOME, k.HOME);
Z.set(te.ARROW_LEFT, k.ARROW_LEFT);
Z.set(te.ARROW_UP, k.ARROW_UP);
Z.set(te.ARROW_RIGHT, k.ARROW_RIGHT);
Z.set(te.ARROW_DOWN, k.ARROW_DOWN);
Z.set(te.DELETE, k.DELETE);
Z.set(te.ESCAPE, k.ESCAPE);
Z.set(te.TAB, k.TAB);
var Ne = /* @__PURE__ */ new Set();
Ne.add(k.PAGE_UP);
Ne.add(k.PAGE_DOWN);
Ne.add(k.END);
Ne.add(k.HOME);
Ne.add(k.ARROW_LEFT);
Ne.add(k.ARROW_UP);
Ne.add(k.ARROW_RIGHT);
Ne.add(k.ARROW_DOWN);
function Se(i) {
  var e = i.key;
  if (X.has(e))
    return e;
  var t = Z.get(i.keyCode);
  return t || k.UNKNOWN;
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
var we, he, D = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
we = {}, we["" + D.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", we["" + D.LIST_ITEM_CLASS] = "mdc-list-item", we["" + D.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", we["" + D.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", we["" + D.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", we["" + D.ROOT] = "mdc-list";
var Ve = (he = {}, he["" + D.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", he["" + D.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", he["" + D.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", he["" + D.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", he["" + D.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", he["" + D.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", he["" + D.ROOT] = "mdc-deprecated-list", he), yt = {
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
    .` + D.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + D.LIST_ITEM_CLASS + ` a,
    .` + Ve[D.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ve[D.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + D.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + D.LIST_ITEM_CLASS + ` a,
    .` + D.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + D.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ve[D.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ve[D.LIST_ITEM_CLASS] + ` a,
    .` + Ve[D.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ve[D.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, J = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const li = (i, e) => i - e, ts = (i, e) => {
  const t = Array.from(i), r = Array.from(e), n = { added: [], removed: [] }, o = t.sort(li), a = r.sort(li);
  let s = 0, c = 0;
  for (; s < o.length || c < a.length; ) {
    const l = o[s], h = a[c];
    if (l === h) {
      s++, c++;
      continue;
    }
    if (l !== void 0 && (h === void 0 || l < h)) {
      n.removed.push(l), s++;
      continue;
    }
    if (h !== void 0 && (l === void 0 || h < l)) {
      n.added.push(h), c++;
      continue;
    }
  }
  return n;
}, is = ["input", "button", "textarea", "select"];
function et(i) {
  return i instanceof Set;
}
const qt = (i) => {
  const e = i === J.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return et(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Ii extends ki {
  constructor(e) {
    super(Object.assign(Object.assign({}, Ii.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = J.UNSET_INDEX, this.focusedItemIndex_ = J.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return yt;
  }
  static get numbers() {
    return J;
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
      if (!et(t)) {
        const r = t === J.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (et(t))
      if (t.size) {
        const r = Array.from(t).sort(li);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = J.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(qt(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = Se(e) === "ArrowLeft", o = Se(e) === "ArrowUp", a = Se(e) === "ArrowRight", s = Se(e) === "ArrowDown", c = Se(e) === "Home", l = Se(e) === "End", h = Se(e) === "Enter", p = Se(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || l ? (e.preventDefault(), this.focusLastElement()) : (s || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = r, b < 0))
      return;
    let g;
    if (this.isVertical_ && s || !this.isVertical_ && a)
      this.preventDefaultEvent(e), g = this.focusNextElement(b);
    else if (this.isVertical_ && o || !this.isVertical_ && n)
      this.preventDefaultEvent(e), g = this.focusPrevElement(b);
    else if (c)
      this.preventDefaultEvent(e), g = this.focusFirstElement();
    else if (l)
      this.preventDefaultEvent(e), g = this.focusLastElement();
    else if ((h || p) && t) {
      const w = e.target;
      if (w && w.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, g !== void 0 && (this.setTabindexAtIndex_(g), this.focusedItemIndex_ = g);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, r) {
    e !== J.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    is.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== J.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const r = qt(this.selectedIndex_), n = ts(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const o of n.removed)
        t && this.adapter.setSelectedStateForElementIndex(o, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !1);
      for (const o of n.added)
        t && this.adapter.setSelectedStateForElementIndex(o, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === J.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, yt.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, r = t ? yt.ARIA_CURRENT : yt.ARIA_SELECTED;
    this.selectedIndex_ !== J.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === J.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== J.UNSET_INDEX ? e = this.selectedIndex_ : et(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === J.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, t) : t || r ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(J.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, r = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const o = qt(this.selectedIndex_);
    n ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, r);
  }
}
function rs(i, e = 50) {
  let t;
  return function(r = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(r);
    }, e);
  };
}
const vt = (i) => i.hasAttribute("mwc-list-item");
function ns() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class ne extends _i {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Ii, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = rs(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      ns.call(this), e(t);
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
    for (const a of t)
      vt(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, s) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && n.add(s);
    }), this.multi)
      this.select(n);
    else {
      const a = n.size ? n.entries().next().value[1] : -1;
      this.select(a);
    }
    const o = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(o);
  }
  get selected() {
    const e = this.index;
    if (!et(e))
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
    return d`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${ie(e)}"
          aria-label="${ie(t)}"
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
    return this.emptyMessage !== void 0 && t.length === 0 ? d`
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
      const t = this.getIndexOfTarget(e), r = e.target, n = vt(r);
      this.mdcFoundation.handleKeydown(e, n, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const n = e.detail.selected, o = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, o === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, r = e.composedPath();
    for (const n of r) {
      let o = -1;
      if (ko(n) && vt(n) && (o = t.indexOf(n)), o !== -1)
        return o;
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
      isFocusInsideList: () => Co(this),
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
    const e = Xr();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t];
      if (vt(r))
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
f([
  m({ type: String })
], ne.prototype, "emptyMessage", void 0);
f([
  L(".mdc-deprecated-list")
], ne.prototype, "mdcRoot", void 0);
f([
  Gr("", !0, "*")
], ne.prototype, "assignedElements", void 0);
f([
  Gr("", !0, '[tabindex="0"]')
], ne.prototype, "tabbableElements", void 0);
f([
  m({ type: Boolean }),
  me(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], ne.prototype, "activatable", void 0);
f([
  m({ type: Boolean }),
  me(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], ne.prototype, "multi", void 0);
f([
  m({ type: Boolean }),
  me(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], ne.prototype, "wrapFocus", void 0);
f([
  m({ type: String }),
  me(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], ne.prototype, "itemRoles", void 0);
f([
  m({ type: String })
], ne.prototype, "innerRole", void 0);
f([
  m({ type: String })
], ne.prototype, "innerAriaLabel", void 0);
f([
  m({ type: Boolean })
], ne.prototype, "rootTabbable", void 0);
f([
  m({ type: Boolean, reflect: !0 }),
  me(function(i) {
    var e, t;
    if (i) {
      const r = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], ne.prototype, "noninteractive", void 0);
var os = Object.defineProperty, as = Object.getOwnPropertyDescriptor, Oe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? as(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && os(e, t, n), n;
};
function ui(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof pe ? i : ui(i.parentElement);
}
function ss(i, e) {
  const t = i.innerText + `
`, r = Array.from(i.children).map((s) => s.innerText).join(`
`), n = i.value, o = (t + r + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(o)) ? ui(i).classList.remove("hidden") : ui(i).classList.add("hidden");
}
let pe = class extends ne {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof He);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof He).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof He).some((i) => i.selected);
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
      (i) => ss(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? d`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : d``;
  }
  render() {
    return d`<div id="tfcontainer">
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
pe.styles = U`
    ${qr(Vn.styles)}

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
Oe([
  m({ type: String })
], pe.prototype, "searchFieldLabel", 2);
Oe([
  m({ type: Boolean })
], pe.prototype, "disableCheckAll", 2);
Oe([
  N()
], pe.prototype, "existCheckListItem", 1);
Oe([
  N()
], pe.prototype, "isAllSelected", 1);
Oe([
  N()
], pe.prototype, "isSomeSelected", 1);
Oe([
  L("mwc-textfield")
], pe.prototype, "searchField", 2);
pe = Oe([
  O("filtered-list")
], pe);
const cs = [
  "IP",
  "IP-SUBNET",
  "W-FACTOR",
  "K-FACTOR",
  "TIMEOUT-0",
  "TIMEOUT-1",
  "TIMEOUT-2",
  "TIMEOUT-3"
], Lt = [
  "W-FACTOR",
  "K-FACTOR",
  "TIMEOUT-0",
  "TIMEOUT-1",
  "TIMEOUT-2",
  "TIMEOUT-3"
], Pt = ["IP", "IP-SUBNET"], xe = {
  IP: "([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])",
  factor: "[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|[1-3][0-2][0-7][0-6][0-7]",
  timeout: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
}, cn = {
  IP: xe.IP,
  "IP-SUBNET": xe.IP,
  "W-FACTOR": xe.factor,
  "K-FACTOR": xe.factor,
  "TIMEOUT-0": xe.timeout,
  "TIMEOUT-1": xe.timeout,
  "TIMEOUT-2": xe.timeout,
  "TIMEOUT-3": xe.timeout
}, ds = [
  "controlling-station",
  "controlled-station"
], dn = {
  StationType: "protocol104.network.connectedAp.wizard.stationTypeHelper",
  IP: "protocol104.network.connectedAp.wizard.ipHelper",
  "IP-SUBNET": "protocol104.network.connectedAp.wizard.ipSubnetHelper",
  "W-FACTOR": "protocol104.network.connectedAp.wizard.wFactorHelper",
  "K-FACTOR": "protocol104.network.connectedAp.wizard.kFactorHelper",
  "TIMEOUT-0": "protocol104.network.connectedAp.wizard.timeout0Helper",
  "TIMEOUT-1": "protocol104.network.connectedAp.wizard.timeout1Helper",
  "TIMEOUT-2": "protocol104.network.connectedAp.wizard.timeout2Helper",
  "TIMEOUT-3": "protocol104.network.connectedAp.wizard.timeout3Helper"
}, ls = {
  "OSI-TSEL": 8,
  "OSI-SSEL": 16,
  "OSI-PSEL": 16,
  "OSI-AP-Invoke": 5,
  "OSI-AE-Qualifier": 5,
  "OSI-AE-Invoke": 5,
  "OSI-NSAP": 40,
  "IP-ClassOfTraffic": 2
};
function oe(i, e) {
  let t = i;
  const r = [];
  do {
    let n;
    switch (t.tagName) {
      case "LN":
      case "LN0": {
        const o = t.getAttribute("prefix"), a = Yi(t);
        n = `${o ? o + "-" : ""}${t.getAttribute(
          "lnClass"
        )}${a ? "-" + a : ""}`;
        break;
      }
      case "LDevice": {
        n = Y(t) ?? Yi(t);
        break;
      }
      default:
        n = Y(t);
    }
    n && r.unshift(n), t = t.parentElement;
  } while (t && t.tagName != e);
  return r.join(" / ");
}
function $t(i) {
  const e = i.closest("LN0, LN");
  if (e) {
    const t = e.getAttribute("lnType"), r = i.getAttribute("name"), n = i.ownerDocument.querySelector(
      `:root > DataTypeTemplates > LNodeType[id="${t}"] > DO[name="${r}"]`
    );
    if (n)
      return ct(n);
  }
  return null;
}
function ct(i) {
  const e = ee(i), t = i.ownerDocument.querySelector(
    `:root > DataTypeTemplates > DOType[id="${e}"]`
  );
  return t ? t.getAttribute("cdc") : null;
}
const us = [
  "casdu",
  "ioa",
  "ti",
  "expectedValue",
  "unitMultiplier",
  "scaleMultiplier",
  "scaleOffset",
  "inverted",
  "check"
];
function ps(i, e) {
  return us.filter((t) => e.hasAttribute(t)).map((t) => {
    const r = e.getAttribute(t);
    if (t === "expectedValue") {
      const n = ln(i, r);
      return `${t}: ${r}${n ? ` (${n})` : ""}`;
    } else
      return `${t}: ${r}`;
  }).join(", ");
}
function ee(i) {
  const e = i.getAttribute("type");
  return e || void 0;
}
function ms(i, e) {
  const t = ee(i);
  return t ? i.ownerDocument.querySelector(
    `:root > DataTypeTemplates > DOType[id="${t}"] > DA[name="${e}"]`
  ) : null;
}
function hs(i, e) {
  const t = ms(i, e);
  return t ? t.querySelector(":scope > Val")?.textContent ?? null : null;
}
function fs(i, e) {
  return i.querySelector(`:scope > DAI[name="${e}"]`);
}
function bs(i, e) {
  const t = fs(i, e);
  return t ? t.querySelector(":scope > Val")?.textContent ?? null : null;
}
function gs(i, e) {
  return i.querySelector(`:scope > DOI[name="${e}"]`);
}
function ys(i, e) {
  const t = i.getAttribute("lnType");
  return t ? i.ownerDocument.querySelector(
    `:root > DataTypeTemplates > LNodeType[id="${t}"] > DO[name="${e}"]`
  ) : null;
}
function vs(i) {
  const e = i.getAttribute("lnType");
  return e ? Array.from(
    i.ownerDocument.querySelectorAll(
      `:root > DataTypeTemplates > LNodeType[id="${e}"] > DO`
    )
  ) : [];
}
function Di(i, e) {
  const t = Y(e);
  if (t) {
    const r = gs(i, t);
    return r ? bs(r, "ctlModel") : hs(e, "ctlModel");
  }
  return null;
}
function Ss(i) {
  const e = [i];
  let t = i;
  if (t.parentElement)
    do
      t = t.parentElement, e.unshift(t);
    while (t.tagName !== "DOI" && t.parentElement);
  return e;
}
function ws(i, e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    if (n.tagName === "DOI") {
      const a = n.closest("LN, LN0").getAttribute("lnType") ?? "";
      if (r = i.querySelector(
        `:root > DataTypeTemplates > LNodeType[id="${a}"]`
      ), r) {
        const s = n.getAttribute("name"), c = r.querySelector(
          `:scope > DO[name="${s}"]`
        );
        if (c) {
          t.push(c);
          const l = ee(c) ?? "";
          r = i.querySelector(
            `:root > DataTypeTemplates > DOType[id="${l}"]`
          );
        } else
          r = null;
      }
    } else if (["SDI", "DAI"].includes(n.tagName) && r) {
      const o = n.getAttribute("name"), a = r?.querySelector(
        `:scope > DA[name="${o}"], :scope > BDA[name="${o}"]`
      );
      if (a)
        if (t.push(a), a.getAttribute("bType") === "Struct") {
          const s = ee(n) ?? "";
          r = i.querySelector(
            `:root > DataTypeTemplates > DAType[id="${s}"]`
          );
        } else
          r = null;
      else
        r = null;
    }
  }), t;
}
function Ti(i) {
  const e = Ss(i), t = ws(
    i.ownerDocument,
    e
  );
  if (t.length > 0) {
    const r = t.pop();
    if (["DA", "BDA"].includes(r.tagName))
      return r;
  }
}
function Li(i) {
  return i?.getAttribute("bType") === "Enum";
}
function xs(i) {
  const e = Ti(i);
  return Li(e);
}
function ln(i, e) {
  const t = Ti(i);
  if (Li(t)) {
    const r = ee(t), n = i.ownerDocument.querySelector(
      `:root > DataTypeTemplates > EnumType[id="${r}"] > EnumVal[ord="${e}"]`
    );
    if (n)
      return n.textContent;
  }
  return null;
}
function _s(i) {
  const e = [], t = Ti(i);
  if (Li(t)) {
    const r = ee(t), n = i.ownerDocument.querySelectorAll(
      `:root > DataTypeTemplates > EnumType[id="${r}"] > EnumVal`
    );
    Array.from(n).filter((o) => o.getAttribute("ord")).map((o) => e.push(o.getAttribute("ord")));
  }
  return e;
}
function mr(i, e) {
  if (["LN0", "LN"].includes(e.tagName))
    return i;
  const t = [];
  let r = e;
  for (; r && !["LN0", "LN"].includes(r.tagName); )
    t.unshift(r), r = r?.parentElement;
  let n = i;
  for (; n != null && t.length > 0; ) {
    const o = t.shift();
    if (o) {
      const a = Y(o);
      n = n.querySelector(
        `:scope > DOI[name="${a}"], :scope > SDI[name="${a}"], :scope > DAI[name="${a}"]`
      );
    } else
      n = null;
  }
  return n;
}
function Rt(i, e) {
  return d`<wizard-textfield
    required
    label="${i}"
    pattern="${ie(cn[i])}"
    .maybeValue=${e ?? null}
    maxLength="${ie(ls[i])}"
    helper="${u(dn[i])}"
  ></wizard-textfield>`;
}
var Fe = /* @__PURE__ */ ((i) => (i[i.VALUES = 0] = "VALUES", i[i.NETWORK = 1] = "NETWORK", i))(Fe || {});
const un = "view-change-104-plugin";
function hr(i) {
  return new CustomEvent(un, {
    bubbles: !0,
    composed: !0,
    detail: { view: i }
  });
}
function ks(i, e, t) {
  return [
    {
      title: u("protocol104.network.logicLink.wizard.title.edit"),
      menuActions: [
        {
          icon: "delete",
          label: u("remove"),
          action: Es(i, e, t)
        }
      ],
      primary: {
        icon: "save",
        label: u("save"),
        action: Cs(i, e, t)
      },
      content: [
        d`<wizard-textfield
            readOnly
            label="${u(
          "protocol104.network.logicLink.wizard.logicLinkNumberLabel"
        )}"
            .maybeValue=${t}
          ></wizard-textfield>
          ${Pt.map(
          (r) => d`${Rt(
            r,
            i.querySelector(
              `Address > P[type$="RG${e}-LL${t}-${r}"]`
            )?.innerHTML
          )}`
        )}`
      ]
    }
  ];
}
function As(i, e, t) {
  let r = 1;
  for (; t.find((n) => n == r); )
    r++;
  return [
    {
      title: u("protocol104.network.logicLink.wizard.title.add"),
      primary: {
        icon: "",
        label: u("save"),
        action: Ns(i, e, r)
      },
      content: [
        d`<wizard-textfield
            readOnly
            label="${u(
          "protocol104.network.logicLink.wizard.logicLinkNumberLabel"
        )}"
            value="${r}"
          ></wizard-textfield>
          ${Pt.map(
          (n) => d`${Rt(n)}`
        )}`
      ]
    }
  ];
}
function Es(i, e, t) {
  return (r) => {
    const n = i.querySelector("Address"), o = {
      actions: [],
      title: u("protocol104.network.logicLink.wizard.removedLogicLink", {
        subNetworkName: i.parentElement.getAttribute("name"),
        apName: i.getAttribute("apName"),
        iedName: i.getAttribute("iedName")
      })
    };
    n.querySelectorAll(`P[type^="RG${e}-LL${t}-"]`).forEach((a) => {
      o.actions.push({
        old: {
          parent: n,
          element: a
        }
      });
    }), r.dispatchEvent(at(o)), r.dispatchEvent(Q());
  };
}
function Cs(i, e, t) {
  return (r) => {
    const n = [];
    return Pt.forEach((o) => {
      const a = z(r.find((c) => c.label === o)), s = i.querySelector(
        `Address > P[type="RG${e}-LL${t}-${o}"]`
      );
      if (s == null) {
        const c = ue(i.ownerDocument, "P", {
          type: `RG${e}-LL${t}-${o}`
        });
        c.textContent = z(r.find((l) => l.label === o)), n.push({
          new: {
            parent: i.querySelector("Address"),
            element: c
          }
        });
      } else if (a !== s?.textContent) {
        const c = Dt(s, {});
        c.textContent = a, n.push({
          old: {
            element: s
          },
          new: {
            element: c
          }
        });
      }
    }), n.length != 0 ? [
      {
        actions: n,
        title: u("protocol104.network.logicLink.wizard.editedLogicLink", {
          subNetworkName: i.parentElement.getAttribute("name"),
          apName: i.getAttribute("apName"),
          iedName: i.getAttribute("iedName")
        })
      }
    ] : [];
  };
}
function Ns(i, e, t) {
  return (r) => {
    const n = {
      actions: [],
      title: u("protocol104.network.logicLink.wizard.addedLogicLink", {
        subNetworkName: i.parentElement.getAttribute("name"),
        apName: i.getAttribute("apName"),
        iedName: i.getAttribute("iedName")
      })
    };
    return Pt.forEach((o) => {
      const a = ue(i.ownerDocument, "P", {
        type: `RG${e}-LL${t}-${o}`
      });
      a.textContent = z(r.find((s) => s.label === o)), n.actions.push({
        new: {
          parent: i.querySelector("Address"),
          element: a
        }
      });
    }), [n];
  };
}
function Is(i, e) {
  const t = $s(i, e);
  return [
    {
      title: u("protocol104.network.redundancyGroup.wizard.title.edit"),
      menuActions: [
        {
          icon: "playlist_add",
          label: u("protocol104.network.redundancyGroup.wizard.addLogicLink"),
          action: (r) => {
            r.dispatchEvent(
              Be(
                As(i, e, t)
              )
            );
          }
        },
        {
          icon: "delete",
          label: u("remove"),
          action: Ts(i, e)
        }
      ],
      primary: {
        icon: "save",
        label: u("save"),
        action: Ls(i, e)
      },
      content: [
        d`<wizard-textfield
            readOnly
            label="${u(
          "protocol104.network.redundancyGroup.wizard.redundancyGroupNumberLabel"
        )}"
            .maybeValue=${e}
          ></wizard-textfield>
          ${Lt.map(
          (r) => d`${Rt(
            r,
            i.querySelector(
              `Address > P[type$="RG${e}-${r}"]`
            )?.innerHTML
          )}`
        )}
          <h3>
            ${u(
          "protocol104.network.redundancyGroup.wizard.logicLinkGroupTitle"
        )}
          </h3>
          <mwc-list
            @selected=${(r) => {
          r.target.dispatchEvent(
            Be(
              () => ks(
                i,
                e,
                t[r.detail.index]
              )
            )
          );
        }}
          >
            ${t.length != 0 ? t.map(
          (r) => d`<mwc-list-item>Logic Link ${r}</mwc-list-item>`
        ) : d`<p>
                  ${u(
          "protocol104.network.redundancyGroup.wizard.noLogicLinksAvailable"
        )}
                </p>`}
          </mwc-list>`
      ]
    }
  ];
}
function Ds(i, e) {
  let t = 1;
  for (; e.find((r) => r == t); )
    t++;
  return [
    {
      title: u("protocol104.network.redundancyGroup.wizard.title.add"),
      primary: {
        icon: "",
        label: u("save"),
        action: Ps(i, t)
      },
      content: [
        d`<wizard-textfield
            readOnly
            label="${u(
          "protocol104.network.redundancyGroup.wizard.redundancyGroupNumberLabel"
        )}"
            value="${t}"
          ></wizard-textfield>
          ${Lt.map(
          (r) => d`${Rt(r)}`
        )}`
      ]
    }
  ];
}
function Ts(i, e) {
  return (t) => {
    const r = i.querySelector("Address"), n = {
      actions: [],
      title: u(
        "protocol104.network.redundancyGroup.wizard.removedRedundancyGroup",
        {
          rGNumber: e,
          subNetworkName: i.parentElement.getAttribute("name"),
          apName: i.getAttribute("apName"),
          iedName: i.getAttribute("iedName")
        }
      )
    };
    r.querySelectorAll(`P[type^="RG${e}-"]`).forEach((o) => {
      n.actions.push({
        old: {
          parent: r,
          element: o
        }
      });
    }), t.dispatchEvent(at(n)), t.dispatchEvent(Q());
  };
}
function Ls(i, e) {
  return (t) => {
    const r = [];
    return Lt.forEach((n) => {
      const o = z(t.find((s) => s.label === n)), a = i.querySelector(
        `Address > P[type="RG${e}-${n}"]`
      );
      if (a == null) {
        const s = ue(i.ownerDocument, "P", {
          type: `RG${e}-${n}`
        });
        s.textContent = o, r.push({
          new: {
            parent: i.querySelector("Address"),
            element: s
          }
        });
      } else if (o !== a?.textContent) {
        const s = Dt(a, {});
        s.textContent = o, r.push({
          old: {
            element: a
          },
          new: {
            element: s
          }
        });
      }
    }), r.length != 0 ? [
      {
        actions: r,
        title: u(
          "protocol104.network.redundancyGroup.wizard.editedRedundancyGroup",
          {
            rGNumber: e,
            subNetworkName: i.parentElement.getAttribute("name"),
            apName: i.getAttribute("apName"),
            iedName: i.getAttribute("iedName")
          }
        )
      }
    ] : [];
  };
}
function Ps(i, e) {
  return (t) => {
    const r = {
      actions: [],
      title: u(
        "protocol104.network.redundancyGroup.wizard.addedLRedundancyGroup",
        {
          rGNumber: e,
          subNetworkName: i.parentElement.getAttribute("name"),
          apName: i.getAttribute("apName"),
          iedName: i.getAttribute("iedName")
        }
      )
    };
    return Lt.forEach((n) => {
      const o = ue(i.ownerDocument, "P", {
        type: `RG${e}-${n}`
      });
      o.textContent = z(t.find((a) => a.label === n)), r.actions.push({
        new: {
          parent: i.querySelector("Address"),
          element: o
        }
      });
    }), [r];
  };
}
function $s(i, e) {
  const t = [];
  return i.querySelectorAll(`Address > P[type^="RG${e}-LL"]`).forEach((r) => {
    const n = ee(r)?.split("-")[1], o = Number(n?.substring(2));
    t.includes(o) || t.push(o);
  }), t.sort();
}
function Rs(i, e) {
  return i.connected !== e.connected ? e.connected ? -1 : 1 : 0;
}
function zs(i) {
  return (e, t, r) => r ? r.selected.map((a) => a.value).map((a) => {
    const [s, c] = a.split(">");
    return {
      new: {
        parent: i,
        element: ue(i.ownerDocument, "ConnectedAP", {
          iedName: s,
          apName: c
        })
      }
    };
  }) : [];
}
function Os(i) {
  const e = i.closest("IED")?.getAttribute("name"), t = i.getAttribute("name"), r = i.ownerDocument.querySelector(
    `ConnectedAP[iedName="${e}"][apName="${t}"]`
  );
  return (r && _t(r)) ?? !1;
}
function Vs(i) {
  const e = i.ownerDocument, t = Array.from(e.querySelectorAll(":root > IED")).sort(Le).flatMap(
    (r) => Array.from(r.querySelectorAll(":root > IED > AccessPoint"))
  ).map((r) => ({
    element: r,
    connected: Os(r)
  })).sort(Rs);
  return [
    {
      title: u("wizard.title.add", { tagName: "ConnectedAP" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: zs(i)
      },
      content: [
        d` <filtered-list id="apList" multi
          >${t.map((r) => {
          const n = I(r.element);
          return d`<mwc-check-list-item
              value="${n}"
              ?disabled=${r.connected}
              ><span>${n}</span></mwc-check-list-item
            >`;
        })}
        </filtered-list>`
      ]
    }
  ];
}
function Ms(i, e) {
  return Array.from(i.querySelectorAll("Address > P")).every(
    (t) => e.querySelector(`Address > P[type="${ee(t)}"]`)?.isEqualNode(t)
  );
}
function Fs(i, e, t) {
  const r = ue(e.ownerDocument, "Address", {});
  return i.filter((n) => z(n) !== null).forEach((n) => {
    const o = n.label, a = ue(e.ownerDocument, "P", { type: o });
    t && a.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + o
    ), a.textContent = z(n), r.appendChild(a);
  }), r;
}
function pn(i, e) {
  const t = Gs(i);
  return [
    {
      title: u("protocol104.network.connectedAp.wizard.title.edit"),
      element: i,
      menuActions: e ? [
        {
          icon: "playlist_add",
          label: u(
            "protocol104.network.connectedAp.wizard.addRedundancyGroup"
          ),
          action: Bs(i, t)
        }
      ] : void 0,
      primary: {
        icon: "save",
        label: u("save"),
        action: Hs(i, e)
      },
      content: [
        d`<mwc-formfield
            label="${u(
          "protocol104.network.connectedAp.wizard.redundancySwitchLabel"
        )}"
          >
            <mwc-switch
              id="redundancy"
              ?checked=${e}
              @change=${(r) => {
          r.target.dispatchEvent(Q()), r.target.dispatchEvent(
            Be(
              () => pn(i, !e)
            )
          );
        }}
            ></mwc-switch>
          </mwc-formfield>
          <wizard-divider></wizard-divider>
          ${Us(i)}
          <wizard-select
            label="StationType"
            .maybeValue=${i.querySelector(
          'Address > P[type="StationType"]'
        )?.innerHTML ?? null}
            required
            fixedMenuPosition
            helper="${u(dn.StationType)}"
          >
            ${ds.map(
          (r) => d`<mwc-list-item value="${r}">${r}</mwc-list-item>`
        )}
          </wizard-select>
          ${e ? d`<h3>
                  ${u(
          "protocol104.network.connectedAp.wizard.redundancyGroupTitle"
        )}
                </h3>
                <mwc-list
                  @selected=${(r) => {
          r.target.dispatchEvent(
            Be(
              () => Is(
                i,
                t[r.detail.index]
              )
            )
          );
        }}
                >
                  ${t.length != 0 ? t.map(
          (r) => d`<mwc-list-item
                            >Redundancy Group ${r}</mwc-list-item
                          >`
        ) : d`<p>
                        ${u(
          "protocol104.network.connectedAp.wizard.noRedundancyGroupsAvailable"
        )}
                      </p>`}
                </mwc-list>` : d`${cs.map(
          (r) => d`${qs(i, r)}`
        )}`} `
      ]
    }
  ];
}
function Hs(i, e) {
  return (t, r) => {
    const n = r.shadowRoot?.querySelector("#typeRestriction")?.checked ?? !1, o = Fs(t, i, n), a = i.querySelector("Address"), s = {
      actions: [],
      title: u("connectedap.action.addaddress", {
        iedName: i.getAttribute("iedName") ?? "",
        apName: i.getAttribute("apName") ?? ""
      })
    };
    if (e) {
      const c = z(
        t.find((p) => p.label === "StationType")
      ), l = a?.querySelector(
        'P[type="StationType"]'
      ), h = Dt(l, {});
      h.textContent = c, s.actions.push({
        old: {
          element: l
        },
        new: {
          element: h
        }
      });
    } else a !== null && !Ms(a, o) ? (s.actions.push({
      old: {
        parent: i,
        element: a
      }
    }), s.actions.push({
      new: {
        parent: i,
        element: o
      }
    })) : a === null && s.actions.push({
      new: {
        parent: i,
        element: o
      }
    });
    return s.actions.length ? [s] : [];
  };
}
function Bs(i, e) {
  return (t) => {
    t.dispatchEvent(
      Be(Ds(i, e))
    );
  };
}
function Gs(i) {
  const e = [];
  return i.querySelectorAll('Address > P[type^="RG"]').forEach((t) => {
    const r = ee(t)?.split("-")[0], n = Number(r?.substring(2));
    e.includes(n) || e.push(n);
  }), e.sort();
}
function qs(i, e) {
  return d`<wizard-textfield
    required
    label="${e}"
    pattern="${ie(cn[e])}"
    .maybeValue=${i.querySelector(`Address > P[type="${e}"]`)?.innerHTML ?? null}
  ></wizard-textfield>`;
}
function Us(i) {
  return d`<mwc-formfield
    label="${u("connectedap.wizard.addschemainsttype")}"
    ><mwc-checkbox
      id="typeRestriction"
      ?checked=${js(i)}
    ></mwc-checkbox>
  </mwc-formfield>`;
}
function js(i) {
  return Array.from(i.querySelectorAll("Address > P")).filter((e) => _t(e)).some((e) => e.getAttribute("xsi:type"));
}
var Ws = Object.defineProperty, mn = (i, e, t, r) => {
  for (var n = void 0, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = a(e, t, n) || n);
  return n && Ws(e, t, n), n;
};
class Ie extends ae {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
}
mn([
  m()
], Ie.prototype, "doc");
mn([
  m({ type: Number })
], Ie.prototype, "editCount");
var Ks = Object.defineProperty, Xs = Object.getOwnPropertyDescriptor, hn = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Xs(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Ks(e, t, n), n;
};
let pi = class extends Ie {
  openEditWizard() {
    this.dispatchEvent(
      Q(
        () => pn(
          this.element,
          this.element.querySelectorAll('Address > P[type^="RG"]').length > 0
        )
      )
    );
  }
  remove() {
    this.element && this.dispatchEvent(
      at({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  render() {
    return d`
      <action-icon
        label="${this.element.getAttribute("apName") ?? "UNDEFINED"}"
        icon="settings_input_hdmi"
        ><mwc-fab
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}"
        ></mwc-fab>
        <mwc-fab
          slot="action"
          mini
          icon="delete"
          @click="${() => this.remove()}}"
        ></mwc-fab
      ></action-icon>
    `;
  }
};
hn([
  m({ attribute: !1 })
], pi.prototype, "element", 2);
pi = hn([
  O("connectedap-104-editor")
], pi);
var Zs = Object.defineProperty, Js = Object.getOwnPropertyDescriptor, fn = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Js(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Zs(e, t, n), n;
};
let kt = class extends Ie {
  get bitrate() {
    const i = this.element.querySelector("BitRate");
    if (i === null) return null;
    const e = i.textContent ?? "", t = i.getAttribute("multiplier"), r = t === null ? "b/s" : " " + t + "b/s";
    return e ? e + r : null;
  }
  openConnectedAPwizard() {
    this.dispatchEvent(Q(Vs(this.element)));
  }
  renderIedContainer() {
    return Array.from(this.element.querySelectorAll(":scope > ConnectedAP")).map((i) => i.getAttribute("iedName")).filter((i, e, t) => t.indexOf(i) === e).sort(Le).map(
      (i) => d` <action-pane id="iedSection" label="${i}">
          ${Array.from(
        this.element.parentElement?.querySelectorAll(
          `:scope > SubNetwork > ConnectedAP[iedName="${i}"]`
        ) ?? []
      ).map(
        (e) => d`<connectedap-104-editor
                class="${e.parentElement !== this.element ? "disabled" : ""}"
                .editCount=${this.editCount}
                .doc="${this.doc}"
                .element=${e}
              ></connectedap-104-editor>`
      )}
        </action-pane>`
    );
  }
  subNetworkSpecs() {
    const i = ee(this.element) ?? null;
    return !i && !this.bitrate ? "" : `(${i}${i && this.bitrate ? ` — ${this.bitrate}` : ""})`;
  }
  header() {
    const i = this.element.getAttribute("desc") ?? null;
    return ` ${this.element.getAttribute("name") ?? void 0} ${i === null ? "" : `— ${i}`}
    ${this.subNetworkSpecs()}`;
  }
  render() {
    return d`<action-pane label="${this.header()}">
      <abbr slot="action" title="${u("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click="${() => this.openConnectedAPwizard()}"
        ></mwc-icon-button>
      </abbr>
      <div id="iedContainer">${this.renderIedContainer()}</div>
    </action-pane> `;
  }
};
kt.styles = U`
    #iedContainer {
      display: grid;
      box-sizing: border-box;
      gap: 12px;
      padding: 8px 12px 16px;
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    }

    #iedSection:not(:focus):not(:focus-within) .disabled {
      display: none;
    }

    #iedSection .disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  `;
fn([
  m({ attribute: !1 })
], kt.prototype, "element", 2);
kt = fn([
  O("subnetwork-104-container")
], kt);
const Ut = {
  type: "104",
  bitrate: "100",
  multiplier: "M"
};
function Qs(i) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${i.name}
      helper="${u("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${i.desc}
      nullable
      helper="${u("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${i.type}
      nullable
      helper="${u("subnetwork.wizard.typeHelper")}"
      pattern="${xt.normalizedString}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="BitRate"
      .maybeValue=${i.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${i.multiplier}
      helper="${u("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${u("textfield.nonempty")}"
      pattern="${xt.decimal}"
    ></wizard-textfield>`
  ];
}
function Ys(i) {
  return (e) => {
    const t = z(e.find((l) => l.label === "name")), r = z(e.find((l) => l.label === "desc")), n = z(e.find((l) => l.label === "type")), o = z(e.find((l) => l.label === "BitRate")), a = Jo(e.find((l) => l.label === "BitRate")), s = ue(i.ownerDocument, "SubNetwork", {
      name: t,
      desc: r,
      type: n
    });
    if (o !== null) {
      const l = ue(i.ownerDocument, "BitRate", {
        unit: "b/s",
        multiplier: a
      });
      l.textContent = o, s.appendChild(l);
    }
    return [{
      new: {
        parent: i,
        element: s
      }
    }];
  };
}
function ec(i) {
  return [
    {
      title: u("wizard.title.add", { tagName: "SubNetwork" }),
      primary: {
        icon: "add",
        label: u("add"),
        action: Ys(i)
      },
      content: Qs({
        name: "",
        desc: "",
        type: Ut.type,
        BitRate: Ut.bitrate,
        multiplier: Ut.multiplier
      })
    }
  ];
}
var tc = Object.getOwnPropertyDescriptor, ic = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? tc(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = a(n) || n);
  return n;
};
let mi = class extends Ie {
  getSubNetworkElements() {
    return Array.from(
      this.doc.querySelectorAll("Communication > SubNetwork") ?? []
    ).filter((i) => ee(i) === "104").sort((i, e) => Le(i, e));
  }
  /** Opens a [[`WizardDialog`]] for creating a new `SubNetwork` element. */
  openCreateSubNetworkWizard() {
    const i = this.doc.querySelector(":root > Communication");
    i || this.dispatchEvent(
      at({
        new: {
          parent: this.doc.documentElement,
          element: ue(this.doc, "Communication", {})
        }
      })
    ), this.dispatchEvent(Q(ec(i)));
  }
  render() {
    return d`<mwc-fab
        extended
        icon="add"
        label="${u("subnetwork.wizard.title.add")}"
        @click=${() => this.openCreateSubNetworkWizard()}
      ></mwc-fab>
      <section>
        ${this.getSubNetworkElements().map(
      (i) => d`<subnetwork-104-container
              .doc="${this.doc}"
              .element=${i}
            ></subnetwork-104-container>`
    )}
      </section>`;
  }
};
mi.styles = U`
    :host {
      width: 100vw;
    }

    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    subnetwork-104-container {
      margin: 8px 12px 16px;
    }
  `;
mi = ic([
  O("network-104-container")
], mi);
var rc = Object.defineProperty, nc = Object.getOwnPropertyDescriptor, je = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? nc(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && rc(e, t, n), n;
};
function bn(i, e) {
  const t = i.nodeType === Node.ELEMENT_NODE ? i.closest(e) : null;
  if (t) return t;
  const r = i.getRootNode();
  return r instanceof ShadowRoot ? bn(r.host, e) : null;
}
let Ce = class extends ae {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const i = bn(this.parentNode, "action-pane");
    i && (this.level = i.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const i = d`<span
        ><slot name="icon"
          >${this.icon ? d`<mwc-icon>${this.icon}</mwc-icon>` : de}</slot
        ></span
      >
      ${this.label ?? de}
      <nav><slot name="action"></slot></nav>`, e = Math.floor(Math.max(this.level, 1)), t = typeof this.label == "string" ? this.label : "";
    switch (e) {
      case 1:
        return d`<h1 title="${t}">${i}</h1>`;
      case 2:
        return d`<h2 title="${t}">${i}</h2>`;
      case 3:
        return d`<h3 title="${t}">${i}</h3>`;
      default:
        return d`<h4 title="${t}">${i}</h4>`;
    }
  }
  render() {
    return d`<section
      class="${qe({
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
Ce.styles = U`
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
je([
  m({ type: String })
], Ce.prototype, "label", 2);
je([
  m({ type: String })
], Ce.prototype, "icon", 2);
je([
  m({ type: Boolean })
], Ce.prototype, "secondary", 2);
je([
  m({ type: Boolean })
], Ce.prototype, "highlighted", 2);
je([
  m({ type: Number })
], Ce.prototype, "level", 2);
Ce = je([
  O("action-pane")
], Ce);
/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
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
const fr = nt((i) => (e) => {
  let t;
  if (e instanceof zr || e instanceof Ge)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof $r)
    br(e.strings), t = e.element.hasAttribute(e.name), e.value = t;
  else {
    const { element: r, name: n, strings: o } = e.committer;
    if (br(o), e instanceof It) {
      if (t = r[n], t === i)
        return;
    } else e instanceof Re && (t = r.getAttribute(n));
    if (t === String(i))
      return;
  }
  e.setValue(i);
}), br = (i) => {
  if (i.length !== 2 || i[0] !== "" || i[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
};
function oc(i, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...i, ...e?.detail }
  });
}
const Je = "http://www.iec.ch/61850/2003/SCL", ye = "IEC_60870_5_104", gn = "http://www.iec.ch/61850-80-1/2007/IEC_60870-5-104", gr = "IEC_60870_5_104";
function Pi(i) {
  const e = i.firstElementChild;
  e.hasAttribute("xmlns:" + gr) || e.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:" + gr,
    gn
  );
}
function ac(i) {
  return i.querySelector(`Private[type="${ye}"]`);
}
function sc(i) {
  const e = i.createElementNS(Je, "Private");
  return e.setAttribute("type", ye), e;
}
function At(i, e) {
  const t = i.createElementNS(gn, "Address");
  return t.setAttribute("ti", e), t;
}
function yn(i, e) {
  const t = e.shift();
  if (e.length > 0) {
    let r;
    return t.tagName === "DO" ? r = i.querySelector(
      `DOI[name="${t.getAttribute("name")}"]`
    ) : r = i.querySelector(
      `SDI[name="${t.getAttribute("name")}"]`
    ), r ? yn(
      r,
      e
    ) : (e.unshift(t), [i, e]);
  } else
    return [i, [t]];
}
function vn(i) {
  const e = i.shift();
  if (i.length > 0) {
    let t;
    e.tagName === "DO" ? t = e.ownerDocument.createElementNS(Je, "DOI") : t = e.ownerDocument.createElementNS(Je, "SDI"), t.setAttribute("name", e?.getAttribute("name") ?? "");
    const r = vn(i);
    return t.append(r), t;
  } else {
    const t = e.ownerDocument.createElementNS(
      Je,
      "Val"
    ), r = e.querySelector("Val");
    r && (t.textContent = r.textContent);
    const n = e.ownerDocument.createElementNS(
      Je,
      "DAI"
    );
    return n.setAttribute("name", e?.getAttribute("name") ?? ""), n.append(t), n;
  }
}
const cc = [
  "ACD",
  "ACT",
  "APC",
  "ASG",
  "BAC",
  "BCR",
  "BSC",
  "CMV",
  "DEL",
  "DPC",
  "DPS",
  "ENC",
  "ENG",
  "ENS",
  "INC",
  "ING",
  "INS",
  "ISC",
  "MV",
  "SEC",
  "SPC",
  "SPG",
  "SPS",
  "WYE"
], $i = {
  ACD: {
    monitor: {
      30: {
        daPaths: [
          { path: ["general"] },
          { path: ["phsA"] },
          { path: ["phsB"] },
          { path: ["phsC"] },
          { path: ["neut"] }
        ],
        create: _,
        inverted: !0
      },
      40: {
        daPaths: [
          { path: ["general"] },
          { path: ["phsA"] },
          { path: ["phsB"] },
          { path: ["phsC"] },
          { path: ["neut"] }
        ],
        create: _
      }
    },
    control: {}
  },
  ACT: {
    monitor: {
      30: {
        daPaths: [
          { path: ["general"] },
          { path: ["phsA"] },
          { path: ["phsB"] },
          { path: ["phsC"] },
          { path: ["neut"] }
        ],
        create: _,
        inverted: !0
      },
      39: {
        daPaths: [{ path: ["general"] }],
        create: _
      }
    },
    control: {}
  },
  APC: {
    monitor: {
      36: {
        daPaths: [{ path: ["mxVal", "f"] }],
        create: _,
        inverted: !0
      }
    },
    control: {
      63: {
        daPaths: [{ path: ["Oper", "ctlVal", "f"] }],
        create: _,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  ASG: {
    monitor: {
      63: {
        daPaths: [{ path: ["setMag", "f"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  BAC: {
    monitor: {
      36: {
        daPaths: [{ path: ["mxVal", "f"] }],
        create: _,
        inverted: !0
      }
    },
    control: {
      60: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: _,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  BCR: {
    monitor: {
      37: {
        daPaths: [{ path: ["actVal"] }, { path: ["frVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  BSC: {
    monitor: {
      32: {
        daPaths: [{ path: ["valWTr", "posVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {
      60: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: _,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  CMV: {
    monitor: {
      35: {
        daPaths: [{ path: ["mag", "i"] }, { path: ["ang", "i"] }],
        create: _,
        inverted: !0
      },
      36: {
        daPaths: [{ path: ["mag", "f"] }, { path: ["ang", "f"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  DEL: {
    monitor: {
      35: {
        daPaths: [
          { path: ["phsAB", "cVal", "mag", "f"] },
          { path: ["phsBC", "cVal", "mag", "f"] },
          { path: ["phsCA", "cVal", "mag", "f"] }
        ],
        create: _,
        inverted: !1
      },
      36: {
        daPaths: [
          { path: ["phsAB", "cVal", "mag", "f"] },
          { path: ["phsBC", "cVal", "mag", "f"] },
          { path: ["phsCA", "cVal", "mag", "f"] }
        ],
        create: _,
        inverted: !1
      }
    },
    control: {}
  },
  DPC: {
    monitor: {
      31: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {
      59: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: _,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  DPS: {
    monitor: {
      31: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  ENC: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      },
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !1
      }
    },
    control: {
      58: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: jt,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      },
      62: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: jt,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  ENG: {
    monitor: {
      58: {
        daPaths: [{ path: ["setVal"] }],
        create: jt,
        inverted: !0
      },
      62: {
        daPaths: [{ path: ["setVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  ENS: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      },
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  INC: {
    monitor: {
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {
      62: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: _,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  ING: {
    monitor: {
      62: {
        daPaths: [{ path: ["setVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  INS: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      },
      33: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      },
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  ISC: {
    monitor: {
      32: {
        daPaths: [{ path: ["valWTr", "posVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {
      62: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: _,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  MV: {
    monitor: {
      35: {
        daPaths: [{ path: ["mag", "i"] }],
        create: _,
        inverted: !0
      },
      36: {
        daPaths: [{ path: ["mag", "f"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  SEC: {
    monitor: {
      37: {
        daPaths: [{ path: ["cnt"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  SPC: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {
      58: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: _,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: fe
      }
    }
  },
  SPG: {
    monitor: {
      58: {
        daPaths: [{ path: ["setVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  SPS: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: _,
        inverted: !0
      }
    },
    control: {}
  },
  WYE: {
    monitor: {
      35: {
        daPaths: [
          { path: ["phsA", "cVal", "mag", "f"] },
          { path: ["phsB", "cVal", "mag", "f"] },
          { path: ["phsC", "cVal", "mag", "f"] }
        ],
        create: _,
        inverted: !1
      },
      36: {
        daPaths: [
          { path: ["phsA", "cVal", "mag", "f"] },
          { path: ["phsB", "cVal", "mag", "f"] },
          { path: ["phsC", "cVal", "mag", "f"] }
        ],
        create: _,
        inverted: !1
      }
    },
    control: {}
  }
};
function _(i, e, t, r, n, o, a) {
  const s = [], [c, l] = Oi(
    i,
    e,
    t,
    r,
    o
  );
  return c.length > 0 && s.push(...c), l.length > 0 && (Pi(i.ownerDocument), l.forEach((h) => {
    const p = hi(
      h.ownerDocument,
      n,
      a
    );
    s.push(...Ri(h, p));
  })), zi(r, i, e, t, s), s;
}
function jt(i, e, t, r, n, o, a) {
  const s = [], [c, l] = Oi(
    i,
    e,
    t,
    r,
    o
  );
  if (c.length > 0 && s.push(...c), l.length > 0) {
    Pi(i.ownerDocument);
    const h = [];
    l.forEach((p) => {
      xs(p) ? _s(p).forEach(
        (b) => h.push(
          ...hi(
            p.ownerDocument,
            n,
            a,
            b
          )
        )
      ) : h.push(
        ...hi(p.ownerDocument, n, a)
      ), s.push(...Ri(p, h));
    });
  }
  return zi(r, i, e, t, s), s;
}
function fe(i, e, t, r, n, o) {
  const a = [], [s, c] = Oi(
    i,
    e,
    t,
    r,
    o
  );
  return s.length > 0 && a.push(...s), c.length > 0 && (Pi(i.ownerDocument), c.forEach((l) => {
    const h = At(
      l.ownerDocument,
      n
    );
    h.setAttribute("check", "interlocking");
    const p = At(
      l.ownerDocument,
      n
    );
    p.setAttribute("check", "synchrocheck"), a.push(
      ...Ri(l, [
        h,
        p
      ])
    );
  })), zi(r, i, e, t, a), a;
}
function Ri(i, e) {
  const t = [];
  let r = ac(i);
  return r ? e.forEach((n) => {
    t.push({
      new: { parent: r, element: n }
    });
  }) : (r = sc(i.ownerDocument), r.append(...e), t.push({ new: { parent: i, element: r } })), t;
}
function hi(i, e, t, r) {
  const n = [], o = At(i, e);
  if (r && o.setAttribute("expectedValue", r), n.push(o), t) {
    const a = At(i, e);
    a.setAttribute("inverted", "true"), r && a.setAttribute("expectedValue", r), n.push(a);
  }
  return n;
}
function zi(i, e, t, r, n) {
  n.forEach((o) => {
    const a = o.new.element;
    let s;
    a.tagName === "Address" ? s = [a] : s = Array.from(a.querySelectorAll("Address"));
    const l = o.new.parent.closest("DAI");
    if (l) {
      const h = e.closest("IED"), p = t.querySelector(
        `:scope > DOI[name="${Y(r)}"]`
      );
      s.forEach((b) => {
        i.dispatchEvent(
          Q(
            () => wn(
              h,
              p,
              l,
              b
            )
          )
        );
      });
    }
  });
}
function dc(i, e) {
  let t = [i];
  const r = i.ownerDocument, n = ee(i) ?? "";
  let o = r.querySelector(`DOType[id="${n}"]`);
  return e.path.forEach((a) => {
    if (!o) {
      t = null;
      return;
    }
    const s = o.querySelector(
      `:scope > SDO[name="${a}"]`
    ), c = s?.getAttribute("type");
    c && (o = r.querySelector(`DOType[id="${c}"]`));
    const l = o.querySelector(
      `:scope > DA[name="${a}"], :scope > BDA[name="${a}"]`
    );
    if (l === null && s === null) {
      t = null;
      return;
    }
    if (t.push(s || l), s) return;
    if ((l.getAttribute("bType") ?? "") === "Struct") {
      const p = ee(l) ?? "";
      o = r.querySelector(`DAType[id="${p}"]`);
    } else
      o = null;
  }), t;
}
function Oi(i, e, t, r, n) {
  const o = [], a = [];
  return n.forEach((s) => {
    const c = lc(t, s), l = e.querySelectorAll(c);
    if (l.length > 0)
      l.forEach((h) => {
        const p = mr(
          i,
          h
        );
        p ? o.push(p) : o.push(h);
      });
    else {
      const h = dc(t, s);
      if (h) {
        const [p, b] = yn(e, h), g = vn(b);
        p.append(g);
        const w = mr(
          i,
          p
        );
        if (w && a.push({ new: { parent: w, element: g } }), g.tagName === "DAI")
          o.push(g);
        else {
          const S = g.querySelector("DAI");
          o.push(S);
        }
      } else {
        const p = ct(t) ?? "", b = ee(t) ?? "";
        r.dispatchEvent(
          oc({
            kind: "error",
            title: u("protocol104.wizard.error.addAddressError", {
              structure: s.path.join(" > "),
              cdc: p,
              doType: b
            })
          })
        );
      }
    }
  }), [a, o];
}
function lc(i, e) {
  let r = `:scope > DOI[name="${Y(i)}"] > `;
  return e.path.forEach((n, o) => {
    o < e.path.length - 1 ? r = `${r} SDI[name="${n}"] > ` : r = `${r} DAI[name="${n}"]`;
  }), r;
}
function Sn(i, e) {
  return i === "MV" && ["35", "36"].includes(e) || i === "INS" && e === "35";
}
function fi(i, e) {
  return i === "MV" && ["35", "36"].includes(e);
}
function Qe(i) {
  switch (i) {
    case "1":
      return u("protocol104.values.signalNames.tiNumber1");
    case "3":
      return u("protocol104.values.signalNames.tiNumber3");
    case "5":
      return u("protocol104.values.signalNames.tiNumber5");
    case "7":
      return u("protocol104.values.signalNames.tiNumber7");
    case "9":
      return u("protocol104.values.signalNames.tiNumber9");
    case "11":
      return u("protocol104.values.signalNames.tiNumber11");
    case "13":
      return u("protocol104.values.signalNames.tiNumber13");
    case "15":
      return u("protocol104.values.signalNames.tiNumber15");
    case "20":
      return u("protocol104.values.signalNames.tiNumber20");
    case "21":
      return u("protocol104.values.signalNames.tiNumber21");
    case "30":
      return u("protocol104.values.signalNames.tiNumber30");
    case "31":
      return u("protocol104.values.signalNames.tiNumber31");
    case "32":
      return u("protocol104.values.signalNames.tiNumber32");
    case "33":
      return u("protocol104.values.signalNames.tiNumber33");
    case "34":
      return u("protocol104.values.signalNames.tiNumber34");
    case "35":
      return u("protocol104.values.signalNames.tiNumber35");
    case "36":
      return u("protocol104.values.signalNames.tiNumber36");
    case "37":
      return u("protocol104.values.signalNames.tiNumber37");
    case "38":
      return u("protocol104.values.signalNames.tiNumber38");
    case "39":
      return u("protocol104.values.signalNames.tiNumber39");
    case "40":
      return u("protocol104.values.signalNames.tiNumber40");
    case "45":
      return u("protocol104.values.signalNames.tiNumber45");
    case "46":
      return u("protocol104.values.signalNames.tiNumber46");
    case "47":
      return u("protocol104.values.signalNames.tiNumber47");
    case "48":
      return u("protocol104.values.signalNames.tiNumber48");
    case "49":
      return u("protocol104.values.signalNames.tiNumber49");
    case "50":
      return u("protocol104.values.signalNames.tiNumber50");
    case "51":
      return u("protocol104.values.signalNames.tiNumber51");
    case "58":
      return u("protocol104.values.signalNames.tiNumber58");
    case "59":
      return u("protocol104.values.signalNames.tiNumber59");
    case "60":
      return u("protocol104.values.signalNames.tiNumber60");
    case "61":
      return u("protocol104.values.signalNames.tiNumber61");
    case "62":
      return u("protocol104.values.signalNames.tiNumber62");
    case "63":
      return u("protocol104.values.signalNames.tiNumber63");
    case "64":
      return u("protocol104.values.signalNames.tiNumber64");
    default:
      return u("protocol104.values.signalNames.default");
  }
}
const uc = [
  "m",
  "k",
  "M",
  "mu",
  "y",
  "z",
  "a",
  "f",
  "p",
  "n",
  "c",
  "d",
  "da",
  "h",
  "G",
  "T",
  "P",
  "E",
  "Z",
  "Y"
];
function pc(i, e, t) {
  return (r) => {
    const n = $t(i) ?? "", o = n === "WYE" || n === "DEL" ? "CMV" : n, a = t.getAttribute("ti") ?? "", s = z(r.find((g) => g.label === "casdu")), c = z(r.find((g) => g.label === "ioa")), l = Sn(o, a) ? z(r.find((g) => g.label === "unitMultiplier")) : null, h = fi(o, a) ? z(r.find((g) => g.label === "scaleMultiplier")) : null, p = fi(o, a) ? z(r.find((g) => g.label === "scaleOffset")) : null;
    if (s === t.getAttribute("casdu") && c === t.getAttribute("ioa") && l === t.getAttribute("unitMultiplier") && h === t.getAttribute("scaleMultiplier") && p === t.getAttribute("scaleOffset"))
      return [];
    const b = Dt(t, {
      casdu: s,
      ioa: c,
      unitMultiplier: l,
      scaleMultiplier: h,
      scaleOffset: p
    });
    return [
      { old: { element: t }, new: { element: b } }
    ];
  };
}
function wn(i, e, t, r) {
  function n() {
    const o = $t(e) ?? "", a = o === "WYE" || o === "DEL", s = a ? "CMV" : o, c = r.getAttribute("ti") ?? "";
    let l = r.getAttribute("casdu") ?? "";
    function h(g) {
      return i.querySelector(
        `Address[casdu="${l}"][ioa="${g}"]`
      ) ? (this.validationMessage = u("protocol104.wizard.error.ioaConflict"), {
        valid: !1,
        customError: !0
      }) : {};
    }
    const p = [
      d`<wizard-textfield
        label="IED"
        .maybeValue="${Y(i)}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      d`<mwc-textarea
        label="DOI"
        value="${oe(e, "IED")}"
        rows="2"
        cols="40"
        readonly
        disabled
      >
      </mwc-textarea>`,
      d`<wizard-textfield
        label="cdc"
        .maybeValue="${s}"
        .helper="${a ? u("protocol104.mappedCmv", { cdc: o }) : ""}"
        .helperPersistent="${a}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      d`<mwc-textarea
        label="DAI"
        value="${oe(t, "DOI")}"
        rows="2"
        cols="40"
        readonly
        disabled
      >
      </mwc-textarea>`,
      d`<wizard-textfield
        label="casdu"
        @change="${(g) => {
        l = g.target.value ?? "";
      }}}"
        .maybeValue="${fr(r.getAttribute("casdu") ?? "")}"
        helper="${u("protocol104.wizard.casduHelper")}"
        required
      >
      </wizard-textfield>`,
      d`<wizard-textfield
        .validityTransform="${h}"
        label="ioa"
        .maybeValue="${fr(r.getAttribute("ioa") ?? "")}"
        helper="${u("protocol104.wizard.ioaHelper")}"
        required
      >
      </wizard-textfield>`,
      d`<wizard-textfield
        label="ti"
        .maybeValue=${c + " (" + Qe(c) + ")"}
        disabled
        readonly
      >
      </wizard-textfield>`
    ];
    Sn(s, c) && p.push(d`<wizard-select
        label="unitMultiplier"
        .maybeValue="${r.getAttribute("unitMultiplier")}"
        helper="${u("protocol104.wizard.unitMultiplierHelper")}"
        fixedMenuPosition
        nullable
      >
        ${uc.map(
      (g) => d`<mwc-list-item value="${g}">
              <span>${g}</span>
            </mwc-list-item>`
    )}
      </wizard-select>`), fi(s, c) && (p.push(d`<wizard-textfield
        label="scaleMultiplier"
        .maybeValue="${r.getAttribute("scaleMultiplier")}"
        helper="${u("protocol104.wizard.scaleMultiplierHelper")}"
        pattern="${xt.decimal}"
        nullable
      >
      </wizard-textfield>`), p.push(d`<wizard-textfield
        label="scaleOffset"
        .maybeValue="${r.getAttribute("scaleOffset")}"
        helper="${u("protocol104.wizard.scaleOffsetHelper")}"
        pattern="${xt.decimal}"
        nullable
      >
      </wizard-textfield>`));
    const b = r.getAttribute("expectedValue");
    return b && (p.push(d`<wizard-textfield
        label="expectedValue"
        .maybeValue="${b}"
        disabled
        readonly
      >
      </wizard-textfield>`), p.push(d`<wizard-textfield
        label="enumValue"
        .maybeValue="${ln(t, b)}"
        disabled
        readonly
      >
      </wizard-textfield>`)), r.hasAttribute("inverted") && p.push(d`<wizard-textfield
        label="inverted"
        .maybeValue="${r.getAttribute("inverted")}"
        disabled
        readonly
      >
      </wizard-textfield>`), r.hasAttribute("check") && p.push(d`<wizard-textfield
        label="check"
        .maybeValue="${r.getAttribute("check")}"
        disabled
        readonly
      >
      </wizard-textfield>`), p;
  }
  return [
    {
      title: u("protocol104.wizard.title.addressEdit"),
      element: r,
      primary: {
        icon: "edit",
        label: u("save"),
        action: pc(e, t, r)
      },
      content: n()
    }
  ];
}
function Xe(i, e) {
  return i.length > 0 ? d` <wizard-textfield
      label="${e}"
      .maybeValue=${i.join(", ")}
      disabled
      readonly
    >
    </wizard-textfield>` : d``;
}
function mc(i) {
  const e = i.closest("IED"), t = oe(i, "IED"), r = $t(i), n = r === "WYE" || r === "DEL" ? "CMV" : r, o = [
    d`<wizard-textfield
      label="IED"
      .maybeValue=${Y(e)}
      disabled
      readonly
    >
    </wizard-textfield>`,
    d`<mwc-textarea
      label="DOI"
      value="${t}"
      rows="2"
      cols="40"
      readonly
      disabled
    >
    </mwc-textarea>`,
    d`<wizard-textfield
      label="Common Data Class"
      .maybeValue=${n}
      disabled
      readonly
    >
    </wizard-textfield>`
  ], a = i.closest("LN0, LN"), s = Y(i);
  if (a && s) {
    const S = ys(a, s);
    if (S) {
      const x = Di(a, S);
      x !== null && o.push(d` <wizard-textfield
          label="ctlModel"
          .maybeValue=${x}
          disabled
          readonly
        >
        </wizard-textfield>`);
    }
  }
  let c = [], l = [];
  const h = $i[n];
  o.push(d`<wizard-textfield
    label="104 Configuration available"
    .maybeValue=${h !== void 0}
    disabled
    readonly
  >
  </wizard-textfield>`), h && (c = Object.keys(h.monitor), l = Object.keys(h.control));
  let p = Array.from(
    i.querySelectorAll(
      `DAI > Private[type="${ye}"] > Address`
    )
  ).filter((S) => S.getAttribute("ti") !== "").map((S) => S.getAttribute("ti"));
  p = [...new Set(p)];
  const b = p.filter((S) => c.includes(S)), g = p.filter((S) => l.includes(S)), w = p.filter((S) => !b.includes(S)).filter((S) => !g.includes(S));
  return o.push(Xe(c, "Available Monitor TIs")), o.push(Xe(b, "Found Monitor TIs")), o.push(Xe(l, "Available Control TIs")), o.push(Xe(g, "Found Control TIs")), o.push(Xe(w, "Other TIs")), o;
}
function hc(i) {
  return (e) => {
    const t = i.querySelectorAll(
      `DAI > Private[type="${ye}"] > Address`
    );
    if (t.length > 0) {
      const r = {
        actions: [],
        title: u("protocol104.values.removedAddresses", {
          name: oe(i, "SCL"),
          nrOfAddresses: t.length
        })
      };
      t.forEach((n) => {
        r.actions.push({
          old: {
            parent: n.parentElement,
            element: n
          }
        });
      }), e.dispatchEvent(at(r)), e.dispatchEvent(Q());
    }
  };
}
function fc(i) {
  return [
    {
      title: u("protocol104.wizard.title.doiInfo"),
      menuActions: [
        {
          label: u("protocol104.values.removeAddresses"),
          icon: "delete",
          action: hc(i)
        }
      ],
      content: mc(i)
    }
  ];
}
var bc = Object.defineProperty, gc = Object.getOwnPropertyDescriptor, dt = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? gc(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && bc(e, t, n), n;
};
let Pe = class extends Ie {
  get daiElements() {
    return Array.from(this.element.querySelectorAll("DAI")).filter(
      (i) => i.querySelector(
        `Private[type="${ye}"] > Address`
      ) !== null
    ).sort(
      (i, e) => oe(i, "DOI").localeCompare(oe(e, "DOI"))
    );
  }
  getAddressElements(i) {
    return Array.from(
      i.querySelectorAll(
        `Private[type="${ye}"] > Address`
      )
    ).sort(
      (e, t) => (e.getAttribute("casdu") ?? "").localeCompare(
        t.getAttribute("casdu") ?? ""
      ) && (e.getAttribute("ioa") ?? "").localeCompare(
        t.getAttribute("ioa") ?? ""
      )
    );
  }
  firstUpdated() {
    this.requestUpdate();
  }
  openEditAddressWizard(i, e) {
    const t = i.closest("DOI"), r = t.closest("IED");
    this.dispatchEvent(
      Q(
        wn(r, t, i, e)
      )
    );
  }
  openEditTiWizard() {
    this.dispatchEvent(Q(fc(this.element)));
  }
  get header() {
    const i = oe(this.element, "IED"), e = $t(this.element);
    return d`${i}${e ? d` (${e})` : de}`;
  }
  renderAddressList(i) {
    const e = this.getAddressElements(i);
    return d`${e.map((t) => d`
        <mwc-list-item graphic="icon" hasMeta>
          <span slot="graphic">&nbsp;</span>
          <span>${ps(i, t)}</span>
          <span slot="meta">
            <mwc-icon-button
              icon="edit"
              @click=${() => this.openEditAddressWizard(i, t)}
            >
            </mwc-icon-button>
          </span>
        </mwc-list-item>
      `)}`;
  }
  renderDaiList() {
    const i = this.daiElements;
    return d`${i.map((e) => d`
        <mwc-list-item noninteractive>
          <span>${oe(e, "DOI")}</span>
        </mwc-list-item>
        ${this.renderAddressList(e)}
      `)}`;
  }
  render() {
    return d`
      <action-pane .label="${this.header}">
        <abbr slot="action" title="${u("edit")}">
          <mwc-icon-button
            icon="info"
            @click=${() => this.openEditTiWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${u("protocol104.toggleChildElements")}">
          <mwc-icon-button-toggle
            id="toggleButton"
            on
            onIcon="keyboard_arrow_up"
            offIcon="keyboard_arrow_down"
            @click=${() => this.requestUpdate()}
          >
          </mwc-icon-button-toggle>
        </abbr>
        ${this.toggleButton?.on ? d` <mwc-list id="dailist"> ${this.renderDaiList()} </mwc-list>` : de}
      </action-pane>
    `;
  }
};
Pe.styles = U`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }
  `;
dt([
  m()
], Pe.prototype, "element", 2);
dt([
  L("#toggleButton")
], Pe.prototype, "toggleButton", 2);
dt([
  m()
], Pe.prototype, "daiElements", 1);
dt([
  m()
], Pe.prototype, "header", 1);
Pe = dt([
  O("doi-104-container")
], Pe);
var yc = Object.defineProperty, vc = Object.getOwnPropertyDescriptor, lt = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? vc(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && yc(e, t, n), n;
};
let $e = class extends Ie {
  get doiElements() {
    return Array.from(this.element.querySelectorAll("DOI")).filter(
      (i) => i.querySelector(
        `DAI > Private[type="${ye}"] > Address`
      ) !== null
    ).sort(
      (i, e) => oe(i, "IED").localeCompare(oe(e, "IED"))
    );
  }
  firstUpdated() {
    this.requestUpdate();
  }
  get header() {
    const i = Y(this.element), e = Qo(this.element);
    return d`${i}${e ? d` &mdash; ${e}` : de}`;
  }
  renderDoiList() {
    const i = this.doiElements;
    return d`${i.map((e) => d`
        <doi-104-container
          .editCount=${this.editCount}
          .doc="${this.doc}"
          .element="${e}"
        >
        </doi-104-container>
      `)}`;
  }
  render() {
    return d`
      <action-pane .label="${this.header}">
        <mwc-icon slot="icon">developer_board</mwc-icon>
        <abbr slot="action" title="${u("protocol104.toggleChildElements")}">
          <mwc-icon-button-toggle
            id="toggleButton"
            on
            onIcon="keyboard_arrow_up"
            offIcon="keyboard_arrow_down"
            @click=${() => this.requestUpdate()}
          >
          </mwc-icon-button-toggle>
        </abbr>
        ${this.toggleButton?.on ? d`${this.renderDoiList()}` : de}
      </action-pane>
    `;
  }
};
$e.styles = U`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
lt([
  m()
], $e.prototype, "element", 2);
lt([
  L("#toggleButton")
], $e.prototype, "toggleButton", 2);
lt([
  m()
], $e.prototype, "doiElements", 1);
lt([
  m()
], $e.prototype, "header", 1);
$e = lt([
  O("ied-104-container")
], $e);
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
const yr = /* @__PURE__ */ new WeakMap(), vr = 2147483647, Sc = nt((...i) => (e) => {
  let t = yr.get(e);
  t === void 0 && (t = {
    lastRenderedIndex: vr,
    values: []
  }, yr.set(e, t));
  const r = t.values;
  let n = r.length;
  t.values = i;
  for (let o = 0; o < i.length && !(o > t.lastRenderedIndex); o++) {
    const a = i[o];
    if (Nt(a) || typeof a.then != "function") {
      e.setValue(a), t.lastRenderedIndex = o;
      break;
    }
    o < n && a === r[o] || (t.lastRenderedIndex = vr, n = 0, Promise.resolve(a).then((s) => {
      const c = t.values.indexOf(a);
      c > -1 && c < t.lastRenderedIndex && (t.lastRenderedIndex = c, e.setValue(s), e.commit());
    }));
  }
});
var wc = Object.defineProperty, xc = Object.getOwnPropertyDescriptor, ve = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? xc(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && wc(e, t, n), n;
};
const _c = d`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${u("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let le = class extends ae {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (i) => ({
      path: i,
      header: d`<h2>${"/" + i.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return sn(this.selection);
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
        for (const a of r) n = n[a];
        const o = Object.keys(n).map((a) => r.concat(a));
        return o.length === 0 ? [r] : o;
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
    return d`<filtered-list
      @selected=${(t) => this.select(t, i)}
      searchFieldLabel="${this.getTitle(i)}"
    >
      ${e.map(
      (t) => d`<mwc-list-item
            value="${t}"
            ?activated=${this.getPaths(i.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(i.concat(t)))}
            >${this.getDisplayString(t, i)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(i) {
    const t = this.getPaths(i).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: o, path: a } of t)
      (n || o.length > 0) && r.push(
        d`${ie(n)} ${this.renderDirectory(a, o)}`
      );
    return r.length === 0 ? d`` : d`<div class="column">${r}</div>`;
  }
  render() {
    const i = new Array(this.depth).fill(0).map((e, t) => this.renderColumn(t));
    return this.loaded = Promise.allSettled(i).then(), d`<div class="pane">
      ${i.map((e) => Sc(e, _c))}
    </div>`;
  }
};
le.styles = U`
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
ve([
  m({ type: Object })
], le.prototype, "selection", 2);
ve([
  m({ type: Boolean })
], le.prototype, "multi", 2);
ve([
  m({ type: Number })
], le.prototype, "depth", 1);
ve([
  m({ type: Array })
], le.prototype, "paths", 1);
ve([
  m({ type: Array })
], le.prototype, "path", 1);
ve([
  m({ attribute: !1 })
], le.prototype, "read", 2);
ve([
  m({ attribute: !1 })
], le.prototype, "loaded", 2);
ve([
  L("div")
], le.prototype, "container", 2);
le = ve([
  O("finder-list")
], le);
function kc(i) {
  return i.startsWith("IED:") ? i.replace(/^.*:/, "").trim() : i.startsWith("LN0:") ? "LLN0" : i.replace(/^.*>/, "").trim();
}
function Ac(i, e) {
  return async (t) => {
    const [r, n] = t[t.length - 1]?.split(": ", 2), o = an(i, r, n);
    return o ? {
      path: t,
      header: void 0,
      entries: e(o).map(
        (a) => `${a.tagName}: ${I(a)}`
      )
    } : { path: t, header: d`<p>${u("error")}</p>`, entries: [] };
  };
}
var Ec = Object.defineProperty, Cc = Object.getOwnPropertyDescriptor, xn = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Cc(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Ec(e, t, n), n;
};
let Et = class extends ae {
  render() {
    return d` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? d`<h4 class="header">${this.header}</h4>` : d``;
  }
  renderSeparator() {
    return d`<div role="separator"></div>`;
  }
};
Et.styles = U`
    div {
      height: 0px;
      margin: 10px 0px 10px 0px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-image: initial;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  `;
xn([
  m({
    type: String
  })
], Et.prototype, "header", 2);
Et = xn([
  O("wizard-divider")
], Et);
function Sr(i, e, t, r, n, o, a) {
  return a.create(
    i,
    e,
    t,
    r,
    n,
    a.daPaths,
    // If the TI Allows inverted and the Engineer selected it, true will be passed.
    a.inverted ? o : !1
  );
}
function wr(i, e, t, r, n, o) {
  return o.checkDaPaths && o.checkCreate ? o.checkCreate(
    i,
    e,
    t,
    r,
    n,
    o.checkDaPaths
  ) : [];
}
function St(i, e) {
  return i.shadowRoot?.querySelector(
    `mwc-switch[id="${e}"`
  )?.checked ?? !1;
}
function Nc(i, e, t) {
  return (r, n) => {
    n.dispatchEvent(Q());
    const o = ct(e) ?? "", a = $i[o], s = {
      actions: [],
      title: u("protocol104.values.addedAddress", {
        name: Y(e) ?? "Unknown",
        lnName: oe(i, "IED")
      })
    }, c = i.cloneNode(!0), l = z(r.find((g) => g.label === "monitorTi"))?.split(" (")[0] ?? "", h = St(n, "monitorInverted"), p = a.monitor[l];
    if (p && s.actions.push(
      ...Sr(
        i,
        c,
        e,
        n,
        l,
        h,
        p
      )
    ), St(n, "monitorCheck") && s.actions.push(
      ...wr(
        i,
        c,
        e,
        n,
        l,
        p
      )
    ), t) {
      const g = Di(i, e);
      if (g !== null && g !== "status-only") {
        const w = z(r.find((T) => T.label === "controlTi"))?.split(
          " ("
        )[0] ?? "", S = St(n, "controlInverted"), x = a.control[w];
        x && s.actions.push(
          ...Sr(
            i,
            c,
            e,
            n,
            w,
            S,
            x
          )
        ), St(n, "controlCheck") && s.actions.push(
          ...wr(
            i,
            c,
            e,
            n,
            w,
            x
          )
        );
      }
    }
    return s.actions.length > 0 ? [s] : (n.dispatchEvent(Q()), []);
  };
}
function xr(i) {
  let e = !0;
  return Object.values(i).forEach((t) => {
    t.checkDaPaths && t.checkCreate && (e = !1);
  }), e;
}
function Ic(i) {
  let e = !0;
  return Object.values(i).forEach((t) => {
    t.inverted === !0 && (e = !1);
  }), e;
}
function _r(i, e) {
  let t = !0;
  const r = e.split(" (")[0];
  return isNaN(+r) || (t = !i[r].inverted), t;
}
function Dc(i, e) {
  const t = ct(e) ?? "", r = t === "WYE" || t === "DEL", n = r ? "CMV" : t, o = $i[t], a = Object.keys(o.monitor), s = Object.keys(o.control);
  function c() {
    const l = Y(e) ?? "", h = i.closest("IED"), p = oe(i, "IED");
    function b(S) {
      const x = S.target.selected.value, C = S.target.parentElement.querySelector(
        'mwc-switch[id="monitorInverted"]'
      );
      C && (C.disabled = _r(
        o.monitor,
        x
      ));
    }
    function g(S, x) {
      const C = S.target.selected.value, T = x ? "controlTi" : "monitorTi", F = S.target.parentElement.querySelector(
        `wizard-select[label="${T}"]`
      );
      F.maybeValue = x ? C === "30" ? "58" : "62" : C === "58" ? "30" : "35";
    }
    const w = [
      d`<wizard-textfield
        label="IED"
        .maybeValue="${Y(h)}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      d`<mwc-textarea
        label="LN(0)"
        value="${p}"
        rows="2"
        cols="40"
        readonly
        disabled
      >
      </mwc-textarea>`,
      d`<wizard-textfield
        label="DO"
        .maybeValue="${l}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      d`<wizard-textfield
        label="Common Data Class"
        .maybeValue="${n}"
        .helper="${r ? u("protocol104.mappedCmv", { cdc: t }) : ""}"
        .helperPersistent="${r}"
        disabled
        readonly
      >
      </wizard-textfield>`
    ];
    if (a.length > 0) {
      w.push(d`<wizard-divider></wizard-divider>`);
      let S = !0;
      a.length > 1 ? w.push(
        d`<wizard-select
            label="monitorTi"
            helper="${u("protocol104.wizard.monitorTiHelper")}"
            fixedMenuPosition
            required
            @selected=${(x) => {
          b(x), n === "ENC" && g(x, !0);
        }}
          >
            ${a.map(
          (x) => d` <mwc-list-item value="${x}">
                  <span
                    >${x + " (" + Qe(x) + ")"}</span
                  >
                </mwc-list-item>`
        )}
          </wizard-select>`
      ) : (S = _r(
        o.monitor,
        a[0]
      ), w.push(
        d`<wizard-textfield
            label="monitorTi"
            .maybeValue=${a[0] ? a[0] + " (" + Qe(a[0]) + ")" : ""}
            disabled
          >
          </wizard-textfield>`
      )), w.push(
        d`<mwc-formfield
          label="${u("protocol104.wizard.monitorInverted")}"
        >
          <mwc-switch
            id="monitorInverted"
            .disabled="${S}"
          >
          </mwc-switch>
        </mwc-formfield>`
      ), w.push(
        d`<mwc-formfield label="${u("protocol104.wizard.monitorCheck")}">
          <mwc-switch
            id="monitorCheck"
            .disabled="${xr(o.monitor)}"
          >
          </mwc-switch>
        </mwc-formfield>`
      );
    }
    if (s.length > 0) {
      w.push(d` <wizard-divider></wizard-divider>`);
      const S = Di(i, e);
      S !== null && w.push(d` <wizard-textfield
          label="ctlModel"
          .maybeValue=${S}
          disabled
          readonly
        >
        </wizard-textfield>`), S !== null && S !== "status-only" && (s.length > 1 ? w.push(
        d` <wizard-select
              label="controlTi"
              helper="${u("protocol104.wizard.controlTiHelper")}"
              fixedMenuPosition
              required
              @selected=${(x) => {
          n === "ENC" && g(x, !1);
        }}
            >
              ${s.map(
          (x) => d` <mwc-list-item value="${x}">
                    <span
                      >${x + " (" + Qe(x) + ")"}</span
                    >
                  </mwc-list-item>`
        )}
            </wizard-select>`
      ) : w.push(
        d` <wizard-textfield
              label="controlTi"
              .maybeValue=${s[0] ? s[0] + " (" + Qe(s[0]) + ")" : ""}
              disabled
            >
            </wizard-textfield>`
      ), w.push(
        d` <mwc-formfield
            label="${u("protocol104.wizard.controlInverted")}"
          >
            <mwc-switch
              id="controlInverted"
              .disabled="${Ic(o.control)}"
            >
            </mwc-switch>
          </mwc-formfield>`
      ), w.push(
        d` <mwc-formfield
            label="${u("protocol104.wizard.controlCheck")}"
          >
            <mwc-switch
              id="controlCheck"
              .disabled="${xr(o.control)}"
            >
            </mwc-switch>
          </mwc-formfield>`
      ));
    }
    return w;
  }
  return [
    {
      title: u("wizard.title.add", { tagName: "Address" }),
      primary: {
        icon: "add",
        label: u("add"),
        action: Nc(
          i,
          e,
          s.length > 0
        )
      },
      content: c()
    }
  ];
}
function _n(i, e) {
  const t = ct(e) ?? "";
  if (!cc.includes(t))
    return !1;
  const r = Y(e);
  return i.querySelectorAll(
    `:scope > DOI[name="${r}"] DAI > Private[type="${ye}"] > Address`
  ).length <= 0;
}
function kr(i) {
  let e;
  return ["LN0", "LN"].includes(i.tagName) ? e = [i] : e = Array.from(i.querySelectorAll("LN0, LN")), e.filter(
    (t) => (
      // Check if there are available DO Elements that aren't initiated and supported by 104 protocol
      vs(t).filter(
        (r) => _n(t, r)
      ).length > 0
    )
  ).length > 0;
}
function Tc(i) {
  let e;
  if (["LN0", "LN"].includes(i.tagName)) {
    const t = i.getAttribute("lnType") ?? "";
    e = Array.from(
      i.ownerDocument.querySelectorAll(
        `:root > DataTypeTemplates > LNodeType[id="${t}"] > DO`
      )
    ).filter((r) => _n(i, r)).sort((r, n) => Le(`${I(r)}`, `${I(n)}`));
  } else i.tagName === "AccessPoint" ? e = Array.from(i.querySelectorAll("LDevice, :scope > LN")).filter((t) => kr(t)).sort((t, r) => Le(`${I(t)}`, `${I(r)}`)) : e = Array.from(i.children).filter(
    (t) => ["IED", "AccessPoint", "LN0", "LN"].includes(t.tagName)
  ).filter((t) => kr(t)).sort((t, r) => Le(`${I(t)}`, `${I(r)}`));
  return e;
}
function Lc(i) {
  return (e, t) => {
    const n = t.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (n.length === 0) return [];
    const o = Ar(i, n, ["DO"]), a = Ar(i, n, ["LN0", "LN"]);
    return a && o && t.dispatchEvent(
      Be(Dc(a, o))
    ), [];
  };
}
function Ar(i, e, t) {
  const [r, n] = e.pop().split(": ");
  return t.includes(r) ? an(i, r, n) : null;
}
function Pc(i) {
  function e(t) {
    return d` <finder-list
      path="${JSON.stringify(["SCL: "])}"
      .read=${Ac(t, Tc)}
      .getDisplayString=${kc}
      .getTitle=${(r) => r[r.length - 1]}
    >
    </finder-list>`;
  }
  return [
    {
      title: u("wizard.title.select", { tagName: "DO(I)" }),
      primary: {
        icon: "",
        label: u("next"),
        action: Lc(i)
      },
      content: [e(i)]
    }
  ];
}
var $c = Object.defineProperty, Rc = Object.getOwnPropertyDescriptor, kn = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Rc(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && $c(e, t, n), n;
};
let Ct = class extends Ie {
  get iedElements() {
    return Array.from(this.doc.querySelectorAll("IED")).filter(
      (i) => i.querySelectorAll(
        `DAI > Private[type="${ye}"] > Address`
      ).length > 0
    ).sort((i, e) => Le(i, e));
  }
  /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
  openCreateAddressWizard() {
    this.dispatchEvent(Q(Pc(this.doc)));
  }
  renderAddButton() {
    return d`<h1>
      <mwc-fab
        extended
        icon="add"
        label="${u("protocol104.wizard.title.addAddress")}"
        @click=${() => this.openCreateAddressWizard()}
      >
      </mwc-fab>
    </h1>`;
  }
  render() {
    const i = this.iedElements;
    return i.length > 0 ? d`
        ${i.map((e) => d`<ied-104-container
            .editCount=${this.editCount}
            .doc="${this.doc}"
            .element="${e}"
          ></ied-104-container>`)}
        ${this.renderAddButton()}
      ` : d` <h1>
        <span style="color: var(--base1)"
          >${u("protocol104.values.missing")}</span
        >
      </h1>
      ${this.renderAddButton()}`;
  }
};
Ct.styles = U`
    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

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
  `;
kn([
  m()
], Ct.prototype, "iedElements", 1);
Ct = kn([
  O("values-104-container")
], Ct);
const zc = {
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
}, Oc = {
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
}, Er = { en: Oc, de: zc };
async function Vc(i) {
  return Object.keys(Er).includes(i) ? Er[i] : {};
}
mo({ loader: Vc, empty: (i) => i });
const An = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", An);
go(An);
var Mc = Object.defineProperty, ut = (i, e, t, r) => {
  for (var n = void 0, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (n = a(e, t, n) || n);
  return n && Mc(e, t, n), n;
};
let Wt = Fe.VALUES;
class pt extends ae {
  constructor() {
    super(), this.editCount = -1, this.addEventListener(un, (e) => {
      Wt = e.detail.view, this.requestUpdate();
    });
  }
  firstUpdated() {
    Wt == Fe.VALUES ? this.byValuesRadio.setAttribute("checked", "") : this.byNetworkRadio.setAttribute("checked", "");
  }
  render() {
    return d` <section>
      <div>
        <mwc-formfield label="${u("protocol104.view.valuesView")}">
          <mwc-radio
            id="byValuesRadio"
            name="view"
            value="values"
            @checked=${() => this.listDiv.dispatchEvent(hr(Fe.VALUES))}
          ></mwc-radio>
        </mwc-formfield>
        <mwc-formfield label="${u("protocol104.view.networkView")}">
          <mwc-radio
            id="byNetworkRadio"
            name="view"
            value="network"
            @checked=${() => this.listDiv.dispatchEvent(hr(Fe.NETWORK))}
          ></mwc-radio>
        </mwc-formfield>
        <div id="containers">
          ${Wt == Fe.VALUES ? d`<values-104-container
                .editCount=${this.editCount}
                .doc=${this.doc}
              ></values-104-container>` : d`<network-104-container
                .editCount=${this.editCount}
                .doc=${this.doc}
              ></network-104-container>`}
        </div>
      </div>
    </section>`;
  }
  static {
    this.styles = U`
    :host {
      width: 100vw;
    }

    section {
      padding: 8px 12px 16px;
    }
  `;
  }
}
ut([
  m()
], pt.prototype, "doc");
ut([
  m({ type: Number })
], pt.prototype, "editCount");
ut([
  L("#byValuesRadio")
], pt.prototype, "byValuesRadio");
ut([
  L("#byNetworkRadio")
], pt.prototype, "byNetworkRadio");
ut([
  L("div#containers")
], pt.prototype, "listDiv");
export {
  pt as default
};
