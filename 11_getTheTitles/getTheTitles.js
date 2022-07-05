const getTheTitles = function(books) {
    let arrayOfTitles = [];

    for(let i = 0; i < books.length; i++)
    {
        arrayOfTitles[i] = books[i].title;
    }

    return arrayOfTitles;
    //return books.map(book => book['title']);
};

// Do not edit below this line
module.exports = getTheTitles;
