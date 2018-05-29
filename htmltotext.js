(function ($) {
    $('#convert').click(function() {
        // console.log('click');
        // If there's html to convert, call function and provide contents.
        var html = $('#html_input').val();
        if (html.length >= 1) {
            // console.log('There is content to convert, proceeding... ');
            // html.replace("<", "&lt;");
            html = html.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            // console.log(html);
            // Wrap in code tags.
            if ($('#wrap_in_code').is(":checked")) {
                // console.log('wrap in code checked');
                html = '<code>' + html + '</code>';
            }
            // console.log(html);
            // Escape double quotes with slashes
            // for JSON format.
            if ($('#escape_double_quotes').is(":checked")) {
                html = html.replace(/\"/g, '\\"');
            }
            // console.log(html);
            $('#html_input').val(html);
            if ($('#copy_to_clipboard').is(":checked")) {
                // console.log('autocopy checked');
                $('#html_input').select();
                document.execCommand('copy');
                $('#html_input').val('');
            } else {
                // console.log('autocopy NOT checked');
                $('#copy')
                    .prop('disabled', false)
                    .click(function(e) {
                        // Copy the result to the clipboard on click.
                        $('#html_input').select();
                        document.execCommand('copy');
                        $('#html_input').val('');
                        // Remove event listener
                        $(e.currentTarget).unbind('click');
                    });
            }
        }
    });
})(jQuery);
