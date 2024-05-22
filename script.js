const mode = document.getElementById('switch-mode');
const html = document.getElementById('html');
const containerDaily = document.getElementsByClassName('container-daily');



//Top daily article
const daily = {
    path: 'assets/img/daily.jpg',
    category: 'TRANSFERGERÜCHTE',
    headline: 'KOMPANY ZUM FC-BAYERN?',
    snippetText: 'Der FB-Bayern ist wohl an einer verpflichtung von Vincent Kompany als Trainer interessiert!',
    text: 'Hat die lange Trainersuche beim FC-Bayern bald endlich ein Ende. Anscheinend sollen die Bayern daran interessiert sein Vincent Kompany zu verpflichten.'
}

const articels = [
    {
    path: 'assets/img/tactics_1.png',
    category: 'TAKTIKEN',
    headline: 'WIE LÄSST XABI SPIELEN?',
    snippetText: 'Der FB-Bayern ist wohl an einer verpflichtung von Vincent Kompany als Trainer interessiert!',
    text: 'Hat die lange Trainersuche beim FC-Bayern bald endlich ein Ende. Anscheinend sollen die Bayern daran interessiert sein Vincent Kompany zu verpflichten.'
    }
]

function darkMode() {
    if (mode.checked == true) {
        html.style.filter = "invert(95%) hue-rotate(180deg)"
    }
    else {
        html.style.filter = "invert(0%)"
    }
}

function loadArticle() {
    
}


html.addEventListener('click', darkMode)
containerDaily.addEventListener('click', loadArticle)