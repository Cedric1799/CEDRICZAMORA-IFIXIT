//tab page ajax tab trigger
'use strict'
// A $( document ).ready() block.
$(document).ready(function () {
    $('.ajaxtab .item').tab({
    cache: false,
    // faking API request
    apiSettings: {
        loadingDuration: 300,
        mockResponse: function (settings) {
            var response = {
                first: '',
                second: '',
                third: ''
            };
            return response[settings.urlData.tab];
        }
    },
    context: 'parent',
    auto: true,
    path: '/'
});
});