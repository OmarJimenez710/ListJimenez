import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  name : string = '';
  img : string = '';
  prom : number = 0;
  studentState : string = '';
  gen : string = '';
  fecha = new Date();


  studentList = [
    {
      "name": "John",
      "lastName": "Doe",
      "gender": "male",
      "promedio": 8.5,
      "imagen" : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "name": "Jane",
      "lastName": "Smith",
      "gender": "female",
      "promedio": 9.2,
      "imagen" : "https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp"
    },
    {
      "name": "Michael",
      "lastName": "Johnson",
      "gender": "male",
      "promedio": 7.8,
      "imagen" : "https://media.istockphoto.com/id/466335194/es/foto/retrato-de-hombre-real.jpg?s=612x612&w=0&k=20&c=ndc5A93cXaPO_EjUnEKwLUCAi7_8RuaE4tnxKsVoKzI="
    },
    {
      "name": "Emily",
      "lastName": "Brown",
      "gender": "female",
      "promedio": 5.9,
      "imagen" : "https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
    },
    {
      "name": "Daniel",
      "lastName": "Miller",
      "gender": "male",
      "promedio": 7.3,
      "imagen" : "https://static.vecteezy.com/system/resources/previews/001/131/187/non_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg"
    },
    {
      "name": "Olivia",
      "lastName": "Davis",
      "gender": "female",
      "promedio": 9.6,
      "imagen" : "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_640.jpg"
    },
    {
      "name": "David",
      "lastName": "Wilson",
      "gender": "male",
      "promedio": 8.2,
      "imagen" : "https://www.lavanguardia.com/files/image_480_496/files/fp/uploads/2021/09/30/6154f27965814.r_d.528-377.jpeg"
    },
    {
      "name": "Sophia",
      "lastName": "Moore",
      "gender": "female",
      "promedio": 6.3,
      "imagen" : "https://mochileros.org/nelson/wp-content/uploads/2020/04/esta-persona-no-existe-8.jpg"
    },
    {
      "name": "Matthew",
      "lastName": "Taylor",
      "gender": "male",
      "promedio": 7.6,
      "imagen" : "https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg"
    },
    {
      "name": "Emma",
      "lastName": "Anderson",
      "gender": "female",
      "promedio": 9.8,
      "imagen" : "https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg"
    }
  ];
  

  infoStudent(student : any){
    this.name = student.name + " " + student.lastName;
    this.img = student.imagen;
    this.prom = student.promedio;

    student.gender == 'male' ? this.gen = "Alumno" : this.gen = "Alumna";
    this.prom > 8 ? this.studentState = "EXCENTO" : this.studentState = "NO EXCENTO";
  }
}
