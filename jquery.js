var score=0;
    var fruits = ["https://clipartart.com/images/apple-apple-clipart-6.jpg", "https://st2.depositphotos.com/2485347/10675/v/950/depositphotos_106758128-stock-illustration-single-cartoon-banana.jpg", "https://friendlystock.com/wp-content/uploads/2019/12/19-mango-fruit-cartoon-clipart.jpg", "https://image.shutterstock.com/image-vector/pineapple-vector-graphic-clipart-design-600w-1505326877.jpg", "https://as1.ftcdn.net/jpg/01/89/42/30/500_F_189423077_oFisAb6wuYolWUu5wrKQODRKRLnjnH2S.jpg", "https://previews.123rf.com/images/mikhanna/mikhanna1703/mikhanna170302898/74023604-sweet-watermelon-cartoon-outlined-fruit-with-black-stroke-.jpg",
                 "https://previews.123rf.com/images/mikailain/mikailain1809/mikailain180900282/109061286-orange-fruit-sliced-vector-cartoon.jpg"];
    var names = ["https://previews.123rf.com/images/alliedcomputergraphics/alliedcomputergraphics1708/alliedcomputergraphics170800495/83996318-apple-slice-illustration.jpg", "https://previews.123rf.com/images/rubynurbaidi/rubynurbaidi1710/rubynurbaidi171000009/88230917-illustration-of-cute-cartoon-banana-.jpg", "https://image.freepik.com/free-vector/mango-cartoon-icon_22350-19.jpg", "https://thumbs.dreamstime.com/b/pineapple-vector-illustration-isolated-white-background-40752509.jpg", "https://as2.ftcdn.net/jpg/01/92/00/59/500_F_192005945_1wNgAUACvwf7406dUlrQEA7Th3cP6Yqx.jpg", "https://previews.123rf.com/images/arcady31/arcady311805/arcady31180500015/101043017-triangle-watermelon-piece-vector-icon.jpg","https://previews.123rf.com/images/rubynurbaidi/rubynurbaidi1710/rubynurbaidi171000001/87703020-illustration-of-cute-cartoon-orange-.jpg"]
    
    var fruit_value1 = ["https://previews.123rf.com/images/alliedcomputergraphics/alliedcomputergraphics1708/alliedcomputergraphics170800495/83996318-apple-slice-illustration.jpg", "https://previews.123rf.com/images/rubynurbaidi/rubynurbaidi1710/rubynurbaidi171000009/88230917-illustration-of-cute-cartoon-banana-.jpg", "https://image.freepik.com/free-vector/mango-cartoon-icon_22350-19.jpg", "https://thumbs.dreamstime.com/b/pineapple-vector-illustration-isolated-white-background-40752509.jpg", "https://as2.ftcdn.net/jpg/01/92/00/59/500_F_192005945_1wNgAUACvwf7406dUlrQEA7Th3cP6Yqx.jpg", "https://previews.123rf.com/images/arcady31/arcady311805/arcady31180500015/101043017-triangle-watermelon-piece-vector-icon.jpg","https://previews.123rf.com/images/rubynurbaidi/rubynurbaidi1710/rubynurbaidi171000001/87703020-illustration-of-cute-cartoon-orange-.jpg"];
        var fruit_value;
        var level_c=1;
        localStorage.setItem("varKey", level_c);

    // $(document).ready(function(){
    //     setTimeout(function(){
    //         // alert("Time is up!");


        

    //     }, 60000);
    // })

var counter = 60;
var interval = setInterval(function() {
    counter--;
$("#time_").text("TIME: "+counter+" sec");
if (score == (names.length)*5){
    clearInterval(interval);
}
    if (counter == 0) {
        clearInterval(interval);
         var audio = $("#mysoundclip1")[0];
         audio.play();
    

                                    $("#Fruits").empty();
                                $("#fNames").empty();

                                
                                $("<div><p>Sorry!! Time is Up! Do you want  to play again?</p></div>").dialog({modal: true, buttons: [{
                                text: "Yes",

                                click:function() {
                                    level_c++;
                                    var level_c=localStorage.getItem("varKey")
                                    $("#level").text("LEVEL: "+level_c);
                                    window.location.replace("index.html")

                                }
                            },
                            {
                                text: "No",
                                click:function() {
                                    $(this).dialog("close");
                                     window.location.replace("thankyou.html");
                                     
                                }
                            },
                        ]});
}

}, 1000);

    $("#level").text("LEVEL: "+level_c++);
    $(document).ready(function() {
        var a=0;
        $.each(fruits, function(index, value) {
        var fruit_value = fruit_value1[a];
            
            $("<div ><img style='width:190px;height:190px;' src='" + value + "' /></div>").appendTo("#Fruits").draggable({
                revert: true,
                scope: fruit_value.toLocaleLowerCase()
            });

             a++;


        });
        var suffle_name = suffle(names)
        $.each(names, function(index, value) {
            $("<div ><img style='width:190px;height:190px;' src='" + value + "' /></div>").appendTo("#fNames").droppable({
                scope: value.toLocaleLowerCase(),
                drop: function(event, ui) {
                    $(ui.draggable).append($(this).text());
                    score+=5;
                     var audio = $("#mysoundclip")[0];
                    audio.play();
                    $(this).hide("puff", "1000");
                    console.log(score);
                    
                    $("#score_board").text("score: "+score);
                    if (score == (names.length)*5) {
                    var audio = $("#mysoundclip2")[0];
                    audio.play();
                        $("#Fruits").empty();
                        $("#fNames").empty();
                        $("<div><p>CONGRATULATIONS on Scoring full marks!!! Do you want  to play again?</p></div>").dialog({modal: true, buttons: [{
                                text: "Yes",
                                click:function() {
                                    level_c++;
                                    var level_c=localStorage.getItem("varKey")
                                    $("#level").text("LEVEL: "+level_c);
                                    window.location.replace("index.html")

                                }
                            },
                            {
                                text: "No",
                                click:function() {
                                    $(this).dialog("close");
                                     window.location.replace("thankyou.html");
                                     
                                }
                            },
                        ]});
                    }
                }

            });
        });
    });

    function suffle(arr,arr1) {
        return arr.sort(function() {
            return .5 - Math.random();
        });
    }