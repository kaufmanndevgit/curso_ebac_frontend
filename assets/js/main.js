$(document).ready(function() {
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fas fa-check"></li></li>');
        $(this).val('');
    } )

    $('ul').on('click','.fa-check', function(){
    $(this).parent('li').toggleClass('checked');
    })

})