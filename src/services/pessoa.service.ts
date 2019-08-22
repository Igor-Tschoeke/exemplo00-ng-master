import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/pessoa';

const url = environment.url + "pessoas/"
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  adicionar(pessoa: Pessoa): Observable<any> {
    return this.http.post(url + 'adicionar', pessoa);
  }

  obterTodos(): Observable<Pessoa[]>{
  return this.http.get<Pessoa[]>(url + "obtertodos");
  }
}
