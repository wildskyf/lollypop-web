window.onload = function() {
	var onScroll = function(e) {
		if(e.pageY > 640) return;
		var $photo = document.querySelector('.screenshot');

		$photo.style.top = Math.pow(e.pageY, 0.7) + 'px';
	};
	var el = window;
	if(el.addEventListener)
		el.addEventListener('scroll', onScroll, false);
	else if (el.attachEvent)
		el.attachEvent('onscroll', onScroll);
};
