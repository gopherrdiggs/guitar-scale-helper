import { Component, Prop } from "@stencil/core";
import { ScaleMode } from "../../../interfaces";

@Component({
  tag: 'gst-mode-selector-modal'
})
export class GstModeSelectorModal {

  @Prop() scaleModes: ScaleMode[] = [];
  private modalController: HTMLIonModalControllerElement;

  async componentDidLoad() {
    console.log('scaleModes prop', this.scaleModes);
    this.modalController = document.querySelector('ion-modal-controller');
  }

  dismissWithSelection(mode: ScaleMode) {

    this.modalController.dismiss({
      'selectedMode': mode
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title slot='start'>
            Select a mode
          </ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          { this.scaleModes.map(mode =>   
            <ion-item button
                      onClick={()=>this.dismissWithSelection(mode)}>
              <ion-label>{mode.name}</ion-label>
            </ion-item>
          )}
        </ion-list>
      </ion-content>
    ];
  }
}