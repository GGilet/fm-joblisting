let response = fetch('https://remotive.io/api/remote-jobs');
const api_url = 'https://remotive.io/api/remote-jobs';
let jobDatabase = [];
let jobListings = [];
let titles = [];

async function getAPI() {
	const response = await fetch('https://remotive.io/api/remote-jobs');

	let data = await response.json();
	return data;
}

// function Job (title,

// let jobDatabase = getAPI(api_url);

// function showJobs(jobDatabase) {
// 	let tab = `
//     <tr>
//     <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>
//     `;

//     for (let r of jobDatabase.list)
//     {
//         tab +=
//     }
// }

// console.log(jobDatabase.jobs[]);

async function getJobs(jobArray) {
	for (let i = 0; i < 10; i++) {
		jobDatabase.push(jobArray[i]);
		// titles = jobDatabase.
	}
	// console.log(JSON.parse(JSON.stringify(jobDatabase)));
	jobListings = jobDatabase;
	console.log(jobListings);
	// return (jobListings = jobDatabase);
}

// console.log(getAPI());
getAPI().then((data) => getJobs(data['jobs']).then(displayJobBoard()));

// getAPI().then((data) => console.log(data['job-count']));

// console.log(jobDatabase);

function displayJobBoard() {
	// getFiveJobs(data['jobs']);
	for (let i = 0; i < jobDatabase.length; i++) {
		// let jobListings = document.getElementById('jobListings');

		let jobContainerDiv = document.createElement('div');
		jobContainerDiv.classList.add('jobCardContainer');
		jobContainerDiv.setAttribute('id', 'jobCardContainer');
		// let jobCardContainerDiv = document.getElementById('jobCardContainer');

		document.getElementById('jobListings').appendChild(jobContainerDiv);

		let logoDiv = document.createElement('div');
		logoDiv.classList.add('jobLogo');
		let logoUrl = jobDatabase[i].company_logo;
		logoDiv.style.backgroundImage = 'url(' + logoUrl + ')';

		let jobListingInfoDiv = document.createElement('div');
		jobListingInfoDiv.classList.add('jobListingInfo');

		jobContainerDiv.appendChild(logoDiv);
		jobContainerDiv.appendChild(jobListingInfoDiv);

		let jobCompanyHeader = document.createElement('div');
		jobCompanyHeader.classList.add('jobCompanyHeader');
		jobListingInfoDiv.appendChild(jobCompanyHeader);

		let jobCompanyName = document.createElement('div');
		jobCompanyName.classList.add('jobCompanyName');
		jobCompanyName.innerText = jobDatabase[i].company_name;
		jobCompanyHeader.appendChild(jobCompanyName);

		let jobPositionTitle = document.createElement('div');
		jobPositionTitle.classList.add('jobPositionTitle');
		jobPositionTitle.innerText = jobDatabase[i].title;
		jobListingInfoDiv.appendChild(jobPositionTitle);
	}
}
