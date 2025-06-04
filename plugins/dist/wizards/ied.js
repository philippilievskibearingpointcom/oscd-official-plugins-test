import "@material/mwc-list";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as ki } from "@material/mwc-textfield";
import { Select as Si } from "@material/mwc-select";
import "@material/mwc-formfield";
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
const rt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, He = (t, e, i = null) => {
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
const j = `{{lit-${String(Math.random()).slice(2)}}}`, Dt = `<!--${j}-->`, nt = new RegExp(`${j}|${Dt}`), se = "$lit$";
class Rt {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const r = [], n = [], a = document.createTreeWalker(i.content, 133, null, !1);
    let c = 0, s = -1, o = 0;
    const { strings: u, values: { length: m } } = e;
    for (; o < m; ) {
      const d = a.nextNode();
      if (d === null) {
        a.currentNode = n.pop();
        continue;
      }
      if (s++, d.nodeType === 1) {
        if (d.hasAttributes()) {
          const b = d.attributes, { length: _ } = b;
          let x = 0;
          for (let k = 0; k < _; k++)
            at(b[k].name, se) && x++;
          for (; x-- > 0; ) {
            const k = u[o], S = Ee.exec(k)[2], w = S.toLowerCase() + se, E = d.getAttribute(w);
            d.removeAttribute(w);
            const z = E.split(nt);
            this.parts.push({ type: "attribute", index: s, name: S, strings: z }), o += z.length - 1;
          }
        }
        d.tagName === "TEMPLATE" && (n.push(d), a.currentNode = d.content);
      } else if (d.nodeType === 3) {
        const b = d.data;
        if (b.indexOf(j) >= 0) {
          const _ = d.parentNode, x = b.split(nt), k = x.length - 1;
          for (let S = 0; S < k; S++) {
            let w, E = x[S];
            if (E === "")
              w = X();
            else {
              const z = Ee.exec(E);
              z !== null && at(z[2], se) && (E = E.slice(0, z.index) + z[1] + z[2].slice(0, -se.length) + z[3]), w = document.createTextNode(E);
            }
            _.insertBefore(w, d), this.parts.push({ type: "node", index: ++s });
          }
          x[k] === "" ? (_.insertBefore(X(), d), r.push(d)) : d.data = x[k], o += k;
        }
      } else if (d.nodeType === 8)
        if (d.data === j) {
          const b = d.parentNode;
          (d.previousSibling === null || s === c) && (s++, b.insertBefore(X(), d)), c = s, this.parts.push({ type: "node", index: s }), d.nextSibling === null ? d.data = "" : (r.push(d), s--), o++;
        } else {
          let b = -1;
          for (; (b = d.data.indexOf(j, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const d of r)
      d.parentNode.removeChild(d);
  }
}
const at = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, Lt = (t) => t.index !== -1, X = () => document.createComment(""), Ee = (
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
const je = 133;
function Tt(t, e) {
  const { element: { content: i }, parts: r } = t, n = document.createTreeWalker(i, je, null, !1);
  let a = oe(r), c = r[a], s = -1, o = 0;
  const u = [];
  let m = null;
  for (; n.nextNode(); ) {
    s++;
    const d = n.currentNode;
    for (d.previousSibling === m && (m = null), e.has(d) && (u.push(d), m === null && (m = d)), m !== null && o++; c !== void 0 && c.index === s; )
      c.index = m !== null ? -1 : c.index - o, a = oe(r, a), c = r[a];
  }
  u.forEach((d) => d.parentNode.removeChild(d));
}
const _i = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, je, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, oe = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const r = t[i];
    if (Lt(r))
      return i;
  }
  return -1;
};
function wi(t, e, i = null) {
  const { element: { content: r }, parts: n } = t;
  if (i == null) {
    r.appendChild(e);
    return;
  }
  const a = document.createTreeWalker(r, je, null, !1);
  let c = oe(n), s = 0, o = -1;
  for (; a.nextNode(); )
    for (o++, a.currentNode === i && (s = _i(e), i.parentNode.insertBefore(e, i)); c !== -1 && n[c].index === o; ) {
      if (s > 0) {
        for (; c !== -1; )
          n[c].index += s, c = oe(n, c);
        return;
      }
      c = oe(n, c);
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
const Ft = /* @__PURE__ */ new WeakMap(), Ue = (t) => (...e) => {
  const i = t(...e);
  return Ft.set(i, !0), i;
}, le = (t) => typeof t == "function" && Ft.has(t);
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
const B = {}, ct = {};
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
class Ie {
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
    const e = rt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let a = 0, c = 0, s, o = n.nextNode();
    for (; a < r.length; ) {
      if (s = r[a], !Lt(s)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; c < s.index; )
        c++, o.nodeName === "TEMPLATE" && (i.push(o), n.currentNode = o.content), (o = n.nextNode()) === null && (n.currentNode = i.pop(), o = n.nextNode());
      if (s.type === "node") {
        const u = this.processor.handleTextExpression(this.options);
        u.insertAfterNode(o.previousSibling), this.__parts.push(u);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(o, s.name, s.strings, this.options));
      a++;
    }
    return rt && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const st = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), Ci = ` ${j} `;
class zt {
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
      const a = this.strings[n], c = a.lastIndexOf("<!--");
      r = (c > -1 || r) && a.indexOf("-->", c + 1) === -1;
      const s = Ee.exec(a);
      s === null ? i += a + (r ? Ci : Dt) : i += a.substr(0, s.index) + s[1] + s[2] + se + s[3] + j;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return st !== void 0 && (i = st.createHTML(i)), e.innerHTML = i, e;
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
const We = (t) => t === null || !(typeof t == "object" || typeof t == "function"), Pe = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Vt {
  constructor(e, i, r) {
    this.dirty = !0, this.element = e, this.name = i, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new te(this);
  }
  _getValue() {
    const e = this.strings, i = e.length - 1, r = this.parts;
    if (i === 1 && e[0] === "" && e[1] === "") {
      const a = r[0].value;
      if (typeof a == "symbol")
        return String(a);
      if (typeof a == "string" || !Pe(a))
        return a;
    }
    let n = "";
    for (let a = 0; a < i; a++) {
      n += e[a];
      const c = r[a];
      if (c !== void 0) {
        const s = c.value;
        if (We(s) || !Pe(s))
          n += typeof s == "string" ? s : String(s);
        else
          for (const o of s)
            n += typeof o == "string" ? o : String(o);
      }
    }
    return n += e[i], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class te {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== B && (!We(e) || e !== this.value) && (this.value = e, le(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; le(this.value); ) {
      const e = this.value;
      this.value = B, e(this);
    }
    this.value !== B && this.committer.commit();
  }
}
class ue {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(X()), this.endNode = e.appendChild(X());
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
    e.__insert(this.startNode = X()), e.__insert(this.endNode = X());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = X()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; le(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = B, i(this);
    }
    const e = this.__pendingValue;
    e !== B && (We(e) ? e !== this.value && this.__commitText(e) : e instanceof zt ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Pe(e) ? this.__commitIterable(e) : e === ct ? (this.value = ct, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Ie && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new Ie(i, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const a of e)
      n = i[r], n === void 0 && (n = new ue(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(a), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    He(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Ai {
  constructor(e, i, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; le(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = B, i(this);
    }
    if (this.__pendingValue === B)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = B;
  }
}
class Ni extends Vt {
  constructor(e, i, r) {
    super(e, i, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new Xe(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Xe extends te {
}
let Mt = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Mt = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
class $i {
  constructor(e, i, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; le(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = B, a(this);
    }
    if (this.__pendingValue === B)
      return;
    const e = this.__pendingValue, i = this.value, r = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), n = e != null && (i == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Ei(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = B;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Ei = (t) => t && (Mt ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
function Ii(t) {
  let e = pe.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, pe.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const r = t.strings.join(j);
  return i = e.keyString.get(r), i === void 0 && (i = new Rt(t, t.getTemplateElement()), e.keyString.set(r, i)), e.stringsArray.set(t.strings, i), i;
}
const pe = /* @__PURE__ */ new Map();
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
const ee = /* @__PURE__ */ new WeakMap(), Pi = (t, e, i) => {
  let r = ee.get(e);
  r === void 0 && (He(e, e.firstChild), ee.set(e, r = new ue(Object.assign({ templateFactory: Ii }, i))), r.appendInto(e)), r.setValue(t), r.commit();
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
class Di {
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
    const a = i[0];
    return a === "." ? new Ni(e, i.slice(1), r).parts : a === "@" ? [new $i(e, i.slice(1), n.eventContext)] : a === "?" ? [new Ai(e, i.slice(1), r)] : new Vt(e, i, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new ue(e);
  }
}
const Ri = new Di();
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
const y = (t, ...e) => new zt(t, e, "html", Ri);
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
const Ot = (t, e) => `${t}--${e}`;
let ge = !0;
typeof window.ShadyCSS > "u" ? ge = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), ge = !1);
const Li = (t) => (e) => {
  const i = Ot(e.type, t);
  let r = pe.get(i);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, pe.set(i, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const a = e.strings.join(j);
  if (n = r.keyString.get(a), n === void 0) {
    const c = e.getTemplateElement();
    ge && window.ShadyCSS.prepareTemplateDom(c, t), n = new Rt(e, c), r.keyString.set(a, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, Ti = ["html", "svg"], Fi = (t) => {
  Ti.forEach((e) => {
    const i = pe.get(Ot(e, t));
    i !== void 0 && i.keyString.forEach((r) => {
      const { element: { content: n } } = r, a = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((c) => {
        a.add(c);
      }), Tt(r, a);
    });
  });
}, qt = /* @__PURE__ */ new Set(), zi = (t, e, i) => {
  qt.add(t);
  const r = i ? i.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: a } = n;
  if (a === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, t);
    return;
  }
  const c = document.createElement("style");
  for (let u = 0; u < a; u++) {
    const m = n[u];
    m.parentNode.removeChild(m), c.textContent += m.textContent;
  }
  Fi(t);
  const s = r.content;
  i ? wi(i, c, s.firstChild) : s.insertBefore(c, s.firstChild), window.ShadyCSS.prepareTemplateStyles(r, t);
  const o = s.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (i) {
    s.insertBefore(c, s.firstChild);
    const u = /* @__PURE__ */ new Set();
    u.add(c), Tt(i, u);
  }
}, Vi = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = i.scopeName, n = ee.has(e), a = ge && e.nodeType === 11 && !!e.host, c = a && !qt.has(r), s = c ? document.createDocumentFragment() : e;
  if (Pi(t, s, Object.assign({ templateFactory: Li(r) }, i)), c) {
    const o = ee.get(s);
    ee.delete(s);
    const u = o.value instanceof Ie ? o.value.template : void 0;
    zi(r, s, u), He(e, e.firstChild), e.appendChild(s), ee.set(e, o);
  }
  !n && a && window.ShadyCSS.styleElement(e.host);
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
var Gt;
window.JSCompiler_renameProperty = (t, e) => t;
const De = {
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
}, Bt = (t, e) => e !== t && (e === e || t === t), we = {
  attribute: !0,
  type: String,
  converter: De,
  reflect: !1,
  hasChanged: Bt
}, Ce = 1, ot = 4, dt = 8, lt = 16, Re = "finalized";
class Ht extends HTMLElement {
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
  static createProperty(e, i = we) {
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
        const a = this[e];
        this[i] = n, this.requestUpdateInternal(e, a, r);
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
    return this._classProperties && this._classProperties.get(e) || we;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(Re) || e.finalize(), this[Re] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, i, r = Bt) {
    return r(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const r = i.type, n = i.converter || De, a = typeof n == "function" ? n : n.fromAttribute;
    return a ? a(e, r) : e;
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
    return (n && n.toAttribute || De.toAttribute)(e, r);
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
  _propertyToAttribute(e, i, r = we) {
    const n = this.constructor, a = n._attributeNameForProperty(e, r);
    if (a !== void 0) {
      const c = n._propertyValueToAttribute(i, r);
      if (c === void 0)
        return;
      this._updateState = this._updateState | dt, c == null ? this.removeAttribute(a) : this.setAttribute(a, c), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & dt)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const a = r.getPropertyOptions(n);
      this._updateState = this._updateState | lt, this[n] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(i, a), this._updateState = this._updateState & -17;
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
      const a = this.constructor;
      r = r || a.getPropertyOptions(e), a._valueHasChanged(this[e], i, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, i), r.reflect === !0 && !(this._updateState & lt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
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
    this._updateState = this._updateState | ot;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & ot;
  }
  get hasUpdated() {
    return this._updateState & Ce;
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
    e && (this._updateState & Ce || (this._updateState = this._updateState | Ce, this.firstUpdated(i)), this.updated(i));
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
Gt = Re;
Ht[Gt] = !0;
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
const Mi = (t, e) => (window.customElements.define(t, e), e), Oi = (t, e) => {
  const { kind: i, elements: r } = e;
  return {
    kind: i,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(t, n);
    }
  };
}, ie = (t) => (e) => typeof e == "function" ? Mi(t, e) : Oi(t, e), qi = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
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
}, Gi = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function f(t) {
  return (e, i) => i !== void 0 ? Gi(t, e, i) : qi(t, e);
}
function Bi(t) {
  return f({ attribute: !1, hasChanged: void 0 });
}
const C = (t) => Bi();
function H(t, e) {
  return (i, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Ut(n, i, r) : Wt(n, i);
  };
}
function jt(t) {
  return (e, i) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? Ut(r, e, i) : Wt(r, e);
  };
}
const Ut = (t, e, i) => {
  Object.defineProperty(e, i, t);
}, Wt = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
}), Hi = (t, e) => Object.assign(Object.assign({}, e), { finisher(i) {
  Object.assign(i.prototype[e.key], t);
} }), ji = (
  // tslint:disable-next-line:no-any legacy decorator
  (t, e, i) => {
    Object.assign(e[i], t);
  }
);
function Ui(t) {
  return (e, i) => i !== void 0 ? ji(t, e, i) : Hi(t, e);
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
const Le = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ze = Symbol();
class Ke {
  constructor(e, i) {
    if (i !== Ze)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Le ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Wi = (t) => new Ke(String(t), Ze), Xi = (t) => {
  if (t instanceof Ke)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, Je = (t, ...e) => {
  const i = e.reduce((r, n, a) => r + Xi(n) + t[a + 1], t[0]);
  return new Ke(i, Ze);
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
const pt = {};
class re extends Ht {
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
      const i = (a, c) => a.reduceRight((s, o) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(o) ? i(o, s) : (s.add(o), s)
      ), c), r = i(e, /* @__PURE__ */ new Set()), n = [];
      r.forEach((a) => n.unshift(a)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !Le) {
        const r = Array.prototype.slice.call(i.cssRules).reduce((n, a) => n + a.cssText, "");
        return Wi(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : Le ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), i !== pt && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return pt;
  }
}
re.finalized = !0;
re.render = Vi;
re.shadowRootOptions = { mode: "open" };
const Zi = 1e3 * 60, ut = "langChanged";
function Ki(t, e, i) {
  return Object.entries(Te(e || {})).reduce((r, [n, a]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Te(a))), t);
}
function Ji(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function Te(t) {
  return typeof t == "function" ? t() : t;
}
const Qi = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: Ji,
  interpolate: Ki,
  translationCache: {}
});
let Yi = Qi();
function er(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(ut, i, e), () => window.removeEventListener(ut, i);
}
function O(t, e, i = Yi) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? Te(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Xt(t) {
  return t instanceof ue ? t.startNode.isConnected : t instanceof te ? t.committer.element.isConnected : t.element.isConnected;
}
function tr(t) {
  for (const [e] of t)
    Xt(e) || t.delete(e);
}
function ir(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function rr(t, e) {
  setInterval(() => ir(() => tr(t)), e);
}
const Zt = /* @__PURE__ */ new Map();
function nr() {
  er((t) => {
    for (const [e, i] of Zt)
      Xt(e) && ar(e, i, t);
  });
}
nr();
rr(Zt, Zi);
function ar(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
var Fe = function(t, e) {
  return Fe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, Fe(t, e);
};
function cr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Fe(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var de = function() {
  return de = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, de.apply(this, arguments);
};
function h(t, e, i, r) {
  var n = arguments.length, a = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, r);
  else for (var s = t.length - 1; s >= 0; s--) (c = t[s]) && (a = (n < 3 ? c(a) : n > 3 ? c(e, i, a) : c(e, i)) || a);
  return n > 3 && a && Object.defineProperty(e, i, a), a;
}
function he(t) {
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
function sr(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Kt = () => {
}, or = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Kt, or);
document.removeEventListener("x", Kt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Jt extends re {
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
var dr = (
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
var lr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, pr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ht = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function ur(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, a = r + i.left, c = n + i.top, s, o;
  if (t.type === "touchstart") {
    var u = t;
    s = u.changedTouches[0].pageX - a, o = u.changedTouches[0].pageY - c;
  } else {
    var m = t;
    s = m.pageX - a, o = m.pageY - c;
  }
  return { x: s, y: o };
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
var mt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ft = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], me = [], hr = (
  /** @class */
  function(t) {
    cr(e, t);
    function e(i) {
      var r = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
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
        return lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ht;
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
        var n = e.cssClasses, a = n.ROOT, c = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(c), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(a), i.removeCssVars();
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
          for (var a = he(mt), c = a.next(); !c.done; c = a.next()) {
            var s = c.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            c && !c.done && (n = a.return) && n.call(a);
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
          for (var a = he(ft), c = a.next(); !c.done; c = a.next()) {
            var s = c.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            c && !c.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = he(mt), a = n.next(); !a.done; a = n.next()) {
          var c = a.value;
          this.adapter.deregisterInteractionHandler(c, this.activateHandler);
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
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = he(ft), a = n.next(); !a.done; a = n.next()) {
          var c = a.value;
          this.adapter.deregisterDocumentInteractionHandler(c, this.deactivateHandler);
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
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var a = this.previousActivationEvent, c = a && i !== void 0 && a.type !== i.type;
          if (!c) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var s = i !== void 0 && me.length > 0 && me.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (me.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              me = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, c = e.cssClasses, s = c.FG_DEACTIVATION, o = c.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), _ = b.startPoint, x = b.endPoint;
        m = _.x + "px, " + _.y + "px", d = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(n, m), this.adapter.updateCssVariable(a, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, a;
      n ? a = ur(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var c = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: c };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, a = n.hasDeactivationUXRun, c = n.isActivated, s = a || !c;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, ht.FG_DEACTIVATION_MS));
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
        var n = de({}, r);
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
        var c = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return c + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, a = i.VAR_TOP, c = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(c, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(dr)
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
class mr {
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
const bt = /* @__PURE__ */ new WeakMap(), Qe = Ue((t) => (e) => {
  if (!(e instanceof te) || e instanceof Xe || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = bt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), bt.set(e, n = /* @__PURE__ */ new Set()));
  const a = r.classList || new mr(r);
  n.forEach((c) => {
    c in t || (a.remove(c), n.delete(c));
  });
  for (const c in t) {
    const s = t[c];
    s != n.has(c) && (s ? (a.add(c), n.add(c)) : (a.remove(c), n.delete(c)));
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
const yt = /* @__PURE__ */ new WeakMap(), fr = Ue((t) => (e) => {
  if (!(e instanceof te) || e instanceof Xe || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = yt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), yt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((a) => {
    a in t || (n.delete(a), a.indexOf("-") === -1 ? r[a] = null : r.removeProperty(a));
  });
  for (const a in t)
    n.add(a), a.indexOf("-") === -1 ? r[a] = t[a] : r.setProperty(a, t[a]);
});
class P extends Jt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = hr;
  }
  get isActive() {
    return sr(this.parentElement || this, ":active");
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
    return y`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Qe(r)}"
          style="${fr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
h([
  H(".mdc-ripple-surface")
], P.prototype, "mdcRoot", void 0);
h([
  f({ type: Boolean })
], P.prototype, "primary", void 0);
h([
  f({ type: Boolean })
], P.prototype, "accent", void 0);
h([
  f({ type: Boolean })
], P.prototype, "unbounded", void 0);
h([
  f({ type: Boolean })
], P.prototype, "disabled", void 0);
h([
  f({ type: Boolean })
], P.prototype, "activated", void 0);
h([
  f({ type: Boolean })
], P.prototype, "selected", void 0);
h([
  f({ type: Boolean })
], P.prototype, "internalUseStateLayerCustomProperties", void 0);
h([
  C()
], P.prototype, "hovering", void 0);
h([
  C()
], P.prototype, "bgFocused", void 0);
h([
  C()
], P.prototype, "fgActivation", void 0);
h([
  C()
], P.prototype, "fgDeactivation", void 0);
h([
  C()
], P.prototype, "fgScale", void 0);
h([
  C()
], P.prototype, "fgSize", void 0);
h([
  C()
], P.prototype, "translateStart", void 0);
h([
  C()
], P.prototype, "translateEnd", void 0);
h([
  C()
], P.prototype, "leftPos", void 0);
h([
  C()
], P.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const br = Je`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ze = class extends P {
};
ze.styles = [br];
ze = h([
  ie("mwc-ripple")
], ze);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ye = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, a) => e.constructor._observers.set(a, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((a, c) => {
          const o = this.constructor._observers.get(c);
          o !== void 0 && o.call(this, this[c], a);
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
class Qt {
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
class T extends re {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Qt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : y``, r = this.hasMeta ? this.renderMeta() : y``;
    return y`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? y`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? y`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return y`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Qe(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return y`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return y`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return y`<slot></slot>`;
  }
  renderTwoline() {
    return y`
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
h([
  H("slot")
], T.prototype, "slotElement", void 0);
h([
  jt("mwc-ripple")
], T.prototype, "ripple", void 0);
h([
  f({ type: String })
], T.prototype, "value", void 0);
h([
  f({ type: String, reflect: !0 })
], T.prototype, "group", void 0);
h([
  f({ type: Number, reflect: !0 })
], T.prototype, "tabindex", void 0);
h([
  f({ type: Boolean, reflect: !0 }),
  Ye(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], T.prototype, "disabled", void 0);
h([
  f({ type: Boolean, reflect: !0 })
], T.prototype, "twoline", void 0);
h([
  f({ type: Boolean, reflect: !0 })
], T.prototype, "activated", void 0);
h([
  f({ type: String, reflect: !0 })
], T.prototype, "graphic", void 0);
h([
  f({ type: Boolean })
], T.prototype, "multipleGraphics", void 0);
h([
  f({ type: Boolean })
], T.prototype, "hasMeta", void 0);
h([
  f({ type: Boolean, reflect: !0 }),
  Ye(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], T.prototype, "noninteractive", void 0);
h([
  f({ type: Boolean, reflect: !0 }),
  Ye(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], T.prototype, "selected", void 0);
h([
  C()
], T.prototype, "shouldRenderRipple", void 0);
h([
  C()
], T.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const yr = Je`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ve = class extends T {
};
Ve.styles = [yr];
Ve = h([
  ie("mwc-list-item")
], Ve);
var gr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, G = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? vr(e, i) : e, a = t.length - 1, c; a >= 0; a--)
    (c = t[a]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && gr(e, i, n), n;
};
let M = class extends ki {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(O("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? y`<div style="position:relative;">
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
      </div>` : y``;
  }
  renderMulplierList() {
    return y`${this.multipliers.map(
      (t) => y`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? O("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? y`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : y``;
  }
  render() {
    return y`
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
  f({ type: Boolean })
], M.prototype, "nullable", 2);
G([
  f({ type: Array })
], M.prototype, "multipliers", 2);
G([
  f({ type: String })
], M.prototype, "multiplier", 1);
G([
  f({ type: String })
], M.prototype, "unit", 2);
G([
  C()
], M.prototype, "null", 1);
G([
  f({ type: String })
], M.prototype, "maybeValue", 1);
G([
  f({ type: String })
], M.prototype, "defaultValue", 2);
G([
  f({ type: Array })
], M.prototype, "reservedValues", 2);
G([
  H("mwc-switch")
], M.prototype, "nullSwitch", 2);
G([
  H("mwc-menu")
], M.prototype, "multiplierMenu", 2);
G([
  H("mwc-icon-button")
], M.prototype, "multiplierButton", 2);
M = G([
  ie("wizard-textfield")
], M);
var xr = Object.defineProperty, kr = Object.getOwnPropertyDescriptor, Y = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? kr(e, i) : e, a = t.length - 1, c; a >= 0; a--)
    (c = t[a]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && xr(e, i, n), n;
};
let U = class extends Si {
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
    return this.nullable ? y`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : y``;
  }
  render() {
    return y`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Y([
  f({ type: Boolean })
], U.prototype, "nullable", 2);
Y([
  C()
], U.prototype, "null", 1);
Y([
  f({ type: String })
], U.prototype, "maybeValue", 1);
Y([
  f({ type: String })
], U.prototype, "defaultValue", 2);
Y([
  f({ type: Array })
], U.prototype, "reservedValues", 2);
Y([
  H("mwc-switch")
], U.prototype, "nullSwitch", 2);
U = Y([
  ie("wizard-select")
], U);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Sr(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const s = `__${e}`;
    if (i = r.getPropertyDescriptor(e, s), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let a = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const c = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      a === "" && (a = r.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), n.set.call(this, s);
    }
  };
  return n.get && (c.get = function() {
    return n.get.call(this);
  }), c;
}
function et(t, e, i) {
  if (e !== void 0)
    return Sr(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Yt extends Jt {
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
Yt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const Ae = /* @__PURE__ */ new WeakMap(), ce = Ue((t) => (e) => {
  const i = Ae.get(e);
  if (t === void 0 && e instanceof te) {
    if (i !== void 0 || !Ae.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  Ae.set(e, t);
});
class D extends Yt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Qt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const a = this.calculateAnimationStateName(!!r, !!i, !!n), c = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${c}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? y`<mwc-ripple
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
    return y`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Qe(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ce(this.name)}"
              aria-checked="${ce(r)}"
              aria-label="${ce(this.ariaLabel)}"
              aria-labelledby="${ce(this.ariaLabelledBy)}"
              aria-describedby="${ce(this.ariaDescribedBy)}"
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
h([
  H(".mdc-checkbox")
], D.prototype, "mdcRoot", void 0);
h([
  H("input")
], D.prototype, "formElement", void 0);
h([
  f({ type: Boolean, reflect: !0 })
], D.prototype, "checked", void 0);
h([
  f({ type: Boolean })
], D.prototype, "indeterminate", void 0);
h([
  f({ type: Boolean, reflect: !0 })
], D.prototype, "disabled", void 0);
h([
  f({ type: String, reflect: !0 })
], D.prototype, "name", void 0);
h([
  f({ type: String })
], D.prototype, "value", void 0);
h([
  et,
  f({ type: String, attribute: "aria-label" })
], D.prototype, "ariaLabel", void 0);
h([
  et,
  f({ type: String, attribute: "aria-labelledby" })
], D.prototype, "ariaLabelledBy", void 0);
h([
  et,
  f({ type: String, attribute: "aria-describedby" })
], D.prototype, "ariaDescribedBy", void 0);
h([
  f({ type: Boolean })
], D.prototype, "reducedTouchTarget", void 0);
h([
  C()
], D.prototype, "animationClass", void 0);
h([
  C()
], D.prototype, "shouldRenderRipple", void 0);
h([
  C()
], D.prototype, "focused", void 0);
h([
  C()
], D.prototype, "useStateLayerCustomProperties", void 0);
h([
  jt("mwc-ripple")
], D.prototype, "ripple", void 0);
h([
  Ui({ passive: !0 })
], D.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _r = Je`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Me = class extends D {
};
Me.styles = [_r];
Me = h([
  ie("mwc-checkbox")
], Me);
var wr = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, q = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Cr(e, i) : e, a = t.length - 1, c; a >= 0; a--)
    (c = t[a]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && wr(e, i, n), n;
};
let V = class extends re {
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
    return this.nullable ? y`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : y``;
  }
  render() {
    return y`
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
  f({ type: String })
], V.prototype, "label", 2);
q([
  f({ type: String })
], V.prototype, "helper", 2);
q([
  f({ type: Boolean })
], V.prototype, "nullable", 2);
q([
  f({ type: Boolean })
], V.prototype, "defaultChecked", 2);
q([
  f({ type: String })
], V.prototype, "maybeValue", 1);
q([
  f({ type: Boolean })
], V.prototype, "disabled", 2);
q([
  C()
], V.prototype, "null", 1);
q([
  C()
], V.prototype, "checked", 1);
q([
  C()
], V.prototype, "deactivateCheckbox", 2);
q([
  C()
], V.prototype, "formfieldLabel", 1);
q([
  H("mwc-switch")
], V.prototype, "nullSwitch", 2);
q([
  H("mwc-checkbox")
], V.prototype, "checkbox", 2);
V = q([
  ie("wizard-checkbox")
], V);
function Ar(t) {
  return typeof t == "function";
}
function Oe(t) {
  return t instanceof M || t instanceof U || t instanceof V ? t.maybeValue : t.value ?? null;
}
function tt(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Ar(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function Nr(t) {
  return tt(t, { detail: { subwizard: !0 } });
}
function $r(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function F(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const N = ":not(*)";
function Er(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Ir(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? N : `${t}[version="${i}"][revision="${r}"]`;
}
function gt(t) {
  return $(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function vt(t, e) {
  const [i, r] = F(e), n = I[t].parents.flatMap(
    (a) => R(a, i).split(",")
  );
  return L(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((a) => a.join("")).join(",");
}
function Pr(t) {
  const [e, i, r, n, a, c] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => t.getAttribute(s));
  return e === "None" ? `${$(t.parentElement)}>(${n} ${c} ${a})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${a ?? ""}`;
}
function Dr(t, e) {
  if (e.endsWith(")")) {
    const [b, _] = F(e), [x, k, S] = _.substring(1, _.length - 1).split(" ");
    if (!x || !k) return N;
    const w = I[t].parents.flatMap(
      (E) => R(E, b).split(",")
    );
    return L(
      w,
      [">"],
      [`${t}[iedName="None"][lnClass="${x}"][lnType="${k}"][lnInst="${S}"]`]
    ).map((E) => E.join("")).join(",");
  }
  const [i, r, n, a, c] = e.split(/[ /]/);
  if (!i || !r || !a) return N;
  const [
    s,
    o,
    u,
    m,
    d
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    [t],
    s,
    o,
    u,
    m,
    d
  ).map((b) => b.join("")).join(",");
}
function Rr(t) {
  return `${$(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Lr(t, e) {
  const [i, r] = F(e), [n, a] = r.split(" ");
  return `${R(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${a}"]`;
}
function Tr(t) {
  return `${$(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Fr(t, e) {
  const [i, r] = F(e);
  return r ? `${R(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : N;
}
function zr(t) {
  return `${$(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Vr(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : N;
}
function Mr(t) {
  const e = t.textContent, [i, r, n, a, c] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${$(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${a ?? ""} ${c ?? ""}`;
}
function Or(t, e) {
  const [i, r] = F(e), [n, a, c, s, o, u] = r.split(/[ /]/), [
    m,
    d,
    b,
    _,
    x,
    k
  ] = [
    I[t].parents.flatMap(
      (S) => R(S, i).split(",")
    ),
    [`${n}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    m,
    [">"],
    [t],
    d,
    b,
    _,
    x,
    k
  ).map((S) => S.join("")).join(",");
}
function qr(t) {
  const [e, i, r, n, a, c, s, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => t.getAttribute(m)), u = `${e}/${i ?? ""} ${r} ${n ?? ""}.${a} ${c || ""}`;
  return `${$(t.parentElement)}>${u} (${s}${o ? " [" + o + "]" : ""})`;
}
function Gr(t, e) {
  const [i, r] = F(e), [n, a, c, s] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = o && o[1] ? o[1] : "", m = o && o[2] ? o[2] : "", d = r.match(/\(([A-Z]{2})/), b = r.match(/ \[([0-9]{1,2})\]/), _ = d && d[1] ? d[1] : "", x = b && b[1] ? b[1] : "", [
    k,
    S,
    w,
    E,
    z,
    xe,
    ke,
    Se,
    _e
  ] = [
    I[t].parents.flatMap(
      (ne) => R(ne, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${_}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return L(
    k,
    [">"],
    [t],
    S,
    w,
    E,
    z,
    xe,
    ke,
    Se,
    _e
  ).map((ne) => ne.join("")).join(",");
}
function Br(t) {
  if (!t.parentElement) return NaN;
  const e = $(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    a,
    c,
    s,
    o,
    u,
    m,
    d,
    b,
    _,
    x,
    k,
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
  ].map((z) => t.getAttribute(z)), w = S ? `${d}:${S} ${b ?? ""}/${_ ?? ""} ${x ?? ""} ${k ?? ""}` : "", E = `${i} ${a}/${c ?? ""} ${s} ${o ?? ""} ${u} ${m || ""}`;
  return `${e}>${w ? w + " " : ""}${E}${r ? `@${r}` : ""}`;
}
function Hr(t, e) {
  const [i, r] = F(e), n = I[t].parents.flatMap(
    (ae) => R(ae, i).split(",")
  );
  if (r.endsWith("]")) {
    const [ae] = r.split("["), vi = [`[intAddr="${ae}"]`];
    return L(n, [">"], [t], vi).map((xi) => xi.join("")).join(",");
  }
  let a, c, s, o, u, m, d, b, _, x, k, S, w, E;
  !r.includes(":") && !r.includes("@") ? [a, c, s, o, u, m, d] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    b,
    _,
    x,
    k,
    S,
    w,
    a,
    c,
    s,
    o,
    u,
    m,
    d
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [a, c, s, o, u, m, d, E] = r.split(/[ /@]/) : [
    b,
    _,
    x,
    k,
    S,
    w,
    a,
    c,
    s,
    o,
    u,
    m,
    d,
    E
  ] = r.split(/[ /:@]/);
  const [
    z,
    xe,
    ke,
    Se,
    _e,
    ne,
    pi,
    ui,
    hi,
    mi,
    fi,
    bi,
    yi,
    gi
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    d ? [`[daName="${d}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    _ ? [`[srcCBName="${_}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    S ? [`[srcLNClass="${S}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    w ? [`[srcLNInst="${w}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    E ? [`[intAddr="${E}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return L(
    n,
    [">"],
    [t],
    z,
    xe,
    ke,
    Se,
    _e,
    ne,
    pi,
    ui,
    hi,
    mi,
    fi,
    bi,
    yi,
    gi
  ).map((ae) => ae.join("")).join(",");
}
function jr(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${$(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Ur(t, e) {
  const [i, r] = F(e), n = I[t].parents.flatMap(
    (d) => R(d, i).split(",")
  ), [a, c, s] = r.split(" ");
  if (!c) return N;
  const [o, u, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    [`[inst="${s}"]`]
  ];
  return L(
    n,
    [">"],
    [t],
    o,
    u,
    m
  ).map((d) => d.join("")).join(",");
}
function Wr(t) {
  const [e, i, r, n, a, c] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${$(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${a} ${c}`;
}
function Xr(t, e) {
  const [i, r] = F(e), n = I[t].parents.flatMap(
    (w) => R(w, i).split(",")
  ), [a, c, s, o, u, m] = r.split(/[ /]/), [
    d,
    b,
    _,
    x,
    k,
    S
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    n,
    [">"],
    [t],
    d,
    b,
    _,
    x,
    k,
    S
  ).map((w) => w.join("")).join(",");
}
function xt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${$(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function qe(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = F(e), [a, c, s, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!c) return N;
  if (i === 0) return `${t}[name="${c}"]`;
  const u = I[t].parents.flatMap(
    (b) => b === "SDI" ? qe(b, r, i - 1).split(",") : R(b, r).split(",")
  ).filter((b) => !b.startsWith(N));
  if (u.length === 0) return N;
  const [m, d] = [
    [`[name="${c}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return L(
    u,
    [">"],
    [t],
    m,
    d
  ).map((b) => b.join("")).join(",");
}
function Zr(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${$(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Kr(t, e) {
  const [i, r] = F(e), [n, a] = r.split(" "), c = parseFloat(a), s = I[t].parents.flatMap(
    (m) => R(m, i).split(",")
  ), [o, u] = [
    n ? [`[sGroup="${n}"]`] : [""],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return L(
    s,
    [">"],
    [t],
    o,
    u
  ).map((m) => m.join("")).join(",");
}
function Jr(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Qr(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? N : `${t}[iedName="${i}"][apName="${r}"]`;
}
function kt(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function St(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? N : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function Yr(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${$(t.parentElement)}>${e}`;
}
function en(t, e) {
  const [i, r] = F(e), [n, a] = [
    I[t].parents.flatMap(
      (c) => R(c, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return L(n, [">"], [t], a).map((c) => c.join("")).join(",");
}
function tn(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${$(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${$(t.parentElement)}>${i} [${r}]`;
}
function rn(t, e) {
  const [i, r] = F(e), [n] = r.split(" "), a = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [c, s, o] = [
    I[t].parents.flatMap(
      (u) => R(u, i).split(",")
    ),
    [`[type="${n}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return L(
    c,
    [">"],
    [t],
    s,
    o
  ).map((u) => u.join("")).join(",");
}
function nn(t) {
  return `${$(t.parentElement)}>${t.getAttribute("ord")}`;
}
function an(t, e) {
  const [i, r] = F(e);
  return `${R("EnumType", i)}>${t}[ord="${r}"]`;
}
function cn(t) {
  return `${$(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function sn(t, e) {
  const [i, r] = F(e), [n, a] = r.split("	"), [c] = [
    I[t].parents.flatMap(
      (s) => R(s, i).split(",")
    )
  ];
  return L(
    c,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [a]
  ).map((s) => s.join("")).join(",");
}
function on() {
  return "";
}
function dn() {
  return ":root";
}
function v(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${$(t.parentElement)}>${t.getAttribute("name")}`;
}
function g(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = F(e);
  if (!n) return N;
  if (i === 0) return `${t}[name="${n}"]`;
  const a = I[t].parents;
  if (!a) return N;
  const c = a.flatMap(
    (s) => I[s].selector === I.Substation.selector ? g(s, r, i - 1).split(",") : R(s, r).split(",")
  ).filter((s) => !s.startsWith(N));
  return c.length === 0 ? N : L(c, [">"], [t], [`[name="${n}"]`]).map((s) => s.join("")).join(",");
}
function l(t) {
  return $(t.parentElement).toString();
}
function p(t, e) {
  const i = I[t].parents;
  if (!i) return N;
  const r = i.flatMap((n) => R(n, e).split(",")).filter((n) => !n.startsWith(N));
  return r.length === 0 ? N : L(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function fe(t) {
  return `#${t.id}`;
}
function be(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : N;
}
const ei = [
  "TransformerWinding",
  "ConductingEquipment"
], ti = [
  "GeneralEquipment",
  "PowerTransformer",
  ...ei
], Ge = ["Substation", "VoltageLevel", "Bay"], ii = ["Process", "Line"], ri = ["EqSubFunction", "EqFunction"], ln = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...ti,
  ...Ge,
  ...ii,
  ...ri
], ni = ["ConnectivityNode", ...ln], pn = ["GOOSESecurity", "SMVSecurity"], un = ["SubNetwork", ...pn, ...ni], hn = ["BDA", "DA"], mn = ["SampledValueControl", "GSEControl"], fn = ["LogControl", "ReportControl"], bn = [...mn, ...fn], yn = ["GSE", "SMV"], gn = [
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
  ...bn,
  ...yn,
  ...hn
], J = ["LN0", "LN"], vn = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], xn = ["Subject", "IssuerName"], kn = ["MinTime", "MaxTime"], Sn = ["LNodeType", "DOType", "DAType", "EnumType"], _n = [
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
], wn = ["DynDataSet", "ConfDataSet"], Cn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...wn
], An = ["ConfLogControl", "ConfSigRef"], Nn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], $n = ["SCL", ...un, ...gn, ...Sn], ai = [
  ...$n,
  ...vn,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...xn,
  ...kn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...J,
  ..._n,
  "DynAssociation",
  "SettingGroups",
  ...Cn,
  ...An,
  ...Nn,
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
], En = new Set(ai);
function it(t) {
  return En.has(t);
}
const ve = ["Text", "Private"], W = [...ve], A = [...ve], ye = [...ve], _t = [...A, "Val"], ci = [...W, "LNode"], Z = [...ci], Be = [...Z], Ne = [
  ...Z,
  "PowerTransformer",
  "GeneralEquipment"
], wt = [
  ...Be,
  "Terminal"
], Ct = [...A, "Address"], si = [...W], At = [...si, "IEDName"], Nt = [
  ...A,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], $t = [
  ...Z,
  "GeneralEquipment",
  "Function"
], Et = [...si, "TrgOps"], It = [
  ...Z,
  "GeneralEquipment",
  "EqSubFunction"
], I = {
  AccessControl: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: v,
    selector: g,
    parents: ["IED"],
    children: [
      ...W,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: l,
    selector: p,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Tr,
    selector: Fr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: l,
    selector: p,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: v,
    selector: g,
    parents: ["DAType"],
    children: [..._t]
  },
  BitRate: {
    identity: l,
    selector: p,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: v,
    selector: g,
    parents: ["VoltageLevel"],
    children: [
      ...Ne,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Wr,
    selector: Xr,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: l,
    selector: p,
    parents: ["SCL"],
    children: [...A, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: v,
    selector: g,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...wt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: l,
    selector: p,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Jr,
    selector: Qr,
    parents: ["SubNetwork"],
    children: [...A, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: v,
    selector: g,
    parents: ["Bay", "Line"],
    children: [...ci]
  },
  DA: {
    identity: v,
    selector: g,
    parents: ["DOType"],
    children: [..._t]
  },
  DAI: {
    identity: xt,
    selector: qe,
    parents: ["DOI", "SDI"],
    children: [...A, "Val"]
  },
  DAType: {
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ye, "BDA", "ProtNs"]
  },
  DO: {
    identity: v,
    selector: g,
    parents: ["LNodeType"],
    children: [...A]
  },
  DOI: {
    identity: v,
    selector: g,
    parents: [...J],
    children: [...A, "SDI", "DAI"]
  },
  DOType: {
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ye, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: v,
    selector: g,
    parents: [...J],
    children: [...W, "FCDA"]
  },
  DataSetDirectory: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: l,
    selector: p,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ye, "EnumVal"]
  },
  EnumVal: {
    identity: nn,
    selector: an,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: v,
    selector: g,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...It]
  },
  EqSubFunction: {
    identity: v,
    selector: g,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...It]
  },
  ExtRef: {
    identity: Br,
    selector: Hr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: qr,
    selector: Gr,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: v,
    selector: g,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Z,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: v,
    selector: g,
    parents: [
      "SubFunction",
      "Function",
      ...ii,
      ...ri,
      ...Ge
    ],
    children: [...Be, "EqFunction"]
  },
  GetCBValues: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: v,
    selector: g,
    parents: ["AccessPoint"],
    children: [...W, "Subject", "IssuerName"]
  },
  GSE: {
    identity: kt,
    selector: St,
    parents: ["ConnectedAP"],
    children: [...Ct, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: v,
    selector: g,
    parents: ["LN0"],
    children: [...At, "Protocol"]
  },
  GSESettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: l,
    selector: p,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: l,
    selector: p,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Er,
    selector: Ir,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: v,
    selector: g,
    parents: ["SCL"],
    children: [...A, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Mr,
    selector: Or,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: l,
    selector: p,
    parents: [...J],
    children: [...A, "ExtRef"]
  },
  IssuerName: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Rr,
    selector: Lr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: zr,
    selector: Vr,
    parents: ["Server"],
    children: [...A, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: jr,
    selector: Ur,
    parents: ["AccessPoint", "LDevice"],
    children: [...Nt]
  },
  LN0: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: [
      ...Nt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Pr,
    selector: Dr,
    parents: [...ni],
    children: [...A]
  },
  LNodeType: {
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ye, "DO"]
  },
  Line: {
    identity: v,
    selector: g,
    parents: ["Process", "SCL"],
    children: [
      ...$t,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: v,
    selector: g,
    parents: [...J],
    children: [...A]
  },
  LogControl: {
    identity: v,
    selector: g,
    parents: [...J],
    children: [...Et]
  },
  LogSettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: l,
    selector: p,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: l,
    selector: p,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: l,
    selector: p,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: gt,
    selector: vt,
    parents: ["TransformerWinding"],
    children: [...A]
  },
  OptFields: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: tn,
    selector: rn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Yr,
    selector: en,
    parents: ["ConnectedAP"],
    children: [...A, "P"]
  },
  PowerTransformer: {
    identity: v,
    selector: g,
    parents: [...Ge],
    children: [
      ...Be,
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
    identity: v,
    selector: g,
    parents: ["Process", "SCL"],
    children: [
      ...$t,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: cn,
    selector: sn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: l,
    selector: p,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: v,
    selector: g,
    parents: [...J],
    children: [...Et, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: [...A, "ClientLN"]
  },
  SamplesPerSec: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: v,
    selector: g,
    parents: ["LN0"],
    children: [...At, "SmvOpts"]
  },
  SecPerSamples: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: on,
    selector: dn,
    parents: [],
    children: [
      ...ve,
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
    identity: xt,
    selector: qe,
    parents: ["DOI", "SDI"],
    children: [...A, "SDI", "DAI"]
  },
  SDO: {
    identity: v,
    selector: g,
    parents: ["DOType"],
    children: [...W]
  },
  Server: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [
      ...A,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [...A]
  },
  Services: {
    identity: l,
    selector: p,
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
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: l,
    selector: p,
    parents: ["LN0"],
    children: [...A]
  },
  SettingGroups: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: l,
    selector: p,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: kt,
    selector: St,
    parents: ["ConnectedAP"],
    children: [...Ct]
  },
  SmvOpts: {
    identity: l,
    selector: p,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: v,
    selector: g,
    parents: ["AccessPoint"],
    children: [...W, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: v,
    selector: g,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...ei
    ],
    children: [...Z, "EqFunction"]
  },
  SubFunction: {
    identity: v,
    selector: g,
    parents: ["SubFunction", "Function"],
    children: [
      ...Z,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: v,
    selector: g,
    parents: ["Communication"],
    children: [...W, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: v,
    selector: g,
    parents: ["SCL"],
    children: [...Ne, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: v,
    selector: g,
    parents: ["TransformerWinding"],
    children: [...Z, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: gt,
    selector: vt,
    parents: [...ti],
    children: [...A]
  },
  Text: {
    identity: l,
    selector: p,
    parents: ai.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: l,
    selector: p,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: v,
    selector: g,
    parents: ["PowerTransformer"],
    children: [
      ...wt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Zr,
    selector: Kr,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: l,
    selector: p,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: v,
    selector: g,
    parents: ["Substation"],
    children: [...Ne, "Voltage", "Bay", "Function"]
  }
};
function R(t, e) {
  return typeof e != "string" ? N : it(t) ? I[t].selector(t, e) : t;
}
function In(t, e, i) {
  if (typeof i != "string" || !it(e)) return null;
  const r = t.querySelector(I[e].selector(e, i));
  return r === null || Q(r) ? r : Array.from(
    t.querySelectorAll(I[e].selector(e, i))
  ).find(Q) ?? null;
}
function $(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return it(e) ? I[e].identity(t) : NaN;
}
function L(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Q(t) {
  return !t.closest("Private");
}
const Pn = 99;
Array(Pn).fill(1).map((t, e) => `${e + 1}`);
function Dn(t, e) {
  const i = {};
  return Array.from(t.attributes).forEach((r) => {
    i[r.name] = r.value;
  }), { element: t, oldAttributes: i, newAttributes: e };
}
function Rn(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const Ln = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*"
}, oi = {
  IED: [
    {
      attributeName: "iedName",
      filter: K("Association")
    },
    {
      attributeName: "iedName",
      filter: K("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: K("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: K("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: K("KDC")
    },
    {
      attributeName: "iedName",
      filter: K("LNode")
    },
    {
      attributeName: null,
      filter: $e("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: $e("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: $e("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: K("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Pt("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Pt("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function K(t) {
  return function(i, r, n) {
    return `${t}[${r}="${n}"]`;
  };
}
function $e(t) {
  return function() {
    return `${t}`;
  };
}
function Pt(t, e) {
  return function(r, n, a) {
    return `${t}${Object.entries(e).map(([c, s]) => {
      const o = r.closest(c);
      if (o && o.hasAttribute("name")) {
        const u = o.getAttribute("name");
        return `[${s}="${u}"]`;
      }
      return null;
    }).join("")}[${n}="${a}"]`;
  };
}
function Tn(t, e, i) {
  const r = t.cloneNode(!1);
  return r.setAttribute(e, i), r;
}
function di(t, e) {
  const i = t.cloneNode(!1);
  return i.textContent = e, i;
}
function Fn(t, e, i) {
  if (e === null || e === i)
    return [];
  const r = oi[t.tagName];
  if (r === void 0)
    return [];
  const n = [];
  return r.forEach((a) => {
    const c = a.filter(t, a.attributeName, e);
    a.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${c}`)).filter(Q).forEach((s) => {
      const o = Tn(
        s,
        a.attributeName,
        i
      );
      n.push({ old: { element: s }, new: { element: o } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${c}`)).filter((s) => s.textContent === e).filter(Q).forEach((s) => {
      const o = di(s, i);
      n.push({ old: { element: s }, new: { element: o } });
    });
  }), t.tagName === "IED" && n.push(...zn(t, e, i)), n;
}
function zn(t, e, i) {
  const r = [];
  return t.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const c = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (c.length === 0) return;
    const s = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${e}"][srcCBName]`
    ), o = s?.getAttribute("srcLDInst") + "/" + s?.getAttribute("srcLNClass") + "." + s?.getAttribute("srcCBName");
    for (let u of c)
      if (e + o === u.textContent.trim()) {
        const m = di(
          u,
          i + o
        );
        r.push({
          old: { element: u },
          new: { element: m }
        });
        break;
      }
  }), r;
}
function li(t) {
  const e = $r(t) ?? null;
  if (e === null)
    return [];
  const i = oi[t.tagName];
  if (i === void 0)
    return [];
  const r = [];
  return i.forEach((n) => {
    const a = n.filter(t, n.attributeName, e);
    n.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter(Q).forEach((c) => {
      r.push({ old: { parent: c.parentElement, element: c } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter((c) => c.textContent === e).filter(Q).forEach((c) => {
      c.parentElement && r.push({
        old: {
          parent: c.parentElement.parentElement,
          element: c.parentElement
        }
      });
    });
  }), r;
}
function Vn(t, e) {
  return (i) => {
    const r = {};
    if (Mn(r, t, i), Object.keys(r).length == 0)
      return [];
    On(t, r);
    const n = Oe(i.find((c) => c.label === "name")), a = {
      actions: [],
      title: O(e, { name: n })
    };
    return a.actions.push(Dn(t, r)), a.actions.push(
      ...Fn(t, t.getAttribute("name"), n)
    ), a.actions.length ? [a] : [];
  };
}
function Mn(t, e, i) {
  const r = Oe(i.find((a) => a.label === "name")), n = Oe(i.find((a) => a.label === "desc"));
  r !== e.getAttribute("name") && (t.name = r), n !== e.getAttribute("desc") && (t.desc = n);
}
function On(t, e) {
  const i = Object.keys(e);
  return Array.from(t.attributes).filter((r) => !i.includes(r.name)).forEach((r) => {
    e[r.name] = r.value;
  }), e;
}
const qn = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Gn(t) {
  return qn.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(
      e
    )}"]` : ""
  ).join("");
}
const Bn = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Hn(t) {
  return Bn.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(e)}"]` : ""
  ).join("");
}
function jn(t) {
  if (!t.length) return [];
  const e = [], i = {};
  for (const r of t) {
    const n = r.old.element, a = r.old.parent, c = $(a);
    i[c] || (i[c] = a.cloneNode(!0));
    const s = i[c].querySelector(
      `ExtRef${n.getAttribute("iedName") ? `[iedName="${n.getAttribute("iedName")}"]` : ""}${Gn(n)}${n.getAttribute("serviceType") ? `[serviceType="${n.getAttribute("serviceType")}"]` : ""}${Hn(n)}`
    );
    s && i[c].removeChild(s);
  }
  return Object.entries(i).forEach(([r, n]) => {
    if (n.children.length == 0) {
      const a = t[0].old.parent.ownerDocument, c = In(a, "Inputs", r);
      c && c.parentElement && e.push({
        old: { parent: c.parentElement, element: c }
      });
    }
  }), e;
}
const Un = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Wn(t, e, i, r, n, a, c, s, o) {
  return [
    y`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${O("ied.wizard.nameHelper")}"
      required
      validationMessage="${O("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${o}
      pattern="${Un}"
    ></wizard-textfield>`,
    y`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${O("ied.wizard.descHelper")}"
      pattern="${Ln.normalizedString}"
    ></wizard-textfield>`,
    y`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    y`<wizard-textfield
      label="manufacturer"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    y`<wizard-textfield
      label="configVersion"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    y`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    y`<wizard-textfield
      label="engRight"
      .maybeValue=${c || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    y`<wizard-textfield
      label="owner"
      .maybeValue=${s || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Xn(t) {
  return [
    y` <section>
      <h1>${O("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${t.map((e) => {
      const i = e.old.element;
      return y` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${$(e.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Zn(t) {
  return (t.getAttribute("originalSclVersion") ?? "").concat(t.getAttribute("originalSclRevision") ?? "").concat(t.getAttribute("originalSclRelease") ?? "");
}
function Kn(t) {
  return Array.from(t.parentNode.querySelectorAll("IED")).filter(Q).map((e) => e.getAttribute("name") ?? "").filter((e) => e !== t.getAttribute("name"));
}
function Jn(t) {
  return (e, i) => {
    i.dispatchEvent(tt());
    const r = li(t), n = r.filter(
      (o) => o.old.element.tagName === "ExtRef"
    ), a = jn(n), c = t.getAttribute("name") ?? "Unknown", s = {
      actions: [],
      title: O("ied.action.deleteied", { name: c })
    };
    return s.actions.push({
      old: { parent: t.parentElement, element: t }
    }), s.actions.push(...r), s.actions.push(...a), [s];
  };
}
function Qn(t) {
  const e = li(t);
  return e.length > 0 ? [
    {
      title: O("ied.wizard.title.delete"),
      content: Xn(e),
      primary: {
        icon: "delete",
        label: O("remove"),
        action: Jn(t)
      }
    }
  ] : null;
}
function da(t) {
  function e(i) {
    return (r) => {
      const n = Qn(i);
      n && r.dispatchEvent(Nr(() => n)), r.dispatchEvent(
        Rn({ old: { parent: i.parentElement, element: i } })
      ), r.dispatchEvent(tt());
    };
  }
  return [
    {
      title: O("ied.wizard.title.edit"),
      element: t,
      menuActions: [
        {
          icon: "delete",
          label: O("remove"),
          action: e(t)
        }
      ],
      primary: {
        icon: "edit",
        label: O("save"),
        action: Vn(
          t,
          "ied.action.updateied"
        )
      },
      content: Wn(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("manufacturer"),
        t.getAttribute("configVersion"),
        Zn(t),
        t.getAttribute("engRight"),
        t.getAttribute("owner"),
        Kn(t)
      )
    }
  ];
}
export {
  da as editIEDWizard,
  Jn as removeIEDAndReferences,
  Qn as removeIEDWizard,
  Wn as renderIEDWizard,
  Kn as reservedNamesIED
};
