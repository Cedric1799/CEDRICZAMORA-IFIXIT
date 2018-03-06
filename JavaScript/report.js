$(document).ready(function(){
    $(".ui.modal.standard").modal("attach events", ".ui.button.create", "show");
});
$(document).ready(function(){
    $(".ui.modal.large").modal("attach events", "button#message.tiny.ui.button.view", "show");
});
function printDiv() {
 window.frames["print_frame"].document.body.innerHTML = document.getElementById("print").innerHTML;
 window.frames["print_frame"].window.focus();
 window.frames["print_frame"].window.print();
}

$(document).ready(function(){
    $('#context2 .menu .item')
    .tab({
        // special keyword works same as above
        context: 'parent'
    });  
}); 