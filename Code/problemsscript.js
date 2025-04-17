
async function fetchProblems() {
    try {
        const response = await fetch('problems.json'); 
        const problems = await response.json();
        displayProblems(problems);
    } catch (error) {
        console.error("Error fetching problems:", error);
    }
}

function displayProblems(problems) {
    const problemListSection = document.getElementById('problem-list-section');

    problems.forEach(problem => {
        const problemCard = document.createElement('div');
        problemCard.className = 'problem-card';

        const title = document.createElement('h3');
        title.innerText = problem.title;
        problemCard.appendChild(title);

        const difficulty = document.createElement('span');
        difficulty.className = `difficulty ${problem.difficulty.toLowerCase()}`;
        difficulty.innerText = problem.difficulty;
        problemCard.appendChild(difficulty);

        const description = document.createElement('p');
        description.innerText = problem.description;
        problemCard.appendChild(description);

        const viewLink = document.createElement('a');
        viewLink.href = `problem.html?id=${problem.id}`;
        viewLink.innerText = "View Problem";
        problemCard.appendChild(viewLink);

        problemListSection.appendChild(problemCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('problem-list-section')) {
        fetchProblems();
    }
});


async function fetchProblems() {
    try {
        const response = await fetch('problems.json'); 
        const problems = await response.json();
        displayProblems(problems);
    } catch (error) {
        console.error("Error fetching problems:", error);
    }
}

function displayProblems(problems) {
    const problemListSection = document.getElementById('problem-list-section');

    problems.forEach(problem => {
        const problemCard = document.createElement('div');
        problemCard.className = 'problem-card';

        const title = document.createElement('h3');
        title.innerText = problem.title;
        problemCard.appendChild(title);

        const difficulty = document.createElement('span');
        difficulty.className = `difficulty ${problem.difficulty.toLowerCase()}`;
        difficulty.innerText = problem.difficulty;
        problemCard.appendChild(difficulty);

        const description = document.createElement('p');
        description.innerText = problem.description;
        problemCard.appendChild(description);

        const viewLink = document.createElement('a');
        viewLink.href = `problem.html?id=${problem.id}`;
        viewLink.innerText = "View Problem";
        problemCard.appendChild(viewLink);

        problemListSection.appendChild(problemCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('problem-list-section')) {
        fetchProblems();
    }
});
