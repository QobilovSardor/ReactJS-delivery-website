import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import { Link } from 'react-router-dom';
SwiperCore.use([Pagination]);

function ProductItem(props) {
	const { data = [] } = props;

	return (
		<>

			<section className="first-products__category mt30">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12 mb15">
							<div className="first-product__content df ai-center c-white">
								<div className="first-product__box">
									<div className="first-product__info">
										<div>
											<h2 className="fw700 fs20">Напитокв <br /> подарок</h2>
											<p className="fw400 fs14 pt5 pb10">При за mt10казе от 600₽</p>
											<h2 className="fw700 fs20">Domino's Pizza</h2>
										</div>
										<div>
											<a className="btn mt10" href="#">Перейти</a>
										</div>
									</div>
								</div>
								<div className="first-product__box-img ml60">
									<img src="images/first-product-img1.png" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12 mb15">
							<div className="two-product__content df jc-between ai-center c-white">
								<div className="first-product__box-img">
									<img src="images/first-product-img2.png" alt="" />
								</div>
								<div className="first-product__box ml30">
									<div className="first-product__info">
										<div>
											<h2 className="fw700 fs20">Бизнес-ланч</h2>
											<div className="df ai-center mb30">
												<p className="fw800 fs24 pt5 pb10 mr10">400₽</p>
												<span className="fw400 fs14">С 12:00 до 14:00</span>
											</div>
											<h2 className="fw700 fs20 mb5">Ёж и устрица</h2>
										</div>
										<div>
											<Link to="/products" className="btn">Перейти</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12 mb15">
							<div className="three-product__content df ai-center c-white">
								<div className="first-product__box">
									<div className="first-product__info">
										<div>
											<h2 className="fw700 fs20">Два тако <br />по цене одного</h2>
											<p className="fw400 fs14 pt5 pb10">С 12:00 до 14:00</p>
											<h2 className="fw700 fs16">Мексиканская бабушка</h2>
										</div>
										<div>
											<Link to="/products" className="btn">Перейти</Link>
										</div>
									</div>
								</div>
								<div className="first-product__box-img ml60 pr">
									<img className="three-product__content-img1 pa" src="images/first-product-img3.png" alt="" />
									<img className="three-product__content-img2 pa" src="images/first-product-img3.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="sorting-bar">
				<div className="container">
					<div className="sorting-bar__content df ai-center jc-between">
						<ul className="df">
							<li>
								<a className="sorting-bar__link fs14 fw600 c-white sorting-active" href="#">Все</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 fw600 c-white" href="#">Навынос</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 media-hide__text3 fw600 c-white" href="#">Пицца</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 media-hide__text3 fw600 c-white" href="#">Грузия</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 media-hide__text2 fw600 c-white" href="#">Бургеры</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 media-hide__text2 fw600 c-white" href="#">Шашлык</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 media-hide__text1 fw600 c-white" href="#">Десерты</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 fw600 c-white df ai-center" href="#">
									Еще
									<svg className="ml10" width="14" height="8" viewBox="0 0 14 8" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L7 7L13 1" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
									</svg>
								</a>

							</li>
							<li>
								<a className="sorting-bar__link fs14 media-hide__text1 fw600 c-white" href="#">Суши</a>
							</li>
							<li>
								<a className="sorting-bar__link fs14 media-hide__text1 fw600 c-white" href="#">Суши</a>
							</li>
						</ul>
						<div className="df jc-between">
							<div className="pr">
								<div className="select-box df ai-center">
									<h4 className="mr5 fs14 fw500 c-white">Доставка: <span className="select-tme media-hide__time">сейчас</span>
									</h4>
									<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L7 7L13 1" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
									</svg>
								</div>
								<div className="select-box__items pa dn">
									<div className="select-box__items-header btn df">
										<button className="select-box__btn active-btn">Сегодня</button>
										<button className="select-box__btn ml15">Завтра</button>
									</div>
									<div className="select-box__items-info mt15">
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">Сейчас</span>
											<img src="images/check.svg" alt="" />
										</div>
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">14:00</span>
										</div>
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">15:00</span>
										</div>
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">16:00</span>
										</div>
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">17:00</span>
										</div>
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">18:00</span>
										</div>
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">19:00</span>
										</div>
										<div className="select-box__list df ai-center jc-between">
											<span className="fs14 fw400">20:00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="pr">
								<div className="setting-box df ai-center ml10">
									<h4 className="mr5 fs14 fw500 c-white media-hide__text-setting">Сортировка</h4>
									<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0.625603 2.7H8.6V3.02C8.6 3.27461 8.70115 3.51879 8.88118 3.69882C9.06122 3.87886 9.3054 3.98 9.56 3.98H10.84C11.0946 3.98 11.3388 3.87886 11.5188 3.69882C11.6989 3.51879 11.8 3.27461 11.8 3.02V2.7H13.2912C13.3761 2.7 13.4575 2.66628 13.5175 2.60627C13.5775 2.54626 13.6112 2.46487 13.6112 2.38C13.6112 2.29513 13.5775 2.21374 13.5175 2.15372C13.4575 2.09371 13.3761 2.06 13.2912 2.06H11.8V1.74C11.8 1.48539 11.6989 1.24121 11.5188 1.06118C11.3388 0.881141 11.0946 0.779999 10.84 0.779999H9.56C9.3054 0.779999 9.06122 0.881141 8.88118 1.06118C8.70115 1.24121 8.6 1.48539 8.6 1.74V2.06H0.625603C0.540734 2.06 0.459341 2.09371 0.399329 2.15372C0.339317 2.21374 0.305603 2.29513 0.305603 2.38C0.305603 2.46487 0.339317 2.54626 0.399329 2.60627C0.459341 2.66628 0.540734 2.7 0.625603 2.7ZM9.24 1.74C9.24 1.65513 9.27372 1.57374 9.33373 1.51372C9.39374 1.45371 9.47513 1.42 9.56 1.42H10.84C10.9249 1.42 11.0063 1.45371 11.0663 1.51372C11.1263 1.57374 11.16 1.65513 11.16 1.74V3.02C11.16 3.10487 11.1263 3.18626 11.0663 3.24627C11.0063 3.30628 10.9249 3.34 10.84 3.34H9.56C9.47513 3.34 9.39374 3.30628 9.33373 3.24627C9.27372 3.18626 9.24 3.10487 9.24 3.02V1.74ZM13.336 12.3H10.52V11.98C10.52 11.7254 10.4189 11.4812 10.2388 11.3012C10.0588 11.1211 9.81461 11.02 9.56 11.02H8.28C8.02539 11.02 7.78122 11.1211 7.60118 11.3012C7.42115 11.4812 7.32 11.7254 7.32 11.98V12.3H0.632003C0.547134 12.3 0.465741 12.3337 0.405729 12.3937C0.345717 12.4537 0.312003 12.5351 0.312003 12.62C0.312003 12.7049 0.345717 12.7863 0.405729 12.8463C0.465741 12.9063 0.547134 12.94 0.632003 12.94H7.32V13.26C7.32 13.5146 7.42115 13.7588 7.60118 13.9388C7.78122 14.1189 8.02539 14.22 8.28 14.22H9.56C9.81461 14.22 10.0588 14.1189 10.2388 13.9388C10.4189 13.7588 10.52 13.5146 10.52 13.26V12.94H13.336C13.4209 12.94 13.5023 12.9063 13.5623 12.8463C13.6223 12.7863 13.656 12.7049 13.656 12.62C13.656 12.5351 13.6223 12.4537 13.5623 12.3937C13.5023 12.3337 13.4209 12.3 13.336 12.3ZM9.88 13.26C9.88 13.3449 9.84629 13.4263 9.78628 13.4863C9.72627 13.5463 9.64487 13.58 9.56 13.58H8.28C8.19513 13.58 8.11374 13.5463 8.05373 13.4863C7.99372 13.4263 7.96 13.3449 7.96 13.26V11.98C7.96 11.8951 7.99372 11.8137 8.05373 11.7537C8.11374 11.6937 8.19513 11.66 8.28 11.66H9.56C9.64487 11.66 9.72627 11.6937 9.78628 11.7537C9.84629 11.8137 9.88 11.8951 9.88 11.98V13.26ZM4.44 9.1H5.72C5.97461 9.1 6.21879 8.99886 6.39883 8.81882C6.57886 8.63879 6.68 8.39461 6.68 8.14V7.82H13.368C13.4529 7.82 13.5343 7.78628 13.5943 7.72627C13.6543 7.66626 13.688 7.58487 13.688 7.5C13.688 7.41513 13.6543 7.33374 13.5943 7.27372C13.5343 7.21371 13.4529 7.18 13.368 7.18H6.68V6.86C6.68 6.60539 6.57886 6.36121 6.39883 6.18118C6.21879 6.00114 5.97461 5.9 5.72 5.9H4.44C4.1854 5.9 3.94122 6.00114 3.76118 6.18118C3.58115 6.36121 3.48 6.60539 3.48 6.86V7.18H0.664003C0.579134 7.18 0.497741 7.21371 0.437729 7.27372C0.377717 7.33374 0.344003 7.41513 0.344003 7.5C0.344003 7.58487 0.377717 7.66626 0.437729 7.72627C0.497741 7.78628 0.579134 7.82 0.664003 7.82H3.48V8.14C3.48 8.39461 3.58115 8.63879 3.76118 8.81882C3.94122 8.99886 4.1854 9.1 4.44 9.1ZM4.12 6.86C4.12 6.77513 4.15372 6.69374 4.21373 6.63372C4.27374 6.57371 4.35513 6.54 4.44 6.54H5.72C5.80487 6.54 5.88627 6.57371 5.94628 6.63372C6.00629 6.69374 6.04 6.77513 6.04 6.86V8.14C6.04 8.22487 6.00629 8.30626 5.94628 8.36627C5.88627 8.42628 5.80487 8.46 5.72 8.46H4.44C4.35513 8.46 4.27374 8.42628 4.21373 8.36627C4.15372 8.30626 4.12 8.22487 4.12 8.14V6.86Z"
											fill="white" />
									</svg>
								</div>
								<div className="setting-box__items pa tal dn">
									<h4 className="fs14 fw600">Сначала показать</h4>

									<div className="setting-box__item df ai-center mt15">
										<input type="radio" name="radio" id="one" />
										<label className="ml10 fs14 fw400" htmlFor="one">Доверюсь вам</label>
									</div>
									<div className="setting-box__item df ai-center">
										<input type="radio" name="radio" id="two" />
										<label className="ml10 fs14 fw400" htmlFor="two">С высоким рейтингом</label>
									</div>
									<div className="setting-box__item df ai-center">
										<input type="radio" name="radio" id="three" />
										<label className="ml10 fs14 fw400" htmlFor="three">Недорогие</label>
									</div>
									<div className="setting-box__item df ai-center">
										<input type="radio" name="radio" id="four" />
										<label className="ml10 fs14 fw400" htmlFor="four">Дорогие</label>
									</div>
									<div className="setting-box__item df ai-center">
										<input type="radio" name="radio" id="five" />
										<label className="ml10 fs14 fw400" htmlFor="five">Быстрые</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
							<SwiperSlide key={item.idCategory}>
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
									<Link to="/products" className="btn">Перейти</Link>
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
									<Link to="/products" className="btn">Перейти</Link>
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
									<Link to="/products" className="btn">Перейти</Link>
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
									<Link to="/products" className="btn">Перейти</Link>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>

			<section className="all-restaurants">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="title">
								<h1 className="title-text fw600 fs24">Все рестораны</h1>
							</div>
						</div>
						<div className="row mt20">
							{data.map(item => (
								<div key={item.idCategory} className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
									<Link to={`/category/${item.strCategory}`}>
										<div className='all-restaurants__box'>
											<div className="product-slider__box">
												<div className="product-slider__box-img pr">
													<img src={item.strCategoryThumb} alt="" />
												</div>
												<div className="product-slider__box-content mt10">
													<h4 className="fs600 fs16">{item.strCategory}</h4>
													<p className='product-slider__box-descr'>{item.strCategoryDescription.slice(0, 50)}...</p>
													<div className="buttons">
														<button className='purchase fw500 c-white mt10 mb10'>Категория просмотра</button>
														<Link to="/products" className='purchase fw500 c-white'>Перейти в товаров</Link>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductItem
