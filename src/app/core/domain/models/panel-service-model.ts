import {serviceDataPanel} from "../constants/panel-services.constants"

export class PanelServiceModel {

    ServiceName: string[] = [];
  
  
}

export class PanelServiceDataModel {

    ServiceName: string = "";
    pathImage:string = "";
    Id:string = "";
    services:any = [];
    servicesInfo = serviceDataPanel;
    constructor(){        
    }
    
    getServicedataPanel(_services: PanelServiceModel){
        this.services = [];
        for(let service of _services.ServiceName){
            if(service){
                this.services.push(this.servicesInfo[service as keyof typeof this.servicesInfo])
            }  
        }
        return this.services
    }
  
  
}