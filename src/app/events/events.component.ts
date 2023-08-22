import { Component } from '@angular/core';
import { PanelServiceModel } from '../core/domain/models/panel-service-model';
import { serviceDataPanel } from '../core/domain/constants/panel-services.constants';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  servicePanelInfo: PanelServiceModel = new PanelServiceModel;
  serviceCopys = serviceDataPanel;
  
  constructor(private metaService: Meta){
    this.servicePanelInfo.ServiceName = ["Fotografía Aérea","Publicidad"];
    this.addTag();
  }
  addTag() {
    this.metaService.updateTag({ name: 'description', content: 'Servicios de pruducción audiovisual con drones para toma de videos y fotografía aéreos de eventos en Bogotá, Colombia' });
    this.metaService.updateTag({ property: 'og:title', content: 'Servicios de producción audiovisual aérea para fotografía y toma de videos de eventos en Bogotá' });
  }
}
