import {args, s, a} from "../utils";
import {Pagination} from '../../src';

export default {
    title: 'Molecules/Pagination',
    component: Pagination,
    argTypes: a({
        size: args.size,
        color: args.color,
        disabledPass: args.disabled,
        disabledSkip: args.disabled,
    }),
}

const Template = args => <Pagination {...args} />;

export const basic = s(Template, {
    total: 12,
    size: "md",
});

export const fewPages = s(args => (
    <div className={'space-y-2'}>
        <div className={'flex items-center space-x-4'}>
            <Template total={3} color={'primary'} size={"sm"} />
            <Template total={5} color={'secondary'} size={"md"} />
            <Template total={1} color={"standard"} size={"lg"} />
        </div>
    </div>
), {})

export const showcase = s(args => (
    <div className={'space-y-2'}>
        <p>SIZE</p>
        <div className={'flex items-center space-x-4'}>
            <Template total={12} size={"sm"} />
            <Template total={12} size={"md"} />
            <Template total={12} size={"lg"} />
        </div>
        <p>COLORS</p>
        <div className={'flex items-center space-x-4'}>
            <Template total={3} color={'primary'} />
            <Template total={3} color={'secondary'} />
            <Template total={3} color={"success"} />
            <Template total={3} color={'info'} />
            <Template total={3} color={'warning'} />
            <Template total={3} color={"danger"} />
            <Template total={3} color={"light"} />
            <Template total={3} color={"dark"} />
        </div>
    </div>
), {})
