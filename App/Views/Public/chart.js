const socket = io();
let request = requestData();
let chart;

function loadchart() {
    chart = new Highcharts.chart('container', {

        chart: {
         type: 'line',
         renderTo: 'container',
         defaultSeriesType: 'areaspline',
         height: 450
      },
  
      title: {
          text: 'Number of sms messages'
      },
  
      subtitle: {
          text: 'Source: thesolarfoundation.com'
      },
  
      yAxis: {
          title: {
              text: 'Number of Employees'
          }
      },
  
      xAxis: {
            categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      },
  
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              }
          }
      },
  
      //data
      series: [request],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  
    });


}

function requestData() {
    var result;
    $.ajax({
        url: 'ListNotificationGet',
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
    //execute every seconds
    /*setInterval(() => {
        //emit information to server
        socket.emit('reload:client', "charge data" );
    }, 1000)*/
}


//get information from server
socket.on('reload:server', function (data, year) {
    request = data;

    console.log(new Date().toDateString() + '=>' + request + ':' + year.toString());

    chart.series[0].update({
        name: year,
        data: request
    }, true); 


});


loadchart();
Heartbeating();