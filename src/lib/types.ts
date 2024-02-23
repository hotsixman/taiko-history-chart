export interface Gamecenter{
    order:number;
    id:string;
    name:string;
}

export interface History{
    order:number;
    serial:string;
    from:string;
    to:string;
    date:number;//Date.prototype.getTime();
}