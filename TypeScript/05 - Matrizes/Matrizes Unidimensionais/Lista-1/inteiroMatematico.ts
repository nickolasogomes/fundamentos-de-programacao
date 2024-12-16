export default class InteiroMatematico {
  private n = 0;

  public constructor(n: number) {
    this.n = n;
  }

  public getN(): number {
    return this.n;
  }

  public setN(n: number): void {
    this.n = n;
  }

  public getDivisores(): number[] {
    let divisores: number[] = [1];
    let i = 2;

    while (i <= this.n / 2) {
      if (this.n % i == 0) divisores.push(i);
      i++;
    }
    divisores.push(this.n);
    return divisores;
  }

  public serieFibonacci(): number[] {
    if (this.n <= 0) return [];
    if (this.n == 1) return [0];
    let fibonacci: number[] = [1, 1];

    for (let i = 2; i < this.n; i++)
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    return fibonacci;
  }

  public serieTribonacci(): number[] {
    if (this.n <= 0) return [];
    if (this.n == 1) return [0];
    let fibonacci: number[] = [1, 1, 2];

    for (let i = 3; i < this.n; i++)
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2] + fibonacci[i - 3]);
    return fibonacci;
  }

  private isPrimo(n: number): boolean {
    if (n < 2) return false;
    if (n == 2) return true;
    for (let i = 3; i <= n / 2; i += 2) if (n % i == 0) return false;
    return true;
  }

  public getPrimos(): number[] {
    if (this.n <= 0) return [];
    if (this.n == 1) return [0];

    let primos: number[] = [2];
    for (let i = 3; primos.length < this.n; i += 2)
      if (this.isPrimo(i)) primos.push(i);

    return primos;
  }
}
