# Bhagvad Gita Quotes API

An API that returns 100 quotes from the Bhagvad Gita. All the quotes have been taken from this website : https://bhagavadgita.io/

## Base URL

https://your-api-url.com

## Endpoints

### GET /api/quotes

Get all quotes

#### Response

```json
[
  {
    "id": 1,
    "text": "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.",
    "author": "Lord Krishna"
  },
  {
    "id": 2,
    "text": "As they approach me, so I receive them. All paths, Arjuna, lead to me.",
    "author": "Lord Krishna"
  },
  {
    "id": 3,
    "text": "I am the beginning, middle, and end of creation.",
    "author": "Lord Krishna"
  }
]
```

### GET /api/quotes/random

Get a random quote

Response

```json
{
  "id": 42,
  "text": "Even if you were the most sinful of sinners, Arjuna, you could cross beyond all sin by the raft of spiritual wisdom.",
  "author": "Lord Krishna"
}
```

### GET /api/quotes/:id

Get a quote by ID

Response

```json
{
  "id": 5,
  "text": "I am death, which overcomes all, and the source of all beings still to be born.",
  "author": "Lord Krishna"
}
```

### Error Responses
## 404 Not Found

 Returned when a quote is not found

```json
{
  "message": "Quote not found"
}
```

## 500 Server Error

Returned when there is a server error

``` json

{
  "message": "Server error"
}
```

Feel free to contribute to this project by submitting issues or pull requests on GitHub.