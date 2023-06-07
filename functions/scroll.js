export const scrollTrigger = (ref, f, values, customStart, customEnd) => {
    let start = customStart || ref.current.offsetTop - window.innerHeight
    let end = customEnd || start + window.innerHeight + ref.current.clientHeight;
    const percentages = []


    if (start > window.scrollY && ref.current.store) {
        for (let i = 0; values.length > i; i++) {
            percentages.push(values[i][0])
        }
        f(percentages, ref.current)
        ref.current.store = false
    } else if (window.scrollY > end && ref.current.store) {
        for (let i = 0; values.length > i; i++) {
            percentages.push(values[i][1])
        }
        f(percentages, ref.current);
        ref.current.store = false
    }
    if (window.scrollY <= end && start <= window.scrollY) {
        for (let i = 0; values.length > i; i++) {
            percentages.push((((window.scrollY - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
        }
        f(percentages, ref.current)
        if (!ref.current.store) {
            ref.current.store = true
        }
    }
};