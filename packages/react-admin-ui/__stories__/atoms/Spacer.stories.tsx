import {s} from "../utils";
import {Spacer} from '../../src';

export default {
    title: 'Atoms/Spacer',
    component: () => null,
    argTypes: {
    }
}

const Demo = ({size = undefined, color, variant = undefined}: {size?: number, color, variant?: string}) => (
    <div style={{minWidth: variant === 'vertical' ? 70 : 'unset', marginBottom: variant === 'vertical' ? 'unset' : 15, marginRight: variant === 'vertical' ? 15 : 'unset'}}>
        <div>size = {'undefined' === typeof size ? '?' : size}</div>
        <div style={{backgroundColor: color, display: variant === 'vertical' ? 'inline-block' : 'flex', height: variant === 'vertical' ? 300 : 'unset'}}>
            <Spacer size={size} variant={variant} />
        </div>
    </div>
);

export const basic = s(() => {
    const bgColor = '#F7D0FB';
    return (
        <div>
            <div style={{color: 'red', marginBottom: 15}}>
                The
                <div style={{display: 'inline-block', width: 30, height: 20, verticalAlign: '-30%', backgroundColor: bgColor}} />
                color is for demo only, spacers are transparent.
            </div>
            <Demo color={bgColor} />
            {[...Array(20).keys() as any].map(i => (
                <Demo key={i} size={i + 1} color={bgColor} />
            ))}
        </div>
    );
}, {})

export const horizontal = s(() => {
    const bgColor = '#F7D0FB';
    return (
        <div>
            <div style={{color: 'red', marginBottom: 15}}>
                The
                <div style={{display: 'inline-block', width: 30, height: 20, verticalAlign: '-30%', backgroundColor: bgColor}}/>
                color is for demo only, spacers are transparent.
            </div>
            <Demo variant={'horizontal'} color={bgColor} />
            {[...Array(20).keys() as any].map(i => (
                <Demo variant={'horizontal'} key={i} size={i + 1} color={bgColor} />
            ))}
        </div>
    );
}, {});
export const vertical = s(() => {
    const bgColor = '#F7D0FB';
    return (
        <div>
            <div style={{color: 'red', marginBottom: 15}}>
                The
                <div style={{display: 'inline-block', width: 30, height: 20, verticalAlign: '-30%', backgroundColor: bgColor}}/>
                color is for demo only, spacers are transparent.
            </div>
            <div style={{display: 'flex'}}>
                <Demo variant={'vertical'} color={bgColor} />
                {[...Array(20).keys() as any].map(i => (
                    <Demo variant={'vertical'} key={i} size={i + 1} color={bgColor} />
                ))}
            </div>
        </div>
    );
}, {});
