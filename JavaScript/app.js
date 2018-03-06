$(document).ready(function() {
    $.ajax({
        url:"http://localhost/capstone/ims_rework/iFixIT/chartjs/data.php",
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
                labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                datasets : [
              
                    {
                        
                        label: 'Open tickets',
                        backgroundColor: 'rgba(280, 250, 150, 0.75)',
                        borderColor: 'rgba(200, 210, 250, 0.75)',
                        hoverBackgroundColor: 'rgba(280, 250, 150, 1)',
                        hoverBorderColor: 'rgba(230, 250, 150, 1)',
                        data: score
                    },
                    {
                        
                        label: 'Closed Tickets',
                        backgroundColor: 'rgba(200, 200, 200, 0.75)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: [
                            20,40,75,15,50,
                        ]
                    }
                ]
            };


            var ctx = $("#mycanvas");

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