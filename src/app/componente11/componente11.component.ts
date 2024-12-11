import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {
  // objeto de formulario
    formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  //Visibilidade dos botoes
  btnCadastrar:boolean = true;

  // vetor
  vetor:Pessoa[] = [];

  indice:number = -1

  // função de cadastro
  cadastrar(){
    //cadastrar no vetor
    this.vetor.push(this.formulario.value as Pessoa);
    // limpeza dos inputs
    this.formulario.reset();
    // visualização via console
    // console.table(this.vetor);
  }
  
  //função de seleção
  selecionar(indice:number){
    //atribuir 0 indice da pessoa
    this.indice = indice;
    //atribuir os dados da pessoa
    this.formulario.setValue({
      nome:this.vetor[indice].nome,
      idade:this.vetor[indice].idade,
      cidade:this.vetor[indice].cidade,
    });
    //visualizar os botões
    this.btnCadastrar = false;
  }

  //Alteração
  alterar(){
    //Alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;
    // limpeza dos inputs
    this.formulario.reset();
    // visibilidade dos botoes
    this.btnCadastrar = true;
  }
  // função remorver pessoa
  remover(){
    //Remover pessoa do vetor
    this.vetor.splice(this.indice, 1);
    // limpeza dos inputs
    this.formulario.reset();
    // visibilidade dos botoes
    this.btnCadastrar = true;
  }
  //função de cancelar
  cancelar(){
    // limpeza dos inputs
    this.formulario.reset();
    // visibilidade dos botoes
    this.btnCadastrar = true;
  }

}
