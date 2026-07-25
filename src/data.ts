import { Product } from './types';

export const featuredProducts: Product[] = [
  {
    id: 'm1',
    name: 'Matcha Layer Cake',
    japaneseName: '抹茶',
    description: 'Sponge cake with premium matcha',
    price: '€6.00',
    image: '/item1.png',
    category: 'pastry'
  },
  {
    id: 'm2',
    name: 'Hojicha Sandwich',
    japaneseName: '焙じ茶',
    description: 'Soft sponge with roasted tea cream',
    price: '€5.50',
    image: '/item2.png',
    category: 'pastry'
  },
  {
    id: 'm3',
    name: 'Yuzu Butter Sand',
    japaneseName: '柚子',
    description: 'Citrusy tart with light cream',
    price: '€5.80',
    image: '/item3.png',
    category: 'pastry'
  }
];
