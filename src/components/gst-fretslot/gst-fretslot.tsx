import { Component, Element, State, Method } from "@stencil/core";

@Component({
  tag: 'gst-fretslot',
  styleUrl: 'gst-fretslot.css'
})
export class GstFretslot {
  
  @Element() el: HTMLGstFretslotElement;
  @State() noteName: string;
  @State() isShown: boolean;
  @State() isRoot: boolean;
  
  @Method()
  async load(noteData: string) {

    // console.log('loading fretslot...', noteData);

    if (noteData.indexOf('*') > 0) {
      let noteElem = this.el.querySelector('gst-fretnote') as HTMLGstFretnoteElement;
      await noteElem.load(noteData.replace('*', ''), true, true);
    }
    else if (noteData.indexOf('.') > 0) {
      let noteElem = this.el.querySelector('gst-fretnote') as HTMLGstFretnoteElement;
      await noteElem.load(noteData.replace('.', ''), true, false);
    }
    else {
      let noteElem = this.el.querySelector('gst-fretnote') as HTMLGstFretnoteElement;
      await noteElem.load(noteData, false, false);
    }
  }

  render() {
    return [
      <div class='fretSlotContainer'>
        <div class='fretString'></div>
        <div class='fretNote'>
          <gst-fretnote />
        </div>
      </div>
    ];
  }
}