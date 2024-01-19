interface Sortable {
  length: number;
  compare(leftIndexArg: number, rightIndexArg: number): boolean;
  swap(leftIndexArg: number, rightIndexArg: number): void;
}

export abstract class Sorter {
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
