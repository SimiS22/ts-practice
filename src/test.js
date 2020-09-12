// SELECT
//     WAREHOUSES.country AS warehouse_country,
//     TRANSACTIONS.currency AS price_currency,
//     SUM(TRANSACTIONS.price) AS price_sum,
//     COUNT(TRANSACTIONS.id) AS count
//     FROM TRANSACTIONS
// JOIN WAREHOUSES ON WAREHOUSES.id=TRANSACTIONS.warehouse_id
// GROUP BY WAREHOUSES.country,TRANSACTIONS.currency
// ORDER BY WAREHOUSES.country DESC, TRANSACTIONS.currency ASC


function isPrime(n) {
  if(n < 1) {
      return 1;
  }
  for(let i = 2; i < n; i++) {
      if(n % i === 0) {
          const divisors = [...Array(n+1).keys()].slice(1).reduce((a, c) => [...a, !(n % c) && c].filter(Boolean), []);
          return divisors.find(div => div > 1) || 1
      };
  }
  return 1;
}



function parseCSV([heading, ...rows] = []) {
  const keys = heading.split(',');
  const deduped = [...new Set(rows)];

  const getInvNumber = obj => obj.description.split(' ').filter(str => str.includes('Inv-'))[0].split('Inv-')[1];

  const outputRows = deduped.reduce((accumulator, currentValue) => {
    const splittedArray = currentValue.split(',');
    const next = {};
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      next[key] = splittedArray[index];
    }
    return [...accumulator, next];
  }, []).sort((a,b) => {
    
    const invIdA = getInvNumber(a);
    const invIdB = getInvNumber(b);
    return invIdA - invIdB;
  })

  const out =  outputRows.map(getInvNumber).map(num => `Inv-${num}`);
  const distinctSortedInvNumbers = [...new Set(out)];
  return distinctSortedInvNumbers;
}


parseCSV(['id,paydate,quantity,price,currency,description',
  '1,03-04-2020,1,19.99,EUR,Inv-937593 Running Shoes',
  '1,03-04-2020,1,19.99,EUR,Inv-937593 Running Shoes',
  '2,04-04-2020,1,19.99,EUR,Inv-2910412 Black Shoes',
  '3,05-04-2020,2,39.98,EUR,Inv-22395324 Red Shoes',
  '4,06-04-2020,1,19.99,USD,Green Shoes Inv-3527431',
  '4,06-04-2020,1,19.99,USD,Green Shoes Inv-3527431',
  '5,07-04-2020,1,19.99,EUR,Power Shoes 3000 Inv-9876543',
  '5,07-04-2020,1,19.99,EUR,Power Shoes 3000 Inv-9876543',
  '6,08-04-2020,2,39.98,EUR,Inv-142836 Grey Shoes',
  '7,09-04-2020,1,19.99,EUR,Inv-2831201 White Shoes',
  '8,10-04-2020,3,59.97,EUR,Inv-1294023 Red Shoes',
  '8,10-04-2020,3,59.97,EUR,Inv-1294023 Red Shoes',
  '9,11-04-2020,1,19.99,EUR,Inv-153297 Black Shoes',
  '10,12-04-2020,1,19.99,USD,Green Shoes Inv-4359382'])




























// const x = 123;

// console.log(!!x)


// const s = new String('hi');
// console.log(s)

// console.log(typeof s)

// console.log(JSON.parse(JSON.stringify(s)) == s)

function fizzBuzz(n) {
  for (let index = 1; index <= n; index++) {
    switch (true) {
      case index % 3 === 0 && index % 5 === 0:
        console.log('FizzBuzz')
        break;
      case index % 3 === 0 && index % 5 !== 0:
        console.log('Fizz')
        break;
      case index % 3 !== 0 && index % 5 === 0:
        console.log('Buzz')
        break;
      default:
        console.log(index)
        break;
    }
  }
}
