import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  
    proveedores: any = [
    {
      nombre: 'Movistar',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@movistar.es',
      contacto: 'Nicolas Pérez'
    },
    {
      nombre: 'Vodafone',
      cif: 'B12345678',
      direccion: 'Principe de Vergara , 200',
      cp: '28.010',
      localidad: 'Barcelona',
      provincia: 'Cataluña',
      telefono: 9891827177,
      email: 'info@vodafone.com',
      contacto: 'Madelene Soto'
    }
  ];

  getProveedores() {
    // return 'Mensaje desde el servicio';
    return this.proveedores;
  }

  constructor() { }
}
