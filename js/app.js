
let team = {
    "members": [{
        "Firstname": "Andreas",
        "Lastname": "Knudsen",
        "Age": 22,
        "Height": 172,
        "Eye Color": "Green"
    },
    {
        "Firstname": "Jens",
        "Lastname": "Jensen",
        "Age": 87,
        "Height": 140,
        "Eye Color": "Grey"
    },
    {
        "Firstname": "Kim",
        "Lastname": "Larsen",
        "Age": 45,
        "Height": 191,
        "Eye Color": "Blue"
    },
    {
        "Firstname": "Troels",
        "Lastname": "Hansen",
        "Age": 33,
        "Height": 180,
        "Eye Color": "Brown"
    }]
};

team.members.forEach(Element => console.log(Element.Firstname));

