/* ==================================================
   Filter Works - BRUSHED
================================================== */
//
//works_filter = function (){
//	
//    if($('#projects').length > 0){
//		var $container = $('#projects');
//		
//		$container.imagesLoaded(function() {
//			$container.isotope({
//			  // options
//			  animationEngine: 'best-available',
//			  itemSelector : '.albums-item',
//			  layoutMode : 'fitRows'
//			});
//		});
//		
//		// filter items when filter link is clicked
//		var $optionSets = $('#options .option-set'),
//			$optionLinks = $optionSets.find('a');
//	
//		  $optionLinks.click(function(){
//			var $this = $(this);
//			// don't proceed if already selected
//			if ( $this.hasClass('selected') ) {
//                return false;
//			}
//			var $optionSet = $this.parents('.option-set');
//			$optionSet.find('.selected').removeClass('selected');
//			$this.addClass('selected');
//	  
//			// make option object dynamically, i.e. { filter: '.my-filter-class' }
//			var options = {},
//				key = $optionSet.attr('data-option-key'),
//				value = $this.attr('data-option-value');
//			// parse 'false' as false boolean
//			value = value === 'false' ? false : value;
//			options[ key ] = value;
//			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
//			  // changes in layout modes need extra logic
//			  changeLayoutMode( $this, options )
//			} else {
//			  // otherwise, apply new options
//			  $container.isotope( options );
//			}
//			
//			return false;
//		});
//	};
//};

/* ==================================================
   Filter Works - ABU SHAHARIAR SAJAL (Youtube tut)
================================================== */

works_filter = function () {
    
    // Activate isotope with jQuery code:
    $('#projects').isotope({
        itemSelector: '.albums-item',
        layoutMode: 'fitRows'
    });
    // Isotope click function
    $('#iso-options ul li a').click(function(){
        $('#iso-options ul li a').removeClass('selected');
        $(this).addClass('selected');

        var selector = $(this).attr('data-option-value');
        $('#projects').isotope({
            filter: selector
        });
        return false;
    });


}

$(document).ready(function() {
    
    works_filter();
    
});