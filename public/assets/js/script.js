/*=====================
     04. Mega menu js
     ==========================*/
// if ($(window).width() > '1200') {
// 	$('#hover-cls').hover(function () {
// 		$('.sm').addClass('hover-unset');
// 	});
// }
// if ($(window).width() > '1200') {
// 	$('#sub-menu > li').hover(
// 		function () {
// 			if ($(this).children().hasClass('has-submenu')) {
// 				$(this).parents().find('nav').addClass('sidebar-unset');
// 			}
// 		},
// 		function () {
// 			$(this).parents().find('nav').removeClass('sidebar-unset');
// 		}
// 	);
// }

/*=====================
     05. Image to background js
     ==========================*/
// $('.bg-top').parent().addClass('b-top');
// $('.bg-bottom').parent().addClass('b-bottom');
// $('.bg-center').parent().addClass('b-center');
// $('.bg_size_content').parent().addClass('b_size_content');
// $('.bg-img').parent().addClass('bg-size');
// $('.bg-img.blur-up').parent().addClass('blur-up lazyload');

// jQuery('.bg-img').each(function () {
// 	var el = $(this),
// 		src = el.attr('src'),
// 		parent = el.parent();

// 	parent.css({
// 		'background-image': 'url(' + src + ')',
// 		'background-size': 'cover',
// 		'background-position': 'center',
// 		display: 'block',
// 	});

// 	el.hide();
// });

/*=====================
     08. toggle nav
     ==========================*/
// $('.toggle-nav').on('click', function () {
// 	$('.sm-horizontal').css('right', '0px');
// });
// $('.mobile-back').on('click', function () {
// 	$('.sm-horizontal').css('right', '-410px');
// });
// var window_width = jQuery(window).width();
// if (window_width > '1199') {
// 	$('#toggle-sidebar').click(function () {
// 		$('.marketplace-sidebar').slideToggle('slow');
// 	});
// }
// if (window_width < '1199') {
// 	$('#toggle-sidebar-res').click(function () {
// 		$('.marketplace-sidebar').addClass('open-side');
// 	});
// 	$('.marketplace-sidebar .sidebar-back').click(function () {
// 		$('.marketplace-sidebar').removeClass('open-side');
// 	});
// }
// $('#toggle_sidebar-res').click(function () {
// 	$('.left-header-sm').addClass('open-side');
// });
// $('.left-header-sm .sidebar-back').click(function () {
// 	$('.left-header-sm').removeClass('open-side');
// });

/*=========================
     09. left category slider height
     ==========================*/
// var window_width = jQuery(window).width();
// if (window_width > '1199') {
// 	var category_height = $('#sidebar-height').height();
// 	$('.height-apply').css({ height: category_height });
// }

/*=====================
     15.Header z-index js
     ==========================*/
// if ($(window).width() < 1199) {
// 	$(
// 		'.header-2 .navbar .sidebar-bar, .header-2 .navbar .sidebar-back, .header-2 .mobile-search img'
// 	).on('click', function () {
// 		if ($('#mySidenav').hasClass('open-side')) {
// 			$('.header-2 #main-nav .toggle-nav').css('z-index', '99');
// 		} else {
// 			$('.header-2 #main-nav .toggle-nav').css('z-index', '1');
// 		}
// 	});
// 	$('.sidebar-overlay').on('click', function () {
// 		$('.header-2 #main-nav .toggle-nav').css('z-index', '99');
// 	});
// 	$('.header-2 #search-overlay .closebtn').on('click', function () {
// 		$('.header-2 #main-nav .toggle-nav').css('z-index', '99');
// 	});
// 	$(
// 		'.layout3-menu .mobile-search .ti-search, .header-2 .mobile-search .ti-search'
// 	).on('click', function () {
// 		$(
// 			'.layout3-menu #main-nav .toggle-nav, .header-2 #main-nav .toggle-nav'
// 		).css('z-index', '1');
// 	});
// }

/*=====================
     17 .category page
     ==========================*/
