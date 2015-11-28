function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Window",
    style: {
        backgroundColor: "#f7f7f7"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TextField",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    }
}, {
    isApi: true,
    priority: 1000.0006,
    key: "View",
    style: {}
}, {
    isApi: true,
    priority: 1000.0007,
    key: "TableView",
    style: {}
}, {
    isApi: true,
    priority: 1000.0008,
    key: "TableViewRow",
    style: {}
}, {
    isApi: true,
    priority: 1000.0009,
    key: "ImageView",
    style: {
        preventDefaultImage: true
    }
}, {
    isApi: true,
    priority: 1000.0011,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: "18sp"
        },
        textAlign: "center"
    }
}, {
    isApi: true,
    priority: 1101.001,
    key: "Window",
    style: {
        barColor: "#54EE92",
        translucent: false,
        navTintColor: "white",
        titleAttributes: {
            color: "white"
        },
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
    }
}, {
    isApi: true,
    priority: 1101.0012000000002,
    key: "ListItem",
    style: {
        selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE
    }
}, {
    isClass: true,
    priority: 10000.0014,
    key: "container",
    style: {
        backgroundColor: "#f7f7f7"
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "SIZE",
    style: {
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "border",
    style: {
        height: 2,
        width: Titanium.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0017,
    key: "border1",
    style: {
        height: 1,
        width: Titanium.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0018,
    key: "sizeHeight",
    style: {
        height: Titanium.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "fillHeight",
    style: {
        height: Titanium.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "fillWidth",
    style: {
        width: Titanium.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0021,
    key: "hLay",
    style: {
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0022,
    key: "vLay",
    style: {
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0023,
    key: "bold",
    style: {
        font: {
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0024,
    key: "vgroup",
    style: {
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0025,
    key: "hgroup",
    style: {
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0026,
    key: "buffer",
    style: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    }
}, {
    isClass: true,
    priority: 10000.0027,
    key: "top-buffer",
    style: {
        top: 10
    }
}, {
    isClass: true,
    priority: 10000.0028,
    key: "left-buffer",
    style: {
        left: 10
    }
}, {
    isClass: true,
    priority: 10000.0029,
    key: "left-bufferXTwo",
    style: {
        left: 20
    }
}, {
    isClass: true,
    priority: 10000.003,
    key: "right-buffer",
    style: {
        right: 10
    }
}, {
    isClass: true,
    priority: 10000.0031,
    key: "bottom-buffer",
    style: {
        bottom: 10
    }
}, {
    isClass: true,
    priority: 10000.0032,
    key: "fill",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0033,
    key: "span-width",
    style: {
        width: "100%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0034,
    key: "span-height",
    style: {
        height: "100%",
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0035,
    key: "size",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0036,
    key: "bottom",
    style: {
        bottom: 0
    }
}, {
    isClass: true,
    priority: 10000.0037,
    key: "top",
    style: {
        top: 0
    }
}, {
    isClass: true,
    priority: 10000.0038,
    key: "right",
    style: {
        right: 0
    }
}, {
    isClass: true,
    priority: 10000.0039,
    key: "left",
    style: {
        left: 0
    }
}, {
    isClass: true,
    priority: 10000.004,
    key: "thumbnail",
    style: {
        height: 75,
        width: 75
    }
}, {
    isClass: true,
    priority: 10000.0041,
    key: "square100",
    style: {
        height: 100,
        width: 100
    }
}, {
    isClass: true,
    priority: 10000.0042,
    key: "square150",
    style: {
        height: 150,
        width: 150
    }
}, {
    isClass: true,
    priority: 10000.0043,
    key: "square200",
    style: {
        height: 200,
        width: 200
    }
}, {
    isClass: true,
    priority: 10000.0044,
    key: "square250",
    style: {
        height: 250,
        width: 250
    }
}, {
    isClass: true,
    priority: 10000.0045,
    key: "h1",
    style: {
        font: {
            fontSize: 36
        }
    }
}, {
    isClass: true,
    priority: 10000.0047,
    key: "h2",
    style: {
        font: {
            fontSize: 30
        }
    }
}, {
    isClass: true,
    priority: 10000.0049,
    key: "h3",
    style: {
        font: {
            fontSize: 24
        }
    }
}, {
    isClass: true,
    priority: 10000.0051,
    key: "h4",
    style: {
        font: {
            fontSize: 18
        }
    }
}, {
    isClass: true,
    priority: 10000.0053,
    key: "h5",
    style: {
        font: {
            fontSize: 14
        }
    }
}, {
    isClass: true,
    priority: 10000.0055,
    key: "h6",
    style: {
        font: {
            fontSize: 12
        }
    }
}, {
    isClass: true,
    priority: 10000.0057,
    key: "normal-text",
    style: {
        font: {
            fontSize: 14
        }
    }
}, {
    isClass: true,
    priority: 10000.0058,
    key: "small-text",
    style: {
        font: {
            fontSize: 10
        }
    }
}, {
    isClass: true,
    priority: 10000.0059,
    key: "large-text",
    style: {
        font: {
            fontSize: 18
        }
    }
}, {
    isClass: true,
    priority: 10000.006,
    key: "hide",
    style: {
        visible: false
    }
}, {
    isClass: true,
    priority: 10000.0061,
    key: "transparent",
    style: {
        opacity: .25
    }
}, {
    isClass: true,
    priority: 10000.0062,
    key: "white",
    style: {
        color: "white"
    }
}, {
    isClass: true,
    priority: 10000.0063,
    key: "black",
    style: {
        color: "#000"
    }
}, {
    isClass: true,
    priority: 10000.0064,
    key: "red",
    style: {
        color: "#ae331f"
    }
}, {
    isClass: true,
    priority: 10000.0065,
    key: "success",
    style: {
        color: "#468847",
        backgroundColor: "#dff0d8",
        borderColor: "#d6e9c6",
        border: 1
    }
}, {
    isClass: true,
    priority: 10000.0066,
    key: "error",
    style: {
        color: "#b94a48",
        backgroundColor: "#f2dede",
        borderColor: "#eed3d7",
        border: 1
    }
}, {
    isClass: true,
    priority: 10000.0067,
    key: "warn",
    style: {}
}, {
    isClass: true,
    priority: 10000.0068,
    key: "info",
    style: {
        color: "#3a87ad",
        backgroundColor: "#d9edf7",
        borderColor: "#bce8f1",
        border: 1
    }
}, {
    isClass: true,
    priority: 10000.0069,
    key: "border-dark",
    style: {
        border: 6,
        borderColor: "#666"
    }
}, {
    isClass: true,
    priority: 10000.007,
    key: "border-dark-thin",
    style: {
        border: 2,
        borderColor: "#666"
    }
}, {
    isClass: true,
    priority: 10000.0071,
    key: "border-dark-thick",
    style: {
        border: 10,
        borderColor: "#666"
    }
}, {
    isClass: true,
    priority: 10000.0072,
    key: "border-light",
    style: {
        border: 6,
        borderColor: "#ececec"
    }
}, {
    isClass: true,
    priority: 10000.0073,
    key: "border-light-thin",
    style: {
        border: 2,
        borderColor: "#ececec"
    }
}, {
    isClass: true,
    priority: 10000.0074,
    key: "border-light-thick",
    style: {
        border: 10,
        borderColor: "#ececec"
    }
}, {
    isClass: true,
    priority: 10000.0075,
    key: "black-line",
    style: {
        backgroundColor: "#000",
        width: Ti.UI.FILL,
        height: 1
    }
}, {
    isClass: true,
    priority: 10000.0076,
    key: "gray-line",
    style: {
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: 1
    }
}, {
    isClass: true,
    priority: 10000.0077,
    key: "white-line",
    style: {
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: 1
    }
}, {
    isClass: true,
    priority: 10000.0078,
    key: "ion-alert",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0079,
    key: "ion-alert-circled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.008,
    key: "ion-android-add",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0081,
    key: "ion-android-add-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0082,
    key: "ion-android-alarm-clock",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0083,
    key: "ion-android-alert",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0084,
    key: "ion-android-apps",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0085,
    key: "ion-android-archive",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0086,
    key: "ion-android-arrow-back",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0087,
    key: "ion-android-arrow-down",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0088,
    key: "ion-android-arrow-dropdown",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0089,
    key: "ion-android-arrow-dropdown-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.009,
    key: "ion-android-arrow-dropleft",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0091,
    key: "ion-android-arrow-dropleft-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0092,
    key: "ion-android-arrow-dropright",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0093,
    key: "ion-android-arrow-dropright-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0094,
    key: "ion-android-arrow-dropup",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0095,
    key: "ion-android-arrow-dropup-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0096,
    key: "ion-android-arrow-forward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0097,
    key: "ion-android-arrow-up",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0098,
    key: "ion-android-attach",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0099,
    key: "ion-android-bar",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.01,
    key: "ion-android-bicycle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0101,
    key: "ion-android-boat",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0102,
    key: "ion-android-bookmark",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0103,
    key: "ion-android-bulb",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0104,
    key: "ion-android-bus",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0105,
    key: "ion-android-calendar",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0106,
    key: "ion-android-call",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0107,
    key: "ion-android-camera",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0108,
    key: "ion-android-cancel",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0109,
    key: "ion-android-car",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.011,
    key: "ion-android-cart",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0111,
    key: "ion-android-chat",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0112,
    key: "ion-android-checkbox",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0113,
    key: "ion-android-checkbox-blank",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0114,
    key: "ion-android-checkbox-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0115,
    key: "ion-android-checkbox-outline-blank",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0116,
    key: "ion-android-checkmark-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0117,
    key: "ion-android-clipboard",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0118,
    key: "ion-android-close",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0119,
    key: "ion-android-cloud",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.012,
    key: "ion-android-cloud-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0121,
    key: "ion-android-cloud-done",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0122,
    key: "ion-android-cloud-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0123,
    key: "ion-android-color-palette",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0124,
    key: "ion-android-compass",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0125,
    key: "ion-android-contact",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0126,
    key: "ion-android-contacts",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0127,
    key: "ion-android-contract",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0128,
    key: "ion-android-create",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0129,
    key: "ion-android-delete",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.013,
    key: "ion-android-desktop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0131,
    key: "ion-android-document",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0132,
    key: "ion-android-done",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0133,
    key: "ion-android-done-all",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0134,
    key: "ion-android-download",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0135,
    key: "ion-android-drafts",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0136,
    key: "ion-android-exit",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0137,
    key: "ion-android-expand",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0138,
    key: "ion-android-favorite",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0139,
    key: "ion-android-favorite-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.014,
    key: "ion-android-film",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0141,
    key: "ion-android-folder",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0142,
    key: "ion-android-folder-open",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0143,
    key: "ion-android-funnel",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0144,
    key: "ion-android-globe",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0145,
    key: "ion-android-hand",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0146,
    key: "ion-android-hangout",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0147,
    key: "ion-android-happy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0148,
    key: "ion-android-home",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0149,
    key: "ion-android-image",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.015,
    key: "ion-android-laptop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0151,
    key: "ion-android-list",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0152,
    key: "ion-android-locate",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0153,
    key: "ion-android-lock",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0154,
    key: "ion-android-mail",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0155,
    key: "ion-android-map",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0156,
    key: "ion-android-menu",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0157,
    key: "ion-android-microphone",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0158,
    key: "ion-android-microphone-off",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0159,
    key: "ion-android-more-horizontal",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.016,
    key: "ion-android-more-vertical",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0161,
    key: "ion-android-navigate",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0162,
    key: "ion-android-notifications",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0163,
    key: "ion-android-notifications-none",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0164,
    key: "ion-android-notifications-off",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0165,
    key: "ion-android-open",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0166,
    key: "ion-android-options",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0167,
    key: "ion-android-people",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0168,
    key: "ion-android-person",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0169,
    key: "ion-android-person-add",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.017,
    key: "ion-android-phone-landscape",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0171,
    key: "ion-android-phone-portrait",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0172,
    key: "ion-android-pin",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0173,
    key: "ion-android-plane",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0174,
    key: "ion-android-playstore",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0175,
    key: "ion-android-print",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0176,
    key: "ion-android-radio-button-off",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0177,
    key: "ion-android-radio-button-on",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0178,
    key: "ion-android-refresh",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0179,
    key: "ion-android-remove",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.018,
    key: "ion-android-remove-circle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0181,
    key: "ion-android-restaurant",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0182,
    key: "ion-android-sad",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0183,
    key: "ion-android-search",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0184,
    key: "ion-android-send",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0185,
    key: "ion-android-settings",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0186,
    key: "ion-android-share",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0187,
    key: "ion-android-share-alt",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0188,
    key: "ion-android-star",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0189,
    key: "ion-android-star-half",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.019,
    key: "ion-android-star-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0191,
    key: "ion-android-stopwatch",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0192,
    key: "ion-android-subway",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0193,
    key: "ion-android-sunny",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0194,
    key: "ion-android-sync",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0195,
    key: "ion-android-textsms",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0196,
    key: "ion-android-time",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0197,
    key: "ion-android-train",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0198,
    key: "ion-android-unlock",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0199,
    key: "ion-android-upload",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.02,
    key: "ion-android-volume-down",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0201,
    key: "ion-android-volume-mute",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0202,
    key: "ion-android-volume-off",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0203,
    key: "ion-android-volume-up",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0204,
    key: "ion-android-walk",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0205,
    key: "ion-android-warning",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0206,
    key: "ion-android-watch",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0207,
    key: "ion-android-wifi",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0208,
    key: "ion-aperture",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0209,
    key: "ion-archive",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.021,
    key: "ion-arrow-down-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0211,
    key: "ion-arrow-down-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0212,
    key: "ion-arrow-down-c",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0213,
    key: "ion-arrow-expand",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0214,
    key: "ion-arrow-graph-down-left",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0215,
    key: "ion-arrow-graph-down-right",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0216,
    key: "ion-arrow-graph-up-left",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0217,
    key: "ion-arrow-graph-up-right",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0218,
    key: "ion-arrow-left-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0219,
    key: "ion-arrow-left-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.022,
    key: "ion-arrow-left-c",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0221,
    key: "ion-arrow-move",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0222,
    key: "ion-arrow-resize",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0223,
    key: "ion-arrow-return-left",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0224,
    key: "ion-arrow-return-right",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0225,
    key: "ion-arrow-right-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0226,
    key: "ion-arrow-right-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0227,
    key: "ion-arrow-right-c",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0228,
    key: "ion-arrow-shrink",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0229,
    key: "ion-arrow-swap",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.023,
    key: "ion-arrow-up-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0231,
    key: "ion-arrow-up-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0232,
    key: "ion-arrow-up-c",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0233,
    key: "ion-asterisk",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0234,
    key: "ion-at",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0235,
    key: "ion-backspace",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0236,
    key: "ion-backspace-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0237,
    key: "ion-bag",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0238,
    key: "ion-battery-charging",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0239,
    key: "ion-battery-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.024,
    key: "ion-battery-full",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0241,
    key: "ion-battery-half",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0242,
    key: "ion-battery-low",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0243,
    key: "ion-beaker",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0244,
    key: "ion-beer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0245,
    key: "ion-bluetooth",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0246,
    key: "ion-bonfire",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0247,
    key: "ion-bookmark",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0248,
    key: "ion-bowtie",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0249,
    key: "ion-briefcase",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.025,
    key: "ion-bug",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0251,
    key: "ion-calculator",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0252,
    key: "ion-calendar",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0253,
    key: "ion-camera",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0254,
    key: "ion-card",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0255,
    key: "ion-cash",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0256,
    key: "ion-chatbox",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0257,
    key: "ion-chatbox-working",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0258,
    key: "ion-chatboxes",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0259,
    key: "ion-chatbubble",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.026,
    key: "ion-chatbubble-working",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0261,
    key: "ion-chatbubbles",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0262,
    key: "ion-checkmark",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0263,
    key: "ion-checkmark-circled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0264,
    key: "ion-checkmark-round",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0265,
    key: "ion-chevron-down",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0266,
    key: "ion-chevron-left",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0267,
    key: "ion-chevron-right",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0268,
    key: "ion-chevron-up",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0269,
    key: "ion-clipboard",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.027,
    key: "ion-clock",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0271,
    key: "ion-close",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0272,
    key: "ion-close-circled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0273,
    key: "ion-close-round",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0274,
    key: "ion-closed-captioning",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0275,
    key: "ion-cloud",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0276,
    key: "ion-code",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0277,
    key: "ion-code-download",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0278,
    key: "ion-code-working",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0279,
    key: "ion-coffee",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.028,
    key: "ion-compass",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0281,
    key: "ion-compose",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0282,
    key: "ion-connection-bars",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0283,
    key: "ion-contrast",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0284,
    key: "ion-crop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0285,
    key: "ion-cube",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0286,
    key: "ion-disc",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0287,
    key: "ion-document",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0288,
    key: "ion-document-text",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0289,
    key: "ion-drag",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.029,
    key: "ion-earth",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0291,
    key: "ion-easel",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0292,
    key: "ion-edit",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0293,
    key: "ion-egg",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0294,
    key: "ion-eject",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0295,
    key: "ion-email",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0296,
    key: "ion-email-unread",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0297,
    key: "ion-erlenmeyer-flask",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0298,
    key: "ion-erlenmeyer-flask-bubbles",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0299,
    key: "ion-eye",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.03,
    key: "ion-eye-disabled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0301,
    key: "ion-female",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0302,
    key: "ion-filing",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0303,
    key: "ion-film-marker",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0304,
    key: "ion-fireball",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0305,
    key: "ion-flag",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0306,
    key: "ion-flame",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0307,
    key: "ion-flash",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0308,
    key: "ion-flash-off",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0309,
    key: "ion-folder",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.031,
    key: "ion-fork",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0311,
    key: "ion-fork-repo",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0312,
    key: "ion-forward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0313,
    key: "ion-funnel",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0314,
    key: "ion-gear-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0315,
    key: "ion-gear-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0316,
    key: "ion-grid",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0317,
    key: "ion-hammer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0318,
    key: "ion-happy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0319,
    key: "ion-happy-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.032,
    key: "ion-headphone",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0321,
    key: "ion-heart",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0322,
    key: "ion-heart-broken",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0323,
    key: "ion-help",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0324,
    key: "ion-help-buoy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0325,
    key: "ion-help-circled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0326,
    key: "ion-home",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0327,
    key: "ion-icecream",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0328,
    key: "ion-image",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0329,
    key: "ion-images",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.033,
    key: "ion-information",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0331,
    key: "ion-information-circled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0332,
    key: "ion-ionic",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0333,
    key: "ion-ios-alarm",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0334,
    key: "ion-ios-alarm-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0335,
    key: "ion-ios-albums",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0336,
    key: "ion-ios-albums-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0337,
    key: "ion-ios-americanfootball",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0338,
    key: "ion-ios-americanfootball-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0339,
    key: "ion-ios-analytics",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.034,
    key: "ion-ios-analytics-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0341,
    key: "ion-ios-arrow-back",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0342,
    key: "ion-ios-arrow-down",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0343,
    key: "ion-ios-arrow-forward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0344,
    key: "ion-ios-arrow-left",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0345,
    key: "ion-ios-arrow-right",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0346,
    key: "ion-ios-arrow-thin-down",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0347,
    key: "ion-ios-arrow-thin-left",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0348,
    key: "ion-ios-arrow-thin-right",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0349,
    key: "ion-ios-arrow-thin-up",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.035,
    key: "ion-ios-arrow-up",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0351,
    key: "ion-ios-at",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0352,
    key: "ion-ios-at-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0353,
    key: "ion-ios-barcode",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0354,
    key: "ion-ios-barcode-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0355,
    key: "ion-ios-baseball",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0356,
    key: "ion-ios-baseball-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0357,
    key: "ion-ios-basketball",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0358,
    key: "ion-ios-basketball-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0359,
    key: "ion-ios-bell",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.036,
    key: "ion-ios-bell-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0361,
    key: "ion-ios-body",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0362,
    key: "ion-ios-body-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0363,
    key: "ion-ios-bolt",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0364,
    key: "ion-ios-bolt-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0365,
    key: "ion-ios-book",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0366,
    key: "ion-ios-book-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0367,
    key: "ion-ios-bookmarks",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0368,
    key: "ion-ios-bookmarks-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0369,
    key: "ion-ios-box",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.037,
    key: "ion-ios-box-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0371,
    key: "ion-ios-briefcase",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0372,
    key: "ion-ios-briefcase-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0373,
    key: "ion-ios-browsers",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0374,
    key: "ion-ios-browsers-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0375,
    key: "ion-ios-calculator",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0376,
    key: "ion-ios-calculator-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0377,
    key: "ion-ios-calendar",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0378,
    key: "ion-ios-calendar-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0379,
    key: "ion-ios-camera",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.038,
    key: "ion-ios-camera-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0381,
    key: "ion-ios-cart",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0382,
    key: "ion-ios-cart-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0383,
    key: "ion-ios-chatboxes",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0384,
    key: "ion-ios-chatboxes-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0385,
    key: "ion-ios-chatbubble",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0386,
    key: "ion-ios-chatbubble-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0387,
    key: "ion-ios-checkmark",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0388,
    key: "ion-ios-checkmark-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0389,
    key: "ion-ios-checkmark-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.039,
    key: "ion-ios-circle-filled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0391,
    key: "ion-ios-circle-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0392,
    key: "ion-ios-clock",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0393,
    key: "ion-ios-clock-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0394,
    key: "ion-ios-close",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0395,
    key: "ion-ios-close-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0396,
    key: "ion-ios-close-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0397,
    key: "ion-ios-cloud",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0398,
    key: "ion-ios-cloud-download",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0399,
    key: "ion-ios-cloud-download-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.04,
    key: "ion-ios-cloud-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0401,
    key: "ion-ios-cloud-upload",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0402,
    key: "ion-ios-cloud-upload-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0403,
    key: "ion-ios-cloudy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0404,
    key: "ion-ios-cloudy-night",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0405,
    key: "ion-ios-cloudy-night-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0406,
    key: "ion-ios-cloudy-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0407,
    key: "ion-ios-cog",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0408,
    key: "ion-ios-cog-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0409,
    key: "ion-ios-color-filter",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.041,
    key: "ion-ios-color-filter-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0411,
    key: "ion-ios-color-wand",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0412,
    key: "ion-ios-color-wand-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0413,
    key: "ion-ios-compose",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0414,
    key: "ion-ios-compose-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0415,
    key: "ion-ios-contact",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0416,
    key: "ion-ios-contact-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0417,
    key: "ion-ios-copy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0418,
    key: "ion-ios-copy-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0419,
    key: "ion-ios-crop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.042,
    key: "ion-ios-crop-strong",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0421,
    key: "ion-ios-download",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0422,
    key: "ion-ios-download-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0423,
    key: "ion-ios-drag",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0424,
    key: "ion-ios-email",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0425,
    key: "ion-ios-email-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0426,
    key: "ion-ios-eye",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0427,
    key: "ion-ios-eye-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0428,
    key: "ion-ios-fastforward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0429,
    key: "ion-ios-fastforward-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.043,
    key: "ion-ios-filing",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0431,
    key: "ion-ios-filing-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0432,
    key: "ion-ios-film",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0433,
    key: "ion-ios-film-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0434,
    key: "ion-ios-flag",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0435,
    key: "ion-ios-flag-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0436,
    key: "ion-ios-flame",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0437,
    key: "ion-ios-flame-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0438,
    key: "ion-ios-flask",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0439,
    key: "ion-ios-flask-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.044,
    key: "ion-ios-flower",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0441,
    key: "ion-ios-flower-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0442,
    key: "ion-ios-folder",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0443,
    key: "ion-ios-folder-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0444,
    key: "ion-ios-football",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0445,
    key: "ion-ios-football-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0446,
    key: "ion-ios-game-controller-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0447,
    key: "ion-ios-game-controller-a-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0448,
    key: "ion-ios-game-controller-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0449,
    key: "ion-ios-game-controller-b-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.045,
    key: "ion-ios-gear",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0451,
    key: "ion-ios-gear-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0452,
    key: "ion-ios-glasses",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0453,
    key: "ion-ios-glasses-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0454,
    key: "ion-ios-grid-view",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0455,
    key: "ion-ios-grid-view-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0456,
    key: "ion-ios-heart",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0457,
    key: "ion-ios-heart-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0458,
    key: "ion-ios-help",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0459,
    key: "ion-ios-help-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.046,
    key: "ion-ios-help-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0461,
    key: "ion-ios-home",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0462,
    key: "ion-ios-home-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0463,
    key: "ion-ios-infinite",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0464,
    key: "ion-ios-infinite-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0465,
    key: "ion-ios-information",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0466,
    key: "ion-ios-information-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0467,
    key: "ion-ios-information-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0468,
    key: "ion-ios-ionic-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0469,
    key: "ion-ios-keypad",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.047,
    key: "ion-ios-keypad-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0471,
    key: "ion-ios-lightbulb",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0472,
    key: "ion-ios-lightbulb-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0473,
    key: "ion-ios-list",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0474,
    key: "ion-ios-list-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0475,
    key: "ion-ios-location",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0476,
    key: "ion-ios-location-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0477,
    key: "ion-ios-locked",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0478,
    key: "ion-ios-locked-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0479,
    key: "ion-ios-loop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.048,
    key: "ion-ios-loop-strong",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0481,
    key: "ion-ios-medical",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0482,
    key: "ion-ios-medical-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0483,
    key: "ion-ios-medkit",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0484,
    key: "ion-ios-medkit-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0485,
    key: "ion-ios-mic",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0486,
    key: "ion-ios-mic-off",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0487,
    key: "ion-ios-mic-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0488,
    key: "ion-ios-minus",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0489,
    key: "ion-ios-minus-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.049,
    key: "ion-ios-minus-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0491,
    key: "ion-ios-monitor",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0492,
    key: "ion-ios-monitor-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0493,
    key: "ion-ios-moon",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0494,
    key: "ion-ios-moon-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0495,
    key: "ion-ios-more",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0496,
    key: "ion-ios-more-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0497,
    key: "ion-ios-musical-note",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0498,
    key: "ion-ios-musical-notes",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0499,
    key: "ion-ios-navigate",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.05,
    key: "ion-ios-navigate-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0501,
    key: "ion-ios-nutrition",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0502,
    key: "ion-ios-nutrition-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0503,
    key: "ion-ios-paper",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0504,
    key: "ion-ios-paper-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0505,
    key: "ion-ios-paperplane",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0506,
    key: "ion-ios-paperplane-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0507,
    key: "ion-ios-partlysunny",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0508,
    key: "ion-ios-partlysunny-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0509,
    key: "ion-ios-pause",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.051,
    key: "ion-ios-pause-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0511,
    key: "ion-ios-paw",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0512,
    key: "ion-ios-paw-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0513,
    key: "ion-ios-people",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0514,
    key: "ion-ios-people-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0515,
    key: "ion-ios-person",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0516,
    key: "ion-ios-person-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0517,
    key: "ion-ios-personadd",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0518,
    key: "ion-ios-personadd-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0519,
    key: "ion-ios-photos",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.052,
    key: "ion-ios-photos-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0521,
    key: "ion-ios-pie",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0522,
    key: "ion-ios-pie-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0523,
    key: "ion-ios-pint",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0524,
    key: "ion-ios-pint-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0525,
    key: "ion-ios-play",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0526,
    key: "ion-ios-play-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0527,
    key: "ion-ios-plus",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0528,
    key: "ion-ios-plus-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0529,
    key: "ion-ios-plus-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.053,
    key: "ion-ios-pricetag",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0531,
    key: "ion-ios-pricetag-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0532,
    key: "ion-ios-pricetags",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0533,
    key: "ion-ios-pricetags-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0534,
    key: "ion-ios-printer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0535,
    key: "ion-ios-printer-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0536,
    key: "ion-ios-pulse",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0537,
    key: "ion-ios-pulse-strong",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0538,
    key: "ion-ios-rainy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0539,
    key: "ion-ios-rainy-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.054,
    key: "ion-ios-recording",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0541,
    key: "ion-ios-recording-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0542,
    key: "ion-ios-redo",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0543,
    key: "ion-ios-redo-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0544,
    key: "ion-ios-refresh",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0545,
    key: "ion-ios-refresh-empty",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0546,
    key: "ion-ios-refresh-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0547,
    key: "ion-ios-reload",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0548,
    key: "ion-ios-reverse-camera",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0549,
    key: "ion-ios-reverse-camera-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.055,
    key: "ion-ios-rewind",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0551,
    key: "ion-ios-rewind-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0552,
    key: "ion-ios-rose",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0553,
    key: "ion-ios-rose-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0554,
    key: "ion-ios-search",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0555,
    key: "ion-ios-search-strong",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0556,
    key: "ion-ios-settings",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0557,
    key: "ion-ios-settings-strong",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0558,
    key: "ion-ios-shuffle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0559,
    key: "ion-ios-shuffle-strong",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.056,
    key: "ion-ios-skipbackward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0561,
    key: "ion-ios-skipbackward-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0562,
    key: "ion-ios-skipforward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0563,
    key: "ion-ios-skipforward-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0564,
    key: "ion-ios-snowy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0565,
    key: "ion-ios-speedometer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0566,
    key: "ion-ios-speedometer-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0567,
    key: "ion-ios-star",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0568,
    key: "ion-ios-star-half",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0569,
    key: "ion-ios-star-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.057,
    key: "ion-ios-stopwatch",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0571,
    key: "ion-ios-stopwatch-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0572,
    key: "ion-ios-sunny",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0573,
    key: "ion-ios-sunny-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0574,
    key: "ion-ios-telephone",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0575,
    key: "ion-ios-telephone-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0576,
    key: "ion-ios-tennisball",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0577,
    key: "ion-ios-tennisball-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0578,
    key: "ion-ios-thunderstorm",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0579,
    key: "ion-ios-thunderstorm-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.058,
    key: "ion-ios-time",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0581,
    key: "ion-ios-time-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0582,
    key: "ion-ios-timer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0583,
    key: "ion-ios-timer-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0584,
    key: "ion-ios-toggle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0585,
    key: "ion-ios-toggle-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0586,
    key: "ion-ios-trash",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0587,
    key: "ion-ios-trash-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0588,
    key: "ion-ios-undo",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0589,
    key: "ion-ios-undo-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.059,
    key: "ion-ios-unlocked",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0591,
    key: "ion-ios-unlocked-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0592,
    key: "ion-ios-upload",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0593,
    key: "ion-ios-upload-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0594,
    key: "ion-ios-videocam",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0595,
    key: "ion-ios-videocam-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0596,
    key: "ion-ios-volume-high",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0597,
    key: "ion-ios-volume-low",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0598,
    key: "ion-ios-wineglass",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0599,
    key: "ion-ios-wineglass-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.06,
    key: "ion-ios-world",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0601,
    key: "ion-ios-world-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0602,
    key: "ion-ipad",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0603,
    key: "ion-iphone",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0604,
    key: "ion-ipod",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0605,
    key: "ion-jet",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0606,
    key: "ion-key",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0607,
    key: "ion-knife",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0608,
    key: "ion-laptop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0609,
    key: "ion-leaf",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.061,
    key: "ion-levels",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0611,
    key: "ion-lightbulb",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0612,
    key: "ion-link",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0613,
    key: "ion-load-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0614,
    key: "ion-load-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0615,
    key: "ion-load-c",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0616,
    key: "ion-load-d",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0617,
    key: "ion-location",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0618,
    key: "ion-lock-combination",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0619,
    key: "ion-locked",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.062,
    key: "ion-log-in",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0621,
    key: "ion-log-out",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0622,
    key: "ion-loop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0623,
    key: "ion-magnet",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0624,
    key: "ion-male",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0625,
    key: "ion-man",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0626,
    key: "ion-map",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0627,
    key: "ion-medkit",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0628,
    key: "ion-merge",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0629,
    key: "ion-mic-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.063,
    key: "ion-mic-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0631,
    key: "ion-mic-c",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0632,
    key: "ion-minus",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0633,
    key: "ion-minus-circled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0634,
    key: "ion-minus-round",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0635,
    key: "ion-model-s",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0636,
    key: "ion-monitor",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0637,
    key: "ion-more",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0638,
    key: "ion-mouse",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0639,
    key: "ion-music-note",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.064,
    key: "ion-navicon",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0641,
    key: "ion-navicon-round",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0642,
    key: "ion-navigate",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0643,
    key: "ion-network",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0644,
    key: "ion-no-smoking",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0645,
    key: "ion-nuclear",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0646,
    key: "ion-outlet",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0647,
    key: "ion-paintbrush",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0648,
    key: "ion-paintbucket",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0649,
    key: "ion-paper-airplane",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.065,
    key: "ion-paperclip",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0651,
    key: "ion-pause",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0652,
    key: "ion-person",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0653,
    key: "ion-person-add",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0654,
    key: "ion-person-stalker",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0655,
    key: "ion-pie-graph",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0656,
    key: "ion-pin",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0657,
    key: "ion-pinpoint",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0658,
    key: "ion-pizza",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0659,
    key: "ion-plane",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.066,
    key: "ion-planet",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0661,
    key: "ion-play",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0662,
    key: "ion-playstation",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0663,
    key: "ion-plus",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0664,
    key: "ion-plus-circled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0665,
    key: "ion-plus-round",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0666,
    key: "ion-podium",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0667,
    key: "ion-pound",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0668,
    key: "ion-power",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0669,
    key: "ion-pricetag",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.067,
    key: "ion-pricetags",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0671,
    key: "ion-printer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0672,
    key: "ion-pull-request",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0673,
    key: "ion-qr-scanner",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0674,
    key: "ion-quote",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0675,
    key: "ion-radio-waves",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0676,
    key: "ion-record",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0677,
    key: "ion-refresh",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0678,
    key: "ion-reply",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0679,
    key: "ion-reply-all",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.068,
    key: "ion-ribbon-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0681,
    key: "ion-ribbon-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0682,
    key: "ion-sad",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0683,
    key: "ion-sad-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0684,
    key: "ion-scissors",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0685,
    key: "ion-search",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0686,
    key: "ion-settings",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0687,
    key: "ion-share",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0688,
    key: "ion-shuffle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0689,
    key: "ion-skip-backward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.069,
    key: "ion-skip-forward",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0691,
    key: "ion-social-android",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0692,
    key: "ion-social-android-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0693,
    key: "ion-social-angular",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0694,
    key: "ion-social-angular-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0695,
    key: "ion-social-apple",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0696,
    key: "ion-social-apple-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0697,
    key: "ion-social-bitcoin",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0698,
    key: "ion-social-bitcoin-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0699,
    key: "ion-social-buffer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.07,
    key: "ion-social-buffer-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0701,
    key: "ion-social-chrome",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0702,
    key: "ion-social-chrome-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0703,
    key: "ion-social-codepen",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0704,
    key: "ion-social-codepen-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0705,
    key: "ion-social-css3",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0706,
    key: "ion-social-css3-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0707,
    key: "ion-social-designernews",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0708,
    key: "ion-social-designernews-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0709,
    key: "ion-social-dribbble",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.071,
    key: "ion-social-dribbble-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0711,
    key: "ion-social-dropbox",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0712,
    key: "ion-social-dropbox-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0713,
    key: "ion-social-euro",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0714,
    key: "ion-social-euro-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0715,
    key: "ion-social-facebook",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0716,
    key: "ion-social-facebook-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0717,
    key: "ion-social-foursquare",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0718,
    key: "ion-social-foursquare-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0719,
    key: "ion-social-freebsd-devil",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.072,
    key: "ion-social-github",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0721,
    key: "ion-social-github-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0722,
    key: "ion-social-google",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0723,
    key: "ion-social-google-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0724,
    key: "ion-social-googleplus",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0725,
    key: "ion-social-googleplus-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0726,
    key: "ion-social-hackernews",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0727,
    key: "ion-social-hackernews-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0728,
    key: "ion-social-html5",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0729,
    key: "ion-social-html5-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.073,
    key: "ion-social-instagram",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0731,
    key: "ion-social-instagram-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0732,
    key: "ion-social-javascript",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0733,
    key: "ion-social-javascript-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0734,
    key: "ion-social-linkedin",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0735,
    key: "ion-social-linkedin-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0736,
    key: "ion-social-markdown",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0737,
    key: "ion-social-nodejs",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0738,
    key: "ion-social-octocat",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0739,
    key: "ion-social-pinterest",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.074,
    key: "ion-social-pinterest-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0741,
    key: "ion-social-python",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0742,
    key: "ion-social-reddit",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0743,
    key: "ion-social-reddit-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0744,
    key: "ion-social-rss",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0745,
    key: "ion-social-rss-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0746,
    key: "ion-social-sass",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0747,
    key: "ion-social-skype",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0748,
    key: "ion-social-skype-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0749,
    key: "ion-social-snapchat",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.075,
    key: "ion-social-snapchat-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0751,
    key: "ion-social-tumblr",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0752,
    key: "ion-social-tumblr-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0753,
    key: "ion-social-tux",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0754,
    key: "ion-social-twitch",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0755,
    key: "ion-social-twitch-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0756,
    key: "ion-social-twitter",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0757,
    key: "ion-social-twitter-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0758,
    key: "ion-social-usd",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0759,
    key: "ion-social-usd-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.076,
    key: "ion-social-vimeo",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0761,
    key: "ion-social-vimeo-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0762,
    key: "ion-social-whatsapp",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0763,
    key: "ion-social-whatsapp-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0764,
    key: "ion-social-windows",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0765,
    key: "ion-social-windows-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0766,
    key: "ion-social-wordpress",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0767,
    key: "ion-social-wordpress-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0768,
    key: "ion-social-yahoo",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0769,
    key: "ion-social-yahoo-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.077,
    key: "ion-social-yen",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0771,
    key: "ion-social-yen-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0772,
    key: "ion-social-youtube",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0773,
    key: "ion-social-youtube-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0774,
    key: "ion-soup-can",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0775,
    key: "ion-soup-can-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0776,
    key: "ion-speakerphone",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0777,
    key: "ion-speedometer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0778,
    key: "ion-spoon",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0779,
    key: "ion-star",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.078,
    key: "ion-stats-bars",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0781,
    key: "ion-steam",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0782,
    key: "ion-stop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0783,
    key: "ion-thermometer",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0784,
    key: "ion-thumbsdown",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0785,
    key: "ion-thumbsup",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0786,
    key: "ion-toggle",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0787,
    key: "ion-toggle-filled",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0788,
    key: "ion-transgender",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0789,
    key: "ion-trash-a",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.079,
    key: "ion-trash-b",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0791,
    key: "ion-trophy",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0792,
    key: "ion-tshirt",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0793,
    key: "ion-tshirt-outline",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0794,
    key: "ion-umbrella",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0795,
    key: "ion-university",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0796,
    key: "ion-unlocked",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0797,
    key: "ion-upload",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0798,
    key: "ion-usb",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0799,
    key: "ion-videocamera",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.08,
    key: "ion-volume-high",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0801,
    key: "ion-volume-low",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0802,
    key: "ion-volume-medium",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0803,
    key: "ion-volume-mute",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0804,
    key: "ion-wand",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0805,
    key: "ion-waterdrop",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0806,
    key: "ion-wifi",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0807,
    key: "ion-wineglass",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0808,
    key: "ion-woman",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0809,
    key: "ion-wrench",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.081,
    key: "ion-xbox",
    style: {
        font: {
            fontFamily: "Ionicons"
        },
        text: "",
        title: ""
    }
}, {
    isClass: true,
    priority: 10000.0818,
    key: "loadingWindow",
    style: {
        backgroundColor: "transparent",
        backgroundImage: null,
        opacity: 1,
        navBarHidden: true,
        modal: false,
        theme: "Theme.AppCompat.Translucent.NoTitleBar"
    }
} ];