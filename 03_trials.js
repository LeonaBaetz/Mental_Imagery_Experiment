// In this file you can specify the trial data for your experiment




const trial_info = {
    languages =["English","German"],
    language = myArray[Math.floor(Math.random() * languages.length)],
    rating_scale_trials : get_trials(0,5,language),
    rating_scale_task: get_trials(5,6,language)
};
