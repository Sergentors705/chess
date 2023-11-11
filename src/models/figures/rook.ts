import React from 'react'
import { Figure, FigureNames } from './figure'
import { Colors } from '../colors';

import blackLogo from '../../assets/black-rook.png';
import whiteLogo from '../../assets/white-rook.png';
import { Cell } from '../cell';

export default class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    return false;
  }
}
