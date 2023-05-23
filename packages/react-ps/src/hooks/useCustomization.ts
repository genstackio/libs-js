import { useContext } from 'react';
import CustomizationContext from '../contexts/CustomizationContext';
import { customization_context_value } from '../types';

export function useCustomization() {
    return useContext<customization_context_value>(CustomizationContext);
}
