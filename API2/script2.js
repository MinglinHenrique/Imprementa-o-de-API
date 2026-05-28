const diaSelect = document.getElementById("dia");
const mesSelect = document.getElementById("mes");

for (let dia = 1; dia <= 30; dia++) {
  diaSelect.innerHTML += `<option value="${dia}">${dia}</option>`;
}

for (let mes = 1; mes <= 12; mes++) {
  mesSelect.innerHTML += `<option value="${mes}">${mes}</option>`;
}

  function buscarCotacao() {

  const dia = Number(diaSelect.value);
  const mes = Number(mesSelect.value);

  if (!dia || !mes) return;

  const numero_dias = ((mes - 1) * 30) + dia;

  const url = `https://economia.awesomeapi.com.br/json/daily/USD-BRL/${numero_dias}`;
  console.log(url);
  console.log(numero_dias);
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const div = document.getElementById("desgraca");
      })
      .catch(error => {
        console.error("Erro:", error);
      });
    }