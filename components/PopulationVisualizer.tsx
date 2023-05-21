// PopulationViz.client.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface TreeNode {
    name: string;
    value: number;
    children?: TreeNode[];
}

const PopulationViz: React.FC<{data: TreeNode}> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    // Render visualization
    useEffect(() => {
        if (svgRef.current && data) {
            const svg = d3.select(svgRef.current);
            const width = window.innerWidth;
            const height = window.innerHeight;
            svg.attr("width", width).attr("height", height); // adjust svg size

            // Create a hierarchical layout with data
            const root = d3.hierarchy(data).sum(d => d.value);

            // Create treemap layout generator
            const treemapRoot = d3.treemap<TreeNode>().size([width, height]).padding(1)(root);

            const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // color scale

            // Create nodes
            const nodes = svg.selectAll('g')
                .data(treemapRoot.leaves())
                .join('g')
                .attr('transform', d => `translate(${d.x0},${d.y0})`);

            // Create rectangles
            nodes.append('rect')
                .attr('width', d => d.x1 - d.x0)
                .attr('height', d => d.y1 - d.y0)
                .attr('fill', d => colorScale(d.parent?.data.name || "")) // color by continent
                .attr('stroke', 'black'); // add border

            // Add labels
            nodes.append('text')
                .text(d => d.data.name)
                .attr('font-size', d => Math.max(10, (d.x1 - d.x0) / 24)) // proportional font size, smaller
                .attr('fill', 'white')
                .attr('x', d => (d.x1 - d.x0) / 2)
                .attr('y', d => (d.y1 - d.y0) / 2)
                .attr('text-anchor', 'middle') // center text

            // Add population labels
            nodes.append('text')
                .text(d => d.data.value.toString())
                .attr('font-size', d => Math.max(10, (d.x1 - d.x0) / 32)) // proportional font size, smaller
                .attr('fill', 'white')
                .attr('x', d => (d.x1 - d.x0) / 2)
                .attr('y', d => (d.y1 - d.y0) / 2 + 20)
                .attr('text-anchor', 'middle') // center text
        }
    }, [data]);

    return (
        <svg ref={svgRef} />
    );
};

export default PopulationViz;
