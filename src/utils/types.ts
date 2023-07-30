export type PackageItemType = {
  imagePath?: string;
  name: string;
  details?: string[];
  tags?: string[];
  amount: number;
  currency: string;
  id: string;
};

export type CredentialType = {
  fullName: string;
  email: string;
};
