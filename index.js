const addTwoForTarget = (arr) => {
    if (arr.length !== 2 || typeof(arr[0]) !== 'object' || typeof(arr[1]) !== 'number') {
        return `Sorry, the format of the given array is not valid.`;
    }

    if (arr[0].length < 2) {
        return `Sorry, there should be at least TWO numbers in the given array.`;
    }

    const givenArr = arr[0];
    const target = arr[1];
    const answer = [];

    while (givenArr.length > 1) {
        let firstNum = givenArr.pop();
        let idx = givenArr.indexOf(target - firstNum);
        if (idx > -1) {
            answer.push(givenArr[idx]);
            answer.push(firstNum);
            return answer;
        }
    }
    return `There is no match of two numbers that are added to produce the target number.`;
}

const arr1 = [[1, 3, 5, 7, 9], 12];
const result = addTwoForTarget(arr1);
console.log(result);
