//Open-closed principle
//open for extension closed for modification

function printuize(questions){
    questions.forEach(question => {
        console.log(question.description)

        switch (question.type){
            case 'boolean':
                console.log('1. True')
                console.log('2. False')
                break

            case 'multipleChoice':
                question.options.forEach((option, index)=>{
                    console.log(`${index + 1}. ${option}`)
                })
                break

            case 'text':
                console.log('Answer__________________')
                break
        }
        console.log('')
        
    });
}

const questions = [
    {
        type: 'boolean',
        description: 'some some some....'
    },
    {
        type: 'multipleChoice',
        description: 'some some some....',
        options:['CSS','HTML','JS','Python']
    },
    {
        type: 'text',
        description: 'some some some....'
    }
]

printuize(questions)

//what if add new element in array? 
// we have to change the switch statment too