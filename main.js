var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for(var i = 0; i <cohortOneStudents.length; i++ ){
    console.log(cohortOneStudents[i])
};

var interests = ["games", "movies", "logic puzzles", "softball", "DnD"];

for(var i = 0; i < interests.length; i++){
 if(interests[i] === "DnD"){   
    console.log(`One of my interests is ${interests[i]}`)
 } else{console.log(`${interests[i]} is one of my favorites but it's not my top interest`)}
}