/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {
  property,
  declared,
  subclass
} from "esri/core/accessorSupport/decorators";
import Widget = require("esri/widgets/Widget");

import { tsx } from "esri/widgets/support/widget";

import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

const CSS = {
  base: "my-widget",

  // common.css
  esriWidget: "esri-widget"
};

@subclass("app.MyWidget")
class MyWidget extends declared(Widget) {
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
  constructor(params?: any) {
    super();
  }

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
  @property()
  view: MapView | SceneView = null;

  render() {
    return (
      <div bind={this} class={this.classes(CSS.base)}>
        I am a widget
      </div>
    );
  }
}

export = MyWidget;
