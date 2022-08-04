const { print, stringInput, intInput } = require('./consoleIO');

const REGISTER_CODE = 0;
const LOGIN_CODE = 1;
const PAY_CODE = 0;
let loggedInUser = 0;
const users = [];
let exit = false;
const TRANSACTIONS_CODE = 1;
const STATS_CODE = 2;
const LOGOUT_CODE = 3;
const validateUserDetails = (user) => {
  if (
    user.age > 18 &&
    isInArray(users, user) &&
    user.pin > 999 &&
    user.pin < 10000
  ) {
    return true;
  }

  return false;
};

let isInArray = (arr, user) => arr.includes(user);

function handleRegister() {
  const user = {};

  print("Enter username");
  user.name = stringInput();
  print("Enter password");
  user.password = stringInput();
  print("Enter phone");
  user.phone = stringInput();
  print("Enter age");
  user.age = intInput();
  print("Enter PIN");
  user.pin = intInput();

  if (user.age >= 22) {
    user.frame = 2000;
  } else {
    user.frame = 1000;
  }

  user.transactions = new Array();

  if (validateUserDetails(user)) {
    users.push(user);
    loggedInUser = user;
  } else {
    print("Invalid details");
  }
}


const handlePay = () => {
  print("How much do you want to pay?");
  let amount = intInput();
  let sum = 0;
  
  sum = user.transactions.reduced((total, trans) => total + trans.amount)

  while (sum + amount > loggedInUser.frame) {
    print("Not enough credit frame");
    amount = intInput();
  }

  print("Phone number to pay to: ");
  let phone = stringInput();

  while (!isInArray(users,user.phone) || loggedInUser == phone) {
    print(
      'Phone number does not exists or it"s your number. Please try again:'
    );
    phone = stringInput();
  }

  print("Enter PIN");
  let pin = intInput();
  while (loggedInUser.pin !== pin) {
    print("Incorrect PIN, please try again.");
    pin = intInput();
  }
  let transToAdd = {};
  transToAdd.kind = "out";
  transToAdd.to = phone;
  transToAdd.amount = amount;
  loggedInUser.transactions.push(transToAdd);
  transToAdd.kind = "in";
  transToAdd.from = loggedInUser.phone;
  transToAdd.amount = amount;
  users
    .find((currUser) => currUser.phone === phone)
    .transactions.push(transToAdd);
};

const printTransactions = () => {
  print("All transactions:");

  loggedInUser.transactions.forEach((transaction) => {
    print(
      transaction.kind == "out"
        ? `-${transaction.amount} to: ${transaction.to}`
        : `+${transaction.amount} from: ${transaction.froms}`
    );
  });
};

function calcStats(transactions) {
  let sum = 0,
    avg;
  
  sum = user.transactions.filter(element => element.kind == 'out').reduced((total, curr) => total + curr.amount);

  if (transactions.length === 0) {
    avg = 0;
  } else {
    avg = sum / transactions.length;
  }

  return [transactions.length, sum, avg];
}

// FIXME: doens't print all stats
const printStats = () => {
  let [length, sum] = calcStats(
    loggedInUser.transactions.filter(
      (transaction) => transaction.kind === "out"
    )
  );
  let [length2, sum2, avg2] = calcStats(
    loggedInUser.transactions.filter((transaction) => transaction.kind === "in")
  );
  print(`
  ${"OUT:"}
  ${"Total payments amount: "}${length}
  ${"Sum of payments: "}${sum}$
  ${"Avg of payments: "}${length2}
  ${"IN:"}
  ${"Total payments amount: "}${length2}
  ${"Sum of payments: "}${sum2}
  ${"Avg of payments: "}${avg2}`);
};

const printOptions = (arguments = { printToConsole: true }) => {
  if (!arguments.printToConsole) {
    return;
  } else {
    print(
      ` ${"Options:"} ${PAY_CODE}
       ${" - To pay"}${TRANSACTIONS_CODE}
        ${"  - To see transactions."}  ${STATS_CODE }
        ${"- To see stats." } ${LOGOUT_CODE} 
       ${ " - To log out."}
    `
    );

    const choice = intInput();

    switch (choice) {
      case PAY_CODE: {
        handlePay();
        break;
      }
      case TRANSACTIONS_CODE: {
        printTransactions();
        break;
      }
      case STATS_CODE: {
        printStats();
        break;
      }
      case LOGOUT_CODE: {
        loggedInUser = "";
        print("Goodbye!");
        break;
      }
      default: {
        print("Invalid option.");
        break;
      }
    }
  }
};

const handleLogin = () => {
  print("Enter username");
  let name = stringInput();
  print("Enter password");
  let password = stringInput();

  let user = users[users.indexOf(name)]
  if (isInArray(users, user) || user.password !== password) {
    print("Incorrect username or password");
    print("Enter username");
    name = stringInput();
    print("Enter password");
    password = stringInput();
    user = users.find((currUser) => currUser.name === name);
  } else loggedInUser = user;
};

const printGreetingMenu = () => {
  print(`${"Welcome to  BSMCH PAY"}
      ${" To login enter "} ${LOGIN_CODE}
      ${" To create an account enter "} ${REGISTER_CODE}
       ${" To exit click anything else "}`);
  const userChoice = intInput();

  if (userChoice === REGISTER_CODE) {
    handleRegister();
  } else if (userChoice === LOGIN_CODE) {
    handleLogin();
  } else {
    exit = true;
    print('Goodbye :)');
  }
};

while (!exit) {
  printGreetingMenu();
  while (loggedInUser) {
    printOptions();
  }
}
