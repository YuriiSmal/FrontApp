import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {

  errorMessage: string = 'Opps, is an error occurred!';

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
