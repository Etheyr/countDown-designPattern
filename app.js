(function(){

	countdown = {

		isPause : false,
		time : 1500,
		interval : null,

		init: function(){

			countdown.listeners();

		},
		listeners: function(){

			$('#play').on('click', countdown.play);
			$('#pause').on('click', countdown.pause);
			$('#reset').on('click', countdown.reset);
		},

		play: function(){

			countdown.interval = setInterval(countdown.decrement,1000);

		},
		pause: function(){

			clearInterval(countdown.interval);

		},
		reset: function(){

			if(countdown.reset) {
				clearInterval(countdown.time);
				countdown.time = 1500;
			}
		},
		decrement:function(){

			countdown.time--;
			countdown.updateView();

			if(countdown.time === 0){
				clearInterval(countdown.interval);
			}

		},
		updateView: function(){

			var minute= parseInt(countdown.time/60,10)
			var seconde= countdown.time % 60;
			$('#minutes').html(minute);
			$('#secondes').html(seconde);

		},
		recupInput: function(){

			var recupInput = $('#bMinutes').val();
		}
	};
	countdown.init();
})();
