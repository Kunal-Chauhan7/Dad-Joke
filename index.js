const jokel = document.getElementById('jokes')
const jokebtn = document.getElementById('jokebutton')

jokebtn.addEventListener('click',genratejoke)

genratejoke()

async function genratejoke(){
    const config = {
        headers : {
            Accept : 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com',config);
    const data = await res.json();
    jokel.innerHTML = data.joke;
    
    //fetch('https://icanhazdadjoke.com',config)
    //.then((res)=>res.json())
    //.then((data)=>{
    //    jokel.innerHTML = data.joke;
    //})
}