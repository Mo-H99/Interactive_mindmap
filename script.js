const data = {
    nodes: [
        { id: "Educational Content", group: "root" },

        // Main Categories
        { id: "Licensing", group: "category" },
        { id: "Domain", group: "category" },
        { id: "Material Types", group: "category" },
        { id: "Subjects", group: "category" },
        { id: "Educational Level", group: "category" },
        { id: "Language", group: "category" },
        { id: "Media Format", group: "category" },
        { id: "Domain", group: "category" },
        { id: "Country", group: "category" },

        // Material Type Structure
        { id: "Primary Users", group: "material" }, 
        { id: "Students", group: "user" },
        { id: "Teachers", group: "user" },

        // Courseware
        { id: "Courseware", group: "material" },
        { id: "Lessons", group: "material" },

        // Activities & Assignments
        { id: "Activities & Assignments", group: "material" },
        { id: "Activity/Lab", group: "material" },
        { id: "Assessments", group: "material" },
        { id: "Worksheets", group: "material" },
        { id: "Homework/Assignment", group: "material" },
        { id: "Student Guide", group: "material" },

        // Mixed Media
        { id: "Mixed Media", group: "material" },
        { id: "Simulation", group: "material" },
        { id: "Interactive", group: "material" },
        { id: "Game", group: "material" },
        { id: "Diagram/Illustration", group: "material" },

        // Reading Materials
        { id: "Reading Materials", group: "material" },
        { id: "Community Radio Transcripts", group: "material" },
        { id: "Textbook", group: "material" },
        { id: "Reading", group: "material" },
        { id: "Primary Source", group: "material" },

        // Instructor Materials (Only for Teachers)
        { id: "Instructor Materials", group: "material" },
        { id: "Unit Plan", group: "material" },
        { id: "Curriculum Plan", group: "material" },
        { id: "Teacher Guide", group: "material" },
        { id: "Lesson Plan", group: "material" },

        // Subject Categories
        { id: "Numeracy", group: "subject" },
        { id: "Literacy", group: "subject" },

        // Education Level
        { id: "Preschool", group: "level" },
        { id: "Lower Primary", group: "level" },
        { id: "Upper Primary", group: "level" },

        // Language
        { id: "English", group: "language" },

        //Media Format
        { id: "Video", group: "media" },
        { id: "Downloadable Docs", group: "media" },
        { id: "Text/HTML", group: "media" },
        { id: "Graphics/Photo", group: "media" },
        { id: "Audio", group: "media" },
        { id: "Braille/BRF", group: "media" },
        { id: "Ebook", group: "media" },
        { id: "Interactive", group: "media" },
        { id: "Other", group: "media" },

        //Domain
        { id: "In alignment with GPF", group: "standard" },

        // Country 
        { id: "USA", group: "country" },
        { id: "UK", group: "country" },
        { id: "Global", group: "country" },
        { id: "Uganda", group: "country" },
        { id: "Nigeria", group: "country" },
        { id: "Rwanda", group: "country" },
        { id: "Sierra Leone", group: "country" },
        { id: "Kenya", group: "country" },
        { id: "India", group: "country" },

        //Licensing
        { id: "Common Crawl", group: "licensing" },

        
    ],

    links: [
        // Connect root node to categories
        { source: "Educational Content", target: "Licensing" },
        { source: "Educational Content", target: "Material Types" },
        { source: "Educational Content", target: "Subjects" },
        { source: "Educational Content", target: "Educational Level" },
        { source: "Educational Content", target: "Language" },
        { source: "Educational Content", target: "Media Format" },
        { source: "Educational Content", target: "Domain" },
        { source: "Educational Content", target: "Country" },

        // Connect Material Types to Primary Users
        { source: "Material Types", target: "Primary Users" },
        { source: "Primary Users", target: "Students" },
        { source: "Primary Users", target: "Teachers" },

        // Connect Students to their material types
        { source: "Students", target: "Courseware" },
        { source: "Courseware", target: "Lessons" },

        { source: "Students", target: "Activities & Assignments" },
        { source: "Activities & Assignments", target: "Activity/Lab" },
        { source: "Activities & Assignments", target: "Assessments" },
        { source: "Activities & Assignments", target: "Worksheets" },
        { source: "Activities & Assignments", target: "Homework/Assignment" },
        { source: "Activities & Assignments", target: "Student Guide" },

        { source: "Students", target: "Mixed Media" },
        { source: "Mixed Media", target: "Simulation" },
        { source: "Mixed Media", target: "Interactive" },
        { source: "Mixed Media", target: "Game" },
        { source: "Mixed Media", target: "Diagram/Illustration" },

        { source: "Students", target: "Reading Materials" },
        { source: "Reading Materials", target: "Community Radio Transcripts" },
        { source: "Reading Materials", target: "Textbook" },
        { source: "Reading Materials", target: "Reading" },
        { source: "Reading Materials", target: "Primary Source" },

        // Teachers inherit everything from Students + Instructor Materials
        { source: "Teachers", target: "Courseware" },
        { source: "Teachers", target: "Activities & Assignments" },
        { source: "Teachers", target: "Mixed Media" },
        { source: "Teachers", target: "Reading Materials" },

        { source: "Teachers", target: "Instructor Materials" },
        { source: "Instructor Materials", target: "Unit Plan" },
        { source: "Instructor Materials", target: "Curriculum Plan" },
        { source: "Instructor Materials", target: "Teacher Guide" },
        { source: "Instructor Materials", target: "Lesson Plan" },

        { source: "Subjects", target: "Numeracy" },
        { source: "Subjects", target: "Literacy" },

        { source: "Educational Level", target: "Preschool" },
        { source: "Educational Level", target: "Lower Primary" },
        { source: "Educational Level", target: "Upper Primary" },

        { source: "Language", target: "English" },

        //Media Format
        { source: "Media Format", target: "Video" },
        { source: "Media Format", target: "Downloadable Docs" },
        { source: "Media Format", target: "Text/HTML" },
        { source: "Media Format", target: "Graphics/Photo" },
        { source: "Media Format", target: "Audio" },
        { source: "Media Format", target: "Braille/BRF" },
        { source: "Media Format", target: "Ebook" },
        { source: "Media Format", target: "Interactive" },
        { source: "Media Format", target: "Other" },

        //Domain
        { source: "Domain", target: "In alignment with GPF" },

        //Country
  
        { source: "Country", target: "USA" },
        { source: "Country", target: "UK" },
        { source: "Country", target: "Global" },
        { source: "Country", target: "Uganda" },
        { source: "Country", target: "Nigeria" },
        { source: "Country", target: "Rwanda" },
        { source: "Country", target: "Sierra Leone" },
        { source: "Country", target: "Kenya" },
        { source: "Country", target: "India" },

        //Licensing
        { source: "Licensing", target: "Common Crawl" },

    ]
};

