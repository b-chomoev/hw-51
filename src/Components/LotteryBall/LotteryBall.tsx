import React from 'react';
import './LotteryBall.css';

interface Props {
    number: number;
}

const LotteryBall: React.FC<Props> = ({number}) => {
    return (
        <div className='lottery-number'>
            <div>{number}</div>
        </div>
    );
};

export default LotteryBall;