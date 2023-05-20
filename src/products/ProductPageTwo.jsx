import React, { useState } from 'react';
import "react-tooltip/dist/react-tooltip.css";
import { Link } from 'react-router-dom';
import Loader from '../layouts/Loader';
import { Tooltip as ReactTooltip } from 'react-tooltip'
function ProductPageTwo({ meals = [], addToBacket }) {
	const [showModal, setShowModal] = useState(false);
	const [count, setCount] = useState(1);
	const [quantity, setQuantity] = useState(751);
	const [oldQuantity, setOldQuantity] = useState(936);
	const price = 751;
	const oldPrice = 936;

	const handelClick = () => {
		setShowModal(!showModal)
	}

	const handleIncrement = () => {
		setCount(count + 1);
		setQuantity(quantity + price);
		setOldQuantity(oldQuantity + oldPrice)
	};

	const handleDecrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
		if (quantity > price) {
			setQuantity(quantity - price);
		}
		if (oldQuantity > oldPrice) {
			setOldQuantity(oldQuantity - oldPrice)
		}
	};

	const mealsMap = () => {
		meals.map(item => (
			addToBacket(item.idMeal, item.strMeal)
		))
	}

	return (
		<div className='container'>
			<div className="back-btn__box mb15 dib">
				<Link to="/" className="back-btn fw400 fs16 df ai-center">
					<svg className="mr10" width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 0L0 3L3 6L3.707 5.293L1.914 3.5H14V2.5H1.914L3.707 0.707L3 0Z" fill="#1E1E1E" />
					</svg>
					Домашняя страница
				</Link>
			</div>
			<section className="product pr">
				<div className="row mb25">
					<div className="col-lg-9 col-md-9">
						<div className="product-sotring__bar">
							<ul className="df ai-center jc-between">
								<li>
									<a className="product-sotring__bar-active" href="#">Акции</a>
								</li>
								<li>
									<a href="#">Выгодные предложения</a>
								</li>
								<li>
									<a href="#">Пиццы</a>
								</li>
								<li>
									<a href="#">Закуски</a>
								</li>
								<li>
									<a href="#">Комбо</a>
								</li>
								<li>
									<a href="#">Десерты</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-9 col-xl-9 col-md-9 col-sm-9 col-xs-12">
						<div className="domin">
							<div className="domin-title">
								<h4 className="c-white">Domino's Pizza</h4>
							</div>
							<div className="domin-series">
								<div className="pr series mr25">
									<div className="series series-one pr">
										<div className="series-left">
											<img src="./images/car-icon.svg" alt="" width="25px" />
										</div>
										<div className="serties-right">
											<h6 className="c-white">30-40 <span>мин</span></h6>
										</div>
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
								<div className="series mr25 series-two">
									<div className="series-left">
										<svg width="25" height="25" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.30979 0.585411C7.36966 0.401148 7.63034 0.401148 7.69021 0.58541L9.13895 5.04418C9.16573 5.12658 9.24252 5.18237 9.32916 5.18237H14.0174C14.2111 5.18237 14.2917 5.4303 14.1349 5.54418L10.3421 8.29984C10.272 8.35077 10.2427 8.44105 10.2694 8.52345L11.7182 12.9822C11.778 13.1665 11.5672 13.3197 11.4104 13.2058L7.61756 10.4502C7.54746 10.3992 7.45254 10.3992 7.38244 10.4502L3.58959 13.2058C3.43285 13.3197 3.22195 13.1665 3.28182 12.9822L4.73056 8.52345C4.75734 8.44105 4.72801 8.35077 4.65791 8.29984L0.865056 5.54418C0.708313 5.4303 0.788868 5.18237 0.982613 5.18237H5.67084C5.75748 5.18237 5.83427 5.12658 5.86105 5.04418L7.30979 0.585411Z"
												fill="#fff" />
										</svg>
									</div>
									<div className="serties-right">
										<h6 className="c-white">3.9<span>200+</span></h6>
									</div>

								</div>
								<div className="series-two__modal pa dn">

									<div className="modal-body pr">
										<button className="btn-close pa"><img src="images/clode-modal.svg" alt="" /></button>
										<h3 className="fw500 fs20">Рейтинг: 4.7</h3>
										<p className="fw500 fs16">На основе: 100 оценок</p>
									</div>
								</div>
								<div className="series-three__box">
									<div className="series series-three pr">
										<img src="./images/icon-info-2.svg" alt="" width="30" />

									</div>
									<div className="series-three__modal pa dn">
										<h4 className="fs6 fw600">Domino's Pizza</h4>
										<p className="fs12 fw400 pt10 pb10">Шарикоподшипниковская улица, 11с5</p>
										<p className="fs12 fw400 line">Сегодня до 21:30</p>
										<p className="fw400 fs12 text-muted">Исполнитель (продавец): ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
											"ПИЦЦА РЕСТОРАНТС",
											121096, Москва, Москва, Олимпийский
											пр-т, д. 16, строение 5, этаж 2, помещение I, комната 10а, д 1, пом I комн 38, ИНН 7736652262,
											рег. номер
											1127747188909</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="product-left col-lg-9 col-xl-9 col-md-9 col-sm-9 col-xs-9">
						<div className="row mb25">
							<div className="col-lg-12">
								<div className="title">
									<h1 className="title-text">Выгодные предложения</h1>
								</div>
							</div>
						</div>
						<section className="offer">
							<div className="offer-cards">
								<div className="row">
									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6 mb20">
										<div className="offer-card offer-card-1 p20">
											<div className="card-food">
												<img src="./images/offer-img1.png" alt="" />
											</div>
											<div className="pr z2">
												<div className="card-title">
													<h5 className="fw700 c-white fs20">КОМБО “Че нибудь”</h5>
												</div>
												<ul className="card-about">
													<li className="fw400 c-white fs16 lh20 df ai-center"><span className="db"></span>Греческий салат
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Грибной крем-суп
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Паста “Карбонара”
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Апельсиновый сок
													</li>
												</ul>
												<div className="card-price">
													<h6 className="fw700 c-white df fs24 lh15">600₽ <span className="fw400 df mb15 fs16">1200₽</span>
													</h6>
												</div>
												<button type="button" className="purchase offer-btn c-white fw600 fs14">Добавить
												</button>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6 mb20">
										<div className="offer-card offer-card-2 p20">
											<div className="card-food">
												<img src="./images/offer-img2.png" alt="" />
											</div>
											<div className="pr z2">
												<div className="card-title">
													<h5 className="fw700 c-white fs20">КОМБО “Че нибудь”</h5>
												</div>
												<ul className="card-about">
													<li className="fw400 c-white fs16 lh20 df ai-center"><span className="db"></span>Греческий салат
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Грибной крем-суп
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Паста “Карбонара”
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Апельсиновый сок
													</li>
												</ul>
												<div className="card-price">
													<h6 className="fw700 c-white df fs24 lh15">600₽ <span className="fw400 df mb15 fs16">1200₽</span>
													</h6>
												</div>
												<button type="button" className="purchase offer-btn c-white fw600 fs14">Добавить
												</button>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6 mb20">
										<div className="offer-card offer-card-3 p20">
											<div className="card-food">
												<img src="./images/offer-img3.png" alt="" />
											</div>
											<div className="pr z2">
												<div className="card-title">
													<h5 className="fw700 c-white fs20">КОМБО “Че нибудь”</h5>
												</div>
												<ul className="card-about">
													<li className="fw400 c-white fs16 lh20 df ai-center"><span className="db"></span>Греческий салат
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Грибной крем-суп
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Паста “Карбонара”
													</li>
													<li className="fw400 c-white fs16 lh15 df ai-center"><span className="db"></span>Апельсиновый сок
													</li>
												</ul>
												<div className="card-price">
													<h6 className="fw700 c-white df fs24 lh15">600₽ <span className="fw400 df mb15 fs16">1200₽</span>
													</h6>
												</div>
												<button type="button" className="purchase offer-btn c-white fw600 fs14">Добавить
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div className="product-right pa col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
						<div className="basket">
							<h6 className="basket-title fw600 fs20 lh24">
								Корзина
							</h6>
							<div className="basket-about tac">
								<div className="empty">
									<img src="./images/icon-empty.svg" alt="" />
								</div>
								<p className="fw600 fs16 mt15 lh20">Ваша корзина пока пустая</p>
							</div>
							<div className="basket-bottom">
								<div className="basket-bottom-series df ai-center jc-between">
									<div className="series mr10">
										<div className="car">
											<img src="/./images/icon-basket-bottom.svg" alt="" />
										</div>
									</div>
									<div className="series">
										<h6 className="fw400 fs12 lh13">Доставка 0 ₽ · 30–40 мин</h6>
										<h6 className="fw300 fs12 lh12">Дальняя доставка · Работа сервиса 44 ₽
											работа сервиса от 44 ₽</h6>
									</div>
									<div className="series ml20">
										<div className="info" id="app-title">
											<img src="./images/icon-info-2.svg" alt="" />
										</div>
										<ReactTooltip
											anchorId="app-title"
											place="bottom"
											content="Lorem ipdum dolor"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='product-left'>
						<div className="row mb25">
							<div className="col-lg-12">
								<div className="title">
									<h1 className="title-text">Все продукты</h1>
								</div>
							</div>
						</div>

						<section className="pizza mb40">
							<div className="row">
								{meals.length ? meals.map(meal => (
									<div key={meal.idMeal} className="col-lg-2 col-md-4 col-sm-4 col-xs-6 col-6 mb20">
										<div className="pizza-card">
											<div className="pizza-card-img pr">
												{/* <div className="discount pa">
													<div className="discount-series mb5 discount-series-1 df ai-center">
														<div className="series-icon mr5 df ai-center">
															<img src="./images/discount-icon.svg" alt="" />
														</div>
														<p className="fw600 c-white">Скидка 10%</p>
													</div>
													<div className="discount-series discount-series-2 df ai-center">
														<div className="series-icon mr5 df ai-center">
															<img src="./images/icon-foiz.svg" alt="" />
														</div>
														<p className="fw600 c-white">Выгодно</p>
													</div>
												</div> */}
												<div className='pr'>
													{/* <div className="cashback df ai-center pa">
														<div className="series-icon mr5 df ai-center">
															<img src="./images/icon-rubl.svg" alt="" />
														</div>
														<p className="fw600 c-white">Кэшбэк 3%</p>
													</div> */}
													<img src={meal.strMealThumb} alt="" />
												</div>
												<div>
													<div className="price mt15">
														<h6 className="lh20 df ai-center">751₽ <span className="fw500 fs12 db">936₽</span></h6>
													</div>
													<h6 className="fw600 lh16">{meal.strMeal}</h6>
												</div>
											</div>
											<div className="pizza-card-about">
												<button onClick={handelClick} type="button" className="purchase fw500 c-white">Добавить</button>
											</div>
										</div>
									</div>
								)) : <Loader />}
							</div>
						</section>

						{/* <!-- add-modal start --> */}
						{showModal ? (
							<div className="add-modal pf">
								<div className="modal-wrap pr">
									<button onClick={handelClick} type="button" className="modal-close pa">
										<img src="./images/clode-modal.svg" alt="" />
									</button>
									<div className="df media-modal">
										<div className="modal-left mr15">
											<div className="modal-img">
												<img src="./images/modal-pizza.png" alt="" />
											</div>
										</div>
										<div className="modal-right pr">
											<div className="modal-about">
												<h5 className="fw600 fs24">Пицца Четыре сыра</h5>
												<p className="fw400 fs14">Состав: Тесто (20х30 см), сливочный соус, моцарелла, сыр с плесенью,
													чеддер,
													пармезан</p>
											</div>
											<div className="pizza-tools mt15">
												<div className="tool-series">
													<h5 className="fw400 fs14 db mb5 mt15">Размер</h5>
													<div className="tool size-tool df ai-center">
														<button className="fw400 fs14 size-click" type="button">Маленькая</button>
														<button className="fw400 fs14" type="button">Средняя</button>
														<button className="fw400 fs14" type="button">Большая</button>
													</div>
												</div>
												<div className="tool-series dough-series">
													<h5 className="fw400 fs14 db mt15">Тесто</h5>
													<div className="tool dough-tool df ai-center">
														<button className="fw400 fs14 dough-click" type="button">Традиционное</button>
														<button className="fw400 fs14" type="button">Тонкое</button>
													</div>
												</div>
												<div className="modal-price mt15">
													<h5 className="fw400 fs14 db mb5 mt15">Добавить по вкусу</h5>
													<div className="price-tools df jc-between">
														<div className="price-card price-card-click df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Моцарелла</h6>
															<div className="price-count df ai-center jc-between">
																<div className="conunt-number df ai-center jc-between">
																	<span className="db ai-center fw400 fs20">&minus;</span> <span
																		className="db mr15 ml15 fs12 fw400">2</span> <span className="db ai-center fw400 fs20">+</span>
																</div>
																<h5 className="price fw600 fs14">158₽</h5>
															</div>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Свежая пекинская капуста</h6>
															<h5 className="price fw600 tac fs14">158₽</h5>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Цыпленок</h6>
															<h5 className="price fw600 tac fs14">79₽</h5>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Ветчина</h6>
															<div className="price-count df ai-center jc-between">
																<div className="conunt-number df ai-center jc-between">
																	<span className="db ai-center fw400 fs20">&minus;</span> <span
																		className="db mr15 ml15 fs12 fw400">2</span> <span className="db ai-center fw400 fs20">+</span>
																</div>
																<h5 className="price fw600 fs14">158₽</h5>
															</div>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Свежая пекинская капуста</h6>
															<h5 className="price fw600 tac fs14">158₽</h5>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Цыпленок</h6>
															<h5 className="price fw600 tac fs14">79₽</h5>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Моцарелла</h6>
															<div className="price-count df ai-center jc-between">
																<div className="conunt-number df ai-center jc-between">
																	<span className="db ai-center fw400 fs20">&minus;</span> <span
																		className="db mr15 ml15 fs12 fw400">2</span> <span className="db ai-center fw400 fs20">+</span>
																</div>
																<h5 className="price fw600 fs14">158₽</h5>
															</div>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Свежая пекинская капуста</h6>
															<h5 className="price fw600 tac fs14">158₽</h5>
														</div>
														<div className="price-card df ai-center jc-center">
															<h6 className="fw400 fs12 tac">Цыпленок</h6>
															<h5 className="price fw600 tac fs14">79₽</h5>
														</div>
													</div>
												</div>
											</div>
											<div className="modal-bottom pf df">
												<div className="modal-bottom-left"></div>
												<div className="modal-bottom-right">
													<div className="modal-bottom-price">
														<h5 className="fw600 mb15 df fs24">{quantity}₽ <span className="fw500 fs16 lh20 db">{oldQuantity}₽</span></h5>
													</div>
													<div className="modal-bottom-btn df ai-center">
														<button onClick={mealsMap} className="fw600 fs16 c-white" type="submit">Добавить</button>
														<div className="modal-bottom-count df ai-center jc-between">
															<span onClick={handleDecrement} className="db fs20">&minus;</span>
															<span className="fs12 fw500">{count}</span>
															<span onClick={handleIncrement} className="fs20 db">+</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : null}
						{/* <!-- add-modal end --> */}
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProductPageTwo