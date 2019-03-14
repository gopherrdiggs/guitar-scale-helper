import { Component, Event, EventEmitter, Listen, Method, State } from "@stencil/core";

@Component({
  tag: 'gst-scale-selector',
  styleUrl: 'gst-scale-selector.css'
})
export class GstScaleSelector {

  @Event() gstScaleSelected: EventEmitter;
  @State() selectedRoot: string;
  @State() selectedScale: string;
  @State() selectedModeInterval: string;

  @Method()
  getScaleInterval() {

    return this.selectedScale;
  }

  @Listen('ionChange')
  handleIonChange(event: any) {

    if (!event) {
      return;
    }

    console.log('select event', event);
    if (event.target.id === 'rootSelect') {
      this.selectedRoot = event.detail.value;
    }
    else if (event.target.id === 'scaleSelect') {
      this.selectedScale = event.detail.value;
    }
    else if (event.target.id === 'modeSelect') {
      this.selectedModeInterval = event.detail.value;
    }

    if (this.selectedRoot && this.selectedScale && this.selectedModeInterval) {
      this.gstScaleSelected.emit({
        root: this.selectedRoot,
        interval: this.selectedModeInterval
      });
    }
  }

  render() {
    return [
      <ion-card>
        <ion-card-header color='secondary'>
          Scale Selector
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size='2'>
                <ion-item>
                  <ion-label position='stacked'>Root</ion-label>
                  <ion-select id='rootSelect'>
                    <ion-select-option value='C'>C</ion-select-option>
                    <ion-select-option value='C#/Db'>C#/Db</ion-select-option>
                    <ion-select-option value='D'>D</ion-select-option>
                    <ion-select-option value='D#/Eb'>D#/Eb</ion-select-option>
                    <ion-select-option value='E'>E</ion-select-option>
                    <ion-select-option value='F'>C</ion-select-option>
                    <ion-select-option value='F#/Gb'>F#/Gb</ion-select-option>
                    <ion-select-option value='G'>G</ion-select-option>
                    <ion-select-option value='G#/Ab'>G#/Ab</ion-select-option>
                    <ion-select-option value='A'>A</ion-select-option>
                    <ion-select-option value='A#/Bb'>A#/Bb</ion-select-option>
                    <ion-select-option value='B'>B</ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-col>
              <ion-col size='6'>
                <ion-item>
                  <ion-label position='stacked'>Scale</ion-label>
                  <ion-select id='scaleSelect'>
                    <ion-select-option value='major'>Major</ion-select-option>
                    <ion-select-option value='pentatonic'>Pentatonic</ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-col>
              <ion-col size='4'>
                <ion-item>
                  <ion-label position='stacked'>Mode</ion-label>
                  <ion-select id='modeSelect'>
                    <ion-select-option value='1|-|2|-|3|4|-|5|-|6|-|7'>Ionian (Major)</ion-select-option>
                    <ion-select-option value='1|-|2|b3|-|4|-|5|-|6|b7'>Dorian</ion-select-option>
                    <ion-select-option value='1|b2|-|b3|-|4|-|5|b6|-|b7'>Phrygian</ion-select-option>
                    <ion-select-option value='1|-|2|-|3|-|s4|5|-|6|-|7'>Lydian</ion-select-option>
                    <ion-select-option value='1|-|2|-|3|4|-|5|-|6|b7'>Mixolydian</ion-select-option>
                    <ion-select-option value='1|-|2|b3|-|4|-|5|b6|-|b7'>Aeolian (Natural Minor)</ion-select-option>
                    <ion-select-option value='1|b2|-|b3|-|4|b5|-|b6|-|b7'>Locrian</ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    ];
  }
}