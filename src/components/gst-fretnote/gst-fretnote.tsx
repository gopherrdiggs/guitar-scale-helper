import { Component, State, Method } from "@stencil/core";

@Component({
  tag: 'gst-fretnote',
  styleUrl: 'gst-fretnote.css'
})
export class GstFretnote {

  @State() noteName: string;
  @State() isShown: boolean = false;
  @State() isRoot: boolean;
  @State() buttonColor: string;
  @State() buttonFill: string;

  componentWillLoad() {

    this.setButtonStyle();
  }

  @Method()
  async load(noteName: string, isShown: boolean, isRoot: boolean) {
    this.isShown = isShown;
    this.isRoot = isRoot;
    this.noteName = noteName.replace('b', '\u266D').replace('#', '\u266F');
    this.setButtonStyle();
  }

  @Method()
  async hide() {
    this.isShown = false;
  }

  @Method()
  async show() {
    this.isShown = true;
    this.setButtonStyle();
  }

  @Method()
  async hideNoteName() {
    this.noteName = '';
  }

  @Method()
  async setNoteName(noteName: string) {
    this.noteName = noteName;
  }

  setButtonStyle() {

    if (this.isShown) {
      this.buttonFill = 'solid';
      this.buttonColor =  this.isRoot ? 'primary' : 'secondary';
    }
    else {
      this.buttonFill = 'clear';
      this.buttonColor = 'primary';
    }
  }

  handleNoteClick() {

    this.isShown = !this.isShown;
    this.setButtonStyle();
  }

  render() {
    return [
      <ion-button class='fretNoteButton' 
                  size='small' shape='round'
                  style={{ 'min-width': '42px' }}
                  fill={this.buttonFill === 'clear' ? 'clear' : 'solid'}
                  color={this.buttonColor}
                  onClick={()=>this.handleNoteClick()}>
        {this.noteName}
      </ion-button>
    ];
  }
};