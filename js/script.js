console.log($("div"));
 let x  = $("div")
     .on("click", function() {
         $(this).removeAttr("title")
     })
    .html("Проверка метода html")
    .css({
        fontSize: "80px",
        color: "white",
        background: "green"
    })
$("div").hover(function () {
    $(this).css("height", "50vh")
}, function () {
    $(this).css("height", "100px")
}).dblclick(function () {
    $(this).css({
        background: "blue",
        color: "white",
        width: Math.floor(Math.random() * (window.innerWidth + 1 - 50)) + 50 + "px"

    })
}).attr({
    title: "Проверка добавления атрибута TITLE",
    class: "active"
})
$("h1").on("click", function () {
    $(this).next().toggleClass("collapse")
  })
$("div").contain("active")
$("div").hoverFun(function () {
  
}).prevEl()
// $("h2").children()



console.log(x);