// default parameters, spread and rest operations

function mulOfTwoNumbers ( num1, num2)
{
    console.log(num1, num2);
    return num1 * num2;
}

console.log (mulOfTwoNumbers(2,3));
console.log (mulOfTwoNumbers());

console.log("\n");
function multinumbers ( num1 = 1, num2 = 5)
{
    console.log(num1, num2);
    return num1 * num2;
}

console.log (multinumbers(20,30));
console.log (multinumbers());
console.log (multinumbers(10));

const array2 = [1, 2, 3, 4];

console.log(...array2);

console.log([...array2]);

const array3 = [9, 10];

console.log(0, ...array2,5, 6, 7, 8, ...array3, 11);

console.log([0, ...array2,5, 6, 7, 8, ...array3, 11]);

function getInfo (a, b, c, d, e)
{
    console.log(a, b, c, d, e);

    return "Hansi";
}

console.log(getInfo(1,2,3,4));
console.log(getInfo(1,2,3,4,5));


function getInfo (a, b, ...c)
{
    console.log(a, b, ...c);

    return "Hansi";
}

console.log(getInfo(1,2,3,4));
console.log(getInfo(1,2,3,4,5));
