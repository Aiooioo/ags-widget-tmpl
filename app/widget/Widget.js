/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "my-widget",
        // common.css
        esriWidget: "esri-widget"
    };
    var MyWidget = /** @class */ (function (_super) {
        __extends(MyWidget, _super);
        //--------------------------------------------------------------------------
        //
        //  Lifecycle
        //
        //--------------------------------------------------------------------------
        /**
         * @constructor
         * @extends module:esri/widgets/Widget
         * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
         *                                that may be passed into the constructor.
         */
        function MyWidget(params) {
            var _this = _super.call(this) || this;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            /**
             * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
             *
             * @type {module:esri/views/MapView | module:esri/views/SceneView}
             * @name view
             * @instance
             */
            _this.view = null;
            return _this;
        }
        MyWidget.prototype.render = function () {
            return (widget_1.tsx("div", { bind: this, class: this.classes(CSS.base) }, "I am a widget"));
        };
        __decorate([
            decorators_1.property()
        ], MyWidget.prototype, "view", void 0);
        MyWidget = __decorate([
            decorators_1.subclass("app.MyWidget")
        ], MyWidget);
        return MyWidget;
    }(decorators_1.declared(Widget)));
    return MyWidget;
});
//# sourceMappingURL=Widget.js.map