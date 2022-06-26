import axios from 'axios';

function generateJoke(){
    axios.get('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    }).then(res=>{
        let elem =  document.querySelector('#joke');
        elem.innerHTML = res.data.joke;
    });
}
export default generateJoke;