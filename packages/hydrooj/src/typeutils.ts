export type NumberKeys<O> = {
    [K in keyof O]: number extends O[K] ? K : never
}[keyof O];
export type ArrayKeys<O, P = any> = {
    [K in keyof O]: P[] extends O[K] ? K : never
}[keyof O];
export type NestKeys<O, T = any, S = any[]> = O extends object ? O extends S ? never : {
    [K in keyof O]: (O[K] extends T ? K : never) | `${K & string}.${NestKeys<O[K], T, S | O>}`
}[keyof O] & string : never;
export type Value<O, V = ''> = {
    [K in keyof O]: V
};
export type Projection<O> = (string & keyof O)[];
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Filter<T, U> = T extends U ? T : never;
export type MaybeArray<T> = T | T[];
