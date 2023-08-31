const number = [10,20, 30]
let total = 0
for(const n of number){
    total+=n
}
total  //60

const value = number.reduce((cv,n)=>cv+n, 0)
console.log(value)