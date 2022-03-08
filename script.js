let response = fetch('https://remotive.io/api/remote-jobs');
const api_url = 'https://remotive.io/api/remote-jobs';
let jobDatabase = [];
// let titles = [];
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
	'junior',
	'senior',
];

async function getAPI() {
	const response = await fetch('https://remotive.io/api/remote-jobs');

	let data = await response.json();
	return data;
}

async function getJobs(jobArray) {
	for (let i = 0; i < 100; i++) {
		jobDatabase.push(jobArray[i]);
		// titles = jobDatabase.
	}
	// console.log(JSON.parse(JSON.stringify(jobDatabase)));
	jobListings = jobDatabase;
	console.log(jobListings);
	// return (jobListings = jobDatabase);
}

getAPI().then((data) => getJobs(data['jobs']).then(displayJobBoard()));

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

function changeToLowercase(jobFilters) {
	let lowercaseFilters = jobFilters.map((jobFilters) =>
		jobFilters.toLowerCase()
	);
	return lowercaseFilters;
}

function createDiv(tagName) {
	div = document.createElement('div');
	div.classList.add(tagName);
	return div;
}

function createLink(tagName) {
	a = document.createElement('a');
	a.href = tagName;
	a.setAttribute('id', 'jobUrl');
	// a.classList.add(tagName);
	return a;
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
}

function fromCurrentTime(jobPublicationDate) {
	let days = Math.floor(convertTimeToDays(jobPublicationDate));

	if (days <= 0) return 'Today';
	else if (days > 0 && days < 7) return days + 'd ago';
	else if (days >= 7 && days <= 28) return Math.floor(days / 7) + 'w ago';
	else if (days >= 29) return Math.floor(days / 29) + 'm ago';
}

function displayJobBoard() {
	for (let i = 0; i < jobDatabase.length; i++) {
		let jobCardContainer = createDiv('jobCardContainer');
		let jobUrl = createLink(jobDatabase[i].url);
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
		// jobUrl.innerText = jobDatabase[i].url;

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

		jobCardContainer.append(jobLogo, jobListingInfo);

		jobListingInfo.appendChild(jobCompanyHeader);

		jobCompanyHeader.appendChild(jobCompanyName);
		if (jobPublishDate.innerText == 'Today') {
			jobCompanyHeader.appendChild(jobNewPublication);
		}

		jobListingInfo.appendChild(jobUrl);
		jobUrl.appendChild(jobPositionTitle);

		jobListingInfo.appendChild(jobDemographics);

		jobDemographics.append(jobPublishDate, jobPositionType, jobRegion);

		jobListingInfo.appendChild(jobFilterTags);

		let jobFiltersArray = [];
		jobFiltersArray = jobDatabase[i].tags;
		const lowercaseFilters = changeToLowercase(jobFiltersArray);

		let commonTags = getCommonValues(jobTags, lowercaseFilters);
		createFilterTags(commonTags, jobFilterTags);
	}
}
