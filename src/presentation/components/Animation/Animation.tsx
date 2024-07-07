import styles from './animation.module.css';
import { Setting } from './interface';

interface props {
  setting: Setting,
  isHovered: boolean,
}

export const Animation: React.FC<props> = ({ setting, isHovered }) => {
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

  const containerStyle = {
    right: right,
    width: width,
		top: top,
  };

	return (
				<div className={`${styles.animation} ${isHovered ? styles.hovered : ''}`} style={{...containerStyle}}>
					<svg width='100%' height='100%'>
						<line 
							x1={line1.x1} 
							y1={line1.y1} 
							x2={line1.x2} 
							y2={line1.y2}  
							strokeWidth='1px' 
							stroke='#164DC4' 
							className={styles.line}
						/>
						<line 
							x1={line2.x1} 
							y1={line2.y1} 
							x2={line2.x2} 
							y2={line2.y2} 
							strokeWidth='1px' 
							stroke='#164DC4' 
							strokeDasharray="100%"
        			strokeDashoffset="100%"
							className={styles.line_vert_s}
    				/>
						<line 
							x1={line3.x1} 
							y1={line3.y1} 
							x2={line3.x2} 
							y2={line3.y2} 
							strokeWidth='1px' 
							stroke='#164DC4' 
							strokeDasharray="100%"
        			strokeDashoffset="100%"
							className={styles.line_vert_m}
						/>
						{circle.map(item => {
							return (
								<circle 
									key={item.id} 
									cx={item.cx} 
									cy={item.cy} 
									r={item.r} 
									fill='#164DC4'
								/>
							)
						})}
						{rect.map(item => {
							return (
								<rect 
									key={item.id} 
									x={item.x} 
									y={item.y} 
									width="6"
									height="6"
									fill='#164DC4'
								/>
							)
						})}
						{diagonal.map(item => {
							return (
								<line 
									key={item.id} 
									x1={item.x1} 
									y1={item.y1} 
									x2={item.x2} 
									y2={item.y2} 
									strokeWidth="1px" 
									stroke="#164DC4"
									strokeDasharray="100%"
        					strokeDashoffset="100%"
									className={styles.line_diagonal}
								/>
							)
						})}
					</svg>
				</div>
	)
}