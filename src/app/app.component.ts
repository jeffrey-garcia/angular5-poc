import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test app';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    window['ngAppComponent'] = {
      zone: this.ngZone,
      component: this,
      publicFunc1: (value) => this.privateFunc1(value),
      publicFunc2: () => this.privateFunc2()
  };
  }

  ngOnDestroy() {
    window['ngAppComponent'] = null;
  }

  privateFunc1(value: any) {
    console.log("invoked privateFunc1: " + value);
  }

  privateFunc2():string {
    let jsonData: string;
    jsonData = JSON.stringify( {test:"abc"} );
    console.log("invoked privateFunc2: " + jsonData);
    return jsonData;
  }

}
