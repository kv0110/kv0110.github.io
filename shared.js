function indexOfFirstNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {  // Check if the character is a digit
            return i;
        }
    }
    return -1; // Return -1 if no number is found
}

function getLocs() {
    let locs = [];
    let table = document.getElementById("myTab");
    let tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];

        if (td) {
            let loc = td.textContent || td.innerText;

            console.log(`Row ${i}:`, tr[i]);  // Log the row itself
            console.log(`Cell in row ${i}, column 7:`, td);  // Log the 7th column (td)

            if (indexOfFirstNumber(loc) != -1) {
                locs.push((loc.substring(indexOfFirstNumber(loc))).trim());
            }
        }
    }
    console.log("Placing markers for the following locations:", locs);
    return locs;
}