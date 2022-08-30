import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {


  private clases = [
    {
      id : '1',
      seccion : 'PM-1234',
      titulo : 'Programacion movil',

    },
    {
      id : '2',
      seccion : 'AS-7567',
      titulo : 'Arquitectura de software',

    },
    {
      id : '3',
      seccion : 'CS-2224',
      titulo : 'Calidad de software',

    },
    {
      id : '4',
      seccion : 'PW-0408',
      titulo : 'Programacion web',

    },
    {
      id : '5',
      seccion : 'IS-7824',
      titulo : 'ingenieria de software',

    }
  ];

  constructor() { }

  ngOnInit() {

    console.log(this.clases)

  }

}