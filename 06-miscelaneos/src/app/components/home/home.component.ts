import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="row">
    <div class="col">
      <h1>Demos <small>angular</small> 1</h1>
      <hr />
      <app-ng-style></app-ng-style>
      <app-css></app-css>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident adipisci aperiam doloribus inventore recusandae
        placeat, dicta eos suscipit sapiente reprehenderit possimus
        numquam facere amet facilis dolor, quae vero sed ex!
      </p>
      <app-clases></app-clases>
    </div>
    <div class="col">
        <h1>Demos <small>angular</small> 2</h1>
        <hr />
        <p [appResaltado]="'orange'">Hola Mundo</p>
        <br />
        <app-ng-switch></app-ng-switch>
    </div>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

}
