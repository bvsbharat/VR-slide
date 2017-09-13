<template>
  <div class="view-home">
    
<div id='map' style="display: none;"></div>

<!--Div for legend-->
<div id='state-legend' class='legend' style="display: none;">
    <h3>Georgia State, US</h3>
    <h4>Literacy Indicator</h4>
    <div><span style='background-color: #FF0000'></span>1 - Low</div>
    <div><span style='background-color: #008000'></span>2 - Medium</div>
    <div><span style='background-color: #FFFF00'></span>3 - High</div>
</div>
<a-scene>
    <!--<a-assets>
        <a-asset-item id="georgia-obj" src="3DModel/Georgia.obj"></a-asset-item>
        <a-asset-item id="georgia-mtl" src="3DModel/Georgia.mtl"></a-asset-item>
    </a-assets>
    <a-entity obj-model="obj: #georgia-obj; mtl: #georgia-mtl"></a-entity>-->
    <a-sky color="#000"></a-sky>
    <a-entity position="0 0 20">
        <a-camera></a-camera>
    </a-entity>
    <a-assets>
        <video id="start01" autoplay loop="false" src="static/Start.mp4"></video>
    </a-assets>
  <!-- Using the asset management system. -->
    <a-video id="video1" class="video" src="#start01" width="16" height="12" position="0 1.5 10"></a-video>   
    <a-entity id="link1" onClick="location.href='#/hashtag'"></a-entity>
    <a-image id="image" width="26" height="20" position="-9 4 -21" src="" ></a-image>
    <a-image id="timeline_Insights" width="15" height="15" position="13 6 -20" src="" ></a-image>
    <!--<a-entity id="year" text="value: Hello World;" position="40 -60 -50"></a-entity>
    <a-text value="Now Interactable" geometry="primitive:plane" position="40 -60 -50"></a-text>-->
    
    <a-entity id="2010"
    position="-15 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2010">
    </a-entity>

    <a-entity id="2011"
    position="-12 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2011">
    </a-entity>

    <a-entity id="2012"
    position="-9 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2012">
    </a-entity>

    <a-entity id="2013"
    position="-6 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2013">
    </a-entity>

    <a-entity id="2014"
    position="-3 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2014">
    </a-entity>

    <a-entity id="2015"
    position="0 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2015">
    </a-entity>

    <a-entity id="2016"
    position="3 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2016">
    </a-entity>

    <a-entity id="2017"
    position="6 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2017">
    </a-entity>

    <a-entity id="2018"
    position="9 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2018">
    </a-entity>

    <a-entity id="2019"
    position="12 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2019">
    </a-entity>

    <a-entity id="2020"
    position="15 -5 -10"
    scale="1 1 1"
    material="color: blue;"
    text-geometry="value: 2020">
    </a-entity>
  
</a-scene>
  </div>
</template>

