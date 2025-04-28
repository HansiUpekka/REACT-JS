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