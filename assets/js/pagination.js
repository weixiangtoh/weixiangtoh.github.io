var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var p1Btn = document.getElementById("page1-btn");
var p2Btn = document.getElementById("page2-btn");

function changePage() {
    var target = event.target;

    if (page2.classList.contains("d-none") && (target.id==p2Btn.id || target.id==next.id )){
        page2.classList.remove("d-none");
        page1.classList.add("d-none");
        next.classList.add("disabled");
        previous.classList.remove("disabled");
        p1Btn.classList.remove("active");
        p2Btn.classList.add("active");

        previous.href = "#page1";
    }
    else if (target.id!=p2Btn.id && target.id!=next.id){
        page2.classList.add("d-none");
        page1.classList.remove("d-none");
        next.classList.remove("disabled");
        previous.classList.add("disabled");
        p2Btn.classList.remove("active");
        p1Btn.classList.add("active");
    
        next.href = "#page2";
    }
}