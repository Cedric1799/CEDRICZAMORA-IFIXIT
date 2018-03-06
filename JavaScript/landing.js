//sidebar
$(function(){
  $('.sidebar3').first().sidebar('attach events', '.ui.blue.icon.button.leftnormal', 'show')
});

//message sidebar
$(function(){
  $('.sizedsidebar5').first().sidebar('attach events', '.verywidesidebar', 'show');
});

//workload modal
$(document).ready(function(){
  $(".ui.modal.small.workload").modal("attach events", "a#staff.item", "show");
});

  $(document).ready(function () {
      $('#request').click(function(){
        $('.ui.large.view').modal('setting', 'transition', 'fade', {
          blurring: true,
        }).modal('show')
      });
      $('#cancel').click(function(){
        var msg = confirm('Are you sure you want to cancel request?');
        if (msg == true) {
          $('.ui.large.view').modal('hide');
        }
      });
  });
//dropdown (logout)//
$('.dropdown')
.dropdown({
    
transition: 'drop' 

});

//modal view(landing page)//
// $(document).ready(function(){
// $("#ticket")
//   .modal ({
//     blurring: false ,
//     closable  : true,
//     transition:('drop'),
//     onDeny    : function(){
//       window.confirm('Are you sure?!'); 
//       return true;
//     },
//     onApprove : function() {
//       window.alert('Approved!');
//     },
//   })

//   .modal("attach events", "a#message.ui.button.view", "show");
// });


