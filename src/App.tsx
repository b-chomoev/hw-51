import LotteryBall from "./Components/LotteryBall/LotteryBall";
import './App.css';
import {useState} from "react";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const getRandomNumbers = () => {
        const newNumbersArray: number[] = [];

        while (true) {
            if (newNumbersArray.length === 5) break;

            const randomNumber = Math.floor(Math.random() * (36 + 1 - 5) + 5);

            if (!newNumbersArray.includes(randomNumber)) newNumbersArray.push(randomNumber);

            setNumbers(newNumbersArray.sort((a, b) => a - b));
        }
    };

    return (
        <>
            <div className='lottery-ball'>
                {numbers.map((number) => (
                    <LotteryBall number={number}/>
                ))}
            </div>
            <button type='button' onClick={getRandomNumbers}>Change numbers</button>
        </>
    );
};

export default App;