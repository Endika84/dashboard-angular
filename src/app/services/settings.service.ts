import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  private selectors?: NodeListOf<Element>;

  constructor() { 
    const theme= localStorage.getItem('theme') || 'default-dark';
    this.changeTheme(theme);
    this.selectors= document.querySelectorAll('#themecolors .selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string): void{

    const url= `/css/colors/${theme}.css`;

    if(!this.linkTheme) return;
    this.linkTheme.setAttribute('href', url);

    localStorage.setItem('theme', theme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){

    const selectors: NodeListOf<Element> = document.querySelectorAll('#themecolors .selector');;
    
    if(!selectors) return;

    selectors.forEach( selector => {
      selector.classList.remove('working');
      const dataTheme= selector.getAttribute('data-theme');
      const currentTheme= localStorage.getItem('theme') || 'default-dark';
      if(dataTheme === currentTheme){
        selector.classList.add('working');
      }
    });
  }

}
