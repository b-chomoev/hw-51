import './App.css';
import LotteryBall from "./components/LotteryBall/LotteryBall";
import {useState} from "react";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const randomNumbers = () => {
        console.log('Hello');
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
