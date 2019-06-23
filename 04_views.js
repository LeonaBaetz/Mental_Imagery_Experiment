// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `This is a mental imagery experiment.
            <br />
            <br />
            i
            <br />
            <br />
            This is a minimal experiment with one forced choice view. It can serve as a starting point for programming your own experiment.`,
   buttonText: 'Begin the experiment'
});



// For most tasks, you need instructions views
const instructions_practice = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `This is first a practice.
            <br />
            <br />
            Press f or j ......`,
    buttonText: 'go to trials'
});

const instructions_main = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `This is the real experiment now. It looks exactly like the practice, just without the feedback.
            <br />
            <br />
            Are you ready?`,
    buttonText: 'GO'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale

const ratingScaleTrial = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_trial.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTrial',
    trial_type: 'ratingScaleTrial',
    data: trial_info.rating_scale_trial,
});

const ratingScaleTask = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_task.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTask',
    trial_type: 'ratingScaleTask',
    data: trial_info.rating_scale_task,
});

//This (customized) View is used to ask the User which language they speak
const intro_choice = babeViews.view_generator("forced_choice",{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.intro_choice_info.length,
    // name and trial_type should be identical to the variable name
    name: 'intro_choice',
    trial_type: 'intro_choice',
    data: trial_info.intro_choice_info,
},{
    answer_container_generator: function (config, CT) {
     return `<div class='babe-view-answer-container'>
             <p class='babe-view-question'>${config.data[CT].question}</p>
             <label for='o1' class='babe-response-buttons'>${config.data[CT].option1}</label>
             <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
             <label for='o2' class='babe-response-buttons'>${config.data[CT].option2}</label>
             <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
             <label for='o3' class='babe-response-buttons'>${config.data[CT].option3}</label>
             <input type='radio' name='answer' id='o3' value=${config.data[CT].option3} />
             <label for='o4' class='babe-response-buttons'>${config.data[CT].option4}</label>
             <input type='radio' name='answer' id='o4' value=${config.data[CT].option4} />
            
             </div>`;
}},
{
    handle_response_function: function(config, CT, babe, answer_container_generator, startingTime) {

        // create the answer container
        $(".babe-view").append(answer_container_generator(config, CT));
    
        // attaches an event listener to the radio button input
        // when an input is selected a response property with a value equal
        // to the answer is added to the trial object
        // as well as a readingTimes property with value
        $("input[name=answer]").on("change", function() {
        const RT = Date.now() - startingTime;
        let trial_data = {
            trial_name: config.name,
            trial_number: CT + 1,
            response: $("input[name=answer]:checked").val(),
            RT: RT
        };
        trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);
        babe.trial_data.push(trial_data);
        setlanguage(response);
        babe.findNextView();
        });
    
    }    
}
);
