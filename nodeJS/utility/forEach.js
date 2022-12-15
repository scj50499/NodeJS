const arr1 = ['giraffe', 'tiger', 'lion'];
const arr2 = [1, 2, 3, 4];

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");//adding element at the start

arr1.push('cheetah');
arr2.push(5);

arr1.forEach(element => {
    console.log(element);
});

arr2.forEach(element => {
    console.log(element);
});

fruits.forEach(ele => {
    console.log(ele);
})

console.log(fruits.findIndex(findFruit));

function findFruit(fruit){
    return fruit == 'Banana';
}

const ages = [6, 2, 3, 4];
console.log(ages.findIndex(checkAge));
ages.sort();
ages.reverse();


function checkAge(age){
    return age > 3;
}

const cars = ["bmw", "mercedes"];

