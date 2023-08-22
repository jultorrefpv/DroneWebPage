import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { serviceDataPanel } from '../core/domain/constants/panel-services.constants'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showServicesMenu = false;
  isChecked= false;
  serviceCopys = serviceDataPanel;
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
    this.hiddeservices();
  }
  onClickServices(){
    this.showServicesMenu = !this.showServicesMenu;
  }
  closeMenu(){
    this.isChecked = false;
  }
  hiddeservices(){
    this.showServicesMenu = false;
  }
  hiddeservicesAndCloseMenu(){
    this.showServicesMenu = false;
    this.isChecked = false;
  }
}
