    $.ajax({
        type: "post",
        url: 'url.com/test',
        data: $('#form').serialize(),
        datatype: 'JSON',
        beforeSend: function () {

        },
        statusCode: {
            400: function () {

            },
            401: function (data) {

            },
            500: function (data) {

            }
        },
        success: function (data) {

        }
    });
