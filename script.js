const data = {
    nodes: [
        { id: "Educational Content", group: "root" },

        // Main categories
        { id: "Users", group: "category" },
        { id: "Material Types", group: "category" },
        { id: "Subjects", group: "category" },
        { id: "Educational Level", group: "category" },
        { id: "Language", group: "category" },

        // User Types
        { id: "Students", group: "user" },
        { id: "Teachers", group: "user" },
        { id: "Department Heads", group: "user" },

        // Material Types
        { id: "Textbooks", group: "material" },
        { id: "Videos", group: "material" },
        { id: "Games", group: "material" },
        { id: "Worksheets", group: "material" },
        { id: "Interactives", group: "material" },
        { id: "Lesson Plans", group: "material" },
        { id: "Unit Plans", group: "material" },
        { id: "Teacher Guides", group: "material" },
        { id: "Assessments", group: "material" },
        { id: "Analytics", group: "material" },

        // Subject Categories
        { id: "Numeracy", group: "subject" },
        { id: "Literacy", group: "subject" },

        // Education Level
        { id: "Preschool", group: "level" },
        { id: "Lower Primary", group: "level" },
        { id: "Upper Primary", group: "level" },

        // Language
        { id: "English", group: "language" }
    ],
    links: [
        // Connect root node to categories
        { source: "Educational Content", target: "Users" },
        { source: "Educational Content", target: "Material Types" },
        { source: "Educational Content", target: "Subjects" },
        { source: "Educational Content", target: "Educational Level" },
        { source: "Educational Content", target: "Language" },

        // Connect Users
        { source: "Users", target: "Students" },
        { source: "Users", target: "Teachers" },
        { source: "Users", target: "Department Heads" },

        // Connect Material Types
        { source: "Material Types", target: "Textbooks" },
        { source: "Material Types", target: "Videos" },
        { source: "Material Types", target: "Games" },
        { source: "Material Types", target: "Worksheets" },
        { source: "Material Types", target: "Interactives" },
        { source: "Material Types", target: "Lesson Plans" },
        { source: "Material Types", target: "Unit Plans" },
        { source: "Material Types", target: "Teacher Guides" },
        { source: "Material Types", target: "Assessments" },
        { source: "Material Types", target: "Analytics" },

        // Connect Subjects
        { source: "Subjects", target: "Numeracy" },
        { source: "Subjects", target: "Literacy" },

        // Connect Education Level
        { source: "Educational Level", target: "Preschool" },
        { source: "Educational Level", target: "Lower Primary" },
        { source: "Educational Level", target: "Upper Primary" },

        // Connect Language
        { source: "Language", target: "English" },

        //user specific material
        //students
        { source: "Students", target: "Textbooks" },
        { source: "Students", target: "Videos" },
        { source: "Students", target: "Games" },
        { source: "Students", target: "Worksheets" },
        { source: "Students", target: "Interactives" },

        // Teachers
        { source: "Teachers", target: "Textbooks" },
        { source: "Teachers", target: "Lesson Plans" },
        { source: "Teachers", target: "Unit Plans" },
        { source: "Teachers", target: "Teacher Guides" },
        { source: "Teachers", target: "Assessments" },

        // Department Heads
        { source: "Department Heads", target: "Analytics" },
        { source: "Department Heads", target: "Assessments" },
        { source: "Department Heads", target: "Lesson Plans" }

    ]
};

const width = 1600, height = 1000;
const svg = d3.select("svg").attr("viewBox", `0 0 ${width} ${height}`);


const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(120))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g")
    .selectAll("line")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link")
    .attr("stroke", "#aaa");

const node = svg.append("g")
    .selectAll("g")
    .data(data.nodes)
    .enter().append("g")
    .attr("class", "node");

node.append("circle")
    .attr("r", 10)
    .attr("fill", d => {
        if (d.group === "root") return "purple";  // Root node color
        if (d.group === "category") return "gray"; // Category nodes
        if (d.group === "user") return "steelblue"; // Users
        if (d.group === "material") return "orange"; // Materials
        if (d.group === "subject") return "steelblue"; // Subjects
        if (d.group === "level") return "steelblue"; // Levels
        if (d.group === "language") return "steelblue"; // Languages
        return "black"; // Default color
    })
    .on("click", (event, d) => {
        node.selectAll("circle")
            .attr("fill", n => 
                (data.links.some(link => 
                    (link.source.id === d.id && link.target.id === n.id) || 
                    (link.target.id === d.id && link.source.id === n.id))) ? "red" : 
                (n.group === "root" ? "Whtite" :
                 n.group === "category" ? "gray" :
                 n.group === "user" ? "steelblue" :
                 n.group === "material" ? "White" :
                 n.group === "subject" ? "White" :
                 n.group === "level" ? "White" :
                 n.group === "language" ? "White" : "White")
            );
    });

    
node.append("text")
    .text(d => d.id)
    .attr("x", 12)
    .attr("dy", ".35em")
    .style("font-size", "12px")
    .style("fill", "#333");

simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("transform", d => `translate(${d.x},${d.y})`);

});
