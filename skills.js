let points = new Map([
    ["HTML & CSS & JS", 3],
    ["Spring Boot", 4],
    ["Spring Security", 4],
    ["Spring Data Jpa", 4],
    ["Spring Cloud", 0],
    ["JUnit", 4],
    ["Postgres", 4],
    ["Redis", 4],
    ["Git & GitHub", 3],
    ["Docker", 5],
    ["Kubernetes", 2],
    ["System Design", 3]
]);

star();

function star() {
    const table = document.getElementById("skillTable");
    const rows = table.children.item(0).children;
    let point, row, pointCell;
    for (let i = 0; i < rows.length; ++i) {
        row = rows.item(i);
        point = points.get(row.children.item(0).textContent);
        pointCell = row.children.item(1);
        shiftToTheRight(pointCell);
        insertStars(pointCell, point);
    }
}

function insertStars(elem, point) {
    for (let i = 0; i < point; ++i) {
        elem.appendChild(createFullStar());
    }
    for (let i = 0; i < 5 - point; ++i) {
        elem.appendChild(createEmptyStar());
    }
}

function createFullStar() {
    const star = document.createElement("img");
    star.setAttribute("src", "icon/star.png");
    star.setAttribute("alt", "star");
    star.classList.add("star-img");
    return star;
}

function createEmptyStar() {
    const star = document.createElement("img");
    star.setAttribute("src", "icon/empty-star.png");
    star.setAttribute("alt", "empty");
    star.classList.add("star-img");
    return star;
}

function shiftToTheRight(pointCell) {
    pointCell.style.paddingLeft = "21px";
}