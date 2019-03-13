var todo = [];

var input = prompt("What would you like to do");

while(input !== "quit")
{
    if(input === "list")
    {
        console.log("**************");
        for(var i=0;i<todo.length;i++)
        {
            console.log(i+ ": " + todo[i]);    
        }
        console.log("**************");
    }
    else if(input === "delete")
    {
        var index = prompt("Enter index of todo to delete");   
        todo.splice(index,1);
        console.log("Todo deleted");
    }
    else if(input == "new")
    {
        var task = prompt("Enter a new todo");
        todo.push(task);
        console.log("Todo added");
    }
    var input = prompt("What would you like to do");
}
console.log("OK,YOU QUIT THE APP");