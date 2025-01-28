import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25); // Начинаем с 25 минут
  const [seconds, setSeconds] = useState(0); // Секунды
  const [isActive, setIsActive] = useState(false); // Статус таймера
  const [isBreak, setIsBreak] = useState(false); // Для переключения между рабочим временем и перерывом

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsBreak(!isBreak); // Переключаем режим
            setMinutes(isBreak ? 25 : 5); // Если перерыв, 5 минут, если работа, 25 минут
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer); // Останавливаем таймер, если не активен
    }
    return () => clearInterval(timer); // Очищаем таймер при размонтировании компонента
  }, [isActive, minutes, seconds, isBreak]);

  const startPauseTimer = () => {
    setIsActive(!isActive); // Стартуем или ставим на паузу
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(isBreak ? 5 : 25); // Сброс таймера
    setSeconds(0);
  };

  return (
    <div>
      <h2>{isBreak ? 'Break Time' : 'Work Time'}</h2>
      <p>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      <button onClick={startPauseTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;