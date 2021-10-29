
const display = document.querySelector( '#timer' );
const secs20 = document.querySelector( '#secs20' );
const work5 = document.querySelector( '#work5' );
const quick15 = document.querySelector( '#quick15' );
const snack20 = document.querySelector( '#snack20' );
const lunchBreak = document.querySelector( '#lunch-break' );
const manual = document.querySelector( '#manual' );
const timeText = document.querySelector( '#time-text' );
const timeBack = document.querySelector( '#time-back' );

var intervals = [];

secs20.addEventListener( 'click', () => {
    const duration = 20;
    startTimer( duration );
} );
work5.addEventListener( 'click', () => {
    const duration = 5 * 60;
    startTimer( duration );
    timeAdd( duration );
} );
quick15.addEventListener( 'click', () => {
    const duration = 15 * 60;
    startTimer( duration );
    timeAdd( duration );
} );
snack20.addEventListener( 'click', () => {
    const duration = 20 * 60;
    startTimer( duration );
    timeAdd( duration );
} );
lunchBreak.addEventListener( 'click', () => {
    const duration = 60 * 60;
    startTimer( duration );
    timeAdd( duration );    
} );
manual.addEventListener( 'keyup', ( e ) => {
    if (e.keyCode === 13) {
        const duration = parseInt( timeText.value ) * 60;
        startTimer( duration );
        timeAdd( duration );
    }
} );

display.textContent = '05:00';
timeBack.textContent = '16:00';

function startTimer( duration ) {
    var timer = duration, minutes, seconds;
    intervals.forEach( clearInterval );

    var myInterval = setInterval( function () {
        minutes = parseInt( timer / 60, 10 );
        seconds = parseInt( timer % 60, 10 );

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if ( --timer < 0 ) {
            clearInterval(myInterval);
            return;
        }
    }, 1000 );
    intervals.push( myInterval );
}

function timeAdd( seconds ) {
    const hours = Math.floor( ( seconds / 60 ) / 60 );
    const minutes = ( seconds / 60 ) % 60;
    var d = new Date(),
        h = ( d.getHours() + hours < 10 ? '0' : '' ) + (d.getHours() + hours),
        m = ( d.getMinutes() + minutes < 10 ? '0' : '' ) + (d.getMinutes() + minutes);
  timeBack.textContent = h + ':' + m;
}