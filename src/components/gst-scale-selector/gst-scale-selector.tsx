import { Component, Event, EventEmitter, Listen, Method } from "@stencil/core";

@Component({
  tag: 'gst-scale-selector',
  styleUrl: 'gst-scale-selector.css'
})
export class GstScaleSelector {

  @Event() gstScaleSelected: EventEmitter;
  private selectedScale: string = '1|-|-|b3|-|4|-|-|s5|-|b7';

  @Method()
  getScaleInterval() {

    return this.selectedScale;
  }

  @Listen('ionChange')
  handleIonChange(event: any) {

    if (!event) {
      return;
    }

    this.gstScaleSelected.emit({
      selectedScale: this.selectedScale
    });
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
                  <ion-select>
                    <ion-select-option></ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-col>
              <ion-col size='6'>
                <ion-item>
                  <ion-label position='stacked'>Scale</ion-label>
                  <ion-select>
                    <ion-select-option></ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-col>
              <ion-col size='4'>
                <ion-item>
                  <ion-label position='stacked'>Mode</ion-label>
                  <ion-select>
                    <ion-select-option></ion-select-option>
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