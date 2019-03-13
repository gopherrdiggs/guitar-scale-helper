import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() currentRoot: string = 'E';
  @State() currentKey: string = 'C|D|E|F|G|A|B|C';
  private constNotes = ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'];

  @Listen('body:gstScaleSelected')
  async handleScaleSelected(event: any) {
    console.log('Scale selected event: ', event);

    await this.calculateKey(this.currentRoot, event.detail.selectedScale);
  }

  // Given a root note and an interval definition, calculate the scale key
  async calculateKey(root: string, intervalDefinition: string) {

    console.log('intervalDefinition', intervalDefinition);
    let seedKeyNotes = ['A','B','C','D','E','F','G'];
    let allNotes = this.constNotes;

    // Reposition items in the array, starting with closest to root note.
    // Every scale should have these notes in some fashion, possible flat or sharp.
    while (root.indexOf(seedKeyNotes[0]) == -1) {
      seedKeyNotes.push(seedKeyNotes.shift());
    }
    console.log('seedKeyNotes', seedKeyNotes);

    for (let i = 0; i < 12; i++) {

      if (allNotes[0].indexOf('/') > -1) {
        let noteSplit = allNotes[0].split('/');
        if (noteSplit[0] === root || noteSplit[1] === root) {
          break;
        }
      }
      else if (allNotes[0] === root) {
        break;
      }
      
      allNotes.push(allNotes.shift());
    }
    console.log('allNotes', allNotes);

    let keyNotes = [root];
    let intervalArray = intervalDefinition.split('|');

    // Shift out the notes from arrays as they are no longer needed.
    seedKeyNotes.shift();
    allNotes.shift();
    intervalArray.shift();

    let loopCount = intervalArray.length;
    let intervalToneNumber = 1;
    let noteToAdd = '';

    for (let i = 0; i < loopCount; i++) {

      console.log('allNotes', allNotes);
      console.log('seedKeyNotes', seedKeyNotes);
      console.log('keyNotes', keyNotes);

      if (intervalArray[0] !== '-') {

        noteToAdd = '';
        
        if (intervalArray[0].indexOf(intervalToneNumber.toString()) == -1) {
          seedKeyNotes.shift();
          allNotes.shift();
        }
        
        if (intervalArray[0].indexOf('s') > -1) {
          // Interval declares this note to be sharp
          noteToAdd = seedKeyNotes[0] + '#';
        }
        else if (intervalArray[0].indexOf('b') > -1) {
          // Interval declares this note to be flat
          noteToAdd = seedKeyNotes[0] + 'b';
        }
        else if (allNotes[0].indexOf('/') > -1) {
          // Need to pull either the sharp or flat version of the note
          let noteSplit = allNotes[0].split('/');
          noteToAdd = noteSplit[0].indexOf(seedKeyNotes[0]) > -1 
            ? noteSplit[0]
            : noteSplit[1];
        }
        else {
          noteToAdd = seedKeyNotes[0];
        }

        keyNotes.push(noteToAdd);
        seedKeyNotes.shift();
      }

      allNotes.shift();
      intervalArray.shift();
      intervalToneNumber = intervalToneNumber + 1;
    }

    console.log('Key notes:', keyNotes);
    return keyNotes.join('|');
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Guitar Scale Helper</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content no-padding>
        <gst-scale-selector></gst-scale-selector>
        <gst-fretboard></gst-fretboard>
      </ion-content>
    ];
  }
}
