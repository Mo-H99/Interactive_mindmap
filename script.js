const data = {
    nodes: [
        { id: "Educational Content", group: "root" },

        // Main Categories
        { id: "Licensing", group: "category" },
        { id: "Domain", group: "category" },
        { id: "Material Types", group: "category" },
        { id: "Subject list", group: "category" },
        { id: "Educational Level", group: "category" },
        { id: "Language", group: "category" },
        { id: "Media Format", group: "category" },
        { id: "Country list", group: "category" },
        { id: "Accessibility", group: "category" },
        { id: "Delivery format", group: "category" },
        { id: "Educational Standard", group: "category" },

        // Material Type Structure
        { id: "Primary Users", group: "material" }, 
        { id: "Students", group: "user" },
        { id: "Teachers", group: "user" },
        { id: "Parents", group: "user" },
        { id: "District School Leaders", group: "user" },
        { id: "Head of Departments", group: "user" },
        { id: "Principals", group: "user" },
        { id: "Community Members", group: "user" },
        { id: "Education Managers", group: "user" },
        { id: "Policy Makers", group: "user" },


        // Courseware
        { id: "Courseware", group: "material" },
        { id: "Lessons", group: "material" },

        //Accessability

        { id: "Audio description", group: "accessibility" },
        { id: "Caption", group: "accessibility" },
        { id: "Transcript", group: "accessibility" },

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
        { id: "Game", group: "material" },
        { id: "Diagram/Illustration", group: "material" },

        // Reading Materials
        { id: "Reading Materials", group: "material" },
        { id: "Community Radio Transcripts(LMIC specific)", group: "material" },
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

        //  Country list 
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
        { id: "Creative Commons", group: "licensing" },

        //Delivery format

        { id: "Web-based", group: "delivery" },
        { id: "Software-based", group: "delivery" },
        { id: "Mobile accessible", group: "delivery" },
        { id: "Offline accessible", group: "delivery" },

        // Educational Standard
        { id: "In alignment with national curricula", group: "standard" }

        
    ],

    links: [
        // Connect root node to categories
        { source: "Educational Content", target: "Licensing" },
        { source: "Educational Content", target: "Material Types" },
        { source: "Educational Content", target: "Subject list" },
        { source: "Educational Content", target: "Educational Level" },
        { source: "Educational Content", target: "Language" },
        { source: "Educational Content", target: "Media Format" },
        { source: "Educational Content", target: "Domain" },
        { source: "Educational Content", target: "Country list" },
        { source: "Educational Content", target: "Accessibility" },
        { source: "Educational Content", target: "Delivery format" },
        {source: "Educational Content", target: "Educational Standard" },

        // Connect Material Types to Primary Users
        { source: "Material Types", target: "Primary Users" },
        { source: "Primary Users", target: "Students" },
        { source: "Primary Users", target: "Teachers" },
        { source: "Primary Users", target: "Parents" },
        { source: "Primary Users", target: "District School Leaders" },
        { source: "Primary Users", target: "Head of Departments" },
        { source: "Primary Users", target: "Principals" },
        { source: "Primary Users", target: "Community Members" },
        { source: "Primary Users", target: "Education Managers" },
        { source: "Primary Users", target: "Policy Makers" },


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
        { source: "Mixed Media", target: "Game" },
        { source: "Mixed Media", target: "Diagram/Illustration" },

        { source: "Students", target: "Reading Materials" },
        { source: "Reading Materials", target: "Community Radio Transcripts(LMIC specific)" },
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

        { source: "Subject list", target: "Numeracy" },
        { source: "Subject list", target: "Literacy" },
    

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

        // Country list
  
        { source: "Country list", target: "USA" },
        { source: "Country list", target: "UK" },
        { source: "Country list", target: "Global" },
        { source: "Country list", target: "Uganda" },
        { source: "Country list", target: "Nigeria" },
        { source: "Country list", target: "Rwanda" },
        { source: "Country list", target: "Sierra Leone" },
        { source: "Country list", target: "Kenya" },
        { source: "Country list", target: "India" },

        //Licensing
        { source: "Licensing", target: "Creative Commons" },

        // Accessibility

        { source: "Accessibility", target: "Audio description" },
        { source: "Accessibility", target: "Caption" },
        { source: "Accessibility", target: "Transcript" },

        //Delivery format
        
        { source: "Delivery format", target: "Web-based" },
        { source: "Delivery format", target: "Software-based" },
        { source: "Delivery format", target: "Mobile accessible" },
        { source: "Delivery format", target: "Offline accessible" },

        // Educational Standard
        { source: "Educational Standard", target: "In alignment with national curricula" }

    ]
};

