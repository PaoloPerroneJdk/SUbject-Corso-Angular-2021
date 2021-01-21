import { Subject } from "rxjs";

const subject = new Subject<number>();


subject.subscribe(val => console.log("Ossservatore A : ", val));
subject.subscribe(val => console.log("Ossservatore B : ", val));

subject.next(1);
subject.next(2);


