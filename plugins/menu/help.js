import "@material/mwc-icon";
import { List as Ci } from "@material/mwc-list";
import "@material/mwc-formfield";
import { TextField as Ei } from "@material/mwc-textfield";
import { Select as Ii } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
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
const vt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Ri = (s, e, t = null, i = null) => {
  for (; e !== t; ) {
    const r = e.nextSibling;
    s.insertBefore(e, i), e = r;
  }
}, at = (s, e, t = null) => {
  for (; e !== t; ) {
    const i = e.nextSibling;
    s.removeChild(e), e = i;
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
const J = `{{lit-${String(Math.random()).slice(2)}}}`, Zt = `<!--${J}-->`, kt = new RegExp(`${J}|${Zt}`), ke = "$lit$";
class Xt {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const i = [], r = [], n = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0, o = -1, c = 0;
    const { strings: d, values: { length: p } } = e;
    for (; c < p; ) {
      const l = n.nextNode();
      if (l === null) {
        n.currentNode = r.pop();
        continue;
      }
      if (o++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const b = l.attributes, { length: h } = b;
          let E = 0;
          for (let I = 0; I < h; I++)
            _t(b[I].name, ke) && E++;
          for (; E-- > 0; ) {
            const I = d[c], $ = je.exec(I)[2], k = $.toLowerCase() + ke, w = l.getAttribute(k);
            l.removeAttribute(k);
            const P = w.split(kt);
            this.parts.push({ type: "attribute", index: o, name: $, strings: P }), c += P.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (r.push(l), n.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const b = l.data;
        if (b.indexOf(J) >= 0) {
          const h = l.parentNode, E = b.split(kt), I = E.length - 1;
          for (let $ = 0; $ < I; $++) {
            let k, w = E[$];
            if (w === "")
              k = re();
            else {
              const P = je.exec(w);
              P !== null && _t(P[2], ke) && (w = w.slice(0, P.index) + P[1] + P[2].slice(0, -ke.length) + P[3]), k = document.createTextNode(w);
            }
            h.insertBefore(k, l), this.parts.push({ type: "node", index: ++o });
          }
          E[I] === "" ? (h.insertBefore(re(), l), i.push(l)) : l.data = E[I], c += I;
        }
      } else if (l.nodeType === 8)
        if (l.data === J) {
          const b = l.parentNode;
          (l.previousSibling === null || o === a) && (o++, b.insertBefore(re(), l)), a = o, this.parts.push({ type: "node", index: o }), l.nextSibling === null ? l.data = "" : (i.push(l), o--), c++;
        } else {
          let b = -1;
          for (; (b = l.data.indexOf(J, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const l of i)
      l.parentNode.removeChild(l);
  }
}
const _t = (s, e) => {
  const t = s.length - e.length;
  return t >= 0 && s.slice(t) === e;
}, Kt = (s) => s.index !== -1, re = () => document.createComment(""), je = (
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
const ot = 133;
function Qt(s, e) {
  const { element: { content: t }, parts: i } = s, r = document.createTreeWalker(t, ot, null, !1);
  let n = _e(i), a = i[n], o = -1, c = 0;
  const d = [];
  let p = null;
  for (; r.nextNode(); ) {
    o++;
    const l = r.currentNode;
    for (l.previousSibling === p && (p = null), e.has(l) && (d.push(l), p === null && (p = l)), p !== null && c++; a !== void 0 && a.index === o; )
      a.index = p !== null ? -1 : a.index - c, n = _e(i, n), a = i[n];
  }
  d.forEach((l) => l.parentNode.removeChild(l));
}
const Ti = (s) => {
  let e = s.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(s, ot, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, _e = (s, e = -1) => {
  for (let t = e + 1; t < s.length; t++) {
    const i = s[t];
    if (Kt(i))
      return t;
  }
  return -1;
};
function Li(s, e, t = null) {
  const { element: { content: i }, parts: r } = s;
  if (t == null) {
    i.appendChild(e);
    return;
  }
  const n = document.createTreeWalker(i, ot, null, !1);
  let a = _e(r), o = 0, c = -1;
  for (; n.nextNode(); )
    for (c++, n.currentNode === t && (o = Ti(e), t.parentNode.insertBefore(e, t)); a !== -1 && r[a].index === c; ) {
      if (o > 0) {
        for (; a !== -1; )
          r[a].index += o, a = _e(r, a);
        return;
      }
      a = _e(r, a);
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
const Jt = /* @__PURE__ */ new WeakMap(), Ee = (s) => (...e) => {
  const t = s(...e);
  return Jt.set(t, !0), t;
}, Ae = (s) => typeof s == "function" && Jt.has(s);
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
const G = {}, wt = {};
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
class We {
  constructor(e, t, i) {
    this.__parts = [], this.template = e, this.processor = t, this.options = i;
  }
  update(e) {
    let t = 0;
    for (const i of this.__parts)
      i !== void 0 && i.setValue(e[t]), t++;
    for (const i of this.__parts)
      i !== void 0 && i.commit();
  }
  _clone() {
    const e = vt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], i = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let n = 0, a = 0, o, c = r.nextNode();
    for (; n < i.length; ) {
      if (o = i[n], !Kt(o)) {
        this.__parts.push(void 0), n++;
        continue;
      }
      for (; a < o.index; )
        a++, c.nodeName === "TEMPLATE" && (t.push(c), r.currentNode = c.content), (c = r.nextNode()) === null && (r.currentNode = t.pop(), c = r.nextNode());
      if (o.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(c.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, o.name, o.strings, this.options));
      n++;
    }
    return vt && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const St = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (s) => s }), Pi = ` ${J} `;
class ct {
  constructor(e, t, i, r) {
    this.strings = e, this.values = t, this.type = i, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", i = !1;
    for (let r = 0; r < e; r++) {
      const n = this.strings[r], a = n.lastIndexOf("<!--");
      i = (a > -1 || i) && n.indexOf("-->", a + 1) === -1;
      const o = je.exec(n);
      o === null ? t += n + (i ? Pi : Zt) : t += n.substr(0, o.index) + o[1] + o[2] + ke + o[3] + J;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return St !== void 0 && (t = St.createHTML(t)), e.innerHTML = t, e;
  }
}
class Mi extends ct {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const e = super.getTemplateElement(), t = e.content, i = t.firstChild;
    return t.removeChild(i), Ri(t, i.firstChild), e;
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
const Ie = (s) => s === null || !(typeof s == "object" || typeof s == "function"), Ze = (s) => Array.isArray(s) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(s && s[Symbol.iterator]);
class Yt {
  constructor(e, t, i) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];
    for (let r = 0; r < i.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new be(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, i = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const n = i[0].value;
      if (typeof n == "symbol")
        return String(n);
      if (typeof n == "string" || !Ze(n))
        return n;
    }
    let r = "";
    for (let n = 0; n < t; n++) {
      r += e[n];
      const a = i[n];
      if (a !== void 0) {
        const o = a.value;
        if (Ie(o) || !Ze(o))
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
class be {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== G && (!Ie(e) || e !== this.value) && (this.value = e, Ae(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ae(this.value); ) {
      const e = this.value;
      this.value = G, e(this);
    }
    this.value !== G && this.committer.commit();
  }
}
class ye {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(re()), this.endNode = e.appendChild(re());
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
    e.__insert(this.startNode = re()), e.__insert(this.endNode = re());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = re()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Ae(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = G, t(this);
    }
    const e = this.__pendingValue;
    e !== G && (Ie(e) ? e !== this.value && this.__commitText(e) : e instanceof ct ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Ze(e) ? this.__commitIterable(e) : e === wt ? (this.value = wt, this.clear()) : this.__commitText(e));
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
    const i = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof We && this.value.template === t)
      this.value.update(e.values);
    else {
      const i = new We(t, e.processor, this.options), r = i._clone();
      i.update(e.values), this.__commitNode(r), this.value = i;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let i = 0, r;
    for (const n of e)
      r = t[i], r === void 0 && (r = new ye(this.options), t.push(r), i === 0 ? r.appendIntoPart(this) : r.insertAfterPart(t[i - 1])), r.setValue(n), r.commit(), i++;
    i < t.length && (t.length = i, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    at(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class $i {
  constructor(e, t, i) {
    if (this.value = void 0, this.__pendingValue = void 0, i.length !== 2 || i[0] !== "" || i[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = i;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ae(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = G, t(this);
    }
    if (this.__pendingValue === G)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = G;
  }
}
class zi extends Yt {
  constructor(e, t, i) {
    super(e, t, i), this.single = i.length === 2 && i[0] === "" && i[1] === "";
  }
  _createPart() {
    return new lt(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class lt extends be {
}
let ei = !1;
(() => {
  try {
    const s = {
      get capture() {
        return ei = !0, !1;
      }
    };
    window.addEventListener("test", s, s), window.removeEventListener("test", s, s);
  } catch {
  }
})();
class Fi {
  constructor(e, t, i) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ae(this.__pendingValue); ) {
      const n = this.__pendingValue;
      this.__pendingValue = G, n(this);
    }
    if (this.__pendingValue === G)
      return;
    const e = this.__pendingValue, t = this.value, i = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), r = e != null && (t == null || i);
    i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = Di(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = G;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Di = (s) => s && (ei ? { capture: s.capture, passive: s.passive, once: s.once } : s.capture);
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
function Oi(s) {
  let e = Ce.get(s.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Ce.set(s.type, e));
  let t = e.stringsArray.get(s.strings);
  if (t !== void 0)
    return t;
  const i = s.strings.join(J);
  return t = e.keyString.get(i), t === void 0 && (t = new Xt(s, s.getTemplateElement()), e.keyString.set(i, t)), e.stringsArray.set(s.strings, t), t;
}
const Ce = /* @__PURE__ */ new Map();
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
const fe = /* @__PURE__ */ new WeakMap(), Ni = (s, e, t) => {
  let i = fe.get(e);
  i === void 0 && (at(e, e.firstChild), fe.set(e, i = new ye(Object.assign({ templateFactory: Oi }, t))), i.appendInto(e)), i.setValue(s), i.commit();
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
class Hi {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, i, r) {
    const n = t[0];
    return n === "." ? new zi(e, t.slice(1), i).parts : n === "@" ? [new Fi(e, t.slice(1), r.eventContext)] : n === "?" ? [new $i(e, t.slice(1), i)] : new Yt(e, t, i).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new ye(e);
  }
}
const ti = new Hi();
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
const g = (s, ...e) => new ct(s, e, "html", ti), S = (s, ...e) => new Mi(s, e, "svg", ti);
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
const ii = (s, e) => `${s}--${e}`;
let Oe = !0;
typeof window.ShadyCSS > "u" ? Oe = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Oe = !1);
const Vi = (s) => (e) => {
  const t = ii(e.type, s);
  let i = Ce.get(t);
  i === void 0 && (i = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Ce.set(t, i));
  let r = i.stringsArray.get(e.strings);
  if (r !== void 0)
    return r;
  const n = e.strings.join(J);
  if (r = i.keyString.get(n), r === void 0) {
    const a = e.getTemplateElement();
    Oe && window.ShadyCSS.prepareTemplateDom(a, s), r = new Xt(e, a), i.keyString.set(n, r);
  }
  return i.stringsArray.set(e.strings, r), r;
}, Bi = ["html", "svg"], Ui = (s) => {
  Bi.forEach((e) => {
    const t = Ce.get(ii(e, s));
    t !== void 0 && t.keyString.forEach((i) => {
      const { element: { content: r } } = i, n = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((a) => {
        n.add(a);
      }), Qt(i, n);
    });
  });
}, ri = /* @__PURE__ */ new Set(), qi = (s, e, t) => {
  ri.add(s);
  const i = t ? t.element : document.createElement("template"), r = e.querySelectorAll("style"), { length: n } = r;
  if (n === 0) {
    window.ShadyCSS.prepareTemplateStyles(i, s);
    return;
  }
  const a = document.createElement("style");
  for (let d = 0; d < n; d++) {
    const p = r[d];
    p.parentNode.removeChild(p), a.textContent += p.textContent;
  }
  Ui(s);
  const o = i.content;
  t ? Li(t, a, o.firstChild) : o.insertBefore(a, o.firstChild), window.ShadyCSS.prepareTemplateStyles(i, s);
  const c = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (t) {
    o.insertBefore(a, o.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(a), Qt(t, d);
  }
}, Gi = (s, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const i = t.scopeName, r = fe.has(e), n = Oe && e.nodeType === 11 && !!e.host, a = n && !ri.has(i), o = a ? document.createDocumentFragment() : e;
  if (Ni(s, o, Object.assign({ templateFactory: Vi(i) }, t)), a) {
    const c = fe.get(o);
    fe.delete(o);
    const d = c.value instanceof We ? c.value.template : void 0;
    qi(i, o, d), at(e, e.firstChild), e.appendChild(o), fe.set(e, c);
  }
  !r && n && window.ShadyCSS.styleElement(e.host);
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
var si;
window.JSCompiler_renameProperty = (s, e) => s;
const Xe = {
  toAttribute(s, e) {
    switch (e) {
      case Boolean:
        return s ? "" : null;
      case Object:
      case Array:
        return s == null ? s : JSON.stringify(s);
    }
    return s;
  },
  fromAttribute(s, e) {
    switch (e) {
      case Boolean:
        return s !== null;
      case Number:
        return s === null ? null : Number(s);
      case Object:
      case Array:
        return JSON.parse(s);
    }
    return s;
  }
}, ni = (s, e) => e !== s && (e === e || s === s), Be = {
  attribute: !0,
  type: String,
  converter: Xe,
  reflect: !1,
  hasChanged: ni
}, Ue = 1, At = 4, Ct = 8, Et = 16, Ke = "finalized";
class ai extends HTMLElement {
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
    return this._classProperties.forEach((t, i) => {
      const r = this._attributeNameForProperty(i, t);
      r !== void 0 && (this._attributeToPropertyMap.set(r, i), e.push(r));
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
      e !== void 0 && e.forEach((t, i) => this._classProperties.set(i, t));
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
  static createProperty(e, t = Be) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const i = typeof e == "symbol" ? Symbol() : `__${e}`, r = this.getPropertyDescriptor(e, i, t);
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
  static getPropertyDescriptor(e, t, i) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(r) {
        const n = this[e];
        this[t] = r, this.requestUpdateInternal(e, n, i);
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
    return this._classProperties && this._classProperties.get(e) || Be;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(Ke) || e.finalize(), this[Ke] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, i = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const r of i)
        this.createProperty(r, t[r]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, i = ni) {
    return i(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const i = t.type, r = t.converter || Xe, n = typeof r == "function" ? r : r.fromAttribute;
    return n ? n(e, i) : e;
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
    const i = t.type, r = t.converter;
    return (r && r.toAttribute || Xe.toAttribute)(e, i);
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
        const i = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, i);
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
  attributeChangedCallback(e, t, i) {
    t !== i && this._attributeToProperty(e, i);
  }
  _propertyToAttribute(e, t, i = Be) {
    const r = this.constructor, n = r._attributeNameForProperty(e, i);
    if (n !== void 0) {
      const a = r._propertyValueToAttribute(t, i);
      if (a === void 0)
        return;
      this._updateState = this._updateState | Ct, a == null ? this.removeAttribute(n) : this.setAttribute(n, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & Ct)
      return;
    const i = this.constructor, r = i._attributeToPropertyMap.get(e);
    if (r !== void 0) {
      const n = i.getPropertyOptions(r);
      this._updateState = this._updateState | Et, this[r] = // tslint:disable-next-line:no-any
      i._propertyValueFromAttribute(t, n), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, i) {
    let r = !0;
    if (e !== void 0) {
      const n = this.constructor;
      i = i || n.getPropertyOptions(e), n._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), i.reflect === !0 && !(this._updateState & Et) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, i))) : r = !1;
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
    this._updateState = this._updateState | At;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & At;
  }
  get hasUpdated() {
    return this._updateState & Ue;
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
    } catch (i) {
      throw e = !1, this._markUpdated(), i;
    }
    e && (this._updateState & Ue || (this._updateState = this._updateState | Ue, this.firstUpdated(t)), this.updated(t));
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, i) => this._propertyToAttribute(i, this[i], t)), this._reflectingProperties = void 0), this._markUpdated();
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
si = Ke;
ai[si] = !0;
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
const ji = (s, e) => (window.customElements.define(s, e), e), Wi = (s, e) => {
  const { kind: t, elements: i } = e;
  return {
    kind: t,
    elements: i,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(s, r);
    }
  };
}, Y = (s) => (e) => typeof e == "function" ? ji(s, e) : Wi(s, e), Zi = (s, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
  t.createProperty(e.key, s);
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
    t.createProperty(e.key, s);
  }
}, Xi = (s, e, t) => {
  e.constructor.createProperty(t, s);
};
function f(s) {
  return (e, t) => t !== void 0 ? Xi(s, e, t) : Zi(s, e);
}
function Ki(s) {
  return f({ attribute: !1, hasChanged: void 0 });
}
const C = (s) => Ki();
function z(s, e) {
  return (t, i) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(s);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? dt(r, t, i) : pt(r, t);
  };
}
function oi(s) {
  return (e, t) => {
    const i = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(s);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? dt(i, e, t) : pt(i, e);
  };
}
const dt = (s, e, t) => {
  Object.defineProperty(e, t, s);
}, pt = (s, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: s
}), Qi = (s, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], s);
} }), Ji = (
  // tslint:disable-next-line:no-any legacy decorator
  (s, e, t) => {
    Object.assign(e[t], s);
  }
);
function Yi(s) {
  return (e, t) => t !== void 0 ? Ji(s, e, t) : Qi(s, e);
}
const It = Element.prototype, er = It.msMatchesSelector || It.webkitMatchesSelector;
function ci(s = "", e = !1, t = "") {
  return (i, r) => {
    const n = {
      get() {
        const a = `slot${s ? `[name=${s}]` : ":not([name])"}`, o = this.renderRoot.querySelector(a);
        let c = o && o.assignedNodes({ flatten: e });
        return c && t && (c = c.filter((d) => d.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (d.matches ? d.matches(t) : er.call(d, t)))), c;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? dt(n, i, r) : pt(n, i);
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
const Qe = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ht = Symbol();
class ut {
  constructor(e, t) {
    if (t !== ht)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Qe ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const li = (s) => new ut(String(s), ht), tr = (s) => {
  if (s instanceof ut)
    return s.cssText;
  if (typeof s == "number")
    return s;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, xe = (s, ...e) => {
  const t = e.reduce((i, r, n) => i + tr(r) + s[n + 1], s[0]);
  return new ut(t, ht);
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
const Rt = {};
class ce extends ai {
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
      const t = (n, a) => n.reduceRight((o, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? t(c, o) : (o.add(c), o)
      ), a), i = t(e, /* @__PURE__ */ new Set()), r = [];
      i.forEach((n) => r.unshift(n)), this._styles = r;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !Qe) {
        const i = Array.prototype.slice.call(t.cssRules).reduce((r, n) => r + n.cssText, "");
        return li(i);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : Qe ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== Rt && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((i) => {
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
    return Rt;
  }
}
ce.finalized = !0;
ce.render = Gi;
ce.shadowRootOptions = { mode: "open" };
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
const Tt = /* @__PURE__ */ new WeakMap(), ir = Ee((s) => (e) => {
  if (!(e instanceof ye))
    throw new Error("unsafeHTML can only be used in text bindings");
  const t = Tt.get(e);
  if (t !== void 0 && Ie(s) && s === t.value && e.value === t.fragment)
    return;
  const i = document.createElement("template");
  i.innerHTML = s;
  const r = document.importNode(i.content, !0);
  e.setValue(r), Tt.set(e, { value: s, fragment: r });
});
function di() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
let pe = di();
function rr(s) {
  pe = s;
}
const pi = /[&<>"']/, sr = new RegExp(pi.source, "g"), hi = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, nr = new RegExp(hi.source, "g"), ar = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Lt = (s) => ar[s];
function M(s, e) {
  if (e) {
    if (pi.test(s))
      return s.replace(sr, Lt);
  } else if (hi.test(s))
    return s.replace(nr, Lt);
  return s;
}
const or = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function ui(s) {
  return s.replace(or, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const cr = /(^|[^\[])\^/g;
function _(s, e) {
  s = typeof s == "string" ? s : s.source, e = e || "";
  const t = {
    replace: (i, r) => (r = r.source || r, r = r.replace(cr, "$1"), s = s.replace(i, r), t),
    getRegex: () => new RegExp(s, e)
  };
  return t;
}
const lr = /[^\w:]/g, dr = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Pt(s, e, t) {
  if (s) {
    let i;
    try {
      i = decodeURIComponent(ui(t)).replace(lr, "").toLowerCase();
    } catch {
      return null;
    }
    if (i.indexOf("javascript:") === 0 || i.indexOf("vbscript:") === 0 || i.indexOf("data:") === 0)
      return null;
  }
  e && !dr.test(t) && (t = mr(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const Le = {}, pr = /^[^:]+:\/*[^/]*$/, hr = /^([^:]+:)[\s\S]*$/, ur = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function mr(s, e) {
  Le[" " + s] || (pr.test(s) ? Le[" " + s] = s + "/" : Le[" " + s] = De(s, "/", !0)), s = Le[" " + s];
  const t = s.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? t ? e : s.replace(hr, "$1") + e : e.charAt(0) === "/" ? t ? e : s.replace(ur, "$1") + e : s + e;
}
const Ne = { exec: function() {
} };
function Mt(s, e) {
  const t = s.replace(/\|/g, (n, a, o) => {
    let c = !1, d = a;
    for (; --d >= 0 && o[d] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), i = t.split(/ \|/);
  let r = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), i.length > e)
    i.splice(e);
  else
    for (; i.length < e; ) i.push("");
  for (; r < i.length; r++)
    i[r] = i[r].trim().replace(/\\\|/g, "|");
  return i;
}
function De(s, e, t) {
  const i = s.length;
  if (i === 0)
    return "";
  let r = 0;
  for (; r < i; ) {
    const n = s.charAt(i - r - 1);
    if (n === e && !t)
      r++;
    else if (n !== e && t)
      r++;
    else
      break;
  }
  return s.slice(0, i - r);
}
function fr(s, e) {
  if (s.indexOf(e[1]) === -1)
    return -1;
  const t = s.length;
  let i = 0, r = 0;
  for (; r < t; r++)
    if (s[r] === "\\")
      r++;
    else if (s[r] === e[0])
      i++;
    else if (s[r] === e[1] && (i--, i < 0))
      return r;
  return -1;
}
function gr(s) {
  s && s.sanitize && !s.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function $t(s, e) {
  if (e < 1)
    return "";
  let t = "";
  for (; e > 1; )
    e & 1 && (t += s), e >>= 1, s += s;
  return t + s;
}
function zt(s, e, t, i) {
  const r = e.href, n = e.title ? M(e.title) : null, a = s[1].replace(/\\([\[\]])/g, "$1");
  if (s[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: r,
      title: n,
      text: a,
      tokens: i.inlineTokens(a)
    };
    return i.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: r,
    title: n,
    text: M(a)
  };
}
function br(s, e) {
  const t = s.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const i = t[1];
  return e.split(`
`).map((r) => {
    const n = r.match(/^\s+/);
    if (n === null)
      return r;
    const [a] = n;
    return a.length >= i.length ? r.slice(i.length) : r;
  }).join(`
`);
}
class mt {
  constructor(e) {
    this.options = e || pe;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const i = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : De(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], r = br(i, t[3] || "");
      return {
        type: "code",
        raw: i,
        lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
        text: r
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let i = t[2].trim();
      if (/#$/.test(i)) {
        const r = De(i, "#");
        (this.options.pedantic || !r || / $/.test(r)) && (i = r.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const i = t[0].replace(/^ *>[ \t]?/gm, ""), r = this.lexer.state.top;
      this.lexer.state.top = !0;
      const n = this.lexer.blockTokens(i);
      return this.lexer.state.top = r, {
        type: "blockquote",
        raw: t[0],
        tokens: n,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let i, r, n, a, o, c, d, p, l, b, h, E, I = t[1].trim();
      const $ = I.length > 1, k = {
        type: "list",
        raw: "",
        ordered: $,
        start: $ ? +I.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      I = $ ? `\\d{1,9}\\${I.slice(-1)}` : `\\${I}`, this.options.pedantic && (I = $ ? I : "[*+-]");
      const w = new RegExp(`^( {0,3}${I})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e && (E = !1, !(!(t = w.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (i = t[0], e = e.substring(i.length), p = t[2].split(`
`, 1)[0].replace(/^\t+/, (K) => " ".repeat(3 * K.length)), l = e.split(`
`, 1)[0], this.options.pedantic ? (a = 2, h = p.trimLeft()) : (a = t[2].search(/[^ ]/), a = a > 4 ? 1 : a, h = p.slice(a), a += t[1].length), c = !1, !p && /^ *$/.test(l) && (i += l + `
`, e = e.substring(l.length + 1), E = !0), !E) {
          const K = new RegExp(`^ {0,${Math.min(3, a - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), W = new RegExp(`^ {0,${Math.min(3, a - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), Z = new RegExp(`^ {0,${Math.min(3, a - 1)}}(?:\`\`\`|~~~)`), ve = new RegExp(`^ {0,${Math.min(3, a - 1)}}#`);
          for (; e && (b = e.split(`
`, 1)[0], l = b, this.options.pedantic && (l = l.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(Z.test(l) || ve.test(l) || K.test(l) || W.test(e))); ) {
            if (l.search(/[^ ]/) >= a || !l.trim())
              h += `
` + l.slice(a);
            else {
              if (c || p.search(/[^ ]/) >= 4 || Z.test(p) || ve.test(p) || W.test(p))
                break;
              h += `
` + l;
            }
            !c && !l.trim() && (c = !0), i += b + `
`, e = e.substring(b.length + 1), p = l.slice(a);
          }
        }
        k.loose || (d ? k.loose = !0 : /\n *\n *$/.test(i) && (d = !0)), this.options.gfm && (r = /^\[[ xX]\] /.exec(h), r && (n = r[0] !== "[ ] ", h = h.replace(/^\[[ xX]\] +/, ""))), k.items.push({
          type: "list_item",
          raw: i,
          task: !!r,
          checked: n,
          loose: !1,
          text: h
        }), k.raw += i;
      }
      k.items[k.items.length - 1].raw = i.trimRight(), k.items[k.items.length - 1].text = h.trimRight(), k.raw = k.raw.trimRight();
      const P = k.items.length;
      for (o = 0; o < P; o++)
        if (this.lexer.state.top = !1, k.items[o].tokens = this.lexer.blockTokens(k.items[o].text, []), !k.loose) {
          const K = k.items[o].tokens.filter((Z) => Z.type === "space"), W = K.length > 0 && K.some((Z) => /\n.*\n/.test(Z.raw));
          k.loose = W;
        }
      if (k.loose)
        for (o = 0; o < P; o++)
          k.items[o].loose = !0;
      return k;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) {
      const i = {
        type: "html",
        raw: t[0],
        pre: !this.options.sanitizer && (t[1] === "pre" || t[1] === "script" || t[1] === "style"),
        text: t[0]
      };
      if (this.options.sanitize) {
        const r = this.options.sanitizer ? this.options.sanitizer(t[0]) : M(t[0]);
        i.type = "paragraph", i.text = r, i.tokens = this.lexer.inline(r);
      }
      return i;
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const i = t[1].toLowerCase().replace(/\s+/g, " "), r = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return {
        type: "def",
        tag: i,
        raw: t[0],
        href: r,
        title: n
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const i = {
        type: "table",
        header: Mt(t[1]).map((r) => ({ text: r })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (i.header.length === i.align.length) {
        i.raw = t[0];
        let r = i.align.length, n, a, o, c;
        for (n = 0; n < r; n++)
          /^ *-+: *$/.test(i.align[n]) ? i.align[n] = "right" : /^ *:-+: *$/.test(i.align[n]) ? i.align[n] = "center" : /^ *:-+ *$/.test(i.align[n]) ? i.align[n] = "left" : i.align[n] = null;
        for (r = i.rows.length, n = 0; n < r; n++)
          i.rows[n] = Mt(i.rows[n], i.header.length).map((d) => ({ text: d }));
        for (r = i.header.length, a = 0; a < r; a++)
          i.header[a].tokens = this.lexer.inline(i.header[a].text);
        for (r = i.rows.length, a = 0; a < r; a++)
          for (c = i.rows[a], o = 0; o < c.length; o++)
            c[o].tokens = this.lexer.inline(c[o].text);
        return i;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const i = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: M(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : M(t[0]) : t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const i = t[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const a = De(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = fr(t[2], "()");
        if (a > -1) {
          const c = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, c).trim(), t[3] = "";
        }
      }
      let r = t[2], n = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
        a && (r = a[1], n = a[3]);
      } else
        n = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), /^</.test(r) && (this.options.pedantic && !/>$/.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), zt(t, {
        href: r && r.replace(this.rules.inline._escapes, "$1"),
        title: n && n.replace(this.rules.inline._escapes, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      let r = (i[2] || i[1]).replace(/\s+/g, " ");
      if (r = t[r.toLowerCase()], !r) {
        const n = i[0].charAt(0);
        return {
          type: "text",
          raw: n,
          text: n
        };
      }
      return zt(i, r, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let r = this.rules.inline.emStrong.lDelim.exec(e);
    if (!r || r[3] && i.match(/[\p{L}\p{N}]/u)) return;
    const n = r[1] || r[2] || "";
    if (!n || n && (i === "" || this.rules.inline.punctuation.exec(i))) {
      const a = r[0].length - 1;
      let o, c, d = a, p = 0;
      const l = r[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (l.lastIndex = 0, t = t.slice(-1 * e.length + a); (r = l.exec(t)) != null; ) {
        if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o) continue;
        if (c = o.length, r[3] || r[4]) {
          d += c;
          continue;
        } else if ((r[5] || r[6]) && a % 3 && !((a + c) % 3)) {
          p += c;
          continue;
        }
        if (d -= c, d > 0) continue;
        c = Math.min(c, c + d + p);
        const b = e.slice(0, a + r.index + (r[0].length - o.length) + c);
        if (Math.min(a, c) % 2) {
          const E = b.slice(1, -1);
          return {
            type: "em",
            raw: b,
            text: E,
            tokens: this.lexer.inlineTokens(E)
          };
        }
        const h = b.slice(2, -2);
        return {
          type: "strong",
          raw: b,
          text: h,
          tokens: this.lexer.inlineTokens(h)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const r = /[^ ]/.test(i), n = /^ /.test(i) && / $/.test(i);
      return r && n && (i = i.substring(1, i.length - 1)), i = M(i, !0), {
        type: "codespan",
        raw: t[0],
        text: i
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e, t) {
    const i = this.rules.inline.autolink.exec(e);
    if (i) {
      let r, n;
      return i[2] === "@" ? (r = M(this.options.mangle ? t(i[1]) : i[1]), n = "mailto:" + r) : (r = M(i[1]), n = r), {
        type: "link",
        raw: i[0],
        text: r,
        href: n,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(e, t) {
    let i;
    if (i = this.rules.inline.url.exec(e)) {
      let r, n;
      if (i[2] === "@")
        r = M(this.options.mangle ? t(i[0]) : i[0]), n = "mailto:" + r;
      else {
        let a;
        do
          a = i[0], i[0] = this.rules.inline._backpedal.exec(i[0])[0];
        while (a !== i[0]);
        r = M(i[0]), i[1] === "www." ? n = "http://" + i[0] : n = i[0];
      }
      return {
        type: "link",
        raw: i[0],
        text: r,
        href: n,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(e, t) {
    const i = this.rules.inline.text.exec(e);
    if (i) {
      let r;
      return this.lexer.state.inRawBlock ? r = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : M(i[0]) : i[0] : r = M(this.options.smartypants ? t(i[0]) : i[0]), {
        type: "text",
        raw: i[0],
        text: r
      };
    }
  }
}
const y = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: Ne,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
y._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
y._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
y.def = _(y.def).replace("label", y._label).replace("title", y._title).getRegex();
y.bullet = /(?:[*+-]|\d{1,9}[.)])/;
y.listItemStart = _(/^( *)(bull) */).replace("bull", y.bullet).getRegex();
y.list = _(y.list).replace(/bull/g, y.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + y.def.source + ")").getRegex();
y._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
y._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
y.html = _(y.html, "i").replace("comment", y._comment).replace("tag", y._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
y.paragraph = _(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex();
y.blockquote = _(y.blockquote).replace("paragraph", y.paragraph).getRegex();
y.normal = { ...y };
y.gfm = {
  ...y.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
y.gfm.table = _(y.gfm.table).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex();
y.gfm.paragraph = _(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", y.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex();
y.pedantic = {
  ...y.normal,
  html: _(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", y._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Ne,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: _(y.normal._paragraph).replace("hr", y.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", y.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
const m = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Ne,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: Ne,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
m._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
m.punctuation = _(m.punctuation).replace(/punctuation/g, m._punctuation).getRegex();
m.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
m.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
m._comment = _(y._comment).replace("(?:-->|$)", "-->").getRegex();
m.emStrong.lDelim = _(m.emStrong.lDelim).replace(/punct/g, m._punctuation).getRegex();
m.emStrong.rDelimAst = _(m.emStrong.rDelimAst, "g").replace(/punct/g, m._punctuation).getRegex();
m.emStrong.rDelimUnd = _(m.emStrong.rDelimUnd, "g").replace(/punct/g, m._punctuation).getRegex();
m._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
m._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
m._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
m.autolink = _(m.autolink).replace("scheme", m._scheme).replace("email", m._email).getRegex();
m._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
m.tag = _(m.tag).replace("comment", m._comment).replace("attribute", m._attribute).getRegex();
m._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
m._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
m._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
m.link = _(m.link).replace("label", m._label).replace("href", m._href).replace("title", m._title).getRegex();
m.reflink = _(m.reflink).replace("label", m._label).replace("ref", y._label).getRegex();
m.nolink = _(m.nolink).replace("ref", y._label).getRegex();
m.reflinkSearch = _(m.reflinkSearch, "g").replace("reflink", m.reflink).replace("nolink", m.nolink).getRegex();
m.normal = { ...m };
m.pedantic = {
  ...m.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: _(/^!?\[(label)\]\((.*?)\)/).replace("label", m._label).getRegex(),
  reflink: _(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", m._label).getRegex()
};
m.gfm = {
  ...m.normal,
  escape: _(m.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
m.gfm.url = _(m.gfm.url, "i").replace("email", m.gfm._extended_email).getRegex();
m.breaks = {
  ...m.gfm,
  br: _(m.br).replace("{2,}", "*").getRegex(),
  text: _(m.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function yr(s) {
  return s.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function Ft(s) {
  let e = "", t, i;
  const r = s.length;
  for (t = 0; t < r; t++)
    i = s.charCodeAt(t), Math.random() > 0.5 && (i = "x" + i.toString(16)), e += "&#" + i + ";";
  return e;
}
class ne {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || pe, this.options.tokenizer = this.options.tokenizer || new mt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: y.normal,
      inline: m.normal
    };
    this.options.pedantic ? (t.block = y.pedantic, t.inline = m.pedantic) : this.options.gfm && (t.block = y.gfm, this.options.breaks ? t.inline = m.breaks : t.inline = m.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: y,
      inline: m
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new ne(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new ne(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (o, c, d) => c + "    ".repeat(d.length));
    let i, r, n, a;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (i = o.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(e)) {
          e = e.substring(i.raw.length), i.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(i);
          continue;
        }
        if (i = this.tokenizer.code(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.list(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.html(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.def(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + i.raw, r.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (n = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const c = e.slice(1);
          let d;
          this.options.extensions.startBlock.forEach(function(p) {
            d = p.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (o = Math.min(o, d));
          }), o < 1 / 0 && o >= 0 && (n = e.substring(0, o + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(n))) {
          r = t[t.length - 1], a && r.type === "paragraph" ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i), a = n.length !== e.length, e = e.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && r.type === "text" ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i);
          continue;
        }
        if (e) {
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let i, r, n, a = e, o, c, d;
    if (this.tokens.links) {
      const p = Object.keys(this.tokens.links);
      if (p.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; )
          p.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, o.index) + "[" + $t("a", o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; )
      a = a.slice(0, o.index) + "[" + $t("a", o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.escapedEmSt.exec(a)) != null; )
      a = a.slice(0, o.index + o[0].length - 2) + "++" + a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e; )
      if (c || (d = ""), c = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((p) => (i = p.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.link(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(e, a, d)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.br(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.del(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(e, Ft)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(e, Ft))) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (n = e, this.options.extensions && this.options.extensions.startInline) {
          let p = 1 / 0;
          const l = e.slice(1);
          let b;
          this.options.extensions.startInline.forEach(function(h) {
            b = h.call({ lexer: this }, l), typeof b == "number" && b >= 0 && (p = Math.min(p, b));
          }), p < 1 / 0 && p >= 0 && (n = e.substring(0, p + 1));
        }
        if (i = this.tokenizer.inlineText(n, yr)) {
          e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (d = i.raw.slice(-1)), c = !0, r = t[t.length - 1], r && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
          continue;
        }
        if (e) {
          const p = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(p);
            break;
          } else
            throw new Error(p);
        }
      }
    return t;
  }
}
class ft {
  constructor(e) {
    this.options = e || pe;
  }
  code(e, t, i) {
    const r = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const n = this.options.highlight(e, r);
      n != null && n !== e && (i = !0, e = n);
    }
    return e = e.replace(/\n$/, "") + `
`, r ? '<pre><code class="' + this.options.langPrefix + M(r) + '">' + (i ? e : M(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : M(e, !0)) + `</code></pre>
`;
  }
  /**
   * @param {string} quote
   */
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e) {
    return e;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(e, t, i, r) {
    if (this.options.headerIds) {
      const n = this.options.headerPrefix + r.slug(i);
      return `<h${t} id="${n}">${e}</h${t}>
`;
    }
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(e, t, i) {
    const r = t ? "ol" : "ul", n = t && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + r + n + `>
` + e + "</" + r + `>
`;
  }
  /**
   * @param {string} text
   */
  listitem(e) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  /**
   * @param {string} content
   */
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + e + `</${i}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(e) {
    return `<em>${e}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(e) {
    return `<del>${e}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(e, t, i) {
    if (e = Pt(this.options.sanitize, this.options.baseUrl, e), e === null)
      return i;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + t + '"'), r += ">" + i + "</a>", r;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(e, t, i) {
    if (e = Pt(this.options.sanitize, this.options.baseUrl, e), e === null)
      return i;
    let r = `<img src="${e}" alt="${i}"`;
    return t && (r += ` title="${t}"`), r += this.options.xhtml ? "/>" : ">", r;
  }
  text(e) {
    return e;
  }
}
class mi {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, i) {
    return "" + i;
  }
  image(e, t, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class fi {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(e) {
    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(e, t) {
    let i = e, r = 0;
    if (this.seen.hasOwnProperty(i)) {
      r = this.seen[e];
      do
        r++, i = e + "-" + r;
      while (this.seen.hasOwnProperty(i));
    }
    return t || (this.seen[e] = r, this.seen[i] = 0), i;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(e, t = {}) {
    const i = this.serialize(e);
    return this.getNextSafeSlug(i, t.dryrun);
  }
}
class ae {
  constructor(e) {
    this.options = e || pe, this.options.renderer = this.options.renderer || new ft(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new mi(), this.slugger = new fi();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new ae(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new ae(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let i = "", r, n, a, o, c, d, p, l, b, h, E, I, $, k, w, P, K, W, Z;
    const ve = e.length;
    for (r = 0; r < ve; r++) {
      if (h = e[r], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[h.type] && (Z = this.options.extensions.renderers[h.type].call({ parser: this }, h), Z !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(h.type))) {
        i += Z || "";
        continue;
      }
      switch (h.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          i += this.renderer.heading(
            this.parseInline(h.tokens),
            h.depth,
            ui(this.parseInline(h.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          i += this.renderer.code(
            h.text,
            h.lang,
            h.escaped
          );
          continue;
        }
        case "table": {
          for (l = "", p = "", o = h.header.length, n = 0; n < o; n++)
            p += this.renderer.tablecell(
              this.parseInline(h.header[n].tokens),
              { header: !0, align: h.align[n] }
            );
          for (l += this.renderer.tablerow(p), b = "", o = h.rows.length, n = 0; n < o; n++) {
            for (d = h.rows[n], p = "", c = d.length, a = 0; a < c; a++)
              p += this.renderer.tablecell(
                this.parseInline(d[a].tokens),
                { header: !1, align: h.align[a] }
              );
            b += this.renderer.tablerow(p);
          }
          i += this.renderer.table(l, b);
          continue;
        }
        case "blockquote": {
          b = this.parse(h.tokens), i += this.renderer.blockquote(b);
          continue;
        }
        case "list": {
          for (E = h.ordered, I = h.start, $ = h.loose, o = h.items.length, b = "", n = 0; n < o; n++)
            w = h.items[n], P = w.checked, K = w.task, k = "", w.task && (W = this.renderer.checkbox(P), $ ? w.tokens.length > 0 && w.tokens[0].type === "paragraph" ? (w.tokens[0].text = W + " " + w.tokens[0].text, w.tokens[0].tokens && w.tokens[0].tokens.length > 0 && w.tokens[0].tokens[0].type === "text" && (w.tokens[0].tokens[0].text = W + " " + w.tokens[0].tokens[0].text)) : w.tokens.unshift({
              type: "text",
              text: W
            }) : k += W), k += this.parse(w.tokens, $), b += this.renderer.listitem(k, K, P);
          i += this.renderer.list(b, E, I);
          continue;
        }
        case "html": {
          i += this.renderer.html(h.text);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(this.parseInline(h.tokens));
          continue;
        }
        case "text": {
          for (b = h.tokens ? this.parseInline(h.tokens) : h.text; r + 1 < ve && e[r + 1].type === "text"; )
            h = e[++r], b += `
` + (h.tokens ? this.parseInline(h.tokens) : h.text);
          i += t ? this.renderer.paragraph(b) : b;
          continue;
        }
        default: {
          const xt = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent) {
            console.error(xt);
            return;
          } else
            throw new Error(xt);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let i = "", r, n, a;
    const o = e.length;
    for (r = 0; r < o; r++) {
      if (n = e[r], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type] && (a = this.options.extensions.renderers[n.type].call({ parser: this }, n), a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type))) {
        i += a || "";
        continue;
      }
      switch (n.type) {
        case "escape": {
          i += t.text(n.text);
          break;
        }
        case "html": {
          i += t.html(n.text);
          break;
        }
        case "link": {
          i += t.link(n.href, n.title, this.parseInline(n.tokens, t));
          break;
        }
        case "image": {
          i += t.image(n.href, n.title, n.text);
          break;
        }
        case "strong": {
          i += t.strong(this.parseInline(n.tokens, t));
          break;
        }
        case "em": {
          i += t.em(this.parseInline(n.tokens, t));
          break;
        }
        case "codespan": {
          i += t.codespan(n.text);
          break;
        }
        case "br": {
          i += t.br();
          break;
        }
        case "del": {
          i += t.del(this.parseInline(n.tokens, t));
          break;
        }
        case "text": {
          i += t.text(n.text);
          break;
        }
        default: {
          const c = 'Token with "' + n.type + '" type was not found.';
          if (this.options.silent) {
            console.error(c);
            return;
          } else
            throw new Error(c);
        }
      }
    }
    return i;
  }
}
class Je {
  constructor(e) {
    this.options = e || pe;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
}
function xr(s, e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, s) {
      const r = "<p>An error occurred:</p><pre>" + M(i.message + "", !0) + "</pre>";
      if (e)
        return Promise.resolve(r);
      if (t) {
        t(null, r);
        return;
      }
      return r;
    }
    if (e)
      return Promise.reject(i);
    if (t) {
      t(i);
      return;
    }
    throw i;
  };
}
function gi(s, e) {
  return (t, i, r) => {
    typeof i == "function" && (r = i, i = null);
    const n = { ...i };
    i = { ...x.defaults, ...n };
    const a = xr(i.silent, i.async, r);
    if (typeof t > "u" || t === null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (gr(i), i.hooks && (i.hooks.options = i), r) {
      const o = i.highlight;
      let c;
      try {
        i.hooks && (t = i.hooks.preprocess(t)), c = s(t, i);
      } catch (l) {
        return a(l);
      }
      const d = function(l) {
        let b;
        if (!l)
          try {
            i.walkTokens && x.walkTokens(c, i.walkTokens), b = e(c, i), i.hooks && (b = i.hooks.postprocess(b));
          } catch (h) {
            l = h;
          }
        return i.highlight = o, l ? a(l) : r(null, b);
      };
      if (!o || o.length < 3 || (delete i.highlight, !c.length)) return d();
      let p = 0;
      x.walkTokens(c, function(l) {
        l.type === "code" && (p++, setTimeout(() => {
          o(l.text, l.lang, function(b, h) {
            if (b)
              return d(b);
            h != null && h !== l.text && (l.text = h, l.escaped = !0), p--, p === 0 && d();
          });
        }, 0));
      }), p === 0 && d();
      return;
    }
    if (i.async)
      return Promise.resolve(i.hooks ? i.hooks.preprocess(t) : t).then((o) => s(o, i)).then((o) => i.walkTokens ? Promise.all(x.walkTokens(o, i.walkTokens)).then(() => o) : o).then((o) => e(o, i)).then((o) => i.hooks ? i.hooks.postprocess(o) : o).catch(a);
    try {
      i.hooks && (t = i.hooks.preprocess(t));
      const o = s(t, i);
      i.walkTokens && x.walkTokens(o, i.walkTokens);
      let c = e(o, i);
      return i.hooks && (c = i.hooks.postprocess(c)), c;
    } catch (o) {
      return a(o);
    }
  };
}
function x(s, e, t) {
  return gi(ne.lex, ae.parse)(s, e, t);
}
x.options = x.setOptions = function(s) {
  return x.defaults = { ...x.defaults, ...s }, rr(x.defaults), x;
};
x.getDefaults = di;
x.defaults = pe;
x.use = function(...s) {
  const e = x.defaults.extensions || { renderers: {}, childTokens: {} };
  s.forEach((t) => {
    const i = { ...t };
    if (i.async = x.defaults.async || i.async || !1, t.extensions && (t.extensions.forEach((r) => {
      if (!r.name)
        throw new Error("extension name required");
      if (r.renderer) {
        const n = e.renderers[r.name];
        n ? e.renderers[r.name] = function(...a) {
          let o = r.renderer.apply(this, a);
          return o === !1 && (o = n.apply(this, a)), o;
        } : e.renderers[r.name] = r.renderer;
      }
      if (r.tokenizer) {
        if (!r.level || r.level !== "block" && r.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        e[r.level] ? e[r.level].unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]));
      }
      r.childTokens && (e.childTokens[r.name] = r.childTokens);
    }), i.extensions = e), t.renderer) {
      const r = x.defaults.renderer || new ft();
      for (const n in t.renderer) {
        const a = r[n];
        r[n] = (...o) => {
          let c = t.renderer[n].apply(r, o);
          return c === !1 && (c = a.apply(r, o)), c;
        };
      }
      i.renderer = r;
    }
    if (t.tokenizer) {
      const r = x.defaults.tokenizer || new mt();
      for (const n in t.tokenizer) {
        const a = r[n];
        r[n] = (...o) => {
          let c = t.tokenizer[n].apply(r, o);
          return c === !1 && (c = a.apply(r, o)), c;
        };
      }
      i.tokenizer = r;
    }
    if (t.hooks) {
      const r = x.defaults.hooks || new Je();
      for (const n in t.hooks) {
        const a = r[n];
        Je.passThroughHooks.has(n) ? r[n] = (o) => {
          if (x.defaults.async)
            return Promise.resolve(t.hooks[n].call(r, o)).then((d) => a.call(r, d));
          const c = t.hooks[n].call(r, o);
          return a.call(r, c);
        } : r[n] = (...o) => {
          let c = t.hooks[n].apply(r, o);
          return c === !1 && (c = a.apply(r, o)), c;
        };
      }
      i.hooks = r;
    }
    if (t.walkTokens) {
      const r = x.defaults.walkTokens;
      i.walkTokens = function(n) {
        let a = [];
        return a.push(t.walkTokens.call(this, n)), r && (a = a.concat(r.call(this, n))), a;
      };
    }
    x.setOptions(i);
  });
};
x.walkTokens = function(s, e) {
  let t = [];
  for (const i of s)
    switch (t = t.concat(e.call(x, i)), i.type) {
      case "table": {
        for (const r of i.header)
          t = t.concat(x.walkTokens(r.tokens, e));
        for (const r of i.rows)
          for (const n of r)
            t = t.concat(x.walkTokens(n.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(x.walkTokens(i.items, e));
        break;
      }
      default:
        x.defaults.extensions && x.defaults.extensions.childTokens && x.defaults.extensions.childTokens[i.type] ? x.defaults.extensions.childTokens[i.type].forEach(function(r) {
          t = t.concat(x.walkTokens(i[r], e));
        }) : i.tokens && (t = t.concat(x.walkTokens(i.tokens, e)));
    }
  return t;
};
x.parseInline = gi(ne.lexInline, ae.parseInline);
x.Parser = ae;
x.parser = ae.parse;
x.Renderer = ft;
x.TextRenderer = mi;
x.Lexer = ne;
x.lexer = ne.lex;
x.Tokenizer = mt;
x.Slugger = fi;
x.Hooks = Je;
x.parse = x;
x.options;
x.setOptions;
x.use;
x.walkTokens;
x.parseInline;
const vr = x;
ae.parse;
ne.lex;
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
const Dt = /* @__PURE__ */ new WeakMap(), Ot = 2147483647, kr = Ee((...s) => (e) => {
  let t = Dt.get(e);
  t === void 0 && (t = {
    lastRenderedIndex: Ot,
    values: []
  }, Dt.set(e, t));
  const i = t.values;
  let r = i.length;
  t.values = s;
  for (let n = 0; n < s.length && !(n > t.lastRenderedIndex); n++) {
    const a = s[n];
    if (Ie(a) || typeof a.then != "function") {
      e.setValue(a), t.lastRenderedIndex = n;
      break;
    }
    n < r && a === i[n] || (t.lastRenderedIndex = Ot, r = 0, Promise.resolve(a).then((o) => {
      const c = t.values.indexOf(a);
      c > -1 && c < t.lastRenderedIndex && (t.lastRenderedIndex = c, e.setValue(o), e.commit());
    }));
  }
}), _r = 1e3 * 60, Nt = "langChanged";
function wr(s, e, t) {
  return Object.entries(Ye(e || {})).reduce((i, [r, n]) => i.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Ye(n))), s);
}
function Sr(s, e) {
  const t = s.split(".");
  let i = e.strings;
  for (; i != null && t.length > 0; )
    i = i[t.shift()];
  return i != null ? i.toString() : null;
}
function Ye(s) {
  return typeof s == "function" ? s() : s;
}
const Ar = () => ({
  loader: () => Promise.resolve({}),
  empty: (s) => `[${s}]`,
  lookup: Sr,
  interpolate: wr,
  translationCache: {}
});
let Cr = Ar();
function Er(s, e) {
  const t = (i) => s(i.detail);
  return window.addEventListener(Nt, t, e), () => window.removeEventListener(Nt, t);
}
function He(s, e, t = Cr) {
  let i = t.translationCache[s] || (t.translationCache[s] = t.lookup(s, t) || t.empty(s, t));
  return e = e != null ? Ye(e) : null, e != null ? t.interpolate(i, e, t) : i;
}
function bi(s) {
  return s instanceof ye ? s.startNode.isConnected : s instanceof be ? s.committer.element.isConnected : s.element.isConnected;
}
function Ir(s) {
  for (const [e] of s)
    bi(e) || s.delete(e);
}
function Rr(s) {
  "requestIdleCallback" in window ? window.requestIdleCallback(s) : setTimeout(s);
}
function Tr(s, e) {
  setInterval(() => Rr(() => Ir(s)), e);
}
const yi = /* @__PURE__ */ new Map();
function Lr() {
  Er((s) => {
    for (const [e, t] of yi)
      bi(e) && Pr(e, t, s);
  });
}
Lr();
Tr(yi, _r);
function Pr(s, e, t) {
  const i = e(t);
  s.value !== i && (s.setValue(i), s.commit());
}
var et = function(s, e) {
  return et = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, et(s, e);
};
function Mr(s, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  et(s, e);
  function t() {
    this.constructor = s;
  }
  s.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var we = function() {
  return we = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, we.apply(this, arguments);
};
function u(s, e, t, i) {
  var r = arguments.length, n = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(s, e, t, i);
  else for (var o = s.length - 1; o >= 0; o--) (a = s[o]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, t, n) : a(e, t)) || n);
  return r > 3 && n && Object.defineProperty(e, t, n), n;
}
function Pe(s) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && s[e], i = 0;
  if (t) return t.call(s);
  if (s && typeof s.length == "number") return {
    next: function() {
      return s && i >= s.length && (s = void 0), { value: s && s[i++], done: !s };
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
function $r(s, e) {
  var t = s.matches || s.webkitMatchesSelector || s.msMatchesSelector;
  return t.call(s, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const zr = (s) => s.nodeType === Node.ELEMENT_NODE, xi = () => {
}, Fr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", xi, Fr);
document.removeEventListener("x", xi);
const vi = (s = window.document) => {
  let e = s.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Dr = (s) => {
  const e = vi();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], i = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const n = (a) => {
    r = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", n), t.dispatchEvent(i), document.body.removeEventListener("check-if-focused", n), r.indexOf(s) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class gt extends ce {
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
    function s(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(s, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(s, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(s, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(s, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), s.prototype.init = function() {
    }, s.prototype.destroy = function() {
    }, s;
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
var Or = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Nr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ht = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Hr(s, e, t) {
  if (!s)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, n = i + t.left, a = r + t.top, o, c;
  if (s.type === "touchstart") {
    var d = s;
    o = d.changedTouches[0].pageX - n, c = d.changedTouches[0].pageY - a;
  } else {
    var p = s;
    o = p.pageX - n, c = p.pageY - a;
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
var Vt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Bt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Me = [], Vr = (
  /** @class */
  function(s) {
    Mr(e, s);
    function e(t) {
      var i = s.call(this, we(we({}, e.defaultAdapter), t)) || this;
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
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Or;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ht;
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
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = e.cssClasses, n = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(n), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, n = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(n), t.removeCssVars();
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
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
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
      var i, r;
      if (t) {
        try {
          for (var n = Pe(Vt), a = n.next(); !a.done; a = n.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (r = n.return) && r.call(n);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var n = Pe(Bt), a = n.next(); !a.done; a = n.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (r = n.return) && r.call(n);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var r = Pe(Vt), n = r.next(); !n.done; n = r.next()) {
          var a = n.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          n && !n.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = Pe(Bt), n = r.next(); !n.done; n = r.next()) {
          var a = n.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          n && !n.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(n) {
        n.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[n], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var n = this.previousActivationEvent, a = n && t !== void 0 && n.type !== t.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var o = t !== void 0 && Me.length > 0 && Me.some(function(c) {
              return i.adapter.containsEventTarget(c);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Me.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Me = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, n = i.VAR_FG_TRANSLATE_END, a = e.cssClasses, o = a.FG_DEACTIVATION, c = a.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var p = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), h = b.startPoint, E = b.endPoint;
        p = h.x + "px, " + h.y + "px", l = E.x + "px, " + E.y + "px";
      }
      this.adapter.updateCssVariable(r, p), this.adapter.updateCssVariable(n, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, n;
      r ? n = Hr(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : n = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, n = {
        x: n.x - this.initialSize / 2,
        y: n.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: n, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, n = r.hasDeactivationUXRun, a = r.isActivated, o = n || !a;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, Ht.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var r = we({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var n = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && n % 2 !== 0 ? this.initialSize = n - 1 : this.initialSize = n, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, r = t.VAR_LEFT, n = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(n, this.unboundedCoords.top + "px"));
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
class Br {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const i of t)
      this.classes.add(i);
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
const Ut = /* @__PURE__ */ new WeakMap(), Ve = Ee((s) => (e) => {
  if (!(e instanceof be) || e instanceof lt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: i } = t;
  let r = Ut.get(e);
  r === void 0 && (i.setAttribute("class", t.strings.join(" ")), Ut.set(e, r = /* @__PURE__ */ new Set()));
  const n = i.classList || new Br(i);
  r.forEach((a) => {
    a in s || (n.remove(a), r.delete(a));
  });
  for (const a in s) {
    const o = s[a];
    o != r.has(a) && (o ? (n.add(a), r.add(a)) : (n.remove(a), r.delete(a)));
  }
  typeof n.commit == "function" && n.commit();
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
const qt = /* @__PURE__ */ new WeakMap(), Ur = Ee((s) => (e) => {
  if (!(e instanceof be) || e instanceof lt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: i } = t.element;
  let r = qt.get(e);
  r === void 0 && (i.cssText = t.strings.join(" "), qt.set(e, r = /* @__PURE__ */ new Set())), r.forEach((n) => {
    n in s || (r.delete(n), n.indexOf("-") === -1 ? i[n] = null : i.removeProperty(n));
  });
  for (const n in s)
    r.add(n), n.indexOf("-") === -1 ? i[n] = s[n] : i.setProperty(n, s[n]);
});
class R extends gt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Vr;
  }
  get isActive() {
    return $r(this.parentElement || this, ":active");
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
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), i = {
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ve(i)}"
          style="${Ur({
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
  z(".mdc-ripple-surface")
], R.prototype, "mdcRoot", void 0);
u([
  f({ type: Boolean })
], R.prototype, "primary", void 0);
u([
  f({ type: Boolean })
], R.prototype, "accent", void 0);
u([
  f({ type: Boolean })
], R.prototype, "unbounded", void 0);
u([
  f({ type: Boolean })
], R.prototype, "disabled", void 0);
u([
  f({ type: Boolean })
], R.prototype, "activated", void 0);
u([
  f({ type: Boolean })
], R.prototype, "selected", void 0);
u([
  f({ type: Boolean })
], R.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  C()
], R.prototype, "hovering", void 0);
u([
  C()
], R.prototype, "bgFocused", void 0);
u([
  C()
], R.prototype, "fgActivation", void 0);
u([
  C()
], R.prototype, "fgDeactivation", void 0);
u([
  C()
], R.prototype, "fgScale", void 0);
u([
  C()
], R.prototype, "fgSize", void 0);
u([
  C()
], R.prototype, "translateStart", void 0);
u([
  C()
], R.prototype, "translateEnd", void 0);
u([
  C()
], R.prototype, "leftPos", void 0);
u([
  C()
], R.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qr = xe`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let tt = class extends R {
};
tt.styles = [qr];
tt = u([
  Y("mwc-ripple")
], tt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const le = (s) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const i = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), i.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, n) => e.constructor._observers.set(n, r)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const i = e.updated;
      e.updated = function(r) {
        i.call(this, r), r.forEach((n, a) => {
          const c = this.constructor._observers.get(a);
          c !== void 0 && c.call(this, this[a], n);
        });
      };
    }
    e.constructor._observers.set(t, s);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _i {
  constructor(e) {
    this.startPress = (t) => {
      e().then((i) => {
        i && i.startPress(t);
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
class L extends ce {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new _i(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : g``, i = this.hasMeta ? this.renderMeta() : g``;
    return g`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ve(e)}">
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
    const i = () => {
      window.removeEventListener(e, i), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, i), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const i = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(i);
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
u([
  z("slot")
], L.prototype, "slotElement", void 0);
u([
  oi("mwc-ripple")
], L.prototype, "ripple", void 0);
u([
  f({ type: String })
], L.prototype, "value", void 0);
u([
  f({ type: String, reflect: !0 })
], L.prototype, "group", void 0);
u([
  f({ type: Number, reflect: !0 })
], L.prototype, "tabindex", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  le(function(s) {
    s ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], L.prototype, "disabled", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], L.prototype, "twoline", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], L.prototype, "activated", void 0);
u([
  f({ type: String, reflect: !0 })
], L.prototype, "graphic", void 0);
u([
  f({ type: Boolean })
], L.prototype, "multipleGraphics", void 0);
u([
  f({ type: Boolean })
], L.prototype, "hasMeta", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  le(function(s) {
    s ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], L.prototype, "noninteractive", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  le(function(s) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && s ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(s, "property");
  })
], L.prototype, "selected", void 0);
u([
  C()
], L.prototype, "shouldRenderRipple", void 0);
u([
  C()
], L.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wi = xe`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let it = class extends L {
};
it.styles = [wi];
it = u([
  Y("mwc-list-item")
], it);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Gr(s, e, t) {
  const i = s.constructor;
  if (!t) {
    const o = `__${e}`;
    if (t = i.getPropertyDescriptor(e, o), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = t;
  let n = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      n === "" && (n = i.getPropertyOptions(e).attribute), this.hasAttribute(n) && this.removeAttribute(n), r.set.call(this, o);
    }
  };
  return r.get && (a.get = function() {
    return r.get.call(this);
  }), a;
}
function bt(s, e, t) {
  if (e !== void 0)
    return Gr(s, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Si extends gt {
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
Si.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const qe = /* @__PURE__ */ new WeakMap(), se = Ee((s) => (e) => {
  const t = qe.get(e);
  if (s === void 0 && e instanceof be) {
    if (t !== void 0 || !qe.has(e)) {
      const i = e.committer.name;
      e.committer.element.removeAttribute(i);
    }
  } else s !== t && e.setValue(s);
  qe.set(e, s);
});
class T extends Si {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new _i(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), i = e.get("checked"), r = e.get("disabled");
    if (t !== void 0 || i !== void 0 || r !== void 0) {
      const n = this.calculateAnimationStateName(!!i, !!t, !!r), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${n}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, i) {
    return i ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
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
    }, i = this.indeterminate ? "mixed" : void 0;
    return g`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ve(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${se(this.name)}"
              aria-checked="${se(i)}"
              aria-label="${se(this.ariaLabel)}"
              aria-labelledby="${se(this.ariaLabelledBy)}"
              aria-describedby="${se(this.ariaDescribedBy)}"
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
u([
  z(".mdc-checkbox")
], T.prototype, "mdcRoot", void 0);
u([
  z("input")
], T.prototype, "formElement", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], T.prototype, "checked", void 0);
u([
  f({ type: Boolean })
], T.prototype, "indeterminate", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], T.prototype, "disabled", void 0);
u([
  f({ type: String, reflect: !0 })
], T.prototype, "name", void 0);
u([
  f({ type: String })
], T.prototype, "value", void 0);
u([
  bt,
  f({ type: String, attribute: "aria-label" })
], T.prototype, "ariaLabel", void 0);
u([
  bt,
  f({ type: String, attribute: "aria-labelledby" })
], T.prototype, "ariaLabelledBy", void 0);
u([
  bt,
  f({ type: String, attribute: "aria-describedby" })
], T.prototype, "ariaDescribedBy", void 0);
u([
  f({ type: Boolean })
], T.prototype, "reducedTouchTarget", void 0);
u([
  C()
], T.prototype, "animationClass", void 0);
u([
  C()
], T.prototype, "shouldRenderRipple", void 0);
u([
  C()
], T.prototype, "focused", void 0);
u([
  C()
], T.prototype, "useStateLayerCustomProperties", void 0);
u([
  oi("mwc-ripple")
], T.prototype, "ripple", void 0);
u([
  Yi({ passive: !0 })
], T.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const jr = xe`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let rt = class extends T {
};
rt.styles = [jr];
rt = u([
  Y("mwc-checkbox")
], rt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Re extends L {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), i = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : g``, r = this.hasMeta && this.left ? this.renderMeta() : g``, n = this.renderRipple();
    return g`
      ${n}
      ${i}
      ${this.left ? "" : t}
      <span class=${Ve(e)}>
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
u([
  z("slot")
], Re.prototype, "slotElement", void 0);
u([
  z("mwc-checkbox")
], Re.prototype, "checkboxElement", void 0);
u([
  f({ type: Boolean })
], Re.prototype, "left", void 0);
u([
  f({ type: String, reflect: !0 })
], Re.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Wr = xe`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ge = class extends Re {
};
ge.styles = [wi, Wr];
ge = u([
  Y("mwc-check-list-item")
], ge);
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
}, F = /* @__PURE__ */ new Set();
F.add(v.BACKSPACE);
F.add(v.ENTER);
F.add(v.SPACEBAR);
F.add(v.PAGE_UP);
F.add(v.PAGE_DOWN);
F.add(v.END);
F.add(v.HOME);
F.add(v.ARROW_LEFT);
F.add(v.ARROW_UP);
F.add(v.ARROW_RIGHT);
F.add(v.ARROW_DOWN);
F.add(v.DELETE);
F.add(v.ESCAPE);
F.add(v.TAB);
var H = {
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
}, D = /* @__PURE__ */ new Map();
D.set(H.BACKSPACE, v.BACKSPACE);
D.set(H.ENTER, v.ENTER);
D.set(H.SPACEBAR, v.SPACEBAR);
D.set(H.PAGE_UP, v.PAGE_UP);
D.set(H.PAGE_DOWN, v.PAGE_DOWN);
D.set(H.END, v.END);
D.set(H.HOME, v.HOME);
D.set(H.ARROW_LEFT, v.ARROW_LEFT);
D.set(H.ARROW_UP, v.ARROW_UP);
D.set(H.ARROW_RIGHT, v.ARROW_RIGHT);
D.set(H.ARROW_DOWN, v.ARROW_DOWN);
D.set(H.DELETE, v.DELETE);
D.set(H.ESCAPE, v.ESCAPE);
D.set(H.TAB, v.TAB);
var de = /* @__PURE__ */ new Set();
de.add(v.PAGE_UP);
de.add(v.PAGE_DOWN);
de.add(v.END);
de.add(v.HOME);
de.add(v.ARROW_LEFT);
de.add(v.ARROW_UP);
de.add(v.ARROW_RIGHT);
de.add(v.ARROW_DOWN);
function te(s) {
  var e = s.key;
  if (F.has(e))
    return e;
  var t = D.get(s.keyCode);
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
var ie, Q, A = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ie = {}, ie["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ie["" + A.LIST_ITEM_CLASS] = "mdc-list-item", ie["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ie["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ie["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ie["" + A.ROOT] = "mdc-list";
var me = (Q = {}, Q["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Q["" + A.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Q["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Q["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Q["" + A.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Q["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Q["" + A.ROOT] = "mdc-deprecated-list", Q), $e = {
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
    .` + A.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` a,
    .` + me[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + me[A.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + A.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` a,
    .` + A.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + me[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + me[A.LIST_ITEM_CLASS] + ` a,
    .` + me[A.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + me[A.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, O = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const st = (s, e) => s - e, Zr = (s, e) => {
  const t = Array.from(s), i = Array.from(e), r = { added: [], removed: [] }, n = t.sort(st), a = i.sort(st);
  let o = 0, c = 0;
  for (; o < n.length || c < a.length; ) {
    const d = n[o], p = a[c];
    if (d === p) {
      o++, c++;
      continue;
    }
    if (d !== void 0 && (p === void 0 || d < p)) {
      r.removed.push(d), o++;
      continue;
    }
    if (p !== void 0 && (d === void 0 || p < d)) {
      r.added.push(p), c++;
      continue;
    }
  }
  return r;
}, Xr = ["input", "button", "textarea", "select"];
function Se(s) {
  return s instanceof Set;
}
const Ge = (s) => {
  const e = s === O.UNSET_INDEX ? /* @__PURE__ */ new Set() : s;
  return Se(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class yt extends ki {
  constructor(e) {
    super(Object.assign(Object.assign({}, yt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = O.UNSET_INDEX, this.focusedItemIndex_ = O.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return $e;
  }
  static get numbers() {
    return O;
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
      if (!Se(t)) {
        const i = t === O.UNSET_INDEX;
        this.selectedIndex_ = i ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Se(t))
      if (t.size) {
        const i = Array.from(t).sort(st);
        this.selectedIndex_ = i[0];
      } else
        this.selectedIndex_ = O.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Ge(e)) : this.setSingleSelectionAtIndex_(e));
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
  handleKeydown(e, t, i) {
    const r = te(e) === "ArrowLeft", n = te(e) === "ArrowUp", a = te(e) === "ArrowRight", o = te(e) === "ArrowDown", c = te(e) === "Home", d = te(e) === "End", p = te(e) === "Enter", l = te(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      n || d ? (e.preventDefault(), this.focusLastElement()) : (o || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = i, b < 0))
      return;
    let h;
    if (this.isVertical_ && o || !this.isVertical_ && a)
      this.preventDefaultEvent(e), h = this.focusNextElement(b);
    else if (this.isVertical_ && n || !this.isVertical_ && r)
      this.preventDefaultEvent(e), h = this.focusPrevElement(b);
    else if (c)
      this.preventDefaultEvent(e), h = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), h = this.focusLastElement();
    else if ((p || l) && t) {
      const E = e.target;
      if (E && E.tagName === "A" && p)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, h !== void 0 && (this.setTabindexAtIndex_(h), this.focusedItemIndex_ = h);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, i) {
    e !== O.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, i), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let i = e + 1;
    if (i >= t)
      if (this.wrapFocus_)
        i = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(i), i;
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
    const i = `${e.target.tagName}`.toLowerCase();
    Xr.indexOf(i) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== O.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const i = Ge(this.selectedIndex_), r = Zr(i, e);
    if (!(!r.removed.length && !r.added.length)) {
      for (const n of r.removed)
        t && this.adapter.setSelectedStateForElementIndex(n, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(n, !1);
      for (const n of r.added)
        t && this.adapter.setSelectedStateForElementIndex(n, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(n, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === O.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, $e.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, i = t ? $e.ARIA_CURRENT : $e.ARIA_SELECTED;
    this.selectedIndex_ !== O.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const r = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, i, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === O.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== O.UNSET_INDEX ? e = this.selectedIndex_ : Se(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const i of e)
          if (t = this.isIndexInRange_(i), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === O.UNSET_INDEX || this.isIndexInRange_(e);
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
  setSelectedIndexOnAction_(e, t, i) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let r = e;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, i, t) : t || i ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(O.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, i = !0) {
    let r = !1;
    t === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = t;
    const n = Ge(this.selectedIndex_);
    r ? n.add(e) : n.delete(e), this.setMultiSelectionAtIndex_(n, i);
  }
}
function Kr(s, e = 50) {
  let t;
  return function(i = !0) {
    clearTimeout(t), t = setTimeout(() => {
      s(i);
    }, e);
  };
}
const ze = (s) => s.hasAttribute("mwc-list-item");
function Qr() {
  const s = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), s();
}
class B extends gt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = yt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Kr(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      Qr.call(this), e(t);
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], i = [];
    for (const a of t)
      ze(a) && (i.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = i;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, o) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && r.add(o);
    }), this.multi)
      this.select(r);
    else {
      const a = r.size ? r.entries().next().value[1] : -1;
      this.select(a);
    }
    const n = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(n);
  }
  get selected() {
    const e = this.index;
    if (!Se(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const i of e)
      t.push(this.items[i]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, i = this.rootTabbable ? "0" : "-1";
    return g`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${se(e)}"
          aria-label="${se(t)}"
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
    return this.emptyMessage !== void 0 && t.length === 0 ? g`
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
      const t = this.getIndexOfTarget(e), i = e.target, r = ze(i);
      this.mdcFoundation.handleKeydown(e, r, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const r = e.detail.selected, n = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, n === "interaction", r), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, i = e.composedPath();
    for (const r of i) {
      let n = -1;
      if (zr(r) && ze(r) && (n = t.indexOf(r)), n !== -1)
        return n;
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
      setAttributeForElementIndex: (e, t, i) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[e];
        r && r.setAttribute(t, i);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const i = new CustomEvent("action", t);
        this.dispatchEvent(i);
      },
      notifySelected: (e, t) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: e, diff: t };
        const r = new CustomEvent("selected", i);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => Dr(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const i = this.items[e];
    i && (i.selected = !0, i.activated = t);
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
    for (const i of this.items)
      i.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = vi();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const i = e[t];
      if (ze(i))
        return this.items.indexOf(i);
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
u([
  f({ type: String })
], B.prototype, "emptyMessage", void 0);
u([
  z(".mdc-deprecated-list")
], B.prototype, "mdcRoot", void 0);
u([
  ci("", !0, "*")
], B.prototype, "assignedElements", void 0);
u([
  ci("", !0, '[tabindex="0"]')
], B.prototype, "tabbableElements", void 0);
u([
  f({ type: Boolean }),
  le(function(s) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(s);
  })
], B.prototype, "activatable", void 0);
u([
  f({ type: Boolean }),
  le(function(s, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(s), e !== void 0 && this.layout();
  })
], B.prototype, "multi", void 0);
u([
  f({ type: Boolean }),
  le(function(s) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(s);
  })
], B.prototype, "wrapFocus", void 0);
u([
  f({ type: String }),
  le(function(s, e) {
    e !== void 0 && this.updateItems();
  })
], B.prototype, "itemRoles", void 0);
u([
  f({ type: String })
], B.prototype, "innerRole", void 0);
u([
  f({ type: String })
], B.prototype, "innerAriaLabel", void 0);
u([
  f({ type: Boolean })
], B.prototype, "rootTabbable", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  le(function(s) {
    var e, t;
    if (s) {
      const i = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = i, i && i.setAttribute("tabindex", "-1");
    } else !s && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], B.prototype, "noninteractive", void 0);
var Jr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, he = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? Yr(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
  return i && r && Jr(e, t, r), r;
};
function nt(s) {
  return !s.closest("filtered-list") || !s.parentElement || s.parentElement instanceof X ? s : nt(s.parentElement);
}
function es(s, e) {
  const t = s.innerText + `
`, i = Array.from(s.children).map((o) => o.innerText).join(`
`), r = s.value, n = (t + i + r).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(n)) ? nt(s).classList.remove("hidden") : nt(s).classList.add("hidden");
}
let X = class extends B {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((s) => s instanceof ge);
  }
  get isAllSelected() {
    return this.items.filter((s) => !s.disabled).filter((s) => s instanceof ge).every((s) => s.selected);
  }
  get isSomeSelected() {
    return this.items.filter((s) => !s.disabled).filter((s) => s instanceof ge).some((s) => s.selected);
  }
  onCheckAll() {
    const s = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = s);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (s) => es(s, this.searchField.value)
    );
  }
  onListItemConnected(s) {
    super.onListItemConnected(s), this.requestUpdate();
  }
  update(s) {
    super.update(s), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? g`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : g``;
  }
  render() {
    return g`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? He("filter")}"
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
X.styles = xe`
    ${li(Ci.styles)}

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
he([
  f({ type: String })
], X.prototype, "searchFieldLabel", 2);
he([
  f({ type: Boolean })
], X.prototype, "disableCheckAll", 2);
he([
  C()
], X.prototype, "existCheckListItem", 1);
he([
  C()
], X.prototype, "isAllSelected", 1);
he([
  C()
], X.prototype, "isSomeSelected", 1);
he([
  z("mwc-textfield")
], X.prototype, "searchField", 2);
X = he([
  Y("filtered-list")
], X);
var ts = Object.defineProperty, is = Object.getOwnPropertyDescriptor, q = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? is(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
  return i && r && ts(e, t, r), r;
};
let V = class extends Ei {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(s) {
    const e = this.multipliers.indexOf(s);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(s) {
    !this.nullable || s === this.isNull || (this.isNull = s, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(s) {
    s === null ? this.null = !0 : (this.null = !1, this.value = s);
  }
  selectMultiplier(s) {
    this.multiplier = this.multipliers[s.detail.index];
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
    return this.reservedValues && this.reservedValues.some((s) => s === this.value) ? (this.setCustomValidity(He("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (s) => g`<mwc-list-item ?selected=${s === this.multiplier}
          >${s === null ? He("textfield.noMultiplier") : s}</mwc-list-item
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
  f({ type: Boolean })
], V.prototype, "nullable", 2);
q([
  f({ type: Array })
], V.prototype, "multipliers", 2);
q([
  f({ type: String })
], V.prototype, "multiplier", 1);
q([
  f({ type: String })
], V.prototype, "unit", 2);
q([
  C()
], V.prototype, "null", 1);
q([
  f({ type: String })
], V.prototype, "maybeValue", 1);
q([
  f({ type: String })
], V.prototype, "defaultValue", 2);
q([
  f({ type: Array })
], V.prototype, "reservedValues", 2);
q([
  z("mwc-switch")
], V.prototype, "nullSwitch", 2);
q([
  z("mwc-menu")
], V.prototype, "multiplierMenu", 2);
q([
  z("mwc-icon-button")
], V.prototype, "multiplierButton", 2);
V = q([
  Y("wizard-textfield")
], V);
var rs = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, ue = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? ss(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
  return i && r && rs(e, t, r), r;
};
let oe = class extends Ii {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(s) {
    !this.nullable || s === this.isNull || (this.isNull = s, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(s) {
    s === null ? this.null = !0 : (this.null = !1, this.value = s);
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
ue([
  f({ type: Boolean })
], oe.prototype, "nullable", 2);
ue([
  C()
], oe.prototype, "null", 1);
ue([
  f({ type: String })
], oe.prototype, "maybeValue", 1);
ue([
  f({ type: String })
], oe.prototype, "defaultValue", 2);
ue([
  f({ type: Array })
], oe.prototype, "reservedValues", 2);
ue([
  z("mwc-switch")
], oe.prototype, "nullSwitch", 2);
oe = ue([
  Y("wizard-select")
], oe);
var ns = Object.defineProperty, as = Object.getOwnPropertyDescriptor, U = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? as(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
  return i && r && ns(e, t, r), r;
};
let N = class extends ce {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(s) {
    s === null ? this.null = !0 : (this.null = !1, this.checked = s === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(s) {
    !this.nullable || s === this.isNull || (this.isNull = s, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(s) {
    this.checkbox ? this.checkbox.checked = s : this.initChecked = s;
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
U([
  f({ type: String })
], N.prototype, "label", 2);
U([
  f({ type: String })
], N.prototype, "helper", 2);
U([
  f({ type: Boolean })
], N.prototype, "nullable", 2);
U([
  f({ type: Boolean })
], N.prototype, "defaultChecked", 2);
U([
  f({ type: String })
], N.prototype, "maybeValue", 1);
U([
  f({ type: Boolean })
], N.prototype, "disabled", 2);
U([
  C()
], N.prototype, "null", 1);
U([
  C()
], N.prototype, "checked", 1);
U([
  C()
], N.prototype, "deactivateCheckbox", 2);
U([
  C()
], N.prototype, "formfieldLabel", 1);
U([
  z("mwc-switch")
], N.prototype, "nullSwitch", 2);
U([
  z("mwc-checkbox")
], N.prototype, "checkbox", 2);
N = U([
  Y("wizard-checkbox")
], N);
function os(s) {
  return typeof s == "function";
}
function cs(s, e) {
  if (!s)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = os(s) ? s : () => s;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
const ls = [
  "TransformerWinding",
  "ConductingEquipment"
], ds = [
  "GeneralEquipment",
  "PowerTransformer",
  ...ls
], ps = ["Substation", "VoltageLevel", "Bay"], hs = ["Process", "Line"], us = ["EqSubFunction", "EqFunction"], ms = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...ds,
  ...ps,
  ...hs,
  ...us
], fs = ["ConnectivityNode", ...ms], gs = ["GOOSESecurity", "SMVSecurity"], bs = ["SubNetwork", ...gs, ...fs], ys = ["BDA", "DA"], xs = ["SampledValueControl", "GSEControl"], vs = ["LogControl", "ReportControl"], ks = [...xs, ...vs], _s = ["GSE", "SMV"], ws = [
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
  ...ks,
  ..._s,
  ...ys
], Ss = ["LN0", "LN"], As = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Cs = ["Subject", "IssuerName"], Es = ["MinTime", "MaxTime"], Is = ["LNodeType", "DOType", "DAType", "EnumType"], Rs = [
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
], Ts = ["DynDataSet", "ConfDataSet"], Ls = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Ts
], Ps = ["ConfLogControl", "ConfSigRef"], Ms = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], $s = ["SCL", ...bs, ...ws, ...Is], zs = [
  ...$s,
  ...As,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Cs,
  ...Es,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Ss,
  ...Rs,
  "DynAssociation",
  "SettingGroups",
  ...Ls,
  ...Ps,
  ...Ms,
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
];
new Set(zs);
function Ai(s, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(s)) return 1 / 0;
  switch (s?.constructor) {
    case Object:
    case Array:
      return e.add(s), 1 + Math.max(
        -1,
        ...Object.values(s).map((t) => Ai(t, e))
      );
    default:
      return 0;
  }
}
const Fs = 99;
Array(Fs).fill(1).map((s, e) => `${e + 1}`);
var Ds = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, ee = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? Os(e, t) : e, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
  return i && r && Ds(e, t, r), r;
};
const Ns = g`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${He("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let j = class extends ce {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (s) => ({
      path: s,
      header: g`<h2>${"/" + s.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Ai(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(s) {
    const e = {};
    for (const t of s) {
      let i = e;
      for (const r of t)
        Object.prototype.hasOwnProperty.call(i, r) || (i[r] = {}), i = i[r];
    }
    this.selection = e;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(s) {
    this.paths = [s];
  }
  getTitle(s) {
    return s.join("/");
  }
  getDisplayString(s, e) {
    return s;
  }
  getPaths(s) {
    let e = Object.keys(this.selection).map((i) => [i]), t = s ?? this.depth - 1;
    for (; t-- > 0; )
      e = e.flatMap((i) => {
        let r = this.selection;
        for (const a of i) r = r[a];
        const n = Object.keys(r).map((a) => i.concat(a));
        return n.length === 0 ? [i] : n;
      });
    return s === void 0 ? e : e.filter((i) => i.length > s);
  }
  multiSelect(s, e, t) {
    let i = this.selection;
    for (const r of e) i = i[r];
    i && i[t] ? delete i[t] : i[t] = {};
  }
  singleSelect(s, e, t) {
    this.path[e.length] === t ? this.path = e : this.path = e.concat(t);
  }
  async select(s, e) {
    const t = s.target.selected.value;
    this.multi ? this.multiSelect(s, e, t) : this.singleSelect(s, e, t), this.requestUpdate(), await this.updateComplete, await new Promise((i) => setTimeout(i, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(s, e) {
    return g`<filtered-list
      @selected=${(t) => this.select(t, s)}
      searchFieldLabel="${this.getTitle(s)}"
    >
      ${e.map(
      (t) => g`<mwc-list-item
            value="${t}"
            ?activated=${this.getPaths(s.length).map((i) => JSON.stringify(i)).includes(JSON.stringify(s.concat(t)))}
            >${this.getDisplayString(t, s)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(s) {
    const t = this.getPaths(s).map((r) => this.read(r)), i = [];
    for await (const { header: r, entries: n, path: a } of t)
      (r || n.length > 0) && i.push(
        g`${se(r)} ${this.renderDirectory(a, n)}`
      );
    return i.length === 0 ? g`` : g`<div class="column">${i}</div>`;
  }
  render() {
    const s = new Array(this.depth).fill(0).map((e, t) => this.renderColumn(t));
    return this.loaded = Promise.allSettled(s).then(), g`<div class="pane">
      ${s.map((e) => kr(e, Ns))}
    </div>`;
  }
};
j.styles = xe`
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
ee([
  f({ type: Object })
], j.prototype, "selection", 2);
ee([
  f({ type: Boolean })
], j.prototype, "multi", 2);
ee([
  f({ type: Number })
], j.prototype, "depth", 1);
ee([
  f({ type: Array })
], j.prototype, "paths", 1);
ee([
  f({ type: Array })
], j.prototype, "path", 1);
ee([
  f({ attribute: !1 })
], j.prototype, "read", 2);
ee([
  f({ attribute: !1 })
], j.prototype, "loaded", 2);
ee([
  z("div")
], j.prototype, "container", 2);
j = ee([
  Y("finder-list")
], j);
g`<svg
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
const Te = {
  action: S`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: S`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: S`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: S`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: S`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: S`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: S`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: S`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: S`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: S`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: S`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: S`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
S`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Te.gooseIcon}</svg>`;
S`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Te.reportIcon}</svg>`;
S`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Te.smvIcon}</svg>`;
S`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Te.logIcon}</svg>`;
S`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
S`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
S`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Gt = {
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
Fe("dAIcon"), Fe("dOIcon"), Fe("enumIcon"), Fe("lNIcon");
function Fe(s) {
  if (s === "reset") return g``;
  const e = Gt[s]?.height ?? 24, t = Gt[s]?.width ?? 24;
  return g`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${t} ${e}"
    width="${t}"
  >
    ${Te[s]}
  </svg> `;
}
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
g`<svg
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
const Hs = g` <svg
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
S`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
S`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
S`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
S`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
S`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
S`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
const jt = /https:\/\/github\.com\/openscd\/open-scd\/wiki\/([^)]*)/g, Vs = "([^\\]]*)", Bs = /-/g;
function Wt(s) {
  return g`<div>
      <div style="display:flex">
        <mwc-icon slot="graphic" style="--mdc-icon-size:25px"
          >${Hs}</mwc-icon
        >
        <div style="padding:10px">
          <h2 style="margin-bottom:2px">OpenSCD</h2>
          V${s}
        </div>
      </div>
    </div>
    <div>
      <h3>Licences</h3>
      <p style="padding-bottom:5px">
        The IEC&thinsp;61850 XSD and NSD code components used are distributed
        under their
        <a href="/CC-EULA.pdf">end user licence agreement</a>. <br />This
        project's source code is licensed under the
        <a href="/LICENSE.md">Apache&thinsp;2.0 license</a> and available on
        <a href="https://github.com/openscd">GitHub</a>.
      </p>
      <p>&copy; 2020-2021 OMICRON electronics GmbH</p>
      <h3>Help</h3>
    </div>`;
}
async function Us(s) {
  const e = await (await fetch("/manifest.json")).json();
  if (s.length === 0)
    return { path: s, header: Wt(e.version), entries: ["Home"] };
  const t = s[s.length - 1].replace(/ /g, "-"), r = await (await fetch(`/openscd/public/md/${t}.md`)).text(), a = r.replace(
    new RegExp(`\\[${Vs}\\]\\(${jt.source}\\)`, "g"),
    '<a style="cursor: help; color: var(--mdc-theme-primary)"  href="https://github.com/openscd/open-scd/wiki/$2" target="_blank" >$1</a>'
  ), o = g`<div style="padding: 8px;">
    ${t === "Home" ? Wt(e.version) : g``}
    ${ir(vr(a))}
  </div>`, c = Array.from(
    r.matchAll(new RegExp(`\\(${jt.source}\\)`, "g"))
  ).map(([d, p]) => p.replace(Bs, " "));
  return { path: s, header: o, entries: c };
}
function qs() {
  return [
    {
      title: "Help",
      content: [
        g`<finder-list
          .path=${["Home"]}
          .read=${Us}
        ></finder-list>`
      ]
    }
  ];
}
class sn extends ce {
  async run() {
    this.dispatchEvent(cs(qs()));
  }
}
export {
  qs as aboutBoxWizard,
  sn as default
};
