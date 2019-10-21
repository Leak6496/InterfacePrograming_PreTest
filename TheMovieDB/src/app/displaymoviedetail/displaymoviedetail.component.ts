import { Component, OnInit, Input } from '@angular/core';
import { movies } from '../movies';

@Component({
  selector: 'app-displaymoviedetail',
  templateUrl: './displaymoviedetail.component.html',
  styleUrls: ['./displaymoviedetail.component.css']
})
export class DisplaymoviedetailComponent implements OnInit {
  @Input() movie: any;
  constructor() { }

  ngOnInit() {
  }

}
