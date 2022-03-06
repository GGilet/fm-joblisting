let response = fetch('https://remotive.io/api/remote-jobs');
const api_url = 'https://remotive.io/api/remote-jobs';
let jobDatabase = [];
let titles = [];
const jobTags = [
	'it',
	'devops',
	'css',
	'html',
	'sql',
	'nosql',
	'js',
	'javascript',
	'react',
	'node.js',
	'node',
	'golang',
	'rest',
	'ruby',
	'python',
	'aws',
	'php',
	'security',
];

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
	for (let i = 0; i < 500; i++) {
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

// function createDiv() {
// 	return document.createElement('div');
// }

function getCommonValues(baseArray, newArray) {
	let commonTags = newArray.filter((x) => baseArray.indexOf(x) !== -1);
	return commonTags;
}

function createFilterTags(commonTags, jobFilterTags) {
	for (let i = 0; i < commonTags.length; i++) {
		let jobFilters = document.createElement('button');
		jobFilters.setAttribute('type', 'button');

		jobFilters.innerText = commonTags[i];
		jobFilterTags.appendChild(jobFilters);
	}
}

function createDiv(tagName) {
	div = document.createElement('div');
	div.classList.add(tagName);
	return div;
}

function createButton(tagName) {
	btn = document.createElement('button');
	btn.classList.add(tagName);
	return btn;
}

function convertTimeToDays(jobPublicationDate) {
	let today = new Date();
	jobPublicationDate = new Date(jobPublicationDate);

	let days = Math.floor((today - jobPublicationDate) / 1000 / 60 / 60 / 24);

	return days;
	// return days;

	// console.log(today - jobPublicationDate);
}

function fromCurrentTime(jobPublicationDate) {
	let days = Math.floor(convertTimeToDays(jobPublicationDate));
	// for (let i = 0; i < 31; i++) {
	// 	if ((days = i)) {
	// 		console.log('Hours ago');
	// 		break;
	// 	}
	// }
	// console.log(days);

	if (days <= 0) {
		return 'Today';
	} else if (days > 0 && days < 7) {
		return days + 'd ago';
	} else if (days >= 7 && days <= 28) {
		return Math.floor(days / 7) + 'w ago';
	} else if (days >= 29) {
		return Math.floor(days / 29) + 'm ago';
	}
}

function displayJobBoard() {
	// getFiveJobs(data['jobs']);
	for (let i = 0; i < jobDatabase.length; i++) {
		// let jobListings = document.getElementById('jobListings');

		let jobCardContainer = createDiv('jobCardContainer');
		let jobLogo = createDiv('jobLogo');
		let jobListingInfo = createDiv('jobListingInfo');
		let jobCompanyHeader = createDiv('jobCompanyHeader');
		let jobCompanyName = createDiv('jobCompanyName');
		let jobPositionTitle = createDiv('jobPositionTitle');
		let jobDemographics = createDiv('jobDemographics');
		let jobPublishDate = createDiv('jobPublishDate');
		let jobPositionType = createDiv('jobPositionType');
		let jobRegion = createDiv('jobRegion');
		let jobFilterTags = createDiv('jobFilterTags');
		let jobNewPublication = createDiv('jobNewPublication');

		jobCardContainer.setAttribute('id', 'jobCardContainer');

		document.getElementById('jobListings').appendChild(jobCardContainer);

		let logoUrl = jobDatabase[i].company_logo;
		jobLogo.style.backgroundImage = 'url(' + logoUrl + ')';
		jobCompanyName.innerText = jobDatabase[i].company_name;
		jobPositionTitle.innerText = jobDatabase[i].title;
		jobPublishDate.innerText = fromCurrentTime(jobDatabase[i].publication_date);
		jobPositionType.innerText = jobDatabase[i].job_type;
		jobNewPublication.innerText = 'New';

		if ((jobPositionType.innerText = 'full_time')) {
			jobPositionType.innerText = 'Full Time';
		} else if (
			(jobPositionType.innerText = 'freelance') ||
			(jobPositionType.innerText = 'contractor')
		) {
			jobPositionType.innerText = 'Contractor/Freelance';
		} else {
			jobPositionType.innerText = 'N/A';
		}

		jobRegion.innerText = jobDatabase[i].candidate_required_location;

		//Job Listing Info
		// jobListingInfoDiv.classList.add('jobListingInfo');

		jobCardContainer.append(jobLogo, jobListingInfo);

		jobListingInfo.appendChild(jobCompanyHeader);

		jobCompanyHeader.appendChild(jobCompanyName);
		if (jobPublishDate.innerText == 'Today') {
			jobCompanyHeader.appendChild(jobNewPublication);
		}

		jobListingInfo.appendChild(jobPositionTitle);

		jobListingInfo.appendChild(jobDemographics);

		jobDemographics.append(jobPublishDate, jobPositionType, jobRegion);

		jobListingInfo.appendChild(jobFilterTags);

		let jobFiltersArray = [];
		jobFiltersArray = jobDatabase[i].tags;
		const lowercaseFilters = jobFiltersArray.map((jobFiltersArray) =>
			jobFiltersArray.toLowerCase()
		);

		let commonTags = getCommonValues(jobTags, lowercaseFilters);
		createFilterTags(commonTags, jobFilterTags);
	}
}
