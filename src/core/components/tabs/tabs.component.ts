import { Component, OnInit } from '@angular/core';
import { ExcepcionComponent } from '../../../excepciones/components/excepcion/excepcion.component';
import { TasaComponent } from '../../../tasas/components/tasa/tasa.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabList: any[] = [
    {
      title: 'Excepciones',
      component: ExcepcionComponent
    },
    {
      title: 'Tasas',
      component: TasaComponent
    }
  ];

  activeTabIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
