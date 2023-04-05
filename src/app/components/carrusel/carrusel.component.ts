import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  sucursales:any[] = [
    {name:'Sucursal Victoria',img:'sv',comuna:"Pudahuel", direccion:"San Pablo #6179"},
    {name:'Sucursal La estrella',img:'sv',comuna:"Pudahuel", direccion:"San Pablo #8735"},
    {name:'Sucursal Siete Oriente',img:'s7o',comuna:"Pudahuel", direccion:"San Pablo #7185"},
    {name:'Sucursal Laguna Sur',img:'sls',comuna:"Pudahuel", direccion:"Avenida Laguna Sur #7301"},
    {name:'Sucursal Neptuno',img:'sn',comuna:"Lo prado", direccion:"San Pablo #6179"},
    {name:'Sucursal Lourdes',img:'sl',comuna:"Quinta Normal", direccion:"San Pablo #4102"},
    {name:'Sucursal Carrascal',img:'sc',comuna:"Quinta Normal", direccion:"Av carrascal #4496"},
    {name:'Sucursal Pajaritos',img:'sp',comuna:"Estacion Central", direccion:"Gladys Marin Mille #7003"},
    {name:'Sucursal Alameda',img:'sa',comuna:"Estacion Central", direccion:"Avenida Libertador Bernardo O'higgins 6002 "},
    {name:'Sucursal Santa Rosa',img:'ssr',comuna:"La granja", direccion:"Avenida Santa Rosa 8850"},
    {name:'Drogueria Espoz',img:'pm',comuna:"Pudahuel", direccion:"Puerto Madero #9685"}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
