const request = require('request');
request(process.argv[2], function (error, response, body) {
    const responseBody = JSON.parse(body).results;
    let count = 0;
    const characterId = '18';
    responseBody.forEach(element => {
        element.characters.forEach(character => {
            if (character === `https://swapi-api.alx-tools.com/api/people/${characterId}/`) {
                count++;
            }
        });
    });
    console.log(count); 
});
