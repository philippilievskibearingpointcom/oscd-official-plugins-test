import "@material/mwc-fab";
import "@material/mwc-icon-button";
import "@material/mwc-icon-button-toggle";
import "@material/mwc-icon";
import "@material/mwc-menu";
import { Select as ma } from "@material/mwc-select";
import "@material/mwc-switch";
import { TextField as ha } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import { List as fa } from "@material/mwc-list";
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
const Ai = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, ba = (e, t, n = null, i = null) => {
  for (; t !== n; ) {
    const r = t.nextSibling;
    e.insertBefore(t, i), t = r;
  }
}, Zn = (e, t, n = null) => {
  for (; t !== n; ) {
    const i = t.nextSibling;
    e.removeChild(t), t = i;
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
const He = `{{lit-${String(Math.random()).slice(2)}}}`, dr = `<!--${He}-->`, Si = new RegExp(`${He}|${dr}`), Rt = "$lit$";
class ur {
  constructor(t, n) {
    this.parts = [], this.element = n;
    const i = [], r = [], o = document.createTreeWalker(n.content, 133, null, !1);
    let a = 0, l = -1, d = 0;
    const { strings: u, values: { length: m } } = t;
    for (; d < m; ) {
      const h = o.nextNode();
      if (h === null) {
        o.currentNode = r.pop();
        continue;
      }
      if (l++, h.nodeType === 1) {
        if (h.hasAttributes()) {
          const b = h.attributes, { length: y } = b;
          let v = 0;
          for (let S = 0; S < y; S++)
            xi(b[S].name, Rt) && v++;
          for (; v-- > 0; ) {
            const S = u[d], I = Nn.exec(S)[2], w = I.toLowerCase() + Rt, V = h.getAttribute(w);
            h.removeAttribute(w);
            const R = V.split(Si);
            this.parts.push({ type: "attribute", index: l, name: I, strings: R }), d += R.length - 1;
          }
        }
        h.tagName === "TEMPLATE" && (r.push(h), o.currentNode = h.content);
      } else if (h.nodeType === 3) {
        const b = h.data;
        if (b.indexOf(He) >= 0) {
          const y = h.parentNode, v = b.split(Si), S = v.length - 1;
          for (let I = 0; I < S; I++) {
            let w, V = v[I];
            if (V === "")
              w = Qe();
            else {
              const R = Nn.exec(V);
              R !== null && xi(R[2], Rt) && (V = V.slice(0, R.index) + R[1] + R[2].slice(0, -Rt.length) + R[3]), w = document.createTextNode(V);
            }
            y.insertBefore(w, h), this.parts.push({ type: "node", index: ++l });
          }
          v[S] === "" ? (y.insertBefore(Qe(), h), i.push(h)) : h.data = v[S], d += S;
        }
      } else if (h.nodeType === 8)
        if (h.data === He) {
          const b = h.parentNode;
          (h.previousSibling === null || l === a) && (l++, b.insertBefore(Qe(), h)), a = l, this.parts.push({ type: "node", index: l }), h.nextSibling === null ? h.data = "" : (i.push(h), l--), d++;
        } else {
          let b = -1;
          for (; (b = h.data.indexOf(He, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), d++;
        }
    }
    for (const h of i)
      h.parentNode.removeChild(h);
  }
}
const xi = (e, t) => {
  const n = e.length - t.length;
  return n >= 0 && e.slice(n) === t;
}, pr = (e) => e.index !== -1, Qe = () => document.createComment(""), Nn = (
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
const Xn = 133;
function mr(e, t) {
  const { element: { content: n }, parts: i } = e, r = document.createTreeWalker(n, Xn, null, !1);
  let o = Mt(i), a = i[o], l = -1, d = 0;
  const u = [];
  let m = null;
  for (; r.nextNode(); ) {
    l++;
    const h = r.currentNode;
    for (h.previousSibling === m && (m = null), t.has(h) && (u.push(h), m === null && (m = h)), m !== null && d++; a !== void 0 && a.index === l; )
      a.index = m !== null ? -1 : a.index - d, o = Mt(i, o), a = i[o];
  }
  u.forEach((h) => h.parentNode.removeChild(h));
}
const ga = (e) => {
  let t = e.nodeType === 11 ? 0 : 1;
  const n = document.createTreeWalker(e, Xn, null, !1);
  for (; n.nextNode(); )
    t++;
  return t;
}, Mt = (e, t = -1) => {
  for (let n = t + 1; n < e.length; n++) {
    const i = e[n];
    if (pr(i))
      return n;
  }
  return -1;
};
function ya(e, t, n = null) {
  const { element: { content: i }, parts: r } = e;
  if (n == null) {
    i.appendChild(t);
    return;
  }
  const o = document.createTreeWalker(i, Xn, null, !1);
  let a = Mt(r), l = 0, d = -1;
  for (; o.nextNode(); )
    for (d++, o.currentNode === n && (l = ga(t), n.parentNode.insertBefore(t, n)); a !== -1 && r[a].index === d; ) {
      if (l > 0) {
        for (; a !== -1; )
          r[a].index += l, a = Mt(r, a);
        return;
      }
      a = Mt(r, a);
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
const hr = /* @__PURE__ */ new WeakMap(), sn = (e) => (...t) => {
  const n = e(...t);
  return hr.set(n, !0), n;
}, Ht = (e) => typeof e == "function" && hr.has(e);
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
const Ne = {}, Je = {};
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
class In {
  constructor(t, n, i) {
    this.__parts = [], this.template = t, this.processor = n, this.options = i;
  }
  update(t) {
    let n = 0;
    for (const i of this.__parts)
      i !== void 0 && i.setValue(t[n]), n++;
    for (const i of this.__parts)
      i !== void 0 && i.commit();
  }
  _clone() {
    const t = Ai ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), n = [], i = this.template.parts, r = document.createTreeWalker(t, 133, null, !1);
    let o = 0, a = 0, l, d = r.nextNode();
    for (; o < i.length; ) {
      if (l = i[o], !pr(l)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; a < l.index; )
        a++, d.nodeName === "TEMPLATE" && (n.push(d), r.currentNode = d.content), (d = r.nextNode()) === null && (r.currentNode = n.pop(), d = r.nextNode());
      if (l.type === "node") {
        const u = this.processor.handleTextExpression(this.options);
        u.insertAfterNode(d.previousSibling), this.__parts.push(u);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(d, l.name, l.strings, this.options));
      o++;
    }
    return Ai && (document.adoptNode(t), customElements.upgrade(t)), t;
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
const $i = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (e) => e }), va = ` ${He} `;
class Qn {
  constructor(t, n, i, r) {
    this.strings = t, this.values = n, this.type = i, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const t = this.strings.length - 1;
    let n = "", i = !1;
    for (let r = 0; r < t; r++) {
      const o = this.strings[r], a = o.lastIndexOf("<!--");
      i = (a > -1 || i) && o.indexOf("-->", a + 1) === -1;
      const l = Nn.exec(o);
      l === null ? n += o + (i ? va : dr) : n += o.substr(0, l.index) + l[1] + l[2] + Rt + l[3] + He;
    }
    return n += this.strings[t], n;
  }
  getTemplateElement() {
    const t = document.createElement("template");
    let n = this.getHTML();
    return $i !== void 0 && (n = $i.createHTML(n)), t.innerHTML = n, t;
  }
}
class wa extends Qn {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const t = super.getTemplateElement(), n = t.content, i = n.firstChild;
    return n.removeChild(i), ba(n, i.firstChild), t;
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
const cn = (e) => e === null || !(typeof e == "object" || typeof e == "function"), Dn = (e) => Array.isArray(e) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(e && e[Symbol.iterator]);
class fr {
  constructor(t, n, i) {
    this.dirty = !0, this.element = t, this.name = n, this.strings = i, this.parts = [];
    for (let r = 0; r < i.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Dt(this);
  }
  _getValue() {
    const t = this.strings, n = t.length - 1, i = this.parts;
    if (n === 1 && t[0] === "" && t[1] === "") {
      const o = i[0].value;
      if (typeof o == "symbol")
        return String(o);
      if (typeof o == "string" || !Dn(o))
        return o;
    }
    let r = "";
    for (let o = 0; o < n; o++) {
      r += t[o];
      const a = i[o];
      if (a !== void 0) {
        const l = a.value;
        if (cn(l) || !Dn(l))
          r += typeof l == "string" ? l : String(l);
        else
          for (const d of l)
            r += typeof d == "string" ? d : String(d);
      }
    }
    return r += t[n], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Dt {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== Ne && (!cn(t) || t !== this.value) && (this.value = t, Ht(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ht(this.value); ) {
      const t = this.value;
      this.value = Ne, t(this);
    }
    this.value !== Ne && this.committer.commit();
  }
}
class Ut {
  constructor(t) {
    this.value = void 0, this.__pendingValue = void 0, this.options = t;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(t) {
    this.startNode = t.appendChild(Qe()), this.endNode = t.appendChild(Qe());
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
    t.__insert(this.startNode = Qe()), t.__insert(this.endNode = Qe());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(t) {
    t.__insert(this.startNode = Qe()), this.endNode = t.endNode, t.endNode = this.startNode;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Ht(this.__pendingValue); ) {
      const n = this.__pendingValue;
      this.__pendingValue = Ne, n(this);
    }
    const t = this.__pendingValue;
    t !== Ne && (cn(t) ? t !== this.value && this.__commitText(t) : t instanceof Qn ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : Dn(t) ? this.__commitIterable(t) : t === Je ? (this.value = Je, this.clear()) : this.__commitText(t));
  }
  __insert(t) {
    this.endNode.parentNode.insertBefore(t, this.endNode);
  }
  __commitNode(t) {
    this.value !== t && (this.clear(), this.__insert(t), this.value = t);
  }
  __commitText(t) {
    const n = this.startNode.nextSibling;
    t = t ?? "";
    const i = typeof t == "string" ? t : String(t);
    n === this.endNode.previousSibling && n.nodeType === 3 ? n.data = i : this.__commitNode(document.createTextNode(i)), this.value = t;
  }
  __commitTemplateResult(t) {
    const n = this.options.templateFactory(t);
    if (this.value instanceof In && this.value.template === n)
      this.value.update(t.values);
    else {
      const i = new In(n, t.processor, this.options), r = i._clone();
      i.update(t.values), this.__commitNode(r), this.value = i;
    }
  }
  __commitIterable(t) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const n = this.value;
    let i = 0, r;
    for (const o of t)
      r = n[i], r === void 0 && (r = new Ut(this.options), n.push(r), i === 0 ? r.appendIntoPart(this) : r.insertAfterPart(n[i - 1])), r.setValue(o), r.commit(), i++;
    i < n.length && (n.length = i, this.clear(r && r.endNode));
  }
  clear(t = this.startNode) {
    Zn(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
class Aa {
  constructor(t, n, i) {
    if (this.value = void 0, this.__pendingValue = void 0, i.length !== 2 || i[0] !== "" || i[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = t, this.name = n, this.strings = i;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; Ht(this.__pendingValue); ) {
      const n = this.__pendingValue;
      this.__pendingValue = Ne, n(this);
    }
    if (this.__pendingValue === Ne)
      return;
    const t = !!this.__pendingValue;
    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = Ne;
  }
}
class Sa extends fr {
  constructor(t, n, i) {
    super(t, n, i), this.single = i.length === 2 && i[0] === "" && i[1] === "";
  }
  _createPart() {
    return new Yn(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Yn extends Dt {
}
let br = !1;
(() => {
  try {
    const e = {
      get capture() {
        return br = !0, !1;
      }
    };
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch {
  }
})();
class xa {
  constructor(t, n, i) {
    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = n, this.eventContext = i, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; Ht(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = Ne, o(this);
    }
    if (this.__pendingValue === Ne)
      return;
    const t = this.__pendingValue, n = this.value, i = t == null || n != null && (t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive), r = t != null && (n == null || i);
    i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = $a(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = Ne;
  }
  handleEvent(t) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
  }
}
const $a = (e) => e && (br ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
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
function Ca(e) {
  let t = Bt.get(e.type);
  t === void 0 && (t = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Bt.set(e.type, t));
  let n = t.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const i = e.strings.join(He);
  return n = t.keyString.get(i), n === void 0 && (n = new ur(e, e.getTemplateElement()), t.keyString.set(i, n)), t.stringsArray.set(e.strings, n), n;
}
const Bt = /* @__PURE__ */ new Map();
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
const Nt = /* @__PURE__ */ new WeakMap(), Jn = (e, t, n) => {
  let i = Nt.get(t);
  i === void 0 && (Zn(t, t.firstChild), Nt.set(t, i = new Ut(Object.assign({ templateFactory: Ca }, n))), i.appendInto(t)), i.setValue(e), i.commit();
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
class Ea {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(t, n, i, r) {
    const o = n[0];
    return o === "." ? new Sa(t, n.slice(1), i).parts : o === "@" ? [new xa(t, n.slice(1), r.eventContext)] : o === "?" ? [new Aa(t, n.slice(1), i)] : new fr(t, n, i).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(t) {
    return new Ut(t);
  }
}
const gr = new Ea();
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
const s = (e, ...t) => new Qn(e, t, "html", gr), z = (e, ...t) => new wa(e, t, "svg", gr);
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
const yr = (e, t) => `${e}--${t}`;
let on = !0;
typeof window.ShadyCSS > "u" ? on = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), on = !1);
const Na = (e) => (t) => {
  const n = yr(t.type, e);
  let i = Bt.get(n);
  i === void 0 && (i = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Bt.set(n, i));
  let r = i.stringsArray.get(t.strings);
  if (r !== void 0)
    return r;
  const o = t.strings.join(He);
  if (r = i.keyString.get(o), r === void 0) {
    const a = t.getTemplateElement();
    on && window.ShadyCSS.prepareTemplateDom(a, e), r = new ur(t, a), i.keyString.set(o, r);
  }
  return i.stringsArray.set(t.strings, r), r;
}, Ia = ["html", "svg"], Da = (e) => {
  Ia.forEach((t) => {
    const n = Bt.get(yr(t, e));
    n !== void 0 && n.keyString.forEach((i) => {
      const { element: { content: r } } = i, o = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((a) => {
        o.add(a);
      }), mr(i, o);
    });
  });
}, vr = /* @__PURE__ */ new Set(), _a = (e, t, n) => {
  vr.add(e);
  const i = n ? n.element : document.createElement("template"), r = t.querySelectorAll("style"), { length: o } = r;
  if (o === 0) {
    window.ShadyCSS.prepareTemplateStyles(i, e);
    return;
  }
  const a = document.createElement("style");
  for (let u = 0; u < o; u++) {
    const m = r[u];
    m.parentNode.removeChild(m), a.textContent += m.textContent;
  }
  Da(e);
  const l = i.content;
  n ? ya(n, a, l.firstChild) : l.insertBefore(a, l.firstChild), window.ShadyCSS.prepareTemplateStyles(i, e);
  const d = l.querySelector("style");
  if (window.ShadyCSS.nativeShadow && d !== null)
    t.insertBefore(d.cloneNode(!0), t.firstChild);
  else if (n) {
    l.insertBefore(a, l.firstChild);
    const u = /* @__PURE__ */ new Set();
    u.add(a), mr(n, u);
  }
}, ka = (e, t, n) => {
  if (!n || typeof n != "object" || !n.scopeName)
    throw new Error("The `scopeName` option is required.");
  const i = n.scopeName, r = Nt.has(t), o = on && t.nodeType === 11 && !!t.host, a = o && !vr.has(i), l = a ? document.createDocumentFragment() : t;
  if (Jn(e, l, Object.assign({ templateFactory: Na(i) }, n)), a) {
    const d = Nt.get(l);
    Nt.delete(l);
    const u = d.value instanceof In ? d.value.template : void 0;
    _a(i, l, u), Zn(t, t.firstChild), t.appendChild(l), Nt.set(t, d);
  }
  !r && o && window.ShadyCSS.styleElement(t.host);
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
var wr;
window.JSCompiler_renameProperty = (e, t) => e;
const _n = {
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
}, Ar = (e, t) => t !== e && (t === t || e === e), gn = {
  attribute: !0,
  type: String,
  converter: _n,
  reflect: !1,
  hasChanged: Ar
}, yn = 1, Ci = 4, Ei = 8, Ni = 16, kn = "finalized";
class Sr extends HTMLElement {
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
    return this._classProperties.forEach((n, i) => {
      const r = this._attributeNameForProperty(i, n);
      r !== void 0 && (this._attributeToPropertyMap.set(r, i), t.push(r));
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
      t !== void 0 && t.forEach((n, i) => this._classProperties.set(i, n));
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
  static createProperty(t, n = gn) {
    if (this._ensureClassProperties(), this._classProperties.set(t, n), n.noAccessor || this.prototype.hasOwnProperty(t))
      return;
    const i = typeof t == "symbol" ? Symbol() : `__${t}`, r = this.getPropertyDescriptor(t, i, n);
    r !== void 0 && Object.defineProperty(this.prototype, t, r);
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
  static getPropertyDescriptor(t, n, i) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[n];
      },
      set(r) {
        const o = this[t];
        this[n] = r, this.requestUpdateInternal(t, o, i);
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
    return this._classProperties && this._classProperties.get(t) || gn;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (t.hasOwnProperty(kn) || t.finalize(), this[kn] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const n = this.properties, i = [
        ...Object.getOwnPropertyNames(n),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(n) : []
      ];
      for (const r of i)
        this.createProperty(r, n[r]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(t, n) {
    const i = n.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(t, n, i = Ar) {
    return i(t, n);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(t, n) {
    const i = n.type, r = n.converter || _n, o = typeof r == "function" ? r : r.fromAttribute;
    return o ? o(t, i) : t;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(t, n) {
    if (n.reflect === void 0)
      return;
    const i = n.type, r = n.converter;
    return (r && r.toAttribute || _n.toAttribute)(t, i);
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
    this.constructor._classProperties.forEach((t, n) => {
      if (this.hasOwnProperty(n)) {
        const i = this[n];
        delete this[n], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(n, i);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t, n) => this[n] = t), this._instanceProperties = void 0;
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
  attributeChangedCallback(t, n, i) {
    n !== i && this._attributeToProperty(t, i);
  }
  _propertyToAttribute(t, n, i = gn) {
    const r = this.constructor, o = r._attributeNameForProperty(t, i);
    if (o !== void 0) {
      const a = r._propertyValueToAttribute(n, i);
      if (a === void 0)
        return;
      this._updateState = this._updateState | Ei, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(t, n) {
    if (this._updateState & Ei)
      return;
    const i = this.constructor, r = i._attributeToPropertyMap.get(t);
    if (r !== void 0) {
      const o = i.getPropertyOptions(r);
      this._updateState = this._updateState | Ni, this[r] = // tslint:disable-next-line:no-any
      i._propertyValueFromAttribute(n, o), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(t, n, i) {
    let r = !0;
    if (t !== void 0) {
      const o = this.constructor;
      i = i || o.getPropertyOptions(t), o._valueHasChanged(this[t], n, i.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, n), i.reflect === !0 && !(this._updateState & Ni) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(t, i))) : r = !1;
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
  requestUpdate(t, n) {
    return this.requestUpdateInternal(t, n), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | Ci;
    try {
      await this._updatePromise;
    } catch {
    }
    const t = this.performUpdate();
    return t != null && await t, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Ci;
  }
  get hasUpdated() {
    return this._updateState & yn;
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
    const n = this._changedProperties;
    try {
      t = this.shouldUpdate(n), t ? this.update(n) : this._markUpdated();
    } catch (i) {
      throw t = !1, this._markUpdated(), i;
    }
    t && (this._updateState & yn || (this._updateState = this._updateState | yn, this.firstUpdated(n)), this.updated(n));
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((n, i) => this._propertyToAttribute(i, this[i], n)), this._reflectingProperties = void 0), this._markUpdated();
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
wr = kn;
Sr[wr] = !0;
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
const za = (e, t) => (window.customElements.define(e, t), t), La = (e, t) => {
  const { kind: n, elements: i } = t;
  return {
    kind: n,
    elements: i,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(e, r);
    }
  };
}, H = (e) => (t) => typeof t == "function" ? za(e, t) : La(e, t), Ta = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), { finisher(n) {
  n.createProperty(t.key, e);
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
  finisher(n) {
    n.createProperty(t.key, e);
  }
}, Pa = (e, t, n) => {
  t.constructor.createProperty(n, e);
};
function f(e) {
  return (t, n) => n !== void 0 ? Pa(e, t, n) : Ta(e, t);
}
function Va(e) {
  return f({ attribute: !1, hasChanged: void 0 });
}
const L = (e) => Va();
function N(e, t) {
  return (n, i) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? ei(r, n, i) : ti(r, n);
  };
}
function xr(e) {
  return (t, n) => {
    const i = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? ei(i, t, n) : ti(i, t);
  };
}
const ei = (e, t, n) => {
  Object.defineProperty(t, n, e);
}, ti = (e, t) => ({
  kind: "method",
  placement: "prototype",
  key: t.key,
  descriptor: e
}), Ra = (e, t) => Object.assign(Object.assign({}, t), { finisher(n) {
  Object.assign(n.prototype[t.key], e);
} }), Ma = (
  // tslint:disable-next-line:no-any legacy decorator
  (e, t, n) => {
    Object.assign(t[n], e);
  }
);
function qa(e) {
  return (t, n) => n !== void 0 ? Ma(e, t, n) : Ra(e, t);
}
const Ii = Element.prototype, Oa = Ii.msMatchesSelector || Ii.webkitMatchesSelector;
function $r(e = "", t = !1, n = "") {
  return (i, r) => {
    const o = {
      get() {
        const a = `slot${e ? `[name=${e}]` : ":not([name])"}`, l = this.renderRoot.querySelector(a);
        let d = l && l.assignedNodes({ flatten: t });
        return d && n && (d = d.filter((u) => u.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (u.matches ? u.matches(n) : Oa.call(u, n)))), d;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? ei(o, i, r) : ti(o, i);
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
const zn = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ni = Symbol();
class ii {
  constructor(t, n) {
    if (n !== ni)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (zn ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Cr = (e) => new ii(String(e), ni), Fa = (e) => {
  if (e instanceof ii)
    return e.cssText;
  if (typeof e == "number")
    return e;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, G = (e, ...t) => {
  const n = t.reduce((i, r, o) => i + Fa(r) + e[o + 1], e[0]);
  return new ii(n, ni);
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
const Di = {};
class B extends Sr {
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
      const n = (o, a) => o.reduceRight((l, d) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(d) ? n(d, l) : (l.add(d), l)
      ), a), i = n(t, /* @__PURE__ */ new Set()), r = [];
      i.forEach((o) => r.unshift(o)), this._styles = r;
    } else
      this._styles = t === void 0 ? [] : [t];
    this._styles = this._styles.map((n) => {
      if (n instanceof CSSStyleSheet && !zn) {
        const i = Array.prototype.slice.call(n.cssRules).reduce((r, o) => r + o.cssText, "");
        return Cr(i);
      }
      return n;
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
    t.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((n) => n.cssText), this.localName) : zn ? this.renderRoot.adoptedStyleSheets = t.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    const n = this.render();
    super.update(t), n !== Di && this.constructor.render(n, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((i) => {
      const r = document.createElement("style");
      r.textContent = i.cssText, this.renderRoot.appendChild(r);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return Di;
  }
}
B.finalized = !0;
B.render = ka;
B.shadowRootOptions = { mode: "open" };
const Ha = 1e3 * 60, Ln = "langChanged";
function Ba(e, t, n) {
  return Object.entries(Tn(t || {})).reduce((i, [r, o]) => i.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Tn(o))), e);
}
function Wa(e, t) {
  const n = e.split(".");
  let i = t.strings;
  for (; i != null && n.length > 0; )
    i = i[n.shift()];
  return i != null ? i.toString() : null;
}
function Tn(e) {
  return typeof e == "function" ? e() : e;
}
const Ga = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: Wa,
  interpolate: Ba,
  translationCache: {}
});
let Wt = Ga();
function Ua(e) {
  return Wt = Object.assign(Object.assign({}, Wt), e);
}
function ja(e) {
  window.dispatchEvent(new CustomEvent(Ln, { detail: e }));
}
function Ka(e, t, n = Wt) {
  ja({
    previousStrings: n.strings,
    previousLang: n.lang,
    lang: n.lang = e,
    strings: n.strings = t
  });
}
function Za(e, t) {
  const n = (i) => e(i.detail);
  return window.addEventListener(Ln, n, t), () => window.removeEventListener(Ln, n);
}
async function Xa(e, t = Wt) {
  const n = await t.loader(e, t);
  t.translationCache = {}, Ka(e, n, t);
}
function c(e, t, n = Wt) {
  let i = n.translationCache[e] || (n.translationCache[e] = n.lookup(e, n) || n.empty(e, n));
  return t = t != null ? Tn(t) : null, t != null ? n.interpolate(i, t, n) : i;
}
function Er(e) {
  return e instanceof Ut ? e.startNode.isConnected : e instanceof Dt ? e.committer.element.isConnected : e.element.isConnected;
}
function Qa(e) {
  for (const [t] of e)
    Er(t) || e.delete(t);
}
function Ya(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Ja(e, t) {
  setInterval(() => Ya(() => Qa(e)), t);
}
const Nr = /* @__PURE__ */ new Map();
function es() {
  Za((e) => {
    for (const [t, n] of Nr)
      Er(t) && ts(t, n, e);
  });
}
es();
Ja(Nr, Ha);
function ts(e, t, n) {
  const i = t(n);
  e.value !== i && (e.setValue(i), e.commit());
}
var ns = Object.defineProperty, is = Object.getOwnPropertyDescriptor, _t = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? is(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && ns(t, n, r), r;
};
let et = class extends B {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return s`<span>
      <slot name="icon"
        >${this.icon ? s`<mwc-icon>${this.icon}</mwc-icon>` : Je}</slot
      ></span
    > `;
  }
  render() {
    return s`<header>${this.label ?? Je}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? Je}</footer>`;
  }
};
et.styles = G`
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
_t([
  f({ type: String })
], et.prototype, "label", 2);
_t([
  f({ type: String })
], et.prototype, "icon", 2);
_t([
  f({ type: Boolean })
], et.prototype, "secondary", 2);
_t([
  f({ type: Boolean })
], et.prototype, "highlighted", 2);
_t([
  f({ type: Boolean })
], et.prototype, "hideActions", 2);
et = _t([
  H("action-icon")
], et);
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
class rs {
  constructor(t) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = t;
    const n = (t.getAttribute("class") || "").split(/\s+/);
    for (const i of n)
      this.classes.add(i);
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
      this.classes.forEach((n) => t += n + " "), this.element.setAttribute("class", t);
    }
  }
}
const _i = /* @__PURE__ */ new WeakMap(), Ge = sn((e) => (t) => {
  if (!(t instanceof Dt) || t instanceof Yn || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: n } = t, { element: i } = n;
  let r = _i.get(t);
  r === void 0 && (i.setAttribute("class", n.strings.join(" ")), _i.set(t, r = /* @__PURE__ */ new Set()));
  const o = i.classList || new rs(i);
  r.forEach((a) => {
    a in e || (o.remove(a), r.delete(a));
  });
  for (const a in e) {
    const l = e[a];
    l != r.has(a) && (l ? (o.add(a), r.add(a)) : (o.remove(a), r.delete(a)));
  }
  typeof o.commit == "function" && o.commit();
});
var os = Object.defineProperty, as = Object.getOwnPropertyDescriptor, kt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? as(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && os(t, n, r), r;
};
function Ir(e, t) {
  const n = e.nodeType === Node.ELEMENT_NODE ? e.closest(t) : null;
  if (n) return n;
  const i = e.getRootNode();
  return i instanceof ShadowRoot ? Ir(i.host, t) : null;
}
let tt = class extends B {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const e = Ir(this.parentNode, "action-pane");
    e && (this.level = e.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const e = s`<span
        ><slot name="icon"
          >${this.icon ? s`<mwc-icon>${this.icon}</mwc-icon>` : Je}</slot
        ></span
      >
      ${this.label ?? Je}
      <nav><slot name="action"></slot></nav>`, t = Math.floor(Math.max(this.level, 1)), n = typeof this.label == "string" ? this.label : "";
    switch (t) {
      case 1:
        return s`<h1 title="${n}">${e}</h1>`;
      case 2:
        return s`<h2 title="${n}">${e}</h2>`;
      case 3:
        return s`<h3 title="${n}">${e}</h3>`;
      default:
        return s`<h4 title="${n}">${e}</h4>`;
    }
  }
  render() {
    return s`<section
      class="${Ge({
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
tt.styles = G`
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
kt([
  f({ type: String })
], tt.prototype, "label", 2);
kt([
  f({ type: String })
], tt.prototype, "icon", 2);
kt([
  f({ type: Boolean })
], tt.prototype, "secondary", 2);
kt([
  f({ type: Boolean })
], tt.prototype, "highlighted", 2);
kt([
  f({ type: Number })
], tt.prototype, "level", 2);
tt = kt([
  H("action-pane")
], tt);
var Pn = function(e, t) {
  return Pn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Pn(e, t);
};
function ss(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var qt = function() {
  return qt = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, qt.apply(this, arguments);
};
function A(e, t, n, i) {
  var r = arguments.length, o = r < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, i);
  else for (var l = e.length - 1; l >= 0; l--) (a = e[l]) && (o = (r < 3 ? a(o) : r > 3 ? a(t, n, o) : a(t, n)) || o);
  return r > 3 && o && Object.defineProperty(t, n, o), o;
}
function Zt(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], i = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
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
function cs(e, t) {
  var n = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return n.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ls = (e) => e.nodeType === Node.ELEMENT_NODE, Dr = () => {
}, ds = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Dr, ds);
document.removeEventListener("x", Dr);
const _r = (e = window.document) => {
  let t = e.activeElement;
  const n = [];
  if (!t)
    return n;
  for (; t && (n.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return n;
}, us = (e) => {
  const t = _r();
  if (!t.length)
    return !1;
  const n = t[t.length - 1], i = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const o = (a) => {
    r = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", o), n.dispatchEvent(i), document.body.removeEventListener("check-if-focused", o), r.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ri extends B {
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
var kr = (
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
var ps = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ms = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ki = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function hs(e, t, n) {
  if (!e)
    return { x: 0, y: 0 };
  var i = t.x, r = t.y, o = i + n.left, a = r + n.top, l, d;
  if (e.type === "touchstart") {
    var u = e;
    l = u.changedTouches[0].pageX - o, d = u.changedTouches[0].pageY - a;
  } else {
    var m = e;
    l = m.pageX - o, d = m.pageY - a;
  }
  return { x: l, y: d };
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
var zi = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Li = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xt = [], fs = (
  /** @class */
  function(e) {
    ss(t, e);
    function t(n) {
      var i = e.call(this, qt(qt({}, t.defaultAdapter), n)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(r) {
        i.activateImpl(r);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return ps;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return ms;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return ki;
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
      var n = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = t.cssClasses, o = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(o), n.adapter.isUnbounded() && (n.adapter.addClass(a), n.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var i = t.cssClasses, r = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(r), n.adapter.removeClass(o), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, t.prototype.activate = function(n) {
      this.activateImpl(n);
    }, t.prototype.deactivate = function() {
      this.deactivateImpl();
    }, t.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, t.prototype.setUnbounded = function(n) {
      var i = t.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, t.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(t.cssClasses.BG_FOCUSED);
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
    }, t.prototype.registerRootHandlers = function(n) {
      var i, r;
      if (n) {
        try {
          for (var o = Zt(zi), a = o.next(); !a.done; a = o.next()) {
            var l = a.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, t.prototype.registerDeactivationHandlers = function(n) {
      var i, r;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var o = Zt(Li), a = o.next(); !a.done; a = o.next()) {
            var l = a.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var r = Zt(zi), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var n, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = Zt(Li), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var n = this, i = t.strings, r = Object.keys(i);
      r.forEach(function(o) {
        o.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(i[o], null);
      });
    }, t.prototype.activateImpl = function(n) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var o = this.previousActivationEvent, a = o && n !== void 0 && o.type !== n.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = n === void 0, r.activationEvent = n, r.wasActivatedByPointer = r.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var l = n !== void 0 && Xt.length > 0 && Xt.some(function(d) {
              return i.adapter.containsEventTarget(d);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Xt.push(n.target), this.registerDeactivationHandlers(n)), r.wasElementMadeActive = this.checkElementMadeActive(n), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Xt = [], !r.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(n), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var n = this, i = t.strings, r = i.VAR_FG_TRANSLATE_START, o = i.VAR_FG_TRANSLATE_END, a = t.cssClasses, l = a.FG_DEACTIVATION, d = a.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), y = b.startPoint, v = b.endPoint;
        m = y.x + "px, " + y.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(r, m), this.adapter.updateCssVariable(o, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, r = n.wasActivatedByPointer, o;
      r ? o = hs(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
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
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = t.cssClasses.FG_DEACTIVATION, r = this.activationState, o = r.hasDeactivationUXRun, a = r.isActivated, l = o || !a;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(i);
      }, ki.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var n = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var n = this, i = this.activationState;
      if (i.isActivated) {
        var r = qt({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(r), n.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(n) {
      var i = n.wasActivatedByPointer, r = n.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var a = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return a + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var o = Math.floor(i * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var n = t.strings, i = n.VAR_FG_SIZE, r = n.VAR_LEFT, o = n.VAR_TOP, a = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, t;
  }(kr)
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
const Ti = /* @__PURE__ */ new WeakMap(), bs = sn((e) => (t) => {
  if (!(t instanceof Dt) || t instanceof Yn || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: n } = t, { style: i } = n.element;
  let r = Ti.get(t);
  r === void 0 && (i.cssText = n.strings.join(" "), Ti.set(t, r = /* @__PURE__ */ new Set())), r.forEach((o) => {
    o in e || (r.delete(o), o.indexOf("-") === -1 ? i[o] = null : i.removeProperty(o));
  });
  for (const o in e)
    r.add(o), o.indexOf("-") === -1 ? i[o] = e[o] : i.setProperty(o, e[o]);
});
class ne extends ri {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = fs;
  }
  get isActive() {
    return cs(this.parentElement || this, ":active");
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
      updateCssVariable: (t, n) => {
        switch (t) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = n;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = n;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = n;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = n;
            break;
          case "--mdc-ripple-left":
            this.leftPos = n;
            break;
          case "--mdc-ripple-top":
            this.topPos = n;
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
    const t = this.activated && (this.primary || !this.accent), n = this.selected && (this.primary || !this.accent), i = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": t,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": n,
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
    return s`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ge(i)}"
          style="${bs({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
A([
  N(".mdc-ripple-surface")
], ne.prototype, "mdcRoot", void 0);
A([
  f({ type: Boolean })
], ne.prototype, "primary", void 0);
A([
  f({ type: Boolean })
], ne.prototype, "accent", void 0);
A([
  f({ type: Boolean })
], ne.prototype, "unbounded", void 0);
A([
  f({ type: Boolean })
], ne.prototype, "disabled", void 0);
A([
  f({ type: Boolean })
], ne.prototype, "activated", void 0);
A([
  f({ type: Boolean })
], ne.prototype, "selected", void 0);
A([
  f({ type: Boolean })
], ne.prototype, "internalUseStateLayerCustomProperties", void 0);
A([
  L()
], ne.prototype, "hovering", void 0);
A([
  L()
], ne.prototype, "bgFocused", void 0);
A([
  L()
], ne.prototype, "fgActivation", void 0);
A([
  L()
], ne.prototype, "fgDeactivation", void 0);
A([
  L()
], ne.prototype, "fgScale", void 0);
A([
  L()
], ne.prototype, "fgSize", void 0);
A([
  L()
], ne.prototype, "translateStart", void 0);
A([
  L()
], ne.prototype, "translateEnd", void 0);
A([
  L()
], ne.prototype, "leftPos", void 0);
A([
  L()
], ne.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const gs = G`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Vn = class extends ne {
};
Vn.styles = [gs];
Vn = A([
  H("mwc-ripple")
], Vn);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const nt = (e) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, n) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const i = t.constructor._observers;
        t.constructor._observers = /* @__PURE__ */ new Map(), i.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, o) => t.constructor._observers.set(o, r)
        );
      }
    } else {
      t.constructor._observers = /* @__PURE__ */ new Map();
      const i = t.updated;
      t.updated = function(r) {
        i.call(this, r), r.forEach((o, a) => {
          const d = this.constructor._observers.get(a);
          d !== void 0 && d.call(this, this[a], o);
        });
      };
    }
    t.constructor._observers.set(n, e);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zr {
  constructor(t) {
    this.startPress = (n) => {
      t().then((i) => {
        i && i.startPress(n);
      });
    }, this.endPress = () => {
      t().then((n) => {
        n && n.endPress();
      });
    }, this.startFocus = () => {
      t().then((n) => {
        n && n.startFocus();
      });
    }, this.endFocus = () => {
      t().then((n) => {
        n && n.endFocus();
      });
    }, this.startHover = () => {
      t().then((n) => {
        n && n.startHover();
      });
    }, this.endHover = () => {
      t().then((n) => {
        n && n.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ae extends B {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new zr(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
          const n = t.type;
          this.onDown(n === "mousedown" ? "mouseup" : "touchend", t);
        }
      }
    ];
  }
  get text() {
    const t = this.textContent;
    return t ? t.trim() : "";
  }
  render() {
    const t = this.renderText(), n = this.graphic ? this.renderGraphic() : s``, i = this.hasMeta ? this.renderMeta() : s``;
    return s`
      ${this.renderRipple()}
      ${n}
      ${t}
      ${i}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? s`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? s`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return s`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ge(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return s`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return s`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return s`<slot></slot>`;
  }
  renderTwoline() {
    return s`
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
  onDown(t, n) {
    const i = () => {
      window.removeEventListener(t, i), this.rippleHandlers.endPress();
    };
    window.addEventListener(t, i), this.rippleHandlers.startPress(n);
  }
  fireRequestSelected(t, n) {
    if (this.noninteractive)
      return;
    const i = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: n, selected: t } });
    this.dispatchEvent(i);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const t of this.listeners)
      for (const n of t.eventNames)
        t.target.addEventListener(n, t.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of this.listeners)
      for (const n of t.eventNames)
        t.target.removeEventListener(n, t.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const t = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(t);
  }
}
A([
  N("slot")
], ae.prototype, "slotElement", void 0);
A([
  xr("mwc-ripple")
], ae.prototype, "ripple", void 0);
A([
  f({ type: String })
], ae.prototype, "value", void 0);
A([
  f({ type: String, reflect: !0 })
], ae.prototype, "group", void 0);
A([
  f({ type: Number, reflect: !0 })
], ae.prototype, "tabindex", void 0);
A([
  f({ type: Boolean, reflect: !0 }),
  nt(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], ae.prototype, "disabled", void 0);
A([
  f({ type: Boolean, reflect: !0 })
], ae.prototype, "twoline", void 0);
A([
  f({ type: Boolean, reflect: !0 })
], ae.prototype, "activated", void 0);
A([
  f({ type: String, reflect: !0 })
], ae.prototype, "graphic", void 0);
A([
  f({ type: Boolean })
], ae.prototype, "multipleGraphics", void 0);
A([
  f({ type: Boolean })
], ae.prototype, "hasMeta", void 0);
A([
  f({ type: Boolean, reflect: !0 }),
  nt(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], ae.prototype, "noninteractive", void 0);
A([
  f({ type: Boolean, reflect: !0 }),
  nt(function(e) {
    const t = this.getAttribute("role"), n = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (n && e ? this.setAttribute("aria-selected", "true") : n && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], ae.prototype, "selected", void 0);
A([
  L()
], ae.prototype, "shouldRenderRipple", void 0);
A([
  L()
], ae.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Lr = G`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Rn = class extends ae {
};
Rn.styles = [Lr];
Rn = A([
  H("mwc-list-item")
], Rn);
function k(e, t, n) {
  const i = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(n).filter(([r, o]) => o !== null).forEach(([r, o]) => i.setAttribute(r, o)), i;
}
function F(e, t) {
  const n = e.cloneNode(!1);
  return Object.entries(t).forEach(([i, r]) => {
    r === null ? n.removeAttribute(i) : n.setAttribute(i, r);
  }), n;
}
function C(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (n) => n.tagName === t
  );
}
function ln(e, t, n = 1) {
  const i = "new" + t + n;
  return e.querySelector(`:scope > ${t}[name="${i}"]`) ? ln(e, t, ++n) : i;
}
var ys = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, $e = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? vs(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && ys(t, n, r), r;
};
let de = class extends ha {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(c("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? s`<div style="position:relative;">
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
      </div>` : s``;
  }
  renderMulplierList() {
    return s`${this.multipliers.map(
      (e) => s`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? c("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? s`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : s``;
  }
  render() {
    return s`
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
$e([
  f({ type: Boolean })
], de.prototype, "nullable", 2);
$e([
  f({ type: Array })
], de.prototype, "multipliers", 2);
$e([
  f({ type: String })
], de.prototype, "multiplier", 1);
$e([
  f({ type: String })
], de.prototype, "unit", 2);
$e([
  L()
], de.prototype, "null", 1);
$e([
  f({ type: String })
], de.prototype, "maybeValue", 1);
$e([
  f({ type: String })
], de.prototype, "defaultValue", 2);
$e([
  f({ type: Array })
], de.prototype, "reservedValues", 2);
$e([
  N("mwc-switch")
], de.prototype, "nullSwitch", 2);
$e([
  N("mwc-menu")
], de.prototype, "multiplierMenu", 2);
$e([
  N("mwc-icon-button")
], de.prototype, "multiplierButton", 2);
de = $e([
  H("wizard-textfield")
], de);
var ws = Object.defineProperty, As = Object.getOwnPropertyDescriptor, St = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? As(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && ws(t, n, r), r;
};
let Be = class extends ma {
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
    return this.nullable ? s`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : s``;
  }
  render() {
    return s`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
St([
  f({ type: Boolean })
], Be.prototype, "nullable", 2);
St([
  L()
], Be.prototype, "null", 1);
St([
  f({ type: String })
], Be.prototype, "maybeValue", 1);
St([
  f({ type: String })
], Be.prototype, "defaultValue", 2);
St([
  f({ type: Array })
], Be.prototype, "reservedValues", 2);
St([
  N("mwc-switch")
], Be.prototype, "nullSwitch", 2);
Be = St([
  H("wizard-select")
], Be);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ss(e, t, n) {
  const i = e.constructor;
  if (!n) {
    const l = `__${t}`;
    if (n = i.getPropertyDescriptor(t, l), !n)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = n;
  let o = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(l) {
      o === "" && (o = i.getPropertyOptions(t).attribute), this.hasAttribute(o) && this.removeAttribute(o), r.set.call(this, l);
    }
  };
  return r.get && (a.get = function() {
    return r.get.call(this);
  }), a;
}
function oi(e, t, n) {
  if (t !== void 0)
    return Ss(e, t, n);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tr extends ri {
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
Tr.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const vn = /* @__PURE__ */ new WeakMap(), Fe = sn((e) => (t) => {
  const n = vn.get(t);
  if (e === void 0 && t instanceof Dt) {
    if (n !== void 0 || !vn.has(t)) {
      const i = t.committer.name;
      t.committer.element.removeAttribute(i);
    }
  } else e !== n && t.setValue(e);
  vn.set(t, e);
});
class re extends Tr {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new zr(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const n = t.get("indeterminate"), i = t.get("checked"), r = t.get("disabled");
    if (n !== void 0 || i !== void 0 || r !== void 0) {
      const o = this.calculateAnimationStateName(!!i, !!n, !!r), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${o}-${a}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, n, i) {
    return i ? "disabled" : n ? "indeterminate" : t ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? s`<mwc-ripple
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
    const t = this.indeterminate || this.checked, n = {
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
    }, i = this.indeterminate ? "mixed" : void 0;
    return s`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ge(n)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Fe(this.name)}"
              aria-checked="${Fe(i)}"
              aria-label="${Fe(this.ariaLabel)}"
              aria-labelledby="${Fe(this.ariaLabelledBy)}"
              aria-describedby="${Fe(this.ariaDescribedBy)}"
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
    const n = () => {
      window.removeEventListener("mouseup", n), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", n), this.rippleHandlers.startPress(t);
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
A([
  N(".mdc-checkbox")
], re.prototype, "mdcRoot", void 0);
A([
  N("input")
], re.prototype, "formElement", void 0);
A([
  f({ type: Boolean, reflect: !0 })
], re.prototype, "checked", void 0);
A([
  f({ type: Boolean })
], re.prototype, "indeterminate", void 0);
A([
  f({ type: Boolean, reflect: !0 })
], re.prototype, "disabled", void 0);
A([
  f({ type: String, reflect: !0 })
], re.prototype, "name", void 0);
A([
  f({ type: String })
], re.prototype, "value", void 0);
A([
  oi,
  f({ type: String, attribute: "aria-label" })
], re.prototype, "ariaLabel", void 0);
A([
  oi,
  f({ type: String, attribute: "aria-labelledby" })
], re.prototype, "ariaLabelledBy", void 0);
A([
  oi,
  f({ type: String, attribute: "aria-describedby" })
], re.prototype, "ariaDescribedBy", void 0);
A([
  f({ type: Boolean })
], re.prototype, "reducedTouchTarget", void 0);
A([
  L()
], re.prototype, "animationClass", void 0);
A([
  L()
], re.prototype, "shouldRenderRipple", void 0);
A([
  L()
], re.prototype, "focused", void 0);
A([
  L()
], re.prototype, "useStateLayerCustomProperties", void 0);
A([
  xr("mwc-ripple")
], re.prototype, "ripple", void 0);
A([
  qa({ passive: !0 })
], re.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const xs = G`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Mn = class extends re {
};
Mn.styles = [xs];
Mn = A([
  H("mwc-checkbox")
], Mn);
var $s = Object.defineProperty, Cs = Object.getOwnPropertyDescriptor, we = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Cs(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && $s(t, n, r), r;
};
let ue = class extends B {
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
    return this.nullable ? s`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : s``;
  }
  render() {
    return s`
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
we([
  f({ type: String })
], ue.prototype, "label", 2);
we([
  f({ type: String })
], ue.prototype, "helper", 2);
we([
  f({ type: Boolean })
], ue.prototype, "nullable", 2);
we([
  f({ type: Boolean })
], ue.prototype, "defaultChecked", 2);
we([
  f({ type: String })
], ue.prototype, "maybeValue", 1);
we([
  f({ type: Boolean })
], ue.prototype, "disabled", 2);
we([
  L()
], ue.prototype, "null", 1);
we([
  L()
], ue.prototype, "checked", 1);
we([
  L()
], ue.prototype, "deactivateCheckbox", 2);
we([
  L()
], ue.prototype, "formfieldLabel", 1);
we([
  N("mwc-switch")
], ue.prototype, "nullSwitch", 2);
we([
  N("mwc-checkbox")
], ue.prototype, "checkbox", 2);
ue = we([
  H("wizard-checkbox")
], ue);
function Es(e) {
  return typeof e == "function";
}
function g(e) {
  return e instanceof de || e instanceof Be || e instanceof ue ? e.maybeValue : e.value ?? null;
}
function ai(e) {
  return e instanceof de ? e.multiplier : null;
}
function E(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const n = Es(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: n, ...t?.detail }
  });
}
function be(e) {
  return E(e, { detail: { subwizard: !0 } });
}
function Ns(e) {
  let t = "", n = e.parentElement;
  for (; n?.getAttribute("name"); )
    t = "/" + n.getAttribute("name") + t, n = n.parentElement;
  return t;
}
function Is(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function oe(e) {
  const t = e.split(">"), n = t.pop() ?? "";
  return [t.join(">"), n];
}
const X = ":not(*)";
function Ds(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function _s(e, t) {
  const [n, i] = t.split("	");
  return !n || !i ? X : `${e}[version="${n}"][revision="${i}"]`;
}
function Pi(e) {
  return D(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function Vi(e, t) {
  const [n, i] = oe(t), r = T[e].parents.flatMap(
    (o) => se(o, n).split(",")
  );
  return ie(
    r,
    [">"],
    [`${e}[connectivityNode="${i}"]`]
  ).map((o) => o.join("")).join(",");
}
function ks(e) {
  const [t, n, i, r, o, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((l) => e.getAttribute(l));
  return t === "None" ? `${D(e.parentElement)}>(${r} ${a} ${o})` : `${t} ${n || "(Client)"}/${i ?? ""} ${r} ${o ?? ""}`;
}
function zs(e, t) {
  if (t.endsWith(")")) {
    const [b, y] = oe(t), [v, S, I] = y.substring(1, y.length - 1).split(" ");
    if (!v || !S) return X;
    const w = T[e].parents.flatMap(
      (V) => se(V, b).split(",")
    );
    return ie(
      w,
      [">"],
      [`${e}[iedName="None"][lnClass="${v}"][lnType="${S}"][lnInst="${I}"]`]
    ).map((V) => V.join("")).join(",");
  }
  const [n, i, r, o, a] = t.split(/[ /]/);
  if (!n || !i || !o) return X;
  const [
    l,
    d,
    u,
    m,
    h
  ] = [
    [`[iedName="${n}"]`],
    i === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${i}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ie(
    [e],
    l,
    d,
    u,
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function Ls(e) {
  return `${D(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function Ts(e, t) {
  const [n, i] = oe(t), [r, o] = i.split(" ");
  return `${se(
    "IED",
    n
  )}>${e}[iedName="${r}"][apName="${o}"]`;
}
function Ps(e) {
  return `${D(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Vs(e, t) {
  const [n, i] = oe(t);
  return i ? `${se(
    "Server",
    n
  )}>${e}[associationID="${i}"]` : X;
}
function Rs(e) {
  return `${D(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Ms(e, t) {
  const [n, i] = t.split(">>");
  return i ? `IED[name="${n}"] ${e}[inst="${i}"]` : X;
}
function qs(e) {
  const t = e.textContent, [n, i, r, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => e.getAttribute(l));
  return `${D(e.parentElement)}>${t} ${n || ""} ${i || ""}/${r ?? ""} ${o ?? ""} ${a ?? ""}`;
}
function Os(e, t) {
  const [n, i] = oe(t), [r, o, a, l, d, u] = i.split(/[ /]/), [
    m,
    h,
    b,
    y,
    v,
    S
  ] = [
    T[e].parents.flatMap(
      (I) => se(I, n).split(",")
    ),
    [`${r}`],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ie(
    m,
    [">"],
    [e],
    h,
    b,
    y,
    v,
    S
  ).map((I) => I.join("")).join(",");
}
function Fs(e) {
  const [t, n, i, r, o, a, l, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), u = `${t}/${n ?? ""} ${i} ${r ?? ""}.${o} ${a || ""}`;
  return `${D(e.parentElement)}>${u} (${l}${d ? " [" + d + "]" : ""})`;
}
function Hs(e, t) {
  const [n, i] = oe(t), [r, o, a, l] = i.split(/[ /.]/), d = i.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = d && d[1] ? d[1] : "", m = d && d[2] ? d[2] : "", h = i.match(/\(([A-Z]{2})/), b = i.match(/ \[([0-9]{1,2})\]/), y = h && h[1] ? h[1] : "", v = b && b[1] ? b[1] : "", [
    S,
    I,
    w,
    V,
    R,
    Y,
    W,
    le,
    bn
  ] = [
    T[e].parents.flatMap(
      (Tt) => se(Tt, n).split(",")
    ),
    [`[ldInst="${r}"]`],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    v ? [`[ix="${v}"]`] : [":not([ix])", '[ix=""]']
  ];
  return ie(
    S,
    [">"],
    [e],
    I,
    w,
    V,
    R,
    Y,
    W,
    le,
    bn
  ).map((Tt) => Tt.join("")).join(",");
}
function Bs(e) {
  if (!e.parentElement) return NaN;
  const t = D(e.parentElement), n = e.getAttribute("iedName"), i = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${i}"]`)
  ).indexOf(e);
  if (i) return `${t}>${i}[${r}]`;
  const [
    o,
    a,
    l,
    d,
    u,
    m,
    h,
    b,
    y,
    v,
    S,
    I
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
  ].map((R) => e.getAttribute(R)), w = I ? `${h}:${I} ${b ?? ""}/${y ?? ""} ${v ?? ""} ${S ?? ""}` : "", V = `${n} ${o}/${a ?? ""} ${l} ${d ?? ""} ${u} ${m || ""}`;
  return `${t}>${w ? w + " " : ""}${V}${i ? `@${i}` : ""}`;
}
function Ws(e, t) {
  const [n, i] = oe(t), r = T[e].parents.flatMap(
    (Pt) => se(Pt, n).split(",")
  );
  if (i.endsWith("]")) {
    const [Pt] = i.split("["), ua = [`[intAddr="${Pt}"]`];
    return ie(r, [">"], [e], ua).map((pa) => pa.join("")).join(",");
  }
  let o, a, l, d, u, m, h, b, y, v, S, I, w, V;
  !i.includes(":") && !i.includes("@") ? [o, a, l, d, u, m, h] = i.split(/[ /]/) : i.includes(":") && !i.includes("@") ? [
    b,
    y,
    v,
    S,
    I,
    w,
    o,
    a,
    l,
    d,
    u,
    m,
    h
  ] = i.split(/[ /:]/) : !i.includes(":") && i.includes("@") ? [o, a, l, d, u, m, h, V] = i.split(/[ /@]/) : [
    b,
    y,
    v,
    S,
    I,
    w,
    o,
    a,
    l,
    d,
    u,
    m,
    h,
    V
  ] = i.split(/[ /:@]/);
  const [
    R,
    Y,
    W,
    le,
    bn,
    Tt,
    ia,
    ra,
    oa,
    aa,
    sa,
    ca,
    la,
    da
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    v ? [`[srcLDInst="${v}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    S ? [`[srcPrefix="${S}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    I ? [`[srcLNClass="${I}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    w ? [`[srcLNInst="${w}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    V ? [`[intAddr="${V}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return ie(
    r,
    [">"],
    [e],
    R,
    Y,
    W,
    le,
    bn,
    Tt,
    ia,
    ra,
    oa,
    aa,
    sa,
    ca,
    la,
    da
  ).map((Pt) => Pt.join("")).join(",");
}
function Gs(e) {
  const [t, n, i] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${D(e.parentElement)}>${t ?? ""} ${n} ${i}`;
}
function Us(e, t) {
  const [n, i] = oe(t), r = T[e].parents.flatMap(
    (h) => se(h, n).split(",")
  ), [o, a, l] = i.split(" ");
  if (!a) return X;
  const [d, u, m] = [
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${l}"]`]
  ];
  return ie(
    r,
    [">"],
    [e],
    d,
    u,
    m
  ).map((h) => h.join("")).join(",");
}
function js(e) {
  const [t, n, i, r, o, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => e.getAttribute(l));
  return `${D(e.parentElement)}>${n} ${t || ""} ${i}/${r ?? ""} ${o} ${a}`;
}
function Ks(e, t) {
  const [n, i] = oe(t), r = T[e].parents.flatMap(
    (w) => se(w, n).split(",")
  ), [o, a, l, d, u, m] = i.split(/[ /]/), [
    h,
    b,
    y,
    v,
    S,
    I
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    l ? [`[ldInst="${l}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ie(
    r,
    [">"],
    [e],
    h,
    b,
    y,
    v,
    S,
    I
  ).map((w) => w.join("")).join(",");
}
function Ri(e) {
  const [t, n] = ["name", "ix"].map((i) => e.getAttribute(i));
  return `${D(e.parentElement)}>${t}${n ? "[" + n + "]" : ""}`;
}
function qn(e, t, n = -1) {
  n === -1 && (n = t.split(">").length);
  const [i, r] = oe(t), [o, a, l, d] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return X;
  if (n === 0) return `${e}[name="${a}"]`;
  const u = T[e].parents.flatMap(
    (b) => b === "SDI" ? qn(b, i, n - 1).split(",") : se(b, i).split(",")
  ).filter((b) => !b.startsWith(X));
  if (u.length === 0) return X;
  const [m, h] = [
    [`[name="${a}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return ie(
    u,
    [">"],
    [e],
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function Zs(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), n = Array.from(e.parentElement.children).filter((i) => i.getAttribute("sGroup") === t).findIndex((i) => i.isSameNode(e));
  return `${D(e.parentElement)}>${t ? t + "." : ""} ${n}`;
}
function Xs(e, t) {
  const [n, i] = oe(t), [r, o] = i.split(" "), a = parseFloat(o), l = T[e].parents.flatMap(
    (m) => se(m, n).split(",")
  ), [d, u] = [
    r ? [`[sGroup="${r}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return ie(
    l,
    [">"],
    [e],
    d,
    u
  ).map((m) => m.join("")).join(",");
}
function Qs(e) {
  const [t, n] = ["iedName", "apName"].map(
    (i) => e.getAttribute(i)
  );
  return `${t} ${n}`;
}
function Ys(e, t) {
  const [n, i] = t.split(" ");
  return !n || !i ? X : `${e}[iedName="${n}"][apName="${i}"]`;
}
function Mi(e) {
  const [t, n] = ["ldInst", "cbName"].map(
    (i) => e.getAttribute(i)
  );
  return `${t} ${n}`;
}
function qi(e, t) {
  const [n, i] = t.split(" ");
  return !n || !i ? X : `${e}[ldInst="${n}"][cbName="${i}"]`;
}
function Js(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${D(e.parentElement)}>${t}`;
}
function ec(e, t) {
  const [n, i] = oe(t), [r, o] = [
    T[e].parents.flatMap(
      (a) => se(a, n).split(",")
    ),
    i ? [`[type="${i}"]`] : [""]
  ];
  return ie(r, [">"], [e], o).map((a) => a.join("")).join(",");
}
function tc(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, n = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${D(e.parentElement)}>${n}`;
  const i = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === n).findIndex((r) => r.isSameNode(e));
  return `${D(e.parentElement)}>${n} [${i}]`;
}
function nc(e, t) {
  const [n, i] = oe(t), [r] = i.split(" "), o = i && i.match(/\[([0-9]+)\]/) && i.match(/\[([0-9]+)\]/)[1] ? parseFloat(i.match(/\[([0-9]+)\]/)[1]) : NaN, [a, l, d] = [
    T[e].parents.flatMap(
      (u) => se(u, n).split(",")
    ),
    [`[type="${r}"]`],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return ie(
    a,
    [">"],
    [e],
    l,
    d
  ).map((u) => u.join("")).join(",");
}
function ic(e) {
  return `${D(e.parentElement)}>${e.getAttribute("ord")}`;
}
function rc(e, t) {
  const [n, i] = oe(t);
  return `${se("EnumType", n)}>${e}[ord="${i}"]`;
}
function oc(e) {
  return `${D(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function ac(e, t) {
  const [n, i] = oe(t), [r, o] = i.split("	"), [a] = [
    T[e].parents.flatMap(
      (l) => se(l, n).split(",")
    )
  ];
  return ie(
    a,
    [">"],
    [e],
    [`[type="${r}"]`],
    [">"],
    [o]
  ).map((l) => l.join("")).join(",");
}
function sc() {
  return "";
}
function cc() {
  return ":root";
}
function O(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${D(e.parentElement)}>${e.getAttribute("name")}`;
}
function M(e, t, n = -1) {
  n === -1 && (n = t.split(">").length);
  const [i, r] = oe(t);
  if (!r) return X;
  if (n === 0) return `${e}[name="${r}"]`;
  const o = T[e].parents;
  if (!o) return X;
  const a = o.flatMap(
    (l) => T[l].selector === T.Substation.selector ? M(l, i, n - 1).split(",") : se(l, i).split(",")
  ).filter((l) => !l.startsWith(X));
  return a.length === 0 ? X : ie(a, [">"], [e], [`[name="${r}"]`]).map((l) => l.join("")).join(",");
}
function x(e) {
  return D(e.parentElement).toString();
}
function $(e, t) {
  const n = T[e].parents;
  if (!n) return X;
  const i = n.flatMap((r) => se(r, t).split(",")).filter((r) => !r.startsWith(X));
  return i.length === 0 ? X : ie(i, [">"], [e]).map((r) => r.join("")).join(",");
}
function Qt(e) {
  return `#${e.id}`;
}
function Yt(e, t) {
  const n = t.replace(/^#/, "");
  return n ? `${e}[id="${n}"]` : X;
}
const Pr = [
  "TransformerWinding",
  "ConductingEquipment"
], Vr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Pr
], On = ["Substation", "VoltageLevel", "Bay"], Rr = ["Process", "Line"], Mr = ["EqSubFunction", "EqFunction"], lc = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Vr,
  ...On,
  ...Rr,
  ...Mr
], qr = ["ConnectivityNode", ...lc], dc = ["GOOSESecurity", "SMVSecurity"], uc = ["SubNetwork", ...dc, ...qr], pc = ["BDA", "DA"], mc = ["SampledValueControl", "GSEControl"], hc = ["LogControl", "ReportControl"], fc = [...mc, ...hc], bc = ["GSE", "SMV"], gc = [
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
  ...fc,
  ...bc,
  ...pc
], gt = ["LN0", "LN"], yc = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], vc = ["Subject", "IssuerName"], wc = ["MinTime", "MaxTime"], Ac = ["LNodeType", "DOType", "DAType", "EnumType"], Sc = [
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
], xc = ["DynDataSet", "ConfDataSet"], $c = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...xc
], Cc = ["ConfLogControl", "ConfSigRef"], Ec = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Nc = ["SCL", ...uc, ...gc, ...Ac], Or = [
  ...Nc,
  ...yc,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...vc,
  ...wc,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...gt,
  ...Sc,
  "DynAssociation",
  "SettingGroups",
  ...$c,
  ...Cc,
  ...Ec,
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
], Ic = new Set(Or);
function dn(e) {
  return Ic.has(e);
}
const un = ["Text", "Private"], Xe = [...un], Z = [...un], Jt = [...un], Oi = [...Z, "Val"], Fr = [...Xe, "LNode"], Ye = [...Fr], Fn = [...Ye], wn = [
  ...Ye,
  "PowerTransformer",
  "GeneralEquipment"
], Fi = [
  ...Fn,
  "Terminal"
], Hi = [...Z, "Address"], Hr = [...Xe], Bi = [...Hr, "IEDName"], Wi = [
  ...Z,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Gi = [
  ...Ye,
  "GeneralEquipment",
  "Function"
], Ui = [...Hr, "TrgOps"], ji = [
  ...Ye,
  "GeneralEquipment",
  "EqSubFunction"
], T = {
  AccessControl: {
    identity: x,
    selector: $,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: O,
    selector: M,
    parents: ["IED"],
    children: [
      ...Xe,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: x,
    selector: $,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Ps,
    selector: Vs,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: x,
    selector: $,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: O,
    selector: M,
    parents: ["DAType"],
    children: [...Oi]
  },
  BitRate: {
    identity: x,
    selector: $,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: O,
    selector: M,
    parents: ["VoltageLevel"],
    children: [
      ...wn,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: js,
    selector: Ks,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: x,
    selector: $,
    parents: ["SCL"],
    children: [...Z, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: O,
    selector: M,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Fi,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: x,
    selector: $,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Qs,
    selector: Ys,
    parents: ["SubNetwork"],
    children: [...Z, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: O,
    selector: M,
    parents: ["Bay", "Line"],
    children: [...Fr]
  },
  DA: {
    identity: O,
    selector: M,
    parents: ["DOType"],
    children: [...Oi]
  },
  DAI: {
    identity: Ri,
    selector: qn,
    parents: ["DOI", "SDI"],
    children: [...Z, "Val"]
  },
  DAType: {
    identity: Qt,
    selector: Yt,
    parents: ["DataTypeTemplates"],
    children: [...Jt, "BDA", "ProtNs"]
  },
  DO: {
    identity: O,
    selector: M,
    parents: ["LNodeType"],
    children: [...Z]
  },
  DOI: {
    identity: O,
    selector: M,
    parents: [...gt],
    children: [...Z, "SDI", "DAI"]
  },
  DOType: {
    identity: Qt,
    selector: Yt,
    parents: ["DataTypeTemplates"],
    children: [...Jt, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: O,
    selector: M,
    parents: [...gt],
    children: [...Xe, "FCDA"]
  },
  DataSetDirectory: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: x,
    selector: $,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Qt,
    selector: Yt,
    parents: ["DataTypeTemplates"],
    children: [...Jt, "EnumVal"]
  },
  EnumVal: {
    identity: ic,
    selector: rc,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: O,
    selector: M,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...ji]
  },
  EqSubFunction: {
    identity: O,
    selector: M,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...ji]
  },
  ExtRef: {
    identity: Bs,
    selector: Ws,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Fs,
    selector: Hs,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: O,
    selector: M,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ye,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: O,
    selector: M,
    parents: [
      "SubFunction",
      "Function",
      ...Rr,
      ...Mr,
      ...On
    ],
    children: [...Fn, "EqFunction"]
  },
  GetCBValues: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: O,
    selector: M,
    parents: ["AccessPoint"],
    children: [...Xe, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Mi,
    selector: qi,
    parents: ["ConnectedAP"],
    children: [...Hi, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: O,
    selector: M,
    parents: ["LN0"],
    children: [...Bi, "Protocol"]
  },
  GSESettings: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: x,
    selector: $,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: x,
    selector: $,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Ds,
    selector: _s,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: O,
    selector: M,
    parents: ["SCL"],
    children: [...Z, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: qs,
    selector: Os,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: x,
    selector: $,
    parents: [...gt],
    children: [...Z, "ExtRef"]
  },
  IssuerName: {
    identity: x,
    selector: $,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Ls,
    selector: Ts,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Rs,
    selector: Ms,
    parents: ["Server"],
    children: [...Z, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Gs,
    selector: Us,
    parents: ["AccessPoint", "LDevice"],
    children: [...Wi]
  },
  LN0: {
    identity: x,
    selector: $,
    parents: ["LDevice"],
    children: [
      ...Wi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: ks,
    selector: zs,
    parents: [...qr],
    children: [...Z]
  },
  LNodeType: {
    identity: Qt,
    selector: Yt,
    parents: ["DataTypeTemplates"],
    children: [...Jt, "DO"]
  },
  Line: {
    identity: O,
    selector: M,
    parents: ["Process", "SCL"],
    children: [
      ...Gi,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: O,
    selector: M,
    parents: [...gt],
    children: [...Z]
  },
  LogControl: {
    identity: O,
    selector: M,
    parents: [...gt],
    children: [...Ui]
  },
  LogSettings: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: x,
    selector: $,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: x,
    selector: $,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: x,
    selector: $,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Pi,
    selector: Vi,
    parents: ["TransformerWinding"],
    children: [...Z]
  },
  OptFields: {
    identity: x,
    selector: $,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: tc,
    selector: nc,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Js,
    selector: ec,
    parents: ["ConnectedAP"],
    children: [...Z, "P"]
  },
  PowerTransformer: {
    identity: O,
    selector: M,
    parents: [...On],
    children: [
      ...Fn,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => X,
    parents: [],
    children: []
  },
  Process: {
    identity: O,
    selector: M,
    parents: ["Process", "SCL"],
    children: [
      ...Gi,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: oc,
    selector: ac,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: x,
    selector: $,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: O,
    selector: M,
    parents: [...gt],
    children: [...Ui, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: x,
    selector: $,
    parents: ["ReportControl"],
    children: [...Z, "ClientLN"]
  },
  SamplesPerSec: {
    identity: x,
    selector: $,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: O,
    selector: M,
    parents: ["LN0"],
    children: [...Bi, "SmvOpts"]
  },
  SecPerSamples: {
    identity: x,
    selector: $,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: sc,
    selector: cc,
    parents: [],
    children: [
      ...un,
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
    identity: Ri,
    selector: qn,
    parents: ["DOI", "SDI"],
    children: [...Z, "SDI", "DAI"]
  },
  SDO: {
    identity: O,
    selector: M,
    parents: ["DOType"],
    children: [...Xe]
  },
  Server: {
    identity: x,
    selector: $,
    parents: ["AccessPoint"],
    children: [
      ...Z,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: x,
    selector: $,
    parents: ["AccessPoint"],
    children: [...Z]
  },
  Services: {
    identity: x,
    selector: $,
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
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: x,
    selector: $,
    parents: ["LN0"],
    children: [...Z]
  },
  SettingGroups: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: x,
    selector: $,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: x,
    selector: $,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Mi,
    selector: qi,
    parents: ["ConnectedAP"],
    children: [...Hi]
  },
  SmvOpts: {
    identity: x,
    selector: $,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: O,
    selector: M,
    parents: ["AccessPoint"],
    children: [...Xe, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: O,
    selector: M,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Pr
    ],
    children: [...Ye, "EqFunction"]
  },
  SubFunction: {
    identity: O,
    selector: M,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ye,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: O,
    selector: M,
    parents: ["Communication"],
    children: [...Xe, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: x,
    selector: $,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: O,
    selector: M,
    parents: ["SCL"],
    children: [...wn, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: O,
    selector: M,
    parents: ["TransformerWinding"],
    children: [...Ye, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Pi,
    selector: Vi,
    parents: [...Vr],
    children: [...Z]
  },
  Text: {
    identity: x,
    selector: $,
    parents: Or.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: x,
    selector: $,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: O,
    selector: M,
    parents: ["PowerTransformer"],
    children: [
      ...Fi,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: x,
    selector: $,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Zs,
    selector: Xs,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: x,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: x,
    selector: $,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: O,
    selector: M,
    parents: ["Substation"],
    children: [...wn, "Voltage", "Bay", "Function"]
  }
};
function Dc(e, t) {
  const n = e.tagName, i = Array.from(e.children);
  if (n === "Services" || n === "SettingGroups" || !dn(n))
    return i.find((l) => l.tagName === t) ?? null;
  const r = T[n]?.children ?? [];
  let o = r.findIndex((l) => l === t);
  if (o < 0) return null;
  let a;
  for (; o < r.length && !a; )
    a = i.find((l) => l.tagName === r[o]), o++;
  return a ?? null;
}
function se(e, t) {
  return typeof t != "string" ? X : dn(e) ? T[e].selector(e, t) : e;
}
function Q(e, t, n) {
  if (typeof n != "string" || !dn(t)) return null;
  const i = e.querySelector(T[t].selector(t, n));
  return i === null || q(i) ? i : Array.from(
    e.querySelectorAll(T[t].selector(t, n))
  ).find(q) ?? null;
}
function D(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return dn(t) ? T[t].identity(e) : NaN;
}
const Gt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function _c(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function ie(...e) {
  return e.reduce(
    (t, n) => t.flatMap((i) => n.map((r) => [i, r].flat())),
    [[]]
  );
}
function Br(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((n) => Br(n, t))
      );
    default:
      return 0;
  }
}
function kc(e) {
  if (e.tagName !== "ExtRef" || e.closest("Private")) return [];
  const [t, n, i, r, o, a, l] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((u) => e.getAttribute(u)), d = Array.from(e.ownerDocument.getElementsByTagName("IED")).find(
    (u) => u.getAttribute("name") === t && !u.closest("Private")
  );
  return d ? Array.from(d.getElementsByTagName("FCDA")).filter((u) => !u.closest("Private")).filter(
    (u) => (u.getAttribute("ldInst") ?? "") === (n ?? "") && (u.getAttribute("prefix") ?? "") === (i ?? "") && (u.getAttribute("lnClass") ?? "") === (r ?? "") && (u.getAttribute("lnInst") ?? "") === (o ?? "") && (u.getAttribute("doName") ?? "") === (a ?? "") && (u.getAttribute("daName") ?? "") === (l ?? "")
  ) : [];
}
const zc = {
  GOOSE: ["GSEControl"],
  SMV: ["SampledValueControl"],
  Report: ["ReportControl"],
  NONE: ["LogControl", "GSEControl", "SampledValueControl", "ReportControl"]
};
function Wr(e) {
  const t = kc(e), n = zc[e.getAttribute("serviceType") ?? "NONE"] ?? [];
  return new Set(
    t.flatMap((r) => {
      const o = r.parentElement, a = o.getAttribute("name") ?? "", l = o.parentElement;
      return n.flatMap((d) => Array.from(l.getElementsByTagName(d))).filter((d) => d.getAttribute("datSet") === a);
    })
  );
}
function q(e) {
  return !e.closest("Private");
}
const Lc = 99, Tc = Array(Lc).fill(1).map((e, t) => `${t + 1}`);
function Gr(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    if (!t.has(n)) {
      const i = new Set(
        C(e, "LNode").filter((r) => r.getAttribute("lnClass") === n).map((r) => r.getAttribute("lnInst"))
      );
      t.set(n, () => {
        const r = Tc.find((o) => !i.has(o));
        return r && i.add(r), r;
      });
    }
    return t.get(n)();
  };
}
function Pc(e, t) {
  const n = {};
  return Array.from(e.attributes).forEach((i) => {
    n[i.name] = i.value;
  }), { element: e, oldAttributes: n, newAttributes: t };
}
function K(e, t = "user", n) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...n,
    detail: { action: e, initiator: t, ...n?.detail }
  });
}
const Ur = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Vc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, Rc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Mc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H11V11H14V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, qc = z`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Oc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Fc = z`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Hc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Bc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Wc = z`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />
</svg>`, Gc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Uc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, jc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H13V17H11V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Kc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Zc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Xc = z`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, jr = {
  IED: [
    {
      attributeName: "iedName",
      filter: bt("Association")
    },
    {
      attributeName: "iedName",
      filter: bt("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: bt("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: bt("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: bt("KDC")
    },
    {
      attributeName: "iedName",
      filter: bt("LNode")
    },
    {
      attributeName: null,
      filter: An("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: An("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: An("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: bt("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Ki("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Ki("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function bt(e) {
  return function(n, i, r) {
    return `${e}[${i}="${r}"]`;
  };
}
function An(e) {
  return function() {
    return `${e}`;
  };
}
function Ki(e, t) {
  return function(i, r, o) {
    return `${e}${Object.entries(t).map(([a, l]) => {
      const d = i.closest(a);
      if (d && d.hasAttribute("name")) {
        const u = d.getAttribute("name");
        return `[${l}="${u}"]`;
      }
      return null;
    }).join("")}[${r}="${o}"]`;
  };
}
function Qc(e, t, n) {
  const i = e.cloneNode(!1);
  return i.setAttribute(t, n), i;
}
function Kr(e, t) {
  const n = e.cloneNode(!1);
  return n.textContent = t, n;
}
function si(e, t, n) {
  if (t === null || t === n)
    return [];
  const i = jr[e.tagName];
  if (i === void 0)
    return [];
  const r = [];
  return i.forEach((o) => {
    const a = o.filter(e, o.attributeName, t);
    o.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(q).forEach((l) => {
      const d = Qc(
        l,
        o.attributeName,
        n
      );
      r.push({ old: { element: l }, new: { element: d } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((l) => l.textContent === t).filter(q).forEach((l) => {
      const d = Kr(l, n);
      r.push({ old: { element: l }, new: { element: d } });
    });
  }), e.tagName === "IED" && r.push(...Yc(e, t, n)), r;
}
function Yc(e, t, n) {
  const i = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((o) => {
    const a = Array.from(
      o.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (a.length === 0) return;
    const l = o.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), d = l?.getAttribute("srcLDInst") + "/" + l?.getAttribute("srcLNClass") + "." + l?.getAttribute("srcCBName");
    for (let u of a)
      if (t + d === u.textContent.trim()) {
        const m = Kr(
          u,
          n + d
        );
        i.push({
          old: { element: u },
          new: { element: m }
        });
        break;
      }
  }), i;
}
function Zr(e) {
  const t = Is(e) ?? null;
  if (t === null)
    return [];
  const n = jr[e.tagName];
  if (n === void 0)
    return [];
  const i = [];
  return n.forEach((r) => {
    const o = r.filter(e, r.attributeName, t);
    r.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter(q).forEach((a) => {
      i.push({ old: { parent: a.parentElement, element: a } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter((a) => a.textContent === t).filter(q).forEach((a) => {
      a.parentElement && i.push({
        old: {
          parent: a.parentElement.parentElement,
          element: a.parentElement
        }
      });
    });
  }), i;
}
function Xr(e) {
  return (t) => {
    const n = g(t.find((o) => o.label === "name")), i = g(t.find((o) => o.label === "desc"));
    if (n === e.getAttribute("name") && i === e.getAttribute("desc"))
      return [];
    const r = F(e, { name: n, desc: i });
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function Jc(e, t) {
  return (n) => {
    const i = g(n.find((d) => d.label === "name")), r = e.getAttribute("name"), o = g(n.find((d) => d.label === "desc"));
    if (i === r && o === e.getAttribute("desc"))
      return [];
    const a = F(e, { name: i, desc: o }), l = {
      actions: [],
      title: c(t, { name: i })
    };
    return l.actions.push({
      old: { element: e },
      new: { element: a }
    }), l.actions.push(...si(e, r, i)), l.actions.length ? [l] : [];
  };
}
function Qr(e, t) {
  return (n) => {
    const i = {};
    if (el(i, e, n), Object.keys(i).length == 0)
      return [];
    tl(e, i);
    const r = g(n.find((a) => a.label === "name")), o = {
      actions: [],
      title: c(t, { name: r })
    };
    return o.actions.push(Pc(e, i)), o.actions.push(
      ...si(e, e.getAttribute("name"), r)
    ), o.actions.length ? [o] : [];
  };
}
function el(e, t, n) {
  const i = g(n.find((o) => o.label === "name")), r = g(n.find((o) => o.label === "desc"));
  i !== t.getAttribute("name") && (e.name = i), r !== t.getAttribute("desc") && (e.desc = r);
}
function tl(e, t) {
  const n = Object.keys(t);
  return Array.from(e.attributes).filter((i) => !n.includes(i.name)).forEach((i) => {
    t[i.name] = i.value;
  }), t;
}
function Yr(e, t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("bay.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function nl(e) {
  return (t) => {
    const n = g(t.find((a) => a.label === "name")), i = g(t.find((a) => a.label === "desc")), r = k(e.ownerDocument, "Bay", {
      name: n,
      desc: i
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function il(e) {
  return [
    {
      title: c("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: c("add"),
        action: nl(e)
      },
      content: Yr("", "")
    }
  ];
}
function rl(e) {
  return [
    {
      title: c("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Jc(
          e,
          "bay.action.updateBay"
        )
      },
      content: Yr(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const Hn = {
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
function ol(e) {
  if (!e) return null;
  const [t, n, i, r, o] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), a = [`IED[name="${i}"]`, "IED"], l = ["AccessPoint > Server"], d = [
    `LDevice[inst="${r}"] > LN[inst="${t}"][lnClass="${n}"]`
  ], u = o && o !== "" ? [`[prefix="${o}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    ie(
      a,
      [" > "],
      l,
      [" > "],
      d,
      u
    ).map((m) => m.join("")).join(",")
  );
}
function Jr(e) {
  const t = e?.ownerDocument, n = e.getAttribute("lnType"), i = e.getAttribute("lnClass"), r = t.querySelector(
    `DataTypeTemplates > LNodeType[id="${n}"][lnClass="${i}"] > DO[name="SwTyp"]`
  );
  if (r) {
    const o = r.getAttribute("type");
    return t.querySelector(
      `DataTypeTemplates > DOType[id="${o}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function al(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : Jr(e);
}
function sl(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function cl(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), n = ol(t);
  let i;
  return n ? i = al(n) : t && (i = Jr(t)), i ? ["Earthing Switch", "High Speed Earthing Switch"].includes(i) : !1;
}
function eo(e) {
  return e.getAttribute("type") === "DIS" && (sl(e) || cl(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function ll(e) {
  return Hn[eo(e)] ?? c("conductingequipment.unknownType");
}
function dl(e, t) {
  return e === "create" ? s`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${c("conductingequipment.wizard.typeHelper")}"
        validationMessage="${c("textfield.required")}"
      >
        ${Object.keys(Hn).map(
    (n) => s`<mwc-list-item value="${n}">${Hn[n]}</mwc-list-item>`
  )}
      </mwc-select>` : s`<mwc-select
        label="type"
        helper="${c("conductingequipment.wizard.typeHelper")}"
        validationMessage="${c("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function to(e, t, n, i, r) {
  return [
    dl(n, i),
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ul(e) {
  return (t) => {
    const n = g(t.find((S) => S.label === "name")), i = g(t.find((S) => S.label === "desc")), r = g(t.find((S) => S.label === "type")), o = r === "ERS" ? "DIS" : r, a = k(e.ownerDocument, "ConductingEquipment", {
      name: n,
      type: o,
      desc: i
    });
    if (r !== "ERS") return [{ new: { parent: e, element: a } }];
    const l = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), d = l ? l.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, u = l ? l.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = l ? l.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = m && u && d ? d + "/" + u + "/" + m + "/grounded" : null;
    a.appendChild(
      k(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: d,
        voltageLevelName: u,
        bayName: m,
        connectivityNode: h
      })
    );
    const b = {
      new: {
        parent: e,
        element: a
      }
    };
    if (l) return [b];
    const y = k(
      e.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: h
      }
    );
    return [b, {
      new: {
        parent: e,
        element: y
      }
    }];
  };
}
function no(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => t && n !== t);
}
function pl(e) {
  const t = no(e);
  return [
    {
      title: c("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: ul(e)
      },
      content: to(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function ml(e) {
  const t = no(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: c("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Xr(e)
      },
      content: to(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        ll(e),
        t
      )
    }
  ];
}
function hl(e, t, n) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${c("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function fl(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => n !== e.getAttribute("name"));
  return [
    {
      title: c("connectivitynode.wizard.title.edit"),
      element: e,
      content: hl(
        e.getAttribute("name"),
        e.getAttribute("pathName"),
        t
      )
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
const Zi = /* @__PURE__ */ new WeakMap(), Xi = 2147483647, bl = sn((...e) => (t) => {
  let n = Zi.get(t);
  n === void 0 && (n = {
    lastRenderedIndex: Xi,
    values: []
  }, Zi.set(t, n));
  const i = n.values;
  let r = i.length;
  n.values = e;
  for (let o = 0; o < e.length && !(o > n.lastRenderedIndex); o++) {
    const a = e[o];
    if (cn(a) || typeof a.then != "function") {
      t.setValue(a), n.lastRenderedIndex = o;
      break;
    }
    o < r && a === i[o] || (n.lastRenderedIndex = Xi, r = 0, Promise.resolve(a).then((l) => {
      const d = n.values.indexOf(a);
      d > -1 && d < n.lastRenderedIndex && (n.lastRenderedIndex = d, t.setValue(l), t.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class jt extends ae {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, n = this.renderText(), i = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : s``, r = this.hasMeta && this.left ? this.renderMeta() : s``, o = this.renderRipple();
    return s`
      ${o}
      ${i}
      ${this.left ? "" : n}
      <span class=${Ge(t)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? n : ""}
      ${r}`;
  }
  async onChange(t) {
    const n = t.target;
    this.selected === n.checked || (this._skipPropRequest = !0, this.selected = n.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
A([
  N("slot")
], jt.prototype, "slotElement", void 0);
A([
  N("mwc-checkbox")
], jt.prototype, "checkboxElement", void 0);
A([
  f({ type: Boolean })
], jt.prototype, "left", void 0);
A([
  f({ type: String, reflect: !0 })
], jt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const gl = G`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let It = class extends jt {
};
It.styles = [Lr, gl];
It = A([
  H("mwc-check-list-item")
], It);
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
var P = {
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
}, pe = /* @__PURE__ */ new Set();
pe.add(P.BACKSPACE);
pe.add(P.ENTER);
pe.add(P.SPACEBAR);
pe.add(P.PAGE_UP);
pe.add(P.PAGE_DOWN);
pe.add(P.END);
pe.add(P.HOME);
pe.add(P.ARROW_LEFT);
pe.add(P.ARROW_UP);
pe.add(P.ARROW_RIGHT);
pe.add(P.ARROW_DOWN);
pe.add(P.DELETE);
pe.add(P.ESCAPE);
pe.add(P.TAB);
var ge = {
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
}, me = /* @__PURE__ */ new Map();
me.set(ge.BACKSPACE, P.BACKSPACE);
me.set(ge.ENTER, P.ENTER);
me.set(ge.SPACEBAR, P.SPACEBAR);
me.set(ge.PAGE_UP, P.PAGE_UP);
me.set(ge.PAGE_DOWN, P.PAGE_DOWN);
me.set(ge.END, P.END);
me.set(ge.HOME, P.HOME);
me.set(ge.ARROW_LEFT, P.ARROW_LEFT);
me.set(ge.ARROW_UP, P.ARROW_UP);
me.set(ge.ARROW_RIGHT, P.ARROW_RIGHT);
me.set(ge.ARROW_DOWN, P.ARROW_DOWN);
me.set(ge.DELETE, P.DELETE);
me.set(ge.ESCAPE, P.ESCAPE);
me.set(ge.TAB, P.TAB);
var it = /* @__PURE__ */ new Set();
it.add(P.PAGE_UP);
it.add(P.PAGE_DOWN);
it.add(P.END);
it.add(P.HOME);
it.add(P.ARROW_LEFT);
it.add(P.ARROW_UP);
it.add(P.ARROW_RIGHT);
it.add(P.ARROW_DOWN);
function Ke(e) {
  var t = e.key;
  if (pe.has(t))
    return t;
  var n = me.get(e.keyCode);
  return n || P.UNKNOWN;
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
var Ze, Oe, j = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ze = {}, Ze["" + j.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ze["" + j.LIST_ITEM_CLASS] = "mdc-list-item", Ze["" + j.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ze["" + j.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ze["" + j.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ze["" + j.ROOT] = "mdc-list";
var Et = (Oe = {}, Oe["" + j.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Oe["" + j.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Oe["" + j.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Oe["" + j.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Oe["" + j.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Oe["" + j.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Oe["" + j.ROOT] = "mdc-deprecated-list", Oe), en = {
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
    .` + j.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + j.LIST_ITEM_CLASS + ` a,
    .` + Et[j.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Et[j.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + j.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + j.LIST_ITEM_CLASS + ` a,
    .` + j.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + j.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Et[j.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Et[j.LIST_ITEM_CLASS] + ` a,
    .` + Et[j.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Et[j.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, fe = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Bn = (e, t) => e - t, yl = (e, t) => {
  const n = Array.from(e), i = Array.from(t), r = { added: [], removed: [] }, o = n.sort(Bn), a = i.sort(Bn);
  let l = 0, d = 0;
  for (; l < o.length || d < a.length; ) {
    const u = o[l], m = a[d];
    if (u === m) {
      l++, d++;
      continue;
    }
    if (u !== void 0 && (m === void 0 || u < m)) {
      r.removed.push(u), l++;
      continue;
    }
    if (m !== void 0 && (u === void 0 || m < u)) {
      r.added.push(m), d++;
      continue;
    }
  }
  return r;
}, vl = ["input", "button", "textarea", "select"];
function Ot(e) {
  return e instanceof Set;
}
const Sn = (e) => {
  const t = e === fe.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return Ot(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class ci extends kr {
  constructor(t) {
    super(Object.assign(Object.assign({}, ci.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = fe.UNSET_INDEX, this.focusedItemIndex_ = fe.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return en;
  }
  static get numbers() {
    return fe;
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
    const n = this.selectedIndex_;
    if (t) {
      if (!Ot(n)) {
        const i = n === fe.UNSET_INDEX;
        this.selectedIndex_ = i ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([n]);
      }
    } else if (Ot(n))
      if (n.size) {
        const i = Array.from(n).sort(Bn);
        this.selectedIndex_ = i[0];
      } else
        this.selectedIndex_ = fe.UNSET_INDEX;
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
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Sn(t)) : this.setSingleSelectionAtIndex_(t));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(t, n) {
    n >= 0 && this.adapter.setTabIndexForElementIndex(n, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(t, n) {
    n >= 0 && this.adapter.setTabIndexForElementIndex(n, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(t, n, i) {
    const r = Ke(t) === "ArrowLeft", o = Ke(t) === "ArrowUp", a = Ke(t) === "ArrowRight", l = Ke(t) === "ArrowDown", d = Ke(t) === "Home", u = Ke(t) === "End", m = Ke(t) === "Enter", h = Ke(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || u ? (t.preventDefault(), this.focusLastElement()) : (l || d) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = i, b < 0))
      return;
    let y;
    if (this.isVertical_ && l || !this.isVertical_ && a)
      this.preventDefaultEvent(t), y = this.focusNextElement(b);
    else if (this.isVertical_ && o || !this.isVertical_ && r)
      this.preventDefaultEvent(t), y = this.focusPrevElement(b);
    else if (d)
      this.preventDefaultEvent(t), y = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(t), y = this.focusLastElement();
    else if ((m || h) && n) {
      const v = t.target;
      if (v && v.tagName === "A" && m)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, n, i) {
    t !== fe.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, n, i), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const n = this.adapter.getListItemCount();
    let i = t + 1;
    if (i >= n)
      if (this.wrapFocus_)
        i = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(i), i;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(t) {
    let n = t - 1;
    if (n < 0)
      if (this.wrapFocus_)
        n = this.adapter.getListItemCount() - 1;
      else
        return t;
    return this.adapter.focusItemAtIndex(n), n;
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
  setEnabled(t, n) {
    this.isIndexValid_(t) && this.adapter.setDisabledStateForElementIndex(t, !n);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(t) {
    const i = `${t.target.tagName}`.toLowerCase();
    vl.indexOf(i) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, n = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== fe.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), n && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, n = !0) {
    const i = Sn(this.selectedIndex_), r = yl(i, t);
    if (!(!r.removed.length && !r.added.length)) {
      for (const o of r.removed)
        n && this.adapter.setSelectedStateForElementIndex(o, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !1);
      for (const o of r.added)
        n && this.adapter.setSelectedStateForElementIndex(o, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === fe.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, en.ARIA_CURRENT));
    const n = this.ariaCurrentAttrValue_ !== null, i = n ? en.ARIA_CURRENT : en.ARIA_SELECTED;
    this.selectedIndex_ !== fe.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const r = n ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, i, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === fe.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== fe.UNSET_INDEX ? t = this.selectedIndex_ : Ot(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let n = !1;
        for (const i of t)
          if (n = this.isIndexInRange_(i), n)
            break;
        return n;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === fe.UNSET_INDEX || this.isIndexInRange_(t);
    } else
      return !1;
  }
  isIndexInRange_(t) {
    const n = this.adapter.getListItemCount();
    return t >= 0 && t < n;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(t, n, i) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let r = t;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, i, n) : n || i ? this.setSingleSelectionAtIndex_(t, n) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(fe.UNSET_INDEX), n && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, n, i = !0) {
    let r = !1;
    n === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = n;
    const o = Sn(this.selectedIndex_);
    r ? o.add(t) : o.delete(t), this.setMultiSelectionAtIndex_(o, i);
  }
}
function wl(e, t = 50) {
  let n;
  return function(i = !0) {
    clearTimeout(n), n = setTimeout(() => {
      e(i);
    }, t);
  };
}
const tn = (e) => e.hasAttribute("mwc-list-item");
function Al() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class ye extends ri {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = ci, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = wl(this.layout.bind(this));
    this.debouncedLayout = (n = !0) => {
      Al.call(this), t(n);
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
    const n = (t = this.assignedElements) !== null && t !== void 0 ? t : [], i = [];
    for (const a of n)
      tn(a) && (i.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = i;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, l) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && r.add(l);
    }), this.multi)
      this.select(r);
    else {
      const a = r.size ? r.entries().next().value[1] : -1;
      this.select(a);
    }
    const o = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(o);
  }
  get selected() {
    const t = this.index;
    if (!Ot(t))
      return t === -1 ? null : this.items[t];
    const n = [];
    for (const i of t)
      n.push(this.items[i]);
    return n;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, n = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, i = this.rootTabbable ? "0" : "-1";
    return s`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Fe(t)}"
          aria-label="${Fe(n)}"
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
    const n = (t = this.assignedElements) !== null && t !== void 0 ? t : [];
    return this.emptyMessage !== void 0 && n.length === 0 ? s`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const n = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusIn(t, n);
    }
  }
  onFocusOut(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const n = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusOut(t, n);
    }
  }
  onKeydown(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const n = this.getIndexOfTarget(t), i = t.target, r = tn(i);
      this.mdcFoundation.handleKeydown(t, r, n);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let n = this.getIndexOfTarget(t);
      if (n === -1 && (this.layout(), n = this.getIndexOfTarget(t), n === -1) || this.items[n].disabled)
        return;
      const r = t.detail.selected, o = t.detail.source;
      this.mdcFoundation.handleSingleSelection(n, o === "interaction", r), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const n = this.items, i = t.composedPath();
    for (const r of i) {
      let o = -1;
      if (ls(r) && tn(r) && (o = n.indexOf(r)), o !== -1)
        return o;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (t, n) => {
        if (!this.mdcRoot)
          return "";
        const r = this.items[t];
        return r ? r.getAttribute(n) : "";
      },
      setAttributeForElementIndex: (t, n, i) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[t];
        r && r.setAttribute(n, i);
      },
      focusItemAtIndex: (t) => {
        const n = this.items[t];
        n && n.focus();
      },
      setTabIndexForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.tabindex = n);
      },
      notifyAction: (t) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: t };
        const i = new CustomEvent("action", n);
        this.dispatchEvent(i);
      },
      notifySelected: (t, n) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: t, diff: n };
        const r = new CustomEvent("selected", i);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => us(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.disabled = n);
      },
      getDisabledStateForElementIndex: (t) => {
        const n = this.items[t];
        return n ? n.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.selected = n);
      },
      getSelectedStateForElementIndex: (t) => {
        const n = this.items[t];
        return n ? n.selected : !1;
      },
      setActivatedStateForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.activated = n);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, n = !1) {
    const i = this.items[t];
    i && (i.selected = !0, i.activated = n);
  }
  deselectUi(t) {
    const n = this.items[t];
    n && (n.selected = !1, n.activated = !1);
  }
  select(t) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(t);
  }
  toggle(t, n) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(t, n);
  }
  onListItemConnected(t) {
    const n = t.target;
    this.layout(this.items.indexOf(n) === -1);
  }
  layout(t = !0) {
    t && this.updateItems();
    const n = this.items[0];
    for (const i of this.items)
      i.tabindex = -1;
    n && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = n) : n.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = _r();
    if (!t.length)
      return -1;
    for (let n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (tn(i))
        return this.items.indexOf(i);
    }
    return -1;
  }
  focusItemAtIndex(t) {
    for (const n of this.items)
      if (n.tabindex === 0) {
        n.tabindex = -1;
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
A([
  f({ type: String })
], ye.prototype, "emptyMessage", void 0);
A([
  N(".mdc-deprecated-list")
], ye.prototype, "mdcRoot", void 0);
A([
  $r("", !0, "*")
], ye.prototype, "assignedElements", void 0);
A([
  $r("", !0, '[tabindex="0"]')
], ye.prototype, "tabbableElements", void 0);
A([
  f({ type: Boolean }),
  nt(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], ye.prototype, "activatable", void 0);
A([
  f({ type: Boolean }),
  nt(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], ye.prototype, "multi", void 0);
A([
  f({ type: Boolean }),
  nt(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], ye.prototype, "wrapFocus", void 0);
A([
  f({ type: String }),
  nt(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], ye.prototype, "itemRoles", void 0);
A([
  f({ type: String })
], ye.prototype, "innerRole", void 0);
A([
  f({ type: String })
], ye.prototype, "innerAriaLabel", void 0);
A([
  f({ type: Boolean })
], ye.prototype, "rootTabbable", void 0);
A([
  f({ type: Boolean, reflect: !0 }),
  nt(function(e) {
    var t, n;
    if (e) {
      const i = (n = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && n !== void 0 ? n : null;
      this.previousTabindex = i, i && i.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], ye.prototype, "noninteractive", void 0);
var Sl = Object.defineProperty, xl = Object.getOwnPropertyDescriptor, xt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? xl(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Sl(t, n, r), r;
};
function Wn(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof _e ? e : Wn(e.parentElement);
}
function $l(e, t) {
  const n = e.innerText + `
`, i = Array.from(e.children).map((l) => l.innerText).join(`
`), r = e.value, o = (n + i + r).toUpperCase(), a = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((l) => new RegExp(
    `*${l}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(o)) ? Wn(e).classList.remove("hidden") : Wn(e).classList.add("hidden");
}
let _e = class extends ye {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof It);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof It).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof It).some((e) => e.selected);
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
      (e) => $l(e, this.searchField.value)
    );
  }
  onListItemConnected(e) {
    super.onListItemConnected(e), this.requestUpdate();
  }
  update(e) {
    super.update(e), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? s`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : s``;
  }
  render() {
    return s`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? c("filter")}"
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
_e.styles = G`
    ${Cr(fa.styles)}

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
xt([
  f({ type: String })
], _e.prototype, "searchFieldLabel", 2);
xt([
  f({ type: Boolean })
], _e.prototype, "disableCheckAll", 2);
xt([
  L()
], _e.prototype, "existCheckListItem", 1);
xt([
  L()
], _e.prototype, "isAllSelected", 1);
xt([
  L()
], _e.prototype, "isSomeSelected", 1);
xt([
  N("mwc-textfield")
], _e.prototype, "searchField", 2);
_e = xt([
  H("filtered-list")
], _e);
var Cl = Object.defineProperty, El = Object.getOwnPropertyDescriptor, Ue = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? El(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Cl(t, n, r), r;
};
const Nl = s`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${c("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let Ie = class extends B {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: s`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Br(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(e) {
    const t = {};
    for (const n of e) {
      let i = t;
      for (const r of n)
        Object.prototype.hasOwnProperty.call(i, r) || (i[r] = {}), i = i[r];
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
    let t = Object.keys(this.selection).map((i) => [i]), n = e ?? this.depth - 1;
    for (; n-- > 0; )
      t = t.flatMap((i) => {
        let r = this.selection;
        for (const a of i) r = r[a];
        const o = Object.keys(r).map((a) => i.concat(a));
        return o.length === 0 ? [i] : o;
      });
    return e === void 0 ? t : t.filter((i) => i.length > e);
  }
  multiSelect(e, t, n) {
    let i = this.selection;
    for (const r of t) i = i[r];
    i && i[n] ? delete i[n] : i[n] = {};
  }
  singleSelect(e, t, n) {
    this.path[t.length] === n ? this.path = t : this.path = t.concat(n);
  }
  async select(e, t) {
    const n = e.target.selected.value;
    this.multi ? this.multiSelect(e, t, n) : this.singleSelect(e, t, n), this.requestUpdate(), await this.updateComplete, await new Promise((i) => setTimeout(i, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(e, t) {
    return s`<filtered-list
      @selected=${(n) => this.select(n, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (n) => s`<mwc-list-item
            value="${n}"
            ?activated=${this.getPaths(e.length).map((i) => JSON.stringify(i)).includes(JSON.stringify(e.concat(n)))}
            >${this.getDisplayString(n, e)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(e) {
    const n = this.getPaths(e).map((r) => this.read(r)), i = [];
    for await (const { header: r, entries: o, path: a } of n)
      (r || o.length > 0) && i.push(
        s`${Fe(r)} ${this.renderDirectory(a, o)}`
      );
    return i.length === 0 ? s`` : s`<div class="column">${i}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, n) => this.renderColumn(n));
    return this.loaded = Promise.allSettled(e).then(), s`<div class="pane">
      ${e.map((t) => bl(t, Nl))}
    </div>`;
  }
};
Ie.styles = G`
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
Ue([
  f({ type: Object })
], Ie.prototype, "selection", 2);
Ue([
  f({ type: Boolean })
], Ie.prototype, "multi", 2);
Ue([
  f({ type: Number })
], Ie.prototype, "depth", 1);
Ue([
  f({ type: Array })
], Ie.prototype, "paths", 1);
Ue([
  f({ type: Array })
], Ie.prototype, "path", 1);
Ue([
  f({ attribute: !1 })
], Ie.prototype, "read", 2);
Ue([
  f({ attribute: !1 })
], Ie.prototype, "loaded", 2);
Ue([
  N("div")
], Ie.prototype, "container", 2);
Ie = Ue([
  H("finder-list")
], Ie);
function li(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function di(e, t) {
  return async (n) => {
    const [i, r] = n[n.length - 1]?.split(": ", 2), o = Q(e, i, r);
    return o ? {
      path: n,
      header: void 0,
      entries: t(o).map(
        (a) => `${a.tagName}: ${D(a)}`
      )
    } : { path: n, header: s`<p>${c("error")}</p>`, entries: [] };
  };
}
function Il(e) {
  return e.tagName === "SCL" ? Array.from(e.querySelectorAll("IED")).filter(q) : [];
}
function ui(e) {
  return s`<finder-list
    path="${JSON.stringify(["SCL: "])}"
    .read=${di(e, Il)}
    .getDisplayString=${li}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function io(e) {
  if (["LDevice", "Server"].includes(e.tagName))
    return Array.from(e.children).filter(
      (n) => n.tagName === "LDevice" || n.tagName === "LN0" || n.tagName === "LN"
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type");
  return Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  );
}
function an(e) {
  return s`<finder-list
    multi
    .paths=${[["Server: " + D(e)]]}
    .read=${di(e.ownerDocument, io)}
    .getDisplayString=${li}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function Dl(e) {
  if (e.tagName === "Server")
    return Array.from(e.children).filter(
      (i) => i.tagName === "LDevice" && i.querySelector('LN[lnClass="TCTR"],LN[lnClass="TVTR"]')
    );
  if (e.tagName === "LDevice")
    return Array.from(e.children).filter(
      (i) => i.tagName === "LN" && (i.getAttribute("lnClass") === "TCTR" || i.getAttribute("lnClass") === "TVTR")
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type"), n = e.ownerDocument.querySelector(
    `LNodeType[id="${t}"], DOType[id="${t}"], DAType[id="${t}"]`
  );
  return n ? n?.tagName === "LNodeType" ? Array.from(n.querySelectorAll("DO") ?? []).filter(
    (i) => i.ownerDocument.querySelector(
      `DOType[id="${i.getAttribute("type")}"][cdc="SAV"]`
    )
  ) : n?.tagName === "DOType" ? Array.from(n.querySelectorAll("DA") ?? []).filter(
    (i) => i.getAttribute("name") === "instMag" || i.getAttribute("name") === "q"
  ) : Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  ) : [];
}
function Qi(e) {
  return s`<finder-list
    multi
    paths=${JSON.stringify([["Server: " + D(e)]])}
    .read=${di(e.ownerDocument, Dl)}
    .getDisplayString=${li}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function pn(e, t) {
  const [n, i] = t[t.length - 1].split(": "), r = Q(e.ownerDocument, n, i);
  if (!r || io(r).length > 0) return;
  const o = t.find((I) => I.startsWith("LN"));
  if (!o) return;
  const [a, l] = o.split(": "), d = Q(e.ownerDocument, a, l);
  if (!d) return;
  const u = d.closest("LDevice")?.getAttribute("inst"), m = d.getAttribute("prefix") ?? "", h = d.getAttribute("lnClass"), b = d.getAttribute("inst") && d.getAttribute("inst") !== "" ? d.getAttribute("inst") : null;
  let y = "", v = "", S = "";
  for (const I of t) {
    const [w, V] = I.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(w)) continue;
    const R = Q(e.ownerDocument, w, V);
    if (!R) return;
    const Y = R.getAttribute("name");
    w === "DO" && (y = Y), w === "SDO" && (y = y + "." + Y), w === "DA" && (v = Y, S = R.getAttribute("fc") ?? ""), w === "BDA" && (v = v + "." + Y);
  }
  if (!(!u || !h || !y || !v || !S))
    return k(e.ownerDocument, "FCDA", {
      ldInst: u,
      prefix: m,
      lnClass: h,
      lnInst: b,
      doName: y,
      daName: v,
      fc: S
    });
}
function _l(e) {
  return (t, n) => {
    const r = n.shadowRoot.querySelector("finder-list")?.paths ?? [], o = [];
    for (const a of r) {
      const l = pn(e, a);
      l && o.push({
        new: {
          parent: e,
          element: l,
          reference: null
        }
      });
    }
    return o;
  };
}
function ro(e) {
  const t = e.closest("Server");
  return [
    {
      title: c("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: _l(e)
      },
      content: [t ? an(t) : s``]
    }
  ];
}
const De = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, mn = {
  cbName: 32,
  abstracDaName: 60
};
function xn(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function kl(e) {
  return (t, n, i) => {
    const r = i.items.filter((l) => l.selected).map((l) => l.value).map((l) => Q(e.ownerDocument, "LNodeType", l)).filter((l) => l !== null), o = Gr(e);
    return r.map((l) => {
      const d = l.getAttribute("lnClass");
      if (!d) return null;
      const u = o(d);
      if (!u) {
        n.dispatchEvent(
          xn({
            kind: "error",
            title: c("lnode.log.title", { lnClass: d }),
            message: c("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = C(e, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LLN0"
      );
      if (d === "LLN0" && m) {
        n.dispatchEvent(
          xn({
            kind: "error",
            title: c("lnode.log.title", { lnClass: d }),
            message: c("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const h = C(e, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LPHD"
      );
      if (d === "LPHD" && h) {
        n.dispatchEvent(
          xn({
            kind: "error",
            title: c("lnode.log.title", { lnClass: d }),
            message: c("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const b = d === "LLN0" ? "" : u, y = k(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: d,
        lnInst: b,
        lnType: l.getAttribute("id")
      });
      return { new: { parent: e, element: y } };
    }).filter((l) => l);
  };
}
function zl(e) {
  return (t) => {
    t.dispatchEvent(E()), t.dispatchEvent(E(so(e)));
  };
}
function oo(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: c("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: c("lnode.wizard.reference"),
          action: zl(e)
        }
      ],
      primary: {
        icon: "save",
        label: c("save"),
        action: kl(e)
      },
      content: [
        s`<filtered-list multi
          >${t.map((n) => {
          const i = n.getAttribute("lnClass") === "LLN0" && C(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || n.getAttribute("lnClass") === "LPHD" && C(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return s`<mwc-check-list-item
              twoline
              value="${D(n)}"
              ?disabled=${i}
              ><span>${n.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${i ? c("lnode.wizard.uniquewarning") : D(n)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Ll = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function ao(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Tl = "Client LN";
function Yi(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((n) => !n.closest("Private")).filter((n) => pi(t, n))[0] ?? null;
}
function pi(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function Pl(e, t) {
  const n = k(e.ownerDocument, "LNode", {
    iedName: t.closest("IED")?.getAttribute("name") ?? "",
    ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
    prefix: t.getAttribute("prefix") ?? "",
    lnClass: t.getAttribute("lnClass") ?? "",
    lnInst: t.getAttribute("inst") ?? ""
  });
  return {
    new: {
      parent: e,
      element: n
    }
  };
}
function Vl(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function Rl(e, t) {
  return e.some((n) => pi(n, t));
}
function Ml(e, t) {
  return t.some((n) => pi(e, n));
}
function ql(e) {
  return (t, n, i) => {
    const r = i.items.filter((d) => d.selected).map((d) => d.value).map((d) => {
      const u = Q(e.ownerDocument, "LN0", d);
      return u || Q(e.ownerDocument, "LN", d);
    }).filter((d) => d !== null), o = C(e, "LNode").filter(
      q
    ), a = o.filter((d) => !Rl(r, d)).map((d) => Vl(e, d)), l = r.filter((d) => !Ml(d, o)).map((d) => Pl(e, d));
    return a.concat(l);
  };
}
function Ol(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function Fl(e, t) {
  if (!(e.target instanceof ye)) return;
  const n = Ol(e.target, "#lnList");
  if (n === null) return;
  const i = t.ownerDocument, a = e.target.selected.flatMap(
    (l) => Array.from(
      i.querySelectorAll(
        `:root > IED[name="${l.value}"] > AccessPoint > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((d) => !d.closest("Private"))
  ).filter((l) => l !== null).map((l) => {
    const d = Ll[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(l.getAttribute("lnClass") ?? "") ?? !1, u = Yi(t.ownerDocument, l), m = u?.parentElement === t;
    return {
      selected: m,
      disabled: u !== null && !m,
      prefered: d,
      element: l
    };
  }).sort(ao).map((l) => s`<mwc-check-list-item
      ?selected=${l.selected}
      ?disabled=${l.disabled}
      value="${D(l.element)}"
      twoline
      ><span
        >${l.element.getAttribute("prefix") ?? ""}${l.element.getAttribute("lnClass")}${l.element.getAttribute(
    "inst"
  ) ?? ""}
        ${l.disabled ? s` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Ns(Yi(i, l.element))}` : ""}</span
      ><span slot="secondary"
        >${l.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${l.element.closest("LDevice") ? l.element.closest("LDevice")?.getAttribute("inst") : Tl}</span
      ></mwc-check-list-item
    >`);
  Jn(s`${a}`, n);
}
function Hl(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? s`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(n) => Fl(n, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((n) => n.getAttribute("name")).map((n) => ({
    selected: Array.from(e.children).filter((i) => !i.closest("Private")).filter(
      (i) => i.tagName === "LNode" && i.getAttribute("iedName") === n
    ).length > 0,
    iedName: n
  })).sort(ao).map(
    (n) => s`<mwc-check-list-item
              value="${n.iedName ?? ""}"
              ?selected=${n.selected}
              >${n.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : s`<mwc-list-item noninteractive graphic="icon">
      <span>${c("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Bl(e) {
  return (t) => {
    t.dispatchEvent(E()), t.dispatchEvent(E(oo(e)));
  };
}
function so(e) {
  return [
    {
      title: c("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: c("lnode.wizard.instance"),
          action: Bl(e)
        }
      ],
      content: [Hl(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: c("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: c("save"),
        action: ql(e)
      },
      content: [s`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Wl(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? oo(e) : so(e);
}
function Gl(e) {
  const t = e.iedName !== "None";
  return [
    s`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${c("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${c("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${c("scl.prefix")}"
      pattern="${De.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${c("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${c("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function Ul(e) {
  return (t) => {
    const n = {}, i = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    i.forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    let r = null;
    if (i.some((o) => n[o] !== e.getAttribute(o))) {
      const o = F(e, n);
      return r = {
        old: { element: e },
        new: { element: o }
      }, [r];
    }
    return [];
  };
}
function jl(e) {
  const [t, n, i, r, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => e.getAttribute(l)), a = C(
    e.parentElement,
    "LNode"
  ).filter(
    (l) => l !== e && l.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((l) => l.getAttribute("lnInst"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: Ul(e)
      },
      content: [
        ...Gl({
          iedName: t,
          ldInst: n,
          prefix: i,
          lnClass: r,
          lnInst: o,
          reservedLnInst: a
        })
      ]
    }
  ];
}
function co(e) {
  return Object.entries(e).map(
    ([t, n]) => s`<wizard-checkbox
        label="${t}"
        .maybeValue=${n}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Kl(e) {
  return (t) => {
    const n = g(t.find((h) => h.label === "seqNum")), i = g(t.find((h) => h.label === "timeStamp")), r = g(t.find((h) => h.label === "dataSet")), o = g(t.find((h) => h.label === "reasonCode")), a = g(t.find((h) => h.label === "dataRef")), l = g(t.find((h) => h.label === "entryID")), d = g(t.find((h) => h.label === "configRef")), u = g(t.find((h) => h.label === "bufOvfl"));
    if (n === e.getAttribute("seqNum") && i === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && o === e.getAttribute("reasonCode") && a === e.getAttribute("dataRef") && l === e.getAttribute("entryID") && d === e.getAttribute("configRef") && u === e.getAttribute("bufOvfl"))
      return [];
    const m = F(e, {
      seqNum: n,
      timeStamp: i,
      dataSet: r,
      reasonCode: o,
      dataRef: a,
      entryID: l,
      configRef: d,
      bufOvfl: u
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function lo(e) {
  const [
    t,
    n,
    i,
    r,
    o,
    a,
    l,
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
      title: c("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Kl(e)
      },
      content: co({
        seqNum: t,
        timeStamp: n,
        dataSet: i,
        reasonCode: r,
        dataRef: o,
        entryID: a,
        configRef: l,
        bufOvfl: d
      })
    }
  ];
}
let Zl = 1, uo = 1, po = 1;
function Xl(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((n) => {
    e.appendChild(
      k(t.ownerDocument, "LNode", {
        iedName: n.parentElement?.parentElement?.parentElement?.parentElement?.getAttribute(
          "name"
        ) ?? null,
        ldInst: t.parentElement?.getAttribute("inst") ?? null,
        prefix: n.getAttribute("prefix"),
        lnClass: n.getAttribute("lnClass"),
        lnInst: n.getAttribute("inst")
      })
    );
  }), e;
}
function mo(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function Ql(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && mo(e) === "CBR" ? "QA" + uo++ : "QB" + po++;
}
function Yl(e, t) {
  if (Array.from(
    e.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((i) => t.includes(i.innerHTML.trim())).length)
    return !0;
  const n = e.ownerDocument;
  return Array.from(
    n.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${e.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((i) => i.getAttribute("type")).flatMap(
    (i) => Array.from(
      n.querySelectorAll(
        `DOType[id="${i}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((i) => t.includes(i.innerHTML.trim())).length > 0;
}
function Jl(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function ed(e, t) {
  return e.parentElement ? Jl(e).filter((n) => Yl(n, t)) : [];
}
function td(e, t) {
  const n = ed(e, t);
  if (uo = 1, po = 1, n.length) {
    const i = k(e.ownerDocument, "Bay", {
      name: "Q" + Zl++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return n.map((o) => Xl(
      k(e.ownerDocument, "ConductingEquipment", {
        name: Ql(o),
        type: mo(o)
      }),
      o
    )).forEach((o) => i.appendChild(o)), i;
  }
  return null;
}
function nd(e, t) {
  return (n, i, r) => {
    const o = [], a = r.selected.map(
      (u) => u.value
    ), l = k(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), d = k(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return d.textContent = "110.00", l.appendChild(d), o.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), o.push({
      new: {
        parent: t,
        element: l
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(_c).map((u) => td(u, a)).forEach((u) => {
      u && o.push({ new: { parent: l, element: u } });
    }), o;
  };
}
function id(e, t) {
  return [
    {
      title: c("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: c("guess.wizard.primary"),
        action: nd(e, t)
      },
      content: [
        s`<p>${c("guess.wizard.description")}</p>`,
        s`<mwc-list multi id="ctlModelList"
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
const rd = {
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
}, od = {
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
}, Ji = { en: od, de: rd };
async function ad(e) {
  return Object.keys(Ji).includes(e) ? Ji[e] : {};
}
Ua({ loader: ad, empty: (e) => e });
const ho = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", ho);
Xa(ho);
function fo(e, t, n) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("substation.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    n ? s`<mwc-formfield label="${c("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : s``
  ];
}
function sd(e) {
  return (t, n) => {
    const i = g(t.find((l) => l.label === "name")), r = g(t.find((l) => l.label === "desc")), o = n.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const a = k(e.ownerDocument, "Substation", {
      name: i,
      desc: r
    });
    return o ? [() => id(e.ownerDocument, a)] : [{ new: { parent: e, element: a } }];
  };
}
function cd(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: c("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: sd(e)
      },
      content: fo("", "", t)
    }
  ];
}
function ld(e) {
  return [
    {
      title: c("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Qr(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: fo(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function dd(e, t, n, i) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("terminal.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${c("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="cNodeName"
      .maybeValue=${n}
      helper="${c("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function ud(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => n !== e.getAttribute("name"));
  return [
    {
      title: c("terminal.wizard.title.edit"),
      element: e,
      content: dd(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const nn = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function bo(e, t, n, i, r, o) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${c("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${Gt.unsigned}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="numPhases"
      .maybeValue=${i}
      nullable
      helper="${c("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${c("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${o}
      helper="${c("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${Gt.decimal}"
    ></wizard-textfield>`
  ];
}
function pd(e) {
  return (t) => {
    const n = g(t.find((u) => u.label === "name")), i = g(t.find((u) => u.label === "desc")), r = g(t.find((u) => u.label === "nomFreq")), o = g(t.find((u) => u.label === "numPhases")), a = g(t.find((u) => u.label === "Voltage")), l = ai(t.find((u) => u.label === "Voltage")), d = k(e.ownerDocument, "VoltageLevel", {
      name: n,
      desc: i,
      nomFreq: r,
      numPhases: o
    });
    if (a !== null) {
      const u = k(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: l
      });
      u.textContent = a, d.appendChild(u);
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
function md(e) {
  return [
    {
      title: c("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: pd(e)
      },
      content: bo(
        "",
        "",
        nn.nomFreq,
        nn.numPhases,
        nn.Voltage,
        nn.multiplier
      )
    }
  ];
}
function hd(e, t, n, i) {
  if (e === null) {
    const o = k(i.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: n
    });
    return o.textContent = t, {
      new: {
        parent: i,
        element: o,
        reference: i.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: i,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = F(e, { multiplier: n });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function fd(e) {
  return (t) => {
    const n = t.find((h) => h.label === "name").value, i = g(t.find((h) => h.label === "desc")), r = g(t.find((h) => h.label === "nomFreq")), o = g(t.find((h) => h.label === "numPhases")), a = g(t.find((h) => h.label === "Voltage")), l = ai(t.find((h) => h.label === "Voltage"));
    let d, u;
    if (n === e.getAttribute("name") && i === e.getAttribute("desc") && r === e.getAttribute("nomFreq") && o === e.getAttribute("numPhases"))
      d = null;
    else {
      const h = F(e, {
        name: n,
        desc: i,
        nomFreq: r,
        numPhases: o
      });
      d = { old: { element: e }, new: { element: h } };
    }
    a === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && l === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? u = null : u = hd(
      e.querySelector("VoltageLevel > Voltage"),
      a,
      l,
      d?.new.element ?? e
    );
    const m = {
      actions: [],
      title: c("voltagelevel.action.updateVoltagelevel", { name: n })
    };
    return d && m.actions.push(d), u && m.actions.push(u), m.actions.push(
      ...si(e, e.getAttribute("name"), n)
    ), m.actions.length ? [m] : [];
  };
}
function bd(e) {
  return [
    {
      title: c("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: fd(e)
      },
      content: bo(
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
const go = "PTR";
function gd(e) {
  return (t) => {
    const n = g(t.find((a) => a.label === "name")), i = g(t.find((a) => a.label === "desc")), r = k(e.ownerDocument, "PowerTransformer", {
      name: n,
      desc: i,
      type: go
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function yo(e, t, n, i) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${n}
      disabled
      helper="${c("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function vo(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => t && n !== t);
}
function yd(e) {
  const t = vo(e);
  return [
    {
      title: c("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: c("add"),
        action: gd(e)
      },
      content: yo(
        "",
        null,
        go,
        t
      )
    }
  ];
}
function vd(e) {
  const t = vo(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: c("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Xr(e)
      },
      content: yo(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function wd(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${c("subnetwork.wizard.typeHelper")}"
      pattern="${Gt.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${c("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${Gt.decimal}"
    ></wizard-textfield>`
  ];
}
function Ad(e, t, n, i) {
  if (e === null) {
    const o = k(i.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return n && o.setAttribute("multiplier", n), t && (o.textContent = t), {
      new: {
        parent: i,
        element: o,
        reference: i.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: i,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = F(e, { multiplier: n });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function Sd(e) {
  return (t) => {
    const n = t.find((m) => m.label === "name").value, i = g(t.find((m) => m.label === "desc")), r = g(t.find((m) => m.label === "type")), o = g(t.find((m) => m.label === "BitRate")), a = ai(t.find((m) => m.label === "BitRate"));
    let l, d;
    if (n === e.getAttribute("name") && i === e.getAttribute("desc") && r === e.getAttribute("type"))
      l = null;
    else {
      const m = F(e, { name: n, desc: i, type: r });
      l = { old: { element: e }, new: { element: m } };
    }
    o === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && a === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? d = null : d = Ad(
      e.querySelector("SubNetwork > BitRate"),
      o,
      a,
      l?.new.element ?? e
    );
    const u = [];
    return l && u.push(l), d && u.push(d), u;
  };
}
function xd(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, o = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Sd(e)
      },
      content: wd({ name: t, desc: n, type: i, BitRate: r, multiplier: o })
    }
  ];
}
const $d = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Cd(e) {
  return $d.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const Ed = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Nd(e) {
  return Ed.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function Id(e) {
  if (!e.length) return [];
  const t = [], n = {};
  for (const i of e) {
    const r = i.old.element, o = i.old.parent, a = D(o);
    n[a] || (n[a] = o.cloneNode(!0));
    const l = n[a].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${Cd(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${Nd(r)}`
    );
    l && n[a].removeChild(l);
  }
  return Object.entries(n).forEach(([i, r]) => {
    if (r.children.length == 0) {
      const o = e[0].old.parent.ownerDocument, a = Q(o, "Inputs", i);
      a && a.parentElement && t.push({
        old: { parent: a.parentElement, element: a }
      });
    }
  }), t;
}
const Dd = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function _d(e, t, n, i, r, o, a, l, d) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("ied.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${d}
      pattern="${Dd}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ied.wizard.descHelper")}"
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="manufacturer"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="engRight"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="owner"
      .maybeValue=${l || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function kd(e) {
  return [
    s` <section>
      <h1>${c("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const n = t.old.element;
      return s` <mwc-list-item noninteractive twoline>
            <span>${n.tagName}</span>
            <span slot="secondary"
              >${D(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function zd(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function Ld(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(q).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function Td(e) {
  return (t, n) => {
    n.dispatchEvent(E());
    const i = Zr(e), r = i.filter(
      (d) => d.old.element.tagName === "ExtRef"
    ), o = Id(r), a = e.getAttribute("name") ?? "Unknown", l = {
      actions: [],
      title: c("ied.action.deleteied", { name: a })
    };
    return l.actions.push({
      old: { parent: e.parentElement, element: e }
    }), l.actions.push(...i), l.actions.push(...o), [l];
  };
}
function wo(e) {
  const t = Zr(e);
  return t.length > 0 ? [
    {
      title: c("ied.wizard.title.delete"),
      content: kd(t),
      primary: {
        icon: "delete",
        label: c("remove"),
        action: Td(e)
      }
    }
  ] : null;
}
function Pd(e) {
  function t(n) {
    return (i) => {
      const r = wo(n);
      r && i.dispatchEvent(be(() => r)), i.dispatchEvent(
        K({ old: { parent: n.parentElement, element: n } })
      ), i.dispatchEvent(E());
    };
  }
  return [
    {
      title: c("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: c("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: c("save"),
        action: Qr(
          e,
          "ied.action.updateied"
        )
      },
      content: _d(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        zd(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        Ld(e)
      )
    }
  ];
}
const Vd = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Rd(e, t, n, i) {
  return [
    t ? s`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${c("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : s`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${c("ldevice.wizard.nameHelper")}"
          validationMessage="${c("textfield.required")}"
          dialogInitialFocus
          pattern="${Vd}"
        ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${n}
      nullable
      helper="${c("ldevice.wizard.descHelper")}"
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="ldInst"
      .maybeValue=${i}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Md(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function qd(e) {
  return (t) => {
    const n = {}, i = ["ldName", "desc"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Od(e) {
  return [
    {
      title: c("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: qd(e)
      },
      content: Rd(
        e.getAttribute("ldName"),
        !Md(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Ao(e) {
  return Object.entries(e).map(
    ([t, n]) => s`<wizard-checkbox
        label="${t}"
        .maybeValue=${n}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Fd(e) {
  return (t) => {
    const n = g(t.find((u) => u.label === "dchg")), i = g(t.find((u) => u.label === "qchg")), r = g(t.find((u) => u.label === "dupd")), o = g(t.find((u) => u.label === "period")), a = g(t.find((u) => u.label === "gi"));
    if (n === e.getAttribute("dchg") && i === e.getAttribute("qchg") && r === e.getAttribute("dupd") && o === e.getAttribute("period") && a === e.getAttribute("gi"))
      return [];
    const l = F(e, {
      dchg: n,
      qchg: i,
      dupd: r,
      period: o,
      gi: a
    });
    return [{ old: { element: e }, new: { element: l } }];
  };
}
function So(e) {
  const [t, n, i, r, o] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((a) => e.getAttribute(a));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Fd(e)
      },
      content: Ao({ dchg: t, qchg: n, dupd: i, period: r, gi: o })
    }
  ];
}
const Hd = [
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
], Bd = [
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
], Wd = ["Spec", "Conf", "RO", "Set"], Gd = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], xo = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Ud(e, t, n) {
  if (!e.target || !e.target.parentElement) return;
  const i = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const o = Array.from(
    t.querySelectorAll(`EnumType[id="${i}"] > EnumVal`)
  ).map(
    (l) => s`<mwc-list-item
        value="${l.textContent?.trim() ?? ""}"
        ?selected=${l.textContent?.trim() === n}
        >${l.textContent?.trim()}</mwc-list-item
      >`
  ), a = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Jn(s`${o}`, a), a.requestUpdate();
}
function jd(e, t, n) {
  const i = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(i === "Enum" || i === "Struct");
  const o = [];
  Array.from(r.children).forEach((d) => {
    const u = d;
    u.disabled = !d.classList.contains(i), u.noninteractive = !d.classList.contains(i), u.style.display = d.classList.contains(i) ? "" : "none", u.disabled || o.push(u);
  }), r.value = o.length ? o[0].value : "";
  const a = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  i === "Enum" ? a.style.display = "" : a.style.display = "none";
  const l = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  i === "Enum" || i === "Struct" ? l.style.display = "none" : l.style.display = "", a.requestUpdate(), l.requestUpdate(), r.requestUpdate();
}
function Kd(e, t, n, i, r, o, a, l, d, u) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("scl.name")}"
      required
      pattern="${De.abstractDataAttributeName}"
      maxLength="${mn.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    s`<wizard-textfield
      label="desc"
      helper="${c("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${n}
      helper="${c("scl.bType")}"
      required
      @selected=${(m) => jd(m)}
      >${Bd.map(
      (m) => s`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    s`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${c("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => Ud(m, u, d)}
      >${i.map(
      (m) => s`<mwc-list-item
            class="${m.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${m.id}
            >${m.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="sAddr"
      .maybeValue=${o}
      helper="${c("scl.sAddr")}"
      nullable
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="valKind"
      .maybeValue=${a}
      helper="${c("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Wd.map(
      (m) => s`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    s`<wizard-checkbox
      label="valImport"
      .maybeValue=${l}
      helper="${c("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    s`<wizard-select
      label="Val"
      .maybeValue=${d}
      helper="${c("scl.Val")}"
      nullable
      >${Array.from(
      u.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (m) => s`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="Val"
      .maybeValue=${d}
      helper="${c("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Zd(e, t, n, i) {
  return [
    s`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${c("scl.fc")}"
      required
      fixedMenuPosition
      >${Hd.map(
      (r) => s`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    s`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${c("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    s`<wizard-checkbox
      label="qchg"
      .maybeValue=${n}
      helper="${c("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    s`<wizard-checkbox
      label="dupd"
      .maybeValue=${i}
      helper="${c("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Xd(e) {
  return (t) => {
    const n = g(t.find((w) => w.label === "name")), i = g(t.find((w) => w.label === "desc")), r = g(t.find((w) => w.label === "bType")), o = r === "Enum" || r === "Struct" ? g(t.find((w) => w.label === "type")) : null, a = g(t.find((w) => w.label === "sAddr")), l = g(t.find((w) => w.label === "valKind")), d = g(t.find((w) => w.label === "valImport")), u = t.find(
      (w) => w.label === "Val" && w.style.display !== "none"
    ), m = u ? g(u) : null, h = g(t.find((w) => w.label === "fc")) ?? "", b = g(t.find((w) => w.label === "dchg")), y = g(t.find((w) => w.label === "qchg")), v = g(t.find((w) => w.label === "dupd")), S = [], I = k(e.ownerDocument, "DA", {
      name: n,
      desc: i,
      bType: r,
      type: o,
      sAddr: a,
      valKind: l,
      valImport: d,
      fc: h,
      dchg: b,
      qchg: y,
      dupd: v
    });
    if (m !== null) {
      const w = k(e.ownerDocument, "Val", {});
      w.textContent = m, I.appendChild(w);
    }
    return S.push({
      new: {
        parent: e,
        element: I
      }
    }), S;
  };
}
function Qd(e) {
  const t = e.ownerDocument, n = "", i = null, r = "", o = null, a = null, l = null, d = null, u = null, m = "", h = null, b = null, y = null, v = Array.from(t.querySelectorAll("DAType, EnumType")).filter(q).filter((I) => I.getAttribute("id")), S = e.closest("DataTypeTemplates");
  return [
    {
      title: c("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: c("save"),
        action: Xd(e)
      },
      content: [
        ...Kd(
          n,
          i,
          r,
          v,
          o,
          a,
          d,
          u,
          l,
          S
        ),
        ...Zd(m, h, b, y)
      ]
    }
  ];
}
const he = (e, t) => e === null ? "" : t;
function $o() {
  return {
    BOOLEAN: e(),
    Enum: t(),
    FLOAT32: n("FLOAT32", -4294967296, 2 ** 32 - 1),
    FLOAT64: n("FLOAT64", -18446744073709552e3, 2 ** 64 - 1),
    INT8: i("INT8", -256, 2 ** 8 - 1),
    INT16: i("INT16", -65536, 2 ** 16 - 1),
    INT24: i("INT24", -16777216, 2 ** 24 - 1),
    INT32: i("INT32", -4294967296, 2 ** 32 - 1),
    INT64: i("INT64", -18446744073709552e3, 2 ** 64 - 1),
    INT128: i("INT128", -3402823669209385e23, 2 ** 128 - 1),
    INT8U: i("INT8U", 0, 2 ** 8 - 1),
    INT16U: i("INT16U", 0, 2 ** 16 - 1),
    INT24U: i("INT24U", 0, 2 ** 24 - 1),
    INT32U: i("INT32U", 0, 2 ** 32 - 1),
    Timestamp: r(),
    VisString32: o("VisString32", 32),
    VisString64: o("VisString64", 64),
    VisString65: o("VisString65", 65),
    VisString129: o("VisString129", 129),
    VisString255: o("VisString255", 255),
    ObjRef: o("VisString129", 129),
    Currency: o("Currency", 3),
    Octet64: o("Octet64", 64 * 2),
    Octet6: o("Octet6", 6 * 2),
    Octet16: o("Octet16", 16 * 2)
  };
  function e() {
    return {
      render: (d, u, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => s`<wizard-select
            id="Val${he(h, `${b + 1}`)}"
            label="Val${he(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${a(u)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (d, u) => g(
        d.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (d, u, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => s`<wizard-select
            id="Val${he(h, `${b + 1}`)}"
            label="Val${he(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${a(u)}
            fixedMenuPosition
          >
            ${l(d).map((y) => s`<mwc-list-item value="${y}"
                >${y}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (d, u) => g(
        d.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function n(d, u, m) {
    return {
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((v, S) => s`<wizard-textfield
            id="Val${he(v, `${S + 1}`)}"
            label="Val${he(v, ` for sGroup ${S + 1}`)}"
            .maybeValue=${a(b)}
            helper="${c("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${m}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (h, b) => g(
        h.find((y) => y.id === `Val${b || ""}`)
      )
    };
  }
  function i(d, u, m) {
    return {
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((v, S) => s`<wizard-textfield
            id="Val${he(v, `${S + 1}`)}"
            label="Val${he(v, ` for sGroup ${S + 1}`)}"
            .maybeValue=${a(b)}
            helper="${c("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${m}
          >
          </wizard-textfield>`),
      value: (h, b) => g(
        h.find((y) => y.id === `Val${b || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (d, u, m = null) => {
        const h = a(u);
        return (m ? [...Array(m)] : [m]).reduce(
          (b, y, v) => b.concat([
            s`<wizard-textfield
                id="ValDate${he(y, `${v + 1}`)}"
                label="Val (Date)${he(y, ` for sGroup ${v + 1}`)}"
                .maybeValue=${Yd(h)}
                type="date"
              >
              </wizard-textfield>`,
            s`<wizard-textfield
                id="ValTime${he(y, `${v + 1}`)}"
                label="Val (Time)${he(y, ` for sGroup ${v + 1}`)}"
                .maybeValue=${Jd(h)}
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
          (y) => g(d.find((v) => v.id === y))
        ), h = m[0] ? m[0] : "0000-00-00", b = m[1] ? m[1] : "00:00:00";
        return h + "T" + b + ".000";
      }
    };
  }
  function o(d, u) {
    return {
      render: (m, h, b = null) => (b ? [...Array(b)] : [b]).map((y, v) => s`<wizard-textfield
            id="Val${he(y, ` ${v + 1}`)}"
            label="Val${he(y, ` for sGroup ${v + 1}`)}"
            .maybeValue=${a(h)}
            helper="${c("dai.wizard.valueHelper", { type: d })}"
            maxLength=${u}
            type="text"
          >
          </wizard-textfield>`),
      value: (m, h) => g(
        m.find((b) => b.id === `Val${h || ""}`)
      )
    };
  }
  function a(d) {
    return (d?.querySelector("Val") ? d?.querySelector("Val") : d)?.textContent?.trim() ?? "";
  }
  function l(d) {
    const u = d.getAttribute("type"), m = [];
    return Array.from(
      d.ownerDocument.querySelectorAll(
        `EnumType[id="${u}"] > EnumVal`
      )
    ).filter(
      (h) => h.textContent && h.textContent !== ""
    ).sort(
      (h, b) => parseInt(h.getAttribute("ord") ?? "0") - parseInt(b.getAttribute("ord") ?? "0")
    ).forEach((h) => {
      m.push(h.textContent ?? "");
    }), m;
  }
}
function Yd(e) {
  let n = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(n) || (n = null), n === "0000-00-00" && (n = null), n;
}
function Jd(e) {
  const t = e.split("T");
  let n = null;
  return t.length == 2 && (n = t[1], n.length > 8 && (n = n.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(n) || (n = null), n === "00:00:00" && (n = null)), n;
}
function eu(e, t) {
  return (n) => {
    const i = e.getAttribute("bType"), r = $o()[i].value(n), o = t.parentElement?.getAttribute("name") ?? "", a = {
      actions: [],
      title: c("dai.action.updatedai", { daiName: o })
    }, l = t.cloneNode(!1);
    return l.textContent = r, a.actions.push({
      old: { element: t },
      new: { element: l }
    }), [a];
  };
}
function tu(e, t, n = null) {
  const i = e.getAttribute("bType"), r = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    s` ${$o()[i].render(
      e,
      t,
      n
    )}
    ${r ? s`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : Je}`
  ];
}
function nu(e, t) {
  const n = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: c("dai.wizard.title.edit", {
        daiName: n
      }),
      element: t,
      primary: {
        icon: "edit",
        label: c("save"),
        action: eu(e, t)
      },
      content: tu(e, t)
    }
  ];
}
function iu(e) {
  return (t) => {
    t.dispatchEvent(be(() => ro(e)));
  };
}
function ru(e) {
  return (t, n) => {
    const i = t.find((u) => u.label === "name").value, r = g(t.find((u) => u.label === "desc")), o = e.getAttribute("name"), a = [];
    if (!(i === o && r === e.getAttribute("desc"))) {
      const u = F(e, { name: i, desc: r });
      a.push({
        old: { element: e },
        new: { element: u }
      });
    }
    const l = i !== o ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${o}], GSEControl[datSet=${o}],SampledValueControl[datSet=${o}] `
      ) ?? []
    ).map((u) => {
      const m = F(u, { datSet: i });
      return { old: { element: u }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        n.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((u) => Q(e, "FCDA", u.value)).filter((u) => u).map((u) => ({
        old: {
          parent: e,
          element: u,
          reference: u.nextSibling
        }
      })),
      ...a,
      ...l
    ];
  };
}
function mi(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc");
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: ru(e)
      },
      menuActions: [
        {
          icon: "add",
          label: c("dataset.fcda.add"),
          action: iu(e)
        }
      ],
      content: [
        s`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${c("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        s`<wizard-textfield
          label="desc"
          .maybeValue=${n}
          helper="${c("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        s`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (i) => s`<mwc-check-list-item selected value="${D(i)}"
                >${D(i).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const U = {
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
}, ou = {
  IP: U.IP,
  "IP-SUBNET": U.IP,
  "IP-GATEWAY": U.IP,
  "OSI-TSEL": U.OSI,
  "OSI-SSEL": U.OSI,
  "OSI-PSEL": U.OSI,
  "OSI-AP-Title": U.OSIAPi,
  "OSI-AP-Invoke": U.OSId,
  "OSI-AE-Qualifier": U.OSId,
  "OSI-AE-Invoke": U.OSId,
  "MAC-Address": U.MAC,
  APPID: U.APPID,
  "VLAN-ID": U.VLANid,
  "VLAN-PRIORITY": U.VLANp,
  "OSI-NSAP": U.OSI,
  "SNTP-Port": U.port,
  "MMS-Port": U.port,
  DNSName: "[^ ]*",
  "UDP-Port": U.port,
  "TCP-Port": U.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: U.IPv6,
  "IPv6-SUBNET": U.IPv6sub,
  "IPv6-GATEWAY": U.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": U.IPv6,
  "IP-IGMPv3Sr": U.IP,
  "IP-ClassOfTraffic": U.OSI
}, au = {
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
function hn(e) {
  return [
    s`<mwc-formfield label="${c("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    s`${Object.entries(e.attributes).map(
      ([t, n]) => s`<wizard-textfield
          label="${t}"
          ?nullable=${au[t]}
          .maybeValue=${n}
          pattern="${Fe(ou[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function su(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (n) => !t.querySelector(`Address > P[type="${n.getAttribute("type")}"]`)?.isEqualNode(n)
  ).length === 0;
}
function hi(e, t, n) {
  const i = k(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, o]) => o !== null).forEach(([r, o]) => {
    const a = r, l = k(t.ownerDocument, "P", { type: a });
    n && l.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), l.textContent = o, i.appendChild(l);
  }), i;
}
function Co(e, t, n) {
  const i = [], r = hi(t, e, n), o = e.querySelector("Address");
  return o !== null && !su(o, r) ? (i.push({
    old: {
      parent: e,
      element: o,
      reference: o.nextSibling
    }
  }), i.push({
    new: {
      parent: e,
      element: r,
      reference: o.nextSibling
    }
  })) : o === null && i.push({
    new: {
      parent: e,
      element: r
    }
  }), i;
}
function er(e, t, n, i) {
  if (t === null) {
    const o = k(i.ownerDocument, e, {
      unit: "s",
      multiplier: "m"
    });
    return o.textContent = n, {
      new: {
        parent: i,
        element: o,
        reference: i.firstElementChild
      }
    };
  }
  if (n === null)
    return {
      old: {
        parent: i,
        element: t,
        reference: t.nextSibling
      }
    };
  const r = t.cloneNode(!1);
  return r.textContent = n, {
    old: { element: t },
    new: { element: r }
  };
}
function cu(e) {
  return (t, n) => {
    const i = {
      actions: [],
      title: c("gse.action.addaddress", {
        identity: D(e)
      })
    }, r = n.shadowRoot?.querySelector("#instType")?.checked ?? !1, o = {};
    o["MAC-Address"] = g(
      t.find((u) => u.label === "MAC-Address")
    ), o.APPID = g(t.find((u) => u.label === "APPID")), o["VLAN-ID"] = g(
      t.find((u) => u.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = g(
      t.find((u) => u.label === "VLAN-PRIORITY")
    ), Co(e, o, r).forEach((u) => {
      i.actions.push(u);
    });
    const l = g(t.find((u) => u.label === "MinTime")), d = g(t.find((u) => u.label === "MaxTime"));
    return l !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && i.actions.push(
      er(
        "MinTime",
        e.querySelector("MinTime"),
        l,
        e
      )
    ), d !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && i.actions.push(
      er(
        "MaxTime",
        e.querySelector("MaxTime"),
        d,
        e
      )
    ), [i];
  };
}
function lu(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, n = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, i = Array.from(e.querySelectorAll("Address > P")).some(
    (o) => o.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((o) => {
    r[o] || (r[o] = e.querySelector(`Address > P[type="${o}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: cu(e)
      },
      content: [
        ...hn({ hasInstType: i, attributes: r }),
        s`<wizard-textfield
          label="MinTime"
          .maybeValue=${t}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        s`<wizard-textfield
          label="MaxTime"
          .maybeValue=${n}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`
      ]
    }
  ];
}
function fi(e) {
  return e.ownerDocument.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${e.closest("IED")?.getAttribute("name")}"][apName="${e.closest("AccessPoint")?.getAttribute("name")}"]`
  );
}
function fn(e) {
  return !!fi(e);
}
function du(e) {
  const t = e.split("-").join("");
  return ("0" + (parseInt(t, 16) + 1).toString(16).toUpperCase()).match(/.{1,2}/g).join("-");
}
function Eo(e, t) {
  const n = t === "GOOSE" ? "01-0C-CD-01-01-FF" : "01-0C-CD-04-01-FF", i = t === "GOOSE" ? "01-0C-CD-01-00-00" : "01-0C-CD-04-00-00", r = Array.from(e.querySelectorAll("Address > P")).filter((a) => a.getAttribute("type") === "MAC-Address").map((a) => a.innerHTML.trim());
  let o = i;
  for (; o !== n; ) {
    if (!r.includes(o)) return o;
    o = du(o);
  }
  return r.includes(o) ? null : o;
}
function uu(e) {
  return (parseInt(e, 16) + 1).toString(16).toUpperCase().padStart(4, "0");
}
function No(e) {
  const t = "FFFF", n = "0001", i = Array.from(e.querySelectorAll("Address > P")).filter((o) => o.getAttribute("type") === "APPID").map((o) => o.innerHTML.trim());
  if (i.length === 0) return null;
  let r = n;
  for (; r !== t; ) {
    if (!i.includes(r)) return r;
    r = uu(r);
  }
  return i.includes(r) ? null : r;
}
function Io(e) {
  const t = e.getAttribute("name"), n = e.closest("IED")?.getAttribute("name"), i = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${n}"][apName="${i}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function Gn(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      pattern="${De.asciName}"
      maxLength="${mn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => s`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${c("scl.id")}"
      required
      validationMessage="${c("textfield.nonempty")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${c("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    s`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${c("scl.securityEnable")}"
      >${xo.map(
      (t) => s`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function tr(e) {
  return (t, n) => {
    const i = [], r = {};
    [
      "name",
      "desc",
      "type",
      "appID",
      "fixedOffs",
      "securityEnabled"
    ].forEach((h) => {
      r[h] = g(t.find((b) => b.label === h));
    }), r.confRev = "1";
    const a = r.name + "sDataSet";
    r.datSet = a;
    const l = k(
      e.ownerDocument,
      "GSEControl",
      r
    );
    if (i.push({ new: { parent: e, element: l } }), fn(e)) {
      const h = fi(e), b = k(e.ownerDocument, "GSE", {
        ldInst: e.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: r.name
      });
      i.push({ new: { parent: h, element: b } });
      const y = n.shadowRoot?.querySelector("#instType")?.checked ?? !1, v = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((W) => {
        v[W] = g(t.find((le) => le.label === W));
      });
      const I = hi(v, b, y);
      i.push({ new: { parent: b, element: I } });
      const w = g(t.find((W) => W.label === "MinTime")), V = k(e.ownerDocument, "MinTime", {
        unit: "s",
        multiplier: "m"
      });
      V.textContent = w, i.push({ new: { parent: b, element: V } });
      const R = g(t.find((W) => W.label === "MaxTime")), Y = k(e.ownerDocument, "MaxTime", {
        unit: "s",
        multiplier: "m"
      });
      Y.textContent = R, i.push({ new: { parent: b, element: Y } });
    }
    const d = k(e.ownerDocument, "DataSet", {
      name: a
    });
    i.push({ new: { parent: e, element: d } });
    const m = n.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const h of m) {
      const b = pn(e, h);
      b && i.push({ new: { parent: d, element: b } });
    }
    return [
      {
        title: c("editing.created", { name: "GSEControl" }),
        actions: i
      }
    ];
  };
}
function Do(e) {
  const t = e.closest("Server"), n = ln(e, "GSEControl"), i = null, r = "GOOSE", o = "", a = null, l = null, d = !0, u = {
    "MAC-Address": Eo(e.ownerDocument, "GOOSE"),
    APPID: No(e.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return fn(e) ? [
    {
      title: c("wizard.title.add", { tagName: "GSEControl" }),
      content: Gn({
        name: n,
        desc: i,
        type: r,
        appID: o,
        fixedOffs: a,
        securityEnabled: l
      })
    },
    {
      title: c("wizard.title.add", { tagName: "GSE" }),
      content: [
        ...hn({ hasInstType: d, attributes: u }),
        s`<wizard-textfield
              label="MinTime"
              .maybeValue=${"10"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`,
        s`<wizard-textfield
              label="MaxTime"
              .maybeValue=${"1000"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`
      ]
    },
    {
      title: c("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: c("save"),
        action: tr(e)
      },
      content: [t ? an(t) : s``]
    }
  ] : [
    {
      title: c("wizard.title.add", { tagName: "GSEControl" }),
      content: Gn({
        name: n,
        desc: i,
        type: r,
        appID: o,
        fixedOffs: a,
        securityEnabled: l
      })
    },
    {
      title: c("wizard.title.add", { tagName: "GSE" }),
      content: [
        s`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${c("gse.missingaccp")}
            </h3>`
      ]
    },
    {
      title: c("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: c("save"),
        action: tr(e)
      },
      content: [t ? an(t) : s``]
    }
  ];
}
function pu(e) {
  return (t, n) => {
    const r = n.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const l = Q(e, o, a);
    if (!l) return [];
    const d = l.querySelector("LN0");
    return d ? [() => Do(d)] : [];
  };
}
function mu(e) {
  return [
    {
      title: c("gsecontrol.wizard.location"),
      primary: {
        icon: "",
        label: c("next"),
        action: pu(e)
      },
      content: [ui(e)]
    }
  ];
}
function hu(e) {
  return () => e.tagName === "IED" && e.querySelector("LN0") ? [() => Do(e.querySelector("LN0"))] : [() => mu(e.ownerDocument)];
}
function fu(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), n = Io(e), i = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (l) => l.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && i && r.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), n && r.push({
    old: {
      parent: n.parentElement,
      element: n,
      reference: n.nextSibling
    }
  });
  const o = e.getAttribute("name"), a = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: c("controlblock.action.remove", {
      type: e.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function bu(e) {
  return (t) => {
    const n = fu(e);
    n && t.dispatchEvent(K(n)), t.dispatchEvent(E());
  };
}
function gu(e) {
  return (t) => {
    t.dispatchEvent(be(() => mi(e)));
  };
}
function yu(e) {
  return (t) => {
    t.dispatchEvent(be(() => lu(e)));
  };
}
function vu(e) {
  return (t) => {
    const n = t.find((u) => u.label === "name").value, i = g(t.find((u) => u.label === "desc")), r = g(t.find((u) => u.label === "type")), o = g(t.find((u) => u.label === "appID")), a = g(t.find((u) => u.label === "fixedOffs")), l = g(
      t.find((u) => u.label === "securityEnabled")
    );
    if (n === e.getAttribute("name") && i === e.getAttribute("desc") && r === e.getAttribute("type") && o === e.getAttribute("appID") && a === e.getAttribute("fixedOffs") && l === e.getAttribute("securityEnabled"))
      return [];
    const d = F(e, {
      name: n,
      desc: i,
      type: r,
      appID: o,
      fixedOffs: a,
      securityEnabled: l
    });
    return [{ old: { element: e }, new: { element: d } }];
  };
}
function _o(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("appID"), o = e.getAttribute("fixedOffs"), a = e.getAttribute("securityEnabled"), l = Io(e), d = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), u = [];
  return u.push({
    icon: "delete",
    label: c("remove"),
    action: bu(e)
  }), d && u.push({
    icon: "edit",
    label: c("scl.DataSet"),
    action: gu(d)
  }), l && u.push({
    icon: "edit",
    label: c("scl.Communication"),
    action: yu(l)
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: vu(e)
      },
      menuActions: u,
      content: [
        ...Gn({
          name: t,
          desc: n,
          type: i,
          appID: r,
          fixedOffs: o,
          securityEnabled: a
        })
      ]
    }
  ];
}
function ko(e) {
  const t = Array.from(e.querySelectorAll("GSEControl")).filter(
    q
  ), n = e.querySelector("LN0") ? {
    icon: "add",
    label: c("GOOSE"),
    action: hu(e)
  } : void 0;
  return [
    {
      title: c("wizard.title.select", { tagName: "GSEcontrol" }),
      primary: n,
      content: [
        s`<filtered-list
          @selected=${(i) => {
          const r = i.target.selected.value, o = Q(e, "GSEControl", r);
          o && i.target.dispatchEvent(
            be(() => _o(o))
          );
        }}
          >${t.map(
          (i) => s`<mwc-list-item twoline value="${D(i)}"
                ><span>${i.getAttribute("name")}</span
                ><span slot="secondary"
                  >${D(i)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function rt(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function wu(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Au(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = C(
    e.parentElement,
    "Function"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: wu(e)
      },
      content: [
        ...rt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function Su(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(
      e.ownerDocument,
      "Function",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function xu(e) {
  const t = "", r = Array.from(e.querySelectorAll("Function")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Su(e)
      },
      content: [
        ...rt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function $u(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Cu(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = C(
    e.parentElement,
    "EqSubFunction"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: $u(e)
      },
      content: [
        ...rt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function Eu(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(
      e.ownerDocument,
      "EqSubFunction",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Nu(e) {
  const t = "", r = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Eu(e)
      },
      content: [
        ...rt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Iu(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Du(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = C(
    e.parentElement,
    "EqFunction"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Iu(e)
      },
      content: [
        ...rt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function _u(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(
      e.ownerDocument,
      "EqFunction",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function ku(e) {
  const t = "", r = Array.from(e.querySelectorAll("EqFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: _u(e)
      },
      content: [
        ...rt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function zu(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Lu(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = C(
    e.parentElement,
    "SubFunction"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: zu(e)
      },
      content: [
        ...rt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function Tu(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(
      e.ownerDocument,
      "SubFunction",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Pu(e) {
  const t = "", r = Array.from(e.querySelectorAll("SubFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Tu(e)
      },
      content: [
        ...rt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Vu(e) {
  return (t, n) => {
    const i = {
      actions: [],
      title: c("smv.action.addaddress", {
        identity: D(e)
      })
    }, r = n.shadowRoot?.querySelector("#instType")?.checked, o = {};
    o["MAC-Address"] = g(
      t.find((l) => l.label === "MAC-Address")
    ), o.APPID = g(t.find((l) => l.label === "APPID")), o["VLAN-ID"] = g(
      t.find((l) => l.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = g(
      t.find((l) => l.label === "VLAN-PRIORITY")
    );
    const a = Co(e, o, r);
    return a.length ? (a.forEach((l) => {
      i.actions.push(l);
    }), [i]) : [];
  };
}
function Ru(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (i) => i.getAttribute("xsi:type")
  ), n = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((i) => {
    n[i] || (n[i] = e.querySelector(`Address > P[type="${i}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "edit",
        action: Vu(e)
      },
      content: [...hn({ hasInstType: t, attributes: n })]
    }
  ];
}
function Un(e) {
  return Object.entries(e).map(
    ([t, n]) => s`<wizard-checkbox
        label="${t}"
        .maybeValue=${n}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Mu(e) {
  return (t) => {
    const n = {}, i = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (i.forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    }), !i.some((o) => n[o] !== e.getAttribute(o)))
      return [];
    const r = F(e, n);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function qu(e) {
  const [t, n, i, r, o] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((a) => e.getAttribute(a));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Mu(e)
      },
      content: [
        ...Un({
          refreshTime: t,
          sampleRate: n,
          dataSet: i,
          security: r,
          synchSourceId: o
        })
      ]
    }
  ];
}
function zo(e) {
  const t = e.getAttribute("name"), n = e.closest("IED")?.getAttribute("name"), i = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${n}"][apName="${i}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function Ou(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), n = zo(e), i = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (l) => l.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e
    }
  }), t && i && r.push({
    old: {
      parent: e.parentElement,
      element: t
    }
  }), n && r.push({
    old: {
      parent: n.parentElement,
      element: n
    }
  });
  const o = e.getAttribute("name"), a = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: c("controlblock.action.remove", {
      type: e.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function jn(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      pattern="${De.asciName}"
      maxLength="${mn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${De.normalizedString}"
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? s`` : s`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${c("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    s`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${c("scl.id")}"
      required
      validationMessage="${c("textfield.nonempty")}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${c("scl.smpMod")}"
      >${Gd.map(
      (t) => s`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${c("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${c("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    s`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${c("scl.securityEnable")}"
      >${xo.map(
      (t) => s`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function nr(e) {
  return (t, n) => {
    const i = {};
    [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ].forEach((I) => {
      if (I === "multicast" && !t.find((V) => V.label === I)) {
        i.multicast = "true";
        return;
      }
      i[I] = g(
        t.find((V) => V.label === I)
      );
    }), i.confRev = "1";
    const o = i.name + "sDataSet";
    i.datSet = o;
    const a = k(
      e.ownerDocument,
      "SampledValueControl",
      i
    ), l = {};
    [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ].forEach((I) => {
      l[I] = g(t.find((w) => w.label === I));
    });
    const u = k(
      e.ownerDocument,
      "SmvOpts",
      l
    );
    a.appendChild(u);
    let m = null, h = null;
    if (fn(e)) {
      const I = n.shadowRoot?.querySelector("#instType")?.checked ?? !1, w = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((Y) => {
        w[Y] = g(t.find((W) => W.label === Y));
      }), m = k(e.ownerDocument, "SMV", {
        ldInst: e.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: i.name
      });
      const R = hi(w, m, I);
      m.appendChild(R), h = fi(e);
    }
    const b = k(e.ownerDocument, "DataSet", {
      name: o
    }), v = n.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const I of v) {
      const w = pn(e, I);
      w && b.appendChild(w);
    }
    return [m ? {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: e, element: a } },
        { new: { parent: h, element: m } },
        { new: { parent: e, element: b } }
      ]
    } : {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: e, element: a } },
        { new: { parent: e, element: b } }
      ]
    }];
  };
}
function Lo(e) {
  const t = e.closest("Server"), n = ln(e, "SampledValueControl"), i = null, r = "true", o = "", a = "SmpPerPeriod", l = "80", d = "1", u = null, m = null, h = "true", b = "true", y = null, v = "true", S = !0, I = {
    "MAC-Address": Eo(e.ownerDocument, "SMV"),
    APPID: No(e.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return fn(e) ? [
    {
      title: c("wizard.title.add", { tagName: "SampledValueControl" }),
      content: jn({
        name: n,
        desc: i,
        multicast: r,
        smvID: o,
        smpMod: a,
        smpRate: l,
        nofASDU: d,
        securityEnabled: u
      })
    },
    {
      title: c("wizard.title.add", { tagName: "SmvOpts" }),
      content: Un({
        refreshTime: m,
        sampleRate: h,
        dataSet: b,
        security: y,
        synchSourceId: v
      })
    },
    {
      title: c("wizard.title.add", { tagName: "SMV" }),
      content: [...hn({ hasInstType: S, attributes: I })]
    },
    {
      title: c("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: c("save"),
        action: nr(e)
      },
      content: [t ? Qi(t) : s``]
    }
  ] : [
    {
      title: c("wizard.title.add", { tagName: "SampledValueControl" }),
      content: jn({
        name: n,
        desc: i,
        multicast: r,
        smvID: o,
        smpMod: a,
        smpRate: l,
        nofASDU: d,
        securityEnabled: u
      })
    },
    {
      title: c("wizard.title.add", { tagName: "SmvOpts" }),
      content: Un({
        refreshTime: m,
        sampleRate: h,
        dataSet: b,
        security: y,
        synchSourceId: v
      })
    },
    {
      title: c("wizard.title.add", { tagName: "SMV" }),
      content: [
        s`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${c("smv.missingaccp")}
            </h3>`
      ]
    },
    {
      title: c("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: c("save"),
        action: nr(e)
      },
      content: [t ? Qi(t) : s``]
    }
  ];
}
function Fu(e) {
  return (t, n) => {
    const r = n.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const l = Q(e, o, a);
    if (!l) return [];
    const d = l.querySelector("LN0");
    return d ? [() => Lo(d)] : [];
  };
}
function Hu(e) {
  return [
    {
      title: c("samvpledvaluecontrol.wizard.location"),
      primary: {
        icon: "",
        label: c("next"),
        action: Fu(e)
      },
      content: [ui(e)]
    }
  ];
}
function Bu(e) {
  return () => e.tagName === "IED" && e.querySelector("LN0") ? [
    () => Lo(e.querySelector("LN0"))
  ] : [() => Hu(e.ownerDocument)];
}
function Wu(e) {
  return (t) => {
    const n = Ou(e);
    n && t.dispatchEvent(K(n)), t.dispatchEvent(E());
  };
}
function Gu(e) {
  return (t) => {
    t.dispatchEvent(be(() => mi(e)));
  };
}
function Uu(e) {
  return (t) => {
    t.dispatchEvent(be(() => qu(e)));
  };
}
function ju(e) {
  return (t) => {
    t.dispatchEvent(be(() => Ru(e)));
  };
}
function Ku(e) {
  return (t) => {
    const n = {}, i = [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ];
    i.forEach((a) => {
      if (a === "multicast" && !t.find((d) => d.label === a)) {
        n.multicast = "true";
        return;
      }
      n[a] = g(t.find((d) => d.label === a));
    });
    let r = null;
    if (i.some((a) => n[a] !== e.getAttribute(a))) {
      const a = F(e, n);
      r = {
        old: { element: e },
        new: { element: a }
      };
    }
    const o = [];
    return r && o.push(r), o;
  };
}
function To(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("multicast"), r = e.getAttribute("smvID"), o = e.getAttribute("smpMod"), a = e.getAttribute("smpRate"), l = e.getAttribute("nofASDU"), d = e.getAttribute("securityEnabled"), u = zo(e), m = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: c("remove"),
    action: Wu(e)
  }), h && b.push({
    icon: "edit",
    label: c("scl.DataSet"),
    action: Gu(h)
  }), m && b.push({
    icon: "edit",
    label: c("scl.SmvOpts"),
    action: Uu(m)
  }), u && b.push({
    icon: "edit",
    label: c("scl.Communication"),
    action: ju(u)
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Ku(e)
      },
      menuActions: b,
      content: [
        ...jn({
          name: t,
          desc: n,
          multicast: i,
          smvID: r,
          smpMod: o,
          smpRate: a,
          nofASDU: l,
          securityEnabled: d
        })
      ]
    }
  ];
}
function Po(e) {
  const t = Array.from(
    e.querySelectorAll("SampledValueControl")
  ).filter(q), n = e.querySelector("LN0") ? {
    icon: "add",
    label: c("scl.SampledValueControl"),
    action: Bu(e)
  } : void 0;
  return [
    {
      title: c("wizard.title.select", { tagName: "SampledValueControl" }),
      primary: n,
      content: [
        s`<filtered-list
          @selected=${(i) => {
          const r = i.target.selected.value, o = Q(
            e,
            "SampledValueControl",
            r
          );
          o && i.target?.dispatchEvent(
            be(
              () => To(o)
            )
          );
        }}
          >${t.map(
          (i) => s`<mwc-list-item twoline value="${D(i)}"
                ><span>${i.getAttribute("name")}</span
                ><span slot="secondary"
                  >${D(i)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function Vo(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${c("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (t) => s`<mwc-list-item value="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      nullable
      helper="${c("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Zu(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "phase", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Xu(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("phase"), r = e.getAttribute("virtual"), o = C(
    e.parentElement,
    "SubEquipment"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Zu(e)
      },
      content: [
        ...Vo({
          name: t,
          desc: n,
          phase: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Qu(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "phase", "virtual"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(
      e.ownerDocument,
      "SubEquipment",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Yu(e) {
  const t = "", o = Array.from(e.querySelectorAll("SubEquipment")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Qu(e)
      },
      content: [
        ...Vo({
          name: t,
          desc: null,
          phase: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function Ju(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("virtual"), o = C(
    e.parentElement,
    "GeneralEquipment"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: ep(e)
      },
      content: [
        ...Ro({
          name: t,
          desc: n,
          type: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function ep(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Ro(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function tp(e) {
  const t = "", o = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: np(e)
      },
      content: [
        ...Ro({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function np(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(
      e.ownerDocument,
      "GeneralEquipment",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function ip(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      n[o] = g(
        t.find((a) => a.label === o)
      );
    });
    const r = k(
      e.ownerDocument,
      "TransformerWinding",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function rp(e) {
  const t = "", o = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: ip(e)
      },
      content: [
        ...Mo({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function op(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(
        t.find((o) => o.label === r)
      );
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Mo(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${c("scl.type")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ap(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("virtual"), o = C(
    e.parentElement,
    "TransformerWinding"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: op(e)
      },
      content: [
        ...Mo({
          name: t,
          desc: n,
          type: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function sp(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(
      e.ownerDocument,
      "TapChanger",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function cp(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function qo(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${c("scl.type")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function lp(e) {
  const t = "", i = "LTC", o = Array.from(e.querySelectorAll("TapChanger")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: sp(e)
      },
      content: [
        ...qo({
          name: t,
          desc: null,
          type: i,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function dp(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("virtual"), o = C(
    e.parentElement,
    "TapChanger"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: cp(e)
      },
      content: [
        ...qo({
          name: t,
          desc: n,
          type: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Oo(e, t, n, i, r) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("line.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${n}
      nullable
      helper="${c("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${c("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${c("textfield.nonempty")}"
      pattern="${Gt.unsigned}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${c("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${c("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function up(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(e.ownerDocument, "Line", n);
    return [{ new: { parent: e, element: r } }];
  };
}
function pp(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function mp(e) {
  return [
    {
      title: c("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: up(e)
      },
      content: [...Oo("", "", "", "", "")]
    }
  ];
}
function hp(e) {
  return [
    {
      title: c("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: pp(e)
      },
      content: Oo(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function fp(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = k(e.ownerDocument, "Process", n);
    return [{ new: { parent: e, element: r } }];
  };
}
function bp(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Fo(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${c("scl.type")}"
    ></wizard-textfield>`
  ];
}
function gp(e) {
  const t = "", n = "", i = "", r = C(
    e.parentElement,
    "Process"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: fp(e)
      },
      content: [
        ...Fo({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function yp(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = C(
    e.parentElement,
    "Process"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: bp(e)
      },
      content: [
        ...Fo({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function vp(e, t, n, i, r) {
  return [
    s`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${c("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${n}
      helper="${c("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${c("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${c("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function wp(e) {
  return (t) => {
    const n = {}, i = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Ap(e) {
  return [
    {
      title: c("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: wp(e)
      },
      content: vp(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Sp(e, t, n, i) {
  return [
    s`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${c("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${c("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="inst"
      .maybeValue=${i}
      readonly
      helper="${c("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function xp(e) {
  return (t) => {
    const n = {}, i = ["lnType", "desc", "lnClass", "inst"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = F(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function $p(e) {
  return [
    {
      title: c("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: xp(e)
      },
      content: Sp(
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
const _ = {
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
    edit: rl,
    create: il
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
    edit: ml,
    create: pl
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
    edit: fl,
    create: p
  },
  DA: {
    edit: Qd,
    create: p
  },
  DAI: {
    edit: nu,
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
    edit: Du,
    create: ku
  },
  EqSubFunction: {
    edit: Cu,
    create: Nu
  },
  ExtRef: {
    edit: p,
    create: p
  },
  FCDA: {
    edit: p,
    create: ro
  },
  FileHandling: {
    edit: p,
    create: p
  },
  Function: {
    edit: Au,
    create: xu
  },
  GeneralEquipment: {
    edit: Ju,
    create: tp
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
    edit: _o,
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
    edit: Pd,
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
    edit: Od,
    create: p
  },
  LN: {
    edit: Ap,
    create: p
  },
  LN0: {
    edit: $p,
    create: p
  },
  LNode: {
    edit: jl,
    create: Wl
  },
  LNodeType: {
    edit: p,
    create: p
  },
  Line: {
    edit: hp,
    create: mp
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
    edit: lo,
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
    edit: vd,
    create: yd
  },
  Private: {
    edit: p,
    create: p
  },
  Process: {
    edit: yp,
    create: gp
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
    edit: To,
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
    edit: Xu,
    create: Yu
  },
  SubFunction: {
    edit: Lu,
    create: Pu
  },
  SubNetwork: {
    edit: xd,
    create: p
  },
  Subject: {
    edit: p,
    create: p
  },
  Substation: {
    edit: ld,
    create: cd
  },
  SupSubscription: {
    edit: p,
    create: p
  },
  TapChanger: {
    edit: dp,
    create: lp
  },
  Terminal: {
    edit: ud,
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
    edit: ap,
    create: rp
  },
  TrgOps: {
    edit: So,
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
    edit: bd,
    create: md
  }
};
var Cp = Object.defineProperty, Ep = Object.getOwnPropertyDescriptor, zt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Ep(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Cp(t, n, r), r;
};
function Np(e) {
  const t = e.getAttribute("lnClass")?.charAt(0) ?? "";
  return Ip[t] ?? Ur;
}
const Ip = {
  L: Ur,
  A: Vc,
  C: Rc,
  F: Mc,
  G: qc,
  I: Oc,
  K: Fc,
  M: Hc,
  P: Bc,
  Q: Wc,
  R: Gc,
  S: Uc,
  T: jc,
  X: Kc,
  Y: Zc,
  Z: Xc
};
let vt = class extends B {
  get header() {
    const e = this.element.getAttribute("prefix") ?? "", t = this.element.getAttribute("lnClass"), n = this.element.getAttribute("lnInst"), i = this.missingIedReference ? `${e} ${t} ${n}` : D(this.element);
    return typeof i == "string" ? i : "";
  }
  get missingIedReference() {
    return this.element.getAttribute("iedName") === "None";
  }
  get isIEDReference() {
    return this.element.getAttribute("iedName") !== "None";
  }
  cloneLNodeElement() {
    const e = this.element.getAttribute("lnClass");
    if (!e) return;
    const t = Gr(this.element.parentElement)(
      e
    );
    if (!t) return;
    const n = F(this.element, { lnInst: t });
    this.dispatchEvent(
      K({
        new: { parent: this.element.parentElement, element: n }
      })
    );
  }
  openEditWizard() {
    const e = _.LNode.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return s`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${Np(this.element)}</mwc-icon
      ><mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab
      >${this.isIEDReference ? s`` : s`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
};
zt([
  f({ attribute: !1 })
], vt.prototype, "doc", 2);
zt([
  f({ attribute: !1 })
], vt.prototype, "element", 2);
zt([
  L()
], vt.prototype, "header", 1);
zt([
  L()
], vt.prototype, "missingIedReference", 1);
zt([
  L()
], vt.prototype, "isIEDReference", 1);
vt = zt([
  H("l-node-editor")
], vt);
s`<svg
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
const Kt = {
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
}, bi = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Kt.gooseIcon}</svg>`, gi = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Kt.reportIcon}</svg>`, yi = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Kt.smvIcon}</svg>`, Dp = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Kt.logIcon}</svg>`, _p = {
  ReportControl: gi,
  LogControl: Dp,
  GSEControl: bi,
  SampledValueControl: yi
}, kp = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`, zp = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const ir = {
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
rn("dAIcon"), rn("dOIcon"), rn("enumIcon"), rn("lNIcon");
function rn(e) {
  if (e === "reset") return s``;
  const t = ir[e]?.height ?? 24, n = ir[e]?.width ?? 24;
  return s`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${n} ${t}"
    width="${n}"
  >
    ${Kt[e]}
  </svg> `;
}
s`<svg
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
s`<svg
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
const Lp = s`<svg
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
</svg>`, Tp = s`<svg
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
</svg>`, Pp = s`<svg
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
</svg>`, Vp = s`<svg
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
</svg>`, Rp = s`<svg
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
</svg>`, Mp = s`<svg
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
</svg>`, qp = s`<svg
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
</svg>`, Ho = s`<svg
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
s`<svg
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
const rr = s`<svg
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
s` <svg
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
const Op = z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, Fp = z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, Hp = z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, Bp = z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
var Wp = Object.defineProperty, Gp = Object.getOwnPropertyDescriptor, ot = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Gp(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Wp(t, n, r), r;
};
function Up(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let ke = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return this.showfunctions ? `${e} ${t ? `—  ${t}` : ""}` : `${e}`;
  }
  openEditWizard() {
    const e = _.GeneralEquipment.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    const e = C(this.element, "EqFunction");
    return e.length ? s`${e.map(
      (t) => s` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
            ></eq-function-editor>`
    )}` : s``;
  }
  renderAddButtons() {
    return Up(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return this.showfunctions ? s`<action-pane label=${this.header}>
        <abbr slot="action" title="${c("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${c("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          ></abbr
        >
        ${this.renderLNodes()} ${this.renderEqFunctions()}
      </action-pane>` : s`<action-icon label=${this.header}>
      <mwc-icon slot="icon">${Ho}</mwc-icon>
      <mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab>
    </action-icon>`;
  }
};
ke.styles = G`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
ot([
  f({ attribute: !1 })
], ke.prototype, "doc", 2);
ot([
  f({ type: Number })
], ke.prototype, "editCount", 2);
ot([
  f({ attribute: !1 })
], ke.prototype, "element", 2);
ot([
  f({ type: Boolean })
], ke.prototype, "showfunctions", 2);
ot([
  L()
], ke.prototype, "header", 1);
ot([
  N("mwc-menu")
], ke.prototype, "addMenu", 2);
ot([
  N('mwc-icon-button[icon="playlist_add"]')
], ke.prototype, "addButton", 2);
ke = ot([
  H("general-equipment-editor")
], ke);
var jp = Object.defineProperty, Kp = Object.getOwnPropertyDescriptor, at = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Kp(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && jp(t, n, r), r;
};
function Zp(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let ze = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = _.SubFunction.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderSubFunctions() {
    const e = C(this.element, "SubFunction");
    return s` ${e.map(
      (t) => s`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Zp(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${$t(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
ze.styles = G`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
at([
  f({ attribute: !1 })
], ze.prototype, "doc", 2);
at([
  f({ type: Number })
], ze.prototype, "editCount", 2);
at([
  f({ attribute: !1 })
], ze.prototype, "element", 2);
at([
  f({ type: Boolean })
], ze.prototype, "showfunctions", 2);
at([
  L()
], ze.prototype, "header", 1);
at([
  N("mwc-menu")
], ze.prototype, "addMenu", 2);
at([
  N('mwc-icon-button[icon="playlist_add"]')
], ze.prototype, "addButton", 2);
ze = at([
  H("sub-function-editor")
], ze);
var Xp = Object.defineProperty, Qp = Object.getOwnPropertyDescriptor, st = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Qp(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Xp(t, n, r), r;
};
function Yp(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let Le = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = _.Function.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderSubFunctions() {
    const e = C(this.element, "SubFunction");
    return s` ${e.map(
      (t) => s`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Yp(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${$t(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
Le.styles = G`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
st([
  f({ attribute: !1 })
], Le.prototype, "doc", 2);
st([
  f({ type: Number })
], Le.prototype, "editCount", 2);
st([
  f({ attribute: !1 })
], Le.prototype, "element", 2);
st([
  f({ type: Boolean })
], Le.prototype, "showfunctions", 2);
st([
  L()
], Le.prototype, "header", 1);
st([
  N("mwc-menu")
], Le.prototype, "addMenu", 2);
st([
  N('mwc-icon-button[icon="playlist_add"]')
], Le.prototype, "addButton", 2);
Le = st([
  H("function-editor")
], Le);
function Jp(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter(q).some((n) => n.getAttribute("iedName") === t);
}
function em(e, t) {
  return Array.from(e.children).some(
    (n) => n.tagName === "LNode" && n.getAttribute("iedName") === t
  );
}
function or(e, t) {
  const n = e.tagName === "Bay" ? 0 : 1;
  return Array.from(e.children).filter(
    (i) => Jp(i, t)
  ).length > n;
}
function tm(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter(q).some((n) => n.getAttribute("iedName") === t);
}
function nm(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter(q).filter((n) => n.getAttribute("iedName") === t);
}
function im(e, t) {
  const n = nm(e, t), i = e.closest("SCL");
  return Array.from(i.getElementsByTagName("LNode")).filter(q).filter((r) => r.getAttribute("iedName") === t).some((r) => !n.includes(r));
}
function rm(e, t) {
  const n = [];
  for (const i of t) {
    const r = i.getAttribute("name");
    if (e.tagName === "SCL") {
      (!tm(e, r) || or(e, r)) && n.push(i);
      continue;
    }
    im(e, r) || (or(e, r) || em(e, r)) && n.push(i);
  }
  for (const i of n)
    t.delete(i);
  return n;
}
function om(e) {
  return (t) => {
    const n = new Set(
      Array.from(e.querySelectorAll("IED")).filter(q)
    );
    return rm(t, n);
  };
}
function Bo(e, t) {
  const [n, i, r, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return Array.from(e.querySelectorAll("LN, LN0")).filter(q).find(
    (a) => a?.closest("LDevice")?.getAttribute("inst") === n && (a.getAttribute("prefix") ?? "") === (i ?? "") && (a.getAttribute("lnClass") ?? "") === (r ?? "") && (a.getAttribute("inst") ?? "") === (o ?? "")
  );
}
function am(e) {
  const t = new Set(
    Array.from(e.querySelectorAll("LNode")).filter(q).map((n) => D(n))
  );
  return (n) => t.has(D(n)) ? !0 : (t.add(D(n)), !1);
}
function Wo(e, t, n) {
  const i = am(e.ownerDocument), r = e.cloneNode(!0);
  return r.querySelectorAll("LNode").forEach((o) => {
    const a = o.getAttribute("iedName");
    if (a === "None") return;
    if (!a) {
      o.parentElement?.removeChild(o);
      return;
    }
    if (!n || !n[a]) {
      o.parentElement?.removeChild(o);
      return;
    }
    if (n[a] === "No") {
      o.parentElement?.removeChild(o);
      return;
    }
    if (o.setAttribute("iedName", n[a]), i(o)) {
      o.parentElement?.removeChild(o);
      return;
    }
    const l = e.ownerDocument.querySelector(
      `IED[name="${n[a]}"]`
    );
    if (!l || !Bo(l, o)) {
      o.parentElement?.removeChild(o);
      return;
    }
  }), r.querySelectorAll('Terminal:not([cNodeName="grounded"])').forEach((o) => o.parentElement?.removeChild(o)), r.querySelectorAll("ConnectivityNode").forEach((o) => o.parentElement?.removeChild(o)), r.setAttribute("name", t), r;
}
function ar(e, t) {
  const n = e.target?.parentElement;
  if (!n || !Array.from(n.querySelectorAll("mwc-select, wizard-textfield")).every((d) => d.checkValidity())) return;
  const r = n.querySelector("wizard-textfield"), o = Array.from(
    n.querySelectorAll("mwc-select")
  ), a = {};
  if (o.forEach((d) => {
    a[d.label] || (a[d.label] = d.value);
  }), !t.parentElement) return;
  const l = Wo(
    t,
    r.value,
    a
  );
  n.dispatchEvent(
    K({
      new: {
        parent: t.parentElement,
        element: l,
        reference: t.nextSibling
      }
    })
  );
}
function sm(e, t) {
  const n = e.getAttribute("name");
  return !t.some((i) => {
    const [r, o, a, l] = [
      "ldInst",
      "prefix",
      "lnClass",
      "lnInst"
    ].map((d) => i.getAttribute(d));
    return !Array.from(
      e.ownerDocument.querySelectorAll(
        `LNode[iedName="${n}"][ldInst="${r}"]`
      )
    ).filter(q).every(
      (d) => (d.getAttribute("prefix") ?? "") === (o ?? "") && (d.getAttribute("lnClass") ?? "") === (a ?? "") && (d.getAttribute("inst") ?? "") === (l ?? "")
    );
  });
}
function cm(e, t) {
  return t.some((n) => Bo(e, n));
}
function Go(e, t) {
  const n = Array.from(
    t.querySelectorAll(`LNode[iedName="${e.getAttribute("name")}"]`)
  );
  return Array.from(e.ownerDocument.querySelectorAll("IED")).filter(
    (i) => e !== i && cm(i, n) && sm(i, n)
  );
}
function Uo(e) {
  const t = Array.from(
    e.querySelectorAll('LNode:not([iedName="None"])')
  ).map(
    (n) => e.ownerDocument.querySelector(
      `IED[name="${n.getAttribute("iedName")}"]`
    )
  ).filter((n) => n).filter((n) => q(n));
  return new Set(t);
}
function Kn(e, t, n) {
  const i = C(e, t).map(
    (a) => a.getAttribute("name") ?? a.tagName
  );
  if (!i.length) return t + "01";
  const r = n ? n.match(/\d+$/)?.[0] : void 0;
  let o = "";
  for (let a = 0; a < i.length; a++) {
    if (!r) o = (n ?? t) + (a + 1);
    else {
      const l = (Number.parseInt(r, 10) + (a + 1)).toString().padStart(r.length, "0");
      o = n.replace(r, l);
    }
    if (!i.includes(o)) return o;
  }
  return o;
}
function vi(e) {
  const t = e.parentElement, n = e.tagName, i = e.getAttribute("name"), r = t && i ? Kn(t, n, i) : t ? Kn(t, n) : "", o = (t ? C(t, n) : []).map((a) => a.getAttribute("name")).filter((a) => a);
  return s` <mwc-dialog
    stacked
    heading="${c("substation.clone.redirect")}"
  >
    <wizard-textfield
      label="${c("substation.clone.newname")}"
      value="${r}"
      .reservedValues="${o}"
    ></wizard-textfield>
    ${Array.from(Uo(e)).map((a) => {
    const l = Go(a, e).map(
      (u) => u.getAttribute("name")
    ), d = ["no"].concat(l);
    return s`<mwc-select
        required
        fixedMenuPosition
        value="${d[0]}"
        label="${a.getAttribute("name")}"
        >${d.map(
      (u) => s`<mwc-list-item value="${u}"
            >${u}</mwc-list-item
          >`
    )}</mwc-select
      >`;
  })}
    <mwc-button
      slot="secondaryAction"
      dialogAction="close"
      label="${c("close")}"
      style="--mdc-theme-primary: var(--mdc-theme-error)"
    ></mwc-button>
    <mwc-button
      slot="primaryAction"
      dialogAction="close"
      label="${c("substation.clone.cloneclose")}"
      icon="content_copy"
      @click=${(a) => ar(a, e)}
    ></mwc-button>
    <mwc-button
      slot="primaryAction"
      label="${c("substation.clone.cloneproc")}"
      icon="content_copy"
      @click=${(a) => ar(a, e)}
    ></mwc-button>
  </mwc-dialog>`;
}
function lm(e) {
  return !Array.from(Uo(e)).every(
    (t) => !Go(t, e).length
  );
}
async function wi(e) {
  const t = e.element;
  if (lm(t))
    e.cloneUI = !0, await e.updateComplete, e.dialog.show();
  else {
    const n = e.element.parentElement, i = e.element.getAttribute("name") ?? void 0;
    if (!n) return;
    const r = Kn(
      n,
      e.element.tagName,
      i
    ), o = Wo(e.element, r);
    e.dispatchEvent(K({ new: { parent: n, element: o } }));
  }
}
function wt(e, t, n) {
  if (!e.element) return;
  e.classList.add("moving");
  const i = (r) => {
    if (r instanceof KeyboardEvent && r.key !== "Escape" && r.key !== " " && r.key !== "Enter" || (r.preventDefault(), r.stopImmediatePropagation(), e.classList.remove("moving"), window.removeEventListener("keydown", i, !0), window.removeEventListener("click", i, !0), r instanceof KeyboardEvent && r.key === "Escape")) return;
    const o = r.composedPath().find(
      (l) => l instanceof t || dm(l, n)
    );
    if (o === void 0 || o === e) return;
    const a = o instanceof t ? {
      parent: o.element.parentElement,
      reference: o.element
    } : { parent: o.element, reference: null };
    a.parent && (e.element.parentElement !== a.parent || e.element.nextElementSibling !== a.reference) && e.dispatchEvent(
      K({
        old: {
          element: e.element,
          parent: e.element.parentElement,
          reference: e.element.nextSibling
        },
        new: a
      })
    );
  };
  window.addEventListener("click", i, !0), window.addEventListener("keydown", i, !0);
}
function dm(e, t) {
  return t.find((i) => e instanceof i) !== void 0;
}
function sr(e) {
  return um[eo(e)] ?? Ho;
}
function $t(e, t, n) {
  const i = C(
    t,
    "GeneralEquipment"
  );
  return i.length ? s` <div
        class="${Ge({
    content: !0,
    actionicon: !n
  })}"
      >
        ${i.map(
    (r) => s`<general-equipment-editor
              .doc=${e}
              .element=${r}
              ?showfunctions=${n}
            ></general-equipment-editor>`
  )}
      </div>` : s``;
}
const um = {
  CBR: Vp,
  DIS: Pp,
  CTR: Rp,
  VTR: Mp,
  ERS: qp
}, pm = [
  ":root",
  "Substation",
  "VoltageLevel",
  "Bay",
  "ConductingEquipment"
], Ft = Object.fromEntries(
  pm.map((e, t, n) => [e, n.slice(0, t + 1).join(" > ")])
), je = G`
  abbr {
    text-decoration: none;
    border-bottom: none;
  }

  .ptrContent.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .content.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  #iedcontainer {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .container.lnode {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  mwc-dialog {
    display: flex;
    flex-direction: column;
  }

  mwc-dialog > * {
    display: block;
    margin-top: 16px;
  }

  powertransformer-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  general-equipment-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  .substation-editor-icon {
    width: 24px;
    height: 24px;
  }
`;
var mm = Object.defineProperty, hm = Object.getOwnPropertyDescriptor, ct = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? hm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && mm(t, n, r), r;
};
function fm(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let Te = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = _.EqSubFunction.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqSubFunctions() {
    const e = C(
      this.element,
      "EqSubFunction"
    );
    return s` ${e.map(
      (t) => s`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return fm(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${$t(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
Te.styles = G`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
ct([
  f({ attribute: !1 })
], Te.prototype, "doc", 2);
ct([
  f({ type: Number })
], Te.prototype, "editCount", 2);
ct([
  f({ attribute: !1 })
], Te.prototype, "element", 2);
ct([
  f({ type: Boolean })
], Te.prototype, "showfunctions", 2);
ct([
  L()
], Te.prototype, "header", 1);
ct([
  N("mwc-menu")
], Te.prototype, "addMenu", 2);
ct([
  N('mwc-icon-button[icon="playlist_add"]')
], Te.prototype, "addButton", 2);
Te = ct([
  H("eq-sub-function-editor")
], Te);
var bm = Object.defineProperty, gm = Object.getOwnPropertyDescriptor, lt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? gm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && bm(t, n, r), r;
};
function ym(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let Pe = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = _.EqFunction.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqSubFunctions() {
    const e = C(
      this.element,
      "EqSubFunction"
    );
    return s` ${e.map(
      (t) => s`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return ym(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${$t(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
Pe.styles = G`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
lt([
  f({ attribute: !1 })
], Pe.prototype, "doc", 2);
lt([
  f({ type: Number })
], Pe.prototype, "editCount", 2);
lt([
  f({ attribute: !1 })
], Pe.prototype, "element", 2);
lt([
  f({ type: Boolean })
], Pe.prototype, "showfunctions", 2);
lt([
  L()
], Pe.prototype, "header", 1);
lt([
  N("mwc-menu")
], Pe.prototype, "addMenu", 2);
lt([
  N('mwc-icon-button[icon="playlist_add"]')
], Pe.prototype, "addButton", 2);
Pe = lt([
  H("eq-function-editor")
], Pe);
var vm = Object.defineProperty, wm = Object.getOwnPropertyDescriptor, Ct = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? wm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && vm(t, n, r), r;
};
function Am(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let We = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  get label() {
    const e = `${this.element.hasAttribute("name") ? `${this.element.getAttribute("name")}` : ""}`, t = `${this.element.hasAttribute("desc") ? ` - ${this.element.getAttribute("desc")}` : ""}`, n = `${this.element.hasAttribute("phase") ? ` (${this.element.getAttribute("phase")})` : ""}`;
    return `${e}${t}${n}`;
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderAddButtons() {
    return Am(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    const e = C(this.element, "EqFunction");
    return e.length ? s` ${e.map(
      (t) => s`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
            ></eq-function-editor>`
    )}` : s``;
  }
  openEditWizard() {
    const e = _.SubEquipment.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  render() {
    return s`<action-pane label="${this.label}">
      <abbr slot="action" title="${c("edit")}">
        <mwc-icon-button icon="edit" @click=${() => this.openEditWizard()}>
        </mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>

      ${this.renderLNodes()} ${this.renderEqFunctions()}
    </action-pane> `;
  }
};
We.styles = G`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
Ct([
  f({ attribute: !1 })
], We.prototype, "doc", 2);
Ct([
  f({ type: Number })
], We.prototype, "editCount", 2);
Ct([
  f({ attribute: !1 })
], We.prototype, "element", 2);
Ct([
  f({ type: String })
], We.prototype, "label", 1);
Ct([
  N("mwc-menu")
], We.prototype, "addMenu", 2);
Ct([
  N('mwc-icon-button[icon="playlist_add"]')
], We.prototype, "addButton", 2);
We = Ct([
  H("sub-equipment-editor")
], We);
function Sm(e) {
  const t = e.textContent ?? "", [n, i, r, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((v) => e.getAttribute(v)), l = e.ownerDocument.querySelector(`:root > IED[name=${t}]`);
  if (!l) return null;
  const d = n ? `AccessPoint[name="${n}"]` : "``", u = i ? `LDevice[inst="${i}"]` : "", m = o ? o === "LLN0" ? "LN0" : `LN[lnClass="${o}"]` : "", h = r ? `[prefix="${r}"]` : "", b = a ? `[inst="${a}"]` : "", y = ` ${d} ${u} ${m}${h}${b}`;
  return l.querySelector(y);
}
function xm(e) {
  const t = [];
  e.forEach((r) => {
    const [o, a, l, d, u, m, h] = [
      "intAddr",
      "desc",
      "serviceType",
      "pServT",
      "pLN",
      "pDO",
      "pDA"
    ].map((b) => r.getAttribute(b));
    if (o) {
      const b = k(r.ownerDocument, "ExtRef", {
        intAddr: o,
        desc: a,
        serviceType: l,
        pServT: d,
        pLN: u,
        pDO: m,
        pDA: h
      });
      t.push({
        new: {
          element: b
        },
        old: {
          element: r
        }
      });
    } else
      t.push({
        old: {
          parent: r.parentElement,
          element: r,
          reference: r.nextElementSibling
        }
      });
  });
  const n = /* @__PURE__ */ new Set();
  e.forEach((r) => {
    Wr(r).forEach((o) => {
      const a = r.closest("IED")?.getAttribute("name"), l = r.closest("LDevice")?.getAttribute("inst"), d = r.closest("AccessPoint")?.getAttribute("name"), u = r.closest("LN0") || r.closest("LN"), [m, h, b] = ["prefix", "lnClass", "inst"].map(
        (v) => u?.getAttribute(v)
      );
      Array.from(o.getElementsByTagName("IEDName")).filter(
        (v) => v.textContent === a && (v.getAttribute("apRef") || d) === d && (v.getAttribute("ldInst") || l) === l && (v.getAttribute("prefix") || m) === m && (v.getAttribute("lnClass") || h) === h && (v.getAttribute("lnInst") || b) === b
      ).forEach((v) => {
        n.add(v);
      });
    });
  });
  const i = /* @__PURE__ */ new Set();
  return n.forEach((r) => {
    i.clear();
    const o = Sm(r);
    o && Ko(o).forEach(
      (a) => i.add(a)
    ), e.forEach((a) => i.delete(a)), i.size === 0 && t.push({
      old: {
        parent: r.parentElement,
        element: r,
        reference: r.nextElementSibling
      }
    });
  }), t;
}
function $m(e) {
  return (t, n, i) => {
    const r = i.index, o = Array.from(r).map((l) => e[l]), a = [];
    return xm(o).forEach((l) => a.push(l)), a;
  };
}
function Cm(e, t, n) {
  if (!t) return;
  const i = e[0].closest("IED")?.getAttribute("name");
  return [
    {
      title: D(t) + " - " + i,
      primary: {
        icon: "delete",
        label: c("disconnect"),
        action: $m(e)
      },
      secondary: {
        icon: "",
        label: c("back"),
        action: jo(n)
      },
      content: [
        s`<filtered-list multi
          >${e.map((o) => {
          const a = (o.getAttribute("prefix") ?? "") + o.getAttribute("lnClass") + (o.getAttribute("lnInst") ?? "") + ">" + o.getAttribute("doName") + "." + (o.getAttribute("daName") ?? "");
          return s`<mwc-check-list-item graphic="icon" twoline>
              <span>${a}</span>
              <span slot="secondary"
                >${o.getAttribute("ldInst") ?? ""}</span
              >
              <mwc-icon slot="graphic">${kp}</mwc-icon>
            </mwc-check-list-item> `;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function jo(e) {
  return () => [() => Zo(e)];
}
function Em(e) {
  return e instanceof Element && e.tagName === "IED" ? Array.from(e.ownerDocument.getElementsByTagName("ClientLN")).filter(q).filter(
    (t) => t.getAttribute("iedName") === e.getAttribute("name") || t.closest("IED") === e
  ) : Array.from(e.getElementsByTagName("ClientLN")).filter(q);
}
function Ko(e) {
  return e instanceof Element && e.tagName === "IED" ? Array.from(e.ownerDocument.getElementsByTagName("ExtRef")).filter(q).filter(
    (t) => t.getAttribute("iedName") === e.getAttribute("name") || t.closest("IED") === e && t.getAttribute("iedName")
  ) : Array.from(e.getElementsByTagName("ExtRef")).filter(q).filter((t) => t.getAttribute("iedName"));
}
function Zo(e) {
  const t = e instanceof XMLDocument ? e : e.ownerDocument, n = /* @__PURE__ */ new Map(), i = Ko(e);
  return Em(e).forEach((o) => {
    const a = o.parentElement.parentElement, l = o.getAttribute("iedName"), d = D(a) + " | " + a.tagName + " | " + l;
    n.has(d) || n.set(d, []), n.get(d)?.push(o);
  }), i.forEach((o) => {
    const a = o.closest("IED")?.getAttribute("name") ?? "";
    Wr(o).forEach((d) => {
      const u = D(d) + " | " + d.tagName + " | " + a;
      n.has(u) || n.set(u, []), n.get(u)?.push(o);
    });
  }), [
    {
      title: c("commmap.title"),
      content: [
        s`<filtered-list
          >${Array.from(n.keys()).map((o) => {
          const a = n.get(o), [l, d, u] = o.split(" | "), m = Q(t, d, l), [h, b, y] = l.match(/^(.+)>>(.*)$/);
          return s`<mwc-list-item
              twoline
              graphic="icon"
              hasMeta
              @click="${(v) => {
            v.target.dispatchEvent(
              E(
                d === "ReportControl" ? km(a, e) : Cm(a, m, e)
              )
            ), v.target.dispatchEvent(E());
          }}"
            >
              <span
                >${b}
                <mwc-icon style="--mdc-icon-size: 1em;">trending_flat</mwc-icon>
                ${u}</span
              >
              <span slot="secondary">${y}</span>
              <span slot="meta" style="padding-left: 10px"
                >${n.get(o).length}</span
              >
              <mwc-icon slot="graphic">${_p[d]}</mwc-icon>
            </mwc-list-item>`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function $n(e) {
  return typeof e != "string" ? "" : oe(e)[0] ?? "";
}
function yt(e) {
  return typeof e != "string" ? "" : oe(e)[1] ?? "";
}
function Xo(e, t) {
  if (t.split(">").length === 4)
    return Q(e, "LN", t);
  if (t.split(">").length === 3) {
    if (yt(t).split(" ").length > 1)
      return Q(e, "LN", t);
    if (yt(t).split(" ").length === 1)
      return Q(e, "LN0", t);
  }
  return null;
}
function Nm(e, t) {
  for (const n of Array.from(e.getElementsByTagName("ClientLN"))) {
    const [i, r, o, a, l, d] = [
      "iedName",
      "apRef",
      "ldInst",
      "prefix",
      "lnClass",
      "lnInst"
    ].map((y) => n.getAttribute(y)), u = Xo(e.ownerDocument, t);
    if (!u) break;
    const m = u.closest("IED"), h = u.closest("AccessPoint"), b = u.closest("LDevice");
    if (t.split(">").length === 4 && i === m?.getAttribute("name") && r === h?.getAttribute("name") && o === b?.getAttribute("inst") && (a ?? "") === (u.getAttribute("prefix") ?? "") && l === u.getAttribute("lnClass") && (d ?? "") === (u.getAttribute("inst") ?? ""))
      return !0;
    if (t.split(">").length === 3) {
      if (yt(t).split(" ").length > 1) {
        const y = m?.querySelectorAll("AccessPoint").length;
        if (i === m?.getAttribute("name") && y && (y <= 1 || r === h?.getAttribute("name")) && (a ?? "") === (u.getAttribute("prefix") ?? "") && l === u.getAttribute("lnClass") && (d ?? "") === (u.getAttribute("inst") ?? ""))
          return !0;
      }
      if (yt(t).split(" ").length === 1 && i === m?.getAttribute("name") && r === h?.getAttribute("name") && o === b?.getAttribute("inst") && l === u.getAttribute("lnClass"))
        return !0;
    }
  }
  return !1;
}
function Im(e) {
  return (t, n) => {
    const i = n.shadowRoot.querySelector("#sourcelist").selected, r = n.shadowRoot.querySelector("#sinklist").selected, o = [];
    return r.forEach((a) => {
      const l = a.value;
      i.map((u) => u.value).map((u) => Q(e, "ReportControl", u)).filter((u) => u !== null).forEach((u) => {
        if (u.querySelector("RptEnabled") === null) {
          const h = k(e, "RptEnabled", {
            max: "1"
          });
          u.appendChild(h);
        }
        const m = Xo(e, l);
        if (u.querySelector("RptEnabled") !== null && !Nm(u, l) && m) {
          const h = k(e, "ClientLN", {
            iedName: m?.closest("IED")?.getAttribute("name") ?? null,
            apRef: m?.closest("AccessPoint")?.getAttribute("name") ?? null,
            ldInst: m?.closest("LDevice")?.getAttribute("inst") ?? "LD0",
            //ldInst is required and with Ed2 'LD0' for client ln's
            prefix: m?.getAttribute("prefix") ?? "",
            //OpenSCD empty string over null
            lnClass: m?.getAttribute("lnClass") ?? "",
            lnInst: m?.getAttribute("inst") ?? ""
            //OpenSCD empty string over null
          });
          o.push({
            new: {
              parent: u.querySelector("RptEnabled"),
              element: h
            }
          });
        }
      });
    }), o;
  };
}
function Dm(e, t) {
  const n = e.flatMap((a) => Array.from(a.getElementsByTagName("ReportControl")).map(
    (l) => ({
      identity: D(l),
      numberClientLNs: Array.from(l.getElementsByTagName("ClientLN")).length,
      max: Number(l.querySelector("RptEnabled")?.getAttribute("max"))
    })
  )), i = Array.from(
    t.querySelectorAll(":root > IED > AccessPoint > LN")
  ), r = Array.from(
    t.querySelectorAll(
      ":root > IED > AccessPoint > Server > LDevice > LN"
    )
  ), o = Array.from(
    t.querySelectorAll(
      ":root > IED > AccessPoint > Server > LDevice > LN0"
    )
  );
  return [
    {
      title: c("commmap.connectToIED", {
        iedName: t.getAttribute("name") ?? ""
      }),
      primary: {
        label: c("connect"),
        icon: "",
        action: Im(t.ownerDocument)
      },
      content: [
        s`<div
          class="wrapper"
          style="display: grid; grid-template-columns: 1fr 1fr;"
        >
          <filtered-list
            id="sourcelist"
            multi
            searchFieldLabel="${c("scl.Report")}"
            >${n.sort((a, l) => l.numberClientLNs - a.numberClientLNs).map(
          (a) => s`<mwc-check-list-item
                    left
                    hasMeta
                    twoline
                    value="${a.identity}"
                    ?disabled=${a.numberClientLNs >= a.max}
                    ><span>${yt(a.identity)}</span
                    ><span slot="secondary">${$n(a.identity)}</span
                    ><span slot="meta"
                      >${a.max ? a.numberClientLNs + "/" + a.max : a.numberClientLNs}</span
                    ></mwc-check-list-item
                  >`
        )}</filtered-list
          ><filtered-list
            multi
            id="sinklist"
            activatable
            searchFieldLabel="${c("scl.LN")}"
            >${i.map(
          (a) => s`<mwc-check-list-item twoline value="${D(a)}">
                  <span>${yt(D(a))}</span>
                  <span slot="secondary">${$n(D(a))}</span>
                </mwc-check-list-item>`
        )}
            <li divider role="separator"></li>
            ${r.map(
          (a) => s`<mwc-check-list-item twoline value="${D(a)}">
                  <span>${yt(D(a))}</span>
                  <span slot="secondary">${$n(D(a))}</span>
                </mwc-check-list-item>`
        )}
            ${o.map(
          (a) => s`<mwc-check-list-item twoline value="${D(a)}">
                  <span>LLN0</span>
                  <span slot="secondary">${D(a)}</span>
                </mwc-check-list-item>`
        )}</filtered-list
          >
        </div>`
      ]
    }
  ];
}
function _m(e) {
  return (t, n, i) => {
    const r = i.index, o = Array.from(r).map((l) => e[l]), a = [];
    return o.forEach((l) => {
      a.push({
        old: {
          parent: l.parentElement,
          element: l,
          reference: l.nextElementSibling
        }
      });
    }), a;
  };
}
function km(e, t) {
  const n = e[0].closest("ReportControl"), i = D(n), r = e[0].getAttribute("iedName");
  return [
    {
      title: i + " - " + r,
      primary: {
        icon: "delete",
        label: c("disconnect"),
        action: _m(e)
      },
      secondary: {
        icon: "",
        label: c("back"),
        action: jo(t)
      },
      content: [
        s`<filtered-list multi
          >${e.map((o) => {
          const a = (o.getAttribute("prefix") ?? "") + o.getAttribute("lnClass") + (o.getAttribute("lnInst") ?? "");
          return s`<mwc-check-list-item graphic="icon">
              <span>${a}</span>
              <mwc-icon slot="graphic">${zp}</mwc-icon>
            </mwc-check-list-item> `;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function Cn(e) {
  if (["LDevice", "Server"].includes(e.tagName))
    return Array.from(e.children).filter(
      (n) => n.tagName === "LDevice" || n.tagName === "LN0" || n.tagName === "LN"
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type");
  return Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  );
}
function Qo(e, t) {
  const [n, i, r, o, a, l, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc"
  ].map((R) => e.getAttribute(R));
  if (!t.querySelector(`LDevice[inst="${n}"]`)) return !1;
  const m = i ? [`[prefix="${i}"]`] : ['[prefix=""]', ":not([prefix])"], h = o ? [`[inst="${o}"]`] : ['[inst=""]', ":not([inst])"], b = ie(
    ["LN0", "LN"],
    m,
    [`[lnClass="${r}"]`],
    h
  ).map((R) => R.join("")).join(","), y = t.querySelector(b);
  if (!y) return !1;
  const v = a?.split(".");
  if (!v) return !1;
  let S = y;
  for (const R of v)
    if (S = Cn(S).find(
      (Y) => Y.getAttribute("name") === R
    ), !S) return !1;
  const I = l?.split("."), w = Cn(S).some(
    (R) => R.getAttribute("fc") === d
  );
  if (!I && w) return !0;
  if (!I) return !1;
  let V = "";
  for (const R of I)
    if (S = Cn(S).find(
      (Y) => Y.getAttribute("name") === R
    ), S?.getAttribute("fc") && (V = S.getAttribute("fc")), !S) return !1;
  return V === d;
}
function Yo(e) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      pattern="${De.asciName}"
      maxLength="${mn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="buffered"
      .maybeValue=${e.buffered}
      helper="${c("scl.buffered")}"
    ></wizard-checkbox>`,
    s`<wizard-textfield
      label="rptID"
      .maybeValue=${e.rptID}
      nullable
      required
      helper="${c("report.rptID")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="indexed"
      .maybeValue=${e.indexed}
      nullable
      helper="${c("scl.indexed")}"
    ></wizard-checkbox>`,
    s`<wizard-textfield
      label="max Clients"
      .maybeValue=${e.max}
      helper="${c("scl.maxReport")}"
      nullable
      type="number"
      suffix="#"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="bufTime"
      .maybeValue=${e.bufTime}
      helper="${c("scl.bufTime")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="intgPd"
      .maybeValue=${e.intgPd}
      helper="${c("scl.intgPd")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`
  ];
}
function zm(e) {
  return (t, n) => {
    const i = {};
    [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ].forEach((W) => {
      i[W] = g(t.find((le) => le.label === W));
    }), i.confRev = "1";
    const o = i.name + "sDataSet";
    i.datSet = o;
    const a = k(
      e.ownerDocument,
      "ReportControl",
      i
    ), l = {};
    [
      "seqNum",
      "timeStamp",
      "dataSet",
      "reasonCode",
      "dataRef",
      "entryID",
      "configRef",
      "bufOvfl"
    ].forEach((W) => {
      l[W] = g(t.find((le) => le.label === W));
    });
    const u = k(
      e.ownerDocument,
      "OptFields",
      l
    ), m = {};
    ["dchg", "qchg", "dupd", "period", "gi"].forEach((W) => {
      m[W] = g(t.find((le) => le.label === W));
    });
    const b = k(e.ownerDocument, "TrgOps", m), y = g(t.find((W) => W.label === "max Clients")), v = y ? k(e.ownerDocument, "RptEnabled", {
      max: y
    }) : null;
    a.appendChild(b), a.appendChild(u), v && a.appendChild(v);
    const S = k(e.ownerDocument, "DataSet", {
      name: o
    }), w = n.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const W of w) {
      const le = pn(e, W);
      le && S.appendChild(le);
    }
    const V = i.name, R = e.closest("IED").getAttribute("name");
    return [{
      title: c("controlblock.action.add", {
        type: "Report",
        name: V,
        iedName: R
      }),
      actions: [
        { new: { parent: e, element: a } },
        { new: { parent: e, element: S } }
      ]
    }];
  };
}
function Jo(e) {
  const t = e.closest("Server"), n = ln(e, "ReportControl");
  return [
    {
      title: c("wizard.title.add", { tagName: "ReportControl" }),
      content: Yo({
        name: n,
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
      title: c("scl.TrgOps"),
      content: Ao({ dchg: "true", qchg: "true", dupd: "true", period: "true", gi: "false" })
    },
    {
      title: c("scl.OptFields"),
      content: co({
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
      title: c("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: c("save"),
        action: zm(e)
      },
      content: [t ? an(t) : s``]
    }
  ];
}
function Lm(e) {
  return (t, n) => {
    const r = n.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const l = Q(e, o, a);
    if (!l) return [];
    const d = l.querySelector("LN0");
    return d ? [() => Jo(d)] : [];
  };
}
function Tm(e) {
  return [
    {
      title: c("report.wizard.location"),
      primary: {
        icon: "",
        label: c("next"),
        action: Lm(e)
      },
      content: [ui(e)]
    }
  ];
}
function Pm(e) {
  return () => e.tagName === "IED" && e.querySelector("LN0") ? [() => Jo(e.querySelector("LN0"))] : [() => Tm(e.ownerDocument)];
}
function Vm(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), n = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (a) => a.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, i = [];
  i.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && n && i.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  });
  const r = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: c("controlblock.action.remove", { type: "Report", name: r, iedName: o }),
    actions: i
  };
}
function Rm(e, t, n) {
  if (e === null) {
    const r = k(n.ownerDocument, "RptEnabled", {
      max: t
    });
    return {
      new: {
        parent: n,
        element: r,
        reference: Dc(n, "RptEnabled")
      }
    };
  }
  const i = F(e, { max: t });
  return {
    old: { element: e },
    new: { element: i }
  };
}
function Mm(e) {
  return (t, n) => {
    const i = e.ownerDocument, r = n.shadowRoot?.querySelector("filtered-list")?.selected, o = [];
    return r.forEach((a) => {
      const l = Q(i, "IED", a.value);
      if (!l) return;
      const d = l.querySelector("LN0");
      if (!d) return [];
      const u = e.parentElement?.querySelector(
        `DataSet[name="${e.getAttribute("datSet")}"]`
      );
      if (u && d.querySelector(
        `DataSet[name="${u.getAttribute("name")}"]`
      ))
        return [];
      if (d.querySelector(
        `ReportControl[name="${e.getAttribute("name")}"]`
      ))
        return [];
      const m = u?.cloneNode(!0);
      if (Array.from(m.querySelectorAll("FCDA")).forEach((v) => {
        Qo(v, l) || m.removeChild(v);
      }), m.children.length === 0) return [];
      const h = e.cloneNode(!0), b = e.closest("IED")?.getAttribute("name"), y = l.getAttribute("name");
      o.push({
        title: `ReportControl copied from ${b} to ${y}`,
        actions: [
          { new: { parent: d, element: m } },
          { new: { parent: d, element: h } }
        ]
      });
    }), o;
  };
}
function qm(e, t) {
  const n = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = e.closest("IED")?.getAttribute("name") === t.getAttribute("name"), r = t.querySelector("AccessPoint > Server > LDevice > LN0"), o = !!r?.querySelector(
    `ReportControl[name="${e.getAttribute("name")}"]`
  ), a = !!r?.querySelector(
    `DataSet[name="${n?.getAttribute("name")}"]`
  ), l = n?.cloneNode(!0);
  Array.from(l.querySelectorAll("FCDA")).forEach((h) => {
    Qo(h, t) || l.removeChild(h);
  });
  const d = l.children.length > 0, u = t.getAttribute("name");
  let m = "";
  return i ? m = c("controlblock.hints.source") : r ? a && !i ? m = c("controlblock.hints.exist", {
    type: "RerportControl",
    name: e.getAttribute("name")
  }) : o && !i ? m = c("controlblock.hints.exist", {
    type: "DataSet",
    name: e.getAttribute("name")
  }) : d ? m = c("controlBlock.hints.valid") : m = c("controlblock.hints.noMatchingData") : m = c("controlblock.hints.missingServer"), s`<mwc-check-list-item
    twoline
    value="${D(t)}"
    ?disabled=${i || !r || o || a || !d}
    ><span>${u}</span
    ><span slot="secondary">${m}</span></mwc-check-list-item
  >`;
}
function Om(e) {
  return [
    {
      title: c("report.wizard.location"),
      primary: {
        icon: "save",
        label: c("save"),
        action: Mm(e)
      },
      content: [
        s`<filtered-list multi
          >${Array.from(e.ownerDocument.querySelectorAll("IED")).map(
          (t) => qm(e, t)
        )}</filtered-list
        >`
      ]
    }
  ];
}
function Fm(e) {
  return (t) => {
    t.dispatchEvent(
      be(() => Om(e))
    );
  };
}
function Hm(e) {
  return (t) => {
    const n = Vm(e);
    n && t.dispatchEvent(K(n)), t.dispatchEvent(E());
  };
}
function Bm(e) {
  return (t) => {
    t.dispatchEvent(be(() => mi(e)));
  };
}
function Wm(e) {
  return (t) => {
    t.dispatchEvent(be(() => So(e)));
  };
}
function Gm(e) {
  return (t) => {
    t.dispatchEvent(be(() => lo(e)));
  };
}
function Um(e) {
  return (t) => {
    const n = {}, i = [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ];
    i.forEach((h) => {
      n[h] = g(t.find((b) => b.label === h));
    });
    let r = null;
    if (i.some((h) => n[h] !== e.getAttribute(h))) {
      const h = F(e, n);
      r = {
        old: { element: e },
        new: { element: h }
      };
    }
    const o = g(t.find((h) => h.label === "max Clients"));
    let a = null;
    o !== (e.querySelector("RptEnabled")?.getAttribute("max") ?? null) && (a = Rm(
      e.querySelector("RptEnabled"),
      o,
      e
    ));
    const l = [];
    r && l.push(r), a && l.push(a);
    const d = n.name, u = e.closest("IED").getAttribute("name"), m = {
      title: c("controlblock.action.edit", {
        type: "Report",
        name: d,
        iedName: u
      }),
      actions: l
    };
    return l.length ? [m] : [];
  };
}
function jm(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("buffered"), r = e.getAttribute("rptID"), o = e.getAttribute("indexed"), a = e.querySelector("RptEnabled")?.getAttribute("max") ?? null, l = e.getAttribute("bufTime"), d = e.getAttribute("intgPd"), u = e.querySelector("TrgOps"), m = e.querySelector("OptFields"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: c("remove"),
    action: Hm(e)
  }), h && b.push({
    icon: "edit",
    label: c("scl.DataSet"),
    action: Bm(h)
  }), u && b.push({
    icon: "edit",
    label: c("scl.TrgOps"),
    action: Wm(u)
  }), m && b.push({
    icon: "edit",
    label: c("scl.OptFields"),
    action: Gm(m)
  }), b.push({
    icon: "copy",
    label: c("controlblock.label.copy"),
    action: Fm(e)
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Um(e)
      },
      menuActions: b,
      content: [
        ...Yo({
          name: t,
          desc: n,
          buffered: i,
          rptID: r,
          indexed: o,
          max: a,
          bufTime: l,
          intgPd: d
        })
      ]
    }
  ];
}
function ea(e) {
  const t = Array.from(
    e.querySelectorAll("ReportControl")
  ).filter(q), n = e.querySelector("LN0") ? {
    icon: "add",
    label: c("Report"),
    action: Pm(e)
  } : void 0;
  return [
    {
      title: c("wizard.title.select", { tagName: "ReportControl" }),
      primary: n,
      content: [
        s`<filtered-list
          @selected=${(i) => {
          const r = i.target.selected.value, o = Q(e, "ReportControl", r);
          o && i.target?.dispatchEvent(
            be(() => jm(o))
          );
        }}
          >${t.map(
          (i) => s`<mwc-list-item twoline value="${D(i)}"
                ><span>${i.getAttribute("name")}</span
                ><span slot="secondary"
                  >${D(i)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
var Km = Object.defineProperty, Zm = Object.getOwnPropertyDescriptor, Lt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Zm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Km(t, n, r), r;
};
let At = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "UNDEFINED";
  }
  openEditWizard() {
    const e = _.IED.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openReportControlSelection() {
    this.dispatchEvent(
      E(() => ea(this.element))
    );
  }
  openGseControlSelection() {
    this.dispatchEvent(
      E(() => ko(this.element))
    );
  }
  openSmvControlSelection() {
    this.dispatchEvent(
      E(() => Po(this.element))
    );
  }
  openCommunicationMapping() {
    const e = Array.from(
      this.element.closest("SCL")?.querySelectorAll("IED") ?? []
    ), t = Dm(e, this.element);
    t && this.dispatchEvent(E(t));
  }
  removeIED() {
    const e = wo(this.element);
    e ? this.dispatchEvent(E(() => e)) : this.dispatchEvent(
      K({
        old: { parent: this.element.parentElement, element: this.element }
      })
    );
  }
  render() {
    return s`<action-icon label="${this.name}" icon="developer_board">
      <mwc-fab
        slot="action"
        class="edit"
        mini
        @click="${() => this.openEditWizard()}"
        icon="edit"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        class="delete"
        mini
        @click="${() => this.removeIED()}"
        icon="delete"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        class="selectreport"
        mini
        @click="${() => this.openReportControlSelection()}"
        ><mwc-icon slot="icon">${gi}</mwc-icon></mwc-fab
      ><mwc-fab
        slot="action"
        class="selectsmv"
        mini
        @click="${() => this.openSmvControlSelection()}"
        ><mwc-icon slot="icon">${yi}</mwc-icon></mwc-fab
      ><mwc-fab
        slot="action"
        class="connectreport"
        mini
        @click="${() => this.openCommunicationMapping()}"
        icon="add_link"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        class="selectgse"
        mini
        @click="${() => this.openGseControlSelection()}"
        ><mwc-icon slot="icon">${bi}</mwc-icon></mwc-fab
      ></action-icon
    > `;
  }
};
Lt([
  f({ attribute: !1 })
], At.prototype, "doc", 2);
Lt([
  f({ type: Number })
], At.prototype, "editCount", 2);
Lt([
  f({ attribute: !1 })
], At.prototype, "element", 2);
Lt([
  f({ type: String })
], At.prototype, "name", 1);
Lt([
  N(".connectreport")
], At.prototype, "connectReport", 2);
At = Lt([
  H("ied-editor")
], At);
var Xm = Object.defineProperty, Qm = Object.getOwnPropertyDescriptor, dt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Qm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Xm(t, n, r), r;
};
function Ym(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let Ve = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `—${t}` : ""}`;
  }
  openEditWizard() {
    const e = _.TapChanger.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "EqFunction");
    return s` ${e.map(
      (t) => s`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return s``;
    const e = C(
      this.element,
      "SubEquipment"
    );
    return s` ${e.map(
      (t) => s`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return Ym(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label=${this.header}>
      <abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderSubEquipments()}
    </action-pane>`;
  }
};
Ve.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
dt([
  f({ attribute: !1 })
], Ve.prototype, "doc", 2);
dt([
  f({ type: Number })
], Ve.prototype, "editCount", 2);
dt([
  f({ attribute: !1 })
], Ve.prototype, "element", 2);
dt([
  f({ type: Boolean })
], Ve.prototype, "showfunctions", 2);
dt([
  L()
], Ve.prototype, "header", 1);
dt([
  N("mwc-menu")
], Ve.prototype, "addMenu", 2);
dt([
  N('mwc-icon-button[icon="playlist_add"]')
], Ve.prototype, "addButton", 2);
Ve = dt([
  H("tapchanger-editor")
], Ve);
var Jm = Object.defineProperty, eh = Object.getOwnPropertyDescriptor, ut = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? eh(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Jm(t, n, r), r;
};
function th(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let Re = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get label() {
    const e = `${this.element.hasAttribute("name") ? `${this.element.getAttribute("name")}` : ""}`, t = `${this.element.hasAttribute("desc") ? ` - ${this.element.getAttribute("desc")}` : ""}`;
    return `${e}${t}`;
  }
  openEditWizard() {
    const e = _.TransformerWinding.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "EqFunction");
    return e.length ? s` ${e.map(
      (t) => s`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              ?showfunctions=${this.showfunctions}
            ></eq-function-editor>`
    )}` : s``;
  }
  renderTapChanger() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "TapChanger");
    return e.length ? s` ${e.map(
      (t) => s`<tapchanger-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              ?showfunctions=${this.showfunctions}
            ></tapchanger-editor>`
    )}` : s``;
  }
  renderAddButtons() {
    return th(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label="${this.label}">
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${Bp}</mwc-icon
      >
      <abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderTapChanger()}
    </action-pane> `;
  }
};
Re.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
ut([
  f({ attribute: !1 })
], Re.prototype, "doc", 2);
ut([
  f({ type: Number })
], Re.prototype, "editCount", 2);
ut([
  f({ attribute: !1 })
], Re.prototype, "element", 2);
ut([
  f({ type: Boolean })
], Re.prototype, "showfunctions", 2);
ut([
  f({ type: String })
], Re.prototype, "label", 1);
ut([
  N("mwc-menu")
], Re.prototype, "addMenu", 2);
ut([
  N('mwc-icon-button[icon="playlist_add"]')
], Re.prototype, "addButton", 2);
Re = ut([
  H("transformer-winding-editor")
], Re);
var nh = Object.defineProperty, ih = Object.getOwnPropertyDescriptor, Ae = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? ih(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && nh(t, n, r), r;
};
function rh(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let J = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get voltage() {
    const e = this.element.querySelector(Ft.VoltageLevel + " > Voltage");
    if (e === null) return null;
    const t = e.textContent ?? "", n = e.getAttribute("multiplier"), i = n === null ? "V" : " " + n + "V";
    return t ? t + i : null;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `- ${t}` : ""}
    ${this.voltage === null ? "" : `(${this.voltage})`}`;
  }
  openEditWizard() {
    const e = _.VoltageLevel.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const e = _.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? vi(this.element) : s``;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "Function");
    return s` ${e.map(
      (t) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const e = this.getAttachedIeds?.(this.element) ?? [];
    return e?.length ? s`<div id="iedcontainer">
          ${e.map(
      (t) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderPowerTransformerContainer() {
    const e = Array.from(
      this.element?.querySelectorAll(
        Ft.VoltageLevel + " > PowerTransformer"
      ) ?? []
    );
    return e?.length ? s`<div
          class="${Ge({
      ptrContent: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${e.map(
      (t) => s`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return rh(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${Lp}</mwc-icon
        >
        <abbr slot="action" title="${c("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click=${() => this.openLNodeWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => wi(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => wt(this, J, [ee])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${c("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${$t(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        ${this.renderPowerTransformerContainer()}
        <div id="bayContainer">
          ${Array.from(this.element?.querySelectorAll(Ft.Bay) ?? []).map(
      (e) => s`<bay-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
              .getAttachedIeds=${this.getAttachedIeds}
              ?readonly=${this.readonly}
              ?showfunctions=${this.showfunctions}
            ></bay-editor>`
    )}
        </div>
      </action-pane>`;
  }
};
J.styles = G`
    ${je}

    #bayContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #bayContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
Ae([
  f({ attribute: !1 })
], J.prototype, "doc", 2);
Ae([
  f({ type: Number })
], J.prototype, "editCount", 2);
Ae([
  f({ attribute: !1 })
], J.prototype, "element", 2);
Ae([
  f({ type: Boolean })
], J.prototype, "readonly", 2);
Ae([
  f({ type: Boolean })
], J.prototype, "showfunctions", 2);
Ae([
  f()
], J.prototype, "voltage", 1);
Ae([
  f({ type: String })
], J.prototype, "header", 1);
Ae([
  f({ attribute: !1 })
], J.prototype, "getAttachedIeds", 2);
Ae([
  L()
], J.prototype, "cloneUI", 2);
Ae([
  N("mwc-dialog")
], J.prototype, "dialog", 2);
Ae([
  N("mwc-menu")
], J.prototype, "addMenu", 2);
Ae([
  N('mwc-icon-button[icon="playlist_add"]')
], J.prototype, "addButton", 2);
J = Ae([
  H("voltage-level-editor")
], J);
var oh = Object.defineProperty, ah = Object.getOwnPropertyDescriptor, Ce = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? ah(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && oh(t, n, r), r;
};
function sh(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let ee = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `- ${t}` : ""}`;
  }
  /** Opens a [[`WizardDialog`]] for editing [[`element`]]. */
  openEditWizard() {
    const e = _.Substation.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const e = _.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Deletes [[`element`]]. */
  remove() {
    this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? vi(this.element) : s``;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "Function");
    return s` ${e.map(
      (t) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const e = this.getAttachedIeds?.(this.element) ?? [];
    return e?.length ? s`<div id="iedcontainer">
          ${e.map(
      (t) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderPowerTransformerContainer() {
    const e = Array.from(
      this.element?.querySelectorAll(
        Ft.Substation + " > PowerTransformer"
      ) ?? []
    );
    return e?.length ? s`<div
          class="${Ge({
      ptrContent: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${e.map(
      (t) => s`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return sh(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${Op}</mwc-icon
        >
        <abbr slot="action" title="${c("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click=${() => this.openLNodeWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => wi(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => wt(this, ee, [ee])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button
        ></abbr>
        <abbr slot="action" style="position:relative;" title="${c("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${$t(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        ${this.renderPowerTransformerContainer()}
        ${Array.from(this.element.querySelectorAll(Ft.VoltageLevel)).map(
      (e) => s`<voltage-level-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
              .getAttachedIeds=${this.getAttachedIeds}
              ?readonly=${this.readonly}
              ?showfunctions=${this.showfunctions}
            ></voltage-level-editor>`
    )}</action-pane
      >`;
  }
};
ee.styles = G`
    ${je}
  `;
Ce([
  f({ attribute: !1 })
], ee.prototype, "doc", 2);
Ce([
  f({ type: Number })
], ee.prototype, "editCount", 2);
Ce([
  f({ attribute: !1 })
], ee.prototype, "element", 2);
Ce([
  f({ type: Boolean })
], ee.prototype, "readonly", 2);
Ce([
  f({ type: Boolean })
], ee.prototype, "showfunctions", 2);
Ce([
  f({ type: String })
], ee.prototype, "header", 1);
Ce([
  f({ attribute: !1 })
], ee.prototype, "getAttachedIeds", 2);
Ce([
  L()
], ee.prototype, "cloneUI", 2);
Ce([
  N("mwc-dialog")
], ee.prototype, "dialog", 2);
Ce([
  N("mwc-menu")
], ee.prototype, "addMenu", 2);
Ce([
  N('mwc-icon-button[icon="playlist_add"]')
], ee.prototype, "addButton", 2);
ee = Ce([
  H("substation-editor")
], ee);
var ch = Object.defineProperty, lh = Object.getOwnPropertyDescriptor, pt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? lh(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && ch(t, n, r), r;
};
function dh(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let Se = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "UNDEFINED";
  }
  openEditWizard() {
    const e = _.PowerTransformer.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openLNodeWizard() {
    const e = _.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  removeElement() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "EqFunction");
    return s` ${e.map(
      (t) => s`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return s``;
    const e = C(
      this.element,
      "SubEquipment"
    );
    return s` ${e.map(
      (t) => s`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return dh(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  renderContentPane() {
    return s`<mwc-icon class="substation-editor-icon" slot="icon"
        >${rr}</mwc-icon
      >
      <abbr slot="action" title="${c("lnode.tooltip")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => this.openLNodeWizard()}"
          icon="account_tree"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}}"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("move")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => {
      wt(this, Se, [
        ee,
        J,
        te
      ]);
    }}"
          icon="forward"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="delete"
          @click="${() => this.removeElement()}}"
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>`;
  }
  renderTransformerWinding() {
    if (!this.showfunctions) return s``;
    const e = C(
      this.element,
      "TransformerWinding"
    );
    return e.length ? s`<div class="container">
          ${e.map(
      (t) => s`<transformer-winding-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?showfunctions=${this.showfunctions}
              ></transformer-winding-editor>`
    )}
        </div>` : s``;
  }
  renderContentIcon() {
    return s`<mwc-icon slot="icon"
        >${rr}</mwc-icon
      >
      <mwc-fab
        slot="action"
        class="edit"
        mini
        @click="${() => this.openEditWizard()}"
        icon="edit"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.removeElement()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        @click="${() => {
      wt(this, Se, [
        ee,
        J,
        te
      ]);
    }}"
        icon="forward"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        @click="${() => this.openLNodeWizard()}"
        icon="account_tree"
      ></mwc-fab>`;
  }
  render() {
    return this.showfunctions ? s`<action-pane label="${this.name}">
        ${this.renderContentPane()} ${this.renderLNodes()}
        ${this.renderEqFunctions()} ${this.renderSubEquipments()}
        ${this.renderTransformerWinding()}
      </action-pane> ` : s`<action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    > `;
  }
};
Se.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
pt([
  f({ attribute: !1 })
], Se.prototype, "doc", 2);
pt([
  f({ type: Number })
], Se.prototype, "editCount", 2);
pt([
  f({ attribute: !1 })
], Se.prototype, "element", 2);
pt([
  f({ type: String })
], Se.prototype, "name", 1);
pt([
  f({ type: Boolean })
], Se.prototype, "showfunctions", 2);
pt([
  N("mwc-menu")
], Se.prototype, "addMenu", 2);
pt([
  N('mwc-icon-button[icon="playlist_add"]')
], Se.prototype, "addButton", 2);
Se = pt([
  H("powertransformer-editor")
], Se);
var uh = Object.defineProperty, ph = Object.getOwnPropertyDescriptor, Ee = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? ph(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && uh(t, n, r), r;
};
function mh(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let te = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `- ${t}` : ""}`;
  }
  openEditWizard() {
    const e = _.Bay.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const e = _.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? vi(this.element) : s``;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "Function");
    return s` ${e.map(
      (t) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const e = this.getAttachedIeds?.(this.element) ?? [];
    return e?.length ? s`<div id="iedcontainer">
          ${e.map(
      (t) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return mh(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${Tp}</mwc-icon
        >
        <abbr slot="action" title="${c("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click="${() => this.openLNodeWizard()}"
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => wi(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => wt(this, te, [J])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${c("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${c("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${$t(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        <div
          class="${Ge({
      content: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${Array.from(
      C(this.element, "PowerTransformer")
    ).map(
      (e) => s`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
          ${Array.from(
      C(this.element, "ConductingEquipment")
    ).map(
      (e) => s`<conducting-equipment-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                ?readonly=${this.readonly}
                ?showfunctions=${this.showfunctions}
              ></conducting-equipment-editor>`
    )}
        </div>
      </action-pane> `;
  }
};
te.styles = G`
    ${je}

    .content.actionicon {
      display: grid;
      grid-gap: 12px;
      padding: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }

    conducting-equipment-editor[showfunctions] {
      margin: 4px 8px 16px;
    }
  `;
Ee([
  f({ attribute: !1 })
], te.prototype, "doc", 2);
Ee([
  f({ type: Number })
], te.prototype, "editCount", 2);
Ee([
  f({ attribute: !1 })
], te.prototype, "element", 2);
Ee([
  f({ type: Boolean })
], te.prototype, "readonly", 2);
Ee([
  f({ type: Boolean })
], te.prototype, "showfunctions", 2);
Ee([
  f({ type: String })
], te.prototype, "header", 1);
Ee([
  f({ attribute: !1 })
], te.prototype, "getAttachedIeds", 2);
Ee([
  L()
], te.prototype, "cloneUI", 2);
Ee([
  N("mwc-dialog")
], te.prototype, "dialog", 2);
Ee([
  N("mwc-menu")
], te.prototype, "addMenu", 2);
Ee([
  N('mwc-icon-button[icon="playlist_add"]')
], te.prototype, "addButton", 2);
te = Ee([
  H("bay-editor")
], te);
var hh = Object.defineProperty, fh = Object.getOwnPropertyDescriptor, mt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? fh(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && hh(t, n, r), r;
};
function bh(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let xe = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "";
  }
  openEditWizard() {
    const e = _.ConductingEquipment.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openLNodeWizard() {
    const e = _.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "EqFunction");
    return s` ${e.map(
      (t) => s`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return s``;
    const e = C(
      this.element,
      "SubEquipment"
    );
    return s` ${e.map(
      (t) => s`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return bh(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  renderContentPane() {
    return s`<mwc-icon class="substation-editor-icon" slot="icon"
        >${sr(this.element)}</mwc-icon
      >
      <abbr slot="action" title="${c("lnode.tooltip")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => this.openLNodeWizard()}"
          icon="account_tree"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}}"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("move")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => wt(this, xe, [te])}"
          icon="forward"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="delete"
          @click="${() => this.remove()}}"
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>`;
  }
  renderContentIcon() {
    return s`<mwc-icon slot="icon">${sr(this.element)}</mwc-icon>
      <mwc-fab
        slot="action"
        mini
        @click="${() => this.openLNodeWizard()}"
        icon="account_tree"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        @click="${() => wt(this, xe, [te])}"
        icon="forward"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab>`;
  }
  render() {
    return this.showfunctions ? s`<action-pane label="${this.name}"
        >${this.renderContentPane()}${this.renderLNodes()}${this.renderEqFunctions()}${this.renderSubEquipments()}</action-pane
        ></action-pane
      >` : s`<action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    >`;
  }
};
xe.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
mt([
  f({ attribute: !1 })
], xe.prototype, "doc", 2);
mt([
  f({ type: Number })
], xe.prototype, "editCount", 2);
mt([
  f({ attribute: !1 })
], xe.prototype, "element", 2);
mt([
  f({ type: String })
], xe.prototype, "name", 1);
mt([
  f({ type: Boolean })
], xe.prototype, "showfunctions", 2);
mt([
  N("mwc-menu")
], xe.prototype, "addMenu", 2);
mt([
  N('mwc-icon-button[icon="playlist_add"]')
], xe.prototype, "addButton", 2);
xe = mt([
  H("conducting-equipment-editor")
], xe);
var gh = Object.defineProperty, yh = Object.getOwnPropertyDescriptor, ht = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? yh(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && gh(t, n, r), r;
};
function vh(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let Me = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `—${t}` : ""}`;
  }
  openEditWizard() {
    const e = _.Line.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  renderConductingEquipments() {
    const e = C(
      this.element,
      "ConductingEquipment"
    );
    return s` ${e.map(
      (t) => s`<conducting-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></conducting-equipment-editor>`
    )}`;
  }
  renderGeneralEquipments() {
    const e = C(
      this.element,
      "GeneralEquipment"
    );
    return s` ${e.map(
      (t) => s`<general-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></general-equipment-editor>`
    )}`;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "Function");
    return s` ${e.map(
      (t) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return vh(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label=${this.header}>
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${Fp}</mwc-icon
      >
      <abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >${this.renderConductingEquipments()}${this.renderGeneralEquipments()}${this.renderFunctions()}${this.renderLNodes()}
    </action-pane>`;
  }
};
Me.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
ht([
  f({ attribute: !1 })
], Me.prototype, "doc", 2);
ht([
  f({ type: Number })
], Me.prototype, "editCount", 2);
ht([
  f({ attribute: !1 })
], Me.prototype, "element", 2);
ht([
  f({ type: Boolean })
], Me.prototype, "showfunctions", 2);
ht([
  L()
], Me.prototype, "header", 1);
ht([
  N("mwc-menu")
], Me.prototype, "addMenu", 2);
ht([
  N('mwc-icon-button[icon="playlist_add"]')
], Me.prototype, "addButton", 2);
Me = ht([
  H("line-editor")
], Me);
var wh = Object.defineProperty, Ah = Object.getOwnPropertyDescriptor, ft = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Ah(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && wh(t, n, r), r;
};
function Sh(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let qe = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `—${t}` : ""}`;
  }
  openEditWizard() {
    const e = _.Process.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = _[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  renderConductingEquipments() {
    const e = C(
      this.element,
      "ConductingEquipment"
    );
    return s` ${e.map(
      (t) => s`<conducting-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></conducting-equipment-editor>`
    )}`;
  }
  renderGeneralEquipments() {
    const e = C(
      this.element,
      "GeneralEquipment"
    );
    return s` ${e.map(
      (t) => s`<general-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></general-equipment-editor>`
    )}`;
  }
  renderLines() {
    const e = C(this.element, "Line");
    return s` ${e.map(
      (t) => s`<line-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></line-editor>`
    )}`;
  }
  renderSubstations() {
    const e = C(this.element, "Substation");
    return s` ${e.map(
      (t) => s`<substation-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></substation-editor>`
    )}`;
  }
  renderProcesses() {
    const e = C(this.element, "Process");
    return s` ${e.map(
      (t) => s`<process-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></process-editor>`
    )}`;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "Function");
    return s` ${e.map(
      (t) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const e = C(this.element, "LNode");
    return e.length ? s`<div class="container lnode">
          ${e.map(
      (t) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return Sh(this.element).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return s`<action-pane label=${this.header}>
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${Hp}</mwc-icon
      >
      <abbr slot="action" title="${c("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${c("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${c("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderConductingEquipments()}${this.renderGeneralEquipments()}${this.renderFunctions()}${this.renderLNodes()}
      ${this.renderLines()} ${this.renderSubstations()}${this.renderProcesses()}
    </action-pane>`;
  }
};
qe.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
ft([
  f({ attribute: !1 })
], qe.prototype, "doc", 2);
ft([
  f({ type: Number })
], qe.prototype, "editCount", 2);
ft([
  f({ attribute: !1 })
], qe.prototype, "element", 2);
ft([
  f({ type: Boolean })
], qe.prototype, "showfunctions", 2);
ft([
  L()
], qe.prototype, "header", 1);
ft([
  N("mwc-menu")
], qe.prototype, "addMenu", 2);
ft([
  N('mwc-icon-button[icon="playlist_add"]')
], qe.prototype, "addButton", 2);
qe = ft([
  H("process-editor")
], qe);
var xh = Object.defineProperty, $h = Object.getOwnPropertyDescriptor, ve = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? $h(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && xh(t, n, r), r;
};
function En() {
  return localStorage.getItem("showieds") === "on";
}
function cr(e) {
  localStorage.setItem("showieds", e);
}
function Vt() {
  return localStorage.getItem("showfunctions") === "on";
}
function lr(e) {
  localStorage.setItem("showfunctions", e);
}
function Ch(e) {
  return e ? T[e.tagName].children.filter(
    (t) => _[t].create !== p
  ) : [];
}
let ce = class extends B {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.getAttachedIeds = () => [];
  }
  openCommunicationMapping() {
    const e = Zo(this.doc);
    e && this.dispatchEvent(E(e));
  }
  openReportControlSelection() {
    this.dispatchEvent(
      E(() => ea(this.doc.documentElement))
    );
  }
  openGseControlSelection() {
    this.dispatchEvent(
      E(() => ko(this.doc.documentElement))
    );
  }
  openSampledValueControlSelection() {
    this.dispatchEvent(
      E(
        () => Po(this.doc.documentElement)
      )
    );
  }
  toggleShowIEDs() {
    En() ? cr("off") : cr("on"), this.requestUpdate();
  }
  toggleShowFunctions() {
    Vt() ? lr("off") : lr("on"), this.requestUpdate();
  }
  renderIedContainer() {
    this.getAttachedIeds = En() ? om(this.doc) : () => [];
    const e = this.getAttachedIeds?.(this.doc.documentElement) ?? [];
    return e.length ? s`<div id="iedcontainer">
          ${e.map(
      (t) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderSubstation() {
    return this.doc?.querySelector(":root > Substation") ? s`<section>
          ${Array.from(this.doc.querySelectorAll("Substation") ?? []).filter(q).map(
      (e) => s`<substation-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${e}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${Vt()}
                ></substation-editor>`
    )}
        </section>` : this.doc?.querySelector(":root > Line, :root > Process") ? s`` : s`<h1>
          <span style="color: var(--base1)">${c("substation.missing")}</span>
        </h1>`;
  }
  renderLines() {
    return this.doc?.querySelector(":root > Line") ? s`<section>
          ${Array.from(this.doc.querySelectorAll("Line") ?? []).filter(q).map(
      (e) => s`<line-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${e}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${Vt()}
                ></line-editor>`
    )}
        </section>` : s``;
  }
  renderProcesses() {
    return this.doc?.querySelector(":root > Process") ? s`<section>
          ${Array.from(this.doc.querySelectorAll(":root > Process") ?? []).filter(q).map(
      (e) => s`<process-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${e}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${Vt()}
                ></process-editor>`
    )}
        </section>` : s``;
  }
  openCreateWizard(e) {
    const t = _[e].create(this.doc.documentElement);
    t && this.dispatchEvent(E(t));
  }
  renderAddButtons() {
    return Ch(this.doc.documentElement).map(
      (e) => s`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  render() {
    return s` <h1>
        <nav>
          <abbr slot="action" title="${c("add")}">
            <mwc-icon-button
              icon="playlist_add"
              @click=${() => this.addMenu.open = !0}
            ></mwc-icon-button
            ><mwc-menu
              corner="BOTTOM_RIGHT"
              @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
              >${this.renderAddButtons()}</mwc-menu
            ></abbr
          >
        </nav>
        <nav>
          <abbr title="${c("zeroline.showieds")}">
            <mwc-icon-button-toggle
              ?on=${En()}
              @click=${() => this.toggleShowIEDs()}
              id="showieds"
              onIcon="developer_board"
              offIcon="developer_board_off"
            ></mwc-icon-button-toggle>
          </abbr>
          <abbr title="${c("zeroline.showfunctions")}">
            <mwc-icon-button-toggle
              ?on=${Vt()}
              @click=${() => this.toggleShowFunctions()}
              id="showfunctions"
              onIcon="layers"
              offIcon="layers_clear"
            ></mwc-icon-button-toggle>
          </abbr>
          <abbr title="${c("zeroline.commmap")}">
            <mwc-icon-button
              id="commmap"
              icon="link"
              @click=${() => this.openCommunicationMapping()}
            ></mwc-icon-button>
          </abbr>
          <abbr title="${c("zeroline.reportcontrol")}"
            ><mwc-icon-button
              id="reportcontrol"
              @click="${() => this.openReportControlSelection()}"
              >${gi}</mwc-icon-button
            ></abbr
          >
          <abbr title="${c("zeroline.gsecontrol")}"
            ><mwc-icon-button
              id="gsecontrol"
              @click="${() => this.openGseControlSelection()}"
              >${bi}</mwc-icon-button
            ></abbr
          >
          <abbr title="${c("zeroline.smvcontrol")}"
            ><mwc-icon-button
              id="smvcontrol"
              @click="${() => this.openSampledValueControlSelection()}"
              >${yi}</mwc-icon-button
            ></abbr
          >
        </nav>
      </h1>
      ${this.renderIedContainer()}
      ${this.renderSubstation()}${this.renderLines()}${this.renderProcesses()}`;
  }
};
ce.styles = G`
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
      transition: background-color 150ms linear;
    }

    h1 > nav,
    h1 > abbr > mwc-icon-button {
      float: right;
    }

    section {
      padding: 8px 12px 16px;
      display: grid;
      gap: 12px;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    #iedcontainer {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(128px, auto));
    }
  `;
ve([
  f({ attribute: !1 })
], ce.prototype, "doc", 2);
ve([
  f({ type: Number })
], ce.prototype, "editCount", 2);
ve([
  f({ type: Boolean })
], ce.prototype, "readonly", 2);
ve([
  f({ attribute: !1 })
], ce.prototype, "getAttachedIeds", 2);
ve([
  N("#commmap")
], ce.prototype, "commmap", 2);
ve([
  N("#showieds")
], ce.prototype, "showieds", 2);
ve([
  N("#showfunctions")
], ce.prototype, "showfunctions", 2);
ve([
  N("#gsecontrol")
], ce.prototype, "gsecontrol", 2);
ve([
  N("#smvcontrol")
], ce.prototype, "smvcontrol", 2);
ve([
  N("#reportcontrol")
], ce.prototype, "reportcontrol", 2);
ve([
  N("#createsubstation")
], ce.prototype, "createsubstation", 2);
ve([
  N("mwc-menu")
], ce.prototype, "addMenu", 2);
ve([
  N('mwc-icon-button[icon="playlist_add"]')
], ce.prototype, "addButton", 2);
ce = ve([
  H("zeroline-pane")
], ce);
var Eh = Object.defineProperty, ta = (e, t, n, i) => {
  for (var r = void 0, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = a(t, n, r) || r);
  return r && Eh(t, n, r), r;
};
class na extends B {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
  openCreateSubstationWizard() {
    const t = _.Substation.create(this.doc.documentElement);
    t && this.dispatchEvent(E(t));
  }
  render() {
    return s` <zeroline-pane
        .editCount=${this.editCount}
        .doc=${this.doc}
    ></zeroline-pane>
    ${this.doc?.querySelector(
      ":root > Substation, :root > Line, :root > Process"
    ) ? s`` : s`<h1>
          <mwc-fab
              extended
              icon="add"
              label="${c("substation.wizard.title.add")}"
              @click=${() => this.openCreateSubstationWizard()}
          ></mwc-fab>
        </h1>`}`;
  }
  static {
    this.styles = G`
    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    :host {
      width: 100vw;
    }
  `;
  }
}
ta([
  f()
], na.prototype, "doc");
ta([
  f({ type: Number })
], na.prototype, "editCount");
export {
  na as default
};
