import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: 'gst-fretnote',
  styleUrl: 'gst-fretnote.css'
})
export class GstFretnote {

  @Prop() noteName: string;
  @Prop() isShown: boolean;
  @Prop() isRoot: boolean;

  @State() _isShown: boolean;
  @State() _buttonColor: string;
  @State() _buttonFill: string;

  componentWillLoad() {

    this._isShown = this.isShown;

    this.setButtonStyle();
  }

  setButtonStyle() {

    if (this._isShown) {
      this._buttonFill = 'solid';
      this._buttonColor =  this.isRoot ? 'primary' : 'secondary';
    }
    else {
      this._buttonFill = 'clear';
      this._buttonColor = 'primary';
    }
  }

  handleNoteClick() {

    this._isShown = !this._isShown;

    this.setButtonStyle();
  }

  render() {
    return [
      <ion-button class='fretNoteButton' 
                  size='small' shape='round'
                  fill={this._buttonFill === 'clear' ? 'clear' : 'solid'}
                  color={this._buttonColor}
                  onClick={()=>this.handleNoteClick()}>
        {this.noteName}
      </ion-button>
    ];
  }
};