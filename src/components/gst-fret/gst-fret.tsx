import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: 'gst-fret',
  styleUrl: 'gst-fret.css'
})
export class GstFret {

  @Prop() noteData: string = 'E|A|D|G|B|E';
  @Prop() showMarker: boolean;
  @Prop() markerNumber: string;

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
      <div id='fretGrid'>
        { this.showMarker ? <gst-fretmarker markerNumber={this.markerNumber} /> : <div /> }
        <gst-fretslot noteData={this.note6Data} />
        <gst-fretslot noteData={this.note5Data} />
        <gst-fretslot noteData={this.note4Data} />
        <gst-fretslot noteData={this.note3Data} />
        <gst-fretslot noteData={this.note2Data} />
        <gst-fretslot noteData={this.note1Data} />
        { this.showMarker ? <gst-fretmarker markerNumber={this.markerNumber} position='bottom' /> : <div /> }
      </div>
    ];
  }
}