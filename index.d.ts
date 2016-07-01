export interface Result {
    fn(x: number): number | void;
    r2: number | void;
}
export interface LinearResult extends Result {
    b: number | void;
    m: number | void;
}
export declare function linear(...as: [number, number][]): LinearResult;
