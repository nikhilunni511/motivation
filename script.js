document.addEventListener('DOMContentLoaded', function () {
    // Generate random quotes
    const quotes = [
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" }
    ];

    function getRandomQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quote.textContent = randomQuote.quote;
        author.textContent = `- ${randomQuote.author}`;
    }

    // Populate random quote section
    const quoteContainer = document.getElementById('quote-container');
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');

    getRandomQuote();

    // Populate quote categories section
    const categories = ['Motivational', 'Inspirational', 'Success', 'Wisdom', 'Life'];
    const categoriesList = document.getElementById('categories');

    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        categoriesList.appendChild(li);
    });

    // Populate quotes section
    // const quotesList = document.getElementById('quotes-list');

    // quotes.forEach(quote => {
    //   const li = document.createElement('li');
    //   li.textContent = `${quote.quote} - ${quote.author}`;
    //   quotesList.appendChild(li);
    // });

    // Submit a quote
    const quoteForm = document.getElementById('quote-form');
    const authorInput = document.getElementById('name');
    const quoteInput = document.getElementById('quote');

    quoteForm.addEventListener('submit', e => {
        e.preventDefault();

        const newQuote = {
            quote: quoteInput.value,
            author: authorInput.value
        };

        const newQuoteLi = document.createElement('li');
        newQuoteLi.textContent = `${newQuote.quote} - ${newQuote.author}`;
        quotesList.appendChild(newQuoteLi);

        // Clear input fields
        authorInput.value = '';
        quoteInput.value = '';
    });
    const randomQuoteButton = document.getElementById('random-quote-button');
    randomQuoteButton.addEventListener('click', getRandomQuote);
    
    
});
