/*
sum = (num1) => {

    return sum = (num2) => {

        return sum = (num3) => {

            return num1 + num2 + num3;
        }
    }
}
console.log(sum(5),(3),(8))

*/
// using function currying I can do it in one line

const sum = (num1) => (num2) => (num3) => { return num1 + num2 + num3 }

console.log(sum(5)(3)(8))