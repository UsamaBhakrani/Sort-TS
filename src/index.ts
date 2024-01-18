import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, 1, 55, -55, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.length);
console.log(numbersCollection.data);
