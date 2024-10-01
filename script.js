/*document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Hide all sections except the first one (Home section)
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            // Get the section id from the data-section attribute
            const sectionId = this.getAttribute('data-section');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.style.display = 'block';
            }
        });
    });
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');
    const speed = 50; // lower value = faster

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / (3000 / speed);

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('fcvygbj');
    const formData = new FormData(form);

    const details = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        position: formData.get('position')
    };

    const emailBody = `
        Name: ${details.fullName}\n
        Email: ${details.email}\n
        Position: ${details.position}
    `;

    window.location.href = `mailto:chrishalden11@gmail.com?subject=Job Application&body=${encodeURIComponent(emailBody)}`;
}

/* Products Section */
function showForm(button, productName, productDescription) {
    const row = button.parentElement.parentElement;
    
    const formHTML = `
        <td colspan="4">
            <h2>${productName}</h2>
            <p>${productDescription}</p>
            <form action="https://formsubmit.co/33ff77673156c36795e39b4d279c5c28" method="POST" onsubmit="submitQuote(event)">
                
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="text" name="address" placeholder="Your Address" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <input type="tel" name="whatsapp" placeholder="WhatsApp Number" required>
                <input type="text" name="location" placeholder="Your Location" required>
                <input type="text" name="code" placeholder="Product Code" required>
                <input type="number" name="quantity" placeholder="Quantity" required>
                <input type="submit" value="Submit">
            </form>
        </td>
    `;
    
    row.innerHTML = formHTML;
}

/*function submitQuote(event) {
    event.preventDefault();
    alert('Your quote request has been submitted!');
}
*/




function redirectToCalculator() {
    window.location.href="power.html"
}




/*                  Power  Calculator Section                  */

// Appliance details including default capacity in Watts
const gerguwfwfgbhtegtwecvs = [
    { name: "Incandescent Bulb", types: ["60W", "100W"], capacity: [60, 100] },
    { name: "Cooler", types: ["Small", "Large"], capacity: [200, 400] },
    { name: "CFL", types: ["15W", "20W"], capacity: [15, 20] },
    { name: "LED Lamp", types: ["9W", "12W"], capacity: [9, 12] },
    { name: "Tube Light", types: ["36W", "40W"], capacity: [36, 40] },
    { name: "Fan", types: ["Ceiling", "Table"], capacity: [75, 50] },
    { name: "Desktop Computer", types: ["Standard", "Gaming"], capacity: [300, 500] },
    { name: "Laptop", types: ["Standard", "Gaming"], capacity: [60, 150] },
    { name: "Window AC", types: ["1 Ton", "1.5 Ton"], capacity: [1200, 1800] },
    { name: "Split AC", types: ["1 Ton", "1.5 Ton"], capacity: [1200, 1800] },
    { name: "LCD TV", types: ["32 inch", "42 inch"], capacity: [120, 150] },
    { name: "LED TV", types: ["32 inch", "50 inch"], capacity: [90, 150] },
];

// Battery and UPS options
const qehrgufydegbcdebwewg = [
    { name: "150 Ah Battery", capacityWh: 1800 * 12 }, // Watt-hours (150Ah * 12V = 1800Wh)
    { name: "200 Ah Battery", capacityWh: 2400 * 12 }, // Watt-hours (200Ah * 12V = 2400Wh)
];
const fqwerytgjergfbwefghq = [
    { name: "600W UPS", power: 600 },
    { name: "1000W UPS", power: 1000 },
    { name: "2000W UPS", power: 2000 },
];

// Function to dynamically populate the table with appliances
function wrtfdwegfsergfwdfvbwe() {
    const terwfbgwtgfgjbfefqeg = document.getElementById('terwfbgwtgfgjbfefqeg');

    gerguwfwfgbhtegtwecvs.forEach((appliance) => {
        const row = document.createElement('tr');

        // Appliance Name
        const tdname = document.createElement('td');
        tdname.className = 'tdfwbgrwgfbetvwef';
        tdname.textContent = appliance.name;
        row.appendChild(tdname);

        // Type Selector
        const tdtype = document.createElement('td');
        tdtype.className = 'tdfwbgrwgfbetvwef';
        const typeSelect = document.createElement('select');
        typeSelect.className = 'qeghfrwtfbtgfvweg';
        const option = document.createElement('option');
        option.value = 0;
        option.textContent = "Select";
        typeSelect.appendChild(option);
        appliance.types.forEach((type, i) => {
            const opt = document.createElement('option');
            opt.value = appliance.capacity[i];
            opt.textContent = type;
            typeSelect.appendChild(opt);
        });
        tdtype.appendChild(typeSelect);
        row.appendChild(tdtype);

        // Quantity Input
        const tdquantity = document.createElement('td');
        tdquantity.className = 'tdfwbgrwgfbetvwef';
        const quantityInput = document.createElement('input');
        quantityInput.className = 'rqevghrfvwegftwgwe';
        quantityInput.type = 'number';
        quantityInput.value = 0;
        tdquantity.appendChild(quantityInput);
        row.appendChild(tdquantity);

        // Capacity Display
        const tdcapacity = document.createElement('td');
        tdcapacity.className = 'tdfwbgrwgfbetvwef';
        tdcapacity.textContent = '0 W';
        typeSelect.addEventListener('change', () => {
            tdcapacity.textContent = typeSelect.value + ' W';
        });
        row.appendChild(tdcapacity);

        // Add row to table
        terwfbgwtgfgjbfefqeg.appendChild(row);
    });
}

// Function to calculate total power consumption and suggest battery & UPS
function grwjhyewfygfdwfvbfwr() {
    let totalPower = 0;

    const rows = document.querySelectorAll('#qwertyuiasdfghjklrf tbody tr');
    rows.forEach((row) => {
        const typeSelect = row.querySelector('select');
        const quantityInput = row.querySelector('input');
        const power = parseFloat(typeSelect.value);
        const quantity = parseInt(quantityInput.value, 10);
        if (!isNaN(power) && !isNaN(quantity) && power > 0 && quantity > 0) {
            totalPower += power * quantity;
        }
    });

    document.getElementById('tergwdcwwergfwerfwff').textContent = `Total Power Consumption: ${totalPower} Watts`;

    // Backup time
    const backupTime = parseFloat(document.getElementById('whjggbdewbwyuefgfegh').value);
    if (!isNaN(backupTime) && totalPower > 0) {
        const totalEnergyRequired = totalPower * backupTime; // in Watt-hours (Wh)

        // Suggest Battery and UPS
        let selectedBattery = qehrgufydegbcdebwewg.find(b => b.capacityWh >= totalEnergyRequired);
        let selectedUPS = fqwerytgjergfbwefghq.find(u => u.power >= totalPower);

        document.getElementById('wetdgfrewgrwwerefwgfw').textContent = `Suggested: ${selectedBattery?.name || "No suitable battery"} and ${selectedUPS?.name || "No suitable UPS"}`;
    } else {
        document.getElementById('wetdgfrewgrwwerefwgfw').textContent = "Please enter a valid backup time.";
    }
}

// Event listener for calculate button
document.getElementById('tegerguwfguhgbfefgwf').addEventListener('click', grwjhyewfygfdwfvbfwr);

// Populate appliance table
wrtfdwegfsergfwdfvbwe();

