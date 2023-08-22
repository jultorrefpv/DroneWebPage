export class PanelServiceModel {

    ServiceName: string[] = [];
  
  
}

export class PanelServiceDataModel {

    ServiceName: string = "";
    pathImage:string = "";
    Id:string = "";
    services:any = [];
    servicesInfo = 
    {
        "Fotografía Aérea": {
                serviceName: "Fotografía Aérea",
                pathImage: "../../../assets/Home/fotografíaAerea.png",
                Id: "fotografiaAereaImg",
                routerLink: "../aerial-photography"
        },
        "Eventos Personales":{
            serviceName: "Eventos Personales",
            pathImage: "../../../assets/Home/eventosPersonales.png",
            Id: "eventosPersonalesImg",
            routerLink: "../events"
        },
        "Publicidad":{
            serviceName: "Publicidad",
            pathImage: "../../../assets/Home/servicioPublicidad.png",
            Id: "PublicidadImg",
            routerLink: "../advertisment"
        }
    }
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