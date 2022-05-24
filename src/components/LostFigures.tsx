import React, { FC } from 'react'
import { Figure } from '../models/figures/Figure';

interface lostFiguresProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<lostFiguresProps> = ({title, figures}) => {
  return (
    <div className='lost'>
        <h3>{title}</h3>
        {figures.map(figure => 
              <div key={figure.id}>
                  {figure.name} {figure.logo && <img style={{width: '20px', height: '20px'}} src={figure.logo}/>}
              </div>  
        )}
    </div>
  )
}

export default LostFigures