class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return ((this.primeiraNota * 0.6) + (this.segundaNota * 0.4)).toFixed(2);
  }

  situacao() {
    return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

var alunos = [
  new Aluno("Jony", "Silva", 5, 9),
  new Aluno("Patrick", "Miau", 3, 9),
  new Aluno("Ronaldo", "Feno", 2, 5),
  // Adicione mais alunos aqui, se desejar
];

var tabela = document.getElementById("alunosTable");

for (var i = 0; i < alunos.length; i++) {
  var aluno = alunos[i];
  var row = tabela.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = "Aluno " + (i + 1);
  cell2.innerHTML = aluno.nomeCompleto();
  cell3.innerHTML = aluno.media();
  cell4.innerHTML = aluno.situacao();
}
