import rxjs from 'rxjs';
const {Observable} = rxjs;

function subscribe(subscriber) {
    const intervalId = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
   
    // dispose function
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  }

  const observable = new Observable(subscribe);
   
  const unsubscribe = subscribe({next: (x) => console.log(x)});
   
  // Later:
  unsubscribe(); // dispose the resources