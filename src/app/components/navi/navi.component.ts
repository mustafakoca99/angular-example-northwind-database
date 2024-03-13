import { Component, OnInit } from '@angular/core';
import { TcmbService } from '../../services/tcmb.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css',
})
export class NaviComponent implements OnInit {
  dollar: number = 0;

  constructor(private tcmb: TcmbService) {}

  ngOnInit(): void {
    this.tcmb.getDollars().subscribe((response) => {
      this.dollar = response;
    });
  }
}
