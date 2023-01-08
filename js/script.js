var form = document.getElementById("sign-up-form");

document.getElementById("submit").addEventListener("click", function () {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var addr1 = document.getElementById("address1").value;
    var addr2 = document.getElementById("address").value;
    var delivery = document.getElementsByName("delivery");
    var option;

    for(i = 0; i < delivery.length; i++) {
        if(delivery[i].checked)
        option = delivery[i].value;
    }

    if(fname && lname && email && addr2) {
        alert("sign up has been processed successfully. \n Name: "+
        fname+" "+lname+"\n Email:"+email+"\n Address:"+addr1+": "+addr2+
        "\n Delivery Intruction:"+option);
    } else {
        console.log('Value are missing')
    }
    
});