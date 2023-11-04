export function getLabelColor(category) {
    let labelClass;

    if (category === "jewelery") {
        labelClass = "category jewelery";
    }
    if (category === "electronics") {
        labelClass = "category electronics";
    }
    if (category === `men's clothing`) {
        labelClass = "category men";
    }
    if (category === `women's clothing`) {
        labelClass = "category women";
    }

    return labelClass
}