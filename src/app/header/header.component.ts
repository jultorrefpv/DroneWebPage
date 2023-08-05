import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showServicesMenu = false;
  isChecked= false;
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
  onClickServices(){
    this.showServicesMenu = !this.showServicesMenu;
  }
  closeMenu(){
    this.isChecked = false;
  }
}
