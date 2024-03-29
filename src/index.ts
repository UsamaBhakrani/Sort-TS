import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, 1, 55, -55, 0, 50]);
const charactersCollection = new CharactersCollection("Harlow");

// const numberSorter = new Sorter(numbersCollection);
// const characterSorter = new Sorter(charactersCollection);

// numberSorter.sort();
charactersCollection.sort();
console.log(charactersCollection.data);

numbersCollection.sort()
console.log(numbersCollection.data);


// console.log(numbersCollection.length);
// console.log(numbersCollection.data);
// console.log(charactersCollection.length);
// console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(50);
// linkedList.add(100);
// linkedList.add(-30);

// const sorter = new Sorter(linkedList);
// sorter.sort;
// linkedList.print();
