$(document).ready(function () {

    $("#resultbtn").on("click", function () {
        const mass = $("#mass").val()
        const velocity = $("#velocity").val()
        result = 0.5 * mass * (velocity ** 2)
        if (isNaN(result)) {
            result = "Please enter a number"
            $("#result").text(result)
        }
        else {

            $("#result").text(`${result} J`)
        }

    })


    $("#resultbtn2").on("click", function () {
        const mass = $("#mass2").val()
        const height = $("#height").val()
        result = mass * 10 * height
        if (isNaN(result)) {
            result = "Please enter a number"
            $("#result2").text(result)
        }
        else {

            $("#result2").text(`${result} J`)
        }

    })



    $("#resultbtn3").on("click", function () {
        const force = $("#force").val()
        const forceArm = $("#forcearm").val()
        const degree = $("#degree").val()
        result = force * forceArm * Math.sin((degree * (Math.PI / 180)))
        if (isNaN(result)) {
            result = "Please enter a number"
            $("#result3").text(result)
        }
        else {

            $("#result3").text(`${result} N.m`)
        }

    })


})