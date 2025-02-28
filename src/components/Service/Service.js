import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
	return (
		<React.Fragment>
			<section className="seo_service_area sec_pad">
				<div className="container">
					<SeoTitle
						Title="Our focus areas"
						// TitleP="We focus on different aspects of product "
					/>
					<div className="row seo_service_info">
						<Fade bottom duration={500}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon1.png')} alt="" />
									<h4>Product Management</h4>
									<p>
										Oversees the development, strategy, and successful launch of
										products, while ensuring they meet customer needs, business
										goals, and market demand.
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={700}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon2.png')} alt="" />
									<h4>Product Design</h4>
									<p>
										The process of creating functional and aesthetically
										pleasing products that meet user needs, solve problems, and
										deliver a positive user experience.
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={1000}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon5.png')} alt="" />
									<h4>Product Marketing</h4>
									<p>
										Encompasses the strategic planning, execution, and promotion
										of products, aiming to generate customer interest, drive
										sales, and create brand awareness.
									</p>
								</div>
							</div>
						</Fade>
						{/* <div className="col-lg-12 text-center mt_40">
							<a href=".#" className="seo_btn seo_btn_one btn_hover">
								All Features
							</a>
						</div> */}
					</div>
				</div>
			</section>
			<section className="seo_features_one sec_pad">
				<div className="container">
					<div className="row flex-row-reverse">
						<div className="col-lg-6">
							<div className="seo_features_img">
								<div className="round_circle"></div>
								<div className="round_circle two"></div>
								<img src={require('../../img/seo/features_img.png')} alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<Fade bottom cascade>
								<div className="seo_features_content">
									<h2>Further your passion for product and build with us</h2>
									<p>
										At Product Space, we aim to become future leaders in product
										by gaining hands-on experience in our capstone projects as
										well as demonstrating a sense of community, empathy, and
										growth—our three core values that we uphold throughout our
										organization.
									</p>
									<p>
										Explore different product paths by joining us in our general
										body meetings as well as introductory workshops. In these
										meetings, you will find problems and deliver real solutions
										using your product skills.
									</p>
									{/* <div className="media seo_features_item">
										<div className="icon">
											<img src={require('../../img/seo/icon4.png')} alt="" />
										</div>
										<div className="media-body">
											<h3>Reporting & Analysis</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt
											</p>
										</div>
									</div>
									<div className="media seo_features_item">
										<div className="icon two">
											<img src={require('../../img/seo/icon3.png')} alt="" />
										</div>
										<div className="media-body">
											<h3>Reporting & Analysis</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt
											</p>
										</div>
									</div> */}
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
			<section className="seo_features_one sec_pad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="seo_features_img seo_features_img_two">
								<div className="round_circle"></div>
								<div className="round_circle two"></div>
								<img
									src={require('../../img/seo/features_img_two.png')}
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<Fade bottom cascade>
								<div className="seo_features_content">
									<h2 className="wow fadeInUp">Our Fellowship Program</h2>
									<h6 className="wow fadeInUp">
										Join our high growth training program and prepare for
										recruitment and interviews.
									</h6>
									<p className="wow fadeInUp">
										Our fellowship program, which takes place over the course of a
										semester, will not only introduce you to product management
										but also other like-minded fellows that want to pursue their
										passion in product. You will also be mentored as you prepare
										for professional experience, whether it be your first
										internship or a full-time position!
									</p>
									{/* <a
										href=".#"
										className="seo_btn seo_btn_one btn_hover wow fadeInUp"
									>
										Learn More
									</a> */}
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Service;
