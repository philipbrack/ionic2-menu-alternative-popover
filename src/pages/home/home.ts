import {Component, ViewChild, ElementRef} from '@angular/core';

import {NavController} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {Popover} from '../popover/popover';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('popoverContent', {read: ElementRef}) content:ElementRef;

  constructor(public navCtrl:NavController, public popoverCtrl:PopoverController) {

  }


  presentPopover(ev) {
    let popover = this.popoverCtrl.create(Popover, {
      contentEle: this.content.nativeElement,
    });

    popover.present({
      ev: ev
    });
  }

}
