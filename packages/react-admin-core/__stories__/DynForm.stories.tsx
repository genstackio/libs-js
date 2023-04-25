import { s, a } from './utils';
import useDynForm from '../src/hooks/useDynForm';
import {useCallback} from "react";
import {Button} from "@genstackio/react-admin-ui";

export default {
    title: 'Misc/DynForm',
    component: () => null,
    argTypes: a({}),
};

function Template(args) {
    const [handleSubmit, DynForm] = useDynForm({
        view1: {
            content: [
                '$name',
                '$title',
                '$description',
            ]
        }
    }, 'view1', {});

    const onClick = useCallback((e: any) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit((data: any) => {
            alert(JSON.stringify(data, null, 4));
        })();
    }, [handleSubmit]);
    return (
        <div>
            <DynForm />
            <Button onClick={onClick}>display data</Button>
        </div>
    );
}

export const basic = s(Template, {});
