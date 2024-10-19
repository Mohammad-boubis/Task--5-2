document.getElementById('convertButton').addEventListener('click', function() {
    const valueInput = document.getElementById('valueInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (valueInput === "") {
        result = "يرجى إدخال قيمة صحيحة.";
    } else {
        const value = parseFloat(valueInput);
        let meters;

        // تحويل القيمة إلى متر
        switch (fromUnit) {
            case "متر":
                meters = value;
                break;
            case "كيلومتر":
                meters = value * 1000;
                break;
            case "سنتيمتر":
                meters = value / 100;
                break;
            case "ميل":
                meters = value * 1609.34;
                break;
            case "قدم":
                meters = value * 0.3048;
                break;
            case "بوصة":
                meters = value * 0.0254;
                break;
        }

        // تحويل المتر إلى الوحدة المطلوبة
        switch (toUnit) {
            case "متر":
                result = meters;
                break;
            case "كيلومتر":
                result = meters / 1000;
                break;
            case "سنتيمتر":
                result = meters * 100;
                break;
            case "ميل":
                result = meters / 1609.34;
                break;
            case "قدم":
                result = meters / 0.3048;
                break;
            case "بوصة":
                result = meters / 0.0254;
                break;
        }
    }

    document.getElementById('result').innerText = `النتيجة: ${result} ${toUnit}`;
});
