
$('#startMonitoring').click(function() {
    if ($('#startMonitoring').hasClass("btn-success")){
        $('#startMonitoring').removeClass("btn-success");
        $('#startMonitoring').addClass("btn-danger");
        $('#startMonitoring').text("Stop Monitoring");
    }
    else{
        $('#startMonitoring').removeClass("btn-danger");
        $('#startMonitoring').addClass("btn-success");
        $('#startMonitoring').text("Start Monitoring");
    }
});