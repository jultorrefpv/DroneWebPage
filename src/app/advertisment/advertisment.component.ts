import { Component } from '@angular/core';
import { PanelServiceModel } from '../core/domain/models/panel-service-model';

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css']
})
export class AdvertismentComponent {
  servicePanelInfo: PanelServiceModel = new PanelServiceModel;
  constructor(){
    this.servicePanelInfo.ServiceName = ["Fotografía Aérea","Eventos Personales"];
  }
}
