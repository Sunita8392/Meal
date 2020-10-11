
/// Added By Rahul Salunkhe 15.04.2015

function AllowNumericOnly(evt)//[0..9, backspace]
{
    //alert('m');
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode >= 48 && charCode <= 57 || (charCode == 8))
        return true;
    else
        return false;
}

function AllowDecimalOnly(evt)//[0..9,.]
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57) || (charCode == 46) || (charCode == 8))
        return true;
    else
        return false;
}

function PhoneNoOnly(evt) //[0..9,-,/,\,(,),","]
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57) || (charCode == 45) || (charCode == 47) || (charCode == 92) || (charCode == 40) || (charCode == 41) || (charCode == 44))
        return true;
    else
        return false;
}

function AllowAlphaNumericOnly(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90) || (charCode == 95) || (charCode >= 45 && charCode <= 47) || (charCode == 92) || (charCode == 95) || (charCode >= 48 && charCode <= 59) || (charCode >= 40 && charCode <= 41) || (charCode == 32) || (charCode == 46) || (charCode == 8))
        return true;
    else
        return false;
}
function AllowAlphabatesOnly(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 32) || (charCode == 46) || (charCode == 40 || charCode == 41) || (charCode == 59) || (charCode == 8))
        return true;
    else
        return false;
}
function DoNotAllowSpecialCharacter(evt) //[!,#,$,%,&,<,=,>,?,@,_] ascii values [33,35,36,37,38,60,61,62,63,64,94]
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 58 && charCode <= 64) ||  (charCode >= 91 && charCode <= 96) || (charCode >= 33 && charCode <= 47)  || (charCode >= 123 && charCode <= 126))
        return false;
    else
        return true;
}
function DoNotAllowAnySpecialCharacter(evt) 
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 58 && charCode <= 64) || (charCode >= 91 && charCode <= 96) || (charCode >= 32 && charCode <= 47) || (charCode >= 123 && charCode <= 126))
        return false;
    else
        return true;
}

function DateTime(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 46) || (charCode == 40 || charCode == 41) || (charCode == 59) || (charCode >= 60 && charCode <= 64) || (charCode == 33) || (charCode >= 35 && charCode <= 37))
        return false;
    else
        return true;
}

function AllowDateOnly(evt)//[0..9, backspace]
{
    //alert('m');
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode >= 48 && charCode <= 57 || (charCode == 8) || (charCode == 47))
        return true;
    else
        return false;
}

function AllowAlphabatesAndDotOnly(evt) //Alphabates and .
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 32) || (charCode == 46) || (charCode == 40 || charCode == 41) || (charCode == 59) || (charCode == 46) || (charCode == 8))
        return true;
    else
        return false;
}




function checkemail(ele) {
    var val = ele.id;

    var val = document.getElementById(val).value

    str_email = val.substring(0, val.lastIndexOf("@"));
    var str_domain = val.substring(val.lastIndexOf("@") + 1, val.length);
    var str_domain1 = str_domain.substring(str_domain.lastIndexOf(".") + 1, str_domain.length);

    var testresults = false;
    if (val == "") {
        return true;
    }
    else if (str_email == "") {
        testresults = true;
    }
    for (i = 0; i < str_email.length; i++) {
        if (str_email.charAt(i) == "@") {
            testresults = true;
            break;
        }
    }
    if (testresults) {
        alert("Invalid Email Address");
        ele.value = "";
    }
    else {
        count = 0;
        for (i = 0; i < str_domain.length; i++) {
            if (str_domain.charAt(i) == ".")
                count++;
            if (str_domain.charAt(i) == "@") {
                testresults = true;
                break;
            }
        }
        if (count < 1) {
            testresults = true;
        }
        count = 0;
        for (i = 0; i < str_domain1.length; i++) {
            if (str_domain1.charAt(i) == ".")
                count++;
        }
        if (count > 0 || (str_domain1.length < 2) || (str_domain1.length > 3)) {
            testresults = true;
        }
        if (testresults) {
            alert("Invalid Email Address");
            ele.value = "";
        }
    }
    return (testresults)
}



//Purpose   :Allow ,Alphabates,'.' and numbers(use in file name).

function FileName(evt) //Alphabates and .
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 32) || (charCode == 46) || (charCode == 40 || charCode == 41) || (charCode == 59) || (charCode == 46) || (charCode >= 48 && charCode <= 57))
        return true;
    else
        return false;
}

