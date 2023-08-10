//DOM
const touches = [...document.querySelectorAll('.boutons')];
const listKeyCode = touches.map(touches => touches.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur)
} )

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
    console.log(e);

} )

const calculer = (valeur) => {
    if(listKeyCode.includes(valeur)){
        switch (valeur){
            case '8':
                console.log(valeur);
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listKeyCode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    ecran.textContent = 'TA RACE!'
})