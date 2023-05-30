document.addEventListener('DOMContentLoaded', function() {
    // Obtém os elementos do formulário
    const form = document.getElementById('form');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate');
    const bmiValue = document.getElementById('valor');
    const bmiDescription = document.getElementById('description');
    const infosSection = document.getElementById('infos');
  
    // Adiciona um listener de evento para o botão de calcular
    calculateButton.addEventListener('click', function(event) {
      event.preventDefault(); // Evita o envio do formulário
  
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value);
  
      // Verifica se os campos de peso e altura foram preenchidos corretamente
      if (isNaN(weight) || isNaN(height)) {
        // Exibe uma mensagem de erro caso os valores sejam inválidos
        alert('Por favor, insira valores numéricos válidos para peso e altura.');
        return;
      }
  
      // Calcula o IMC
      const bmi = weight / (height * height);
  
      // Exibe o resultado e a descrição
      bmiValue.textContent = bmi.toFixed(2);
      bmiDescription.textContent = getBmiDescription(bmi);
  
      // Exibe a seção de informações
      infosSection.classList.remove('hidden');
    });
  
    // Função para obter a descrição do IMC
    function getBmiDescription(bmi) {
        if (bmi < 18.5) {
          return 'Abaixo do peso. Recomenda-se adotar hábitos mais saudáveis. para alcançar o peso normal.';
        } else if (bmi < 25) {
          return 'Peso normal. Continue mantendo um estilo de vida saudável.';
        } else if (bmi < 30) {
          return 'Sobrepeso . Recomenda-se adotar hábitos mais saudáveis.';
        } else if (bmi < 35) {
          return 'Obesidade grau I. Recomenda-se buscar orientação médica. ';
        } else if (bmi < 40) {
          return 'Obesidade grau II. É importante buscar orientação médica.';
        } else {
          return 'Obesidade grau III. É fundamental buscar ajuda médica imediatamente.';
        }
      }
    })