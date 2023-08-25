(function () {
    'use strict';

    const width = 960;
    const height = 500;
    const margin = {top: 40, left: 50, right: 50, bottom: 125};

    const render = (root) => {
        const svg = d3.select('Body')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

        const voronoiTreemap = d3.voronoiTreemap()
            .size([width, height]);

        const rootHierarchy = d3.hierarchy(root).sum(d => d.value);
        voronoiTreemap(rootHierarchy);

        const cell = svg.selectAll(".cell")
            .data(rootHierarchy.leaves())
            .enter().append("path")
            .attr("class", "cell")
            .attr("d", d => "M" + d.polygon.join("L") + "Z")
            .attr("fill", (d, i) => d3.schemeCategory10[i % 10]);

        svg.selectAll(".label")
            .data(rootHierarchy.leaves())
            .enter().append("text")
            .attr("class", "label")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("x", d => d.polygon.site.x)
            .attr("y", d => d.polygon.site.y)
            .text(d => d.data.name);
    };

    d3.json("nobel_category.json").then(data => {
        render(data);
    });

}());