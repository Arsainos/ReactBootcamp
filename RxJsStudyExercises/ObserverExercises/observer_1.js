import rxjs from 'rxjs';
const {Observable} = rxjs;

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
})

const observer = {
    next: (x) => console.log(`Observer get a value ${x}`),
    error: (err) => console.log(`Exception occured: ${err}`),
    complete: () => console.log(`Observer work is done`)
}

console.log(`before execution`);
observable.subscribe(observer);
console.log(`after execution`);