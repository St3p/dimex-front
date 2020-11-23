const REGISTER_KEY = "register_data"

export function postRegister (postData, onSuccess, onFailure){
  let userArrayString = localStorage.getItem(REGISTER_KEY);
  if (userArrayString === null){
    const arr = [];
    const arrString = JSON.stringify(arr);
    localStorage.setItem(REGISTER_KEY, arr, arrString);
    userArrayString = arrString;
  }
  const userArray = JSON.parse(userArrayString);
  console.log("OUTPUT", userArray)

  userArray.push(postData);

  userArrayString = JSON.stringify(userArray);

  localStorage.setItem(REGISTER_KEY, userArrayString);

  const responseData = {
    message:"registration was a success!!"
  }
  onSuccess(responseData);
}
