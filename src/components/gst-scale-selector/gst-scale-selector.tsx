import { Component, Event, EventEmitter, Method, State } from "@stencil/core";
import { Scale, ScaleMode, ScaleCategory } from "../../interfaces";

@Component({
  tag: 'gst-scale-selector',
  styleUrl: 'gst-scale-selector.css'
})
export class GstScaleSelector {

  @Event() gstScaleSelected: EventEmitter;

  @State() scaleModes: ScaleMode[] = [];
  @State() selectedRoot: string = 'C';
  @State() selectedScale: Scale;
  @State() selectedMode: ScaleMode;

  private modalController: HTMLIonModalControllerElement;

  async componentWillLoad() {
    
    let getScaleDataResponse = await fetch('/assets/data/scaleData.json');
    let scaleCategories: ScaleCategory[] = await getScaleDataResponse.json();
    this.selectedScale = scaleCategories[0].scales[0];
    this.selectedMode = this.selectedScale.modes[0];
    this.gstScaleSelected.emit({
      root: this.selectedRoot,
      interval: this.selectedMode.intervalDefinition
    });
  }

  componentDidLoad() {

    this.modalController = document.querySelector('ion-modal-controller');
  }

  @Method()
  getScaleInterval() {

    return this.selectedScale;
  }

  async displayRootSelectorModal() {

    let modal = await this.modalController.create({
      component: 'gst-root-selector-modal'
    });

    modal.onDidDismiss().then((event) => {

      if (!event || !event.data) { return }

      this.selectedRoot = event.data.selectedRoot;

      if (this.selectedMode) {
        this.gstScaleSelected.emit({
          root: this.selectedRoot,
          interval: this.selectedMode.intervalDefinition
        });
      }
    });

    await modal.present();
  }

  async displayScaleSelectorModal() {

    let modal = await this.modalController.create({
      component: 'gst-scale-selector-modal'
    });

    modal.onDidDismiss().then((event) => {

      if (!event || !event.data) { return }

      this.selectedScale = event.data.selectedScale;
      this.scaleModes = [...event.data.selectedScale.modes];
      this.selectedMode = this.scaleModes[0];
      
      if (this.selectedRoot && this.selectedMode) {
        this.gstScaleSelected.emit({
          root: this.selectedRoot,
          interval: this.selectedMode.intervalDefinition
        });
      }
    });

    await modal.present();
  }

  async displayModeSelectorModal() {
    
    let modal = await this.modalController.create({
      component: 'gst-mode-selector-modal',
      componentProps: {
        scaleModes: this.selectedScale.modes
      }
    });

    modal.onDidDismiss().then((event) => {

      if (!event || !event.data) { return }
      
      this.selectedMode = event.data.selectedMode;

      if (this.selectedRoot) {
        this.gstScaleSelected.emit({
          root: this.selectedRoot,
          interval: this.selectedMode.intervalDefinition
        });
      }
    })

    await modal.present();
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
              <ion-col sizeXs='12' sizeSm='12' sizeMd='3' sizeLg='2' sizeXl='2'>
                <ion-item>
                  <ion-label position='stacked'>Root</ion-label>
                  <ion-input readonly placeholder='Select a root' 
                             value={this.selectedRoot}></ion-input>
                  <ion-button slot='end' fill='clear'
                              onClick={()=>this.displayRootSelectorModal()}>
                    <ion-icon slot='icon-only' name='arrow-dropdown' />
                  </ion-button>
                </ion-item>
              </ion-col>
              <ion-col sizeXs='12' sizeSm='12' sizeMd='5' sizeLg='2' sizeXl='2'>
                <ion-item>
                  <ion-label position='stacked'>Scale</ion-label>
                  <ion-input readonly placeholder='Select a scale' 
                             value={this.selectedScale ? this.selectedScale.name : ''}></ion-input>
                  <ion-button slot='end' fill='clear'
                              onClick={()=>this.displayScaleSelectorModal()}>
                    <ion-icon slot='icon-only' name='arrow-dropdown' />
                  </ion-button>
                </ion-item>
              </ion-col>
              <ion-col sizeXs='12' sizeSm='12' sizeMd='4' sizeLg='2' sizeXl='2'>
                <ion-item>
                  <ion-label position='stacked'>Mode</ion-label>
                  <ion-input readonly placeholder='Select a mode' 
                             value={this.selectedMode ? this.selectedMode.name : ''}></ion-input>
                  <ion-button slot='end' fill='clear' disabled={!this.selectedScale}
                              onClick={()=>this.displayModeSelectorModal()}>
                    <ion-icon slot='icon-only' name='arrow-dropdown' />
                  </ion-button>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    ];
  }
}