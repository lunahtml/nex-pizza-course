//constants.ts
export const categories = [
    {name:"Pizzas"}, 
    {name: "Breckfast"}, 
    {name:"Combo"},
    {name:"Drinks"},
    {name:"Desserts"}
];

export const ingredients = [
    {
        name: 'Сырный бортик',
        price: 179,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
          productId: 1, 
      },
      {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
          productId: 2,

      },
      {
        name: 'Ветчина',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
          productId: 3,

      },
      {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
          productId: 1,
    
      },
      {
        name: 'Острая чоризо',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
          productId: 2,
  
      },
      {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
          productId: 3,

      },
].map((obj, index) =>({id: index +1, ...obj}));

export const products =[
  {
    name: 'eggs',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
    categoryId:1,
    ingredientId: 2
    
  },
  {
    name: 'latte',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
    categoryId:2,
    ingredientId: 1 

  },
  {
    name: 'naggets',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
    categoryId:3,
    ingredientId: 3

  },
]