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
            <gst-nut nutData='E.|A*|D.|G.|B|E.' />
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
            <gst-saddle />
          </div>
        </ion-card-content>
      </ion-card>
    ];
  }
}