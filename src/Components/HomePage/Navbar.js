import React from 'react'

import logo from "../../img/logo.svg"
import blacklogo from "../../img/logo_black.svg"
import "../../css/style.css"
import "../../css/home_1.css"
// import "../../css/bootstrap.css"
// import "../../css/bootstrap.custom.css"
// import "../../css/bootstrap.min.css"

import banner_menu from "../../img/banner_menu.jpg"
import product_placeholder_square_small from "../../img/products/product_placeholder_square_small.jpg"
import thumb1 from "../../img/products/shoes/thumb/1.jpg"
import thumb2 from "../../img/products/shoes/thumb/2.jpg"


const Navbar = () => {
    return (
        <div >
        <header className="version_1">
        <div className="main_nav Sticky">
			<div className="container">
				<div className="row small-gutters">
					<div className="col-xl-3 col-lg-3 col-md-3">
						<nav className="categories menu">
							<ul className="clearfix">
								<li><span>
										<a href="#">
											<span className="hamburger hamburger--spin">
												<span className="hamburger-box">
													<span className="hamburger-inner"></span>
												</span>
											</span>
											Categories
										</a>
									</span>
									<div id="menu">
										<ul>
											<li><span><a href="#0">Collections</a></span>
												<ul>
													<li><a href="listing-grid-1-full.html">Trending</a></li>
													<li><a href="listing-grid-2-full.html">Life style</a></li>
													<li><a href="listing-grid-3.html">Running</a></li>
													<li><a href="listing-grid-4-sidebar-left.html">Training</a></li>
													<li><a href="listing-grid-5-sidebar-right.html">View all Collections</a></li>
												</ul>
											</li>
											<li><span><a href="#">Men</a></span>
												<ul>
													<li><a href="listing-grid-6-sidebar-left.html">Offers</a></li>
													<li><a href="listing-grid-7-sidebar-right.html">Shoes</a></li>
													<li><a href="listing-row-1-sidebar-left.html">Clothing</a></li>
													<li><a href="listing-row-3-sidebar-left.html">Accessories</a></li>
													<li><a href="listing-row-4-sidebar-extended.html">Equipment</a></li>
												</ul>
											</li>
											<li><span><a href="#">Women</a></span>
												<ul>
													<li><a href="listing-grid-1-full.html">Best Sellers</a></li>
													<li><a href="listing-grid-2-full.html">Clothing</a></li>
													<li><a href="listing-grid-3.html">Accessories</a></li>
													<li><a href="listing-grid-4-sidebar-left.html">Shoes</a></li>
												</ul>
											</li>
											<li><span><a href="#">Boys</a></span>
												<ul>
													<li><a href="listing-grid-6-sidebar-left.html">Easy On Shoes</a></li>
													<li><a href="listing-grid-7-sidebar-right.html">Clothing</a></li>
													<li><a href="listing-row-3-sidebar-left.html">Must Have</a></li>
													<li><a href="listing-row-4-sidebar-extended.html">All Boys</a></li>
												</ul>
											</li>
											<li><span><a href="#">Girls</a></span>
												<ul>
													<li><a href="listing-grid-1-full.html">New Releases</a></li>
													<li><a href="listing-grid-2-full.html">Clothing</a></li>
													<li><a href="listing-grid-3.html">Sale</a></li>
													<li><a href="listing-grid-4-sidebar-left.html">Best Sellers</a></li>
												</ul>
											</li>
											<li><span><a href="#">Customize</a></span>
												<ul>
													<li><a href="listing-row-1-sidebar-left.html">For Men</a></li>
													<li><a href="listing-row-2-sidebar-right.html">For Women</a></li>
													<li><a href="listing-row-4-sidebar-extended.html">For Boys</a></li>
													<li><a href="listing-grid-1-full.html">For Girls</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-xl-6 col-lg-7 col-md-6 d-none d-md-block">
						<div className="custom-search-input">
							<input type="text" placeholder="Search over 10.000 products" />
							<button type="submit"><i className="header-icon_search_custom"></i></button>
						</div>
					</div>
					<div className="col-xl-3 col-lg-2 col-md-3">
						<ul className="top_tools">
							<li>
								<div className="dropdown dropdown-cart">
									<a href="cart.html" className="cart_bt"><strong>2</strong></a>
									<div className="dropdown-menu">
										<ul>
											<li>
												<a href="product-detail-1.html">
													<figure><img src="img/products/product_placeholder_square_small.jpg" data-src="img/products/shoes/thumb/1.jpg" alt="" width="50" height="50" className="lazy" /></figure>
													<strong><span>1x Armor Air x Fear</span>$90.00</strong>
												</a>
												<a href="#0" className="action"><i className="ti-trash"></i></a>
											</li>
											<li>
												<a href="product-detail-1.html">
													<figure><img src="img/products/product_placeholder_square_small.jpg" data-src="img/products/shoes/thumb/2.jpg" alt="" width="50" height="50" className="lazy" /></figure>
													<strong><span>1x Armor Okwahn II</span>$110.00</strong>
												</a>
												<a href="0" className="action"><i className="ti-trash"></i></a>
											</li>
										</ul>
										<div className="total_drop">
											<div className="clearfix"><strong>Total</strong><span>$200.00</span></div>
											<a href="cart.html" className="btn_1 outline">View Cart</a><a href="checkout.html" className="btn_1">Checkout</a>
										</div>
									</div>
								</div>
								{/*dropdown-cart*/}
							</li>
							<li>
								<a href="#0" className="wishlist"><span>Wishlist</span></a>
							</li>
							<li>
								<div className="dropdown dropdown-access">
									<a href="account.html" className="access_link"><span>Account</span></a>
									<div className="dropdown-menu">
										<a href="account.html" className="btn_1">Sign In or Sign Up</a>
										<ul>
											<li>
												<a href="track-order.html"><i className="ti-truck"></i>Track your Order</a>
											</li>
											<li>
												<a href="account.html"><i className="ti-package"></i>My Orders</a>
											</li>
											<li>
												<a href="account.html"><i className="ti-user"></i>My Profile</a>
											</li>
											<li>
												<a href="help.html"><i className="ti-help-alt"></i>Help and Faq</a>
											</li>
										</ul>
									</div>
								</div>
								{/*dropdown-access*/}
							</li>
							<li>
								<a href="javascript:void(0);" className="btn_search_mob"><span>Search</span></a>
							</li>
							<li>
								<a href="#menu" className="btn_cat_mob">
									<div className="hamburger hamburger--spin" id="hamburger">
										<div className="hamburger-box">
											<div className="hamburger-inner"></div>
										</div>
									</div>
									Categories
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/*row*/}
			</div>
			<div className="search_mob_wp">
				<input type="text" className="form-control" placeholder="Search over 10.000 products" />
				<input type="submit" className="btn_1 full-width" value="Search" />
			</div>
			{/*search_mobile*/}
		</div>
		{/*main_nav*/}
	</header>
	{/*header*/}

        </div>
    )
}

export default Navbar
