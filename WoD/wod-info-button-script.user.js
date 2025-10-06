// ==UserScript==
// @name		[WoD] Info Button für Fähigkeiten in Kampfkonfig
// @description	Fügt einen Info Button der Fähigkeit Select-Box in der Kampfkonfig hinzu
// @match		*://*.world-of-dungeons.de/wod/spiel/hero/skillconf*
// @version		1.1
// @updateURL	https://github.com/A1asd/Userscripts/blob/main/WoD/wod-info-button-script.user.js
// @downloadURL	https://github.com/A1asd/Userscripts/blob/main/WoD/wod-info-button-script.user.js
// @grant		none
// @author		A1asd
// ==/UserScript==

function GM_addStyle(aCss) {
  'use strict';
  let head = document.getElementsByTagName('head')[0];
  if (head) {
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = aCss;
    head.appendChild(style);
    return style;
  }
  return null;
};

GM_addStyle("#wod-orders div div div div > select { width:89% !important; }");
GM_addStyle('.wod-skill-dropdown + .button_image_info {display: none;}');

setTimeout(() => {
  let jb = document.getElementById('jumpbox_center');
  let jb_input = jb.querySelector('input[name="link"]');
  let jb_click = jb.querySelector('input.button');
	let div = document.querySelectorAll('#wod-orders div div div > div select.wod-skill-dropdown');
  
  div.forEach(d => {
    //d.style = d.style;// + ';width:85%;';
    d.addEventListener('change', () => {
      console.log(d.options[d.selectedIndex].text);
  	});
    let e = document.createElement('input');
    //e.type = 'submit';
    e.className = 'button_image_info clickable';
    e.value = "";
    e.style = "height:19px;width:17px;";
    e.addEventListener('click', () => {
    	console.log('open skillpage', d.options[d.selectedIndex].text);
      jb_input.value = '[skill:' + d.options[d.selectedIndex].text + ']';
      jb_click.click();
    });
  	d.after(e);
  });
}, 100);
