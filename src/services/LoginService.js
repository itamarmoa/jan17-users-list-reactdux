const LoggedInUser = "loggedInUser";

class LoginService{
    set(user){
        let str = JSON.stringify(user);
        localStorage.setItem(LoggedInUser, str);
    }
    get(){
        let obj = localStorage.getItem(LoggedInUser);
        return JSON.parse(obj);
    }
}

export default new LoginService();