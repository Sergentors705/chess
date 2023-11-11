import React from 'react'
import { Figure, FigureNames } from './figure'
import { Colors } from '../colors';

import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';
import { Cell } from '../cell';
import { Board } from '../board';

export default class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

      const dy = this.cell.y < target.y ? 1 : -1;
      const dx = this.cell.x < target.x ? 1 : -1;


        if (!this.cell.board.getCell(this.cell.x + dx, this.cell.y + dy).isEmpty()) {
          return true;
        }



    return false;
  }
}
