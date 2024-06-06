const menuCheckbox = document.getElementById('checkbox-toggle')

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

function loadArticle() {
    
}

function showMenu() {
    if (this.checked) {
        document.querySelector('.navlist ul').style.display = 'flex';
        document.querySelector('.navlist ul').style.flexDirection = 'column';;
    }
    else {
        document.querySelector('.navlist ul').style.display = 'none';
    }
}


menuCheckbox.addEventListener('change', showMenu)
