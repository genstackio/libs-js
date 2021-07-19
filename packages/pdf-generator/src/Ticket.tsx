import {View} from "@react-pdf/renderer";

function mm(v: number) {
    return `${v}mm`;
}

export function Ticket({x, y, w, h, color = 'red', cutLineColor = 'blue'}: TicketProps) {
    const lineSize = 0.25;
    const lineLength = 3;
    const lineGap = 4;

    const topLeftCorner = [x, y];
    const topRightCorner = [x + w, y];
    const bottomLeftCorner = [x, y + h];
    const bottomRightCorner = [x + w, y + h];

    return (
        <>
            {/* rectangle */}
            <View style={{position: 'absolute', left: mm(topLeftCorner[0]), top: mm(topLeftCorner[1]), width: mm(w), height: mm(h), backgroundColor: color}} />

            {/* top-left corner: to-top line */}
            <View style={{position: 'absolute', left: mm(topLeftCorner[0]), top: mm(topLeftCorner[1] - (lineLength + lineGap)), width: mm(lineSize), height: mm(lineLength), backgroundColor: cutLineColor}} />
            {/* topleft corner: to-left line */}
            <View style={{position: 'absolute', left: mm(topLeftCorner[0] - (lineLength + lineGap)), top: mm(topLeftCorner[1]), width: mm(lineLength), height: mm(lineSize), backgroundColor: cutLineColor}} />

            {/* top-right corner: to-top line */}
            <View style={{position: 'absolute', left: mm(topRightCorner[0]), top: mm(topRightCorner[1] - (lineLength + lineGap)), width: mm(lineSize), height: mm(lineLength), backgroundColor: cutLineColor}} />
            {/* top-right corner: to-right line */}
            <View style={{position: 'absolute', left: mm(topRightCorner[0] + lineGap), top: mm(topRightCorner[1]), width: mm(lineLength), height: mm(lineSize), backgroundColor: cutLineColor}} />


            {/* bottom-right corner: to-bottom line */}
            <View style={{position: 'absolute', left: mm(bottomRightCorner[0]), top: mm(bottomRightCorner[1] + lineGap), width: mm(lineSize), height: mm(lineLength), backgroundColor: cutLineColor}} />
            {/* bottom-right corner: to-right line */}
            <View style={{position: 'absolute', left: mm(bottomRightCorner[0] + lineGap), top: mm(bottomRightCorner[1]), width: mm(lineLength), height: mm(lineSize), backgroundColor: cutLineColor}} />

            {/* bottom-left corner: to-bottom line */}
            <View style={{position: 'absolute', left: mm(bottomLeftCorner[0]), top: mm(bottomLeftCorner[1] + lineGap), width: mm(lineSize), height: mm(lineLength), backgroundColor: cutLineColor}} />
            {/* bottom-left corner: to-left line */}
            <View style={{position: 'absolute', left: mm(bottomLeftCorner[0] - (lineLength + lineGap)), top: mm(bottomLeftCorner[1]), width: mm(lineLength), height: mm(lineSize), backgroundColor: cutLineColor}} />




        </>
    );
}

export interface TicketProps {
    x: number;
    y: number;
    w: number;
    h: number;
    color?: string;
    cutLineColor?: string;
}

export default Ticket
