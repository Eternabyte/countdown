
window.onload = function(e){

    var $clock = $('#clock'),
        eventTime = moment.tz('21-12-2020 15:30:00', 'DD-MM-YYYY HH:mm:ss', "Australia/Sydney").unix(),
        currentTime = moment().unix(),
        diffTime = eventTime //- currentTime,
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
		var $clock = moment().tz("Canada/Vancouver").format();
			
			
        setInterval(function(){
			
            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds();
				
            d = $.trim(d).length === 1 ? '0' + d : d;
            h = $.trim(h).length === 1 ? '0' + h : h;
            m = $.trim(m).length === 1 ? '0' + m : m;
            s = $.trim(s).length === 1 ? '0' + s : s;

            // show how many hours, minutes and seconds are left
            $d.text(d);
            $h.text(h);
            $m.text(m);
            $s.text(s);
 
        }, interval);

    }

};