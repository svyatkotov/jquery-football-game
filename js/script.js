const GATES_MULTIPLIER_TOP = 0.4;
const GATES_MULTIPLIER_BOTTOM = 0.55;

let ball = $('.ball');
let field = $('.field');
let animationDuration = 1500;
let handlerDisabled = false;

function ballHandler(event) {
	event.preventDefault();

	if (handlerDisabled) return;

	handlerDisabled = true;

	setTimeout(function() {
		handlerDisabled = false;
	}, animationDuration);

	if (event.which === 1 || event.which === 32) {
		ball.animate({
			left: (ball.position().left === 0) ? (field.width() - ball.width()) : 0,
			top: Math.random() * (field.height() - ball.height())
		}, animationDuration, function() {
			if (ball.position().top < (field.height() * GATES_MULTIPLIER_BOTTOM) && ball.position().top > (field.height() * GATES_MULTIPLIER_TOP)) {
				$('.goal')
					.show(100)
					.animate({fontSize: '+=20px'}, 400)
					.animate({fontSize: '-=20px'}, 400)
					.animate({fontSize: '+=20px'}, 400)
					.animate({fontSize: '-=20px'}, 400)
					.hide(100);
			}
		});
	}
}

ball.click(ballHandler);
$(document).keydown(ballHandler);
