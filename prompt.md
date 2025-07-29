### Project: AI-Powered Web Agent Scraper

**Objective:** To create an MVP of an AI-powered web agent capable of scraping and interpreting web pages based on natural language instructions. The agent will navigate to a given URL, analyze its content, and extract specified information, returning it in a structured format. This project is inspired by tools like WebHound, focusing on the agent's ability to understand user intent and web content.

**Core Functionality:**

1.  **User Input:** The user will provide two main inputs:
    *   A URL of the target web page.
    *   A natural language query describing the information to be extracted (e.g., "Extract all the article titles and their authors," "List all products and their prices," "Summarize the main points of this page").

2.  **Web Agent/Scraping Logic:**
    *   The agent will programmatically access the web page at the given URL.
    *   It will use a large language model (LLM) to understand the structure and content of the HTML.
    *   The agent will identify the relevant data on the page that corresponds to the user's query.
    *   It will handle simple web page structures for the MVP, with a plan to support more complex, dynamic sites in the future.

3.  **Output:**
    *   The extracted information will be presented to the user in a clean, structured format, such as JSON or a simple key-value display.

**Key Features for MVP:**

*   A simple web-based user interface with input fields for the URL and the scraping query.
*   A backend service that receives the inputs and orchestrates the scraping process.
*   Integration with an LLM (like GPT, Claude, or a local model) to parse the user query and the web page content.
*   The ability to handle static web pages.
*   Display the extracted data on the UI.

**Proposed Tech Stack:**

*   **Frontend:** Simple HTML, CSS, and JavaScript. No complex frameworks are needed for the MVP.
*   **Backend:** Python with Flask or FastAPI. We'll use libraries like `BeautifulSoup` for HTML parsing and `requests` for making HTTP requests.
*   **AI/LLM:** We'll use a suitable LLM API for the natural language processing tasks.

**Next Steps:**

If you're happy with this prompt, we can proceed to the next steps. I suggest we begin by creating the basic file structure for our project. Does that sound good to you?
