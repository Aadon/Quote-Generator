
  const newQuotesBtn = document.getElementById('quotes-btn');
  

const getQuotes = async () => {

  const quotesUrl = `https://type.fit/api/quotes/`;
  
  try {
    const response = await fetch(quotesUrl);

      console.log(response);
    if (!response.ok) {
      throw Error('could not fetch data for this resource');
  }
    const allQuotes = await response.json();
      console.log(allQuotes);

      const { text, author } = allQuotes;
      const randomQuote = Math.floor(Math.random() * allQuotes.length);

      const quoteText = allQuotes[randomQuote].text;
      const quoteAuthor = allQuotes[randomQuote].author;
  
      document.querySelector('.quote-text').textContent = quoteText;
      document.querySelector('.quote-author').textContent = quoteAuthor;

      if (quoteAuthor == null) {
    document.querySelector('.quote-author').textContent = 'Anonymous';
    
  }
    }
  catch (err) {
    console.log(err.message);
  }
  
};

newQuotesBtn.addEventListener('click', getQuotes);