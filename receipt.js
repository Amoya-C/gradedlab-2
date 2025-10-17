window.onload = function () {
    const button = document.getElementById("generate-receipt");
 

button.onclick = function (){
    let tenant = document.getElementById("tName").value;
    let landlord = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;
    let payment = document.getElementById("paymentMethod").value;
    let dateFrom = document.getElementById("periodFrom").value;
    let dateTo = document.getElementById("periodTo").value;
    let receipt = document.getElementById("receiptID").value;
    let signature = document.getElementById("signature").value;
    let email = document.getElementById("email").value;
    let unit = document.getElementById("unit").value;
    let number = document.getElementById("number").value;
    let date = document.getElementById("pDate").value;
    

    if (tenant==0 || landlord==0 || address==0 || amount==0 || payment==0 || 
        dateFrom==0|| dateTo==0 || receipt==0 || signature==0 ||
    email==0 || unit==0 || number==0 || date==0) {
            window.alert("Please fill out all questions");
    }

    let output = `
        <div class="receipt-class">
        <h1><strong>Rent Receipt</strong></h1>
        <p><strong>Tenant:</strong> ${tenant}</p>
        <p><strong>Landlord:</strong> ${landlord}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Payment Method:</strong> ${payment}</p>
        <p><strong>Date:</strong> ${dateFrom} - ${dateTo}</p>
        <p><strong>Receipt No:</strong> ${receipt}</p>
        </div>
    `;
    document.getElementById("receiptOut").innerHTML = output;
    };
};

document.getElementById("save").onclick = function () {
    const receipt = document.getElementById("receiptOut").innerHTML;
    const blob = new Blob([receipt], {type: "text"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.text";
    link.click();
};

button.onclick = function () {
        alert("You clicked: " + button.value);
    };
