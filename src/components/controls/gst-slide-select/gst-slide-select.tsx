import { Component, Prop, State, Method } from "@stencil/core";

@Component({
  tag: 'gst-slide-select',
  styleUrl: 'gst-slide-select.css'
})
export class GstSlideSelect {

  @Prop() options: string[];
  @Prop() initialSelectedIndex: number = 0;
  @State() optionValues: string[] = [];
  @State() selectedIndex: number;

  componentWillLoad() {

    this.optionValues = [...this.options];
    this.selectedIndex = this.initialSelectedIndex;

    this.optionValues.unshift('');

    if (this.optionValues.length < 3) {
      this.optionValues.push('');
    }
  }
  
  @Method()
  shiftLeft() {
    this.optionValues.unshift(this.optionValues.pop());
    this.optionValues = [...this.optionValues];
  }
  
  @Method()
  shiftRight() {
    this.optionValues.push(this.optionValues.shift());
    this.optionValues = [...this.optionValues];
  }

  @Method()
  getSelectedValue() {
    return this.optionValues[this.selectedIndex + 1];
  }

  render() {
    return [
      <ion-grid no-padding>
        <ion-row no-padding>
          <ion-col class='edged-left' size='4' no-padding>
            <ion-item class="ion-text-center" button lines='none' detail={false}
                      onClick={()=>this.shiftLeft()}>
              <ion-label>{this.optionValues[this.selectedIndex]}</ion-label>
            </ion-item>
          </ion-col>
          <ion-col class='bordered' size='4' no-padding>
            <ion-item class="ion-text-center" button lines='none' detail={false}>
              <ion-label>{this.optionValues[this.selectedIndex + 1]}</ion-label>
            </ion-item>
          </ion-col>
          <ion-col class='edged-right' size='4' no-padding>
            <ion-item class="ion-text-center" button lines='none' detail={false}
                      onClick={()=>this.shiftRight()}>
              <ion-label>{this.optionValues[this.selectedIndex + 2]}</ion-label>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
    ];
  }
}