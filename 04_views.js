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
            The sentences used in this experiment will bring certain images to your mind.
            <br />
            Please use the following scale to rate how vivid each image is:
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
            Additionally, there is the option to respond with “I don’t understand the sentence” if you really cannot understand the sentence (semantically).
            <br />
            Choose the appropriate scale that matches the image that came to your mind when reading the sentence the first time.
            <br />
            <br />
            We kindly ask you to read each of the given statements carefully and concentrate throughout the whole experiment.
            <br />
            <br />
            Make sure that you are in an environment that is as little distracting as possible, i.e., turn off your phone / TV /..., close doors, do not have contact to other people while performing the experiment, etc.
            <br />
            <br />
            Please, do not rush through the exercise and at the same time, do not take too much time to think about the mental image that comes to your mind.
            <br />
            <br />
            The experiment is devided into two parts:
            <br />
            First,  a short practice phase where you can familiarise yourself with the format of the experiment.
            <br />
            Second, the main phase which is the actual experiment.
            <br />
            <br />
            Thank you a lot for your cooperation and participantion!
            <br />
            <br />
            With pressing the following button, you will start the practice phase:`,
   buttonText: 'Click here to start the experiment'
});
//German Intro
const intro_ger = babeViews.view_generator('intro',{
    trials: 1,
    title: "Willkommen!",
    name: 'intro_ger',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Das Ziel dieses Experimentes ist es, die Lebendigkeit Ihres Vorstellungsvermögens zu testen. 
            <br />
            <br />
            Die Sätze, die Sie auf den nächsten Seiten lesen werden, werden gewisse Vorstellungen in Ihrem Kopf hervorrufen.
            <br />
            Nutzen Sie bitte die folgende Skala, um zu bewerten, wie lebendig jede der hervorgerufenen Vorstellungen ist:
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
            Zusätzlich gibt es die Option mit "Ich verstehe den Satz nicht" zu antworten, falls Sie den Satz nicht verstehen.
            <br />
            <br />
            Wählen Sie den passenden Ausdruck von der Skala, welcher zu Ihrer hervorgerufenen Vorstellung am besten passt, als Sie den Satz das erste Mal gelesen haben.
            <br />
            <br />
            Wir bitten Sie jeden der Sätze genau zu lesen und sich während des gesamten Experiments (bestmöglich) zu konzentrieren. 
            <br />
            Gehen Sie sicher, dass Sie in einer (so gut wie möglich ungestörten) Umgebung sind, schalten Sie ihr Handy / TV /... aus, schließen Sie die Tür und haben Sie keinen Kontakt zu anderen Personen, während Sie das Experiment durchführen, etc.
            <br />
            <br />
            Das Experiment ist in zwei Blöcke unterteilt:
            <br />
            Zuerst gibt es eine kurze Übungsphase, in welcher Sie das Format des Experimentes kennenlernen und sich mit diesem vertraut machen können.
            <br />
            Danach folgt die Hauptphase, welches dann das richtige Experiment ist.
            <br />
            <br />
            Vielen Dank für Ihre Kooperation und Teilnahme!
            <br />
            <br />
            Mit dem folgenden Knopf starten Sie die Übungsphase.`,
   buttonText: 'Drücken Sie hier um das Experiment zu starten'
});

// For most tasks, you need instructions views
//english Instructions
const instructions_practice_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_eng',
    title: 'Instructions for the practice phase',
    text:  `These are the instructions for the practice phase. 
            <br />
            The aim of the practise phase is to show you how the experiment is going to look like, so that you can familiarize yourself with it.
            <br />
            Therefore, your answers won't count.
            <br />
            <br />
            As a reminder, this is the scale you can use to rate the vividness of your mental image or simulation:
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
            With pressing the following button, you will go through some example sentences.`,
    buttonText: 'Start practice phase'
});

//German Instructions
const instructions_practice_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_ger',
    title: 'Erklärungen für die Übungsphase',
    text:  `Hier ein paar Hinweise zu der Übungsphase.
            <br />
            <br />
            Das Ziel der Übungsphase ist es Sie mit dem Experiment vertraut zu machen und Ihnen zu zeigen wie die Sätze aussehen werden, die gewisse mentale Vorstellungen bei Ihnen hervorrufen werden. Sie sollen für jeden dieser Sätze den Grad der Lebendigkeit angeben. Ihre Antworten zählen allerdings in dieser Phase noch nicht.
            <br />
            <br />
            Als Erinnerung, hier noch einmal die Skala, die Sie benutzen sollen um die Lebendigkeit Ihrer Vorstellungen zu bewerten:
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
            Wenn Sie auf den folgenden Knopf drücken, werden Ihnen einige Beispielsätze präsentiert.`,
    buttonText: 'Mit der Übung beginnen'
});

