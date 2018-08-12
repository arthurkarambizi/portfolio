// menu show/hide navpages 
function menu() {
    var x = document.getElementById("show-nav-pages");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function validate() {
    // var name = document.getElementById('fullName').value;
    // var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;
    var name = document.forms["form"]["fullName"].value;
    var email = document.forms["form"]["email"].value;
    var phone = document.forms["form"]["phone"].value;

    if (name == "") {
        alert('Please Enter your Name')
        return false;
    } else if (email == "") {
        alert('Please Enter your Email')
        return false;
    } else if (phone == "") {
        alert('Please Enter your Phone')
        return false;
    } else {
        return true;
    };
}