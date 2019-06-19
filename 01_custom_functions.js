// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can flip a coin for your experiment here
// Declare your variables here



/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks  
*
*
*/

//Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};
// Declare your hooks here

const check_response = function(data, next) {
    data.response_checked = false;
    $("body").on("keydown", function(e) {
        if (data.response_checked == false) {
            const keyPressed = String.fromCharCode(
                e.which
            ).toLowerCase();
            if (keyPressed == data.key1 || keyPressed == data.key2) {
                if (data[keyPressed] === data.correct) {
                    alert('Your answer is correct! Yey!');
                } else {
                    alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
                }
                data.response_checked = true;
                next();
            }
        }})
}

var sentences = [
    {
        english: "Imagine the taste of sea water",
        german: "Stelle dir den Geschmack von Meerwasser vor",
        type: "gustatory",
        
    },
    {
        english: "Imagine the feeling of a headache",
        german: "Stelle dir das Gefühl von Kopfschmerzen vor",
        type: "organic",
        
    },
    {
        english: "Imagine the seeing a deep blue lake",
        german: "Stelle dir einen tief blauen See vor",
        type: "visual",
        
    },
    {
        english: "Imagine hearing a mouse",
        german: "Stelle dir vor eine Maus zu hören",
        type: "auditory",
        
    },
    {
        english: "Imagine running down the stairs",
        german: "Stelle dir vor die Treppen herunter zu rennen",
        type: "Motor",
        
    },
    {
        english: "Imagine the taste of an orange",
        german: "Stelle dir den Gechmack einer Orange vor",
        type: "gustatory",
        
    }
]

const generate_trial_views = function(){
    var languages =["English","German"];
    var language = myArray[Math.floor(Math.random() * languages.length)];
    if (language ="English"){
        var object_list=[];
        for (i=0; i<=sentences.length;i++){
            var object = {
                optionLeft:"no image",
                optionRight:"perfectly clear",
                question:sentences[i].english,
                language: language,
                id: i,
                type: sentences[i].type,
            }
            object_list.push(object)
        }
    }else{
        var object_list=[];
        for (i=0; i<=sentences.length;i++){
            var object = {
                optionLeft:"no image",
                optionRight:"perfectly clear",
                question:sentences[i].german,
                language: language,
                id: i,
                type: sentences[i].type,
            }
        }
        object_list.push(object)
    }
    return object_list;
}
const generate_path = function(){
    var rot_list=[];
    var type_list=[];
    var object_list=[]
    var rot = ""
    var type = ""

    for (i = 1;i < 16;i++) { 
        for(j=0;j<2;j++){        
            if(j===0){ 
                rot_list.push('50'); 
                rot = "50"
            }
            if (j===1){
                rot_list.push('150'); 
                rot = "150"
            }
            for(k=0;k<2;k++){
                if(k===0){
                    type_list.push('different'); 
                    type = "different"
                }
                if(k===1){
                    type_list.push('same'); 
                    type = "same"
                }
                var object = {
                    question: "Are the two pictures shown containing the <strong>same</strong> or <strong>different</strong> objects?",
                    picture: "images/" + i + "_" + rot + "_" + type + ".jpg",
                    key1: 'f',
                    key2: 'j',
                    f: 'same',
                    j: 'different',
                    rotation: rot,
                    expected: type,
                    correct: type,
                }
                object_list.push(object)
            }
        }
    }
    return object_list;
}

const get_trials = function(from, to){
    all_trails = generate_path();
    num_trials = all_trails.slice(from,to);
    return shuffle(num_trials)
}

const shuffle = function shuffle(array) {
    a = array
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}