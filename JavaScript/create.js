
	   // Get the modal
var modals = document.getElementById('modal-request');

    // Get the button that opens the modal
var create = document.querySelector('create_btn');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    [].forEach.call(create_btn, function(create_btn) {
            create_btn.onclick = function() {
                modal.style.display = "block";
            }
        })

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    