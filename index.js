"use strict"
const arrBookStore=[
{
    name:`The Stranger`,
    author :`Albert Camus`,
    genre:`novel`,
    year:1942,
},
    {
        name:`The Name of the Rose`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:1980,
    },
    {
        name:`The Magic Mountain`,
        author :`Thomas Mann`,
        genre:`novel`,
        year:1924,
    },
    {
        name:`The Second Sex`,
        author :`Simone de Beauvoir`,
        genre:`philosophy`,
        year:1949,
    },
    {
        name:`The Blue Lotus`,
        author :`Hergé`,
        genre:`comics`,
        year:1936,
    },
    {
        name:`Numero Zero`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:2015,
    },
    {
        name:`The Prague Cemetery`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:2010,
    },
    {
        name:`The Mysterious Flame of Queen Loana`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:2004,
    },
    {
        name:`The Island of the Day Before`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:1994,
    },
    {
        name:`Foucault's Pendulum`,
        author :`Umberto Eco`,
        genre:`philosophy`,
        year:1998,
    },
    ]
let genreCalc = arrBookStore.reduce((accum, book) => {
    if (book.genre in accum) {
        accum[book.genre] += 1;
    } else {
        accum[book.genre] = 1;
    }
    return accum;
}, {});
console.log(genreCalc);
let maxNumber = 0;
let maxGenre;
let genre;
for (let key in genreCalc) {
    console.log (genreCalc[key]);
    if (maxNumber < genreCalc[key]) {
        maxNumber = genreCalc[key];
        maxGenre = key;
    }
}
console.log(maxGenre);
let mostOftenGenre = arrBookStore.filter((book) => book.genre === maxGenre).map((book) => book.name.toUpperCase());
console.log(mostOftenGenre);
let twentyCenturyBooks = arrBookStore.filter((book) => book.year >= 1900 && book.year < 2000).map((book) => book.name);
console.log(twentyCenturyBooks);
let twentyOneCenturyBooks = arrBookStore.filter((book) => book.year >= 2000).map((book) => book.name);
console.log(twentyOneCenturyBooks);
