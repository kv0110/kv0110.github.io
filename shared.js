//import #include style.css
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";  // Replace with your CSS file path
document.head.appendChild(link);

/*function indexOfFirstNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {  // Check if the character is a digit
            return i;
        }
    }
    return -1; // Return -1 if no number is found
}

function getLocs() {
    let locs = [];
    let names = [];
    let table = document.getElementById("myTab");
    //let copyTable = getTab();
    let tr = table.getElementsByTagName("tr"); //copyTable should be table

    for (var i = 0; i < tr.length; i++) {
        console.log(`KAVYA'S LOG MESSAGE: ${i} XX ${tr[i].style} XX`);
        //if (tr[i].style.display != "none") { // Only consider visible rows TYPE ERROR? command option i to check console
            td = tr[i].getElementsByTagName("td")[6];
            let name = tr[i].getElementsByTagName("td")[1];

            if (td) {
                let loc = td.textContent || td.innerText;
                let nm = name.textContent || name.innerText;

                console.log(`Row ${i}:`, tr[i]);  // Log the row itself
                console.log(`Cell in row ${i}, column 7:`, td);  // Log the 7th column (td)

                if (indexOfFirstNumber(loc) != -1) {
                    locs.push(nm, (loc.substring(indexOfFirstNumber(loc))).trim());
                }
            }

            if (name) {
                let locName = name.textContent || name.innerText;
                console.log(`KAVYA'S NAME MESSAGE: ${i} XX ${locName} XX`);
                names.push(locName);
            }
       // }
    }
    console.log("Placing markers for the following locations:", locs);
    return locs;
}
*/
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

//file:///Users/kavyamridulavenkatesan/Github/passproj/kv0110.github.io/resource_table.html#
//file:///Users/kavyamridulavenkatesan/Github/passproj/kv0110.github.io/map.html#