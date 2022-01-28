

$(window).on('load resize', function() {
   
    //Add/remove class based on browser size when load/resize
    var w = $(window).width();

	if(w >= 1200) {
	    // if larger 
	    $('#docs-sidebar').addClass('sidebar-visible').removeClass('sidebar-hidden');
	} else {
	    // if smaller
	    $('#docs-sidebar').addClass('sidebar-hidden').removeClass('sidebar-visible');
	}
});


$(document).ready(function() {

	function logoToHome(){ var url = 'https://continuousindex.org/'; window.open(url, '_self'); }
	$(document).on('click', '.ci_logo_head', function(e){ e.preventDefault(); logoToHome(); });
  
	function ToDEX(){ var url = 'https://dex.continuousindex.org/'; window.open(url, '_self'); }
	$(document).on('click', '.ci_dex_head', function(e){ e.preventDefault(); ToDEX(); });
  
  function ToDocs(){ var url = 'https://continuousindex.org/docs'; window.open(url, '_self'); }
	$(document).on('click', '.ci_docs', function(e){ e.preventDefault(); ToDocs(); });
  

    
  
  
	/* ====== Toggle Sidebar ======= */
	
	$('#docs-sidebar-toggler').on('click', function(){
	
		if ( $('#docs-sidebar').hasClass('sidebar-visible') ) {

			  $("#docs-sidebar").removeClass('sidebar-visible').addClass('sidebar-hidden');
			
			
		} else {

			  $("#docs-sidebar").removeClass('sidebar-hidden').addClass('sidebar-visible');
			
		}
			
    });
    
  
  

    
    /* ===== Smooth scrolling ====== */
    $(document).on( 'click', '#docs-sidebar a.scrollto, .scrollto', function(e){
      //store hash
      var target = this.hash;    
      //e.preventDefault();
            $('body').scrollTo(target, 800, {offset: -69, 'axis':'y'});

        //Collapse sidebar after clicking
        if ($('#docs-sidebar').hasClass('sidebar-visible') && $(window).width() < 1200){
                $('#docs-sidebar').removeClass('sidebar-visible').addClass('slidebar-hidden');
        }
    });

	
    ///////////////////////////////////////////////////////
  
  
  
        document.onmouseover = function() {//User's mouse is inside the page.
                window.innerDocClick = true;
        }
        document.onmouseleave = function() {//User's mouse has left the page.
                window.innerDocClick = false;
        }	
        
    //goBack navigator button click
    $(window).on('hashchange', function(e){

        if (window.innerDocClick) {
                window.innerDocClick = false;
        } else { 							
                if (window.location.hash == '') {
                    var target = '#introduction';
                    $('body').scrollTo(target, 800, {offset: -69, 'axis':'y'});							
                } 
                else {
                    var target = window.location.hash;
                    $('body').scrollTo(target, 800, {offset: -69, 'axis':'y'});						

                }
        }			

    }); //on hashchange
    ///////////////////////////////////////////////////////
	
    
	/* wmooth scrolling on page load if URL has a hash */
	if(window.location.hash) {
			var urlhash = window.location.hash;
			$('body').scrollTo(urlhash, 800, {offset: -100, 'axis':'y'});
	}
	
	
	/* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    }); 


    //TITLE tLink ///////////////////////////////////////////////////////
    //$('body').on('click', '.tLink', function() {
    $('.tLink').on('click', function(e){
        var hash = $(this).parent("h2").attr("id");
        var allurl = window.location.href;
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/')+1);
        copyToClipBoard(allurl+"#"+hash );
    });
    ////////////////////////////////////////////////////////////////////
    


});


//FUNCTIONS //////////////////////////////////




/*Set document height and background*/
function setDocumentHeight(){

  var heightAll = $("#AllContent").height() + 80;
  var heightDoc = window.innerHeight;
  var height    = Math.max(heightAll, heightDoc);

  $(".bg, .bg_before").css({"height":height});
}

$(document).click(function(e) { 
    // Check for left button
    if (e.button == 0) { setDocumentHeight(); }
});

$(window).scroll(function(e){ setDocumentHeight(); });
$(window).resize(function(e) { setDocumentHeight(); });

//onLoad
setDocumentHeight();


// copy to clipboard function

function copyToClipBoard(copyText) {
  const el = document.createElement('textarea');
  el.value = copyText;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
function copyToClipBoardInput( $input ) {
	$input.focus();
	$input.select();
	$input.setSelectionRange(0, 99999); /* For mobile devices */
	var successful = document.execCommand('copy');  	
}

function timestampToDate(ts){
    ts = ts*1000;
    var date = new Date(ts);
    return date.toUTCString();
}


