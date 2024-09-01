interface ArithmeticExpresion {
    evaluate() : number
}


enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVISION
}


class ArithmeticNumber implements ArithmeticExpresion { // its leaf node
    private value : number
    constructor(value: number){
        this.value = value
    }
    evaluate(): number {
        return this.value
    }
}


class Expression implements ArithmeticExpresion {
    private leftExpression : ArithmeticExpresion
    private rightExpression : ArithmeticExpresion
    private operation : Operation
    constructor(leftExpression : ArithmeticExpresion,rightExpression : ArithmeticExpresion,operation :Operation) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
        this.operation = operation
    }
    evaluate(): number {
        let ans : number = 0
        switch(this.operation){
            case Operation.ADD:
                ans = this.leftExpression.evaluate( ) +  this.rightExpression.evaluate()
                break
            case Operation.SUBTRACT:
                ans = this.leftExpression.evaluate( ) -  this.rightExpression.evaluate()
                break
            case Operation.DIVISION:
                ans = this.leftExpression.evaluate( ) /  this.rightExpression.evaluate()
                break
            case Operation.MULTIPLY:
                ans = this.leftExpression.evaluate( ) *  this.rightExpression.evaluate()
                break
            
        }
        return ans
    }
}

const two = new ArithmeticNumber(2);
const one = new ArithmeticNumber(1);
const seven = new ArithmeticNumber(7);
const addExp = new Expression(two,one,Operation.ADD);
const parentExp = new Expression(seven,addExp,Operation.MULTIPLY)
console.log(parentExp.evaluate())
