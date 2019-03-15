import { Component, Element, State, Method } from "@stencil/core";

@Component({
  tag: 'gst-nutslot',
  styleUrl: 'gst-nutslot.css'
})
export class GstNutslot {

  @Element() el: HTMLGstNutslotElement;
  @State() noteName: string;
  @State() isShown: boolean;
  @State() isRoot: boolean;
  
  @Method()
  async load(noteData: string) {

    // console.log('loading nutslot...', noteData);

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
      <div class='nutSlotContainer'>
        <div class='nutString'></div>
        <div class='nutNote'>
          <gst-fretnote />
        </div>
      </div>
    ];
  }
}