
function render() {
    $('#9').html(localStorage.nine)
    $('#10').html(localStorage.ten)
    $('#11').html(localStorage.eleven)
    $('#12').html(localStorage.twelve)
    $('#1').html(localStorage.one)
    $('#2').html(localStorage.two)
    $('#3').html(localStorage.three)
    $('#4').html(localStorage.four)
    $('#5').html(localStorage.five)
}
$(document).ready(render())

$("#saveBtn9").click(function () {
    localStorage.nine = ($('#9').text());
})
$("#saveBtn10").click(function () {
    localStorage.ten = ($('#10').text());
})
$("#saveBtn11").click(function () {
    localStorage.eleven = ($('#11').text());
})
$("#saveBtn12").click(function () {
    localStorage.twelve = ($('#12').text());
})
$("#saveBtn1").click(function () {
    localStorage.one = ($('#1').text());
})
$("#saveBtn2").click(function () {
    localStorage.two = ($('#2').text());
})
$("#saveBtn3").click(function () {
    localStorage.three = ($('#3').text());
})
$("#saveBtn4").click(function () {
    localStorage.four = ($('#4').text());
})
$("#saveBtn5").click(function () {
    localStorage.five = ($('#5').text());
})

var time = new Date();
var currentHour = time.getHours();

for (let i = 9 ; i < 18; i++) {
    if (currentHour < i) {
        $("." + i).css('background-color', '#75c175a8')
    } else if(currentHour === i)
        $('.'+i).css('background-color', '#01ff3b')
}

$('#clearBtn').click(function() {
    localStorage.clear();
    $('.todo').html('')
})

var a = setInterval(updateDay, 1000)

function updateDay () {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    var date = new Date();
    document.getElementById('currentTime').innerText = months[date.getMonth()] + " " + date.getDate();
}

$(document).ready(updateDay())