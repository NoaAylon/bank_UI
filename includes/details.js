$("document").ready(function () {
    var id = getQueryVariable("bankId");
    var name = getQueryVariable("bankName");
    var interest = getQueryVariable("interest");
    var subscribers = getQueryVariable("subscribers");
    console.log(id, name, interest, subscribers);

    var bank_jumbotron = document.getElementsByClassName("jumbotron")[0];
    bank_jumbotron.innerHTML += `<h1 class="display-4"> ${name} </h1>
    <p class="lead">INTERESTS: ${interest}% </p>
    <hr class="my-4">
    <p>SUBSCRIBES: ${subscribers} </p>
    `
});

var getQueryVariable = function (variable, queryString) {
    queryString = queryString || window.location.search;

    var query = queryString.substr(1),
        vars = query.split('&'),
        pairs;

    for (var i = 0, j = vars.length; i < j; i++) {
        pairs = vars[i].split('=');

        if (decodeURIComponent(pairs[0]) == variable) {
            return decodeURIComponent(pairs[1]);
        }
    }
};