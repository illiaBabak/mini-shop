export type ItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

export type CartItemType = ItemType & { itemKey: string };
