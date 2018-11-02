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
    let newCart = [];

    for (const [index, item] of cart.entries()) {
        item.cartIndex = index;
        newCart.push(item);
        if (item.code === 'CF1') {
            coffee.push(item);
        }
        if (coffee.length === 2) {
            coffee = [];
            newCart.push(specials.BOGO);
        }
    }
    return newCart;
}
