import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Plugins } from "@capacitor/core"
const { CameraPreview } = Plugins;
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';

import '@capacitor-community/camera-preview'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  image = null;
  cameraActive = false;

  fecha: string;

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  };


  constructor() {
    moment.locale('es-cl');
    this.fecha = moment().format();
    this.cargarEntradas();
   }

   openCamera(){
    const CameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview'
    };
    CameraPreview.start(CameraPreviewOptions);
    this.cameraActive = true;
  }

    cargarEntradas(){
      var fecha = moment(this.fecha).format('DD-MM-YY');

      this.entradas = JSON.parse(localStorage.getItem('entradas'));
      if(this.entradas){
        var entradaActual = this.entradas.find((elemento)=>{
          return elemento.fecha == fecha;
        });
        if(entradaActual){
          this.entradaActual = entradaActual;
        }else{
          this.inicializarNuevaEntrada();
        }
      }else{
        this.inicializarNuevaEntrada();
      }
    }

    inicializarNuevaEntrada(){
      var  fecha = moment(this.fecha).format('DD-MM-YY');
      var dia = moment(this.fecha).format('DD');
      var mes = moment(this.fecha).format('MMMM');
      var year = moment(this.fecha).format('YYYY');

      this.entradaActual = {
        fechaTexto: dia + ' de ' + mes + ' del ' + year,
        fecha: fecha,
        texto: ''
      }
    }

  ngOnInit() {
  }

}
