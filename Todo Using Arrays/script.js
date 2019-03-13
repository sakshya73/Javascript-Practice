var todo = [];

var input = prompt("What would you like to do");

while(input !== "quit")
{
    if(input === "list")
    {
        console.log(todo);    
    }
    else if(input == "new")
    {
        var task = prompt("Enter a new todo");
        todo.push(task);
    }
    var input = prompt("What would you like to do");
}