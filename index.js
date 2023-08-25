let url = 'https://raw.githubusercontent.com/unlone/raw/master/nobel_cleaned1.csv';

d3.csv(url).then((data) => {
    let dataTree = {
        "name": "Nobel Prize",
        "children": []
    };

    function countOccurrences(arr) {
        return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    }

    // Category Part //
    const categories = Array.from(new Set(data.map(item => item.Category)));
    categories.forEach((category) => {
        dataTree.children.push({ name: category, children: [] });
    });

    // Continent Part //
    dataTree.children.forEach((categoryNode) => {
        const relevantData = data.filter(item => item.Category === categoryNode.name);
        const continents = Array.from(new Set(relevantData.map(item => item.continent)));
        continents.forEach((continent) => {
            categoryNode.children.push({ name: continent, children: [] });
        });

        // Born Country Part //
        categoryNode.children.forEach((continentNode) => {
            const relevantContinentData = relevantData.filter(item => item.continent === continentNode.name);

            let countryCounts = countOccurrences(relevantContinentData.map(item => item.Born_country));
            let sortedCountries = Object.keys(countryCounts).sort((a, b) => countryCounts[b] - countryCounts[a]).slice(0, 3);

            sortedCountries.forEach((country) => {
                continentNode.children.push({ name: `${country} (${countryCounts[country]})` });
            });
        });
    });

    let width = window.innerWidth - 100;
    let dx = 17;
    let dy = width / 5;

    let diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);
    let tree = d3.tree().nodeSize([dx, dy]);
    let margin = ({ top: 10, right: 120, bottom: 10, left: 90 });

    const root = d3.hierarchy(dataTree);
    root.x0 = dy / 2;
    root.y0 = 0;
    root.descendants().forEach((d, i) => {
        d.id = i;
        d._children = d.children;
        if (d.depth && d.data.name.length !== 1) d.children = null;
    });

    const svg = d3.select('.container')
        .append('svg')
        .attr("viewBox", [-margin.left, -margin.top, width, dx])
        .style("font", "10px sans-serif")
        .style("user-select", "none");

    const gLink = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5);

    const gNode = svg.append("g")
        .attr("cursor", "pointer")
        .attr("pointer-events", "all");

    function update(source) {
        const duration = d3.event && d3.event.altKey ? 2500 : 250;
        const nodes = root.descendants().reverse();
        const links = root.links();

        tree(root);

        let left = root;
        let right = root;
        root.eachBefore(node => {
            if (node.x < left.x) left = node;
            if (node.x > right.x) right = node;
        });

        const height = right.x - left.x + margin.top + margin.bottom;

        const transition = svg.transition()
            .duration(duration)
            .attr("viewBox", [-margin.left, left.x - margin.top, width, height]);

        // Update nodes
        const node = gNode.selectAll("g")
            .data(nodes, d => d.id);

        const nodeEnter = node.enter().append("g")
            .attr("transform", d => `translate(${source.y0},${source.x0})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0)
            .on("click", (event, d) => {
                d.children = d.children ? null : d._children;
                update(d);
            });

        nodeEnter.append("circle")
            .attr("r", 3)
            .attr("fill", d => d._children ? "#3CC0E6" : "#EAAE3C")
            .attr('stroke', 'none')
            .attr("stroke-width", 0.5);

        nodeEnter.append("text")
            .attr("dy", "0.31em")
            .attr("x", d => d._children ? -6 : 6)
            .attr("text-anchor", d => d._children ? "end" : "start")
            .text(d => d.data.name)
            .style('fill', '#fff')
            .clone(true).lower()
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .attr("stroke", 'black');

        const nodeUpdate = node.merge(nodeEnter).transition(transition)
            .attr("transform", d => `translate(${d.y},${d.x})`)
            .attr("fill-opacity", 1)
            .attr("stroke-opacity", 1);

        const nodeExit = node.exit().transition(transition).remove()
            .attr("transform", d => `translate(${source.y},${source.x})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0);

        // Update the links
        const link = gLink.selectAll("path")
            .data(links, d => d.target.id);

        const linkEnter = link.enter().append("path")
            .attr("d", d => {
                const o = { x: source.x0, y: source.y0 };
                return diagonal({ source: o, target: o });
            });

        link.merge(linkEnter).transition(transition)
            .attr("d", diagonal);

        link.exit().transition(transition).remove()
            .attr("d", d => {
                const o = { x: source.x, y: source.y };
                return diagonal({ source: o, target: o });
            });

        root.eachBefore(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }
    update(root);
});