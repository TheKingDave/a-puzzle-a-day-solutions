const backgroundColor = '#8A8984';

const labelToColour = {
    U: '#7F1CC9',
    L: '#984D11',
    N: '#FFFD38',
    S: '#FC2028',
    P: '#FD8023',
    Y: '#29FD2F',
    V: '#6783E3',
    Z: '#FC1681',
}

const createSvgElement = (elementName, additionalAttributes = {}): SVGElement => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', elementName)
    Object.entries(additionalAttributes).forEach(([name, value]) =>
        element.setAttribute(name, value))
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