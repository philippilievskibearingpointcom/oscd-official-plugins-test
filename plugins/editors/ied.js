import "@material/mwc-icon-button";
import "@material/mwc-dialog";
import "@material/mwc-formfield";
import { TextField as ma } from "@material/mwc-textfield";
import { List as ha } from "@material/mwc-list";
import "@material/mwc-icon";
import { Select as fa } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-icon-button-toggle";
import "@material/mwc-button";
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
const Zi = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, ba = (e, t, i = null, r = null) => {
  for (; t !== i; ) {
    const n = t.nextSibling;
    e.insertBefore(t, r), t = n;
  }
}, xi = (e, t, i = null) => {
  for (; t !== i; ) {
    const r = t.nextSibling;
    e.removeChild(t), t = r;
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
const Ae = `{{lit-${String(Math.random()).slice(2)}}}`, Tr = `<!--${Ae}-->`, Xi = new RegExp(`${Ae}|${Tr}`), ot = "$lit$";
class Lr {
  constructor(t, i) {
    this.parts = [], this.element = i;
    const r = [], n = [], a = document.createTreeWalker(i.content, 133, null, !1);
    let o = 0, s = -1, d = 0;
    const { strings: u, values: { length: m } } = t;
    for (; d < m; ) {
      const h = a.nextNode();
      if (h === null) {
        a.currentNode = n.pop();
        continue;
      }
      if (s++, h.nodeType === 1) {
        if (h.hasAttributes()) {
          const g = h.attributes, { length: v } = g;
          let w = 0;
          for (let C = 0; C < v; C++)
            Qi(g[C].name, ot) && w++;
          for (; w-- > 0; ) {
            const C = u[d], _ = Yt.exec(C)[2], A = _.toLowerCase() + ot, q = h.getAttribute(A);
            h.removeAttribute(A);
            const U = q.split(Xi);
            this.parts.push({ type: "attribute", index: s, name: _, strings: U }), d += U.length - 1;
          }
        }
        h.tagName === "TEMPLATE" && (n.push(h), a.currentNode = h.content);
      } else if (h.nodeType === 3) {
        const g = h.data;
        if (g.indexOf(Ae) >= 0) {
          const v = h.parentNode, w = g.split(Xi), C = w.length - 1;
          for (let _ = 0; _ < C; _++) {
            let A, q = w[_];
            if (q === "")
              A = Te();
            else {
              const U = Yt.exec(q);
              U !== null && Qi(U[2], ot) && (q = q.slice(0, U.index) + U[1] + U[2].slice(0, -ot.length) + U[3]), A = document.createTextNode(q);
            }
            v.insertBefore(A, h), this.parts.push({ type: "node", index: ++s });
          }
          w[C] === "" ? (v.insertBefore(Te(), h), r.push(h)) : h.data = w[C], d += C;
        }
      } else if (h.nodeType === 8)
        if (h.data === Ae) {
          const g = h.parentNode;
          (h.previousSibling === null || s === o) && (s++, g.insertBefore(Te(), h)), o = s, this.parts.push({ type: "node", index: s }), h.nextSibling === null ? h.data = "" : (r.push(h), s--), d++;
        } else {
          let g = -1;
          for (; (g = h.data.indexOf(Ae, g + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), d++;
        }
    }
    for (const h of r)
      h.parentNode.removeChild(h);
  }
}
const Qi = (e, t) => {
  const i = e.length - t.length;
  return i >= 0 && e.slice(i) === t;
}, zr = (e) => e.index !== -1, Te = () => document.createComment(""), Yt = (
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
const wi = 133;
function Vr(e, t) {
  const { element: { content: i }, parts: r } = e, n = document.createTreeWalker(i, wi, null, !1);
  let a = lt(r), o = r[a], s = -1, d = 0;
  const u = [];
  let m = null;
  for (; n.nextNode(); ) {
    s++;
    const h = n.currentNode;
    for (h.previousSibling === m && (m = null), t.has(h) && (u.push(h), m === null && (m = h)), m !== null && d++; o !== void 0 && o.index === s; )
      o.index = m !== null ? -1 : o.index - d, a = lt(r, a), o = r[a];
  }
  u.forEach((h) => h.parentNode.removeChild(h));
}
const ga = (e) => {
  let t = e.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(e, wi, null, !1);
  for (; i.nextNode(); )
    t++;
  return t;
}, lt = (e, t = -1) => {
  for (let i = t + 1; i < e.length; i++) {
    const r = e[i];
    if (zr(r))
      return i;
  }
  return -1;
};
function ya(e, t, i = null) {
  const { element: { content: r }, parts: n } = e;
  if (i == null) {
    r.appendChild(t);
    return;
  }
  const a = document.createTreeWalker(r, wi, null, !1);
  let o = lt(n), s = 0, d = -1;
  for (; a.nextNode(); )
    for (d++, a.currentNode === i && (s = ga(t), i.parentNode.insertBefore(t, i)); o !== -1 && n[o].index === d; ) {
      if (s > 0) {
        for (; o !== -1; )
          n[o].index += s, o = lt(n, o);
        return;
      }
      o = lt(n, o);
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
const Pr = /* @__PURE__ */ new WeakMap(), Pt = (e) => (...t) => {
  const i = e(...t);
  return Pr.set(i, !0), i;
}, dt = (e) => typeof e == "function" && Pr.has(e);
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
const ge = {}, O = {};
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
class ei {
  constructor(t, i, r) {
    this.__parts = [], this.template = t, this.processor = i, this.options = r;
  }
  update(t) {
    let i = 0;
    for (const r of this.__parts)
      r !== void 0 && r.setValue(t[i]), i++;
    for (const r of this.__parts)
      r !== void 0 && r.commit();
  }
  _clone() {
    const t = Zi ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(t, 133, null, !1);
    let a = 0, o = 0, s, d = n.nextNode();
    for (; a < r.length; ) {
      if (s = r[a], !zr(s)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; o < s.index; )
        o++, d.nodeName === "TEMPLATE" && (i.push(d), n.currentNode = d.content), (d = n.nextNode()) === null && (n.currentNode = i.pop(), d = n.nextNode());
      if (s.type === "node") {
        const u = this.processor.handleTextExpression(this.options);
        u.insertAfterNode(d.previousSibling), this.__parts.push(u);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(d, s.name, s.strings, this.options));
      a++;
    }
    return Zi && (document.adoptNode(t), customElements.upgrade(t)), t;
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
const Ji = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (e) => e }), va = ` ${Ae} `;
class Ai {
  constructor(t, i, r, n) {
    this.strings = t, this.values = i, this.type = r, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const t = this.strings.length - 1;
    let i = "", r = !1;
    for (let n = 0; n < t; n++) {
      const a = this.strings[n], o = a.lastIndexOf("<!--");
      r = (o > -1 || r) && a.indexOf("-->", o + 1) === -1;
      const s = Yt.exec(a);
      s === null ? i += a + (r ? va : Tr) : i += a.substr(0, s.index) + s[1] + s[2] + ot + s[3] + Ae;
    }
    return i += this.strings[t], i;
  }
  getTemplateElement() {
    const t = document.createElement("template");
    let i = this.getHTML();
    return Ji !== void 0 && (i = Ji.createHTML(i)), t.innerHTML = i, t;
  }
}
class Sa extends Ai {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const t = super.getTemplateElement(), i = t.content, r = i.firstChild;
    return i.removeChild(r), ba(i, r.firstChild), t;
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
const Rt = (e) => e === null || !(typeof e == "object" || typeof e == "function"), ti = (e) => Array.isArray(e) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(e && e[Symbol.iterator]);
class Rr {
  constructor(t, i, r) {
    this.dirty = !0, this.element = t, this.name = i, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new it(this);
  }
  _getValue() {
    const t = this.strings, i = t.length - 1, r = this.parts;
    if (i === 1 && t[0] === "" && t[1] === "") {
      const a = r[0].value;
      if (typeof a == "symbol")
        return String(a);
      if (typeof a == "string" || !ti(a))
        return a;
    }
    let n = "";
    for (let a = 0; a < i; a++) {
      n += t[a];
      const o = r[a];
      if (o !== void 0) {
        const s = o.value;
        if (Rt(s) || !ti(s))
          n += typeof s == "string" ? s : String(s);
        else
          for (const d of s)
            n += typeof d == "string" ? d : String(d);
      }
    }
    return n += t[i], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class it {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== ge && (!Rt(t) || t !== this.value) && (this.value = t, dt(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; dt(this.value); ) {
      const t = this.value;
      this.value = ge, t(this);
    }
    this.value !== ge && this.committer.commit();
  }
}
class bt {
  constructor(t) {
    this.value = void 0, this.__pendingValue = void 0, this.options = t;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(t) {
    this.startNode = t.appendChild(Te()), this.endNode = t.appendChild(Te());
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
    t.__insert(this.startNode = Te()), t.__insert(this.endNode = Te());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(t) {
    t.__insert(this.startNode = Te()), this.endNode = t.endNode, t.endNode = this.startNode;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; dt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = ge, i(this);
    }
    const t = this.__pendingValue;
    t !== ge && (Rt(t) ? t !== this.value && this.__commitText(t) : t instanceof Ai ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : ti(t) ? this.__commitIterable(t) : t === O ? (this.value = O, this.clear()) : this.__commitText(t));
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
    const r = typeof t == "string" ? t : String(t);
    i === this.endNode.previousSibling && i.nodeType === 3 ? i.data = r : this.__commitNode(document.createTextNode(r)), this.value = t;
  }
  __commitTemplateResult(t) {
    const i = this.options.templateFactory(t);
    if (this.value instanceof ei && this.value.template === i)
      this.value.update(t.values);
    else {
      const r = new ei(i, t.processor, this.options), n = r._clone();
      r.update(t.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(t) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const a of t)
      n = i[r], n === void 0 && (n = new bt(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(a), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(t = this.startNode) {
    xi(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
class xa {
  constructor(t, i, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = t, this.name = i, this.strings = r;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; dt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = ge, i(this);
    }
    if (this.__pendingValue === ge)
      return;
    const t = !!this.__pendingValue;
    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = ge;
  }
}
class wa extends Rr {
  constructor(t, i, r) {
    super(t, i, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new Ci(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Ci extends it {
}
let Or = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Or = !0, !1;
      }
    };
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch {
  }
})();
class Aa {
  constructor(t, i, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = i, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; dt(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = ge, a(this);
    }
    if (this.__pendingValue === ge)
      return;
    const t = this.__pendingValue, i = this.value, r = t == null || i != null && (t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive), n = t != null && (i == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Ca(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = ge;
  }
  handleEvent(t) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
  }
}
const Ca = (e) => e && (Or ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
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
function Ea(e) {
  let t = ut.get(e.type);
  t === void 0 && (t = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ut.set(e.type, t));
  let i = t.stringsArray.get(e.strings);
  if (i !== void 0)
    return i;
  const r = e.strings.join(Ae);
  return i = t.keyString.get(r), i === void 0 && (i = new Lr(e, e.getTemplateElement()), t.keyString.set(r, i)), t.stringsArray.set(e.strings, i), i;
}
const ut = /* @__PURE__ */ new Map();
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
const Qe = /* @__PURE__ */ new WeakMap(), Ei = (e, t, i) => {
  let r = Qe.get(t);
  r === void 0 && (xi(t, t.firstChild), Qe.set(t, r = new bt(Object.assign({ templateFactory: Ea }, i))), r.appendInto(t)), r.setValue(e), r.commit();
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
class ka {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(t, i, r, n) {
    const a = i[0];
    return a === "." ? new wa(t, i.slice(1), r).parts : a === "@" ? [new Aa(t, i.slice(1), n.eventContext)] : a === "?" ? [new xa(t, i.slice(1), r)] : new Rr(t, i, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(t) {
    return new bt(t);
  }
}
const Fr = new ka();
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
const c = (e, ...t) => new Ai(e, t, "html", Fr), z = (e, ...t) => new Sa(e, t, "svg", Fr);
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
const qr = (e, t) => `${e}--${t}`;
let $t = !0;
typeof window.ShadyCSS > "u" ? $t = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), $t = !1);
const _a = (e) => (t) => {
  const i = qr(t.type, e);
  let r = ut.get(i);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ut.set(i, r));
  let n = r.stringsArray.get(t.strings);
  if (n !== void 0)
    return n;
  const a = t.strings.join(Ae);
  if (n = r.keyString.get(a), n === void 0) {
    const o = t.getTemplateElement();
    $t && window.ShadyCSS.prepareTemplateDom(o, e), n = new Lr(t, o), r.keyString.set(a, n);
  }
  return r.stringsArray.set(t.strings, n), n;
}, Da = ["html", "svg"], Ia = (e) => {
  Da.forEach((t) => {
    const i = ut.get(qr(t, e));
    i !== void 0 && i.keyString.forEach((r) => {
      const { element: { content: n } } = r, a = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((o) => {
        a.add(o);
      }), Vr(r, a);
    });
  });
}, Mr = /* @__PURE__ */ new Set(), Na = (e, t, i) => {
  Mr.add(e);
  const r = i ? i.element : document.createElement("template"), n = t.querySelectorAll("style"), { length: a } = n;
  if (a === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, e);
    return;
  }
  const o = document.createElement("style");
  for (let u = 0; u < a; u++) {
    const m = n[u];
    m.parentNode.removeChild(m), o.textContent += m.textContent;
  }
  Ia(e);
  const s = r.content;
  i ? ya(i, o, s.firstChild) : s.insertBefore(o, s.firstChild), window.ShadyCSS.prepareTemplateStyles(r, e);
  const d = s.querySelector("style");
  if (window.ShadyCSS.nativeShadow && d !== null)
    t.insertBefore(d.cloneNode(!0), t.firstChild);
  else if (i) {
    s.insertBefore(o, s.firstChild);
    const u = /* @__PURE__ */ new Set();
    u.add(o), Vr(i, u);
  }
}, $a = (e, t, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = i.scopeName, n = Qe.has(t), a = $t && t.nodeType === 11 && !!t.host, o = a && !Mr.has(r), s = o ? document.createDocumentFragment() : t;
  if (Ei(e, s, Object.assign({ templateFactory: _a(r) }, i)), o) {
    const d = Qe.get(s);
    Qe.delete(s);
    const u = d.value instanceof ei ? d.value.template : void 0;
    Na(r, s, u), xi(t, t.firstChild), t.appendChild(s), Qe.set(t, d);
  }
  !n && a && window.ShadyCSS.styleElement(t.host);
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
var Hr;
window.JSCompiler_renameProperty = (e, t) => e;
const ii = {
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
}, Br = (e, t) => t !== e && (t === t || e === e), Wt = {
  attribute: !0,
  type: String,
  converter: ii,
  reflect: !1,
  hasChanged: Br
}, Ut = 1, Yi = 4, er = 8, tr = 16, ri = "finalized";
class Gr extends HTMLElement {
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
    return this._classProperties.forEach((i, r) => {
      const n = this._attributeNameForProperty(r, i);
      n !== void 0 && (this._attributeToPropertyMap.set(n, r), t.push(n));
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
      t !== void 0 && t.forEach((i, r) => this._classProperties.set(r, i));
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
  static createProperty(t, i = Wt) {
    if (this._ensureClassProperties(), this._classProperties.set(t, i), i.noAccessor || this.prototype.hasOwnProperty(t))
      return;
    const r = typeof t == "symbol" ? Symbol() : `__${t}`, n = this.getPropertyDescriptor(t, r, i);
    n !== void 0 && Object.defineProperty(this.prototype, t, n);
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
  static getPropertyDescriptor(t, i, r) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[i];
      },
      set(n) {
        const a = this[t];
        this[i] = n, this.requestUpdateInternal(t, a, r);
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
    return this._classProperties && this._classProperties.get(t) || Wt;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (t.hasOwnProperty(ri) || t.finalize(), this[ri] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _attributeNameForProperty(t, i) {
    const r = i.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(t, i, r = Br) {
    return r(t, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(t, i) {
    const r = i.type, n = i.converter || ii, a = typeof n == "function" ? n : n.fromAttribute;
    return a ? a(t, r) : t;
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
    const r = i.type, n = i.converter;
    return (n && n.toAttribute || ii.toAttribute)(t, r);
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
        const r = this[i];
        delete this[i], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(i, r);
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
  attributeChangedCallback(t, i, r) {
    i !== r && this._attributeToProperty(t, r);
  }
  _propertyToAttribute(t, i, r = Wt) {
    const n = this.constructor, a = n._attributeNameForProperty(t, r);
    if (a !== void 0) {
      const o = n._propertyValueToAttribute(i, r);
      if (o === void 0)
        return;
      this._updateState = this._updateState | er, o == null ? this.removeAttribute(a) : this.setAttribute(a, o), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(t, i) {
    if (this._updateState & er)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(t);
    if (n !== void 0) {
      const a = r.getPropertyOptions(n);
      this._updateState = this._updateState | tr, this[n] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(i, a), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(t, i, r) {
    let n = !0;
    if (t !== void 0) {
      const a = this.constructor;
      r = r || a.getPropertyOptions(t), a._valueHasChanged(this[t], i, r.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, i), r.reflect === !0 && !(this._updateState & tr) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(t, r))) : n = !1;
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
  requestUpdate(t, i) {
    return this.requestUpdateInternal(t, i), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | Yi;
    try {
      await this._updatePromise;
    } catch {
    }
    const t = this.performUpdate();
    return t != null && await t, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Yi;
  }
  get hasUpdated() {
    return this._updateState & Ut;
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
    } catch (r) {
      throw t = !1, this._markUpdated(), r;
    }
    t && (this._updateState & Ut || (this._updateState = this._updateState | Ut, this.firstUpdated(i)), this.updated(i));
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
Hr = ri;
Gr[Hr] = !0;
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
const Ta = (e, t) => (window.customElements.define(e, t), t), La = (e, t) => {
  const { kind: i, elements: r } = t;
  return {
    kind: i,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(e, n);
    }
  };
}, G = (e) => (t) => typeof t == "function" ? Ta(e, t) : La(e, t), za = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), { finisher(i) {
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
}, Va = (e, t, i) => {
  t.constructor.createProperty(i, e);
};
function b(e) {
  return (t, i) => i !== void 0 ? Va(e, t, i) : za(e, t);
}
function Pa(e) {
  return b({ attribute: !1, hasChanged: void 0 });
}
const E = (e) => Pa();
function F(e, t) {
  return (i, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? _i(n, i, r) : Di(n, i);
  };
}
function ki(e) {
  return (t, i) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? _i(r, t, i) : Di(r, t);
  };
}
const _i = (e, t, i) => {
  Object.defineProperty(t, i, e);
}, Di = (e, t) => ({
  kind: "method",
  placement: "prototype",
  key: t.key,
  descriptor: e
}), Ra = (e, t) => Object.assign(Object.assign({}, t), { finisher(i) {
  Object.assign(i.prototype[t.key], e);
} }), Oa = (
  // tslint:disable-next-line:no-any legacy decorator
  (e, t, i) => {
    Object.assign(t[i], e);
  }
);
function Wr(e) {
  return (t, i) => i !== void 0 ? Oa(e, t, i) : Ra(e, t);
}
const ir = Element.prototype, Fa = ir.msMatchesSelector || ir.webkitMatchesSelector;
function Ur(e = "", t = !1, i = "") {
  return (r, n) => {
    const a = {
      get() {
        const o = `slot${e ? `[name=${e}]` : ":not([name])"}`, s = this.renderRoot.querySelector(o);
        let d = s && s.assignedNodes({ flatten: t });
        return d && i && (d = d.filter((u) => u.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (u.matches ? u.matches(i) : Fa.call(u, i)))), d;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? _i(a, r, n) : Di(a, r);
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
const ni = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ii = Symbol();
class Ni {
  constructor(t, i) {
    if (i !== Ii)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (ni ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const $i = (e) => new Ni(String(e), Ii), qa = (e) => {
  if (e instanceof Ni)
    return e.cssText;
  if (typeof e == "number")
    return e;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, ne = (e, ...t) => {
  const i = t.reduce((r, n, a) => r + qa(n) + e[a + 1], e[0]);
  return new Ni(i, Ii);
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
const rr = {};
class ve extends Gr {
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
      const i = (a, o) => a.reduceRight((s, d) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(d) ? i(d, s) : (s.add(d), s)
      ), o), r = i(t, /* @__PURE__ */ new Set()), n = [];
      r.forEach((a) => n.unshift(a)), this._styles = n;
    } else
      this._styles = t === void 0 ? [] : [t];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !ni) {
        const r = Array.prototype.slice.call(i.cssRules).reduce((n, a) => n + a.cssText, "");
        return $i(r);
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
    t.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((i) => i.cssText), this.localName) : ni ? this.renderRoot.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(t), i !== rr && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return rr;
  }
}
ve.finalized = !0;
ve.render = $a;
ve.shadowRootOptions = { mode: "open" };
const Ma = 1e3 * 60, ai = "langChanged";
function Ha(e, t, i) {
  return Object.entries(oi(t || {})).reduce((r, [n, a]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(oi(a))), e);
}
function Ba(e, t) {
  const i = e.split(".");
  let r = t.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function oi(e) {
  return typeof e == "function" ? e() : e;
}
const Ga = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: Ba,
  interpolate: Ha,
  translationCache: {}
});
let pt = Ga();
function Wa(e) {
  return pt = Object.assign(Object.assign({}, pt), e);
}
function Ua(e) {
  window.dispatchEvent(new CustomEvent(ai, { detail: e }));
}
function ja(e, t, i = pt) {
  Ua({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function Ka(e, t) {
  const i = (r) => e(r.detail);
  return window.addEventListener(ai, i, t), () => window.removeEventListener(ai, i);
}
async function Za(e, t = pt) {
  const i = await t.loader(e, t);
  t.translationCache = {}, ja(e, i, t);
}
function l(e, t, i = pt) {
  let r = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? oi(t) : null, t != null ? i.interpolate(r, t, i) : r;
}
function jr(e) {
  return e instanceof bt ? e.startNode.isConnected : e instanceof it ? e.committer.element.isConnected : e.element.isConnected;
}
function Xa(e) {
  for (const [t] of e)
    jr(t) || e.delete(t);
}
function Qa(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Ja(e, t) {
  setInterval(() => Qa(() => Xa(e)), t);
}
const Kr = /* @__PURE__ */ new Map();
function Ya() {
  Ka((e) => {
    for (const [t, i] of Kr)
      jr(t) && eo(t, i, e);
  });
}
Ya();
Ja(Kr, Ma);
function eo(e, t, i) {
  const r = t(i);
  e.value !== r && (e.setValue(r), e.commit());
}
var si = function(e, t) {
  return si = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, si(e, t);
};
function Zr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  si(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var He = function() {
  return He = Object.assign || function(t) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, He.apply(this, arguments);
};
function y(e, t, i, r) {
  var n = arguments.length, a = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, i, a) : o(t, i)) || a);
  return n > 3 && a && Object.defineProperty(t, i, a), a;
}
function At(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], r = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
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
function to(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const io = (e) => e.nodeType === Node.ELEMENT_NODE;
function ro(e) {
  return {
    addClass: (t) => {
      e.classList.add(t);
    },
    removeClass: (t) => {
      e.classList.remove(t);
    },
    hasClass: (t) => e.classList.contains(t)
  };
}
const Xr = () => {
}, no = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Xr, no);
document.removeEventListener("x", Xr);
const Qr = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, ao = (e) => {
  const t = Qr();
  if (!t.length)
    return !1;
  const i = t[t.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const a = (o) => {
    n = o.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", a), n.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ti extends ve {
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
var Li = (
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
var oo = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, so = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, nr = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function lo(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var r = t.x, n = t.y, a = r + i.left, o = n + i.top, s, d;
  if (e.type === "touchstart") {
    var u = e;
    s = u.changedTouches[0].pageX - a, d = u.changedTouches[0].pageY - o;
  } else {
    var m = e;
    s = m.pageX - a, d = m.pageY - o;
  }
  return { x: s, y: d };
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
var ar = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], or = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ct = [], co = (
  /** @class */
  function(e) {
    Zr(t, e);
    function t(i) {
      var r = e.call(this, He(He({}, t.defaultAdapter), i)) || this;
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
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return oo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return so;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return nr;
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
      var i = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = t.cssClasses, a = n.ROOT, o = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(o), i.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var r = t.cssClasses, n = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(a), i.removeCssVars();
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
      var r = t.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
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
      var r, n;
      if (i) {
        try {
          for (var a = At(ar), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, t.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = At(or), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = At(ar), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = At(or), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var i = this, r = t.strings, n = Object.keys(r);
      n.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[a], null);
      });
    }, t.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var a = this.previousActivationEvent, o = a && i !== void 0 && a.type !== i.type;
          if (!o) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var s = i !== void 0 && Ct.length > 0 && Ct.some(function(d) {
              return r.adapter.containsEventTarget(d);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Ct.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ct = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, r = t.strings, n = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = t.cssClasses, s = o.FG_DEACTIVATION, d = o.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), v = g.startPoint, w = g.endPoint;
        m = v.x + "px, " + v.y + "px", h = w.x + "px, " + w.y + "px";
      }
      this.adapter.updateCssVariable(n, m), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, a;
      n ? a = lo(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var i = this, r = t.cssClasses.FG_DEACTIVATION, n = this.activationState, a = n.hasDeactivationUXRun, o = n.isActivated, s = a || !o;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, nr.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var i = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var i = this, r = this.activationState;
      if (r.isActivated) {
        var n = He({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(n), i.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(i) {
      var r = i.wasActivatedByPointer, n = i.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var o = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return o + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var a = Math.floor(r * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, a = i.VAR_TOP, o = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(Li)
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
class uo {
  constructor(t) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = t;
    const i = (t.getAttribute("class") || "").split(/\s+/);
    for (const r of i)
      this.classes.add(r);
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
const sr = /* @__PURE__ */ new WeakMap(), We = Pt((e) => (t) => {
  if (!(t instanceof it) || t instanceof Ci || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: r } = i;
  let n = sr.get(t);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), sr.set(t, n = /* @__PURE__ */ new Set()));
  const a = r.classList || new uo(r);
  n.forEach((o) => {
    o in e || (a.remove(o), n.delete(o));
  });
  for (const o in e) {
    const s = e[o];
    s != n.has(o) && (s ? (a.add(o), n.add(o)) : (a.remove(o), n.delete(o)));
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
const lr = /* @__PURE__ */ new WeakMap(), po = Pt((e) => (t) => {
  if (!(t instanceof it) || t instanceof Ci || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: r } = i.element;
  let n = lr.get(t);
  n === void 0 && (r.cssText = i.strings.join(" "), lr.set(t, n = /* @__PURE__ */ new Set())), n.forEach((a) => {
    a in e || (n.delete(a), a.indexOf("-") === -1 ? r[a] = null : r.removeProperty(a));
  });
  for (const a in e)
    n.add(a), a.indexOf("-") === -1 ? r[a] = e[a] : r.setProperty(a, e[a]);
});
class K extends Ti {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = co;
  }
  get isActive() {
    return to(this.parentElement || this, ":active");
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
    const t = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), r = {
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
    return c`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${We(r)}"
          style="${po({
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
  F(".mdc-ripple-surface")
], K.prototype, "mdcRoot", void 0);
y([
  b({ type: Boolean })
], K.prototype, "primary", void 0);
y([
  b({ type: Boolean })
], K.prototype, "accent", void 0);
y([
  b({ type: Boolean })
], K.prototype, "unbounded", void 0);
y([
  b({ type: Boolean })
], K.prototype, "disabled", void 0);
y([
  b({ type: Boolean })
], K.prototype, "activated", void 0);
y([
  b({ type: Boolean })
], K.prototype, "selected", void 0);
y([
  b({ type: Boolean })
], K.prototype, "internalUseStateLayerCustomProperties", void 0);
y([
  E()
], K.prototype, "hovering", void 0);
y([
  E()
], K.prototype, "bgFocused", void 0);
y([
  E()
], K.prototype, "fgActivation", void 0);
y([
  E()
], K.prototype, "fgDeactivation", void 0);
y([
  E()
], K.prototype, "fgScale", void 0);
y([
  E()
], K.prototype, "fgSize", void 0);
y([
  E()
], K.prototype, "translateStart", void 0);
y([
  E()
], K.prototype, "translateEnd", void 0);
y([
  E()
], K.prototype, "leftPos", void 0);
y([
  E()
], K.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const mo = ne`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let li = class extends K {
};
li.styles = [mo];
li = y([
  G("mwc-ripple")
], li);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ho(e, t, i) {
  const r = e.constructor;
  if (!i) {
    const s = `__${t}`;
    if (i = r.getPropertyDescriptor(t, s), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let a = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      a === "" && (a = r.getPropertyOptions(t).attribute), this.hasAttribute(a) && this.removeAttribute(a), n.set.call(this, s);
    }
  };
  return n.get && (o.get = function() {
    return n.get.call(this);
  }), o;
}
function gt(e, t, i) {
  if (t !== void 0)
    return ho(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zi extends Ti {
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
zi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Vi {
  constructor(t) {
    this.startPress = (i) => {
      t().then((r) => {
        r && r.startPress(i);
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
const jt = /* @__PURE__ */ new WeakMap(), me = Pt((e) => (t) => {
  const i = jt.get(t);
  if (e === void 0 && t instanceof it) {
    if (i !== void 0 || !jt.has(t)) {
      const r = t.committer.name;
      t.committer.element.removeAttribute(r);
    }
  } else e !== i && t.setValue(e);
  jt.set(t, e);
});
class Z extends zi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Vi(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), r = t.get("checked"), n = t.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const a = this.calculateAnimationStateName(!!r, !!i, !!n), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${o}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, i, r) {
    return r ? "disabled" : i ? "indeterminate" : t ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? c`<mwc-ripple
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
    }, r = this.indeterminate ? "mixed" : void 0;
    return c`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${We(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${me(this.name)}"
              aria-checked="${me(r)}"
              aria-label="${me(this.ariaLabel)}"
              aria-labelledby="${me(this.ariaLabelledBy)}"
              aria-describedby="${me(this.ariaDescribedBy)}"
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
y([
  F(".mdc-checkbox")
], Z.prototype, "mdcRoot", void 0);
y([
  F("input")
], Z.prototype, "formElement", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], Z.prototype, "checked", void 0);
y([
  b({ type: Boolean })
], Z.prototype, "indeterminate", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], Z.prototype, "disabled", void 0);
y([
  b({ type: String, reflect: !0 })
], Z.prototype, "name", void 0);
y([
  b({ type: String })
], Z.prototype, "value", void 0);
y([
  gt,
  b({ type: String, attribute: "aria-label" })
], Z.prototype, "ariaLabel", void 0);
y([
  gt,
  b({ type: String, attribute: "aria-labelledby" })
], Z.prototype, "ariaLabelledBy", void 0);
y([
  gt,
  b({ type: String, attribute: "aria-describedby" })
], Z.prototype, "ariaDescribedBy", void 0);
y([
  b({ type: Boolean })
], Z.prototype, "reducedTouchTarget", void 0);
y([
  E()
], Z.prototype, "animationClass", void 0);
y([
  E()
], Z.prototype, "shouldRenderRipple", void 0);
y([
  E()
], Z.prototype, "focused", void 0);
y([
  E()
], Z.prototype, "useStateLayerCustomProperties", void 0);
y([
  ki("mwc-ripple")
], Z.prototype, "ripple", void 0);
y([
  Wr({ passive: !0 })
], Z.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const fo = ne`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let ci = class extends Z {
};
ci.styles = [fo];
ci = y([
  G("mwc-checkbox")
], ci);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Se = (e) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, i) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const r = t.constructor._observers;
        t.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, a) => t.constructor._observers.set(a, n)
        );
      }
    } else {
      t.constructor._observers = /* @__PURE__ */ new Map();
      const r = t.updated;
      t.updated = function(n) {
        r.call(this, n), n.forEach((a, o) => {
          const d = this.constructor._observers.get(o);
          d !== void 0 && d.call(this, this[o], a);
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
class X extends ve {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Vi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : c``, r = this.hasMeta ? this.renderMeta() : c``;
    return c`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? c`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? c`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return c`
      <span class="mdc-deprecated-list-item__graphic material-icons ${We(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return c`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return c`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return c`<slot></slot>`;
  }
  renderTwoline() {
    return c`
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
    const r = () => {
      window.removeEventListener(t, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(t, r), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(t, i) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: t } });
    this.dispatchEvent(r);
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
y([
  F("slot")
], X.prototype, "slotElement", void 0);
y([
  ki("mwc-ripple")
], X.prototype, "ripple", void 0);
y([
  b({ type: String })
], X.prototype, "value", void 0);
y([
  b({ type: String, reflect: !0 })
], X.prototype, "group", void 0);
y([
  b({ type: Number, reflect: !0 })
], X.prototype, "tabindex", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Se(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], X.prototype, "disabled", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], X.prototype, "twoline", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], X.prototype, "activated", void 0);
y([
  b({ type: String, reflect: !0 })
], X.prototype, "graphic", void 0);
y([
  b({ type: Boolean })
], X.prototype, "multipleGraphics", void 0);
y([
  b({ type: Boolean })
], X.prototype, "hasMeta", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Se(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], X.prototype, "noninteractive", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Se(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], X.prototype, "selected", void 0);
y([
  E()
], X.prototype, "shouldRenderRipple", void 0);
y([
  E()
], X.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class yt extends X {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : c``, n = this.hasMeta && this.left ? this.renderMeta() : c``, a = this.renderRipple();
    return c`
      ${a}
      ${r}
      ${this.left ? "" : i}
      <span class=${We(t)}>
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
  async onChange(t) {
    const i = t.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
y([
  F("slot")
], yt.prototype, "slotElement", void 0);
y([
  F("mwc-checkbox")
], yt.prototype, "checkboxElement", void 0);
y([
  b({ type: Boolean })
], yt.prototype, "left", void 0);
y([
  b({ type: String, reflect: !0 })
], yt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Jr = ne`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Pi = ne`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ye = class extends yt {
};
Ye.styles = [Pi, Jr];
Ye = y([
  G("mwc-check-list-item")
], Ye);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const cr = Symbol("selection controller");
class bo {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class Ri {
  constructor(t) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, t.addEventListener("keydown", (i) => {
      this.keyDownHandler(i);
    }), t.addEventListener("mousedown", () => {
      this.mousedownHandler();
    }), t.addEventListener("mouseup", () => {
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
  static getController(t) {
    const r = !("global" in t) || "global" in t && t.global ? document : t.getRootNode();
    let n = r[cr];
    return n === void 0 && (n = new Ri(r), r[cr] = n), n;
  }
  keyDownHandler(t) {
    const i = t.target;
    "checked" in i && this.has(i) && (t.key == "ArrowRight" || t.key == "ArrowDown" ? this.selectNext(i) : (t.key == "ArrowLeft" || t.key == "ArrowUp") && this.selectPrevious(i));
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
  has(t) {
    return this.getSet(t.name).set.has(t);
  }
  /**
   * Selects and returns the controlled element previous to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which preceding element is fetched
   */
  selectPrevious(t) {
    const i = this.getOrdered(t), r = i.indexOf(t), n = i[r - 1] || i[i.length - 1];
    return this.select(n), n;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(t) {
    const i = this.getOrdered(t), r = i.indexOf(t), n = i[r + 1] || i[0];
    return this.select(n), n;
  }
  select(t) {
    t.click();
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
  focus(t) {
    if (this.mouseIsDown)
      return;
    const i = this.getSet(t.name), r = this.focusedSet;
    this.focusedSet = i, r != i && i.selected && i.selected != t && i.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(t) {
    const i = this.getSet(t.name);
    for (const r of i.set)
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
  getOrdered(t) {
    const i = this.getSet(t.name);
    return i.ordered || (i.ordered = Array.from(i.set), i.ordered.sort((r, n) => r.compareDocumentPosition(n) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), i.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(t) {
    return this.sets[t] || (this.sets[t] = new bo()), this.sets[t];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(t) {
    const i = t.name || t.getAttribute("name") || "", r = this.getSet(i);
    r.set.add(t), r.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(t) {
    const i = this.getSet(t.name);
    i.set.delete(t), i.ordered = null, i.selected == t && (i.selected = null);
  }
  /**
   * Unselects other elements in element's set if element is checked. Noop
   * otherwise.
   *
   * @param element Element from which to calculate selection controller update.
   */
  update(t) {
    if (this.updating)
      return;
    this.updating = !0;
    const i = this.getSet(t.name);
    if (t.checked) {
      for (const r of i.set)
        r != t && (r.checked = !1);
      i.selected = t;
    }
    if (this.isAnySelected(t))
      for (const r of i.set) {
        if (r.formElementTabIndex === void 0)
          break;
        r.formElementTabIndex = r.checked ? 0 : -1;
      }
    this.updating = !1;
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
var go = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, yo = {
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
var vo = (
  /** @class */
  function(e) {
    Zr(t, e);
    function t(i) {
      return e.call(this, He(He({}, t.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return yo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return go;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.setDisabled = function(i) {
      var r = t.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, t;
  }(Li)
);
class Y extends zi {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = vo, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new Vi(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => {
      this.rippleElement = t;
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
  set checked(t) {
    var i, r;
    const n = this._checked;
    t !== n && (this._checked = t, this.formElement && (this.formElement.checked = t), (i = this._selectionController) === null || i === void 0 || i.update(this), t === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", n), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(t) {
    this.formElement.value = t;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? c`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var t;
    return ((t = this.rippleElement) === null || t === void 0 ? void 0 : t.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = Ri.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, ro(this.mdcRoot)), { setNativeControlDisabled: (t) => {
      this.formElement.disabled = t;
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
    const t = {
      "mdc-radio--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      "mdc-radio--disabled": this.disabled
    };
    return c`
      <div class="mdc-radio ${We(t)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${me(this.ariaLabel)}"
          aria-labelledby="${me(this.ariaLabelledBy)}"
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
y([
  F(".mdc-radio")
], Y.prototype, "mdcRoot", void 0);
y([
  F("input")
], Y.prototype, "formElement", void 0);
y([
  E()
], Y.prototype, "useStateLayerCustomProperties", void 0);
y([
  b({ type: Boolean })
], Y.prototype, "global", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], Y.prototype, "checked", null);
y([
  b({ type: Boolean }),
  Se(function(e) {
    this.mdcFoundation.setDisabled(e);
  })
], Y.prototype, "disabled", void 0);
y([
  b({ type: String }),
  Se(function(e) {
    this._handleUpdatedValue(e);
  })
], Y.prototype, "value", void 0);
y([
  b({ type: String })
], Y.prototype, "name", void 0);
y([
  b({ type: Boolean })
], Y.prototype, "reducedTouchTarget", void 0);
y([
  b({ type: Number })
], Y.prototype, "formElementTabIndex", void 0);
y([
  E()
], Y.prototype, "focused", void 0);
y([
  E()
], Y.prototype, "shouldRenderRipple", void 0);
y([
  ki("mwc-ripple")
], Y.prototype, "ripple", void 0);
y([
  gt,
  b({ attribute: "aria-label" })
], Y.prototype, "ariaLabel", void 0);
y([
  gt,
  b({ attribute: "aria-labelledby" })
], Y.prototype, "ariaLabelledBy", void 0);
y([
  Wr({ passive: !0 })
], Y.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const So = ne`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let di = class extends Y {
};
di.styles = [So];
di = y([
  G("mwc-radio")
], di);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class vt extends X {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : c``, n = this.hasMeta && this.left ? this.renderMeta() : c``, a = this.renderRipple();
    return c`
      ${a}
      ${r}
      ${this.left ? "" : i}
      <mwc-radio
          global
          class=${We(t)}
          tabindex=${this.tabindex}
          name=${me(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? i : ""}
      ${n}`;
  }
  onClick() {
    this._changeFromClick = !0, super.onClick();
  }
  async onChange(t) {
    const i = t.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1, this._changeFromClick || this.fireRequestSelected(this.selected, "interaction")), this._changeFromClick = !1;
  }
}
y([
  F("slot")
], vt.prototype, "slotElement", void 0);
y([
  F("mwc-radio")
], vt.prototype, "radioElement", void 0);
y([
  b({ type: Boolean })
], vt.prototype, "left", void 0);
y([
  b({ type: String, reflect: !0 })
], vt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ui = class extends vt {
};
ui.styles = [Pi, Jr];
ui = y([
  G("mwc-radio-list-item")
], ui);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let pi = class extends X {
};
pi.styles = [Pi];
pi = y([
  G("mwc-list-item")
], pi);
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
}, ae = /* @__PURE__ */ new Set();
ae.add(k.BACKSPACE);
ae.add(k.ENTER);
ae.add(k.SPACEBAR);
ae.add(k.PAGE_UP);
ae.add(k.PAGE_DOWN);
ae.add(k.END);
ae.add(k.HOME);
ae.add(k.ARROW_LEFT);
ae.add(k.ARROW_UP);
ae.add(k.ARROW_RIGHT);
ae.add(k.ARROW_DOWN);
ae.add(k.DELETE);
ae.add(k.ESCAPE);
ae.add(k.TAB);
var ce = {
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
}, oe = /* @__PURE__ */ new Map();
oe.set(ce.BACKSPACE, k.BACKSPACE);
oe.set(ce.ENTER, k.ENTER);
oe.set(ce.SPACEBAR, k.SPACEBAR);
oe.set(ce.PAGE_UP, k.PAGE_UP);
oe.set(ce.PAGE_DOWN, k.PAGE_DOWN);
oe.set(ce.END, k.END);
oe.set(ce.HOME, k.HOME);
oe.set(ce.ARROW_LEFT, k.ARROW_LEFT);
oe.set(ce.ARROW_UP, k.ARROW_UP);
oe.set(ce.ARROW_RIGHT, k.ARROW_RIGHT);
oe.set(ce.ARROW_DOWN, k.ARROW_DOWN);
oe.set(ce.DELETE, k.DELETE);
oe.set(ce.ESCAPE, k.ESCAPE);
oe.set(ce.TAB, k.TAB);
var Ve = /* @__PURE__ */ new Set();
Ve.add(k.PAGE_UP);
Ve.add(k.PAGE_DOWN);
Ve.add(k.END);
Ve.add(k.HOME);
Ve.add(k.ARROW_LEFT);
Ve.add(k.ARROW_UP);
Ve.add(k.ARROW_RIGHT);
Ve.add(k.ARROW_DOWN);
function Ie(e) {
  var t = e.key;
  if (ae.has(t))
    return t;
  var i = oe.get(e.keyCode);
  return i || k.UNKNOWN;
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
var Ne, xe, R = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ne = {}, Ne["" + R.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ne["" + R.LIST_ITEM_CLASS] = "mdc-list-item", Ne["" + R.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ne["" + R.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ne["" + R.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ne["" + R.ROOT] = "mdc-list";
var Xe = (xe = {}, xe["" + R.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", xe["" + R.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", xe["" + R.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", xe["" + R.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", xe["" + R.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", xe["" + R.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", xe["" + R.ROOT] = "mdc-deprecated-list", xe), Et = {
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
    .` + R.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` a,
    .` + Xe[R.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Xe[R.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + R.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` a,
    .` + R.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Xe[R.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Xe[R.LIST_ITEM_CLASS] + ` a,
    .` + Xe[R.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Xe[R.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, le = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const mi = (e, t) => e - t, xo = (e, t) => {
  const i = Array.from(e), r = Array.from(t), n = { added: [], removed: [] }, a = i.sort(mi), o = r.sort(mi);
  let s = 0, d = 0;
  for (; s < a.length || d < o.length; ) {
    const u = a[s], m = o[d];
    if (u === m) {
      s++, d++;
      continue;
    }
    if (u !== void 0 && (m === void 0 || u < m)) {
      n.removed.push(u), s++;
      continue;
    }
    if (m !== void 0 && (u === void 0 || m < u)) {
      n.added.push(m), d++;
      continue;
    }
  }
  return n;
}, wo = ["input", "button", "textarea", "select"];
function ct(e) {
  return e instanceof Set;
}
const Kt = (e) => {
  const t = e === le.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return ct(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class Oi extends Li {
  constructor(t) {
    super(Object.assign(Object.assign({}, Oi.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = le.UNSET_INDEX, this.focusedItemIndex_ = le.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Et;
  }
  static get numbers() {
    return le;
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
      if (!ct(i)) {
        const r = i === le.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (ct(i))
      if (i.size) {
        const r = Array.from(i).sort(mi);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = le.UNSET_INDEX;
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
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Kt(t)) : this.setSingleSelectionAtIndex_(t));
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
  handleKeydown(t, i, r) {
    const n = Ie(t) === "ArrowLeft", a = Ie(t) === "ArrowUp", o = Ie(t) === "ArrowRight", s = Ie(t) === "ArrowDown", d = Ie(t) === "Home", u = Ie(t) === "End", m = Ie(t) === "Enter", h = Ie(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || u ? (t.preventDefault(), this.focusLastElement()) : (s || d) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = r, g < 0))
      return;
    let v;
    if (this.isVertical_ && s || !this.isVertical_ && o)
      this.preventDefaultEvent(t), v = this.focusNextElement(g);
    else if (this.isVertical_ && a || !this.isVertical_ && n)
      this.preventDefaultEvent(t), v = this.focusPrevElement(g);
    else if (d)
      this.preventDefaultEvent(t), v = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(t), v = this.focusLastElement();
    else if ((m || h) && i) {
      const w = t.target;
      if (w && w.tagName === "A" && m)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(g, !0);
    }
    this.focusedItemIndex_ = g, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, i, r) {
    t !== le.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, r), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const i = this.adapter.getListItemCount();
    let r = t + 1;
    if (r >= i)
      if (this.wrapFocus_)
        r = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(r), r;
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
    const r = `${t.target.tagName}`.toLowerCase();
    wo.indexOf(r) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== le.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const r = Kt(this.selectedIndex_), n = xo(r, t);
    if (!(!n.removed.length && !n.added.length)) {
      for (const a of n.removed)
        i && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of n.added)
        i && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === le.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, Et.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? Et.ARIA_CURRENT : Et.ARIA_SELECTED;
    this.selectedIndex_ !== le.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, r, n);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === le.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== le.UNSET_INDEX ? t = this.selectedIndex_ : ct(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let i = !1;
        for (const r of t)
          if (i = this.isIndexInRange_(r), i)
            break;
        return i;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === le.UNSET_INDEX || this.isIndexInRange_(t);
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
  setSelectedIndexOnAction_(t, i, r) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let n = t;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([t])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(t, r, i) : i || r ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(le.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(t) : n = i;
    const a = Kt(this.selectedIndex_);
    n ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, r);
  }
}
function Ao(e, t = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(r);
    }, t);
  };
}
const kt = (e) => e.hasAttribute("mwc-list-item");
function Co() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class de extends Ti {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Oi, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = Ao(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Co.call(this), t(i);
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
    const i = (t = this.assignedElements) !== null && t !== void 0 ? t : [], r = [];
    for (const o of i)
      kt(o) && (r.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((o, s) => {
      this.itemRoles ? o.setAttribute("role", this.itemRoles) : o.removeAttribute("role"), o.selected && n.add(s);
    }), this.multi)
      this.select(n);
    else {
      const o = n.size ? n.entries().next().value[1] : -1;
      this.select(o);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const t = this.index;
    if (!ct(t))
      return t === -1 ? null : this.items[t];
    const i = [];
    for (const r of t)
      i.push(this.items[r]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return c`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${me(t)}"
          aria-label="${me(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? c`
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
      const i = this.getIndexOfTarget(t), r = t.target, n = kt(r);
      this.mdcFoundation.handleKeydown(t, n, i);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(t);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(t), i === -1) || this.items[i].disabled)
        return;
      const n = t.detail.selected, a = t.detail.source;
      this.mdcFoundation.handleSingleSelection(i, a === "interaction", n), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const i = this.items, r = t.composedPath();
    for (const n of r) {
      let a = -1;
      if (io(n) && kt(n) && (a = i.indexOf(n)), a !== -1)
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
        const n = this.items[t];
        return n ? n.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (t, i, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[t];
        n && n.setAttribute(i, r);
      },
      focusItemAtIndex: (t) => {
        const i = this.items[t];
        i && i.focus();
      },
      setTabIndexForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.tabindex = i);
      },
      notifyAction: (t) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: t };
        const r = new CustomEvent("action", i);
        this.dispatchEvent(r);
      },
      notifySelected: (t, i) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: t, diff: i };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => ao(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.disabled = i);
      },
      getDisabledStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.selected = i);
      },
      getSelectedStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, i = !1) {
    const r = this.items[t];
    r && (r.selected = !0, r.activated = i);
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
    for (const r of this.items)
      r.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = Qr();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = t[i];
      if (kt(r))
        return this.items.indexOf(r);
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
y([
  b({ type: String })
], de.prototype, "emptyMessage", void 0);
y([
  F(".mdc-deprecated-list")
], de.prototype, "mdcRoot", void 0);
y([
  Ur("", !0, "*")
], de.prototype, "assignedElements", void 0);
y([
  Ur("", !0, '[tabindex="0"]')
], de.prototype, "tabbableElements", void 0);
y([
  b({ type: Boolean }),
  Se(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], de.prototype, "activatable", void 0);
y([
  b({ type: Boolean }),
  Se(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], de.prototype, "multi", void 0);
y([
  b({ type: Boolean }),
  Se(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], de.prototype, "wrapFocus", void 0);
y([
  b({ type: String }),
  Se(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], de.prototype, "itemRoles", void 0);
y([
  b({ type: String })
], de.prototype, "innerRole", void 0);
y([
  b({ type: String })
], de.prototype, "innerAriaLabel", void 0);
y([
  b({ type: Boolean })
], de.prototype, "rootTabbable", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Se(function(e) {
    var t, i;
    if (e) {
      const r = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], de.prototype, "noninteractive", void 0);
var Eo = Object.defineProperty, ko = Object.getOwnPropertyDescriptor, Ue = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ko(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Eo(t, i, n), n;
};
function hi(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof he ? e : hi(e.parentElement);
}
function _o(e, t) {
  const i = e.innerText + `
`, r = Array.from(e.children).map((s) => s.innerText).join(`
`), n = e.value, a = (i + r + n).toUpperCase(), o = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? hi(e).classList.remove("hidden") : hi(e).classList.add("hidden");
}
let he = class extends de {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Ye);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Ye).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Ye).some((e) => e.selected);
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
      (e) => _o(e, this.searchField.value)
    );
  }
  onListItemConnected(e) {
    super.onListItemConnected(e), this.requestUpdate();
  }
  update(e) {
    super.update(e), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? c`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : c``;
  }
  render() {
    return c`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? l("filter")}"
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
he.styles = ne`
    ${$i(ha.styles)}

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
Ue([
  b({ type: String })
], he.prototype, "searchFieldLabel", 2);
Ue([
  b({ type: Boolean })
], he.prototype, "disableCheckAll", 2);
Ue([
  E()
], he.prototype, "existCheckListItem", 1);
Ue([
  E()
], he.prototype, "isAllSelected", 1);
Ue([
  E()
], he.prototype, "isSomeSelected", 1);
Ue([
  F("mwc-textfield")
], he.prototype, "searchField", 2);
he = Ue([
  G("filtered-list")
], he);
var Do = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, St = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Io(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Do(t, i, n), n;
};
let Be = class extends he {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const e = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((t) => e.push(t.value)) : e.push(this.selected.value), this.dispatchEvent(No(e)));
  }
  render() {
    return c`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : l("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${l("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
Be.styles = ne`
    ${$i(he.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
St([
  b()
], Be.prototype, "header", 2);
St([
  b()
], Be.prototype, "icon", 2);
St([
  b({ type: Boolean })
], Be.prototype, "disabled", 2);
St([
  F("#filterDialog")
], Be.prototype, "filterDialog", 2);
Be = St([
  G("oscd-filter-button")
], Be);
function No(e, t) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { selectedItems: e, ...t?.detail }
  });
}
var $o = Object.defineProperty, To = Object.getOwnPropertyDescriptor, rt = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? To(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && $o(t, i, n), n;
};
function Yr(e, t) {
  const i = e.nodeType === Node.ELEMENT_NODE ? e.closest(t) : null;
  if (i) return i;
  const r = e.getRootNode();
  return r instanceof ShadowRoot ? Yr(r.host, t) : null;
}
let ze = class extends ve {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const e = Yr(this.parentNode, "action-pane");
    e && (this.level = e.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const e = c`<span
        ><slot name="icon"
          >${this.icon ? c`<mwc-icon>${this.icon}</mwc-icon>` : O}</slot
        ></span
      >
      ${this.label ?? O}
      <nav><slot name="action"></slot></nav>`, t = Math.floor(Math.max(this.level, 1)), i = typeof this.label == "string" ? this.label : "";
    switch (t) {
      case 1:
        return c`<h1 title="${i}">${e}</h1>`;
      case 2:
        return c`<h2 title="${i}">${e}</h2>`;
      case 3:
        return c`<h3 title="${i}">${e}</h3>`;
      default:
        return c`<h4 title="${i}">${e}</h4>`;
    }
  }
  render() {
    return c`<section
      class="${We({
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
ze.styles = ne`
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
rt([
  b({ type: String })
], ze.prototype, "label", 2);
rt([
  b({ type: String })
], ze.prototype, "icon", 2);
rt([
  b({ type: Boolean })
], ze.prototype, "secondary", 2);
rt([
  b({ type: Boolean })
], ze.prototype, "highlighted", 2);
rt([
  b({ type: Number })
], ze.prototype, "level", 2);
ze = rt([
  G("action-pane")
], ze);
function I(e, t, i) {
  const r = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([n, a]) => a !== null).forEach(([n, a]) => r.setAttribute(n, a)), r;
}
function V(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function Q(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
var Lo = Object.defineProperty, zo = Object.getOwnPropertyDescriptor, fe = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? zo(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Lo(t, i, n), n;
};
let ie = class extends ma {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(l("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? c`<div style="position:relative;">
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
      </div>` : c``;
  }
  renderMulplierList() {
    return c`${this.multipliers.map(
      (e) => c`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? l("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
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
fe([
  b({ type: Boolean })
], ie.prototype, "nullable", 2);
fe([
  b({ type: Array })
], ie.prototype, "multipliers", 2);
fe([
  b({ type: String })
], ie.prototype, "multiplier", 1);
fe([
  b({ type: String })
], ie.prototype, "unit", 2);
fe([
  E()
], ie.prototype, "null", 1);
fe([
  b({ type: String })
], ie.prototype, "maybeValue", 1);
fe([
  b({ type: String })
], ie.prototype, "defaultValue", 2);
fe([
  b({ type: Array })
], ie.prototype, "reservedValues", 2);
fe([
  F("mwc-switch")
], ie.prototype, "nullSwitch", 2);
fe([
  F("mwc-menu")
], ie.prototype, "multiplierMenu", 2);
fe([
  F("mwc-icon-button")
], ie.prototype, "multiplierButton", 2);
ie = fe([
  G("wizard-textfield")
], ie);
var Vo = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, je = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Po(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Vo(t, i, n), n;
};
let ke = class extends fa {
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
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
je([
  b({ type: Boolean })
], ke.prototype, "nullable", 2);
je([
  E()
], ke.prototype, "null", 1);
je([
  b({ type: String })
], ke.prototype, "maybeValue", 1);
je([
  b({ type: String })
], ke.prototype, "defaultValue", 2);
je([
  b({ type: Array })
], ke.prototype, "reservedValues", 2);
je([
  F("mwc-switch")
], ke.prototype, "nullSwitch", 2);
ke = je([
  G("wizard-select")
], ke);
var Ro = Object.defineProperty, Oo = Object.getOwnPropertyDescriptor, pe = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Oo(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Ro(t, i, n), n;
};
let re = class extends ve {
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
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
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
pe([
  b({ type: String })
], re.prototype, "label", 2);
pe([
  b({ type: String })
], re.prototype, "helper", 2);
pe([
  b({ type: Boolean })
], re.prototype, "nullable", 2);
pe([
  b({ type: Boolean })
], re.prototype, "defaultChecked", 2);
pe([
  b({ type: String })
], re.prototype, "maybeValue", 1);
pe([
  b({ type: Boolean })
], re.prototype, "disabled", 2);
pe([
  E()
], re.prototype, "null", 1);
pe([
  E()
], re.prototype, "checked", 1);
pe([
  E()
], re.prototype, "deactivateCheckbox", 2);
pe([
  E()
], re.prototype, "formfieldLabel", 1);
pe([
  F("mwc-switch")
], re.prototype, "nullSwitch", 2);
pe([
  F("mwc-checkbox")
], re.prototype, "checkbox", 2);
re = pe([
  G("wizard-checkbox")
], re);
function Fo(e) {
  return typeof e == "function";
}
function f(e) {
  return e instanceof ie || e instanceof ke || e instanceof re ? e.maybeValue : e.value ?? null;
}
function Fi(e) {
  return e instanceof ie ? e.multiplier : null;
}
function j(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = Fo(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function Ke(e) {
  return j(e, { detail: { subwizard: !0 } });
}
function qo(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function M(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function Mo(e) {
  const t = e.getAttribute("ldName");
  return t || void 0;
}
function Pe(e) {
  const t = e.getAttribute("desc");
  return t || void 0;
}
function Ge(e) {
  const t = e.getAttribute("inst");
  return t || void 0;
}
function te(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const B = ":not(*)";
function Ho(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function Bo(e, t) {
  const [i, r] = t.split("	");
  return !i || !r ? B : `${e}[version="${i}"][revision="${r}"]`;
}
function dr(e) {
  return L(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function ur(e, t) {
  const [i, r] = te(t), n = W[e].parents.flatMap(
    (a) => ee(a, i).split(",")
  );
  return J(
    n,
    [">"],
    [`${e}[connectivityNode="${r}"]`]
  ).map((a) => a.join("")).join(",");
}
function Go(e) {
  const [t, i, r, n, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => e.getAttribute(s));
  return t === "None" ? `${L(e.parentElement)}>(${n} ${o} ${a})` : `${t} ${i || "(Client)"}/${r ?? ""} ${n} ${a ?? ""}`;
}
function Wo(e, t) {
  if (t.endsWith(")")) {
    const [g, v] = te(t), [w, C, _] = v.substring(1, v.length - 1).split(" ");
    if (!w || !C) return B;
    const A = W[e].parents.flatMap(
      (q) => ee(q, g).split(",")
    );
    return J(
      A,
      [">"],
      [`${e}[iedName="None"][lnClass="${w}"][lnType="${C}"][lnInst="${_}"]`]
    ).map((q) => q.join("")).join(",");
  }
  const [i, r, n, a, o] = t.split(/[ /]/);
  if (!i || !r || !a) return B;
  const [
    s,
    d,
    u,
    m,
    h
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return J(
    [e],
    s,
    d,
    u,
    m,
    h
  ).map((g) => g.join("")).join(",");
}
function Uo(e) {
  return `${L(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function jo(e, t) {
  const [i, r] = te(t), [n, a] = r.split(" ");
  return `${ee(
    "IED",
    i
  )}>${e}[iedName="${n}"][apName="${a}"]`;
}
function Ko(e) {
  return `${L(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Zo(e, t) {
  const [i, r] = te(t);
  return r ? `${ee(
    "Server",
    i
  )}>${e}[associationID="${r}"]` : B;
}
function Xo(e) {
  return `${L(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Qo(e, t) {
  const [i, r] = t.split(">>");
  return r ? `IED[name="${i}"] ${e}[inst="${r}"]` : B;
}
function Jo(e) {
  const t = e.textContent, [i, r, n, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => e.getAttribute(s));
  return `${L(e.parentElement)}>${t} ${i || ""} ${r || ""}/${n ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function Yo(e, t) {
  const [i, r] = te(t), [n, a, o, s, d, u] = r.split(/[ /]/), [
    m,
    h,
    g,
    v,
    w,
    C
  ] = [
    W[e].parents.flatMap(
      (_) => ee(_, i).split(",")
    ),
    [`${n}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return J(
    m,
    [">"],
    [e],
    h,
    g,
    v,
    w,
    C
  ).map((_) => _.join("")).join(",");
}
function es(e) {
  const [t, i, r, n, a, o, s, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), u = `${t}/${i ?? ""} ${r} ${n ?? ""}.${a} ${o || ""}`;
  return `${L(e.parentElement)}>${u} (${s}${d ? " [" + d + "]" : ""})`;
}
function ts(e, t) {
  const [i, r] = te(t), [n, a, o, s] = r.split(/[ /.]/), d = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = d && d[1] ? d[1] : "", m = d && d[2] ? d[2] : "", h = r.match(/\(([A-Z]{2})/), g = r.match(/ \[([0-9]{1,2})\]/), v = h && h[1] ? h[1] : "", w = g && g[1] ? g[1] : "", [
    C,
    _,
    A,
    q,
    U,
    De,
    Ht,
    Bt,
    Gt
  ] = [
    W[e].parents.flatMap(
      (nt) => ee(nt, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    w ? [`[ix="${w}"]`] : [":not([ix])", '[ix=""]']
  ];
  return J(
    C,
    [">"],
    [e],
    _,
    A,
    q,
    U,
    De,
    Ht,
    Bt,
    Gt
  ).map((nt) => nt.join("")).join(",");
}
function is(e) {
  if (!e.parentElement) return NaN;
  const t = L(e.parentElement), i = e.getAttribute("iedName"), r = e.getAttribute("intAddr"), n = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(e);
  if (r) return `${t}>${r}[${n}]`;
  const [
    a,
    o,
    s,
    d,
    u,
    m,
    h,
    g,
    v,
    w,
    C,
    _
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
  ].map((U) => e.getAttribute(U)), A = _ ? `${h}:${_} ${g ?? ""}/${v ?? ""} ${w ?? ""} ${C ?? ""}` : "", q = `${i} ${a}/${o ?? ""} ${s} ${d ?? ""} ${u} ${m || ""}`;
  return `${t}>${A ? A + " " : ""}${q}${r ? `@${r}` : ""}`;
}
function rs(e, t) {
  const [i, r] = te(t), n = W[e].parents.flatMap(
    (at) => ee(at, i).split(",")
  );
  if (r.endsWith("]")) {
    const [at] = r.split("["), ua = [`[intAddr="${at}"]`];
    return J(n, [">"], [e], ua).map((pa) => pa.join("")).join(",");
  }
  let a, o, s, d, u, m, h, g, v, w, C, _, A, q;
  !r.includes(":") && !r.includes("@") ? [a, o, s, d, u, m, h] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    g,
    v,
    w,
    C,
    _,
    A,
    a,
    o,
    s,
    d,
    u,
    m,
    h
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [a, o, s, d, u, m, h, q] = r.split(/[ /@]/) : [
    g,
    v,
    w,
    C,
    _,
    A,
    a,
    o,
    s,
    d,
    u,
    m,
    h,
    q
  ] = r.split(/[ /:@]/);
  const [
    U,
    De,
    Ht,
    Bt,
    Gt,
    nt,
    ra,
    na,
    aa,
    oa,
    sa,
    la,
    ca,
    da
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    w ? [`[srcLDInst="${w}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    C ? [`[srcPrefix="${C}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    _ ? [`[srcLNClass="${_}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    q ? [`[intAddr="${q}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return J(
    n,
    [">"],
    [e],
    U,
    De,
    Ht,
    Bt,
    Gt,
    nt,
    ra,
    na,
    aa,
    oa,
    sa,
    la,
    ca,
    da
  ).map((at) => at.join("")).join(",");
}
function ns(e) {
  const [t, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => e.getAttribute(n)
  );
  return `${L(e.parentElement)}>${t ?? ""} ${i} ${r}`;
}
function as(e, t) {
  const [i, r] = te(t), n = W[e].parents.flatMap(
    (h) => ee(h, i).split(",")
  ), [a, o, s] = r.split(" ");
  if (!o) return B;
  const [d, u, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${s}"]`]
  ];
  return J(
    n,
    [">"],
    [e],
    d,
    u,
    m
  ).map((h) => h.join("")).join(",");
}
function os(e) {
  const [t, i, r, n, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => e.getAttribute(s));
  return `${L(e.parentElement)}>${i} ${t || ""} ${r}/${n ?? ""} ${a} ${o}`;
}
function ss(e, t) {
  const [i, r] = te(t), n = W[e].parents.flatMap(
    (A) => ee(A, i).split(",")
  ), [a, o, s, d, u, m] = r.split(/[ /]/), [
    h,
    g,
    v,
    w,
    C,
    _
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return J(
    n,
    [">"],
    [e],
    h,
    g,
    v,
    w,
    C,
    _
  ).map((A) => A.join("")).join(",");
}
function pr(e) {
  const [t, i] = ["name", "ix"].map((r) => e.getAttribute(r));
  return `${L(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function fi(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = te(t), [a, o, s, d] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return B;
  if (i === 0) return `${e}[name="${o}"]`;
  const u = W[e].parents.flatMap(
    (g) => g === "SDI" ? fi(g, r, i - 1).split(",") : ee(g, r).split(",")
  ).filter((g) => !g.startsWith(B));
  if (u.length === 0) return B;
  const [m, h] = [
    [`[name="${o}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return J(
    u,
    [">"],
    [e],
    m,
    h
  ).map((g) => g.join("")).join(",");
}
function ls(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((r) => r.getAttribute("sGroup") === t).findIndex((r) => r.isSameNode(e));
  return `${L(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function cs(e, t) {
  const [i, r] = te(t), [n, a] = r.split(" "), o = parseFloat(a), s = W[e].parents.flatMap(
    (m) => ee(m, i).split(",")
  ), [d, u] = [
    n ? [`[sGroup="${n}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return J(
    s,
    [">"],
    [e],
    d,
    u
  ).map((m) => m.join("")).join(",");
}
function ds(e) {
  const [t, i] = ["iedName", "apName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function us(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? B : `${e}[iedName="${i}"][apName="${r}"]`;
}
function mr(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function hr(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? B : `${e}[ldInst="${i}"][cbName="${r}"]`;
}
function ps(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${L(e.parentElement)}>${t}`;
}
function ms(e, t) {
  const [i, r] = te(t), [n, a] = [
    W[e].parents.flatMap(
      (o) => ee(o, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return J(n, [">"], [e], a).map((o) => o.join("")).join(",");
}
function hs(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${L(e.parentElement)}>${i}`;
  const r = Array.from(e.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(e));
  return `${L(e.parentElement)}>${i} [${r}]`;
}
function fs(e, t) {
  const [i, r] = te(t), [n] = r.split(" "), a = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [o, s, d] = [
    W[e].parents.flatMap(
      (u) => ee(u, i).split(",")
    ),
    [`[type="${n}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return J(
    o,
    [">"],
    [e],
    s,
    d
  ).map((u) => u.join("")).join(",");
}
function bs(e) {
  return `${L(e.parentElement)}>${e.getAttribute("ord")}`;
}
function gs(e, t) {
  const [i, r] = te(t);
  return `${ee("EnumType", i)}>${e}[ord="${r}"]`;
}
function ys(e) {
  return `${L(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function vs(e, t) {
  const [i, r] = te(t), [n, a] = r.split("	"), [o] = [
    W[e].parents.flatMap(
      (s) => ee(s, i).split(",")
    )
  ];
  return J(
    o,
    [">"],
    [e],
    [`[type="${n}"]`],
    [">"],
    [a]
  ).map((s) => s.join("")).join(",");
}
function Ss() {
  return "";
}
function xs() {
  return ":root";
}
function N(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${L(e.parentElement)}>${e.getAttribute("name")}`;
}
function D(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = te(t);
  if (!n) return B;
  if (i === 0) return `${e}[name="${n}"]`;
  const a = W[e].parents;
  if (!a) return B;
  const o = a.flatMap(
    (s) => W[s].selector === W.Substation.selector ? D(s, r, i - 1).split(",") : ee(s, r).split(",")
  ).filter((s) => !s.startsWith(B));
  return o.length === 0 ? B : J(o, [">"], [e], [`[name="${n}"]`]).map((s) => s.join("")).join(",");
}
function S(e) {
  return L(e.parentElement).toString();
}
function x(e, t) {
  const i = W[e].parents;
  if (!i) return B;
  const r = i.flatMap((n) => ee(n, t).split(",")).filter((n) => !n.startsWith(B));
  return r.length === 0 ? B : J(r, [">"], [e]).map((n) => n.join("")).join(",");
}
function _t(e) {
  return `#${e.id}`;
}
function Dt(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : B;
}
const en = [
  "TransformerWinding",
  "ConductingEquipment"
], tn = [
  "GeneralEquipment",
  "PowerTransformer",
  ...en
], bi = ["Substation", "VoltageLevel", "Bay"], rn = ["Process", "Line"], nn = ["EqSubFunction", "EqFunction"], ws = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...tn,
  ...bi,
  ...rn,
  ...nn
], an = ["ConnectivityNode", ...ws], As = ["GOOSESecurity", "SMVSecurity"], Cs = ["SubNetwork", ...As, ...an], Es = ["BDA", "DA"], ks = ["SampledValueControl", "GSEControl"], _s = ["LogControl", "ReportControl"], Ds = [...ks, ..._s], Is = ["GSE", "SMV"], Ns = [
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
  ...Ds,
  ...Is,
  ...Es
], Me = ["LN0", "LN"], $s = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ts = ["Subject", "IssuerName"], Ls = ["MinTime", "MaxTime"], zs = ["LNodeType", "DOType", "DAType", "EnumType"], Vs = [
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
], Ps = ["DynDataSet", "ConfDataSet"], Rs = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Ps
], Os = ["ConfLogControl", "ConfSigRef"], Fs = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], qs = ["SCL", ...Cs, ...Ns, ...zs], on = [
  ...qs,
  ...$s,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ts,
  ...Ls,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Me,
  ...Vs,
  "DynAssociation",
  "SettingGroups",
  ...Rs,
  ...Os,
  ...Fs,
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
], Ms = new Set(on);
function qi(e) {
  return Ms.has(e);
}
const Ot = ["Text", "Private"], $e = [...Ot], H = [...Ot], It = [...Ot], fr = [...H, "Val"], sn = [...$e, "LNode"], Le = [...sn], gi = [...Le], Zt = [
  ...Le,
  "PowerTransformer",
  "GeneralEquipment"
], br = [
  ...gi,
  "Terminal"
], gr = [...H, "Address"], ln = [...$e], yr = [...ln, "IEDName"], vr = [
  ...H,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Sr = [
  ...Le,
  "GeneralEquipment",
  "Function"
], xr = [...ln, "TrgOps"], wr = [
  ...Le,
  "GeneralEquipment",
  "EqSubFunction"
], W = {
  AccessControl: {
    identity: S,
    selector: x,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: N,
    selector: D,
    parents: ["IED"],
    children: [
      ...$e,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: S,
    selector: x,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Ko,
    selector: Zo,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: S,
    selector: x,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: N,
    selector: D,
    parents: ["DAType"],
    children: [...fr]
  },
  BitRate: {
    identity: S,
    selector: x,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: N,
    selector: D,
    parents: ["VoltageLevel"],
    children: [
      ...Zt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: os,
    selector: ss,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: S,
    selector: x,
    parents: ["SCL"],
    children: [...H, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: N,
    selector: D,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...br,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: S,
    selector: x,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: ds,
    selector: us,
    parents: ["SubNetwork"],
    children: [...H, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: N,
    selector: D,
    parents: ["Bay", "Line"],
    children: [...sn]
  },
  DA: {
    identity: N,
    selector: D,
    parents: ["DOType"],
    children: [...fr]
  },
  DAI: {
    identity: pr,
    selector: fi,
    parents: ["DOI", "SDI"],
    children: [...H, "Val"]
  },
  DAType: {
    identity: _t,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...It, "BDA", "ProtNs"]
  },
  DO: {
    identity: N,
    selector: D,
    parents: ["LNodeType"],
    children: [...H]
  },
  DOI: {
    identity: N,
    selector: D,
    parents: [...Me],
    children: [...H, "SDI", "DAI"]
  },
  DOType: {
    identity: _t,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...It, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: N,
    selector: D,
    parents: [...Me],
    children: [...$e, "FCDA"]
  },
  DataSetDirectory: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: S,
    selector: x,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: _t,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...It, "EnumVal"]
  },
  EnumVal: {
    identity: bs,
    selector: gs,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: N,
    selector: D,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...wr]
  },
  EqSubFunction: {
    identity: N,
    selector: D,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...wr]
  },
  ExtRef: {
    identity: is,
    selector: rs,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: es,
    selector: ts,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: N,
    selector: D,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Le,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: N,
    selector: D,
    parents: [
      "SubFunction",
      "Function",
      ...rn,
      ...nn,
      ...bi
    ],
    children: [...gi, "EqFunction"]
  },
  GetCBValues: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: N,
    selector: D,
    parents: ["AccessPoint"],
    children: [...$e, "Subject", "IssuerName"]
  },
  GSE: {
    identity: mr,
    selector: hr,
    parents: ["ConnectedAP"],
    children: [...gr, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: N,
    selector: D,
    parents: ["LN0"],
    children: [...yr, "Protocol"]
  },
  GSESettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: S,
    selector: x,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: S,
    selector: x,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Ho,
    selector: Bo,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: N,
    selector: D,
    parents: ["SCL"],
    children: [...H, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Jo,
    selector: Yo,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: S,
    selector: x,
    parents: [...Me],
    children: [...H, "ExtRef"]
  },
  IssuerName: {
    identity: S,
    selector: x,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Uo,
    selector: jo,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Xo,
    selector: Qo,
    parents: ["Server"],
    children: [...H, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: ns,
    selector: as,
    parents: ["AccessPoint", "LDevice"],
    children: [...vr]
  },
  LN0: {
    identity: S,
    selector: x,
    parents: ["LDevice"],
    children: [
      ...vr,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Go,
    selector: Wo,
    parents: [...an],
    children: [...H]
  },
  LNodeType: {
    identity: _t,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...It, "DO"]
  },
  Line: {
    identity: N,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...Sr,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: N,
    selector: D,
    parents: [...Me],
    children: [...H]
  },
  LogControl: {
    identity: N,
    selector: D,
    parents: [...Me],
    children: [...xr]
  },
  LogSettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: S,
    selector: x,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: S,
    selector: x,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: S,
    selector: x,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: dr,
    selector: ur,
    parents: ["TransformerWinding"],
    children: [...H]
  },
  OptFields: {
    identity: S,
    selector: x,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: hs,
    selector: fs,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: ps,
    selector: ms,
    parents: ["ConnectedAP"],
    children: [...H, "P"]
  },
  PowerTransformer: {
    identity: N,
    selector: D,
    parents: [...bi],
    children: [
      ...gi,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => B,
    parents: [],
    children: []
  },
  Process: {
    identity: N,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...Sr,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: ys,
    selector: vs,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: S,
    selector: x,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: N,
    selector: D,
    parents: [...Me],
    children: [...xr, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: S,
    selector: x,
    parents: ["ReportControl"],
    children: [...H, "ClientLN"]
  },
  SamplesPerSec: {
    identity: S,
    selector: x,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: N,
    selector: D,
    parents: ["LN0"],
    children: [...yr, "SmvOpts"]
  },
  SecPerSamples: {
    identity: S,
    selector: x,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Ss,
    selector: xs,
    parents: [],
    children: [
      ...Ot,
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
    identity: pr,
    selector: fi,
    parents: ["DOI", "SDI"],
    children: [...H, "SDI", "DAI"]
  },
  SDO: {
    identity: N,
    selector: D,
    parents: ["DOType"],
    children: [...$e]
  },
  Server: {
    identity: S,
    selector: x,
    parents: ["AccessPoint"],
    children: [
      ...H,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: S,
    selector: x,
    parents: ["AccessPoint"],
    children: [...H]
  },
  Services: {
    identity: S,
    selector: x,
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
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: S,
    selector: x,
    parents: ["LN0"],
    children: [...H]
  },
  SettingGroups: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: S,
    selector: x,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: S,
    selector: x,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: mr,
    selector: hr,
    parents: ["ConnectedAP"],
    children: [...gr]
  },
  SmvOpts: {
    identity: S,
    selector: x,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: N,
    selector: D,
    parents: ["AccessPoint"],
    children: [...$e, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: N,
    selector: D,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...en
    ],
    children: [...Le, "EqFunction"]
  },
  SubFunction: {
    identity: N,
    selector: D,
    parents: ["SubFunction", "Function"],
    children: [
      ...Le,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: N,
    selector: D,
    parents: ["Communication"],
    children: [...$e, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: S,
    selector: x,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: N,
    selector: D,
    parents: ["SCL"],
    children: [...Zt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: N,
    selector: D,
    parents: ["TransformerWinding"],
    children: [...Le, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: dr,
    selector: ur,
    parents: [...tn],
    children: [...H]
  },
  Text: {
    identity: S,
    selector: x,
    parents: on.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: S,
    selector: x,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: N,
    selector: D,
    parents: ["PowerTransformer"],
    children: [
      ...br,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: S,
    selector: x,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: ls,
    selector: cs,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: S,
    selector: x,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: N,
    selector: D,
    parents: ["Substation"],
    children: [...Zt, "Voltage", "Bay", "Function"]
  }
};
function ee(e, t) {
  return typeof t != "string" ? B : qi(e) ? W[e].selector(e, t) : e;
}
function Ce(e, t, i) {
  if (typeof i != "string" || !qi(t)) return null;
  const r = e.querySelector(W[t].selector(t, i));
  return r === null || ue(r) ? r : Array.from(
    e.querySelectorAll(W[t].selector(t, i))
  ).find(ue) ?? null;
}
function L(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return qi(t) ? W[t].identity(e) : NaN;
}
const mt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function cn(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function J(...e) {
  return e.reduce(
    (t, i) => t.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function dn(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => dn(i, t))
      );
    default:
      return 0;
  }
}
function ue(e) {
  return !e.closest("Private");
}
const Hs = 99, Bs = Array(Hs).fill(1).map((e, t) => `${t + 1}`);
function Gs(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const r = new Set(
        Q(e, "LNode").filter((n) => n.getAttribute("lnClass") === i).map((n) => n.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const n = Bs.find((a) => !r.has(a));
        return n && r.add(n), n;
      });
    }
    return t.get(i)();
  };
}
const Ws = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
</svg>`, Us = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z" />
</svg>`, js = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M13,13H18V15H13M13,9H18V11H13M6.91,7.41L11.5,12L6.91,16.6L5.5,15.18L8.68,12L5.5,8.82M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" />
</svg>`;
function Ks(e) {
  const t = Zs(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Services" }),
    content: [...t],
    element: e
  } : null;
}
function Zs(e) {
  const t = {
    logSettings: {
      cbName: e.querySelector("LogSettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("LogSettings")?.getAttribute("datSet") ?? null,
      logEna: e.querySelector("LogSettings")?.getAttribute("logEna") ?? null,
      intgPd: e.querySelector("LogSettings")?.getAttribute("trgOps") ?? null,
      trgOps: e.querySelector("LogSettings")?.getAttribute("intgPd") ?? null
    },
    confLogControl: {
      max: e.querySelector("ConfLogControl")?.getAttribute("max") ?? null
    },
    dataSet: {
      max: e.querySelector("ConfDataSet")?.getAttribute("max") ?? Array.from(
        e.parentElement?.querySelectorAll("DataSet") || []
      ).length.toString(),
      maxAttributes: e.querySelector("ConfDataSet")?.getAttribute("maxAttributes") ?? null,
      modify: e.querySelector("ConfDataSet")?.getAttribute("modify") ?? "true"
    },
    clientServices: {
      readLog: e.querySelector("ClientServices")?.getAttribute("readLog") ?? null
    },
    sGEdit: {
      resvTms: e.querySelector("SettingGroups > SGEdit")?.getAttribute("resvTms") || null
    },
    confSG: {
      resvTms: e.querySelector("SettingGroups > ConfSG")?.getAttribute("resvTms") || null
    }
  };
  return Ze(t) ? null : [
    T("Log Control Configuration"),
    ...$([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.logSettings.cbName,
        helper: "Whether log control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.logSettings.datSet,
        helper: "Whether log control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "logEna",
        maybeValue: t.logSettings.logEna,
        helper: "Whether log control blocks attribute logEna is configurable offline (Conf), online (Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: t.logSettings.trgOps,
        helper: "Whether log control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: t.logSettings.intgPd,
        helper: "Whether log control blocks integrity period is configurable offlien (Conf), online (Dyn), or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      }
    ]),
    T("Log Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "Max",
        required: !0,
        helper: "The maximum number of log control blocks instantiable by system configuration tool",
        maybeValue: t.confLogControl.max
      }
    ]),
    T("Client Capabilities"),
    ...$([
      {
        kind: "Checkbox",
        label: "read Log",
        nullable: !0,
        helper: "Whether IED supports services to handle logs as a client (see IEC 61850-7-2 for further information)",
        maybeValue: t.clientServices.readLog
      }
    ]),
    T("DataSet Configuration"),
    ...$([
      {
        kind: "TextField",
        label: "Max",
        nullable: !1,
        helper: "The maximum allow data sets in this IED",
        maybeValue: t.dataSet.max
      },
      {
        kind: "TextField",
        label: "Max attributes",
        nullable: !0,
        helper: "The maximum number of FCDA elements per DataSet",
        maybeValue: t.dataSet.maxAttributes
      },
      {
        kind: "Checkbox",
        label: "Modify",
        helper: "Whether DataSet can be modified by SCT",
        maybeValue: t.dataSet.modify
      }
    ]),
    T("Setting Group"),
    ...$([
      {
        kind: "Checkbox",
        label: "SGEdit",
        nullable: !0,
        helper: "Whether IED allows manipulating editable setting groups online",
        maybeValue: t.sGEdit.resvTms
      },
      {
        kind: "Checkbox",
        label: "ConfSG",
        nullable: !0,
        helper: "Whether IED accepts the system configuration tool to configure the number of setting groups",
        maybeValue: t.confSG.resvTms
      }
    ])
  ];
}
function Xs(e) {
  const t = Qs(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Report Settings" }),
    content: [...t],
    element: e
  } : null;
}
function Qs(e) {
  const t = {
    reportSettings: {
      cbName: e.querySelector("ReportSettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("ReportSettings")?.getAttribute("datSet") ?? null,
      rptID: e.querySelector("ReportSettings")?.getAttribute("rptID") ?? null,
      optFields: e.querySelector("ReportSettings")?.getAttribute("optFields") ?? null,
      bufTime: e.querySelector("ReportSettings")?.getAttribute("bufTime") ?? null,
      trgOps: e.querySelector("ReportSettings")?.getAttribute("trgOps") ?? null,
      intgPd: e.querySelector("ReportSettings")?.getAttribute("intgPd") ?? null,
      resvTms: e.querySelector("ReportSettings")?.getAttribute("resvTms") ?? null,
      owner: e.querySelector("ReportSettings")?.getAttribute("owner") ?? null
    },
    confReportControl: {
      max: e.querySelector("ConfReportControl")?.getAttribute("max") ?? null,
      bufMode: e.querySelector("ConfReportControl")?.getAttribute("bufMode") ?? null,
      maxBuf: e.querySelector("ConfReportControl")?.getAttribute("maxBuf") ?? null,
      bufConf: e.querySelector("ConfReportControl")?.getAttribute("bufConf") ?? null
    },
    clientServices: {
      maxReports: e.querySelector("ClientServices")?.getAttribute("maxReports") ?? null,
      bufReport: e.querySelector("ClientServices")?.getAttribute("bufReport") ?? null,
      unbufReport: e.querySelector("ClientServices")?.getAttribute("unbufReport") ?? null
    },
    dynDataSet: {
      max: e.querySelector("DynDataSet")?.getAttribute("max") ?? null,
      maxAttributes: e.querySelector("DynDataSet")?.getAttribute("maxAttributes") ?? null
    }
  };
  return Ze(t) ? null : [
    T("Control Block Configuration"),
    ...$([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.reportSettings.cbName,
        helper: "Whether report control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.reportSettings.datSet,
        helper: "Whether report control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "rptID",
        maybeValue: t.reportSettings.rptID,
        helper: "Whether report control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: t.reportSettings.optFields,
        helper: "Whether report control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufTime",
        maybeValue: t.reportSettings.bufTime,
        helper: "Whether report control blocks bufTime attribute is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: t.reportSettings.trgOps,
        helper: "Whether report control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: t.reportSettings.intgPd,
        helper: "Whether report control blocks integrity period is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "resvTms",
        helper: "Whether reserve time exists in all buffered report control blocks",
        maybeValue: t.reportSettings.resvTms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "owner",
        helper: "Whether owner attribute exists on all buffered report control blocks",
        maybeValue: t.reportSettings.owner?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Publisher Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of report control blocks instantiable by system configuration tool",
        maybeValue: t.confReportControl.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufMode",
        maybeValue: t.confReportControl.bufMode,
        helper: "Whether buffered, unbuffered or both type of report control block can be created by system configuration tool",
        values: ["unbuffered", "buffered", "both"],
        default: "both",
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxBuf",
        required: !1,
        helper: "The maximum number of BUFFERED report control blocks instantiable by system configuration tool",
        maybeValue: t.confReportControl.maxBuf?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufConf",
        helper: "Whether buffered attribute can be configured by system configuration tool",
        maybeValue: t.confReportControl.bufConf?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Client Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "maxReports",
        required: !0,
        helper: "The maximal number of report control blocks the client can work with",
        maybeValue: t.clientServices.maxReports?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufReport",
        helper: "Whether the IED can use buffered report control blocks as a client",
        maybeValue: t.clientServices.bufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "unbufReport",
        helper: "Whether the IED can use un-buffered report control blocks as a client",
        maybeValue: t.clientServices.unbufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Dynamic Reporting/DataSets"),
    ...$([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number data sets (including preconfigured once)",
        maybeValue: t.dynDataSet.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum number of data entries (FCDA) allowed within a dynamic data set",
        maybeValue: t.dynDataSet.maxAttributes?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Js(e) {
  const t = Ys(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "GSE Control" }),
    content: [...t],
    element: e
  } : null;
}
function Ys(e) {
  const t = {
    gseSettings: {
      cbName: e.querySelector("GSESettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("GSESettings")?.getAttribute("datSet") ?? null,
      appID: e.querySelector("GSESettings")?.getAttribute("appID") ?? null,
      dataLabel: e.querySelector("GSESettings")?.getAttribute("dataLabel") ?? null,
      kdaParticipant: e.querySelector("GSESettings")?.getAttribute("kdaParticipant") ?? null,
      signature: e.querySelector("GSESettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: e.querySelector("GSESettings > McSecurity")?.getAttribute("encryption") ?? null
    },
    goose: {
      max: e.querySelector("GOOSE")?.getAttribute("max") ?? null,
      fixedOffs: e.querySelector("GOOSE")?.getAttribute("fixedOffs") ?? null,
      goose: e.querySelector("GOOSE")?.getAttribute("goose") ?? null,
      rGOOSE: e.querySelector("GOOSE")?.getAttribute("rGOOSE") ?? null
    },
    clientServices: {
      maxGOOSE: e.querySelector("ClientServices")?.getAttribute("maxGOOSE") ?? null,
      goose: e.querySelector("ClientServices")?.getAttribute("goose") ?? null,
      rGOOSE: e.querySelector("ClientServices")?.getAttribute("rGOOSE") ?? null,
      gsse: e.querySelector("ClientServices")?.getAttribute("gsse") ?? null
    },
    supSubscription: {
      maxGo: e.querySelector("SupSubscription")?.getAttribute("maxGo") ?? null,
      maxSv: e.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    },
    gsse: {
      max: e.querySelector("GSSE")?.getAttribute("max") ?? null
    }
  };
  return Ze(t) ? null : [
    T("Control Block Configuration"),
    ...$([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.gseSettings.cbName,
        helper: "Whether GSE control block (GOOSE) name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.gseSettings.datSet,
        helper: "Whether GSE control blocks (GOOSE) data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "appID",
        maybeValue: t.gseSettings.appID,
        helper: "Whether GSE control blocks (GOOSE) ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "dataLabel",
        maybeValue: t.gseSettings.dataLabel,
        helper: "Deprecated!: Whether GSSE object reference is configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        maybeValue: t.gseSettings.kdaParticipant,
        helper: "Whether key delivery assurance (KDA) is supported by the server",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: t.gseSettings.signature,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: t.gseSettings.encryption,
        nullable: !0,
        default: !1
      }
    ]),
    T("Publisher Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of configurable GOOSE control blocks. 0 means no GOOSE publishing supported",
        maybeValue: t.goose.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "fixedOffs",
        maybeValue: t.goose.fixedOffs,
        helper: "Whether encoding with fixed offsets is configurable for each GSE control block (GOOSE). See also IEC 61850-8-1",
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether GOOSE publishing is supported",
        maybeValue: t.goose.goose,
        nullable: !0,
        default: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "Whether GOOSE with network layer 3 (IP) is supported",
        maybeValue: t.goose.rGOOSE,
        nullable: !0,
        default: !1
      }
    ]),
    T("Subscription Capabilities"),
    ...$([
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether the IED supports client side GOOSE related services",
        maybeValue: t.clientServices.goose?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxGOOSE",
        required: !0,
        helper: "The maximal number of GOOSEs the client can subscribe to",
        maybeValue: t.clientServices.maxGOOSE?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "The maximal number of GOOSEs with network layer 3 the client can subscribe to",
        maybeValue: t.clientServices.rGOOSE?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "gsse",
        helper: "Whether the IED supports client side GSSE related services",
        maybeValue: t.clientServices.gsse?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Supervision Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "maxGo",
        required: !1,
        helper: "The maximum number of GOOSE supervision supported by this IED (LGOS)",
        maybeValue: t.supSubscription.maxGo?.toString() ?? null,
        nullable: !0
      }
    ]),
    T("GSSE Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of GSSE supported as publisher. 0 means IED can only subscribe on GSSE messages",
        maybeValue: t.gsse.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function el(e) {
  const t = tl(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Networking" }),
    content: [...t],
    element: e
  } : null;
}
function tl(e) {
  const t = {
    fileHandling: {
      mms: e.querySelector("FileHandling")?.getAttribute("mms") ?? null,
      ftp: e.querySelector("FileHandling")?.getAttribute("ftp") ?? null,
      ftps: e.querySelector("FileHandling")?.getAttribute("ftps") ?? null
    },
    timeSyncProt: {
      sntp: e.querySelector("TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: e.querySelector("TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: e.querySelector("TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: e.querySelector("TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_TimeSyncProt: {
      sntp: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_McSecurity: {
      signature: e.querySelector("ClientServices > McSecurity")?.getAttribute("signature") ?? null,
      encryption: e.querySelector("ClientServices > McSecurity")?.getAttribute("encryption") ?? null
    },
    redProt: {
      hsr: e.querySelector("RedProt")?.getAttribute("hsr") ?? null,
      prp: e.querySelector("RedProt")?.getAttribute("prp") ?? null,
      rstp: e.querySelector("RedProt")?.getAttribute("rstp") ?? null
    },
    commProt: {
      ipv6: e.querySelector("CommProt")?.getAttribute("ipv6") ?? null
    }
  };
  return Ze(t) ? null : [
    T("File Handling"),
    ...$([
      {
        kind: "Checkbox",
        label: "mms",
        helper: "Whether the IED supports file transfer as defined by the manufacturer messaging service (MMS)",
        maybeValue: t.fileHandling.mms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftp",
        helper: "Whether the IED supports file transfer service (FTP)",
        maybeValue: t.fileHandling.ftp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftps",
        helper: "Whether the IED supports encrypted file transfer service (FTPS)",
        maybeValue: t.fileHandling.ftps?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Time Server Capabilities"),
    ...$([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-server",
        maybeValue: t.timeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-server",
        maybeValue: t.timeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-server",
        maybeValue: t.timeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-server (e.g. PPS)",
        maybeValue: t.timeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Time Client Capabilities"),
    ...$([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-client",
        maybeValue: t.cs_TimeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-client",
        maybeValue: t.cs_TimeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-client",
        maybeValue: t.cs_TimeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-client (e.g. PPS)",
        maybeValue: t.cs_TimeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Multicast Security on Server"),
    ...$([
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for SMV/GOOSE on this IED/access point",
        maybeValue: t.cs_McSecurity.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for SMV/GOOSE on this IED/access point",
        maybeValue: t.cs_McSecurity.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Redundancy Protocols"),
    ...$([
      {
        kind: "Checkbox",
        label: "hsr",
        helper: "Whether the IED supports redundancy protocol HSR",
        maybeValue: t.redProt.hsr?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "prp",
        helper: "Whether the IED supports redundancy protocol PRP",
        maybeValue: t.redProt.prp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rstp",
        helper: "Whether the IED supports redundancy protocol RSTP",
        maybeValue: t.redProt.rstp?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Others"),
    ...$([
      {
        kind: "Checkbox",
        label: "ipv6",
        helper: "Whether the IED supports IP version 6",
        maybeValue: t.commProt.ipv6?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ])
  ];
}
function il(e) {
  const t = rl(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Sampled Values" }),
    content: [...t],
    element: e
  } : null;
}
function rl(e) {
  const t = {
    controlBlockConfiguration: {
      cbName: e.querySelector("SMVSettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("SMVSettings")?.getAttribute("datSet") ?? null,
      svID: e.querySelector("SMVSettings")?.getAttribute("svID") ?? null,
      optFields: e.querySelector("SMVSettings")?.getAttribute("optFields") ?? null,
      smpRate: e.querySelector("SMVSettings")?.getAttribute("smpRate") ?? null,
      nofASDU: e.querySelector("SMVSettings")?.getAttribute("nofASDU") ?? null,
      samplesPerSec: e.querySelector("SMVSettings")?.getAttribute("samplesPerSec") ?? null,
      synchSrcId: e.querySelector("SMVSettings")?.getAttribute("synchSrcId") ?? null,
      pdcTimeStamp: e.querySelector("SMVSettings")?.getAttribute("pdcTimeStamp") ?? null,
      kdaParticipant: e.querySelector("SMVSettings")?.getAttribute("kdaParticipant") ?? null,
      signature: e.querySelector("SMVSettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: e.querySelector("SMVSettings > McSecurity")?.getAttribute("encryption") ?? null,
      smpRateVal: e.querySelector("SMVSettings>SmpRate")?.childNodes[0]?.nodeValue ?? null,
      samplesPerSecVal: e.querySelector("SMVSettings > SamplesPerSec")?.childNodes[0]?.nodeValue ?? null,
      secPerSamplesVal: e.querySelector("SMVSettings > SecPerSamples")?.childNodes[0]?.nodeValue ?? null
    },
    publisherCapabilities: {
      max: e.querySelector("SMVsc")?.getAttribute("max") ?? null,
      delivery: e.querySelector("SMVsc")?.getAttribute("delivery") ?? null,
      deliveryConf: e.querySelector("SMVsc")?.getAttribute("deliveryConf") ?? null,
      sv: e.querySelector("SMVsc")?.getAttribute("sv") ?? null,
      rSV: e.querySelector("SMVsc")?.getAttribute("rSV") ?? null
    },
    subscriptionCapabilities: {
      sv: e.querySelector("ClientServices")?.getAttribute("sv") ?? null,
      maxSMV: e.querySelector("ClientServices")?.getAttribute("maxSMV") ?? null,
      rSV: e.querySelector("ClientServices")?.getAttribute("rSV") ?? null
    },
    superVisionCapabilities: {
      maxSv: e.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    }
  };
  return Ze(t) ? null : [
    T("Control Block Configuration"),
    ...$([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.controlBlockConfiguration.cbName,
        helper: "Whether SMV control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.controlBlockConfiguration.datSet,
        helper: "Whether SMV control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "svID",
        maybeValue: t.controlBlockConfiguration.svID,
        helper: "Whether SMV control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: t.controlBlockConfiguration.optFields,
        helper: "Whether SMV control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "smpRate",
        maybeValue: t.controlBlockConfiguration.smpRate,
        helper: "Whether SMV control blocks attribute smpRate is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "nofASDU",
        maybeValue: t.controlBlockConfiguration.nofASDU,
        helper: "Whether SMV control blocks attribute noASDU (number of timesstapms per packet) is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "samplesPerSec",
        helper: "Whether SMV supported sample rate definition as SamplesPerSec or SecPerSamples",
        maybeValue: t.controlBlockConfiguration.samplesPerSec?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "synchSrcId",
        helper: "Whether grandmaster clock ID can be included in the SMV",
        maybeValue: t.controlBlockConfiguration.synchSrcId?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "pdcTimeStamp",
        helper: "Whether the PDC timestamp can be included into SMV",
        maybeValue: t.controlBlockConfiguration.pdcTimeStamp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        helper: "Whether server supports key delivery assurance (KDA)",
        maybeValue: t.controlBlockConfiguration.kdaParticipant?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: t.controlBlockConfiguration.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: t.controlBlockConfiguration.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "SmpRate",
        required: !0,
        helper: "Defines the implemented SmpRate in the IED",
        maybeValue: t.controlBlockConfiguration.smpRateVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SamplesPerSec",
        required: !0,
        helper: "Defines the implemented SamplesPerSec in the IED",
        maybeValue: t.controlBlockConfiguration.samplesPerSecVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SecPerSamples",
        required: !0,
        helper: "Defines the implemented SecPerSamples in the IED",
        maybeValue: t.controlBlockConfiguration.secPerSamplesVal?.toString() ?? null,
        nullable: !0
      }
    ]),
    T("Publisher Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of SMV control blocks the IED can publish",
        maybeValue: t.publisherCapabilities.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "delivery",
        maybeValue: t.publisherCapabilities.delivery,
        helper: "Whether the IED supports publishing of muslticast, unicast or both types of SMV streams",
        values: ["unicast", "multicast", "both"],
        default: "multicast",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "deliveryConf",
        helper: "Whether the system configurator is allowed to configure SMV control blocks",
        maybeValue: t.publisherCapabilities.deliveryConf?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether IED supports layer 2 sampled value streams",
        maybeValue: t.publisherCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "Whether the IED supports layer 3 sampled value streams",
        maybeValue: t.publisherCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Client Capabilities"),
    ...$([
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether the IED supports client side SMV related services",
        maybeValue: t.subscriptionCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxSMV",
        required: !1,
        helper: "The maximal number of layer 2 sampled value streams the client can subscribe to",
        maybeValue: t.subscriptionCapabilities.maxSMV?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "The maximal number of layer 3 sampled value streams the client can subscribe to",
        maybeValue: t.subscriptionCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    T("Dynamic Reporting/DataSets"),
    ...$([
      {
        kind: "TextField",
        label: "maxSv",
        required: !1,
        helper: "The maximum number of SMV supervision supported by this IED (LSVS)",
        maybeValue: t.superVisionCapabilities.maxSv?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function nl(e) {
  const t = al(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Client Server Services" }),
    content: [...t],
    element: e
  } : null;
}
function al(e) {
  const t = {
    dynamicAssociations: {
      max: e.querySelector("DynAssociation")?.getAttribute("max") ?? null
    },
    discoverCapabilities: {
      getDirectory: e.querySelector("GetDirectory") ? "true" : null,
      getDataObjectDefinition: e.querySelector("GetDataObjectDefinition") ? "true" : null,
      dataObjectDirectory: e.querySelector("DataObjectDirectory") ? "true" : null,
      getDataSetValue: e.querySelector("GetDataSetValue") ? "true" : null,
      setDataSetValue: e.querySelector("SetDataSetValue") ? "true" : null,
      setDataSetDirectory: e.querySelector("DataSetDirectory") ? "true" : null,
      readWrite: e.querySelector("ReadWrite") ? "true" : null
    },
    functionalNaming: {
      confLdName: e.querySelector("ConfLdName") ? "true" : null,
      supportsLdName: e.querySelector("ClientServices")?.getAttribute("supportsLdName") ?? null
    },
    clientCapabilities: {
      maxAttributes: e.querySelector("ClientServices")?.getAttribute("maxAttributes") ?? null,
      timerActivatedControl: e.querySelector("TimerActivatedControl") ? "true" : null,
      getCBValues: e.querySelector("GetCBValues") ? "true" : null,
      GSEDir: e.querySelector("GSEDir") ? "true" : null
    },
    valKindManipulationConfig: {
      setToRO: e.querySelector("ValueHandling")?.getAttribute("setToRO") ?? null
    },
    signalReferenceConfig: {
      max: e.querySelector("ConfSigRef")?.getAttribute("max") ?? null
    }
  };
  return Ze(t) ? null : [
    T("Dynamic Associations"),
    ...$([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum number of guaranteed parallel association with the IED. If missing, no association is possible",
        maybeValue: t.dynamicAssociations.max?.toString() ?? null,
        nullable: !0
      }
    ]),
    T("Discover Capabilities"),
    ...$([
      {
        kind: "Checkbox",
        label: "GetDirectory",
        helper: "Whether IED supports GetServerDirectory, GetLogicalDeviceDirectory, GetLogicalNodeDirectory",
        maybeValue: t.discoverCapabilities.getDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataObjectDefinition",
        helper: "Whether IED supports the service GetDataDefinition",
        maybeValue: t.discoverCapabilities.getDataObjectDefinition,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "DataObjectDirectory",
        helper: "Whether IED supports the service GetDataDirectory",
        maybeValue: t.discoverCapabilities.dataObjectDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataSetValue",
        helper: "Whether IED supports the service GetDataSetValues",
        maybeValue: t.discoverCapabilities.getDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetValue",
        helper: "Whether IED supports the service SetDataSetValue",
        maybeValue: t.discoverCapabilities.setDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetDirectory",
        helper: "Whether IED supports the service SetDataSetDirectory",
        maybeValue: t.discoverCapabilities.setDataSetDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ReadWrite",
        helper: "Whether IED supports the service GetData, SetData, and the Operate services",
        maybeValue: t.discoverCapabilities.readWrite,
        nullable: !0,
        default: !1
      }
    ]),
    T("Functional Naming"),
    ...$([
      {
        kind: "Checkbox",
        label: "ConfLdName",
        helper: "Whether the IED allows defining the attribute ldName in logical devices (LDevice)",
        maybeValue: t.functionalNaming.confLdName,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "supportsLdName",
        helper: "Whether the IED understands the logical device (LDevice) name (ldName) setting as a client",
        maybeValue: t.functionalNaming.supportsLdName,
        nullable: !0,
        default: !1
      }
    ]),
    T("Client Capabilities"),
    ...$([
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum receivable data attributes (across all data sets)",
        maybeValue: t.clientCapabilities.maxAttributes?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "TimerActivatedControl",
        helper: "Whether IED supports time activated control",
        maybeValue: t.clientCapabilities.timerActivatedControl,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetCBValues",
        helper: "Whether IED can read control blocks online",
        maybeValue: t.clientCapabilities.getCBValues,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GSEDir",
        helper: "Whether IED supports GSE directory services acc. to IEC 61850-7-2",
        maybeValue: t.clientCapabilities.GSEDir,
        nullable: !0,
        default: !1
      }
    ]),
    T("ValKind Manipulation Configuration"),
    ...$([
      {
        kind: "Checkbox",
        label: "setToRO",
        helper: "Whether valKind attribute in DA/BDA element that are Set can be modified to RO (only for function constrains for CF, DC, SP)",
        maybeValue: t.valKindManipulationConfig.setToRO,
        nullable: !0,
        default: !1
      }
    ]),
    T("Signal Reference Configuration"),
    ...$([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum object references that the IED can create (instantiation only by IED Configuration Tool)",
        maybeValue: t.signalReferenceConfig.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Ze(e, t = [null, void 0, ""]) {
  return (e === null ? [!1] : Object.keys(e).flatMap((i) => {
    const r = e[i];
    return typeof r == "object" ? Ze(r) : [t.includes(r)];
  })).includes(!0);
}
function ol(e) {
  let t = c``;
  switch (e.kind) {
    case "TextField":
    default:
      t = c`<wizard-textfield
        label=${e.label}
        .maybeValue=${e.maybeValue}
        .helper=${e.helper || ""}
        ?required=${e.required}
        .validationMessage=${e.validationMessage || ""}
        .pattern=${e.pattern || ""}
        .defaultValue=${e.default || ""}
        ?dialogInitialFocus=${e.dialogInitialFocus}
        ?nullable=${e.nullable}
        disabled
      ></wizard-textfield>`;
      break;
    case "Checkbox":
      t = c`<wizard-checkbox
        label=${e.label}
        .maybeValue=${e.maybeValue}
        .helper=${e.helper || ""}
        ?defaultValue=${e.default}
        ?dialogInitialFocus=${e.dialogInitialFocus}
        ?nullable=${e.nullable}
        disabled
      ></wizard-checkbox>`;
      break;
    case "Select":
      t = c`<wizard-select
        label=${e.label}
        .maybeValue=${e.maybeValue}
        .validationMessage=${e.valadationMessage || ""}
        .defaultValue=${e.default || ""}
        ?dialogInitialFocus=${e.dialogInitialFocus}
        ?nullable=${e.nullable}
        disabled
      >
        ${e.values.map((i) => c`<mwc-list-item .value=${i}>
            ${i}
          </mwc-list-item>`)}
      </wizard-select>`;
      break;
  }
  return t;
}
function $(e) {
  return e.map((t) => ol(t));
}
function T(e) {
  return c`<wizard-divider .header=${e}></wizard-divider>`;
}
function un(e) {
  return [
    Ks(e),
    Xs(e),
    Js(e),
    el(e),
    il(e),
    nl(e)
  ].filter((t) => t !== null).map((t) => t);
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
const Ar = /* @__PURE__ */ new WeakMap(), Cr = 2147483647, pn = Pt((...e) => (t) => {
  let i = Ar.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: Cr,
    values: []
  }, Ar.set(t, i));
  const r = i.values;
  let n = r.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const o = e[a];
    if (Rt(o) || typeof o.then != "function") {
      t.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < n && o === r[a] || (i.lastRenderedIndex = Cr, n = 0, Promise.resolve(o).then((s) => {
      const d = i.values.indexOf(o);
      d > -1 && d < i.lastRenderedIndex && (i.lastRenderedIndex = d, t.setValue(s), t.commit());
    }));
  }
});
function sl(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((r) => {
    i[r.name] = r.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Ft(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const mn = {
  IED: [
    {
      attributeName: "iedName",
      filter: qe("Association")
    },
    {
      attributeName: "iedName",
      filter: qe("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: qe("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: qe("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: qe("KDC")
    },
    {
      attributeName: "iedName",
      filter: qe("LNode")
    },
    {
      attributeName: null,
      filter: Xt("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: Xt("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: Xt("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: qe("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Er("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Er("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function qe(e) {
  return function(i, r, n) {
    return `${e}[${r}="${n}"]`;
  };
}
function Xt(e) {
  return function() {
    return `${e}`;
  };
}
function Er(e, t) {
  return function(r, n, a) {
    return `${e}${Object.entries(t).map(([o, s]) => {
      const d = r.closest(o);
      if (d && d.hasAttribute("name")) {
        const u = d.getAttribute("name");
        return `[${s}="${u}"]`;
      }
      return null;
    }).join("")}[${n}="${a}"]`;
  };
}
function ll(e, t, i) {
  const r = e.cloneNode(!1);
  return r.setAttribute(t, i), r;
}
function hn(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function Mi(e, t, i) {
  if (t === null || t === i)
    return [];
  const r = mn[e.tagName];
  if (r === void 0)
    return [];
  const n = [];
  return r.forEach((a) => {
    const o = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter(ue).forEach((s) => {
      const d = ll(
        s,
        a.attributeName,
        i
      );
      n.push({ old: { element: s }, new: { element: d } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter((s) => s.textContent === t).filter(ue).forEach((s) => {
      const d = hn(s, i);
      n.push({ old: { element: s }, new: { element: d } });
    });
  }), e.tagName === "IED" && n.push(...cl(e, t, i)), n;
}
function cl(e, t, i) {
  const r = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const o = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (o.length === 0) return;
    const s = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), d = s?.getAttribute("srcLDInst") + "/" + s?.getAttribute("srcLNClass") + "." + s?.getAttribute("srcCBName");
    for (let u of o)
      if (t + d === u.textContent.trim()) {
        const m = hn(
          u,
          i + d
        );
        r.push({
          old: { element: u },
          new: { element: m }
        });
        break;
      }
  }), r;
}
function fn(e) {
  const t = M(e) ?? null;
  if (t === null)
    return [];
  const i = mn[e.tagName];
  if (i === void 0)
    return [];
  const r = [];
  return i.forEach((n) => {
    const a = n.filter(e, n.attributeName, t);
    n.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(ue).forEach((o) => {
      r.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === t).filter(ue).forEach((o) => {
      o.parentElement && r.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), r;
}
function bn(e) {
  return (t) => {
    const i = f(t.find((a) => a.label === "name")), r = f(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && r === e.getAttribute("desc"))
      return [];
    const n = V(e, { name: i, desc: r });
    return [{ old: { element: e }, new: { element: n } }];
  };
}
function dl(e, t) {
  return (i) => {
    const r = f(i.find((d) => d.label === "name")), n = e.getAttribute("name"), a = f(i.find((d) => d.label === "desc"));
    if (r === n && a === e.getAttribute("desc"))
      return [];
    const o = V(e, { name: r, desc: a }), s = {
      actions: [],
      title: l(t, { name: r })
    };
    return s.actions.push({
      old: { element: e },
      new: { element: o }
    }), s.actions.push(...Mi(e, n, r)), s.actions.length ? [s] : [];
  };
}
function gn(e, t) {
  return (i) => {
    const r = {};
    if (ul(r, e, i), Object.keys(r).length == 0)
      return [];
    pl(e, r);
    const n = f(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: l(t, { name: n })
    };
    return a.actions.push(sl(e, r)), a.actions.push(
      ...Mi(e, e.getAttribute("name"), n)
    ), a.actions.length ? [a] : [];
  };
}
function ul(e, t, i) {
  const r = f(i.find((a) => a.label === "name")), n = f(i.find((a) => a.label === "desc"));
  r !== t.getAttribute("name") && (e.name = r), n !== t.getAttribute("desc") && (e.desc = n);
}
function pl(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((r) => !i.includes(r.name)).forEach((r) => {
    t[r.name] = r.value;
  }), t;
}
function yn(e, t) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("bay.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ml(e) {
  return (t) => {
    const i = f(t.find((o) => o.label === "name")), r = f(t.find((o) => o.label === "desc")), n = I(e.ownerDocument, "Bay", {
      name: i,
      desc: r
    });
    return [{
      new: {
        parent: e,
        element: n
      }
    }];
  };
}
function hl(e) {
  return [
    {
      title: l("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: ml(e)
      },
      content: yn("", "")
    }
  ];
}
function fl(e) {
  return [
    {
      title: l("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: dl(
          e,
          "bay.action.updateBay"
        )
      },
      content: yn(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const yi = {
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
function bl(e) {
  if (!e) return null;
  const [t, i, r, n, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), o = [`IED[name="${r}"]`, "IED"], s = ["AccessPoint > Server"], d = [
    `LDevice[inst="${n}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], u = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    J(
      o,
      [" > "],
      s,
      [" > "],
      d,
      u
    ).map((m) => m.join("")).join(",")
  );
}
function vn(e) {
  const t = e?.ownerDocument, i = e.getAttribute("lnType"), r = e.getAttribute("lnClass"), n = t.querySelector(
    `DataTypeTemplates > LNodeType[id="${i}"][lnClass="${r}"] > DO[name="SwTyp"]`
  );
  if (n) {
    const a = n.getAttribute("type");
    return t.querySelector(
      `DataTypeTemplates > DOType[id="${a}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function gl(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : vn(e);
}
function yl(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function vl(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = bl(t);
  let r;
  return i ? r = gl(i) : t && (r = vn(t)), r ? ["Earthing Switch", "High Speed Earthing Switch"].includes(r) : !1;
}
function Sl(e) {
  return e.getAttribute("type") === "DIS" && (yl(e) || vl(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function xl(e) {
  return yi[Sl(e)] ?? l("conductingequipment.unknownType");
}
function wl(e, t) {
  return e === "create" ? c`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
      >
        ${Object.keys(yi).map(
    (i) => c`<mwc-list-item value="${i}">${yi[i]}</mwc-list-item>`
  )}
      </mwc-select>` : c`<mwc-select
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function Sn(e, t, i, r, n) {
  return [
    wl(i, r),
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function Al(e) {
  return (t) => {
    const i = f(t.find((C) => C.label === "name")), r = f(t.find((C) => C.label === "desc")), n = f(t.find((C) => C.label === "type")), a = n === "ERS" ? "DIS" : n, o = I(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: r
    });
    if (n !== "ERS") return [{ new: { parent: e, element: o } }];
    const s = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), d = s ? s.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, u = s ? s.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = s ? s.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = m && u && d ? d + "/" + u + "/" + m + "/grounded" : null;
    o.appendChild(
      I(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: d,
        voltageLevelName: u,
        bayName: m,
        connectivityNode: h
      })
    );
    const g = {
      new: {
        parent: e,
        element: o
      }
    };
    if (s) return [g];
    const v = I(
      e.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: h
      }
    );
    return [g, {
      new: {
        parent: e,
        element: v
      }
    }];
  };
}
function xn(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function Cl(e) {
  const t = xn(e);
  return [
    {
      title: l("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: Al(e)
      },
      content: Sn(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function El(e) {
  const t = xn(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: l("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: bn(e)
      },
      content: Sn(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        xl(e),
        t
      )
    }
  ];
}
function kl(e, t, i) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${l("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function _l(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: l("connectivitynode.wizard.title.edit"),
      element: e,
      content: kl(
        e.getAttribute("name"),
        e.getAttribute("pathName"),
        t
      )
    }
  ];
}
var Dl = Object.defineProperty, Il = Object.getOwnPropertyDescriptor, _e = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Il(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Dl(t, i, n), n;
};
const Nl = c`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${l("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ye = class extends ve {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: c`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return dn(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(e) {
    const t = {};
    for (const i of e) {
      let r = t;
      for (const n of i)
        Object.prototype.hasOwnProperty.call(r, n) || (r[n] = {}), r = r[n];
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
    let t = Object.keys(this.selection).map((r) => [r]), i = e ?? this.depth - 1;
    for (; i-- > 0; )
      t = t.flatMap((r) => {
        let n = this.selection;
        for (const o of r) n = n[o];
        const a = Object.keys(n).map((o) => r.concat(o));
        return a.length === 0 ? [r] : a;
      });
    return e === void 0 ? t : t.filter((r) => r.length > e);
  }
  multiSelect(e, t, i) {
    let r = this.selection;
    for (const n of t) r = r[n];
    r && r[i] ? delete r[i] : r[i] = {};
  }
  singleSelect(e, t, i) {
    this.path[t.length] === i ? this.path = t : this.path = t.concat(i);
  }
  async select(e, t) {
    const i = e.target.selected.value;
    this.multi ? this.multiSelect(e, t, i) : this.singleSelect(e, t, i), this.requestUpdate(), await this.updateComplete, await new Promise((r) => setTimeout(r, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(e, t) {
    return c`<filtered-list
      @selected=${(i) => this.select(i, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (i) => c`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(e.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(e.concat(i)))}
            >${this.getDisplayString(i, e)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(e) {
    const i = this.getPaths(e).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: a, path: o } of i)
      (n || a.length > 0) && r.push(
        c`${me(n)} ${this.renderDirectory(o, a)}`
      );
    return r.length === 0 ? c`` : c`<div class="column">${r}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), c`<div class="pane">
      ${e.map((t) => pn(t, Nl))}
    </div>`;
  }
};
ye.styles = ne`
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
_e([
  b({ type: Object })
], ye.prototype, "selection", 2);
_e([
  b({ type: Boolean })
], ye.prototype, "multi", 2);
_e([
  b({ type: Number })
], ye.prototype, "depth", 1);
_e([
  b({ type: Array })
], ye.prototype, "paths", 1);
_e([
  b({ type: Array })
], ye.prototype, "path", 1);
_e([
  b({ attribute: !1 })
], ye.prototype, "read", 2);
_e([
  b({ attribute: !1 })
], ye.prototype, "loaded", 2);
_e([
  F("div")
], ye.prototype, "container", 2);
ye = _e([
  G("finder-list")
], ye);
function $l(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function Tl(e, t) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), a = Ce(e, r, n);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (o) => `${o.tagName}: ${L(o)}`
      )
    } : { path: i, header: c`<p>${l("error")}</p>`, entries: [] };
  };
}
function wn(e) {
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
function Ll(e) {
  return c`<finder-list
    multi
    .paths=${[["Server: " + L(e)]]}
    .read=${Tl(e.ownerDocument, wn)}
    .getDisplayString=${$l}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function zl(e, t) {
  const [i, r] = t[t.length - 1].split(": "), n = Ce(e.ownerDocument, i, r);
  if (!n || wn(n).length > 0) return;
  const a = t.find((_) => _.startsWith("LN"));
  if (!a) return;
  const [o, s] = a.split(": "), d = Ce(e.ownerDocument, o, s);
  if (!d) return;
  const u = d.closest("LDevice")?.getAttribute("inst"), m = d.getAttribute("prefix") ?? "", h = d.getAttribute("lnClass"), g = d.getAttribute("inst") && d.getAttribute("inst") !== "" ? d.getAttribute("inst") : null;
  let v = "", w = "", C = "";
  for (const _ of t) {
    const [A, q] = _.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(A)) continue;
    const U = Ce(e.ownerDocument, A, q);
    if (!U) return;
    const De = U.getAttribute("name");
    A === "DO" && (v = De), A === "SDO" && (v = v + "." + De), A === "DA" && (w = De, C = U.getAttribute("fc") ?? ""), A === "BDA" && (w = w + "." + De);
  }
  if (!(!u || !h || !v || !w || !C))
    return I(e.ownerDocument, "FCDA", {
      ldInst: u,
      prefix: m,
      lnClass: h,
      lnInst: g,
      doName: v,
      daName: w,
      fc: C
    });
}
function Vl(e) {
  return (t, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of n) {
      const s = zl(e, o);
      s && a.push({
        new: {
          parent: e,
          element: s,
          reference: null
        }
      });
    }
    return a;
  };
}
function An(e) {
  const t = e.closest("Server");
  return [
    {
      title: l("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Vl(e)
      },
      content: [t ? Ll(t) : c``]
    }
  ];
}
const Ee = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, Hi = {
  cbName: 32,
  abstracDaName: 60
};
function Qt(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Pl(e) {
  return (t, i, r) => {
    const n = r.items.filter((s) => s.selected).map((s) => s.value).map((s) => Ce(e.ownerDocument, "LNodeType", s)).filter((s) => s !== null), a = Gs(e);
    return n.map((s) => {
      const d = s.getAttribute("lnClass");
      if (!d) return null;
      const u = a(d);
      if (!u) {
        i.dispatchEvent(
          Qt({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = Q(e, "LNode").some(
        (w) => w.getAttribute("lnClass") === "LLN0"
      );
      if (d === "LLN0" && m) {
        i.dispatchEvent(
          Qt({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const h = Q(e, "LNode").some(
        (w) => w.getAttribute("lnClass") === "LPHD"
      );
      if (d === "LPHD" && h) {
        i.dispatchEvent(
          Qt({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const g = d === "LLN0" ? "" : u, v = I(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: d,
        lnInst: g,
        lnType: s.getAttribute("id")
      });
      return { new: { parent: e, element: v } };
    }).filter((s) => s);
  };
}
function Rl(e) {
  return (t) => {
    t.dispatchEvent(j()), t.dispatchEvent(j(kn(e)));
  };
}
function Cn(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: l("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: l("lnode.wizard.reference"),
          action: Rl(e)
        }
      ],
      primary: {
        icon: "save",
        label: l("save"),
        action: Pl(e)
      },
      content: [
        c`<filtered-list multi
          >${t.map((i) => {
          const r = i.getAttribute("lnClass") === "LLN0" && Q(e, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && Q(e, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LPHD"
          );
          return c`<mwc-check-list-item
              twoline
              value="${L(i)}"
              ?disabled=${r}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${r ? l("lnode.wizard.uniquewarning") : L(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Ol = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function En(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Fl = "Client LN";
function kr(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => Bi(t, i))[0] ?? null;
}
function Bi(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function ql(e, t) {
  const i = I(e.ownerDocument, "LNode", {
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
function Ml(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function Hl(e, t) {
  return e.some((i) => Bi(i, t));
}
function Bl(e, t) {
  return t.some((i) => Bi(e, i));
}
function Gl(e) {
  return (t, i, r) => {
    const n = r.items.filter((d) => d.selected).map((d) => d.value).map((d) => {
      const u = Ce(e.ownerDocument, "LN0", d);
      return u || Ce(e.ownerDocument, "LN", d);
    }).filter((d) => d !== null), a = Q(e, "LNode").filter(
      ue
    ), o = a.filter((d) => !Hl(n, d)).map((d) => Ml(e, d)), s = n.filter((d) => !Bl(d, a)).map((d) => ql(e, d));
    return o.concat(s);
  };
}
function Wl(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function Ul(e, t) {
  if (!(e.target instanceof de)) return;
  const i = Wl(e.target, "#lnList");
  if (i === null) return;
  const r = t.ownerDocument, o = e.target.selected.flatMap(
    (s) => Array.from(
      r.querySelectorAll(
        `:root > IED[name="${s.value}"] > AccessPoint > LN,:root > IED[name="${s.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${s.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((d) => !d.closest("Private"))
  ).filter((s) => s !== null).map((s) => {
    const d = Ol[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(s.getAttribute("lnClass") ?? "") ?? !1, u = kr(t.ownerDocument, s), m = u?.parentElement === t;
    return {
      selected: m,
      disabled: u !== null && !m,
      prefered: d,
      element: s
    };
  }).sort(En).map((s) => c`<mwc-check-list-item
      ?selected=${s.selected}
      ?disabled=${s.disabled}
      value="${L(s.element)}"
      twoline
      ><span
        >${s.element.getAttribute("prefix") ?? ""}${s.element.getAttribute("lnClass")}${s.element.getAttribute(
    "inst"
  ) ?? ""}
        ${s.disabled ? c` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${qo(kr(r, s.element))}` : ""}</span
      ><span slot="secondary"
        >${s.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${s.element.closest("LDevice") ? s.element.closest("LDevice")?.getAttribute("inst") : Fl}</span
      ></mwc-check-list-item
    >`);
  Ei(c`${o}`, i);
}
function jl(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? c`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => Ul(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((r) => !r.closest("Private")).filter(
      (r) => r.tagName === "LNode" && r.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(En).map(
    (i) => c`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : c`<mwc-list-item noninteractive graphic="icon">
      <span>${l("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Kl(e) {
  return (t) => {
    t.dispatchEvent(j()), t.dispatchEvent(j(Cn(e)));
  };
}
function kn(e) {
  return [
    {
      title: l("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: l("lnode.wizard.instance"),
          action: Kl(e)
        }
      ],
      content: [jl(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: l("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: l("save"),
        action: Gl(e)
      },
      content: [c`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Zl(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? Cn(e) : kn(e);
}
function Xl(e) {
  const t = e.iedName !== "None";
  return [
    c`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${l("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${l("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${l("scl.prefix")}"
      pattern="${Ee.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${l("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${l("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function Ql(e) {
  return (t) => {
    const i = {}, r = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    r.forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    let n = null;
    if (r.some((a) => i[a] !== e.getAttribute(a))) {
      const a = V(e, i);
      return n = {
        old: { element: e },
        new: { element: a }
      }, [n];
    }
    return [];
  };
}
function Jl(e) {
  const [t, i, r, n, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => e.getAttribute(s)), o = Q(
    e.parentElement,
    "LNode"
  ).filter(
    (s) => s !== e && s.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((s) => s.getAttribute("lnInst"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: Ql(e)
      },
      content: [
        ...Xl({
          iedName: t,
          ldInst: i,
          prefix: r,
          lnClass: n,
          lnInst: a,
          reservedLnInst: o
        })
      ]
    }
  ];
}
function Yl(e) {
  return Object.entries(e).map(
    ([t, i]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function ec(e) {
  return (t) => {
    const i = f(t.find((h) => h.label === "seqNum")), r = f(t.find((h) => h.label === "timeStamp")), n = f(t.find((h) => h.label === "dataSet")), a = f(t.find((h) => h.label === "reasonCode")), o = f(t.find((h) => h.label === "dataRef")), s = f(t.find((h) => h.label === "entryID")), d = f(t.find((h) => h.label === "configRef")), u = f(t.find((h) => h.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && r === e.getAttribute("timeStamp") && n === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && o === e.getAttribute("dataRef") && s === e.getAttribute("entryID") && d === e.getAttribute("configRef") && u === e.getAttribute("bufOvfl"))
      return [];
    const m = V(e, {
      seqNum: i,
      timeStamp: r,
      dataSet: n,
      reasonCode: a,
      dataRef: o,
      entryID: s,
      configRef: d,
      bufOvfl: u
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function tc(e) {
  const [
    t,
    i,
    r,
    n,
    a,
    o,
    s,
    d
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((u) => e.getAttribute(u));
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: l("save"),
        action: ec(e)
      },
      content: Yl({
        seqNum: t,
        timeStamp: i,
        dataSet: r,
        reasonCode: n,
        dataRef: a,
        entryID: o,
        configRef: s,
        bufOvfl: d
      })
    }
  ];
}
let ic = 1, _n = 1, Dn = 1;
function rc(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      I(t.ownerDocument, "LNode", {
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
function In(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function nc(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && In(e) === "CBR" ? "QA" + _n++ : "QB" + Dn++;
}
function ac(e, t) {
  if (Array.from(
    e.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((r) => t.includes(r.innerHTML.trim())).length)
    return !0;
  const i = e.ownerDocument;
  return Array.from(
    i.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${e.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((r) => r.getAttribute("type")).flatMap(
    (r) => Array.from(
      i.querySelectorAll(
        `DOType[id="${r}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((r) => t.includes(r.innerHTML.trim())).length > 0;
}
function oc(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function sc(e, t) {
  return e.parentElement ? oc(e).filter((i) => ac(i, t)) : [];
}
function lc(e, t) {
  const i = sc(e, t);
  if (_n = 1, Dn = 1, i.length) {
    const r = I(e.ownerDocument, "Bay", {
      name: "Q" + ic++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => rc(
      I(e.ownerDocument, "ConductingEquipment", {
        name: nc(a),
        type: In(a)
      }),
      a
    )).forEach((a) => r.appendChild(a)), r;
  }
  return null;
}
function cc(e, t) {
  return (i, r, n) => {
    const a = [], o = n.selected.map(
      (u) => u.value
    ), s = I(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), d = I(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return d.textContent = "110.00", s.appendChild(d), a.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), a.push({
      new: {
        parent: t,
        element: s
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(cn).map((u) => lc(u, o)).forEach((u) => {
      u && a.push({ new: { parent: s, element: u } });
    }), a;
  };
}
function dc(e, t) {
  return [
    {
      title: l("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: l("guess.wizard.primary"),
        action: cc(e, t)
      },
      content: [
        c`<p>${l("guess.wizard.description")}</p>`,
        c`<mwc-list multi id="ctlModelList"
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
const uc = {
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
}, pc = {
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
}, _r = { en: pc, de: uc };
async function mc(e) {
  return Object.keys(_r).includes(e) ? _r[e] : {};
}
Wa({ loader: mc, empty: (e) => e });
const Nn = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Nn);
Za(Nn);
function $n(e, t, i) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("substation.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? c`<mwc-formfield label="${l("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : c``
  ];
}
function hc(e) {
  return (t, i) => {
    const r = f(t.find((s) => s.label === "name")), n = f(t.find((s) => s.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const o = I(e.ownerDocument, "Substation", {
      name: r,
      desc: n
    });
    return a ? [() => dc(e.ownerDocument, o)] : [{ new: { parent: e, element: o } }];
  };
}
function fc(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: l("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: hc(e)
      },
      content: $n("", "", t)
    }
  ];
}
function bc(e) {
  return [
    {
      title: l("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: gn(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: $n(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function gc(e, t, i, r) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("terminal.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${l("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${l("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function yc(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: l("terminal.wizard.title.edit"),
      element: e,
      content: gc(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const Nt = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Tn(e, t, i, r, n, a) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${mt.unsigned}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${l("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${l("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="Voltage"
      .maybeValue=${n}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${l("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${mt.decimal}"
    ></wizard-textfield>`
  ];
}
function vc(e) {
  return (t) => {
    const i = f(t.find((u) => u.label === "name")), r = f(t.find((u) => u.label === "desc")), n = f(t.find((u) => u.label === "nomFreq")), a = f(t.find((u) => u.label === "numPhases")), o = f(t.find((u) => u.label === "Voltage")), s = Fi(t.find((u) => u.label === "Voltage")), d = I(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: r,
      nomFreq: n,
      numPhases: a
    });
    if (o !== null) {
      const u = I(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: s
      });
      u.textContent = o, d.appendChild(u);
    }
    return [
      {
        new: {
          parent: e,
          element: d
        }
      }
    ];
  };
}
function Sc(e) {
  return [
    {
      title: l("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: vc(e)
      },
      content: Tn(
        "",
        "",
        Nt.nomFreq,
        Nt.numPhases,
        Nt.Voltage,
        Nt.multiplier
      )
    }
  ];
}
function xc(e, t, i, r) {
  if (e === null) {
    const a = I(r.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: i
    });
    return a.textContent = t, {
      new: {
        parent: r,
        element: a,
        reference: r.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: r,
        element: e,
        reference: e.nextSibling
      }
    };
  const n = V(e, { multiplier: i });
  return n.textContent = t, {
    old: { element: e },
    new: { element: n }
  };
}
function wc(e) {
  return (t) => {
    const i = t.find((h) => h.label === "name").value, r = f(t.find((h) => h.label === "desc")), n = f(t.find((h) => h.label === "nomFreq")), a = f(t.find((h) => h.label === "numPhases")), o = f(t.find((h) => h.label === "Voltage")), s = Fi(t.find((h) => h.label === "Voltage"));
    let d, u;
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      d = null;
    else {
      const h = V(e, {
        name: i,
        desc: r,
        nomFreq: n,
        numPhases: a
      });
      d = { old: { element: e }, new: { element: h } };
    }
    o === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && s === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? u = null : u = xc(
      e.querySelector("VoltageLevel > Voltage"),
      o,
      s,
      d?.new.element ?? e
    );
    const m = {
      actions: [],
      title: l("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return d && m.actions.push(d), u && m.actions.push(u), m.actions.push(
      ...Mi(e, e.getAttribute("name"), i)
    ), m.actions.length ? [m] : [];
  };
}
function Ac(e) {
  return [
    {
      title: l("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: wc(e)
      },
      content: Tn(
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
const Ln = "PTR";
function Cc(e) {
  return (t) => {
    const i = f(t.find((o) => o.label === "name")), r = f(t.find((o) => o.label === "desc")), n = I(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: r,
      type: Ln
    });
    return [{
      new: {
        parent: e,
        element: n
      }
    }];
  };
}
function zn(e, t, i, r) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${l("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function Vn(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function Ec(e) {
  const t = Vn(e);
  return [
    {
      title: l("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: Cc(e)
      },
      content: zn(
        "",
        null,
        Ln,
        t
      )
    }
  ];
}
function kc(e) {
  const t = Vn(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: l("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: bn(e)
      },
      content: zn(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function _c(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${l("subnetwork.wizard.typeHelper")}"
      pattern="${mt.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${l("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${mt.decimal}"
    ></wizard-textfield>`
  ];
}
function Dc(e, t, i, r) {
  if (e === null) {
    const a = I(r.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return i && a.setAttribute("multiplier", i), t && (a.textContent = t), {
      new: {
        parent: r,
        element: a,
        reference: r.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: r,
        element: e,
        reference: e.nextSibling
      }
    };
  const n = V(e, { multiplier: i });
  return n.textContent = t, {
    old: { element: e },
    new: { element: n }
  };
}
function Ic(e) {
  return (t) => {
    const i = t.find((m) => m.label === "name").value, r = f(t.find((m) => m.label === "desc")), n = f(t.find((m) => m.label === "type")), a = f(t.find((m) => m.label === "BitRate")), o = Fi(t.find((m) => m.label === "BitRate"));
    let s, d;
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("type"))
      s = null;
    else {
      const m = V(e, { name: i, desc: r, type: n });
      s = { old: { element: e }, new: { element: m } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? d = null : d = Dc(
      e.querySelector("SubNetwork > BitRate"),
      a,
      o,
      s?.new.element ?? e
    );
    const u = [];
    return s && u.push(s), d && u.push(d), u;
  };
}
function Nc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Ic(e)
      },
      content: _c({ name: t, desc: i, type: r, BitRate: n, multiplier: a })
    }
  ];
}
const $c = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Tc(e) {
  return $c.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const Lc = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function zc(e) {
  return Lc.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function Vc(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const r of e) {
    const n = r.old.element, a = r.old.parent, o = L(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const s = i[o].querySelector(
      `ExtRef${n.getAttribute("iedName") ? `[iedName="${n.getAttribute("iedName")}"]` : ""}${Tc(n)}${n.getAttribute("serviceType") ? `[serviceType="${n.getAttribute("serviceType")}"]` : ""}${zc(n)}`
    );
    s && i[o].removeChild(s);
  }
  return Object.entries(i).forEach(([r, n]) => {
    if (n.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, o = Ce(a, "Inputs", r);
      o && o.parentElement && t.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), t;
}
const Pc = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Rc(e, t, i, r, n, a, o, s, d) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("ied.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${d}
      pattern="${Pc}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ied.wizard.descHelper")}"
      pattern="${Ee.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="manufacturer"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="configVersion"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="engRight"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="owner"
      .maybeValue=${s || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Oc(e) {
  return [
    c` <section>
      <h1>${l("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return c` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${L(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Fc(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function qc(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(ue).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function Mc(e) {
  return (t, i) => {
    i.dispatchEvent(j());
    const r = fn(e), n = r.filter(
      (d) => d.old.element.tagName === "ExtRef"
    ), a = Vc(n), o = e.getAttribute("name") ?? "Unknown", s = {
      actions: [],
      title: l("ied.action.deleteied", { name: o })
    };
    return s.actions.push({
      old: { parent: e.parentElement, element: e }
    }), s.actions.push(...r), s.actions.push(...a), [s];
  };
}
function Pn(e) {
  const t = fn(e);
  return t.length > 0 ? [
    {
      title: l("ied.wizard.title.delete"),
      content: Oc(t),
      primary: {
        icon: "delete",
        label: l("remove"),
        action: Mc(e)
      }
    }
  ] : null;
}
function Hc(e) {
  function t(i) {
    return (r) => {
      const n = Pn(i);
      n && r.dispatchEvent(Ke(() => n)), r.dispatchEvent(
        Ft({ old: { parent: i.parentElement, element: i } })
      ), r.dispatchEvent(j());
    };
  }
  return [
    {
      title: l("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: l("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: l("save"),
        action: gn(
          e,
          "ied.action.updateied"
        )
      },
      content: Rc(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        Fc(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        qc(e)
      )
    }
  ];
}
const Bc = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Gc(e, t, i, r) {
  return [
    t ? c`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${l("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : c`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${l("ldevice.wizard.nameHelper")}"
          validationMessage="${l("textfield.required")}"
          dialogInitialFocus
          pattern="${Bc}"
        ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${l("ldevice.wizard.descHelper")}"
      pattern="${Ee.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="ldInst"
      .maybeValue=${r}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Wc(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function Uc(e) {
  return (t) => {
    const i = {}, r = ["ldName", "desc"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function jc(e) {
  return [
    {
      title: l("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Uc(e)
      },
      content: Gc(
        e.getAttribute("ldName"),
        !Wc(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Kc(e) {
  return Object.entries(e).map(
    ([t, i]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Zc(e) {
  return (t) => {
    const i = f(t.find((u) => u.label === "dchg")), r = f(t.find((u) => u.label === "qchg")), n = f(t.find((u) => u.label === "dupd")), a = f(t.find((u) => u.label === "period")), o = f(t.find((u) => u.label === "gi"));
    if (i === e.getAttribute("dchg") && r === e.getAttribute("qchg") && n === e.getAttribute("dupd") && a === e.getAttribute("period") && o === e.getAttribute("gi"))
      return [];
    const s = V(e, {
      dchg: i,
      qchg: r,
      dupd: n,
      period: a,
      gi: o
    });
    return [{ old: { element: e }, new: { element: s } }];
  };
}
function Xc(e) {
  const [t, i, r, n, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Zc(e)
      },
      content: Kc({ dchg: t, qchg: i, dupd: r, period: n, gi: a })
    }
  ];
}
const Qc = [
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
], Jc = [
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
], Yc = ["Spec", "Conf", "RO", "Set"], ed = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], Rn = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function td(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const r = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${r}"] > EnumVal`)
  ).map(
    (s) => c`<mwc-list-item
        value="${s.textContent?.trim() ?? ""}"
        ?selected=${s.textContent?.trim() === i}
        >${s.textContent?.trim()}</mwc-list-item
      >`
  ), o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Ei(c`${a}`, o), o.requestUpdate();
}
function id(e, t, i) {
  const r = e.target.selected.value, n = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  n.disabled = !(r === "Enum" || r === "Struct");
  const a = [];
  Array.from(n.children).forEach((d) => {
    const u = d;
    u.disabled = !d.classList.contains(r), u.noninteractive = !d.classList.contains(r), u.style.display = d.classList.contains(r) ? "" : "none", u.disabled || a.push(u);
  }), n.value = a.length ? a[0].value : "";
  const o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  r === "Enum" ? o.style.display = "" : o.style.display = "none";
  const s = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  r === "Enum" || r === "Struct" ? s.style.display = "none" : s.style.display = "", o.requestUpdate(), s.requestUpdate(), n.requestUpdate();
}
function rd(e, t, i, r, n, a, o, s, d, u) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("scl.name")}"
      required
      pattern="${Ee.abstractDataAttributeName}"
      maxLength="${Hi.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    c`<wizard-textfield
      label="desc"
      helper="${l("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${Ee.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${l("scl.bType")}"
      required
      @selected=${(m) => id(m)}
      >${Jc.map(
      (m) => c`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    c`<wizard-select
      label="type"
      .maybeValue=${n}
      helper="${l("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => td(m, u, d)}
      >${r.map(
      (m) => c`<mwc-list-item
            class="${m.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${m.id}
            >${m.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${l("scl.sAddr")}"
      nullable
      pattern="${Ee.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${l("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Yc.map(
      (m) => c`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    c`<wizard-checkbox
      label="valImport"
      .maybeValue=${s}
      helper="${l("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    c`<wizard-select
      label="Val"
      .maybeValue=${d}
      helper="${l("scl.Val")}"
      nullable
      >${Array.from(
      u.querySelectorAll(`EnumType > EnumVal[id="${n}"]`)
    ).map(
      (m) => c`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="Val"
      .maybeValue=${d}
      helper="${l("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function nd(e, t, i, r) {
  return [
    c`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${l("scl.fc")}"
      required
      fixedMenuPosition
      >${Qc.map(
      (n) => c`<mwc-list-item value="${n}">${n}</mwc-list-item>`
    )}</wizard-select
    >`,
    c`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${l("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    c`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${l("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    c`<wizard-checkbox
      label="dupd"
      .maybeValue=${r}
      helper="${l("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ad(e) {
  return (t) => {
    const i = f(t.find((A) => A.label === "name")), r = f(t.find((A) => A.label === "desc")), n = f(t.find((A) => A.label === "bType")), a = n === "Enum" || n === "Struct" ? f(t.find((A) => A.label === "type")) : null, o = f(t.find((A) => A.label === "sAddr")), s = f(t.find((A) => A.label === "valKind")), d = f(t.find((A) => A.label === "valImport")), u = t.find(
      (A) => A.label === "Val" && A.style.display !== "none"
    ), m = u ? f(u) : null, h = f(t.find((A) => A.label === "fc")) ?? "", g = f(t.find((A) => A.label === "dchg")), v = f(t.find((A) => A.label === "qchg")), w = f(t.find((A) => A.label === "dupd")), C = [], _ = I(e.ownerDocument, "DA", {
      name: i,
      desc: r,
      bType: n,
      type: a,
      sAddr: o,
      valKind: s,
      valImport: d,
      fc: h,
      dchg: g,
      qchg: v,
      dupd: w
    });
    if (m !== null) {
      const A = I(e.ownerDocument, "Val", {});
      A.textContent = m, _.appendChild(A);
    }
    return C.push({
      new: {
        parent: e,
        element: _
      }
    }), C;
  };
}
function od(e) {
  const t = e.ownerDocument, i = "", r = null, n = "", a = null, o = null, s = null, d = null, u = null, m = "", h = null, g = null, v = null, w = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ue).filter((_) => _.getAttribute("id")), C = e.closest("DataTypeTemplates");
  return [
    {
      title: l("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: l("save"),
        action: ad(e)
      },
      content: [
        ...rd(
          i,
          r,
          n,
          w,
          a,
          o,
          d,
          u,
          s,
          C
        ),
        ...nd(m, h, g, v)
      ]
    }
  ];
}
const se = (e, t) => e === null ? "" : t;
function et() {
  return {
    BOOLEAN: e(),
    Enum: t(),
    FLOAT32: i("FLOAT32", -4294967296, 2 ** 32 - 1),
    FLOAT64: i("FLOAT64", -18446744073709552e3, 2 ** 64 - 1),
    INT8: r("INT8", -256, 2 ** 8 - 1),
    INT16: r("INT16", -65536, 2 ** 16 - 1),
    INT24: r("INT24", -16777216, 2 ** 24 - 1),
    INT32: r("INT32", -4294967296, 2 ** 32 - 1),
    INT64: r("INT64", -18446744073709552e3, 2 ** 64 - 1),
    INT128: r("INT128", -3402823669209385e23, 2 ** 128 - 1),
    INT8U: r("INT8U", 0, 2 ** 8 - 1),
    INT16U: r("INT16U", 0, 2 ** 16 - 1),
    INT24U: r("INT24U", 0, 2 ** 24 - 1),
    INT32U: r("INT32U", 0, 2 ** 32 - 1),
    Timestamp: n(),
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
      render: (d, u, m = null) => (m ? [...Array(m)] : [m]).map((h, g) => c`<wizard-select
            id="Val${se(h, `${g + 1}`)}"
            label="Val${se(h, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (d, u) => f(
        d.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (d, u, m = null) => (m ? [...Array(m)] : [m]).map((h, g) => c`<wizard-select
            id="Val${se(h, `${g + 1}`)}"
            label="Val${se(h, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            ${s(d).map((v) => c`<mwc-list-item value="${v}"
                >${v}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (d, u) => f(
        d.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function i(d, u, m) {
    return {
      render: (h, g, v = null) => (v ? [...Array(v)] : [v]).map((w, C) => c`<wizard-textfield
            id="Val${se(w, `${C + 1}`)}"
            label="Val${se(w, ` for sGroup ${C + 1}`)}"
            .maybeValue=${o(g)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${m}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (h, g) => f(
        h.find((v) => v.id === `Val${g || ""}`)
      )
    };
  }
  function r(d, u, m) {
    return {
      render: (h, g, v = null) => (v ? [...Array(v)] : [v]).map((w, C) => c`<wizard-textfield
            id="Val${se(w, `${C + 1}`)}"
            label="Val${se(w, ` for sGroup ${C + 1}`)}"
            .maybeValue=${o(g)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${m}
          >
          </wizard-textfield>`),
      value: (h, g) => f(
        h.find((v) => v.id === `Val${g || ""}`)
      )
    };
  }
  function n() {
    return {
      render: (d, u, m = null) => {
        const h = o(u);
        return (m ? [...Array(m)] : [m]).reduce(
          (g, v, w) => g.concat([
            c`<wizard-textfield
                id="ValDate${se(v, `${w + 1}`)}"
                label="Val (Date)${se(v, ` for sGroup ${w + 1}`)}"
                .maybeValue=${sd(h)}
                type="date"
              >
              </wizard-textfield>`,
            c`<wizard-textfield
                id="ValTime${se(v, `${w + 1}`)}"
                label="Val (Time)${se(v, ` for sGroup ${w + 1}`)}"
                .maybeValue=${ld(h)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (d, u) => {
        const m = [`ValDate${u || ""}`, `ValTime${u || ""}`].map(
          (v) => f(d.find((w) => w.id === v))
        ), h = m[0] ? m[0] : "0000-00-00", g = m[1] ? m[1] : "00:00:00";
        return h + "T" + g + ".000";
      }
    };
  }
  function a(d, u) {
    return {
      render: (m, h, g = null) => (g ? [...Array(g)] : [g]).map((v, w) => c`<wizard-textfield
            id="Val${se(v, ` ${w + 1}`)}"
            label="Val${se(v, ` for sGroup ${w + 1}`)}"
            .maybeValue=${o(h)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            maxLength=${u}
            type="text"
          >
          </wizard-textfield>`),
      value: (m, h) => f(
        m.find((g) => g.id === `Val${h || ""}`)
      )
    };
  }
  function o(d) {
    return (d?.querySelector("Val") ? d?.querySelector("Val") : d)?.textContent?.trim() ?? "";
  }
  function s(d) {
    const u = d.getAttribute("type"), m = [];
    return Array.from(
      d.ownerDocument.querySelectorAll(
        `EnumType[id="${u}"] > EnumVal`
      )
    ).filter(
      (h) => h.textContent && h.textContent !== ""
    ).sort(
      (h, g) => parseInt(h.getAttribute("ord") ?? "0") - parseInt(g.getAttribute("ord") ?? "0")
    ).forEach((h) => {
      m.push(h.textContent ?? "");
    }), m;
  }
}
function sd(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function ld(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const Je = "http://www.iec.ch/61850/2003/SCL";
function cd(e, t) {
  return (i) => {
    const r = e.getAttribute("bType"), n = et()[r].value(i), a = t.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: l("dai.action.updatedai", { daiName: a })
    }, s = t.cloneNode(!1);
    return s.textContent = n, o.actions.push({
      old: { element: t },
      new: { element: s }
    }), [o];
  };
}
function dd(e, t, i, r, n) {
  return (a) => {
    const o = t.getAttribute("bType");
    if (n)
      Array.from(r.querySelectorAll("Val")).forEach(
        (u) => u.remove()
      ), [...Array(n)].forEach((u, m) => {
        const h = et()[o].value(
          a,
          m + 1
        ), g = e.ownerDocument.createElementNS(
          Je,
          "Val"
        );
        g.textContent = h, g.setAttribute("sGroup", `${m + 1}`), r.append(g);
      });
    else {
      const u = et()[o].value(a);
      let m = r.querySelector("Val");
      m || (m = e.ownerDocument.createElementNS(Je, "Val"), r.append(m)), m.textContent = u;
    }
    const s = r.getAttribute("name");
    return [{
      actions: [{ new: { parent: e, element: i } }],
      title: l("dai.action.createdai", { daiName: s })
    }];
  };
}
function On(e, t, i = null) {
  const r = e.getAttribute("bType"), n = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    c` ${et()[r].render(
      e,
      t,
      i
    )}
    ${n ? c`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${n}
          readonly
          disabled
        >
        </wizard-textfield>` : O}`
  ];
}
function ud(e, t) {
  let i = t;
  t.tagName === "BDA" && (i = t.getRootNode().querySelector(
    `DOType>DA[type="${t.parentElement.id}"]`
  ));
  const r = i.getAttribute("fc") ?? "", o = e.closest("IED")?.querySelector("SettingControl")?.getAttribute("numOfSGs") ?? "", s = parseInt(o);
  return (r === "SG" || r === "SE") && o !== "" && !isNaN(s) ? s : void 0;
}
function pd(e, t, i) {
  const r = ud(e, i), n = t.tagName === "DAI" ? t : t.querySelector("DAI");
  return [
    {
      title: l("dai.wizard.title.create", {
        daiName: n?.getAttribute("name") ?? ""
      }),
      element: n,
      primary: {
        icon: "edit",
        label: l("save"),
        action: dd(
          e,
          i,
          t,
          n,
          r
        )
      },
      content: On(
        i,
        n,
        r
      )
    }
  ];
}
function md(e, t) {
  const i = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: l("dai.wizard.title.edit", {
        daiName: i
      }),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: cd(e, t)
      },
      content: On(e, t)
    }
  ];
}
function hd(e) {
  return (t) => {
    t.dispatchEvent(Ke(() => An(e)));
  };
}
function fd(e) {
  return (t, i) => {
    const r = t.find((u) => u.label === "name").value, n = f(t.find((u) => u.label === "desc")), a = e.getAttribute("name"), o = [];
    if (!(r === a && n === e.getAttribute("desc"))) {
      const u = V(e, { name: r, desc: n });
      o.push({
        old: { element: e },
        new: { element: u }
      });
    }
    const s = r !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((u) => {
      const m = V(u, { datSet: r });
      return { old: { element: u }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((u) => Ce(e, "FCDA", u.value)).filter((u) => u).map((u) => ({
        old: {
          parent: e,
          element: u,
          reference: u.nextSibling
        }
      })),
      ...o,
      ...s
    ];
  };
}
function Fn(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: fd(e)
      },
      menuActions: [
        {
          icon: "add",
          label: l("dataset.fcda.add"),
          action: hd(e)
        }
      ],
      content: [
        c`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${l("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        c`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${l("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        c`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (r) => c`<mwc-check-list-item selected value="${L(r)}"
                >${L(r).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const P = {
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
}, bd = {
  IP: P.IP,
  "IP-SUBNET": P.IP,
  "IP-GATEWAY": P.IP,
  "OSI-TSEL": P.OSI,
  "OSI-SSEL": P.OSI,
  "OSI-PSEL": P.OSI,
  "OSI-AP-Title": P.OSIAPi,
  "OSI-AP-Invoke": P.OSId,
  "OSI-AE-Qualifier": P.OSId,
  "OSI-AE-Invoke": P.OSId,
  "MAC-Address": P.MAC,
  APPID: P.APPID,
  "VLAN-ID": P.VLANid,
  "VLAN-PRIORITY": P.VLANp,
  "OSI-NSAP": P.OSI,
  "SNTP-Port": P.port,
  "MMS-Port": P.port,
  DNSName: "[^ ]*",
  "UDP-Port": P.port,
  "TCP-Port": P.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: P.IPv6,
  "IPv6-SUBNET": P.IPv6sub,
  "IPv6-GATEWAY": P.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": P.IPv6,
  "IP-IGMPv3Sr": P.IP,
  "IP-ClassOfTraffic": P.OSI
}, gd = {
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
function qn(e) {
  return [
    c`<mwc-formfield label="${l("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    c`${Object.entries(e.attributes).map(
      ([t, i]) => c`<wizard-textfield
          label="${t}"
          ?nullable=${gd[t]}
          .maybeValue=${i}
          pattern="${me(bd[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function yd(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function vd(e, t, i) {
  const r = I(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([n, a]) => a !== null).forEach(([n, a]) => {
    const o = n, s = I(t.ownerDocument, "P", { type: o });
    i && s.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + n
    ), s.textContent = a, r.appendChild(s);
  }), r;
}
function Mn(e, t, i) {
  const r = [], n = vd(t, e, i), a = e.querySelector("Address");
  return a !== null && !yd(a, n) ? (r.push({
    old: {
      parent: e,
      element: a,
      reference: a.nextSibling
    }
  }), r.push({
    new: {
      parent: e,
      element: n,
      reference: a.nextSibling
    }
  })) : a === null && r.push({
    new: {
      parent: e,
      element: n
    }
  }), r;
}
function Dr(e, t, i, r) {
  if (t === null) {
    const a = I(r.ownerDocument, e, {
      unit: "s",
      multiplier: "m"
    });
    return a.textContent = i, {
      new: {
        parent: r,
        element: a,
        reference: r.firstElementChild
      }
    };
  }
  if (i === null)
    return {
      old: {
        parent: r,
        element: t,
        reference: t.nextSibling
      }
    };
  const n = t.cloneNode(!1);
  return n.textContent = i, {
    old: { element: t },
    new: { element: n }
  };
}
function Sd(e) {
  return (t, i) => {
    const r = {
      actions: [],
      title: l("gse.action.addaddress", {
        identity: L(e)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = f(
      t.find((u) => u.label === "MAC-Address")
    ), a.APPID = f(t.find((u) => u.label === "APPID")), a["VLAN-ID"] = f(
      t.find((u) => u.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((u) => u.label === "VLAN-PRIORITY")
    ), Mn(e, a, n).forEach((u) => {
      r.actions.push(u);
    });
    const s = f(t.find((u) => u.label === "MinTime")), d = f(t.find((u) => u.label === "MaxTime"));
    return s !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && r.actions.push(
      Dr(
        "MinTime",
        e.querySelector("MinTime"),
        s,
        e
      )
    ), d !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && r.actions.push(
      Dr(
        "MaxTime",
        e.querySelector("MaxTime"),
        d,
        e
      )
    ), [r];
  };
}
function xd(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, r = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), n = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    n[a] || (n[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: Sd(e)
      },
      content: [
        ...qn({ hasInstType: r, attributes: n }),
        c`<wizard-textfield
          label="MinTime"
          .maybeValue=${t}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        c`<wizard-textfield
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
function Hn(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), r = e.closest("AccessPoint")?.getAttribute("name"), n = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > GSE[ldInst="${n}"][cbName="${t}"]`
  );
}
function wd(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${Ee.asciName}"
      maxLength="${Hi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${l("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    c`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${Rn.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Ad(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Hn(e), r = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (s) => s.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && r && n.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), i && n.push({
    old: {
      parent: i.parentElement,
      element: i,
      reference: i.nextSibling
    }
  });
  const a = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: l("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: n
  };
}
function Cd(e) {
  return (t) => {
    const i = Ad(e);
    i && t.dispatchEvent(Ft(i)), t.dispatchEvent(j());
  };
}
function Ed(e) {
  return (t) => {
    t.dispatchEvent(Ke(() => Fn(e)));
  };
}
function kd(e) {
  return (t) => {
    t.dispatchEvent(Ke(() => xd(e)));
  };
}
function _d(e) {
  return (t) => {
    const i = t.find((u) => u.label === "name").value, r = f(t.find((u) => u.label === "desc")), n = f(t.find((u) => u.label === "type")), a = f(t.find((u) => u.label === "appID")), o = f(t.find((u) => u.label === "fixedOffs")), s = f(
      t.find((u) => u.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("type") && a === e.getAttribute("appID") && o === e.getAttribute("fixedOffs") && s === e.getAttribute("securityEnabled"))
      return [];
    const d = V(e, {
      name: i,
      desc: r,
      type: n,
      appID: a,
      fixedOffs: o,
      securityEnabled: s
    });
    return [{ old: { element: e }, new: { element: d } }];
  };
}
function Dd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), o = e.getAttribute("securityEnabled"), s = Hn(e), d = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), u = [];
  return u.push({
    icon: "delete",
    label: l("remove"),
    action: Cd(e)
  }), d && u.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: Ed(d)
  }), s && u.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: kd(s)
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: _d(e)
      },
      menuActions: u,
      content: [
        ...wd({
          name: t,
          desc: i,
          type: r,
          appID: n,
          fixedOffs: a,
          securityEnabled: o
        })
      ]
    }
  ];
}
function Re(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Id(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Nd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = Q(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Id(e)
      },
      content: [
        ...Re({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function $d(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(
      e.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Td(e) {
  const t = "", n = Array.from(e.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: $d(e)
      },
      content: [
        ...Re({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Ld(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function zd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = Q(
    e.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Ld(e)
      },
      content: [
        ...Re({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function Vd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Pd(e) {
  const t = "", n = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Vd(e)
      },
      content: [
        ...Re({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Rd(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Od(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = Q(
    e.parentElement,
    "EqFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Rd(e)
      },
      content: [
        ...Re({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function Fd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function qd(e) {
  const t = "", n = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Fd(e)
      },
      content: [
        ...Re({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Md(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Hd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = Q(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Md(e)
      },
      content: [
        ...Re({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function Bd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Gd(e) {
  const t = "", n = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Bd(e)
      },
      content: [
        ...Re({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Wd(e) {
  return (t, i) => {
    const r = {
      actions: [],
      title: l("smv.action.addaddress", {
        identity: L(e)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = f(
      t.find((s) => s.label === "MAC-Address")
    ), a.APPID = f(t.find((s) => s.label === "APPID")), a["VLAN-ID"] = f(
      t.find((s) => s.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((s) => s.label === "VLAN-PRIORITY")
    );
    const o = Mn(e, a, n);
    return o.length ? (o.forEach((s) => {
      r.actions.push(s);
    }), [r]) : [];
  };
}
function Ud(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (r) => r.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((r) => {
    i[r] || (i[r] = e.querySelector(`Address > P[type="${r}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "edit",
        action: Wd(e)
      },
      content: [...qn({ hasInstType: t, attributes: i })]
    }
  ];
}
function jd(e) {
  return Object.entries(e).map(
    ([t, i]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Kd(e) {
  return (t) => {
    const i = {}, r = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (r.forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    }), !r.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const n = V(e, i);
    return [{ old: { element: e }, new: { element: n } }];
  };
}
function Zd(e) {
  const [t, i, r, n, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Kd(e)
      },
      content: [
        ...jd({
          refreshTime: t,
          sampleRate: i,
          dataSet: r,
          security: n,
          synchSourceId: a
        })
      ]
    }
  ];
}
function Bn(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), r = e.closest("AccessPoint")?.getAttribute("name"), n = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > SMV[ldInst="${n}"][cbName="${t}"]`
  ) ?? null;
}
function Xd(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Bn(e), r = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (s) => s.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: e.parentElement,
      element: e
    }
  }), t && r && n.push({
    old: {
      parent: e.parentElement,
      element: t
    }
  }), i && n.push({
    old: {
      parent: i.parentElement,
      element: i
    }
  });
  const a = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: l("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: n
  };
}
function Qd(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${Ee.asciName}"
      maxLength="${Hi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${Ee.normalizedString}"
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? c`` : c`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${l("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    c`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${l("scl.smpMod")}"
      >${ed.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${l("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${l("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    c`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${Rn.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Jd(e) {
  return (t) => {
    const i = Xd(e);
    i && t.dispatchEvent(Ft(i)), t.dispatchEvent(j());
  };
}
function Yd(e) {
  return (t) => {
    t.dispatchEvent(Ke(() => Fn(e)));
  };
}
function eu(e) {
  return (t) => {
    t.dispatchEvent(Ke(() => Zd(e)));
  };
}
function tu(e) {
  return (t) => {
    t.dispatchEvent(Ke(() => Ud(e)));
  };
}
function iu(e) {
  return (t) => {
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
    r.forEach((o) => {
      if (o === "multicast" && !t.find((d) => d.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = f(t.find((d) => d.label === o));
    });
    let n = null;
    if (r.some((o) => i[o] !== e.getAttribute(o))) {
      const o = V(e, i);
      n = {
        old: { element: e },
        new: { element: o }
      };
    }
    const a = [];
    return n && a.push(n), a;
  };
}
function ru(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("multicast"), n = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), o = e.getAttribute("smpRate"), s = e.getAttribute("nofASDU"), d = e.getAttribute("securityEnabled"), u = Bn(e), m = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), g = [];
  return g.push({
    icon: "delete",
    label: l("remove"),
    action: Jd(e)
  }), h && g.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: Yd(h)
  }), m && g.push({
    icon: "edit",
    label: l("scl.SmvOpts"),
    action: eu(m)
  }), u && g.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: tu(u)
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: iu(e)
      },
      menuActions: g,
      content: [
        ...Qd({
          name: t,
          desc: i,
          multicast: r,
          smvID: n,
          smpMod: a,
          smpRate: o,
          nofASDU: s,
          securityEnabled: d
        })
      ]
    }
  ];
}
function Gn(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${l("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (t) => c`<mwc-list-item value="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      nullable
      helper="${l("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function nu(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "phase", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function au(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("phase"), n = e.getAttribute("virtual"), a = Q(
    e.parentElement,
    "SubEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: nu(e)
      },
      content: [
        ...Gn({
          name: t,
          desc: i,
          phase: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function ou(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function su(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: ou(e)
      },
      content: [
        ...Gn({
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
function lu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = Q(
    e.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: cu(e)
      },
      content: [
        ...Wn({
          name: t,
          desc: i,
          type: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function cu(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Wn(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function du(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: uu(e)
      },
      content: [
        ...Wn({
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
function uu(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function pu(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(
        t.find((o) => o.label === a)
      );
    });
    const n = I(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function mu(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: pu(e)
      },
      content: [
        ...Un({
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
function hu(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(
        t.find((a) => a.label === n)
      );
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Un(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function fu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = Q(
    e.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: hu(e)
      },
      content: [
        ...Un({
          name: t,
          desc: i,
          type: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function bu(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function gu(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function jn(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function yu(e) {
  const t = "", r = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: bu(e)
      },
      content: [
        ...jn({
          name: t,
          desc: null,
          type: r,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function vu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = Q(
    e.parentElement,
    "TapChanger"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: gu(e)
      },
      content: [
        ...jn({
          name: t,
          desc: i,
          type: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function Kn(e, t, i, r, n) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("line.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${l("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="nomFreq"
      .maybeValue=${r}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${l("textfield.nonempty")}"
      pattern="${mt.unsigned}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${l("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${l("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function Su(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: n } }];
  };
}
function xu(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function wu(e) {
  return [
    {
      title: l("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Su(e)
      },
      content: [...Kn("", "", "", "", "")]
    }
  ];
}
function Au(e) {
  return [
    {
      title: l("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: xu(e)
      },
      content: Kn(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function Cu(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = I(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: n } }];
  };
}
function Eu(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Zn(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${l("scl.type")}"
    ></wizard-textfield>`
  ];
}
function ku(e) {
  const t = "", i = "", r = "", n = Q(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Cu(e)
      },
      content: [
        ...Zn({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function _u(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = Q(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Eu(e)
      },
      content: [
        ...Zn({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function Du(e, t, i, r, n) {
  return [
    c`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${l("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${l("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${r}
      helper="${l("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${l("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Iu(e) {
  return (t) => {
    const i = {}, r = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Nu(e) {
  return [
    {
      title: l("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Iu(e)
      },
      content: Du(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function $u(e, t, i, r) {
  return [
    c`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${l("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${l("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${l("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Tu(e) {
  return (t) => {
    const i = {}, r = ["lnType", "desc", "lnClass", "inst"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Lu(e) {
  return [
    {
      title: l("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Tu(e)
      },
      content: $u(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function p() {
}
const qt = {
  AccessControl: {
    edit: p,
    create: p
  },
  AccessPoint: {
    edit: p,
    create: p
  },
  Address: {
    edit: p,
    create: p
  },
  Association: {
    edit: p,
    create: p
  },
  Authentication: {
    edit: p,
    create: p
  },
  BDA: {
    edit: p,
    create: p
  },
  BitRate: {
    edit: p,
    create: p
  },
  Bay: {
    edit: fl,
    create: hl
  },
  ClientLN: {
    edit: p,
    create: p
  },
  ClientServices: {
    edit: p,
    create: p
  },
  CommProt: {
    edit: p,
    create: p
  },
  Communication: {
    edit: p,
    create: p
  },
  ConductingEquipment: {
    edit: El,
    create: Cl
  },
  ConfDataSet: {
    edit: p,
    create: p
  },
  ConfLdName: {
    edit: p,
    create: p
  },
  ConfLNs: {
    edit: p,
    create: p
  },
  ConfLogControl: {
    edit: p,
    create: p
  },
  ConfReportControl: {
    edit: p,
    create: p
  },
  ConfSG: {
    edit: p,
    create: p
  },
  ConfSigRef: {
    edit: p,
    create: p
  },
  ConnectedAP: {
    edit: p,
    create: p
  },
  ConnectivityNode: {
    edit: _l,
    create: p
  },
  DA: {
    edit: od,
    create: p
  },
  DAI: {
    edit: md,
    create: p
  },
  DAType: {
    edit: p,
    create: p
  },
  DO: {
    edit: p,
    create: p
  },
  DOI: {
    edit: p,
    create: p
  },
  DOType: {
    edit: p,
    create: p
  },
  DataObjectDirectory: {
    edit: p,
    create: p
  },
  DataSet: {
    edit: p,
    create: p
  },
  DataSetDirectory: {
    edit: p,
    create: p
  },
  DataTypeTemplates: {
    edit: p,
    create: p
  },
  DynAssociation: {
    edit: p,
    create: p
  },
  DynDataSet: {
    edit: p,
    create: p
  },
  EnumType: {
    edit: p,
    create: p
  },
  EnumVal: {
    edit: p,
    create: p
  },
  EqFunction: {
    edit: Od,
    create: qd
  },
  EqSubFunction: {
    edit: zd,
    create: Pd
  },
  ExtRef: {
    edit: p,
    create: p
  },
  FCDA: {
    edit: p,
    create: An
  },
  FileHandling: {
    edit: p,
    create: p
  },
  Function: {
    edit: Nd,
    create: Td
  },
  GeneralEquipment: {
    edit: lu,
    create: du
  },
  GetCBValues: {
    edit: p,
    create: p
  },
  GetDataObjectDefinition: {
    edit: p,
    create: p
  },
  GetDataSetValue: {
    edit: p,
    create: p
  },
  GetDirectory: {
    edit: p,
    create: p
  },
  GOOSE: {
    edit: p,
    create: p
  },
  GOOSESecurity: {
    edit: p,
    create: p
  },
  GSE: {
    edit: p,
    create: p
  },
  GSEDir: {
    edit: p,
    create: p
  },
  GSEControl: {
    edit: Dd,
    create: p
  },
  GSESettings: {
    edit: p,
    create: p
  },
  GSSE: {
    edit: p,
    create: p
  },
  Header: {
    edit: p,
    create: p
  },
  History: {
    edit: p,
    create: p
  },
  Hitem: {
    edit: p,
    create: p
  },
  IED: {
    edit: Hc,
    create: p
  },
  IEDName: {
    edit: p,
    create: p
  },
  Inputs: {
    edit: p,
    create: p
  },
  IssuerName: {
    edit: p,
    create: p
  },
  KDC: {
    edit: p,
    create: p
  },
  LDevice: {
    edit: jc,
    create: p
  },
  LN: {
    edit: Nu,
    create: p
  },
  LN0: {
    edit: Lu,
    create: p
  },
  LNode: {
    edit: Jl,
    create: Zl
  },
  LNodeType: {
    edit: p,
    create: p
  },
  Line: {
    edit: Au,
    create: wu
  },
  Log: {
    edit: p,
    create: p
  },
  LogControl: {
    edit: p,
    create: p
  },
  LogSettings: {
    edit: p,
    create: p
  },
  MaxTime: {
    edit: p,
    create: p
  },
  McSecurity: {
    edit: p,
    create: p
  },
  MinTime: {
    edit: p,
    create: p
  },
  NeutralPoint: {
    edit: p,
    create: p
  },
  OptFields: {
    edit: tc,
    create: p
  },
  P: {
    edit: p,
    create: p
  },
  PhysConn: {
    edit: p,
    create: p
  },
  PowerTransformer: {
    edit: kc,
    create: Ec
  },
  Private: {
    edit: p,
    create: p
  },
  Process: {
    edit: _u,
    create: ku
  },
  ProtNs: {
    edit: p,
    create: p
  },
  Protocol: {
    edit: p,
    create: p
  },
  ReadWrite: {
    edit: p,
    create: p
  },
  RedProt: {
    edit: p,
    create: p
  },
  ReportControl: {
    edit: p,
    create: p
  },
  ReportSettings: {
    edit: p,
    create: p
  },
  RptEnabled: {
    edit: p,
    create: p
  },
  SamplesPerSec: {
    edit: p,
    create: p
  },
  SampledValueControl: {
    edit: ru,
    create: p
  },
  SecPerSamples: {
    edit: p,
    create: p
  },
  SCL: {
    edit: p,
    create: p
  },
  SDI: {
    edit: p,
    create: p
  },
  SDO: {
    edit: p,
    create: p
  },
  Server: {
    edit: p,
    create: p
  },
  ServerAt: {
    edit: p,
    create: p
  },
  Services: {
    edit: p,
    create: p
  },
  SetDataSetValue: {
    edit: p,
    create: p
  },
  SettingControl: {
    edit: p,
    create: p
  },
  SettingGroups: {
    edit: p,
    create: p
  },
  SGEdit: {
    edit: p,
    create: p
  },
  SmpRate: {
    edit: p,
    create: p
  },
  SMV: {
    edit: p,
    create: p
  },
  SmvOpts: {
    edit: p,
    create: p
  },
  SMVsc: {
    edit: p,
    create: p
  },
  SMVSecurity: {
    edit: p,
    create: p
  },
  SMVSettings: {
    edit: p,
    create: p
  },
  SubEquipment: {
    edit: au,
    create: su
  },
  SubFunction: {
    edit: Hd,
    create: Gd
  },
  SubNetwork: {
    edit: Nc,
    create: p
  },
  Subject: {
    edit: p,
    create: p
  },
  Substation: {
    edit: bc,
    create: fc
  },
  SupSubscription: {
    edit: p,
    create: p
  },
  TapChanger: {
    edit: vu,
    create: yu
  },
  Terminal: {
    edit: yc,
    create: p
  },
  Text: {
    edit: p,
    create: p
  },
  TimerActivatedControl: {
    edit: p,
    create: p
  },
  TimeSyncProt: {
    edit: p,
    create: p
  },
  TransformerWinding: {
    edit: fu,
    create: mu
  },
  TrgOps: {
    edit: Xc,
    create: p
  },
  Val: {
    edit: p,
    create: p
  },
  ValueHandling: {
    edit: p,
    create: p
  },
  Voltage: {
    edit: p,
    create: p
  },
  VoltageLevel: {
    edit: Ac,
    create: Sc
  }
};
var zu = Object.defineProperty, xt = (e, t, i, r) => {
  for (var n = void 0, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = o(t, i, n) || n);
  return n && zu(t, i, n), n;
};
class be extends ve {
  constructor() {
    super(), this.editCount = -1, this.ancestors = [], this.addEventListener("focus", (t) => {
      t.stopPropagation();
      const i = this.ancestors.map(
        (r) => Jt(r)
      );
      i.push(Jt(this.element)), this.dispatchEvent(Ir(i));
    }), this.addEventListener("blur", () => {
      this.dispatchEvent(
        Ir(
          this.ancestors.map((t) => Jt(t))
        )
      );
    });
  }
}
xt([
  b()
], be.prototype, "doc");
xt([
  b({ type: Number })
], be.prototype, "editCount");
xt([
  b({ attribute: !1 })
], be.prototype, "element");
xt([
  b()
], be.prototype, "nsdoc");
xt([
  b()
], be.prototype, "ancestors");
function we(e, t) {
  return e.find((i) => i.tagName === t) ?? null;
}
function Xn(e) {
  let t = we(e, "LN0");
  return t || (t = we(e, "LN")), t;
}
function Gi(e) {
  if (e && e.hasAttribute("type")) {
    const t = e.getAttribute("type");
    return e.closest("SCL").querySelector(`:root > DataTypeTemplates > DOType[id="${t}"]`);
  }
  return null;
}
function Qn(e, t) {
  if (e) {
    const i = M(t);
    return t.getAttribute("bType") == "Struct" ? e.querySelector(`:scope > SDI[name="${i}"]`) : e.querySelector(`:scope > DAI[name="${i}"]`);
  }
  return null;
}
function Jt(e) {
  switch (e.tagName) {
    case "LN":
    case "LN0":
      return e.getAttribute("lnClass");
    case "LDevice":
      return M(e) ?? Ge(e);
    case "Server":
      return "Server";
    default:
      return e.getAttribute("name");
  }
}
function vi(e) {
  return Array.from(e.querySelectorAll("Val"));
}
function Ir(e, t) {
  return new CustomEvent("full-element-path", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { elementNames: e, ...t?.detail }
  });
}
function Nr(e) {
  return vi(e).length !== 0 ? `${vi(e).map((i) => i.textContent ?? "").join(", ")}` : "-";
}
function Vu(e, t, i, r) {
  const n = we(i, "IED"), a = we(i, "AccessPoint"), o = we(i, "LDevice"), s = Xn(i), d = we(i, "DO"), u = Gi(d);
  return [
    c`
      <mwc-textarea
        label="${l("iededitor.wizard.nsdocDescription")}"
        value="${r.getDataDescription(e, i).label}"
        rows="3"
        cols="50"
        id="nsdocDescription"
        readonly
        disabled
      >
      </mwc-textarea>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daName")}"
        value="${M(e) ?? "-"}"
        id="daName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daiDescription")}"
        value="${t ? Pe(t) ?? "-" : "-"}"
        id="daiDescription"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daFc")}"
        value="${e.getAttribute("fc") ?? "-"}"
        id="daFc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daBType")}"
        value="${e.getAttribute("bType") ?? "-"}"
        id="daBType"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daValue")}"
        value="${Nr(t || e)}"
        id="daValue"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doName")}"
        value="${d ? M(d) ?? "-" : "-"}"
        id="doName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doCdc")}"
        value="${u?.getAttribute("cdc") ?? "-"}"
        id="doCdc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnPrefix")}"
        value="${s ? s.getAttribute("prefix") ?? "-" : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("scl.lnClass")}"
        value="${s ? r.getDataDescription(s, i).label : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnInst")}"
        value="${s ? Ge(s) ?? "-" : "-"}"
        id="lnInst"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lDevice")}"
        value="${o ? M(o) ?? Ge(o) ?? "-" : "-"}"
        id="lDevice"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.accessPoint")}"
        value="${a ? M(a) ?? "-" : "-"}"
        id="accessPoint"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.ied")}"
        value="${n ? M(n) ?? "-" : "-"}"
        id="ied"
        readonly
        disabled
      >
      </mwc-textfield>
    `
  ];
}
function Pu(e, t, i, r) {
  return [
    {
      title: l("iededitor.wizard.daTitle"),
      content: [...Vu(e, t, i, r)]
    }
  ];
}
function Jn(e, t) {
  const i = t.shift();
  if (t.length > 0) {
    let r;
    return i.tagName === "DO" ? r = e.querySelector(
      `DOI[name="${i.getAttribute("name")}"]`
    ) : r = e.querySelector(
      `SDI[name="${i.getAttribute("name")}"]`
    ), r ? Jn(
      r,
      t
    ) : (t.unshift(i), [e, t]);
  } else
    return [e, [i]];
}
function Yn(e) {
  const t = e.shift();
  if (e.length > 0) {
    let i;
    t.tagName === "DO" ? i = t.ownerDocument.createElementNS(Je, "DOI") : i = t.ownerDocument.createElementNS(Je, "SDI"), i.setAttribute("name", t?.getAttribute("name") ?? "");
    const r = Yn(e);
    return i.append(r), i;
  } else {
    const i = t.ownerDocument.createElementNS(
      Je,
      "Val"
    ), r = t.querySelector("Val");
    r && (i.textContent = r.textContent);
    const n = t.ownerDocument.createElementNS(
      Je,
      "DAI"
    );
    return n.setAttribute("name", t?.getAttribute("name") ?? ""), n.append(i), n;
  }
}
var Ru = Object.defineProperty, Ou = Object.getOwnPropertyDescriptor, Wi = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ou(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Ru(t, i, n), n;
};
let ht = class extends be {
  header() {
    const e = M(this.element), t = this.element.getAttribute("bType") ?? O, i = this.element.getAttribute("fc");
    return this.instanceElement ? c`<b>${e}</b> &mdash; ${t}${i ? c` [${i}]` : ""}` : c`${e} &mdash; ${t}${i ? c` [${i}]` : ""}`;
  }
  /**
   * Get the nested (B)DA element(s) if available.
   * @returns The nested (B)DA element(s) of this (B)DA container.
   */
  getBDAElements() {
    const e = this.element.getAttribute("type") ?? void 0, t = this.element.closest("SCL").querySelector(
      `:root > DataTypeTemplates > DAType[id="${e}"]`
    );
    return t != null ? Array.from(t.querySelectorAll(":scope > BDA")) : [];
  }
  /**
   * Use the list of ancestor to retrieve the list from DO to the current (B)DA Element.
   * This structure is used to create the initialized structure from (DOI/SDI/DAI).
   *
   * @returns The list from the DO Element to the current (B)DA Element.
   */
  getTemplateStructure() {
    const e = this.ancestors.filter(
      (i) => i.tagName == "DO"
    )[0], t = this.ancestors.slice(
      this.ancestors.indexOf(e)
    );
    return t.push(this.element), t;
  }
  openCreateWizard() {
    const e = this.ancestors.filter(
      (a) => ["LN0", "LN"].includes(a.tagName)
    )[0], t = this.getTemplateStructure(), [i, r] = Jn(e, t), n = Yn(r);
    if (n) {
      const a = pd(i, n, this.element);
      a && this.dispatchEvent(j(a));
    }
  }
  openEditWizard(e) {
    const t = qt.DAI.edit(this.element, e);
    t && this.dispatchEvent(j(t));
  }
  getValueDisplayString(e) {
    const t = e.getAttribute("sGroup"), i = t ? `SG${t}: ` : "", r = e.textContent?.trim();
    return `${i}${r}`;
  }
  renderVal() {
    const e = this.element.getAttribute("bType"), t = this.instanceElement ?? this.element;
    return !!this.instanceElement?.querySelector("Val") ? vi(t).map(
      (r) => c`<div style="display: flex; flex-direction: row;">
            <div style="display: flex; align-items: center; flex: auto;">
              <h4>${this.getValueDisplayString(r)}</h4>
            </div>
            <div style="display: flex; align-items: center;">
              <mwc-icon-button
                icon="edit"
                .disabled="${!et()[e]}"
                @click=${() => this.openEditWizard(r)}
              >
              </mwc-icon-button>
            </div>
          </div>`
    ) : [
      c`<div style="display: flex; flex-direction: row;">
            <div style="display: flex; align-items: center; flex: auto;">
              <h4></h4>
            </div>
            <div style="display: flex; align-items: center;">
              <mwc-icon-button
                icon="add"
                .disabled="${!et()[e]}"
                @click=${() => this.openCreateWizard()}
              >
              </mwc-icon-button>
            </div>
          </div>`
    ];
  }
  render() {
    const e = this.element.getAttribute("bType");
    return c`
      <action-pane
        .label="${this.header()}"
        icon="${this.instanceElement != null ? "done" : ""}"
      >
        <abbr slot="action">
          <mwc-icon-button
            title=${this.nsdoc.getDataDescription(this.element, this.ancestors).label}
            icon="info"
            @click=${() => this.dispatchEvent(
      j(
        Pu(
          this.element,
          this.instanceElement,
          this.ancestors,
          this.nsdoc
        )
      )
    )}
          ></mwc-icon-button>
        </abbr>
        ${e === "Struct" ? c` <abbr
              slot="action"
              title="${l("iededitor.toggleChildElements")}"
            >
              <mwc-icon-button-toggle
                id="toggleButton"
                onIcon="keyboard_arrow_up"
                offIcon="keyboard_arrow_down"
                @click=${() => this.requestUpdate()}
              >
              </mwc-icon-button-toggle>
            </abbr>` : c`${this.renderVal()}`}
        ${this.toggleButton?.on && e === "Struct" ? this.getBDAElements().map(
      (t) => c`<da-container
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${t}
                  .instanceElement=${Qn(
        this.instanceElement,
        t
      )}
                  .nsdoc=${this.nsdoc}
                  .ancestors=${[...this.ancestors, this.element]}
                >
                </da-container>`
    ) : O}
      </action-pane>
    `;
  }
};
ht.styles = ne`
    h4 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      margin: 0px;
      padding-left: 0.3em;
      word-break: break-word;
      white-space: pre-wrap;
    }

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }
  `;
Wi([
  b({ attribute: !1 })
], ht.prototype, "instanceElement", 2);
Wi([
  F("#toggleButton")
], ht.prototype, "toggleButton", 2);
ht = Wi([
  G("da-container")
], ht);
function Fu(e, t, i, r) {
  const n = we(i, "IED"), a = we(i, "AccessPoint"), o = we(i, "LDevice"), s = Xn(i), d = Gi(e);
  return [
    c`
      <mwc-textarea
        label="${l("iededitor.wizard.nsdocDescription")}"
        value="${r.getDataDescription(e, i).label}"
        rows="3"
        cols="50"
        id="nsdocDescription"
        readonly
        disabled
      >
      </mwc-textarea>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doName")}"
        value="${M(e) ?? "-"}"
        id="doName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doiDescription")}"
        value="${t ? Pe(t) ?? "-" : "-"}"
        id="doiDescription"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doCdc")}"
        value="${d?.getAttribute("cdc") ?? "-"}"
        id="doCdc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnPrefix")}"
        value="${s ? s.getAttribute("prefix") ?? "-" : "-"}"
        id="ln"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("scl.lnClass")}"
        value="${s ? r.getDataDescription(s, i).label : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnInst")}"
        value="${s ? Ge(s) ?? "-" : "-"}"
        id="lnInst"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lDevice")}"
        value="${o ? M(o) ?? Ge(o) ?? "-" : "-"}"
        id="lDevice"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.accessPoint")}"
        value="${a ? M(a) ?? "-" : "-"}"
        id="accessPoint"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.ied")}"
        value="${n ? M(n) ?? "-" : "-"}"
        id="ied"
        readonly
        disabled
      >
      </mwc-textfield>
    `
  ];
}
function qu(e, t, i, r) {
  return [
    {
      title: l("iededitor.wizard.doTitle"),
      content: [...Fu(e, t, i, r)]
    }
  ];
}
var Mu = Object.defineProperty, Hu = Object.getOwnPropertyDescriptor, Ui = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Hu(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Mu(t, i, n), n;
};
let Tt = class extends be {
  header() {
    const e = M(this.element), t = Pe(this.element);
    return this.instanceElement != null ? c`<b>${e}${t ? c` &mdash; ${t}` : O}</b>` : c`${e}${t ? c` &mdash; ${t}` : O}`;
  }
  /**
   * Get the nested SDO element(s).
   * @returns The nested SDO element(s) of this DO container.
   */
  getDOElements() {
    const e = Gi(this.element);
    return e != null ? Array.from(e.querySelectorAll(":scope > SDO")) : [];
  }
  /**
   * Get the nested (B)DA element(s).
   * @returns The nested (B)DA element(s) of this DO container.
   */
  getDAElements() {
    const e = this.element.getAttribute("type") ?? void 0, t = this.element.closest("SCL").querySelector(`:root > DataTypeTemplates > DOType[id="${e}"]`);
    return t != null ? Array.from(t.querySelectorAll(":scope > DA")) : [];
  }
  /**
   * Get the instance element (SDI) of a (S)DO element (if available)
   * @param dO - The (S)DO object to search with.
   * @returns The optional SDI element.
   */
  getInstanceDOElement(e) {
    const t = M(e);
    return this.instanceElement ? this.instanceElement.querySelector(
      `:scope > SDI[name="${t}"]`
    ) : null;
  }
  render() {
    const e = this.getDAElements(), t = this.getDOElements();
    return c`<action-pane
      .label="${this.header()}"
      icon="${this.instanceElement != null ? "done" : ""}"
    >
      <abbr slot="action">
        <mwc-icon-button
          title=${this.nsdoc.getDataDescription(this.element).label}
          icon="info"
          @click=${() => this.dispatchEvent(
      j(
        qu(
          this.element,
          this.instanceElement,
          this.ancestors,
          this.nsdoc
        )
      )
    )}
        ></mwc-icon-button>
      </abbr>
      ${e.length > 0 || t.length > 0 ? c`<abbr
            slot="action"
            title="${l("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : O}
      ${this.toggleButton?.on ? e.map(
      (i) => c`<da-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${i}
                .instanceElement=${Qn(
        this.instanceElement,
        i
      )}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></da-container>`
    ) : O}
      ${this.toggleButton?.on ? t.map(
      (i) => c`<do-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${i}
                .instanceElement=${this.getInstanceDOElement(i)}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></do-container>`
    ) : O}
    </action-pane> `;
  }
};
Ui([
  b({ attribute: !1 })
], Tt.prototype, "instanceElement", 2);
Ui([
  F("#toggleButton")
], Tt.prototype, "toggleButton", 2);
Tt = Ui([
  G("do-container")
], Tt);
var Bu = Object.defineProperty, Gu = Object.getOwnPropertyDescriptor, ea = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Gu(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Bu(t, i, n), n;
};
let Si = class extends be {
  header() {
    const e = this.element.getAttribute("prefix"), t = Ge(this.element), i = this.element.getAttribute("desc"), r = this.nsdoc.getDataDescription(this.element);
    return c`${e != null ? c`${e} &mdash; ` : O}
    ${r.label} ${t ? c` &mdash; ${t}` : O}
    ${i ? c` &mdash; ${i}` : O}`;
  }
  /**
   * Get the DO child elements of this LN(0) section.
   * @returns The DO child elements, or an empty array if none are found.
   */
  getDOElements() {
    const e = this.element.getAttribute("lnType") ?? void 0, t = this.element.closest("SCL").querySelector(`:root > DataTypeTemplates > LNodeType[id="${e}"]`);
    return t != null ? Array.from(t.querySelectorAll(":scope > DO")) : [];
  }
  /**
   * Get the instance element (DOI) of a DO element (if available)
   * @param dO - The DO object to use.
   * @returns The optional DOI object.
   */
  getInstanceElement(e) {
    const t = M(e);
    return this.element.querySelector(`:scope > DOI[name="${t}"]`);
  }
  openEditWizard() {
    const e = this.element.tagName === "LN" ? "LN" : "LN0", t = qt[e].edit(this.element);
    t && this.dispatchEvent(j(t));
  }
  render() {
    const e = this.getDOElements();
    return c`<action-pane .label="${pn(this.header())}">
      ${e.length > 0 ? c`<abbr slot="action">
          <mwc-icon-button
            slot="action"
            mini
            icon="edit"
            @click="${() => this.openEditWizard()}}"
          ></mwc-icon-button>
        </abbr>
        <abbr
            slot="action"
            title="${l("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : O}
      ${this.toggleButton?.on ? e.map(
      (t) => c`<do-container
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              .instanceElement=${this.getInstanceElement(t)}
              .nsdoc=${this.nsdoc}
              .ancestors=${[...this.ancestors, this.element]}
            ></do-container> `
    ) : O}
    </action-pane>`;
  }
};
ea([
  F("#toggleButton")
], Si.prototype, "toggleButton", 2);
Si = ea([
  G("ln-container")
], Si);
var Wu = Object.defineProperty, Uu = Object.getOwnPropertyDescriptor, Mt = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Uu(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Wu(t, i, n), n;
};
let tt = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  openEditWizard() {
    const e = qt.LDevice.edit(this.element);
    e && this.dispatchEvent(j(e));
  }
  header() {
    const e = M(this.element) ?? Ge(this.element), t = Pe(this.element), i = Mo(this.element);
    return c`${e}${t ? c` &mdash; ${t}` : O}${i ? c` &mdash; ${i}` : O}`;
  }
  firstUpdated() {
    this.requestUpdate();
  }
  updated(e) {
    super.updated(e), e.has("selectedLNClasses") && this.requestUpdate("lnElements");
  }
  get lnElements() {
    return Array.from(this.element.querySelectorAll(":scope > LN,LN0")).filter(
      (e) => {
        const t = e.getAttribute("lnClass") ?? "";
        return this.selectedLNClasses.includes(t);
      }
    );
  }
  render() {
    const e = this.lnElements;
    return c`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${js}</mwc-icon>
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      ${e.length > 0 ? c`<abbr
            slot="action"
            title="${l("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              on
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : O}
      <div id="lnContainer">
        ${this.toggleButton?.on ? e.map(
      (t) => c`<ln-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></ln-container> `
    ) : O}
      </div>
    </action-pane>`;
  }
};
tt.styles = ne`
    #lnContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    abbr {
      text-decoration: none;
    }

    @media (max-width: 387px) {
      #lnContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
Mt([
  b()
], tt.prototype, "selectedLNClasses", 2);
Mt([
  F("#toggleButton")
], tt.prototype, "toggleButton", 2);
Mt([
  E()
], tt.prototype, "lnElements", 1);
tt = Mt([
  G("ldevice-container")
], tt);
var ju = Object.defineProperty, Ku = Object.getOwnPropertyDescriptor, ji = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ku(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && ju(t, i, n), n;
};
let Lt = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  header() {
    const e = Pe(this.element);
    return c`Server${e ? c` &mdash; ${e}` : O}`;
  }
  updated(e) {
    super.updated(e), e.has("selectedLNClasses") && this.requestUpdate("lDeviceElements");
  }
  get lDeviceElements() {
    return Array.from(this.element.querySelectorAll(":scope > LDevice")).filter(
      (e) => Array.from(e.querySelectorAll(":scope > LN,LN0")).filter(
        (t) => {
          const i = t.getAttribute("lnClass") ?? "";
          return this.selectedLNClasses.includes(i);
        }
      ).length > 0
    );
  }
  render() {
    return c`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Us}</mwc-icon>
      ${this.lDeviceElements.map(
      (e) => c`<ldevice-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${e}
            .nsdoc=${this.nsdoc}
            .selectedLNClasses=${this.selectedLNClasses}
            .ancestors=${[...this.ancestors, this.element]}
          ></ldevice-container>`
    )}
    </action-pane>`;
  }
};
ji([
  b()
], Lt.prototype, "selectedLNClasses", 2);
ji([
  E()
], Lt.prototype, "lDeviceElements", 1);
Lt = ji([
  G("server-container")
], Lt);
var Zu = Object.defineProperty, Xu = Object.getOwnPropertyDescriptor, Ki = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Xu(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Zu(t, i, n), n;
};
let ft = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  updated(e) {
    super.updated(e), e.has("selectedLNClasses") && this.requestUpdate("lnElements");
  }
  renderServicesIcon() {
    const e = this.element.querySelector("Services");
    return e ? c` <abbr slot="action" title="${l("iededitor.settings")}">
      <mwc-icon-button
        icon="settings"
        @click=${() => this.openSettingsWizard(e)}
      ></mwc-icon-button>
    </abbr>` : c``;
  }
  openSettingsWizard(e) {
    const t = un(e);
    t && this.dispatchEvent(j(t));
  }
  get lnElements() {
    return Array.from(this.element.querySelectorAll(":scope > LN")).filter(
      (e) => {
        const t = e.getAttribute("lnClass") ?? "";
        return this.selectedLNClasses.includes(t);
      }
    );
  }
  header() {
    const e = M(this.element), t = Pe(this.element);
    return c`${e}${t ? c` &mdash; ${t}` : O}`;
  }
  render() {
    const e = this.lnElements;
    return c`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Ws}</mwc-icon>
      ${this.renderServicesIcon()}
      ${Array.from(this.element.querySelectorAll(":scope > Server")).map(
      (t) => c`<server-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${t}
            .nsdoc=${this.nsdoc}
            .selectedLNClasses=${this.selectedLNClasses}
            .ancestors=${[...this.ancestors, this.element]}
          ></server-container>`
    )}
      <div id="lnContainer">
        ${e.map(
      (t) => c`<ln-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${t}
            .nsdoc=${this.nsdoc}
            .ancestors=${[...this.ancestors, this.element]}
          ></ln-container>`
    )}
      </div>
    </action-pane>`;
  }
};
ft.styles = ne`
    #lnContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #lnContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
Ki([
  b()
], ft.prototype, "selectedLNClasses", 2);
Ki([
  E()
], ft.prototype, "lnElements", 1);
ft = Ki([
  G("access-point-container")
], ft);
var Qu = Object.defineProperty, Ju = Object.getOwnPropertyDescriptor, ta = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ju(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Qu(t, i, n), n;
};
let zt = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  openEditWizard() {
    const e = qt.IED.edit(this.element);
    e && this.dispatchEvent(j(e));
  }
  renderServicesIcon() {
    const e = this.element.querySelector("Services");
    return e ? c` <abbr slot="action" title="${l("iededitor.settings")}">
      <mwc-icon-button
        icon="settings"
        @click=${() => this.openSettingsWizard(e)}
      ></mwc-icon-button>
    </abbr>` : c``;
  }
  openSettingsWizard(e) {
    const t = un(e);
    t && this.dispatchEvent(j(t));
  }
  removeIED() {
    const e = Pn(this.element);
    e ? this.dispatchEvent(j(() => e)) : this.dispatchEvent(
      Ft({
        old: { parent: this.element.parentElement, element: this.element }
      })
    );
  }
  header() {
    const e = M(this.element), t = Pe(this.element);
    return c`${e}${t ? c` &mdash; ${t}` : O}`;
  }
  render() {
    return c` <action-pane .label="${this.header()}">
      <mwc-icon slot="icon">developer_board</mwc-icon>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.removeIED()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      ${this.renderServicesIcon()}
      ${Array.from(this.element.querySelectorAll(":scope > AccessPoint")).map(
      (e) => c`<access-point-container
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          .nsdoc=${this.nsdoc}
          .selectedLNClasses=${this.selectedLNClasses}
          .ancestors=${[this.element]}
        ></access-point-container>`
    )}
    </action-pane>`;
  }
};
zt.styles = ne`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
ta([
  b()
], zt.prototype, "selectedLNClasses", 2);
zt = ta([
  G("ied-container")
], zt);
var Yu = Object.defineProperty, ep = Object.getOwnPropertyDescriptor, ia = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ep(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Yu(t, i, n), n;
};
let Vt = class extends ve {
  constructor() {
    super(), this.elementNames = [];
    const e = this.closest("section");
    e && e.addEventListener("full-element-path", (t) => {
      this.elementNames = t.detail.elementNames;
    });
  }
  render() {
    return c`
      <h3>${this.elementNames.join(" / ")}</h3>
    `;
  }
};
Vt.styles = ne`
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
    }`;
ia([
  E()
], Vt.prototype, "elementNames", 2);
Vt = ia([
  G("element-path")
], Vt);
c`<svg
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
</svg>`;
const wt = {
  action: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: z`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: z`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: z`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: z`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: z`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: z`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: z`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: z`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: z`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${wt.gooseIcon}</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${wt.reportIcon}</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${wt.smvIcon}</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${wt.logIcon}</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const $r = {
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
st("dAIcon"), st("dOIcon"), st("enumIcon"), st("lNIcon");
function st(e) {
  if (e === "reset") return c``;
  const t = $r[e]?.height ?? 24, i = $r[e]?.width ?? 24;
  return c`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${wt[e]}
  </svg> `;
}
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
</svg>`;
c`<svg
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
</svg>`;
c`<svg
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
</svg>`;
c`<svg
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
</svg>`;
c`<svg
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
</svg>`;
c`<svg
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
</svg>`;
c`<svg
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
</svg>`;
c`<svg
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
c` <svg
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
z`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
z`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
var tp = Object.defineProperty, ip = Object.getOwnPropertyDescriptor, Oe = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ip(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && tp(t, i, n), n;
};
class Fe extends ve {
  constructor() {
    super(...arguments), this.editCount = -1, this.selectedIEDs = [], this.selectedLNClasses = [], this.lNClassListOpenedOnce = !1;
  }
  get iedList() {
    return this.doc ? Array.from(this.doc.querySelectorAll(":root > IED")).sort(
      (t, i) => cn(t, i)
    ) : [];
  }
  get lnClassList() {
    const t = this.selectedIed, i = [];
    return t ? Array.from(t.querySelectorAll("LN0, LN")).filter((r) => r.hasAttribute("lnClass")).filter((r) => {
      const n = r.getAttribute("lnClass") ?? "";
      return i.includes(n) ? !1 : (i.push(n), !0);
    }).sort((r, n) => {
      const a = r.getAttribute("lnClass") ?? "", o = n.getAttribute("lnClass") ?? "";
      return a.localeCompare(o);
    }).map((r) => {
      const n = r.getAttribute("lnClass"), a = this.nsdoc.getDataDescription(r).label;
      return [n, a];
    }) : [];
  }
  get selectedIed() {
    if (this.selectedIEDs.length >= 1)
      return this.iedList.find((i) => {
        const r = M(i);
        return this.selectedIEDs[0] === r;
      });
  }
  updated(t) {
    if (super.updated(t), t.has("doc") || t.has("editCount") || t.has("nsdoc")) {
      if (this.doc?.querySelector(
        `IED[name="${this.selectedIEDs[0]}"]`
      )) return;
      this.selectedIEDs = [], this.selectedLNClasses = [], this.lNClassListOpenedOnce = !1;
      const n = this.iedList;
      if (n.length > 0) {
        const a = M(n[0]);
        a && (this.selectedIEDs = [a]);
      }
    }
  }
  calcSelectedLNClasses() {
    const t = this.selectedLNClasses.length > 0, i = this.lnClassList.map((n) => n[0]);
    let r = i;
    return t && (r = i.filter(
      (n) => this.selectedLNClasses.includes(n)
    )), r;
  }
  render() {
    const t = this.iedList;
    return t.length > 0 ? c`<section>
        <div class="header">
          <h1>${l("filters")}:</h1>

          <oscd-filter-button
            id="iedFilter"
            icon="developer_board"
            .header=${l("iededitor.iedSelector")}
            @selected-items-changed="${(i) => {
      ((a, o) => a.length === o.length && a.every((s, d) => s === o[d]))(
        this.selectedIEDs,
        i.detail.selectedItems
      ) || (this.lNClassListOpenedOnce = !1, this.selectedIEDs = i.detail.selectedItems, this.selectedLNClasses = [], this.requestUpdate("selectedIed"));
    }}"
          >
            ${t.map((i) => {
      const r = M(i), n = Pe(i), a = i.getAttribute("type"), o = i.getAttribute("manufacturer");
      return c` <mwc-radio-list-item
                value="${r}"
                ?twoline="${a && o}"
                ?selected="${this.selectedIEDs.includes(r ?? "")}"
              >
                ${r} ${n ? c` (${n})` : c``}
                <span slot="secondary">
                  ${a} ${a && o ? c`&mdash;` : O}
                  ${o}
                </span>
              </mwc-radio-list-item>`;
    })}
          </oscd-filter-button>

          <oscd-filter-button
            id="lnClassesFilter"
            multi="true"
            .header="${l("iededitor.lnFilter")}"
            @selected-items-changed="${(i) => {
      this.selectedLNClasses = i.detail.selectedItems, this.requestUpdate("selectedIed");
    }}"
          >
            <span slot="icon">${st("lNIcon")}</span>
            ${this.lnClassList.map((i) => {
      const r = i[0], n = i[1];
      return c`<mwc-check-list-item
                value="${r}"
                ?selected="${this.selectedLNClasses.includes(r)}"
              >
                ${n}
              </mwc-check-list-item>`;
    })}
          </oscd-filter-button>

          <element-path class="elementPath"></element-path>
        </div>

        <ied-container
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${this.selectedIed}
          .selectedLNClasses=${this.calcSelectedLNClasses()}
          .nsdoc=${this.nsdoc}
        ></ied-container>
      </section>` : c`<h1>
      <span style="color: var(--base1)">${l("iededitor.missing")}</span>
    </h1>`;
  }
  static {
    this.styles = ne`
    :host {
      width: 100vw;
    }

    section {
      padding: 8px 12px 16px;
    }

    .header {
      display: flex;
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

    .elementPath {
      margin-left: auto;
      padding-right: 12px;
    }
  `;
  }
}
Oe([
  b()
], Fe.prototype, "doc", 2);
Oe([
  b({ type: Number })
], Fe.prototype, "editCount", 2);
Oe([
  b()
], Fe.prototype, "nsdoc", 2);
Oe([
  E()
], Fe.prototype, "selectedIEDs", 2);
Oe([
  E()
], Fe.prototype, "selectedLNClasses", 2);
Oe([
  E()
], Fe.prototype, "iedList", 1);
Oe([
  E()
], Fe.prototype, "lnClassList", 1);
Oe([
  E()
], Fe.prototype, "selectedIed", 1);
export {
  Fe as default
};
