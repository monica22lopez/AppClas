import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
favorite = false;
  constructor() { }

  ngOnInit() {
  }

onClick(){

  this.favorite = ! this.favorite;
}
}
