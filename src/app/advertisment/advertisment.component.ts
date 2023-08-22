import { Component } from '@angular/core';
import { PanelServiceModel } from '../core/domain/models/panel-service-model';
import { serviceDataPanel } from '../core/domain/constants/panel-services.constants';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css']
})
export class AdvertismentComponent {
  servicePanelInfo: PanelServiceModel = new PanelServiceModel;
  serviceCopys = serviceDataPanel;
  constructor(private metaService: Meta){
    this.servicePanelInfo.ServiceName = ["Fotografía Aérea","Eventos Personales"];
    this.addTag();
  }
  addTag() {
    this.metaService.updateTag({ name: 'description', content: 'Servicios de pruducción audiovisual con drones para publicidad de servicios y productos en Bogotá, Colombia' });
    this.metaService.updateTag({ property: 'og:title', content: 'Servicios de producción audiovisual aérea con drones para publicidad' });
  }
}
