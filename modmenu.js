(async() => {
	await ModMenu.init();
	ModMenu.menu.arr.push(new ModMenu.MenuTree('Hacks', [
		new ModMenu.MenuTree('Cafe', [
			new ModMenu.MenuButton('Get Coins', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/cafe/getCoins.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('End Game', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/cafe/endGame.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Crypto', [
			new ModMenu.MenuButton('Get Crypto', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/crypto/getCrypto.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Hack Other Users Password', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/crypto/hackOtherUsersPassword.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Factory', [
			new ModMenu.MenuButton('Get Cash', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/factory/getCash.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Mega Bot', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/factory/getMegaBot.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Fishing Frenzy', [
			new ModMenu.MenuButton('Set Weight', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/fishing-frenzy/setWeight.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Global', [
			new ModMenu.MenuButton('Add Tokens', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/53af610aed644e2cab6f9683a8b7dc84e08a7cc5/global/addTokens.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Bypass Random Name', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/global/bypassRandomName.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Flood Games', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/global/floodGames.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get All Blooks in Game', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/global/getAllBlooksInGame.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Every Answer Correct', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/global/getEveryAnswerCorrect.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Spam Open Boxes', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/global/spamOpenBoxes.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Gold', [
			new ModMenu.MenuButton('Get Gold', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/gold/getGold.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Racing', [
			new ModMenu.MenuButton('Instant Win', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/racing/instantWin.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Tower Defense', [
			new ModMenu.MenuButton('All Free', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/65deffbf2e80cba5222eb620a62c485d5651dc41/tower-defense/allFree.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Change Game Round', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/tower-defense/changeGameRound.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Cash', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/tower-defense/getCash.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Damage', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/0eeae497752cfa38c1d35c6397c1908740f0903b/tower-defense/getDamage.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Remove Ducks', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/11e532a4d8b0bb15a49b53146028d8b3c6db59fd/tower-defense/removeDucks.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Remove Enemies', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/d4b2a8b1b6248b0532f604f7c182cbbcea344757/tower-defense/removeEnemies.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Remove Obsticles', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/997bd313a790bc9ead7e179bb71f9b8836f2f4a2/tower-defense/removeObsticles.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Tower of Doom', [
			new ModMenu.MenuButton('Add Coins', () => fetch("https://raw.githubusercontent.com/Penguin123450/blooket-hack/main/tower-of-doom/addCoins.js").then((res) => res.text().then((t) => eval(t)))),
		]),
	]));
})(); 
