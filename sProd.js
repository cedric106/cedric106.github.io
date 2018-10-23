/*
 setTimeout(() => {
    console.log('Alligator!!!!');
  }, 8000);               
     */           

var addressInput = document.getElementById('address');
var messageInput = document.getElementById('test');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(addressInput.value);    
});

document.querySelector('form.pure-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(messageInput.value);    
});



/*

1. be able to console.log 2 inputs: email address & message
2. Figure out the date thing. How can I perhaps console log something in the future? 
3. Forgetting about code, send a gmail using JS





















/*
let allAnswers = ['0:blue , 1:green , 2:yellow',  '0: dog , 1: lizards , 2: snakes'];
let allQuestions = ['what is your favorite color? ','what is your fav animal? '] 

//var randNum = [Math.floor(Math.random() * allQuestions.length)];
//var qRand = allQuestions[randNum];
//var aRand = allAnswers[randNum];

var randNum = [Math.floor(Math.random() * allQuestions.length)];
var qRand = allQuestions[randNum];
var aRand = allAnswers[randNum];
//var sex = window.prompt(qRand + aRand)

var allIn = function (el) {

var nextRand = [Math.floor(Math.random() * allQuestions.length)];
var nextQRand = allQuestions[nextRand]
var nextARand = allAnswers[nextRand];

    if (el == 0) {
        console.log('success');
        allIn(window.prompt(nextQRand+nextARand));
    } else if (el === 'exit') {
        return;
    } else {
        console.log('idiot');
        allIn(window.prompt(nextQRand+nextARand));
    }
};

var score = [1,2];
console.log(score.length);


/*

var dog = window.prompt('0 is correct, 1 is wrong'); 

var test = function(el) {
    if (el == 0) {
        console.log('nice!');
        test(window.prompt('0 is correct, 1 is wrong'));
    } else if (el == 'exit') {
        return;
    } else { 
        console.log('idiot!');
        test(window.prompt('0 is correct, 1 is wrong'));
    }
}

test(window.prompt('0 is correct, 1 is wrong'));




/*
var i = 0;

if (dog == 0) {
    i++;
    console.log(i);
    for (var i=0; i<1000; i++) {
    if (window.prompt('0 is correct, 1 is wrong') == 0) {
        i++;
        console.log(i);
    }
    if (window.prompt('0 is correct, 1 is wrong') == 0) {
        i++;
        console.log(i);
    }
    if (window.prompt('0 is correct, 1 is wrong') == 0) {
        i++;
        console.log(i);
    }
    if (window.prompt('0 is correct, 1 is wrong') == 0) {
        i++;
        console.log(i);
    }
} 
} else {
    console.log('done');
}

var sex = if (window.prompt('0 is correct, 1 is wrong') == 0) {
    i++;
    console.log(i);
}



/*
var proInput = window.prompt('0' + ' or 1');

var oTest = function (el) {
if (el == 0) {
    console.log('nice');
    window.prompt('0' + ' or 1');
} else if (el == 'exit') {
    console.log('done!');
} else {
    console.log('idiot');
    window.prompt('0' + ' or 1');
}
};

oTest(proInput);

var oTest = {
    les : window.prompt('0' + ' or 1'),
    oty : {
        if (les == 0) {
            write 
        }
    }
}


let newQ = window.prompt('question here');

while (answerToQ != 'exit') {
    newQ;
}


if (newQ == 0 || newQ == 1) {
    console.log('nice!');
    function(question);
} else {
    return;
}
*/
