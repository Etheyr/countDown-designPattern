'use strict';

(function(){

	var countdown = {

		isPause : false,
		time : 300,
		defaultTime : 300,
		interval : null,

		init: function(){

			this.listeners();

		},
		listeners: function(){

			$('#play').on('click', this.play.bind(this));
			$('#pause').on('click', this.pause.bind(this));
			$('#reset').on('click', this.reset.bind(this));
			$('#bMinutes').on('click', this.recupM);
			$('#bSecondes').on('click',this.recupS);
		},

		play: function(){

			this.interval = setInterval(this.decrement.bind(this),1000);

		},
		pause: function(){

			clearInterval(this.interval);

		},
		reset: function(){

			if(this.reset) {
				clearInterval(this.time);
				this.time = 300;
			}
		},
		decrement:function(){

			this.progressBar();
			this.time--;
			this.updateView();

			if(this.time === 0){
				clearInterval(this.interval.bind(this));
			}

		},
		updateView: function(){

			var minute= parseInt(this.time/60,10)
			var seconde= this.time % 60;
			$('#minutes').html(minute);
			$('#secondes').html(seconde);

		},
		recupInput: function(){

			var recupM = $('#inputM').val();
			var recupS = $('#inputS').val();
		},
		progressBar: function(){
			var progress = parseInt(this.time*100/this.defaultTime,10);
			$('#chargement').css('width',progress+'%');
			console.log(progress);
		}
	};
	countdown.init();
})();
