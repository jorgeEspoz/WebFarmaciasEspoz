import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefonos-contacto',
  templateUrl: './telefonos-contacto.component.html',
  styleUrls: ['./telefonos-contacto.component.css']
})
export class TelefonosContactoComponent implements OnInit {
  
  
  sucursales:any[] = [
    {name:'Victoria',comuna:"Pudahuel", direccion:"", telefono1:'287019-36'},
    {name:'La estrella',comuna:"Pudahuel", direccion:"", telefono1:'287019-28',telefono2:'287019-29'},
    {name:'Siete Oriente',comuna:"Pudahuel", direccion:"", telefono1:'287019-34'},
    {name:'Laguna Sur',comuna:"Pudahuel", direccion:"", telefono1:'287019-31'},
    {name:'Neptuno',comuna:"Lo prado", direccion:"", telefono1:'287019-32',telefono2:'287019-33'},
    {name:'Lourdes',comuna:"Quinta Normal", direccion:"", telefono1:'287019-40'},
    {name:'Carrascal',comuna:"Quinta Normal", direccion:"", telefono1:'287019-37'},
    {name:'Pajaritos',comuna:"Estacion Central", direccion:"", telefono1:'287019-38'},
    {name:'Alameda',comuna:"Central", direccion:"", telefono1:'287019-39'},
    {name:'Santa Rosa',comuna:"La granja", direccion:"", telefono1:'287019-35'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
