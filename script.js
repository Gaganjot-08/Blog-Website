// document.getElementsByClassName("main-btn").onclick = function() {
//     document.getElementsByClassName("subscribe-col").style.visibility = "visible";
// };


// function myFunction() {
//     var x = document.getElementById("myDIV");
//     x.style.display = "visible";
// }
function show() {
    const subscribeShow = document.querySelector(".subscribe-show");
    subscribeShow.style.display = "flex";
}
function hide() {
    const subscribeShow = document.querySelector(".subscribe-show");
    subscribeShow.style.display = "none";
}


function showReply() {
    const replyShow = document.querySelector(".reply-show");
    // replyShow.style.display = "flex";
    if (replyShow.style.display === "flex"){
        replyShow.style.display = "none";
    }
    else {
        replyShow.style.display = "flex";
    }
}
function showReply2() {
    const replyShow = document.querySelector(".reply-show2");
    if (replyShow.style.display === "flex"){
        replyShow.style.display = "none";
    }
    else {
        replyShow.style.display = "flex";
    }
}
function showReply3() {
    const replyShow = document.querySelector(".reply-show3");
    if (replyShow.style.display === "flex"){
        replyShow.style.display = "none";
    }
    else {
        replyShow.style.display = "flex";
    }
}