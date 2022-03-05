import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [`
  `]

})
export class FavoriteComponent implements OnInit {
  scale = 1.0

  constructor() { }

  ngOnInit(): void {
  }

  onSave($event: WheelEvent) {
    $event.stopPropagation();
    this.scale += 0.001 * $event.deltaY
    if (this.scale < 0.25) {
      this.scale = 0.25
    }
  }
}
