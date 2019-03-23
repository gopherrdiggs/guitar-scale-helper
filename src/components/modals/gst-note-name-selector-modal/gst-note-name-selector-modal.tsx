import { Component, Element } from "@stencil/core";

@Component({
  tag: 'gst-note-name-selector-modal'
})
export class GstNoteNameSelectorModal {

  @Element() el: HTMLGstNoteNameSelectorModalElement;
  private modalController: HTMLIonModalControllerElement;

  nameOptionConfigs = [
    { nameOptions: ['E'], initialIndex: 0 },
    { nameOptions: ['E#','F'], initialIndex: 1 },
    { nameOptions: ['F#','Gb'], initialIndex: 0 },
    { nameOptions: ['G'], initialIndex: 0 },
    { nameOptions: ['G#','Ab'], initialIndex: 0 },
    { nameOptions: ['A'], initialIndex: 0 },
    { nameOptions: ['A#','Bb'], initialIndex: 0 },
    { nameOptions: ['B'], initialIndex: 0 },
    { nameOptions: ['B#','C'], initialIndex: 1 },
    { nameOptions: ['C#','Db'], initialIndex: 0 },
    { nameOptions: ['D'], initialIndex: 0 },
    { nameOptions: ['D#','Eb'], initialIndex: 0 }
  ];

  componentDidLoad() {

    this.modalController = document.querySelector('ion-modal-controller');
  }

  handleBackClick() {

    this.modalController.dismiss();
  }

  handleSaveClick() {

    let slideSelectElems = this.el.getElementsByTagName('gst-slide-select');
    let currentSelections: string[] = [];

    for (let i = 0; i < slideSelectElems.length; i++) {
      currentSelections.push(slideSelectElems[i].getSelectedValue());
    }

    this.modalController.dismiss({
      noteNames: currentSelections
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-buttons slot='start'>
            <ion-button slot='start'
                        onClick={()=>this.handleBackClick()}>
              <ion-icon slot='icon-only' name='arrow-dropleft' />
            </ion-button>
          </ion-buttons>
          <ion-title slot='start'>
            Select Note Names
          </ion-title>
          <ion-buttons slot='end'>
            <ion-button slot='end' fill='solid' 
                        color='light' shape='round'
                        onClick={()=>this.handleSaveClick()}>
              Save
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-grid>
          <ion-row no-padding>
            <ion-col sizeXs='1' sizeSm='1' sizeMd='3' sizeLg='3' sizeXl='3' no-padding />
            <ion-col sizeXs='10' sizeSm='10' sizeMd='6' sizeLg='6' sizeXl='6' no-padding>
              <ion-list>
                {this.nameOptionConfigs.map(optionsConfig =>
                  <gst-slide-select options={optionsConfig.nameOptions} 
                                    initialSelectedIndex={optionsConfig.initialIndex} />  
                )}
              </ion-list>
            </ion-col>
            <ion-col sizeXs='1' sizeSm='1' sizeMd='3' sizeLg='3' sizeXl='3' no-padding />
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}