import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): () => {};
  
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: ``
})
export class PageComponent implements OnInit {

  constructor(
    private settingsService: SettingsService,
  ){}

  ngOnInit(): void {
    customInitFunctions();
  }

}
