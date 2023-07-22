import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.css']
})
export class FormContatoComponent {
  nome = '';
  email = '';
  mensagem = '';

  textToCopy: string = 'diegoaraujo200570@gmail.com';
  copied: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  copy() {
    navigator.clipboard.writeText(this.textToCopy).then(
      () => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1500); // Reset "copied" after 1.5 seconds
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  }


  enviar() {
    const url = 'https://api.staticforms.xyz/submit';
    const formData = {
      name: this.nome,
      email: this.email,
      message: this.mensagem,
      accessKey: '91b40a8e-8b95-416e-9bb0-9f42267faf22'
    };

    if (this.nome && this.email && this.mensagem) {
      this.http.post(url, formData)
        .subscribe((response: any) => {
          if (response.success) {
            this.router.navigate(['./mensagem-sucesso']);
          } else {
            alert('Erro ao enviar contato!');
          }
        }, (error) => {
          console.error('Erro ao enviar o formulário:', error);
        });
    } else {
      alert('Contato não enviado. Preencha os campos para ser enviado!');
    }
  }
}
