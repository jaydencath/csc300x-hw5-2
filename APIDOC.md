# *jokebook* API Documentation
## Endpoint 1 - Categories
**Request Format:**
/jokebook/categories
**Request Type:**
GET
**Returned Data Format**:
String[]
**Description:**
Returns a list of all categories jokebook.
**Example Request:**
http://localhost:8000/jokebook/categories
**Example Response:**
[
  "funnyJoke",
  "lameJoke"
]
**Error Handling:**
If the user enters the wrong address or the server isn't connecting to the API, print an error: 
res.status(500).type('text').send('Error!');

# *jokebook* API Documentation
## Endpoint 2 - Jokes
**Request Format:**
/jokebook/joke/:category
**Request Type:**
GET
**Returned Data Format**:
String []
{
    joke: string;
    response: string;
}
**Description:**
Returns a list of all jokes within a category in the jokebook.
**Example Request:**
http://localhost:8000/jokebook/joke/funnyJoke
**Example Response:**
[
  {
    "joke": "Why did the student eat his homework?",
    "response": "Because the teacher told him it was a piece of cake!"
  },
  {
    "joke": "What kind of tree fits in your hand?",
    "response": "A palm tree"
  },
  {
    "joke": "What is worse than raining cats and dogs?",
    "response": "Hailing taxis"
  }
]
**Error Handling:**
If the user enters a category not listed, the console will output an error telling the user that the category they entered does not 
exist within our catalog of categories. 
if (!categories.includes(category)) {
            res.status(500).type('text').send('No category listed for: ' + category);
            return;
        }
# *jokebook* API Documentation
## Endpoint 3 - Add new joke
**Request Format:**
/jokebook/joke/new
**Request Type:**
POST
**Returned Data Format**:
String[]
**Description:**
Allows the user to add a joke to the category of their choosing and returns a new list with their joke. 
**Example Request:**
http://localhost:8000/jokebook/joke/new
**Example Response:**
[
  {
    "joke": "Why did the student eat his homework?",
    "response": "Because the teacher told him it was a piece of cake!"
  },
  {
    "joke": "What kind of tree fits in your hand?",
    "response": "A palm tree"
  },
  {
    "joke": "What is worse than raining cats and dogs?",
    "response": "Hailing taxis"
  },
  {
    "joke": "Why did the student eat his homework?",
    "response": "Because the teacher told him it was a piece of cake!"
  }
]
**Error Handling:**
If the user enters the wrong category or leaves the joke/ response field empty, the system will throw an error message telling the user that what they entered is invalid. 
'error': 'invalid or insufficient user input'