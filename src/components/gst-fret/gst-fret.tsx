import { Component, Element, Prop, Method } from "@stencil/core";

@Component({
  tag: 'gst-fret',
  styleUrl: 'gst-fret.css'
})
export class GstFret {

  @Element() el: HTMLGstFretElement;
  @Prop() showMarker: boolean;
  @Prop() markerNumber: string;

  @Method()
  async load(keyNotes: string, noteData: string) {

    // console.log('fret loading...', noteData);
    let keyNotesSplit = keyNotes.split('|');
    let noteDataSplit = noteData.split('|');
    
    let fretSlotElems = this.el.getElementsByTagName('gst-fretslot');

    for (let i = 0; i < fretSlotElems.length; i++) {

      if (noteDataSplit[i] === keyNotesSplit[0]) {
        // Note is the root
        await fretSlotElems[i].load(noteDataSplit[i] + '*');
      }
      else if (this.arrayContains(keyNotesSplit, noteDataSplit[i])) {
        // Note is in key
        await fretSlotElems[i].load(noteDataSplit[i] + '.');
      }
      else if (this.noteIsSharpOrFlat(noteDataSplit[i])
        && this.arrayContains(keyNotesSplit, this.getEquivalentNoteName(noteDataSplit[i]))) {
        
        // Note is in key under a different name
        await fretSlotElems[i].load(noteDataSplit[i] + '.');
      }
      else {
        await fretSlotElems[i].load(noteDataSplit[i]);
      }
    }
  }

  noteIsSharpOrFlat(note: string) {
    return note.indexOf('b') > -1 || note.indexOf('#') > -1;
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

  arrayContains(array: string[], search: string): boolean {

    for (let i = 0; i < array.length; i++) {
      if (array[i] === search) {
        return true;
      }
    }

    return false;
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