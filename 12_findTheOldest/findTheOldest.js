const findTheOldest = function(people) {
    const oldestPeople = people.sort((a,b) => {
        if(people.hasOwnProperty('yearOfDeath')==false) 
        {
            let yearOfDeath = new Date().getFullYear();
        }
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        if (lastPerson > nextPerson) return -1;
        else return 1;
    });

    return oldestPeople[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// Do not edit below this line
module.exports = findTheOldest;
