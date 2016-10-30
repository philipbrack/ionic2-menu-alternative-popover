import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {Testpage} from '../pages/testpage/testpage';
import {Popover} from '../pages/popover/popover';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Popover,
    Testpage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Popover,
    Testpage
  ],
  providers: []
})
export class AppModule {
}
