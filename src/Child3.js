import { useRecoilValue } from 'recoil';
import { randomState } from "./atoms";

const Child3 = () => {
    const random = useRecoilValue(randomState);
    return (
        <span style={{ display: 'block' }}>random: {random}</span>
    );
}

export default Child3;