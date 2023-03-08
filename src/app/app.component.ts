import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tools', url: '/tools', icon: 'briefcase' },
    { title: 'Gender', url: '/gender', icon: 'transgender' },
    { title: 'Age', url: '/age', icon: 'people' },
    { title: 'Country Universities', url: '/country-university', icon: 'school' },
    { title: 'Weather', url: '/weather', icon: 'sunny' },
    { title: 'About', url: '/about', icon: 'person' },
  ];
}
