const custom_stimulus_container_generators = {
    questionnaire: function(config, CT) {
        return `<div class='babe-view babe-post-test-view'>
                    <h1 class='babe-view-title'>${config.title}</h1>
                    
                    <section class="babe-text-container">
                        <p class="babe-view-text">${config.text}</p>
                    </section>
                </div>`;
    },
    rating_scale: function (config, CT) {
        return `<div class='babe-view'>
                    <h1 class='babe-view-title'>${config.title}</h1>
                    <p class='babe-view-question babe-view-qud'>${config.data[CT].QUD}</p>
                    <div class='babe-view-stimulus-container-small'>
                        <div class='babe-view-stimulus babe-nodisplay'></div>
                    </div>
                </div>`;
    },

}

const custom_handle_response_function = {
    subjective_language: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            
            babe.global_data.speaking_native = $("#"+ config.class1 +"_native").val();
            babe.global_data.listening_native = $("#"+config.class2+"_native").val();
            babe.global_data.writing_native = $("#"+ config.class3 +"_native").val();
            babe.global_data.speaking_foreign = $("#"+ config.class1 +"_foreign").val();
            babe.global_data.listening_foreign = $("#"+ config.class2 +"_foreign").val();
            babe.global_data.writing_foreign = $("#"+ config.class3 +"_foreign").val();
            
            babe.global_data.endTime = Date.now();
            babe.global_data.timeSpent =
                (babe.global_data.endTime -
                    babe.global_data.startTime) /
                60000;

            // moves to the next view
            babe.findNextView();
        });
    },
    custom_button_choice: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        // attaches an event listener to the yes / no radio inputs
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
            babe.findNextView();
        });
    },
    general_language: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            
            babe.global_data.native_language = $("#native_language").val();
            babe.global_data.foreign_language = $("#foreign_language").val();
            babe.global_data.foreign_dominance = $("#foreign_dominance").val();
            
            babe.global_data.endTime = Date.now();
            babe.global_data.timeSpent =
                (babe.global_data.endTime -
                    babe.global_data.startTime) /
                60000;

            // moves to the next view
            babe.findNextView();
        });
    },
    objective_language: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            
            babe.global_data.reading_time = $("#reading_time").val();
            babe.global_data.listening_time = $("#listening_time").val();
            babe.global_data.speaking_time = $("#speaking_time").val();
            babe.global_data.learning_time = $("#learning_time").val();
            
            babe.global_data.endTime = Date.now();
            babe.global_data.timeSpent =
                (babe.global_data.endTime -
                    babe.global_data.startTime) /
                60000;

            // moves to the next view
            babe.findNextView();
        });
    },
    additional_info: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            
            babe.global_data.age = $("#age").val();
            babe.global_data.gender = $("#gender").val();
            babe.global_data.education = $("#education").val();
            babe.global_data.comments = $("#comments").val();
            
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

