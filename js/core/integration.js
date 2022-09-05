export function integration(ind){
    const up = ind.up
    const low = ind.low
    const steps = ind.accuracy
    let func = processFunc(ind.func)
    console.log(func)

    if(!func) throw 'Enter a Function'
    
    const h = (up - low) / steps
    let s
    try {
        s = calculate(func, low) + calculate(func, up)
    } catch (error) {
        throw 'Function is invalid'
    }
    
    if(up == low) return 0


    for(let i = 1; i < steps; i++)
        s+= 2 * calculate(func, low + i * h)

    return Number.parseFloat((s*h / 2).toFixed(7))
}

function calculate(func, x){
    return eval(func)
}

function processFunc(func = ''){
    // return func.replace(//g, 'Math.')
    func =  func.replace(/(E|LN2|LN10|LOG2E|LOG10E|PI|SQRT1_2|SQRT2|abs|acos|acosh|asin|asinh|atan|atanh|atan2|cbrt|ceil|clz32|cos|cosh|exp|expm1|floor|fround|imul|log|log1p|log10|log2|max|min|pow|random|sign|sin|sinh|sqrt|tan|tanh|trunc)/gi, 'Math.$1')
    return func.replaceAll('^','**')
}
