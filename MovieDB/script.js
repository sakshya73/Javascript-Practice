var movieDB = [
    {
        title : "Avengers Infinity War",
        hasWatched : true, 
        Rating: 8.7
    },
    {
        title : "Guardians of the Galaxy",
        hasWatched : true,
        Rating: 8.1
    },
    {
        title : "Iron Man",
        hasWatched : false,
        Rating : 10
    }
]
for(var i =0 ;i < movieDB.length; i++)
{
    var res = "You have "
    if(movieDB[i].hasWatched === false)
    {
            res+= "not seen";
    }
    else
        res+="watched";
    res+=" \" " + movieDB[i].title + " \" - ";
    res+=movieDB[i].Rating + " stars";
    console.log(res);
} 
