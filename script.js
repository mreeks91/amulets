const quotesURL = "quotes.json";

async function fetchRandomQuote() {
  try {
    const response = await fetch(quotesURL);
    const quotes = await response.json();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the quote text and author
    document.getElementById("quote").textContent = `"${randomQuote.text}"`;
    document.getElementById("author").textContent = `— ${randomQuote.author}`;
  } catch (error) {
    document.getElementById("quote").textContent = "Could not load a quote. Try again later!";
    document.getElementById("author").textContent = "";
  }
}

// Fetch a random quote when the page loads
document.getElementById("new-quote-button").addEventListener("click", fetchRandomQuote);
fetchRandomQuote();
