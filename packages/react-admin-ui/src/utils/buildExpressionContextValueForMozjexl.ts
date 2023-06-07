import mozjexl from 'mozjexl';

export function buildExpressionContextValueForMozjexl() {
    return {
        eval: (condition, data) => mozjexl.eval(condition, data),
    };
}

export default buildExpressionContextValueForMozjexl;
