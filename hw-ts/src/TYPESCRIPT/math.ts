interface IMathOperation {
    add: (num1 : number, num2 : number) => number
    subtract: (num1 : number, num2 : number) => number
}

const add: IMathOperation['add'] = (num1, num2) => num1 + num2 
const subtract: IMathOperation['subtract'] = (num1, num2) => num1 - num2 

export { add, subtract }
export type { IMathOperation }