// $('.collapse-block-title').on('click', function (e) {
// 	e.preventDefault;
// 	var speed = 300;
// 	var thisItem = $(this).parent(),
// 		nextLevel = $(this).next('.collection-collapse-block-content');
// 	if (thisItem.hasClass('open')) {
// 		thisItem.removeClass('open');
// 		nextLevel.slideUp(speed);
// 	} else {
// 		thisItem.addClass('open');
// 		nextLevel.slideDown(speed);
// 	}
// });
// $('.color-selector ul li').on('click', function (e) {
// 	$('.color-selector ul li').removeClass('active');
// 	$(this).addClass('active');
// });
// $('.color-w-name ul li').on('click', function (e) {
// 	$('.color-w-name ul li').removeClass('active');
// 	$(this).addClass('active');
// });
// //list layout view
// $('.list-layout-view').on('click', function (e) {
// 	$('.collection-grid-view').css('opacity', '0');
// 	$('.product-wrapper-grid').css('opacity', '0.2');
// 	$('.shop-cart-ajax-loader').css('display', 'block');
// 	$('.product-wrapper-grid').addClass('list-view');
// 	$('.product-wrapper-grid').children().children().removeClass();
// 	$('.product-wrapper-grid').children().children().addClass('col-lg-12');
// 	setTimeout(function () {
// 		$('.product-wrapper-grid').css('opacity', '1');
// 		$('.shop-cart-ajax-loader').css('display', 'none');
// 	}, 500);
// });
// //grid layout view
// $('.grid-layout-view').on('click', function (e) {
// 	$('.collection-grid-view').css('opacity', '1');
// 	$('.product-wrapper-grid').removeClass('list-view');
// 	$('.product-wrapper-grid').children().children().removeClass();
// 	$('.product-wrapper-grid').children().children().addClass('col-lg-3');
// });
// $('.product-2-layout-view').on('click', function (e) {
// 	if ($('.product-wrapper-grid').hasClass('list-view')) {
// 	} else {
// 		$('.product-wrapper-grid').children().children().removeClass();
// 		$('.product-wrapper-grid').children().children().addClass('col-lg-6');
// 	}
// });
// $('.product-3-layout-view').on('click', function (e) {
// 	if ($('.product-wrapper-grid').hasClass('list-view')) {
// 	} else {
// 		$('.product-wrapper-grid').children().children().removeClass();
// 		$('.product-wrapper-grid')
// 			.children()
// 			.children()
// 			.addClass('col-lg-4 col-6');
// 	}
// });
// $('.product-4-layout-view').on('click', function (e) {
// 	if ($('.product-wrapper-grid').hasClass('list-view')) {
// 	} else {
// 		$('.product-wrapper-grid').children().children().removeClass();
// 		$('.product-wrapper-grid')
// 			.children()
// 			.children()
// 			.addClass('col-xl-3 col-6');
// 	}
// });
// $('.product-6-layout-view').on('click', function (e) {
// 	if ($('.product-wrapper-grid').hasClass('list-view')) {
// 	} else {
// 		$('.product-wrapper-grid').children().children().removeClass();
// 		$('.product-wrapper-grid').children().children().addClass('col-lg-2');
// 	}
// });

/*=====================
     19.Add to cart
     ==========================*/
// $('.product-box button .ti-shopping-cart').on('click', function () {
//     $.notify({
//         icon: 'fa fa-check',
//         title: 'Success!',
//         message: 'Item Successfully added to your cart'
//     }, {
//         element: 'body',
//         position: null,
//         type: "success",
//         allow_dismiss: true,
//         newest_on_top: false,
//         showProgressbar: true,
//         placement: {
//             from: "top",
//             align: "right"
//         },
//         offset: 20,
//         spacing: 10,
//         z_index: 1031,
//         delay: 5000,
//         animate: {
//             enter: 'animated fadeInDown',
//             exit: 'animated fadeOutUp'
//         },
//         icon_type: 'class',
//         template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
//             '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
//             '<span data-notify="icon"></span> ' +
//             '<span data-notify="title">{1}</span> ' +
//             '<span data-notify="message">{2}</span>' +
//             '<div class="progress" data-notify="progressbar">' +
//             '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//             '</div>' +
//             '<a href="{3}" target="{4}" data-notify="url"></a>' +
//             '</div>'
//     });
// });

/*=====================
     20.Add to wishlist
     ==========================*/
// $('.product-box a .ti-heart , .product-box a .fa-heart').on(
// 	'click',
// 	function () {
// 		$.notify(
// 			{
// 				icon: 'fa fa-check',
// 				title: 'Success!',
// 				message: 'Item Successfully added in wishlist',
// 			},
// 			{
// 				element: 'body',
// 				position: null,
// 				type: 'info',
// 				allow_dismiss: true,
// 				newest_on_top: false,
// 				showProgressbar: true,
// 				placement: {
// 					from: 'top',
// 					align: 'right',
// 				},
// 				offset: 20,
// 				spacing: 10,
// 				z_index: 1031,
// 				delay: 5000,
// 				animate: {
// 					enter: 'animated fadeInDown',
// 					exit: 'animated fadeOutUp',
// 				},
// 				icon_type: 'class',
// 				template:
// 					'<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
// 					'<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
// 					'<span data-notify="icon"></span> ' +
// 					'<span data-notify="title">{1}</span> ' +
// 					'<span data-notify="message">{2}</span>' +
// 					'<div class="progress" data-notify="progressbar">' +
// 					'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
// 					'</div>' +
// 					'<a href="{3}" target="{4}" data-notify="url"></a>' +
// 					'</div>',
// 			}
// 		);
// 	}
// );

/*=====================
 21. Dark Light
 ==========================*/

// var body_event = $('body');
// body_event.on('click', '.dark-btn', function () {
// 	$(this).toggleClass('dark');
// 	$('body').removeClass('dark');
// 	if ($('.dark-btn').hasClass('dark')) {
// 		$('.dark-btn').text('Light');
// 		$('body').addClass('dark');
// 	} else {
// 		$('#theme-dark').remove();
// 		$('.dark-btn').text('Dark');
// 	}

// 	return false;
// });

/*=====================
 22. Menu js
 ==========================*/
// function openNav() {
// 	document.getElementById('mySidenav').classList.add('open-side');
// }

// function closeNav() {
// 	document.getElementById('mySidenav').classList.remove('open-side');
// }
// $(function () {
// 	$('#main-menu').smartmenus({
// 		subMenusSubOffsetX: 1,
// 		subMenusSubOffsetY: -8,
// 	});
// 	$('#sub-menu').smartmenus({
// 		subMenusSubOffsetX: 1,
// 		subMenusSubOffsetY: -8,
// 	});
// });
