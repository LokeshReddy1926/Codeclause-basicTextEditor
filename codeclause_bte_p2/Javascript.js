// Adding the features on clicking...
function bold() {
  document.getElementById("text").style.fontWeight = "bold";
}

function italic() {
  document.getElementById("text").style.fontStyle = "italic";
}

function underline() {
  document.getElementById("text").style.textDecoration = "underline";
}

function fontSize() {
  var fontSize = document.getElementById("font-size").value;
  document.getElementById("text").style.fontSize = `${fontSize}px`;
}

function left() {
  document.getElementById("text").style.textAlign = "left";
}

function center() {
  document.getElementById("text").style.textAlign = "center";
}

function right() {
  document.getElementById("text").style.textAlign = "right";
}

function font_style() {
  var fonts = document.getElementById("font_families").value;
  document.getElementById("text").style.fontFamily = `${fonts}`;
}

function upper() {
  document.getElementById("text").value = document
    .getElementById("text")
    .value.toUpperCase();
}

function lower() {
  document.getElementById("text").value = document
    .getElementById("text")
    .value.toLowerCase();
}

function clear_txt() {
  document.getElementById("text").value = "";
}

// Removing the features on double clicking...
function boldrm() {
  document.getElementById("text").style.fontWeight = "normal";
}

function italicrm() {
  document.getElementById("text").style.fontStyle = "normal";
}

function underlinerm() {
  document.getElementById("text").style.textDecoration = "none";
}

function upperrm() {
  document.getElementById("text").style.textTransform = "none";
}

function lowerrm() {
  document.getElementById("text").style.textTransform = "none";
}
