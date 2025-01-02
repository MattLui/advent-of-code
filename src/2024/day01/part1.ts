import * as fs from "fs";

const inputData: string = fs.readFileSync("src/2024/day01/input.txt", "utf-8");
const lines: string[] = inputData.trim().split("\n");

const column1: number[] = [];
const column2: number[] = [];

for (let i = 0; i < lines.length; i++) {
  const [col1, col2] = lines[i].split(/\s+/).map(Number);
  column1.push(col1);
  column2.push(col2);
}

const sorted1: number[] = column1.sort((a, b) => a - b);
const sorted2: number[] = column2.sort((a, b) => a - b);

let distance: number = 0;
for (let i = 0; i < sorted1.length; i++) {
  distance += Math.abs(sorted1[i] - sorted2[i]);
}

console.log(distance);
