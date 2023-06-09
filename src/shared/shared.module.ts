import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NoteComponent } from './components/note/note.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    NoteComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports:[
    NoteComponent,
    FilterComponent,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
