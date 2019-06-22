function Number(num) {
	document.getElementById("HienThi").value += num;
}

function calculator() {
	var x = document.getElementById("HienThi").value;
	var y = eval(x);
	document.getElementById("HienThi").value = y;
}

function clean() {
	document.getElementById("HienThi").value = " ";
}