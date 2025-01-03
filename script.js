document.addEventListener("DOMContentLoaded", () => {
    const quotesURL = "quotes.json";
  
    async function fetchRandomQuote() {
      try {
        const response = await fetch(quotesURL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const quotes = await response.json();
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
  
        if (randomQuote && randomQuote.text && randomQuote.author) {
          document.getElementById("text").textContent = `"${randomQuote.text}"`;
          document.getElementById("author").textContent = `— ${randomQuote.author}`;
        } else {
          throw new Error("Invalid quote format");
        }
      } catch (error) {
        console.error("Error fetching quotes:", error);
        document.getElementById("text").textContent = "Could not load a quote.";
        document.getElementById("author").textContent = "";
      }
    }
  
    // Attach event listener to the "Get Another Quote" button
    const newQuoteButton = document.getElementById("new-quote-button");
    if (newQuoteButton) {
      newQuoteButton.addEventListener("click", fetchRandomQuote);
    }
  
    // Fetch a random quote on page load
    fetchRandomQuote();
  });
  