// after practice instructions
// German
const instructions_main_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_ger',
    title: 'Das Experiment',
    text:  `Super, Sie haben die Übungsphase erfolgreich abgeschlossen!
            <br />
            Wir hoffen, Sie konnten sich mit dem Format des Experimentes vertraut machen.
            <br />
            <br />
            Lassen Sie uns also jetzt mit dem richtigen Experiment beginnen. Es ist genauso aufgebaut wie die Übung.
            <br />
            <br />
            Die Sätze werden gewisse Vorstellungen in Ihrem Kopf hervorrufen und Sie werden gebeten, anhand der folgenden Skala zu bewerten, wie lebendig Ihre Vorstellung für jeden Satz ist:
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
            Bitte gehen Sie sicher, dass Sie sich für die nächsten ∼20 Minuten konzentrieren und fokussieren können.
            <br />
            <br />
            Wenn Sie sich bereit fühlen, klicken Sie auf den Los-Knopf um das Experiment zu beginnen.`,
    buttonText: 'Los'
});
// English
// after practice instructions
const instructions_main_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_eng',
    title: 'The experiment',
    text:  `Well done, you successfully finished the practice session!
            <br />
            We hope you were able to familiarize yourself with the experiment and feel prepared for the experiment.
            <br />
            <br />
            Let us start the actual experiment now. It looks exactly like the practice:
            <br />
            <br />
            The sentences of the experiment will bring certain images to your mind and you are asked to use the following scale to rate how vivid each image or simualtion is:
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
            Please make sure that you can perform the experiment concentrated and focussed for the next ∼20 minutes.
            <br />
            <br />
            If you feel ready, press the Go-button to start the experiment`,
    buttonText: 'Go'
});


// In the post test questionnaire you can ask your participants addtional questions
// english
const additional_info_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test_eng',
    title: 'Additional information',
    text: 'Please answer the some more questions: ',
    edu_other: 'other',
    edu_graduated_high_school: "Graduated High School (Abitur)"
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
    text: 'Abschließend benötigen wir noch einige Informationen über Sie: ',

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    buttonText: 'Weiter',
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'männlich',
    gender_female: 'weiblich',
    gender_other: 'divers',
    edu_question: 'Höchster Bildungsabschluss',
    edu_graduated_high_school: 'Abitur',
    edu_graduated_college: 'Hochschulabschluss (Bachelor/Master)',
    edu_higher_degree: 'höherer Universitätsabschluss (Doktor)',
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
    title: 'Danke für Ihre Teilnahme!',
    prolificConfirmText: 'Ergebnisse Übermitteln'
});


const ratingScaleTrial_eng = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_trial.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTrial_eng',
    trial_type: 'ratingScaleTrial_eng',
    data: trial_info.rating_scale_trial,
    hook: {
        after_response_enabled: check_timing_eng
    }
},{
    answer_container_generator: custom_answer_container_generators.custom_rating_scale,
    stimulus_container_generator: custom_stimulus_container_generators.rating_scale
}
);

const ratingScaleTrial_ger = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_trial.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTrial_ger',
    trial_type: 'ratingScaleTrial_ger',
    data: trial_info.rating_scale_trial,
    hook: {
        after_response_enabled: check_timing_ger
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
    class4:"reading",
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
    title: 'Ihre Sprachkenntnisse',
    text: 'Bitte beantworten Sie folgende Fragen: ',
    buttonText: 'Weiter',
    question1: "Wie gut würden Sie die Kompetenzen in Ihrer Muttersprache für folgende Bereiche einschätzen:",
    question2:"Wie gut würden Sie die Kompetenzen in Ihrer Fremdsprache für folgende Bereiche einschätzen:",
    class1:"Sprechen",
    class2:"Schreiben",
    class3:"Hörverstehen",
    class4:"Leseverstehen",
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
    class2:"Is German or English a foreign language to you?",
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
    title: 'Ihre Sprachkenntnisse',
    text: 'Bitte beantworten Sie folgende Fragen: ',
    buttonText: 'Weiter',
    class1:"Ist Deutsch oder Englisch Ihre Muttersprache?",
    class2:"Ist Deutsch oder Englisch eine Fremdsprache für Sie?",
    class3:"Sprechen Sie diese Fremdsprache zuhause oder häufiger als Ihre Muttersprache?",
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
    title: 'Ihre Sprachkenntnisse',
    text: 'Bitte beantworten Sie folgende Fragen: ',
    buttonText: 'Weiter',
    class1:"Wie häufig lesen Sie in Ihrer Fremdsprache?",
    class2:"Wie häufig hören Sie etwas oder schauen etwas in Ihrer Fremdsprache?",
    class3:"Wie häufig sprechen Sie in Ihrer Fremdsprache?",
    class4:"Seit wie vielen Jahren lernen Sie/sprechen Sie Ihre eben gewählte Fremdsprache?",
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
