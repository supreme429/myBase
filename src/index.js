
let promise = new Promise((resolve, rejectd) => {
    let randNum = Math.random().toFixed(2)
    console.log(randNum)
    setTimeout(() => {
        if( randNum > 0.5 ) {
            resolve()
        } else {
            rejectd('this is rejected'+ randNum)
        }
    }, 3000)
    
    return promise
})

promise.then().catch((err) => {
    console.log(err)
})

let obj = {
    a: 'js',
    b: 'java'
}
console.log('c' in obj)


let arr1 = [1,2,3,4,5,6,7,8]
console.log(arr1)
console.log(arr1.map(x => 3))

document.write('hello world')

class TryClassCreate {
    constructor (a, b) {
        this.a = a;
        this.b = b;
        let result = a + b;
        return result
    }

    create1 (val) {
        console.log(val)
        return val
    }

    create2 () {

    }
}

class ChildClass extends TryClassCreate {
    
}