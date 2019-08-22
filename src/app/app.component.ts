import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nome: string = '';
  sobrenome = '';
  //nome = '';
  pessoas: Pessoa[] = [];

  constructor(private service: PessoaService){}

  ngOnInit(){
    this.service.obterTodos().subscribe(
      x => { this.pessoas = x;
       } 
    );
  }



  salvar() {
    let nomeCompleto = this.nome + " " +
      this.sobrenome;
    let pessoa = new Pessoa();
    pessoa.id = 1;
    pessoa.nome = this.nome;
    pessoa.sobrenome = this.sobrenome;
    this.service.adicionar(pessoa).subscribe(x => {
      
      this.nome = '';
      this.sobrenome = '';
      document.getElementById("campo-nome").focus();
    })


  }

}
