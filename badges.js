// add badge 
var badgeDora = document.querySelector('.doraB')
console.log(badgeDora)
if (localStorage.getItem('Dora') == '1') {
    badgeDora.classList.remove('na')
}

var badgeTS = document.querySelector('.tsB')
console.log(badgeTS)
if (localStorage.getItem('Totally Spies') == '1') {
    badgeTS.classList.remove('na')
}

// nb badges 
varBADGES.innerHTML = localStorage.getItem("Nombre badge");
