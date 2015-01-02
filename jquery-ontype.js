/*!
 * jQuery onType Plugin 1.0
 * https://github.com/vahidd/jQuery-onType-Event
 *
 * Copyright Vahidd
 * Released under the MIT license
 */
(function( $ ){
	"use strict";
	$.fn.onType = function( callback, userOptions ){
		callback = callback ? callback : $.noop;
		var
			keyCode = {
				188: 'COMMA',
				46 : 'DELETE',
				40 : 'DOWN',
				35 : 'END',
				13 : 'ENTER',
				27 : 'ESCAPE',
				36 : 'HOME',
				37 : 'LEFT',
				34 : 'PAGE_DOWN',
				33 : 'PAGE_UP',
				190: 'PERIOD',
				39 : 'RIGHT',
				38 : 'UP'
			},
			settings = $.extend(
				{},
				{
					delay: 300
				},
				userOptions ),
			apply = function( event, timeout ){
				var $this = $(this);
				if( timeout ){
					clearTimeout( $this.data( '_type_timeout' ) );
					$this.data( '_type_timeout', setTimeout( function(){
						callback.call( this, event );
					}, settings.delay ) );
				} else{
					callback.call( this, event );
				}
			};
		$( this ).on( 'keydown', function( event ){
			event.keyName = keyCode[event.keyCode];
			apply.call( this, event, !keyCode[event.keyCode] );
		} );
		return this;
	};
})( jQuery );