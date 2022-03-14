const tbody = document.getElementById("tbodyUserList");
const loading = document.getElementById("loading");

window.onload = () => {
    getApiUserList();
}

const getApiUserList = () => {
    showLoading();
    //axios
    removeLoading();
}

