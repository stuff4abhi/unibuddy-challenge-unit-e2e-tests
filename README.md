## Background
Unibuddy has built a service that allows students to search through coursebooks summaries which would make picking 
and buying a coursebook a much better experience for students.

The directories in this repository have the code for proxy server, author service and summary service respectively.

## Proxy Server
#### Location:
`server/`
#### Function:
Communicates with summary and author services to fetch matching summaries for a list of queries. 
#### API:
Given a `list` of queries and an integer `K`, 
it will return the top K matched book as list, for every query in the list, so the result will be a list of lists.

    Egs input: [query1, query2]
        results: [[book1 ... bookK], [book1 .... bookK]]

A `book` object is defined as follows: 
```
{ id: “string”, author: “string”, summary: “string”, query: “string”} 
```

## Author Service
#### Location:
`author-service/`
#### Function:
Communicates with external author api to fetch author matching a summary id. 
#### API:
Given a summary id, it will return the matching author.
    input: `{'book_id': integer}`
    output: `{'author': string, 'id': book_id}`
    
## Summary Service
#### Location:
`search-service/`
#### Function:
Runs a search through a given dataset for matching summaries to a query. 
#### API:
given a search query, searches the book summaries and returns the `K` most relevant ones.
A search engine query is the set of keywords that users can type in order to find a relevant document.
The api of the search engine is as follows:
```
    Input: The input should be a user query of type string and k number of items to return
           Query example: 'Computer Science'
           k example: 3
    Output: List of K relevant summaries. 
```
A summary is a dictionary that follows the schema: `{'summary': string, 'id': integer}`
```
Summary example:  {'summary':'Computer Science introduction coursebook', 'id':10}          
Output example: [summary1, summary2, ..... summaryK]
```   
where summaries are sorted according to order of relevance given a query


## Running
In order to run the services, go to each directory in a separate terminal and run `yarn start`.

Proxy Server runs at `localhost:3001`
Author service runs at `localhost:3002`
Summary service runs at `localhost:3003`

## Task
You are tasked with making sure this entire application is tested well before it goes into production.
Please proceed with understanding the various API functionality and requirements, and then write tests for each of them.
We are looking for following in particular:
* (Good to have) layer-wise unit-testing within APIs
* independent integration testing for APIs
* integration testing for the entire application

We are also looking for best practices surrounding:
* mocking and stubbing
* scalability and maintainability
* overall test coverage including failure handling
* ease of incorporation into CI
