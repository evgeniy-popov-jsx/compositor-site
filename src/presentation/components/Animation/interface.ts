interface Line {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}

interface Circle {
    id: number;
    cx: string;
    cy: string;
    r: string;
}

interface Rect {
    id: number;
    x: string;
    y: string;
}

interface Diagonal {
    id: number;
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}

export interface Setting {
    right?: string;
    width?: string;
    top?: string,
    line1: Line;
    line2: Line;
    line3: Line;
    circle: Circle[];
    rect: Rect[];
    diagonal: Diagonal[];
}
