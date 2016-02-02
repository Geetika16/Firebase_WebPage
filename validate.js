function validate()
{ var x = document.forms["f1"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	
        document.getElementById("demo").innerHTML="Please enter proper email";
		return false;
		
		}
		else {
		 document.getElementById("demo1").innerHTML="Details Submitted";
		return false;
		}
}