var randomN = Math.floor(Math.random()*10)+1
console.log("Random number is :"+randomN)

var score = 100

function check() {
    var input = document.getElementById("inputBox")
    var n = Number(input.value)
    console.log("Input is :"+n)
    var r = document.getElementById("result")
    var o = document.getElementById("out")

    if(n>=1 && n<=10){
        if(randomN == n){
            score++
            console.log("You are Right!") 
            r.textContent = "Your guess is right!"
        }
        else{
            score--
            console.log("You are wrong!")
            r.textContent = "Your guess is wrong!"
        }
        o.textContent = "Your Score: "+ score
        console.log("Your Score: "+ score)
    }
    else {
        r.textContent = "Enter number between 1 to 10!"
    }
}
