import { useRecoilState } from "recoil";
import { counterState } from "./atoms";

const Child2 = () => {
    const [counter, setCounter] = useRecoilState(counterState);
    return (
        <button style={{ display: 'block' }} onClick={() => setCounter(counter+1)}>increment</button>
    );
}

export default Child2;