const width = window.innerWidth;
const height = window.innerHeight;

//const width = 800;  // Fixed size to prevent weird resizing
//const height = 600;

const svg = d3.select("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)

    .attr("width", "100%")
    .attr("height", "100%")
    .style("overflow", "scroll") 
    .style("display", "block") ;

const container = svg.append("g"); 

const zoom = d3.zoom() 
    .scaleExtent([0.5, 3]) 
    .on("zoom", (event) => { 
        container.attr("transform", event.transform); 
    }); 

svg.call(zoom); 

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links)
        .id(d => d.id)
        .distance(d => (d.source.id === "Primary Users" ? 180 : 120))
    )
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(50));

const link = container.append("g") 
    .selectAll("line")
    .data(data.links)
    .enter().append("line")
    .attr("stroke", "#aaa");

const node = container.append("g") 
    .selectAll("g")
    .data(data.nodes)
    .enter().append("g");

    
   
    //let expandedCategories = new Set(["Material Types", "Subjects", "Educational Level", "Language", "Media Format", "Domain", "Country"]); 


let expandedCategories = new Set(["Material Types", "Subjects", "Educational Level", "Language", "Media Format", "Domain", "Country","Licensing"]); 
let hiddenNodes = {};
let hiddenLinks = {};

function getChildNodes(nodeId, visited = new Set()) {
    if (visited.has(nodeId)) return;
    visited.add(nodeId);

    data.links.forEach(link => {
        if (link.source.id === nodeId && !visited.has(link.target.id)) {
            getChildNodes(link.target.id, visited);
        }
    });

    return visited;
}

