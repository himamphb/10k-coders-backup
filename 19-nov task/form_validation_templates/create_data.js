var user = {
    personname: "",
    username: "",
    email: "",
    password: "",
    conpassword: "",
    message: "",
  };
  var datacollect = [];
  function getUser() {
    
    var datauser = {...user}
    for (a in datauser){
      datauser[a] = document.getElementById(a).value;
      
    }
    datacollect.push(datauser);
    console.log(datacollect);
    cleardata(datauser);
    displayUsers(datacollect);

    function cleardata(datauser){
    for(b in datauser ){
      document.getElementById(b).value="";
    }
  };