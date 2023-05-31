function submitQuiz() {
   var form = document.getElementById("quiz-form");
   var answers = form.elements;
   var scores = {
     garra: 0,
     esforco: 0,
     foco: 0,
     inteligencia: 0,
     raciocinio: 0,
     responsabilidade: 0,
     moderacao: 0,
     generosidade: 0,
     autoestima: 0,
     apaixonada: 0
   };
 
   // Verifica se todas as perguntas foram respondidas
   var allQuestionsAnswered = true;
   for (var i = 0; i < answers.length; i++) {
     if (answers[i].value === "") {
       allQuestionsAnswered = false;
       break;
     }
   }
 
   // if (i < answers.length) {
   //   var errorMessage = document.getElementById("error-message");
   //   errorMessage.textContent = "Por favor, responda todas as perguntas.";
   //   return;
   // }
 
   // Calcula a pontuação com base nas respostas selecionadas
   for (var i = 0; i < answers.length; i++) {
     var selectedValue = answers[i].value;
     scores[selectedValue]++;
   }
 
   // Determina o resultado com base na pontuação
   var result = document.getElementById("result");
   var highestScore = 0;
   var character = "";
 
   // Objeto com os nomes dos personagens
   var characterNames = {
     garra: "Naruto Uzumaki",
     esforco: "Rock Lee",
     foco: "Sasuke Uchiha",
     inteligencia: "Sakura Haruno",
     raciocinio: "Kakashi Hatake",
     responsabilidade: "Tsunade Senju",
     moderacao: "Jiraiya",
     generosidade: "Gaara",
     autoestima: "Neji Hyuga",
     apaixonada: "Hinata Hyuga"
   };
 
   for (var score in scores) {
     if (scores[score] > highestScore) {
       highestScore = scores[score];
       character = score;
     }
   }
 
   // Exibe o resultado na tela
   result.innerHTML = "Personagem associado: " + characterNames[character];
 }
 