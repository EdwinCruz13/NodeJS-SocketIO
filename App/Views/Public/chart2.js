const socket = io();
let request = requestData();
console.log(request);

let ColumnChart;

function loadchart() {
    ColumnChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Loan by ISSDHU'
        },
        subtitle: {
            text: 'in the current month'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Deposited Amount of this mounth'
            }
    
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 0,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: 'C$ {point.y:,.2f}'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>C$ {point.y:,.2f}</b><br/>'
        },
    
        series: [
            {
                name: "Type of loans",
                colorByPoint: true,
                data: request
            }
        ],
        
    });

}

function requestData() {
    var result;
    $.ajax({
        url: 'ListLoanJson',
        type: "GET",
        async: false, 
        dataType: "json",
        success: function(data) {
            result = data;
        },
        cache: false
    });
    return result;
}




//function that rendering the chart
function Heartbeating(){

    socket.emit('reload:client', "charge data" );

}


//get information from server
socket.on('reload:server', function (data, year) {
    request = data;

    console.log(new Date().toDateString() + '=>' + JSON.stringify(data));
    
    ColumnChart.series[0].update({
        data: request
    }, true); 


});


loadchart();
Heartbeating();