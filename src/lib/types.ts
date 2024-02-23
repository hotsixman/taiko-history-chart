export interface Gamecenter{
    order:number;
    name:string;
}

export interface History{
    order:number;
    serial:string;
    from:number;
    to:number;
    date:number;//Date.prototype.getTime();
}