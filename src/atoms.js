import { atom, selector } from "recoil";

export const counterState = atom({
    key: 'counterState',
    default: 0,
    effects: [
        ({ onSet }) => {
            onSet(val => {
                console.debug('effect logger: ', val)
            })
        },
    ]
});

export const randomState = selector({
    key: 'randomState',
    get: async ({ get }) => {
        const counter = get(counterState);
        const random = await fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
            .then(res => res.json())
            .then(data => data);

        return counter * random;
    },
})