import './App.css';
import LotteryBall from "./components/LotteryBall/LotteryBall";
import {useState} from "react";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const randomNumbers = () => {
        setNumbers([
            Math.floor(Math.random() * (10 - 5) + 5),
            Math.floor(Math.random() * (15 - 11) + 11),
            Math.floor(Math.random() * (22 - 16) + 16),
            Math.floor(Math.random() * (31 - 23) + 23),
            Math.floor(Math.random() * (36 - 32) + 32)
        ]);
    };

    return (
        <>
            <div className='lottery-ball'>
                {numbers.map((number, index) => (
                    <LotteryBall key={index} number={number}/>
                ))}
            </div>
            <button type='button' onClick={randomNumbers}>New numbers</button>
        </>
    );
};

export default App;
