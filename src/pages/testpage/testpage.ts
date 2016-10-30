import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Testpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testpage',
  templateUrl: 'testpage.html'
})
export class Testpage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Testpage Page');
  }

}
