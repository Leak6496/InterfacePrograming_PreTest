import { Component, OnInit,Input } from '@angular/core';
import { movies } from '../movies';

@Component({
  selector: 'app-sidebarleft',
  templateUrl: './sidebarleft.component.html',
  styleUrls: ['./sidebarleft.component.css']
})
export class SidebarleftComponent implements OnInit {
  @Input() movie: any;
  constructor() { }

  ngOnInit() {
  }

}
