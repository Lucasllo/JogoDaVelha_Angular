import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent {
  jogador: string = 'O';
  vencedor: string = '';
  tabela: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  seleciona(lin: number, col: number) {
    if (this.tabela[lin][col] == '' && this.vencedor == '') {
      this.tabela[lin][col] = this.jogador;
    }

    if(this.verificaVencedor(this.jogador)){
      this.vencedor = this.jogador;
    }


    if (this.jogador == 'O') {
      this.jogador = 'X';
    } else {
      this.jogador = 'O';
    }
  }

  verificaVencedor(jogador:string):boolean{
    for (let i = 0; i < this.tabela.length; i++) {
      if(this.tabela[i][0] == jogador && this.tabela[i][1] == jogador && this.tabela[i][2] == jogador){
        return true;
      }
    }
    for (let i = 0; i < this.tabela.length; i++) {
      if(this.tabela[0][i] == jogador && this.tabela[1][i] == jogador && this.tabela[2][i] == jogador){
        return true;
      }
    }
    if(this.tabela[0][0] == jogador && this.tabela[1][1] == jogador && this.tabela[2][2] == jogador ){
      return true;
    }
    if(this.tabela[0][2] == jogador && this.tabela[1][1] == jogador && this.tabela[2][0] == jogador ){
      return true;
    }
    return false;
  }

  reset() {
    this.jogador = 'O';
    this.vencedor = '';
    this.tabela = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
