// var numbers = [3, 56, 2, 48, 5];

// //map -- iterate whole array and push tahe value into x
// const NewNumber = numbers.map((x)=>{return x*2})


// //filters-- return the value which which overpass certain criteria
// const greaterNumber=numbers.filter((num)=>{return num >10})


// //reduce--- accumate a value by doing something to each of items in the array
// const ReduceNUmber=numbers.reduce((accumalator,currentNum)=>{
//     return accumalator+currentNum
// })


// //Find -- find the first item that matches from an array
// const FindNumber=numbers.find((num)=>{return num > 10})


// //FindIndex-- return the index of the given num in the array
// const FindIndexNum = numbers.FindIndexNum((num)=>{return num >10})



import emojipedia from "./emojipedia";

const emojiMeaning=emojipedia.map((emoji)=>{
    return emoji.meaning.substring(0,100)
})

console.log(emojiMeaning)