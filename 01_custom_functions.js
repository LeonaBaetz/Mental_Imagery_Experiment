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

var sentences = [
    {
        q_en: "Think of the following image carefully considering the visual image that comes to your imagination. Rate how vividly you can imagine this:",
        english: "A ball bouncing up and down",
        q_ge: "bla",
        german: "Ein Ball auf und ab hüpfend",
        type: "visual",
    },
    {
        q_en: "Think of the following sound carefully considering the auditory image that comes to your imagination. Rate how vividly you can imagine this:",
        english: "Rain falling on the street",
        q_ge: "bla",
        german: "Auf die Straße fallender Regen",
        type: "auditory",
    },
    {
        q_en: "Think of the following “feeling” or touching the following carefully considering the tactile image that comes to your imagination. Rate how vividly you can imagine this:",
        english: "A piece of paper",
        q_ge: "bla",
        german: "Ein Stück papier",
        type: "tactile",
    },
    {
        q_en: "Think of performing the following act, carefully considering the image that forms in your mind of your body part(s) moving. Rate how vividly you can imagine this:",
        english: "Sitting down on a chair",
        q_ge: "bla",
        german: "Auf einem Stuhl sitzen",
        type: "motor",
    },
    {
        q_en: "Think of tasting the following, carefully considering the gustatory image that is produced. Rate how vividly you can imagine this:",
        english: "Strawberrys",
        q_ge: "bla",
        german: "Erdbeeren",
        type: "gustatory",
    },
    {
        q_en: "Think of smelling the following,  carefully considering the olfactory image that is produced. Rate how vividly you can imagine this:",
        english: "The smell of coffee",
        q_ge: "bla",
        german: "Den Geruch von Kaffee",
        type: "olfactory",
    },
    {
        q_en: "Think of smelling the following,  carefully considering the olfactory image that is produced. Rate how vividly you can imagine this:Think of the following sensation, carefully considering the image that comes to your imagination. Rate how vividly you can imagine this",
        english: "Tiredness",
        q_ge: "bla",
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
            post_test_ger,
            subjective_language_eng,
            thanks_ger]
    }else{
        return [intro_eng,
            instructions_practice_eng,
            ratingScaleTrial,
            instructions_main_eng,
            ratingScaleTask,
            post_test_eng,
            subjective_language_eng,
            thanks_eng]
    }
    
}

const custom_answer_container_generators = {
    subjective_language_native_eng: function(config, CT) {
        return `<form>
        <p class='babe-view-text'>${config.question}</p>
        <p class='babe-view-text'>
            <label for="${config.class1}">${config.class1}:</label>
            <select id="${config.class1}" name="${config.class1}">
                <option></option>
                <option value="1">${config.option1}</option>
                <option value="2">${config.option2}</option>
                <option value="3">${config.option3}</option>
                <option value="4">${config.option4}</option>
                <option value="5">${config.option5}</option>
                <option value="6">${config.option6}</option>
                <option value="7">${config.option7}</option>
                </select>
        </p>
        <p class='babe-view-text'>
            <label for="${config.class2}">${config.class2}:</label>
            <select id="${config.class2}" name="${config.class2}">
                <option></option>
                <option value="1">${config.option1}</option>
                <option value="2">${config.option2}</option>
                <option value="3">${config.option3}</option>
                <option value="4">${config.option4}</option>
                <option value="5">${config.option5}</option>
                <option value="6">${config.option6}</option>
                <option value="7">${config.option7}</option>
                </select>
        </p>
        <p class='babe-view-text'>
            <label for="${config.class3}">${config.class3}:</label>
            <select id="${config.class3}" name="${config.class3}">
                <option></option>
                <option value="1">${config.option1}</option>
                <option value="2">${config.option2}</option>
                <option value="3">${config.option3}</option>
                <option value="4">${config.option4}</option>
                <option value="5">${config.option5}</option>
                <option value="6">${config.option6}</option>
                <option value="7">${config.option7}</option>
                </select>
        </p>
        <button id="next" class='babe-view-button'>${config.button}</button>
        </form>`;
    }
}
const custom_stimulus_container_generators = {
    subjective_language_native_eng: function(config, CT) {
        return `<div class='babe-view babe-post-test-view'>
                    <h1 class='babe-view-title'>${config.title}</h1>
                    <section class="babe-text-container">
                        <p class="babe-view-text">${config.text}</p>
                    </section>
                </div>`;
    }
}

const custom_handle_response_function = {
    subjective_language_native_eng: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            
            babe.global_data.speaking = $("#speaking").val();
            babe.global_data.listening = $("#listening").val();
            babe.global_data.writing = $("#writing").val();
            babe.global_data.endTime = Date.now();
            babe.global_data.timeSpent =
                (babe.global_data.endTime -
                    babe.global_data.startTime) /
                60000;

            // moves to the next view
            babe.findNextView();
        });
    },
}