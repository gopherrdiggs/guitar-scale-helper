import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'gst-fretmarker',
  styleUrl: 'gst-fretmarker.css'
})
export class GstFretmarker {

  @Prop() markerNumber: string;
  @Prop() position: string = 'top';

  render() {
    return [
      <div class={this.position === 'top' ? 'fretMarker top' : 'fretMarker bottom'}>
        <ion-label>{this.markerNumber}</ion-label>
      </div>
    ];
  }
}