const jokel = document.getElementById('jokes')
const jokebtn = document.getElementById('jokebutton')

jokebtn.addEventListener('click',genratejoke)

genratejoke()

function genratejoke(){
    const config = {
        headers : {
            Accept : 'application/json',
        },
    } 
    fetch('https://icanhazdadjoke.com',config)
    .then((res)=>res.json())
    .then((data)=>{
        jokel.innerHTML = data.joke;
    })
}