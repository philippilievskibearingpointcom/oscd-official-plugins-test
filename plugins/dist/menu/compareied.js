import "@material/mwc-dialog";
import "@material/mwc-list";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import { Select as Oi } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as zi } from "@material/mwc-textfield";
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
const yt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Jt = (i, e, t = null, r = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    i.insertBefore(e, r), e = n;
  }
}, Ne = (i, e, t = null) => {
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
const W = `{{lit-${String(Math.random()).slice(2)}}}`, Qt = `<!--${W}-->`, gt = new RegExp(`${W}|${Qt}`), he = "$lit$";
class Yt {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const r = [], n = [], c = document.createTreeWalker(t.content, 133, null, !1);
    let s = 0, a = -1, o = 0;
    const { strings: l, values: { length: h } } = e;
    for (; o < h; ) {
      const d = c.nextNode();
      if (d === null) {
        c.currentNode = n.pop();
        continue;
      }
      if (a++, d.nodeType === 1) {
        if (d.hasAttributes()) {
          const f = d.attributes, { length: v } = f;
          let x = 0;
          for (let b = 0; b < v; b++)
            bt(f[b].name, he) && x++;
          for (; x-- > 0; ) {
            const b = l[o], S = qe.exec(b)[2], k = S.toLowerCase() + he, A = d.getAttribute(k);
            d.removeAttribute(k);
            const E = A.split(gt);
            this.parts.push({ type: "attribute", index: a, name: S, strings: E }), o += E.length - 1;
          }
        }
        d.tagName === "TEMPLATE" && (n.push(d), c.currentNode = d.content);
      } else if (d.nodeType === 3) {
        const f = d.data;
        if (f.indexOf(W) >= 0) {
          const v = d.parentNode, x = f.split(gt), b = x.length - 1;
          for (let S = 0; S < b; S++) {
            let k, A = x[S];
            if (A === "")
              k = U();
            else {
              const E = qe.exec(A);
              E !== null && bt(E[2], he) && (A = A.slice(0, E.index) + E[1] + E[2].slice(0, -he.length) + E[3]), k = document.createTextNode(A);
            }
            v.insertBefore(k, d), this.parts.push({ type: "node", index: ++a });
          }
          x[b] === "" ? (v.insertBefore(U(), d), r.push(d)) : d.data = x[b], o += b;
        }
      } else if (d.nodeType === 8)
        if (d.data === W) {
          const f = d.parentNode;
          (d.previousSibling === null || a === s) && (a++, f.insertBefore(U(), d)), s = a, this.parts.push({ type: "node", index: a }), d.nextSibling === null ? d.data = "" : (r.push(d), a--), o++;
        } else {
          let f = -1;
          for (; (f = d.data.indexOf(W, f + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const d of r)
      d.parentNode.removeChild(d);
  }
}
const bt = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, ei = (i) => i.index !== -1, U = () => document.createComment(""), qe = (
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
const nt = 133;
function ti(i, e) {
  const { element: { content: t }, parts: r } = i, n = document.createTreeWalker(t, nt, null, !1);
  let c = me(r), s = r[c], a = -1, o = 0;
  const l = [];
  let h = null;
  for (; n.nextNode(); ) {
    a++;
    const d = n.currentNode;
    for (d.previousSibling === h && (h = null), e.has(d) && (l.push(d), h === null && (h = d)), h !== null && o++; s !== void 0 && s.index === a; )
      s.index = h !== null ? -1 : s.index - o, c = me(r, c), s = r[c];
  }
  l.forEach((d) => d.parentNode.removeChild(d));
}
const ji = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, nt, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, me = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const r = i[t];
    if (ei(r))
      return t;
  }
  return -1;
};
function qi(i, e, t = null) {
  const { element: { content: r }, parts: n } = i;
  if (t == null) {
    r.appendChild(e);
    return;
  }
  const c = document.createTreeWalker(r, nt, null, !1);
  let s = me(n), a = 0, o = -1;
  for (; c.nextNode(); )
    for (o++, c.currentNode === t && (a = ji(e), t.parentNode.insertBefore(e, t)); s !== -1 && n[s].index === o; ) {
      if (a > 0) {
        for (; s !== -1; )
          n[s].index += a, s = me(n, s);
        return;
      }
      s = me(n, s);
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
const ii = /* @__PURE__ */ new WeakMap(), Pe = (i) => (...e) => {
  const t = i(...e);
  return ii.set(t, !0), t;
}, ye = (i) => typeof i == "function" && ii.has(i);
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
const G = {}, vt = {};
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
class Ge {
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
    const e = yt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let c = 0, s = 0, a, o = n.nextNode();
    for (; c < r.length; ) {
      if (a = r[c], !ei(a)) {
        this.__parts.push(void 0), c++;
        continue;
      }
      for (; s < a.index; )
        s++, o.nodeName === "TEMPLATE" && (t.push(o), n.currentNode = o.content), (o = n.nextNode()) === null && (n.currentNode = t.pop(), o = n.nextNode());
      if (a.type === "node") {
        const l = this.processor.handleTextExpression(this.options);
        l.insertAfterNode(o.previousSibling), this.__parts.push(l);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(o, a.name, a.strings, this.options));
      c++;
    }
    return yt && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const xt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), Gi = ` ${W} `;
class ct {
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
      const a = qe.exec(c);
      a === null ? t += c + (r ? Gi : Qt) : t += c.substr(0, a.index) + a[1] + a[2] + he + a[3] + W;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return xt !== void 0 && (t = xt.createHTML(t)), e.innerHTML = t, e;
  }
}
class Bi extends ct {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const e = super.getTemplateElement(), t = e.content, r = t.firstChild;
    return t.removeChild(r), Jt(t, r.firstChild), e;
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
const st = (i) => i === null || !(typeof i == "object" || typeof i == "function"), Be = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class ri {
  constructor(e, t, r) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new de(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, r = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const c = r[0].value;
      if (typeof c == "symbol")
        return String(c);
      if (typeof c == "string" || !Be(c))
        return c;
    }
    let n = "";
    for (let c = 0; c < t; c++) {
      n += e[c];
      const s = r[c];
      if (s !== void 0) {
        const a = s.value;
        if (st(a) || !Be(a))
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
class de {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== G && (!st(e) || e !== this.value) && (this.value = e, ye(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; ye(this.value); ) {
      const e = this.value;
      this.value = G, e(this);
    }
    this.value !== G && this.committer.commit();
  }
}
class ce {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(U()), this.endNode = e.appendChild(U());
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
    e.__insert(this.startNode = U()), e.__insert(this.endNode = U());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = U()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; ye(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = G, t(this);
    }
    const e = this.__pendingValue;
    e !== G && (st(e) ? e !== this.value && this.__commitText(e) : e instanceof ct ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Be(e) ? this.__commitIterable(e) : e === vt ? (this.value = vt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Ge && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new Ge(t, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, n;
    for (const c of e)
      n = t[r], n === void 0 && (n = new ce(this.options), t.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(c), n.commit(), r++;
    r < t.length && (t.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    Ne(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Ui {
  constructor(e, t, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; ye(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = G, t(this);
    }
    if (this.__pendingValue === G)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = G;
  }
}
class Wi extends ri {
  constructor(e, t, r) {
    super(e, t, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new at(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class at extends de {
}
let ni = !1;
(() => {
  try {
    const i = {
      get capture() {
        return ni = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class Xi {
  constructor(e, t, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; ye(this.__pendingValue); ) {
      const c = this.__pendingValue;
      this.__pendingValue = G, c(this);
    }
    if (this.__pendingValue === G)
      return;
    const e = this.__pendingValue, t = this.value, r = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Ki(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = G;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Ki = (i) => i && (ni ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
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
function Zi(i) {
  let e = ge.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ge.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const r = i.strings.join(W);
  return t = e.keyString.get(r), t === void 0 && (t = new Yt(i, i.getTemplateElement()), e.keyString.set(r, t)), e.stringsArray.set(i.strings, t), t;
}
const ge = /* @__PURE__ */ new Map();
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
const oe = /* @__PURE__ */ new WeakMap(), Ji = (i, e, t) => {
  let r = oe.get(e);
  r === void 0 && (Ne(e, e.firstChild), oe.set(e, r = new ce(Object.assign({ templateFactory: Zi }, t))), r.appendInto(e)), r.setValue(i), r.commit();
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
class Qi {
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
    return c === "." ? new Wi(e, t.slice(1), r).parts : c === "@" ? [new Xi(e, t.slice(1), n.eventContext)] : c === "?" ? [new Ui(e, t.slice(1), r)] : new ri(e, t, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new ce(e);
  }
}
const ci = new Qi();
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
const g = (i, ...e) => new ct(i, e, "html", ci), ot = (i, ...e) => new Bi(i, e, "svg", ci);
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
const si = (i, e) => `${i}--${e}`;
let Ae = !0;
typeof window.ShadyCSS > "u" ? Ae = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Ae = !1);
const Yi = (i) => (e) => {
  const t = si(e.type, i);
  let r = ge.get(t);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ge.set(t, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const c = e.strings.join(W);
  if (n = r.keyString.get(c), n === void 0) {
    const s = e.getTemplateElement();
    Ae && window.ShadyCSS.prepareTemplateDom(s, i), n = new Yt(e, s), r.keyString.set(c, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, er = ["html", "svg"], tr = (i) => {
  er.forEach((e) => {
    const t = ge.get(si(e, i));
    t !== void 0 && t.keyString.forEach((r) => {
      const { element: { content: n } } = r, c = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((s) => {
        c.add(s);
      }), ti(r, c);
    });
  });
}, ai = /* @__PURE__ */ new Set(), ir = (i, e, t) => {
  ai.add(i);
  const r = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: c } = n;
  if (c === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, i);
    return;
  }
  const s = document.createElement("style");
  for (let l = 0; l < c; l++) {
    const h = n[l];
    h.parentNode.removeChild(h), s.textContent += h.textContent;
  }
  tr(i);
  const a = r.content;
  t ? qi(t, s, a.firstChild) : a.insertBefore(s, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, i);
  const o = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(s, a.firstChild);
    const l = /* @__PURE__ */ new Set();
    l.add(s), ti(t, l);
  }
}, rr = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = t.scopeName, n = oe.has(e), c = Ae && e.nodeType === 11 && !!e.host, s = c && !ai.has(r), a = s ? document.createDocumentFragment() : e;
  if (Ji(i, a, Object.assign({ templateFactory: Yi(r) }, t)), s) {
    const o = oe.get(a);
    oe.delete(a);
    const l = o.value instanceof Ge ? o.value.template : void 0;
    ir(r, a, l), Ne(e, e.firstChild), e.appendChild(a), oe.set(e, o);
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
var oi;
window.JSCompiler_renameProperty = (i, e) => i;
const Ue = {
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
}, di = (i, e) => e !== i && (e === e || i === i), Ve = {
  attribute: !0,
  type: String,
  converter: Ue,
  reflect: !1,
  hasChanged: di
}, Me = 1, St = 4, kt = 8, _t = 16, We = "finalized";
class li extends HTMLElement {
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
  static createProperty(e, t = Ve) {
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
    return this._classProperties && this._classProperties.get(e) || Ve;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(We) || e.finalize(), this[We] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, t, r = di) {
    return r(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const r = t.type, n = t.converter || Ue, c = typeof n == "function" ? n : n.fromAttribute;
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
    return (n && n.toAttribute || Ue.toAttribute)(e, r);
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
  _propertyToAttribute(e, t, r = Ve) {
    const n = this.constructor, c = n._attributeNameForProperty(e, r);
    if (c !== void 0) {
      const s = n._propertyValueToAttribute(t, r);
      if (s === void 0)
        return;
      this._updateState = this._updateState | kt, s == null ? this.removeAttribute(c) : this.setAttribute(c, s), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & kt)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const c = r.getPropertyOptions(n);
      this._updateState = this._updateState | _t, this[n] = // tslint:disable-next-line:no-any
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
      r = r || c.getPropertyOptions(e), c._valueHasChanged(this[e], t, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), r.reflect === !0 && !(this._updateState & _t) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
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
    this._updateState = this._updateState | St;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & St;
  }
  get hasUpdated() {
    return this._updateState & Me;
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
    e && (this._updateState & Me || (this._updateState = this._updateState | Me, this.firstUpdated(t)), this.updated(t));
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
oi = We;
li[oi] = !0;
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
const nr = (i, e) => (window.customElements.define(i, e), e), cr = (i, e) => {
  const { kind: t, elements: r } = e;
  return {
    kind: t,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(i, n);
    }
  };
}, se = (i) => (e) => typeof e == "function" ? nr(i, e) : cr(i, e), sr = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, ar = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function m(i) {
  return (e, t) => t !== void 0 ? ar(i, e, t) : sr(i, e);
}
function or(i) {
  return m({ attribute: !1, hasChanged: void 0 });
}
const $ = (i) => or();
function j(i, e) {
  return (t, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? ui(n, t, r) : hi(n, t);
  };
}
function pi(i) {
  return (e, t) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? ui(r, e, t) : hi(r, e);
  };
}
const ui = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, hi = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), dr = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), lr = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function pr(i) {
  return (e, t) => t !== void 0 ? lr(i, e, t) : dr(i, e);
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
const Xe = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, dt = Symbol();
class lt {
  constructor(e, t) {
    if (t !== dt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Xe ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const ur = (i) => new lt(String(i), dt), hr = (i) => {
  if (i instanceof lt)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, be = (i, ...e) => {
  const t = e.reduce((r, n, c) => r + hr(n) + i[c + 1], i[0]);
  return new lt(t, dt);
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
const wt = {};
class Q extends li {
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
      if (t instanceof CSSStyleSheet && !Xe) {
        const r = Array.prototype.slice.call(t.cssRules).reduce((n, c) => n + c.cssText, "");
        return ur(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : Xe ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== wt && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return wt;
  }
}
Q.finalized = !0;
Q.render = rr;
Q.shadowRootOptions = { mode: "open" };
const mr = 1e3 * 60, Ct = "langChanged";
function fr(i, e, t) {
  return Object.entries(Ke(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Ke(c))), i);
}
function yr(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function Ke(i) {
  return typeof i == "function" ? i() : i;
}
const gr = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: yr,
  interpolate: fr,
  translationCache: {}
});
let br = gr();
function vr(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(Ct, t, e), () => window.removeEventListener(Ct, t);
}
function H(i, e, t = br) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? Ke(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function mi(i) {
  return i instanceof ce ? i.startNode.isConnected : i instanceof de ? i.committer.element.isConnected : i.element.isConnected;
}
function xr(i) {
  for (const [e] of i)
    mi(e) || i.delete(e);
}
function Sr(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function kr(i, e) {
  setInterval(() => Sr(() => xr(i)), e);
}
const fi = /* @__PURE__ */ new Map();
function _r() {
  vr((i) => {
    for (const [e, t] of fi)
      mi(e) && wr(e, t, i);
  });
}
_r();
kr(fi, mr);
function wr(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
var Ze = function(i, e) {
  return Ze = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Ze(i, e);
};
function Cr(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ze(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, fe.apply(this, arguments);
};
function y(i, e, t, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(i, e, t, r);
  else for (var a = i.length - 1; a >= 0; a--) (s = i[a]) && (c = (n < 3 ? s(c) : n > 3 ? s(e, t, c) : s(e, t)) || c);
  return n > 3 && c && Object.defineProperty(e, t, c), c;
}
function xe(i) {
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
function Ar(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yi = () => {
}, $r = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", yi, $r);
document.removeEventListener("x", yi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class gi extends Q {
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
var Ir = (
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
var Nr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Pr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, At = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Dr(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, c = r + t.left, s = n + t.top, a, o;
  if (i.type === "touchstart") {
    var l = i;
    a = l.changedTouches[0].pageX - c, o = l.changedTouches[0].pageY - s;
  } else {
    var h = i;
    a = h.pageX - c, o = h.pageY - s;
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
var $t = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], It = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Se = [], Er = (
  /** @class */
  function(i) {
    Cr(e, i);
    function e(t) {
      var r = i.call(this, fe(fe({}, e.defaultAdapter), t)) || this;
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
        return Nr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return At;
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
          for (var c = xe($t), s = c.next(); !s.done; s = c.next()) {
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
          for (var c = xe(It), s = c.next(); !s.done; s = c.next()) {
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
        for (var n = xe($t), c = n.next(); !c.done; c = n.next()) {
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
        for (var n = xe(It), c = n.next(); !c.done; c = n.next()) {
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
            var a = t !== void 0 && Se.length > 0 && Se.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Se.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Se = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, a = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, x = f.endPoint;
        h = v.x + "px, " + v.y + "px", d = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(c, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, l);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, c;
      n ? c = Dr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
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
      }, At.FG_DEACTIVATION_MS));
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
        var n = fe({}, r);
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
  }(Ir)
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
class Rr {
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
const Nt = /* @__PURE__ */ new WeakMap(), pt = Pe((i) => (e) => {
  if (!(e instanceof de) || e instanceof at || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = Nt.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), Nt.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new Rr(r);
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
const Pt = /* @__PURE__ */ new WeakMap(), Tr = Pe((i) => (e) => {
  if (!(e instanceof de) || e instanceof at || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = Pt.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), Pt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in i || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in i)
    n.add(c), c.indexOf("-") === -1 ? r[c] = i[c] : r.setProperty(c, i[c]);
});
class D extends gi {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Er;
  }
  get isActive() {
    return Ar(this.parentElement || this, ":active");
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
    return g`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${pt(r)}"
          style="${Tr({
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
  j(".mdc-ripple-surface")
], D.prototype, "mdcRoot", void 0);
y([
  m({ type: Boolean })
], D.prototype, "primary", void 0);
y([
  m({ type: Boolean })
], D.prototype, "accent", void 0);
y([
  m({ type: Boolean })
], D.prototype, "unbounded", void 0);
y([
  m({ type: Boolean })
], D.prototype, "disabled", void 0);
y([
  m({ type: Boolean })
], D.prototype, "activated", void 0);
y([
  m({ type: Boolean })
], D.prototype, "selected", void 0);
y([
  m({ type: Boolean })
], D.prototype, "internalUseStateLayerCustomProperties", void 0);
y([
  $()
], D.prototype, "hovering", void 0);
y([
  $()
], D.prototype, "bgFocused", void 0);
y([
  $()
], D.prototype, "fgActivation", void 0);
y([
  $()
], D.prototype, "fgDeactivation", void 0);
y([
  $()
], D.prototype, "fgScale", void 0);
y([
  $()
], D.prototype, "fgSize", void 0);
y([
  $()
], D.prototype, "translateStart", void 0);
y([
  $()
], D.prototype, "translateEnd", void 0);
y([
  $()
], D.prototype, "leftPos", void 0);
y([
  $()
], D.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Lr = be`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Je = class extends D {
};
Je.styles = [Lr];
Je = y([
  se("mwc-ripple")
], Je);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ut = (i) => (
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
class bi {
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
class F extends Q {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new bi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : g``, r = this.hasMeta ? this.renderMeta() : g``;
    return g`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? g`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? g`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return g`
      <span class="mdc-deprecated-list-item__graphic material-icons ${pt(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return g`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return g`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return g`<slot></slot>`;
  }
  renderTwoline() {
    return g`
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
  j("slot")
], F.prototype, "slotElement", void 0);
y([
  pi("mwc-ripple")
], F.prototype, "ripple", void 0);
y([
  m({ type: String })
], F.prototype, "value", void 0);
y([
  m({ type: String, reflect: !0 })
], F.prototype, "group", void 0);
y([
  m({ type: Number, reflect: !0 })
], F.prototype, "tabindex", void 0);
y([
  m({ type: Boolean, reflect: !0 }),
  ut(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], F.prototype, "disabled", void 0);
y([
  m({ type: Boolean, reflect: !0 })
], F.prototype, "twoline", void 0);
y([
  m({ type: Boolean, reflect: !0 })
], F.prototype, "activated", void 0);
y([
  m({ type: String, reflect: !0 })
], F.prototype, "graphic", void 0);
y([
  m({ type: Boolean })
], F.prototype, "multipleGraphics", void 0);
y([
  m({ type: Boolean })
], F.prototype, "hasMeta", void 0);
y([
  m({ type: Boolean, reflect: !0 }),
  ut(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], F.prototype, "noninteractive", void 0);
y([
  m({ type: Boolean, reflect: !0 }),
  ut(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], F.prototype, "selected", void 0);
y([
  $()
], F.prototype, "shouldRenderRipple", void 0);
y([
  $()
], F.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fr = be`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Qe = class extends F {
};
Qe.styles = [Fr];
Qe = y([
  se("mwc-list-item")
], Qe);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Vr(i, e, t) {
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
function ht(i, e, t) {
  if (e !== void 0)
    return Vr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class vi extends gi {
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
vi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const He = /* @__PURE__ */ new WeakMap(), ue = Pe((i) => (e) => {
  const t = He.get(e);
  if (i === void 0 && e instanceof de) {
    if (t !== void 0 || !He.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  He.set(e, i);
});
class R extends vi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new bi(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return this.shouldRenderRipple ? g`<mwc-ripple
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
    return g`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${pt(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ue(this.name)}"
              aria-checked="${ue(r)}"
              aria-label="${ue(this.ariaLabel)}"
              aria-labelledby="${ue(this.ariaLabelledBy)}"
              aria-describedby="${ue(this.ariaDescribedBy)}"
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
  j(".mdc-checkbox")
], R.prototype, "mdcRoot", void 0);
y([
  j("input")
], R.prototype, "formElement", void 0);
y([
  m({ type: Boolean, reflect: !0 })
], R.prototype, "checked", void 0);
y([
  m({ type: Boolean })
], R.prototype, "indeterminate", void 0);
y([
  m({ type: Boolean, reflect: !0 })
], R.prototype, "disabled", void 0);
y([
  m({ type: String, reflect: !0 })
], R.prototype, "name", void 0);
y([
  m({ type: String })
], R.prototype, "value", void 0);
y([
  ht,
  m({ type: String, attribute: "aria-label" })
], R.prototype, "ariaLabel", void 0);
y([
  ht,
  m({ type: String, attribute: "aria-labelledby" })
], R.prototype, "ariaLabelledBy", void 0);
y([
  ht,
  m({ type: String, attribute: "aria-describedby" })
], R.prototype, "ariaDescribedBy", void 0);
y([
  m({ type: Boolean })
], R.prototype, "reducedTouchTarget", void 0);
y([
  $()
], R.prototype, "animationClass", void 0);
y([
  $()
], R.prototype, "shouldRenderRipple", void 0);
y([
  $()
], R.prototype, "focused", void 0);
y([
  $()
], R.prototype, "useStateLayerCustomProperties", void 0);
y([
  pi("mwc-ripple")
], R.prototype, "ripple", void 0);
y([
  pr({ passive: !0 })
], R.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Mr = be`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ye = class extends R {
};
Ye.styles = [Mr];
Ye = y([
  se("mwc-checkbox")
], Ye);
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
const Dt = (i, e) => {
  const t = i.startNode.parentNode, r = e === void 0 ? i.endNode : e.startNode, n = t.insertBefore(U(), r);
  t.insertBefore(U(), r);
  const c = new ce(i.options);
  return c.insertAfterNode(n), c;
}, ie = (i, e) => (i.setValue(e), i.commit(), i), Oe = (i, e, t) => {
  const r = i.startNode.parentNode, n = t ? t.startNode : i.endNode, c = e.endNode.nextSibling;
  c !== n && Jt(r, e.startNode, c, n);
}, ze = (i) => {
  Ne(i.startNode.parentNode, i.startNode, i.endNode.nextSibling);
}, Et = (i, e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= t; n++)
    r.set(i[n], n);
  return r;
}, Rt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), ke = Pe((i, e, t) => {
  let r;
  return t === void 0 ? t = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof ce))
      throw new Error("repeat can only be used in text bindings");
    const c = Rt.get(n) || [], s = Tt.get(n) || [], a = [], o = [], l = [];
    let h = 0;
    for (const k of i)
      l[h] = r ? r(k, h) : h, o[h] = t(k, h), h++;
    let d, f, v = 0, x = c.length - 1, b = 0, S = o.length - 1;
    for (; v <= x && b <= S; )
      if (c[v] === null)
        v++;
      else if (c[x] === null)
        x--;
      else if (s[v] === l[b])
        a[b] = ie(c[v], o[b]), v++, b++;
      else if (s[x] === l[S])
        a[S] = ie(c[x], o[S]), x--, S--;
      else if (s[v] === l[S])
        a[S] = ie(c[v], o[S]), Oe(n, c[v], a[S + 1]), v++, S--;
      else if (s[x] === l[b])
        a[b] = ie(c[x], o[b]), Oe(n, c[x], c[v]), x--, b++;
      else if (d === void 0 && (d = Et(l, b, S), f = Et(s, v, x)), !d.has(s[v]))
        ze(c[v]), v++;
      else if (!d.has(s[x]))
        ze(c[x]), x--;
      else {
        const k = f.get(l[b]), A = k !== void 0 ? c[k] : null;
        if (A === null) {
          const E = Dt(n, c[v]);
          ie(E, o[b]), a[b] = E;
        } else
          a[b] = ie(A, o[b]), Oe(n, A, c[v]), c[k] = null;
        b++;
      }
    for (; b <= S; ) {
      const k = Dt(n, a[S + 1]);
      ie(k, o[b]), a[b++] = k;
    }
    for (; v <= x; ) {
      const k = c[v++];
      k !== null && ze(k);
    }
    Rt.set(n, a), Tt.set(n, l);
  };
});
var Hr = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, q = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Or(e, t) : e, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && Hr(e, t, n), n;
};
let O = class extends zi {
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(H("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? g`<div style="position:relative;">
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
      </div>` : g``;
  }
  renderMulplierList() {
    return g`${this.multipliers.map(
      (i) => g`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? H("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? g`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : g``;
  }
  render() {
    return g`
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
q([
  m({ type: Boolean })
], O.prototype, "nullable", 2);
q([
  m({ type: Array })
], O.prototype, "multipliers", 2);
q([
  m({ type: String })
], O.prototype, "multiplier", 1);
q([
  m({ type: String })
], O.prototype, "unit", 2);
q([
  $()
], O.prototype, "null", 1);
q([
  m({ type: String })
], O.prototype, "maybeValue", 1);
q([
  m({ type: String })
], O.prototype, "defaultValue", 2);
q([
  m({ type: Array })
], O.prototype, "reservedValues", 2);
q([
  j("mwc-switch")
], O.prototype, "nullSwitch", 2);
q([
  j("mwc-menu")
], O.prototype, "multiplierMenu", 2);
q([
  j("mwc-icon-button")
], O.prototype, "multiplierButton", 2);
O = q([
  se("wizard-textfield")
], O);
var zr = Object.defineProperty, jr = Object.getOwnPropertyDescriptor, ae = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? jr(e, t) : e, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && zr(e, t, n), n;
};
let J = class extends Oi {
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
    return this.nullable ? g`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : g``;
  }
  render() {
    return g`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ae([
  m({ type: Boolean })
], J.prototype, "nullable", 2);
ae([
  $()
], J.prototype, "null", 1);
ae([
  m({ type: String })
], J.prototype, "maybeValue", 1);
ae([
  m({ type: String })
], J.prototype, "defaultValue", 2);
ae([
  m({ type: Array })
], J.prototype, "reservedValues", 2);
ae([
  j("mwc-switch")
], J.prototype, "nullSwitch", 2);
J = ae([
  se("wizard-select")
], J);
var qr = Object.defineProperty, Gr = Object.getOwnPropertyDescriptor, z = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Gr(e, t) : e, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && qr(e, t, n), n;
};
let M = class extends Q {
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
    return this.nullable ? g`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : g``;
  }
  render() {
    return g`
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
z([
  m({ type: String })
], M.prototype, "label", 2);
z([
  m({ type: String })
], M.prototype, "helper", 2);
z([
  m({ type: Boolean })
], M.prototype, "nullable", 2);
z([
  m({ type: Boolean })
], M.prototype, "defaultChecked", 2);
z([
  m({ type: String })
], M.prototype, "maybeValue", 1);
z([
  m({ type: Boolean })
], M.prototype, "disabled", 2);
z([
  $()
], M.prototype, "null", 1);
z([
  $()
], M.prototype, "checked", 1);
z([
  $()
], M.prototype, "deactivateCheckbox", 2);
z([
  $()
], M.prototype, "formfieldLabel", 1);
z([
  j("mwc-switch")
], M.prototype, "nullSwitch", 2);
z([
  j("mwc-checkbox")
], M.prototype, "checkbox", 2);
M = z([
  se("wizard-checkbox")
], M);
function Br(i) {
  const e = i.getAttribute("name");
  return e || void 0;
}
function V(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const N = ":not(*)";
function Ur(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function Wr(i, e) {
  const [t, r] = e.split("	");
  return !t || !r ? N : `${i}[version="${t}"][revision="${r}"]`;
}
function Lt(i) {
  return C(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function Ft(i, e) {
  const [t, r] = V(e), n = P[i].parents.flatMap(
    (c) => T(c, t).split(",")
  );
  return L(
    n,
    [">"],
    [`${i}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function Xr(i) {
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
function Kr(i, e) {
  if (e.endsWith(")")) {
    const [f, v] = V(e), [x, b, S] = v.substring(1, v.length - 1).split(" ");
    if (!x || !b) return N;
    const k = P[i].parents.flatMap(
      (A) => T(A, f).split(",")
    );
    return L(
      k,
      [">"],
      [`${i}[iedName="None"][lnClass="${x}"][lnType="${b}"][lnInst="${S}"]`]
    ).map((A) => A.join("")).join(",");
  }
  const [t, r, n, c, s] = e.split(/[ /]/);
  if (!t || !r || !c) return N;
  const [
    a,
    o,
    l,
    h,
    d
  ] = [
    [`[iedName="${t}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    [i],
    a,
    o,
    l,
    h,
    d
  ).map((f) => f.join("")).join(",");
}
function Zr(i) {
  return `${C(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function Jr(i, e) {
  const [t, r] = V(e), [n, c] = r.split(" ");
  return `${T(
    "IED",
    t
  )}>${i}[iedName="${n}"][apName="${c}"]`;
}
function Qr(i) {
  return `${C(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function Yr(i, e) {
  const [t, r] = V(e);
  return r ? `${T(
    "Server",
    t
  )}>${i}[associationID="${r}"]` : N;
}
function en(i) {
  return `${C(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function tn(i, e) {
  const [t, r] = e.split(">>");
  return r ? `IED[name="${t}"] ${i}[inst="${r}"]` : N;
}
function rn(i) {
  const e = i.textContent, [t, r, n, c, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => i.getAttribute(a));
  return `${C(i.parentElement)}>${e} ${t || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${s ?? ""}`;
}
function nn(i, e) {
  const [t, r] = V(e), [n, c, s, a, o, l] = r.split(/[ /]/), [
    h,
    d,
    f,
    v,
    x,
    b
  ] = [
    P[i].parents.flatMap(
      (S) => T(S, t).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    h,
    [">"],
    [i],
    d,
    f,
    v,
    x,
    b
  ).map((S) => S.join("")).join(",");
}
function cn(i) {
  const [e, t, r, n, c, s, a, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => i.getAttribute(h)), l = `${e}/${t ?? ""} ${r} ${n ?? ""}.${c} ${s || ""}`;
  return `${C(i.parentElement)}>${l} (${a}${o ? " [" + o + "]" : ""})`;
}
function sn(i, e) {
  const [t, r] = V(e), [n, c, s, a] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), l = o && o[1] ? o[1] : "", h = o && o[2] ? o[2] : "", d = r.match(/\(([A-Z]{2})/), f = r.match(/ \[([0-9]{1,2})\]/), v = d && d[1] ? d[1] : "", x = f && f[1] ? f[1] : "", [
    b,
    S,
    k,
    A,
    E,
    Re,
    Te,
    Le,
    Fe
  ] = [
    P[i].parents.flatMap(
      (le) => T(le, t).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${l}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return L(
    b,
    [">"],
    [i],
    S,
    k,
    A,
    E,
    Re,
    Te,
    Le,
    Fe
  ).map((le) => le.join("")).join(",");
}
function an(i) {
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
    l,
    h,
    d,
    f,
    v,
    x,
    b,
    S
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
  ].map((E) => i.getAttribute(E)), k = S ? `${d}:${S} ${f ?? ""}/${v ?? ""} ${x ?? ""} ${b ?? ""}` : "", A = `${t} ${c}/${s ?? ""} ${a} ${o ?? ""} ${l} ${h || ""}`;
  return `${e}>${k ? k + " " : ""}${A}${r ? `@${r}` : ""}`;
}
function on(i, e) {
  const [t, r] = V(e), n = P[i].parents.flatMap(
    (pe) => T(pe, t).split(",")
  );
  if (r.endsWith("]")) {
    const [pe] = r.split("["), Mi = [`[intAddr="${pe}"]`];
    return L(n, [">"], [i], Mi).map((Hi) => Hi.join("")).join(",");
  }
  let c, s, a, o, l, h, d, f, v, x, b, S, k, A;
  !r.includes(":") && !r.includes("@") ? [c, s, a, o, l, h, d] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    f,
    v,
    x,
    b,
    S,
    k,
    c,
    s,
    a,
    o,
    l,
    h,
    d
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, s, a, o, l, h, d, A] = r.split(/[ /@]/) : [
    f,
    v,
    x,
    b,
    S,
    k,
    c,
    s,
    a,
    o,
    l,
    h,
    d,
    A
  ] = r.split(/[ /:@]/);
  const [
    E,
    Re,
    Te,
    Le,
    Fe,
    le,
    Pi,
    Di,
    Ei,
    Ri,
    Ti,
    Li,
    Fi,
    Vi
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    d ? [`[daName="${d}"]`] : [":not([daName])", '[daName=""]'],
    f ? [`[serviceType="${f}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    b ? [`[srcPrefix="${b}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    S ? [`[srcLNClass="${S}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    k ? [`[srcLNInst="${k}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    A ? [`[intAddr="${A}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return L(
    n,
    [">"],
    [i],
    E,
    Re,
    Te,
    Le,
    Fe,
    le,
    Pi,
    Di,
    Ei,
    Ri,
    Ti,
    Li,
    Fi,
    Vi
  ).map((pe) => pe.join("")).join(",");
}
function dn(i) {
  const [e, t, r] = ["prefix", "lnClass", "inst"].map(
    (n) => i.getAttribute(n)
  );
  return `${C(i.parentElement)}>${e ?? ""} ${t} ${r}`;
}
function ln(i, e) {
  const [t, r] = V(e), n = P[i].parents.flatMap(
    (d) => T(d, t).split(",")
  ), [c, s, a] = r.split(" ");
  if (!s) return N;
  const [o, l, h] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${a}"]`]
  ];
  return L(
    n,
    [">"],
    [i],
    o,
    l,
    h
  ).map((d) => d.join("")).join(",");
}
function pn(i) {
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
function un(i, e) {
  const [t, r] = V(e), n = P[i].parents.flatMap(
    (k) => T(k, t).split(",")
  ), [c, s, a, o, l, h] = r.split(/[ /]/), [
    d,
    f,
    v,
    x,
    b,
    S
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    n,
    [">"],
    [i],
    d,
    f,
    v,
    x,
    b,
    S
  ).map((k) => k.join("")).join(",");
}
function Vt(i) {
  const [e, t] = ["name", "ix"].map((r) => i.getAttribute(r));
  return `${C(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function et(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = V(e), [c, s, a, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return N;
  if (t === 0) return `${i}[name="${s}"]`;
  const l = P[i].parents.flatMap(
    (f) => f === "SDI" ? et(f, r, t - 1).split(",") : T(f, r).split(",")
  ).filter((f) => !f.startsWith(N));
  if (l.length === 0) return N;
  const [h, d] = [
    [`[name="${s}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return L(
    l,
    [">"],
    [i],
    h,
    d
  ).map((f) => f.join("")).join(",");
}
function hn(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(i));
  return `${C(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function mn(i, e) {
  const [t, r] = V(e), [n, c] = r.split(" "), s = parseFloat(c), a = P[i].parents.flatMap(
    (h) => T(h, t).split(",")
  ), [o, l] = [
    n ? [`[sGroup="${n}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return L(
    a,
    [">"],
    [i],
    o,
    l
  ).map((h) => h.join("")).join(",");
}
function fn(i) {
  const [e, t] = ["iedName", "apName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function yn(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? N : `${i}[iedName="${t}"][apName="${r}"]`;
}
function Mt(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function Ht(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? N : `${i}[ldInst="${t}"][cbName="${r}"]`;
}
function gn(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${C(i.parentElement)}>${e}`;
}
function bn(i, e) {
  const [t, r] = V(e), [n, c] = [
    P[i].parents.flatMap(
      (s) => T(s, t).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return L(n, [">"], [i], c).map((s) => s.join("")).join(",");
}
function vn(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${C(i.parentElement)}>${t}`;
  const r = Array.from(i.parentElement.children).filter((n) => n.getAttribute("type") === t).findIndex((n) => n.isSameNode(i));
  return `${C(i.parentElement)}>${t} [${r}]`;
}
function xn(i, e) {
  const [t, r] = V(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [s, a, o] = [
    P[i].parents.flatMap(
      (l) => T(l, t).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return L(
    s,
    [">"],
    [i],
    a,
    o
  ).map((l) => l.join("")).join(",");
}
function Sn(i) {
  return `${C(i.parentElement)}>${i.getAttribute("ord")}`;
}
function kn(i, e) {
  const [t, r] = V(e);
  return `${T("EnumType", t)}>${i}[ord="${r}"]`;
}
function _n(i) {
  return `${C(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function wn(i, e) {
  const [t, r] = V(e), [n, c] = r.split("	"), [s] = [
    P[i].parents.flatMap(
      (a) => T(a, t).split(",")
    )
  ];
  return L(
    s,
    [">"],
    [i],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((a) => a.join("")).join(",");
}
function Cn() {
  return "";
}
function An() {
  return ":root";
}
function w(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${C(i.parentElement)}>${i.getAttribute("name")}`;
}
function _(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = V(e);
  if (!n) return N;
  if (t === 0) return `${i}[name="${n}"]`;
  const c = P[i].parents;
  if (!c) return N;
  const s = c.flatMap(
    (a) => P[a].selector === P.Substation.selector ? _(a, r, t - 1).split(",") : T(a, r).split(",")
  ).filter((a) => !a.startsWith(N));
  return s.length === 0 ? N : L(s, [">"], [i], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function p(i) {
  return C(i.parentElement).toString();
}
function u(i, e) {
  const t = P[i].parents;
  if (!t) return N;
  const r = t.flatMap((n) => T(n, e).split(",")).filter((n) => !n.startsWith(N));
  return r.length === 0 ? N : L(r, [">"], [i]).map((n) => n.join("")).join(",");
}
function _e(i) {
  return `#${i.id}`;
}
function we(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : N;
}
const xi = [
  "TransformerWinding",
  "ConductingEquipment"
], Si = [
  "GeneralEquipment",
  "PowerTransformer",
  ...xi
], tt = ["Substation", "VoltageLevel", "Bay"], ki = ["Process", "Line"], _i = ["EqSubFunction", "EqFunction"], $n = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Si,
  ...tt,
  ...ki,
  ..._i
], wi = ["ConnectivityNode", ...$n], In = ["GOOSESecurity", "SMVSecurity"], Nn = ["SubNetwork", ...In, ...wi], Pn = ["BDA", "DA"], Dn = ["SampledValueControl", "GSEControl"], En = ["LogControl", "ReportControl"], Rn = [...Dn, ...En], Tn = ["GSE", "SMV"], Ln = [
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
  ...Rn,
  ...Tn,
  ...Pn
], re = ["LN0", "LN"], Fn = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Vn = ["Subject", "IssuerName"], Mn = ["MinTime", "MaxTime"], Hn = ["LNodeType", "DOType", "DAType", "EnumType"], On = [
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
], zn = ["DynDataSet", "ConfDataSet"], jn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...zn
], qn = ["ConfLogControl", "ConfSigRef"], Gn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Bn = ["SCL", ...Nn, ...Ln, ...Hn], Ci = [
  ...Bn,
  ...Fn,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Vn,
  ...Mn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...re,
  ...On,
  "DynAssociation",
  "SettingGroups",
  ...jn,
  ...qn,
  ...Gn,
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
], Un = new Set(Ci);
function mt(i) {
  return Un.has(i);
}
const De = ["Text", "Private"], K = [...De], I = [...De], Ce = [...De], Ot = [...I, "Val"], Ai = [...K, "LNode"], Z = [...Ai], it = [...Z], je = [
  ...Z,
  "PowerTransformer",
  "GeneralEquipment"
], zt = [
  ...it,
  "Terminal"
], jt = [...I, "Address"], $i = [...K], qt = [...$i, "IEDName"], Gt = [
  ...I,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Bt = [
  ...Z,
  "GeneralEquipment",
  "Function"
], Ut = [...$i, "TrgOps"], Wt = [
  ...Z,
  "GeneralEquipment",
  "EqSubFunction"
], P = {
  AccessControl: {
    identity: p,
    selector: u,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: w,
    selector: _,
    parents: ["IED"],
    children: [
      ...K,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: p,
    selector: u,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Qr,
    selector: Yr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: p,
    selector: u,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: w,
    selector: _,
    parents: ["DAType"],
    children: [...Ot]
  },
  BitRate: {
    identity: p,
    selector: u,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: w,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...je,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: pn,
    selector: un,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: p,
    selector: u,
    parents: ["SCL"],
    children: [...I, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: w,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...zt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: p,
    selector: u,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: fn,
    selector: yn,
    parents: ["SubNetwork"],
    children: [...I, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: w,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...Ai]
  },
  DA: {
    identity: w,
    selector: _,
    parents: ["DOType"],
    children: [...Ot]
  },
  DAI: {
    identity: Vt,
    selector: et,
    parents: ["DOI", "SDI"],
    children: [...I, "Val"]
  },
  DAType: {
    identity: _e,
    selector: we,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "BDA", "ProtNs"]
  },
  DO: {
    identity: w,
    selector: _,
    parents: ["LNodeType"],
    children: [...I]
  },
  DOI: {
    identity: w,
    selector: _,
    parents: [...re],
    children: [...I, "SDI", "DAI"]
  },
  DOType: {
    identity: _e,
    selector: we,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: w,
    selector: _,
    parents: [...re],
    children: [...K, "FCDA"]
  },
  DataSetDirectory: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: p,
    selector: u,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: _e,
    selector: we,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "EnumVal"]
  },
  EnumVal: {
    identity: Sn,
    selector: kn,
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
    children: [...Wt]
  },
  EqSubFunction: {
    identity: w,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Wt]
  },
  ExtRef: {
    identity: an,
    selector: on,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: cn,
    selector: sn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: w,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Z,
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
      ...ki,
      ..._i,
      ...tt
    ],
    children: [...it, "EqFunction"]
  },
  GetCBValues: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: w,
    selector: _,
    parents: ["AccessPoint"],
    children: [...K, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Mt,
    selector: Ht,
    parents: ["ConnectedAP"],
    children: [...jt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: w,
    selector: _,
    parents: ["LN0"],
    children: [...qt, "Protocol"]
  },
  GSESettings: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: p,
    selector: u,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: p,
    selector: u,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Ur,
    selector: Wr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: w,
    selector: _,
    parents: ["SCL"],
    children: [...I, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: rn,
    selector: nn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: p,
    selector: u,
    parents: [...re],
    children: [...I, "ExtRef"]
  },
  IssuerName: {
    identity: p,
    selector: u,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Zr,
    selector: Jr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: en,
    selector: tn,
    parents: ["Server"],
    children: [...I, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: dn,
    selector: ln,
    parents: ["AccessPoint", "LDevice"],
    children: [...Gt]
  },
  LN0: {
    identity: p,
    selector: u,
    parents: ["LDevice"],
    children: [
      ...Gt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Xr,
    selector: Kr,
    parents: [...wi],
    children: [...I]
  },
  LNodeType: {
    identity: _e,
    selector: we,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "DO"]
  },
  Line: {
    identity: w,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Bt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: w,
    selector: _,
    parents: [...re],
    children: [...I]
  },
  LogControl: {
    identity: w,
    selector: _,
    parents: [...re],
    children: [...Ut]
  },
  LogSettings: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: p,
    selector: u,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: p,
    selector: u,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: p,
    selector: u,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Lt,
    selector: Ft,
    parents: ["TransformerWinding"],
    children: [...I]
  },
  OptFields: {
    identity: p,
    selector: u,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: vn,
    selector: xn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: gn,
    selector: bn,
    parents: ["ConnectedAP"],
    children: [...I, "P"]
  },
  PowerTransformer: {
    identity: w,
    selector: _,
    parents: [...tt],
    children: [
      ...it,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => N,
    parents: [],
    children: []
  },
  Process: {
    identity: w,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Bt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: _n,
    selector: wn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: p,
    selector: u,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: w,
    selector: _,
    parents: [...re],
    children: [...Ut, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: p,
    selector: u,
    parents: ["ReportControl"],
    children: [...I, "ClientLN"]
  },
  SamplesPerSec: {
    identity: p,
    selector: u,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: w,
    selector: _,
    parents: ["LN0"],
    children: [...qt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: p,
    selector: u,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Cn,
    selector: An,
    parents: [],
    children: [
      ...De,
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
    identity: Vt,
    selector: et,
    parents: ["DOI", "SDI"],
    children: [...I, "SDI", "DAI"]
  },
  SDO: {
    identity: w,
    selector: _,
    parents: ["DOType"],
    children: [...K]
  },
  Server: {
    identity: p,
    selector: u,
    parents: ["AccessPoint"],
    children: [
      ...I,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: p,
    selector: u,
    parents: ["AccessPoint"],
    children: [...I]
  },
  Services: {
    identity: p,
    selector: u,
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
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: p,
    selector: u,
    parents: ["LN0"],
    children: [...I]
  },
  SettingGroups: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: p,
    selector: u,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: p,
    selector: u,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Mt,
    selector: Ht,
    parents: ["ConnectedAP"],
    children: [...jt]
  },
  SmvOpts: {
    identity: p,
    selector: u,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: w,
    selector: _,
    parents: ["AccessPoint"],
    children: [...K, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: p,
    selector: u,
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
      ...xi
    ],
    children: [...Z, "EqFunction"]
  },
  SubFunction: {
    identity: w,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...Z,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: w,
    selector: _,
    parents: ["Communication"],
    children: [...K, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: p,
    selector: u,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: w,
    selector: _,
    parents: ["SCL"],
    children: [...je, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: w,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...Z, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Lt,
    selector: Ft,
    parents: [...Si],
    children: [...I]
  },
  Text: {
    identity: p,
    selector: u,
    parents: Ci.filter((i) => i !== "Text" && i !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: p,
    selector: u,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: w,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...zt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: p,
    selector: u,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: hn,
    selector: mn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: p,
    selector: u,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: p,
    selector: u,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: w,
    selector: _,
    parents: ["Substation"],
    children: [...je, "Voltage", "Bay", "Function"]
  }
};
function T(i, e) {
  return typeof e != "string" ? N : mt(i) ? P[i].selector(i, e) : i;
}
function Wn(i, e, t) {
  if (typeof t != "string" || !mt(e)) return null;
  const r = i.querySelector(P[e].selector(e, t));
  return r === null || $e(r) ? r : Array.from(
    i.querySelectorAll(P[e].selector(e, t))
  ).find($e) ?? null;
}
function C(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return mt(e) ? P[e].identity(i) : NaN;
}
function Xt(i, e) {
  return typeof i == "string" && typeof e == "string" ? i.localeCompare(e) : typeof i == "object" && typeof e == "string" ? (i.getAttribute("name") ?? "").localeCompare(e) : typeof i == "string" && typeof e == "object" ? i.localeCompare(e.getAttribute("name")) : typeof i == "object" && typeof e == "object" ? (i.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function L(...i) {
  return i.reduce(
    (e, t) => e.flatMap((r) => t.map((n) => [r, n].flat())),
    [[]]
  );
}
function $e(i) {
  return !i.closest("Private");
}
const Xn = 99;
Array(Xn).fill(1).map((i, e) => `${e + 1}`);
const Kn = ot`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H15V9H11V11H15V13H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Zn = ot`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, Jn = ot`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, ne = /* @__PURE__ */ new Map();
ne.set("Attribute", Zn);
ne.set("Content", Jn);
ne.set("Element", Kn);
function Ie(i, e, t) {
  const r = e === i ? ":scope" : Object.keys(t).find(
    (n) => Array.from(
      e.querySelectorAll(n)
    ).includes(i)
  );
  return r ? t[r] : void 0;
}
function rt(i, e) {
  if (!e || !e.full)
    return !1;
  const t = e.full;
  return typeof t == "boolean" ? t : t(i);
}
function Qn(i, e, t) {
  if (!t || !t.attributes || !t.attributes[e])
    return !1;
  const r = t.attributes[e];
  return typeof r == "boolean" ? r : r(i);
}
function Kt(i) {
  const e = C(i);
  return typeof e == "string" ? e : H("unidentifiable");
}
function Yn(i, e, t, r) {
  const n = [], c = i.textContent?.trim() ?? "", s = e.textContent?.trim() ?? "";
  i.childElementCount === 0 && e.childElementCount === 0 && c !== s && (rt(
    i,
    Ie(
      i,
      r,
      t
    )
  ) || n.push([
    "value",
    { type: "Content", newValue: c, oldValue: s }
  ]));
  const a = new Set(
    e.getAttributeNames().concat(i.getAttributeNames())
  );
  for (const o of a)
    !Qn(
      i,
      o,
      Ie(
        i,
        r,
        t
      )
    ) && e.getAttribute(o) !== i.getAttribute(o) && n.push([
      o,
      {
        type: "Attribute",
        newValue: i.getAttribute(o),
        oldValue: e.getAttribute(o)
      }
    ]);
  return n;
}
function Zt(i) {
  let e = C(i);
  return typeof e == "string" && (e = e.split(">").pop() ?? ""), e;
}
function ec(i, e) {
  return i.tagName === e.tagName && Zt(i) === Zt(e);
}
function tc(i, e, t, r, n) {
  const c = [], s = Array.from(i.children), a = Array.from(e.children);
  return s.forEach((o) => {
    if (!o.closest("Private") && !rt(
      o,
      Ie(
        o,
        r,
        t
      )
    )) {
      const h = a.findIndex(
        (f) => ec(o, f)
      ), d = h > -1 ? a[h] : null;
      d ? (a.splice(h, 1), c.push({
        type: "Element",
        newValue: o,
        oldValue: d
      })) : c.push({
        type: "Element",
        newValue: o,
        oldValue: null
      });
    }
  }), a.forEach((o) => {
    o.closest("Private") || rt(
      o,
      Ie(
        o,
        n,
        t
      )
    ) || c.push({
      type: "Element",
      newValue: null,
      oldValue: o
    });
  }), c;
}
function Ii(i, e, t = {}) {
  return ic(
    i,
    e,
    t,
    i,
    e
  );
}
function ic(i, e, t = {}, r, n) {
  let c = C(i).toString();
  c === "NaN" && (c = void 0), r = r || i, n = n || e;
  const s = Yn(
    i,
    e,
    t,
    r
  ), a = tc(
    i,
    e,
    t,
    r,
    n
  ), o = [], l = [];
  a.forEach((d) => {
    !d.oldValue || !d.newValue ? o.push(d) : l.push(d);
  });
  const h = l.map((d) => Ii(d.newValue, d.oldValue, t)).filter((d) => d !== null);
  return h.length > 0 || s.length > 0 || o.length > 0 ? g` ${s.length > 0 || o.length > 0 ? g`<div class="container container--alt">
          <div class="list__container list__container--left">
            <mwc-list multi right nonInteractive>
              ${ke(
    s,
    (d) => d,
    ([d, f]) => g`<mwc-list-item right twoLine graphic="icon">
                    ${f.oldValue !== null ? g`
                          <span>
                            ${d}:
                            ${f.oldValue === "" ? '""' : f.oldValue}
                          </span>
                          <span slot="secondary">${c}</span>
                          <mwc-icon slot="graphic">
                            ${ne.get(f.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${ke(
    o,
    (d) => d,
    (d) => g` <mwc-list-item right twoLine graphic="icon">
                    ${d.oldValue ? g`
                          <span>${d.oldValue.tagName}</span>
                          <span slot="secondary">
                            ${Kt(d.oldValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${ne.get(d.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
          <div class="list__container">
            <mwc-list multi left nonInteractive>
              ${ke(
    s,
    (d) => d,
    ([d, f]) => g` <mwc-list-item left twoLine graphic="icon">
                    ${f.newValue !== null ? g`
                          <span>
                            ${d}:
                            ${f.newValue === "" ? '""' : f.newValue}
                          </span>
                          <span slot="secondary">${c}</span>
                          <mwc-icon slot="graphic">
                            ${ne.get(f.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${ke(
    o,
    (d) => d,
    (d) => g` <mwc-list-item left twoLine graphic="icon">
                    ${d.newValue ? g`
                          <span>${d.newValue.tagName}</span>
                          <span slot="secondary">
                            ${Kt(d.newValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${ne.get(d.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
        </div>` : ""}
    ${h}` : null;
}
var rc = Object.defineProperty, nc = Object.getOwnPropertyDescriptor, X = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? nc(e, t) : e, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && rc(e, t, n), n;
};
let B = class extends Q {
  constructor() {
    super(...arguments), this.leftHandTitle = "", this.rightHandTitle = "", this.leftHandSubtitle = "", this.rightHandSubtitle = "", this.filterMutables = !0;
  }
  render() {
    return g`
      ${this.renderFilterCheckbox()}
      <div class="container container--alt">
        <div class="list__container list__container--left">
          <h3 class="mdc-dialog__title">${this.leftHandTitle}</h3>
          ${this.leftHandSubtitle && this.leftHandSubtitle.length > 0 ? g`<h5 class="mdc-dialog__title">${this.leftHandSubtitle}</h5> ` : ""}
        </div>
        <div class="list__container">
          <h3 class="mdc-dialog__title">${this.rightHandTitle}</h3>
          ${this.rightHandSubtitle && this.rightHandSubtitle.length > 0 ? g`<h5 class="mdc-dialog__title">
                ${this.rightHandSubtitle}
              </h5> ` : ""}
        </div>
      </div>
      ${this.leftHandObject && this.rightHandObject ? g`
            ${Ii(
      this.rightHandObject,
      this.leftHandObject,
      this.filterMutables ? this.filterToIgnore : {}
    )}
          ` : ""}
    `;
  }
  renderFilterCheckbox() {
    return this.filterToIgnore ? g`
        <div class="container">
          <div class="flex"></div>
          <mwc-formfield label="${H("compare.filterMutables")}">
            <mwc-checkbox
              ?checked=${this.filterMutables}
              @change=${() => this.filterMutables = !this.filterMutables}
            >
            </mwc-checkbox>
          </mwc-formfield>
        </div>
      ` : g``;
  }
};
B.styles = be`
    mwc-list-item {
      --mdc-list-item-graphic-margin: 0;
    }

    .mdc-dialog__title {
      padding: 0 16px;
    }

    .container {
      display: flex;
      gap: 4px;
    }

    .container--alt {
      background: var(--base2);
    }

    .list__container {
      width: 50%;
      background: var(--base3);
    }
    .list__container--left {
      text-align: right;
    }
    .flex {
      flex: 1;
    }

    mwc-list-item[right] {
      text-align: right;
      direction: rtl;
    }
  `;
X([
  m({ type: String })
], B.prototype, "leftHandTitle", 2);
X([
  m({ type: String })
], B.prototype, "rightHandTitle", 2);
X([
  m({ type: Object })
], B.prototype, "leftHandObject", 2);
X([
  m({ type: Object })
], B.prototype, "rightHandObject", 2);
X([
  m({ type: Object })
], B.prototype, "filterToIgnore", 2);
X([
  m({ type: String })
], B.prototype, "leftHandSubtitle", 2);
X([
  m({ type: String })
], B.prototype, "rightHandSubtitle", 2);
X([
  $()
], B.prototype, "filterMutables", 2);
B = X([
  se("plain-compare-list")
], B);
function cc(i, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: i, ...e?.detail }
  });
}
var sc = Object.defineProperty, Y = (i, e, t, r) => {
  for (var n = void 0, c = i.length - 1, s; c >= 0; c--)
    (s = i[c]) && (n = s(e, t, n) || n);
  return n && sc(e, t, n), n;
};
const Ee = "LN[lnClass='TCTR']", ft = "LN[lnClass='TVTR']", ve = "SDI[name='setMag'] Val", Ni = "DAI[name='setVal'] Val", ee = {
  ":scope": {
    attributes: {
      name: !0
    }
  },
  P: {
    full: !0
  }
};
ee[`${Ee} DOI[name='Rat'] ${ve}`] = {
  full: !0
};
ee[`${Ee} DOI[name='ARtg'] ${ve}`] = {
  full: !0
};
ee[`${Ee} DOI[name='ARtgNom'] ${ve}`] = {
  full: !0
};
ee[`${Ee} DOI[name='ARtgSec'] ${Ni}`] = {
  full: !0
};
ee[`${ft} DOI[name='VRtg'] ${ve}`] = {
  full: !0
};
ee[`${ft} DOI[name='Rat'] ${ve}`] = {
  full: !0
};
ee[`${ft} DOI[name='VRtgSec'] ${Ni}`] = {
  full: !0
};
class te extends Q {
  constructor() {
    super(...arguments), this.editCount = -1, this.templateDocName = "";
  }
  get ieds() {
    return this.doc ? Array.from(this.doc.querySelectorAll("IED")).filter($e).sort(Xt) : [];
  }
  get templateIeds() {
    return this.templateDoc ? Array.from(this.templateDoc.querySelectorAll("IED")).filter($e).sort(Xt) : [];
  }
  async run() {
    this.dialog.open = !0;
  }
  onClosed() {
    this.templateDoc = void 0, this.selectedProjectIed = void 0, this.selectedTemplateIed = void 0;
  }
  getSelectedListItem(e, t) {
    const n = this.shadowRoot.querySelector(`mwc-list[id='${t}']`).selected?.value;
    if (n)
      return Wn(e, "IED", n) ?? void 0;
  }
  async getTemplateFile(e) {
    const t = e.target?.files?.item(0) ?? !1;
    if (!t) return;
    this.templateDocName = t.name;
    const r = await t.text();
    this.templateDoc = new DOMParser().parseFromString(
      r,
      "application/xml"
    ), this.templateFileUI.onchange = null;
  }
  renderSelectIedButton() {
    return g`<mwc-button
      slot="primaryAction"
      icon="arrow_back"
      trailingIcon
      label="${H("compare-ied.selectIedButton")}"
      @click=${() => {
      this.selectedProjectIed = void 0, this.selectedTemplateIed = void 0;
    }}
    ></mwc-button>`;
  }
  renderCompareButton() {
    return g`<mwc-button
      slot="primaryAction"
      icon="compare_arrows"
      trailingIcon
      label="${H("compare.compareButton")}"
      @click=${() => {
      this.selectedProjectIed = this.getSelectedListItem(
        this.doc,
        "currentDocument"
      ), this.selectedTemplateIed = this.getSelectedListItem(
        this.templateDoc,
        "currentTemplate"
      );
    }}
    ></mwc-button>`;
  }
  renderCloseButton() {
    return g`<mwc-button
      slot="secondaryAction"
      dialogAction="close"
      label="${H("close")}"
      style="--mdc-theme-primary: var(--mdc-theme-error)"
    ></mwc-button>`;
  }
  renderCompare() {
    const e = C(this.selectedProjectIed), t = C(this.selectedTemplateIed);
    return g`<plain-compare-list
        .leftHandObject=${this.selectedProjectIed}
        .rightHandObject=${this.selectedTemplateIed}
        .leftHandTitle=${typeof e == "number" ? "" : e}
        .rightHandTitle=${typeof t == "number" ? "" : t}
        .leftHandSubtitle=${this.docName}
        .rightHandSubtitle=${this.templateDocName}
        .filterToIgnore=${ee}
      ></plain-compare-list>
      ${this.renderSelectIedButton()} ${this.renderCloseButton()}`;
  }
  renderIEDList(e, t) {
    return g`<mwc-list id="${t}" activatable>
      ${e.map((r) => {
      const n = Br(r);
      return g`<mwc-list-item value="${C(r)}" left>
          <span>${n}</span>
        </mwc-list-item>`;
    })}
    </mwc-list>`;
  }
  renderIEDLists() {
    return g`<div class="splitContainer">
        <div>
          <div>${H("compare-ied.projectIedTitle")}</div>
          <div class="iedList">
            ${this.renderIEDList(this.ieds, "currentDocument")}
          </div>
        </div>
        <div>
          <div>${H("compare-ied.templateIedTitle")}</div>
          <div class="iedList">
            ${this.renderIEDList(this.templateIeds, "currentTemplate")}
          </div>
        </div>
      </div>
      ${this.renderCompareButton()} ${this.renderCloseButton()}`;
  }
  renderSelectTemplateFile() {
    return g`<div>
        <input
          id="template-file"
          accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
          type="file"
          hidden
          required
          @change=${(e) => this.dispatchEvent(cc(this.getTemplateFile(e)))}
        />

        <mwc-button
          label="${H("compare-ied.selectTemplateButton")}"
          @click=${() => {
      this.shadowRoot.querySelector("#template-file")?.click();
    }}
        ></mwc-button>
      </div>
      ${this.renderCloseButton()}`;
  }
  renderDialog(e, t) {
    return g`<mwc-dialog heading="${t}" @closed=${this.onClosed}>
      ${e}
    </mwc-dialog>`;
  }
  render() {
    return this.doc ? this.selectedProjectIed && this.selectedTemplateIed ? this.renderDialog(
      this.renderCompare(),
      H("compare-ied.resultTitle")
    ) : this.templateDoc ? this.renderDialog(
      this.renderIEDLists(),
      H("compare-ied.selectIedTitle")
    ) : this.renderDialog(
      this.renderSelectTemplateFile(),
      H("compare-ied.selectProjectTitle")
    ) : g``;
  }
  static {
    this.styles = be`
    mwc-dialog {
      --mdc-dialog-min-width: 64vw;
    }

    .splitContainer {
      display: flex;
      padding: 8px 6px 16px;
      height: 64vh;
    }

    .iedList {
      flex: 50%;
      margin: 0px 6px 0px;
      min-width: 300px;
      height: 100%;
      overflow-y: auto;
    }

    .resultTitle {
      font-weight: bold;
    }
  `;
  }
}
Y([
  m({ attribute: !1 })
], te.prototype, "doc");
Y([
  m({ type: Number })
], te.prototype, "editCount");
Y([
  m({ attribute: !1 })
], te.prototype, "templateDoc");
Y([
  m({ attribute: !1 })
], te.prototype, "selectedProjectIed");
Y([
  m({ attribute: !1 })
], te.prototype, "selectedTemplateIed");
Y([
  j("mwc-dialog")
], te.prototype, "dialog");
Y([
  j("#template-file")
], te.prototype, "templateFileUI");
Y([
  m({ attribute: !1 })
], te.prototype, "docName");
export {
  te as default
};
