$(document).ready(function() {
	var snackbar_text = $.i18n.prop('snackbar.text');
	$.snackbar({
		content : snackbar_text,
		timeout : 10000
	});

	var timer = setInterval(function() {
		$.snackbar({
			content : snackbar_text,
			timeout : 10000
		});
	}, 300000 /* 5 minutes */
	);
});