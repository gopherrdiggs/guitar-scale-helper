import { Component } from "@stencil/core";

@Component({
  tag: 'gst-root-selector-modal'
})
export class GstRootSelectorModal {

  private roots = ['C','C#','Db','D','Eb','E','F','F#','Gb','G','Ab','A','Bb','B'];
  private modalController: HTMLIonModalControllerElement;

  async componentDidLoad() {

    this.modalController = document.querySelector('ion-modal-controller');
  }

  dismissWithSelection(note: string) {

    this.modalController.dismiss({
      'selectedRoot': note
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title slot='start'>
            Select a root
          </ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          { this.roots.map(note =>   
            <ion-item button
                      onClick={()=>this.dismissWithSelection(note)}>
              <ion-label>{note.replace('b', '\u266D').replace('#', '\u266F')}</ion-label>
            </ion-item>
          )}
        </ion-list>
      </ion-content>
    ];
  }
}