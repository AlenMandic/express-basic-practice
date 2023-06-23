let input = document.getElementById("game-input");
let button = document.getElementById("go");
let result = document.getElementById("result")
let surprise = document.getElementById("gif")

let input_value = "";

button.addEventListener("click", () => {
    input_value = input.value;

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: input_value
    }
    fetch("/game", options)
    .then(response => response.json()) // our server sends the response back as JSON beacuse we use res.json(). This response.json() turns it back into a normal JS object.

    // our server's  response back to the client is this
    .then((data) =>  {
        result.textContent = data
        if(result.textContent === "YOU WON") {
            surprise.style.display = "block";

            setTimeout(() => {
                surprise.style.display = "none";
                }, 10000)
        } else {
            
            setTimeout(() => {
                result.textContent = "";
               }, 800) 
        }
    }
)
    .catch(error => console.error(error));
})