function send() {
    var temp = document.getElementById("tmpMessage").innerHTML;
    var field = document.getElementById('messageField');
    var div = document.createElement('div');
    var name = document.forms[0].userName.value;    
    var messText = document.forms[0].messageText.value;
   
    div.insertAdjacentHTML('afterBegin', temp);    
    div.getElementsByClassName('messageName')[0].textContent = name;
    div.getElementsByClassName('messageTime')[0].textContent = new Date().toLocaleString('uk-UA');
    div.getElementsByClassName('messageText')[0].textContent = messText;
    var r = Math.floor(Math.random() * 56);
    var g = Math.floor(Math.random() * 56);
    var b = Math.floor(Math.random() * 56);
    var color1 = '#' + (200 + r).toString(16) + (200 + g).toString(16) + (200 + b).toString(16);
    var color2 = '#' + (180 + r).toString(16) + (180 + g).toString(16) + (180 + b).toString(16);    
    div.getElementsByClassName('alert-info')[0].style.backgroundColor = color1;
    div.getElementsByClassName('alert-primary')[0].style.backgroundColor = color2;
    field.insertAdjacentElement('afterbegin', div);

    document.forms[0].messageText.value = '';
    document.forms[0].messageText.focus();
   
}