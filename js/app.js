(function () {

$(document).ready(function() {
  $('select').niceSelect();
});

$(updateBoxDimension);

$(window).resize(function () {
	updateBoxDimension();
});

function updateBoxDimension() {
  var $container = $('.container');
  var containerTop = ($(window).height() / 2) - ($container.height() / 2);
  $container.css({marginTop: containerTop});
  if ($(window).width() > 469) {
    var containerLeft = (($(window).width() - $container.width())/ 2) ;
    $container.css({marginLeft: containerLeft});
  }
}

var objmoneda = {"USA": 1};

$.ajax({
	url:'http://apilayer.net/api/live?access_key=5a9d1bc79ed0fce6428e894776bc0b8b&currencies=USD,ARS,BTC,BRL,CLP,GBP,EUR&format=1',
	success: function (data) {
		var moneda = data.quotes;
		objmoneda.ARS = moneda.USDARS;
		objmoneda.BRL = moneda.USDBRL;
		objmoneda.BTC = moneda.USDBTC;
		objmoneda.CLP = moneda.USDCLP;
		objmoneda.EUR = moneda.USDEUR;
		objmoneda.GBP = moneda.USDGBP	;
	},
	error: function () {
	}
})
	
$(".select-arriba").change(function () {
	$(".imagen-arriba").css("background-image", "url('img/flags/" + $(".select-arriba").val() + ".png')")
	switch($(".select-arriba").val()) {
		case "ARS":
			$(".simbolo-arriba").text("$");
			$(".dinero-arriba").text("pesos argentinos");
			break;
		case "BRL":
			$(".simbolo-arriba").text("R$");
			$(".dinero-arriba").text("reales brasileños");
			break;
		case "BTC":
			$(".simbolo-arriba").text("Ƀ");
			$(".dinero-arriba").text("bitcoins");
			break;
		case "CLP":
			$(".simbolo-arriba").text("$");
			$(".dinero-arriba").text("pesos chilenos");
			break;
		case "EUR":
			$(".simbolo-arriba").text("€");
			$(".dinero-arriba").text("euros");
			break;
		case "GBP":
			$(".simbolo-arriba").text("£");
			$(".dinero-arriba").text("libras esterlinas");
			break;
		case "USA":
			$(".simbolo-arriba").text("u$s");
			$(".dinero-arriba").text("dolares americanos");
			break;
	}
	cambio();
})

$(".select-abajo").change(function () {
	$(".imagen-abajo").css("background-image", "url('img/flags/" + $(".select-abajo").val() + ".png')")
	switch($(".select-abajo").val()) {
		case "ARS":
			$(".simbolo-abajo").text("$");
			$(".dinero-abajo").text("pesos argentinos");
			break;
		case "BRL":
			$(".simbolo-abajo").text("R$");
			$(".dinero-abajo").text("reales brasileños");
			break;
		case "BTC":
			$(".simbolo-abajo").text("Ƀ");
			$(".dinero-abajo").text("bitcoins");
			break;
		case "CLP":
			$(".simbolo-abajo").text("$");
			$(".dinero-abajo").text("pesos chilenos");
			break;
		case "EUR":
			$(".simbolo-abajo").text("€");
			$(".dinero-abajo").text("euros");
			break;
		case "GBP":
			$(".simbolo-abajo").text("£");
			$(".dinero-abajo").text("libras esterlinas");
			break;
		case "USA":
			$(".simbolo-abajo").text("u$s");
			$(".dinero-abajo").text("dolares americanos");
			break;
	}
	cambio();
})

function cambio () {
	setTimeout(function() {
		var valor = $("input").val();
		var valora = $(".select-arriba").val();
		var valorb = $(".select-abajo").val();
		var resultado = objmoneda[valorb] / objmoneda[valora];
		$(".resultado").text((resultado * valor).toFixed(2));
	}, 10);
}

$("input").keypress(function (event) {
	cambio();	
})

$('input').keyup(function(e){
	if(e.keyCode == 8) {
		cambio();
	}
	cambio();
})  


})();