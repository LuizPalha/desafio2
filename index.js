let qtdVitorias = 106
let qtdDerrotas = 2
let categoria = ""
let resultado = subtracao(qtdVitorias, qtdDerrotas)

if (resultado < 10) {
  categoria = "ferro"
  }else if (resultado >= 11 && resultado <= 20) {
  categoria = "Bronze"
    }else if (resultado >= 21 && resultado <= 50) {
    categoria = "Prata"
      } else if (resultado >= 51 && resultado <= 80) {
      categoria = "Ouro"
        } else if (resultado >= 81 && resultado <= 90) {
        categoria = "Diamante"
          } else if (resultado >= 91 && resultado <= 100) {
          categoria = "Lendario"
            } else if (resultado > 100) {
            categoria = "Imortal"
            }

console.log("O Heroi tem saldo de: " + resultado + " e esta no nivel: " + categoria)


// Funcao subtracao: diminui quantidade de vitorias menos quantidade de derrotas
function subtracao(numA, numB) {
  let subtracao = numA - numB
  return subtracao
}