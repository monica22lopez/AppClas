import { Component, OnInit } from '@angular/core';
    
interface Componente{
icon: string;
name: string;
redirectTo: string;

}






@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[]=[
    {
      icon:'basketball',
      name:'alert',
      redirectTo: '/alert',

    },
    {
      icon:'bag-remove-outline',
      name:'Inbox',
      redirectTo: '/folder/Inbox',

    },
    {
      icon:'flower-outline',
      name:'cliente',
      redirectTo: '/cliente',

    },
    {
      icon:'flower-outline',
      name:'actions',
      redirectTo: '/actions',

    }
    
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
