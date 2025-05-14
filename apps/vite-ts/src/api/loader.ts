import { CSV } from '@hpicgs/cbd-parser';

export const loader = new CSV({
    delimiter: ',',
    includesHeader: true,
});
