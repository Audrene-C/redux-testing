export const addInputs = (output) => {
    return {
        type: "ADD_INPUTS",
        output: output
    }
};

export const subtractInputs = (output) => {
    return {
        type: "SUBTRACT_INPUTS",
        output: output
    }
};

export const  fetchRandomNumber =  async function() {
    const response = await fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8');
    const data = await response.json();
    return data.data[0];
};