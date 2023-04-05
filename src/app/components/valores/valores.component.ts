import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  valores:any[] = [
   {titulo: 'Trabajo en Equipo' , descripcion:'Impulsar la participacion de todos para lograr un objetivo comun y la efectividad en la ejecucion de las tareas.' },
   {titulo: 'Respeto' , descripcion:'Es no transgredir los derechos y dignidad de las personas,es la capacidad de aceptar al otro a pesar de las diferencias , sin discriminicacion alguna.' },
   {titulo: 'Responsabilidad' , descripcion:'Es la disposicion de responder siempre de manera eficaz a las obligaciones y compromisos adquiridos.' },
   {titulo: 'Vocacion al Servicio' , descripcion:'Disposicion permanente a satisfacer las necesidades y requerimientos de los clientes, colaboradores y la organizacion.' },
   {titulo: 'Honestidad' , descripcion:'Actuamos con transparencia, veracidad, franqueza, poniendo en ello nuestro mejor esfuerzo y capacidad.' }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
