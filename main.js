/*const firebaseConfig = {
    apiKey: "AIzaSyBivv-IGnfDZeoBD-dir_5MHeW5UQGKd68",
    authDomain: "contactform-2f7a0.firebaseapp.com",
    databaseURL: "https://contactform-2f7a0-default-rtdb.firebaseio.com",
    projectId: "contactform-2f7a0",
    storageBucket: "contactform-2f7a0.appspot.com",
    messagingSenderId: "18643360967",
    appId: "1:18643360967:web:ae1dffa92e488f412932e2"
  }*/
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };