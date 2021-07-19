import { StyleSheet, Page } from '@react-pdf/renderer';
import Ticket from "../Ticket";

const styles = StyleSheet.create({
    page: {
    },
});

export function TicketsPage({  }: TicketsPageProps) {
    const leftStart = 18.5;
    const ticketWidth = 80;
    const ticketHeight = 50;
    const gutter = 10;
    const topStart = 20;

    const ticketColor = 'limegreen';
    const cutLineColor = '#AAAAAA';

    return (
        <>
            <Page size={'A4'} orientation={'landscape'} style={styles.page}>
                {/* ligne 1 */}
                <Ticket x={leftStart} y={topStart} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                <Ticket x={leftStart + ticketWidth + gutter} y={topStart} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                <Ticket x={leftStart + 2 * (ticketWidth + gutter)} y={topStart} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                {/* ligne 2 */}
                <Ticket x={leftStart} y={topStart + ticketHeight + gutter} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                <Ticket x={leftStart + ticketWidth + gutter} y={topStart + ticketHeight + gutter} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                <Ticket x={leftStart + 2 * (ticketWidth + gutter)} y={topStart + ticketHeight + gutter} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                {/* ligne 3 */}
                <Ticket x={leftStart} y={topStart + 2 * (ticketHeight + gutter)} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                <Ticket x={leftStart + ticketWidth + gutter} y={topStart + 2 * (ticketHeight + gutter)} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
                <Ticket x={leftStart + 2 * (ticketWidth + gutter)} y={topStart + 2 * (ticketHeight + gutter)} w={ticketWidth} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
            </Page>
            <Page size={'A4'} orientation={'landscape'} style={styles.page}>
                <Ticket x={leftStart} y={topStart} w={ticketWidth * 2} h={ticketHeight} color={ticketColor} cutLineColor={cutLineColor} />
            </Page>
        </>
    );
}

export interface TicketsPageProps {
    title: string;
}

// noinspection JSUnusedGlobalSymbols
export default TicketsPage;
