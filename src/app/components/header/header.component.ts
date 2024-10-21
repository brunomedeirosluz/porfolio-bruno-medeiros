import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuActive: boolean = false;
  ativar() {
    const toggle = document.getElementById('toggle');
    toggle?.classList.toggle('active');
    this.isMenuActive = !this.isMenuActive;
  }
}
