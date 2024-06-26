// const logoutBtn = document.querySelector(".logout")

// logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem()
//     window.location.replace("../login_page/login.html")
// })
// import  totalMessBill  from "../mess_bill/bill.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDRl9n7bOgYSegReCR0CFJ_BRb63IoKy0w",
    authDomain: "mess-maintainance.firebaseapp.com",
    projectId: "mess-maintainance",
    storageBucket: "mess-maintainance.appspot.com",
    messagingSenderId: "823193074711",
    appId: "1:823193074711:web:23d8c3fa137a8f15627052"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// const logout_button=document.getElementById('logout');
// logout_button.addEventListener('click',async()=>{
//     await signOut(auth)
//     window.location.replace('../login_page/login.html') 
// })


const logout_button = document.getElementById('logout');

logout_button.addEventListener('click', async () => {
    await signOut(auth);
    const loginPage = '../../login.html';
    const windowFeatures = 'target=_parent';
    window.open(loginPage, '_parent', windowFeatures);
    window.top.close();
    noBack();
    disableBackButton();
});

function noBack()
{
    window.history.forward();
}

function disableBackButton()
{
    window.onbeforeunload = function()
    {
        canGoBack = false;
    };
}
