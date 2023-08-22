import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(private metaService: Meta){
    this.addTag();
  }
  addTag() {
    this.metaService.updateTag({ name: 'description', content: 'Descripción de misión de nuestra empresa Hyperion Art studios en Bogota' });
    this.metaService.updateTag({ property: 'og:title', content: 'Descripción de servicios de hyperion art studios en el negocio de toma de videos y fotografía en Bogotá Colombia' });
  }

}
