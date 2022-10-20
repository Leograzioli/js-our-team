const myTeamArray = [
    {
    name:"Wayne Barnett",
    role: "Founder & CEO",
    imgProfile: "wayne-barnett-founder-ceo.jpg"
    },
    {
    name:"Angela Caroll",
    role: "Chief Editor",
    imgProfile: "angela-caroll-chief-editor.jpg"
    },
    {
    name:"Walter Gordon",
    role: "Office Manager",
    imgProfile: "walter-gordon-office-manager.jpg"
    },
    {
    name:"Angela Lopez",
    role: "Social Media Manager",
    imgProfile: "angela-lopez-social-media-manager.jpg"
    },
    {
    name:"Scott Estrada",
    role: "Developer",
    imgProfile: "scott-estrada-developer.jpg"
    },
    {
    name:"Barbara Ramos",
    role: "Graphic Designer",
    imgProfile: "barbara-ramos-graphic-designer.jpg"
    }
];

const teamList = document.getElementById("team-list");
for (let i = 0; i < myTeamArray.length; i++) {
    const element = myTeamArray[i];

    for (let key in element) {
        console.log(key, element[key]);       
    }

    teamList.innerHTML += `
        <li>
            <img src="img/${element.imgProfile}" alt=""> <br> 
            Name:${element["name"]}  <br> 
            Role:${element.role}
        </li>`
}