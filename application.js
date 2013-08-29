// Career Coach configuration data
config = {
    password: '28562df86666dc6ea1d24f0edaf3f981279b883e3edd24e18ea3403e746cd307',
    baseUrl: 'http://usdemo.emsicareercoach.com',
};

// Packets of Career Coach data
packet = {
    earnings: 'occupationearnings'
}

// Object for the occupation you want data on
occupation = {
    name: 'Registered Nurses',
    soc: '29-1141.00',
    zip: '83843',
    radius: '50'
};

function loadOccupation() {
    // Pull in the data from Career Coach
    $.ajax({
        type: "GET",
        url: config.baseUrl + "/packets/"+ packet.earnings +"/",
        data: {'OccupationId':occupation.soc, 'x-ResponseType':'json', 'x-Password':config.password},
        beforeSend: function() {
            $('.container').text('Loading...');
        },
    // Upon success - log the data
    }).success(function(data){
        console.log(data);
        var tenth_percentile = data['10'],
            twentyfifth_percentile = data['25'],
            fiftieth_percentile = data['50'],
            seventyfifth_percentile = data['75'],
            ninetieth_percentile = data['90'];
        $('.container').text("On average, " + occupation.name + " make about $" + fiftieth_percentile + " an hour.");
    });
}

$(document).ready(function(){

    // Load those occs
    loadOccupation();

});