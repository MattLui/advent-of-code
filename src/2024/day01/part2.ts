import * as fs from "fs";

const inputData: string = fs.readFileSync("src/2024/day01/input.txt", "utf-8");
const lines: string[] = inputData.trim().split("\n");

const column1: number[] = [];
const column2: number[] = [];

for (const line of lines) {
  const [col1, col2] = line.split(/\s+/).map(Number);
  column1.push(col1);
  column2.push(col2);
}

const lookup: { [key: number]: boolean } = {};
for (const value of column1) {
  lookup[value] = true;
}

let similarity: number = 0;

for (const value of column2) {
  if (lookup[value]) {
    similarity += value;
  }
}

console.log(similarity);
