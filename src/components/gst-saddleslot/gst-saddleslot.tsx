import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: 'gst-saddleslot',
  styleUrl: 'gst-saddleslot.css'
})
export class GstSaddleslot {

  @Prop() noteData: string;

  @State() noteName: string;
  @State() isShown: boolean;
  @State() isRoot: boolean;
  
  componentWillLoad() {

    let data = this.noteData;
    let indx = data.indexOf('*');
    if (indx > 0) {
      this.isRoot = true;
      this.isShown = true;
      data = data.replace('*', '');
    }
    indx = data.indexOf('.');
    if (indx > 0) {
      this.isShown = true;
      data = data.replace('.', '');
    }
    this.noteName = data;
  }

  render() {
    return [
      <div class='saddleSlotContainer'>
        <div class='saddleString'></div>
        <div class='saddleNote'>
          <gst-fretnote noteName={this.noteName}
                        isShown={this.isShown}
                        isRoot={this.isRoot} />
        </div>
      </div>
    ];
  }
}