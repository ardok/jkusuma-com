declare global {
    // https://dev.to/smeijer/a-typescript-valueof-implementation-and-how-it-s-built-4gim
    type ValueOf<T> = T[keyof T]
}

export {}
