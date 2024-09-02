type Opercao = 'soma' | 'subtracao' | 'multiplicacao' | 'divisao';

function calcular(a: number, b: number, Opercao: Opercao): number | string {
  switch (Opercao) {
    case 'soma':
      return a + b;
    case 'subtracao':
      return a - b;
    case 'multiplicacao':
      return a * b;
    case 'divisao':
      if (b === 0) {
        return 'Erro: Divisão por zero não permitida';
      }
      return a / b;
    default:
      return 'Erro: Operação inválida';
  }
}

// Exemplos de uso
console.log(calcular(10, 5, 'soma'));          
console.log(calcular(10, 5, 'subtracao'));     
console.log(calcular(10, 5, 'multiplicacao')); 
console.log(calcular(10, 5, 'divisao'));       
console.log(calcular(10, 0, 'divisao'));       
