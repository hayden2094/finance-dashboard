// navbar.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Function to toggle the mobile menu visibility
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('active');
  }
}
