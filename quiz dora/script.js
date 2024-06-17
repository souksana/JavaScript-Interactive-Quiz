const quizData = [
    {
        question: "Dora sort de sa maison mais elle voit que le bridge (= pont) est levé. Résous le calcul pour qu’il s’abaisse ! 14 + 44 =",
        answers: [""],
        correct: "58",
        questionType: 2,
        phraseCorrection: "14 + 44 = 58",
    },
    {
        question: "Bravo tu as abaissé le bridge (= pont) ! Malheureusement la fin du pont est bloquée par des rochers. Si tu classes ces nombres dans l’ordre croissant, Dora pourra passer.",
        answers: ["6", "10", "2", "4"],
        correct: "24610",
        questionType: 3,
        phraseCorrection: "Ordre croissant signifie juste que les nombres vont du plus petit au plus grand, donc 2, 4, 6, 10",
    },
    {
        question: "Le pont n’est plus bloqué. Chipeur doit être loin maintenant, donc Dora doit déployer la Carte ! Mais avant cela, comment dit-on “pont” en anglais ?",
        answers: [""],
        correct: "BRIDGE",
        questionType: 2,
        phraseCorrection: "Pont se dit 'bridge' en anglais",
    },
    {
        question: "Maintenant que la carte est déployée, où est la montagne ?",
        answers: [`<g id="ciel" class="svgelements">
        <path class="st0 cielE" d="M347,393" />
        <g>
            <g>
                <path class="st0 cielE" d="M640,480H0c0-37.05,0-74.09,0-111.14c0-4.18,0-8.36,0-12.54C0,237.55,0,118.77,0,0c213.33,0,426.67,0,640,0
            V480z" />
            </g>
            <path class="st1 cielE" d="M277.94,78.29c0,0,5.06-16.29,35.06-15.29s39.76,15.29,39.76,15.29s37.4-0.57,31.82,11.57s-140.15,0-140.15,0
        S245.87,69.57,277.94,78.29z" />
            <path class="st1 cielE" d="M403.8,114.95c0,0,2.63-8.45,18.19-7.93c15.56,0.52,20.63,7.93,20.63,7.93s19.4-0.3,16.5,6
        c-2.89,6.3-72.7,0-72.7,0S387.17,110.43,403.8,114.95z" />
            <ellipse class="st2 cielE" cx="8.5" cy="14.5" rx="27.5" ry="23.5" />
        </g>
    </g>`, ` <g id="montagnes" class="svgelements">
    <g>
        <path class="st3 montagnesE"
            d="M587,270.75c0,0,65-142,75-116s38,116,38,116v57.5l-120-14.5L587,270.75z" />
        <path class="st4 montagnesE" d="M527,256c0,0,65-142,75-116s38,116,38,116v57.5L520,299L527,256z" />
        <path class="st4 montagnesE"
            d="M131,215.8c0,0,75.43-63.17,134.21,18.51S160,283,160,283l-23.93-62.87L131,215.8z" />
        <path class="st5 montagnesE"
            d="M0,264.71C0,264.71,65,162,73,163s100,109,143,95s190-128,311-2c0,0,50,55.57,113,38.29V480H0V264.71z" />
        <polygon class="st1 montagnesE"
            points="42.65,200.09 53,206 73.43,192.5 88.86,199.25 105.45,192.5 73,163 		" />
        <path class="st1 montagnesE"
            d="M580,155.64L593,168l14.61-12.36L602,140C602,140,598,124.29,580,155.64z" />
    </g>
</g>`, `<g id="plaine" class="svgelements">
<g>
    <path class="st6 plaineE" d="M0,359c0,0,178-59,240-38s400,39.18,400,39.18V480H0V359z" />
    <path class="st7 plaineE" d="M0,381c37.86-42.72,137.45,17.9,350,5c0.92-0.06-0.05,0,15-1c226.68-15.09,258.18-15.61,275,5
c18.89,23.15,12.19,64.3,0,90C565.12,637.92,79.05,642.75,0,480C-13.92,451.35-21.28,405.01,0,381z" />
    <rect x="119" y="351" class="st8 plaineE" width="12" height="29" />
    <polygon class="st9 plaineE"
        points="130,351 146.14,351 138.07,343.14 144,343.14 135,337 138.07,337 124,313.57 124,351 		" />
    <polygon class="st9 plaineE" points="119.64,350.93 103.5,350.93 111.57,343.07 105.64,343.07 114.64,336.93 111.57,336.93 125.64,313.5 
125.64,350.93 		" />
    <rect x="493.93" y="344.93" class="st8 plaineE" width="6" height="14.5" />
    <polygon class="st9 plaineE" points="498.93,344.93 507,344.93 502.96,341 505.93,341 501.43,337.93 502.96,337.93 495.93,326.21 
495.93,344.93 		" />
    <polygon class="st9 plaineE" points="494.75,344.89 486.68,344.89 490.71,340.96 487.75,340.96 492.25,337.89 490.71,337.89 
497.75,326.18 497.75,344.89 		" />
    <rect x="360.44" y="371.03" class="st8 plaineE" width="16.97" height="41.01" />
    <polygon class="st9 plaineE" points="376.41,371.03 399.24,371.03 387.82,359.92 396.21,359.92 383.48,351.23 387.82,351.23 367.92,318.1 
367.92,371.03 		" />
    <polygon class="st9 plaineE" points="360.93,370.93 338.11,370.93 349.52,359.82 341.14,359.82 353.86,351.13 349.52,351.13 369.42,318 
369.42,370.93 		" />
</g>
</g>`],
        correct: "montagnes",
        questionType: 4,
        phraseCorrection: "La montagne était au milieu",
    },
    {
        question: "Dora est maintenant sur la montagne. Au loin, elle aperçoit un calcul. 3x5 ?",
        answers: ["30", "15", "24", "40"],
        correct: 1,
        questionType: 1,
        phraseCorrection: "3x5 = 5+5+5 = 15",
    },
    {
        question: "Dora aperçoit un lac gelé. Pour le traverser, elle doit trouver la réponse à cette addition : 8 + 6 + 7 ?",
        answers: [""],
        correct: "21",
        questionType: 2,
        phraseCorrection: "8 + 6 + 7 = 21, pour que ce soit plus facile tu peux faire 8 + 6 = 14 puis 14 + 7 = 21",
    },
    {
        question: "Une grand-mère a vu Chipeur. Pour qu'elle accepte de te dire où il est parti, tu dois lui dire la capitale de la France :",
        answers: ["Paris", "Nantes", "Lyon", "Metz"],
        correct: 0,
        questionType: 1,
        phraseCorrection: "La capitale de la france et Paris",
    },
    {
        question: "La grand-mère a dit qu'il est parti vers la ville. Il faut y aller le plus vite possible. Qu'est-ce qui va le plus vite ?",
        answers: ["Le velo", "Marcher", "La voiture"],
        correct: 2,
        questionType: 1,
        phraseCorrection: "La capitale de la france et Paris",
    },
    {
        question: "Sur le chemin, Babouche me pose une question : si on mélange du rouge et du bleu, ça fait quelle couleur ?",
        answers: ["Rouge", "Vert", "Orange", "Rose"],
        correct: 3,
        questionType: 1,
        phraseCorrection: "Si on mélange le bleu et le rouge cela fait du rose, aussi appelé Magenta",
    },
    {
        question: `On a rattrapé Chipeur juste avant d'arriver en ville. Pour qu'il s'arrête et nous rende notre lanterne, je crie : "CHIPEUR"`,
        answers: [""],
        correct: "CHIPEUR",
        questionType: 2,
        phraseCorrection: "Tu n'as pas bien écrit Chipeur",
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
    localStorage.setItem("Dora", 1);

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