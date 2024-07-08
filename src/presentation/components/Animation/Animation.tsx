import React, { useEffect, useState } from 'react';
import styles from './animation.module.css';
import { Setting } from './interface';

interface Props {
  setting: Setting,
  isHovered: boolean,
}

export const Animation: React.FC<Props> = ({ setting, isHovered }) => {
  const {
    line1,
    line2,
    line3,
    circle,
    rect,
    diagonal,
    right,
    width,
    top,
  } = setting;
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  
  const calculateValue = (value: string, containerWidth: number) => {
  if (value.includes('calc')) {
    const matches = value.match(/calc\((.*)\)/);
    if (matches) {
      const expression = matches[1];

      const percentMatches = expression.match(/(\d+)%/);
      if (percentMatches) {
        const percentage = parseFloat(percentMatches[1]);
        const pixels = (percentage / 100) * containerWidth;
        const remainingExpression = expression.replace(/(\d+)%/, pixels.toString());
        
        const [left, right] = remainingExpression.split(' - ');
        const leftValue = parseFloat(left);
        const rightValue = parseFloat(right);

        if (!isNaN(leftValue) && !isNaN(rightValue)) {
          return `${leftValue - rightValue}px`;
        }
      }
    }
  }
  return value;
};

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    right: right,
    width: width,
    top: top,
  };

  return (
    <div className={`${styles.animation} ${isHovered ? styles.hovered : ''}`} style={{ ...containerStyle }}>
      <svg width='100%' height='100%'>
        <line
          x1={calculateValue(line1.x1, containerWidth)}
          y1={line1.y1}
          x2={calculateValue(line1.x2, containerWidth)}
          y2={line1.y2}
          strokeWidth='1px'
          stroke='#164DC4'
          className={styles.line}
        />
        <line
          x1={calculateValue(line2.x1, containerWidth)}
          y1={line2.y1}
          x2={calculateValue(line2.x2, containerWidth)}
          y2={line2.y2}
          strokeWidth='1px'
          stroke='#164DC4'
          strokeDasharray="100%"
          strokeDashoffset="100%"
          className={styles.line_vert_s}
        />
        <line
          x1={calculateValue(line3.x1, containerWidth)}
          y1={line3.y1}
          x2={calculateValue(line3.x2, containerWidth)}
          y2={line3.y2}
          strokeWidth='1px'
          stroke='#164DC4'
          strokeDasharray="100%"
          strokeDashoffset="100%"
          className={styles.line_vert_m}
        />
        {circle.map(item => (
          <circle
            key={item.id}
            cx={calculateValue(item.cx, containerWidth)}
            cy={item.cy}
            r={item.r}
            fill='#164DC4'
          />
        ))}
        {rect.map(item => (
          <rect
            key={item.id}
            x={calculateValue(item.x, containerWidth)}
            y={item.y}
            width="6"
            height="6"
            fill='#164DC4'
          />
        ))}
        {diagonal.map(item => (
          <line
            key={item.id}
            x1={calculateValue(item.x1, containerWidth)}
            y1={item.y1}
            x2={calculateValue(item.x2, containerWidth)}
            y2={item.y2}
            strokeWidth="1px"
            stroke="#164DC4"
            strokeDasharray="100%"
            strokeDashoffset="100%"
            className={styles.line_diagonal}
          />
        ))}
      </svg>
    </div>
  );
};
