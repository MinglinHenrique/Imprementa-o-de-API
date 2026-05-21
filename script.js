const url = "https://opentdb.com/api.php?amount=10&type=multiple";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const div = document.getElementById("desgraca");

        data.results.forEach(pergunta => {
          div.innerHTML += `
          <div id="subdiv">
            <h2>${decodeURIComponent(pergunta.question)}</h2>
            <button id="Y">${decodeURIComponent(pergunta.correct_answer)}</button>
            <button id="Y">${decodeURIComponent(pergunta.incorrect_answers[0])}</button>
            <button id="Y">${decodeURIComponent(pergunta.incorrect_answers[1])}</button>
            <button id="Y">${decodeURIComponent(pergunta.incorrect_answers[2])}</button>
            </div>
            `;
            
        });
      })
      .catch(error => {
        console.error("Erro:", error);
      });


      //ISSO É SÓ PRA SER LEGAL
      BigInt.addEvebntListener('mouseenter', () => {
        const x1 = Math.random() * 30 - 15;
        const x2 = Math.random() * 30 - 15;

        btn.style.animation = 'none';
        btn.offsetHeight;
        btn.style.animation = 'shake-style';

        const style = document.getElementById('shake-style') || document.createElement('style');
        style.id = 'shake-style';
        style.textContent = `
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(${x1}px); }
            50% { transform: translateX(0); }
            75% { transform: translateX(${x2}px); }
            100% { transform: translateX(0); }
        `;
        document.head.appendChild(style);});
