import { Component } from "@stencil/core";

@Component({
  tag: 'gst-fretboard',
  styleUrl: 'gst-fretboard.css'
})
export class GstFretboard {

  render() {
    return [
      <ion-card>
        <ion-card-header color='secondary'>
          Guitar Fretboard
        </ion-card-header>
        <ion-card-content padding>
          <div id='fretboardGrid'>
            <gst-bridge bridgeData='E.|A*|D.|G.|B|E.' />
            <gst-fret fretData='F|A#|D#|G#|C.|F' />
            <gst-fret fretData='F#|B|E|A|C#|F#' />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
            <gst-fret />
          </div>
        </ion-card-content>
      </ion-card>
    ];
  }
}