<script>

  import GradientCanvas from 'components/GradientCanvas'

  export default {
    name: 'Home',
    data () {
      return {
        showLogo: false
      }
    },
    components: {
      GradientCanvas
    },
    beforeRouteLeave (to, from, next) {
      this.showLogo = false
      setTimeout( () => {
        next()
      }, 1 * 1000)
    },
    beforeDestroy () {
      this.showLogo = false
    },
    mounted () {


     // redirect to hashtag view
      setTimeout( () => {
        this.$router.push({ path: '/dashboard' })
      }, 4 * 8000)

      var scene = document.querySelector("a-scene");
    var vid = document.getElementById("start01");

    if (scene.hasLoaded) {
      run();
    } else {
      scene.addEventListener("loaded", run);
    }

    function run () {
        scene.querySelector(".a-enter-vr-button").addEventListener("click", function(e){
            console.log("VR Mode entered");
            this.style.display = "none";
            vid.play();
        }, false);
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnlyb2tpbjEzIiwiYSI6ImNqNzljMG9mcDAwNmsycm10Y2NjM3N1aHoifQ.BRQyZhWWp_bL3G5TYX6I8Q';
    var jsonDatafile = 'Geojson/georgia2010.geo.json';
    var previousyear = jsonDatafile;
    var previousSelectedYear = '2010';
    var firstload = 1;
    var success = false;
    var selectedyear = 2010;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/harryrokin13/cj7a7l2ir8tm52rmt25oev61v',
        center: [-83, 33],
        zoom: 4.4,
        minZoom: 4.7
    });
    map.on('load', function () {
        var year=document.getElementById(selectedyear);
        var anim=document. createElement('a-animation');
        anim.setAttribute('attribute','scale');
        anim.setAttribute('to','2 2 1');
        var coloranim=document.createElement('a-animation');
        coloranim.setAttribute('attribute','material.color');
        coloranim.setAttribute('to','white');
        year.appendChild(anim);
        year.appendChild(coloranim);

        var c = document.querySelector('#map canvas');
        var img = c.toDataURL('image/png');
        var texture = document.getElementById('image');
        texture.setAttribute('src', img);
        var yeartexture = document.getElementById('timeline_Insights');
        var yearImageloc = 'static/Timeline_Images/'+selectedyear+'.jpg';
        yeartexture.setAttribute('src', yearImageloc);
    });

    var video = document.querySelector('#start01');
    video.addEventListener('ended', function (evt) { 
        //video.parentNode.removeChild(video);
        var videoframe = document.getElementById('video1');
        videoframe.parentNode.removeChild(videoframe);

        console.log("video stopped");
        var counter = 0;
        var i = setInterval(function(){
            document.getElementById('link1').click();
            //document.querySelector('a-link').navigate('VR-slide/index.html');
            //var currentJsonFile = 'Geojson/georgia'+selectedyear+'.geo.json';
            success = loadMap(selectedyear);
            if(success == true)
            {
                selectedyear +=1;
                counter +=1;
            }
            success = false;
            if(counter === 11) {
                clearInterval(i);
            }
        }, 5000);
    });

    /*$('#dates a').click(function(event){
                event.preventDefault();
                // first vars
                var selectedyear = $(this).text();
                $('#dates a').removeClass('selected');
                $(this).addClass('selected');
                var currentJsonFile = 'Geojson/georgia'+selectedyear.trim()+'.geo.json';
                loadMap(currentJsonFile,selectedyear);
    });*/

    function loadMap(selectedyear){
        console.log("in load map. counter: "+firstload);
        var year=document.getElementById(selectedyear);
            var anim=document.createElement('a-animation');
            anim.setAttribute('attribute','scale');
            anim.setAttribute('to','2 2 1');
            var coloranim=document.createElement('a-animation');
            coloranim.setAttribute('attribute','material.color');
            coloranim.setAttribute('to','white');
            year.appendChild(anim);
            year.appendChild(coloranim);
        
        var layer = 'georgia_'+previousSelectedYear;
        if(firstload>1)
        {
           // map.getLayer(previousyear).layout.visibility
           /*var visibility = map.getLayer(layer).layout.visibility;

            if (visibility === 'visible') 
                map.getLayer(layer).layout.visibility ='none';*/
            console.log(layer);
            var visibility = map.getLayoutProperty(layer, 'visibility');

            if (visibility === 'visible') 
                map.setLayoutProperty(layer, 'visibility', 'none');
            
            var prev = document.getElementById(previousSelectedYear);
            var anim1=document. createElement('a-animation');
            anim1.setAttribute('attribute','scale');
            anim1.setAttribute('to','1 1 1');
            prev.appendChild(anim1);
            var coloranim=document.createElement('a-animation');
            coloranim.setAttribute('attribute','material.color');
            coloranim.setAttribute('to','blue');
            prev.appendChild(coloranim);
            
          }
          previousSelectedYear = selectedyear;


            var c = document.querySelector('#map canvas');
            var img = c.toDataURL('image/png');
            var texture = document.getElementById('image');
            texture.setAttribute('src', img);
            var yeartexture = document.getElementById('timeline_Insights');
            var yearImageloc = 'static/Timeline_Images/'+selectedyear+'.jpg';
            yeartexture.setAttribute('src', yearImageloc);
        //$.getJSON(jsonfile, function(jsonData) {
        
            /*map.addLayer({
                'id': jsonfile,
                'type': 'fill',
                'source': {
                    'type': 'geojson',
                    'data': jsonData
                  },
                'paint': {

                    'fill-color': {
                        property: 'Mom_no_Diploman_HS',
                        stops: [
                            [0, '#F2F12D'],
                            [5, '#EED322'],
                            [10, '#E6B71E'],
                            [15, '#DA9C20'],
                            [20, '#CA8323'],
                            [25, '#B86B25'],
                            [30, '#A25626'],
                            [40, '#8B4225'],
                            [50, '#723122']
                        ]
                    },
                    'fill-opacity': 0.5,
                    'fill-outline-color':'#000'
                }, 
            }); */
        
           

            //document.getElementById('image').appendChild(texture);
            // When a click event occurs on a feature in the states layer, open a popup at the
            // location of the click, with description HTML from its properties.
            /*map.on('click', jsonfile, function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.name)
                    .addTo(map);
            });

            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', jsonfile, function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', jsonfile, function () {
                map.getCanvas().style.cursor = '';
            });*/
            

        //});
        //previousyear = jsonfile;    

        firstload +=1;
        return true;
    }

    }
  }

</script>


<style lang="scss" scoped>
    .legend {
        background-color: #d3d3d3;
        border-radius: 3px;
        bottom: 30px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.10);
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
        padding: 10px;
        position: absolute;
        right: 10px;
        z-index: 1;
    }

    .legend h4 {
        margin: 0 0 10px;
    }

    .legend div span {
        border-radius: 50%;
        display: inline-block;
        height: 10px;
        margin-right: 5px;
        width: 10px;
    }

    .mapboxgl-popup {
        max-width: 400px;
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    }
</style>
