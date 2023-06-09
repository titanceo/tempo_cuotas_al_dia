import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() message = '';
  @Input() type = 'info';


  constructor() { }

  ngOnInit(): void {
  }

}
