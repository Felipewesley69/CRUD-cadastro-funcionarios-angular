import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Funcionario } from './../funcionario.model';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.scss']
})
export class CadastroUpdateComponent implements OnInit {

  funcionario: Funcionario;
  form: FormGroup;
  setores: any[];

  constructor(private cadastroService: CadastroService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {

    this.cadastroService.getById(this.route.snapshot.paramMap.get('id')).subscribe(funcionario => {
      this.funcionario = funcionario;
      this.form.patchValue(this.funcionario);
    });
    this.cadastroService.get(this.cadastroService.apiSetores).subscribe(lista => this.setores = lista);
    this.buildeForm();
  }

  ngOnInit(): void {
  }

  salvar() {
    this.cadastroService.put(this.cadastroService.apiFuncionarios, this.route.snapshot.paramMap.get('id'), this.form.value).subscribe(() => {
      this.cadastroService.showMessage('Cadastro alterado com sucesso!');
      this.router.navigate(['/cadastro']);
    });
  }

  cancelar() {
    this.router.navigate(['/cadastro']);
  }

  buildeForm() {
    this.form = this.fb.group({
      matricula: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      setor: [null, [Validators.required]],
      salario: [null, [Validators.required]],
      contato: [null, [Validators.required]]
    });
  }

}
