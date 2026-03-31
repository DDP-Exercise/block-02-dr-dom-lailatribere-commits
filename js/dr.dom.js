"use strict";
let e, t, i;
e = document.getElementById("title");
t = (e.textContent = "Haha! I, the mighty Dr. Dom hacked this page! Your page is mine, Jimmy!", document.getElementById("message"));
i = (t.textContent = "You will read pink text on green background, and you will like it!", document.getElementsByTagName("p"));
for(let e of i)e.style.color="pink",e.style.backgroundColor="darkgreen";t.nextElementSibling.textContent="I have taken all your heroes captive! Enjoy my minions instead!";let n=document.getElementById("heroes_of_the_web"),o=(n.style.visibility="hidden",document.createElement("ul")),a=["Popups","Ed Vertise","Pay Wall-E","Bugs Bunny","iOS","Phi-Shing"];for(let t of a){let e=document.createElement("li");e.textContent=t,o.append(e)}n.parentNode.insertBefore(o,n);