const custom_answer_container_generators = {
    subjective_language: function(config, CT) {
        return `<form>
        <p class='babe-view-text'>${config.question1}</p>
        <p class='babe-view-text'>
            <label for="${config.class1}_native">${config.class1}:</label>
            <select id="${config.class1}_native" name="${config.class1}_native">
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
            <label for="${config.class2}_native">${config.class2}:</label>
            <select id="${config.class2}_native" name="${config.class2}_native">
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
            <label for="${config.class3}_native">${config.class3}:</label>
            <select id="${config.class3}_native" name="${config.class3}_native">
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
        <p class='babe-view-text'>${config.question2}</p>
        <p class='babe-view-text'>
            <label for="${config.class1}_foreign">${config.class1}:</label>
            <select id="${config.class1}_foreign" name="${config.class1}_foreign">
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
            <label for="${config.class2}_foreign">${config.class2}:</label>
            <select id="${config.class2}_foreign" name="${config.class2}_foreign">
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
            <label for="${config.class3}_foreign">${config.class3}:</label>
            <select id="${config.class3}_foreign" name="${config.class3}_foreign">
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
    },
    custom_rating_scale: function(config, CT) {
        return `<p class='babe-view-question'>${config.data[CT].question}</p>
                <div class='babe-view-answer-container'>
                    <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionLeft}</strong>
                    <label for="1" class='babe-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='babe-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='babe-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='babe-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='babe-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <label for="6" class='babe-response-rating'>6</label>
                    <input type="radio" name="answer" id="6" value="6" />
                    <label for="7" class='babe-response-rating'>7</label>
                    <input type="radio" name="answer" id="7" value="7" />
                    <strong class='babe-response-rating-option babe-view-text'>${config.data[CT].optionRight}</strong>
                    <p></p>
                    <label for="0" class='babe-view-button-custom'>${config.data[CT].button_under}</label>
                    <input type="radio" name="answer" id="0" value="0" />
                    
                </div>`;
    },
    general_language: function(config, CT) {
        return `<form>

        <p class='babe-view-text'>
            <label for="${config.class1}">${config.class1}:</label>
            <select id="native_language" name="${config.class1}">
                <option></option>
                <option value="German">${config.option1}</option>
                <option value="English">${config.option2}</option>
                <option value="Both">${config.option3}</option>
                <option value="None">${config.option4}</option>
                </select>
        </p>
        <p class='babe-view-text'>
            <label for="${config.class2}">${config.class2}:</label>
            <select id="foreign_language" name="${config.class2}">
                <option></option>
                <option value="German">${config.option1}</option>
                <option value="English">${config.option2}</option>
                <option value="Both">${config.option3}</option>
                <option value="None">${config.option4}</option>
                </select>
        </p>
        <p class='babe-view-text'>
            <label for="${config.class3}">${config.class3}:</label>
            <select id="foreign_dominance" name="${config.class3}">
                <option></option>
                <option value="yes">${config.option5}</option>
                <option value="no">${config.option6}</option>
                </select>
        </p>
        
        <button id="next" class='babe-view-button'>${config.button}</button>
        </form>`;
    },

    objective_language: function(config, CT) {
        return `<form>

        <p class='babe-view-text'>
            <label for="${config.class1}">${config.class1}:</label>
            <select id="reading_time" name="${config.class1}">
                <option></option>
                <option value="1">${config.option1}</option>
                <option value="2">${config.option2}</option>
                <option value="3">${config.option3}</option>
                <option value="4">${config.option4}</option>
                <option value="5">${config.option5}</option>
                </select>
        </p>
        <p class='babe-view-text'>
            <label for="${config.class2}">${config.class2}:</label>
            <select id="listening_time" name="${config.class2}">
                <option></option>
                <option value="1">${config.option1}</option>
                <option value="2">${config.option2}</option>
                <option value="3">${config.option3}</option>
                <option value="4">${config.option4}</option>
                <option value="5">${config.option5}</option>
                </select>
        </p>
        <p class='babe-view-text'>
            <label for="${config.class3}">${config.class3}:</label>
            <select id="speaking_time" name="${config.class3}">
                <option></option>
                <option value="1">${config.option1}</option>
                <option value="2">${config.option2}</option>
                <option value="3">${config.option3}</option>
                <option value="4">${config.option4}</option>
                <option value="5">${config.option5}</option>
                </select>
        </p>
        <p class='babe-view-text'>
            <label for="${config.class4}">${config.class4}:</label>
            <select id="learning_time" name="${config.class4}">
                <option></option>
                <option value="1">${config.option6}</option>
                <option value="2">${config.option7}</option>
                <option value="3">${config.option8}</option>
                <option value="4">${config.option9}</option>
                <option value="5">${config.option10}</option>
                <option value="6">${config.option11}</option>
                </select>
        </p>
        <button id="next" class='babe-view-button'>${config.button}</button>
        </form>`;   
    },

    additional_info: function(config, CT) {
        const quest = babeUtils.view.fill_defaults_post_test(config);
        return `<form>
                    <p class='babe-view-text'>
                        <label for="age">${quest.age.title}:</label>
                        <input type="number" name="age" min="18" max="110" id="age" />
                    </p>
                    <p class='babe-view-text'>
                        <label for="gender">${quest.gender.title}:</label>
                        <select id="gender" name="gender">
                            <option></option>
                            <option value="${quest.gender.male}">${quest.gender.male}</option>
                            <option value="${quest.gender.female}">${quest.gender.female}</option>
                            <option value="${quest.gender.other}">${quest.gender.other}</option>
                        </select>
                    </p>
                    <p class='babe-view-text'>
                        <label for="education">${quest.edu.title}:</label>
                        <select id="education" name="education">
                            <option></option>
                            <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                            <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                            <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                        </select>
                    </p>
                    <p class="babe-view-text">
                        <label for="comments">${quest.comments.title}</label>
                        <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                    </p>
                    <button id="next" class='babe-view-button'>${config.button}</button>
            </form>`
    },
}
