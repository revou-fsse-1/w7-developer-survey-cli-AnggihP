# Developer Survey CLI - Anggih Pratama

- This Project is made for assignment of Week 7: Programming — JavaScript, Node.js, npm, TypeScript, RevoU FSSE Madrid 2023.

## What's your first name?

Rules

- Input type "input"
- Validate not empty

```js
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
];
```

## Hello (name from question 1) What's your email address?

Rules

- Input type "input"
- Validate not empty

```js
const questions = [
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
      return "Please enter a valid email address";
    },
    //Note: NotEmpty is not needed since the input must contain "@" and "."
  },
];
```

## Are you experienced Developer?

Rules

- Input type "list", [yes, no]
- Validate not empty

```js
const questions = [
  {
    type: "list",
    name: "experience",
    message: "Are you an experienced developer?",
    choices: ["Yes", "No"],
    //(Note: default must be set to the index or value of one of the entries in choices) as stated on url: https://www.npmjs.com/package/inquirer/v/9.1.4
  },
];
```

## How many years of experience you have with JavaScript?

Rules

- Input type "list", ["0-1", "1-3", "3-5", "5-10", "10+"]
- Validate not empty
- Only show if question 3 selected "yes"

```js
const questions = [
  {
    type: "list",
    name: "length of experience",
    message: "How many years of experience you have with JavaScript?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    //(Note: default must be set to the index or value of one of the entries in choices) as stated on url: https://www.npmjs.com/package/inquirer/v/9.1.4
    when: ({ experience }) => experience === "Yes",
  },
];
```

## What JavaScript library do you know?

Rules

- Input type "checkbox", ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"]
- Validate not empty
- Only show if question 3 selected "yes"

```js
const questions = [
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
];
```

## What is your desired salary?

Rules

- Input type "number"
- Validate salary more than zero
- Only show if question 3 selected "yes"

```js
const questions = [
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
];
```

## ADDITIONAL for JavaScript loop case

```js
const questions = [
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
      return `Is the sum of first ${
        input.favorite
      } natural number is ${sumNaturalNumbers(input.favorite)}?`;
    },
    validate: function (input) {
      if (input.toLowerCase().includes("yes")) {
        return true;
      }
      return "Recheck your answer";
    },
    when: ({ experience }) => experience === "Yes",
  },
];
```
