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
      icon:'rose-outline',
      name:'Inbox',
      redirectTo: '/folder/Inbox',

    },
    {
      icon:'happy-outline',
      name:'cliente',
      redirectTo: '/cliente',

    },
    {
      icon:'dice-outline',
      name:'actions',
      redirectTo: '/actions',

    },
    {
      icon:'accessibility-outline',
      name:'avatar',
      redirectTo: '/avatar',

    },
    {
      icon:'accessibility-outline',
      name:'favoritos',
      redirectTo: '/favoritos',

    },
    {
      icon:'card',
      name:'card',
      redirectTo: '/card',

    },
    {
      icon:'card',
      name:'fab',
      redirectTo: '/fab',

    }
    
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
