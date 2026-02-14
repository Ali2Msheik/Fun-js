console.log("GRADE CALCULATOR V2.0");
let G = [85, 92, 78];

function calculateAverge(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i = i + 1) {
    sum = sum + grades[i];
  }
  let average = Number((sum / grades.length).toFixed(2));
  return average;
}

function getLetterGrade(percentage) {
  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80) {
    return "B";
  } else if (percentage >= 70) {
    return "C";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function analyzeStudent(name, grades) {
  let average = calculateAverge(grades);
  let letterGrade = getLetterGrade(average);
  let status;

  if (letterGrade === "A" || letterGrade === "B" || letterGrade === "C") {
    status = "Pass";
  } else if (letterGrade <= "D") {
    status = "At Risk";
  } else {
    status = "Fail";
  }
  let analyze = {
    name: name,
    average: average,
    letterGrade: letterGrade,
    status: status,
  };
  console.log(analyze);
}

function CalculateClassStats(students) {
  let average = 0;
  let grades;
  let minGrade = students[0].grade;
  let maxGrade = students[0].grade;
  for (let i = 0; i < students.length; i = i + 1) {
    if (minGrade > students[i].grade) {
      minGrade = students[i].grade;
    }
    if (maxGrade < students[i].grade) {
      maxGrade = students[i].grade;
    }
  }
  for (let j = 0; j < students.length; j = j + 1) {
    grades = grades + students[j].grade;
  }
  average = grades / students.length;

  let object = {
    average: average,
    lowestGrade: minGrade,
    highestGrade: maxGrade,
  };

  return object;
}

function applyGradeCurve(grades, curvePoints) {
  if (grades.length === 0) {
    return [];
  }

  let firstGrade = grades[0] + curvePoints;
  let restGrades = grades.slice(1);

  return [firstGrade, ...applyGradeCurve(restGrades, curvePoints)];
}
