import { useMemo } from 'react';
import getInitials from '../utils/getInitials';

export function useInitials(name: string) {
    return useMemo(() => getInitials(name), [name]);
}

export default useInitials;
