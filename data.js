var APP_DATA = {
  "scenes": [
    {
      "id": "0-vr_salon_01",
      "name": "VR_Salon_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.8238508289331321,
        "pitch": -0.003138599273569298,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.6518082359865183,
          "pitch": -0.32404573461817776,
          "rotation": 0,
          "target": "1-vr_yo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vr_yo",
      "name": "VR_YO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.5807186420272075,
        "pitch": 0.002610687688363811,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "SS_Tatlisu",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
