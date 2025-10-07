// ==UserScript==
// @name		[WoD] Info Button für Fähigkeiten in Kampfkonfig
// @description	Fügt einen Info Button der Fähigkeit Select-Box in der Kampfkonfig hinzu
// @match		*://*.world-of-dungeons.de/wod/spiel/hero/skillconf*
// @version		1.3
// @updateURL	https://github.com/A1asd/Userscripts/raw/refs/heads/main/WoD/wod-info-button-script.user.js
// @downloadURL	https://github.com/A1asd/Userscripts/raw/refs/heads/main/WoD/wod-info-button-script.user.js
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

function createInfoButton() {
	let infoButton = document.createElement('input');
  
  infoButton.className = 'button_image_info clickable';
  infoButton.value = "";
  infoButton.style = "height:19px;width:17px;";
  
  return infoButton;
}

function createInfoSkillButton(jb_input, jb_click, actualSelect) {
	let infoButton = createInfoButton();
  infoButton.addEventListener('click', () => {
		jb_input.value = '[skill:' + actualSelect.options[actualSelect.selectedIndex].text + ']';
		jb_click.click();
  });
  return infoButton;
}

function createInfoItemButton(jb_input, jb_click, actualSelect) {
	let infoButton = createInfoButton();
  infoButton.addEventListener('click', () => {
		jb_input.value = '[item:' + actualSelect.options[actualSelect.selectedIndex].text + ']';
		jb_click.click();
  });
  return infoButton;
}

GM_addStyle("#wod-orders div div div div > select { width:89% !important; }");
GM_addStyle('.wod-skill-dropdown ~ .button_image_info { display: none; }');
GM_addStyle('select[style*="display: none; width: 100%;"] ~ .button_image_info { display: none; }');

setTimeout(() => {
	let jb = document.getElementById('jumpbox_center');
	let jb_input = jb.querySelector('input[name="link"]');
	let jb_click = jb.querySelector('input.button');
	let skillDropDowns = document.querySelectorAll('#wod-orders div div div > div select.wod-skill-dropdown');
  
	skillDropDowns.forEach(dropDown => {
    let itemSelect = dropDown.nextElementSibling.nextElementSibling;
    
    let skillInfoButton = createInfoSkillButton(jb_input, jb_click, dropDown);
    let itemInfoButton = createInfoItemButton(jb_input, jb_click, itemSelect);
    
    dropDown.after(skillInfoButton);
    itemSelect.after(itemInfoButton);
	});
}, 100);
