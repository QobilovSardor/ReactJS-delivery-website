import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
SwiperCore.use([Pagination]);

function ProductItem(props) {
	const {data} = props;

	return (
		<>
			<section className="product-slider">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="title">
								<h1 className="title-text fs24 fw600">Акции</h1>
							</div>
						</div>
					</div>

					<Swiper
						slidesPerView={5}
						spaceBetween={16}
						initialSlide={1}
						speed={2000}
						grabCursor={true}
						pagination={{
							clickable: true
						}}
					>
						{data.map(item => (
							<SwiperSlide key={item.idCategory} {...item}>
								<div className="product-slider__box">
									<div className="discount-box pa df ai-center">
										<img src="images/discount-icon.svg" alt="" />
										<span className="fw600 fs10">Скидка 20%</span>
									</div>
									<div className="fast-delivery__box df ai-center pa">
										<img src="images/car-icon.svg" alt="" />
										<span className="fw600 fs10">Бесплатно, 30-40 мин</span>
									</div>
									<div className="product-slider__box-img pr">
										<img src={item.strCategoryThumb} alt="" />
									</div>
									<div className="product-slider__box-content mt10">
										<h4 className="fs600 fs16">{item.strCategory}</h4>
										<div className="product-slider__box-icons mt5 df ai-center df ai-center">
											<div className="product-slider__icon-box df ai-center df ai-center">
												<svg width="15" height="15" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M7.30979 0.585411C7.36966 0.401148 7.63034 0.401148 7.69021 0.58541L9.13895 5.04418C9.16573 5.12658 9.24252 5.18237 9.32916 5.18237H14.0174C14.2111 5.18237 14.2917 5.4303 14.1349 5.54418L10.3421 8.29984C10.272 8.35077 10.2427 8.44105 10.2694 8.52345L11.7182 12.9822C11.778 13.1665 11.5672 13.3197 11.4104 13.2058L7.61756 10.4502C7.54746 10.3992 7.45254 10.3992 7.38244 10.4502L3.58959 13.2058C3.43285 13.3197 3.22195 13.1665 3.28182 12.9822L4.73056 8.52345C4.75734 8.44105 4.72801 8.35077 4.65791 8.29984L0.865056 5.54418C0.708313 5.4303 0.788868 5.18237 0.982613 5.18237H5.67084C5.75748 5.18237 5.83427 5.12658 5.86105 5.04418L7.30979 0.585411Z"
														fill="#AFAFAF" />
												</svg>
												<span className="fw400 fs12 ml5">3.9</span>
											</div>
											<div className="product-slider__icon-box product-slider__icon-price df ai-center ml10">
												<svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M4.96875 0.34375H2.625C2.50068 0.34375 2.38145 0.393136 2.29354 0.481044C2.20564 0.568951 2.15625 0.68818 2.15625 0.8125V5.03125H1.21875C1.09443 5.03125 0.975201 5.08064 0.887294 5.16854C0.799386 5.25645 0.75 5.37568 0.75 5.5C0.75 5.62432 0.799386 5.74355 0.887294 5.83146C0.975201 5.91936 1.09443 5.96875 1.21875 5.96875H2.15625V7.375H1.21875C1.09443 7.375 0.975201 7.42439 0.887294 7.51229C0.799386 7.6002 0.75 7.71943 0.75 7.84375C0.75 7.96807 0.799386 8.0873 0.887294 8.17521C0.975201 8.26311 1.09443 8.3125 1.21875 8.3125H2.15625V10.1875C2.15625 10.3118 2.20564 10.431 2.29354 10.519C2.38145 10.6069 2.50068 10.6562 2.625 10.6562C2.74932 10.6562 2.86855 10.6069 2.95646 10.519C3.04436 10.431 3.09375 10.3118 3.09375 10.1875V8.3125H4.5C4.62432 8.3125 4.74355 8.26311 4.83146 8.17521C4.91936 8.0873 4.96875 7.96807 4.96875 7.84375C4.96875 7.71943 4.91936 7.6002 4.83146 7.51229C4.74355 7.42439 4.62432 7.375 4.5 7.375H3.09375V5.96875H4.96875C5.71467 5.96875 6.43004 5.67243 6.95749 5.14499C7.48493 4.61754 7.78125 3.90217 7.78125 3.15625C7.78125 2.41033 7.48493 1.69496 6.95749 1.16751C6.43004 0.640066 5.71467 0.34375 4.96875 0.34375ZM4.96875 5.03125H3.09375V1.28125H4.96875C5.46603 1.28125 5.94294 1.47879 6.29457 1.83042C6.64621 2.18206 6.84375 2.65897 6.84375 3.15625C6.84375 3.65353 6.64621 4.13044 6.29457 4.48208C5.94294 4.83371 5.46603 5.03125 4.96875 5.03125Z"
														fill="#1E1E1E" />
												</svg>
												<svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M4.96875 0.34375H2.625C2.50068 0.34375 2.38145 0.393136 2.29354 0.481044C2.20564 0.568951 2.15625 0.68818 2.15625 0.8125V5.03125H1.21875C1.09443 5.03125 0.975201 5.08064 0.887294 5.16854C0.799386 5.25645 0.75 5.37568 0.75 5.5C0.75 5.62432 0.799386 5.74355 0.887294 5.83146C0.975201 5.91936 1.09443 5.96875 1.21875 5.96875H2.15625V7.375H1.21875C1.09443 7.375 0.975201 7.42439 0.887294 7.51229C0.799386 7.6002 0.75 7.71943 0.75 7.84375C0.75 7.96807 0.799386 8.0873 0.887294 8.17521C0.975201 8.26311 1.09443 8.3125 1.21875 8.3125H2.15625V10.1875C2.15625 10.3118 2.20564 10.431 2.29354 10.519C2.38145 10.6069 2.50068 10.6562 2.625 10.6562C2.74932 10.6562 2.86855 10.6069 2.95646 10.519C3.04436 10.431 3.09375 10.3118 3.09375 10.1875V8.3125H4.5C4.62432 8.3125 4.74355 8.26311 4.83146 8.17521C4.91936 8.0873 4.96875 7.96807 4.96875 7.84375C4.96875 7.71943 4.91936 7.6002 4.83146 7.51229C4.74355 7.42439 4.62432 7.375 4.5 7.375H3.09375V5.96875H4.96875C5.71467 5.96875 6.43004 5.67243 6.95749 5.14499C7.48493 4.61754 7.78125 3.90217 7.78125 3.15625C7.78125 2.41033 7.48493 1.69496 6.95749 1.16751C6.43004 0.640066 5.71467 0.34375 4.96875 0.34375ZM4.96875 5.03125H3.09375V1.28125H4.96875C5.46603 1.28125 5.94294 1.47879 6.29457 1.83042C6.64621 2.18206 6.84375 2.65897 6.84375 3.15625C6.84375 3.65353 6.64621 4.13044 6.29457 4.48208C5.94294 4.83371 5.46603 5.03125 4.96875 5.03125Z"
														fill="#1E1E1E" />
												</svg>
												<svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M4.96875 0.34375H2.625C2.50068 0.34375 2.38145 0.393136 2.29354 0.481044C2.20564 0.568951 2.15625 0.68818 2.15625 0.8125V5.03125H1.21875C1.09443 5.03125 0.975201 5.08064 0.887294 5.16854C0.799386 5.25645 0.75 5.37568 0.75 5.5C0.75 5.62432 0.799386 5.74355 0.887294 5.83146C0.975201 5.91936 1.09443 5.96875 1.21875 5.96875H2.15625V7.375H1.21875C1.09443 7.375 0.975201 7.42439 0.887294 7.51229C0.799386 7.6002 0.75 7.71943 0.75 7.84375C0.75 7.96807 0.799386 8.0873 0.887294 8.17521C0.975201 8.26311 1.09443 8.3125 1.21875 8.3125H2.15625V10.1875C2.15625 10.3118 2.20564 10.431 2.29354 10.519C2.38145 10.6069 2.50068 10.6562 2.625 10.6562C2.74932 10.6562 2.86855 10.6069 2.95646 10.519C3.04436 10.431 3.09375 10.3118 3.09375 10.1875V8.3125H4.5C4.62432 8.3125 4.74355 8.26311 4.83146 8.17521C4.91936 8.0873 4.96875 7.96807 4.96875 7.84375C4.96875 7.71943 4.91936 7.6002 4.83146 7.51229C4.74355 7.42439 4.62432 7.375 4.5 7.375H3.09375V5.96875H4.96875C5.71467 5.96875 6.43004 5.67243 6.95749 5.14499C7.48493 4.61754 7.78125 3.90217 7.78125 3.15625C7.78125 2.41033 7.48493 1.69496 6.95749 1.16751C6.43004 0.640066 5.71467 0.34375 4.96875 0.34375ZM4.96875 5.03125H3.09375V1.28125H4.96875C5.46603 1.28125 5.94294 1.47879 6.29457 1.83042C6.64621 2.18206 6.84375 2.65897 6.84375 3.15625C6.84375 3.65353 6.64621 4.13044 6.29457 4.48208C5.94294 4.83371 5.46603 5.03125 4.96875 5.03125Z"
														fill="#AFAFAF" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}		
					</Swiper>
				</div>
			</section>

			<section className="profitable-offer mt50 mb50">
				<div className="container">
					<div className="row mb25">
						<div className="col-lg-12">
							<div className="title">
								<h1 className="title-text fw600 fs24">Выгодные предложения</h1>
							</div>
						</div>
					</div>

					<Swiper
						slidesPerView={4}
						spaceBetween={20}
						initialSlide={1}
						speed={2000}
						grabCursor={true}
						pagination={{
							clickable: true
						}}
					>
						<SwiperSlide>
							<div
								className="profitable-offer__card df jc-between profitable-offer__card-one c-white pt20 pl20 pb20 pr10">
								<div className="profitable-offer__info">
									<h3 className="fw700 fs28">Счастливые часы</h3>
									<p className="fs16 fw500 pt10 pb15">Получите <span className="fs18 fw600">скидку 20%</span><br /> в будние дни
										с
										12:00 до 17:00</p>
								</div>
								<div className="tac">
									<img src="images/stock-icon.svg" alt="" />
								</div>
								<div className="profitable-offer__footer omt25">
									<h2 className="fw700 fs20 pb10">Domino's Pizza</h2>
									<a className="btn" href="#">Перейти</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div
								className="profitable-offer__card df jc-between profitable-offer__card-two c-white pt20 pl20 pb20 pr10">
								<div className="profitable-offer__info">
									<h3 className="fw700 fs28">Счастливые часы</h3>
									<ul className="pt15 pb10">
										<li className="fw400 fs16 pr">Греческий салат</li>
										<li className="fw400 fs16 pr">Грибной крем-суп</li>
										<li className="fw400 fs16 pr">Паста “Карбонара”</li>
										<li className="fw400 fs16 pr">Апельсиновый сок</li>
									</ul>
								</div>
								<div className="df pr">
									<h5 className="fs24 fw700">600₽</h5>
									<span className="profitable-offer__old-price pa fw400 fs16">1200₽</span>
								</div>
								<div className="profitable-offer__footer mt25">
									<h2 className="fw700 fs20 pb10">Ёж и устрица</h2>
									<a className="btn" href="#">Перейти</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div
								className="profitable-offer__card df jc-between profitable-offer__card-three c-white pt20 pl20 pb20 pr10">
								<div className="profitable-offer__info">
									<h3 className="fw700 fs28">Счастливые часы</h3>
									<ul className="pt15 pb10">
										<li className="fw400 fs16 pr">Греческий салат</li>
										<li className="fw400 fs16 pr">Грибной крем-суп</li>
										<li className="fw400 fs16 pr">Паста “Карбонара”</li>
										<li className="fw400 fs16 pr">Апельсиновый сок</li>
									</ul>
								</div>
								<div className="df pr">
									<h5 className="fs24 fw700">600₽</h5>
									<span className="profitable-offer__old-price pa fw400 fs16">1200₽</span>
								</div>
								<div className="profitable-offer__footer mt25">
									<h2 className="fw700 fs20 pb10">Ёж и устрица</h2>
									<a className="btn" href="#">Перейти</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div
								className="profitable-offer__card df jc-between profitable-offer__card-four c-white pt20 pl20 pb20 pr10">
								<div className="profitable-offer__info">
									<h3 className="fw700 fs28">Счастливые часы</h3>
									<ul className="pt15 pb10">
										<li className="fw400 fs16 pr">Греческий салат</li>
										<li className="fw400 fs16 pr">Грибной крем-суп</li>
										<li className="fw400 fs16 pr">Паста “Карбонара”</li>
										<li className="fw400 fs16 pr">Апельсиновый сок</li>
									</ul>
								</div>
								<div className="df pr">
									<h5 className="fs24 fw700">600₽</h5>
									<span className="profitable-offer__old-price pa fw400 fs16">1200₽</span>
								</div>
								<div className="profitable-offer__footer mt25">
									<h2 className="fw700 fs20 pb10">Ёж и устрица</h2>
									<a className="btn" href="#">Перейти</a>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default ProductItem
