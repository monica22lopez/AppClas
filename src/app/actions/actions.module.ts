import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsPageRoutingModule } from './actions-routing.module';

import { ActionsPage } from './actions.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActionsPage]
})
export class ActionsPageModule {}
