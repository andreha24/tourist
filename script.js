document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/allTours")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            loadHTMLTable(data["data"])
        });
});

function loadHTMLTable(data) {
    console.log('data', data)
    const allTours = document.getElementById('all-tours')

    if (data.length === 0) {
        allTours.innerHTML = "<h1>Туров нет</h1>";
        return;
    }

    let tourHtml = "";

    data.forEach(function ({Id, Name}) {
        tourHtml += "<div>";
        tourHtml += `<h1>${Id}</h1>`;
        tourHtml += `<h2 id='center_name-${name}'>${Name}</h2>`;
        tourHtml += `<button class="delete-row-btn" data-id=${Id}>Видалити </button>`;
        tourHtml += "</div>";
    });

    allTours.innerHTML = tourHtml;
}