import { Select as Jn } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Yn } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-button";
import "@material/mwc-icon";
import "@material/mwc-icon-button-toggle";
import { List as er } from "@material/mwc-list";
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
const ci = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, tr = (t, e, i = null, n = null) => {
  for (; e !== i; ) {
    const r = e.nextSibling;
    t.insertBefore(e, n), e = r;
  }
}, Kt = (t, e, i = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.removeChild(e), e = n;
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
const xe = `{{lit-${String(Math.random()).slice(2)}}}`, Ui = `<!--${xe}-->`, li = new RegExp(`${xe}|${Ui}`), Ue = "$lit$";
class ji {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const n = [], r = [], a = document.createTreeWalker(i.content, 133, null, !1);
    let s = 0, o = -1, c = 0;
    const { strings: l, values: { length: p } } = e;
    for (; c < p; ) {
      const m = a.nextNode();
      if (m === null) {
        a.currentNode = r.pop();
        continue;
      }
      if (o++, m.nodeType === 1) {
        if (m.hasAttributes()) {
          const h = m.attributes, { length: w } = h;
          let g = 0;
          for (let x = 0; x < w; x++)
            di(h[x].name, Ue) && g++;
          for (; g-- > 0; ) {
            const x = l[c], k = Tt.exec(x)[2], A = k.toLowerCase() + Ue, C = m.getAttribute(A);
            m.removeAttribute(A);
            const T = C.split(li);
            this.parts.push({ type: "attribute", index: o, name: k, strings: T }), c += T.length - 1;
          }
        }
        m.tagName === "TEMPLATE" && (r.push(m), a.currentNode = m.content);
      } else if (m.nodeType === 3) {
        const h = m.data;
        if (h.indexOf(xe) >= 0) {
          const w = m.parentNode, g = h.split(li), x = g.length - 1;
          for (let k = 0; k < x; k++) {
            let A, C = g[k];
            if (C === "")
              A = _e();
            else {
              const T = Tt.exec(C);
              T !== null && di(T[2], Ue) && (C = C.slice(0, T.index) + T[1] + T[2].slice(0, -Ue.length) + T[3]), A = document.createTextNode(C);
            }
            w.insertBefore(A, m), this.parts.push({ type: "node", index: ++o });
          }
          g[x] === "" ? (w.insertBefore(_e(), m), n.push(m)) : m.data = g[x], c += x;
        }
      } else if (m.nodeType === 8)
        if (m.data === xe) {
          const h = m.parentNode;
          (m.previousSibling === null || o === s) && (o++, h.insertBefore(_e(), m)), s = o, this.parts.push({ type: "node", index: o }), m.nextSibling === null ? m.data = "" : (n.push(m), o--), c++;
        } else {
          let h = -1;
          for (; (h = m.data.indexOf(xe, h + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const m of n)
      m.parentNode.removeChild(m);
  }
}
const di = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, Wi = (t) => t.index !== -1, _e = () => document.createComment(""), Tt = (
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
const Zt = 133;
function Ki(t, e) {
  const { element: { content: i }, parts: n } = t, r = document.createTreeWalker(i, Zt, null, !1);
  let a = je(n), s = n[a], o = -1, c = 0;
  const l = [];
  let p = null;
  for (; r.nextNode(); ) {
    o++;
    const m = r.currentNode;
    for (m.previousSibling === p && (p = null), e.has(m) && (l.push(m), p === null && (p = m)), p !== null && c++; s !== void 0 && s.index === o; )
      s.index = p !== null ? -1 : s.index - c, a = je(n, a), s = n[a];
  }
  l.forEach((m) => m.parentNode.removeChild(m));
}
const ir = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, Zt, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, je = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const n = t[i];
    if (Wi(n))
      return i;
  }
  return -1;
};
function nr(t, e, i = null) {
  const { element: { content: n }, parts: r } = t;
  if (i == null) {
    n.appendChild(e);
    return;
  }
  const a = document.createTreeWalker(n, Zt, null, !1);
  let s = je(r), o = 0, c = -1;
  for (; a.nextNode(); )
    for (c++, a.currentNode === i && (o = ir(e), i.parentNode.insertBefore(e, i)); s !== -1 && r[s].index === c; ) {
      if (o > 0) {
        for (; s !== -1; )
          r[s].index += o, s = je(r, s);
        return;
      }
      s = je(r, s);
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
const Zi = /* @__PURE__ */ new WeakMap(), pt = (t) => (...e) => {
  const i = t(...e);
  return Zi.set(i, !0), i;
}, Ze = (t) => typeof t == "function" && Zi.has(t);
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
const he = {}, ui = {};
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
class Lt {
  constructor(e, i, n) {
    this.__parts = [], this.template = e, this.processor = i, this.options = n;
  }
  update(e) {
    let i = 0;
    for (const n of this.__parts)
      n !== void 0 && n.setValue(e[i]), i++;
    for (const n of this.__parts)
      n !== void 0 && n.commit();
  }
  _clone() {
    const e = ci ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let a = 0, s = 0, o, c = r.nextNode();
    for (; a < n.length; ) {
      if (o = n[a], !Wi(o)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; s < o.index; )
        s++, c.nodeName === "TEMPLATE" && (i.push(c), r.currentNode = c.content), (c = r.nextNode()) === null && (r.currentNode = i.pop(), c = r.nextNode());
      if (o.type === "node") {
        const l = this.processor.handleTextExpression(this.options);
        l.insertAfterNode(c.previousSibling), this.__parts.push(l);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, o.name, o.strings, this.options));
      a++;
    }
    return ci && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const pi = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), rr = ` ${xe} `;
class Xt {
  constructor(e, i, n, r) {
    this.strings = e, this.values = i, this.type = n, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let i = "", n = !1;
    for (let r = 0; r < e; r++) {
      const a = this.strings[r], s = a.lastIndexOf("<!--");
      n = (s > -1 || n) && a.indexOf("-->", s + 1) === -1;
      const o = Tt.exec(a);
      o === null ? i += a + (n ? rr : Ui) : i += a.substr(0, o.index) + o[1] + o[2] + Ue + o[3] + xe;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return pi !== void 0 && (i = pi.createHTML(i)), e.innerHTML = i, e;
  }
}
class ar extends Xt {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const e = super.getTemplateElement(), i = e.content, n = i.firstChild;
    return i.removeChild(n), tr(i, n.firstChild), e;
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
const mt = (t) => t === null || !(typeof t == "object" || typeof t == "function"), $t = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Xi {
  constructor(e, i, n) {
    this.dirty = !0, this.element = e, this.name = i, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Fe(this);
  }
  _getValue() {
    const e = this.strings, i = e.length - 1, n = this.parts;
    if (i === 1 && e[0] === "" && e[1] === "") {
      const a = n[0].value;
      if (typeof a == "symbol")
        return String(a);
      if (typeof a == "string" || !$t(a))
        return a;
    }
    let r = "";
    for (let a = 0; a < i; a++) {
      r += e[a];
      const s = n[a];
      if (s !== void 0) {
        const o = s.value;
        if (mt(o) || !$t(o))
          r += typeof o == "string" ? o : String(o);
        else
          for (const c of o)
            r += typeof c == "string" ? c : String(c);
      }
    }
    return r += e[i], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Fe {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== he && (!mt(e) || e !== this.value) && (this.value = e, Ze(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ze(this.value); ) {
      const e = this.value;
      this.value = he, e(this);
    }
    this.value !== he && this.committer.commit();
  }
}
class Je {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(_e()), this.endNode = e.appendChild(_e());
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
    e.__insert(this.startNode = _e()), e.__insert(this.endNode = _e());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = _e()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Ze(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = he, i(this);
    }
    const e = this.__pendingValue;
    e !== he && (mt(e) ? e !== this.value && this.__commitText(e) : e instanceof Xt ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : $t(e) ? this.__commitIterable(e) : e === ui ? (this.value = ui, this.clear()) : this.__commitText(e));
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
    const n = typeof e == "string" ? e : String(e);
    i === this.endNode.previousSibling && i.nodeType === 3 ? i.data = n : this.__commitNode(document.createTextNode(n)), this.value = e;
  }
  __commitTemplateResult(e) {
    const i = this.options.templateFactory(e);
    if (this.value instanceof Lt && this.value.template === i)
      this.value.update(e.values);
    else {
      const n = new Lt(i, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const a of e)
      r = i[n], r === void 0 && (r = new Je(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(a), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    Kt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class sr {
  constructor(e, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ze(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = he, i(this);
    }
    if (this.__pendingValue === he)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = he;
  }
}
class or extends Xi {
  constructor(e, i, n) {
    super(e, i, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new Qt(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Qt extends Fe {
}
let Qi = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Qi = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
class cr {
  constructor(e, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ze(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = he, a(this);
    }
    if (this.__pendingValue === he)
      return;
    const e = this.__pendingValue, i = this.value, n = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), r = e != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = lr(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = he;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const lr = (t) => t && (Qi ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
function dr(t) {
  let e = Xe.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Xe.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const n = t.strings.join(xe);
  return i = e.keyString.get(n), i === void 0 && (i = new ji(t, t.getTemplateElement()), e.keyString.set(n, i)), e.stringsArray.set(t.strings, i), i;
}
const Xe = /* @__PURE__ */ new Map();
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
const Ve = /* @__PURE__ */ new WeakMap(), Ji = (t, e, i) => {
  let n = Ve.get(e);
  n === void 0 && (Kt(e, e.firstChild), Ve.set(e, n = new Je(Object.assign({ templateFactory: dr }, i))), n.appendInto(e)), n.setValue(t), n.commit();
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
class ur {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, i, n, r) {
    const a = i[0];
    return a === "." ? new or(e, i.slice(1), n).parts : a === "@" ? [new cr(e, i.slice(1), r.eventContext)] : a === "?" ? [new sr(e, i.slice(1), n)] : new Xi(e, i, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Je(e);
  }
}
const Yi = new ur();
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
const u = (t, ...e) => new Xt(t, e, "html", Yi), z = (t, ...e) => new ar(t, e, "svg", Yi);
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
const en = (t, e) => `${t}--${e}`;
let ct = !0;
typeof window.ShadyCSS > "u" ? ct = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), ct = !1);
const pr = (t) => (e) => {
  const i = en(e.type, t);
  let n = Xe.get(i);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Xe.set(i, n));
  let r = n.stringsArray.get(e.strings);
  if (r !== void 0)
    return r;
  const a = e.strings.join(xe);
  if (r = n.keyString.get(a), r === void 0) {
    const s = e.getTemplateElement();
    ct && window.ShadyCSS.prepareTemplateDom(s, t), r = new ji(e, s), n.keyString.set(a, r);
  }
  return n.stringsArray.set(e.strings, r), r;
}, mr = ["html", "svg"], hr = (t) => {
  mr.forEach((e) => {
    const i = Xe.get(en(e, t));
    i !== void 0 && i.keyString.forEach((n) => {
      const { element: { content: r } } = n, a = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((s) => {
        a.add(s);
      }), Ki(n, a);
    });
  });
}, tn = /* @__PURE__ */ new Set(), fr = (t, e, i) => {
  tn.add(t);
  const n = i ? i.element : document.createElement("template"), r = e.querySelectorAll("style"), { length: a } = r;
  if (a === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, t);
    return;
  }
  const s = document.createElement("style");
  for (let l = 0; l < a; l++) {
    const p = r[l];
    p.parentNode.removeChild(p), s.textContent += p.textContent;
  }
  hr(t);
  const o = n.content;
  i ? nr(i, s, o.firstChild) : o.insertBefore(s, o.firstChild), window.ShadyCSS.prepareTemplateStyles(n, t);
  const c = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (i) {
    o.insertBefore(s, o.firstChild);
    const l = /* @__PURE__ */ new Set();
    l.add(s), Ki(i, l);
  }
}, br = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = i.scopeName, r = Ve.has(e), a = ct && e.nodeType === 11 && !!e.host, s = a && !tn.has(n), o = s ? document.createDocumentFragment() : e;
  if (Ji(t, o, Object.assign({ templateFactory: pr(n) }, i)), s) {
    const c = Ve.get(o);
    Ve.delete(o);
    const l = c.value instanceof Lt ? c.value.template : void 0;
    fr(n, o, l), Kt(e, e.firstChild), e.appendChild(o), Ve.set(e, c);
  }
  !r && a && window.ShadyCSS.styleElement(e.host);
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
var nn;
window.JSCompiler_renameProperty = (t, e) => t;
const zt = {
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
}, rn = (t, e) => e !== t && (e === e || t === t), kt = {
  attribute: !0,
  type: String,
  converter: zt,
  reflect: !1,
  hasChanged: rn
}, Et = 1, mi = 4, hi = 8, fi = 16, Pt = "finalized";
class an extends HTMLElement {
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
    return this._classProperties.forEach((i, n) => {
      const r = this._attributeNameForProperty(n, i);
      r !== void 0 && (this._attributeToPropertyMap.set(r, n), e.push(r));
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
      e !== void 0 && e.forEach((i, n) => this._classProperties.set(n, i));
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
  static createProperty(e, i = kt) {
    if (this._ensureClassProperties(), this._classProperties.set(e, i), i.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const n = typeof e == "symbol" ? Symbol() : `__${e}`, r = this.getPropertyDescriptor(e, n, i);
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
  static getPropertyDescriptor(e, i, n) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[i];
      },
      set(r) {
        const a = this[e];
        this[i] = r, this.requestUpdateInternal(e, a, n);
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
    return this._classProperties && this._classProperties.get(e) || kt;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(Pt) || e.finalize(), this[Pt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const i = this.properties, n = [
        ...Object.getOwnPropertyNames(i),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(i) : []
      ];
      for (const r of n)
        this.createProperty(r, i[r]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, i) {
    const n = i.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, i, n = rn) {
    return n(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const n = i.type, r = i.converter || zt, a = typeof r == "function" ? r : r.fromAttribute;
    return a ? a(e, n) : e;
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
    const n = i.type, r = i.converter;
    return (r && r.toAttribute || zt.toAttribute)(e, n);
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
        const n = this[i];
        delete this[i], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(i, n);
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
  attributeChangedCallback(e, i, n) {
    i !== n && this._attributeToProperty(e, n);
  }
  _propertyToAttribute(e, i, n = kt) {
    const r = this.constructor, a = r._attributeNameForProperty(e, n);
    if (a !== void 0) {
      const s = r._propertyValueToAttribute(i, n);
      if (s === void 0)
        return;
      this._updateState = this._updateState | hi, s == null ? this.removeAttribute(a) : this.setAttribute(a, s), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & hi)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(e);
    if (r !== void 0) {
      const a = n.getPropertyOptions(r);
      this._updateState = this._updateState | fi, this[r] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(i, a), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, i, n) {
    let r = !0;
    if (e !== void 0) {
      const a = this.constructor;
      n = n || a.getPropertyOptions(e), a._valueHasChanged(this[e], i, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, i), n.reflect === !0 && !(this._updateState & fi) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : r = !1;
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
  requestUpdate(e, i) {
    return this.requestUpdateInternal(e, i), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | mi;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & mi;
  }
  get hasUpdated() {
    return this._updateState & Et;
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
    } catch (n) {
      throw e = !1, this._markUpdated(), n;
    }
    e && (this._updateState & Et || (this._updateState = this._updateState | Et, this.firstUpdated(i)), this.updated(i));
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((i, n) => this._propertyToAttribute(n, this[n], i)), this._reflectingProperties = void 0), this._markUpdated();
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
nn = Pt;
an[nn] = !0;
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
const gr = (t, e) => (window.customElements.define(t, e), e), yr = (t, e) => {
  const { kind: i, elements: n } = e;
  return {
    kind: i,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(t, r);
    }
  };
}, ue = (t) => (e) => typeof e == "function" ? gr(t, e) : yr(t, e), vr = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
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
}, Sr = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function b(t) {
  return (e, i) => i !== void 0 ? Sr(t, e, i) : vr(t, e);
}
function Ar(t) {
  return b({ attribute: !1, hasChanged: void 0 });
}
const R = (t) => Ar();
function N(t, e) {
  return (i, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? ht(r, i, n) : ft(r, i);
  };
}
function sn(t) {
  return (e, i) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? ht(n, e, i) : ft(n, e);
  };
}
function Jt(t) {
  return (e, i) => {
    const n = {
      get() {
        return this.renderRoot.querySelectorAll(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? ht(n, e, i) : ft(n, e);
  };
}
const ht = (t, e, i) => {
  Object.defineProperty(e, i, t);
}, ft = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
}), wr = (t, e) => Object.assign(Object.assign({}, e), { finisher(i) {
  Object.assign(i.prototype[e.key], t);
} }), xr = (
  // tslint:disable-next-line:no-any legacy decorator
  (t, e, i) => {
    Object.assign(e[i], t);
  }
);
function Cr(t) {
  return (e, i) => i !== void 0 ? xr(t, e, i) : wr(t, e);
}
const bi = Element.prototype, kr = bi.msMatchesSelector || bi.webkitMatchesSelector;
function on(t = "", e = !1, i = "") {
  return (n, r) => {
    const a = {
      get() {
        const s = `slot${t ? `[name=${t}]` : ":not([name])"}`, o = this.renderRoot.querySelector(s);
        let c = o && o.assignedNodes({ flatten: e });
        return c && i && (c = c.filter((l) => l.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (l.matches ? l.matches(i) : kr.call(l, i)))), c;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? ht(a, n, r) : ft(a, n);
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
const Rt = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Yt = Symbol();
class ei {
  constructor(e, i) {
    if (i !== Yt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Rt ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const cn = (t) => new ei(String(t), Yt), Er = (t) => {
  if (t instanceof ei)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, be = (t, ...e) => {
  const i = e.reduce((n, r, a) => n + Er(r) + t[a + 1], t[0]);
  return new ei(i, Yt);
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
const gi = {};
class ge extends an {
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
      const i = (a, s) => a.reduceRight((o, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? i(c, o) : (o.add(c), o)
      ), s), n = i(e, /* @__PURE__ */ new Set()), r = [];
      n.forEach((a) => r.unshift(a)), this._styles = r;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !Rt) {
        const n = Array.prototype.slice.call(i.cssRules).reduce((r, a) => r + a.cssText, "");
        return cn(n);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : Rt ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), i !== gi && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n.cssText, this.renderRoot.appendChild(r);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return gi;
  }
}
ge.finalized = !0;
ge.render = br;
ge.shadowRootOptions = { mode: "open" };
var Ot = function(t, e) {
  return Ot = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, Ot(t, e);
};
function Ir(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ot(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var We = function() {
  return We = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, We.apply(this, arguments);
};
function y(t, e, i, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, n);
  else for (var o = t.length - 1; o >= 0; o--) (s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
  return r > 3 && a && Object.defineProperty(e, i, a), a;
}
function et(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, i = e && t[e], n = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
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
function Dr(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const _r = (t) => t.nodeType === Node.ELEMENT_NODE, ln = () => {
}, Nr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", ln, Nr);
document.removeEventListener("x", ln);
const dn = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Tr = (t) => {
  const e = dn();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (s) => {
    r = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ti extends ge {
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
var un = (
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
var Lr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, $r = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, yi = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function zr(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + i.left, s = r + i.top, o, c;
  if (t.type === "touchstart") {
    var l = t;
    o = l.changedTouches[0].pageX - a, c = l.changedTouches[0].pageY - s;
  } else {
    var p = t;
    o = p.pageX - a, c = p.pageY - s;
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
var vi = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Si = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], tt = [], Pr = (
  /** @class */
  function(t) {
    Ir(e, t);
    function e(i) {
      var n = t.call(this, We(We({}, e.defaultAdapter), i)) || this;
      return n.activationAnimationHasEnded = !1, n.activationTimer = 0, n.fgDeactivationRemovalTimer = 0, n.fgScale = "0", n.frame = { width: 0, height: 0 }, n.initialSize = 0, n.layoutFrame = 0, n.maxRadius = 0, n.unboundedCoords = { left: 0, top: 0 }, n.activationState = n.defaultActivationState(), n.activationTimerCallback = function() {
        n.activationAnimationHasEnded = !0, n.runDeactivationUXLogicIfReady();
      }, n.activateHandler = function(r) {
        n.activateImpl(r);
      }, n.deactivateHandler = function() {
        n.deactivateImpl();
      }, n.focusHandler = function() {
        n.handleFocus();
      }, n.blurHandler = function() {
        n.handleBlur();
      }, n.resizeHandler = function() {
        n.layout();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yi;
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
      var i = this, n = this.supportsPressRipple();
      if (this.registerRootHandlers(n), n) {
        var r = e.cssClasses, a = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(s), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var n = e.cssClasses, r = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(r), i.adapter.removeClass(a), i.removeCssVars();
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
      var n = e.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
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
      var n, r;
      if (i) {
        try {
          for (var a = et(vi), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var n, r;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = et(Si), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = et(vi), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = et(Si), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, n = e.strings, r = Object.keys(n);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(n[a], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, s = a && i !== void 0 && a.type !== i.type;
          if (!s) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var o = i !== void 0 && tt.length > 0 && tt.some(function(c) {
              return n.adapter.containsEventTarget(c);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (tt.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              tt = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, s = e.cssClasses, o = s.FG_DEACTIVATION, c = s.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var p = "", m = "";
      if (!this.adapter.isUnbounded()) {
        var h = this.getFgTranslationCoordinates(), w = h.startPoint, g = h.endPoint;
        p = w.x + "px, " + w.y + "px", m = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(r, p), this.adapter.updateCssVariable(a, m), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, l);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = zr(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, s = r.isActivated, o = a || !s;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, yi.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var i = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var i = this, n = this.activationState;
      if (n.isActivated) {
        var r = We({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(r), i.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(i) {
      var n = i.wasActivatedByPointer, r = i.wasElementMadeActive;
      (n || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame.height, this.frame.width), r = function() {
        var s = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, a = i.VAR_TOP, s = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(un)
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
    const i = (e.getAttribute("class") || "").split(/\s+/);
    for (const n of i)
      this.classes.add(n);
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
const Ai = /* @__PURE__ */ new WeakMap(), He = pt((t) => (e) => {
  if (!(e instanceof Fe) || e instanceof Qt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = Ai.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Ai.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new Rr(n);
  r.forEach((s) => {
    s in t || (a.remove(s), r.delete(s));
  });
  for (const s in t) {
    const o = t[s];
    o != r.has(s) && (o ? (a.add(s), r.add(s)) : (a.remove(s), r.delete(s)));
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
const wi = /* @__PURE__ */ new WeakMap(), Or = pt((t) => (e) => {
  if (!(e instanceof Fe) || e instanceof Qt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = wi.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), wi.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in t || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in t)
    r.add(a), a.indexOf("-") === -1 ? n[a] = t[a] : n.setProperty(a, t[a]);
});
class F extends ti {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Pr;
  }
  get isActive() {
    return Dr(this.parentElement || this, ":active");
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
    const e = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), n = {
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${He(n)}"
          style="${Or({
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
  N(".mdc-ripple-surface")
], F.prototype, "mdcRoot", void 0);
y([
  b({ type: Boolean })
], F.prototype, "primary", void 0);
y([
  b({ type: Boolean })
], F.prototype, "accent", void 0);
y([
  b({ type: Boolean })
], F.prototype, "unbounded", void 0);
y([
  b({ type: Boolean })
], F.prototype, "disabled", void 0);
y([
  b({ type: Boolean })
], F.prototype, "activated", void 0);
y([
  b({ type: Boolean })
], F.prototype, "selected", void 0);
y([
  b({ type: Boolean })
], F.prototype, "internalUseStateLayerCustomProperties", void 0);
y([
  R()
], F.prototype, "hovering", void 0);
y([
  R()
], F.prototype, "bgFocused", void 0);
y([
  R()
], F.prototype, "fgActivation", void 0);
y([
  R()
], F.prototype, "fgDeactivation", void 0);
y([
  R()
], F.prototype, "fgScale", void 0);
y([
  R()
], F.prototype, "fgSize", void 0);
y([
  R()
], F.prototype, "translateStart", void 0);
y([
  R()
], F.prototype, "translateEnd", void 0);
y([
  R()
], F.prototype, "leftPos", void 0);
y([
  R()
], F.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Vr = be`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Vt = class extends F {
};
Vt.styles = [Vr];
Vt = y([
  ue("mwc-ripple")
], Vt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Te = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const n = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, a) => e.constructor._observers.set(a, r)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const n = e.updated;
      e.updated = function(r) {
        n.call(this, r), r.forEach((a, s) => {
          const c = this.constructor._observers.get(s);
          c !== void 0 && c.call(this, this[s], a);
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
class pn {
  constructor(e) {
    this.startPress = (i) => {
      e().then((n) => {
        n && n.startPress(i);
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
class G extends ge {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new pn(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : u``, n = this.hasMeta ? this.renderMeta() : u``;
    return u`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${n}`;
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${He(e)}">
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
    const n = () => {
      window.removeEventListener(e, n), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, n), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(e, i) {
    if (this.noninteractive)
      return;
    const n = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: e } });
    this.dispatchEvent(n);
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
y([
  N("slot")
], G.prototype, "slotElement", void 0);
y([
  sn("mwc-ripple")
], G.prototype, "ripple", void 0);
y([
  b({ type: String })
], G.prototype, "value", void 0);
y([
  b({ type: String, reflect: !0 })
], G.prototype, "group", void 0);
y([
  b({ type: Number, reflect: !0 })
], G.prototype, "tabindex", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Te(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], G.prototype, "disabled", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], G.prototype, "twoline", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], G.prototype, "activated", void 0);
y([
  b({ type: String, reflect: !0 })
], G.prototype, "graphic", void 0);
y([
  b({ type: Boolean })
], G.prototype, "multipleGraphics", void 0);
y([
  b({ type: Boolean })
], G.prototype, "hasMeta", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Te(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], G.prototype, "noninteractive", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Te(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], G.prototype, "selected", void 0);
y([
  R()
], G.prototype, "shouldRenderRipple", void 0);
y([
  R()
], G.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const mn = be`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Mt = class extends G {
};
Mt.styles = [mn];
Mt = y([
  ue("mwc-list-item")
], Mt);
function ne(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function H(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
const Mr = 1e3 * 60, Ft = "langChanged";
function Fr(t, e, i) {
  return Object.entries(Ht(e || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Ht(a))), t);
}
function Hr(t, e) {
  const i = t.split(".");
  let n = e.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function Ht(t) {
  return typeof t == "function" ? t() : t;
}
const qr = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: Hr,
  interpolate: Fr,
  translationCache: {}
});
let Qe = qr();
function Br(t) {
  return Qe = Object.assign(Object.assign({}, Qe), t);
}
function Gr(t) {
  window.dispatchEvent(new CustomEvent(Ft, { detail: t }));
}
function Ur(t, e, i = Qe) {
  Gr({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = t,
    strings: i.strings = e
  });
}
function jr(t, e) {
  const i = (n) => t(n.detail);
  return window.addEventListener(Ft, i, e), () => window.removeEventListener(Ft, i);
}
async function Wr(t, e = Qe) {
  const i = await e.loader(t, e);
  e.translationCache = {}, Ur(t, i, e);
}
function d(t, e, i = Qe) {
  let n = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? Ht(e) : null, e != null ? i.interpolate(n, e, i) : n;
}
function hn(t) {
  return t instanceof Je ? t.startNode.isConnected : t instanceof Fe ? t.committer.element.isConnected : t.element.isConnected;
}
function Kr(t) {
  for (const [e] of t)
    hn(e) || t.delete(e);
}
function Zr(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Xr(t, e) {
  setInterval(() => Zr(() => Kr(t)), e);
}
const fn = /* @__PURE__ */ new Map();
function Qr() {
  jr((t) => {
    for (const [e, i] of fn)
      hn(e) && Jr(e, i, t);
  });
}
Qr();
Xr(fn, Mr);
function Jr(t, e, i) {
  const n = e(i);
  t.value !== n && (t.setValue(n), t.commit());
}
var Yr = Object.defineProperty, ea = Object.getOwnPropertyDescriptor, pe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ea(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && Yr(e, i, r), r;
};
let ee = class extends Yn {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(d("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${t === null ? d("textfield.noMultiplier") : t}</mwc-list-item
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
pe([
  b({ type: Boolean })
], ee.prototype, "nullable", 2);
pe([
  b({ type: Array })
], ee.prototype, "multipliers", 2);
pe([
  b({ type: String })
], ee.prototype, "multiplier", 1);
pe([
  b({ type: String })
], ee.prototype, "unit", 2);
pe([
  R()
], ee.prototype, "null", 1);
pe([
  b({ type: String })
], ee.prototype, "maybeValue", 1);
pe([
  b({ type: String })
], ee.prototype, "defaultValue", 2);
pe([
  b({ type: Array })
], ee.prototype, "reservedValues", 2);
pe([
  N("mwc-switch")
], ee.prototype, "nullSwitch", 2);
pe([
  N("mwc-menu")
], ee.prototype, "multiplierMenu", 2);
pe([
  N("mwc-icon-button")
], ee.prototype, "multiplierButton", 2);
ee = pe([
  ue("wizard-textfield")
], ee);
var ta = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, Pe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ia(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && ta(e, i, r), r;
};
let Ce = class extends Jn {
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
Pe([
  b({ type: Boolean })
], Ce.prototype, "nullable", 2);
Pe([
  R()
], Ce.prototype, "null", 1);
Pe([
  b({ type: String })
], Ce.prototype, "maybeValue", 1);
Pe([
  b({ type: String })
], Ce.prototype, "defaultValue", 2);
Pe([
  b({ type: Array })
], Ce.prototype, "reservedValues", 2);
Pe([
  N("mwc-switch")
], Ce.prototype, "nullSwitch", 2);
Ce = Pe([
  ue("wizard-select")
], Ce);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function na(t, e, i) {
  const n = t.constructor;
  if (!i) {
    const o = `__${e}`;
    if (i = n.getPropertyDescriptor(e, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      a === "" && (a = n.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, o);
    }
  };
  return r.get && (s.get = function() {
    return r.get.call(this);
  }), s;
}
function ii(t, e, i) {
  if (e !== void 0)
    return na(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class bn extends ti {
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
bn.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const It = /* @__PURE__ */ new WeakMap(), we = pt((t) => (e) => {
  const i = It.get(e);
  if (t === void 0 && e instanceof Fe) {
    if (i !== void 0 || !It.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  It.set(e, t);
});
class q extends bn {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new pn(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), n = e.get("checked"), r = e.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!i, !!r), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, n) {
    return n ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
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
    }, n = this.indeterminate ? "mixed" : void 0;
    return u`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${He(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${we(this.name)}"
              aria-checked="${we(n)}"
              aria-label="${we(this.ariaLabel)}"
              aria-labelledby="${we(this.ariaLabelledBy)}"
              aria-describedby="${we(this.ariaDescribedBy)}"
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
y([
  N(".mdc-checkbox")
], q.prototype, "mdcRoot", void 0);
y([
  N("input")
], q.prototype, "formElement", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], q.prototype, "checked", void 0);
y([
  b({ type: Boolean })
], q.prototype, "indeterminate", void 0);
y([
  b({ type: Boolean, reflect: !0 })
], q.prototype, "disabled", void 0);
y([
  b({ type: String, reflect: !0 })
], q.prototype, "name", void 0);
y([
  b({ type: String })
], q.prototype, "value", void 0);
y([
  ii,
  b({ type: String, attribute: "aria-label" })
], q.prototype, "ariaLabel", void 0);
y([
  ii,
  b({ type: String, attribute: "aria-labelledby" })
], q.prototype, "ariaLabelledBy", void 0);
y([
  ii,
  b({ type: String, attribute: "aria-describedby" })
], q.prototype, "ariaDescribedBy", void 0);
y([
  b({ type: Boolean })
], q.prototype, "reducedTouchTarget", void 0);
y([
  R()
], q.prototype, "animationClass", void 0);
y([
  R()
], q.prototype, "shouldRenderRipple", void 0);
y([
  R()
], q.prototype, "focused", void 0);
y([
  R()
], q.prototype, "useStateLayerCustomProperties", void 0);
y([
  sn("mwc-ripple")
], q.prototype, "ripple", void 0);
y([
  Cr({ passive: !0 })
], q.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ra = be`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let qt = class extends q {
};
qt.styles = [ra];
qt = y([
  ue("mwc-checkbox")
], qt);
var aa = Object.defineProperty, sa = Object.getOwnPropertyDescriptor, re = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? sa(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && aa(e, i, r), r;
};
let K = class extends ge {
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
re([
  b({ type: String })
], K.prototype, "label", 2);
re([
  b({ type: String })
], K.prototype, "helper", 2);
re([
  b({ type: Boolean })
], K.prototype, "nullable", 2);
re([
  b({ type: Boolean })
], K.prototype, "defaultChecked", 2);
re([
  b({ type: String })
], K.prototype, "maybeValue", 1);
re([
  b({ type: Boolean })
], K.prototype, "disabled", 2);
re([
  R()
], K.prototype, "null", 1);
re([
  R()
], K.prototype, "checked", 1);
re([
  R()
], K.prototype, "deactivateCheckbox", 2);
re([
  R()
], K.prototype, "formfieldLabel", 1);
re([
  N("mwc-switch")
], K.prototype, "nullSwitch", 2);
re([
  N("mwc-checkbox")
], K.prototype, "checkbox", 2);
K = re([
  ue("wizard-checkbox")
], K);
function oa(t) {
  return typeof t == "function";
}
function f(t) {
  return t instanceof ee || t instanceof Ce || t instanceof K ? t.maybeValue : t.value ?? null;
}
function Se(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = oa(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function L(t) {
  return Se(t, { detail: { subwizard: !0 } });
}
function j(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const V = ":not(*)";
function ca(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function la(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? V : `${t}[version="${i}"][revision="${n}"]`;
}
function xi(t) {
  return E(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Ci(t, e) {
  const [i, n] = j(e), r = M[t].parents.flatMap(
    (a) => U(a, i).split(",")
  );
  return B(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function da(t) {
  const [e, i, n, r, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => t.getAttribute(o));
  return e === "None" ? `${E(t.parentElement)}>(${r} ${s} ${a})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function ua(t, e) {
  if (e.endsWith(")")) {
    const [h, w] = j(e), [g, x, k] = w.substring(1, w.length - 1).split(" ");
    if (!g || !x) return V;
    const A = M[t].parents.flatMap(
      (C) => U(C, h).split(",")
    );
    return B(
      A,
      [">"],
      [`${t}[iedName="None"][lnClass="${g}"][lnType="${x}"][lnInst="${k}"]`]
    ).map((C) => C.join("")).join(",");
  }
  const [i, n, r, a, s] = e.split(/[ /]/);
  if (!i || !n || !a) return V;
  const [
    o,
    c,
    l,
    p,
    m
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return B(
    [t],
    o,
    c,
    l,
    p,
    m
  ).map((h) => h.join("")).join(",");
}
function pa(t) {
  return `${E(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function ma(t, e) {
  const [i, n] = j(e), [r, a] = n.split(" ");
  return `${U(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${a}"]`;
}
function ha(t) {
  return `${E(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function fa(t, e) {
  const [i, n] = j(e);
  return n ? `${U(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : V;
}
function ba(t) {
  return `${E(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function ga(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : V;
}
function ya(t) {
  const e = t.textContent, [i, n, r, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${E(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function va(t, e) {
  const [i, n] = j(e), [r, a, s, o, c, l] = n.split(/[ /]/), [
    p,
    m,
    h,
    w,
    g,
    x
  ] = [
    M[t].parents.flatMap(
      (k) => U(k, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return B(
    p,
    [">"],
    [t],
    m,
    h,
    w,
    g,
    x
  ).map((k) => k.join("")).join(",");
}
function Sa(t) {
  const [e, i, n, r, a, s, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((p) => t.getAttribute(p)), l = `${e}/${i ?? ""} ${n} ${r ?? ""}.${a} ${s || ""}`;
  return `${E(t.parentElement)}>${l} (${o}${c ? " [" + c + "]" : ""})`;
}
function Aa(t, e) {
  const [i, n] = j(e), [r, a, s, o] = n.split(/[ /.]/), c = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), l = c && c[1] ? c[1] : "", p = c && c[2] ? c[2] : "", m = n.match(/\(([A-Z]{2})/), h = n.match(/ \[([0-9]{1,2})\]/), w = m && m[1] ? m[1] : "", g = h && h[1] ? h[1] : "", [
    x,
    k,
    A,
    C,
    T,
    ce,
    wt,
    xt,
    Ct
  ] = [
    M[t].parents.flatMap(
      (Be) => U(Be, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${l}"]`],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${w}"]`],
    g ? [`[ix="${g}"]`] : [":not([ix])", '[ix=""]']
  ];
  return B(
    x,
    [">"],
    [t],
    k,
    A,
    C,
    T,
    ce,
    wt,
    xt,
    Ct
  ).map((Be) => Be.join("")).join(",");
}
function wa(t) {
  if (!t.parentElement) return NaN;
  const e = E(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    s,
    o,
    c,
    l,
    p,
    m,
    h,
    w,
    g,
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
  ].map((T) => t.getAttribute(T)), A = k ? `${m}:${k} ${h ?? ""}/${w ?? ""} ${g ?? ""} ${x ?? ""}` : "", C = `${i} ${a}/${s ?? ""} ${o} ${c ?? ""} ${l} ${p || ""}`;
  return `${e}>${A ? A + " " : ""}${C}${n ? `@${n}` : ""}`;
}
function xa(t, e) {
  const [i, n] = j(e), r = M[t].parents.flatMap(
    (Ge) => U(Ge, i).split(",")
  );
  if (n.endsWith("]")) {
    const [Ge] = n.split("["), Xn = [`[intAddr="${Ge}"]`];
    return B(r, [">"], [t], Xn).map((Qn) => Qn.join("")).join(",");
  }
  let a, s, o, c, l, p, m, h, w, g, x, k, A, C;
  !n.includes(":") && !n.includes("@") ? [a, s, o, c, l, p, m] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    h,
    w,
    g,
    x,
    k,
    A,
    a,
    s,
    o,
    c,
    l,
    p,
    m
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, s, o, c, l, p, m, C] = n.split(/[ /@]/) : [
    h,
    w,
    g,
    x,
    k,
    A,
    a,
    s,
    o,
    c,
    l,
    p,
    m,
    C
  ] = n.split(/[ /:@]/);
  const [
    T,
    ce,
    wt,
    xt,
    Ct,
    Be,
    qn,
    Bn,
    Gn,
    Un,
    jn,
    Wn,
    Kn,
    Zn
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    p ? [`[doName="${p}"]`] : [":not([doName])"],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    h ? [`[serviceType="${h}"]`] : [":not([serviceType])", '[serviceType=""]'],
    w ? [`[srcCBName="${w}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    g ? [`[srcLDInst="${g}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    x ? [`[srcPrefix="${x}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    k ? [`[srcLNClass="${k}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    C ? [`[intAddr="${C}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return B(
    r,
    [">"],
    [t],
    T,
    ce,
    wt,
    xt,
    Ct,
    Be,
    qn,
    Bn,
    Gn,
    Un,
    jn,
    Wn,
    Kn,
    Zn
  ).map((Ge) => Ge.join("")).join(",");
}
function Ca(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${E(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function ka(t, e) {
  const [i, n] = j(e), r = M[t].parents.flatMap(
    (m) => U(m, i).split(",")
  ), [a, s, o] = n.split(" ");
  if (!s) return V;
  const [c, l, p] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${o}"]`]
  ];
  return B(
    r,
    [">"],
    [t],
    c,
    l,
    p
  ).map((m) => m.join("")).join(",");
}
function Ea(t) {
  const [e, i, n, r, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${E(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${a} ${s}`;
}
function Ia(t, e) {
  const [i, n] = j(e), r = M[t].parents.flatMap(
    (A) => U(A, i).split(",")
  ), [a, s, o, c, l, p] = n.split(/[ /]/), [
    m,
    h,
    w,
    g,
    x,
    k
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return B(
    r,
    [">"],
    [t],
    m,
    h,
    w,
    g,
    x,
    k
  ).map((A) => A.join("")).join(",");
}
function ki(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${E(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function Bt(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = j(e), [a, s, o, c] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return V;
  if (i === 0) return `${t}[name="${s}"]`;
  const l = M[t].parents.flatMap(
    (h) => h === "SDI" ? Bt(h, n, i - 1).split(",") : U(h, n).split(",")
  ).filter((h) => !h.startsWith(V));
  if (l.length === 0) return V;
  const [p, m] = [
    [`[name="${s}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return B(
    l,
    [">"],
    [t],
    p,
    m
  ).map((h) => h.join("")).join(",");
}
function Da(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${E(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function _a(t, e) {
  const [i, n] = j(e), [r, a] = n.split(" "), s = parseFloat(a), o = M[t].parents.flatMap(
    (p) => U(p, i).split(",")
  ), [c, l] = [
    r ? [`[sGroup="${r}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return B(
    o,
    [">"],
    [t],
    c,
    l
  ).map((p) => p.join("")).join(",");
}
function Na(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Ta(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? V : `${t}[iedName="${i}"][apName="${n}"]`;
}
function Ei(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Ii(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? V : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function La(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${E(t.parentElement)}>${e}`;
}
function $a(t, e) {
  const [i, n] = j(e), [r, a] = [
    M[t].parents.flatMap(
      (s) => U(s, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return B(r, [">"], [t], a).map((s) => s.join("")).join(",");
}
function za(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${E(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${E(t.parentElement)}>${i} [${n}]`;
}
function Pa(t, e) {
  const [i, n] = j(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [s, o, c] = [
    M[t].parents.flatMap(
      (l) => U(l, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return B(
    s,
    [">"],
    [t],
    o,
    c
  ).map((l) => l.join("")).join(",");
}
function Ra(t) {
  return `${E(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Oa(t, e) {
  const [i, n] = j(e);
  return `${U("EnumType", i)}>${t}[ord="${n}"]`;
}
function Va(t) {
  return `${E(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Ma(t, e) {
  const [i, n] = j(e), [r, a] = n.split("	"), [s] = [
    M[t].parents.flatMap(
      (o) => U(o, i).split(",")
    )
  ];
  return B(
    s,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((o) => o.join("")).join(",");
}
function Fa() {
  return "";
}
function Ha() {
  return ":root";
}
function _(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${E(t.parentElement)}>${t.getAttribute("name")}`;
}
function D(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = j(e);
  if (!r) return V;
  if (i === 0) return `${t}[name="${r}"]`;
  const a = M[t].parents;
  if (!a) return V;
  const s = a.flatMap(
    (o) => M[o].selector === M.Substation.selector ? D(o, n, i - 1).split(",") : U(o, n).split(",")
  ).filter((o) => !o.startsWith(V));
  return s.length === 0 ? V : B(s, [">"], [t], [`[name="${r}"]`]).map((o) => o.join("")).join(",");
}
function v(t) {
  return E(t.parentElement).toString();
}
function S(t, e) {
  const i = M[t].parents;
  if (!i) return V;
  const n = i.flatMap((r) => U(r, e).split(",")).filter((r) => !r.startsWith(V));
  return n.length === 0 ? V : B(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function it(t) {
  return `#${t.id}`;
}
function nt(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : V;
}
const gn = [
  "TransformerWinding",
  "ConductingEquipment"
], yn = [
  "GeneralEquipment",
  "PowerTransformer",
  ...gn
], Gt = ["Substation", "VoltageLevel", "Bay"], vn = ["Process", "Line"], Sn = ["EqSubFunction", "EqFunction"], qa = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...yn,
  ...Gt,
  ...vn,
  ...Sn
], An = ["ConnectivityNode", ...qa], Ba = ["GOOSESecurity", "SMVSecurity"], Ga = ["SubNetwork", ...Ba, ...An], Ua = ["BDA", "DA"], ja = ["SampledValueControl", "GSEControl"], Wa = ["LogControl", "ReportControl"], Ka = [...ja, ...Wa], Za = ["GSE", "SMV"], Xa = [
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
  ...Ka,
  ...Za,
  ...Ua
], ze = ["LN0", "LN"], Qa = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ja = ["Subject", "IssuerName"], Ya = ["MinTime", "MaxTime"], es = ["LNodeType", "DOType", "DAType", "EnumType"], ts = [
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
], is = ["DynDataSet", "ConfDataSet"], ns = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...is
], rs = ["ConfLogControl", "ConfSigRef"], as = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], ss = ["SCL", ...Ga, ...Xa, ...es], wn = [
  ...ss,
  ...Qa,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ja,
  ...Ya,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ze,
  ...ts,
  "DynAssociation",
  "SettingGroups",
  ...ns,
  ...rs,
  ...as,
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
], os = new Set(wn);
function bt(t) {
  return os.has(t);
}
const gt = ["Text", "Private"], De = [...gt], O = [...gt], rt = [...gt], Di = [...O, "Val"], xn = [...De, "LNode"], Ne = [...xn], Ut = [...Ne], Dt = [
  ...Ne,
  "PowerTransformer",
  "GeneralEquipment"
], _i = [
  ...Ut,
  "Terminal"
], Ni = [...O, "Address"], Cn = [...De], Ti = [...Cn, "IEDName"], Li = [
  ...O,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], $i = [
  ...Ne,
  "GeneralEquipment",
  "Function"
], zi = [...Cn, "TrgOps"], Pi = [
  ...Ne,
  "GeneralEquipment",
  "EqSubFunction"
], M = {
  AccessControl: {
    identity: v,
    selector: S,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: _,
    selector: D,
    parents: ["IED"],
    children: [
      ...De,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: v,
    selector: S,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: ha,
    selector: fa,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: v,
    selector: S,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: _,
    selector: D,
    parents: ["DAType"],
    children: [...Di]
  },
  BitRate: {
    identity: v,
    selector: S,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: _,
    selector: D,
    parents: ["VoltageLevel"],
    children: [
      ...Dt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Ea,
    selector: Ia,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: v,
    selector: S,
    parents: ["SCL"],
    children: [...O, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: _,
    selector: D,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ..._i,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: v,
    selector: S,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Na,
    selector: Ta,
    parents: ["SubNetwork"],
    children: [...O, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: _,
    selector: D,
    parents: ["Bay", "Line"],
    children: [...xn]
  },
  DA: {
    identity: _,
    selector: D,
    parents: ["DOType"],
    children: [...Di]
  },
  DAI: {
    identity: ki,
    selector: Bt,
    parents: ["DOI", "SDI"],
    children: [...O, "Val"]
  },
  DAType: {
    identity: it,
    selector: nt,
    parents: ["DataTypeTemplates"],
    children: [...rt, "BDA", "ProtNs"]
  },
  DO: {
    identity: _,
    selector: D,
    parents: ["LNodeType"],
    children: [...O]
  },
  DOI: {
    identity: _,
    selector: D,
    parents: [...ze],
    children: [...O, "SDI", "DAI"]
  },
  DOType: {
    identity: it,
    selector: nt,
    parents: ["DataTypeTemplates"],
    children: [...rt, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: _,
    selector: D,
    parents: [...ze],
    children: [...De, "FCDA"]
  },
  DataSetDirectory: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: v,
    selector: S,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: it,
    selector: nt,
    parents: ["DataTypeTemplates"],
    children: [...rt, "EnumVal"]
  },
  EnumVal: {
    identity: Ra,
    selector: Oa,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: _,
    selector: D,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Pi]
  },
  EqSubFunction: {
    identity: _,
    selector: D,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Pi]
  },
  ExtRef: {
    identity: wa,
    selector: xa,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Sa,
    selector: Aa,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: _,
    selector: D,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ne,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: _,
    selector: D,
    parents: [
      "SubFunction",
      "Function",
      ...vn,
      ...Sn,
      ...Gt
    ],
    children: [...Ut, "EqFunction"]
  },
  GetCBValues: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: _,
    selector: D,
    parents: ["AccessPoint"],
    children: [...De, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Ei,
    selector: Ii,
    parents: ["ConnectedAP"],
    children: [...Ni, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: _,
    selector: D,
    parents: ["LN0"],
    children: [...Ti, "Protocol"]
  },
  GSESettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: v,
    selector: S,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: v,
    selector: S,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: ca,
    selector: la,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: _,
    selector: D,
    parents: ["SCL"],
    children: [...O, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: ya,
    selector: va,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: v,
    selector: S,
    parents: [...ze],
    children: [...O, "ExtRef"]
  },
  IssuerName: {
    identity: v,
    selector: S,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: pa,
    selector: ma,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: ba,
    selector: ga,
    parents: ["Server"],
    children: [...O, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Ca,
    selector: ka,
    parents: ["AccessPoint", "LDevice"],
    children: [...Li]
  },
  LN0: {
    identity: v,
    selector: S,
    parents: ["LDevice"],
    children: [
      ...Li,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: da,
    selector: ua,
    parents: [...An],
    children: [...O]
  },
  LNodeType: {
    identity: it,
    selector: nt,
    parents: ["DataTypeTemplates"],
    children: [...rt, "DO"]
  },
  Line: {
    identity: _,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...$i,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: _,
    selector: D,
    parents: [...ze],
    children: [...O]
  },
  LogControl: {
    identity: _,
    selector: D,
    parents: [...ze],
    children: [...zi]
  },
  LogSettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: v,
    selector: S,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: v,
    selector: S,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: v,
    selector: S,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: xi,
    selector: Ci,
    parents: ["TransformerWinding"],
    children: [...O]
  },
  OptFields: {
    identity: v,
    selector: S,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: za,
    selector: Pa,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: La,
    selector: $a,
    parents: ["ConnectedAP"],
    children: [...O, "P"]
  },
  PowerTransformer: {
    identity: _,
    selector: D,
    parents: [...Gt],
    children: [
      ...Ut,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => V,
    parents: [],
    children: []
  },
  Process: {
    identity: _,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...$i,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Va,
    selector: Ma,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: v,
    selector: S,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: _,
    selector: D,
    parents: [...ze],
    children: [...zi, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: v,
    selector: S,
    parents: ["ReportControl"],
    children: [...O, "ClientLN"]
  },
  SamplesPerSec: {
    identity: v,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: _,
    selector: D,
    parents: ["LN0"],
    children: [...Ti, "SmvOpts"]
  },
  SecPerSamples: {
    identity: v,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Fa,
    selector: Ha,
    parents: [],
    children: [
      ...gt,
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
    identity: ki,
    selector: Bt,
    parents: ["DOI", "SDI"],
    children: [...O, "SDI", "DAI"]
  },
  SDO: {
    identity: _,
    selector: D,
    parents: ["DOType"],
    children: [...De]
  },
  Server: {
    identity: v,
    selector: S,
    parents: ["AccessPoint"],
    children: [
      ...O,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: v,
    selector: S,
    parents: ["AccessPoint"],
    children: [...O]
  },
  Services: {
    identity: v,
    selector: S,
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
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: v,
    selector: S,
    parents: ["LN0"],
    children: [...O]
  },
  SettingGroups: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: v,
    selector: S,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: v,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Ei,
    selector: Ii,
    parents: ["ConnectedAP"],
    children: [...Ni]
  },
  SmvOpts: {
    identity: v,
    selector: S,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: _,
    selector: D,
    parents: ["AccessPoint"],
    children: [...De, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: _,
    selector: D,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...gn
    ],
    children: [...Ne, "EqFunction"]
  },
  SubFunction: {
    identity: _,
    selector: D,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ne,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: _,
    selector: D,
    parents: ["Communication"],
    children: [...De, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: v,
    selector: S,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: _,
    selector: D,
    parents: ["SCL"],
    children: [...Dt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: _,
    selector: D,
    parents: ["TransformerWinding"],
    children: [...Ne, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: xi,
    selector: Ci,
    parents: [...yn],
    children: [...O]
  },
  Text: {
    identity: v,
    selector: S,
    parents: wn.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: v,
    selector: S,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: _,
    selector: D,
    parents: ["PowerTransformer"],
    children: [
      ..._i,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: v,
    selector: S,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Da,
    selector: _a,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: v,
    selector: S,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: _,
    selector: D,
    parents: ["Substation"],
    children: [...Dt, "Voltage", "Bay", "Function"]
  }
};
function cs(t, e) {
  const i = t.tagName, n = Array.from(t.children);
  if (i === "Services" || i === "SettingGroups" || !bt(i))
    return n.find((o) => o.tagName === e) ?? null;
  const r = M[i]?.children ?? [];
  let a = r.findIndex((o) => o === e);
  if (a < 0) return null;
  let s;
  for (; a < r.length && !s; )
    s = n.find((o) => o.tagName === r[a]), a++;
  return s ?? null;
}
function U(t, e) {
  return typeof e != "string" ? V : bt(t) ? M[t].selector(t, e) : t;
}
function W(t, e, i) {
  if (typeof i != "string" || !bt(e)) return null;
  const n = t.querySelector(M[e].selector(e, i));
  return n === null || ie(n) ? n : Array.from(
    t.querySelectorAll(M[e].selector(e, i))
  ).find(ie) ?? null;
}
function E(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return bt(e) ? M[e].identity(t) : NaN;
}
const ls = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", ds = ls + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", us = "(" + ds + ")+", le = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: us,
  alphanumericFirstUpperCase: "[A-Z][0-9,A-Z,a-z]*",
  lnClass: "(LLN0)|[A-Z]{4,4}"
};
function B(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function kn(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => kn(i, e))
      );
    default:
      return 0;
  }
}
function ie(t) {
  return !t.closest("Private");
}
const ps = 99;
Array(ps).fill(1).map((t, e) => `${e + 1}`);
const yt = be`
  :host(.moving) section {
    opacity: 0.3;
  }

  section {
    background-color: var(--mdc-theme-surface);
    transition: all 200ms linear;
    outline-color: var(--mdc-theme-primary);
    outline-style: solid;
    outline-width: 0px;
    opacity: 1;
  }

  section:focus {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  section:focus-within {
    outline-width: 2px;
    transition: all 250ms linear;
  }

  h1,
  h2,
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
  }

  section:focus-within > h1,
  section:focus-within > h2,
  section:focus-within > h3 {
    color: var(--mdc-theme-surface);
    background-color: var(--mdc-theme-primary);
    transition: background-color 200ms linear;
  }

  h1 > nav,
  h2 > nav,
  h3 > nav,
  h1 > abbr > mwc-icon-button,
  h2 > abbr > mwc-icon-button,
  h3 > abbr > mwc-icon-button {
    float: right;
  }

  abbr[title] {
    border-bottom: none !important;
    cursor: inherit !important;
    text-decoration: none !important;
  }
`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ye extends G {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : u``, r = this.hasMeta && this.left ? this.renderMeta() : u``, a = this.renderRipple();
    return u`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${He(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? i : ""}
      ${r}`;
  }
  async onChange(e) {
    const i = e.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
y([
  N("slot")
], Ye.prototype, "slotElement", void 0);
y([
  N("mwc-checkbox")
], Ye.prototype, "checkboxElement", void 0);
y([
  b({ type: Boolean })
], Ye.prototype, "left", void 0);
y([
  b({ type: String, reflect: !0 })
], Ye.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ms = be`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Me = class extends Ye {
};
Me.styles = [mn, ms];
Me = y([
  ue("mwc-check-list-item")
], Me);
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
var I = {
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
}, Q = /* @__PURE__ */ new Set();
Q.add(I.BACKSPACE);
Q.add(I.ENTER);
Q.add(I.SPACEBAR);
Q.add(I.PAGE_UP);
Q.add(I.PAGE_DOWN);
Q.add(I.END);
Q.add(I.HOME);
Q.add(I.ARROW_LEFT);
Q.add(I.ARROW_UP);
Q.add(I.ARROW_RIGHT);
Q.add(I.ARROW_DOWN);
Q.add(I.DELETE);
Q.add(I.ESCAPE);
Q.add(I.TAB);
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
}, J = /* @__PURE__ */ new Map();
J.set(te.BACKSPACE, I.BACKSPACE);
J.set(te.ENTER, I.ENTER);
J.set(te.SPACEBAR, I.SPACEBAR);
J.set(te.PAGE_UP, I.PAGE_UP);
J.set(te.PAGE_DOWN, I.PAGE_DOWN);
J.set(te.END, I.END);
J.set(te.HOME, I.HOME);
J.set(te.ARROW_LEFT, I.ARROW_LEFT);
J.set(te.ARROW_UP, I.ARROW_UP);
J.set(te.ARROW_RIGHT, I.ARROW_RIGHT);
J.set(te.ARROW_DOWN, I.ARROW_DOWN);
J.set(te.DELETE, I.DELETE);
J.set(te.ESCAPE, I.ESCAPE);
J.set(te.TAB, I.TAB);
var Le = /* @__PURE__ */ new Set();
Le.add(I.PAGE_UP);
Le.add(I.PAGE_DOWN);
Le.add(I.END);
Le.add(I.HOME);
Le.add(I.ARROW_LEFT);
Le.add(I.ARROW_UP);
Le.add(I.ARROW_RIGHT);
Le.add(I.ARROW_DOWN);
function Ee(t) {
  var e = t.key;
  if (Q.has(e))
    return e;
  var i = J.get(t.keyCode);
  return i || I.UNKNOWN;
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
var Ie, Ae, P = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ie = {}, Ie["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ie["" + P.LIST_ITEM_CLASS] = "mdc-list-item", Ie["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ie["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ie["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ie["" + P.ROOT] = "mdc-list";
var Oe = (Ae = {}, Ae["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Ae["" + P.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Ae["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Ae["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Ae["" + P.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Ae["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Ae["" + P.ROOT] = "mdc-deprecated-list", Ae), at = {
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
    .` + Oe[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + P.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` a,
    .` + Oe[P.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Y = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const jt = (t, e) => t - e, hs = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, a = i.sort(jt), s = n.sort(jt);
  let o = 0, c = 0;
  for (; o < a.length || c < s.length; ) {
    const l = a[o], p = s[c];
    if (l === p) {
      o++, c++;
      continue;
    }
    if (l !== void 0 && (p === void 0 || l < p)) {
      r.removed.push(l), o++;
      continue;
    }
    if (p !== void 0 && (l === void 0 || p < l)) {
      r.added.push(p), c++;
      continue;
    }
  }
  return r;
}, fs = ["input", "button", "textarea", "select"];
function Ke(t) {
  return t instanceof Set;
}
const _t = (t) => {
  const e = t === Y.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Ke(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class ni extends un {
  constructor(e) {
    super(Object.assign(Object.assign({}, ni.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = Y.UNSET_INDEX, this.focusedItemIndex_ = Y.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return at;
  }
  static get numbers() {
    return Y;
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
      if (!Ke(i)) {
        const n = i === Y.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ke(i))
      if (i.size) {
        const n = Array.from(i).sort(jt);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = Y.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(_t(e)) : this.setSingleSelectionAtIndex_(e));
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
  handleKeydown(e, i, n) {
    const r = Ee(e) === "ArrowLeft", a = Ee(e) === "ArrowUp", s = Ee(e) === "ArrowRight", o = Ee(e) === "ArrowDown", c = Ee(e) === "Home", l = Ee(e) === "End", p = Ee(e) === "Enter", m = Ee(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || l ? (e.preventDefault(), this.focusLastElement()) : (o || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let h = this.adapter.getFocusedElementIndex();
    if (h === -1 && (h = n, h < 0))
      return;
    let w;
    if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(e), w = this.focusNextElement(h);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), w = this.focusPrevElement(h);
    else if (c)
      this.preventDefaultEvent(e), w = this.focusFirstElement();
    else if (l)
      this.preventDefaultEvent(e), w = this.focusLastElement();
    else if ((p || m) && i) {
      const g = e.target;
      if (g && g.tagName === "A" && p)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(h, !0);
    }
    this.focusedItemIndex_ = h, w !== void 0 && (this.setTabindexAtIndex_(w), this.focusedItemIndex_ = w);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== Y.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const i = this.adapter.getListItemCount();
    let n = e + 1;
    if (n >= i)
      if (this.wrapFocus_)
        n = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(n), n;
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
    const n = `${e.target.tagName}`.toLowerCase();
    fs.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== Y.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = _t(this.selectedIndex_), r = hs(n, e);
    if (!(!r.removed.length && !r.added.length)) {
      for (const a of r.removed)
        i && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of r.added)
        i && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === Y.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, at.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? at.ARIA_CURRENT : at.ARIA_SELECTED;
    this.selectedIndex_ !== Y.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === Y.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== Y.UNSET_INDEX ? e = this.selectedIndex_ : Ke(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let i = !1;
        for (const n of e)
          if (i = this.isIndexInRange_(n), i)
            break;
        return i;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === Y.UNSET_INDEX || this.isIndexInRange_(e);
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
  setSelectedIndexOnAction_(e, i, n) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let r = e;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(Y.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const a = _t(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function bs(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const st = (t) => t.hasAttribute("mwc-list-item");
function gs() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class ae extends ti {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = ni, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = bs(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      gs.call(this), e(i);
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
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [], n = [];
    for (const s of i)
      st(s) && (n.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, o) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && r.add(o);
    }), this.multi)
      this.select(r);
    else {
      const s = r.size ? r.entries().next().value[1] : -1;
      this.select(s);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const e = this.index;
    if (!Ke(e))
      return e === -1 ? null : this.items[e];
    const i = [];
    for (const n of e)
      i.push(this.items[n]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, n = this.rootTabbable ? "0" : "-1";
    return u`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${we(e)}"
          aria-label="${we(i)}"
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
      const i = this.getIndexOfTarget(e), n = e.target, r = st(n);
      this.mdcFoundation.handleKeydown(e, r, i);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(e);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(e), i === -1) || this.items[i].disabled)
        return;
      const r = e.detail.selected, a = e.detail.source;
      this.mdcFoundation.handleSingleSelection(i, a === "interaction", r), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const i = this.items, n = e.composedPath();
    for (const r of n) {
      let a = -1;
      if (_r(r) && st(r) && (a = i.indexOf(r)), a !== -1)
        return a;
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
        const r = this.items[e];
        return r ? r.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (e, i, n) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[e];
        r && r.setAttribute(i, n);
      },
      focusItemAtIndex: (e) => {
        const i = this.items[e];
        i && i.focus();
      },
      setTabIndexForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.tabindex = i);
      },
      notifyAction: (e) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: e };
        const n = new CustomEvent("action", i);
        this.dispatchEvent(n);
      },
      notifySelected: (e, i) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: e, diff: i };
        const r = new CustomEvent("selected", n);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => Tr(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.disabled = i);
      },
      getDisabledStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.selected = i);
      },
      getSelectedStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, i = !1) {
    const n = this.items[e];
    n && (n.selected = !0, n.activated = i);
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
    for (const n of this.items)
      n.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = dn();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (st(n))
        return this.items.indexOf(n);
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
y([
  b({ type: String })
], ae.prototype, "emptyMessage", void 0);
y([
  N(".mdc-deprecated-list")
], ae.prototype, "mdcRoot", void 0);
y([
  on("", !0, "*")
], ae.prototype, "assignedElements", void 0);
y([
  on("", !0, '[tabindex="0"]')
], ae.prototype, "tabbableElements", void 0);
y([
  b({ type: Boolean }),
  Te(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], ae.prototype, "activatable", void 0);
y([
  b({ type: Boolean }),
  Te(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], ae.prototype, "multi", void 0);
y([
  b({ type: Boolean }),
  Te(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], ae.prototype, "wrapFocus", void 0);
y([
  b({ type: String }),
  Te(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], ae.prototype, "itemRoles", void 0);
y([
  b({ type: String })
], ae.prototype, "innerRole", void 0);
y([
  b({ type: String })
], ae.prototype, "innerAriaLabel", void 0);
y([
  b({ type: Boolean })
], ae.prototype, "rootTabbable", void 0);
y([
  b({ type: Boolean, reflect: !0 }),
  Te(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], ae.prototype, "noninteractive", void 0);
var ys = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, Re = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? vs(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && ys(e, i, r), r;
};
function Wt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof ye ? t : Wt(t.parentElement);
}
function Ss(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((o) => o.innerText).join(`
`), r = t.value, a = (i + n + r).toUpperCase(), s = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Wt(t).classList.remove("hidden") : Wt(t).classList.add("hidden");
}
let ye = class extends ae {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Me);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Me).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Me).some((t) => t.selected);
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
      (t) => Ss(t, this.searchField.value)
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
        <abbr title="${this.searchFieldLabel ?? d("filter")}"
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
ye.styles = be`
    ${cn(er.styles)}

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
Re([
  b({ type: String })
], ye.prototype, "searchFieldLabel", 2);
Re([
  b({ type: Boolean })
], ye.prototype, "disableCheckAll", 2);
Re([
  R()
], ye.prototype, "existCheckListItem", 1);
Re([
  R()
], ye.prototype, "isAllSelected", 1);
Re([
  R()
], ye.prototype, "isSomeSelected", 1);
Re([
  N("mwc-textfield")
], ye.prototype, "searchField", 2);
ye = Re([
  ue("filtered-list")
], ye);
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
const Ri = /* @__PURE__ */ new WeakMap(), Oi = 2147483647, As = pt((...t) => (e) => {
  let i = Ri.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: Oi,
    values: []
  }, Ri.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let a = 0; a < t.length && !(a > i.lastRenderedIndex); a++) {
    const s = t[a];
    if (mt(s) || typeof s.then != "function") {
      e.setValue(s), i.lastRenderedIndex = a;
      break;
    }
    a < r && s === n[a] || (i.lastRenderedIndex = Oi, r = 0, Promise.resolve(s).then((o) => {
      const c = i.values.indexOf(s);
      c > -1 && c < i.lastRenderedIndex && (i.lastRenderedIndex = c, e.setValue(o), e.commit());
    }));
  }
});
var ws = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, ke = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? xs(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && ws(e, i, r), r;
};
const Cs = u`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${d("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let fe = class extends ge {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: u`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return kn(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(t) {
    const e = {};
    for (const i of t) {
      let n = e;
      for (const r of i)
        Object.prototype.hasOwnProperty.call(n, r) || (n[r] = {}), n = n[r];
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
    let e = Object.keys(this.selection).map((n) => [n]), i = t ?? this.depth - 1;
    for (; i-- > 0; )
      e = e.flatMap((n) => {
        let r = this.selection;
        for (const s of n) r = r[s];
        const a = Object.keys(r).map((s) => n.concat(s));
        return a.length === 0 ? [n] : a;
      });
    return t === void 0 ? e : e.filter((n) => n.length > t);
  }
  multiSelect(t, e, i) {
    let n = this.selection;
    for (const r of e) n = n[r];
    n && n[i] ? delete n[i] : n[i] = {};
  }
  singleSelect(t, e, i) {
    this.path[e.length] === i ? this.path = e : this.path = e.concat(i);
  }
  async select(t, e) {
    const i = t.target.selected.value;
    this.multi ? this.multiSelect(t, e, i) : this.singleSelect(t, e, i), this.requestUpdate(), await this.updateComplete, await new Promise((n) => setTimeout(n, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(t, e) {
    return u`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => u`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(t.length).map((n) => JSON.stringify(n)).includes(JSON.stringify(t.concat(i)))}
            >${this.getDisplayString(i, t)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(t) {
    const i = this.getPaths(t).map((r) => this.read(r)), n = [];
    for await (const { header: r, entries: a, path: s } of i)
      (r || a.length > 0) && n.push(
        u`${we(r)} ${this.renderDirectory(s, a)}`
      );
    return n.length === 0 ? u`` : u`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), u`<div class="pane">
      ${t.map((e) => As(e, Cs))}
    </div>`;
  }
};
fe.styles = be`
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
ke([
  b({ type: Object })
], fe.prototype, "selection", 2);
ke([
  b({ type: Boolean })
], fe.prototype, "multi", 2);
ke([
  b({ type: Number })
], fe.prototype, "depth", 1);
ke([
  b({ type: Array })
], fe.prototype, "paths", 1);
ke([
  b({ type: Array })
], fe.prototype, "path", 1);
ke([
  b({ attribute: !1 })
], fe.prototype, "read", 2);
ke([
  b({ attribute: !1 })
], fe.prototype, "loaded", 2);
ke([
  N("div")
], fe.prototype, "container", 2);
fe = ke([
  ue("finder-list")
], fe);
function ks(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function Es(t, e) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = W(t, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: e(a).map(
        (s) => `${s.tagName}: ${E(s)}`
      )
    } : { path: i, header: u`<p>${d("error")}</p>`, entries: [] };
  };
}
function En(t) {
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
function Is(t) {
  return u`<finder-list
    multi
    .paths=${[["Server: " + E(t)]]}
    .read=${Es(t.ownerDocument, En)}
    .getDisplayString=${ks}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Ds(t, e) {
  const [i, n] = e[e.length - 1].split(": "), r = W(t.ownerDocument, i, n);
  if (!r || En(r).length > 0) return;
  const a = e.find((k) => k.startsWith("LN"));
  if (!a) return;
  const [s, o] = a.split(": "), c = W(t.ownerDocument, s, o);
  if (!c) return;
  const l = c.closest("LDevice")?.getAttribute("inst"), p = c.getAttribute("prefix") ?? "", m = c.getAttribute("lnClass"), h = c.getAttribute("inst") && c.getAttribute("inst") !== "" ? c.getAttribute("inst") : null;
  let w = "", g = "", x = "";
  for (const k of e) {
    const [A, C] = k.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(A)) continue;
    const T = W(t.ownerDocument, A, C);
    if (!T) return;
    const ce = T.getAttribute("name");
    A === "DO" && (w = ce), A === "SDO" && (w = w + "." + ce), A === "DA" && (g = ce, x = T.getAttribute("fc") ?? ""), A === "BDA" && (g = g + "." + ce);
  }
  if (!(!l || !m || !w || !g || !x))
    return ne(t.ownerDocument, "FCDA", {
      ldInst: l,
      prefix: p,
      lnClass: m,
      lnInst: h,
      doName: w,
      daName: g,
      fc: x
    });
}
function _s(t) {
  return (e, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const s of r) {
      const o = Ds(t, s);
      o && a.push({
        new: {
          parent: t,
          element: o,
          reference: null
        }
      });
    }
    return a;
  };
}
function Ns(t) {
  const e = t.closest("Server");
  return [
    {
      title: d("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: _s(t)
      },
      content: [e ? Is(e) : u``]
    }
  ];
}
function Ts(t) {
  return (e) => {
    e.dispatchEvent(L(() => Ns(t)));
  };
}
function Ls(t) {
  return (e, i) => {
    const n = e.find((l) => l.label === "name").value, r = f(e.find((l) => l.label === "desc")), a = t.getAttribute("name"), s = [];
    if (!(n === a && r === t.getAttribute("desc"))) {
      const l = H(t, { name: n, desc: r });
      s.push({
        old: { element: t },
        new: { element: l }
      });
    }
    const o = n !== a ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((l) => {
      const p = H(l, { datSet: n });
      return { old: { element: l }, new: { element: p } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((l) => W(t, "FCDA", l.value)).filter((l) => l).map((l) => ({
        old: {
          parent: t,
          element: l,
          reference: l.nextSibling
        }
      })),
      ...s,
      ...o
    ];
  };
}
function vt(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: d("save"),
        icon: "save",
        action: Ls(t)
      },
      menuActions: [
        {
          icon: "add",
          label: d("dataset.fcda.add"),
          action: Ts(t)
        }
      ],
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${d("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${d("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        u`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (n) => u`<mwc-check-list-item selected value="${E(n)}"
                >${E(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function me(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
function lt(t) {
  const e = [];
  return t && t.forEach((i) => {
    e.push({
      old: {
        parent: i.parentElement,
        element: i,
        reference: i.nextSibling
      }
    });
  }), e;
}
function ri(t) {
  return t.sort((e, i) => {
    const n = E(e), r = E(i);
    return n < r ? -1 : n > r ? 1 : 0;
  });
}
function Vi(t) {
  return Array.from(new Set(t));
}
var $s = Object.defineProperty, zs = Object.getOwnPropertyDescriptor, $e = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? zs(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && $s(e, i, r), r;
};
let ve = class extends ge {
  constructor() {
    super(...arguments), this.disableDataSetClean = !1, this.unreferencedDataSets = [], this.selectedDatasetItems = [];
  }
  async firstUpdated() {
    this.dataSetList?.addEventListener("selected", () => {
      this.selectedDatasetItems = this.dataSetList.index;
    });
  }
  /**
   * Provide list item in the DataSet cleanup container.
   * @param dataSet - an unused SCL DataSet element.
   * @returns html for checklist item.
   */
  renderListItem(t) {
    return u` <mwc-check-list-item
      twoline
      class="checkListItem"
      value="${E(t)}"
      ><span class="unreferencedDataSet"
        >${t.getAttribute("name")}
      </span>
      <span>
        <mwc-icon-button
          label="Edit"
          icon="edit"
          class="editUnreferencedDataSet editItem"
          @click=${(e) => {
      e.stopPropagation(), e.target?.dispatchEvent(
        L(() => vt(t))
      );
    }}
        ></mwc-icon-button>
      </span>
      <span slot="secondary"
        >${t.closest("IED")?.getAttribute("name")}
        (${t.closest("IED")?.getAttribute("manufacturer") ?? "No manufacturer defined"})
        -
        ${t.closest("IED")?.getAttribute("type") ?? "No Type Defined"}</span
      >
    </mwc-check-list-item>`;
  }
  /**
   * Provide delete button the dataset cleanup container.
   * @returns html for the Delete Button of this container.
   */
  renderDeleteButton() {
    const t = this.selectedDatasetItems.size;
    return u` <mwc-button
      outlined
      icon="delete"
      class="deleteButton cleanupDeleteButton"
      label="${d(
      "cleanup.unreferencedDataSets.deleteButton"
    )} (${t || "0"})"
      ?disabled=${this.selectedDatasetItems.size === 0 || Array.isArray(this.selectedDatasetItems) && !this.selectedDatasetItems.length}
      @click=${(e) => {
      const i = Array.from(
        this.selectedDatasetItems.values()
      ).map((r) => this.unreferencedDataSets[r]);
      lt(i).forEach(
        (r) => e.target?.dispatchEvent(me(r))
      ), this.dataSetItems.forEach((r) => {
        r.selected = !1;
      });
    }}
    ></mwc-button>`;
  }
  /**
   * Render a user selectable table of unreferenced datasets if any exist, otherwise indicate this is not an issue.
   * @returns html for table and action button.
   */
  renderUnreferencedDataSets() {
    const t = [];
    return Array.from(this.doc?.querySelectorAll("DataSet") ?? []).filter(ie).forEach((e) => {
      const i = e.parentElement, n = e.getAttribute("name"), r = Array.from(
        i?.querySelectorAll(
          "GSEControl, ReportControl, SampledValueControl, LogControl"
        ) ?? []
      ).some((a) => a.getAttribute("datSet") === n);
      i && (!n || !r) && t.push(e);
    }), this.unreferencedDataSets = ri(t), u`
      <div>
        <h1>
          ${d("cleanup.unreferencedDataSets.title")}
          (${t.length})
          <abbr slot="action">
            <mwc-icon-button
              icon="info"
              title="${d("cleanup.unreferencedDataSets.tooltip")}"
            >
            </mwc-icon-button>
          </abbr>
        </h1>
        <filtered-list multi class="dataSetList"
          >${Array.from(
      this.unreferencedDataSets.map(
        (e) => u`${this.renderListItem(e)}`
      )
    )}
        </filtered-list>
      </div>
      <footer>${this.renderDeleteButton()}</footer>
    `;
  }
  render() {
    return u`
      <section tabindex="0">${this.renderUnreferencedDataSets()}</section>
    `;
  }
};
ve.styles = be`
    ${yt}

    section {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      footer {
        flex-direction: row;
      }

      mwc-check-list-item {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .editItem {
      --mdc-icon-size: 16px;
    }

    .editItem {
      visibility: hidden;
      opacity: 0;
    }

    .checkListItem:hover .editItem {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .cleanupDeleteButton {
      float: right;
    }

    footer {
      margin: 16px;
      display: flex;
      flex-flow: row wrap;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }

    filtered-list {
      max-height: 70vh;
      min-height: 20vh;
      overflow-y: scroll;
    }
  `;
$e([
  b({ attribute: !1 })
], ve.prototype, "doc", 2);
$e([
  b({ type: Boolean })
], ve.prototype, "disableDataSetClean", 2);
$e([
  b({ type: Array })
], ve.prototype, "unreferencedDataSets", 2);
$e([
  b({ attribute: !1 })
], ve.prototype, "selectedDatasetItems", 2);
$e([
  N(".deleteButton")
], ve.prototype, "cleanupButton", 2);
$e([
  N(".dataSetList")
], ve.prototype, "dataSetList", 2);
$e([
  Jt("mwc-check-list-item.checkListItem")
], ve.prototype, "dataSetItems", 2);
ve = $e([
  ue("cleanup-datasets")
], ve);
u`<svg
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
const qe = {
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
}, Ps = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${qe.gooseIcon}</svg>`, Rs = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${qe.reportIcon}</svg>`, Os = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${qe.smvIcon}</svg>`, Vs = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${qe.logIcon}</svg>`, Ms = {
  ReportControl: Rs,
  LogControl: Vs,
  GSEControl: Ps,
  SampledValueControl: Os
};
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const dt = {
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
}, Fs = {
  DAType: ot("dAIcon"),
  DOType: ot("dOIcon"),
  EnumType: ot("enumIcon"),
  LNodeType: ot("lNIcon")
};
function ot(t) {
  if (t === "reset") return u``;
  const e = dt[t]?.height ?? 24, i = dt[t]?.width ?? 24;
  return u`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${i} ${e}"
    width="${i}"
  >
    ${qe[t]}
  </svg> `;
}
function ut(t, e) {
  if (t === "reset") return u``;
  const i = dt[t]?.height ?? 24, n = dt[t]?.width ?? 24;
  return u`<svg
    slot="${e ? "onIcon" : "offIcon"}"
    xmlns="http://www.w3.org/2000/svg"
    height="${i}"
    viewBox="0 0 ${n} ${i}"
    width="${n}"
  >
    ${qe[t]}
  </svg> `;
}
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u` <svg
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
const Hs = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", qs = Hs + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", Bs = "(" + qs + ")+", de = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: Bs,
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  tRestrName1stL: "[a-z][0-9A-Za-z]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, St = {
  cbName: 32,
  abstracDaName: 60
}, $ = {
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
}, Gs = {
  IP: $.IP,
  "IP-SUBNET": $.IP,
  "IP-GATEWAY": $.IP,
  "OSI-TSEL": $.OSI,
  "OSI-SSEL": $.OSI,
  "OSI-PSEL": $.OSI,
  "OSI-AP-Title": $.OSIAPi,
  "OSI-AP-Invoke": $.OSId,
  "OSI-AE-Qualifier": $.OSId,
  "OSI-AE-Invoke": $.OSId,
  "MAC-Address": $.MAC,
  APPID: $.APPID,
  "VLAN-ID": $.VLANid,
  "VLAN-PRIORITY": $.VLANp,
  "OSI-NSAP": $.OSI,
  "SNTP-Port": $.port,
  "MMS-Port": $.port,
  DNSName: "[^ ]*",
  "UDP-Port": $.port,
  "TCP-Port": $.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: $.IPv6,
  "IPv6-SUBNET": $.IPv6sub,
  "IPv6-GATEWAY": $.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": $.IPv6,
  "IP-IGMPv3Sr": $.IP,
  "IP-ClassOfTraffic": $.OSI
}, Us = {
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
function In(t) {
  return [
    u`<mwc-formfield label="${d("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    u`${Object.entries(t.attributes).map(
      ([e, i]) => u`<wizard-textfield
          label="${e}"
          ?nullable=${Us[e]}
          .maybeValue=${i}
          pattern="${we(Gs[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function js(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Ws(t, e, i) {
  const n = ne(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const s = r, o = ne(e.ownerDocument, "P", { type: s });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), o.textContent = a, n.appendChild(o);
  }), n;
}
function Dn(t, e, i) {
  const n = [], r = Ws(e, t, i), a = t.querySelector("Address");
  return a !== null && !js(a, r) ? (n.push({
    old: {
      parent: t,
      element: a,
      reference: a.nextSibling
    }
  }), n.push({
    new: {
      parent: t,
      element: r,
      reference: a.nextSibling
    }
  })) : a === null && n.push({
    new: {
      parent: t,
      element: r
    }
  }), n;
}
function Mi(t, e, i, n) {
  if (e === null) {
    const a = ne(n.ownerDocument, t, {
      unit: "s",
      multiplier: "m"
    });
    return a.textContent = i, {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (i === null)
    return {
      old: {
        parent: n,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = e.cloneNode(!1);
  return r.textContent = i, {
    old: { element: e },
    new: { element: r }
  };
}
function Ks(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: d("gse.action.addaddress", {
        identity: E(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = f(
      e.find((l) => l.label === "MAC-Address")
    ), a.APPID = f(e.find((l) => l.label === "APPID")), a["VLAN-ID"] = f(
      e.find((l) => l.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      e.find((l) => l.label === "VLAN-PRIORITY")
    ), Dn(t, a, r).forEach((l) => {
      n.actions.push(l);
    });
    const o = f(e.find((l) => l.label === "MinTime")), c = f(e.find((l) => l.label === "MaxTime"));
    return o !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Mi(
        "MinTime",
        t.querySelector("MinTime"),
        o,
        t
      )
    ), c !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Mi(
        "MaxTime",
        t.querySelector("MaxTime"),
        c,
        t
      )
    ), [n];
  };
}
function Zs(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(t.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = t.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: d("save"),
        icon: "save",
        action: Ks(t)
      },
      content: [
        ...In({ hasInstType: n, attributes: r }),
        u`<wizard-textfield
          label="MinTime"
          .maybeValue=${e}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        u`<wizard-textfield
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
const Xs = [
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
], Qs = [
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
], Js = ["Spec", "Conf", "RO", "Set"], Ys = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], _n = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function ai(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${e}"]`
  );
}
function eo(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${de.asciName}"
      maxLength="${St.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${d("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${d("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${_n.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function to(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = ai(t), n = Array.from(
    t.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (o) => o.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && n && r.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i,
      reference: i.nextSibling
    }
  });
  const a = t.getAttribute("name"), s = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", {
      type: t.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function io(t) {
  return (e) => {
    const i = to(t);
    i && e.dispatchEvent(me(i)), e.dispatchEvent(Se());
  };
}
function no(t) {
  return (e) => {
    e.dispatchEvent(L(() => vt(t)));
  };
}
function ro(t) {
  return (e) => {
    e.dispatchEvent(L(() => Zs(t)));
  };
}
function ao(t) {
  return (e) => {
    const i = e.find((l) => l.label === "name").value, n = f(e.find((l) => l.label === "desc")), r = f(e.find((l) => l.label === "type")), a = f(e.find((l) => l.label === "appID")), s = f(e.find((l) => l.label === "fixedOffs")), o = f(
      e.find((l) => l.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && a === t.getAttribute("appID") && s === t.getAttribute("fixedOffs") && o === t.getAttribute("securityEnabled"))
      return [];
    const c = H(t, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: s,
      securityEnabled: o
    });
    return [{ old: { element: t }, new: { element: c } }];
  };
}
function so(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("appID"), a = t.getAttribute("fixedOffs"), s = t.getAttribute("securityEnabled"), o = ai(t), c = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), l = [];
  return l.push({
    icon: "delete",
    label: d("remove"),
    action: io(t)
  }), c && l.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: no(c)
  }), o && l.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: ro(o)
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: ao(t)
      },
      menuActions: l,
      content: [
        ...eo({
          name: e,
          desc: i,
          type: n,
          appID: r,
          fixedOffs: a,
          securityEnabled: s
        })
      ]
    }
  ];
}
function oo(t) {
  return Object.entries(t).map(
    ([e, i]) => u`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function co(t) {
  return (e) => {
    const i = f(e.find((m) => m.label === "seqNum")), n = f(e.find((m) => m.label === "timeStamp")), r = f(e.find((m) => m.label === "dataSet")), a = f(e.find((m) => m.label === "reasonCode")), s = f(e.find((m) => m.label === "dataRef")), o = f(e.find((m) => m.label === "entryID")), c = f(e.find((m) => m.label === "configRef")), l = f(e.find((m) => m.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && n === t.getAttribute("timeStamp") && r === t.getAttribute("dataSet") && a === t.getAttribute("reasonCode") && s === t.getAttribute("dataRef") && o === t.getAttribute("entryID") && c === t.getAttribute("configRef") && l === t.getAttribute("bufOvfl"))
      return [];
    const p = H(t, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: s,
      entryID: o,
      configRef: c,
      bufOvfl: l
    });
    return [{ old: { element: t }, new: { element: p } }];
  };
}
function lo(t) {
  const [
    e,
    i,
    n,
    r,
    a,
    s,
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
  ].map((l) => t.getAttribute(l));
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: co(t)
      },
      content: oo({
        seqNum: e,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: s,
        configRef: o,
        bufOvfl: c
      })
    }
  ];
}
function uo(t) {
  return Object.entries(t).map(
    ([e, i]) => u`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function po(t) {
  return (e) => {
    const i = f(e.find((l) => l.label === "dchg")), n = f(e.find((l) => l.label === "qchg")), r = f(e.find((l) => l.label === "dupd")), a = f(e.find((l) => l.label === "period")), s = f(e.find((l) => l.label === "gi"));
    if (i === t.getAttribute("dchg") && n === t.getAttribute("qchg") && r === t.getAttribute("dupd") && a === t.getAttribute("period") && s === t.getAttribute("gi"))
      return [];
    const o = H(t, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: s
    });
    return [{ old: { element: t }, new: { element: o } }];
  };
}
function mo(t) {
  const [e, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((s) => t.getAttribute(s));
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: po(t)
      },
      content: uo({ dchg: e, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
function Nt(t) {
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
function Nn(t, e) {
  const [i, n, r, a, s, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc"
  ].map((T) => t.getAttribute(T));
  if (!e.querySelector(`LDevice[inst="${i}"]`)) return !1;
  const p = n ? [`[prefix="${n}"]`] : ['[prefix=""]', ":not([prefix])"], m = a ? [`[inst="${a}"]`] : ['[inst=""]', ":not([inst])"], h = B(
    ["LN0", "LN"],
    p,
    [`[lnClass="${r}"]`],
    m
  ).map((T) => T.join("")).join(","), w = e.querySelector(h);
  if (!w) return !1;
  const g = s?.split(".");
  if (!g) return !1;
  let x = w;
  for (const T of g)
    if (x = Nt(x).find(
      (ce) => ce.getAttribute("name") === T
    ), !x) return !1;
  const k = o?.split("."), A = Nt(x).some(
    (T) => T.getAttribute("fc") === c
  );
  if (!k && A) return !0;
  if (!k) return !1;
  let C = "";
  for (const T of k)
    if (x = Nt(x).find(
      (ce) => ce.getAttribute("name") === T
    ), x?.getAttribute("fc") && (C = x.getAttribute("fc")), !x) return !1;
  return C === c;
}
function ho(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${de.asciName}"
      maxLength="${St.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="buffered"
      .maybeValue=${t.buffered}
      helper="${d("scl.buffered")}"
    ></wizard-checkbox>`,
    u`<wizard-textfield
      label="rptID"
      .maybeValue=${t.rptID}
      nullable
      required
      helper="${d("report.rptID")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="indexed"
      .maybeValue=${t.indexed}
      nullable
      helper="${d("scl.indexed")}"
    ></wizard-checkbox>`,
    u`<wizard-textfield
      label="max Clients"
      .maybeValue=${t.max}
      helper="${d("scl.maxReport")}"
      nullable
      type="number"
      suffix="#"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="bufTime"
      .maybeValue=${t.bufTime}
      helper="${d("scl.bufTime")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="intgPd"
      .maybeValue=${t.intgPd}
      helper="${d("scl.intgPd")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`
  ];
}
function fo(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (s) => s.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && i && n.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  });
  const r = t.getAttribute("name"), a = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", { type: "Report", name: r, iedName: a }),
    actions: n
  };
}
function bo(t, e, i) {
  if (t === null) {
    const r = ne(i.ownerDocument, "RptEnabled", {
      max: e
    });
    return {
      new: {
        parent: i,
        element: r,
        reference: cs(i, "RptEnabled")
      }
    };
  }
  const n = H(t, { max: e });
  return {
    old: { element: t },
    new: { element: n }
  };
}
function go(t) {
  return (e, i) => {
    const n = t.ownerDocument, r = i.shadowRoot?.querySelector("filtered-list")?.selected, a = [];
    return r.forEach((s) => {
      const o = W(n, "IED", s.value);
      if (!o) return;
      const c = o.querySelector("LN0");
      if (!c) return [];
      const l = t.parentElement?.querySelector(
        `DataSet[name="${t.getAttribute("datSet")}"]`
      );
      if (l && c.querySelector(
        `DataSet[name="${l.getAttribute("name")}"]`
      ))
        return [];
      if (c.querySelector(
        `ReportControl[name="${t.getAttribute("name")}"]`
      ))
        return [];
      const p = l?.cloneNode(!0);
      if (Array.from(p.querySelectorAll("FCDA")).forEach((g) => {
        Nn(g, o) || p.removeChild(g);
      }), p.children.length === 0) return [];
      const m = t.cloneNode(!0), h = t.closest("IED")?.getAttribute("name"), w = o.getAttribute("name");
      a.push({
        title: `ReportControl copied from ${h} to ${w}`,
        actions: [
          { new: { parent: c, element: p } },
          { new: { parent: c, element: m } }
        ]
      });
    }), a;
  };
}
function yo(t, e) {
  const i = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), n = t.closest("IED")?.getAttribute("name") === e.getAttribute("name"), r = e.querySelector("AccessPoint > Server > LDevice > LN0"), a = !!r?.querySelector(
    `ReportControl[name="${t.getAttribute("name")}"]`
  ), s = !!r?.querySelector(
    `DataSet[name="${i?.getAttribute("name")}"]`
  ), o = i?.cloneNode(!0);
  Array.from(o.querySelectorAll("FCDA")).forEach((m) => {
    Nn(m, e) || o.removeChild(m);
  });
  const c = o.children.length > 0, l = e.getAttribute("name");
  let p = "";
  return n ? p = d("controlblock.hints.source") : r ? s && !n ? p = d("controlblock.hints.exist", {
    type: "RerportControl",
    name: t.getAttribute("name")
  }) : a && !n ? p = d("controlblock.hints.exist", {
    type: "DataSet",
    name: t.getAttribute("name")
  }) : c ? p = d("controlBlock.hints.valid") : p = d("controlblock.hints.noMatchingData") : p = d("controlblock.hints.missingServer"), u`<mwc-check-list-item
    twoline
    value="${E(e)}"
    ?disabled=${n || !r || a || s || !c}
    ><span>${l}</span
    ><span slot="secondary">${p}</span></mwc-check-list-item
  >`;
}
function vo(t) {
  return [
    {
      title: d("report.wizard.location"),
      primary: {
        icon: "save",
        label: d("save"),
        action: go(t)
      },
      content: [
        u`<filtered-list multi
          >${Array.from(t.ownerDocument.querySelectorAll("IED")).map(
          (e) => yo(t, e)
        )}</filtered-list
        >`
      ]
    }
  ];
}
function So(t) {
  return (e) => {
    e.dispatchEvent(
      L(() => vo(t))
    );
  };
}
function Ao(t) {
  return (e) => {
    const i = fo(t);
    i && e.dispatchEvent(me(i)), e.dispatchEvent(Se());
  };
}
function wo(t) {
  return (e) => {
    e.dispatchEvent(L(() => vt(t)));
  };
}
function xo(t) {
  return (e) => {
    e.dispatchEvent(L(() => mo(t)));
  };
}
function Co(t) {
  return (e) => {
    e.dispatchEvent(L(() => lo(t)));
  };
}
function ko(t) {
  return (e) => {
    const i = {}, n = [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ];
    n.forEach((m) => {
      i[m] = f(e.find((h) => h.label === m));
    });
    let r = null;
    if (n.some((m) => i[m] !== t.getAttribute(m))) {
      const m = H(t, i);
      r = {
        old: { element: t },
        new: { element: m }
      };
    }
    const a = f(e.find((m) => m.label === "max Clients"));
    let s = null;
    a !== (t.querySelector("RptEnabled")?.getAttribute("max") ?? null) && (s = bo(
      t.querySelector("RptEnabled"),
      a,
      t
    ));
    const o = [];
    r && o.push(r), s && o.push(s);
    const c = i.name, l = t.closest("IED").getAttribute("name"), p = {
      title: d("controlblock.action.edit", {
        type: "Report",
        name: c,
        iedName: l
      }),
      actions: o
    };
    return o.length ? [p] : [];
  };
}
function Eo(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("buffered"), r = t.getAttribute("rptID"), a = t.getAttribute("indexed"), s = t.querySelector("RptEnabled")?.getAttribute("max") ?? null, o = t.getAttribute("bufTime"), c = t.getAttribute("intgPd"), l = t.querySelector("TrgOps"), p = t.querySelector("OptFields"), m = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), h = [];
  return h.push({
    icon: "delete",
    label: d("remove"),
    action: Ao(t)
  }), m && h.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: wo(m)
  }), l && h.push({
    icon: "edit",
    label: d("scl.TrgOps"),
    action: xo(l)
  }), p && h.push({
    icon: "edit",
    label: d("scl.OptFields"),
    action: Co(p)
  }), h.push({
    icon: "copy",
    label: d("controlblock.label.copy"),
    action: So(t)
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: ko(t)
      },
      menuActions: h,
      content: [
        ...ho({
          name: e,
          desc: i,
          buffered: n,
          rptID: r,
          indexed: a,
          max: s,
          bufTime: o,
          intgPd: c
        })
      ]
    }
  ];
}
function Io(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: d("smv.action.addaddress", {
        identity: E(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = f(
      e.find((o) => o.label === "MAC-Address")
    ), a.APPID = f(e.find((o) => o.label === "APPID")), a["VLAN-ID"] = f(
      e.find((o) => o.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      e.find((o) => o.label === "VLAN-PRIORITY")
    );
    const s = Dn(t, a, r);
    return s.length ? (s.forEach((o) => {
      n.actions.push(o);
    }), [n]) : [];
  };
}
function Do(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = t.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: d("save"),
        icon: "edit",
        action: Io(t)
      },
      content: [...In({ hasInstType: e, attributes: i })]
    }
  ];
}
function _o(t) {
  return Object.entries(t).map(
    ([e, i]) => u`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function No(t) {
  return (e) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = f(e.find((s) => s.label === a));
    }), !n.some((a) => i[a] !== t.getAttribute(a)))
      return [];
    const r = H(t, i);
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function To(t) {
  const [e, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((s) => t.getAttribute(s));
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: No(t)
      },
      content: [
        ..._o({
          refreshTime: e,
          sampleRate: i,
          dataSet: n,
          security: r,
          synchSourceId: a
        })
      ]
    }
  ];
}
function si(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${e}"]`
  ) ?? null;
}
function Lo(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = si(t), n = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (o) => o.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: t.parentElement,
      element: t
    }
  }), e && n && r.push({
    old: {
      parent: t.parentElement,
      element: e
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i
    }
  });
  const a = t.getAttribute("name"), s = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", {
      type: t.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function $o(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${de.asciName}"
      maxLength="${St.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      pattern="${de.normalizedString}"
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    t.multicast === "true" ? u`` : u`<wizard-checkbox
          label="multicast"
          .maybeValue=${t.multicast}
          helper="${d("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    u`<wizard-textfield
      label="smvID"
      .maybeValue=${t.smvID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="smpMod"
      .maybeValue=${t.smpMod}
      nullable
      required
      helper="${d("scl.smpMod")}"
      >${Ys.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="smpRate"
      .maybeValue=${t.smpRate}
      helper="${d("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nofASDU"
      .maybeValue=${t.nofASDU}
      helper="${d("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${_n.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function zo(t) {
  return (e) => {
    const i = Lo(t);
    i && e.dispatchEvent(me(i)), e.dispatchEvent(Se());
  };
}
function Po(t) {
  return (e) => {
    e.dispatchEvent(L(() => vt(t)));
  };
}
function Ro(t) {
  return (e) => {
    e.dispatchEvent(L(() => To(t)));
  };
}
function Oo(t) {
  return (e) => {
    e.dispatchEvent(L(() => Do(t)));
  };
}
function Vo(t) {
  return (e) => {
    const i = {}, n = [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ];
    n.forEach((s) => {
      if (s === "multicast" && !e.find((c) => c.label === s)) {
        i.multicast = "true";
        return;
      }
      i[s] = f(e.find((c) => c.label === s));
    });
    let r = null;
    if (n.some((s) => i[s] !== t.getAttribute(s))) {
      const s = H(t, i);
      r = {
        old: { element: t },
        new: { element: s }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function Mo(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("multicast"), r = t.getAttribute("smvID"), a = t.getAttribute("smpMod"), s = t.getAttribute("smpRate"), o = t.getAttribute("nofASDU"), c = t.getAttribute("securityEnabled"), l = si(t), p = t.querySelector("SmvOpts"), m = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), h = [];
  return h.push({
    icon: "delete",
    label: d("remove"),
    action: zo(t)
  }), m && h.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: Po(m)
  }), p && h.push({
    icon: "edit",
    label: d("scl.SmvOpts"),
    action: Ro(p)
  }), l && h.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: Oo(l)
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: Vo(t)
      },
      menuActions: h,
      content: [
        ...$o({
          name: e,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: s,
          nofASDU: o,
          securityEnabled: c
        })
      ]
    }
  ];
}
var Fo = Object.defineProperty, Ho = Object.getOwnPropertyDescriptor, se = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ho(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && Fo(e, i, r), r;
};
const Fi = {
  GSEControl: "gooseIcon",
  LogControl: "logIcon",
  SampledValueControl: "smvIcon",
  ReportControl: "reportIcon"
};
function Hi(t) {
  return t.tagName === "GSEControl" ? ai(t) : t.tagName === "SampledValueControl" ? si(t) : null;
}
let Z = class extends ge {
  constructor() {
    super(...arguments), this.disableControlClean = !1, this.unreferencedControls = [], this.selectedControlItems = [];
  }
  /**
   * Toggle the class hidden in the unused controls list for use by filter buttons.
   * @param selectorType - class for selection to toggle the hidden class used by the list.
   */
  toggleHiddenClass(t) {
    this.cleanupList.querySelectorAll(`.${t}`).forEach((e) => {
      e.classList.toggle("hiddenontypefilter"), e.hasAttribute("disabled") ? e.removeAttribute("disabled") : e.setAttribute("disabled", "true");
    });
  }
  /**
   * Initial update after container is loaded.
   */
  async firstUpdated() {
    this.cleanupList?.addEventListener("selected", () => {
      this.selectedControlItems = this.cleanupList.index;
    }), this.toggleHiddenClass("tReportControl");
  }
  /**
   * Create a button for filtering in the control block cleanup container.
   * @param controlType - SCL Control Type e.g. GSEControl.
   * @param initialState - boolean representing whether button is on or off.
   * @returns html for the icon button.
   */
  renderFilterIconButton(t, e = !0) {
    return u`<mwc-icon-button-toggle
      slot="graphic"
      label="filter"
      ?on=${e}
      class="t${t}Filter"
      @click="${(i) => {
      i.stopPropagation(), this.toggleHiddenClass(`t${t}`);
    }}"
      >${ut(Fi[t], !0)}
      ${ut(Fi[t], !1)}
    </mwc-icon-button-toggle> `;
  }
  /**
   * Provide list item in the control block cleanup container.
   * @param controlBlock - an unused SCL ControlBlock element.
   * @returns html for checklist item.
   */
  renderListItem(t) {
    return u`<mwc-check-list-item
      twoline
      class="${He({
      cleanupListItem: !0,
      tReportControl: t.tagName === "ReportControl",
      tLogControl: t.tagName === "LogControl",
      tGSEControl: t.tagName === "GSEControl",
      tSampledValueControl: t.tagName === "SampledValueControl"
    })}"
      value="${E(t)}"
      graphic="large"
      ><span class="unreferencedControl"
        >${t.getAttribute("name")}
      </span>
      <span>
        <mwc-icon-button
          label="warning"
          icon="warning_amber"
          class="cautionItem"
          title="${d(
      "cleanup.unreferencedControls.addressDefinitionTooltip"
    )}"
          ?disabled="${Hi(t) === null}"
        >
        </mwc-icon-button>
      </span>
      <span>
        <mwc-icon-button
          label="Edit"
          icon="edit"
          class="editItem"
          ?disabled="${t.tagName === "LogControl"}"
          @click=${(e) => {
      e.stopPropagation(), t.tagName === "GSEControl" ? e.target?.dispatchEvent(
        L(so(t))
      ) : t.tagName === "ReportControl" ? e.target?.dispatchEvent(
        L(Eo(t))
      ) : t.tagName === "SampledValueControl" ? e.target?.dispatchEvent(
        L(Mo(t))
      ) : t.tagName;
    }}
        ></mwc-icon-button>
      </span>
      <span slot="secondary"
        >${t.tagName} -
        ${t.closest("IED")?.getAttribute("name")}
        (${t.closest("IED")?.getAttribute("manufacturer") ?? "No manufacturer defined"})
        -
        ${t.closest("IED")?.getAttribute("type") ?? "No Type Defined"}</span
      >
      <mwc-icon slot="graphic"
        >${Ms[t.tagName]}</mwc-icon
      >
    </mwc-check-list-item>`;
  }
  /**
   * Provide delete button the control block cleanup container.
   * @returns html for the Delete Button of this container.
   */
  renderDeleteButton() {
    const t = this.selectedControlItems.size;
    return u`<mwc-button
      outlined
      icon="delete"
      class="deleteButton"
      label="${d(
      "cleanup.unreferencedControls.deleteButton"
    )} (${t || "0"})"
      ?disabled=${this.selectedControlItems.size === 0 || Array.isArray(this.selectedControlItems) && !this.selectedControlItems.length}
      @click=${(e) => {
      const i = Array.from(
        this.selectedControlItems.values()
      ).map((a) => this.unreferencedControls[a]);
      let n = [];
      this.cleanupAddressCheckbox.checked === !0 && (n = lt(
        i.map((a) => Hi(a)).filter(Boolean)
      )), lt(i).concat(n).forEach(
        (a) => e.target?.dispatchEvent(me(a))
      ), this.cleanupListItems.forEach((a) => {
        a.selected = !1;
      });
    }}
    ></mwc-button>`;
  }
  /**
   * Render a user selectable table of unreferenced datasets if any exist, otherwise indicate this is not an issue.
   * @returns html for table and action button.
   */
  renderUnreferencedControls() {
    const t = [];
    return Array.from(
      this.doc?.querySelectorAll(
        "GSEControl, ReportControl, SampledValueControl, LogControl"
      ) ?? []
    ).filter(ie).forEach((e) => {
      const i = e.parentElement, n = e.getAttribute("datSet"), r = i?.querySelector(`DataSet[name="${n}"]`);
      i && (!n || !r) && t.push(e);
    }), this.unreferencedControls = ri(t), u`
      <div>
        <h1>
          ${d("cleanup.unreferencedControls.title")}
          (${t.length})
          <abbr slot="action">
            <mwc-icon-button
              icon="info"
              title="${d("cleanup.unreferencedControls.tooltip")}"
            >
            </mwc-icon-button>
          </abbr>
        </h1>
        ${this.renderFilterIconButton("LogControl")}
        ${this.renderFilterIconButton("ReportControl", !1)}
        ${this.renderFilterIconButton("GSEControl")}
        ${this.renderFilterIconButton("SampledValueControl")}
        <filtered-list multi class="cleanupList"
          >${Array.from(t.map((e) => this.renderListItem(e)))}
        </filtered-list>
      </div>
      <footer>
        ${this.renderDeleteButton()}
        <mwc-formfield
          class="removeFromCommunication"
          label="${d(
      "cleanup.unreferencedControls.alsoRemoveFromCommunication"
    )}"
        >
          <mwc-checkbox
            checked
            class="cleanupAddressCheckbox"
            ?disabled=${this.selectedControlItems.size === 0 || Array.isArray(this.selectedControlItems) && !this.selectedControlItems.length}
          ></mwc-checkbox
        ></mwc-formfield>
      </footer>
    `;
  }
  render() {
    return u`
      <section tabindex="1">${this.renderUnreferencedControls()}</section>
    `;
  }
};
Z.styles = be`
    ${yt}

    section {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      footer {
        flex-direction: row;
      }

      mwc-check-list-item {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .editItem,
    .cautionItem {
      --mdc-icon-size: 16px;
    }

    .editItem {
      visibility: hidden;
      opacity: 0;
    }

    .cleanupListItem:hover .editItem {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .cautionItem {
      color: var(--yellow);
    }

    .cautionItem[disabled],
    .editItem[disabled] {
      display: none;
    }

    .deleteButton {
      float: right;
    }

    footer {
      align-items: center;
      align-content: center;
      display: flex;
      flex-flow: row wrap;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 16px;
    }

    filtered-list {
      min-height: 20vh;
      overflow-y: scroll;
    }

    .tGSEControlFilter[on],
    .tSampledValueControlFilter[on],
    .tLogControlFilter[on],
    .tReportControlFilter[on] {
      color: var(--secondary);
      opacity: 1;
    }

    /* Make sure to type filter here
    .hidden is set on string filter in filtered-list and must always filter*/
    .cleanupListItem.hiddenontypefilter:not(.hidden) {
      display: none;
    }

    /* filter disabled, Material Design guidelines for opacity */
    .tGSEControlFilter,
    .tSampledValueControlFilter,
    .tLogControlFilter,
    .tReportControlFilter {
      opacity: 0.38;
    }
  `;
se([
  b({ attribute: !1 })
], Z.prototype, "doc", 2);
se([
  b({ type: Boolean })
], Z.prototype, "disableControlClean", 2);
se([
  b({ type: Array })
], Z.prototype, "unreferencedControls", 2);
se([
  b({ attribute: !1 })
], Z.prototype, "selectedControlItems", 2);
se([
  N(".deleteButton")
], Z.prototype, "cleanButton", 2);
se([
  N(".cleanupList")
], Z.prototype, "cleanupList", 2);
se([
  Jt("mwc-check-list-item.cleanupListItem")
], Z.prototype, "cleanupListItems", 2);
se([
  N(".cleanupAddressCheckbox")
], Z.prototype, "cleanupAddressCheckbox", 2);
se([
  N(".tGSEControlFilter")
], Z.prototype, "cleanupGSEControlFilter", 2);
se([
  N(".tSampledValueControlFilter")
], Z.prototype, "cleanupSampledValueControlFilter", 2);
se([
  N(".tLogControlFilter")
], Z.prototype, "cleanupLogControlFilter", 2);
se([
  N(".tReportControlFilter")
], Z.prototype, "cleanupReportControlFilter", 2);
Z = se([
  ue("cleanup-control-blocks")
], Z);
function qo(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function Tn(t) {
  return (e) => {
    e.dispatchEvent(
      me({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(Se());
  };
}
function Bo(t) {
  return (e) => {
    e.dispatchEvent(L(() => Ln({ parent: t })));
  };
}
function Go(t) {
  return (e) => {
    const i = f(e.find((c) => c.label === "name")), n = f(e.find((c) => c.label === "desc")), r = f(e.find((c) => c.label === "type")), a = f(
      e.find((c) => c.label === "accessControl")
    ), s = f(e.find((c) => c.label === "transient")) !== "" ? f(e.find((c) => c.label === "transient")) : null;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && a === t.getAttribute("accessControl") && s === t.getAttribute("transient"))
      return [];
    const o = H(t, {
      name: i,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return [{ old: { element: t }, new: { element: o } }];
  };
}
function Uo(t) {
  return (e) => {
    const i = f(e.find((l) => l.label === "name")), n = f(e.find((l) => l.label === "desc")), r = f(e.find((l) => l.label === "type")), a = f(
      e.find((l) => l.label === "accessControl")
    ), s = f(e.find((l) => l.label === "transient")) !== "" ? f(e.find((l) => l.label === "transient")) : null, o = [], c = ne(t.ownerDocument, "DO", {
      name: i,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return o.push({
      new: {
        parent: t,
        element: c
      }
    }), o;
  };
}
function Ln(t) {
  const e = t.doc ? t.doc : t.parent.ownerDocument, i = W(e, "DO", t.identity ?? NaN), [
    n,
    r,
    a,
    s,
    o,
    c,
    l,
    p
  ] = i ? [
    d("do.wizard.title.edit"),
    Go(i),
    i.getAttribute("type"),
    [
      {
        icon: "delete",
        label: d("remove"),
        action: Tn(i)
      }
    ],
    i.getAttribute("name"),
    i.getAttribute("desc"),
    i.getAttribute("accessControl"),
    i.getAttribute("transient")
  ] : [
    d("do.wizard.title.add"),
    Uo(t.parent),
    null,
    void 0,
    "",
    null,
    null,
    null
  ], m = Array.from(e.querySelectorAll("DOType")).filter(ie).filter((h) => h.getAttribute("id"));
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: { icon: "", label: d("save"), action: r },
      menuActions: s,
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${d("scl.name")}"
          required
          pattern="${le.alphanumericFirstUpperCase}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${le.normalizedString}"
        ></wizard-textfield>`,
        u`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${d("scl.type")}"
          >${m.map(
          (h) => u`<mwc-list-item
                value=${h.id}
                ?selected=${h.id === a}
                >${h.id}</mwc-list-item
              >`
        )}</mwc-select
        >`,
        u`<wizard-textfield
          label="accessControl"
          helper="${d("scl.accessControl")}"
          .maybeValue=${l}
          nullable
          pattern="${le.normalizedString}"
        ></wizard-textfield>`,
        u`<wizard-checkbox
          label="transient"
          .maybeValue="${p}"
          helper="${d("scl.transient")}"
          nullable
        ></wizard-checkbox>`
      ]
    }
  ];
}
function jo(t) {
  return (e) => {
    const i = f(e.find((c) => c.label === "id")), n = f(e.find((c) => c.label === "desc")), r = f(e.find((c) => c.label === "lnClass"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc") && r == t.getAttribute("lnClass"))
      return [];
    const a = H(t, { id: i, desc: n, lnClass: r }), s = [];
    s.push({ old: { element: t }, new: { element: a } });
    const o = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `LN0[lnType="${o}"], LN[lnType="${o}"]`
      )
    ).forEach((c) => {
      const l = c.cloneNode(!1);
      l.setAttribute("lnType", i), s.push({ old: { element: c }, new: { element: l } });
    }), [
      { title: d("lnodetype.action.edit", { oldId: o, newId: i }), actions: s }
    ];
  };
}
function Wo(t, e) {
  const i = W(e, "LNodeType", t);
  if (i)
    return [
      {
        title: d("lnodetype.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: d("save"),
          action: jo(i)
        },
        menuActions: [
          {
            label: d("remove"),
            icon: "delete",
            action: Tn(i)
          },
          {
            label: d("scl.DO"),
            icon: "playlist_add",
            action: Bo(i)
          }
        ],
        content: [
          u`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${le.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${le.normalizedString}"
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="lnClass"
          helper="${d("scl.lnClass")}"
          .maybeValue=${i.getAttribute("lnClass")}
          required
          pattern="${le.lnClass}"
        ></wizard-textfield>`,
          u`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = Ln({
              identity: n.target.selected.value,
              doc: e
            });
            r && n.target.dispatchEvent(L(r));
          }}
          >
            ${Array.from(i.querySelectorAll("DO")).map(
            (n) => u`<mwc-list-item
                  twoline
                  tabindex="0"
                  value="${E(n)}"
                  ><span>${n.getAttribute("name")}</span
                  ><span slot="secondary"
                    >${"#" + n.getAttribute("type")}</span
                  ></mwc-list-item
                >`
          )}
          </mwc-list>
        `
        ]
      }
    ];
}
function Ko(t, e, i) {
  if (!t.target || !t.target.parentElement) return;
  const n = t.target.selected?.value;
  if (t.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    e.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (o) => u`<mwc-list-item
        value="${o.textContent?.trim() ?? ""}"
        ?selected=${o.textContent?.trim() === i}
        >${o.textContent?.trim()}</mwc-list-item
      >`
  ), s = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Ji(u`${a}`, s), s.requestUpdate();
}
function Zo(t, e, i) {
  const n = t.target.selected.value, r = t.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((c) => {
    const l = c;
    l.disabled = !c.classList.contains(n), l.noninteractive = !c.classList.contains(n), l.style.display = c.classList.contains(n) ? "" : "none", l.disabled || a.push(l);
  }), i && e === n ? r.value = i : r.value = a.length ? a[0].value : "";
  const s = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? s.style.display = "" : s.style.display = "none";
  const o = t.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? o.style.display = "none" : o.style.display = "", s.requestUpdate(), o.requestUpdate(), r.requestUpdate();
}
function At(t, e, i, n, r, a, s, o, c, l) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("scl.name")}"
      required
      pattern="${de.abstractDataAttributeName}"
      maxLength="${St.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    u`<wizard-textfield
      label="desc"
      helper="${d("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${de.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${d("scl.bType")}"
      required
      @selected=${(p) => Zo(p, i, r)}
      >${Qs.map(
      (p) => u`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${d("scl.type")}"
      fixedMenuPosition
      @selected=${(p) => Ko(p, l, c)}
      >${n.map(
      (p) => u`<mwc-list-item
            class="${p.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${p.id}
            >${p.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${d("scl.sAddr")}"
      nullable
      pattern="${de.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="valKind"
      .maybeValue=${s}
      helper="${d("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Js.map(
      (p) => u`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="valImport"
      .maybeValue=${o}
      helper="${d("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    u`<wizard-select
      label="Val"
      .maybeValue=${c}
      helper="${d("scl.Val")}"
      nullable
      >${Array.from(
      l.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (p) => u`<mwc-list-item value="${p.textContent?.trim() ?? ""}"
            >${p.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="Val"
      .maybeValue=${c}
      helper="${d("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function $n(t, e, i) {
  if (t === null) {
    const r = ne(i.ownerDocument, "Val", {});
    return r.textContent = e, {
      new: {
        parent: i,
        element: r,
        reference: i.firstElementChild
      }
    };
  }
  if (e === null)
    return {
      old: {
        parent: i,
        element: t,
        reference: t.nextSibling
      }
    };
  const n = t.cloneNode(!1);
  return n.textContent = e, {
    old: { element: t },
    new: { element: n }
  };
}
function Xo(t) {
  return (e) => {
    e.dispatchEvent(
      me({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(Se());
  };
}
function Qo(t) {
  return (e) => {
    const i = f(e.find((g) => g.label === "name")), n = f(e.find((g) => g.label === "desc")), r = f(e.find((g) => g.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((g) => g.label === "type")) : null, s = f(e.find((g) => g.label === "sAddr")), o = f(e.find((g) => g.label === "valKind")), c = f(e.find((g) => g.label === "valImport")), l = e.find(
      (g) => g.label === "Val" && g.style.display !== "none"
    ), p = l ? f(l) : null;
    let m, h;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("bType") && a === t.getAttribute("type") && s === t.getAttribute("sAddr") && o === t.getAttribute("valKind") && c === t.getAttribute("valImprot"))
      m = null;
    else {
      const g = H(t, {
        name: i,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c
      });
      m = { old: { element: t }, new: { element: g } };
    }
    p === (t.querySelector("Val")?.textContent?.trim() ?? null) ? h = null : h = $n(
      t.querySelector("Val"),
      p,
      m?.new.element ?? t
    );
    const w = [];
    return m && w.push(m), h && w.push(h), w;
  };
}
function Jo(t) {
  const e = t.ownerDocument, i = t.getAttribute("type"), n = t.getAttribute("name"), r = t.getAttribute("desc"), a = t.getAttribute("bType") ?? "", s = t.getAttribute("sAddr"), o = t.querySelector("Val")?.innerHTML.trim() ?? null, c = t.getAttribute("valKind"), l = t.getAttribute("valImport"), p = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ie).filter((h) => h.getAttribute("id")), m = t.closest("DataTypeTemplates");
  return [
    {
      title: d("bda.wizard.title.edit"),
      element: t,
      primary: {
        icon: "",
        label: d("save"),
        action: Qo(t)
      },
      menuActions: [
        {
          icon: "delete",
          label: d("remove"),
          action: Xo(t)
        }
      ],
      content: [
        ...At(
          n,
          r,
          a,
          p,
          i,
          s,
          c,
          l,
          o,
          m
        )
      ]
    }
  ];
}
function Yo(t) {
  return (e) => {
    const i = f(e.find((h) => h.label === "name")), n = f(e.find((h) => h.label === "desc")), r = f(e.find((h) => h.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((h) => h.label === "type")) : null, s = f(e.find((h) => h.label === "sAddr")), o = f(e.find((h) => h.label === "valKind")) !== "" ? f(e.find((h) => h.label === "valKind")) : null, c = f(e.find((h) => h.label === "valImport")) !== "" ? f(e.find((h) => h.label === "valImport")) : null, l = e.find(
      (h) => h.label === "Val" && h.style.display !== "none"
    ), p = l ? f(l) : null, m = ne(t.ownerDocument, "BDA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c
    });
    if (p !== null) {
      const h = ne(t.ownerDocument, "Val", {});
      h.textContent = p, m.appendChild(h);
    }
    return [
      {
        new: {
          parent: t,
          element: m
        }
      }
    ];
  };
}
function ec(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, c = null, l = null, p = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ie).filter((h) => h.getAttribute("id")), m = t.closest("DataTypeTemplates");
  return [
    {
      title: d("bda.wizard.title.edit"),
      primary: {
        icon: "",
        label: d("save"),
        action: Yo(t)
      },
      content: [
        ...At(
          i,
          n,
          r,
          p,
          a,
          s,
          c,
          l,
          o,
          m
        )
      ]
    }
  ];
}
function tc(t) {
  return (e) => {
    e.dispatchEvent(
      me({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(Se());
  };
}
function ic(t) {
  return (e) => {
    e.dispatchEvent(L(() => ec(t)));
  };
}
function nc(t) {
  return (e) => {
    const i = f(e.find((o) => o.label === "id")), n = f(e.find((o) => o.label === "desc"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc"))
      return [];
    const r = H(t, { id: i, desc: n }), a = [];
    a.push({ old: { element: t }, new: { element: r } });
    const s = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", i), a.push({ old: { element: o }, new: { element: c } });
    }), [
      { title: d("datype.action.edit", { oldId: s, newId: i }), actions: a }
    ];
  };
}
function rc(t, e) {
  const i = W(e, "DAType", t);
  if (!i) return;
  const n = i.getAttribute("id"), r = i.getAttribute("desc");
  return [
    {
      title: d("datype.wizard.title.edit"),
      element: i ?? void 0,
      primary: {
        icon: "",
        label: d("save"),
        action: nc(i)
      },
      menuActions: [
        {
          label: d("remove"),
          icon: "delete",
          action: tc(i)
        },
        {
          label: d("scl.DA"),
          icon: "playlist_add",
          action: ic(i)
        }
      ],
      content: [
        u`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${n}
          required
          maxlength="127"
          minlength="1"
          pattern="${le.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${r}
          nullable
          pattern="${le.normalizedString}"
        ></wizard-textfield>`,
        u`<mwc-list
          style="margin-top: 0px;"
          @selected=${(a) => {
          const s = a.target.selected.value, o = W(e, "BDA", s);
          o && a.target.dispatchEvent(L(Jo(o)));
        }}
        >
          ${Array.from(i.querySelectorAll("BDA")).map(
          (a) => u`<mwc-list-item twoline tabindex="0" value="${E(a)}"
                ><span>${a.getAttribute("name")}</span
                ><span slot="secondary"
                  >${a.getAttribute("bType") === "Enum" || a.getAttribute("bType") === "Struct" ? "#" + a.getAttribute("type") : a.getAttribute("bType")}</span
                ></mwc-list-item
              >`
        )}
        </mwc-list> `
      ]
    }
  ];
}
function ac(t) {
  return (e) => {
    e.dispatchEvent(
      me({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(Se());
  };
}
function zn(t, e, i, n) {
  return [
    u`<wizard-select
      label="fc"
      .maybeValue=${t}
      helper="${d("scl.fc")}"
      required
      fixedMenuPosition
      >${Xs.map(
      (r) => u`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="dchg"
      .maybeValue=${e}
      helper="${d("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${d("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${d("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function sc(t) {
  return (e) => {
    const i = f(e.find((C) => C.label === "name")), n = f(e.find((C) => C.label === "desc")), r = f(e.find((C) => C.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((C) => C.label === "type")) : null, s = f(e.find((C) => C.label === "sAddr")), o = f(e.find((C) => C.label === "valKind")), c = f(e.find((C) => C.label === "valImport")), l = e.find(
      (C) => C.label === "Val" && C.style.display !== "none"
    ), p = l ? f(l) : null, m = f(e.find((C) => C.label === "fc")) ?? "", h = f(e.find((C) => C.label === "dchg")), w = f(e.find((C) => C.label === "qchg")), g = f(e.find((C) => C.label === "dupd"));
    let x, k;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("bType") && a === t.getAttribute("type") && s === t.getAttribute("sAddr") && o === t.getAttribute("valKind") && c === t.getAttribute("valImprot") && m === t.getAttribute("fc") && h === t.getAttribute("dchg") && w === t.getAttribute("qchg") && g === t.getAttribute("dupd"))
      x = null;
    else {
      const C = H(t, {
        name: i,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c,
        fc: m,
        dchg: h,
        qchg: w,
        dupd: g
      });
      x = { old: { element: t }, new: { element: C } };
    }
    p === (t.querySelector("Val")?.textContent?.trim() ?? null) ? k = null : k = $n(
      t.querySelector("Val"),
      p,
      x?.new.element ?? t
    );
    const A = [];
    return x && A.push(x), k && A.push(k), A;
  };
}
function oc(t) {
  const e = t.ownerDocument, i = t.getAttribute("name"), n = t.getAttribute("desc"), r = t.getAttribute("bType") ?? "", a = t.getAttribute("type"), s = t.getAttribute("sAddr"), o = t.querySelector("Val")?.innerHTML.trim() ?? null, c = t.getAttribute("valKind"), l = t.getAttribute("valImport"), p = t.getAttribute("fc") ?? "", m = t.getAttribute("dchg"), h = t.getAttribute("qchg"), w = t.getAttribute("dupd"), g = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ie).filter((k) => k.getAttribute("id")), x = t.closest("DataTypeTemplates");
  return [
    {
      title: d("da.wizard.title.edit"),
      element: t ?? void 0,
      primary: {
        icon: "",
        label: d("save"),
        action: sc(t)
      },
      menuActions: [
        {
          icon: "delete",
          label: d("remove"),
          action: ac(t)
        }
      ],
      content: [
        ...At(
          i,
          n,
          r,
          g,
          a,
          s,
          c,
          l,
          o,
          x
        ),
        ...zn(p, m, h, w)
      ]
    }
  ];
}
function cc(t) {
  return (e) => {
    const i = f(e.find((A) => A.label === "name")), n = f(e.find((A) => A.label === "desc")), r = f(e.find((A) => A.label === "bType")), a = r === "Enum" || r === "Struct" ? f(e.find((A) => A.label === "type")) : null, s = f(e.find((A) => A.label === "sAddr")), o = f(e.find((A) => A.label === "valKind")), c = f(e.find((A) => A.label === "valImport")), l = e.find(
      (A) => A.label === "Val" && A.style.display !== "none"
    ), p = l ? f(l) : null, m = f(e.find((A) => A.label === "fc")) ?? "", h = f(e.find((A) => A.label === "dchg")), w = f(e.find((A) => A.label === "qchg")), g = f(e.find((A) => A.label === "dupd")), x = [], k = ne(t.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c,
      fc: m,
      dchg: h,
      qchg: w,
      dupd: g
    });
    if (p !== null) {
      const A = ne(t.ownerDocument, "Val", {});
      A.textContent = p, k.appendChild(A);
    }
    return x.push({
      new: {
        parent: t,
        element: k
      }
    }), x;
  };
}
function lc(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, c = null, l = null, p = "", m = null, h = null, w = null, g = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ie).filter((k) => k.getAttribute("id")), x = t.closest("DataTypeTemplates");
  return [
    {
      title: d("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: d("save"),
        action: cc(t)
      },
      content: [
        ...At(
          i,
          n,
          r,
          g,
          a,
          s,
          c,
          l,
          o,
          x
        ),
        ...zn(p, m, h, w)
      ]
    }
  ];
}
function Pn(t) {
  return (e) => {
    e.dispatchEvent(
      me({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(Se());
  };
}
function dc(t) {
  return (e) => {
    const i = f(e.find((o) => o.label === "name")), n = f(e.find((o) => o.label === "desc")), r = f(e.find((o) => o.label === "type")), a = [];
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      return [];
    const s = H(t, { name: i, desc: n, type: r });
    return a.push({ old: { element: t }, new: { element: s } }), a;
  };
}
function uc(t) {
  return (e) => {
    const i = f(e.find((o) => o.label === "name")), n = f(e.find((o) => o.label === "desc")), r = f(e.find((o) => o.label === "type")), a = [], s = ne(t.ownerDocument, "SDO", {
      name: i,
      desc: n,
      type: r
    });
    return a.push({
      new: {
        parent: t,
        element: s
      }
    }), a;
  };
}
function Rn(t) {
  const e = t.doc ? t.doc : t.parent.ownerDocument, i = W(e, "SDO", t.identity ?? NaN), [n, r, a, s, o, c] = i ? [
    d("sdo.wizard.title.edit"),
    dc(i),
    i.getAttribute("type"),
    [{ icon: "delete", label: d("remove"), action: Pn(i) }],
    i.getAttribute("name"),
    i.getAttribute("desc")
  ] : [
    d("sdo.wizard.title.add"),
    uc(t.parent),
    null,
    void 0,
    "",
    null
  ], l = Array.from(e.querySelectorAll("DOType")).filter(ie).filter((p) => p.getAttribute("id"));
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: { icon: "", label: d("save"), action: r },
      menuActions: s,
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${d("scl.name")}"
          required
          pattern="${de.tRestrName1stL}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
        u`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${d("scl.type")}"
          >${l.map(
          (p) => u`<mwc-list-item
                value=${p.id}
                ?selected=${p.id === a}
                >${p.id}</mwc-list-item
              >`
        )}</mwc-select
        >`
      ]
    }
  ];
}
function pc(t) {
  return (e) => {
    e.dispatchEvent(L(() => Rn({ parent: t })));
  };
}
function mc(t) {
  return (e) => {
    e.dispatchEvent(L(() => lc(t)));
  };
}
function hc(t) {
  return (e) => {
    const i = f(e.find((c) => c.label === "id")), n = f(e.find((c) => c.label === "desc")), r = f(e.find((c) => c.label === "CDC"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc") && r == t.getAttribute("cdc"))
      return [];
    const a = H(t, { id: i, desc: n, cdc: r }), s = [];
    s.push({ old: { element: t }, new: { element: a } });
    const o = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `LNodeType > DO[type="${o}"], DOType > SDO[type="${o}"]`
      )
    ).forEach((c) => {
      const l = c.cloneNode(!1);
      l.setAttribute("type", i), s.push({ old: { element: c }, new: { element: l } });
    }), [
      { title: d("dotype.action.edit", { oldId: o, newId: i }), actions: s }
    ];
  };
}
function fc(t, e) {
  const i = W(e, "DOType", t);
  if (i)
    return [
      {
        title: d("dotype.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: d("save"),
          action: hc(i)
        },
        menuActions: [
          {
            label: d("remove"),
            icon: "delete",
            action: Pn(i)
          },
          {
            label: d("scl.DO"),
            icon: "playlist_add",
            action: pc(i)
          },
          {
            label: d("scl.DA"),
            icon: "playlist_add",
            action: mc(i)
          }
        ],
        content: [
          u`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${de.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="CDC"
          helper="${d("scl.CDC")}"
          .maybeValue=${i.getAttribute("cdc")}
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
          u`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = n.target.selected, a = n.target.selected.value, s = W(e, "DA", a), o = r.classList.contains("DA") ? s ? oc(s) : void 0 : Rn({
              identity: r.value,
              doc: e
            });
            o && n.target.dispatchEvent(L(o));
          }}
          >
            ${Array.from(i.querySelectorAll("SDO, DA")).map(
            (n) => u`<mwc-list-item
                  twoline
                  tabindex="0"
                  class="${n.tagName === "DA" ? "DA" : "SDO"}"
                  value="${E(n)}"
                  ><span>${n.getAttribute("name")}</span
                  ><span slot="secondary"
                    >${n.tagName === "SDO" || n.getAttribute("bType") === "Enum" || n.getAttribute("bType") === "Struct" ? "#" + n.getAttribute("type") : n.getAttribute("bType")}</span
                  ></mwc-list-item
                >`
          )}
          </mwc-list>
        `
        ]
      }
    ];
}
function On(t) {
  return (e) => {
    e.dispatchEvent(
      me({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(Se());
  };
}
function oi(t) {
  const e = Math.max(
    ...Array.from(t.children).map(
      (i) => parseInt(i.getAttribute("ord") ?? "-2", 10)
    )
  );
  return isFinite(e) ? (e + 1).toString(10) : "0";
}
function bc(t) {
  return (e) => {
    const i = f(e.find((o) => o.label === "value")), n = f(e.find((o) => o.label === "desc")), r = f(e.find((o) => o.label === "ord")) || oi(t), a = ne(t.ownerDocument, "EnumVal", {
      ord: r,
      desc: n
    });
    return a.textContent = i, [{
      new: {
        parent: t,
        element: a
      }
    }];
  };
}
function gc(t) {
  return (e) => {
    const i = f(e.find((s) => s.label === "value")) ?? "", n = f(e.find((s) => s.label === "desc")), r = f(e.find((s) => s.label === "ord")) || t.getAttribute("ord") || oi(t.parentElement);
    if (i === t.textContent && n === t.getAttribute("desc") && r === t.getAttribute("ord"))
      return [];
    const a = H(t, { desc: n, ord: r });
    return a.textContent = i, [{ old: { element: t }, new: { element: a } }];
  };
}
function Vn(t) {
  const e = t.doc ? t.doc : t.parent.ownerDocument, i = W(
    e,
    "EnumVal",
    t.identity ?? NaN
  ), [n, r, a, s, o, c] = i ? [
    d("enum-val.wizard.title.edit"),
    gc(i),
    i.getAttribute("ord"),
    i.getAttribute("desc"),
    i.textContent,
    [
      {
        icon: "delete",
        label: d("remove"),
        action: On(i)
      }
    ]
  ] : [
    d("enum-val.wizard.title.add"),
    bc(t.parent),
    oi(t.parent),
    null,
    // desc is uncommon on EnumVal
    "",
    void 0
  ];
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: {
        icon: "",
        label: "Save",
        action: r
      },
      menuActions: c,
      content: [
        u`<wizard-textfield
          label="ord"
          helper="${d("scl.ord")}"
          .maybeValue=${a}
          required
          type="number"
        ></wizard-textfield>`,
        u`<wizard-textfield
          label="value"
          helper="${d("scl.value")}"
          .maybeValue=${o}
          pattern="${le.normalizedString}"
          dialogInitialFocus
        ></wizard-textfield>`,
        u`<wizard-textfield
          id="evDesc"
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${s}
          nullable
          pattern="${le.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function yc(t) {
  return (e) => {
    e.dispatchEvent(L(() => Vn({ parent: t })));
  };
}
function vc(t) {
  return (e) => {
    const i = f(e.find((o) => o.label === "id")), n = f(e.find((o) => o.label === "desc"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc"))
      return [];
    const r = H(t, { id: i, desc: n }), a = [];
    a.push({ old: { element: t }, new: { element: r } });
    const s = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", i), a.push({ old: { element: o }, new: { element: c } });
    }), [{ title: d("enum.action.edit", { oldId: s, newId: i }), actions: a }];
  };
}
function Sc(t, e) {
  const i = W(e, "EnumType", t);
  if (i)
    return [
      {
        title: d("enum.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: d("save"),
          action: vc(i)
        },
        menuActions: [
          {
            label: d("remove"),
            icon: "delete",
            action: On(i)
          },
          {
            label: d("scl.EnumVal"),
            icon: "playlist_add",
            action: yc(i)
          }
        ],
        content: [
          u`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${le.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${le.normalizedString}"
        ></wizard-textfield>`,
          u`<mwc-list
          style="margin-top: 0px;"
          @selected=${(n) => {
            const r = Vn({
              identity: n.target.selected.value,
              doc: e
            });
            r && n.target.dispatchEvent(L(r));
          }}
          >${Array.from(i.querySelectorAll("EnumVal")).map(
            (n) => u`<mwc-list-item
                graphic="icon"
                hasMeta
                tabindex="0"
                value="${E(n)}"
              >
                <span>${n.textContent ?? ""}</span>
                <span slot="graphic"
                  >${n.getAttribute("ord") ?? "-1"}</span
                >
              </mwc-list-item>`
          )}</mwc-list
        > `
        ]
      }
    ];
}
var Ac = Object.defineProperty, wc = Object.getOwnPropertyDescriptor, oe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? wc(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && Ac(e, i, r), r;
};
const qi = {
  EnumType: "enumIcon",
  DAType: "dAIcon",
  DOType: "dOIcon",
  LNodeType: "lNIcon"
}, Bi = {
  EnumType: "enum-type",
  DAType: "da-type",
  DOType: "do-type",
  LNodeType: "lnode-type"
};
let X = class extends ge {
  constructor() {
    super(...arguments), this.disableControlClean = !1, this.unreferencedDataTypes = [], this.selectedDataTypeItems = [];
  }
  /**
   * Initial update after container is loaded.
   */
  async firstUpdated() {
    this.cleanupList?.addEventListener("selected", () => {
      this.selectedDataTypeItems = this.cleanupList.index;
    });
  }
  /**
   * Toggle the class hidden in the unused data type list for use by filter buttons to ensure selection works correctly.
   * @param selectorType - class for selection to toggle the hidden class used by the list.
   */
  toggleHiddenClass(t) {
    this.cleanupList.querySelectorAll(`.${t}`).forEach((e) => {
      e.classList.toggle("hiddenontypefilter"), e.hasAttribute("disabled") ? e.removeAttribute("disabled") : e.setAttribute("disabled", "true");
    });
  }
  /**
   * Create a button for filtering in the data type cleanup container.
   * @param dataType - SCL Data Type e.g. DOType.
   * @param initialState - boolean representing whether button is on or off.
   * @returns html for the icon button.
   */
  renderFilterIconButton(t, e = !0) {
    return u`<mwc-icon-button-toggle
      slot="graphic"
      label="filter"
      ?on=${e}
      class="t-${Bi[t]}-filter filter"
      @click=${() => {
      this.toggleHiddenClass(`t-${Bi[t]}`);
    }}
      >${ut(qi[t], !0)}
      ${ut(qi[t], !1)}
    </mwc-icon-button-toggle>`;
  }
  /**
   * Opens an editor for a given data type.
   * @param dType - SCL datatype element.
   */
  openDataTypeEditor(t) {
    t.tagName === "LNodeType" ? this.dispatchEvent(
      L(Wo(E(t), this.doc))
    ) : t.tagName === "DAType" ? this.dispatchEvent(
      L(rc(E(t), this.doc))
    ) : t.tagName === "DOType" ? this.dispatchEvent(
      L(fc(E(t), this.doc))
    ) : t.tagName === "EnumType" && this.dispatchEvent(
      L(Sc(E(t), this.doc))
    );
  }
  /**
   * Return secondary descriptive parameter for a data type.
   * @param dType - SCL datatype element.
   * @returns string with secondary descriptive parameter for a data type
   */
  getDataTypeSecondaryText(t) {
    return t.tagName === "LNodeType" ? t.getAttribute("lnClass") : t.tagName === "DAType" ? t.getAttribute("desc") : t.tagName === "DOType" ? t.getAttribute("cdc") : t.tagName === "EnumType" ? t.getAttribute("desc") : "Unknown";
  }
  /**
   * Provide list item in the data type cleanup container.
   * @param dType - an unused SCL DataType element (LNodeType, DOType, DAType EnumType).
   * @returns html for checklist item.
   */
  renderListItem(t) {
    return u`<mwc-check-list-item
      twoline
      class="${He({
      "cleanup-list-item": !0,
      "t-lnode-type": t.tagName === "LNodeType",
      "t-do-type": t.tagName === "DOType",
      "t-da-type": t.tagName === "DAType",
      "t-enum-type": t.tagName === "EnumType"
    })}"
      value="${E(t)}"
      graphic="large"
      ><span class="unreferenced-control">${t.getAttribute("id")} </span>
      <span>
        <mwc-icon-button
          label="Edit"
          icon="edit"
          class="edit-item"
          @click="${() => this.openDataTypeEditor(t)}"
        ></mwc-icon-button>
      </span>
      <span slot="secondary">${this.getDataTypeSecondaryText(t)} </span>
      <mwc-icon slot="graphic"
        >${Fs[t.tagName]}</mwc-icon
      >
    </mwc-check-list-item>`;
  }
  /**
   * Recurses through all datatype templates and indexes their usage.
   * @returns a map of data type templates usage by id.
   */
  indexDataTypeTemplates(t) {
    const e = /* @__PURE__ */ new Map();
    return this.fetchTree(t).forEach((n) => {
      e.set(
        n,
        (e.get(n) || 0) + 1
      );
    }), e;
  }
  /**
   * Given a datatype reference return the appropriate datatype object or null.
   * @param element - the SCL Element for which a datatype is required.
   * @returns either the datatype or null.
   */
  getSubType(t) {
    const e = this.doc.querySelector(
      ":root > DataTypeTemplates"
    ), i = t.getAttribute("type");
    return t.tagName === "DO" || t.tagName === "SDO" ? e.querySelector(`DOType[id="${i}"]`) : (t.tagName === "DA" || t.tagName === "BDA") && t.getAttribute("bType") === "Struct" ? e.querySelector(`DAType[id="${i}"]`) : (t.tagName === "DA" || t.tagName === "BDA") && t.getAttribute("bType") === "Enum" ? e.querySelector(`EnumType[id="${i}"]`) : null;
  }
  /**
   * Recurses from an initial element to find all child references (with duplicates).
   * @param rootElement - root SCL Element for which all child datatype references are required.
   * @returns the id value for all SCL element datatypes traversed.
   */
  fetchTree(t) {
    const e = [...t], i = [], n = 3e5;
    for (; e.length > 0 && e.length <= n; ) {
      const r = e.pop();
      i.push(r.getAttribute("id")), Array.from(r.querySelectorAll("DO, SDO, DA, BDA")).filter(ie).forEach((s) => {
        const o = this.getSubType(s);
        o !== null && e.unshift(o);
      }), e.length >= n && this.dispatchEvent(
        qo({
          kind: "error",
          title: d("cleanup.unreferencedDataTypes.title"),
          message: d("cleanup.unreferencedDataTypes.stackExceeded", {
            maxStackDepth: n.toString()
          })
        })
      );
    }
    return i;
  }
  /**
   * Get items from selection list and and any subtypes.
   * @returns An array of SCL elements representing selected items and subtypes as required.
   */
  getCleanItems() {
    const t = Array.from(
      this.selectedDataTypeItems.values()
    ).map((e) => this.unreferencedDataTypes[e]);
    if (this.cleanSubTypesCheckbox.checked === !0) {
      const e = this.doc.querySelector(
        ":root > DataTypeTemplates"
      ), i = Array.from(
        e.querySelectorAll("LNodeType")
      ), n = this.indexDataTypeTemplates(i);
      t.forEach((r) => {
        r.tagName === "LNodeType" && this.fetchTree([r]).forEach((s) => {
          n?.set(s, n.get(s) - 1);
        });
      }), t.forEach((r) => {
        ["DOType", "DAType"].includes(r.tagName) && Vi(
          this.fetchTree([r])
        ).forEach((s) => {
          n.get(s) === void 0 && t.push(e.querySelector(`[id="${s}"]`));
        });
      }), n?.forEach((r, a) => {
        r <= 0 && t.push(
          e.querySelector(`[id="${a}"]`)
        );
      });
    }
    return t;
  }
  /**
   * Provide delete button the data type cleanup container.
   * @returns html for the Delete Button of this container.
   */
  renderDeleteButton() {
    return u`<mwc-button
      outlined
      icon="delete"
      class="delete-button"
      label="${d("cleanup.unreferencedDataTypes.deleteButton")} (${this.selectedDataTypeItems.size || "0"})"
      ?disabled=${this.selectedDataTypeItems.size === 0 || Array.isArray(this.selectedDataTypeItems) && !this.selectedDataTypeItems.length}
      @click=${() => {
      lt(this.getCleanItems()).forEach(
        (e) => this.dispatchEvent(me(e))
      ), this.cleanupListItems.forEach((e) => {
        e.selected = !1;
      });
    }}
    ></mwc-button>`;
  }
  /**
   * Find unused types by scanning the SCL and comparing with the DataTypeTemplates.
   * @param usedSelector - CSS selector for SCL type's instantiated name, e.g. LN, LN0.
   * @param keyAttributeName - attribute name for SCL types uniqueness guarantee, e.g. lnType.
   * @param templateSelector - CSS selector for SCL template element in DataTypeTemplate section.
   * @returns an array of unreferenced elements sorted by their identity string.
   */
  getUnusedType(t, e, i) {
    const n = Vi(
      Array.from(this.doc?.querySelectorAll(t) ?? []).filter(ie).map((a) => a.getAttribute(e))
    ), r = [];
    return Array.from(
      this.doc?.querySelectorAll(`DataTypeTemplates > ${i}`) ?? []
    ).filter(ie).forEach((a) => {
      n.includes(a.getAttribute("id") ?? "Unknown") || r.push(a);
    }), ri(r);
  }
  /**
   * Find unused types by scanning the SCL and comparing with the DataTypeTemplates.
   * @returns an array of unreferenced elements
   */
  getUnusedTypes() {
    const t = this.getUnusedType(
      "LN, LN0",
      "lnType",
      "LNodeType"
    ), e = this.getUnusedType("DO, SDO", "type", "DOType"), i = this.getUnusedType(
      'DA[bType="Struct"], BDA[bType="Struct"]',
      "type",
      "DAType"
    ), n = this.getUnusedType(
      'DA[bType="Enum"], BDA[bType="Enum"]',
      "type",
      "EnumType"
    );
    return t.concat(
      e,
      i,
      n
    );
  }
  /**
   * Render a user selectable table of unreferenced DataTypes if any exist.
   * @returns html for table and action button.
   */
  renderUnreferencedDataTypes() {
    return this.unreferencedDataTypes = this.getUnusedTypes(), u`
      <div>
        <h1>
          ${d("cleanup.unreferencedDataTypes.title")}
          (${this.unreferencedDataTypes.length})
          <abbr slot="action">
            <mwc-icon-button
              icon="info"
              title="${d("cleanup.unreferencedDataTypes.tooltip")}"
            >
            </mwc-icon-button>
          </abbr>
        </h1>
        ${this.renderFilterIconButton("LNodeType")}
        ${this.renderFilterIconButton("DOType")}
        ${this.renderFilterIconButton("DAType")}
        ${this.renderFilterIconButton("EnumType")}
        <filtered-list multi class="cleanup-list"
          >${Array.from(
      this.unreferencedDataTypes.map((t) => this.renderListItem(t))
    )}
        </filtered-list>
      </div>
      <footer>
        ${this.renderDeleteButton()}
        <mwc-formfield
          class="remove-from-communication"
          label="${d("cleanup.unreferencedDataTypes.alsoRemoveSubTypes")}"
        >
          <mwc-checkbox checked class="clean-sub-types-checkbox"></mwc-checkbox
        ></mwc-formfield>
      </footer>
    `;
  }
  render() {
    return u`
      <section tabindex="1">${this.renderUnreferencedDataTypes()}</section>
    `;
  }
};
X.styles = be`
    ${yt}

    section {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      footer {
        flex-direction: row;
      }

      mwc-check-list-item {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .edit-item {
      --mdc-icon-size: 16px;
      visibility: hidden;
      opacity: 0;
    }

    .cleanup-list-item:hover .edit-item {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .edit-item[disabled] {
      display: none;
    }

    .delete-button {
      float: right;
    }

    footer {
      align-items: center;
      align-content: center;
      display: flex;
      flex-flow: row wrap;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 16px;
    }

    filtered-list {
      min-height: 20vh;
      overflow-y: scroll;
    }

    /* filter itself changes colour after click */
    .t-da-type-filter[on],
    .t-enum-type-filter[on],
    .t-lnode-type-filter[on],
    .t-do-type-filter[on] {
      color: var(--secondary);
      opacity: 1;
    }

    /* Make sure to type filter here
    .hidden is set on string filter in filtered-list and must always filter*/
    .cleanup-list-item.hiddenontypefilter:not(.hidden) {
      display: none;
    }

    /* filter disabled, Material Design guidelines for opacity */
    .t-da-type-filter,
    .t-enum-type-filter,
    .t-lnode-type-filter,
    .t-do-type-filter {
      opacity: 0.38;
    }
  `;
oe([
  b({ attribute: !1 })
], X.prototype, "doc", 2);
oe([
  b({ type: Boolean })
], X.prototype, "disableControlClean", 2);
oe([
  b({ type: Array })
], X.prototype, "unreferencedDataTypes", 2);
oe([
  b({ attribute: !1 })
], X.prototype, "selectedDataTypeItems", 2);
oe([
  N(".delete-button")
], X.prototype, "cleanButton", 2);
oe([
  N(".cleanup-list")
], X.prototype, "cleanupList", 2);
oe([
  Jt("mwc-check-list-item.cleanup-list-item")
], X.prototype, "cleanupListItems", 2);
oe([
  N(".clean-sub-types-checkbox")
], X.prototype, "cleanSubTypesCheckbox", 2);
oe([
  N(".t-da-type-filter")
], X.prototype, "cleanupDATypeFilter", 2);
oe([
  N(".t-enum-type-filter")
], X.prototype, "cleanupEnumTypeFilter", 2);
oe([
  N(".t-lnode-type-filter")
], X.prototype, "cleanupLNodeTypeFilter", 2);
oe([
  N(".t-do-type-filter")
], X.prototype, "cleanupDOTypeFilter", 2);
X = oe([
  ue("cleanup-data-types")
], X);
const xc = {
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
}, Cc = {
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
}, Gi = { en: Cc, de: xc };
async function kc(t) {
  return Object.keys(Gi).includes(t) ? Gi[t] : {};
}
Br({ loader: kc, empty: (t) => t });
const Mn = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Mn);
Wr(Mn);
var Ec = Object.defineProperty, Fn = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = s(e, i, r) || r);
  return r && Ec(e, i, r), r;
};
class Hn extends ge {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  render() {
    return u`
      <div class="cleanup">
        <cleanup-datasets .editCount=${this.editCount} .doc=${this.doc}></cleanup-datasets>
        <cleanup-control-blocks .editCount=${this.editCount} .doc=${this.doc}></cleanup-control-blocks>
        <cleanup-data-types .editCount=${this.editCount} .doc=${this.doc}></cleanup-data-types>
      </div>
    `;
  }
  static {
    this.styles = be`
    ${yt}

    :host {
      width: 100vw;
    }

    @media (max-width: 799px) {
      .cleanup {
        flex-direction: column;
      }
    }

    @media (min-width: 800px) {
      .cleanup {
        max-height: 60vh;
      }
    }

    cleanup-datasets, cleanup-control-blocks, cleanup-data-types {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    .cleanup {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
    }
  }
  `;
  }
}
Fn([
  b()
], Hn.prototype, "doc");
Fn([
  b({ type: Number })
], Hn.prototype, "editCount");
export {
  Hn as default
};
