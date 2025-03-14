let desired = [
    {
        contactno: "917875770371",
        0: 27609,
        1: 120284,
        2: 117783,
        3: 20994
    }
];

let current = [
    {
        contactno: "917875770371",
        0: 14355,
        1: 50439,
        2: 98807,
        3: 123065
    }
];

desired.forEach(des =>{
    console.log(des.contactno);
    
})

// Function to calculate adjustments needed
function calculateAdjustments(desired, current) {
    let adjustments = [];

    

    // desired.forEach(des => {

    //     let cur = current.find(c => c.contactno === des.contactno);
    //     if (!cur) return; // Skip if no matching contactno found

    //     let changes = { contactno: des.contactno };

    //     // Iterate over readstatuses 0, 1, 2, 3
    //     [0, 1, 2, 3].forEach(status => {
    //         let diff = des[status] - cur[status]; // Calculate the difference

    //         if (diff !== 0) {
    //             changes[status] = diff; // Store how much to add/remove
    //         }
    //     });

    //     adjustments.push(changes);
    // });

    return adjustments;
}

// Get the required changes
let adjustments = calculateAdjustments(desired, current);

// console.log(adjustments);


