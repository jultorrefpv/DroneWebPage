import { Component } from '@angular/core';
import { PanelServiceModel } from '../core/domain/models/panel-service-model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  servicePanelInfo: PanelServiceModel = new PanelServiceModel;
  constructor(){
    this.servicePanelInfo.ServiceName = ["Fotografía Aérea","Publicidad"];
  }
}
