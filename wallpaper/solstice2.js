
window.onload = function(e){
	var timeLeft, daysLeft, hoursLeft, minsLeft, secsLeft;
	var dots = 1;
    var $clock = $('#clock'),
        eventTime = moment.tz('21-12-2020 12:30:00', 'DD-MM-YYYY HH:mm:ss', "America/Vancouver").unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds'),
        interval = 1000;




    // if time to countdown
    if(diffTime > 0) {
	
        // Show clock
        // $clock.show();

        var $d = $('<div class="days" ></div>').appendTo($clock),
            $h = $('<div class="hours" ></div>').appendTo($clock),
            $m = $('<div class="minutes" ></div>').appendTo($clock),
            $s = $('<div class="seconds" ></div>').appendTo($clock);
			
			//TZ
		//var $clock = moment().tz("Canada/Vancouver").format();
			
			
        setInterval(function(){
			
            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds()
				
				daysLeft = moment.duration(duration).days(),
                hoursLeft = moment.duration(duration).hours(),
                minsLeft = moment.duration(duration).minutes(),
                secsLeft = moment.duration(duration).seconds();
				
				d = $.trim(d).length === 1 ? '0' + d : d;
				h = $.trim(h).length === 1 ? '0' + h : h;
				m = $.trim(m).length === 1 ? '0' + m : m;
				s = $.trim(s).length === 1 ? '0' + s : s;

			
				// show how many hours, minutes and seconds are left
				//$d.text(d); $h.text(h); $m.text(m); $s.text(s);
				//Display time
				displayTime();
				dots = dots*-1;
		}, interval);

	}
	
	
	
	
function displayTime(){
  $(".dots").children().attr("src","./NEWCLOCK/dots_on.png");
  var temp;
  //Days
  if (diffTime <= 0) {
    $(".timepiece").children().attr("src","./NEWCLOCK/0.png");
  } else {
    if (daysLeft < 100) {
      $("#d_100").children().attr("src","./NEWCLOCK/0.png");
    } else {
      temp = Math.floor(daysLeft / 100);
      $("#d_100").children().attr("src","./NEWCLOCK/"+temp+".png");
    }
    if (daysLeft < 10) {
      $("#d_10").children().attr("src","./NEWCLOCK/0.png");
    } else {
      temp = Math.floor((daysLeft%100) / 10);
      $("#d_10").children().attr("src","./NEWCLOCK/"+temp+".png");
    }
    temp = daysLeft % 10;
    $("#d_1").children().attr("src","./NEWCLOCK/"+temp+".png");
    //Hours
    if (hoursLeft >= 10) {
      temp = Math.floor(hoursLeft / 10);
      $("#h_10").children().attr("src","./NEWCLOCK/"+temp+".png");
      temp = hoursLeft % 10;
      $("#h_1").children().attr("src","./NEWCLOCK/"+temp+".png");
    } else {
      $("#h_10").children().attr("src", "./NEWCLOCK/0.png");
      $("#h_1").children().attr("src", "./NEWCLOCK/"+hoursLeft+".png");
    }
    //Minutes
    if (minsLeft >= 10) {
      temp = Math.floor(minsLeft / 10);
      $("#m_10").children().attr("src","./NEWCLOCK/"+temp+".png");
      temp = minsLeft % 10;
      $("#m_1").children().attr("src","./NEWCLOCK/"+temp+".png");
    } else {
      $("#m_10").children().attr("src", "./NEWCLOCK/0.png");
      $("#m_1").children().attr("src", "./NEWCLOCK/"+minsLeft+".png");
    }
    //Seconds
    if (secsLeft >= 10) {
      temp = Math.floor(secsLeft / 10);
      $("#s_10").children().attr("src", "./NEWCLOCK/"+temp+".png");
      temp = secsLeft % 10;
      $("#s_1").children().attr("src", "./NEWCLOCK/"+temp+".png");
    } else {
      $("#s_10").children().attr("src", "./NEWCLOCK/0.png");
      $("#s_1").children().attr("src", "./NEWCLOCK/"+secsLeft+".png");
    }
    //Dots
    /* This does not occur in the game. You can uncomment this to add this feature.
    if (dots == 1){
      $(".dots").children().attr("src","./NEWCLOCK/dots_on.png");
    } else {
      $(".dots").children().attr("src","./NEWCLOCK/dots.png");
    }
    */
    ticktock();
  }
}

function ticktock(){
  if (dots == 1) {
    document.getElementById("tick").play();
  } else {
    document.getElementById("tock").play();
  }
}


function run(){
  calculateTime();
  displayTime();
  dots = dots*-1;
}




};