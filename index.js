let school = {
    'name' : "Funny School Name",
    'average class size' : 100000000,
    'mascot' : 'middle aged man',
}

let string = `${school.name} has an average class size of ${school['average class size']} and their mascot is a ${school['middle aged man']}`

document.getElementById("result").innerHTML = string;

//should create an object named school that has three properties: name, average class size, and mascot
//should assign the innerHTML of the HTML element with the id result to the  string "${name} has an average class size of ${average class size} and their mascot is a ${mascot}"