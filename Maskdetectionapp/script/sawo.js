var config = {
    // should be same as the id of the container created on 3rd step
    containerID: "sawo-container",
    // can be one of 'email' or 'phone_number_sms'
    identifierType: "phone_number_sms",
    // Add the API key copied from 2nd step
    apiKey: "b0282f04-7307-4263-a694-744159dfdc8a",
    // Add a callback here to handle the payload sent by sdk
    onSuccess: (payload) => {
        console.log(payload)
        window.location.replace("Maskdetectionpage.html");
    },
};
var sawo = new Sawo(config);
sawo.showForm();