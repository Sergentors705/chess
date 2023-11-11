import React, { FC } from 'react';
import { Figure } from '../models/figures/figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <div className='lost-figures'>
      <h3>{title}</h3>
      <div className='lost-figures-container'>
        {figures.map(figure =>
          <div key={figure.id} className='lost-figure'>
            {figure.name} {figure.logo && <img className='lost-figure-logo' src={figure.logo} alt=""/>}
          </div>
        )}
      </div>
    </div>
  )
}

export default LostFigures;
