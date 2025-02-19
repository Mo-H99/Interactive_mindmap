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
        { id: "Environment", group: "category" },
        { id: "Inclusion", group: "category" },

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

        //Class Guides
        {id: "Student Guide", group: "material"},
        {id: "Syllabus", group: "material"},

        // Courseware
        { id: "Courseware", group: "material" },
        {id: "Lesson", group: "material"},
        {id: "Full Course", group: "material"},
        {id: "Lecture", group: "material"},
        {id: "Module", group: "material"},
        {id: "Unit of Study", group: "material"},

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

        // Class Guides
        { id: "Class Guides", group: "material" },
        { id: "Syllabus", group: "material" },
        { id: "Student Guide", group: "material" },

        // Mixed Media
        { id: "Mixed Media", group: "material" },
        { id: "Simulation", group: "material" },
        { id: "Game", group: "material" },
        { id: "Diagram/Illustration", group: "material" },

        // Reading Materials
        { id: "Reading Materials", group: "material" },
        { id: "Community Radio Transcripts", group: "material" },
        { id: "Textbook", group: "material" },
        { id: "Reading", group: "material" },
        { id: "Primary Source", group: "material" },
        { id: "Case Study", group: "material" },
        { id: "Data Set", group: "material" },
        { id: "Lecture Notes", group: "material" },

        // Instructor Materials (Only for Teachers)
        { id: "Instructor Materials", group: "material" },
        { id: "Unit Plan", group: "material" },
        { id: "Curriculum Plan", group: "material" },
        { id: "Teacher Guide", group: "material" },
        { id: "Lesson Plan", group: "material" },
        { id: "Teaching/Learning Strategy", group: "material" },
        { id: "Teaching Tools", group: "material" },

        // Subject Categories
        { id: "Numeracy", group: "subject" },
        { id: "Literacy", group: "subject" },


        // Education Level
        { id: "Preschool", group: "level" },
        { id: "Lower Primary", group: "level" },
        { id: "Upper Primary", group: "level" },

        { id: "Grade 1", group: "level" },
        { id: "Grade 2", group: "level" },
        { id: "Grade 3", group: "level" },

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
        { id: "In alignment with national curricula", group: "standard" },

        //Environment
        { id: "Distance Learning", group: "environment" },
        { id: "At Home Learning", group: "environment" },
        { id: "Informal Learning", group: "environment" },
        { id: "In School Learning", group: "environment" },

        //Inclusion
        { id: "Neurodivergent", group: "inclusion" },
        { id: "Physical", group: "inclusion" },
        { id: "Gender-based", group: "inclusion" },
        { id: "ELL", group: "inclusion" },

        
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
        {source: "Educational Content", target: "Environment" },
        {source: "Educational Content", target: "Inclusion" },

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
        { source: "Courseware", target: "Lesson" },
        { source: "Courseware", target: "Full Course" },
        { source: "Courseware", target: "Lecture" },
        { source: "Courseware", target: "Module" },
        { source: "Courseware", target: "Unit of Study" },

        {source: "Students", target: "Class Guides"},
        {source: "Class Guides", target: "Student Guide"},
        {source: "Class Guides", target: "Syllabus"},
        

        { source: "Students", target: "Activities & Assignments" },
        { source: "Activities & Assignments", target: "Activity/Lab" },
        { source: "Activities & Assignments", target: "Assessments" },
        { source: "Activities & Assignments", target: "Worksheets" },
        { source: "Activities & Assignments", target: "Homework/Assignment" },
    

        { source: "Students", target: "Mixed Media" },
        { source: "Mixed Media", target: "Simulation" },
        { source: "Mixed Media", target: "Game" },
        { source: "Mixed Media", target: "Diagram/Illustration" },

        { source: "Students", target: "Reading Materials" },
        { source: "Reading Materials", target: "Community Radio Transcripts" },
        { source: "Reading Materials", target: "Textbook" },
        { source: "Reading Materials", target: "Reading" },
        { source: "Reading Materials", target: "Primary Source" },
        { source: "Reading Materials", target: "Case Study"},
        { source: "Reading Materials", target: "Data Set" },
        { source: "Reading Materials", target: "Lecture Notes" },

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
        { source: "Instructor Materials", target: "Teaching/Learning Strategy" },
        { source: "Instructor Materials", target: "Teaching Tools" },

        { source: "Teachers", target: "Reading Materials" },
        { source: "Reading Materials", target: "Primary Source" },
        { source: "Reading Materials", target: "Case Study"},
        { source: "Reading Materials", target: "Data Set" },
        { source: "Reading Materials", target: "Lecture Notes" },
        { source: "Reading Materials", target: "Community Radio Transcripts" },
        { source: "Reading Materials", target: "Textbook" },
        { source: "Reading Materials", target: "Reading" },

        { source: "Subject list", target: "Numeracy" },
        { source: "Subject list", target: "Literacy" },
    

        { source: "Educational Level", target: "Preschool" },
        { source: "Educational Level", target: "Lower Primary" },
        { source: "Educational Level", target: "Upper Primary" },

        { source: "Lower Primary", target: "Grade 1" },
        { source: "Lower Primary", target: "Grade 2" },
        { source: "Lower Primary", target: "Grade 3" },



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
        { source: "Educational Standard", target: "In alignment with national curricula" },

        //Environment
        { source: "Environment", target: "Distance Learning" },
        { source: "Environment", target: "At Home Learning" },
        { source: "Environment", target: "Informal Learning" },
        { source: "Environment", target: "In School Learning" },

        //Inclusion
        { source: "Inclusion", target: "Neurodivergent" },
        { source: "Inclusion", target: "Physical" },
        { source: "Inclusion", target: "Gender-based" },
        { source: "Inclusion", target: "ELL" },


    ]
};

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", "200%")
    .attr("height", "100%")
    .style("overflow", "auto") 
    .style("display", "block");

