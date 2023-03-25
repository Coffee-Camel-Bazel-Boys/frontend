import { Point } from "./point";

export interface Plot {
    id: string | undefined;
    landId:  string | undefined;
    plotNumber: string;
    description: string;
    // size: string; // fixme size?
    // sizeType: string,
    price: string;
    shape: Array<Point>;
}

export function createPlot(plotNumber: string): Plot {
    return {
        id: undefined,
        landId: undefined,
        plotNumber: plotNumber,
        description: "",
        price: "",
        shape: []
    }
}