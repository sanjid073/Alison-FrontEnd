function desView(){
    document.getElementById("tab-content-1").style.display ="block";
    document.getElementById("tab-content-2").style.display ="none";
    document.getElementById("tab-content-3").style.display ="none";
    document.getElementById("tab-content-4").style.display ="none";
    document.getElementById("middle_tab_1").classList.add("active");
    document.getElementById("middle_tab_2").classList.remove("active");
    document.getElementById("middle_tab_3").classList.remove("active");
    document.getElementById("middle_tab_4").classList.remove("active");
   
}
function modulesView(){
    document.getElementById("tab-content-1").style.display ="none";
    document.getElementById("tab-content-2").style.display ="block";
    document.getElementById("tab-content-3").style.display ="none";
    document.getElementById("tab-content-4").style.display ="none";
    document.getElementById("middle_tab_1").classList.remove("active");
    document.getElementById("middle_tab_2").classList.add("active");
    document.getElementById("middle_tab_3").classList.remove("active");
    document.getElementById("middle_tab_4").classList.remove("active");  
}
function outCome(){
    document.getElementById("tab-content-1").style.display ="none";
    document.getElementById("tab-content-2").style.display ="none";
    document.getElementById("tab-content-3").style.display ="block";
    document.getElementById("tab-content-4").style.display ="none";
    document.getElementById("middle_tab_1").classList.remove("active");
    document.getElementById("middle_tab_2").classList.remove("active");
    document.getElementById("middle_tab_3").classList.add("active");
    document.getElementById("middle_tab_4").classList.remove("active");  
}
function certificaite(){
    document.getElementById("tab-content-1").style.display ="none";
    document.getElementById("tab-content-2").style.display ="none";
    document.getElementById("tab-content-3").style.display ="none";
    document.getElementById("tab-content-4").style.display ="block";
    document.getElementById("middle_tab_1").classList.remove("active");
    document.getElementById("middle_tab_2").classList.remove("active");
    document.getElementById("middle_tab_3").classList.remove("active");
    document.getElementById("middle_tab_4").classList.add("active");  
}

