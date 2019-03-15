import { Component, Element, Method, State } from "@stencil/core";

@Component({
  tag: 'gst-fretboard',
  styleUrl: 'gst-fretboard.css'
})
export class GstFretboard {

  @Element() el: HTMLGstFretboardElement;
  @State() keyNotes: string = 'C|D|E|F|G|A|B';
  @State() currentTuning: string = 'E|A|D|G|B|E';
  @State() showFlats: boolean;

  private allNotesWithSharps = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
  private allNotesWithFlats = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

  @Method()
  async load(keyNotes: string) {

    console.log('loading scale with key: ', keyNotes);
    this.keyNotes = keyNotes;

    let currentTuningSplit = this.currentTuning.split('|');
    let stringNotes = [];

    // Tune each string to the current tuning
    for (let i = 0; i < 6; i++) {

      let notes = this.showFlats
        ? [...this.allNotesWithFlats]
        : [...this.allNotesWithSharps];

      while (currentTuningSplit[i] != notes[0]) {
        notes.push(notes.shift());
      }

      stringNotes.push(notes);
    }

    // Load frets with note arrays
    let nutElem = this.el.getElementsByTagName('gst-nut')[0] as HTMLGstNutElement;
    await nutElem.load(keyNotes, `${stringNotes[5][0]}|${stringNotes[4][0]}|${stringNotes[3][0]}|${stringNotes[2][0]}|${stringNotes[1][0]}|${stringNotes[0][0]}`);

    let fretElems = this.el.getElementsByTagName('gst-fret');

    for (let i = 0; i < fretElems.length; i++) {

      await fretElems[i].load(keyNotes, `${stringNotes[5][i+1]}|${stringNotes[4][i+1]}|${stringNotes[3][i+1]}|${stringNotes[2][i+1]}|${stringNotes[1][i+1]}|${stringNotes[0][i+1]}`);
    }

  }

  render() {
    return [
      <ion-card>
        <ion-card-header color='secondary'>
          Guitar Fretboard
        </ion-card-header>
        <ion-card-content padding>
          <div id='fretboardGrid'>
            <gst-nut id='fret_0' />
            <gst-fret id='fret_1' />
            <gst-fret id='fret_2' />
            <gst-fret id='fret_3' showMarker markerNumber='3' />
            <gst-fret id='fret_4' />
            <gst-fret id='fret_5' showMarker markerNumber='5' />
            <gst-fret id='fret_6' />
            <gst-fret id='fret_7' showMarker markerNumber='7' />
            <gst-fret id='fret_8' />
            <gst-fret id='fret_9' showMarker markerNumber='9' />
            <gst-fret id='fret_10' />
            <gst-fret id='fret_11' />
            <gst-fret id='fret_12' showMarker markerNumber='12' />
            <gst-fret id='fret_13' />
            <gst-fret id='fret_14' />
            <gst-fret id='fret_15' showMarker markerNumber='15' />
            <gst-fret id='fret_16' />
            <gst-fret id='fret_17' showMarker markerNumber='17' />
            <gst-fret id='fret_18' />
            <gst-fret id='fret_19' showMarker markerNumber='19' />
            <gst-fret id='fret_20' />
            <gst-fret id='fret_21' showMarker markerNumber='21' />
            <gst-fret id='fret_22' />
            <gst-fret id='fret_23' />
            <gst-fret id='fret_24' showMarker markerNumber='24' />
          </div>
        </ion-card-content>
      </ion-card>
    ];
  }
}