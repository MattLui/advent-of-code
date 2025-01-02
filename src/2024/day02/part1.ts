import * as fs from "fs";

const inputData: string = fs.readFileSync("src/2024/day02/input.txt", "utf-8");
const lines: string[] = inputData.trim().split("\n");

let count: number = 0;

for (const line of lines) {
  const arr: number[] = line.split(/\s+/).map(Number);
  if ((allIncreasing(arr) || allDecreasing(arr)) && differByOneToThree(arr)) {
    count++;
  }
}
function allIncreasing(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function allDecreasing(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function differByOneToThree(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (
      Math.abs(arr[i] - arr[i - 1]) > 3 ||
      Math.abs(arr[i] - arr[i - 1]) < 1
    ) {
      return false;
    }
  }
  return true;
}

console.log(`Count: ${count}`);
