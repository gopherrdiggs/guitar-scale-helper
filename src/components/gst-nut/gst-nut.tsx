import { Component, Element, Method, State } from "@stencil/core";
import { findRelatedNote, isSharpOrFlat } from "../../helpers/utils";

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
  async load(keyNotes: string[], noteData: string[]) {

    let nutSlotElems = this.el.getElementsByTagName('gst-nutslot');

    for (let i = 0; i < nutSlotElems.length; i++) {

      if (noteData[i] === keyNotes[0]) {
        // Note is the root
        await nutSlotElems[i].load(noteData[i] + '*');
      }
      else if (keyNotes.includes(noteData[i])) {
        // Note is in key
        await nutSlotElems[i].load(noteData[i] + '.');
      }
      else if (isSharpOrFlat(noteData[i])
        && keyNotes.includes(findRelatedNote(noteData[i]))) {
        
        // Note is in key under a different name
        await nutSlotElems[i].load(noteData[i] + '.');
      }
      else {
        await nutSlotElems[i].load(noteData[i]);
      }
    }
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