import rxjs from 'rxjs';
const {Observable, of} = rxjs;

// subscribe with observer
const sumObserver = {
    sum: 0,
    next(value) {
        console.log(`Adding ${value}`);
        this.sum = this.sum + value;
    },
    error() {},
    complete() {
        console.log(`Sum is = ${this,this.sum}`);
    }
};

of(1, 2, 3).subscribe(sumObserver);

// subscribe with function

let summ = 0;

of(1,2,3).subscribe(
    value => {
        console.log(`Adding ${value}`);
        summ = summ + value;
    },
    undefined,
    () => console.log(`Sum is = ${summ}`)
);