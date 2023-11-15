import React from "react";

// 1) переменные с типом string
const massNum: number[] = [];
let result1: string = "1 - ";

for (let i: number = 1; i <= 10; i++) {
  massNum[i] = i;
  if (i < 10) {
    result1 += massNum[i] + ", ";
  } else {
    result1 += massNum[i];
  }
}

// 2) переменные с типом number
const massStr: string[] = [];
let result2: string = "2 - ";

for (let i: number = 97; i <= 106; i++) {
  massStr[i] = String.fromCharCode(i); // англ.буквы по аски коду
  if (i < 106) {
    result2 += massStr[i] + ", ";
  } else {
    result2 += massStr[i];
  }
}

// 3) переменные с типом boolean
const massBool: boolean[] = [];
let result3: string = "3 - ";

for (let i: number = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    massBool[i] = true;
  } else {
    massBool[i] = false;
  }
  if (i < 10) {
    result3 += massBool[i] + ", ";
  } else {
    result3 += massBool[i];
  }
}

// 4) объекты
type myobj = {
  name: string;
  age: number;
};
const massObj: any[] = [];
let result4: string = "4 - ";

for (let i: number = 1; i <= 10; i++) {
  let obj: myobj = {
    name: String.fromCharCode(i + 96), // англ.буквы по аски коду
    age: i,
  };
  massObj[i] = obj;
  if (i < 10) {
    result4 +=
      "(name: " + massObj[i].name + ", age: " + massObj[i].age + "},  ";
  } else {
    result4 += "{name: " + massObj[i].name + ", age: " + massObj[i].age + "}";
  }
}

// 6.1 - сумма
function sum(numb1: number, numb2: number): number {
  return numb1 + numb2;
}

// 6.2 - произведение
function multiply(numb1: number, numb2: number): number {
  return numb1 * numb2;
}

// 6.3 - чётное/ нечётное
function isEven(numb1: number): boolean {
  return numb1 % 2 === 0;
}

// 6.4 - с первой прописной буквой
function capitalize(str1: string): string {
  return str1[0].toUpperCase() + str1.slice(1);
}

// 6.5 - элементы массива в обратном порядке
// function reverseArray(mass: string[]): string[] {
function reverseArray(mass: string[]): string {
  // на экран
  let result65: string = "[ ";
  let j: number = 0;
  let massNew: string[] = [];

  for (let i: number = mass.length - 1; i >= 0; i--) {
    massNew.push(mass[i]);
    if (i > 0) {
      result65 += massNew[j] + ", ";
    } else {
      result65 += massNew[j] + " ]";
    }
    j++;
  }
  // return massNew;
  return result65; // на экран
}

// 6.6 - максимальное значение
function findMax(mass: number[]): number {
  let maxVal: number = 0;
  for (let i: number = 0; i < mass.length; i++) {
    if (mass[i] > maxVal) {
      maxVal = mass[i];
    }
  }
  return maxVal;
}

// 6.7 - массив, содержащий только строки
// function filterStrings(mass: any[]): string[] {
function filterStrings(mass: any[]): string {
  // на экран
  let result67: string = "[ ";
  let j: number = 0;
  let massNew: string[] = [];

  for (let i: number = 0; i < mass.length; i++) {
    if (typeof mass[i] === "string") {
      massNew.push(mass[i]);
      if (j === 0) {
        result67 += "'" + massNew[j] + "'";
      } else {
        result67 += ", '" + massNew[j] + "'";
      }
      j++;
    }
  }
  // return massNew;
  result67 += " ]"; // на экран
  return result67; // на экран
}

// 6.8 - среднее значение
function calculateAverage(mass: number[]): number {
  let average: number = 0;
  for (let i: number = 0; i < mass.length; i++) {
    average = average + mass[i];
  }
  average = average / mass.length;
  return average;
}

// 6.9 - массив уникальных значений
// function getUniqueValues(mass: string[]): string[] {
function getUniqueValues(mass: string[]): string {
  // на экран
  let result69: string = "[ ";
  let j: number = 0;
  let uniq: string[] = [];

  for (let i: number = 0; i < mass.length; i++) {
    if (!uniq.includes(mass[i])) {
      uniq.push(mass[i]);
      if (j === 0) {
        result69 += "'" + uniq[j] + "'";
      } else {
        result69 += ", '" + uniq[j] + "'";
      }
      j++;
    }
  }
  // return (uniq)
  result69 += " ]"; // на экран
  return result69; // на экран
}

// 6.10 - "день.месяц.год"
function formatDate(curDate: Date): string {
  return (
    curDate.getDate() +
    "." +
    (curDate.getMonth() + 1) + // январь = 0
    "." +
    curDate.getFullYear()
  );
}

// на экран
export const BeginTs = () => {
  return (
    <div>
      <p>{result1}</p>
      <p>{result2}</p>
      <p>{result3}</p>
      <p>{result4}</p>
      <p>5 - Массивы смотрите выше или ниже</p>
      <p>6.1 - Сумма чисел 8 и 10 = {sum(8, 10)}</p>
      <p>6.2 - Произведение чисел 8 и 10 = {multiply(8, 10)}</p>
      <p>6.3 - число 8 чётное {isEven(8)}</p>
      <p>6.4 - С первой прописной буквой = {capitalize("qwerty")}</p>
      <p>
        6.5 - Массив, содержащий элементы в обратном порядке ={" "}
        {reverseArray(["1", "2", "3"])}
      </p>
      <p>6.6 - Максимальное значение массива = {findMax([10, 20, 30])}</p>
      <p>
        6.7 - Массив, содержащий только строки ={" "}
        {filterStrings([10, "hello", 30, "hi"])}
      </p>
      <p>6.8 - Среднее значение = {calculateAverage([10, 20, 30])}</p>
      <p>
        6.9 - Массив уникальных значений ={" "}
        {getUniqueValues([
          "YM",
          "IA",
          "JS",
          "FR",
          "GA",
          "IA",
          "YM",
          "JS",
          "FR",
          "GA",
          "IA",
        ])}
      </p>
      <p>6.10 - День.месяц.год = {formatDate(new Date())}</p>
    </div>
  );
};
