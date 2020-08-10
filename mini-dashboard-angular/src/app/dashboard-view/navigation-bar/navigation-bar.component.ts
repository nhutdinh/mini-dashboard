import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  pageTitle = '';
  fillerNav = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Customised div', path: '/dashboard/div' },
    { name: 'Back to Home', path: '/' },
  ];
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pageTitle = this.getPageTitle(window.location.pathname);
      }
    });
  }
  getPageTitle = (path: string) => {
    const foundRoute = this.fillerNav.find((item) => item.path === path);
    return foundRoute ? foundRoute.name : '';
  };

  ngOnInit(): void {}
}
