// "use strict"
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
const genres={
    philosophy:0,
    novel:0,
    comics:0,
}
arrBookStore.forEach(elem=>{
   if (elem.genre==='philosophy')
   {genres.philosophy=genres.philosophy+1}
   else if (elem.genre==='novel')
    {genres.novel=genres.novel+1}
    else if (elem.genre==='comics')
    {genres.comics=genres.comics+1}
})
console.log(genres);
//сравнить жанры, результат вывести в консоль,