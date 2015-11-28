function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.toast/" + s : s.substring(0, index) + "/nl.fokkezb.toast/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    var Widget = new (require("alloy/widget"))("nl.fokkezb.toast");
    this.__widgetId = "nl.fokkezb.toast";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "global";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var defaults = {};
    !function(args) {
        defaults = args;
    }(arguments[0] || {});
    exports.show = exports.info = function(message, opts) {
        Widget.createController("widget", _.extend(defaults, {
            message: message
        }, opts || {}));
    };
    exports.warning = function(message, opts) {
        exports.show(message, _.extend({
            theme: "warning"
        }, opts || {}));
    };
    exports.error = function(message, opts) {
        exports.show(message, _.extend({
            theme: "error",
            persistent: true
        }, opts || {}));
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;