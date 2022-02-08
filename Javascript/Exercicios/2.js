

let FluxoCaixa = {
    receitas: [100, 500, 109.9],
    despesas: [ 50, 100, 300]
  }
  
  function Soma(array){
    let total = 0;
  
    for(let valor of array){
      total += valor
    }
    return total
  }
  
  function CalcularCaixa(){
    const calcularDespesas = Soma(FluxoCaixa.despesas)
    const calcularReceitas = Soma(FluxoCaixa.receitas)
  
    const total = calcularReceitas - calcularDespesas;
  
    if(total >= 0){
      console.log("Caixa positivo: " + total)
    }else{
      console.log("Caixa negativo: " + total)
    }
  
  }
  
  CalcularCaixa()