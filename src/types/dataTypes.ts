export type ItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

export type CartItem = ItemType & { count: number };
