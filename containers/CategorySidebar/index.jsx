import { useEffect } from 'react';
import $ from 'jquery';
import categoryData from 'data/category.data';
import Link from 'next/link';
const CategorySidebar = () => {
	useEffect(() => {
		if (window) {
			if ($(window).width() < 1199) {
				$(
					'.header-2 .navbar .sidebar-bar, .header-2 .navbar .sidebar-back, .header-2 .mobile-search img'
				).on('click', function () {
					if ($('#mySidenav').hasClass('open-side')) {
						$('.header-2 #main-nav .toggle-nav').css('z-index', '99');
					} else {
						$('.header-2 #main-nav .toggle-nav').css('z-index', '1');
					}
				});
				$('.sidebar-overlay').on('click', function () {
					$('.header-2 #main-nav .toggle-nav').css('z-index', '99');
				});
				$('.header-2 #search-overlay .closebtn').on('click', function () {
					$('.header-2 #main-nav .toggle-nav').css('z-index', '99');
				});
				$(
					'.layout3-menu .mobile-search .ti-search, .header-2 .mobile-search .ti-search'
				).on('click', function () {
					$(
						'.layout3-menu #main-nav .toggle-nav, .header-2 #main-nav .toggle-nav'
					).css('z-index', '1');
				});
			}
		}
	});

	function closeNav() {
		document.getElementById('mySidenav').classList.remove('open-side');
	}
	return (
		<div id='mySidenav' className='sidenav'>
			<a
				href='javascript:void(0)'
				className='sidebar-overlay'
				onClick={() => closeNav()}
			/>
			<nav>
				<div onClick={() => closeNav()}>
					<div className='sidebar-back text-start'>
						<i className='fa fa-angle-left pe-2' aria-hidden='true' /> Back
					</div>
				</div>
				<ul id='sub-menu' className='sm pixelstrap sm-vertical'>
					{categoryData.map((item, index) => (
						<li key={index}>
							{' '}
							<Link href={`/catalog/${item.id}`}>
								<a>{item.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default CategorySidebar;
