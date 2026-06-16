console.log("A")
console.log("B")
console.log("C")
// const promise = new Promise((resolve,reject)=>{
//     const success = true;
//     if(success){
//         console.log("Done")
//     }
//     else{
//         console.log("No")
//     }
// })
//asynchronous
// const promise = new Promise((resolve,reject)=>{
//     //setTimeout is similar to sleep in java
//     setTimeout(()=>{
//         console.log("Hi")
//     },2000)
//     setTimeout(()=>{
//         console.log("Done")
//     },0)
//     console.log("D")
// })
// promise.then(res=>{console.log(res)}).catch(err=>{console.log(res)}).catch(err=>{console.log(err)})
console.log(1)
console.log(2)
console.log(3)
console.log("Hi")
function example(){
    console.log("Hello")
}
const example1 = () =>{
    const a=1;
    const b=2;
    console.log(1+2);
}
setTimeout(example ,3000)
setTimeout(example1 ,450)