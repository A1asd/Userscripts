// ==UserScript==
// @name		[Starmarines] Restore avatar on profile page
// @description	Stellt den generierten Avatar auf der Profilseite wieder her
// @match		*://*.starmarines.de/wod/spiel/hero/profile*
// @version		0.8
// @updateURL	https://github.com/A1asd/Userscripts/raw/refs/heads/main/Starmarines/restore-avatar-script.user.js
// @downloadURL	https://github.com/A1asd/Userscripts/raw/refs/heads/main/Starmarines/restore-avatar-script.user.js
// @grant		none
// @author		A1asd
// ==/UserScript==

let image = document.querySelector('#smarttabs__details img');
image.src = image.src.replace('136.243.45.117', 'charlie.starmarines.de');
