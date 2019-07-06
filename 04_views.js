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
    text:   `The aim of this experiment is to determine the vividness of your imagery. 
            <br />
            <br />
            The sentences that you will read on the following pages will bring certain images to your mind. Please read the given statements carefully.
            <br />
            Do not rush through the exercise and at the same time, don't take too much time to think about the mental image that comes to your mind.
            <br />
            Please use a scale to rate how vivid each image is and choose the appropriate scale that matches the image that came to your mind when reading the sentence the first time.
            <br />
            <br />
            You can report the degree of vividness on a scale from 1 to 7:
            <br />
            1 ≙ “no image”
            <br />
            2 ≙ “very vague and dim”
            <br />
            3 ≙ “vague and dim”
            <br />
            4 ≙ “not clear, but recognisable”
            <br />
            5 ≙ “moderately clear”
            <br />
            6 ≙ “very clear”
            <br />
            7 ≙ “perfectly clear”
            <br />
            Additionally, there is the option to respond with “I don’t understand the sentence” if you really cannot understand the sentence.
            <br />
            <br />
            Please concentrate and make sure that you are in an environment that is as less distracting as possible (turn off phone/tv, close doors, no contact to other people while performing the experiment, etc.).
            <br />
            Thank you for your cooperation!
            <br />
            <br />
            The experiment is devided into a short practice phase and a main phase. With the button, you will start the practice phase:`,
   buttonText: 'klick here to test the experiment'
});
//German Intro
const intro_ger = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro_ger',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Das Ziel dieses Experiments ist es, die Lebendigkeit deines Vorstellungsvermögens zu testen. 
            <br />
            <br />
            Die Sätze, die du auf den nächsten Seiten lesen wirst, werden gewisse Vorstellungen in deinem Kopf hervorrufen. Bitte lese die gezeigten Sätze sorgfältig.
            <br />
            Hetze nicht durch die Aufgaben und lasse dir auch nicht zu viel Zeit, um über deine mentalen Vorstellungen nachzudenken.
            <br />
            Bitte nutze eine Skala, um zu bewerten, wie lebendig die Vorstellung für jeden Satz ist und wähle den passenden Ausdruck der Skala der zu der Vorstellung passt, die du hattest, als du den Satz das erste Mal gelesen hast.
            <br />
            <br />
            Du kannst dich für einen "Grad der Lebendigkeit" auf einer Skala von 1 bis 7 entscheiden:
            <br />
            1 ≙ “keine Vorstellung”
            <br />
            2 ≙ “sehr wage und trüb”
            <br />
            3 ≙ “wage und trüb”
            <br />
            4 ≙ “nicht deutlich, aber erkennbar”
            <br />
            5 ≙ “einigermaßen deutlich”
            <br />
            6 ≙ “sehr deutlich”
            <br />
            7 ≙ “perfekt deutlich”
            <br />
            Zusätzlich gibt es die Option mit "Ich verstehe den Satz nicht" zu antworten, wenn du ihn wirklich nicht verstehst.
            <br />
            <br />
            Bitte konzentriere dich und gehe sicher, dass du in einer so gut wie möglich ungestörten Umgebung bist (schalte Handy/TV aus, schließe die Tür, keinen Kontakt zu anderen Personen während des Experiments, etc.).
            <br />
            Danke für deine Kooperation!
            <br />
            <br />
            Das Experiment ist in eine kurze Übungs- und eine Hauptphase eingeteilt. Mit diesem Knopf startest du die Übungsphase.`,
   buttonText: 'Experiment Starten'
});

// For most tasks, you need instructions views
//english Instructions
const instructions_practice_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_eng',
    title: 'General Instructions',
    text:  `This is the instruction page for the practice phase.
            <br />
            <br />
            Here, you will get to know how the sentences will look like, your answers won't count.
            <br />
            As a reminder, here is the scale again:
            <br />
            1 ≙ “no image”
            <br />
            2 ≙ “very vague and dim”
            <br />
            3 ≙ “vague and dim”
            <br />
            4 ≙ “not clear, but recognisable”
            <br />
            5 ≙ “moderately clear”
            <br />
            6 ≙ “very clear”
            <br />
            7 ≙ “perfectly clear”
            <br />
            <br />
            When you click on the following button, you will go through some example sentences.`,
    buttonText: 'go to practice statements'
});

//German Instructions
const instructions_practice_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_ger',
    title: 'Einweisung',
    text:  `Das hier ist die Einleitung für die Übungsphase.
            <br />
            <br />
            Hier wirst du sehen wie die Sätze aussehen werden, deine Antworten zählen aber nicht.
            <br />
            Als Erinnerung ist hier noch einmal die Skala:
            <br />
            1 ≙ “keine Vorstellung”
            <br />
            2 ≙ “sehr wage und trüb”
            <br />
            3 ≙ “wage und trüb”
            <br />
            4 ≙ “nicht deutlich, aber erkennbar”
            <br />
            5 ≙ “einigermaßen deutlich”
            <br />
            6 ≙ “sehr deutlich”
            <br />
            7 ≙ “perfekt deutlich”
            <br />
            <br />
            Wenn du auf diesen Knopf drückst, gehst du durch ein paar Beispielsätze.`,
    buttonText: 'Mit der Übung beginnen'
});

// after practice instructions
// German
const instructions_main_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_ger',
    title: 'Einweisung',
    text:  `Super, du hast die Übungsphase abgeschlossen!
            <br />
            Lass uns jetzt mit dem richtigen Experiment anfangen. Es ist genauso aufgebaut wie die Übung.
            <br />
            Die Sätze werden gewisse Vorstellungen in deinem Kopf hervorrufen und du wirst gebeten anhand der folgenden Skala zu bewerten, wie lebendig deine Vorstellung für jeden Satz ist.
            <br />
            <br />
            1 ≙ “keine Vorstellung”
            <br />
            2 ≙ “sehr wage und trüb”
            <br />
            3 ≙ “wage und trüb”
            <br />
            4 ≙ “nicht deutlich, aber erkennbar”
            <br />
            5 ≙ “einigermaßen deutlich”
            <br />
            6 ≙ “sehr deutlich”
            <br />
            7 ≙ “perfekt deutlich”
            <br />
            <br />
            Bitte gehe sicher, dass du dich f�r die nächsten ∼20 Minuten konzentrieren und fokussieren kannst.
            <br />
            Wenn du dich bereit fühlst, klicke auf den Los Knopf!`,
    buttonText: 'Los'
});
// English
// after practice instructions
const instructions_main_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_eng',
    title: 'General Instructions',
    text:  `Well done, you successfully finished the practice session!
            <br />
            Let us start the real experiment now. It looks exactly like the practice.
            <br />
            The items of the test will bring certain images to your mind and you are asked to use the following scale to rate how vivid each image is.
            <br />
            <br />
            1 ≙ “no image”
            <br />
            2 ≙ “very vague and dim”
            <br />
            3 ≙ “vague and dim”
            <br />
            4 ≙ “not clear, but recognisable”
            <br />
            5 ≙ “moderately clear”
            <br />
            6 ≙ “very clear”
            <br />
            7 ≙ “perfectly clear”
            <br />
            <br />
            Please make sure to be able to concentrate and focus for the next ∼20 minutes.
            <br />
            If you feel ready, hit the go button!`,
    buttonText: 'Go'
});


// In the post test questionnaire you can ask your participants addtional questions
// english
const additional_info_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test_eng',
    title: 'Additional information',
    text: 'Please answer the some more questions: ',
    edu_other: 'other'
},{
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.additional_info,
    handle_response_function: custom_handle_response_function.additional_info
}
);

//German
const additional_info_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test_ger',
    title: 'Zusätzliche Informationen',
    text: 'Abschließend benötigen wir noch einige Informationen über dich: ',

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    buttonText: 'Weiter',
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'männlich',
    gender_female: 'weiblich',
    gender_other: 'divers',
    edu_question: 'Höchster Bildungsabschluss',
    edu_graduated_high_school: 'Abitur',
    edu_graduated_college: 'Hochschulabschluss',
    edu_higher_degree: 'Universitärer Abschluss',
    edu_other: 'anderes',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    comments_question: 'Weitere Kommentare'
},{
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.additional_info,
    handle_response_function: custom_handle_response_function.additional_info
}
);

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
    title: 'Danke für deine Teilnahme!',
    prolificConfirmText: 'Ergebnisse Übermitteln'
});

/*
const check_timing = function(data, next) {
    $("input[name=answer]").on("change", function(e) {
        //if (babe.trial_data[babe.trial_data.length-1].RT > 180000){
        //    alert("You should focus on the first image that comes to your mind and don't take too much time.")
        //} if (babe.trial_data[babe.trial_data.length-1].RT < 1000){
        //    alert("You should really read the sentence carefully, don't rush through it and take your time.")
        //} else {
        //    alert("test")
        //}
        //alert("test")
        if(e>1){
            alert("test")
        }
        next()
    })
}
*/


const ratingScaleTrial = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_trial.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTrial',
    trial_type: 'ratingScaleTrial',
    data: trial_info.rating_scale_trial,
    hook: {
        after_stim_hidden: save_time,
        after_response_enabled: check_timing
    }
},{
    answer_container_generator: custom_answer_container_generators.custom_rating_scale,
    stimulus_container_generator: custom_stimulus_container_generators.rating_scale
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
    answer_container_generator: custom_answer_container_generators.custom_rating_scale,
    stimulus_container_generator: custom_stimulus_container_generators.rating_scale
});




const subjective_language_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'subjective_language_eng',
    title: 'Your language knowledge',
    text: 'Please answer the following questions:',
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
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.subjective_language,
    handle_response_function: custom_handle_response_function.subjective_language
}
);
const subjective_language_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'subjective_language_ger',
    title: 'Deine Sprachkenntnisse',
    text: 'Bitte beantworte folgende Fragen: ',
    buttonText: 'Weiter',
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
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.subjective_language,
    handle_response_function: custom_handle_response_function.subjective_language
}
);
const general_language_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'general_language_eng',
    title: 'Your language knowledge',
    text: 'Please answer the following questions: ',
    class1:"Is German or English your native language?",
    class2:"Is German or English your foreign language?",
    class3:"Do you speak this foreign language at home or more often than your native language?",
    option1:"German",
    option2:"English",
    option3:"Both",
    option4:"None of them",
    option5:"yes",
    option6:"no"
},{
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.general_language,
    handle_response_function: custom_handle_response_function.general_language
}
);

const general_language_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'general_language_ger',
    title: 'Deine Sprachkenntnisse',
    text: 'Bitte beantworte folgende Fragen: ',
    buttonText: 'Weiter',
    class1:"Ist Deutsch oder Englisch deine Muttersprache?",
    class2:"Ist Deutsch oder Englisch deine Fremdsprache?",
    class3:"Sprichst du diese Fremdsprache zuhause oder häufiger als deine Muttersprache?",
    option1:"Deutsch",
    option2:"Englisch",
    option3:"Beide",
    option4:"Keine der genannten",
    option5:"ja",
    option6:"nein"
},{
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.general_language,
    handle_response_function: custom_handle_response_function.general_language
}
);

const objective_language_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'objective_language_eng',
    title: 'Your language knowledge',
    text: 'Please answer the following questions: ',
    class1:"How often do you read in your foreign language?",
    class2:"How often do you listen to or watch something in your foreign language?",
    class3:"How often do you speak in your foreign language?",
    class4:"For how many years do you learn/speak your choosen foreign language?",
    option1:"0-4 hours/month",
    option2:"1-2 hours/week",
    option3:"3-5 hours/week",
    option4:"6-10 hours/week",
    option5:"more than 10 hours/week",
    option6:"0-2 years",
    option7:"2-5 years",
    option8:"5-7 years",
    option9:"7-10 years",
    option10:"10-15 years",
    option11:"more than 15 years"
},{
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.objective_language,
    handle_response_function: custom_handle_response_function.objective_language
}
);

const objective_language_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'objective_language_ger',
    title: 'Deine Sprachkenntnisse',
    text: 'Bitte beantworte folgende Fragen: ',
    buttonText: 'Weiter',
    class1:"Wie häufig liest du in deiner Fremdsprache?",
    class2:"Wie häufig hörst du etwas oder schaust etwas in deiner Fremdsprache?",
    class3:"Wie häufig sprichst du in deiner Fremdsprache?",
    class4:"Seit wie vielen Jahren lernst du/sprichst du deine eben gewählte Fremdsprache?",
    option1:"0-4 Stunden/Monat",
    option2:"1-2 Stunden/Woche",
    option3:"3-5 Stunden/Woche",
    option4:"6-10 Stunden/Woche",
    option5:"mehr als 10 Stunden/Woche",
    option6:"0-2 Jahre",
    option7:"2-5 Jahre",
    option8:"5-7 Jahre",
    option9:"7-10 Jahre",
    option10:"10-15 Jahre",
    option11:"länger als 15 Jahre"
},{
    stimulus_container_generator: custom_stimulus_container_generators.questionnaire,
    answer_container_generator: custom_answer_container_generators.objective_language,
    handle_response_function: custom_handle_response_function.objective_language
}
);
