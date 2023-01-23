import { registerProvider } from '@genstackio/gh';
import provider from './sentry';

registerProvider('sentry', provider);
