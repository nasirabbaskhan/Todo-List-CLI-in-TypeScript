import inquirer from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";

(async () => {
  await showBanner(
    "TODO LIST",
    "TODO LIST is used add your list forever",
    "red",
    "blue"
  );
})();

let todoArray: string[] = []; // initializing empty todoArray to stor todo values
async function fun() {
  let loop = true;
  while (loop) {
    const answer: {
      todo: string;
      addmore: true;
    } = await inquirer.prompt([
      {
        type: "input",
        name: "todo",
        message: gradient.rainbow("What do you want to add in todo?"),
      },
      {
        type: "confirm",
        name: "addmore",
        message: gradient.rainbow("Do you want to add more todo?"),
      },
    ]);
    const { todo, addmore } = answer;
    loop = addmore; // when addmore will no then loop will be terminate
    if (todo) {
      // if user add in todo
      todoArray.push(todo);
    } else {
      console.log(gradient.rainbow("kindly add some to do"));
    }
  }
  if (todoArray.length > 0) {
    console.log(gradient.rainbow("Your todo List"));
    todoArray.forEach((element) => {
      console.log(gradient.rainbow(element));
    });
  } else {
    console.log(gradient.rainbow("not todo finds"));
  }
  console.log(gradient.rainbow("thanks for using our TODO App"));
}

setTimeout(() => {
  fun();
}, 1000);
