import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {
  
  @Input() heroe:any = {};
  @Input() id:number;

  @Output() selectedHeroe:EventEmitter<number>;

  constructor(private router:Router) { 
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.id]);
    //this.selectedHeroe.emit(this.id);
  }
}
