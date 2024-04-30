function twitterpost() {
  let lengthmessage = document.querySelector("#text").Value;
  let lentext = lengthmessage.length;

  document.getElementById("count").innerHTML = lentext;
  if (lentext > 200) {
    document.getElementById("count").innerHTML = "MAX";
    let sliceText = lengthmessage.slice(1, 200);
  }
}
