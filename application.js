// Career Coach configuration data
config = {
    password: '28562df86666dc6ea1d24f0edaf3f981279b883e3edd24e18ea3403e746cd307',
    baseUrl: 'http://usdemo.emsicareercoach.com',
};

// Packets of Career Coach data
packet = {
    occ_description: 'occupationdescription',
    occ_earnings: 'occupationearnings',
    occ_employment: 'occupationemployment',
    occ_employmentSuccinct: 'occupationemploymentsuccinct'
}

// Object for the occupation you want data on
occupation = {
    name: 'Computer Programers',
    soc: '15-1131.00',
    zip: '83843',
    radius: '50'
};

var url_data = {'OccupationId':occupation.soc, 'x-ResponseType':'json', 'x-Password':config.password};

function occDescription() {
    // Pull in the description of the occupation
    $.ajax({
        type: "GET",
        url: config.baseUrl + "/packets/" + packet.occ_description + "/",
        data: url_data,
        beforeSend: function() {
            $('.container').hide();
        },
        complete: function() {
            $('.container').fadeIn(1000);
        },
    // Upon success - log the occupation description, education level, and entry requirements
    }).success(function(data){
        console.log(data);
        var name = data['Name'],
            description = data['Description'],
            edLevel = data['EdLevel'],
            entryRequirements = data['EntryRequirements'];
        $('.occ_name').append(name);
        $('.occ_desc').append(description);
    });
} occDescription();

function occEarnings() {
    // Pull in the earnings data for the occupation
    $.ajax({
        type: "GET",
        url: config.baseUrl + "/packets/" + packet.occ_earnings + "/",
        data: url_data,
    // Upon success - log the data on wages
    }).success(function(data){
        console.log(data);
        var ten = data['10'],
            twenty_five = data['25'],
            fifty = data['50'],
            seventy_five = data['75'],
            ninety = data['90'];
        $('.occ_earn').html('<span class="data">'+ occupation.name +'</span> make about <span class="data">$' + fifty + '</span> an hour in your area.');
    });
} occEarnings();

function occEmployment() {
    // Pull in the employment data on the occupation
    $.ajax({
        type: "GET",
        url: config.baseUrl + "/packets/" + packet.occ_employment + "/",
        data: url_data,
    // Upon success - log the data
    }).success(function(data){
        console.log(data);
        var annOpen = data['AnnualOpenings'],
            curEmp = data['CurrentEmployment'],
            empTrend = data['EmploymentTrend'];
    });
} occEmployment();

$(document).ready(function(){



});