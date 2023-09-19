/*
    This is singleton + Observer pattern

    because most of the time observers needs to be singleton.

    This observableInstance you can import in many files and still will have only one reference(i.e. one object created)

*/

let instance 
class Observable {
    constructor(){
        if(instance){
            throw new Error("Instance already exists")
        }
        instance = this
        this.observers = []
    }
    subscribe(fn){
        this.observers.push(fn)
    }
    unsubscribe(fn){
        this.observers = this.observers.filter((observerFn)=>observerFn!=fn)
    }
    notify(data){
        this.observers.forEach((observerFn)=>{
            observerFn(data)
        })
    }
}


const observableInstance = Object.freeze(new Observable())

function logger(data){
    console.log("observer1 logged",data);
}

function anotherLogger(data){
    console.log("observer2 logged",data);
}

observableInstance.subscribe(logger)
observableInstance.subscribe(anotherLogger)

setTimeout(()=>{
    observableInstance.notify("notified1")
},2000)

setTimeout(()=>{
    observableInstance.notify("notified2")
},4000)

// export default observableInstance