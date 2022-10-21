const myTeamArray = [
    {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    imgProfile: "wayne-barnett-founder-ceo.jpg"
    },
    {
    name: "Angela Caroll",
    role: "Chief Editor",
    imgProfile: "angela-caroll-chief-editor.jpg"
    },
    {
    name: "Walter Gordon",
    role: "Office Manager",
    imgProfile: "walter-gordon-office-manager.jpg"
    },
    {
    name: "Angela Lopez",
    role: "Social Media Manager",
    imgProfile: "angela-lopez-social-media-manager.jpg"
    },
    {
    name: "Scott Estrada",
    role: "Developer",
    imgProfile: "scott-estrada-developer.jpg"
    },
    {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    imgProfile: "barbara-ramos-graphic-designer.jpg"
    }
];

const teamList = document.getElementById("team-list");
let teamListHtml = "";
myTeamArray.forEach(element => {
    
    teamListHtml += `
        <li>
            <img alt="${element.name}" src="img/${element.imgProfile}" alt=""> 
            <div class="card-name"><span class="title">Name</span>: ${element["name"]}<div>
            <div class="card-name"><span class="title">Role</span>: ${element.role}</div>
        </li>`
});

teamList.innerHTML = teamListHtml;