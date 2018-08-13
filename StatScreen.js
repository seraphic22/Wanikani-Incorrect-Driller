// ==UserScript==
// @name        Wanikani Stat
// @namespace   Stat
// @description A new and improved lesson/review summary screen
// @version     0.0.1
// @include     file:///G:/Guilty/Downloads/test.html
// @copyright   2018+, Musera
// @license     MIT; http://opensource.org/licenses/MIT
// @run-at      document-end
// @grant       none
// ==/UserScript==


    //===================================================================
    // A quick test to see what I can immediately do
    //===================================================================
    var incorrect = document.getElementById("incorrect");
    var listItems = incorrect.getElementsByTagName("li");

    for (var i=2; i <=5; i++) {
        document.getElementsByClassName("pure-g-r")[i].style.display = "none"
    }

    var quiz = document.createElement('div');
    quiz.id = 'quizzy';
    quiz.className = 'quizzy';
    
    var addUL = document.createElement('ul');
    var addLI = document.createElement('li');
    addLI.appendChild(document.createTextNode("four"));
    addUL.appendChild(addLI);

    document.getElementById("copyright").appendChild(quiz);

    document.getElementsByTagName('body')[0].appendChild(quiz);

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("copyright");
element.appendChild(para);