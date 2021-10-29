import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Funcionario } from './../components/cadastro/funcionario.model';

@Injectable()
export class CadastroService {

  public readonly apiFuncionarios = 'http://localhost:3001/funcionarios';
  public readonly apiSetores = 'http://localhost:3001/setores';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  get(url): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(url).pipe(
      delay(500)
    );
  };

  getById(id: number | string): Observable<Funcionario> {
    const url = `${this.apiFuncionarios}/${id}`;
    return this.http.get<Funcionario>(url).pipe(
      delay(500)
    );
  }

  post(url, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(url, funcionario).pipe(
      delay(500)
    );
  };

  put(url, id: number | string, funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${url}/${id}`, funcionario)
  }

  delete(id: number | string): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.apiFuncionarios}/${id}`).pipe(
      delay(500)
    );
  }
}
