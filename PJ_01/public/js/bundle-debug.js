jQuery(document).ready(function(){
  $('body').click(function(event){
    // alert($(event.target).prop("tagName"))
    var img_index;
    if($(event.target).prop("tagName")=="LI"){
      var src = 'images/img-slider/'+$(event.target).attr('class')+'.png';
      $('.img-js img').attr('src', src);
      img_index ="." +$(event.target).attr('class')
      $('.four li').not(img_index).attr('style',  'background-color: #1e1e20');
      $(img_index).attr('style',  'background-color:white');
    }	
  });
  var index = 0;
  setInterval(function () {
    index++;
    if(index==7)
      index = 1;
    var src = 'images/img-slider/s'+index+'.png';
    $('.img-js img').attr('src', src);
    var dot_index = ".s"+index;
    $('.four li').not(dot_index).attr('style',  'background-color: #1e1e20');
    $(dot_index).attr('style',  'background-color:white');
  },1500);
  // event.preventDefault();
  $('.ic .ic__child').click(function(event){
    
    $('.ic__child').not($(this).find('.ic__child')).css({
        'opacity':'0.6'
      });
      var x = $(this).index('.ic__child')+1;
      console.log(x);
    // console.log($(this).index('.ic__child'));
    $(event.target).parent(this).css({
      'opacity':'1'
    });
    $('.img__child').eq(x-1).show(600);
    $('.img__child').not($('.img__child').eq(x-1)).hide(600);
  });
});