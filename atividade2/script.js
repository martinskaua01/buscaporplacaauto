function pesquisarAutomovel() {
    var placa = document.getElementById('placa').value.toUpperCase();
  
    fetch('automoveis.json')
      .then(response => response.json())
      .then(data => {
        var automovel = data.find(a => a.placa === placa);
  
        if (automovel) {
          alert(`
            Marca: ${automovel.marca}
            Modelo: ${automovel.modelo}
            Ano: ${automovel.ano}
          `);
        } else {
          alert('Nenhum automóvel encontrado com essa placa.');
        }
      })
      .catch(error => {
        alert('Erro ao carregar os dados dos automóveis.');
        console.error(error);
      });
  }
  
  function atualizarRelogio() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    var formattedTime = hours + ':' + minutes + ':' + seconds;
  
    var clockText = document.getElementById('clock-text');
    clockText.textContent = formattedTime;
  }
  
  setInterval(atualizarRelogio, 1000);
  