import { useEffect, useRef, useState } from 'react';
import { Image } from '../Image/Image';
import './Slider.css';

export const Slider = ({ data }) => {
    const touchStartX = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const startInterval = () => {
            return setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 5000);
        };
        let interval = startInterval();

        const slider = document.querySelector('.slider');
        const handleMouseOver = () => {
            clearInterval(interval);
        };
        const handleMouseOut = () => {
            interval = startInterval();
        };
        slider.addEventListener('mouseover', handleMouseOver);
        slider.addEventListener('mouseout', handleMouseOut);

        return () => {
            clearInterval(interval);
            slider.removeEventListener('mouseover', handleMouseOver);
            slider.removeEventListener('mouseout', handleMouseOut);
        };
    }, [data.length]);

    useEffect(() => {
        const slider = document.querySelector('.slider');

        const handleWheel = (e) => {
            if (e.deltaY > 0) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            } else {
                setCurrentIndex(
                    (prevIndex) => (prevIndex - 1 + data.length) % data.length,
                );
            }
        };

        slider.addEventListener('wheel', handleWheel);

        return () => {
            slider.removeEventListener('wheel', handleWheel);
        };
    }, [data.length]);

    useEffect(() => {
        const slider = document.querySelector('.slider');

        const handleTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchDifference = touchStartX.current - touchEndX;

            if (touchDifference > 50) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            } else if (touchDifference < -50) {
                setCurrentIndex(
                    (prevIndex) => (prevIndex - 1 + data.length) % data.length,
                );
            }
        };

        slider.addEventListener('touchstart', handleTouchStart);
        slider.addEventListener('touchend', handleTouchEnd);

        return () => {
            slider.removeEventListener('touchstart', handleTouchStart);
            slider.removeEventListener('touchend', handleTouchEnd);
        };
    }, [data.length]);

    return (
        <div className="slider">
            {data.map((link, index) => (
                <Image
                    key={index}
                    link={link}
                    index={index}
                    currentIndex={currentIndex}
                />
            ))}
            <div className="slider-indicator">
                {data.map((_, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`slider-btn${index === currentIndex ? ' _active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};
