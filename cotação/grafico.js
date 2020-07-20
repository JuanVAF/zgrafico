function criaGrafico(idGrafico, dados, cor, bcor){
  var ctx = document.getElementById(idGrafico).getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      
      // The data for our dataset
      data: {
          labels: dados["RótuloX"],
          datasets: [{
              label: dados["indicador"],
              backgroundColor: cor,
              borderColor: bcor,
              data: dados["dados"]
          }]
      },
      
      // Configuration options go here
      options: {}
  });
}

var dadosGrafico1 = {
  "indicador": "Dólar",
  "RótuloX": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  "dados": [4.07, 4.03, 4.97, 5.03, 5.01, 5.04, 5.33]
}

criaGrafico("grafico-1", dadosGrafico1, 'rgb(20, 249, 171)', 'rgb(20, 249, 171)')

var dadosGrafico2 = {
  "indicador": "Euro",
  "RótuloX": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  "dados": [4.65, 4.94, 5.73, 5.81, 5.92, 6.01, 6.11]
}

criaGrafico("grafico-2", dadosGrafico2, 'rgb(144, 98, 171)', 'rgb(144, 98, 171)')

var dadosGrafico3 = {
  "indicador": "Peso Argentino",
  "RótuloX": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  "dados": [14.34, 14.05, 12.76, 11.86, 12.82, 13.16, 13.30]
}

criaGrafico("grafico-3", dadosGrafico3, 'rgb(254, 188, 149)', 'rgb(254, 188, 149)')

var dadosGrafico4 = {
  "indicador": "Libra Esterlina",
  "RótuloX": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  "dados": [4.54, 4.94, 5.73, 6.12, 5.92, 6.15, 6.06]
}

criaGrafico("grafico-4", dadosGrafico4, 'rgb(158, 176, 190)', 'rgb(158, 176, 190)')

var dadosGrafico5 = {
  "indicador": "Iene",
  "RótuloX": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  "dados": [4.74, 4.94, 5.74, 5.80, 5.92, 6.11, 6.06]
}

criaGrafico("grafico-5", dadosGrafico5, 'rgb(79, 66, 190)', 'rgb(79, 66, 190)')

var dadosGrafico6 = {
  "indicador": "Rublo",
  "RótuloX": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  "dados": [4.74, 4.94, 5.74, 6.01, 5.92, 6.07, 6.13]
}

criaGrafico("grafico-6", dadosGrafico6, 'rgb(79, 147, 46)', 'rgb(79, 147, 46)')