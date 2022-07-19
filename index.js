const generateQuote = document.getElementById("generateQuote");
const quote = document.getElementById("quote");

//pull html element from index.html

//create an array containing all of the quotes
const array = ["Symptoms haven't changed. - Craig", "Things haven't changed. - James", "Give me food! - John"]

//create an array containing all of the authors

//append the authors to each quote


//when we hit the generate quote button, we need to have the array list pull up the list of quotes
// function generateQuote() {
//     Math.floor(Math.random() * array.length)
// }

function purpleText() {
    let text = document.createElement('h1')
    quote.append(text)
    const random = Math.floor(Math.random() * array.length)
    text.textContent = array[random]
    return text
}

generateQuote.addEventListener("click", purpleText);


let quotes = array.map(array => {
    let li = document.createElement("h1")
    li.textContent = array
    return li
}
)
