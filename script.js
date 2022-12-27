$('#send').hide();
$('input').on('input', function(e) {
    if(e.target.value===''){
        $('#like').show();
        $('#send').hide();
    }else{
        $('#like').hide();
        $('#send').show();
    }
    
  });