const socket = io();
const request = requestData();

function loadchart() {
    Highcharts.chart('container', {

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

//emit information to server
socket.emit('reload:cliente', "hellos" );
//get information from server
socket.on('reload:server', function (data) {
    alert(data);
});
loadchart();