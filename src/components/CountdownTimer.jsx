// import React, { useState, useEffect } from 'react';

// const CountdownTimer = ({ targetDate }) => {
//     const calculateTimeLeft = () => {
//         const difference = +new Date(targetDate) - +new Date();
//         let timeLeft = {};

//         if (difference > 0) {
//             timeLeft = {
//                 dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                 horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                 minutos: Math.floor((difference / 1000 / 60) % 60),
//                 segundos: Math.floor((difference / 1000) % 60)
//             };
//         }

//         return timeLeft;
//     };

//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearTimeout(timer);
//     });

//     const timerComponents = [];

//     Object.keys(timeLeft).forEach((interval) => {
//         if (!timeLeft[interval]) {
//             return;
//         }

//         timerComponents.push(
//             <span key={interval}>
//                 {timeLeft[interval]} {interval}{" "}
//             </span>
//         );
//     });

//     return (
//         <div>
//             {timerComponents.length ? timerComponents : <span>Acabou o tempo!</span>}
//         </div>
//     );
// };

// export default CountdownTimer;

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <p
            style={{ display: 'inline-block' }}
            className='text-red-600'
        >
            {formatTime(timeLeft.horas)}:{formatTime(timeLeft.minutos)}:{formatTime(timeLeft.segundos)}
        </p>
    );
};

export default CountdownTimer;