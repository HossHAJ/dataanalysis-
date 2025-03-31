document.addEventListener("DOMContentLoaded", function () {
    const width = 600, height = 600;
    const radius = Math.min(width, height) / 2 - 100;
    const angleSlice = (Math.PI * 2) / 3; 

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const selectedCarModels = [
        "SUZUKI", "MERCEDES", "VOLKSWAGEN", "RENAULT", "ALFA-ROMEO", 
        "CHEVROLET", "FIAT", "FERRARI", "VOLVO", "NISSAN", "BMW", "LEXUS"
    ];

    d3.csv("sampledataset.csv").then(data => {

        const filteredData = data.filter(d => selectedCarModels.includes(d.lib_mrq));

        const carModels = [...new Set(filteredData.map(d => d.lib_mrq))];

        const select = d3.select("#car-select");
        select.selectAll("option")
            .data(carModels)
            .enter()
            .append("option")
            .text(d => d);

        const maxValues = {
            "Max Power": d3.max(filteredData, d => +d.puiss_max || 0),
            "Fuel Consumption": d3.max(filteredData, d => +d.conso_mixte || 0),
            "CO2 Emissions": d3.max(filteredData, d => +d.co2 || 0)
        };

        function updateChart(selectedCar) {
            const filteredCar = filteredData.find(d => d.lib_mrq === selectedCar);
            if (!filteredCar) return;

            const values = [
                { axis: "Max Power", value: (+filteredCar.puiss_max || 0) / maxValues["Max Power"] * radius },
                { axis: "Fuel Consumption", value: (+filteredCar.conso_mixte || 0) / maxValues["Fuel Consumption"] * radius },
                { axis: "CO2 Emissions", value: (+filteredCar.co2 || 0) / maxValues["CO2 Emissions"] * radius }
            ];

            values.push(values[0]); 

            svg.selectAll("*").remove();

            for (let i = 1; i <= 5; i++) {
                svg.append("circle")
                    .attr("r", (radius * i) / 5)
                    .attr("class", "grid-circle");
            }

            values.forEach((d, i) => {
                const angle = angleSlice * i;
                svg.append("line")
                    .attr("x1", 0)
                    .attr("y1", 0)
                    .attr("x2", radius * Math.cos(angle))
                    .attr("y2", radius * Math.sin(angle))
                    .attr("class", "grid-line");

                svg.append("text")
                    .attr("x", (radius + 10) * Math.cos(angle))
                    .attr("y", (radius + 10) * Math.sin(angle))
                    .attr("class", "grid-text")
                    .text(Math.round(maxValues["Max Power"] / 5 * (i + 1)));
            });

            svg.selectAll(".axis-label")
                .data(values)
                .enter()
                .append("text")
                .attr("x", (d, i) => Math.cos(i * angleSlice - Math.PI / 2) * (radius + 20))
                .attr("y", (d, i) => Math.sin(i * angleSlice - Math.PI / 2) * (radius + 20))
                .attr("text-anchor", (d, i) => {
                    const angle = i * angleSlice - Math.PI / 2;
                    return angle > -Math.PI / 2 && angle < Math.PI / 2 ? "start" : "end";
                })
                .attr("class", "axis-label")
                .text(d => d.axis);

            const line = d3.lineRadial()
                .angle((d, i) => i * angleSlice)
                .radius(d => d.value);

            svg.append("path")
                .datum(values)
                .attr("d", line)
                .attr("class", "line")
                .attr("stroke", "#2c7a2c")
                .attr("fill", "none");

            svg.append("path")
                .datum(values)
                .attr("d", d3.areaRadial()
                    .angle((d, i) => i * angleSlice)
                    .radius(d => d.value))
                .attr("class", "area");

            svg.selectAll(".dot")
                .data(values)
                .enter()
                .append("circle")
                .attr("cx", (d, i) => Math.cos(i * angleSlice - Math.PI / 2) * d.value)
                .attr("cy", (d, i) => Math.sin(i * angleSlice - Math.PI / 2) * d.value)
                .attr("r", 4)
                .attr("class", "dot");
        }

        updateChart(carModels[0]);

        select.on("change", function () {
            updateChart(this.value);
        });
    });
});
