var ele_det = document.getElementById("Section_details");
var ele_skills = document.getElementById("Section_skills");
var ele_project = document.getElementById("Section_project");
var ele_certificate = document.getElementById("Section_certificate");
let b_det = document.getElementById("b_det");
var b_skills = document.getElementById("b_skills");
var b_project = document.getElementById("b_project");
var b_certificate = document.getElementById("b_certificate");

function det() {
    b_det.style.backgroundColor = "rgb(75, 157, 212)";
    b_skills.style.backgroundColor = "transparent";
    b_project.style.backgroundColor = "transparent";
    b_certificate.style.backgroundColor = "transparent";
    ele_det.classList.remove("onclk");
    ele_skills.classList.add("onclk");
    ele_project.classList.add("onclk");
    ele_certificate.classList.add("onclk");
}

function skills() {
    b_det.style.backgroundColor = "transparent";
    b_skills.style.backgroundColor = "rgb(75, 157, 212)";
    b_project.style.backgroundColor = "transparent";
    b_certificate.style.backgroundColor = "transparent";
    ele_det.classList.add("onclk");
    ele_skills.classList.remove("onclk");
    ele_project.classList.add("onclk");
    ele_certificate.classList.add("onclk");
}

function project() {
    b_det.style.backgroundColor = "transparent";
    b_skills.style.backgroundColor = "transparent";
    b_project.style.backgroundColor = "rgb(75, 157, 212)";
    b_certificate.style.backgroundColor = "transparent";
    ele_det.classList.add("onclk");
    ele_skills.classList.add("onclk");
    ele_project.classList.remove("onclk");
    ele_certificate.classList.add("onclk");
}

function certificate() {
    b_det.style.backgroundColor = "transparent";
    b_skills.style.backgroundColor = "transparent";
    b_project.style.backgroundColor = "transparent";
    b_certificate.style.backgroundColor = "rgb(75, 157, 212)";
    ele_det.classList.add("onclk");
    ele_skills.classList.add("onclk");
    ele_project.classList.add("onclk");
    ele_certificate.classList.remove("onclk");
} 
