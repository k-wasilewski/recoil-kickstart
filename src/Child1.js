import { useRecoilState } from "recoil";
import { counterState } from "./atoms";

const Child1 = () => {
    const [counter] = useRecoilState(counterState);
    return (
        <span style={{ display: 'block' }}>counter: {counter}</span>
    );
}

export default Child1;