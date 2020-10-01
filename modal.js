// off the shelf JS dependency-less bootstrap based modal
window.onload = function() {
    var modal = new RModal(document.getElementById('modal'), {
        beforeOpen: function(next) {
            next();
        }
        , beforeClose: function(next) {
            next();
        }
        , dialogClass: 'modal-dialog'
        , dialogOpenClass: 'animated fadeIn'
        , dialogCloseClass: 'animated fadeOut'
        , escapeClose: true
    });
    document.addEventListener('keydown', function(ev) {
        modal.keydown(ev);
    }, false);
    if (!isMobile) {
        document.querySelectorAll('.instr-desktop')[0].style.display = 'none';
    } else {
        document.querySelectorAll('.instr-mobile')[0].style.display = 'none';
    }
    modal.open();
    window.modal = modal;
}