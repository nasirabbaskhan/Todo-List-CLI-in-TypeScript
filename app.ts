import inquirer from "inquirer";

let todoArray: string[] = []; // initializing empty todoArray to stor todo values
let loop = true;
while (loop) {
  const answer: {
    todo: string;
    addmore: true;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "What do you want to add in todo?",
    },
    {
      type: "confirm",
      name: "addmore",
      message: "Do you want to add more todo?",
      default: false,
    },
  ]);
  const { todo, addmore } = answer;
  loop = addmore; // when addmore will no then loop will be terminate
  if (todo) {
    // if user add in todo
    todoArray.push(todo);
  } else {
    console.log("kindly add some to do");
  }
}
if (todoArray.length > 0) {
  console.log("Your todo List");
  todoArray.forEach((element) => {
    console.log(element);
  });
} else {
  console.log("not todo finds");
}
