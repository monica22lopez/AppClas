import { Component, OnInit } from '@angular/core';
interface avatar{
  img: string,
  name: string;
}
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  constructor() { }
  Avatar:avatar[] = [
    {
      img:"assets/icon/descarga.jpg",
      name:"Mi name"
    }
  ]
  ngOnInit() {
  }

}
