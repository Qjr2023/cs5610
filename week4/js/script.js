let user;
do{ 
    user = prompt("What is your name?");
} while (isNaN(user) === false || user.length === 1);


let students = [
    {
        name: "Cristian",
        age: 30,
        location: "Vancouver"
     },
     {
        name: "James",
        age: 40,
        location: "Toronto"
     },
     {
        name: "Garry",
        age: 20,
        location: "Vancouver"
     }
    ];

    
function findStudentsInVancouver () {
    let vancouverStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].location === "Vancouver") {
            vancouverStudents.push(students[i]);
        }
    }
    return vancouverStudents;
}

const returnedArray = findStudentsInVancouver(); 
console.log(returnedArray);
