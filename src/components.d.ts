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

  interface GstSlideSelect {
    'getSelectedValue': () => string;
    'initialSelectedIndex': number;
    'options': string[];
    'shiftLeft': () => void;
    'shiftRight': () => void;
  }
  interface GstSlideSelectAttributes extends StencilHTMLAttributes {
    'initialSelectedIndex'?: number;
    'options'?: string[];
  }

  interface GstFret {
    'load': (keyNotes: string[], noteData: string[]) => Promise<void>;
    'markerNumber': string;
    'showMarker': boolean;
  }
  interface GstFretAttributes extends StencilHTMLAttributes {
    'markerNumber'?: string;
    'showMarker'?: boolean;
  }

  interface GstFretboard {
    'load': (keyNotes: string) => Promise<void>;
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
    'hide': () => Promise<void>;
    'hideNoteName': () => Promise<void>;
    'load': (noteName: string, isShown: boolean, isRoot: boolean) => Promise<void>;
    'setNoteName': (noteName: string) => Promise<void>;
    'show': () => Promise<void>;
  }
  interface GstFretnoteAttributes extends StencilHTMLAttributes {}

  interface GstFretslot {
    'load': (noteData: string) => Promise<void>;
  }
  interface GstFretslotAttributes extends StencilHTMLAttributes {}

  interface GstNut {
    'load': (keyNotes: string[], noteData: string[]) => Promise<void>;
  }
  interface GstNutAttributes extends StencilHTMLAttributes {}

  interface GstNutslot {
    'load': (noteData: string) => Promise<void>;
  }
  interface GstNutslotAttributes extends StencilHTMLAttributes {}

  interface GstScaleSelector {
    'getScaleInterval': () => Scale;
  }
  interface GstScaleSelectorAttributes extends StencilHTMLAttributes {
    'onGstScaleSelected'?: (event: CustomEvent) => void;
  }

  interface GstEmptyMenuPopover {
    'menuContent': any;
  }
  interface GstEmptyMenuPopoverAttributes extends StencilHTMLAttributes {
    'menuContent'?: any;
  }

  interface GstModeSelectorModal {
    'scaleModes': ScaleMode[];
  }
  interface GstModeSelectorModalAttributes extends StencilHTMLAttributes {
    'scaleModes'?: ScaleMode[];
  }

  interface GstNoteNameSelectorModal {}
  interface GstNoteNameSelectorModalAttributes extends StencilHTMLAttributes {}

  interface GstRootSelectorModal {}
  interface GstRootSelectorModalAttributes extends StencilHTMLAttributes {}

  interface GstScaleSelectorModal {}
  interface GstScaleSelectorModalAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppRoot': Components.AppRoot;
    'GstSlideSelect': Components.GstSlideSelect;
    'GstFret': Components.GstFret;
    'GstFretboard': Components.GstFretboard;
    'GstFretmarker': Components.GstFretmarker;
    'GstFretnote': Components.GstFretnote;
    'GstFretslot': Components.GstFretslot;
    'GstNut': Components.GstNut;
    'GstNutslot': Components.GstNutslot;
    'GstScaleSelector': Components.GstScaleSelector;
    'GstEmptyMenuPopover': Components.GstEmptyMenuPopover;
    'GstModeSelectorModal': Components.GstModeSelectorModal;
    'GstNoteNameSelectorModal': Components.GstNoteNameSelectorModal;
    'GstRootSelectorModal': Components.GstRootSelectorModal;
    'GstScaleSelectorModal': Components.GstScaleSelectorModal;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-root': Components.AppRootAttributes;
    'gst-slide-select': Components.GstSlideSelectAttributes;
    'gst-fret': Components.GstFretAttributes;
    'gst-fretboard': Components.GstFretboardAttributes;
    'gst-fretmarker': Components.GstFretmarkerAttributes;
    'gst-fretnote': Components.GstFretnoteAttributes;
    'gst-fretslot': Components.GstFretslotAttributes;
    'gst-nut': Components.GstNutAttributes;
    'gst-nutslot': Components.GstNutslotAttributes;
    'gst-scale-selector': Components.GstScaleSelectorAttributes;
    'gst-empty-menu-popover': Components.GstEmptyMenuPopoverAttributes;
    'gst-mode-selector-modal': Components.GstModeSelectorModalAttributes;
    'gst-note-name-selector-modal': Components.GstNoteNameSelectorModalAttributes;
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

  interface HTMLGstSlideSelectElement extends Components.GstSlideSelect, HTMLStencilElement {}
  var HTMLGstSlideSelectElement: {
    prototype: HTMLGstSlideSelectElement;
    new (): HTMLGstSlideSelectElement;
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

  interface HTMLGstScaleSelectorElement extends Components.GstScaleSelector, HTMLStencilElement {}
  var HTMLGstScaleSelectorElement: {
    prototype: HTMLGstScaleSelectorElement;
    new (): HTMLGstScaleSelectorElement;
  };

  interface HTMLGstEmptyMenuPopoverElement extends Components.GstEmptyMenuPopover, HTMLStencilElement {}
  var HTMLGstEmptyMenuPopoverElement: {
    prototype: HTMLGstEmptyMenuPopoverElement;
    new (): HTMLGstEmptyMenuPopoverElement;
  };

  interface HTMLGstModeSelectorModalElement extends Components.GstModeSelectorModal, HTMLStencilElement {}
  var HTMLGstModeSelectorModalElement: {
    prototype: HTMLGstModeSelectorModalElement;
    new (): HTMLGstModeSelectorModalElement;
  };

  interface HTMLGstNoteNameSelectorModalElement extends Components.GstNoteNameSelectorModal, HTMLStencilElement {}
  var HTMLGstNoteNameSelectorModalElement: {
    prototype: HTMLGstNoteNameSelectorModalElement;
    new (): HTMLGstNoteNameSelectorModalElement;
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
    'gst-slide-select': HTMLGstSlideSelectElement
    'gst-fret': HTMLGstFretElement
    'gst-fretboard': HTMLGstFretboardElement
    'gst-fretmarker': HTMLGstFretmarkerElement
    'gst-fretnote': HTMLGstFretnoteElement
    'gst-fretslot': HTMLGstFretslotElement
    'gst-nut': HTMLGstNutElement
    'gst-nutslot': HTMLGstNutslotElement
    'gst-scale-selector': HTMLGstScaleSelectorElement
    'gst-empty-menu-popover': HTMLGstEmptyMenuPopoverElement
    'gst-mode-selector-modal': HTMLGstModeSelectorModalElement
    'gst-note-name-selector-modal': HTMLGstNoteNameSelectorModalElement
    'gst-root-selector-modal': HTMLGstRootSelectorModalElement
    'gst-scale-selector-modal': HTMLGstScaleSelectorModalElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'gst-slide-select': HTMLGstSlideSelectElement;
    'gst-fret': HTMLGstFretElement;
    'gst-fretboard': HTMLGstFretboardElement;
    'gst-fretmarker': HTMLGstFretmarkerElement;
    'gst-fretnote': HTMLGstFretnoteElement;
    'gst-fretslot': HTMLGstFretslotElement;
    'gst-nut': HTMLGstNutElement;
    'gst-nutslot': HTMLGstNutslotElement;
    'gst-scale-selector': HTMLGstScaleSelectorElement;
    'gst-empty-menu-popover': HTMLGstEmptyMenuPopoverElement;
    'gst-mode-selector-modal': HTMLGstModeSelectorModalElement;
    'gst-note-name-selector-modal': HTMLGstNoteNameSelectorModalElement;
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
