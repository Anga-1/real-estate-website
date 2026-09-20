const properties = [
    {
        id: 1,
        listingType: "buy",
        location: "Cape Town",
        propertyType: "House",
        price: 300000,
        bedrooms: 5
    },
    {
        id: 2,
        listingType: "rent",
        location: "Bellville",
        propertyType: "Apartment",
        price: 12000,
        bedrooms: 2
    },
    {
        id: 3,
        listingType: "buy",
        location: "Claremont",
        propertyType: "Apartment",
        price: 1800000,
        bedrooms: 2
    },
    {
        id: 4,
        listingType: "rent",
        location: "Rondebosch",
        propertyType: "House",
        price: 18000,
        bedrooms: 3
    }
];
function filterByListingType(listingType) {
    return properties.filter(property => property.listingType === listingType);
}
