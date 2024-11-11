async function Api() {
    const response_Petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current_weather=true');
    const response_Astana = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.1694&longitude=71.4491&current_weather=true');
    const response_Tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current_weather=true');
    const response_Barcelona = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current_weather=true');
    const response_Madrid = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current_weather=true');
    
    const data_Petro = await response_Petro.json();
    const data_Astana = await response_Astana.json();
    const data_Tucson = await response_Tucson.json();
    const data_Barcelona = await response_Barcelona.json();
    const data_Madrid = await response_Madrid.json();

    console.log(data_Petro, data_Astana, data_Tucson, data_Barcelona, data_Madrid);

    return [data_Petro, data_Astana, data_Tucson, data_Barcelona, data_Madrid];
}

async function output() {
    try {
        let out = await Api();
        
        
        const Petro = document.getElementById('Petro');
        const Astana = document.getElementById('Astana');
        const Tucson = document.getElementById('Tucson');
        const Barcelona = document.getElementById('Barcelona');
        const Madrid = document.getElementById('Madrid');

        Petro.textContent = `Air temperature: ${out[0].current_weather.temperature} \u00B0C`;
        Astana.textContent = `Air temperature: ${out[1].current_weather.temperature} \u00B0C`;
        Tucson.textContent = `Air temperature: ${out[2].current_weather.temperature} \u00B0C`;
        Barcelona.textContent = `Air temperature: ${out[3].current_weather.temperature} \u00B0C`;
        Madrid.textContent = `Air temperature: ${out[4].current_weather.temperature} \u00B0C`;
    }
    catch (error) {
        console.log('Error:', error);
    }
    finally {
        setTimeout(output, 10000);  
    }
}

output();
