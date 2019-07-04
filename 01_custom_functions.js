// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can flip a coin for your experiment here

// Declare your variables here
// determines (randomly) which language is used during the experiment
var languages =["German","English"]
const language = languages[Math.floor(Math.random() * languages.length)]
const language_sec = language == "German" ? "English" : "German";
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

const check_timing = function(data, next) {
    $("input[name=answer]").on("change", function(e) {
        if (babe_monitor.trial_data[babe_monitor.trial_data.length-1].RT > 180000){
            alert("<<you should focus on the first image tht comes to your mind and don't take too much time.")
        } if (babe_monitor.trial_data[babe_monitor.trial_data.length-1].RT < 1000){
            alert("You should really read the sentence carefully, don't rush through it and take your time.")
        }
        next()
    })
}

var sentences = [
    {
        q_en: "Think of the following <b>image</b>, carefully considering the <b>visual image</b> that comes to your imagination. Rate how vividly you can imagine this:",
        english: "A ball bouncing up and down",
        q_ge: "Stell dir das folgende <b>Bild</b> vor und betrachte sorgfältig die entstehende <b>visuelle Vorstellung</b>. Bewerte, wie lebhaft du dir das Folgende vorstellen kannst:",
        german: "Ein Ball, der auf und ab hüpft",
        type: "visual",
    },
    {
        q_en: "Think of the following <b>sound</b>, carefully considering the <b>auditory</b> image that comes to your imagination. Rate how vividly you can imagine this:",
        english: "Rain falling on the street",
        q_ge: "Stell dir den <b>Ton</b> des Folgenden vor und betrachte sorgfältig die entstehende <b>auditive Vorstellung</b>. Bewerte, wie lebhaft du dir das Folgende vorstellen kannst:",
        german: "Auf die Straße fallender Regen",
        type: "auditory",
    },
    {
        q_en: "Think of the following <b>'feeling'</b> or touching the following, carefully considering the <b>tactile image</b> that comes to your imagination. Rate how vividly you can imagine this:",
        english: "The tickle of a fly on your skin",
        q_ge: "Stell dir das <b>Gefühl</b> des Folgenden auf der Haut vor und betrachte sorgfältig die entstehende <b>taktile (fühlbare) Vorstellung</b>. Bewerte, wie lebhaft du dir das Folgende vorstellen kannst:",
        german: "Das Kitzeln einer Fliege auf der Haut",
        type: "tactile",
    },
    {
        q_en: "Think of <b>performing the following act</b>, carefully considering the image that <b>forms in your mind of your body part(s) moving</b>. Rate how vividly you can imagine this:",
        english: "Sitting down on a chair",
        q_ge: "Stell dir vor <b>das Folgende zu tun</b> und betrachte sorgfältig die entstehende Vorstellung, <b>wie sich deine Arme, Beine, Lippen etc bewegen und fühlen</b>. Bewerte, wie lebhaft du dir das Folgende vorstellen kannst:",
        german: "Auf einem Stuhl sitzen",
        type: "motor",
    },
    {
        q_en: "Think of <b>tasting</b> the following, carefully considering the <b>gustatory image</b> that is produced. Rate how vividly you can imagine this:",
        english: "Strawberrys",
        q_ge: "Stell dir den folgenden <b>Geschmack</b> vor und betrachte sorgfältig die entstehende <b>geschmackliche Vorstellung</b>. Bewerte wie lebhaft du dir das Folgende vorstellen kannst:",
        german: "Erdbeeren",
        type: "gustatory",
    },
    {
        q_en: "Think of <b>smelling</b> the following, carefully considering the <b>olfactory</b> image that is produced. Rate how vividly you can imagine this:",
        english: "The smell of coffee",
        q_ge: "Stellen Sie sich den folgenden <b>Geruch</b> vor und betrachten Sie sorgfältig die entstehende <b>geruchliche Vorstellung</b>. Bewerten Sie wie lebhaft Sie sich das Folgende vorstellen können:",
        german: "Den Geruch von Kaffee",
        type: "olfactory",
    },
    {
        q_en: "Think of the following <b>sensation</b>, carefully considering the <b>image that comes to your imagination</b>. Rate how vividly you can imagine this:",
        english: "Tiredness",
        q_ge: "Stellen Sie sich das folgende <b>Gefühl</b> vor und begutachten Sie genau die <b>Vorstellung welche in Ihre Gedanken dazu kommt</b>. Bewerten Sie, wie lebhaft Sie sich das Folgende vorstellen können:",
        german: "Müdigkeit",
        type: "organic",
    }
]

const generate_trial_views = function(){
    if (language =="English"){
        var object_list=[];
        for (i=0; i<sentences.length;i++){
            var object = {
                optionLeft:"no image",
                optionRight:"perfectly clear",
                question:sentences[i].english,
                QUD: sentences[i].q_en,
                language: language,
                id: i,
                type: sentences[i].type,
                button_under: "I don't understand the sentence."
            }
            object_list.push(object)
        }
    }else{
        var object_list=[];
        for (i=0; i<sentences.length;i++){
            var object = {
                optionLeft:"keine Vorstellung",
                optionRight:"eine perfekt klare Vorstellung",
                question:sentences[i].german,
                QUD: sentences[i].q_ge,
                language: language,
                id: i,
                type: sentences[i].type,
                button_under: "Ich verstehe den Satz nicht nicht."
            }
            object_list.push(object)
        }
    }
    return object_list;
}


const get_trials = function(from, to){
    all_trials = generate_trial_views();
    num_trials = all_trials.slice(from,to);
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



const generate_random_view_seq = function(){
    if (language == "German"){
        return [intro_ger,
            instructions_practice_ger,
            ratingScaleTrial,
            instructions_main_ger,
            ratingScaleTask,
            general_language_ger,
            subjective_language_ger,
            objective_language_ger,
            additional_info_ger,
            thanks_ger]
    }else{
        return [intro_eng,
            instructions_practice_eng,
            ratingScaleTrial,
            instructions_main_eng,
            ratingScaleTask,
            general_language_eng,
            subjective_language_eng,
            objective_language_eng,
            additional_info_eng,
            thanks_eng]
    }
    
}


