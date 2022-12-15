const button = document.getElementById("btn");
const body = document.body;

const colors =['red','green', 'blue','yellow', 'pink', 'violet', 'indigo', 'grey', 'brown', 'black']

button.addEventListener('click', changebackground)

body.style.backgroundColor = colors[4]

function changebackground()
{
    const colorindex=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorindex]

}