function konversiSuhu(nilai, dari, ke) {
    // Konversi ke Celsius terlebih dahulu
    let celsius;
    switch(dari.toLowerCase()) {
        case 'celsius':
            celsius = nilai;
            break;
        case 'fahrenheit':
            celsius = (nilai - 32) * 5/9;
            break;
        case 'kelvin':
            celsius = nilai - 273.15;
            break;
        case 'reamur':
            celsius = nilai * 5/4;
            break;
        default:
            return "Satuan suhu asal tidak valid";
    }

    // Konversi dari Celsius ke satuan tujuan
    switch(ke.toLowerCase()) {
        case 'celsius':
            return celsius;
        case 'fahrenheit':
            return (celsius * 9/5) + 32;
        case 'kelvin':
            return celsius + 273.15;
        case 'reamur':
            return celsius * 4/5;
        default:
            return "Satuan suhu tujuan tidak valid";
    }
}

// Contoh penggunaan:
console.log(konversiSuhu(20, 'celsius', 'fahrenheit')); // 212
console.log(konversiSuhu(98, 'fahrenheit', 'celsius')); // 37
console.log(konversiSuhu(200, 'kelvin', 'celsius')); // 26.85
console.log(konversiSuhu(70, 'reamur', 'celsius')); // 100