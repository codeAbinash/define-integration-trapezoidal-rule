export function integration(ind){
    const up = ind.up
    const low = ind.low
    const steps = ind.accuracy
    let func = ind.func
    
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
