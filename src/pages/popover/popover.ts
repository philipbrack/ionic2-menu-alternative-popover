import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {Testpage} from '../testpage/testpage'

/*
 Generated class for the Popover page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class Popover {

  constructor(public navCtrl:NavController, public viewCtrl:ViewController) {

  }

  goPlace() {
    this.navCtrl.push(Testpage);
    this.viewCtrl.dismiss();

  }

}
