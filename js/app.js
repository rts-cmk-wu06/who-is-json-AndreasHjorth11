let list = document.querySelector("#person-data");

fetch('./data.json')
.then(response => response.json())
.then((data) => {
    data.members.forEach(Element => {
        let Firstname = document.createElement('li');
        Firstname.textContent = `${Element.Firstname}`
        list.appendChild(Firstname);
    });
});




