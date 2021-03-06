
const MACHINE_KEY = "Machine_data";


export function postCreateMachine(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {
    console.log("Starting postCreateMachine...");

    // GET the TEXT data from localStorage.
    let textData = localStorage.getItem(MACHINE_KEY);

    // If TEXT data is null then:
    if (textData === null) {
        // a. Create an empty ARRAY
        const emptyArray = [];

        // b. Convert the ARRAY to TEXT
        const emptyArrayString = JSON.stringify(emptyArray);

        // c. Save the TEXT to localStorage
        localStorage.setItem(MACHINE_KEY, emptyArrayString);

        // d. Set the TEXT to be empty
        textData = emptyArrayString;
    }

    // Convert the TEXT data into an ARRAY
    const arrayData = JSON.parse(textData);
    //Add ID.
    const shortid = require('shortid');

    postData["id"] = shortid.generate();


    // Push the `postData` into our ARRAY
    arrayData.push(postData);

    // Convert the ARRAY to TEXT data
    textData = JSON.stringify(arrayData);

    // Save the TEXT data to localStorage.
    localStorage.setItem(MACHINE_KEY, textData);

    const responseData = { message: "Added" };
    onSuccessCallbackFunc(responseData);
}

export function getDataCard(onSuccessCallbackFunc, onFailureCallbackFunc) {
    // Get the TEXT data from localStorage.
    let textData = localStorage.getItem(MACHINE_KEY);

    // If TEXT data is null:
    if (textData === null) {
        // a. Create an empty ARRAY
        const emptyArray = [];

        // b. Convert the ARRAY to TEXT
        textData = JSON.stringify(emptyArray)

        // c. Save the TEXT to localStorage
        localStorage.setItem(MACHINE_KEY, textData)
    }

    // Convert the TEXT to ARRAY
    const arrayData = JSON.parse(textData);

    const responseData = {
        results: arrayData,
    };
    onSuccessCallbackFunc(responseData);
}
