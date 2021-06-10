$(function() {
        $('input[name="arrival-date"]').focus(function(){
            $('.booking__arrival-down-arrow').text('expand_less')
        }).flatpickr({
            dateFormat: "d.m.Y"
        });







        $('input[name="checkout-date"]').focus(function(){
            $('.booking__checkout-down-arrow').text('expand_less')
        }).flatpickr({
            dateFormat: "d.m.Y"
        });
    
      
  });