const width = 960;
const height = 500;

const render = (data) => {
    const svg = d3.select('Body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const voronoiTreemap = d3.voronoiTreemap();
    const hierarchy = d3.hierarchy(data).sum(d => d.value);

    voronoiTreemap.size([width, height])(hierarchy);

    const cells = svg.selectAll('path')
        .data(hierarchy.leaves())
        .enter()
        .append('path')
        .attr('d', d => `M${d.polygon.join('L')}Z`)
        .attr('fill', (_, i) => d3.schemeCategory10[i % 10])
        .attr('stroke', 'white');

    cells.append('title')
        .text(d => `${d.data.name}\n${d.value}`);
};

d3.json('nobel_category.json').then(data => {
    render(data);
});