const container = svg.append("g");

const zoom = d3.zoom()
    .scaleExtent([0.1, 2])
    .on("zoom", (event) => container.attr("transform", event.transform));

svg.call(zoom);

const initialScale = 0.49;
const initialTranslate = [width / 2, height / 7.5];

setTimeout(() => {
    svg.call(zoom.transform, d3.zoomIdentity.translate(...initialTranslate).scale(initialScale));
}, 50);

document.addEventListener("keydown", (event) => {
    if (event.key === "+") svg.transition().call(zoom.scaleBy, 1.2);
    else if (event.key === "-") svg.transition().call(zoom.scaleBy, 0.8);
    else if (event.key === "r") 
        svg.transition().call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(1.2));
});

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links)
        .id(d => d.id)
        .distance(d => ({
            "Primary Users": 450, "Delivery format": 200, "Educational level": 250,
            "Accessibility": 120, "Reading Materials": 300, "Instructor Materials": 300,
             "Courseware": 250, "Students": 250, "Teachers": 250,
            "Mixed Media": 100, "Educational Standard": 100
        }[d.source.id] || 150))
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

node.append("circle")
    .attr("r", 12)
    .attr("fill", d => ({
        "Educational Content": "red","Educational Standard": "lightgray", "Accessibility": "lightgray", "Environment": "lightgray", "Inclusion": "lightgray",
        "Licensing": "green", "Domain": "green", "Material Types": "green", "Subject list": "green", "Country list": "green",
        "Educational Level": "green", "Language": "green", "Media Format": "green", "Delivery format": "green",
        "Primary Users": "#FFC107", "Students": "#42A5F5", "Teachers": "#1565C0", "Instructor Materials": "#9E9E9E"
    }[d.id] || "#E0E0E0"));

const connectedNodes = new Set();

function getFirstLevelChildren(nodeId) {
    data.links.forEach(link => {
        if (link.source.id === nodeId) connectedNodes.add(link.target.id);
    });
}

