	function getIndexRandom(min, max) {
	   return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function bgColor(){
		var colors = {
			dark : [
				'#3F72AF',
				'#112D4E',
				'#222831',
				'#393E46',
				'#466C95',
				'#2D4059',
				'#300532',
				'#3E3E3E',
				'#393E46',
				'#001F3F',
				'#083358',
				'#222831',
				'#303841',
				'#4F1C4C',
				'#483D3C',
				'#303841',
				'#3A4750'
			],
			light : [
				'#F9EBC4',
				'#EEEEEE',
				'#FFFBE0',
				'#F6E7C1',
				'#F6DEC4',
				'#F7F6DE',
				'#EFECEA',
				'#F6F1F1',
				'#E7E5E5',
				'#FFF3E1',
				'#E4F4FD',
				'#FEF2F2',
				'#F1FCFD',
				'#FEFAEC',
				'#E4F6F6',
				'#F9F7F7',
				'#E6E6E6',
				'#F8F8F8',
				'#FEF0FF',
				'#F5EBEB'
			]
		}

		function radomizeColor(){
			var index = getIndexRandom(0, colors.light.length);
			var body = document.getElementById('body');
			body.style.background= colors.light[index]
		}
	
		setInterval(function() {
			radomizeColor();
		}, 1000);
	}