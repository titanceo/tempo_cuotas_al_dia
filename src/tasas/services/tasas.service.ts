import { Injectable } from '@angular/core';
import { listTasas } from 'src/interfaces/tasas.interface';

@Injectable({
  providedIn: 'root'
})
export class TasasService {

  constructor() { }

  getTasas() : listTasas[]{
    return [
      { index:1, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:2, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:3, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:4, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:5, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:6, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:7, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:8, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:9, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:10, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:11, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:12, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:13, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:14, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9},
      { index:15, nit: 1235874, fecha: '06/06/2023', tasaAnterior: 10 , tasaActual:9}
    ];
  }

}
