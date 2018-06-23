const addTwoForTarget = (arr) => {

    //check if the given array meets the condition
    if (arr.length !== 2 || typeof(arr[0]) !== 'object' || typeof(arr[1]) !== 'number') {
        return `Sorry, the format of the given array is not valid.`;
    }

    //we can't add if there is no more than one number
    if (arr[0].length < 2) {
        return `Sorry, there should be at least TWO numbers in the given array.`;
    }

    //filter the array
    const givenArr = arr[0].filter(el => typeof(el) === 'number');

    //check the array's length again after filtering
    if (givenArr.length < 2) {
        return `Sorry, there should be at least TWO numbers in the given array.`;
    }

    const target = arr[1]; //the target number
    const answer = []; //if a match of two numbers are found, we push them into this array and return it

    while (givenArr.length > 1) { 
        let firstNum = givenArr.pop(); //each number is removed from the array and checked by turn through the loop
        let idx = givenArr.indexOf(target - firstNum); //we are looking for a match that could be added by firstNum to produce the target number
        if (idx > -1) {                 //if we find one
            answer.push(givenArr[idx]); //we push the match number into the answer array
            answer.push(firstNum);      //and the firstNum
            return answer;
        }
    }

    return `There is no match of two numbers that are added to produce the target number.`;
}

//const arr1 = [[1, '3', '5', '7', '9'], 12];
// const result = addTwoForTarget(arr1);
// console.log(result);

//a test function that generates a random array and a random target
const randomTest = () => {
    const generateRandomTestArray = () => {

        const NUMBERS_RANGE = 20; //the range of numbers for a given array
        const NUMBER_OF_NUMBERS = 10; //the number of numbers for a given array
        const TARGET_RANGE = 30; //the range of a target number

        const generateRandomArray = () => {

            const arr = [];
            let el;
            for (let i=0; i<NUMBER_OF_NUMBERS; i++) {
                el = Math.floor(Math.random()*NUMBERS_RANGE) + 1;
                arr.push(el);
            }
            return arr;
        }
    
        const generateRandomTarget = () => {
            return Math.floor(Math.random()*TARGET_RANGE) + 1;
        }    
    
        return [generateRandomArray(), generateRandomTarget()];
    }
    
    const randomTestArray = generateRandomTestArray();
    const randomResult = addTwoForTarget(randomTestArray);
    console.log('Given Array:', randomTestArray);
    console.log('Result:', randomResult);
}

randomTest();
