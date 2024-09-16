import './App.css';
import LotteryBall from "./Components/LotteryBall/LotteryBall";
import {useState} from "react";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const getRandomNumbers = () => {
        let newNumberArray: number[] = [];

        while (true) {
            if (newNumberArray.length === 5) break;

            let randomNumber = Math.floor(Math.random() * (36 + 1 - 5) + 5);

            if (!newNumberArray.includes(randomNumber)) newNumberArray.push(randomNumber);
        }

        setNumbers(newNumberArray.sort((a, b) => a - b));
    };

    return (
        <>
            <div className='lottery-ball'>
                {numbers.map((number, index) => (
                    <LotteryBall key={index} number={number}/>
                ))}
            </div>
            <button type='button' onClick={getRandomNumbers}>New numbers</button>
        </>
    );
};

export default App;
