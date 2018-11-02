export const inventory = {
    CH1: { code: 'CH1', name: 'Chai', price: 3.11 },
    AP1: { code: 'AP1', name: 'Apples', price: 6.0 },
    CF1: { code: 'CF1', name: 'Coffee', price: 11.23 },
    MK1: { code: 'MK1', name: 'Milk', price: 4.75 },
    OM1: { code: 'OM1', name: 'Oatmeal', price: 3.69 }
};

export const specials = {
    BOGO: {
        code: 'BOGO',
        description: 'Buy one get one coffee',
        price: -inventory.CF1.price
    },
    APOM: {
        code: 'APOM',
        description: 'Half off apples with oatmeal',
        price: -inventory.AP1.price / 2
    }
};

export function applySpecials(cart) {
    let coffee = [];
    let oatmealAndApples = [];
    let newCart = [];

    for (const [index, item] of cart.entries()) {
        item.cartIndex = index;
        newCart.push(item);

        // Discount for BOGO
        if (item.code === 'CF1') {
            coffee.push(item);
        }
        if (coffee.length === 2) {
            coffee = [];
            newCart.push(specials.BOGO);
        }

        // Discount for APOM
        if (oatmealAndApples.length === 0) {
            if (item.code === 'AP1' || item.code === 'OM1') {
                oatmealAndApples.push(item);
            }
        }
        if (oatmealAndApples.length === 1) {
            if (
                (item.code === 'AP1' && oatmealAndApples[0].code === 'OM1') ||
                (item.code === 'OM1' && oatmealAndApples[0].code === 'AP1')
            ) {
                newCart.push(specials.APOM);
                oatmealAndApples = [];
            }
        }
    }
    return newCart;
}
