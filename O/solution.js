class Booleanquestion{
    constructor(description){
        this.description = description
    }

    printuetionChoices(){
        console.log('1. True')
        console.log('2. False')
    }
}

class multipleChoicequestion{
    constructor(description, options){
        this.description = description
        this.options = options
    }

    printuetionChoices(){
        this.options.forEach((option, index)=>{
            console.log(`${index + 1}. ${option}`)
        })
    }
}

class Textquestion{
    constructor(description){
        this.description = description
    }

    printuetionChoices(){
        console.log('Answer__________________')
    }
}

function printuize(questions){
    questions.forEach(question => {
        console.log(question.description)
        question.printuetionChoices()
        console.log('')
        
    });
}

const questions = [
    new Booleanquestion('some some some....'),
    new multipleChoicequestion('some some some....', ['CSS','HTML','JS','Python']),
    new Textquestion('some some some....')
]

printuize(questions)