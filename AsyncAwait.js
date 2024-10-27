const fetchData=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched from the api");
        },2000);
    })
}
const getData=async()=>{
    console.log("Fetching data........");
    const data=await fetchData();
    console.log(data);
}
getData();