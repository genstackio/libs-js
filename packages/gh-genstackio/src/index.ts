import {registerEnricher} from '@genstackio/gh';
import enricher from './genstackio';

registerEnricher('genstackio', enricher);
