const { getGames, getSpecificGame } = require('./src/endpoints');

getGames().then(games => {
    console.log(games);
})