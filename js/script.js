$(document).ready(main);

function main() {
    $('.menuButton').click(buttonClicked);
}

function buttonClicked(e) {
    $('.navigation').toggleClass('visible');
    $('.menuButton').toggleClass('selected');
}
