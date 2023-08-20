import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { AdvertismentComponent } from '../advertisment/advertisment.component';


const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-15%)"
})
const style3 = style({
  opacity: 0,
  transform: "translateX(15%)"
})
const style1inY = style({
  opacity: 1,
  transform: "translateY(0)"
})

const style2inY = style({
  opacity: 0,
  transform: "translateY(-15%)"
})



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),
    trigger('DowntoUp', [
      state('show', style1inY),
      state('hide', style2inY),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),
    trigger('RighttoLeft', [
      state('show', style1),
      state('hide', style3),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),

  ]
})
export class HomeComponent {
  @ViewChild('events') eventsConteiner!: ElementRef<HTMLInputElement>;
  @ViewChild('advertisment') advetismentConteiner!: ElementRef<HTMLInputElement>;
  @ViewChild('photografy') photografyContainer!: ElementRef<HTMLInputElement>;
  state = 'hide'
  states = {
    stateServiceFotography: "hide",
    stateServiceAdvertisment: "hide",
    stateServiceEvents: "hide",
  }
  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    this.states.stateServiceEvents = (scrollPosition >= this.eventsConteiner.nativeElement.offsetTop - 450) ? 'show' : 'hide';
    this.states.stateServiceAdvertisment = (scrollPosition >= this.advetismentConteiner.nativeElement.offsetTop - 450) ? 'show' : 'hide';
    this.states.stateServiceFotography = (scrollPosition >= this.photografyContainer.nativeElement.offsetTop - 450) ? 'show' : 'hide';

  }

}
