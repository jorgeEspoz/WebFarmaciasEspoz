import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-consulta',
  templateUrl: './tipo-consulta.component.html',
  styleUrls: ['./tipo-consulta.component.css']
})
export class TipoConsultaComponent implements OnInit {


  opcionSeleccionada: string = '';
  sucursalSeleccionada: string = '';

    sucursales:any[] = [
    {name:'Victoria',comuna:"Pudahuel", },
    {name:'La estrella',comuna:"Pudahuel", },
    {name:'Siete Oriente',comuna:"Pudahuel", },
    {name:'Laguna Sur',comuna:"Pudahuel", },
    {name:'Neptuno',comuna:"Lo prado", },
    {name:'Lourdes',comuna:"Quinta Normal", },
    {name:'Carrascal',comuna:"Quinta Normal", },
    {name:'Pajaritos',comuna:"Estacion Central", },
    {name:'Alameda',comuna:"Estacion Central", },
    {name:'Santa Rosa',comuna:"La granja", },
    {name:'Drogueria',comuna:"Pudahuel"}
  ];


 consultas:any[] = [
  {id:1 , descripcion:"Consulta stock"},
  {id:1 , descripcion:"Consulta receta"},
  {id:1 , descripcion:"Deseo comprar en cantidad"},
 ]

     


  constructor() { 
    this.opcionSeleccionada = 'Tipo de consulta';
    this.sucursalSeleccionada = 'Sucursal';
  }

  ngOnInit(): void {
    
  }


  cambiarValor( item:string ){
    this.opcionSeleccionada = item
  }
  cambiarValorSucursal( item:string ){
    this.sucursalSeleccionada = item
  }

}
