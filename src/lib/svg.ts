const backgroundColor = '#8A8984';

const colorAlpha = '0.5';

export const labelToColour = {
    U: `rgba(127,28,201,${colorAlpha})`,
    L: `rgba(15,127,18,${colorAlpha})`,
    N: `rgba(255,253,56,${colorAlpha})`,
    S: `rgba(252,32,40,${colorAlpha})`,
    P: `rgba(253,128,35,${colorAlpha})`,
    Y: `rgba(41,253,47,${colorAlpha})`,
    V: `rgba(103,131,227,${colorAlpha})`,
    Z: `rgba(252,22,129,${colorAlpha})`,
}

const createSvgElement = (elementName: string, additionalAttributes: {[key: string]: string | number} = {}): SVGElement => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', elementName)
    Object.entries(additionalAttributes).forEach(([name, value]) =>
        element.setAttribute(name, value.toString()))
    return element
}

export const generateSvg = (pattern: string, month: string, day: number): SVGElement => {
    const svg = createSvgElement('svg', {class: 'board', viewBox: "0 0 800 800"});
    
    svg.appendChild(createSvgElement('rect', {
        x: 0,
        y: 0,
        width: 800,
        height: 800,
        stroke: backgroundColor,
        fill: 'transparent',
        'stroke-width': '100',
    }))
    
    svg.appendChild(createSvgElement('path', {
        d: 'M52,52 h196 v96 h-100 v100 h-96 Z',
        fill: labelToColour.U,
    }))

    /*svg.appendChild(createSvgElement('rect', {
        d: 'M0,0 H800 V800 H0 V0 M50,50 H700 V700 H0 Z',
        fill: backgroundColor,
    }))*/
    
    return svg;
}