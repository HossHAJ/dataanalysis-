d3.csv("sampledataset.csv").then(data => {
    // Convertir les données en nombres
    data.forEach(d => {
        d.masse_ordma_max = +d.masse_ordma_max;
        d.co2 = +d.co2;
    });

    // Définition des dimensions du graphique
    const width = 928;
    const height = 600;
    const margin = { top: 20, right: 40, bottom: 40, left: 50 };

    // Échelles
    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.masse_ordma_max)).nice()
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain(d3.extent(data, d => d.co2)).nice()
        .range([height - margin.bottom, margin.top]);

    // Création du SVG
    const svg = d3.select("#chart").append("svg")
        .attr("viewBox", [0, 0, width, height]);

    // Axes
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(10));

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

    // Ajouter une légende pour afficher les coordonnées
    const legend = svg.append("text")
        .attr("x", width - margin.right - 200)
        .attr("y", margin.bottom + 10)
        .attr("fill", "#2c7a2c")
        .attr("font-size", "12px")
        .text("Masse: - , CO2: -");

    // Points du scatter plot
    svg.append("g")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => x(d.masse_ordma_max))
        .attr("cy", d => y(d.co2))
        .attr("r", 5)
        .attr("fill", "steelblue")
        .attr("opacity", 0.7)
        .on("mouseover", function(event, d) {
            d3.select(this).attr("fill", "orange").attr("r", 7);
            legend.text(`Masse: ${d.masse_ordma_max} kg, CO2: ${d.co2} g/km`);
        })
        .on("mouseout", function() {
            d3.select(this).attr("fill", "steelblue").attr("r", 5);
            legend.text("Masse: - , CO2: -");
        });
});

