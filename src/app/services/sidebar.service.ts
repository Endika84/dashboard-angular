import { Injectable } from '@angular/core';

interface MenuItem {
  title: string;
  icon: string;
  submenu: Submenu[]
}

interface Submenu {
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', url: './'},
        {title: 'Gráficas', url: 'grafica1'},
        {title: 'Rxjs', url: 'rxjs'},
        {title: 'Promesas', url: 'promesas'},
        {title: 'ProgressBar', url: 'progress'},
      ]
    }
  ];

  constructor() { }
}
