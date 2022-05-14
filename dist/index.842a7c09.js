// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1ehS1":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "863363d3842a7c09";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1Gfjc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _homeViewJs = require("./views/HomeView.js");
var _homeViewJsDefault = parcelHelpers.interopDefault(_homeViewJs);
var _aboutViewJs = require("./views/AboutView.js");
var _aboutViewJsDefault = parcelHelpers.interopDefault(_aboutViewJs);
var _projectsViewJs = require("./views/ProjectsView.js");
var _projectsViewJsDefault = parcelHelpers.interopDefault(_projectsViewJs);
var _contactViewJs = require("./views/ContactView.js");
var _contactViewJsDefault = parcelHelpers.interopDefault(_contactViewJs);
var _certificatesViewJs = require("./views/CertificatesView.js");
var _certificatesViewJsDefault = parcelHelpers.interopDefault(_certificatesViewJs);
const navigateTo = (url)=>{
    history.pushState(null, null, url);
    router();
};
const router = async ()=>{
    const routes = [
        {
            path: "/",
            view: _homeViewJsDefault.default
        },
        {
            path: "/about",
            view: _aboutViewJsDefault.default
        },
        {
            path: "/projects",
            view: _projectsViewJsDefault.default
        },
        {
            path: "/contact",
            view: _contactViewJsDefault.default
        },
        {
            path: "/certificates",
            view: _certificatesViewJsDefault.default
        }
    ]; //* Check each routes for match with URL params
    const potentialMatches = routes.map((route)=>{
        return {
            route,
            isMatch: location.pathname === route.path
        };
    }); // return boolean, get which is true
    let match = potentialMatches.find((potentialMacth)=>potentialMacth.isMatch
    );
    if (!match) match = {
        route: routes[0],
        isMatch: true
    };
    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
};
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", (e)=>{
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});

},{"./views/HomeView.js":"03s1w","./views/AboutView.js":"hrae9","./views/ProjectsView.js":"3DAf5","./views/ContactView.js":"3Ol3e","./views/CertificatesView.js":"lk8Cs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03s1w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _abstractViewJs = require("./AbstractView.js");
var _abstractViewJsDefault = parcelHelpers.interopDefault(_abstractViewJs);
class HomeView extends _abstractViewJsDefault.default {
    constructor(){
        super();
        this.setTitle("Diego's space");
    }
    async getHtml() {
        return `
			<section class="home">
				<h2>Hey, They Call Me</h2>
				<h1 class="home__name">
					Diego <span class="home__name--last">El Rey </span>
				</h1>
				<h2>
					<span class="home__name--last">Web Developer</span>, JS and React
					Apprentice
				</h2>

				<div class="social-icons">
					<a href="/certificates" data-link>
						<i class="fa-solid fa-book-bookmark fa-2x"></i>
					</a>
					<a
						href="https://www.facebook.com/Diegoess77"
						target="_blank"
						id="facebook"
					>
						<i class="fab fa-facebook fa-2x"></i>
					</a>
					<a href="https://www.linkedin.com/in/dimitar-dimitrov-b381a51a4/" target="_blank">
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>
					<a href="https://github.com/Diegoes7" target="_blank" id="github">
						<i class="fab fa-github fa-2x"></i>
					</a>
				</div>
				<footer class="footer">&copy; Copyright 2022</footer>
			</section>    
        `;
    }
}
exports.default = HomeView;

},{"./AbstractView.js":"6PRkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PRkE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AbstractView {
    constructor(){}
    setTitle(title) {
        document.title = title;
    }
    async getHtml() {
        return "";
    }
}
exports.default = AbstractView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hrae9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _abstractViewJs = require("./AbstractView.js");
var _abstractViewJsDefault = parcelHelpers.interopDefault(_abstractViewJs);
class AboutView extends _abstractViewJsDefault.default {
    constructor(){
        super();
        this.setTitle("history");
    }
    async getHtml() {
        return `
			<section class="about">
				<div class="about__bio-image">
					<div class="about__bio">
						<h2 class="text-secondary">BIO</h2>
						<p>
							Born and raised in shattered world, split by Cataclyms. Didn't remember much of my childhood. My first memory is in the castle, where I was trained by best monster hunters in the realm. My body and my soul was broken, went to endless hardships. Trials and constant training make me the way I am now. Life in castle transform me in a miraculous way, forged me in a unstoppable weapon. Now I travel and look for advnture and gold, of course.
						</p>
					</div>
				</div>

				<div class="jobs">
					<div class="jobs__job">
						<h2 class="text-secondary">201 ac - Current</h2>
						<h3>King Foltest</h3>
						<h6>Monser hunter</h6>
						<p>
							Pretty much killing what monter show in my way. Standard staff, nothing fancy. Guard villeges from attacks. It's a llitle bit borring, but the pay is good, wine too.
						</p>
					</div>
					<div class="jobs__job">
						<h2 class="text-secondary">184 ac - 200 ac</h2>
						<h3>No particular employer</h3>
						<h6>Freelancer</h6>
						<p>
							Get what job, jump araound the corner. Somethimes have monster to slay, sometimes just calm the people fears. In a very rare cases have gold.In some cases lift curses, save lives, that's better than killing, but rare in these lands. Complete 777 assignments, lucky number, right.
						</p>
					</div>
					<div class="jobs__job">
						<h2 class="text-secondary">170 ac - 177 ac</h2>
						<h3>King Emhyr</h3>
						<h6>Butcher</h6>
						<p>
							In my early days, I was a little bit unexpitienced hunter and most of the time left behind me a pretty big mess.Cross the country and kill monsters, most of the time.  
						</p>
					</div>
				</div>
			</section>
        
        
        `;
    }
}
exports.default = AboutView;

},{"./AbstractView.js":"6PRkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DAf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _abstractViewJs = require("./AbstractView.js"); // import images from 'url:..';
var _abstractViewJsDefault = parcelHelpers.interopDefault(_abstractViewJs);
class ProjectsView extends _abstractViewJsDefault.default {
    constructor(){
        super();
        this.setTitle("endeavours");
    }
    async getHtml() {
        return `
        <section class="projects">
				<div class="projects__bio-image">
					<h1 class="text-secondary">Endeavours</h1>
				</div>

				<div class="projects__items">
					<div class="projects__item">
                        <h2>Lord Cloths</h2>
						<img src="./project-1.jpg" />
						<div class="projects__btns">
							<a
								href="https://thriving-capybara-92904c.netlify.app"
								target="_blank" class="projects__btn"
							>
								<i class="fas fa-eye"></i> Preview
							</a>
							<a
								href="https://github.com/Diegoes7/lord-cloths"
								target="_blank" class="projects__btn"
							>
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Recipes App</h2>
						<img src="./project-2.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="https://recipe-power-up.netlify.app" class="projects__btn" target="_blank">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="https://github.com/Diegoes7/recipe-app" class="projects__btn" target="_blank">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Beast Collection</h2>
						<img src="./project-3.jpg" target="_blank" alt="My Project" />
						<div class="projects__btns">
							<a href="https://resilient-basbousa-65e249.netlify.app" class="projects__btn" target="_blank">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="https://github.com/Diegoes7/ferocious-beast" class="projects__btn" target="_blank">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Rolling Dices</h2>
						<img src="./project-4.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="https://objective-morse-15d0b2.netlify.app" class="projects__btn" target="_blank">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="https://github.com/Diegoes7/RollingDices" class="projects__btn">
								<i class="fab fa-github" target="_blank"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Title</h2>
						<img src="./project-5.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="#!" class="projects__btn">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="#!" class="projects__btn">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
					<div class="projects__item">
                      <h2>Title</h2>
						<img src="./project-6.jpg" alt="My Project" />
						<div class="projects__btns">
							<a href="#!" class="projects__btn">
								<i class="fas fa-eye"></i> Preview
							</a>
							<a href="#!" class="projects__btn">
								<i class="fab fa-github"></i> Github
							</a>
						</div>
					</div>
				</div>
			</section>    
        `;
    }
}
exports.default = ProjectsView;

},{"./AbstractView.js":"6PRkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ol3e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _abstractViewJs = require("./AbstractView.js");
var _abstractViewJsDefault = parcelHelpers.interopDefault(_abstractViewJs);
class ContactView extends _abstractViewJsDefault.default {
    constructor(){
        super();
        this.setTitle("summon");
    }
    async getHtml() {
        return `
            <section class="contact">
				<h2>Contact Me 📑</h2>

				<div class="contact__list">
					<div class="contact__email">
						<i class="fas fa-envelope"></i> Ravens Sv.
						<div class="text-secondary">diego@hunter.rv</div>
					</div>
					<div class="contact__phone">
						<i class="fas fa-mobile-alt"></i> Call incantation
						<div class="text-secondary">7🌗 (7💰) 7⚔7-7👾7</div>
					</div>
					<div class="contact__address">
						<i class="fas fa-marker-alt"></i> Address
						<div class="text-secondary">Kaer Morhen, Kaedwen mnt</div>
					</div>
				</div>

				<div class="social-icons">
					<a href="/certificates">
						<i class="fa-solid fa-book-bookmark fa-2x"></i>
					</a>
					<a
						href="https://www.facebook.com/Diegoess77"
						target="_blank"
						id="facebook"
					>
						<i class="fab fa-facebook fa-2x"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/dimitar-dimitrov-b381a51a4/"
						target="_blank"
					>
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>
					<a href="https://github.com/Diegoes7" target="_blank" id="github">
						<i class="fab fa-github fa-2x"></i>
					</a>
				</div>
			</section>
    `;
    }
}
exports.default = ContactView;

},{"./AbstractView.js":"6PRkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lk8Cs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _abstractViewJs = require("./AbstractView.js");
var _abstractViewJsDefault = parcelHelpers.interopDefault(_abstractViewJs);
class CertificatesView extends _abstractViewJsDefault.default {
    constructor(){
        super();
        this.setTitle("achievements");
    }
    async getHtml() {
        return `
    <div class="certificates"> 
        <h1 class="achive_title">Achivements</h1>
            <div class="certificates__achive">
                <section class="section_achive">
                    <h2>React Challenge  ✔</h2>
                    <div>
                        <img
                            src="./react-certificate.jpg"
                            alt="😈"
                        />
                    </div>
                </section>
                <section class="section_achive">
                    <h2>JavaScript Challenge ✔</h2>
                    <div>
                        <img src="./UC-C2D9W0QB.jpg" alt="😈" />
                    </div>
                </section>
                <section class="section_achive">
                    <h2>Algorithms &amp Data Structures  ✔</h2>
                    <div>
                        <img src="./master-Algo-DataStructure.jpg" alt="😈" />
                    </div>
                </section>
        </div>
        `;
    }
}
exports.default = CertificatesView;

},{"./AbstractView.js":"6PRkE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1ehS1","1Gfjc"], "1Gfjc", "parcelRequire2041")

//# sourceMappingURL=index.842a7c09.js.map
