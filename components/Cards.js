// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
 
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    const jsData = res.data.articles.javascript
    jsData.forEach(elem =>{
        cardsContainer.appendChild(articleCard(elem))
        })

    const bsData = res.data.articles.bootstrap
    bsData.forEach(elem =>{
        cardsContainer.appendChild(articleCard(elem))
    })

    const techData = res.data.articles.technology
    techData.forEach(elem =>{
        cardsContainer.appendChild(articleCard(elem))
    })

    const jqData = res.data.articles.jquery
    jqData.forEach(elem =>{
        cardsContainer.appendChild(articleCard(elem))
    })

    const nodeData = res.data.articles.node
    nodeData.forEach(elem =>{
        cardsContainer.appendChild(articleCard(elem))
    })
})



.catch(error =>{
    debugger
})

function articleCard(article) {

    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorName = document.createElement('span')

    headline.textContent = article.headline
    authorImg.src = article.authorPhoto
    authorName.textContent = `By: ${article.authorName}`

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(authorImg)
    author.appendChild(authorName)

    card.addEventListener('click', (e) => {
        console.log(headline.textContent)
    })

    return card
}

const cardsContainer = document.querySelector('.cards-container')

console.log (cardsContainer)