import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-contato-sucess',
  templateUrl: './contato-sucess.component.html',
  styleUrls: ['./contato-sucess.component.css']
})
export class ContatoSucessComponent {

  constructor(
    private router: Router
  ) {}

  voltar() {
    return this.router.navigate(['./'])
  }
}
