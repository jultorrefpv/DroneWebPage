import { Component } from '@angular/core';
import { PanelServiceModel } from '../core/domain/models/panel-service-model';
import { serviceDataPanel } from '../core/domain/constants/panel-services.constants';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-aerial-photography',
  templateUrl: './aerial-photography.component.html',
  styleUrls: ['./aerial-photography.component.css']
})
export class AerialPhotographyComponent {
  servicePanelInfo: PanelServiceModel = new PanelServiceModel;
  serviceCopys = serviceDataPanel;
  constructor(private metaService: Meta){
    this.servicePanelInfo.ServiceName = ["Eventos Personales", "Publicidad"];
    this.addTag()
  }
  addTag() {
    this.metaService.updateTag({ name: 'description', content: 'Servicios de pruducción audiovisual con drones para fotografía y toma de videos aéreos en Bogotá, Colombia' });
    this.metaService.updateTag({ property: 'og:title', content: 'Servicios de producción audiovisual aérea para fotografía y toma de videos' });
  }
}
