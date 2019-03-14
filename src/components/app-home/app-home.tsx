import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @Listen('body:gstScaleSelected')
  async handleScaleSelected(event: any) {

    console.log('Scale selected event: ', event);
    let key = await this.calculateKey(event.detail.root, event.detail.interval);
    console.log('Calculated key:', key);
  }

  // Given a root note and an interval definition, calculate the scale key
  async calculateKey(root: string, intervalDefinition: string) {

    let allNotes = ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'];
    let seedKeyNotes = ['A','B','C','D','E','F','G'];

    // Reposition items in the array, starting with closest to root note.
    // Every scale should have these notes in some fashion, possible flat or sharp.
    while (root.indexOf(seedKeyNotes[0]) == -1) {
      seedKeyNotes.push(seedKeyNotes.shift());
    }

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

    let keyNotes = [root];
    let intervalArray = intervalDefinition.split('|');

    // Shift out the notes from arrays when no longer needed.
    seedKeyNotes.shift();
    allNotes.shift();
    intervalArray.shift();

    let intervalToneNumber = 2;
    let noteToAdd = '';

    while (intervalArray.length > 0) {
            
      if (intervalArray[0] !== '-') {

        noteToAdd = '';
        
        // For interval definitions that skip tones...
        while (intervalArray[0].indexOf(intervalToneNumber.toString()) == -1) {
          
          seedKeyNotes.shift();
          intervalToneNumber = intervalToneNumber + 1;
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
        intervalToneNumber = intervalToneNumber + 1;
      }

      allNotes.shift();
      intervalArray.shift();
    }

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
