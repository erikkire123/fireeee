export interface FundPackage {
  id: number;
  funds: number;
  originalPrice: number;
  robuxPrice: number;
  euroPrice: number;
  popular?: boolean;
}

export const fundPackages: FundPackage[] = [
  {
    id: 1,
    funds: 300,
    originalPrice: 150,
    robuxPrice: 45,
    euroPrice: 1,
  },
  {
    id: 2,
    funds: 600,
    originalPrice: 300,
    robuxPrice: 90,
    euroPrice: 1.5,
  },
  {
    id: 3,
    funds: 1400,
    originalPrice: 450,
    robuxPrice: 135,
    euroPrice: 2,
  },
  {
    id: 4,
    funds: 1800,
    originalPrice: 600,
    robuxPrice: 180,
    euroPrice: 3,
  },
  {
    id: 5,
    funds: 4200,
    originalPrice: 1200,
    robuxPrice: 360,
    euroPrice: 4,
  },
  {
    id: 6,
    funds: 6000,
    originalPrice: 1800,
    robuxPrice: 460,
    euroPrice: 5,
  },
  {
    id: 7,
    funds: 10000,
    originalPrice: 3000,
    robuxPrice: 630,
    euroPrice: 7,
  },
  {
    id: 8,
    funds: 15000,
    originalPrice: 4000,
    robuxPrice: 840,
    euroPrice: 9,
    popular: true,
  },
  {
    id: 9,
    funds: 20000,
    originalPrice: 5000,
    robuxPrice: 1050,
    euroPrice: 12,
  },
];