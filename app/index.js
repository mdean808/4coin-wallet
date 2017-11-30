const divsToHide = $('.hide');
function hideAllDivs(noHide) {
	divsToHide.hide();
	noHide.show();
	noHide.removeClass('hide');
}