
let team = {
    "members": [{
        "Firstname": "Andreas",
        "Lastname": "Knudsen",
        "Age": 22,
        "Height": 172,
        "EyeColor": "Green"
    },
    {
        "Firstname": "Jens",
        "Lastname": "Jensen",
        "Age": 87,
        "Height": 140,
        "EyeColor": "Grey"
    },
    {
        "Firstname": "Kim",
        "Lastname": "Larsen",
        "Age": 45,
        "Height": 191,
        "EyeColor": "Blue"
    },
    {
        "Firstname": "Troels",
        "Lastname": "Hansen",
        "Age": 33,
        "Height": 180,
        "EyeColor": "Brown"
    }]
}

let list = document.querySelector("#person-data");


team.members.forEach(Element => {
    let firstname = document.createElement('li');
    list.appendChild(firstname).innerHTML =
    Element.Firstname + " " + Element.Lastname
    + "<br>Alder: " + Element.Age + "<br>Højde: " + Element.Height
    + "<br>Øjenfarve: " + Element.EyeColor;

    
    console.log(Element.Firstname + '\n' + Element.Lastname);
});
    

