const colors = ["green","red", "aqua", "yellow", "orange"];


const btn = document.getElementById("btn");

const color = document.querySelector(".color")  
// get the first element with this class from HTML (i.e span in this case)


btn.addEventListener('click', function(){
    // Goal: get random number b/w 0 - 3 (as the array size is 3)
    const randomNumber = getRandomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNum(){
    return Math.floor(Math.random()*colors.length);
    // getting the floor values in the range of the size of array!
}




