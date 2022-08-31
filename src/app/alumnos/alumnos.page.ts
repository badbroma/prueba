import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {


  private alumnos = [
    {
      id : '1',
      nombre : 'VICENTE ALONSO BASAURE CORNEJO',
      estadoAsistencia : 'P'
    },
    {
      id: '2',
      nombre : 'ALEJANDRO VASQUEZ GONZALEZ',
      estadoAsistencia : 'A'
    },
    {
      id: '3',
      nombre: 'SIMON ALEXIS ANDAUR TRONCOSO',
      estadoAsistencia : 'P'
    },
    {
      id: '4',
      nombre: 'MIGUEL ANGEL RAVELLO MADARIAGA',
      estadoAsistencia : 'P'
    },
    {
      id :'5',
      nombre:'ANAIS DANIELA LETELIER NECULPI',
      estadoAsistencia : 'A'
    }
  ];

  constructor() { }

  ngOnInit() {

    console.log(this.alumnos)
  }

}
