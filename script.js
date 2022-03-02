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

async function getFiveJobs(jobArray) {
	for (let i = 0; i < 5; i++) {
		jobDatabase.push(jobArray[i]);
		// titles = jobDatabase.
	}
	// console.log(JSON.parse(JSON.stringify(jobDatabase)));
	jobListings = jobDatabase;
	console.log(jobListings);
	// return (jobListings = jobDatabase);
}

// console.log(getAPI());
getAPI().then((data) => getFiveJobs(data['jobs']).then(displayJobBoard()));

// getAPI().then((data) => console.log(data['job-count']));

// console.log(jobDatabase);

function displayJobBoard() {
	// getFiveJobs(data['jobs']);
	for (let i = 0; i < jobDatabase.length; i++) {
		let titleDiv = document.createElement('div');
		let containerDiv = document.createElement('div');
		containerDiv.classList.add('job-container');
		containerDiv.appendChild(titleDiv);

		// getFiveJobs();
		titleDiv.innerText = jobDatabase[i].title;
		document.getElementById('jobListings').appendChild(containerDiv);
		titleDiv.innerText = jobDatabase[i].company_name;
		// document.getElementById('jobListings').appendChild(div);
	}
	console.log(jobDatabase[1]);
}
