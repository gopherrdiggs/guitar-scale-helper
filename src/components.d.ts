/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import {
  Scale,
  ScaleMode,
} from './interfaces';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface GstFret {
    'markerNumber': string;
    'noteData': string;
    'showMarker': boolean;
  }
  interface GstFretAttributes extends StencilHTMLAttributes {
    'markerNumber'?: string;
    'noteData'?: string;
    'showMarker'?: boolean;
  }

  interface GstFretboard {
    'loadScale': () => Promise<void>;
  }
  interface GstFretboardAttributes extends StencilHTMLAttributes {}

  interface GstFretmarker {
    'markerNumber': string;
    'position': string;
  }
  interface GstFretmarkerAttributes extends StencilHTMLAttributes {
    'markerNumber'?: string;
    'position'?: string;
  }

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

  interface GstNut {
    'noteData': string;
  }
  interface GstNutAttributes extends StencilHTMLAttributes {
    'noteData'?: string;
  }

  interface GstNutslot {
    'noteData': string;
  }
  interface GstNutslotAttributes extends StencilHTMLAttributes {
    'noteData'?: string;
  }

  interface GstSaddle {
    'noteData': string;
  }
  interface GstSaddleAttributes extends StencilHTMLAttributes {
    'noteData'?: string;
  }

  interface GstSaddleslot {
    'noteData': string;
  }
  interface GstSaddleslotAttributes extends StencilHTMLAttributes {
    'noteData'?: string;
  }

  interface GstScaleSelector {
    'getScaleInterval': () => Scale;
  }
  interface GstScaleSelectorAttributes extends StencilHTMLAttributes {
    'onGstScaleSelected'?: (event: CustomEvent) => void;
  }

  interface GstModeSelectorModal {
    'scaleModes': ScaleMode[];
  }
  interface GstModeSelectorModalAttributes extends StencilHTMLAttributes {
    'scaleModes'?: ScaleMode[];
  }

  interface GstRootSelectorModal {}
  interface GstRootSelectorModalAttributes extends StencilHTMLAttributes {}

  interface GstScaleSelectorModal {}
  interface GstScaleSelectorModalAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppRoot': Components.AppRoot;
    'GstFret': Components.GstFret;
    'GstFretboard': Components.GstFretboard;
    'GstFretmarker': Components.GstFretmarker;
    'GstFretnote': Components.GstFretnote;
    'GstFretslot': Components.GstFretslot;
    'GstNut': Components.GstNut;
    'GstNutslot': Components.GstNutslot;
    'GstSaddle': Components.GstSaddle;
    'GstSaddleslot': Components.GstSaddleslot;
    'GstScaleSelector': Components.GstScaleSelector;
    'GstModeSelectorModal': Components.GstModeSelectorModal;
    'GstRootSelectorModal': Components.GstRootSelectorModal;
    'GstScaleSelectorModal': Components.GstScaleSelectorModal;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-root': Components.AppRootAttributes;
    'gst-fret': Components.GstFretAttributes;
    'gst-fretboard': Components.GstFretboardAttributes;
    'gst-fretmarker': Components.GstFretmarkerAttributes;
    'gst-fretnote': Components.GstFretnoteAttributes;
    'gst-fretslot': Components.GstFretslotAttributes;
    'gst-nut': Components.GstNutAttributes;
    'gst-nutslot': Components.GstNutslotAttributes;
    'gst-saddle': Components.GstSaddleAttributes;
    'gst-saddleslot': Components.GstSaddleslotAttributes;
    'gst-scale-selector': Components.GstScaleSelectorAttributes;
    'gst-mode-selector-modal': Components.GstModeSelectorModalAttributes;
    'gst-root-selector-modal': Components.GstRootSelectorModalAttributes;
    'gst-scale-selector-modal': Components.GstScaleSelectorModalAttributes;
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

  interface HTMLGstFretmarkerElement extends Components.GstFretmarker, HTMLStencilElement {}
  var HTMLGstFretmarkerElement: {
    prototype: HTMLGstFretmarkerElement;
    new (): HTMLGstFretmarkerElement;
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

  interface HTMLGstNutElement extends Components.GstNut, HTMLStencilElement {}
  var HTMLGstNutElement: {
    prototype: HTMLGstNutElement;
    new (): HTMLGstNutElement;
  };

  interface HTMLGstNutslotElement extends Components.GstNutslot, HTMLStencilElement {}
  var HTMLGstNutslotElement: {
    prototype: HTMLGstNutslotElement;
    new (): HTMLGstNutslotElement;
  };

  interface HTMLGstSaddleElement extends Components.GstSaddle, HTMLStencilElement {}
  var HTMLGstSaddleElement: {
    prototype: HTMLGstSaddleElement;
    new (): HTMLGstSaddleElement;
  };

  interface HTMLGstSaddleslotElement extends Components.GstSaddleslot, HTMLStencilElement {}
  var HTMLGstSaddleslotElement: {
    prototype: HTMLGstSaddleslotElement;
    new (): HTMLGstSaddleslotElement;
  };

  interface HTMLGstScaleSelectorElement extends Components.GstScaleSelector, HTMLStencilElement {}
  var HTMLGstScaleSelectorElement: {
    prototype: HTMLGstScaleSelectorElement;
    new (): HTMLGstScaleSelectorElement;
  };

  interface HTMLGstModeSelectorModalElement extends Components.GstModeSelectorModal, HTMLStencilElement {}
  var HTMLGstModeSelectorModalElement: {
    prototype: HTMLGstModeSelectorModalElement;
    new (): HTMLGstModeSelectorModalElement;
  };

  interface HTMLGstRootSelectorModalElement extends Components.GstRootSelectorModal, HTMLStencilElement {}
  var HTMLGstRootSelectorModalElement: {
    prototype: HTMLGstRootSelectorModalElement;
    new (): HTMLGstRootSelectorModalElement;
  };

  interface HTMLGstScaleSelectorModalElement extends Components.GstScaleSelectorModal, HTMLStencilElement {}
  var HTMLGstScaleSelectorModalElement: {
    prototype: HTMLGstScaleSelectorModalElement;
    new (): HTMLGstScaleSelectorModalElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-root': HTMLAppRootElement
    'gst-fret': HTMLGstFretElement
    'gst-fretboard': HTMLGstFretboardElement
    'gst-fretmarker': HTMLGstFretmarkerElement
    'gst-fretnote': HTMLGstFretnoteElement
    'gst-fretslot': HTMLGstFretslotElement
    'gst-nut': HTMLGstNutElement
    'gst-nutslot': HTMLGstNutslotElement
    'gst-saddle': HTMLGstSaddleElement
    'gst-saddleslot': HTMLGstSaddleslotElement
    'gst-scale-selector': HTMLGstScaleSelectorElement
    'gst-mode-selector-modal': HTMLGstModeSelectorModalElement
    'gst-root-selector-modal': HTMLGstRootSelectorModalElement
    'gst-scale-selector-modal': HTMLGstScaleSelectorModalElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'gst-fret': HTMLGstFretElement;
    'gst-fretboard': HTMLGstFretboardElement;
    'gst-fretmarker': HTMLGstFretmarkerElement;
    'gst-fretnote': HTMLGstFretnoteElement;
    'gst-fretslot': HTMLGstFretslotElement;
    'gst-nut': HTMLGstNutElement;
    'gst-nutslot': HTMLGstNutslotElement;
    'gst-saddle': HTMLGstSaddleElement;
    'gst-saddleslot': HTMLGstSaddleslotElement;
    'gst-scale-selector': HTMLGstScaleSelectorElement;
    'gst-mode-selector-modal': HTMLGstModeSelectorModalElement;
    'gst-root-selector-modal': HTMLGstRootSelectorModalElement;
    'gst-scale-selector-modal': HTMLGstScaleSelectorModalElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
