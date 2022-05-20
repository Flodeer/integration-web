window.onscroll = function (){
    
    if(document.documentElement.scrollTop > 80){
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("navbar").style.height = "60px";
        document.getElementById("logo").style.display = "none";
        document.getElementById("sanslogo").style.display = "inline";
        document.getElementById("sanslogo").style.right = "4px";
        document.getElementById("Sanslogo").style.display = "inline";
        document.getElementsByClassName("navbararg").style.bottom = "14px";

    }
    else{
        document.getElementById("navbar").style.padding = "1%";
        document.getElementById("logo").style.display = "inline";
        document.getElementById("sanslogo").style.display = "none";
        document.getElementById("Sanslogo").style.display = "none";
    }
}
