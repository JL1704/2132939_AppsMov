import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title: string = "Mi nueva pagina!";

  hazmeClic(): void{
    alert("Hiciste clic!");
  }

  imgUrl: string = 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcL2E1NTFjMTA1LTdkNGMtNGE5NC1iM2UzLWZkM2NiYTg3MmIzYy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0='
  ngOnInit(){}

  verdadero: boolean = true;

}
