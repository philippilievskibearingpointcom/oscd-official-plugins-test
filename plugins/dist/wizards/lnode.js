import "@material/mwc-icon";
import "@material/mwc-formfield";
import { TextField as Yi } from "@material/mwc-textfield";
import { List as er } from "@material/mwc-list";
import { Select as tr } from "@material/mwc-select";
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
const ci = /* @__PURE__ */ new WeakMap(), bt = (i) => (...e) => {
  const t = i(...e);
  return ci.set(t, !0), t;
}, Ee = (i) => typeof i == "function" && ci.has(i);
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
const Tt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, gt = (i, e, t = null) => {
  for (; e !== t; ) {
    const r = e.nextSibling;
    i.removeChild(e), e = r;
  }
};
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
const J = {}, Nt = {};
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
const ee = `{{lit-${String(Math.random()).slice(2)}}}`, ai = `<!--${ee}-->`, Rt = new RegExp(`${ee}|${ai}`), Se = "$lit$";
class oi {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const r = [], n = [], s = document.createTreeWalker(t.content, 133, null, !1);
    let c = 0, a = -1, o = 0;
    const { strings: d, values: { length: m } } = e;
    for (; o < m; ) {
      const p = s.nextNode();
      if (p === null) {
        s.currentNode = n.pop();
        continue;
      }
      if (a++, p.nodeType === 1) {
        if (p.hasAttributes()) {
          const b = p.attributes, { length: x } = b;
          let v = 0;
          for (let k = 0; k < x; k++)
            Dt(b[k].name, Se) && v++;
          for (; v-- > 0; ) {
            const k = d[o], I = Qe.exec(k)[2], w = I.toLowerCase() + Se, R = p.getAttribute(w);
            p.removeAttribute(w);
            const V = R.split(Rt);
            this.parts.push({ type: "attribute", index: a, name: I, strings: V }), o += V.length - 1;
          }
        }
        p.tagName === "TEMPLATE" && (n.push(p), s.currentNode = p.content);
      } else if (p.nodeType === 3) {
        const b = p.data;
        if (b.indexOf(ee) >= 0) {
          const x = p.parentNode, v = b.split(Rt), k = v.length - 1;
          for (let I = 0; I < k; I++) {
            let w, R = v[I];
            if (R === "")
              w = se();
            else {
              const V = Qe.exec(R);
              V !== null && Dt(V[2], Se) && (R = R.slice(0, V.index) + V[1] + V[2].slice(0, -Se.length) + V[3]), w = document.createTextNode(R);
            }
            x.insertBefore(w, p), this.parts.push({ type: "node", index: ++a });
          }
          v[k] === "" ? (x.insertBefore(se(), p), r.push(p)) : p.data = v[k], o += k;
        }
      } else if (p.nodeType === 8)
        if (p.data === ee) {
          const b = p.parentNode;
          (p.previousSibling === null || a === c) && (a++, b.insertBefore(se(), p)), c = a, this.parts.push({ type: "node", index: a }), p.nextSibling === null ? p.data = "" : (r.push(p), a--), o++;
        } else {
          let b = -1;
          for (; (b = p.data.indexOf(ee, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), o++;
        }
    }
    for (const p of r)
      p.parentNode.removeChild(p);
  }
}
const Dt = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, di = (i) => i.index !== -1, se = () => document.createComment(""), Qe = (
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
class Ye {
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
    const e = Tt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, c = 0, a, o = n.nextNode();
    for (; s < r.length; ) {
      if (a = r[s], !di(a)) {
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
    return Tt && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Pt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), ir = ` ${ee} `;
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
      const a = Qe.exec(s);
      a === null ? t += s + (r ? ir : ai) : t += s.substr(0, a.index) + a[1] + a[2] + Se + a[3] + ee;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Pt !== void 0 && (t = Pt.createHTML(t)), e.innerHTML = t, e;
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
const yt = (i) => i === null || !(typeof i == "object" || typeof i == "function"), et = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    return new ye(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, r = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const s = r[0].value;
      if (typeof s == "symbol")
        return String(s);
      if (typeof s == "string" || !et(s))
        return s;
    }
    let n = "";
    for (let s = 0; s < t; s++) {
      n += e[s];
      const c = r[s];
      if (c !== void 0) {
        const a = c.value;
        if (yt(a) || !et(a))
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
class ye {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== J && (!yt(e) || e !== this.value) && (this.value = e, Ee(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ee(this.value); ) {
      const e = this.value;
      this.value = J, e(this);
    }
    this.value !== J && this.committer.commit();
  }
}
class we {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(se()), this.endNode = e.appendChild(se());
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
    e.__insert(this.startNode = se()), e.__insert(this.endNode = se());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = se()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Ee(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = J, t(this);
    }
    const e = this.__pendingValue;
    e !== J && (yt(e) ? e !== this.value && this.__commitText(e) : e instanceof li ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : et(e) ? this.__commitIterable(e) : e === Nt ? (this.value = Nt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Ye && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new Ye(t, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, n;
    for (const s of e)
      n = t[r], n === void 0 && (n = new we(this.options), t.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(s), n.commit(), r++;
    r < t.length && (t.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    gt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class rr {
  constructor(e, t, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ee(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = J, t(this);
    }
    if (this.__pendingValue === J)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = J;
  }
}
class nr extends pi {
  constructor(e, t, r) {
    super(e, t, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new vt(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class vt extends ye {
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
class sr {
  constructor(e, t, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ee(this.__pendingValue); ) {
      const s = this.__pendingValue;
      this.__pendingValue = J, s(this);
    }
    if (this.__pendingValue === J)
      return;
    const e = this.__pendingValue, t = this.value, r = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = cr(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = J;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const cr = (i) => i && (ui ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
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
    return s === "." ? new nr(e, t.slice(1), r).parts : s === "@" ? [new sr(e, t.slice(1), n.eventContext)] : s === "?" ? [new rr(e, t.slice(1), r)] : new pi(e, t, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new we(e);
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
function dr(i) {
  let e = Ie.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Ie.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const r = i.strings.join(ee);
  return t = e.keyString.get(r), t === void 0 && (t = new oi(i, i.getTemplateElement()), e.keyString.set(r, t)), e.stringsArray.set(i.strings, t), t;
}
const Ie = /* @__PURE__ */ new Map();
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
const be = /* @__PURE__ */ new WeakMap(), hi = (i, e, t) => {
  let r = be.get(e);
  r === void 0 && (gt(e, e.firstChild), be.set(e, r = new we(Object.assign({ templateFactory: dr }, t))), r.appendInto(e)), r.setValue(i), r.commit();
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
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const g = (i, ...e) => new li(i, e, "html", or), lr = 1e3 * 60, $t = "langChanged";
function pr(i, e, t) {
  return Object.entries(tt(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(tt(s))), i);
}
function ur(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function tt(i) {
  return typeof i == "function" ? i() : i;
}
const hr = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: ur,
  interpolate: pr,
  translationCache: {}
});
let mr = hr();
function fr(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener($t, t, e), () => window.removeEventListener($t, t);
}
function C(i, e, t = mr) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? tt(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function mi(i) {
  return i instanceof we ? i.startNode.isConnected : i instanceof ye ? i.committer.element.isConnected : i.element.isConnected;
}
function br(i) {
  for (const [e] of i)
    mi(e) || i.delete(e);
}
function gr(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function yr(i, e) {
  setInterval(() => gr(() => br(i)), e);
}
const fi = /* @__PURE__ */ new Map();
function vr() {
  fr((i) => {
    for (const [e, t] of fi)
      mi(e) && xr(e, t, i);
  });
}
vr();
yr(fi, lr);
function xr(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
var it = function(i, e) {
  return it = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, it(i, e);
};
function _r(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  it(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ke = function() {
  return ke = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, ke.apply(this, arguments);
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
const xt = 133;
function bi(i, e) {
  const { element: { content: t }, parts: r } = i, n = document.createTreeWalker(t, xt, null, !1);
  let s = Ae(r), c = r[s], a = -1, o = 0;
  const d = [];
  let m = null;
  for (; n.nextNode(); ) {
    a++;
    const p = n.currentNode;
    for (p.previousSibling === m && (m = null), e.has(p) && (d.push(p), m === null && (m = p)), m !== null && o++; c !== void 0 && c.index === a; )
      c.index = m !== null ? -1 : c.index - o, s = Ae(r, s), c = r[s];
  }
  d.forEach((p) => p.parentNode.removeChild(p));
}
const Sr = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, xt, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, Ae = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const r = i[t];
    if (di(r))
      return t;
  }
  return -1;
};
function kr(i, e, t = null) {
  const { element: { content: r }, parts: n } = i;
  if (t == null) {
    r.appendChild(e);
    return;
  }
  const s = document.createTreeWalker(r, xt, null, !1);
  let c = Ae(n), a = 0, o = -1;
  for (; s.nextNode(); )
    for (o++, s.currentNode === t && (a = Sr(e), t.parentNode.insertBefore(e, t)); c !== -1 && n[c].index === o; ) {
      if (a > 0) {
        for (; c !== -1; )
          n[c].index += a, c = Ae(n, c);
        return;
      }
      c = Ae(n, c);
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
const gi = (i, e) => `${i}--${e}`;
let Me = !0;
typeof window.ShadyCSS > "u" ? Me = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Me = !1);
const Ar = (i) => (e) => {
  const t = gi(e.type, i);
  let r = Ie.get(t);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Ie.set(t, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const s = e.strings.join(ee);
  if (n = r.keyString.get(s), n === void 0) {
    const c = e.getTemplateElement();
    Me && window.ShadyCSS.prepareTemplateDom(c, i), n = new oi(e, c), r.keyString.set(s, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, Cr = ["html", "svg"], Er = (i) => {
  Cr.forEach((e) => {
    const t = Ie.get(gi(e, i));
    t !== void 0 && t.keyString.forEach((r) => {
      const { element: { content: n } } = r, s = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((c) => {
        s.add(c);
      }), bi(r, s);
    });
  });
}, yi = /* @__PURE__ */ new Set(), Ir = (i, e, t) => {
  yi.add(i);
  const r = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: s } = n;
  if (s === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, i);
    return;
  }
  const c = document.createElement("style");
  for (let d = 0; d < s; d++) {
    const m = n[d];
    m.parentNode.removeChild(m), c.textContent += m.textContent;
  }
  Er(i);
  const a = r.content;
  t ? kr(t, c, a.firstChild) : a.insertBefore(c, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, i);
  const o = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && o !== null)
    e.insertBefore(o.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(c, a.firstChild);
    const d = /* @__PURE__ */ new Set();
    d.add(c), bi(t, d);
  }
}, wr = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = t.scopeName, n = be.has(e), s = Me && e.nodeType === 11 && !!e.host, c = s && !yi.has(r), a = c ? document.createDocumentFragment() : e;
  if (hi(i, a, Object.assign({ templateFactory: Ar(r) }, t)), c) {
    const o = be.get(a);
    be.delete(a);
    const d = o.value instanceof Ye ? o.value.template : void 0;
    Ir(r, a, d), gt(e, e.firstChild), e.appendChild(a), be.set(e, o);
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
var vi;
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
}, xi = (i, e) => e !== i && (e === e || i === i), je = {
  attribute: !0,
  type: String,
  converter: rt,
  reflect: !1,
  hasChanged: xi
}, We = 1, Ft = 4, Ot = 8, Mt = 16, nt = "finalized";
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
  static createProperty(e, t = je) {
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
    return this._classProperties && this._classProperties.get(e) || je;
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
  static _valueHasChanged(e, t, r = xi) {
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
  _propertyToAttribute(e, t, r = je) {
    const n = this.constructor, s = n._attributeNameForProperty(e, r);
    if (s !== void 0) {
      const c = n._propertyValueToAttribute(t, r);
      if (c === void 0)
        return;
      this._updateState = this._updateState | Ot, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & Ot)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const s = r.getPropertyOptions(n);
      this._updateState = this._updateState | Mt, this[n] = // tslint:disable-next-line:no-any
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
      r = r || s.getPropertyOptions(e), s._valueHasChanged(this[e], t, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), r.reflect === !0 && !(this._updateState & Mt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
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
    this._updateState = this._updateState | Ft;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Ft;
  }
  get hasUpdated() {
    return this._updateState & We;
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
    e && (this._updateState & We || (this._updateState = this._updateState | We, this.firstUpdated(t)), this.updated(t));
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
vi = nt;
_i[vi] = !0;
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
const Lr = (i, e) => (window.customElements.define(i, e), e), Tr = (i, e) => {
  const { kind: t, elements: r } = e;
  return {
    kind: t,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(i, n);
    }
  };
}, ae = (i) => (e) => typeof e == "function" ? Lr(i, e) : Tr(i, e), Nr = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, Rr = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function f(i) {
  return (e, t) => t !== void 0 ? Rr(i, e, t) : Nr(i, e);
}
function Dr(i) {
  return f({ attribute: !1, hasChanged: void 0 });
}
const E = (i) => Dr();
function j(i, e) {
  return (t, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? _t(n, t, r) : St(n, t);
  };
}
function Si(i) {
  return (e, t) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? _t(r, e, t) : St(r, e);
  };
}
const _t = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, St = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), Pr = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), $r = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function Fr(i) {
  return (e, t) => t !== void 0 ? $r(i, e, t) : Pr(i, e);
}
const zt = Element.prototype, Or = zt.msMatchesSelector || zt.webkitMatchesSelector;
function ki(i = "", e = !1, t = "") {
  return (r, n) => {
    const s = {
      get() {
        const c = `slot${i ? `[name=${i}]` : ":not([name])"}`, a = this.renderRoot.querySelector(c);
        let o = a && a.assignedNodes({ flatten: e });
        return o && t && (o = o.filter((d) => d.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (d.matches ? d.matches(t) : Or.call(d, t)))), o;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? _t(s, r, n) : St(s, r);
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
const st = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, kt = Symbol();
class At {
  constructor(e, t) {
    if (t !== kt)
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
const Ai = (i) => new At(String(i), kt), Mr = (i) => {
  if (i instanceof At)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, Le = (i, ...e) => {
  const t = e.reduce((r, n, s) => r + Mr(n) + i[s + 1], i[0]);
  return new At(t, kt);
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
const Vt = {};
class ve extends _i {
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
        return Ai(r);
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
    super.update(e), t !== Vt && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
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
    return Vt;
  }
}
ve.finalized = !0;
ve.render = wr;
ve.shadowRootOptions = { mode: "open" };
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
function zr(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Vr = (i) => i.nodeType === Node.ELEMENT_NODE, Ci = () => {
}, Ur = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Ci, Ur);
document.removeEventListener("x", Ci);
const Ei = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Br = (i) => {
  const e = Ei();
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
class Ct extends ve {
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
var Ii = (
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
var Hr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Gr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ut = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function qr(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + t.left, c = n + t.top, a, o;
  if (i.type === "touchstart") {
    var d = i;
    a = d.changedTouches[0].pageX - s, o = d.changedTouches[0].pageY - c;
  } else {
    var m = i;
    a = m.pageX - s, o = m.pageY - c;
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
var Bt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ht = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Re = [], jr = (
  /** @class */
  function(i) {
    _r(e, i);
    function e(t) {
      var r = i.call(this, ke(ke({}, e.defaultAdapter), t)) || this;
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
        return Hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ut;
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
          for (var s = Ne(Bt), c = s.next(); !c.done; c = s.next()) {
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
          for (var s = Ne(Ht), c = s.next(); !c.done; c = s.next()) {
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
        for (var n = Ne(Bt), s = n.next(); !s.done; s = n.next()) {
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
        for (var n = Ne(Ht), s = n.next(); !s.done; s = n.next()) {
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
            var a = t !== void 0 && Re.length > 0 && Re.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Re.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Re = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, c = e.cssClasses, a = c.FG_DEACTIVATION, o = c.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", p = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), x = b.startPoint, v = b.endPoint;
        m = x.x + "px, " + x.y + "px", p = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(n, m), this.adapter.updateCssVariable(s, p), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, s;
      n ? s = qr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      }, Ut.FG_DEACTIVATION_MS));
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
        var n = ke({}, r);
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
  }(Ii)
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
class Wr {
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
const Gt = /* @__PURE__ */ new WeakMap(), Ve = bt((i) => (e) => {
  if (!(e instanceof ye) || e instanceof vt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = Gt.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), Gt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new Wr(r);
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
const qt = /* @__PURE__ */ new WeakMap(), Xr = bt((i) => (e) => {
  if (!(e instanceof ye) || e instanceof vt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = qt.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), qt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in i || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in i)
    n.add(s), s.indexOf("-") === -1 ? r[s] = i[s] : r.setProperty(s, i[s]);
});
class P extends Ct {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = jr;
  }
  get isActive() {
    return zr(this.parentElement || this, ":active");
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ve(r)}"
          style="${Xr({
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
  j(".mdc-ripple-surface")
], P.prototype, "mdcRoot", void 0);
l([
  f({ type: Boolean })
], P.prototype, "primary", void 0);
l([
  f({ type: Boolean })
], P.prototype, "accent", void 0);
l([
  f({ type: Boolean })
], P.prototype, "unbounded", void 0);
l([
  f({ type: Boolean })
], P.prototype, "disabled", void 0);
l([
  f({ type: Boolean })
], P.prototype, "activated", void 0);
l([
  f({ type: Boolean })
], P.prototype, "selected", void 0);
l([
  f({ type: Boolean })
], P.prototype, "internalUseStateLayerCustomProperties", void 0);
l([
  E()
], P.prototype, "hovering", void 0);
l([
  E()
], P.prototype, "bgFocused", void 0);
l([
  E()
], P.prototype, "fgActivation", void 0);
l([
  E()
], P.prototype, "fgDeactivation", void 0);
l([
  E()
], P.prototype, "fgScale", void 0);
l([
  E()
], P.prototype, "fgSize", void 0);
l([
  E()
], P.prototype, "translateStart", void 0);
l([
  E()
], P.prototype, "translateEnd", void 0);
l([
  E()
], P.prototype, "leftPos", void 0);
l([
  E()
], P.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Kr = Le`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ct = class extends P {
};
ct.styles = [Kr];
ct = l([
  ae("mwc-ripple")
], ct);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Zr(i, e, t) {
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
function Et(i, e, t) {
  if (e !== void 0)
    return Zr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class wi extends Ct {
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
wi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Li {
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
const Xe = /* @__PURE__ */ new WeakMap(), pe = bt((i) => (e) => {
  const t = Xe.get(e);
  if (i === void 0 && e instanceof ye) {
    if (t !== void 0 || !Xe.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  Xe.set(e, i);
});
class $ extends wi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Li(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ve(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${pe(this.name)}"
              aria-checked="${pe(r)}"
              aria-label="${pe(this.ariaLabel)}"
              aria-labelledby="${pe(this.ariaLabelledBy)}"
              aria-describedby="${pe(this.ariaDescribedBy)}"
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
  j(".mdc-checkbox")
], $.prototype, "mdcRoot", void 0);
l([
  j("input")
], $.prototype, "formElement", void 0);
l([
  f({ type: Boolean, reflect: !0 })
], $.prototype, "checked", void 0);
l([
  f({ type: Boolean })
], $.prototype, "indeterminate", void 0);
l([
  f({ type: Boolean, reflect: !0 })
], $.prototype, "disabled", void 0);
l([
  f({ type: String, reflect: !0 })
], $.prototype, "name", void 0);
l([
  f({ type: String })
], $.prototype, "value", void 0);
l([
  Et,
  f({ type: String, attribute: "aria-label" })
], $.prototype, "ariaLabel", void 0);
l([
  Et,
  f({ type: String, attribute: "aria-labelledby" })
], $.prototype, "ariaLabelledBy", void 0);
l([
  Et,
  f({ type: String, attribute: "aria-describedby" })
], $.prototype, "ariaDescribedBy", void 0);
l([
  f({ type: Boolean })
], $.prototype, "reducedTouchTarget", void 0);
l([
  E()
], $.prototype, "animationClass", void 0);
l([
  E()
], $.prototype, "shouldRenderRipple", void 0);
l([
  E()
], $.prototype, "focused", void 0);
l([
  E()
], $.prototype, "useStateLayerCustomProperties", void 0);
l([
  Si("mwc-ripple")
], $.prototype, "ripple", void 0);
l([
  Fr({ passive: !0 })
], $.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Jr = Le`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let at = class extends $ {
};
at.styles = [Jr];
at = l([
  ae("mwc-checkbox")
], at);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const oe = (i) => (
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
class F extends ve {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Li(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
  j("slot")
], F.prototype, "slotElement", void 0);
l([
  Si("mwc-ripple")
], F.prototype, "ripple", void 0);
l([
  f({ type: String })
], F.prototype, "value", void 0);
l([
  f({ type: String, reflect: !0 })
], F.prototype, "group", void 0);
l([
  f({ type: Number, reflect: !0 })
], F.prototype, "tabindex", void 0);
l([
  f({ type: Boolean, reflect: !0 }),
  oe(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], F.prototype, "disabled", void 0);
l([
  f({ type: Boolean, reflect: !0 })
], F.prototype, "twoline", void 0);
l([
  f({ type: Boolean, reflect: !0 })
], F.prototype, "activated", void 0);
l([
  f({ type: String, reflect: !0 })
], F.prototype, "graphic", void 0);
l([
  f({ type: Boolean })
], F.prototype, "multipleGraphics", void 0);
l([
  f({ type: Boolean })
], F.prototype, "hasMeta", void 0);
l([
  f({ type: Boolean, reflect: !0 }),
  oe(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], F.prototype, "noninteractive", void 0);
l([
  f({ type: Boolean, reflect: !0 }),
  oe(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], F.prototype, "selected", void 0);
l([
  E()
], F.prototype, "shouldRenderRipple", void 0);
l([
  E()
], F.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Te extends F {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : g``, n = this.hasMeta && this.left ? this.renderMeta() : g``, s = this.renderRipple();
    return g`
      ${s}
      ${r}
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
      ${n}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
l([
  j("slot")
], Te.prototype, "slotElement", void 0);
l([
  j("mwc-checkbox")
], Te.prototype, "checkboxElement", void 0);
l([
  f({ type: Boolean })
], Te.prototype, "left", void 0);
l([
  f({ type: String, reflect: !0 })
], Te.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Qr = Le`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ti = Le`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ge = class extends Te {
};
ge.styles = [Ti, Qr];
ge = l([
  ae("mwc-check-list-item")
], ge);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ot = class extends F {
};
ot.styles = [Ti];
ot = l([
  ae("mwc-list-item")
], ot);
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
var y = {
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
B.add(y.BACKSPACE);
B.add(y.ENTER);
B.add(y.SPACEBAR);
B.add(y.PAGE_UP);
B.add(y.PAGE_DOWN);
B.add(y.END);
B.add(y.HOME);
B.add(y.ARROW_LEFT);
B.add(y.ARROW_UP);
B.add(y.ARROW_RIGHT);
B.add(y.ARROW_DOWN);
B.add(y.DELETE);
B.add(y.ESCAPE);
B.add(y.TAB);
var W = {
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
H.set(W.BACKSPACE, y.BACKSPACE);
H.set(W.ENTER, y.ENTER);
H.set(W.SPACEBAR, y.SPACEBAR);
H.set(W.PAGE_UP, y.PAGE_UP);
H.set(W.PAGE_DOWN, y.PAGE_DOWN);
H.set(W.END, y.END);
H.set(W.HOME, y.HOME);
H.set(W.ARROW_LEFT, y.ARROW_LEFT);
H.set(W.ARROW_UP, y.ARROW_UP);
H.set(W.ARROW_RIGHT, y.ARROW_RIGHT);
H.set(W.ARROW_DOWN, y.ARROW_DOWN);
H.set(W.DELETE, y.DELETE);
H.set(W.ESCAPE, y.ESCAPE);
H.set(W.TAB, y.TAB);
var de = /* @__PURE__ */ new Set();
de.add(y.PAGE_UP);
de.add(y.PAGE_DOWN);
de.add(y.END);
de.add(y.HOME);
de.add(y.ARROW_LEFT);
de.add(y.ARROW_UP);
de.add(y.ARROW_RIGHT);
de.add(y.ARROW_DOWN);
function ie(i) {
  var e = i.key;
  if (B.has(e))
    return e;
  var t = H.get(i.keyCode);
  return t || y.UNKNOWN;
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
var re, Y, A = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
re = {}, re["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", re["" + A.LIST_ITEM_CLASS] = "mdc-list-item", re["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", re["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", re["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", re["" + A.ROOT] = "mdc-list";
var fe = (Y = {}, Y["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Y["" + A.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Y["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Y["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Y["" + A.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Y["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Y["" + A.ROOT] = "mdc-deprecated-list", Y), De = {
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
    .` + fe[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + fe[A.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + A.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` a,
    .` + A.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + fe[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + fe[A.LIST_ITEM_CLASS] + ` a,
    .` + fe[A.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + fe[A.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, G = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const dt = (i, e) => i - e, Yr = (i, e) => {
  const t = Array.from(i), r = Array.from(e), n = { added: [], removed: [] }, s = t.sort(dt), c = r.sort(dt);
  let a = 0, o = 0;
  for (; a < s.length || o < c.length; ) {
    const d = s[a], m = c[o];
    if (d === m) {
      a++, o++;
      continue;
    }
    if (d !== void 0 && (m === void 0 || d < m)) {
      n.removed.push(d), a++;
      continue;
    }
    if (m !== void 0 && (d === void 0 || m < d)) {
      n.added.push(m), o++;
      continue;
    }
  }
  return n;
}, en = ["input", "button", "textarea", "select"];
function Ce(i) {
  return i instanceof Set;
}
const Ke = (i) => {
  const e = i === G.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return Ce(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class It extends Ii {
  constructor(e) {
    super(Object.assign(Object.assign({}, It.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = G.UNSET_INDEX, this.focusedItemIndex_ = G.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return De;
  }
  static get numbers() {
    return G;
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
      if (!Ce(t)) {
        const r = t === G.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Ce(t))
      if (t.size) {
        const r = Array.from(t).sort(dt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = G.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Ke(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = ie(e) === "ArrowLeft", s = ie(e) === "ArrowUp", c = ie(e) === "ArrowRight", a = ie(e) === "ArrowDown", o = ie(e) === "Home", d = ie(e) === "End", m = ie(e) === "Enter", p = ie(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || d ? (e.preventDefault(), this.focusLastElement()) : (a || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = r, b < 0))
      return;
    let x;
    if (this.isVertical_ && a || !this.isVertical_ && c)
      this.preventDefaultEvent(e), x = this.focusNextElement(b);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), x = this.focusPrevElement(b);
    else if (o)
      this.preventDefaultEvent(e), x = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), x = this.focusLastElement();
    else if ((m || p) && t) {
      const v = e.target;
      if (v && v.tagName === "A" && m)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, x !== void 0 && (this.setTabindexAtIndex_(x), this.focusedItemIndex_ = x);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, r) {
    e !== G.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    en.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== G.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const r = Ke(this.selectedIndex_), n = Yr(r, e);
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
    this.selectedIndex_ === G.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, De.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, r = t ? De.ARIA_CURRENT : De.ARIA_SELECTED;
    this.selectedIndex_ !== G.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === G.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== G.UNSET_INDEX ? e = this.selectedIndex_ : Ce(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === G.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, t) : t || r ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(G.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, r = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const s = Ke(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function tn(i, e = 50) {
  let t;
  return function(r = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(r);
    }, e);
  };
}
const Pe = (i) => i.hasAttribute("mwc-list-item");
function rn() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class X extends Ct {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = It, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = tn(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      rn.call(this), e(t);
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
      Pe(c) && (r.push(c), c._managingList = this), c.hasAttribute("divider") && !c.hasAttribute("role") && c.setAttribute("role", "separator");
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
    if (!Ce(e))
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
    return g`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${pe(e)}"
          aria-label="${pe(t)}"
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
      const t = this.getIndexOfTarget(e), r = e.target, n = Pe(r);
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
      if (Vr(n) && Pe(n) && (s = t.indexOf(n)), s !== -1)
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
      isFocusInsideList: () => Br(this),
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
    const e = Ei();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t];
      if (Pe(r))
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
  f({ type: String })
], X.prototype, "emptyMessage", void 0);
l([
  j(".mdc-deprecated-list")
], X.prototype, "mdcRoot", void 0);
l([
  ki("", !0, "*")
], X.prototype, "assignedElements", void 0);
l([
  ki("", !0, '[tabindex="0"]')
], X.prototype, "tabbableElements", void 0);
l([
  f({ type: Boolean }),
  oe(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], X.prototype, "activatable", void 0);
l([
  f({ type: Boolean }),
  oe(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], X.prototype, "multi", void 0);
l([
  f({ type: Boolean }),
  oe(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], X.prototype, "wrapFocus", void 0);
l([
  f({ type: String }),
  oe(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], X.prototype, "itemRoles", void 0);
l([
  f({ type: String })
], X.prototype, "innerRole", void 0);
l([
  f({ type: String })
], X.prototype, "innerAriaLabel", void 0);
l([
  f({ type: Boolean })
], X.prototype, "rootTabbable", void 0);
l([
  f({ type: Boolean, reflect: !0 }),
  oe(function(i) {
    var e, t;
    if (i) {
      const r = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], X.prototype, "noninteractive", void 0);
var nn = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, he = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? sn(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && nn(e, t, n), n;
};
function lt(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof Q ? i : lt(i.parentElement);
}
function cn(i, e) {
  const t = i.innerText + `
`, r = Array.from(i.children).map((a) => a.innerText).join(`
`), n = i.value, s = (t + r + n).toUpperCase(), c = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  c.length === 1 && c[0] === "" || c.every((a) => new RegExp(
    `*${a}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? lt(i).classList.remove("hidden") : lt(i).classList.add("hidden");
}
let Q = class extends X {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof ge);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof ge).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof ge).some((i) => i.selected);
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
      (i) => cn(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
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
        <abbr title="${this.searchFieldLabel ?? C("filter")}"
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
Q.styles = Le`
    ${Ai(er.styles)}

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
], Q.prototype, "searchFieldLabel", 2);
he([
  f({ type: Boolean })
], Q.prototype, "disableCheckAll", 2);
he([
  E()
], Q.prototype, "existCheckListItem", 1);
he([
  E()
], Q.prototype, "isAllSelected", 1);
he([
  E()
], Q.prototype, "isSomeSelected", 1);
he([
  j("mwc-textfield")
], Q.prototype, "searchField", 2);
Q = he([
  ae("filtered-list")
], Q);
function Ni(i, e, t) {
  const r = i.createElementNS(i.documentElement.namespaceURI, e);
  return Object.entries(t).filter(([n, s]) => s !== null).forEach(([n, s]) => r.setAttribute(n, s)), r;
}
function an(i, e) {
  const t = i.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? t.removeAttribute(r) : t.setAttribute(r, n);
  }), t;
}
function ue(i, e) {
  return i ? Array.from(i.children).filter(
    (t) => t.tagName === e
  ) : [];
}
var on = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, Z = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? dn(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && on(e, t, n), n;
};
let q = class extends Yi {
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(C("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${i === null ? C("textfield.noMultiplier") : i}</mwc-list-item
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
Z([
  f({ type: Boolean })
], q.prototype, "nullable", 2);
Z([
  f({ type: Array })
], q.prototype, "multipliers", 2);
Z([
  f({ type: String })
], q.prototype, "multiplier", 1);
Z([
  f({ type: String })
], q.prototype, "unit", 2);
Z([
  E()
], q.prototype, "null", 1);
Z([
  f({ type: String })
], q.prototype, "maybeValue", 1);
Z([
  f({ type: String })
], q.prototype, "defaultValue", 2);
Z([
  f({ type: Array })
], q.prototype, "reservedValues", 2);
Z([
  j("mwc-switch")
], q.prototype, "nullSwitch", 2);
Z([
  j("mwc-menu")
], q.prototype, "multiplierMenu", 2);
Z([
  j("mwc-icon-button")
], q.prototype, "multiplierButton", 2);
q = Z([
  ae("wizard-textfield")
], q);
var ln = Object.defineProperty, pn = Object.getOwnPropertyDescriptor, me = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? pn(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && ln(e, t, n), n;
};
let te = class extends tr {
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
me([
  f({ type: Boolean })
], te.prototype, "nullable", 2);
me([
  E()
], te.prototype, "null", 1);
me([
  f({ type: String })
], te.prototype, "maybeValue", 1);
me([
  f({ type: String })
], te.prototype, "defaultValue", 2);
me([
  f({ type: Array })
], te.prototype, "reservedValues", 2);
me([
  j("mwc-switch")
], te.prototype, "nullSwitch", 2);
te = me([
  ae("wizard-select")
], te);
var un = Object.defineProperty, hn = Object.getOwnPropertyDescriptor, K = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? hn(e, t) : e, s = i.length - 1, c; s >= 0; s--)
    (c = i[s]) && (n = (r ? c(e, t, n) : c(n)) || n);
  return r && n && un(e, t, n), n;
};
let U = class extends ve {
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
K([
  f({ type: String })
], U.prototype, "label", 2);
K([
  f({ type: String })
], U.prototype, "helper", 2);
K([
  f({ type: Boolean })
], U.prototype, "nullable", 2);
K([
  f({ type: Boolean })
], U.prototype, "defaultChecked", 2);
K([
  f({ type: String })
], U.prototype, "maybeValue", 1);
K([
  f({ type: Boolean })
], U.prototype, "disabled", 2);
K([
  E()
], U.prototype, "null", 1);
K([
  E()
], U.prototype, "checked", 1);
K([
  E()
], U.prototype, "deactivateCheckbox", 2);
K([
  E()
], U.prototype, "formfieldLabel", 1);
K([
  j("mwc-switch")
], U.prototype, "nullSwitch", 2);
K([
  j("mwc-checkbox")
], U.prototype, "checkbox", 2);
U = K([
  ae("wizard-checkbox")
], U);
function mn(i) {
  return typeof i == "function";
}
function fn(i) {
  return i instanceof q || i instanceof te || i instanceof U ? i.maybeValue : i.value ?? null;
}
function ze(i, e) {
  if (!i)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = mn(i) ? i : () => i;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
function bn(i) {
  let e = "", t = i.parentElement;
  for (; t?.getAttribute("name"); )
    e = "/" + t.getAttribute("name") + e, t = t.parentElement;
  return e;
}
function z(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const N = ":not(*)";
function gn(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function yn(i, e) {
  const [t, r] = e.split("	");
  return !t || !r ? N : `${i}[version="${t}"][revision="${r}"]`;
}
function jt(i) {
  return L(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function Wt(i, e) {
  const [t, r] = z(e), n = D[i].parents.flatMap(
    (s) => O(s, t).split(",")
  );
  return M(
    n,
    [">"],
    [`${i}[connectivityNode="${r}"]`]
  ).map((s) => s.join("")).join(",");
}
function vn(i) {
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
function xn(i, e) {
  if (e.endsWith(")")) {
    const [b, x] = z(e), [v, k, I] = x.substring(1, x.length - 1).split(" ");
    if (!v || !k) return N;
    const w = D[i].parents.flatMap(
      (R) => O(R, b).split(",")
    );
    return M(
      w,
      [">"],
      [`${i}[iedName="None"][lnClass="${v}"][lnType="${k}"][lnInst="${I}"]`]
    ).map((R) => R.join("")).join(",");
  }
  const [t, r, n, s, c] = e.split(/[ /]/);
  if (!t || !r || !s) return N;
  const [
    a,
    o,
    d,
    m,
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
    m,
    p
  ).map((b) => b.join("")).join(",");
}
function _n(i) {
  return `${L(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function Sn(i, e) {
  const [t, r] = z(e), [n, s] = r.split(" ");
  return `${O(
    "IED",
    t
  )}>${i}[iedName="${n}"][apName="${s}"]`;
}
function kn(i) {
  return `${L(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function An(i, e) {
  const [t, r] = z(e);
  return r ? `${O(
    "Server",
    t
  )}>${i}[associationID="${r}"]` : N;
}
function Cn(i) {
  return `${L(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function En(i, e) {
  const [t, r] = e.split(">>");
  return r ? `IED[name="${t}"] ${i}[inst="${r}"]` : N;
}
function In(i) {
  const e = i.textContent, [t, r, n, s, c] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => i.getAttribute(a));
  return `${L(i.parentElement)}>${e} ${t || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${c ?? ""}`;
}
function wn(i, e) {
  const [t, r] = z(e), [n, s, c, a, o, d] = r.split(/[ /]/), [
    m,
    p,
    b,
    x,
    v,
    k
  ] = [
    D[i].parents.flatMap(
      (I) => O(I, t).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    m,
    [">"],
    [i],
    p,
    b,
    x,
    v,
    k
  ).map((I) => I.join("")).join(",");
}
function Ln(i) {
  const [e, t, r, n, s, c, a, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => i.getAttribute(m)), d = `${e}/${t ?? ""} ${r} ${n ?? ""}.${s} ${c || ""}`;
  return `${L(i.parentElement)}>${d} (${a}${o ? " [" + o + "]" : ""})`;
}
function Tn(i, e) {
  const [t, r] = z(e), [n, s, c, a] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = o && o[1] ? o[1] : "", m = o && o[2] ? o[2] : "", p = r.match(/\(([A-Z]{2})/), b = r.match(/ \[([0-9]{1,2})\]/), x = p && p[1] ? p[1] : "", v = b && b[1] ? b[1] : "", [
    k,
    I,
    w,
    R,
    V,
    Be,
    He,
    Ge,
    qe
  ] = [
    D[i].parents.flatMap(
      (xe) => O(xe, t).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${x}"]`],
    v ? [`[ix="${v}"]`] : [":not([ix])", '[ix=""]']
  ];
  return M(
    k,
    [">"],
    [i],
    I,
    w,
    R,
    V,
    Be,
    He,
    Ge,
    qe
  ).map((xe) => xe.join("")).join(",");
}
function Nn(i) {
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
    m,
    p,
    b,
    x,
    v,
    k,
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
  ].map((V) => i.getAttribute(V)), w = I ? `${p}:${I} ${b ?? ""}/${x ?? ""} ${v ?? ""} ${k ?? ""}` : "", R = `${t} ${s}/${c ?? ""} ${a} ${o ?? ""} ${d} ${m || ""}`;
  return `${e}>${w ? w + " " : ""}${R}${r ? `@${r}` : ""}`;
}
function Rn(i, e) {
  const [t, r] = z(e), n = D[i].parents.flatMap(
    (_e) => O(_e, t).split(",")
  );
  if (r.endsWith("]")) {
    const [_e] = r.split("["), Ji = [`[intAddr="${_e}"]`];
    return M(n, [">"], [i], Ji).map((Qi) => Qi.join("")).join(",");
  }
  let s, c, a, o, d, m, p, b, x, v, k, I, w, R;
  !r.includes(":") && !r.includes("@") ? [s, c, a, o, d, m, p] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    b,
    x,
    v,
    k,
    I,
    w,
    s,
    c,
    a,
    o,
    d,
    m,
    p
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, c, a, o, d, m, p, R] = r.split(/[ /@]/) : [
    b,
    x,
    v,
    k,
    I,
    w,
    s,
    c,
    a,
    o,
    d,
    m,
    p,
    R
  ] = r.split(/[ /:@]/);
  const [
    V,
    Be,
    He,
    Ge,
    qe,
    xe,
    Hi,
    Gi,
    qi,
    ji,
    Wi,
    Xi,
    Ki,
    Zi
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    x ? [`[srcCBName="${x}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    v ? [`[srcLDInst="${v}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    I ? [`[srcLNClass="${I}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    w ? [`[srcLNInst="${w}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    R ? [`[intAddr="${R}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return M(
    n,
    [">"],
    [i],
    V,
    Be,
    He,
    Ge,
    qe,
    xe,
    Hi,
    Gi,
    qi,
    ji,
    Wi,
    Xi,
    Ki,
    Zi
  ).map((_e) => _e.join("")).join(",");
}
function Dn(i) {
  const [e, t, r] = ["prefix", "lnClass", "inst"].map(
    (n) => i.getAttribute(n)
  );
  return `${L(i.parentElement)}>${e ?? ""} ${t} ${r}`;
}
function Pn(i, e) {
  const [t, r] = z(e), n = D[i].parents.flatMap(
    (p) => O(p, t).split(",")
  ), [s, c, a] = r.split(" ");
  if (!c) return N;
  const [o, d, m] = [
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
    m
  ).map((p) => p.join("")).join(",");
}
function $n(i) {
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
function Fn(i, e) {
  const [t, r] = z(e), n = D[i].parents.flatMap(
    (w) => O(w, t).split(",")
  ), [s, c, a, o, d, m] = r.split(/[ /]/), [
    p,
    b,
    x,
    v,
    k,
    I
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    n,
    [">"],
    [i],
    p,
    b,
    x,
    v,
    k,
    I
  ).map((w) => w.join("")).join(",");
}
function Xt(i) {
  const [e, t] = ["name", "ix"].map((r) => i.getAttribute(r));
  return `${L(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function pt(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = z(e), [s, c, a, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!c) return N;
  if (t === 0) return `${i}[name="${c}"]`;
  const d = D[i].parents.flatMap(
    (b) => b === "SDI" ? pt(b, r, t - 1).split(",") : O(b, r).split(",")
  ).filter((b) => !b.startsWith(N));
  if (d.length === 0) return N;
  const [m, p] = [
    [`[name="${c}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return M(
    d,
    [">"],
    [i],
    m,
    p
  ).map((b) => b.join("")).join(",");
}
function On(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(i));
  return `${L(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function Mn(i, e) {
  const [t, r] = z(e), [n, s] = r.split(" "), c = parseFloat(s), a = D[i].parents.flatMap(
    (m) => O(m, t).split(",")
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
  ).map((m) => m.join("")).join(",");
}
function zn(i) {
  const [e, t] = ["iedName", "apName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function Vn(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? N : `${i}[iedName="${t}"][apName="${r}"]`;
}
function Kt(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function Zt(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? N : `${i}[ldInst="${t}"][cbName="${r}"]`;
}
function Un(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${L(i.parentElement)}>${e}`;
}
function Bn(i, e) {
  const [t, r] = z(e), [n, s] = [
    D[i].parents.flatMap(
      (c) => O(c, t).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return M(n, [">"], [i], s).map((c) => c.join("")).join(",");
}
function Hn(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${L(i.parentElement)}>${t}`;
  const r = Array.from(i.parentElement.children).filter((n) => n.getAttribute("type") === t).findIndex((n) => n.isSameNode(i));
  return `${L(i.parentElement)}>${t} [${r}]`;
}
function Gn(i, e) {
  const [t, r] = z(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [c, a, o] = [
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
function qn(i) {
  return `${L(i.parentElement)}>${i.getAttribute("ord")}`;
}
function jn(i, e) {
  const [t, r] = z(e);
  return `${O("EnumType", t)}>${i}[ord="${r}"]`;
}
function Wn(i) {
  return `${L(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function Xn(i, e) {
  const [t, r] = z(e), [n, s] = r.split("	"), [c] = [
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
function Kn() {
  return "";
}
function Zn() {
  return ":root";
}
function S(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${L(i.parentElement)}>${i.getAttribute("name")}`;
}
function _(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = z(e);
  if (!n) return N;
  if (t === 0) return `${i}[name="${n}"]`;
  const s = D[i].parents;
  if (!s) return N;
  const c = s.flatMap(
    (a) => D[a].selector === D.Substation.selector ? _(a, r, t - 1).split(",") : O(a, r).split(",")
  ).filter((a) => !a.startsWith(N));
  return c.length === 0 ? N : M(c, [">"], [i], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function u(i) {
  return L(i.parentElement).toString();
}
function h(i, e) {
  const t = D[i].parents;
  if (!t) return N;
  const r = t.flatMap((n) => O(n, e).split(",")).filter((n) => !n.startsWith(N));
  return r.length === 0 ? N : M(r, [">"], [i]).map((n) => n.join("")).join(",");
}
function $e(i) {
  return `#${i.id}`;
}
function Fe(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : N;
}
const Ri = [
  "TransformerWinding",
  "ConductingEquipment"
], Di = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Ri
], ut = ["Substation", "VoltageLevel", "Bay"], Pi = ["Process", "Line"], $i = ["EqSubFunction", "EqFunction"], Jn = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Di,
  ...ut,
  ...Pi,
  ...$i
], Fi = ["ConnectivityNode", ...Jn], Qn = ["GOOSESecurity", "SMVSecurity"], Yn = ["SubNetwork", ...Qn, ...Fi], es = ["BDA", "DA"], ts = ["SampledValueControl", "GSEControl"], is = ["LogControl", "ReportControl"], rs = [...ts, ...is], ns = ["GSE", "SMV"], ss = [
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
  ...rs,
  ...ns,
  ...es
], le = ["LN0", "LN"], cs = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], as = ["Subject", "IssuerName"], os = ["MinTime", "MaxTime"], ds = ["LNodeType", "DOType", "DAType", "EnumType"], ls = [
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
], ps = ["DynDataSet", "ConfDataSet"], us = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ps
], hs = ["ConfLogControl", "ConfSigRef"], ms = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], fs = ["SCL", ...Yn, ...ss, ...ds], Oi = [
  ...fs,
  ...cs,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...as,
  ...os,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...le,
  ...ls,
  "DynAssociation",
  "SettingGroups",
  ...us,
  ...hs,
  ...ms,
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
], bs = new Set(Oi);
function wt(i) {
  return bs.has(i);
}
const Ue = ["Text", "Private"], ne = [...Ue], T = [...Ue], Oe = [...Ue], Jt = [...T, "Val"], Mi = [...ne, "LNode"], ce = [...Mi], ht = [...ce], Ze = [
  ...ce,
  "PowerTransformer",
  "GeneralEquipment"
], Qt = [
  ...ht,
  "Terminal"
], Yt = [...T, "Address"], zi = [...ne], ei = [...zi, "IEDName"], ti = [
  ...T,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], ii = [
  ...ce,
  "GeneralEquipment",
  "Function"
], ri = [...zi, "TrgOps"], ni = [
  ...ce,
  "GeneralEquipment",
  "EqSubFunction"
], D = {
  AccessControl: {
    identity: u,
    selector: h,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: S,
    selector: _,
    parents: ["IED"],
    children: [
      ...ne,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: u,
    selector: h,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: kn,
    selector: An,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: u,
    selector: h,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: S,
    selector: _,
    parents: ["DAType"],
    children: [...Jt]
  },
  BitRate: {
    identity: u,
    selector: h,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: S,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...Ze,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: $n,
    selector: Fn,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: u,
    selector: h,
    parents: ["SCL"],
    children: [...T, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: S,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Qt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: u,
    selector: h,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: zn,
    selector: Vn,
    parents: ["SubNetwork"],
    children: [...T, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: S,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...Mi]
  },
  DA: {
    identity: S,
    selector: _,
    parents: ["DOType"],
    children: [...Jt]
  },
  DAI: {
    identity: Xt,
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
    parents: [...le],
    children: [...T, "SDI", "DAI"]
  },
  DOType: {
    identity: $e,
    selector: Fe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: S,
    selector: _,
    parents: [...le],
    children: [...ne, "FCDA"]
  },
  DataSetDirectory: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: u,
    selector: h,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: u,
    selector: h,
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
    identity: qn,
    selector: jn,
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
    children: [...ni]
  },
  EqSubFunction: {
    identity: S,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...ni]
  },
  ExtRef: {
    identity: Nn,
    selector: Rn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Ln,
    selector: Tn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: S,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...ce,
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
      ...Pi,
      ...$i,
      ...ut
    ],
    children: [...ht, "EqFunction"]
  },
  GetCBValues: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: S,
    selector: _,
    parents: ["AccessPoint"],
    children: [...ne, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Kt,
    selector: Zt,
    parents: ["ConnectedAP"],
    children: [...Yt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: S,
    selector: _,
    parents: ["LN0"],
    children: [...ei, "Protocol"]
  },
  GSESettings: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: u,
    selector: h,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: u,
    selector: h,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: gn,
    selector: yn,
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
    identity: In,
    selector: wn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: u,
    selector: h,
    parents: [...le],
    children: [...T, "ExtRef"]
  },
  IssuerName: {
    identity: u,
    selector: h,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: _n,
    selector: Sn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Cn,
    selector: En,
    parents: ["Server"],
    children: [...T, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Dn,
    selector: Pn,
    parents: ["AccessPoint", "LDevice"],
    children: [...ti]
  },
  LN0: {
    identity: u,
    selector: h,
    parents: ["LDevice"],
    children: [
      ...ti,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: vn,
    selector: xn,
    parents: [...Fi],
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
      ...ii,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: S,
    selector: _,
    parents: [...le],
    children: [...T]
  },
  LogControl: {
    identity: S,
    selector: _,
    parents: [...le],
    children: [...ri]
  },
  LogSettings: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: u,
    selector: h,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: u,
    selector: h,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: u,
    selector: h,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: jt,
    selector: Wt,
    parents: ["TransformerWinding"],
    children: [...T]
  },
  OptFields: {
    identity: u,
    selector: h,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Hn,
    selector: Gn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Un,
    selector: Bn,
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
    selector: () => N,
    parents: [],
    children: []
  },
  Process: {
    identity: S,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...ii,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Wn,
    selector: Xn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: u,
    selector: h,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: S,
    selector: _,
    parents: [...le],
    children: [...ri, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: u,
    selector: h,
    parents: ["ReportControl"],
    children: [...T, "ClientLN"]
  },
  SamplesPerSec: {
    identity: u,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: S,
    selector: _,
    parents: ["LN0"],
    children: [...ei, "SmvOpts"]
  },
  SecPerSamples: {
    identity: u,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Kn,
    selector: Zn,
    parents: [],
    children: [
      ...Ue,
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
    identity: Xt,
    selector: pt,
    parents: ["DOI", "SDI"],
    children: [...T, "SDI", "DAI"]
  },
  SDO: {
    identity: S,
    selector: _,
    parents: ["DOType"],
    children: [...ne]
  },
  Server: {
    identity: u,
    selector: h,
    parents: ["AccessPoint"],
    children: [
      ...T,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: u,
    selector: h,
    parents: ["AccessPoint"],
    children: [...T]
  },
  Services: {
    identity: u,
    selector: h,
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
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: u,
    selector: h,
    parents: ["LN0"],
    children: [...T]
  },
  SettingGroups: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: u,
    selector: h,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: u,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Kt,
    selector: Zt,
    parents: ["ConnectedAP"],
    children: [...Yt]
  },
  SmvOpts: {
    identity: u,
    selector: h,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: S,
    selector: _,
    parents: ["AccessPoint"],
    children: [...ne, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: u,
    selector: h,
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
      ...Ri
    ],
    children: [...ce, "EqFunction"]
  },
  SubFunction: {
    identity: S,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...ce,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: S,
    selector: _,
    parents: ["Communication"],
    children: [...ne, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: u,
    selector: h,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: S,
    selector: _,
    parents: ["SCL"],
    children: [...Ze, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: S,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...ce, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: jt,
    selector: Wt,
    parents: [...Di],
    children: [...T]
  },
  Text: {
    identity: u,
    selector: h,
    parents: Oi.filter((i) => i !== "Text" && i !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: u,
    selector: h,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: S,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...Qt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: u,
    selector: h,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: On,
    selector: Mn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: u,
    selector: h,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: S,
    selector: _,
    parents: ["Substation"],
    children: [...Ze, "Voltage", "Bay", "Function"]
  }
};
function O(i, e) {
  return typeof e != "string" ? N : wt(i) ? D[i].selector(i, e) : i;
}
function mt(i, e, t) {
  if (typeof t != "string" || !wt(e)) return null;
  const r = i.querySelector(D[e].selector(e, t));
  return r === null || ft(r) ? r : Array.from(
    i.querySelectorAll(D[e].selector(e, t))
  ).find(ft) ?? null;
}
function L(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return wt(e) ? D[e].identity(i) : NaN;
}
function M(...i) {
  return i.reduce(
    (e, t) => e.flatMap((r) => t.map((n) => [r, n].flat())),
    [[]]
  );
}
function ft(i) {
  return !i.closest("Private");
}
const gs = 99, ys = Array(gs).fill(1).map((i, e) => `${e + 1}`);
function vs(i) {
  const e = /* @__PURE__ */ new Map();
  return (t) => {
    if (!e.has(t)) {
      const r = new Set(
        ue(i, "LNode").filter((n) => n.getAttribute("lnClass") === t).map((n) => n.getAttribute("lnInst"))
      );
      e.set(t, () => {
        const n = ys.find((s) => !r.has(s));
        return n && r.add(n), n;
      });
    }
    return e.get(t)();
  };
}
const xs = {
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*"
};
function Je(i, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...i, ...e?.detail }
  });
}
function _s(i) {
  return (e, t, r) => {
    const n = r.items.filter((a) => a.selected).map((a) => a.value).map((a) => mt(i.ownerDocument, "LNodeType", a)).filter((a) => a !== null), s = vs(i);
    return n.map((a) => {
      const o = a.getAttribute("lnClass");
      if (!o) return null;
      const d = s(o);
      if (!d) {
        t.dispatchEvent(
          Je({
            kind: "error",
            title: C("lnode.log.title", { lnClass: o }),
            message: C("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = ue(i, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LLN0"
      );
      if (o === "LLN0" && m) {
        t.dispatchEvent(
          Je({
            kind: "error",
            title: C("lnode.log.title", { lnClass: o }),
            message: C("lnode.log.uniqueln0", { lnClass: o })
          })
        );
        return;
      }
      const p = ue(i, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LPHD"
      );
      if (o === "LPHD" && p) {
        t.dispatchEvent(
          Je({
            kind: "error",
            title: C("lnode.log.title", { lnClass: o }),
            message: C("lnode.log.uniqueln0", { lnClass: o })
          })
        );
        return;
      }
      const b = o === "LLN0" ? "" : d, x = Ni(i.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: o,
        lnInst: b,
        lnType: a.getAttribute("id")
      });
      return { new: { parent: i, element: x } };
    }).filter((a) => a);
  };
}
function Ss(i) {
  return (e) => {
    e.dispatchEvent(ze()), e.dispatchEvent(ze(Bi(i)));
  };
}
function Vi(i) {
  const e = Array.from(
    i.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: C("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: C("lnode.wizard.reference"),
          action: Ss(i)
        }
      ],
      primary: {
        icon: "save",
        label: C("save"),
        action: _s(i)
      },
      content: [
        g`<filtered-list multi
          >${e.map((t) => {
          const r = t.getAttribute("lnClass") === "LLN0" && ue(i, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LLN0"
          ) || t.getAttribute("lnClass") === "LPHD" && ue(i, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LPHD"
          );
          return g`<mwc-check-list-item
              twoline
              value="${L(t)}"
              ?disabled=${r}
              ><span>${t.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${r ? C("lnode.wizard.uniquewarning") : L(t)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const ks = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function Ui(i, e) {
  return i.disabled !== e.disabled ? e.disabled ? -1 : 1 : i.preferred !== e.preferred ? i.preferred ? -1 : 1 : i.selected !== e.selected ? i.selected ? -1 : 1 : 0;
}
const As = "Client LN";
function si(i, e) {
  return Array.from(i.getElementsByTagName("LNode")).filter((t) => !t.closest("Private")).filter((t) => Lt(e, t))[0] ?? null;
}
function Lt(i, e) {
  return (e.getAttribute("iedName") ?? "") === (i.closest("IED")?.getAttribute("name") ?? "") && (e.getAttribute("ldInst") ?? "") === (i.closest("LDevice")?.getAttribute("inst") ?? "") && (e.getAttribute("prefix") ?? "") === (i.getAttribute("prefix") ?? "") && (e.getAttribute("lnClass") ?? "") === (i.getAttribute("lnClass") ?? "") && (e.getAttribute("lnInst") ?? "") === (i.getAttribute("inst") ?? "");
}
function Cs(i, e) {
  const t = Ni(i.ownerDocument, "LNode", {
    iedName: e.closest("IED")?.getAttribute("name") ?? "",
    ldInst: e.closest("LDevice")?.getAttribute("inst") ?? "",
    prefix: e.getAttribute("prefix") ?? "",
    lnClass: e.getAttribute("lnClass") ?? "",
    lnInst: e.getAttribute("inst") ?? ""
  });
  return {
    new: {
      parent: i,
      element: t
    }
  };
}
function Es(i, e) {
  return {
    old: {
      parent: i,
      element: e,
      reference: e.nextElementSibling
    }
  };
}
function Is(i, e) {
  return i.some((t) => Lt(t, e));
}
function ws(i, e) {
  return e.some((t) => Lt(i, t));
}
function Ls(i) {
  return (e, t, r) => {
    const n = r.items.filter((o) => o.selected).map((o) => o.value).map((o) => {
      const d = mt(i.ownerDocument, "LN0", o);
      return d || mt(i.ownerDocument, "LN", o);
    }).filter((o) => o !== null), s = ue(i, "LNode").filter(
      ft
    ), c = s.filter((o) => !Is(n, o)).map((o) => Es(i, o)), a = n.filter((o) => !ws(o, s)).map((o) => Cs(i, o));
    return c.concat(a);
  };
}
function Ts(i, e) {
  return i.parentElement?.parentElement?.nextElementSibling?.querySelector(
    e
  ) ?? null;
}
function Ns(i, e) {
  if (!(i.target instanceof X)) return;
  const t = Ts(i.target, "#lnList");
  if (t === null) return;
  const r = e.ownerDocument, c = i.target.selected.flatMap(
    (a) => Array.from(
      r.querySelectorAll(
        `:root > IED[name="${a.value}"] > AccessPoint > LN,:root > IED[name="${a.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${a.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((o) => !o.closest("Private"))
  ).filter((a) => a !== null).map((a) => {
    const o = ks[e.getAttribute("type") ? e.getAttribute("type") ?? "" : e.tagName ?? ""]?.includes(a.getAttribute("lnClass") ?? "") ?? !1, d = si(e.ownerDocument, a), m = d?.parentElement === e;
    return {
      selected: m,
      disabled: d !== null && !m,
      prefered: o,
      element: a
    };
  }).sort(Ui).map((a) => g`<mwc-check-list-item
      ?selected=${a.selected}
      ?disabled=${a.disabled}
      value="${L(a.element)}"
      twoline
      ><span
        >${a.element.getAttribute("prefix") ?? ""}${a.element.getAttribute("lnClass")}${a.element.getAttribute(
    "inst"
  ) ?? ""}
        ${a.disabled ? g` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${bn(si(r, a.element))}` : ""}</span
      ><span slot="secondary"
        >${a.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${a.element.closest("LDevice") ? a.element.closest("LDevice")?.getAttribute("inst") : As}</span
      ></mwc-check-list-item
    >`);
  hi(g`${c}`, t);
}
function Rs(i) {
  const e = i.ownerDocument;
  return e.querySelectorAll(":root > IED").length > 0 ? g`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(t) => Ns(t, i)}
      >${Array.from(e.querySelectorAll(":root > IED")).map((t) => t.getAttribute("name")).map((t) => ({
    selected: Array.from(i.children).filter((r) => !r.closest("Private")).filter(
      (r) => r.tagName === "LNode" && r.getAttribute("iedName") === t
    ).length > 0,
    iedName: t
  })).sort(Ui).map(
    (t) => g`<mwc-check-list-item
              value="${t.iedName ?? ""}"
              ?selected=${t.selected}
              >${t.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : g`<mwc-list-item noninteractive graphic="icon">
      <span>${C("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Ds(i) {
  return (e) => {
    e.dispatchEvent(ze()), e.dispatchEvent(ze(Vi(i)));
  };
}
function Bi(i) {
  return [
    {
      title: C("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: C("lnode.wizard.instance"),
          action: Ds(i)
        }
      ],
      content: [Rs(i)]
    },
    {
      initial: Array.from(i.children).some(
        (e) => e.tagName === "LNode"
      ),
      title: C("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: C("save"),
        action: Ls(i)
      },
      content: [g`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Xs(i) {
  return i.tagName === "Function" || i.tagName === "SubFunction" || i.tagName === "EqFunction" || i.tagName === "EqSubFunction" ? Vi(i) : Bi(i);
}
function Ps(i) {
  const e = i.iedName !== "None";
  return [
    g`<wizard-textfield
      label="iedName"
      .maybeValue=${i.iedName}
      helper="${C("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    g`<wizard-textfield
      label="ldInst"
      .maybeValue=${i.ldInst}
      helper="${C("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    g`<wizard-textfield
      label="prefix"
      .maybeValue=${i.prefix}
      helper="${C("scl.prefix")}"
      pattern="${xs.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${e}
    ></wizard-textfield>`,
    g`<wizard-textfield
      label="lnClass"
      .maybeValue=${i.lnClass}
      helper="${C("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    g`<wizard-textfield
      label="lnInst"
      .maybeValue=${i.lnInst}
      helper="${C("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${i.reservedLnInst}
      ?disabled=${e}
    ></wizard-textfield>`
  ];
}
function $s(i) {
  return (e) => {
    const t = {}, r = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    r.forEach((s) => {
      t[s] = fn(e.find((c) => c.label === s));
    });
    let n = null;
    if (r.some((s) => t[s] !== i.getAttribute(s))) {
      const s = an(i, t);
      return n = {
        old: { element: i },
        new: { element: s }
      }, [n];
    }
    return [];
  };
}
function Ks(i) {
  const [e, t, r, n, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => i.getAttribute(a)), c = ue(
    i.parentElement,
    "LNode"
  ).filter(
    (a) => a !== i && a.getAttribute("lnClass") === i.getAttribute("lnClass")
  ).map((a) => a.getAttribute("lnInst"));
  return [
    {
      title: C("wizard.title.edit", { tagName: "LNode" }),
      element: i,
      primary: {
        label: C("save"),
        icon: "save",
        action: $s(i)
      },
      content: [
        ...Ps({
          iedName: e,
          ldInst: t,
          prefix: r,
          lnClass: n,
          lnInst: s,
          reservedLnInst: c
        })
      ]
    }
  ];
}
export {
  Ks as editLNodeWizard,
  si as getLNode,
  Xs as lNodeWizard,
  Ls as lNodeWizardAction
};
