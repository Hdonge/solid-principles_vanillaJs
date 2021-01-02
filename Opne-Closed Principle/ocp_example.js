class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}

class multipleChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}.${option}`)
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Answer: ________________');
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Minimum: ________________');
        console.log('Maximum: ________________');
    }
}

//model
const questions = [
    new BooleanQuestion('This video is useful'),
    new multipleChoiceQuestion(
        'What is your favorite language?',
        ['css', 'HTML', 'JS', 'NodeJS']
    ),
    new TextQuestion('Describe your favorite JS feature.'),
    new RangeQuestion('Describe the range of value')
];


function printQuiz(questions) {
    questions.forEach((question) => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log('');
    });
}

printQuiz(questions);

/**
 * Above example follows Open closed principle
 * Here printQuiz function is written in such a way that 
 * it will not get modified whenever a new question type 
 * will get added. In this way function is open for extension of its functionality 
 * but closed for any changes to add any feature.
 * By using above functionality of code is extended without modification
 * Whenenver we lot of If-else/switch statements we should be modifying our code to 
 * do this.
 */