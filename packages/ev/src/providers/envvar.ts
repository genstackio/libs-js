import AbstractProvider from '../AbstractProvider';

export class EnvvarProvider extends AbstractProvider {
    async findOne(key: string, options: any) {
        return process.env[key];
    }
}

export default EnvvarProvider;
