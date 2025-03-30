document.addEventListener("DOMContentLoaded", async function () {
    // Set up dimensions
    const width = 928;
    const height = width;
    const margin = 1;

    // Load dataset
    const data = await d3.csv("sampledataset.csv", d3.autoType);

    // Aggregate data: Compute average fuel consumption (conso_mixte) per brand (lib_mrq)
    const fuelByBrand = Array.from(
        d3.group(data, d => d.lib_mrq),
        ([brand, values]) => ({
            id: brand,
            value: d3.mean(values, d => d.conso_mixte)
        })
    ).filter(d => !isNaN(d.value)); // Remove invalid values

    // Define color scale
    const color = d3.scaleOrdinal(d3.schemeTableau10)
        .domain(fuelByBrand.map(d => d.id));

    // Create pack layout
    const pack = d3.pack()
        .size([width - margin * 2, height - margin * 2])
        .padding(3);

    // Compute hierarchy for pack layout
    const root = pack(d3.hierarchy({ children: fuelByBrand }).sum(d => d.value));

    // Create SVG container
    const svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-margin, -margin, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
        .attr("text-anchor", "middle");

    // Append nodes (bubbles)
    const node = svg.append("g")
        .selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    // Add title tooltip
    node.append("title")
        .text(d => `${d.data.id}\n${d3.format(".1f")(d.value)} L/100km`);

    // Add circles (bubbles)
    node.append("circle")
        .attr("fill-opacity", 0.7)
        .attr("fill", d => color(d.data.id))
        .attr("r", d => d.r);

    // Add brand labels (always visible)
    const brandText = node.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .text(d => d.data.id);

    // Add hidden consumption values (visible only on click)
    const valueText = node.append("text")
        .attr("x", 0)
        .attr("y", 15)
        .attr("fill-opacity", 0) // Initially hidden
        .text(d => d3.format(".1f")(d.data.value) + " L/100km");

    // Click event to show/hide values
    node.on("click", function (event, d) {
        const textElement = d3.select(this).selectAll("text").filter((d, i) => i === 1); // Select second text element (value)
        const currentOpacity = textElement.attr("fill-opacity");

        // Toggle visibility
        textElement.attr("fill-opacity", currentOpacity == 1 ? 0 : 1);
    });

    // Add color legend
    d3.select("body").append(() => Swatches(color));
});
