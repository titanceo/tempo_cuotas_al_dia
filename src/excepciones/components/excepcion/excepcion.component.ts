import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomPaginatorIntl } from 'src/shared/class/custom-paginator-intl';
import { ExcepcionService } from '../../services/excepcion.service';
import { listExcepciones } from 'src/interfaces/excepciones.interface';

@Component({
  selector: 'app-excepcion',
  templateUrl: './excepcion.component.html',
  styleUrls: ['./excepcion.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }
  ]
})

export class ExcepcionComponent implements OnInit {

  constructor(private exceptionService: ExcepcionService) { }

  columnas: string[] = ['Nit', 'FechaDeExcepcion','motivoExcepcion', 'aplicaExcepcion'];

  datos: listExcepciones[] = [];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.datos = this.exceptionService.getExcepciones();
    this.dataSource = new MatTableDataSource<listExcepciones>(this.datos);
    this.dataSource.paginator = this.paginator;
  }


}

