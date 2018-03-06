$(document).ready(function() {
    $('#monitor').DataTable();
});
//modal show
$(document).ready(function(){
    $('#request_modal').modal("attach events", "#request_button", "show");
});

$(document).ready(function(){
    $('#edit_modal').modal("attach events", "a#edit_button.ui.circular.icon.blue.button", "show");
});
$(document).ready(function(){
    $('.sidebarmessage').first().sidebar('attach events', '.ui.inverted.blue.icon.button', 'show');
});
$('.workload').modal('attach events', ".ui.green.icon.button","show");

//validation for request and edit form
$('#request_form')
.form({
    fields: {
        description : {
            identifier : 'description',
            rules : [{
                type : 'empty',
                prompt: 'Fill up details Field!'
            }] 
        },
        category : {
            identifier : 'category',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Please select a Category!'
                }
            ]
        }
    }
}); 

$('#edit_form').form({
    fields: {
        description : {
            identifier : 'description',
            rules : [{
                type : 'empty',
                prompt : 'Fill up details Field!'
            }]
        },
        category : {
            identifer : 'category',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Please select a Category!'
                }
            ]
        }
    }
});

$('#cancel').click(function(){
    $('#request_form')[0].reset();
});


// modal - dropdown
$('.ui.status').on('change', function(){
    if($(this).val() === 'Closed'){
        $('#Closed').modal('show');
    }
    else if($(this).val() === 'Backlogs'){
        $('#Backlogs').modal('show');
    }
});

$("select option:contains('Open Ticket')").attr("disabled", "disabled");
