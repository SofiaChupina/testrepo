const players = [
    {
        "id": 1,
        "name": "Ivan",
        "name_sklonenie": "Ivana",
        "scorePoints": 4500
     },
    {
        "id": 2,
        "name": "Petr",
        "name_sklonenie": "Petra",
        "scorePoints": 3600
    },
    {
        "id": 3,
        "name": "Vadim",
        "name_sklonenie": "Vadima",
        "scorePoints": 3433
    },
    {
        "id": 4,
        "name": "Olga",
        "name_sklonenie": "Olgi",
        "scorePoints": 2356
    },

    ];

    console.log(players);
    let maxScorePlayer = '';
    let maxScorePoints = 0;
    for (let player of players) {
     maxScorePoints = Math.max(maxScorePoints, player.scorePoints);
     if (maxScorePoints === player.scorePoints) {
        maxScorePlayer = player.name_sklonenie
     }
    };

   
    
    console.log(`Максимальное количество очков - ${maxScorePoints} у ${maxScorePlayer}`);