const users = [
    {
        fullname: "Maya Thompson",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        profession: "Graphic Designer",
        description: "Creative graphic designer with 5 years of experience designing logos, brand identities and digital illustrations.",
        tags: ["designer", " branding" , " illustration" , " creative "]
    },
    {
        fullname: "Ravi Singh",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        profession: "Full-Stack Developer",
        description: "Passionate full-stack developer skilled in JavaScript, Node.js and React. Loves building responsive web apps.",
        tags: ["developer", " javascript", " react", " nodejs "]
    },
    {
        fullname: "David Chen",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        profession: "UI/UX Designer",
        description: "UI/UX designer focusing on user-centered designs, wireframes and intuitive interface flows.",
        tags: ["UI/UX", " design", " user experience", " wireframing"]
    },
    {
        fullname: "Sara Ali",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
        profession: "Digital Marketer",
        description: "Digital marketing specialist experienced in social media strategy, content marketing and analytics.",
        tags: ["marketing", " social media", " analytics", " content"]
    },
    {
        fullname: "Lena Müller",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        profession: "Content Writer",
        description: "Freelance content writer specializing in technical blogs, tutorials and SEO-optimized articles.",
        tags: ["writer", " tech", " blogs", " SEO"]
    },
];

var sum = " ";
users.forEach(function(elem, idx){
    sum += `<div class="user-card">
                        <img src="${elem.image}" alt="">
                        <h3>${elem.fullname}</h3>
                        <h4>${elem.profession}</h4>
                        <p>${elem.description}</p>
                        <div>${elem.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
                    </div>`;
})

const cardLayout = document.querySelector("#cardLayout");
cardLayout.innerHTML = sum;