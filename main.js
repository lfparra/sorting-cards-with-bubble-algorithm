let numberDraw = document.getElementById("numberDraw");
let draw = document.getElementById("draw");
let sort = document.getElementById("sort");
let cartas = [];

draw.addEventListener("click", function () {
    console.log("Inicio")

    let container = document.querySelector(".container");
    container.innerHTML = "";
    cartas = [];

    let countDraw = 0;
    console.log(numberDraw.value);

    while (countDraw < numberDraw.value) {

        console.log("while")
        function randomSuiteCard() {
            let randomSuite = Math.ceil(Math.random() * 4);
            let suite = "";

            switch (randomSuite) {
                case 1:
                    suite = "&hearts;";
                    break;
                case 2:
                    suite = "&diams;";
                    break;
                case 3:
                    suite = "&clubs;";
                    break;
                case 4:
                    suite = "&spades;";
                    break;
            }
            return suite;
        }

        let resultSuiteCard = randomSuiteCard();

        function randomCardNumber() {
            let randomNum = Math.ceil(Math.random() * 13);
            let numberCard = "";

            switch (randomNum) {
                case 1:
                    numberCard = "A";
                    break;
                case 11:
                    numberCard = "J";
                    break;
                case 12:
                    numberCard = "Q";
                    break;
                case 13:
                    numberCard = "K";
                    break;
                default:
                    numberCard = randomNum
                    break;
            }
            return numberCard;
        }

        let resultCardNumber = randomCardNumber();

        let card = document.createElement("div");
        card.classList.add("card");

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        if (resultSuiteCard == "&hearts;" || resultSuiteCard == "&diams;") {

            cardHeader.style.color = "red";
            cardHeader.innerHTML = resultSuiteCard;
            cardFooter.style.color = "red";
            cardFooter.innerHTML = resultSuiteCard;
            cardBody.style.color = "red";
            cardBody.innerHTML = resultCardNumber;
        } else {
            cardHeader.innerHTML = resultSuiteCard;
            cardFooter.innerHTML = resultSuiteCard;
            cardBody.innerHTML = resultCardNumber;
        }
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        container.appendChild(card);

        countDraw++;

        if (resultCardNumber == "J") {
            cartas.push({ num: 11, pinta: resultSuiteCard });
        } else if (resultCardNumber == "Q") {
            cartas.push({ num: 12, pinta: resultSuiteCard });
        } else if (resultCardNumber == "K") {
            cartas.push({ num: 13, pinta: resultSuiteCard });
        } else if (resultCardNumber == "A") {
            cartas.push({ num: 1, pinta: resultSuiteCard });
        } else {
            cartas.push({ num: resultCardNumber, pinta: resultSuiteCard });
        }
    };
    console.log([...cartas]);
});

sort.addEventListener("click", function () {

    console.log("sort")

    let result = document.querySelector(".result");
    result.innerHTML = "";
    const bubbleSort = (arr) => {
        
        let wall = arr.length - 1;
        let auxCount = 0;
        while (wall > 0) {

            let index = 0;
            while (index < wall) {
                
                if (arr[index].num > arr[index + 1].num) {

                    let aux = arr[index];
                    arr[index] = arr[index + 1];
                    arr[index + 1] = aux;
                };

                index++;
                
                let bubbleLog = document.createElement("div");
                bubbleLog.classList.add("bubbleLog");

                let lineNumber = document.createElement("div");
                lineNumber.classList.add("lineNumber");
                lineNumber.innerHTML = auxCount;
                auxCount++;
                
                console.log("comienzo de ordenamiento")
                console.log([...arr]);

                for (let i = 0; i < arr.length; i++) {
                    console.log(i);

                    let card = document.createElement("div");
                    card.classList.add("card");

                    let cardHeader = document.createElement("div");
                    cardHeader.classList.add("card-header");

                    let cardBody = document.createElement("div");
                    cardBody.classList.add("card-body");

                    let cardFooter = document.createElement("div");
                    cardFooter.classList.add("card-footer");

                    

                    if(arr[i].num == 1){
                        newNum = "A"
                    } else if (arr[i].num == 11){
                        newNum = "J"
                    } else if (arr[i].num == 12){
                        newNum = "Q"
                    } else if (arr[i].num == 13){
                        newNum = "K"
                    } else {
                        newNum = arr[i].num
                    }

                    

                    if (arr[i].pinta == "&hearts;" || arr[i].pinta == "&diams;") {
                        cardHeader.style.color = "red";
                        cardHeader.innerHTML = arr[i].pinta;
                        cardFooter.style.color = "red";
                        cardFooter.innerHTML = arr[i].pinta;
                        cardBody.style.color = "red";
                        cardBody.innerHTML = newNum;
                    } else {
                        cardHeader.innerHTML = arr[i].pinta;
                        cardFooter.innerHTML = arr[i].pinta;
                        cardBody.innerHTML = newNum;
                    }
                    card.appendChild(cardHeader);
                    card.appendChild(cardBody);
                    card.appendChild(cardFooter);

                    lineNumber.append(card);
                    bubbleLog.appendChild(lineNumber);

                    result.appendChild(bubbleLog);
                }

            };
            wall--;
        };
        return arr;
    }
    bubbleSort([...cartas]);
})

/*  */
