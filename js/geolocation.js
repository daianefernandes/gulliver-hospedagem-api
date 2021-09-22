//verificando geolocalização

const geolocationVerify = () => {
    const success = (position) => {
        const divCoordinates = document.getElementById("coordinates");
        const divMap = document.getElementById("map");
        const { latitude , longitude } = position.coords;
        
        const map = new Image();
        map.src = `https://www.mapquestapi.com/staticmap/v5/map?key=AiGieBGXcABDbOM4btILi2sK7mmcxcTV&locations=${latitude},${longitude}&size=400,300`;
        divMap.appendChild(map);
    };

    const errorPosicion = (error) => {
        const divCoordinates = document.getElementById("coordinates");
        console.log(error.code, error.message);
    };

    navigator.geolocation.getCurrentPosition( success , errorPosicion );
};

const verifyNavigator = () => {
    if(!navigator.geolocation){
        const divCoordinates = document.getElementById("coordinates");
        console.log("localização não suportada pelo navegador")
        return;
    }
    geolocationVerify();
};

verifyNavigator();