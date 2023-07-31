window.addEventListener('message', function(event) {
    if (event.data.action == "openlist"){
        let List = event.data.list
        let Active = event.data.active
        $(".intro").css({
            "display" : "block"
        });

        $(".card-text").html(``)
        $(".card-text").html(`<span class="badge bg-info">${event.data.name}</span>`)
        
        $(".tb-pop").html(``) 
        let activeClass, color; 
        for(let l in List){

            if(l == Active){
                activeClass = "active"
            }else{
                activeClass = "inactive"
            }

            if (l == "cooldown"){
                color = "#e60000";
            }else if (l == "honhold"){
                color = "#4d88ff";
            }else if (l == "inprogress"){
                color = "#0073e6";
            }else if (l == "meeting"){
                color = "#004d99";
            }else if (l == "safe"){
                color = "#00b300";
            }else{
                color = "#000";
            }
            
            $(".tb-pop").append(`
                <div class="img-btns ${activeClass}" data-ptype="${l}">
                    <p style="background-color:${color}">${List[l].label}</p>
                    <img src="images/dummy.jpg">
                </div>
            `)
        }

    }else if (event.data.action == "showstatus"){
        let Active = event.data.active
        let Type = event.data.type
        let Cooldown = event.data.cooldown
        $(".prio-text").css({
            "display" : "block"
        });
        $(".prio-text").html(``)          
        let color, text;
        if (Type == "cooldown"){
            color = "#e60000";
            text = Active.label + ": " + Cooldown + " Mins";
        }else if (Type == "honhold"){
            color = "#4d88ff";
            text = Active.label;
        }else if (Type == "inprogress"){
            color = "#0073e6";
            text = Active.label;
        }else if (Type == "meeting"){
            color = "#004d99";
            text = Active.label;
        }else if (Type == "safe"){
            color = "#00b300";
            text = Active.label;
        }else{
            color = "#000";
            text = "Inactive";
        }
        $(".prio-text").css({
            "background-color" : `${color}`
        });
        $(".prio-text").html(`${text}`)
    }
});


$(document).ready(function (e) {
    $('.tb-pop').on('click', '.img-btns', function(){
        var ptype = $(this).data("ptype");
        CloseUi();     
        $.post(`https://${GetParentResourceName()}/setprio`, JSON.stringify({ ptype }));
    });
})


$(document).keydown(function (e) {
    if (e.keyCode == 27) { 
        CloseUi();     
        $.post(`https://${GetParentResourceName()}/close`);
    }
});

CloseUi = function() {
    $(".intro").css({
        "display" : "none"
    });
}

