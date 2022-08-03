const n = 3;
let gamer1 = prompt("X oyunçunun adını daxil edin");
let gamer2 = prompt("O oyunçunun adını daxil edin");
let score1 = 0;
let score2 = 0;
const X = "X";
const O = "O";
let count = 1;
let M = [];


onload = () => {
    createArr();
    createTable();

};

const createArr = () => {

    for (let i = 0; i < n; i++) {
        M[i] = [];
        for (let j = 0; j < n; j++) {
            M[i][j] = '';
        }
    }
};

const createTable = () => {

    let tbl = '';
    for (let i = 0; i < n; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < n; j++) {
            tbl += `<td onclick="clickCheck(${i},${j})">${M[i][j]}</td>`;
        }
        tbl += `</tr>`;
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;

};



const clickCheck = (i, j) => {

    if (M[i][j] === "") {
        if (count % 2 == 0) {
            M[i][j] = O;
        } else {
            M[i][j] = X;
        }
        count++;
        setTimeout(checkWin, 100);
        createTable();
    }
};

document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;

const checkWin = () => {

    if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] != "") {
        if (M[0][0] == "O") {
            alert(gamer2 + " Win");
            score2 += 1;
            document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
            onload();
        }
        else {
            alert(gamer1 + " Win");
            score1 += 1;
            document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
            onload();
        }

    }

    if (M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] != "") {
        if (M[0][2] == "O") {
            alert(gamer2 + " Win");
            score2 += 1;
            document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
            onload();
        }
        else {
            alert(gamer1 + " Win");
            score1 += 1;
            document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
            onload();
        }
    }
    for (let i = 0; i < n; i++) {
        if (M[i][0] == M[i][1] && M[i][1] == M[i][2] && M[i][0] != "") {
            if (M[i][0] == "O") {
                alert(gamer2 + " Win");
                score2 += 1;
                document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
                onload();
            }
            else {
                alert(gamer1 + " Win");
                score1 += 1;
                document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
                onload();
            }
        }
        if (M[0][i] == M[1][i] && M[1][i] == M[2][i] && M[0][i] != "") {
            if (M[0][i] == "O") {
                alert(gamer2 + " Win");
                score2 += 1;
                onload();
                document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
            }
            else {
                alert(gamer1 + " Win");
                score1 += 1;
                document.getElementsByTagName("h1")[0].innerHTML = `${gamer1}(X)-${score1} ${score2}-(O)${gamer2}`;
                onload();
            }
        }
    }
}