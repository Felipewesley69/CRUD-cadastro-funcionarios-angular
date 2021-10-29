import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Funcionario } from './../funcionario.model';

@Component({
  selector: 'app-cadastro-creat',
  templateUrl: './cadastro-creat.component.html',
  styleUrls: ['./cadastro-creat.component.scss']
})
export class CadastroCreatComponent implements OnInit {


  form: FormGroup;
  setores: any[];

  constructor(private cadastroService: CadastroService, private fb: FormBuilder, private route: Router) {
    this.buildeForm()
  }

  ngOnInit(): void {
    this.cadastroService.get(this.cadastroService.apiSetores).subscribe(lista => this.setores = lista);
  }

  buildeForm() {
    this.form = this.fb.group({
      matricula: ['', [Validators.required]],
      nome: [null, [Validators.required, Validators.maxLength(30)]],
      setor: [null, [Validators.required]],
      salario: [null, [Validators.required]],
      contato: [null, [Validators.required]]
    });
  }

  salvar() {

    if (!this.form.valid) return this.cadastroService.showMessage('Todos os campos devem ser preenchidos!', true);

    if (this.form.controls.contato.value.length < 11) {
      this.form.controls.contato.setValue('');
      return this.cadastroService.showMessage('Adicione um número válido!', true)
    }

    const funcionario: Funcionario = this.form.value;

    this.cadastroService.post(this.cadastroService.apiFuncionarios, funcionario).subscribe(() => {
      this.route.navigate(['/cadastro']);
      this.cadastroService.showMessage('Cadastro realizado!');
    });
  }

  cancelar(): void {
    this.route.navigate(['/cadastro']);
  }
}
