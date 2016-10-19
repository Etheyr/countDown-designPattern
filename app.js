'use strict';

(function(){

	var countdown = {

		isPause : false,
		time : 3800,
		defaultTime : 3800,
		interval : null,

		init: function(){

			this.listeners();

		},
		listeners: function(){

			$('#play').on('click', this.play.bind(this));
			$('#pause').on('click', this.pause.bind(this));
			$('#reset').on('click', this.reset.bind(this));
			$('#bHeure').on('click', this.inputH.bind(this));
			$('#bMinutes').on('click', this.recupM.bind(this));
			$('#bSecondes').on('click',this.recupS.bind(this));
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
				this.time =10;
			}
		},
		decrement:function(){

			this.time--;
			this.progressBar();
			this.updateView();

			if(this.time === 0){
				clearInterval(this.interval);
			}

		},
		updateView: function(){

			var heure=parseInt(this.time/3600%60,10 );
			var minute= parseInt(this.time%3600/60,10);
			var seconde= this.time % 60;
			var milliseconde= parseInt(this.time%100,10);
			$('#heure').html(this.addZero(heure));
			$('#minutes').html(this.addZero(minute));
			$('#secondes').html(this.addZero(seconde));
			$('.url.example .ui.embed').embed();


		},
		recupInput: function(){

			var recupM = $('#inputM').val();
			var recupS = $('#inputS').val();
		},
		progressBar: function(){
			var progress = parseInt(this.time*100/this.defaultTime,10);
			$('#chargement').css('width',progress+'%');
			$('#progress').text(progress + '%');
		},
		addZero: function(nombre){
			if(nombre<10){
				nombre = '0'+nombre;
			}
			return nombre
		}
	};
	countdown.init();
})();
