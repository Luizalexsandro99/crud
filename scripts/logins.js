const firebaseConfig = {
    apiKey: "AIzaSyC8z4biKJ7UE9eJYpmvA9obbTZ1vH6GkiY",
    authDomain: "colegio-95f06.firebaseapp.com",
    projectId: "colegio-95f06",
    storageBucket: "colegio-95f06.appspot.com",
    messagingSenderId: "720745435027",
    appId: "1:720745435027:web:33754fcc958fcfec916266",
    measurementId: "G-JCSZKKNR5Z"
};


firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth()

botaoEntrar.onclick = function login(){
    let userEmail = emailLogin.value
    let userSenha = senhaLogin.value

    auth.signInWithEmailAndPassword(userEmail, userSenha)
    .then(()=>{
        window.open('http://127.0.0.1:5500/html/loginfeito.html')
    }).catch(() =>{
        errorDados.style.display ='block'
    })
}