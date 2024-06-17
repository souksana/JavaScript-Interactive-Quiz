const quizData = [
    {
        question: "Les Spies passent leur vacances sur une île paradisiaque. Quel est son nom ?",
        answers: ["Espagne", "Guadeloupe", "Bresil", "Canada"],
        correct: 1,
        questionType: 1,
        phraseCorrection: "Seul la Guadeloupe est une île",
    },
    {
        question: "Le méchant est sur le volcan de la Guadeloupe, comment s'appelle le volcan",
        answers: ["Pico do Fogo", "Le mont Otemanu", "L'Ethna", "La Soufrière"],
        correct: 3,
        questionType: 1,
        phraseCorrection: "Le nom du volcan de la Guadeloupe est La Soufrière",
    },
    {
        question: "Ils sont en route vers le volcan. Pour déchiffrer les panneaux, ils doivent résoudre le calcul : X + 10 =X x 2. Donc X = ?",
        answers: [""],
        correct: "10",
        questionType: 2,
        phraseCorrection: "10 + 10 = 10*2, X = 10",
    },
    {
        question: "Ils sont enfin arrivés au volcan. Une porte secrète est devant eux. Ils doivent déchiffrer le code. Voici leur indice : ACEF. Quel est le code ?",
        answers: ["1356", "2589", "1421", "1367"],
        correct: 0,
        questionType: 1,
        phraseCorrection: "Il fallait transformer les lettres en chiffre, A=1 donc C=3, E=5 et F=6 donc le code est 1356",
    },
    {
        question: "La porte s'est ouverte. Classe ces planètes de la plus petite à la plus grosse pour arriver jusqu'au méchant.",
        answers: ["Mercure", "Uranus", "Terre", "Vénus"],
        correct: "MercureVénusTerreUranus",
        questionType: 3,
        phraseCorrection: "L'ordre du plus petit au plus grand est le suivant : Mercure, Vénus, Terre et enfin Uranus",
    },
    {
        question: "Clover le reconnaît, elle dit qu'il porte le nom de la planète la plus proche de la Terre. Comment s'appelle-t-il ?",
        answers: ["Mercure", "Mars", "Jupiter", "Lune"],
        correct: 0,
        questionType: 1,
        phraseCorrection: "C'est Mercure, la planète la plus proche de la Terre.",
    },
    {
        question: "Pas le choix il va falloir le combattre pour savoir où est le professeur. Pour aider les Spies, réponds le plus vite possible aux question. Combien de lettres compte l'alphabet français ?",
        answers: [""],
        correct: "26",
        questionType: 2,
        phraseCorrection: "Il y a 26 lettres dans l'alphabet français",
    },
    {
        question: "Bien joué ! Qui a inventé la théorie de la relativité ?",
        answers: ["Albert Einstein", "Louis Pasteur", "Marie Curie"],
        correct: 0,
        questionType: 1,
        phraseCorrection: "C'est Albert Einstein qui a inventé la théorie de la relativité",
    },
    {
        question: "Encore un petit effort ! Quel est le plus grand désert du monde ?",
        answers: ["Le Sahara", "Hoggar", "Thar"],
        correct: 0,
        questionType: 1,
        phraseCorrection: "Le Sahara est le plus grand désert du monde",
    },
    {
        question: "Elles y sont presque ! Qui a peint la Joconde ?",
        answers: ["Picasso", "Léonard de Vinci", "Vincent Van Gogh", "Henri Rousseau"],
        correct: 1,
        questionType: 1,
        phraseCorrection: "Léonard de Vinci a peint la Joconde",
    },
    {
        question: `Bravo il est vaincu ! Le méchant dit que le professeur est enfermé à la capitale de l'Espagne. Trouve son nom et c'est gagné !`,
        answers: [""],
        correct: "MADRID",
        questionType: 2,
        phraseCorrection: "La capitale de l'espagne est Madrid",
    },
];

const quizContainer = document.querySelector('.quiz-container');
const questionContainer = document.querySelector('.question-container');
const answerButtons = document.querySelectorAll('.answer');
const answerContainer = document.querySelector('.answer-container');
const sortableList = document.getElementById('sortable-list');

