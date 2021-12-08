import { WritableDraft } from 'immer/dist/internal';
declare const actions: {
    registerEvent: (state: WritableDraft<{
        events: string[];
    }>, payload: string) => WritableDraft<{
        events: string[];
    }>;
};
export { actions };
