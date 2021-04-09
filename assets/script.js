var questions = [
{
    prompt: "What is an array in coding?\n(a) A rainbow collection of colors\n\(b) A set of codes in a path\n(c) A data structure consisting of a collection of elements each identified by at least one array index or key",
    answer: "c"
},
{
    prompt: "What does API stand for?\n(a) Association Pivet Index\n\(b) Application Point Information\n(c) Application Programming Interface",
    answer: "c"
},
{
    prompt: "What is coding?\n(a) Coding is how we communicate with computers\n\(b) Coding is a code word for awesome\n(c) Coding is a robot",
    answer: "a"
},

var score = 0;

for (var i=0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct");        
    }   else {
        alert ("WRONG!");
    }
}

