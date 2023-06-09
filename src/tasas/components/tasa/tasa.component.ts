import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { listTasas } from 'src/interfaces/tasas.interface';
import { CustomPaginatorIntl } from 'src/shared/class/custom-paginator-intl';
import { TasasService } from 'src/tasas/services/tasas.service';

@Component({
  selector: 'app-tasa',
  templateUrl: './tasa.component.html',
  styleUrls: ['./tasa.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }
  ]
})
export class TasaComponent implements OnInit {

  constructor(private tasaService:TasasService) { }

  columnas: string[] = ['Nit', 'fecha','tasaAnterior', 'tasaActual', 'acciones'];

  datos: listTasas[] = [];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.datos = this.tasaService.getTasas();
    this.dataSource = new MatTableDataSource<listTasas>(this.datos);
    this.dataSource.paginator = this.paginator;
  }

}
