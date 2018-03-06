    /*dashboard category*/
$(document).ready(function() {
    $.ajax({
        url:"http://localhost/iFixIT_system/Chartjs/data.php",
        method: "GET",
        success: function(data){ 
            console.log(data);
            var player = [];
            var score = [];

            for (var i in data ) {
                player.push(" " + data[i].playerid);
                score.push(data[i].score);
            }
            var chartdata = {
                labels : ["Hardware", "Software", "Network"],
                datasets : [
              
                    {
                        
                        label:["Hardware"],
                        backgroundColor: 'rgba(200, 200, 200, 0.75)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: [60,50,40]
                    },
                   
                    
                    {
                        
                        label: ["Network"],
                        backgroundColor: 'rgba(210, 250, 150, 0.75)',
                        borderColor: 'rgba(210, 210, 250, 0.75)',
                        hoverBackgroundColor: 'rgba(210, 250, 150, 1)',
                        hoverBorderColor: 'rgba(210, 250, 150, 1)',
                        data: [ 50,80,75]
                    },
                   
                    
                    {
                        
                        label: ["Software"],
                        backgroundColor: 'rgba(280, 250, 150, 0.75)',
                        borderColor: 'rgba(200, 210, 250, 0.75)',
                        hoverBackgroundColor: 'rgba(280, 250, 150, 1)',
                        hoverBorderColor: 'rgba(230, 250, 150, 1)',
                        data: [55, 50,65]
                    },
                   
                ]
            };


            var ctx = $("#mycanvas1");

            var barGraph = new Chart (ctx, {
                type: 'bar',
                data: chartdata 
            });
        },
        error: function(data) {
            console.log(data);
        }
    });
    });
    /*Dashboard ticket*/