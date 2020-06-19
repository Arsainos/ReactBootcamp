import rxjs from 'rxjs';
const {Observable} = rxjs;

// trying to push/pull elements from the observable

const someStorage = new Observable(subsciber => {
    console.log(`Hello`);
    console.log(42);
})

// let's subscribe to the storage
someStorage.subscribe(x=> {
    console.log(`Subscriber_1: ${x}`);
});
someStorage.subscribe(x => {
    console.log(`Subscriber_2: ${x}`);
});