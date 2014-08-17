Kordfu.prototype.debug = function(test){

    var el = $("p").css('color','white');
    var html =  'Test: '            + test            + '<br />' +
                'Device Name: '     + device.name     + '<br />' +
                'Device Cordova: '  + device.cordova  + '<br />' +
                'Device Platform: ' + device.platform + '<br />' +
                'Device UUID: '     + device.uuid     + '<br />' +
                'Device Model: '    + device.model    + '<br />' +
                'Device Version: '  + device.version  + '<br />';

    el.html(html);

    $('body').append(el);

};