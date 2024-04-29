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
    strings : ["UI/UX Designer", "Web Developer", "Graphic Designer"],
    loop: true, 
    typeSpeed : 100,
    backSpeed : 90,
    backDelay : 1000
})