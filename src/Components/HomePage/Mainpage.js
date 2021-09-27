import React from 'react'
import backgroundImg1 from "../../img/slides/slide_home_1.jpg"
import backgroundImg2 from "../../img/slides/slide_home_2.jpg"
import backgroundImg3 from "../../img/slides/slide_home_3.jpg"
import banner1 from "../../img/banner_1.jpg"
import banner2 from "../../img/banner_2.jpg"
import banner3 from "../../img/banner_3.jpg"
import banners_cat_placeholder from"../../img/banners_cat_placeholder.jpg"
import shoes1 from "../../img/products/shoes/1.jpg"
import shoes1b from "../../img/products/shoes/1_b.jpg"
import shoes2 from "../../img/products/shoes/2.jpg"
import shoes2b from "../../img/products/shoes/2_b.jpg"
import shoes3 from "../../img/products/shoes/3.jpg"
import shoes3b from "../../img/products/shoes/3_b.jpg"
import shoes4 from "../../img/products/shoes/4.jpg"
import shoes4b from "../../img/products/shoes/4_b.jpg"
import shoes5 from "../../img/products/shoes/5.jpg"
import shoes5b from "../../img/products/shoes/5_b.jpg"
import shoes6 from "../../img/products/shoes/6.jpg"
import shoes6b from "../../img/products/shoes/6_b.jpg"
import shoes7 from "../../img/products/shoes/7.jpg"
import shoes7b from "../../img/products/shoes/7_b.jpg"
import shoes8 from "../../img/products/shoes/8.jpg"
import shoes8b from "../../img/products/shoes/8_b.jpg"
import product_placeholder_square_medium from "../../img/products/product_placeholder_square_medium.jpg"
import blog_thumb_placeholder from "../../img/blog-thumb-placeholder.jpg"
import blog_thumb_4 from "../../img/blog-thumb-4.jpg"
// import backgroundImg4 from "../../img/slides/slide_home_4.jpg"
import "../../css/style.css"
import "../../css/bootstrap.css"


// js
// import  "../../js/carousel-home"
// import "../../js/carousel-home-2"
// import "../../js/carousel_with_thumbs"
// import "../../js/owl.carousel"
// import "../../js/main"
// import "../../js/bootstrap.bundle"
// import "../../js/common_scripts"


const Mainpage = () => {
    return (
        <div>
            <div>
                <div id="carousel-home">
                    <div  className="owl-carousel owl-theme">
                        <div className="owl-slide cover" style={{backgroundImage: `url(${backgroundImg2})`}}>
                            <div className="opacity-mask d-flex align-items-center" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                                <div className="container">
                                    <div className="row justify-content-center justify-content-md-end">
                                        <div className="col-lg-6 static">
                                            <div className="slide-text text-right white">
                                                <h2 className="owl-slide-animated owl-slide-title">Attack Air<br />Max 720 Sage Low</h2>
                                                <p className="owl-slide-animated owl-slide-subtitle">
                                                    Limited items available at this price
                                                </p>
                                                <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*owl-slide*/}
                
                {/*owl-slide*/}
                
		    </div>
		    <div id="icon_drag_mobile"></div>
            <ul id="banners_grid" class="clearfix">
			<li>
				<a href="#0" class="img_container">
					<img src={banners_cat_placeholder} data-src={banner1} alt="" class="lazy" />
					<div class="short_info opacity-mask" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
						<h3>Men's Collection</h3>
						<div><span class="btn_1">Shop Now</span></div>
					</div>
				</a>
			</li>
			<li>
				<a href="#0" class="img_container">
					<img src={banners_cat_placeholder} data-src={banner2} alt="" class="lazy" />
					<div class="short_info opacity-mask" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
						<h3>Womens's Collection</h3>
						<div><span class="btn_1">Shop Now</span></div>
					</div>
				</a>
			</li>
			<li>
				<a href="#0" class="img_container">
					<img src={banners_cat_placeholder} data-src={banner3} alt="" class="lazy" />
					<div class="short_info opacity-mask" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
						<h3>Kids's Collection</h3>
						<div><span class="btn_1">Shop Now</span></div>
					</div>
				</a>
			</li>
		</ul>   
		</div>
        
        
    )
}

export default Mainpage


// {
//     <div class="owl-slide cover" style={{backgroundImage: `url(${backgroundImg3})`}}>
//     <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(255, 255, 255, 0.5)">
//         <div class="container">
//             <div class="row justify-content-center justify-content-md-start">
//                 <div class="col-lg-12 static">
//                     <div class="slide-text text-center black">
//                         <h2 class="owl-slide-animated owl-slide-title">Attack Air<br />Monarch IV SE</h2>
//                         <p class="owl-slide-animated owl-slide-subtitle">
//                             Lightweight cushioning and durable support with a Phylon midsole
//                         </p>
//                         <div class="owl-slide-animated owl-slide-cta"><a class="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/*owl-slide*/}
// </div>

// }


// {
//     <div class="owl-slide cover" style={{backgroundImage: `url(${backgroundImg1})`}}>
//                     <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
//                         <div class="container">
//                             <div class="row justify-content-center justify-content-md-start">
//                                 <div class="col-lg-6 static">
//                                     <div class="slide-text white">
//                                         <h2 class="owl-slide-animated owl-slide-title">Attack Air<br />VaporMax Flyknit 3</h2>
//                                         <p class="owl-slide-animated owl-slide-subtitle">
//                                             Limited items available at this price
//                                         </p>
//                                         <div class="owl-slide-animated owl-slide-cta"><a class="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
// }
