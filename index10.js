// switch statements

function caseInSwitch(let) {
    let answer = "";
    switch(let) {
      case 1:
        answer = "alpha"
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }

    return answer;
}


console.log(caseInSwitch(4));