// Structure du jeu "Pierre-Papier-Ciseaux" :
// Choix de l'Utilisateur :
// Le jeu commence par demander à l'utilisateur de choisir entre "pierre", "papier" ou "ciseaux".
// Cette sélection est faite via une boîte de dialogue (prompt) et est enregistrée.
// Choix de l'Ordinateur :
// De manière simultanée, l'ordinateur fait un choix aléatoire parmi les mêmes options.
// Ce choix est généré par un processus aléatoire pour assurer l'imprévisibilité.
// let botChoice = Math.floor(Math.random() * tab.length) + 1;
// Logique du jeu :
// Le jeu compare le choix de l'utilisateur avec celui de l'ordinateur.
// Les règles sont les suivantes :
// La pierre bat les ciseaux.
// Les ciseaux battent le papier.
// Le papier bat la pierre.
// En cas de choix identiques, le jeu déclare une égalité.

function replay(){
let tab = ["pierre","feuille","ciseaux"];
let userChoice = prompt("Entrer pierre, feuille, ou ciseaux")
let botChoice = Math.floor(Math.random() * tab.length) + 1;

console.log(botChoice)
    if (userChoice==botChoice) {
        alert ("Egalité");
      }
      else if ((userChoice == "pierre" && botChoice == [2]) 
      || (userChoice == "ciseaux" && botChoice == [1]) 
      || (userChoice == "feuille") && (botChoice ==[0])) {
        alert ("Gagné");
      } else {
        alert ("Perdu");
      }
    let confirm = window.confirm("Voulez-vous rejouer?");
        if (confirm == true){
            replay()
        } else {
            alert ("merci d'avoir joué!");
        }

 }
        replay();
