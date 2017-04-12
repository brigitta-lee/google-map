$(document).ready(function($) {

        $('a').on('click', function(e) {
            console.log('I am clicked');
            getCity();
        })

        function getCity() {
            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json',

                data: {
                  'latlng': '46.872146, -113.9939982'
                },

                dataType: 'json',

                success: function(r) {
                  console.log('success', r);
                  //$('.content').text(r.results[1].formatted_address);

                },
                error: function(e) {
                    console.long('error', e);
                }

            });
        }
});
