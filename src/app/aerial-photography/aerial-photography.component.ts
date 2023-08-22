import { Component } from '@angular/core';
import { PanelServiceModel } from '../core/domain/models/panel-service-model';

@Component({
  selector: 'app-aerial-photography',
  templateUrl: './aerial-photography.component.html',
  styleUrls: ['./aerial-photography.component.css']
})
export class AerialPhotographyComponent {
  servicePanelInfo: PanelServiceModel = new PanelServiceModel;
  constructor(){
    this.servicePanelInfo.ServiceName = ["Eventos Personales", "Publicidad"];
  }
}
