export const ADDED = 'ADDED'
export const REMOVED = 'REMOVED'
export const INCREASED = 'INCREASED'
export const DECREASED = 'DECREASED'

export function reducer(state, action) {
    switch (action.type) {
        case ADDED: {
            const existingItem = state.find((item) => item.id === action.payload.itemToAdd.id);
            if (existingItem) {
                const updatedCart = state.map((item) =>
                    item.id === action.payload.itemToAdd.id
                        ? { ...item, quantity: item.quantity + action.payload.itemToAdd.quantity }
                        : item
                );
                return updatedCart
            } else {
                return [...state, action.payload.itemToAdd];
            }

        }
        case REMOVED: {
            const updatedCart = state.filter((item) => item.id !== action.payload.id);
            return updatedCart
        }
        case INCREASED: {
            const updatedCart = state.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );

            return updatedCart
        }
        case DECREASED: {
            const updatedCart = state.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
            );

            return updatedCart
        }
        default: {
            throw new Error('Unknown action: ' + action.type)
        }
    }

}