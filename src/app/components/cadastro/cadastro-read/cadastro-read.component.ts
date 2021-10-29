import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Funcionario } from './../funcionario.model';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.scss']
})
export class CadastroReadComponent implements OnInit {

  listaFuncionarios: Funcionario[];


  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastroService.get(this.cadastroService.apiFuncionarios).subscribe(lista => this.listaFuncionarios = lista);
  }

}
