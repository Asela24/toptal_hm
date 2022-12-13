const randomColorGenerator = () => {
    const o = Math.round 
    const r = Math.random
    const s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};

export default randomColorGenerator;
