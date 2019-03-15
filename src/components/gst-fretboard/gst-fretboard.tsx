import { Component, Method, State } from "@stencil/core";

@Component({
  tag: 'gst-fretboard',
  styleUrl: 'gst-fretboard.css'
})
export class GstFretboard {

  @State() currentTuning: string = 'E|A|D|G|B|E';

  @Method()
  async loadScale() {

  }

  render() {
    return [
      <ion-card>
        <ion-card-header color='secondary'>
          Guitar Fretboard
        </ion-card-header>
        <ion-card-content padding>
          <div id='fretboardGrid'>
            <gst-nut noteData='E.|A*|D.|G.|B|E.' />
            <gst-fret noteData='F|A#|D#|G#|C.|F' />
            <gst-fret noteData='F#|B|E|A|C#|F#' />
            <gst-fret showMarker markerNumber='3' />
            <gst-fret />
            <gst-fret showMarker markerNumber='5' />
            <gst-fret />
            <gst-fret showMarker markerNumber='7' />
            <gst-fret />
            <gst-fret showMarker markerNumber='9' />
            <gst-fret />
            <gst-fret />
            <gst-fret showMarker markerNumber='12' />
            <gst-fret />
            <gst-fret />
            <gst-fret showMarker markerNumber='15' />
            <gst-fret />
            <gst-fret showMarker markerNumber='17' />
            <gst-fret />
            <gst-fret showMarker markerNumber='19' />
            <gst-fret />
            <gst-fret showMarker markerNumber='21' />
            <gst-fret noteData='F|A#|D#|G#|C.|F' />
            <gst-saddle />
          </div>
        </ion-card-content>
      </ion-card>
    ];
  }
}