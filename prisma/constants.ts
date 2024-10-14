const categories = [
  { name: 'Парфюмерия' },
  { name: 'Макияж' },
  { name: 'Уход за кожей' },
  { name: 'Маникюр и педикюр' },
  { name: 'Мужской уход' },
  { name: 'Личная гигиена' },
  { name: 'Аптечная косметика' },
]

const ingredients = [
  {
    name: 'Подарочная упаковка',
    price: 990,
    imageUrl: 'https://i.ibb.co/B3BsqD0/category-mask-april24.png',
  },
  {
    name: 'Пробники в подарок',
    price: 520,
    imageUrl: 'https://i.ibb.co/LnNTpJS/category-parfum-april24.png',
  },
  {
    name: 'Подарочный сертификат',
    price: 3000,
    imageUrl: 'https://i.ibb.co/nQJVvgB/category-ps-april24.png',
  },
  {
    name: 'Эксклюзивная упаковка',
    price: 1200,
    imageUrl: 'https://i.ibb.co/Z6qMsLr/category-nisha-parfum-april24.png',
  },
  {
    name: 'Ароматические свечи или диффузоры',
    price: 360,
    imageUrl: 'https://i.ibb.co/JBvL4WG/category-flowers-april24.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }))

const products = [
  {
    name: 'MISSHA Тональный BB крем',
    imageUrl: 'https://i.ibb.co/WFhnWTw/EX-424f5bf7-dee3-40c4-b557-359fc8afaee5-Photoroom.png',
    categoryId: 2,
  },
  {
    name: 'ESTEE LAUDER Устойчивый тональный крем',
    imageUrl: 'https://i.ibb.co/vzXWc5Q/EX-1a55f676-8b57-4af8-922d-a7a2defef928-Photoroom.png',
    categoryId: 2,
  },
  {
    name: 'LORÉAL PARIS Пудра компактная',
    imageUrl: 'https://i.ibb.co/JcWjmQB/EX-dc57637d-71f8-4263-b46a-c9f2aadaea45-Photoroom.png',
    categoryId: 2,
  },
  {
    name: 'PAYOT Крем для лица для придания сияния',
    imageUrl: 'https://i.ibb.co/C76hgjG/EX-7fd9cc99-df6c-498f-bcab-8e8a280d8bbb-Photoroom.png',
    categoryId: 3,
  },
  {
    name: 'PAYOT Смягчающий кожу шариковый дезодорант',
    imageUrl: 'https://i.ibb.co/Wvwxwcm/EX-57ff195d-9e3e-4b6d-a72c-c9640fb12165-Photoroom.png',
    categoryId: 3,
  },
  {
    name: 'DOLCE MILK Гель для душа',
    imageUrl: 'https://i.ibb.co/ZBP9ByB/EX-7c447460-3b1d-4c83-ad79-a9c86fa85e98-Photoroom.png',
    categoryId: 3,
  },
  {
    name: 'DOLCE MILK Гель для душа',
    imageUrl: 'https://i.ibb.co/FVCwCpw/EX-4c2ccf0f-c2ab-4515-b603-053a21835201-Photoroom.png',
    categoryId: 3,
  },
  {
    name: 'GRACE FACE Тканевая маска для лица увлажняющая',
    imageUrl: 'https://i.ibb.co/fXy7VQF/44414d51-8092-47e6-ae14-b18c77c4f792.webp',
    categoryId: 3,
  },
  {
    name: 'Лак для ногтей с эффектом гелевого покрытия NAIL POLISH',
    imageUrl: 'https://i.ibb.co/DkTdBdh/EX-d3b964b1-c435-4f84-8411-9dec6b59fb08.jpg',
    categoryId: 4,
  },
  {
    name: 'SOLOMEYA Профессиональный гель для удаления кутикулы',
    imageUrl: 'https://i.ibb.co/2PFZYvt/EX-c54fdfdf-9c93-4458-af5d-9ab543100dca.webp',
    categoryId: 4,
  },
  {
    name: 'ARAVIA PROFESSIONAL Питательное масло для кутикулы с маслом авокадо',
    imageUrl: 'https://i.ibb.co/6wLhFZK/EX-156048fa-1c1f-4699-b582-635a0483cdcb.jpg',
    categoryId: 4,
  },
  {
    name: 'MORIKI DORIKI Лак для ногтей Like a Star',
    imageUrl: 'https://i.ibb.co/6Wg64FV/EX-4ffa07c9-cc2a-45c0-8824-ed7cdb99018f.webp',
    categoryId: 4,
  },
  {
    name: 'DSQUARED2 Дезодорант-стик Wood Pour Homme',
    imageUrl: 'https://i.ibb.co/Ld9f7HK/EX-584d9848-3db0-4b15-a2ad-4d358065743e.webp',
    categoryId: 5,
  },
  {
    name: 'DOLCE MILK Набор 267 MAN',
    imageUrl: 'https://i.ibb.co/0G09kbf/EX-9075ffe0-77cf-44ef-a057-d2d6f7d92deb.webp',
    categoryId: 5,
  },
  {
    name: 'DOLCE MILK Гель для душа 3 в 1 «ЖГУЧИЙ РОМ» MAN',
    imageUrl: 'https://i.ibb.co/mJDjXmb/EX-31c77621-e29d-4b5f-88cc-46d2d6eb2a2b.webp',
    categoryId: 5,
  },
  {
    name: 'LOREAL PARIS Крем для лица Увлажняющий уход 24ч мужской',
    imageUrl: 'https://i.ibb.co/2Fh9Qbk/EX-88ef6556-09e4-4c99-95f1-e489c1cbf3e9.webp',
    categoryId: 5,
  },
  {
    name: 'PAYOT Гель очищающий тонизирующий для лица и тела для мужчин Optimale',
    imageUrl: 'https://i.ibb.co/ZXfvkjn/EX-20d4cdba-ea4f-4861-acf3-507c100638ff.webp',
    categoryId: 5,
  },
]

export { ingredients, categories, products }
