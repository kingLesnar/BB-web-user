import React from 'react'
import logo from "../../img/logo.svg"
import blacklogo from "../../img/logo_black.svg"
// import "../../css/bootstrap.custom.min.css"
import "../../css/bootstrap.css"
import "../../css/style.css"
import "../../css/home_1.css"
// import "../../css/bootstrap.css"
// import "../../css/bootstrap.custom.css"
// import "../../css/bootstrap.min.css"
// import "../../img/banner_menu"
import banner_menu from "../../img/banner_menu.jpg"
import product_placeholder_square_small from "../../img/products/product_placeholder_square_small.jpg"
import thumb1 from "../../img/products/shoes/thumb/1.jpg"
import thumb2 from "../../img/products/shoes/thumb/2.jpg"


const Header = () => {
    return (
        <header className="version_1">
		<div className="layer"> </div> {/*Mobile menu overlay mask*/}
		<div className="main_header">
			<div className="container">
				<div className="row small-gutters">
					<div className="col-xl-3 col-lg-3 d-lg-flex align-items-center">
						<div id="logo">
							<a href="index.html"><img src={logo} alt="" width="100" height="35" /></a>
						</div>
					</div>
					<nav className="col-xl-6 col-lg-7">
						<a className="open_close" href="javascript:void(0);">
							<div className="hamburger hamburger--spin">
								<div className="hamburger-box">
									<div className="hamburger-inner"></div>
								</div>
							</div>
						</a>
						{/*Mobile menu button*/}
						<div className="main-menu">
							<div id="header_menu">
								<a href="index.html"><img src={blacklogo} alt="" width="100" height="35" /></a>
								<a href="#" className="open_close" id="close_in"><i className="ti-close"></i></a>
							</div>
							<ul>
								<li className="submenu">
									<a href="javascript:void(0);" className="show-submenu">Home</a>
									<ul>
										<li><a href="index.html">Slider</a></li>
										<li><a href="index-2.html">Video Background</a></li>
										<li><a href="index-3.html">Vertical Slider</a></li>
										<li><a href="index-4.html">GDPR Cookie Bar</a></li>
									</ul>
								</li>
								<li className="megamenu submenu">
									<a href="javascript:void(0);" className="show-submenu-mega">Pages</a>
									<div className="menu-wrapper">
										<div className="row small-gutters">
											<div className="col-lg-3">
												<h3>Listing grid</h3>
												<ul>
													<li><a href="listing-grid-1-full.html">Grid Full Width</a></li>
													<li><a href="listing-grid-2-full.html">Grid Full Width 2</a></li>
													<li><a href="listing-grid-3.html">Grid Boxed</a></li>
													<li><a href="listing-grid-4-sidebar-left.html">Grid Sidebar Left</a></li>
													<li><a href="listing-grid-5-sidebar-right.html">Grid Sidebar Right</a></li>
													<li><a href="listing-grid-6-sidebar-left.html">Grid Sidebar Left 2</a></li>
													<li><a href="listing-grid-7-sidebar-right.html">Grid Sidebar Right 2</a></li>
												</ul>
											</div>
											<div className="col-lg-3">
												<h3>Listing row &amp; Product</h3>
												<ul>
													<li><a href="listing-row-1-sidebar-left.html">Row Sidebar Left</a></li>
													<li><a href="listing-row-2-sidebar-right.html">Row Sidebar Right</a></li>
													<li><a href="listing-row-3-sidebar-left.html">Row Sidebar Left 2</a></li>
													<li><a href="listing-row-4-sidebar-extended.html">Row Sidebar Extended</a></li>
													<li><a href="product-detail-1.html">Product Large Image</a></li>
													<li><a href="product-detail-2.html">Product Carousel</a></li>
													<li><a href="product-detail-3.html">Product Sticky Info</a></li>
												</ul>
											</div>
											<div className="col-lg-3">
												<h3>Other pages</h3>
												<ul>
													<li><a href="cart.html">Cart Page</a></li>
													<li><a href="checkout.html">Check Out Page</a></li>
													<li><a href="confirm.html">Confirm Purchase Page</a></li>
													<li><a href="account.html">Create Account Page</a></li>
													<li><a href="track-order.html">Track Order</a></li>
													<li><a href="help.html">Help Page</a></li>
													<li><a href="help-2.html">Help Page 2</a></li>
													<li><a href="leave-review.html">Leave a Review</a></li>
												</ul>
											</div>
											<div className="col-lg-3 d-xl-block d-lg-block d-md-none d-sm-none d-none">
												<div className="banner_menu">
													<a href="#0">
														<img src={banner_menu} data-src={banner_menu} width="400" height="550" alt="" className="img-fluid lazy" />
													</a>
												</div>
											</div>
										</div>
										{/*row*/}
									</div>
                                    {/*menu-wrapper*/} 
								</li>
								<li className="submenu">
									<a href="javascript:void(0);" className="show-submenu">Extra Pages</a>
									<ul>
										<li><a href="header-2.html">Header Style 2</a></li>
										<li><a href="header-3.html">Header Style 3</a></li>
										<li><a href="header-4.html">Header Style 4</a></li>
										<li><a href="header-5.html">Header Style 5</a></li>
										<li><a href="404.html">404 Page</a></li>
										<li><a href="sign-in-modal.html">Sign In Modal</a></li>
										<li><a href="contacts.html">Contact Us</a></li>
										<li><a href="about.html">About 1</a></li>
										<li><a href="about-2.html">About 2</a></li>
										<li><a href="modal-advertise.html">Modal Advertise</a></li>
										<li><a href="modal-newsletter.html">Modal Newsletter</a></li>
									</ul>
								</li>
								<li>
									<a href="blog.html">Blog</a>
								</li>
								<li>
									<a href="#0">Buy Template</a>
								</li>
							</ul>
						</div>
						{/*main-menu*/}
					</nav>
					<div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-right">
						<a className="phone_top" href="tel://9438843343"><strong><span>Need Help?</span>+94 423-23-221</strong></a>
					</div>
				</div>
				{/*row*/}
			</div>
		</div>
		{/*main_header*/}
        </header>

    )
}

export default Header
