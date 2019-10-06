//Create a function named calculateChange that takes in a total amount 
//of a bill and the total cash given to pay that bill. Return a new object that 
//describes the total amount of change for the cashier to give back. 
//Omit any types of change that you shouldn't give back, i.e. if you don't give back a 
//twenty dollar bill, don't include it in the results.

// 1 dollar = 100 cents , 10 dollars = 1000 cents
//Twenty dollars (2000), Ten dollars (1000), Five dollars (500), Two dollars 200, One dollar 100, 
//Quarter (25¢), Dime (10¢), Nickel (5¢), Penny (1¢)

let calculateChange = function (total, cash) {
  let change = cash - total;

  let cashierObj = [{ twentyDollar: 0 }, { tenDollar: 0 }, { fiveDollar: 0 }, { twoDollar: 0 },
  { oneDollar: 0 }, { quarter: 0 }, { dime: 0 }, { nickel: 0 }, { penny: 0 }]

  cashierObj[0]["twentyDollar"] = Math.floor(change / 2000);
  change = change % 2000;
  cashierObj[1]["tenDollar"] = Math.floor(change / 1000)
  change = change % 1000;
  cashierObj[2]["fiveDollar"] = Math.floor(change / 500)
  change = change % 500;
  cashierObj[3]["twoDollar"] = Math.floor(change / 200)
  change = change % 200;
  cashierObj[4]["oneDollar"] = Math.floor(change / 100)
  change = change % 100;
  cashierObj[5]["quarter"] = Math.floor(change / 25)
  change = change % 25;
  cashierObj[6]["dime"] = Math.floor(change / 10)
  change = change % 10;
  cashierObj[7]["nickel"] = Math.floor(change / 5)
  change = change % 5;
  cashierObj[8]["penny"] = Math.floor(change / 1)
  change = change % 1;


  function filterByValue(array, value) {
    return array.filter(o =>
      Object.keys(o).some(property => o[property] !== (value)));
  }

  let filteredChange = filterByValue(cashierObj, 0);

  let changeToCustomer = Object.assign(...filteredChange);

  return changeToCustomer;

};



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//{ twoDollar: 1, dime: 1, penny: 3 }
//{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
//{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }