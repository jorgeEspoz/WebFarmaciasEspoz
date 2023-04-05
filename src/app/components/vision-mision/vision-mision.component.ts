import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-mision',
  templateUrl: './vision-mision.component.html',
  styleUrls: ['./vision-mision.component.css']
})
export class VisionMisionComponent implements OnInit {

  
  descripciones:any[] = [
    
    {titulo:'PROPOSITO',descripcion:"Farmacias Espoz S.A tiene el proposito de ser la cadena de farmacias independientes mas asequible del mercado , entregando a la comunidad un variado catalogo de productos para el cuidado de la salud .",},
    {titulo:'VISION',descripcion:"Farmacias Espoz S.A es la una cadena de Farmacias con un crecimiento sostenido que represente a los independientes, siendo la primera opcion para los clientes, entregando un servicio de calidad con eficiencia y con la mayor participacion de mercado en la region metropolitana, en un ambiente laboral de un alto desempeño y el respeto hacia sus trabajadores",},
    {titulo:'MISION',descripcion:"Prestar un optimo servicio y reales soluciones de salud, con un equipo humano altamente calificado, brindando una atencion oportuna, profesional y confiable ",},
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
