import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'gst-empty-menu-popover'
})
export class GstEmptyMenuPopover {

  @Prop() menuContent: any;

  render() {
    return this.menuContent;
  }
}