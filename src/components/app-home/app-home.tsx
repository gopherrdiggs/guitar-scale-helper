import { Component } from '@stencil/core';
import 'split-me';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  componentDidLoad() {

  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Guitar Scale Helper</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content no-padding>
        <gst-fretboard></gst-fretboard>
      </ion-content>
    ];
  }
}
