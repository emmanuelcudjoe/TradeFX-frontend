export function saveUserDataToCache(data){
    let userData = localStorage.getItem("userData");

    if (!userData){
        localStorage.setItem("userData", JSON.stringify(data))
    }
}

export function loadUserDataFromStorage(){
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        console.log(userData)
        return userData
    }
    return !{}
}

export function clearUserData(){
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        localStorage.removeItem("userData")
    }

    return true;
}