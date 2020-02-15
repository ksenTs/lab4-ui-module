export class ResultDto {
  public x: number;
  public y: number;
  public isInArea: boolean;

  constructor(x: number, y: number, isInArea: boolean) {
    this.x = x;
    this.y = y;
    this.isInArea = isInArea;
  }
}
