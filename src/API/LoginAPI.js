const REGISTER_KEY = "register_data";



export function postLogin(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {
  console.log("testing");
    // STEP 1: Get our TEXT data from "localStorage".
    let userArrayString = localStorage.getItem(REGISTER_KEY);
    // STEP 2: If TEXT data is NULL then we need to create an empty array and
    //         set the "localStorage" with our empty array.
    if (userArrayString === null){
      const emptyArray = [];
      const emptyArrayString = JSON.stringify(emptyArray);
      localStorage.setItem(REGISTER_KEY, emptyArrayString);

    }


    // STEP 3: We need to convert the TEXT to ARRAY.
    const userArray = JSON.parse(userArrayString);

    // STEP 4: Iterate through all the user accounts.
    for (let obj of userArray){
          // STEP 5: Find the matching username.
      if (obj.username === postData.username){
        // STEP 6: Match the password.
        if (obj.password === postData.password){
            // STEP 7: If username and password MATCH then call our "success callback function".
            const responseData = {
              message: "login success!!",
            }
            onSuccessCallbackFunc(responseData);
            return;
        }
      }
    }
    // STEP 8: Else call our "failure callback function".
    const responseData = {
      message: "wrong password or username"
    };
    onFailureCallbackFunc(responseData);
}
