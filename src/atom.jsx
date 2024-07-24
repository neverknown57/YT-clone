import { useRecoilValue, useSetRecoilState, atom } from "recoil";
import input from './input.jsx'
export const videos = atom({
    key: 'vidoList',
    default: input
})
// inp
// videos.useSetRecoilState(input);
