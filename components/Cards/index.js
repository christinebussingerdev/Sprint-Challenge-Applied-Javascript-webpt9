// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(results => {
        
        const entryPoint = document.querySelector('.cards-container')
        const bootstrap = results.data.articles.bootstrap
        const javascript = results.data.articles.javascript
        const jquery = results.data.articles.jquery
        const node = results.data.articles.node
        const technology = results.data.articles.technology

        console.log(results)

        function cardConstructor(article) {                
                const newCard = document.createElement('div')

                newCard.innerHTML = `
                    <div class="card">
                        <div class="headline">${article.headline}</div>
                            <div class="author">
                                <div class="img-container">
                                <img src=${article.authorPhoto} />
                            </div>
                            <span>By ${article.authorName}</span>
                        </div>
                    </div>
                `
                entryPoint.appendChild(newCard)
        }
        bootstrap.forEach(article => { 
            cardConstructor(article);
        })
        javascript.forEach(article => { 
            cardConstructor(article);
        })
        jquery.forEach(article => { 
            cardConstructor(article);
        })
        node.forEach(article => { 
            cardConstructor(article);
        })
        technology.forEach(article => { 
            cardConstructor(article);
        })

            
    })