import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.css']
})
export class RrssComponent implements OnInit {

  sucursales:any[] = [
    {name:'Puerto Madero (NO VENTAS)',comuna:"Pudahuel", telefono: "22-18701923" },
    {name:'Victoria',comuna:"Pudahuel", telefono: "22-18701936" },
    {name:'La estrella',comuna:"Pudahuel", telefono: "22-18701928/1929" },
    {name:'Siete Oriente',comuna:"Pudahuel", telefono: "22-18701934" },
    {name:'Laguna Sur',comuna:"Pudahuel", telefono: "22-18701931" },
    {name:'Neptuno',comuna:"Lo prado", telefono: "22-18701932/1933" },
    {name:'Lourdes',comuna:"Quinta Normal", telefono: "22-18701940" },
    {name:'Carrascal',comuna:"Quinta Normal", telefono: "22-18701937" },
    {name:'Pajaritos',comuna:"Estacion Central", telefono: "22-18701938" },
    {name:'Alameda',comuna:"Central", telefono: "22-18701939" },
    {name:'Santa Rosa',comuna:"La granja", telefono: "22-18701935" },
  ];
  

  constructor( ) { }

  ngOnInit(): void {
  }

}
