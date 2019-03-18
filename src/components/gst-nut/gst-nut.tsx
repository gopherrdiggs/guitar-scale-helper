import { Component, Element, Method, State } from "@stencil/core";

@Component({
  tag: 'gst-nut',
  styleUrl: 'gst-nut.css'
})
export class GstNut {

  @Element() el: HTMLGstNutElement;
  @State() note1Data: string;
  @State() note2Data: string;
  @State() note3Data: string;
  @State() note4Data: string;
  @State() note5Data: string;
  @State() note6Data: string;

  @Method()
  async load(keyNotes: string, noteData: string) {

    // console.log('nut loading...', noteData);
    let keyNotesSplit = keyNotes.split('|');
    let noteDataSplit = noteData.split('|');

    let nutSlotElems = this.el.getElementsByTagName('gst-nutslot');

    for (let i = 0; i < nutSlotElems.length; i++) {

      if (noteDataSplit[i] === keyNotesSplit[0]) {
        // Note is the root
        await nutSlotElems[i].load(noteDataSplit[i] + '*');
      }
      else if (this.arrayContains(keyNotesSplit, noteDataSplit[i])) {
        // Note is in key
        await nutSlotElems[i].load(noteDataSplit[i] + '.');
      }
      else if (this.noteIsSharpOrFlat(noteDataSplit[i])
        && this.arrayContains(keyNotesSplit, this.getEquivalentNoteName(noteDataSplit[i]))) {
        
        // Note is in key under a different name
        await nutSlotElems[i].load(noteDataSplit[i] + '.');
      }
      else {
        await nutSlotElems[i].load(noteDataSplit[i]);
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
      <div id='nutGrid'>
        <div></div>
        <gst-nutslot class='nutTopBorder' />
        <gst-nutslot />
        <gst-nutslot />
        <gst-nutslot />
        <gst-nutslot />
        <gst-nutslot class='nutBottomBorder' />
        <div></div>
      </div>
    ];
  }
}