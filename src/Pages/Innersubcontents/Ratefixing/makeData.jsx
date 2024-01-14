// makeData.js

export const makeData = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  componentType: `ComponentType${index + 1}`,
  oldPLNo: `OldPLNo${index + 1}`,
  upNo: `UPNo${index + 1}`,
  plNo: `PLNo${index + 1}`,
  briefDescription: `BriefDescription${index + 1}`,
  detailedDescription: `DetailedDescription${index + 1}`,
  selectUnit: `SelectUnit${index + 1}`,
  componentRate: `ComponentRate${index + 1}`,
  availabilityStock: `AvailabilityStock${index + 1}`,
  previousPurchaseValue: `PreviousPurchaseValue${index + 1}`,
  closingShop: `ClosingShop${index + 1}`,
  shopFlow: `ShopFlow${index + 1}`,
  category: `Category${index + 1}`,
  requiredFor: `RequiredFor${index + 1}`,
}));

export const usStates = [
];
