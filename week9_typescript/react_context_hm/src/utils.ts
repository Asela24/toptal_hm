import { CommentInterface } from "./reducer";

export const createCommentObject = (text: string) => {

    const obj: CommentInterface  = {
        id:Math.floor(Date.now() / 1000),
        name: 'Max',
        text: text,
        count: 0,
        inputDisabled: true,
    }

    return obj;
}
