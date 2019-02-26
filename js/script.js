$(document).ready(function () {
    
    var varJson =  {
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};
    var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(varJson));
   particlesJS.load('main-container', jsonUri, function() {
  console.log('callback - particles.js config loaded');
});
    
    $('.btn-go').click(function(){
       var city = $('.city-input').val();
        window.alert("hi");
        
        $('.display-temp').css("display","block");
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=943e243002779f0d9b429bc358e6af2c", function (json) {
        //  var items = [];
        //  $.each( data, function( key, val ) {
        //    items.push( "<li id='" + key + "'>" + val + "</li>" );
        //  });
        // 
        //  $( "<ul/>", {   
        //    "class": "my-new-list",
        //    html: items.join( "" )
        //  }).appendTo( "body" );
        //});
        
        
        $('.location').html("   "+json.city.name+" , "+json.city.country);
        
        $('.temperature').html(" "+JSON.stringify(Math.round(json.list[0].main.temp-271.1))+"<sup class='sup_temp'>&deg;C</sup>");
        
        $('.min_temp').html(" min temp : "+JSON.stringify(Math.round(json.list[0].main.temp_min-271.1))+"<sup>&deg;C</sup>");
        
        $('.max_temp').html(" max temp : "+JSON.stringify(Math.round(json.list[0].main.temp_max-271.1))+"<sup>&deg;C</sup>");
        
        $('.humidity').html("<span> humidity : "+JSON.stringify(Math.round(json.list[0].main.humidity))+"% </span>");
        
        $('.description').html("<span> description : "+json.list[0].weather[0].description+" </span>");
        $('.main').html("<span> main : "+json.list[0].weather[0].main+" </span>");
        
        
        
        
        $('.wind').html("<span>wind speed : "+Math.round(json.list[39].wind.speed)+"% </span>");
        
    
        
        
    });
        
        
    });



});
