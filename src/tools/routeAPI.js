let routeAPI;
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === "prod"){
    routeAPI = "https://api.braquage-royale.xyz/";
}else{
    routeAPI = "https://beta.api.braquage-royale.xyz/";
}
export default routeAPI
