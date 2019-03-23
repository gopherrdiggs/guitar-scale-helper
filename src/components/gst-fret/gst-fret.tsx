import { Component, Element, Prop, Method } from "@stencil/core";
import { findRelatedNote, isSharpOrFlat } from "../../helpers/utils";

@Component({
  tag: 'gst-fret',
  styleUrl: 'gst-fret.css'
})
export class GstFret {

  @Element() el: HTMLGstFretElement;
  @Prop() showMarker: boolean;
  @Prop() markerNumber: string;

  @Method()
  async load(keyNotes: string[], noteData: string[]) {
    
    let fretSlotElems = this.el.getElementsByTagName('gst-fretslot');

    for (let i = 0; i < fretSlotElems.length; i++) {

      if (noteData[i] === keyNotes[0]) {
        // Note is the root
        await fretSlotElems[i].load(noteData[i] + '*');
      }
      else if (keyNotes.includes(noteData[i])) {
        // Note is in key
        await fretSlotElems[i].load(noteData[i] + '.');
      }
      else if (isSharpOrFlat(noteData[i])
        && keyNotes.includes(findRelatedNote(noteData[i]))) {
        
        // Note is in key under a different name
        await fretSlotElems[i].load(noteData[i] + '.');
      }
      else {
        await fretSlotElems[i].load(noteData[i]);
      }
    }
  }

  getEquivalentNoteName(note: string) {

    switch (note) {
      case 'A#': return 'Bb';
      case 'Bb': return 'A#';
      case 'C#': return 'Db';
      case 'Db': return 'C#';
      case 'D#': return 'Eb';
      case 'Eb': return 'D#';
      case 'F#': return 'Gb';
      case 'Gb': return 'F#';
      case 'G#': return 'Ab';
      case 'Ab': return 'G#';
    }
  }

  render() {
    return [
      <div id='fretGrid'>
        { this.showMarker ? <gst-fretmarker markerNumber={this.markerNumber} /> : <div /> }
        <gst-fretslot id='fretslot_0' />
        <gst-fretslot id='fretslot_1' />
        <gst-fretslot id='fretslot_2' />
        <gst-fretslot id='fretslot_3' />
        <gst-fretslot id='fretslot_4' />
        <gst-fretslot id='fretslot_5' />
        { this.showMarker ? <gst-fretmarker markerNumber={this.markerNumber} position='bottom' /> : <div /> }
      </div>
    ];
  }
}