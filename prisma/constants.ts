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
    name: 'Острый додстер 🌶️🌶️',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
    categoryId: 3,
  },
  {
    name: 'Банановый молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
    categoryId: 4,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль 👶',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
    categoryId: 4,
  },
  {
    name: 'Ирландский капучино',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе карамельный капучино',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе кокосовый латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе американо',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 5,
  },
]

export { ingredients, categories, products }
