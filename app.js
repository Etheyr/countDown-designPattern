'use strict';

(function(){

	var countdown = {

		isPause : false,
		time : 10,
		defaultTime : 10,
		interval : null,

		init: function(){

			$('iframe').hide();
			this.listeners();

		},
		listeners: function(){

			$('#play').on('click', this.play.bind(this));
			$('#pause').on('click', this.pause.bind(this));
			$('#reset').on('click', this.reset.bind(this));
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
				this.time =5401;
			}
		},
		decrement:function(){

			this.time--;
			this.progressBar();
			this.updateView();
			if(this.time === 0){
				$('.fondspan').html('<iframe width="1280" height="720" src="https://www.youtube.com/embed/OWFBqiUgspg?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
				$('.spanc').hide();
				$('.buttonc').hide();
				$('.inputB').hide();
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
		},
		recupInput: function(){

			this.timerMin = $("#min").val() || 0;
			this.timerSec = $("#sec").val() || this.timerDefault;
			this.timer = parseInt(this.timerMin, 10)*60 + parseInt(this.timerSec, 10);
			this.timerMax = this.tim
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
