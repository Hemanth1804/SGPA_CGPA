function calculate_cgpa() {
    let n1 = parseInt(document.getElementById("sem1").value);
    let n2 = parseInt(document.getElementById("sem2").value);
    let n3 = parseInt(document.getElementById("sem3").value);
    let n4 = parseInt(document.getElementById("sem4").value);
    let n5 = parseInt(document.getElementById("sem5").value);
    let n6 = parseInt(document.getElementById("sem6").value);
    let n7 = parseInt(document.getElementById("sem7").value);
    let n8 = parseInt(document.getElementById("sem8").value);
    let count = 0;

    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10 || n5 < 0 || n5 > 10 || n6 < 0 || n6 > 10 || n7 < 0 || n7 > 10 || n8 < 0 || n8 > 10) {
        alert("You entered invalid marks");
        return; // Exit the function if any invalid marks are detected
    }

    if (n1 > 0 && n1 <= 10)
         count=count+1;
    if (n2 > 0 && n2 <= 10) 
        count=count+1;
    if (n3 > 0 && n3 <= 10)
         count=count+1;
    if (n4 > 0 && n4 <= 10) 
        count=count+1;
    if (n5 > 0 && n5 <= 10) 
        count=count+1;
    if (n6 > 0 && n6 <= 10) 
        count=count+1;
    if (n7 > 0 && n7 <= 10) 
        count=count+1;
    if (n8 > 0 && n8 <= 10) 
        count=count+1;

    let totalMarks = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8;
    let calculate;
        calculate = totalMarks/count;

    if (calculate) {
        document.getElementById("result_cgpa").value = "Congratulations! You got " + calculate.toFixed(2) + " CGPA";
    } else {
        document.getElementById("result_cgpa").value = "Enter your marks properly. Incomplete semesters' marks should be zero(0).";
    }
}
