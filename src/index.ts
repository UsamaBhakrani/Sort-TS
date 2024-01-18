import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, 1, 55, -55, 0, 50]);
const charactersCollection = new CharactersCollection("Harlow");

const numberSorter = new Sorter(numbersCollection);
const characterSorter = new Sorter(charactersCollection);

numberSorter.sort();
characterSorter.sort();

console.log(numbersCollection.length);
console.log(numbersCollection.data);
console.log(charactersCollection.length);
console.log(charactersCollection.data);
