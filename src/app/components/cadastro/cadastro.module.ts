import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastroService } from 'src/app/services/cadastro.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CadastroCreatComponent } from './cadastro-creat/cadastro-creat.component';
import { CadastroDeleteComponent } from './cadastro-delete/cadastro-delete.component';
import { CadastroReadComponent } from './cadastro-read/cadastro-read.component';
import { CadastroUpdateComponent } from './cadastro-update/cadastro-update.component';



@NgModule({
  declarations: [
    CadastroReadComponent,
    CadastroCreatComponent,
    CadastroUpdateComponent,
    CadastroDeleteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CadastroReadComponent
  ],
  providers: [
    CadastroService
  ]
})
export class CadastroModule { }
