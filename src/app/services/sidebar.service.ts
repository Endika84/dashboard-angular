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
        {title: 'Main', url: ''},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Gráficas', url: 'grafica1'},
      ]
    }
  ];

  constructor() { }
}
