(function ($) {
    $('.blaze-demo-importer-modal-button').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('blaze-demo-importer-modal-opened');
        var modalId = $(this).attr('href');
        $(modalId).fadeIn();
    });

    $('.blaze-demo-importer-modal-back, .blaze-demo-importer-modal-cancel').on('click', function (e) {
        $('body').removeClass('blaze-demo-importer-modal-opened');
        $('.blaze-demo-importer-modal').hide();
        $("html, body").animate({scrollTop: 0}, "slow");
    });

    $('body').on('click', '.blaze-demo-importer-import-demo', function () {
        var $el = $(this);
        var demo = $(this).attr('data-demo-slug');
        var reset = $('#checkbox-reset-' + demo).is(':checked');
        var reset_message = '';

        if (reset) {
            reset_message = blaze_demo_importer_ajax_data.reset_database;
            var confirm_message = blaze_demo_importer_ajax_data.reset_database_confirmation;
        } else {
            var confirm_message = blaze_demo_importer_ajax_data.import_process_confirmation;
        }

        $import_true = confirm(confirm_message);
        if ($import_true == false)
            return;

        $("html, body").animate({scrollTop: 0}, "slow");
        $('#blaze-demo-importer-modal-' + demo).hide();
        $('#blaze-demo-importer-import-progress').show();
        $('#blaze-demo-importer-import-progress .blaze-demo-importer-import-progress-message .message-item:last-child').html(blaze_demo_importer_ajax_data.prepare_importing).fadeIn();
        var info = {
            demo: demo,
            reset: reset,
            next_step: 'blaze_demo_importer_install_demo',
            next_step_message: reset_message
        };

        setTimeout(function () {
            do_ajax(info);
        }, 2000);
    });

    function do_ajax(info) {
        if (info.next_step) {
            var data = {
                action: info.next_step,
                demo: info.demo,
                reset: info.reset,
                security: blaze_demo_importer_ajax_data.nonce
            };
            jQuery.ajax({
                url: ajaxurl,
                type: 'post',
                data: data,
                beforeSend: function () {
                    if (info.next_step_message) {
                        $('#blaze-demo-importer-import-progress .blaze-demo-importer-import-progress-message .message-item:last-child').hide().html('').fadeIn().html(info.next_step_message);
                        $('#blaze-demo-importer-import-progress .progress-bar-note').hide().html('').fadeIn().html(info.next_step_message);
                    }
                },
                success: function (response) {
                    var info = JSON.parse(response);
                    if (!info.error) {
                        if (info.complete_message) {
                            $('#blaze-demo-importer-import-progress .blaze-demo-importer-import-progress-message .message-item:last-child').hide().html('').fadeIn().html(info.complete_message).addClass('complete-item').after('<div class="message-item"></div>');
                            $('#blaze-demo-importer-import-progress .progress-bar-health').hide().html('').fadeIn().html(info.progress + '<span>%</span>');
                            $('.blaze-demo-importer-import-progress-bar .loaderBar' ).animate({width:info.progress + "%"})
                            $('#blaze-demo-importer-import-progress .progress-bar-note').hide().html('').fadeIn().html(info.complete_message);
                        }
                        setTimeout(function () {
                            do_ajax(info);
                        }, 2000);
                    } else {
                        $('#blaze-demo-importer-import-progress .blaze-demo-importer-import-progress-message .message-item:last-child').html(info.error_message).addClass('error-item');
                        $('#blaze-demo-importer-import-progress .progress-bar-health').hide().html('').fadeIn().html(info.progress + '<span>%</span>');
                        $('.blaze-demo-importer-import-progress-bar .loaderBar' ).animate({width:info.progress + "%"})
                        $('#blaze-demo-importer-import-progress .progress-bar-note').html(info.error_message).addClass('error-note');
                        $('#blaze-demo-importer-import-progress').addClass('import-error');
                    }
                },
                error: function (xhr, status, error) {
                    var errorMessage = xhr.status + ': ' + xhr.statusText
                    $('#blaze-demo-importer-import-progress .blaze-demo-importer-import-progress-message .message-item:last-child').html(blaze_demo_importer_ajax_data.import_error).addClass('error-item');
                    $('#blaze-demo-importer-import-progress .progress-bar-health').hide().html('').fadeIn().html(info.progress + '<span>%</span>');
                    $('.blaze-demo-importer-import-progress-bar .loaderBar' ).animate({width:info.progress + "%"})
                    $('#blaze-demo-importer-import-progress .progress-bar-note').html(blaze_demo_importer_ajax_data.import_error).addClass('error-note');
                    $('#blaze-demo-importer-import-progress').addClass('import-error');
                }
            });
        } else {
            $('#blaze-demo-importer-import-progress .blaze-demo-importer-import-progress-message .message-item:last-child').hide().html('').fadeIn().html(blaze_demo_importer_ajax_data.complete_message).addClass('complete-item')
            $('#blaze-demo-importer-import-progress .blaze-demo-importer-import-progress-wrap').append(blaze_demo_importer_ajax_data.import_success);
            $('#blaze-demo-importer-import-progress .progress-bar-health').hide().html('').fadeIn().html(info.progress + '<span>%</span>');
            $('.blaze-demo-importer-import-progress-bar .loaderBar' ).animate({width:info.progress + "%"})
            $('#blaze-demo-importer-import-progress .progress-bar-note').html(blaze_demo_importer_ajax_data.import_success_note);
            $('#blaze-demo-importer-import-progress').addClass('import-complete import-success');
        }
    }
})(jQuery);
