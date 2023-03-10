import inquirer from "inquirer";

function sumNaturalNumbers(n) {
  let val = 0;
  for( let i=0; i<=n; i++) {
    val  = val + i
  }
  return val;
}
//this is a function.
//the function tells that the first n-number in natural number can be summed by iterate each number.

const questions = [
  {
    type: "input",
    name: "firstName",
    message: "What is your first name?",
    validate: (input) => {
      if (!input) {
        return "Please input your first name";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: function (input) {
      return `Hello ${input.firstName}, what is your email address?`;
    },
    validate: function (input) {
      if (input.includes("@") && input.includes(".")) {
        return true;
      }
      return 'Please enter a valid email address';
    },
    //Note: NotEmpty is not needed since the input must contain "@" and "."
  },
  {
    type: "list",
    name: "experience",
    message: "Are you an experienced developer?",
    choices: ["Yes", "No"],
    //(Note: default must be set to the index or value of one of the entries in choices) as stated on url: https://www.npmjs.com/package/inquirer/v/9.1.4
  },
  {
    type: "list",
    name: "length of experience",
    message: "How many years of experience you have with JavaScript?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    //(Note: default must be set to the index or value of one of the entries in choices) as stated on url: https://www.npmjs.com/package/inquirer/v/9.1.4
    when: ({ experience }) => experience === "Yes",
  },
  {
    type: "checkbox",
    name: "library",
    message: "What JavaScript library do you use?",
    choices: ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"],
    validate: (answer) => {
      if (answer.length < 1) {
        return "Please choose an answer";
      }
      return true;
    },
    when: ({ experience }) => experience === "Yes",
  },
  {
    type: "input",
    name: "Salary",
    message: "What is your desired salary?",
    validate: (answer) => {
      if (answer < 1) {
        return "Please input a valid amount";
      } else if (isNaN(answer)) {
        return "Please input numbers";
      } else return true;
    },
    when: ({ experience }) => experience === "Yes",
  },
  {
    type: "list",
    name: "favorite",
    message: "Which one is your favorite number?",
    choices: [5, 10, 15],
    when: ({ experience }) => experience === "Yes",
    },
  {
    type: "input",
    name: "test",
    message: function (input) {
      return `Is the sum of first ${input.favorite} natural number is ${sumNaturalNumbers(input.favorite)}?`;
    },
    validate: function (input) {
      if (input.toLowerCase().includes("yes")) {
        return true;
      }
      return 'Recheck your answer';
    },
    when: ({ experience }) => experience === "Yes",
  }
];

// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
