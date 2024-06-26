//Креирање на модул за конверзија на вредности од еден во друг систем (mi -> km, c -> f, lbs -> kg, ft -> m)
const convertMilesToKm = (miles) => {
    return miles * 1.6;
};

const convertCsToF = (celsius) => {
    return celsius * 2 + 30;
};

const convertLbsToKg = (lbs) => {
    return lbs * 0.4535;
};

const convertFttoM = (ft) => {
    return ft * 0.3048;
};

module.exports = {
    convertMilesToKm, 
    convertCsToF,
    convertLbsToKg,
    convertFttoM,
}