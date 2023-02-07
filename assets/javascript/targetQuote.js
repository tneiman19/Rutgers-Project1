var targetLang;
var target2;
var originalQuote;
var languageSelector = document.getElementById("language");

//this switch statement sets the target language parameter for the DeepL API
function setLanguage(){
    targetLang = languageSelector.value;
switch (targetLang) {
    case "Bulgarian":
        target2 = "BG";
        break;
    case "Czech":
        target2 = "CS";
        break;
    case "Danish":
        target2 = "DA"
        break;
    case "German":
        target2 = "DE";
        break;
    case "Greek":
        target2 = "EL";
        break;
    case "Spanish":
        target2 = "ES";
        break;
    case "Estonian":
        target2 = "ET";
        break;
    case "Finnish":
        target2 = "FI";
        break;
    case "French":
        target2 = "FR";
        break;
    case "Hungarian":
        target2 = "HU";
        break;
    case "Indonesian":
        target2 = "ID";
        break;
    case "Italian":
        target2 = "IT";
        break;
    case "Japanese":
        target2 = "JA";
        break;
    case "Korean":
        target2 = "KO";
        break;
    case "Lithuanian":
        target2 = "LT";
        break;
    case "Latvian":
        target2 = "LV";
        break;
    case "Norwegian":
        target2 = "NB";
        break;
    case "Dutch":
        target2 = "NL";
        break;
    case "Polish":
        target2 = "PL";
        break;
    case "Portuguese (Brazilian)":
        target2 = "PT-BR";
        break;
    case "Portuguese (Non-Brazilian)":
        target2 = "PT-PT";
        break;
    case "Romanian":
        target2 = "RO";
        break;
    case "Russian":
        target2 = "RU";
        break;
    case "Slovak":
        target2 = "SK";
        break;
    case "Slovenian":
        target2 = "SL";
        break;
    case "Swedish":
        target2 = "SV";
        break;
    case "Turkish":
        target2 = "TR";
        break;
    case "Ukranian":
        target2 = "UK";
        break;
    case "Chinese (simplified)":
        target2 = "ZH";
        break;
    default:
        console.log("You fucked up. Fix it");
        break;
}
}