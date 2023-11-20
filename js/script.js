var hero = document.getElementById('hero');
  function test(){
    var montitre = document.getElementById('title');
    console.log(montitre);
    montitre.classList.add("gotitle");
    console.log(hero);
    hero.classList.add('hero__red')
  }

  function SendMessage(){
    console.log("clicked")
    var FirstName= document.getElementById("FirstName")
    console.log(FirstName)
  }

  function checkform(form){
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    return true;
}