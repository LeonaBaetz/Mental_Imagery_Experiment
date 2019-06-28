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

//English Intro
const intro_eng = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro_eng',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `This is the English introduction page
            <br />
            <br />
            Usefull information here
            <br />
            <br />
            test test test`,
   buttonText: 'start the experiment'
});
//German Intro
const intro_ger = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro_ger',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Dies ist die Deutsche Intro seite
            <br />
            <br />
            Hier praktische Informationen:
            <br />
            <br />
            test test test`,
   buttonText: 'Experiment Starten'
});

// For most tasks, you need instructions views
//english Instructions
const instructions_practice_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_eng',
    title: 'General Instructions',
    text:  `This is first a practice.
            <br />
            <br />
            choose 1 to 7`,
    buttonText: 'go to trials'
});

//German Instructions
const instructions_practice_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_ger',
    title: 'Einweisung',
    text:  `Dies ist ein Test.
            <br />
            <br />
            wähle eine Zahl zwischen 1 und 7`,
    buttonText: 'Mit der Übung beginnen'
});

// after practice instructions
// English
const instructions_main_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_eng',
    title: 'General Instructions',
    text:  `Let us start the real experiment now. It looks exactly like the practice.
            <br />
            <br />
            Are you ready?`,
    buttonText: 'GO'
});
// German
// after practice instructions
const instructions_main_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_ger',
    title: 'General Instructions',
    text:  `Lass uns nun das richtige Experiment starten
            <br />
            <br />
            Bereit?`,
    buttonText: 'Experiment starten'
});


// In the post test questionnaire you can ask your participants addtional questions
// english
const post_test_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test_eng',
    title: 'Additional information',
    text: 'Please answer the Questions '

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

//German
const post_test_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test_ger',
    title: 'Zusätzliche Informationen',
    text: 'Abschließend benötigen wir noch einige Informationen über dich: '
});

// The 'thanks' view is crucial; never delete it; it submits the results!
// english
const thanks_eng = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks_eng',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Submit results'
});
// german
const thanks_ger = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks_ger',
    title: 'Danke für die Teilname!',
    prolificConfirmText: 'Ergebnisse Übermitteln'
});

const ratingScaleTrial = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_trial.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTrial',
    trial_type: 'ratingScaleTrial',
    data: trial_info.rating_scale_trial,
},{
    answer_container_generator: custom_answer_container_generators.custom_rating_scale

}
);

const ratingScaleTask = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_task.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTask',
    trial_type: 'ratingScaleTask',
    data: trial_info.rating_scale_task,
},{
    answer_container_generator: custom_answer_container_generators.custom_rating_scale
});




const subjective_language_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'subjective_language_eng',
    title: 'Your language knowledge',
    text: 'Please answer the questions:',
    question1: "How proficient would you describe your language abilities of your native language for the following areas:",
    question2:"How proficient would you describe your language abilities of your foreign language for the following areas:",
    class1:"speaking",
    class2:"writing",
    class3:"listening",
    option1:"not at all proficient",
    option2:"very little proficient",
    option3:"little proficient",
    option4:"average proficient",
    option5:"good proficient",
    option6:"very good proficient",
    option7:"totally proficient",
},{
    stimulus_container_generator: custom_stimulus_container_generators.subjective_language,
    answer_container_generator: custom_answer_container_generators.subjective_language,
    handle_response_function: custom_handle_response_function.subjective_language
}
);
const subjective_language_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'subjective_language_ger',
    title: 'Deine Sprachkenntnisse',
    text: 'Bitte beantworte folgende Fragen: ',
    question1: "Wie gut würdest du die Kompetenzen in deiner Muttersprache für folgende Bereiche einschätzen:",
    question2:"Wie gut würdest du die Kompetenzen in deiner Muttersprache für folgende Bereiche einschätzen:",
    class1:"Sprechen",
    class2:"Schreiben",
    class3:"Hörverstehen",
    option1:"Überhaupt nicht gut",
    option2:"sehr gering",
    option3:"nicht sehr gut",
    option4:"mittelmäßig",
    option5:"gut",
    option6:"sehr gut",
    option7:"perfekt",
},{
    stimulus_container_generator: custom_stimulus_container_generators.subjective_language,
    answer_container_generator: custom_answer_container_generators.subjective_language,
    handle_response_function: custom_handle_response_function.subjective_language
}
);
const general_language_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'general_language_eng',
    title: 'Your language knowledge',
    text: 'Please answer the questions: ',
    class1:"Is German or English your native language?",
    class2:"Is German or English your foreign language?",
    //class3:"For how many years do you speak your choosen foreign language?",
    class3:"Do you speak this foreign language at home or more often than your native language?",
    option1:"German",
    option2:"English",
    option3:"Both",
    option4:"None of them",
    option5:"yes",
    option6:"no"
},{
    stimulus_container_generator: custom_stimulus_container_generators.general_language,
    answer_container_generator: custom_answer_container_generators.general_language,
    handle_response_function: custom_handle_response_function.general_language
}
);

const general_language_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'general_language_ger',
    title: 'Deine Sprachkenntnisse',
    text: 'Bitte beantworte folgende Fragen: ',
    class1:"Ist Deutsch oder Englisch deine Muttersprache?",
    class2:"Ist Deutsch oder Englisch deine Fremdsprache?",
    //class3:"Seit wie vielen Jahren sprichst du deine eben gewählte Fremdsprache?",
    class3:"Sprichst du diese Fremdsprache zuhause oder häufiger als deine Muttersprache?",
    option1:"Deutsch",
    option2:"Englisch",
    option3:"Beide",
    option4:"Keine der genannten",
    option5:"ja",
    option6:"nein"
},{
    stimulus_container_generator: custom_stimulus_container_generators.general_language,
    answer_container_generator: custom_answer_container_generators.general_language,
    handle_response_function: custom_handle_response_function.general_language
}
);