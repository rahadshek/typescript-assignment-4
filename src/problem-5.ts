interface result {
    total: number
    average: number
}

const getQuizSummary = (scores: number[]):result => {

    const total = scores.reduce((acc: number,num: number) => acc + num, 0 )
    const average = scores.length === 0 ? 0 : total / scores.length

   
    return {
        total,
        average
    }
}

console.log(getQuizSummary([8, 9, 7, 10]))
console.log(getQuizSummary([5, 5]))
console.log(getQuizSummary([]))