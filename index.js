let selectedAnswers = [null, null, null, null, null];

        function selectAnswer(button, isCorrect, questionIndex) {
          const buttons = button.parentElement.querySelectorAll('button');
          buttons.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
          selectedAnswers[questionIndex] = isCorrect;
        }

        function submitQuiz() {
          let score = 0;
          if (selectedAnswers.includes(null)) {
            alert('Please answer all the questions!');
            return;
          }
          document.querySelectorAll('.container').forEach((container, index) => {
            const buttons = container.querySelectorAll('button');
            buttons.forEach(button => {
              button.classList.remove('correct', 'wrong');
              const onclickAttr = button.getAttribute('onclick');
              if (onclickAttr && onclickAttr.includes('true')) {
                button.classList.add('correct');
              }
              if (button.classList.contains('selected') && (!onclickAttr || !onclickAttr.includes('true'))) {
                button.classList.add('wrong');
              }
            });
            if (selectedAnswers[index]) score++;
          });
          alert(`Your score is: ${score} out of ${selectedAnswers.length}`);
        }