let currentQuestionIndex = 0;
let score = 0;

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correct;
    const correction = document.querySelector('.reponse')
    correction.style.display = "block";
    // Vérifier si la réponse est correcte
    console.log(selectedIndex)
    console.log(correctAnswerIndex)
    if (selectedIndex === correctAnswerIndex) {
        score++;
        console.log(score)
        correction.style.backgroundColor = "green";
        correction.textContent = `Bravo tu as eu la bonne reponse !`
        setTimeout(() => {
            correction.style.display = "none";
        }, 5000);
    }
    else {
        correction.textContent = `Faux, ${quizData[currentQuestionIndex].phraseCorrection}`
        correction.style.backgroundColor = "red";
        setTimeout(() => {
            correction.style.display = "none";
        }, 10000);
    }

    // Passer à la prochaine question ou afficher les résultats
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        updateProgressBar()
    } else {
        displayResult();
    }
}

// ------------------------------ end ---------------------------------
function displayResult() {
    quizContainer.style.display = "none";
    let timeEnd = document.querySelector("#timer-end");
    let contenuTimer = document.querySelector("#timer").textContent;
    timeEnd.textContent = contenuTimer;
    document.querySelector(".quiz_end").style.display = "block";

    // augmenter le score 
    let currentScore = parseInt(localStorage.getItem("Score")),
        newScore = currentScore + score;
    console.log(score)
    localStorage.setItem("Score", newScore);
    localStorage.setItem("Totally Spies", 1);

    document.querySelector(".score").textContent = score;

    // augmenter les badges 
    var dora = parseInt(localStorage.getItem('Dora')),
        ts = parseInt(localStorage.getItem('Totally Spies'));
    newBadge = dora + ts;
    localStorage.setItem('Nombre badge', newBadge)

    // si le quiz est recommencé 
    score = 0;
}

function displayQuestion(questionIndex) {
    const svg = document.querySelector('.svg');
    svg.style.display = 'none';
    const currentQuestion = quizData[questionIndex];
    const questionElement = document.querySelector('.question');
    const answerInput = document.querySelector('.answer-input');
    const submitButton = document.querySelector('.submit-answer');
    const answerButtons = document.querySelectorAll('.answer');
    document.querySelector(".question-number").textContent = questionIndex + 1;
    questionElement.textContent = currentQuestion.question;
    answerInput.value = ""; // Réinitialiser la valeur de l'entrée

    // Cacher tous les éléments de réponse par défaut
    answerButtons.forEach(button => button.style.display = 'none');
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';

    // Nettoyer les écouteurs d'événements précédents
    answerButtons.forEach(button => button.removeEventListener('click', handleAnswerClick));
    submitButton.removeEventListener('click', handleSubmitClick);

    if (currentQuestion.questionType === 1 && currentQuestion.answers.length > 0) {
        // Afficher les réponses dans les boutons disponibles
        currentQuestion.answers.forEach((answer, index) => {
            if (index < answerButtons.length) {
                answerButtons[index].textContent = answer;
                answerButtons[index].style.display = 'block';
            }
        });

        // Ajouter des écouteurs d'événements aux boutons de réponse
        answerButtons.forEach((button, index) => {
            button.addEventListener('click', handleAnswerClick);
        });
    } else if (currentQuestion.questionType === 2) {
        // Afficher l'entrée et le bouton de soumission pour le type de question 2
        answerInput.style.display = 'block';
        submitButton.style.display = 'block';

        submitButton.addEventListener('click', handleSubmitClick);
    }
    else if (currentQuestion.questionType === 3) {
        const sortableItems = sortableList.querySelectorAll('.sortable-item');
        answerInput.style.display = 'none';
        submitButton.style.display = 'none';
        sortableList.style.display = 'grid';
        document.querySelector(".submit-draggable").style.display = 'block';
        currentQuestion.answers.forEach((answer, index) => {
            if (index < sortableItems.length) {
                sortableItems[index].textContent = answer;
            }
        });
    }
    else if (currentQuestion.questionType === 4) {
        const svg = document.querySelector('.svg');
        svg.style.display = 'block';
        const svgG = document.querySelectorAll('g');
        answerInput.style.display = 'none';
        submitButton.style.display = 'none';

        currentQuestion.answers.forEach((answer, index) => {
            if (index < svgG.length) {
                svgG[index].innerHTML = answer;
                svgG[index].addEventListener('click', clickHandler);
            }
        });
        answerInput.style.display = 'none';
        submitButton.style.display = 'none';
    }

    // Mettre à jour la barre de progression
    updateProgressBar();
}
function clickHandler() {
    // Obtenez la valeur correspondante dans les réponses
    const value = this.getAttribute('id'); // Récupérer l'ID de l'élément <g> 
    selectAnswer(value);
}

// Gérer le clic sur un bouton de réponse
function handleAnswerClick(event) {
    const selectedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
    selectAnswer(selectedIndex);
}