const width = window.innerWidth;
const height = window.innerHeight;

//const width = 800;  // Fixed size to prevent weird resizing
//const height = 600;

const svg = d3.select("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)

    .attr("width", "200%")
    .attr("height", "100%")
    .style("overflow", "auto") 
    .style("display", "block") ;

const container = svg.append("g"); 

const zoom = d3.zoom() 
    .scaleExtent([0.5, 3]) 
    .on("zoom", (event) => { 
        container.attr("transform", event.transform); 
    }); 

svg.call(zoom); 

document.addEventListener("keydown", (event) => {
    if (event.key === "+") {  // 
        svg.transition().call(zoom.scaleBy, 1.2);
    } else if (event.key === "-") {  
        svg.transition().call(zoom.scaleBy, 0.8);
    } else if (event.key === "r") {  
        svg.transition().call(zoom.transform, d3.zoomIdentity);
    }
});

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links)
        .id(d => d.id)
        .distance(d => { 
            if (d.source.id === "Primary Users") return 250; 
            if (d.source.id === "Delivery format") return 200; 
            if (d.source.id === "Educational level") return 250; 
            if (d.source.id === "Accessibility" || d.target.id === "Accessibility") return 120; 
            if (d.source.id === "Reading Materials" || d.target.id === "Reading Materials") return 300
            if (d.source.id === "Courseware" || d.target.id === "Courseware") return 250;
            if (d.source.id === "Students" || d.target.id === "Students") return 250;
            if (d.source.id === "Teachers" || d.target.id === "Teachers") return 250;
            
            return 150; 
        })
    )
    .force("charge", d3.forceManyBody().strength(-900)) 
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

let expandedCategories = new Set(["Material Types", "Subject list", "Educational Level", "Language", "Media Format", "Domain", "Country list","Licensing","Accessibility","Delivery format","Educational Standard"]); 
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
    let categoriesToCollapse = ["Material Types", "Subject list", "Educational Level", "Language", "Media Format", "Domain", "Country list","Licensing","Accessibility","Delivery format","Educational Standard"];

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
        if (d.id === "Educational Standard" || d.id === "Accessibility") return "lightgray"; // 
        if (["Licensing", "Domain", "Material Types", "Subject list","Country list", "Educational Level", "Language", "Media Format","Delivery format"].includes(d.id)) {return "green"; }
        if (d.id === "Primary Users") return "#FFC107"; 
        if (d.id === "Students") return "#42A5F5";  
        if (d.id === "Teachers") return "#1565C0";  
        if (d.id === "Instructor Materials") return "#9E9E9E";
        if (d.group === "material") return "#E0E0E0"; 
        if (d.group === "root") return "black";
          
    })
  
    node.on("click", (event, d) => {
        let connectedNodes = new Set();

        function getFirstLevelChildren(nodeId) {
            data.links.forEach(link => {
                if (link.source.id === nodeId) {
                    connectedNodes.add(link.target.id);
                }
            });
        }

        // If clicking on "Students" or "Teachers", only highlight first-level child nodes
        if (d.id === "Students" || d.id === "Teachers") {
            getFirstLevelChildren(d.id);
        } else {
            // Highlight directly connected nodes for any other node
            data.links.forEach(link => {
                if (link.source.id === d.id) connectedNodes.add(link.target.id);
                if (link.target.id === d.id) connectedNodes.add(link.source.id);
            });
        }

        // Apply color changes: Single-click turns nodes green for first-level children
        node.selectAll("circle").attr("fill", n => 
            connectedNodes.has(n.id) ? "green" : 
            (n.id === "Educational Standard" || n.id === "Accessibility" ? "lightgray" : 
            ["Licensing", "Domain", "Material Types", "Subject list","Educational Level", "Language", "Media Format","Country list", "Delivery format"].includes(n.id) ? "green" : 
            (["Parents", "District School Leaders", "Head of Departments", "Principals","Community Members", "Education Managers", "Policy Makers"].includes(n.id) ? "lightgray" :    
            (n.id === "Primary Users" ? "lightgray" : 
            (n.id === "Students" ? "#42A5F5" : 
            (n.id === "Teachers" ? "#42A5F5" : 
            (n.id === "Instructor Materials" ? "#9E9E9E" : 
            (n.group === "material" ? "#E0E0E0" : 
            (n.group === "root" ? "black" : 
            (n.group === "Licensing" ? "#FF5722" : "#BDBDBD")))))))))

            );

        });
    
    

    node.on("dblclick", (event, d) => {
        if (["Material Types", "Subject list", "Educational Level", "Language", "Media Format", "Domain", "Country list","Licensing","Accessibility","Delivery format","Educational Standard"].includes(d.id)) {
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
