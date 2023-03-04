function arvutaTrahv(tegelikKiirus, lubatudKiirus) {
  return Math.min(190, ((tegelikKiirus - lubatudKiirus) * 3));
}

function esitaTrahv() {
	let nimi = document.getElementById("nimi").value;
	let tegelik_kiirus = document.getElementById("tegelik_kiirus").value;
	let lubatud_kiirus = document.getElementById("lubatud_kiirus").value;
	
	let trahv = arvutaTrahv(tegelik_kiirus, lubatud_kiirus);
		
	if (trahv > 0) {
	document.getElementById("tulemus").innerHTML = `<h1>${nimi ? nimi : "Tere"}, ületasite kiirust ja seega on teie trahv <u>${trahv} eurot!</u></h1>`
	} else {
	document.getElementById("tulemus").innerHTML = `<h1>${nimi ? nimi : "Tere"}, järgisite kiiruspiirangut! <u>Tubli!</u>.</h1>`
	}
}


