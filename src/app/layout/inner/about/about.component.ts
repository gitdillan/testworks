import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/tests.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor( private test:TestsService) {}

  //array
  testworks=this.test.magics;

  //pipe
  birthday = new Date(1979, 1, 10); // April 15, 1988
    

  ngOnInit() {
  }

}
