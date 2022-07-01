import { useCallback } from 'react';
import EditCurrentUserAction from '@genstackio/react-admin-ui/lib/molecules/actions/crud/EditCurrentUserAction';
import {useHistory} from 'react-router-dom';
import useUser from "@genstackio/react-contexts/lib/hooks/useUser";

export function EditCurrentUserScreen() {
    const history = useHistory();
    const [user] = useUser();
    const id = user!.id || '';
    const onSuccess = useCallback(
        () => {
            history.push('/user/profile');
        },
        [history],
    );
    return (
        <div className={'w-1/2'}>
            <EditCurrentUserAction id={id} onSuccess={onSuccess} />
        </div>
    );
}

export default EditCurrentUserScreen