function initializeCollapse() {
    let categoriesToCollapse = ["Material Types", "Subjects", "Educational Level", "Language", "Media Format", "Domain", "Country","Licensing"];

    categoriesToCollapse.forEach(category => {
        let categoryNodes = new Set();
        getChildNodes(category, categoryNodes);
        categoryNodes.delete(category); 

        hiddenNodes[category] = new Set(categoryNodes);
        hiddenLinks[category] = new Set();

        data.links.forEach(l => {
            if (categoryNodes.has(l.target.id) || categoryNodes.has(l.source.id)) {
                hiddenLinks[category].add(l.target.id);
                hiddenLinks[category].add(l.source.id);
            }
        });

        node.filter(n => categoryNodes.has(n.id)).style("opacity", 0);
        link.filter(l => categoryNodes.has(l.target.id) || categoryNodes.has(l.source.id)).style("opacity", 0);
    });
}

node.append("circle")
    .attr("r", 12)
    .attr("fill", d => {
        if (d.id === "Primary Users") return "#FFC107"; 
        if (d.id === "Students") return "#42A5F5";  
        if (d.id === "Teachers") return "#1565C0";  
        if (d.id === "Instructor Materials") return "#9E9E9E";
        if (d.group === "category") return "#8E24AA"; 
        if (d.group === "material") return "#E0E0E0"; 
        if (d.group === "root") return "Black";
        if (d.group === "Licensing") return "#FF5722";
        return "#BDBDBD";  
    })
    .on("click", (event, d) => {
        let connectedNodes = new Set();

        function getChildNodes(nodeId, visited = new Set()) {
            if (visited.has(nodeId)) return;
            visited.add(nodeId);

            data.links.forEach(link => {
                if (link.source.id === nodeId && !visited.has(link.target.id)) {
                    getChildNodes(link.target.id, visited);
                }
            });
        }

        if (d.id === "Students" || d.id === "Teachers") {
            
            getChildNodes(d.id, connectedNodes);
        } else {
            // Highlight directly connected nodes
            data.links.forEach(link => {
                if (link.source.id === d.id) connectedNodes.add(link.target.id);
                if (link.target.id === d.id) connectedNodes.add(link.source.id);
            });
        }

        // Colour changes: Single-click turns nodes red

        node.selectAll("circle").attr("fill", n => 
            connectedNodes.has(n.id) ? "red" : 
            (n.group === "root" ? "purple" :
             n.group === "category" ? "#8E24AA" :
             n.group === "user" ? "#42A5F5" :
             n.group === "material" ? "#E0E0E0" : "#BDBDBD")
        );
    })
    .on("dblclick", (event, d) => {
        if (["Material Types", "Subjects", "Educational Level", "Language", "Media Format", "Domain", "Country","Licensing"].includes(d.id)) {
            let isCollapsed = expandedCategories.has(d.id);
    
            if (isCollapsed) {
                expandedCategories.delete(d.id);
    
                node.filter(n => hiddenNodes[d.id]?.has(n.id))
                    .transition().duration(500)
                    .style("opacity", 1)  
    
                link.filter(l => hiddenLinks[d.id]?.has(l.target.id) || hiddenLinks[d.id]?.has(l.source.id))
                    .transition().duration(500)
                    .style("opacity", 1);  
    
            } else {
                expandedCategories.add(d.id);
    
                let categoryNodes = new Set();
                getChildNodes(d.id, categoryNodes);
                categoryNodes.delete(d.id); 
    
                hiddenNodes[d.id] = new Set(categoryNodes);
                hiddenLinks[d.id] = new Set();
    
                // Store links for hidden nodes
                data.links.forEach(l => {
                    if (categoryNodes.has(l.target.id) || categoryNodes.has(l.source.id)) {
                        hiddenLinks[d.id].add(l.target.id);
                        hiddenLinks[d.id].add(l.source.id);
                    }
                });
    
                node.filter(n => categoryNodes.has(n.id))
                    .transition().duration(500)
                    .style("opacity", 0);  
    
                link.filter(l => categoryNodes.has(l.target.id) || categoryNodes.has(l.source.id))
                    .transition().duration(500)
                    .style("opacity", 0);  
            }
        }
    });
    

    


node.append("text")
    .text(d => d.id)
    .attr("x", 12)
    .attr("dy", ".35em")
    .style("font-size", "12px");

initializeCollapse();
simulation.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x).attr("y2", d => d.target.y);

    node.attr("transform", d => `translate(${d.x},${d.y})`);


    
});
