import { Component, DoCheck, Input } from '@angular/core';
import { PanelServiceDataModel, PanelServiceModel } from 'src/app/core/domain/models/panel-service-model';


@Component({
  selector: 'app-services-panel',
  templateUrl: './services-panel.component.html',
  styleUrls: ['./services-panel.component.css']
})
export class ServicesPanelComponent implements DoCheck{

  @Input()serviceData!: PanelServiceModel;
  serviceDataModel = new PanelServiceDataModel();
  servicesData: any = [];
  
  constructor(){
    
    
  }
  ngDoCheck() {
    if(this.serviceData){
      this.servicesData = this.serviceDataModel.getServicedataPanel(this.serviceData)
    }

  }



}
