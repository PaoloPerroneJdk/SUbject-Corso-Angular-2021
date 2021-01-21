import { from, Subject } from "rxjs";
import { multicast } from "rxjs/operators";

const subject = new Subject<number>();


subject.subscribe(val => console.log("Ossservatore A : ", val));
subject.subscribe(val => console.log("Ossservatore B : ", val));


subject.next(1);
subject.next(2);


/* altra maniera  */

const observable = from ([4,5,6])

observable.subscribe(subject) /* abbiamo creato un observable che riceve un subject che va ad effettuare un next()*/

/*      */

const source = from([8,9,10])
const subject1 = new Subject<number>()
const multicasted = source.pipe(multicast(subject1))


multicasted.subscribe(val => console.log("Ossservatore B : ", val));
multicasted.subscribe(val => console.log("Ossservatore C : ", val));

multicasted.connect()