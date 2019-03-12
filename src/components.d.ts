/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'split-me';
import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface GstBridge {
    'bridgeData': string;
  }
  interface GstBridgeAttributes extends StencilHTMLAttributes {
    'bridgeData'?: string;
  }

  interface GstBridgeslot {
    'noteData': string;
  }
  interface GstBridgeslotAttributes extends StencilHTMLAttributes {
    'noteData'?: string;
  }

  interface GstFret {
    'fretData': string;
  }
  interface GstFretAttributes extends StencilHTMLAttributes {
    'fretData'?: string;
  }

  interface GstFretboard {}
  interface GstFretboardAttributes extends StencilHTMLAttributes {}

  interface GstFretnote {
    'isRoot': boolean;
    'isShown': boolean;
    'noteName': string;
  }
  interface GstFretnoteAttributes extends StencilHTMLAttributes {
    'isRoot'?: boolean;
    'isShown'?: boolean;
    'noteName'?: string;
  }

  interface GstFretslot {
    'noteData': string;
  }
  interface GstFretslotAttributes extends StencilHTMLAttributes {
    'noteData'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppRoot': Components.AppRoot;
    'GstBridge': Components.GstBridge;
    'GstBridgeslot': Components.GstBridgeslot;
    'GstFret': Components.GstFret;
    'GstFretboard': Components.GstFretboard;
    'GstFretnote': Components.GstFretnote;
    'GstFretslot': Components.GstFretslot;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-root': Components.AppRootAttributes;
    'gst-bridge': Components.GstBridgeAttributes;
    'gst-bridgeslot': Components.GstBridgeslotAttributes;
    'gst-fret': Components.GstFretAttributes;
    'gst-fretboard': Components.GstFretboardAttributes;
    'gst-fretnote': Components.GstFretnoteAttributes;
    'gst-fretslot': Components.GstFretslotAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLGstBridgeElement extends Components.GstBridge, HTMLStencilElement {}
  var HTMLGstBridgeElement: {
    prototype: HTMLGstBridgeElement;
    new (): HTMLGstBridgeElement;
  };

  interface HTMLGstBridgeslotElement extends Components.GstBridgeslot, HTMLStencilElement {}
  var HTMLGstBridgeslotElement: {
    prototype: HTMLGstBridgeslotElement;
    new (): HTMLGstBridgeslotElement;
  };

  interface HTMLGstFretElement extends Components.GstFret, HTMLStencilElement {}
  var HTMLGstFretElement: {
    prototype: HTMLGstFretElement;
    new (): HTMLGstFretElement;
  };

  interface HTMLGstFretboardElement extends Components.GstFretboard, HTMLStencilElement {}
  var HTMLGstFretboardElement: {
    prototype: HTMLGstFretboardElement;
    new (): HTMLGstFretboardElement;
  };

  interface HTMLGstFretnoteElement extends Components.GstFretnote, HTMLStencilElement {}
  var HTMLGstFretnoteElement: {
    prototype: HTMLGstFretnoteElement;
    new (): HTMLGstFretnoteElement;
  };

  interface HTMLGstFretslotElement extends Components.GstFretslot, HTMLStencilElement {}
  var HTMLGstFretslotElement: {
    prototype: HTMLGstFretslotElement;
    new (): HTMLGstFretslotElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-root': HTMLAppRootElement
    'gst-bridge': HTMLGstBridgeElement
    'gst-bridgeslot': HTMLGstBridgeslotElement
    'gst-fret': HTMLGstFretElement
    'gst-fretboard': HTMLGstFretboardElement
    'gst-fretnote': HTMLGstFretnoteElement
    'gst-fretslot': HTMLGstFretslotElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'gst-bridge': HTMLGstBridgeElement;
    'gst-bridgeslot': HTMLGstBridgeslotElement;
    'gst-fret': HTMLGstFretElement;
    'gst-fretboard': HTMLGstFretboardElement;
    'gst-fretnote': HTMLGstFretnoteElement;
    'gst-fretslot': HTMLGstFretslotElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
