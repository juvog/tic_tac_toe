
let les_images = ["imgnulle.png", "imgo.png", "imgx.png"];
var compteur =0;
function choisirLaCase(la_case, le_joueur){
    if (existeGagnant() || compteur>=9){
        /* permet la désactivation des cases à la fin de la partie  */
    }
    else if ( (compteur <9) && ((la_case.innerHTML === "X")||(la_case.innerHTML ==="O"))) {
    afficherAlerte();
    }

    else {
             retirerAlerte();
                cocherCase(la_case, le_joueur);
                compteur +=1 ;
                if (existeGagnant() ===true){
                    activerGagnant(le_joueur);
                }
                else if((existeGagnant() === false) && compteur>8){
                    afficherPartieNulle();
                }
                else {
                  changerJoueur(le_joueur);
                }
            }
}

/*ok*/
function afficherAlerte(){
    let alerte = document.getElementById("alerte");
    let classes_alerte = alerte.classList;
    if (classes_alerte[0] === undefined){
        classes_alerte.add("alerteMarche");
        alerte.innerHTML = "Cochez une case vide !";
    }

}

function retirerAlerte(){
    let alerte = document.getElementById("alerte");
    let classes_alerte = alerte.classList;
    if (classes_alerte[0] === "alerteMarche"){
        alerte.classList.remove("alerteMarche");
        alerte.innerHTML = "";
    }
}

/*ok*/
function cocherCase(la_case, le_joueur){
    if (le_joueur.innerHTML === "Joueur O"){
        la_case.classList.add("cocheO");
        la_case.innerHTML = "O";
    }
    else  if (le_joueur.innerHTML === "Joueur X"){
        la_case.classList.add("cocheX");
        la_case.innerHTML = "X";
    }
}

function changerJoueur(le_joueur){
    let l_image = document.getElementsByTagName("img");
    if(le_joueur.innerHTML ==="Joueur O"){
        le_joueur.innerHTML = "Joueur X";
        le_joueur.classList.replace("fondBleu", "fondRouge");
        l_image[0].setAttribute("src", les_images[2])
    }
    else if(le_joueur.innerHTML ==="Joueur X"){
        le_joueur.innerHTML = "Joueur O";
        le_joueur.classList.replace("fondRouge", "fondBleu");
        l_image[0].setAttribute("src", les_images[1])
    }
}

function existeGagnant(){
    let les_cases = document.getElementsByTagName("td");
    if (
        ((les_cases[0].innerHTML !=="") &&(les_cases[0].innerHTML === les_cases[1].innerHTML) && (les_cases[1].innerHTML === les_cases[2].innerHTML)) ||
        ((les_cases[3].innerHTML !=="") &&(les_cases[3].innerHTML === les_cases[4].innerHTML) && (les_cases[4].innerHTML === les_cases[5].innerHTML)) ||
        ((les_cases[6].innerHTML !=="") &&(les_cases[6].innerHTML === les_cases[7].innerHTML) && (les_cases[7].innerHTML === les_cases[8].innerHTML)) ||
        ((les_cases[0].innerHTML !=="") &&(les_cases[0].innerHTML === les_cases[3].innerHTML) && (les_cases[3].innerHTML === les_cases[6].innerHTML)) ||
        ((les_cases[1].innerHTML !=="") &&(les_cases[1].innerHTML === les_cases[4].innerHTML) && (les_cases[4].innerHTML === les_cases[7].innerHTML)) ||
        ((les_cases[2].innerHTML !=="") &&(les_cases[2].innerHTML === les_cases[5].innerHTML) && (les_cases[5].innerHTML === les_cases[8].innerHTML)) ||
        ((les_cases[0].innerHTML !=="") &&(les_cases[0].innerHTML === les_cases[4].innerHTML) && (les_cases[4].innerHTML === les_cases[8].innerHTML)) ||
        ((les_cases[2].innerHTML !=="") &&(les_cases[2].innerHTML === les_cases[4].innerHTML) && (les_cases[4].innerHTML === les_cases[6].innerHTML)))
        return true;
    return false;
}

function activerGagnant(le_joueur){
    let le_gagnant = document.getElementById("fin");
    le_gagnant.classList.add("fondJaune");
    if(le_joueur.innerHTML ==="Joueur O"){
        le_gagnant.innerHTML = "O gagne";
    }
    else if(le_joueur.innerHTML ==="Joueur X"){
        le_gagnant.innerHTML = "X gagne";
    }
}

function afficherPartieNulle(){
    let l_image = document.getElementsByTagName("img");
    let partie_nulle= document.getElementById("fin");
    partie_nulle.innerHTML = "Partie Nulle !";
    partie_nulle.classList.add("fondJaune");
    l_image[0].setAttribute("src", les_images[0]);
}












