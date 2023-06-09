import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  anyo = [
    {id:2020, desc:'2020'},
    {id:2021, desc:'2021'},
    {id:2022, desc:'2022'},
    {id:2023, desc:'2023'}
  ]

  mes = [
    {id:'01',desc:'Enero'},
    {id:'02',desc:'Febrero'},
    {id:'03',desc:'Marzo'},
    {id:'04',desc:'Abril'},
    {id:'05',desc:'Mayo'},
    {id:'06',desc:'Junio'},
    {id:'07',desc:'Julio'},
    {id:'08',desc:'Agosto'},
    {id:'09',desc:'Septiembre'},
    {id:'10',desc:'Octubre'},
    {id:'11',desc:'Noviembre'},
    {id:'12',desc:'Diciembre'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
