import generateJoke from './generateJoke';
import './styles/main.scss';
import laugh from './assets/laugh.jpg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laugh;
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();
//import { v4 as uuidv4 } from 'uuid'
console.log(generateJoke());
//console.log('This is an uuid: ' + uuidv4());