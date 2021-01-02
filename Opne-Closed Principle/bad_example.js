/**
 * Principle: Open Closed Principle
 * It says Our class/function should be Open for extension 
 * but close for modification.
 * It should not get mofified again & again to add new features
 */

function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch (question.type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break;

            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}.${option}`)
                })
                break;

            case 'text':
                console.log('Answer: ________________');
                break;
        }
        console.log('');
    });
}

const questions = [
    {
        type: 'boolean',
        description: 'This video is useful'
    },
    {
        type: 'multipleChoice',
        description: 'What is your favorite language?',
        options: ['css', 'HTML', 'JS', 'NodeJS']
    },
    {
        type: 'text',
        description: 'Describe your favorite JS feature.'
    }
]

printQuiz(questions);

/**
 * If suppose if we need to add anoher question type to this qurstions array
 * then will have to add another switch statement in printquiz
 * which is actually violating open closed principle.
 * Whenever we is multiple IF-Else, Switch statements .. 
 * There are chances of violation of Open-Closed Principle.
 * So if we change code outside (adding another type) so 
 * it should not change code inside of function. printquix should be closed for changes
 */
