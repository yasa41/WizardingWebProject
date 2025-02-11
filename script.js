
function sortingHatQuiz() {
    let gryffindorCount = 0;
    let hufflepuffCount = 0;
    let ravenclawCount = 0;
    let slytherinCount = 0;
    let inputs = document.getElementsByTagName("input");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "radio" && inputs[i].checked) {
            switch (inputs[i].value) {
                case "gryffindor":
                    gryffindorCount++;
                    break;
                case "hufflepuff":
                    hufflepuffCount++;
                    break;
                case "ravenclaw":
                    ravenclawCount++;
                    break;
                case "slytherin":
                    slytherinCount++;
                    break;
            }
        }
    }
    let result;
    let maxCount = Math.max(gryffindorCount, hufflepuffCount, slytherinCount, ravenclawCount);
    if (maxCount == gryffindorCount) {
        result = "Gryffindor";
    }
    else if (maxCount == hufflepuffCount) {
        result = "Hufflepuff";
    }
    else if (maxCount == ravenclawCount) {
        result = "Ravenclaw";
    }
    else if (maxCount == slytherinCount) {
        result = "Slytherin";
    }
    alert(result);
}
