//Promises - Promises are used to handle to asynchronous opertaions in JavaScript. They are easy to manage when
// dealing with multiple asynchronous operations where multiple callbacks can create callback hells leading to 
// unmanageable code.
// This doesn't means that Promises are only used for avoiding callback hells, instead are often used for 
// handling asynchronous 


//promise creation

const getEmployeeID = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let id = [1,2,3,4,5];
        reject('the data isn;t found');
    }, 2000);
})

getEmployeeID
    .then((id)=>{
        console.log(id);
})
    .catch((err)=>{
        console.log('error msg:',err);
})
    .finally(()=>{
        console.log('end of program');
    })

const getEmployeeDetails = (data) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let getEmployeeDetails = {
                name :'hitesh',
                age : 23,
            }
            resolve(`hi im hi $(employeedetails)`)
        },3000, data)
    })
}
//promise consuming - used for consumption of promise
getEmployeeID
    .than((id)=>{
        console.log(id);
        getEmployeeDetails('hi')
        .then((data)=>{
            console.log('i am inside the than method',data);
        })
    })
        .catch((err)=>{
            console.log('erroe msg:'. err);
        })

let promise = new promise((resolve, reject)=>{
    resolve();
})        
promise.then(()=>{
    setTimeout(()=> {
        console.log('first call');
    },1000)
    // console.log('first call');
}).then(()=>{
    return new promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('second call');
            resolve();
        }, 3000);
    })
}).then (()=>{
    setTimeout(()=> {
        console.log('third call');
    },2000);
})


