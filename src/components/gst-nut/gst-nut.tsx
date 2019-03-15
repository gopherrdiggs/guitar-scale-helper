import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: 'gst-nut',
  styleUrl: 'gst-nut.css'
})
export class GstNut {

  @Prop() noteData: string = 'E|A|D|G|B|E';

  @State() note1Data: string;
  @State() note2Data: string;
  @State() note3Data: string;
  @State() note4Data: string;
  @State() note5Data: string;
  @State() note6Data: string;

  componentWillLoad() {

    let splitRes = this.noteData.split('|');
    this.note1Data = splitRes[0];
    this.note2Data = splitRes[1];
    this.note3Data = splitRes[2];
    this.note4Data = splitRes[3];
    this.note5Data = splitRes[4];
    this.note6Data = splitRes[5];
  }

  render() {
    return [
      <div id='nutGrid'>
        <div></div>
        <gst-nutslot noteData={this.note6Data} class='nutTopBorder' />
        <gst-nutslot noteData={this.note5Data} />
        <gst-nutslot noteData={this.note4Data} />
        <gst-nutslot noteData={this.note3Data} />
        <gst-nutslot noteData={this.note2Data} />
        <gst-nutslot noteData={this.note1Data} class='nutBottomBorder' />
        <div></div>
      </div>
    ];
  }
}