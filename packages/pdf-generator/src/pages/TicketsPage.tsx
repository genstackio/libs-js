import { StyleSheet, Page } from '@react-pdf/renderer';
import Ticket from '../Ticket';

const styles = StyleSheet.create({
    page: {},
});

export function TicketsPage({
    quantity,
    width,
    height,
    gutter,
    leftStart,
    topStart,
    pageWidth,
    pageHeight,
    ticketColor,
    cutLineColor,
}: TicketsPageProps) {
    const maxRow = Math.floor((pageWidth - gutter) / (width + gutter));
    const maxColumn = Math.floor((pageHeight - gutter) / (height + gutter));
    const items = [] as any;
    for (let y = 0; y < maxColumn; y++) {
        for (let x = 0; x < maxRow; x++) {
            items.push({ x: x, y: y });
        }
    }

    const layoutTicket = items.slice(0, quantity);

    return (
        <>
            <Page size={'A4'} orientation={'landscape'} style={styles.page}>
                {layoutTicket.map(({ x, y }, index) => (
                    <Ticket
                        key={index}
                        x={leftStart + x * (width + gutter)}
                        y={topStart + y * (height + gutter)}
                        w={width}
                        h={height}
                        color={ticketColor}
                        cutLineColor={cutLineColor}
                    />
                ))}
            </Page>
        </>
    );
}

export interface TicketsPageProps {
    title: string;
    quantity: number;
    width: number;
    height: number;
    gutter: number;
    leftStart: number;
    topStart: number;
    pageWidth: number;
    pageHeight: number;
    ticketColor: string;
    cutLineColor: string;
}

// noinspection JSUnusedGlobalSymbols
export default TicketsPage;
