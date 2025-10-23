## Key Features

<p>The API allows users to get details about any title, actors as well as search for specific titles when provided with a title id.</p> 
<p>The API also allows for users to filter any result by genre, year of release, or also by actor.</p>

## API Version

<p>The current version is V1</p>

## Available Endpoints

<p>Titles</p>
<p>Search</p>
<p>Actors</p>
<p>Utils</p>

## Request and Response Format

"""
const http = require('https');

const options = {
method: 'GET',
hostname: 'moviesdatabase.p.rapidapi.com',
port: null,
path: '/titles/%7Bid%7D/ratings',
headers: {
'x-rapidapi-key': '588aa35f4bmsh1e11a8d92f016a1p167974jsn10754b2fc73c',
'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
}
};

const req = http.request(options, function (res) {
const chunks = [];

    res.on('data', function (chunk) {
    	chunks.push(chunk);
    });

    res.on('end', function () {
    	const body = Buffer.concat(chunks);
    	console.log(body.toString());
    });

});

req.end();
"""

## Authentication

<p>An API_KEY must be provided to be able to use the API</p>
<p>An API_HOST is also required in the headers section</p>

## Error Handling

## Usage Limits and Best Practices

<p>The Basic version provide the following limits:</p>
<ul>
  <li>500,000 requests per month</li>
  <li>1000 requests per hour</li>
</ul>
