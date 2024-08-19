import { ItemCoordinate } from '../models/ItemCoordinate';
import { BORDER_SIZE } from '../varibles/commonVariables';

const isCoordinateOnSnake = (coordinates: ItemCoordinate[], x: number, y: number): boolean =>
  coordinates.some((coord) => coord.x === x && coord.y === y);

export const getNewCoordinate = (snakeCoordinates: ItemCoordinate[]): ItemCoordinate => {
  let x: number;
  let y: number;

  do {
    x = Math.floor(Math.random() * BORDER_SIZE);
    y = Math.floor(Math.random() * BORDER_SIZE);
  } while (isCoordinateOnSnake(snakeCoordinates, x, y));

  return { x, y };
};
