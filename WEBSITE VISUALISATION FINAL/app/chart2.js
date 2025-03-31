document.addEventListener("DOMContentLoaded", function () {
    console.log("D3 version:", d3.version);

    const margin = { top: 20, right: 60, bottom: 40, left: 70 },
          width = 900 - margin.left - margin.right,
          height = 600 - margin.top - margin.bottom;

    const svg = d3.select("#chart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Tooltip attaché au body pour un meilleur contrôle de position
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background", "white")
        .style("border", "1px solid black")
        .style("padding", "5px")
        .style("font-size", "12px")
        .style("pointer-events", "none")
        .style("visibility", "hidden");

    d3.csv("sampledataset.csv").then(function (data) {
        data = data.slice(0, 150);

        data.forEach(d => {
            d.co2 = +d.co2;
        });

        const bubbleScale = d3.scaleSqrt()
            .domain([0, d3.max(data, d => d.co2)])
            .range([5, 40]);

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.lib_mrq))
            .range([0, width])
            .padding(1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.co2)])
            .range([height, 0]);

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale).tickSize(0).tickPadding(10));

        svg.append("g")
            .call(d3.axisLeft(yScale));

        svg.selectAll("circle")
            .data(data)
            .enter().append("circle")
            .attr("cx", d => xScale(d.lib_mrq))
            .attr("cy", d => yScale(d.co2))
            .attr("r", d => bubbleScale(d.co2))
            .style("fill", "#2c7a2c") // Couleur verte
            .style("opacity", 0.7)
            .on("mouseover", function (event, d) {
                d3.select(this).style("fill", "#1d5d1d");
                tooltip.style("visibility", "visible")
                    .text(`Model: ${d.lib_mod} | CO2: ${d.co2}`);
            })
            .on("mousemove", function (event) {
                tooltip.style("left", `${event.pageX + 15}px`)
                    .style("top", `${event.pageY + 15}px`);
            })
            .on("mouseout", function () {
                d3.select(this).style("fill", "#2c7a2c");
                tooltip.style("visibility", "hidden");
            });

        d3.select("body").on("click", function (event) {
            if (!event.target.matches("circle")) {
                tooltip.style("visibility", "hidden");
            }
        });
    });
});