node.on("click", (event, d) => {
    connectedNodes.clear();
    getFirstLevelChildren(d.id);

    const focusGroups = {
        "Reading Materials": ["Primary Source", "Reading", "Textbook", "Community Radio Transcripts"],
        "Instructor Materials": ["Unit Plan", "Curriculum Plan", "Teacher Guide", "Lesson Plan"],
        "Courseware": ["Lesson"],
        "Class Guides": ["Student Guide"],
        "Reading Materials (Teachers)": ["Case Study", "Data Set", "Lecture Notes"],
        "Reading Materials (Students)": ["Primary Source", "Reading", "Textbook", "Community Radio Transcripts"]
    };

    const highlightNodes = (nodeList, mainColor, relatedColor) => {
        node.selectAll("circle").attr("fill", n =>
            nodeList.has(n.id) ? relatedColor :
            (n.id === d.id) ? mainColor : "#E0E0E0"
        );
    };

    if (focusGroups[d.id]) {
        highlightNodes(new Set(focusGroups[d.id]), "red", "green");
        return;
    }

    if (["Teachers", "Students"].includes(d.id)) {
        highlightNodes(connectedNodes, "red", "#42A5F5");
        return;
    }

    if (d.id === "Reading Materials") {
        if (connectedNodes.has("Teachers")) {
            highlightNodes(new Set(focusGroups["Reading Materials (Teachers)"]), "red", "green");
        } else if (connectedNodes.has("Students")) {
            highlightNodes(new Set(focusGroups["Reading Materials (Students)"]), "red", "green");
        }
        return;
    }

    node.selectAll("circle").attr("fill", n =>
        (n.id === d.id) ? "red" :
        (connectedNodes.has(n.id)) ? "green" :
        ({"Educatioal Content":"Red","Educational Standard": "lightgray", "Accessibility": "lightgray", "Environment": "lightgray", "Inclusion": "lightgray",
            "Licensing": "green", "Domain": "green", "Material Types": "green", "Subject list": "green", "Country list": "green",
            "Educational Level": "green", "Language": "green", "Media Format": "green", "Delivery format": "green",
            "Primary Users": "lightgray", "Students": "#42A5F5", "Teachers": "#42A5F5", "Instructor Materials": "#9E9E9E"
        }[n.id] || "#E0E0E0")
    );
});

const expandableCategories = new Set(["Material Types", "Subject list", "Educational Level", "Language", "Media Format",
    "Domain", "Country list", "Licensing", "Accessibility", "Delivery format", "Educational Standard", "Environment", "Inclusion"]);

const hiddenNodes = {}, hiddenLinks = {};

function getChildNodes(nodeId, visited = new Set()) {
    if (!visited.has(nodeId)) {
        visited.add(nodeId);
        data.links.forEach(link => {
            if (link.source.id === nodeId) getChildNodes(link.target.id, visited);
        });
    }
    return visited;
}

function initializeCollapse() {
    expandableCategories.forEach(category => {
        let categoryNodes = getChildNodes(category);
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

node.on("dblclick", (event, d) => {
    if (expandableCategories.has(d.id)) {
        let isCollapsed = expandableCategories.has(d.id);
        if (isCollapsed) {
            expandableCategories.delete(d.id);
            node.filter(n => hiddenNodes[d.id]?.has(n.id)).transition().duration(500).style("opacity", 1);
            link.filter(l => hiddenLinks[d.id]?.has(l.target.id) || hiddenLinks[d.id]?.has(l.source.id))
                .transition().duration(500).style("opacity", 1);
        } else {
            expandableCategories.add(d.id);
            let categoryNodes = getChildNodes(d.id);
            categoryNodes.delete(d.id);
            hiddenNodes[d.id] = new Set(categoryNodes);
            hiddenLinks[d.id] = new Set();

            node.filter(n => categoryNodes.has(n.id)).transition().duration(500).style("opacity", 0);
            link.filter(l => categoryNodes.has(l.target.id) || categoryNodes.has(l.source.id))
                .transition().duration(500).style("opacity", 0);
        }
    }
});

node.append("text")
    .text(d => d.id)
    .attr("x", 16)
    .attr("dy", ".35em")
    .style("font-size", "12px");

initializeCollapse();

simulation.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x).attr("y2", d => d.target.y);

    node.attr("transform", d => `translate(${d.x},${d.y})`);
});
