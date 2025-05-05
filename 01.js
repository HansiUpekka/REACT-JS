function getName(name)
{
    return name;
}
let a = true;
let b = false;

console.log(a && getName('Hansi'));

let name1 = "Hansi";
let name2 = "Dasun"; 

console.log(name1 + " + " + name2);
console.log(`${name1} ${name2}`);

const showRecipe = true;

function getRecipeOne ( recipeName )
{
    return recipeName;
}

function getRecipeTwo ( recipeName )
{
    return recipeName;
}

if (showRecipe)
{
    console.log (getRecipeOne("Pizza"));
}
else
{
    console.log (getRecipeTwo("Chocolate"));
}

showRecipe
? console.log(getRecipeOne("Biscuit"))
: console.log(getRecipeTwo("Pudding"));

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
    id: id,
    productName: productName,
    rating: rating,
};

console.log(product);

const product1 = {    //new object
    id,
    productName,
    rating,
};

console.log(product);

const product2 = {
    description: "Product 2 description",
    id: 2,
    productName: "Samsung S50",
    rating: 4,
    label: "#123",
    MND: "2025.10.01",
};

const getProductTwoDescription = product2.description;
console.log(getProductTwoDescription);

const { description } = product2;
console.log(description);

const {label} = product2;
console.log(label);

const {MND, id: productTwo} = product2;
console.log(MND, productTwo)


const array = [1, 2, 3];

let getArrayFirstValue = arrray[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue, getArraySecondValue);

const[arrayFisrtElement, arraySecondElement, arrayThirdElement ) = array;
console.log(arrayFisrtElement, arraySecondElement, arrayThirdElement);
consloe.log(arrayFisrtElement, arraySecondElement, arrayThirdElement, arrayForthElement);

const [first, b, c] = array;
console.log(first, b, c, d);