// Gérer le clic sur le bouton de soumission
function handleSubmitClick() {
    const playerAnswer = document.querySelector('.answer-input').value;
    selectAnswer(playerAnswer.toUpperCase());
}



function updateProgressBar() {
    const percentage = (currentQuestionIndex / (quizData.length - 1)) * 100;
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = `${percentage}%`;

    // Modifie la couleur de la barre de progression en vert lorsque le quiz est terminé
    if (currentQuestionIndex === quizData.length - 1) {
        progressBar.style.backgroundColor = "green";
    }
}



// draggable

let draggedItem = null;

sortableList.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    e.dataTransfer.setData('text/plain', e.target.dataset.value);
    e.target.classList.add('dragging');
});

sortableList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const targetItem = e.target.closest('.sortable-item');
    if (!targetItem) return;
    if (targetItem !== draggedItem) {
        const rect = targetItem.getBoundingClientRect();
        const nextElement = (e.clientY - rect.top) > (rect.bottom - e.clientY) ? targetItem.nextElementSibling : targetItem;
        sortableList.insertBefore(draggedItem, nextElement);
    }
});

sortableList.addEventListener('dragend', () => {
    draggedItem.classList.remove('dragging');
    draggedItem = null;
})

function getOrder() {
    const sortableList = document.getElementById('sortable-list');
    const sortableItems = sortableList.querySelectorAll('.sortable-item');
    let playerAnswer = '';
    sortableItems.forEach(item => {
        playerAnswer += item.textContent;
    });
    return playerAnswer;
}


// Exemple d'utilisation :
const orderButton = document.querySelector('.submit-draggable');
orderButton.addEventListener('click', () => {
    const playerAnswer = getOrder();
    selectAnswer(playerAnswer);
    sortableList.style.display = 'none';
    document.querySelector(".submit-draggable").style.display = 'none';
});

// Cursor

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
});

function lancement() {
    // Début du jeu : Affichage de la première question si le type de question est de type 1
    displayQuestion(currentQuestionIndex);
    quizContainer.style.display = "block";
    document.querySelector(".quiz_end").style.display = "none";
    document.querySelector(".total-questions").textContent = quizData.length;
    console.log("ok")
}

const starter = document.querySelector('.start');
starter.addEventListener('click', () => {
    startChronometer()
    lancement()
    document.querySelector(".quizz_Starter").style.display = "none";
});

var timerInterval;
function startChronometer() {
    var timerDisplay = document.getElementById('timer');
    var seconds = 0;
    var minutes = 0;

    timerInterval = setInterval(function () {
        // Incrémente les secondes
        seconds++;

        // Ajoute un zéro devant si les secondes sont inférieures à 10
        var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        // Incrémente les minutes si les secondes atteignent 60
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        // Ajoute un zéro devant si les minutes sont inférieures à 10
        var displayMinutes = minutes < 10 ? "0" + minutes : minutes;

        // Met à jour le contenu de la div avec le chronomètre
        timerDisplay.textContent = displayMinutes + ":" + displaySeconds;
    }, 1000); // Met à jour toutes les secondes
}
function restartChronometer() {
    clearInterval(timerInterval); // Arrête l'intervalle actuel
    timerInterval = startChronometer(); // Redémarre le chronomètre et obtient le nouvel identifiant de l'intervalle
}
// restart

const restartButton = document.querySelector('.quiz_restart'); // Utiliser restartButton au lieu de starter
restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0; // Utiliser restartButton au lieu de starter
    restartChronometer()
    lancement();
    console.log("restart");
    const progressBar = document.querySelector(".progress");
    progressBar.style.backgroundColor = "#435e7d";
});


// Desactiver timer
var EtatTimer = 0;
const DesableTimer = document.querySelector('.desableTimer'); // Utiliser restartButton au lieu de starter
DesableTimer.addEventListener('click', () => {
    if (EtatTimer == 0) {
        const Timer = document.querySelector('#timer');
        Timer.style.display = "none";

        const TimerEnd = document.querySelector('#timer-end');
        TimerEnd.style.display = "none";

        DesableTimer.textContent = "Activer timer";
        EtatTimer = 1;
    }
    else {
        const Timer = document.querySelector('#timer');
        Timer.style.display = "block";

        const TimerEnd = document.querySelector('#timer-end');
        TimerEnd.style.display = "block";

        DesableTimer.textContent = "Désactiver timer";
        EtatTimer = 0;
    }

});