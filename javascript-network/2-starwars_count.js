const request = require('request');
request(process.argv[2], function (error, response, body) {
    const responseBody = JSON.parse(body).results;
    let count = 0;
    responseBody.forEach(element => {
        if (element.characters.includes("https://swapi-api.alx-tools.com/api/people/18/")) {
            count++;
        }
    });
    console.log(count); 
});
