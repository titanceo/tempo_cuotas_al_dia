import { Injectable } from '@angular/core';
import { listExcepciones } from 'src/interfaces/excepciones.interface';

@Injectable({
  providedIn: 'root'
})
export class ExcepcionService {

  constructor() { }

  getExcepciones() : listExcepciones[]{
    return [
      { index:1, nit: 1235874, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros' , aplicaExcepcion:'Y'},
      { index:2,nit: 8795241, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'N' },
      { index:3,nit: 9874525, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'Y' },
      { index:4,nit: 1235874, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros' , aplicaExcepcion:'Y'},
      { index:5,nit: 8795241, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'N' },
      { index:6,nit: 9874525, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'Y' },
      { index:7,nit: 1235874, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros' , aplicaExcepcion:'Y'},
      { index:8,nit: 8795241, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'N' },
      { index:9,nit: 9874525, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'Y' },
      { index:10,nit: 1235874, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros' , aplicaExcepcion:'Y'},
      { index:11,nit: 8795241, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'N' },
      { index:12,nit: 9874525, fechaExcepcion: '06/06/2023', motivoExcepcion: 'No se incluye en el cruce de reintegros', aplicaExcepcion:'Y' }
    ];
  }
}
