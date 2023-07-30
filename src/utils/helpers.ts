import { PackageItemType } from "./types";

export const totalBasketAmount = (basket: any) => {
  const ids: string[] = [];
  const total = basket.packages.reduce(
    (total: number, value: PackageItemType) => {
      ids.push(value.id);
      return total + value.amount;
    },
    0
  );

  return {
    ids,
    total,
  };
};