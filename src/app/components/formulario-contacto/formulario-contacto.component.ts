import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent   implements OnInit{


  formEnviar = new FormGroup({
      nombres : new FormControl(''),
      apellidos : new FormControl(''),
      telefono  : new FormControl(''),
      email : new FormControl(''),
      nota : new FormControl(''),
      sucursal : new FormControl(''),
      tipoConsulta : new FormControl(''),

  });
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
  consultas:any[] = [
    {id:1 , descripcion:"Consulta stock"},
    {id:2 , descripcion:"Consulta receta"},
    {id:3 , descripcion:"Deseo comprar en cantidad"},
   ]


  constructor(){

  }
  
  enviarFormulario(){
    console.log(this.formEnviar.value);
  }  

  ngOnInit(): void {

  }



}
