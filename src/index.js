
import generateJoke from './generateJoke';
import './styles/main.scss';
import logo from './assets/Letswork8.png';


const logoImg =  document.querySelector('#logoImg');
logoImg.src=logo;

let btnJokeElm = document.querySelector('#btnJoke');

btnJokeElm.addEventListener('click',generateJoke);

