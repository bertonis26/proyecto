function iniciarMap(){
    var coord = {lat:-1.4363119 ,lng: -70.7286072};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 30,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}