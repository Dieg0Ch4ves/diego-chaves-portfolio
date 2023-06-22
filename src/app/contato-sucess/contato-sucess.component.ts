import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-contato-sucess',
  templateUrl: './contato-sucess.component.html',
  styleUrls: ['./contato-sucess.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContatoSucessComponent {

  constructor(
    private router: Router
  ) {}

  voltar() {
    return this.router.navigate(['./'])
  }
}