function validate(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}

function trim(str) {
    var str = str.replace(/^\s\s*/, ''),
		ws = /\s/,
		i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}


function checkAll(this1) {

    var status = true;
    var i = 0;

    var str = this1.id;

    var strId = str.substring(0, str.lastIndexOf('_'));

    var emails = document.getElementById(str).value.split(";");


    for (i = 0; i < emails.length; i++) {
        if (!validate(trim(emails[i]))) {
            alert("Incorrect format: " + emails[i]);
            this1.value = "";
            status = false;
            document.getElementById(strId + "_btnSend").disabled = true;
            //		    this1.value=""; 
            break;
        }
        else {

            document.getElementById(strId + "_btnSend").disabled = false;
        }
    }
}



//End

function SingleSelect(regex, current) {
    re = new RegExp(regex);

    for (i = 0; i < document.forms[0].elements.length; i++) {

        elm = document.forms[0].elements[i];

        if (elm.type == 'checkbox') {

            if (re.test(elm.name)) {

                elm.checked = false;

            }
        }
    }

    current.checked = true;
}


//for open ftp url

function Openftp(ftp) {
    window.open(ftp, null, "top=0,left=0,height=718,width=1000,location=1,status=yes,toolbar=yes,menubar=yes,resizable=yes");
}



//Purpose  :select/deselect all check box in the grid.

function SelectAllCheckboxes(spanChk) {

    // Added as ASPX uses SPAN for checkbox
    var oItem = spanChk.children;
    var theBox = (spanChk.type == "checkbox") ? spanChk : spanChk.children.item[0];
    xState = theBox.checked;

    elm = theBox.form.elements;
    for (i = 0; i < elm.length; i++)
        if (elm[i].type == "checkbox" && elm[i].id != theBox.id) {
            //elm[i].click();
            if (elm[i].checked != xState)
                elm[i].click();
            //elm[i].checked=xState;
        }
}


//for right click disabled
var message = "Right Click Is Not Allowed!";
var proceed = true;
var prcd = false;

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS4;
}
else if (document.all && !document.getElementById) {
    document.onmousedown = clickIE4;
}
//document.oncontextmenu=new Function(" return false;")

document.oncontextmenu = new Function(" return true;")

onkeydown = "return showKeyCode(event)";

function disableselect(e) {
    alert(ss);
    return false
}

function reEnable() {
    alert(ss);
    return true
}
//document.onselectstart=new Function ("return false") 	// For not allowing selection 

document.oncontextmenu = new Function(" return false;")


var version = navigator.appVersion;
function showKeyCode(e) {
    var keycode = (window.event) ? event.keyCode : e.keyCode;
    if ((version.indexOf('MSIE') != -1)) {
        if (keycode == 116) {
            event.keyCode = 0;
            event.returnValue = false;
            return false;
        }
    }
    else {
        if (keycode == 116) {
            return false;
        }
    }
}

//  Purpose     :   To accept backspace with alphabets
function OnlyAlphabates(evt)//[A..Z],[a...z],[.],[backspace]
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 46) || (charCode == 32) || (charCode == 8) || (charCode >= 48 && charCode <= 57))
        return true;
    else
        return false;
}

//  It accepts + sign,backspace for mobile no.
function MobileNoOnly(evt) //[0..9,+]
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57) || (charCode == 43) || (charCode == 8))
        return true;
    else
        return false;
}

//  It accepts backspace, numbers
function OnlyPhoneNo(evt) //[0..9,backspace]
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57) || (charCode == 8))
        return true;
    else
        return false;
}

function isDate(txtDate) {
    var currVal = txtDate;
    if (currVal == '')
        return false;

    //Declare Regex  
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null)
        return false;

    //Checks for mm/dd/yyyy format.
//    dtMonth = dtArray[1];
//    dtDay = dtArray[3];
//    dtYear = dtArray[5];

    //Checks for dd/mm/yyyy format.
    dtDay = dtArray[1];
    dtMonth = dtArray[3];
    dtYear = dtArray[5];    

    if (dtMonth < 1 || dtMonth > 12)
        return false;
    else if (dtDay < 1 || dtDay > 31)
        return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
        return false;
    else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
            return false;
    }
    return true;
}



