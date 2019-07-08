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

const check_timing_eng = function(data, next) {
    const start_time = Date.now();
    $("input[name=answer]").on("change", function(e) {
        if (Date.now()-start_time > 180000){ // time in ms  
            alert("You should focus on the first image that comes to your mind and don't take too much time.");
        }   
        if (Date.now()-start_time < 1000){
            alert("You should really read the sentence carefully, don't rush through it and take your time.")
        }
        next();
    });
};

const check_timing_ger = function(data, next) {
    const start_time = Date.now();
    $("input[name=answer]").on("change", function(e) {
        if (Date.now()-start_time > 180000){ // time in ms  
            alert("Sie sollten sich auf die erste Vorstellung konzentrieren die Ihnen in den Kopf kommt, bitte nehmen Sie sich nicht zu viel Zeit.");
        }   
        if (Date.now()-start_time < 1000){
            alert("Sie sollten den Satz sorgfältig lesen, eilen Sie nicht zu sehr und lassen Sie sich ein wenig Zeit.")
        }
        next();
    });
};

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

//practice sentences1-7

var sentences = [
    {
        q_en: "Think of the following <b>image</b>, carefully considering the <b>visual image</b> that comes to your imagination.<br />Rate how vividly you can imagine this:",
        english: "<b>image</b> of: A ball bouncing up and down",
        q_ge: "Stellen Sie sich das folgende <b>Bild</b> vor und betrachten Sie sorgfältig die entstehende <b>visuelle Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bild</b>: Eines Balls, der auf und ab hüpft",
        type: "visual",
    },
    {
        q_en: "Think of the following <b>sound</b>, carefully considering the <b>auditory</b> image that comes to your imagination.<br />Rate how vividly you can imagine this:",
        english: "<b>sound</b> of: Rain falling on the street",
        q_ge: "Stellen Sie sich den folgenden <b>Klang</b> bzw. das folgende <b>Geräusch</b> vor und betrachten Sie sorgfältig die entstehende <b>auditive Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Klang / Geräusch</b> von: Auf die Straße fallender Regen",
        type: "auditory",
    },
    {
        q_en: "Think of the following <b>'feeling'</b> or <b>touching the following</b>, carefully considering the <b>tactile image</b> that comes to your imagination.<br />Rate how vividly you can imagine this:",
        english: "<b>'feeling'</b> of: The The tickle of a fly on your skin",
        q_ge: "Stellen Sie sich das <b>Gefühl</b> oder die <b>Berührung</b> des Folgenden vor und betrachten Sie sorgfältig die entstehende <b>taktile (fühlbare) Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Gefühl</b>: Das Kitzeln einer Fliege auf der Haut",
        type: "tactile",
    },
    {
        q_en: "Think of <b>performing the following act</b>, carefully considering the image that <b>forms in your mind of your body part(s) moving</b>.<br />Rate how vividly you can imagine this:",
        english: "<b>Movement</b>: Sitting down on a chair",
        q_ge: "Stellen Sie sich vor, das Folgende <b>zu tun</b> und betrachten Sie sorgfältig die entstehende Vorstellung, wie sich Ihre <b>Körperteile bewegen und anfühlen</b>, um das Beschriebene <b>auszuführen</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bewegung</b>: Das Hinsetzen auf einen Stuhl",
        type: "motor",
    },
    {
        q_en: "Think of <b>tasting</b> the following, carefully considering the <b>gustatory image</b> that is produced.<br />Rate how vividly you can imagine this:",
        english: "<b>Taste of</b>: Strawberrys",
        q_ge: "Stellen Sie sich den folgenden <b>Geschmack</b> vor und betrachten Sie sorgfältig die entstehende <b>geschmackliche Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Geschmack</b> von: Erdbeeren",
        type: "gustatory",
    },
    {
        q_en: "Think of <b>smelling</b> the following, carefully considering the <b>olfactory image</b> that is produced.<br />Rate how vividly you can imagine this:",
        english: "<b>smell</b> of: fresh brewed coffee",
        q_ge: "Stellen Sie sich den folgenden <b>Geruch</b> vor und betrachten Sie sorgfältig die entstehende <b>Geruchsvorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Geruch</b> von: frisch gebrühtem Kaffee",
        type: "olfactory",
    },
    {
        q_en: "Think of the following <b>sensation</b>, carefully considering the <b>image that comes to your imagination</b>.<br />Rate how vividly you can imagine this:",
        english: "<b>Sensation of</b>: The feeling you had when hearing the school bell ringing",
        q_ge: "Stellen Sie sich das folgende <b>Gefühl</b> vor und begutachten Sie genau die <b>Vorstellung, welche in Ihre Gedanken dazu entsteht</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Gefühl</b>: das Sie hatten, wenn die Schulklingel läutete",
        type: "organic",
    },
    
//main trials8-42

    {
        q_en: "Think of some relative or friend whom you frequently <b>see</b>, carefully considering the <b>visual image</b> that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Image</b> of his/her: Exact contour of face, head, shoulders and body",
        q_ge: "Denken Sie an eine*n Verwandte*n oder eine*n Freund*in, den/die Sie regelmäßig <b>sehen</b>, und betrachten Sie sorgfältig die entstehende <b>visuelle Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Aussehen</b> von seiner/ihrer: Genauen Kontur des Gesichtes, Kopf, Schultern und Körper",
        type: "visual",
    },
    {
        q_en: "Think of some relative or friend whom you frequently <b>see</b>, carefully considering the <b>visual image</b> that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Image</b> of his/her: Characteristic poses of head, body, etc.",
        q_ge: "Denken Sie an eine*n Verwandte*n oder eine*n Freund*in, den/die Sie regelmäßig <b>sehen</b>, und betrachten Sie sorgfältig die entstehende <b>visuelle Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bild</b> von seinen/ihren: Charakteristischen Haltungen von Kopf, Körper, etc.",
        type: "visual",
    },
    {
        q_en: "Think of some relative or friend whom you frequently <b>see</b>, carefully considering the <b>visual image</b> that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Image</b> of his/her: The precise gait, length of step, etc. in walking",
        q_ge: "Denken Sie an eine*n Verwandte*n oder eine*n Freund*in, den/die Sie regelmäßig <b>sehen</b>, und betrachten Sie sorgfältig die entstehende <b>visuelle Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bild</b> von: Seinem/Ihrem Gang, wie er/sie läuft, wie lang seine/ihre Schritte sind, etc.",
        type: "visual",
    },
    {
        q_en: "Think of some relative or friend whom you frequently <b>see</b>, carefully considering the <b>visual image</b> that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Image</b> of: The different colors worn in their usual clothes",
        q_ge: "Denken Sie an eine*n Verwandte*n oder eine*n Freund*in, den/die Sie regelmäßig <b>sehen</b>, und betrachten Sie sorgfältig die entstehende <b>visuelle Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bild</b> von: Den verschiedenen Farben, mit denen sich die Person häufig kleidet",
        type: "visual",
    },
    {
        q_en: "Think of the following <b>image</b>, carefully considering the <b>visual image</b> that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Image</b> of: The sun as it is sinking below the horizon",
        q_ge: "Stellen Sie sich das folgende <b>Bild</b> vor und betrachten Sie sorgfältig die entstehende <b>visuelle Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bild</b> von: Der Sonne, wie sie am Horizont untergeht",
        type: "visual",
    },
    {
        q_en: "Think of the following <b>sound</b>, carefully considering the <b>auditory image</b>, that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Sound</b> of: The whistle of a locomotiv",
        q_ge: "Stellen Sie sich das folgende <b>Geräusch</b> vor und betrachten Sie sorgfältig die entstehende <b>auditive Impression</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes Geräusch vorstellen können:",
        german: "<b>Geräusch</b>: Des Pfeifens einer Lokomotive",
        type: "auditory",
    },
    {
        q_en: "Think of the following <b>sound</b>, carefully considering the <b>auditory image</b>, that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Sound</b> of: The horn of an automobile",
        q_ge: "Stellen Sie sich den folgenden <b>Klang</b> vor und betrachten Sie sorgfältig die entstehende <b>auditive Impression</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Klang</b>: Eines hupenden Autos",
        type: "auditory",
    },
    {
        q_en: "Think of the following <b>sound</b>, carefully considering the <b>auditory image</b>, that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Sound</b> of: The meowing of a cat",
        q_ge: "Stellen Sie sich den folgenden <b>Klang</b> vor und betrachten Sie sorgfältig die entstehende <b>auditive Impression</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Klang</b>: Des Miauens einer Katze",
        type: "auditory",
    },
    {
        q_en: "Think of the following <b>sound</b>, carefully considering the <b>auditory image</b>, that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Sound</b> of: Escaping steam",
        q_ge: "Stellen Sie sich den folgenden <b>Klang</b> vor und betrachten Sie sorgfältig die entstehende <b>auditive Impression</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Klang</b> von: Entweichendem Dampf",
        type: "auditory",
    },
    {
        q_en: "Think of the following <b>sound</b>, carefully considering the <b>auditory image</b>, that comes to your imagination.<br />Rate how vividly you can imagine the following:",
        english: "<b>Sound</b> of: The clapping of hands in applause",
        q_ge: "Stellen Sie sich den folgenden <b>Klang</b> vor und betrachten Sie sorgfältig die entstehende <b>auditive Impression</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Klang</b>: des Klatschens von Händen beim Applaudieren",
        type: "auditory",
    },
    {
        q_en: "Think of <b>'feeling' or touching</b> the following, carefully considering the <b>tactile image</b> that comes into your mind.<br />Rate how vividly you can imagine the following:",
        english: "<b>Feeling</b> of: Sand",
        q_ge: "Stellen Sie sich das <b>Gefühl</b> des Folgenden <b>auf der Haut</b> vor und betrachten Sie sorgfältig die entstehende <b>taktile (fühlbare) Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Gefühl</b> von: Sand",
        type: "tactile",
    },
    {
        q_en: "Think of <b>'feeling' or touching</b> the following, carefully considering the <b>tactile image</b> that comes into your mind.<br />Rate how vividly you can imagine the following:",
        english: "<b>Feeling</b> of: Linen",
        q_ge: "Stellen Sie sich das <b>Gefühl</b> des Folgenden <b>auf der Haut</b> vor und betrachten Sie sorgfältig die entstehende <b>taktile (fühlbare) Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Gefühl</b> von: Leinen",
        type: "tactile",
    },
    {
        q_en: "Think of <b>'feeling' or touching</b> the following, carefully considering the <b>tactile image</b> that comes into your mind.<br />Rate how vividly you can imagine the following:",
        english: "<b>Feeling</b> of: Fur",
        q_ge: "Stellen Sie sich das <b>Gefühl</b> des Folgenden <b>auf der Haut</b> vor und betrachten Sie sorgfältig die entstehende <b>taktile (fühlbare) Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Gefühl</b> von: Fell",
        type: "tactile",
    },
    {
        q_en: "Think of <b>'feeling' or touching</b> the following, carefully considering the <b>tactile image</b> that comes into your mind.<br />Rate how vividly you can imagine the following:",
        english: "<b>Feeling</b> of: The prick of a pin",
        q_ge: "Stellen Sie sich das <b>Gefühl</b> des Folgenden <b>auf der Haut</b> vor und betrachten Sie sorgfältig die entstehende <b>taktile (fühlbare) Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Gefühl</b> vom: Piksen einer Stecknadel",
        type: "tactile",
    },
    {
        q_en: "Think of <b>'feeling' or touching</b> the following, carefully considering the <b>tactile image</b> that comes into your mind.<br />Rate how vividly you can imagine the following:",
        english: "<b>Feeling</b> of: The warmth of a tepid bath",
        q_ge: "Stellen Sie sich das <b>Gefühl</b> des Folgenden <b>auf der Haut</b> vor und betrachten Sie sorgfältig die entstehende <b>taktile (fühlbare) Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Gefühl</b> von: Der Wärme eines lauwarmen Bades",
        type: "tactile",
    },
    {
        q_en: "Think of <b>performing</b> the following <b>act</b>, carefully considering the image that forms in your mind of your <b>arms, legs, lips, etc.</b> performing this act.<br />Rate how vividly you can imagine the following:",
        english: "<b>Movement</b> of: Running upstairs",
        q_ge: "Stellen Sie sich vor, das Folgende <b>zu tun</b> und betrachten Sie sorgfältig die entstehende Vorstellung, wie sich Ihre <b>Körperteile bewegen und anfühlen</b>, um das Beschriebene <b>auszuführen</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bewegung</b>: Eine Treppe hoch rennen",
        type: "motor",
    },
    {
        q_en: "Think of <b>performing</b> the following <b>act</b>, carefully considering the image that forms in your mind of your <b>arms, legs, lips, etc.</b> performing this act.<br />Rate how vividly you can imagine the following:",
        english: "<b>Movement</b> of: Jumping across a stream",
        q_ge: "Stellen Sie sich, vor das Folgende <b>zu tun</b> und betrachten Sie sorgfältig die entstehende Vorstellung, wie sich <b>Ihre Körperteile bewegen und anfühlen</b>, um das Beschriebene <b>auszuführen</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bewegung</b>: Über einen (kleinen) Bach springen",
        type: "motor",
    },
    {
        q_en: "Think of <b>performing</b> the following <b>act</b>, carefully considering the image that forms in your mind of your <b>arms, legs, lips, etc.</b> performing this act.<br />Rate how vividly you can imagine the following:",
        english: "<b>Movement</b> of: Drawing a circle on paper",
        q_ge: "Stellen Sie sich vor, das Folgende <b>zu tun</b> und betrachten Sie sorgfältig die entstehende Vorstellung, wie sich Ihre <b>Körperteile bewegen und anfühlen</b>, um das Beschriebene <b>auszuführen</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bewegung</b>: Einen Kreis auf ein Blatt Papier malen",
        type: "motor",
    },
    {
        q_en: "Think of <b>performing</b> the following <b>act</b>, carefully considering the image that forms in your mind of your <b>arms, legs, lips, etc.</b> performing this act.<br />Rate how vividly you can imagine the following:",
        english: "<b>Movement</b> of: Reaching up to a high shelf",
        q_ge: "Stellen Sie sich vor, das Folgende <b>zu tun</b> und betrachten Sie sorgfältig die entstehende Vorstellung, wie sich Ihre <b>Körperteile bewegen und anfühlen</b>, um das Beschriebene <b>auszuführen</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bewegung</b>: Zu einem hohen Regal hoch greifen",
        type: "motor",
    },
    {
        q_en: "Think of <b>performing</b> the following <b>act</b>, carefully considering the image that forms in your mind of your <b>arms, legs, lips, etc.</b> performing this act.<br />Rate how vividly you can imagine the following:",
        english: "<b>Movement</b> of: Kicking something out of your way",
        q_ge: "Stellen Sie sich vor, das Folgende <b>zu tun</b> und betrachten Sie sorgfältig die entstehende Vorstellung, wie sich Ihre <b>Körperteile bewegen und anfühlen</b>, um das Beschriebene <b>auszuführen</b>.<br />Bewerten Sie, wie lebhaft Sie sich Folgendes vorstellen können:",
        german: "<b>Bewegung</b>: Ein Objekt aus dem Weg treten",
        type: "motor",
    },
    {
        q_en: "Think of <b>tasting</b> the following, carefully considering the <b>gustatory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Taste</b> of: Salt",
        q_ge: "Stellen Sie sich den folgenden <b>Geschmack</b> vor und betrachten Sie sorgfältig die entstehende <b>geschmackliche Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geschmack</b> von: Salz",
        type: "gustatory",
    },
    {
        q_en: "Think of <b>tasting</b> the following, carefully considering the <b>gustatory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Taste</b> of: Granulated (white) sugar",
        q_ge: "Stellen Sie sich den folgenden <b>Geschmack</b> vor und betrachten Sie sorgfältig die entstehende <b>geschmackliche Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geschmack</b> von: (weißem) Zucker",
        type: "gustatory",
    },
    {
        q_en: "Think of <b>tasting</b> the following, carefully considering the <b>gustatory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Taste</b> of: Oranges",
        q_ge: "Stellen Sie sich den folgenden <b>Geschmack</b> vor und betrachten Sie sorgfältig die entstehende <b>geschmackliche Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geschmack</b> von: Orangen",
        type: "gustatory",
    },
    {
        q_en: "Think of <b>tasting</b> the following, carefully considering the <b>gustatory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Taste</b> of: Jelly",
        q_ge: "Stellen Sie sich den folgenden <b>Geschmack</b> vor und betrachten Sie sorgfältig die entstehende <b>geschmackliche Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geschmack</b> von: Marmelade",
        type: "gustatory",
    },
    {
        q_en: "Think of <b>tasting</b> the following, carefully considering the <b>gustatory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Taste</b> of: Your favorite soup",
        q_ge: "Stellen Sie sich den folgenden <b>Geschmack</b> vor und betrachten Sie sorgfältig die entstehende <b>geschmackliche Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geschmack</b> von: Deiner Lieblings-Suppe",
        type: "gustatory",
    },
    {
        q_en: "Think of <b>smelling</b> the following, carefully considering the <b>olfactory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Smell</b> of: A badly ventilated room",
        q_ge: "Stellen Sie sich den folgenden <b>Geruch</b> vor und betrachten Sie sorgfältig die entstehende <b>geschmackliche Vorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geruch</b> von: Einem schlecht belüftetem Raum",
        type: "olfactory",
    },
    {
        q_en: "Think of <b>smelling</b> the following, carefully considering the <b>olfactory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Smell</b> of: Cooking cabbage",
        q_ge: "Stellen Sie sich den folgenden <b>Geruch</b> vor und betrachten Sie sorgfältig die entstehende <b>Geruchsvorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geruch</b>: bei dem Kochen von Kohl.",
        type: "olfactory",
    },
    {
        q_en: "Think of <b>smelling</b> the following, carefully considering the <b>olfactory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Smell</b> of: Roasting beef",
        q_ge: "Stellen Sie sich den folgenden <b>Geruch</b> vor und betrachten Sie sorgfältig die entstehende <b>Geruchsvorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können",
        german: "<b>Geruch</b> von: Rindfleisch, das angebraten wird",
        type: "olfactory",
    },
    {
        q_en: "Think of <b>smelling</b> the following, carefully considering the <b>olfactory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Smell</b> of: Fresh paint",
        q_ge: "Stellen Sie sich den folgenden <b>Geruch</b> vor und betrachten Sie sorgfältig die entstehende <b>Geruchsvorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geruch</b> von: Frischer Farbe",
        type: "olfactory",
    },
    {
        q_en: "Think of <b>smelling</b> the following, carefully considering the <b>olfactory image</b> that is produced.<br />Rate how vividly you can imagine the following:",
        english: "<b>Smell</b> of: New leather",
        q_ge: "Stellen Sie sich den folgenden <b>Geruch</b> vor und betrachten Sie sorgfältig die entstehende <b>Geruchsvorstellung</b>.<br />Bewerten Sie, wie lebhaft Sie sich den Folgenden vorstellen können:",
        german: "<b>Geruch</b> von: Neuem Leder",
        type: "olfactory",
    },
    {
        q_en: "Think of the following <b>sensation</b>, carefully considering the image that comes to your mind.<br />Rate how vividly you can imagine the following: ",
        english: "<b>Feeling</b> of: Fatigue",
        q_ge: "Stellen Sie sich das folgende <b>Gefühl</b> vor und begutachten Sie die genaue <b>Impression dieses Gefühles</b>, welches in Ihre Gedanken dazu kommt.<br />Bewerten Sie, wie lebhaft Sie sich das Folgende vorstellen können:",
        german: "<b>Gefühl</b> von: Ermüdung",
        type: "organic",
    },
    {
        q_en: "Think of the following <b>sensation</b>, carefully considering the image that comes to your mind.<br />Rate how vividly you can imagine the following: ",
        english: "<b>Feeling</b> of: Hunger",
        q_ge: "Stellen Sie sich das folgende <b>Gefühl</b> vor und begutachten Sie die genaue <b>Impression dieses Gefühles</b>, welches in Ihre Gedanken dazu kommt.<br />Bewerten Sie, wie lebhaft Sie sich das Folgende vorstellen können:",
        german: "<b>Gefühl</b> von: Hunger",
        type: "organic",
    },
    {
        q_en: "Think of the following <b>sensation</b>, carefully considering the image that comes to your mind.<br />Rate how vividly you can imagine the following: ",
        english: "<b>Feeling</b> of: A sore throat",
        q_ge: "Stellen Sie sich das folgende <b>Gefühl</b> vor und begutachten Sie die genaue <b>Impression dieses Gefühles</b>, welches in Ihre Gedanken dazu kommt.<br />Bewerten Sie, wie lebhaft Sie sich das Folgende vorstellen können:",
        german: "<b>Gefühl</b>: Eines schmerzend trockenen Halses",
        type: "organic",
    },
    {
        q_en: "Think of the following <b>sensation</b>, carefully considering the image that comes to your mind.<br />Rate how vividly you can imagine the following: ",
        english: "<b>Feeling</b> of: Drowsiness",
        q_ge: "Stellen Sie sich das folgende <b>Gefühl</b> vor und begutachten Sie die genaue <b>Impression dieses Gefühles</b>, welches in Ihre Gedanken dazu kommt.<br />Bewerten Sie, wie lebhaft Sie sich das Folgende vorstellen können:",
        german: "<b>Gefühl</b> von: Schläfrigkeit",
        type: "organic",
    },
    {
        q_en: "Think of the following <b>sensation</b>, carefully considering the image that comes to your mind.<br />Rate how vividly you can imagine the following: ",
        english: "<b>Feeling</b> of: Feeling sick after eating a lot",
        q_ge: "Stellen Sie sich das folgende <b>Gefühl</b> vor und begutachten Sie die genaue <b>Impression dieses Gefühles</b>, welches in Ihre Gedanken dazu kommt.<br />Bewerten Sie, wie lebhaft Sie sich das Folgende vorstellen können:",
        german: "<b>Gefühl</b> von: Das Unwohlsein, nachdem man zu viel gegessen hat.",
        type: "organic",
    }
];

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
                button_under: "Ich verstehe den Satz nicht nicht.",
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
            ratingScaleTrial_ger,
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
            ratingScaleTrial_eng,
            instructions_main_eng,
            ratingScaleTask,
            general_language_eng,
            subjective_language_eng,
            objective_language_eng,
            additional_info_eng,
            thanks_eng]
    }
    
}


