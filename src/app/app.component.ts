import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'localstorage-viernes';

  constructor() {
    this.grabar_localStorage();
    this.obtener_localStorage();
  }

  obtener_localStorage() {
    let nombre = localStorage.getItem('nombre');
    let persona = JSON.parse(localStorage.getItem('persona'));

    console.log(nombre);
    console.log(persona);
  }

  grabar_localStorage() {
    let nombre: string = 'Fernando';
    let persona = {
      nombre: 'Juan',
      edad: 18,
      coords: {
        lat: 10,
        lng: -10,
      },
    };

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('persona', JSON.stringify(persona));
  }
}
