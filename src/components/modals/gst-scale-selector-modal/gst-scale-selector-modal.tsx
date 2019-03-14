import { Component, State } from "@stencil/core";
import { ScaleCategory, Scale } from "../../../interfaces";

@Component({
  tag: 'gst-scale-selector-modal'
})
export class GstScaleSelectorModal {

  @State() scaleCategories: ScaleCategory[] = [];

  private modalController: HTMLIonModalControllerElement;

  async componentDidLoad() {

    let getScaleDataResponse = await fetch('/assets/data/scaleData.json');
    this.scaleCategories = await getScaleDataResponse.json();

    this.modalController = document.querySelector('ion-modal-controller');
  }

  dismissWithSelectedScale(scale: Scale) {

    this.modalController.dismiss({
      'selectedScale': scale
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title slot='start'>
            Select a scale
          </ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          { this.scaleCategories.map(category => 
            <ion-item-group>
              <ion-item-divider>
                <ion-label>{category.name}</ion-label>
              </ion-item-divider>
              { category.scales.map(scale => 
                <ion-item button
                          onClick={()=>this.dismissWithSelectedScale(scale)}>
                  <ion-label>{scale.name}</ion-label>
                </ion-item>  
              )}
            </ion-item-group>
          )}
        </ion-list>
      </ion-content>
    ]
  }
}