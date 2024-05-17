var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active");
            document.getElementById(tabname).classList.add("active-tab")
        }
var typingEffect = new Typed(".multitext",{
    strings : ["Web Developer...", "Graphics Designer...", "UI/UX Designer..."],
    loop: true, 
    typeSpeed : 50,
    backSpeed : 50,
    backDelay : 1000
})

var sidemeu = document.getElementById("sidemenu")

function openmenu(){
    sidemeu.style.right = "0";

}
function closemenu(){
    sidemeu.style.right = "-400px";
}

document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://sheetdb.io/api/v1/7sd6zc8ypucqv'
    var form = document.getElementById('sheetdb-form');
    var msgSpan = document.getElementById('msg');

    form.addEventListener('submit', e=> {
        e.preventDefault(); 
        fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => {
            msgSpan.innerText = 'message sent successfully';
            setTimeout(function() {
                form.submit(); 
                msgSpan.innerHTML=""
            }, 5000);
        })
        
    });
});

