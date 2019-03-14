import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  configureRoutes() {
    return (
      <ion-router useHash={false}>
        <ion-route url="/" component="app-home" />
      </ion-router>
    )
  }

  render() {
    return (
      <ion-app>
        <ion-toast-controller />
        <ion-modal-controller />
        { this.configureRoutes() }
        <ion-nav main animated={false} />
      </ion-app>
    );
  }
}
