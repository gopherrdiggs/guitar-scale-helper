import { Component, Element, Method, State } from "@stencil/core";
import { findRelatedNote } from "../../helpers/utils";

@Component({
  tag: 'gst-fretboard',
  styleUrl: 'gst-fretboard.css'
})
export class GstFretboard {

  @Element() el: HTMLGstFretboardElement;
  @State() keyNotes: string = 'C|D|E|F|G|A|B';
  @State() currentTuning: string[] = ['E','A','D','G','B','E'];
  //TODO: Pull this from setting
  @State() noteNames: string[] = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];

  private modalController: HTMLIonModalControllerElement;
  private popoverController: HTMLIonPopoverControllerElement;

  componentDidLoad() {

    this.modalController = document.querySelector('ion-modal-controller');
    this.popoverController = document.querySelector('ion-popover-controller');
  }

  @Method()
  async load(keyNotes: string) {

    console.log('loading scale with key: ', keyNotes);
    this.keyNotes = keyNotes;
    
    let stringNotes = [];
    let fretDisplayNotes = this.keyNotes.split('|');

    // Check for key note names that don't match currently
    // selected note names
    for (let i = 0; i < fretDisplayNotes.length; i++) {
      if (!this.noteNames.includes(fretDisplayNotes[i])) {
        
        fretDisplayNotes[i] = findRelatedNote(fretDisplayNotes[i]);
      }
    }

    // Tune each string to the current tuning
    for (let i = 0; i < 6; i++) {

      // Need enough notes for 24 frets
      let notes = [...this.noteNames, ...this.noteNames, ...this.noteNames];

      // Shift notes to match open tuning for string
      while (this.currentTuning[i] != notes[0]) {
        notes.push(notes.shift());
      }

      stringNotes.push(notes);
    }

    // Load frets with note arrays
    let nutElem = this.el.getElementsByTagName('gst-nut')[0] as HTMLGstNutElement;
    await nutElem.componentOnReady();
    
    await nutElem.load(fretDisplayNotes, [stringNotes[5][0],stringNotes[4][0],stringNotes[3][0],stringNotes[2][0],stringNotes[1][0],stringNotes[0][0]]);

    let fretElems = this.el.getElementsByTagName('gst-fret');

    for (let i = 0; i < fretElems.length; i++) {

      await fretElems[i].load(fretDisplayNotes, [stringNotes[5][i+1],stringNotes[4][i+1],stringNotes[3][i+1],stringNotes[2][i+1],stringNotes[1][i+1],stringNotes[0][i+1]]);
    }

  }

  async reload() {

    await this.load(this.keyNotes);
  }

  async handleMenuOptionClick(menuName: string) {
    
    this.popoverController.dismiss();

    if (menuName === 'Set Tuning') {

    }
    else if (menuName === 'Set Note Names') {
      await this.showNoteNameSelectorModal();
    }
  }
  
  async showNoteNameSelectorModal() {
    
    let modal = await this.modalController.create({
      component: 'gst-note-name-selector-modal'
    });
  
    modal.onDidDismiss().then(event => {
      console.log('dismissed', event);
    });
  
    await modal.present();
  }

  async showOptionsPopover(event: any) {

    let menuContent = 
      <ion-list>
        <ion-item onClick={()=>this.handleMenuOptionClick('Set Tuning')}>
          <ion-label>Set Tuning</ion-label>
        </ion-item>
        <ion-item lines='none' onClick={()=>this.handleMenuOptionClick('Set Note Names')}>
          <ion-label>Set Note Names</ion-label>
        </ion-item>
      </ion-list>;

    let popover = await this.popoverController.create({
      component: 'gst-empty-menu-popover',
      componentProps: {
        menuContent: menuContent
      },
      event: event
    });

    await popover.present();
  }

  render() {
    return [
      <ion-card>
        <ion-card-header color='secondary' no-padding>
          <ion-item color='secondary' lines='none'>
            Guitar Fretboard
            <ion-button slot='end' fill='clear'
                        onClick={()=>this.reload()}>
              <ion-icon slot='icon-only' name='refresh' color='light' />
            </ion-button>
            <ion-button slot='end' fill='clear'
                        onClick={(ev)=>this.showOptionsPopover(ev)}>
              <ion-icon slot='icon-only' name='more' color='light' />
            </ion-button>
          </ion-item>
        </ion-card-header>
        <ion-card-content id='fretboardCardContent' padding>
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