const data = {
    nodes: [
        { id: "Students", group: "user" },
        { id: "Teachers", group: "user" },
        { id: "Department Heads", group: "user" },
        { id: "Textbooks", group: "material" },
        { id: "Videos", group: "material" },
        { id: "Games", group: "material" },
        { id: "Worksheets", group: "material" },
        { id: "Interactives", group: "material" },
        { id: "Lesson Plans", group: "material" },
        { id: "Unit Plans", group: "material" },
        { id: "Teacher Guides", group: "material" },
        { id: "Assessments", group: "material" },
        { id: "Analytics", group: "material" }
    ],
    links: [
        { source: "Students", target: "Textbooks" },
        { source: "Students", target: "Videos" },
        { source: "Students", target: "Games" },
        { source: "Students", target: "Worksheets" },
        { source: "Students", target: "Interactives" },
        { source: "Teachers", target: "Textbooks" },
        { source: "Teachers", target: "Lesson Plans" },
        { source: "Teachers", target: "Unit Plans" },
        { source: "Teachers", target: "Teacher Guides" },
        { source: "Teachers", target: "Assessments" },
        { source: "Department Heads", target: "Analytics" },
        { source: "Department Heads", target: "Assessments" },
        { source: "Department Heads", target: "Lesson Plans" }
    ]
};

const width = 800, height = 600;
const svg = d3.select("svg");

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(120))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g")
    .selectAll("line")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link");

const node = svg.append("g")
    .selectAll("g")
    .data(data.nodes)
    .enter().append("g")
    .attr("class", "node");

node.append("circle")
    .attr("r", 10)
    .attr("fill", d => d.group === "user" ? "steelblue" : "orange")
    .on("click", (event, d) => {
        node.selectAll("circle")
            .attr("fill", n => (data.links.some(link => link.source.id === d.id && link.target.id === n.id) || d.id === n.id) ? "red" : (n.group === "user" ? "steelblue" : "orange"));
    });

node.append("text")
    .text(d => d.id)
    .attr("x", 12)
    .attr("dy", ".35em");

simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("transform", d => `translate(${d.x},${d.y})`);
});


