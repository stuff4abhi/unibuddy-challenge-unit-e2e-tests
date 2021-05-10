##Server

This is a smaller version of the system to evaluate its performance. 
Our bot scraped a website with book summaries, and stored them in `data.json` in the `summaries` array. The summaries 
array is a small data example for local development. The real service will have 100's of thousands of summaries.
   
`server/repository/summary.js` has a search engine that given a search query, searches the book summaries and returns the `K` most relevant ones.
A search engine query is the set of keywords that users can type in order to find a relevant document.
The api of the search engine is as follows:

    Input: The input should be a user query of type string and k number of items to return
           Query example: 'Computer Science'
           k example: 3
    Output: List of K relevant summaries. 
            A summary is a dictionary that follows the schema: {'summary': string, 'id': integer}
            Summary example:  {'summary':'Computer Science introduction coursebook', 'id':10}          
            Ouput example: [summary1, summary2, ..... summaryK] Where summaries are sorted according to order of relevance given a query

`server/repository/get-author-data.js` has a wrapper for getting author information. The information is provided by another 
microservice which we can call `https://ie4djxzt8j.execute-api.eu-west-1.amazonaws.com/coding`. The api accepts POST
`application/json` content as such `{'book_id: integer}` and return the book author `{'author': string}`.
(NOTE: `book_id` here is the same as `id` in summaries list)

`server/api/server.js` has an API that given a `list` of queries and an integer `K`, 
it will return the top K matched book as list, for every query in the list, so the result will be a list of lists.

    Egs input: [query1, query2]
        results: [[book1 ... bookK], [book1 .... bookK]]

A `book` object is defined as follows: 
```
{ id: “string”, author: “string”, summary: “string”, query: “string”} 
```
