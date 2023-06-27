export default (number_1: number, operand: string, number_2: number): number => {
    let result = 0
    switch (operand) {
        case "+":
            result = number_1 + number_2
            break;
        case "-":
            result = number_1 - number_2
            break;
        case "*":
            result = number_1 * number_2
            break;
        case "/":
            result = number_1 / number_2
            break;
    }
    return result
}