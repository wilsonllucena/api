// Either é um padrão de projeto que pode ser usado para representar um valor que pode ser válido ou inválido.
// O Left é usado para representar um erro e o Right é usado para representar um valor válido.
export class Left<L, R> {
    readonly value: L;
    constructor(value: L) {
        this.value = value;
    }
    isLeft(): this is Left<L, R> {
        return true;
    }   
    isRight(): this is Right<L, R> {
        return false;
    }
}

export class Right<L, R> {
    readonly value: R;
    constructor(value: R) {
        this.value = value;
    }
    isLeft(): this is Left<L, R> {
        return false;
    }
    isRight(): this is Right<L, R> {
        return true;
    }
}

//Essa função é usada para criar um left que retorna valor inválido
export const left = <L, R>(value: L): Either<L, R> => new Left<L, R>(value);
// Essa função é usada para criar um right que retorna um valor válido
export const right = <L, R>(value: R): Either<L, R> => new Right<L, R>(value);

// Tipo Either que pode ser Left ou Right
export type Either<L, R> = Left<L, R> | Right<L, R>;